import {IonList,IonItemDivider} from '@ionic/react';
import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import MainLink from '../../components/MainLink';
import InnerLink from '../../components/InnerLink';
const _traits_combat = {title: "Combat Traits", jsx: <IonList lines="full"><MainLink to="/main/traits" className="reversed" info="Back to Traits" /><IonItemDivider className="mainItem divider"></IonItemDivider><MainLink to="/main/traits_combat_all" endem="(142 traits)" info="All Combat Traits" /><MainLink to="/main/traits_combat_off" className="indented" bottom="Affects attack rolls, damage, etc; 64 traits" info="Offense Traits" /><MainLink to="/main/traits_combat_def" className="indented" bottom="Affects armor bonuses or saving throws; 33 traits" info="Defense Traits" /><MainLink to="/main/traits_combat_init" className="indented" bottom="Affects initiative or the surprise round; 7 traits" info="Initiative Traits" /><MainLink to="/main/traits_combat_class" className="indented" bottom="Requires a class ability to function; 18 traits" info="Class-Specific Traits" /><MainLink to="/main/traits_combat_ab" className="indented" bottom="Affects a skill, feat, or ability; 32 traits" info="Skill/Feat/Ability Traits" /></IonList>};
const _traits_combat_all = {title: "All Combat Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_combat" className="reversed" info="Back to Combat Traits" /><Ability id="traitabsalombouncer-absalom-bouncer-fn1" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitabsalombouncer-absalom-bouncer-fn1"><Link to="/trait/absalom_bouncer">⮞</Link> Absalom Bouncer <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-1" id="main-traits_combat_all-fake-fn-1" data-hash-target to="main-traits_combat_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitabsalombouncer-absalom-bouncer-fn1-flavor">You learned to fight while serving as a bodyguard in the taverns of Absalom, where keeping the patrons alive through bloody bar brawls was just part of your job.</Pair>
<Pair single="benefit" id="traitabsalombouncer-absalom-bouncer-fn1-benefit">When you make an attack that deals nonlethal damage with an unarmed strike, you gain a +1 bonus on your damage roll.</Pair>
</Ability>
<Ability id="traitabsoluteloyalty-absolute-loyalty-fn2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitabsoluteloyalty-absolute-loyalty-fn2"><Link to="/trait/absolute_loyalty">⮞</Link> Absolute Loyalty <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-2" id="main-traits_combat_all-fake-fn-2" data-hash-target to="main-traits_combat_all-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traitabsoluteloyalty-absolute-loyalty-fn2-benefit">You gain the one-time ability to immediately cast <Link to="/spell/atonement">atonement</Link> upon yourself as a spell-like ability upon performing an act or being subjected to an effect that spell affects. This ability can only be used while you are acting in the service of your liege (an individual of higher social standing chosen when you take this feat).</Pair>
</Ability>
<Ability id="traitaccelerateddrinker-accelerated-drinker-fn3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitaccelerateddrinker-accelerated-drinker-fn3"><Link to="/trait/accelerated_drinker">⮞</Link> Accelerated Drinker <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-3" id="main-traits_combat_all-fake-fn-3" data-hash-target to="main-traits_combat_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitaccelerateddrinker-accelerated-drinker-fn3-flavor">You know how to drink a potion efficiently, such as by not using your hands, tossing it in the air and catching it in your mouth, or opening it with your teeth.</Pair>
<Pair single="benefit" id="traitaccelerateddrinker-accelerated-drinker-fn3-benefit">You may drink a potion as a <strong className="hl">move action</strong> instead of a standard as long as you start your turn with the potion in your hand.</Pair>
</Ability>
<Ability id="traitaldoricaution-aldori-caution-fn4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitaldoricaution-aldori-caution-fn4"><Link to="/trait/aldori_caution">⮞</Link> Aldori Caution <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-4" id="main-traits_combat_all-fake-fn-4" data-hash-target to="main-traits_combat_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitaldoricaution-aldori-caution-fn4-flavor">You learned defensive moves from Aldori trainers.</Pair>
<Pair single="benefit" id="traitaldoricaution-aldori-caution-fn4-benefit">You gain an additional +1 dodge bonus to Armor Class while you <Link to="/misc/fight_defensively">fight defensively</Link> or use the <Link to="/misc/total_defense">total defense</Link> action.</Pair>
</Ability>
<Ability id="traitambushtraining-ambush-training-fn5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitambushtraining-ambush-training-fn5"><Link to="/trait/ambush_training">⮞</Link> Ambush Training <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-5" id="main-traits_combat_all-fake-fn-5" data-hash-target to="main-traits_combat_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitambushtraining-ambush-training-fn5-flavor">You've learned that taking an enemy by surprise can end a combat before it begins.</Pair>
<Pair single="benefit" id="traitambushtraining-ambush-training-fn5-benefit">You gain a +1 trait bonus on initiative checks and a +1 trait bonus on weapon damage rolls during any surprise round in which you act.</Pair>
</Ability>
<Ability id="traitanatomist-anatomist-fn6-fn7-fn8" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitanatomist-anatomist-fn6-fn7-fn8"><Link to="/trait/anatomist">⮞</Link> Anatomist <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6" id="main-traits_combat_all-fake-fn-6" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-7" id="main-traits_combat_all-fake-fn-7" data-hash-target to="main-traits_combat_all-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-8" id="main-traits_combat_all-fake-fn-8" data-hash-target to="main-traits_combat_all-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitanatomist-anatomist-fn6-fn7-fn8-flavor">You have studied the workings of anatomy, either as a student at university or as an apprentice mortician or necromancer. You know where to aim your blows to strike vital organs.</Pair>
<Pair single="benefit" id="traitanatomist-anatomist-fn6-fn7-fn8-benefit">You gain a +1 trait bonus on all rolls made to confirm critical hits.</Pair>
</Ability>
<Ability id="traitarmedgrit-armed-grit-fn4-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitarmedgrit-armed-grit-fn4-2"><Link to="/trait/armed_grit">⮞</Link> Armed Grit <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-4.2" id="main-traits_combat_all-fake-fn-4.2" data-hash-target to="main-traits_combat_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitarmedgrit-armed-grit-fn4-2-flavor">You make an impression during a standoff.</Pair>
<Pair single="benefit" id="traitarmedgrit-armed-grit-fn4-2-benefit">As long as you have a firearm drawn, you gain a +2 trait bonus on saving throws against fear and the DCs of <Link to="/skill/intimidate">Intimidate</Link> checks to demoralize you increase by 2.</Pair>
</Ability>
<Ability id="traitarmorexpert-armor-expert-fn6-2-fn8-2-fn7-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitarmorexpert-armor-expert-fn6-2-fn8-2-fn7-2"><Link to="/trait/armor_expert">⮞</Link> Armor Expert <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.2" id="main-traits_combat_all-fake-fn-6.2" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-8.2" id="main-traits_combat_all-fake-fn-8.2" data-hash-target to="main-traits_combat_all-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-7.2" id="main-traits_combat_all-fake-fn-7.2" data-hash-target to="main-traits_combat_all-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitarmorexpert-armor-expert-fn6-2-fn8-2-fn7-2-flavor">You have worn armor as long as you can remember, either as part of your training to become a knight's squire or simply because you were seeking to emulate a hero. Your childhood armor wasn't the real thing as far as protection, but it did encumber you as much as real armor would have, and you've grown used to moving in such suits with relative grace.</Pair>
<Pair single="benefit" id="traitarmorexpert-armor-expert-fn6-2-fn8-2-fn7-2-benefit">When you wear armor of any sort, reduce that suit's armor check penalty by 1, to a minimum check penalty of 0.</Pair>
</Ability>
<Ability id="traitarmoredrider-armored-rider-fn9" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitarmoredrider-armored-rider-fn9"><Link to="/trait/armored_rider">⮞</Link> Armored Rider <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-9" id="main-traits_combat_all-fake-fn-9" data-hash-target to="main-traits_combat_all-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traitarmoredrider-armored-rider-fn9-benefit">You gain a +1 trait bonus on <Link to="/skill/ride">Ride</Link> checks, and Ride is a class skill for you. You don't take an armor check penalty on Ride checks while wearing light or medium armor.</Pair>
</Ability>
<Ability id="traitarmoredsoul-armored-soul-fn9-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitarmoredsoul-armored-soul-fn9-2"><Link to="/trait/armored_soul">⮞</Link> Armored Soul <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-9.2" id="main-traits_combat_all-fake-fn-9.2" data-hash-target to="main-traits_combat_all-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traitarmoredsoul-armored-soul-fn9-2-benefit">When wearing armor or using a shield, you gain a +1 trait bonus on saving throws against divine spells that deal damage.</Pair>
</Ability>
<Ability id="traitarodeniteswordtraining-arodenite-sword-training-fn10" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitarodeniteswordtraining-arodenite-sword-training-fn10"><Link to="/trait/arodenite_sword_training">⮞</Link> Arodenite Sword Training <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-10" id="main-traits_combat_all-fake-fn-10" data-hash-target to="main-traits_combat_all-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitarodeniteswordtraining-arodenite-sword-training-fn10-flavor">Your family has passed down training in <Link to="/faith/aroden">Aroden's</Link> favored weapon, even though the god no longer answers their prayers.</Pair>
<Pair single="benefit" id="traitarodeniteswordtraining-arodenite-sword-training-fn10-benefit">You are proficient with the <Link to="/eq-weapon/longsword">longsword</Link>. If your class grants longsword proficiency as well, you gain a +1 trait bonus on attacks of opportunity with longswords.</Pair>
</Ability>
<Ability id="traitaxetogrind-axe-to-grind-fn6-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitaxetogrind-axe-to-grind-fn6-3"><Link to="/trait/axe_to_grind">⮞</Link> Axe to Grind <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.3" id="main-traits_combat_all-fake-fn-6.3" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitaxetogrind-axe-to-grind-fn6-3-flavor">There is a fire in your heart that can't be quenched.</Pair>
<Pair single="benefit" id="traitaxetogrind-axe-to-grind-fn6-3-benefit">You gain a +1 trait bonus on damage against foes who are threatened by only you.</Pair>
</Ability>
<Ability id="traitbackformore-back-for-more-fn11" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbackformore-back-for-more-fn11"><Link to="/trait/back_for_more">⮞</Link> Back for More <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-11" id="main-traits_combat_all-fake-fn-11" data-hash-target to="main-traits_combat_all-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traitbackformore-back-for-more-fn11-benefit">Anytime an opponent confirms a critical hit against you, you gain a +2 morale bonus on attack rolls and damage rolls against that foe until the end of your next turn.</Pair>
</Ability>
<Ability id="traitbattlefielddisciple-battlefield-disciple-fn6-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbattlefielddisciple-battlefield-disciple-fn6-4"><Link to="/trait/battlefield_disciple">⮞</Link> Battlefield Disciple <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.4" id="main-traits_combat_all-fake-fn-6.4" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitbattlefielddisciple-battlefield-disciple-fn6-4-flavor">You are skilled at supporting your allies in the heat of battle.</Pair>
<Pair single="benefit" id="traitbattlefielddisciple-battlefield-disciple-fn6-4-benefit">You gain a +2 trait bonus on Heal checks made to stabilize a <Link to="/misc/dying">dying</Link> creature. In addition, when you successfully use the <Link to="/rule/aid_another_2">aid another</Link> action in combat to grant an ally a bonus on her next attack roll, the bonus you grant increases by 1.</Pair>
</Ability>
<Ability id="traitberserkerofthesociety-berserker-of-the-society-fn12-fn13" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitberserkerofthesociety-berserker-of-the-society-fn12-fn13"><Link to="/trait/berserker_of_the_society">⮞</Link> Berserker of the Society <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-12" id="main-traits_combat_all-fake-fn-12" data-hash-target to="main-traits_combat_all-fake-fn-12-target">12</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-13" id="main-traits_combat_all-fake-fn-13" data-hash-target to="main-traits_combat_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traitberserkerofthesociety-berserker-of-the-society-fn12-fn13-flavor">Your time spent as a Pathfinder has taught you new truths about the origins of the your rage ability.</Pair>
<Pair single="benefit" id="traitberserkerofthesociety-berserker-of-the-society-fn12-fn13-benefit">You may use your <em>rage</em> ability for 3 additional rounds per day.</Pair>
</Ability>
<Ability id="traitblackpowderbravado-black-powder-bravado-fn6-5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitblackpowderbravado-black-powder-bravado-fn6-5"><Link to="/trait/black_powder_bravado">⮞</Link> Black Powder Bravado <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.5" id="main-traits_combat_all-fake-fn-6.5" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitblackpowderbravado-black-powder-bravado-fn6-5-flavor">You are particularly successful when using deeds.</Pair>
<Pair single="benefit" id="traitblackpowderbravado-black-powder-bravado-fn6-5-benefit">Once per day, when you perform a deed that requires an attack roll and you miss with that roll, you can reroll it. You must take the second result even if it is worse.</Pair>
</Ability>
<Ability id="traitblackpowderfortune-black-powder-fortune-fn6-6" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitblackpowderfortune-black-powder-fortune-fn6-6"><Link to="/trait/black_powder_fortune">⮞</Link> Black Powder Fortune <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.6" id="main-traits_combat_all-fake-fn-6.6" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitblackpowderfortune-black-powder-fortune-fn6-6-flavor">You have little to fear when there's a gun in your hand.</Pair>
<Pair single="benefit" id="traitblackpowderfortune-black-powder-fortune-fn6-6-benefit">As long as you are wielding a firearm, you gain a +2 trait bonus on all saving throws against curse, fear, and emotion effects.</Pair>
</Ability>
<Ability id="traitblackpowderinterjection-black-powder-interjection-fn6-7" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitblackpowderinterjection-black-powder-interjection-fn6-7"><Link to="/trait/black_powder_interjection">⮞</Link> Black Powder Interjection <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.7" id="main-traits_combat_all-fake-fn-6.7" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitblackpowderinterjection-black-powder-interjection-fn6-7-flavor">Your confidence rises when you foil spellcasting.</Pair>
<Pair single="benefit" id="traitblackpowderinterjection-black-powder-interjection-fn6-7-benefit">Once per day, when you interrupt the casting of a spell with a firearm attack, you may regain 1 grit point.</Pair>
</Ability>
<Ability id="traitblackjacketweaponflair-blackjacket-weapon-flair-fn4-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitblackjacketweaponflair-blackjacket-weapon-flair-fn4-3"><Link to="/trait/blackjacket_weapon_flair">⮞</Link> Blackjacket Weapon Flair <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-4.3" id="main-traits_combat_all-fake-fn-4.3" data-hash-target to="main-traits_combat_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitblackjacketweaponflair-blackjacket-weapon-flair-fn4-3-flavor">You trained with the Blackjackets of Druma to make optimal use of magic weapons.</Pair>
<Pair single="benefit" id="traitblackjacketweaponflair-blackjacket-weapon-flair-fn4-3-benefit">Whenever you roll a natural 20 (the die shows a 20) on a <Link to="/rule/combat_maneuvers">combat maneuver</Link> check with a magic weapon, you gain a +5 trait bonus on the check.</Pair>
</Ability>
<Ability id="traitbladeofthesociety-blade-of-the-society-fn12-2-fn13-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbladeofthesociety-blade-of-the-society-fn12-2-fn13-2"><Link to="/trait/blade_of_the_society">⮞</Link> Blade of the Society <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-12.2" id="main-traits_combat_all-fake-fn-12.2" data-hash-target to="main-traits_combat_all-fake-fn-12-target">12</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-13.2" id="main-traits_combat_all-fake-fn-13.2" data-hash-target to="main-traits_combat_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traitbladeofthesociety-blade-of-the-society-fn12-2-fn13-2-flavor">The Society gave you access to charts detailing the weak spots of hundreds of humanoids and monsters.</Pair>
<Pair single="benefit" id="traitbladeofthesociety-blade-of-the-society-fn12-2-fn13-2-benefit">You gain a +1 trait bonus on damage rolls from sneak attacks.</Pair>
</Ability>
<Ability id="traitblightsbane-blights-bane-fn14" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitblightsbane-blights-bane-fn14"><Link to="/trait/blights_bane">⮞</Link> Blight's Bane <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-14" id="main-traits_combat_all-fake-fn-14" data-hash-target to="main-traits_combat_all-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitblightsbane-blights-bane-fn14-flavor">You are trained in the destruction of blights.</Pair>
<Pair single="benefit" id="traitblightsbane-blights-bane-fn14-benefit">You gain a +2 trait bonus to confirm critical hits against a creature that has a template affiliated with some kind of communicable condition, such as a <Link to="/template/blighted_fey">blighted fey</Link> or a <Link to="/template/fungal_creature">fungal creature</Link>.</Pair>
</Ability>
<Ability id="traitbloodthirsty-bloodthirsty-fn6-8" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbloodthirsty-bloodthirsty-fn6-8"><Link to="/trait/bloodthirsty">⮞</Link> Bloodthirsty <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.8" id="main-traits_combat_all-fake-fn-6.8" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitbloodthirsty-bloodthirsty-fn6-8-flavor">You have a vicious streak, and nothing satisfies you more than warm blood on your hands and blade.</Pair>
<Pair single="benefit" id="traitbloodthirsty-bloodthirsty-fn6-8-benefit">Whenever you make an attack that reduces a foe to 0 hit points or fewer or you confirm a critical hit, your attack deals 1 additional point of damage. The additional damage is a trait bonus, and is multiplied by your weapon's critical hit multiplier.</Pair>
</Ability>
<Ability id="traitbloodyminded-bloody-minded-fn15" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbloodyminded-bloody-minded-fn15"><Link to="/trait/bloody_minded">⮞</Link> Bloody-Minded <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-15" id="main-traits_combat_all-fake-fn-15" data-hash-target to="main-traits_combat_all-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitbloodyminded-bloody-minded-fn15-flavor">You are always ready for bloodshed.</Pair>
<Pair single="benefit" id="traitbloodyminded-bloody-minded-fn15-benefit">You gain a +1 trait bonus on initiative and <Link to="/skill/intimidate">Intimidate</Link> checks.</Pair>
</Ability>
<Ability id="traitbornunderthecradle-born-under-the-cradle-fn16" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbornunderthecradle-born-under-the-cradle-fn16"><Link to="/trait/born_under_the_cradle">⮞</Link> Born under the Cradle <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-16" id="main-traits_combat_all-fake-fn-16" data-hash-target to="main-traits_combat_all-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitbornunderthecradle-born-under-the-cradle-fn16-flavor">Your birth sign aligned significantly with Bretheda on the day you were born, granting you a knack for cooperation in the heat of battle.</Pair>
<Pair single="benefit" id="traitbornunderthecradle-born-under-the-cradle-fn16-benefit">You gain a +2 trait bonus on attack rolls to perform the <Link to="/rule/aid_another_2">aid another</Link> action.</Pair>
</Ability>
<Ability id="traitbornunderthedreamer-born-under-the-dreamer-fn16-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbornunderthedreamer-born-under-the-dreamer-fn16-2"><Link to="/trait/born_under_the_dreamer">⮞</Link> Born under the Dreamer <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-16.2" id="main-traits_combat_all-fake-fn-16.2" data-hash-target to="main-traits_combat_all-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitbornunderthedreamer-born-under-the-dreamer-fn16-2-flavor">Your birth sign aligned significantly with Liavara on the day you were born, and you are touched by the instinctual dreaming spirit of that planet, making you naturally poised and hard to surprise.</Pair>
<Pair single="benefit" id="traitbornunderthedreamer-born-under-the-dreamer-fn16-2-benefit">Once per day as a <strong className="hl">free action</strong>, you can take 10 on your initiative check.</Pair>
</Ability>
<Ability id="traitbornunderthestranger-born-under-the-stranger-fn16-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbornunderthestranger-born-under-the-stranger-fn16-3"><Link to="/trait/born_under_the_stranger">⮞</Link> Born under the Stranger <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-16.3" id="main-traits_combat_all-fake-fn-16.3" data-hash-target to="main-traits_combat_all-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitbornunderthestranger-born-under-the-stranger-fn16-3-flavor">Your birth was marked by the alignment of Aucturn with your birth sign and by strange happenings, giving you a link to alien beings.</Pair>
<Pair single="benefit" id="traitbornunderthestranger-born-under-the-stranger-fn16-3-benefit">When <Link to="/rule/feint">feinting</Link> against aberrations, you do not take a -4 penalty for feinting against a non-humanoid creature, and you take only a -4 penalty if you feint against an aberration of animal Intelligence (instead of -8). You still cannot feint against mindless creatures.</Pair>
</Ability>
<Ability id="traitbrokennotbeaten-broken-not-beaten-fn11-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbrokennotbeaten-broken-not-beaten-fn11-2"><Link to="/trait/broken_not_beaten">⮞</Link> Broken, Not Beaten <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-11.2" id="main-traits_combat_all-fake-fn-11.2" data-hash-target to="main-traits_combat_all-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traitbrokennotbeaten-broken-not-beaten-fn11-2-benefit">You automatically <Link to="/misc/stabilize">stabilize</Link> when reduced below 0 hit points. Once per day when brought below 0 hit points, you can accept 1 point of damage to regain consciousness for 1 round, though you remain staggered and only able to take a single move or standard action.</Pair>
</Ability>
<Ability id="traitbullied-bullied-fn6-9-fn8-3-fn7-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbullied-bullied-fn6-9-fn8-3-fn7-3"><Link to="/trait/bullied">⮞</Link> Bullied <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.9" id="main-traits_combat_all-fake-fn-6.9" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-8.3" id="main-traits_combat_all-fake-fn-8.3" data-hash-target to="main-traits_combat_all-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-7.3" id="main-traits_combat_all-fake-fn-7.3" data-hash-target to="main-traits_combat_all-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitbullied-bullied-fn6-9-fn8-3-fn7-3-flavor">You were bullied often as a child, and you are now constantly ready to defend yourself with your fists when an enemy comes near.</Pair>
<Pair single="benefit" id="traitbullied-bullied-fn6-9-fn8-3-fn7-3-benefit"><p>You gain a +1 trait bonus on attack of opportunity attack rolls made with unarmed strikes.</p>
<p>Note that this trait does not grant the ability to make attacks of opportunity with your unarmed strikes - you must have a level in monk, the <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> feat, or some other similar power to gain the use of this character trait. However, that doesn't prevent you from selecting this trait. You simply cannot make use of it until a later point if you do.</p>
</Pair>
</Ability>
<Ability id="traitcarefulcombatant-careful-combatant-fn17" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitcarefulcombatant-careful-combatant-fn17"><Link to="/trait/careful_combatant">⮞</Link> Careful Combatant <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-17" id="main-traits_combat_all-fake-fn-17" data-hash-target to="main-traits_combat_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitcarefulcombatant-careful-combatant-fn17-flavor">You have a strong sense of self-preservation, believing it is more important to safely extract yourself from a fight that has turned hopeless than to stubbornly stand your ground and risk death - for when you're dead, you can't protect the innocent.</Pair>
<Pair single="benefit" id="traitcarefulcombatant-careful-combatant-fn17-benefit">When using the <Link to="/rule/withdraw">withdraw</Link> action, both the first and second squares of your movement are not considered threatened by any opponents you can see, rather than just the first square.</Pair>
</Ability>
<Ability id="traitclockworkengineer-clockwork-engineer-fn14-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitclockworkengineer-clockwork-engineer-fn14-2"><Link to="/trait/clockwork_engineer">⮞</Link> Clockwork Engineer <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-14.2" id="main-traits_combat_all-fake-fn-14.2" data-hash-target to="main-traits_combat_all-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitclockworkengineer-clockwork-engineer-fn14-2-flavor">You have experience with the ancient clockwork constructs that roam certain wastelands, and this has granted you an understanding of these guardians.</Pair>
<Pair single="benefit" id="traitclockworkengineer-clockwork-engineer-fn14-2-benefit">You gain a +2 trait bonus on damage rolls against creatures with the <Link to="/subtype/clockwork">clockwork</Link> subtype.</Pair>
</Ability>
<Ability id="traitcoherentrage-coherent-rage-fn13-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitcoherentrage-coherent-rage-fn13-3"><Link to="/trait/coherent_rage">⮞</Link> Coherent Rage <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-13.3" id="main-traits_combat_all-fake-fn-13.3" data-hash-target to="main-traits_combat_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Associated with the <Link to="/rule/ulfen_guard">Ulfen Guard</Link></Pair>
<Pair single="flavor" id="traitcoherentrage-coherent-rage-fn13-3-flavor">Your determination allows you to hold onto a shred of your rational mind at all times.</Pair>
<Pair single="benefit" id="traitcoherentrage-coherent-rage-fn13-3-benefit">Select one of the following skills: <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/handle_animal">Handle Animal</Link>, or <Link to="/skill/stealth">Stealth</Link>. You may use this skill normally while raging.</Pair>
</Ability>
<Ability id="traitcoldandcalculating-cold-and-calculating-fn6-10" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitcoldandcalculating-cold-and-calculating-fn6-10"><Link to="/trait/cold_and_calculating">⮞</Link> Cold and Calculating <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.10" id="main-traits_combat_all-fake-fn-6.10" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitcoldandcalculating-cold-and-calculating-fn6-10-flavor">You are adept at tricking <Link to="/ability/favored_enemies">favored enemies</Link> of your race or those related to your race.</Pair>
<Pair single="benefit" id="traitcoldandcalculating-cold-and-calculating-fn6-10-benefit">You gain a +1 trait bonus on all <Link to="/skill/bluff">Bluff</Link> checks against favored enemies that share one of your subtypes. You also gain a +1 trait bonus on attack rolls made against such favored enemies during the surprise round.</Pair>
</Ability>
<Ability id="traitcourageous-courageous-fn6-11-fn8-4-fn7-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitcourageous-courageous-fn6-11-fn8-4-fn7-4"><Link to="/trait/courageous">⮞</Link> Courageous <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.11" id="main-traits_combat_all-fake-fn-6.11" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-8.4" id="main-traits_combat_all-fake-fn-8.4" data-hash-target to="main-traits_combat_all-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-7.4" id="main-traits_combat_all-fake-fn-7.4" data-hash-target to="main-traits_combat_all-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitcourageous-courageous-fn6-11-fn8-4-fn7-4-flavor">Your childhood was brutal, but you persevered through force of will and faith. No matter how hard things got, you knew you'd make it through as long as you kept a level head.</Pair>
<Pair single="benefit" id="traitcourageous-courageous-fn6-11-fn8-4-fn7-4-benefit">You gain a +2 trait bonus on saving throws against fear effects.</Pair>
</Ability>
<Ability id="traitcrimsoncarapace-crimson-carapace-fn9-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitcrimsoncarapace-crimson-carapace-fn9-3"><Link to="/trait/crimson_carapace">⮞</Link> Crimson Carapace <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-9.3" id="main-traits_combat_all-fake-fn-9.3" data-hash-target to="main-traits_combat_all-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitcrimsoncarapace-crimson-carapace-fn9-3-flavor">A combination of armor and agility protects you from deadly attacks.</Pair>
<Pair single="benefit" id="traitcrimsoncarapace-crimson-carapace-fn9-3-benefit">When wearing light armor and <Link to="/misc/fighting_defensively">fighting defensively</Link> or using <Link to="/feat/combat_expertise">Combat Expertise</Link>, you receive a +2 trait bonus to your AC against attack rolls to confirm a critical threat.</Pair>
</Ability>
<Ability id="traitcrowddodger-crowd-dodger-fn18" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitcrowddodger-crowd-dodger-fn18"><Link to="/trait/crowd_dodger">⮞</Link> Crowd Dodger <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-18" id="main-traits_combat_all-fake-fn-18" data-hash-target to="main-traits_combat_all-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitcrowddodger-crowd-dodger-fn18-flavor">You spent much of your youth on crowded streets, dodging quickly around and under others.</Pair>
<Pair single="benefit" id="traitcrowddodger-crowd-dodger-fn18-benefit"><p>You gain a +2 trait bonus on <Link to="/skill/acrobatics">Acrobatics</Link> checks to move through another creature's space and to avoid attacks of opportunity for leaving a threatened square.</p>
<p><strong>Suggested Characters:</strong> Absalom natives, Chelaxians, Lion Blades.</p>
</Pair>
</Ability>
<Ability id="traitdedicateddefender-dedicated-defender-fn6-12" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdedicateddefender-dedicated-defender-fn6-12"><Link to="/trait/dedicated_defender">⮞</Link> Dedicated Defender <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.12" id="main-traits_combat_all-fake-fn-6.12" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdedicateddefender-dedicated-defender-fn6-12-flavor">When a companion is down, you fight harder.</Pair>
<Pair single="benefit" id="traitdedicateddefender-dedicated-defender-fn6-12-benefit">You gain a +1 trait bonus on attack rolls and on checks made to overcome spell resistance while you are adjacent to a <Link to="/misc/dying">dying</Link> or <Link to="/misc/disabled">disabled</Link> ally, animal companion, eidolon, familiar, or mount.</Pair>
</Ability>
<Ability id="traitdefenderofthesociety-defender-of-the-society-fn12-3-fn13-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdefenderofthesociety-defender-of-the-society-fn12-3-fn13-4"><Link to="/trait/defender_of_the_society">⮞</Link> Defender of the Society <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-12.3" id="main-traits_combat_all-fake-fn-12.3" data-hash-target to="main-traits_combat_all-fake-fn-12-target">12</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-13.4" id="main-traits_combat_all-fake-fn-13.4" data-hash-target to="main-traits_combat_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traitdefenderofthesociety-defender-of-the-society-fn12-3-fn13-4-flavor">Your time spent studying the greatest warriors of the Society taught you new defensive skills while wearing armor.</Pair>
<Pair single="benefit" id="traitdefenderofthesociety-defender-of-the-society-fn12-3-fn13-4-benefit">You gain a +1 trait bonus to Armor Class when wearing medium or heavy armor.</Pair>
</Ability>
<Ability id="traitdeftdodger-deft-dodger-fn6-13-fn8-5-fn7-5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdeftdodger-deft-dodger-fn6-13-fn8-5-fn7-5"><Link to="/trait/deft_dodger">⮞</Link> Deft Dodger <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.13" id="main-traits_combat_all-fake-fn-6.13" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-8.5" id="main-traits_combat_all-fake-fn-8.5" data-hash-target to="main-traits_combat_all-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-7.5" id="main-traits_combat_all-fake-fn-7.5" data-hash-target to="main-traits_combat_all-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdeftdodger-deft-dodger-fn6-13-fn8-5-fn7-5-flavor">Growing up in a rough neighborhood or a dangerous environment has honed your senses.</Pair>
<Pair single="benefit" id="traitdeftdodger-deft-dodger-fn6-13-fn8-5-fn7-5-benefit">You gain a +1 trait bonus on Reflex saves.</Pair>
</Ability>
<Ability id="traitdemonslayer-demon-slayer-fn13-5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdemonslayer-demon-slayer-fn13-5"><Link to="/trait/demon_slayer">⮞</Link> Demon Slayer <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-13.5" id="main-traits_combat_all-fake-fn-13.5" data-hash-target to="main-traits_combat_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Mendev Crusaders</Pair>
<Pair single="flavor" id="traitdemonslayer-demon-slayer-fn13-5-flavor">By studying a demonic opponent, you can sense and target its weak spots.</Pair>
<Pair single="benefit" id="traitdemonslayer-demon-slayer-fn13-5-benefit">You can attempt a <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> check to find a demon's weak spot. (DC 10 + the demon's CR). If you succeed, you gain a +3 trait bonus on rolls to confirm critical hits against that <Link to="/family/demon">demon</Link> until the end of the battle. This effect only works on demons.</Pair>
</Ability>
<Ability id="traitdemonsmiter-demon-smiter-fn17-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdemonsmiter-demon-smiter-fn17-2"><Link to="/trait/demon_smiter">⮞</Link> Demon Smiter <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-17.2" id="main-traits_combat_all-fake-fn-17.2" data-hash-target to="main-traits_combat_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdemonsmiter-demon-smiter-fn17-2-flavor">You grew up around those who fight the demons streaming out of the Worldwound, and from their stories you learned about the demons' weaknesses. You are likely from Mendev or have joined that nation's cause as a crusader.</Pair>
<Pair single="benefit" id="traitdemonsmiter-demon-smiter-fn17-2-benefit">Once per day when fighting <Link to="/family/demon">demons</Link>, you gain a +4 trait bonus on a single attack roll.</Pair>
</Ability>
<Ability id="traitdevilfighter-devil-fighter-fn9-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdevilfighter-devil-fighter-fn9-4"><Link to="/trait/devil_fighter">⮞</Link> Devil Fighter <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-9.4" id="main-traits_combat_all-fake-fn-9.4" data-hash-target to="main-traits_combat_all-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdevilfighter-devil-fighter-fn9-4-flavor">Learning how devils think helps you resist their trickery.</Pair>
<Pair single="benefit" id="traitdevilfighter-devil-fighter-fn9-4-benefit">You gain a +1 trait bonus to your AC against attacks made by lawful outsiders.</Pair>
</Ability>
<Ability id="traitdirtyfighterapg-dirty-fighter-apg-fn6-14-fn8-6-fn7-6" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdirtyfighterapg-dirty-fighter-apg-fn6-14-fn8-6-fn7-6"><Link to="/trait/dirty_fighter_apg">⮞</Link> Dirty Fighter (APG) <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.14" id="main-traits_combat_all-fake-fn-6.14" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-8.6" id="main-traits_combat_all-fake-fn-8.6" data-hash-target to="main-traits_combat_all-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-7.6" id="main-traits_combat_all-fake-fn-7.6" data-hash-target to="main-traits_combat_all-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdirtyfighterapg-dirty-fighter-apg-fn6-14-fn8-6-fn7-6-flavor">You wouldn't have lived to make it out of childhood without the aid of a sibling, friend, or companion you could always count on to distract your enemies long enough for you to do a little bit more damage than normal. That companion may be another PC or an NPC (who may even be recently departed from your side).</Pair>
<Pair single="benefit" id="traitdirtyfighterapg-dirty-fighter-apg-fn6-14-fn8-6-fn7-6-benefit">When you hit a foe you are <Link to="/rule/flanking">flanking</Link>, you deal 1 additional point of damage (this damage is added to your base damage, and is multiplied on a critical hit). This additional damage is a trait bonus.</Pair>
</Ability>
<Ability id="traitdirtytrickster-dirty-trickster-fn19" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdirtytrickster-dirty-trickster-fn19"><Link to="/trait/dirty_trickster">⮞</Link> Dirty Trickster <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-19" id="main-traits_combat_all-fake-fn-19" data-hash-target to="main-traits_combat_all-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdirtytrickster-dirty-trickster-fn19-flavor">You learned early that there's no point in fighting fair when you're fighting for your life. Others may look down their noses at your tactics, but you know you wouldn't have survived this long without breaking a few conventions of fair play.</Pair>
<Pair single="benefit" id="traitdirtytrickster-dirty-trickster-fn19-benefit">You can take the <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link> feat without meeting its prerequisites, and you gain a +1 trait bonus on combat maneuver checks to attempt a <Link to="/rule/dirty_trick">dirty trick</Link>.</Pair>
</Ability>
<Ability id="traitdisillusioned-disillusioned-fn18-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdisillusioned-disillusioned-fn18-2"><Link to="/trait/disillusioned">⮞</Link> Disillusioned <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-18.2" id="main-traits_combat_all-fake-fn-18.2" data-hash-target to="main-traits_combat_all-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdisillusioned-disillusioned-fn18-2-flavor">Your childhood was ended by a great disaster or atrocity that you witnessed. To cope with the horror, you have learned to reflexively suppress all emotion.</Pair>
<Pair single="benefit" id="traitdisillusioned-disillusioned-fn18-2-benefit"><p>You gain a +2 trait bonus on Will saving throws against emotion and fear effects.</p>
<p><strong>Suggested Characters:</strong> Galtans, <Link to="/rule/hellknights">Hellknights</Link>, Nidalese.</p>
</Pair>
</Ability>
<Ability id="traitdispelledbattler-dispelled-battler-fn6-15" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdispelledbattler-dispelled-battler-fn6-15"><Link to="/trait/dispelled_battler">⮞</Link> Dispelled Battler <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.15" id="main-traits_combat_all-fake-fn-6.15" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdispelledbattler-dispelled-battler-fn6-15-flavor">When deprived of magic, you fight harder.</Pair>
<Pair single="benefit" id="traitdispelledbattler-dispelled-battler-fn6-15-benefit">You gain a +1 trait bonus on weapon attack and damage rolls while within an area of antimagic such as that created by an <Link to="/spell/antimagic_field">antimagic field</Link>. You also gain this bonus for 1 round after you are subject to an area or targeted <Link to="/spell/dispel_magic">dispel magic</Link> spell, regardless of the effect's success or failure in dispelling your spells and magical effects.</Pair>
</Ability>
<Ability id="traitdormantdefense-dormant-defense-fn14-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdormantdefense-dormant-defense-fn14-3"><Link to="/trait/dormant_defense">⮞</Link> Dormant Defense <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-14.3" id="main-traits_combat_all-fake-fn-14.3" data-hash-target to="main-traits_combat_all-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdormantdefense-dormant-defense-fn14-3-flavor">Your body never lets down its defenses, even when you rest.</Pair>
<Pair single="benefit" id="traitdormantdefense-dormant-defense-fn14-3-benefit"><p>The DC for <Link to="/skill/perception">Perception</Link> checks you attempt while asleep increases only by 7 (instead of the normal +10 increase). While you are <Link to="/misc/dazed">dazed</Link>, <Link to="/misc/stunned">stunned</Link>, or <Link to="/misc/helpless">helpless</Link>, each critical hit or sneak attack scored against you has a 25% chance of being negated; when a critical hit or sneak attack is negated, roll its damage normally.</p>
<p>This doesn't stack with the <Link to="/magic-enh/fortification">fortification</Link> armor special ability and similar effects.</p>
</Pair>
</Ability>
<Ability id="traitdragonarmor-dragon-armor-fn9-5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdragonarmor-dragon-armor-fn9-5"><Link to="/trait/dragon_armor">⮞</Link> Dragon Armor <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-9.5" id="main-traits_combat_all-fake-fn-9.5" data-hash-target to="main-traits_combat_all-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdragonarmor-dragon-armor-fn9-5-flavor">Xa Hoi's elite warriors are trained to deflect energy attacks.</Pair>
<Pair single="benefit" id="traitdragonarmor-dragon-armor-fn9-5-benefit">Choose an energy type (acid, cold, electricity, fire, or sonic) when you acquire this trait. When you are wearing medium or heavy armor, you gain a +2 trait bonus on Reflex saves against spells and effects of the chosen energy type.</Pair>
</Ability>
<Ability id="traitduelingcloakadept-dueling-cloak-adept-fn2-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitduelingcloakadept-dueling-cloak-adept-fn2-2"><Link to="/trait/dueling_cloak_adept">⮞</Link> Dueling Cloak Adept <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-2.2" id="main-traits_combat_all-fake-fn-2.2" data-hash-target to="main-traits_combat_all-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitduelingcloakadept-dueling-cloak-adept-fn2-2-flavor">You are trained in using your cloak to disguise your body and deceive your enemies.</Pair>
<Pair single="benefit" id="traitduelingcloakadept-dueling-cloak-adept-fn2-2-benefit">While wearing a cloak and using an <Link to="/eq-weapon/aldori_dueling_sword">Aldori dueling sword</Link>, you gain a +2 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks made to feint. Additionally, every time you successfully feint while wearing a cloak, you gain a +1 dodge bonus to your Armor Class until your next turn.</Pair>
</Ability>
<Ability id="traiteasywayorthehardway-easy-way-or-the-hard-way-fn6-16" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traiteasywayorthehardway-easy-way-or-the-hard-way-fn6-16"><Link to="/trait/easy_way_or_the_hard_way">⮞</Link> Easy Way or the Hard Way <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.16" id="main-traits_combat_all-fake-fn-6.16" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traiteasywayorthehardway-easy-way-or-the-hard-way-fn6-16-flavor">You are skilled at subduing your enemies.</Pair>
<Pair single="benefit" id="traiteasywayorthehardway-easy-way-or-the-hard-way-fn6-16-benefit">Whenever you attack one of your <Link to="/ability/favored_enemies">favored enemies</Link> with a weapon that deals lethal damage and choose to deal nonlethal damage, you take only a -2 penalty on the attack roll instead of the normal -4.</Pair>
</Ability>
<Ability id="traitelementalapprentice-elemental-apprentice-fn20" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitelementalapprentice-elemental-apprentice-fn20"><Link to="/trait/elemental_apprentice">⮞</Link> Elemental Apprentice <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-20" id="main-traits_combat_all-fake-fn-20" data-hash-target to="main-traits_combat_all-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitelementalapprentice-elemental-apprentice-fn20-flavor">You spent your childhood in a region of Golarion where the use of elemental magic is commonplace or the environment is heavily infused with elemental energies, such as the volcano Asuulek's Mouth or the hurricane-lashed Sodden Lands. Your time near raw elemental energies has inured you to taking damage from them.</Pair>
<Pair single="benefit" id="traitelementalapprentice-elemental-apprentice-fn20-benefit">At character creation, select acid, cold, electricity, or fire (once chosen, this damage type can't be changed). Once per day as a <strong className="hl">free action</strong>, when you hit a creature with a melee weapon, you can convert an amount of damage dealt by your attack equal to your character level into the selected energy type. You cannot convert this damage if any damage from the attack would normally deal a different type of energy damage (such as that of a <Link to="/magic-enh/flaming">flaming</Link> weapon).</Pair>
</Ability>
<Ability id="traitevasivesting-evasive-sting-fn6-17" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitevasivesting-evasive-sting-fn6-17"><Link to="/trait/evasive_sting">⮞</Link> Evasive Sting <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.17" id="main-traits_combat_all-fake-fn-6.17" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitevasivesting-evasive-sting-fn6-17-flavor">Larger enemies have a hard time striking you.</Pair>
<Pair single="benefit" id="traitevasivesting-evasive-sting-fn6-17-benefit">You gain a +1 dodge bonus to AC against enemies that are both your <Link to="/ability/favored_enemy">favored enemy</Link> and at least two size categories larger than you.</Pair>
</Ability>
<Ability id="traitexcitable-excitable-fn21" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitexcitable-excitable-fn21"><Link to="/trait/excitable">⮞</Link> Excitable <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-21" id="main-traits_combat_all-fake-fn-21" data-hash-target to="main-traits_combat_all-fake-fn-21-target">21</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traitexcitable-excitable-fn21-flavor">You demand that everything must happen right now, no matter what, and are too impatient to wait for everyone else to catch up. You finish people's sentences, blurt out the punch lines to slowly-told jokes, rarely make plans, and leap headlong into anything that looks like it might get interesting. While this has sometimes gotten you in trouble, it's also trained you to start moving a split second before everyone else, and that's saved your hide a few times as well.</Pair>
<Pair single="benefit" id="traitexcitable-excitable-fn21-benefit">You gain a +2 trait bonus on all Initiative checks.</Pair>
</Ability>
<Ability id="traitfailedaspirant-failed-aspirant-fn1-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitfailedaspirant-failed-aspirant-fn1-2"><Link to="/trait/failed_aspirant">⮞</Link> Failed Aspirant <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-1.2" id="main-traits_combat_all-fake-fn-1.2" data-hash-target to="main-traits_combat_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitfailedaspirant-failed-aspirant-fn1-2-flavor">You've failed the trials to gain entry to one of the <Link to="/rule/houses_of_perfection">Houses of Perfection</Link>. Though you are disappointed, you were able to pick up one trick from the monks.</Pair>
<Pair single="benefit" id="traitfailedaspirant-failed-aspirant-fn1-2-benefit">Choose a single <Link to="/rule/combat_maneuver">combat maneuver</Link>. Once per day, you can perform that combat maneuver without provoking an attack of opportunity, and you gain a +2 bonus on that attempt.</Pair>
</Ability>
<Ability id="traitfaithshunter-faiths-hunter-fn6-18" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitfaithshunter-faiths-hunter-fn6-18"><Link to="/trait/faiths_hunter">⮞</Link> Faith's Hunter <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.18" id="main-traits_combat_all-fake-fn-6.18" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitfaithshunter-faiths-hunter-fn6-18-flavor">Divine powers smile upon you each time you grievously wound a favored enemy.</Pair>
<Pair single="benefit" id="traitfaithshunter-faiths-hunter-fn6-18-benefit">When you confirm a critical hit against a <Link to="/ability/favored_enemy">favored enemy</Link>, you may extend the duration of any divine spell affecting you by 1 round. The benefits from multiple critical hits stack. Divine spells with an instantaneous duration can't be extended in this manner.</Pair>
</Ability>
<Ability id="traitfencer-fencer-fn6-19-fn7-7-fn8-7" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitfencer-fencer-fn6-19-fn7-7-fn8-7"><Link to="/trait/fencer">⮞</Link> Fencer <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.19" id="main-traits_combat_all-fake-fn-6.19" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-7.7" id="main-traits_combat_all-fake-fn-7.7" data-hash-target to="main-traits_combat_all-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-8.7" id="main-traits_combat_all-fake-fn-8.7" data-hash-target to="main-traits_combat_all-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitfencer-fencer-fn6-19-fn7-7-fn8-7-flavor">You trained with blades for long hours as a youth, either taking lessons in the genteel art of fencing from tutors paid for by your parents or being taken under the wing of a disenfranchised fencer who may have turned to a life of crime.</Pair>
<Pair single="benefit" id="traitfencer-fencer-fn6-19-fn7-7-fn8-7-benefit">You gain a +1 trait bonus on attack of opportunity attack rolls made with daggers, swords, and similar bladed weapons.</Pair>
</Ability>
<Ability id="traitfirebugqac-firebug-qac-fn18-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitfirebugqac-firebug-qac-fn18-3"><Link to="/trait/firebug_qac">⮞</Link> Firebug (QaC) <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-18.3" id="main-traits_combat_all-fake-fn-18.3" data-hash-target to="main-traits_combat_all-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitfirebugqac-firebug-qac-fn18-3-flavor">You were the child of a gunsmith or alchemist and always enjoyed experimenting with fiery alchemical items and minor explosives.</Pair>
<Pair single="benefit" id="traitfirebugqac-firebug-qac-fn18-3-benefit"><p>You gain a +1 trait bonus on attack rolls made with <Link to="/rule/throw_splash_weapon">thrown splash weapons</Link> and <Link to="/class/alchemist">alchemist</Link> bombs.</p>
<p><strong>Suggested Characters:</strong> Alkenstar natives, Katapeshi, Thuvians.</p>
</Pair>
</Ability>
<Ability id="traitfugitive-fugitive-fn19-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitfugitive-fugitive-fn19-2"><Link to="/trait/fugitive">⮞</Link> Fugitive <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-19.2" id="main-traits_combat_all-fake-fn-19.2" data-hash-target to="main-traits_combat_all-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitfugitive-fugitive-fn19-2-flavor">You crossed the law (or those in charge thought you did), and you are now a wanted criminal. As such, you have grown used to looking over your shoulder wherever you go.</Pair>
<Pair single="benefit" id="traitfugitive-fugitive-fn19-2-benefit">While in settlements, you gain a +3 trait bonus on <Link to="/skill/perception">Perception</Link> checks to determine awareness for the purpose of a surprise round.</Pair>
</Ability>
<Ability id="traitguerrillatactics-guerrilla-tactics-fn22" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitguerrillatactics-guerrilla-tactics-fn22"><Link to="/trait/guerrilla_tactics">⮞</Link> Guerrilla Tactics <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-22" id="main-traits_combat_all-fake-fn-22" data-hash-target to="main-traits_combat_all-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traitguerrillatactics-guerrilla-tactics-fn22-benefit">You gain a +2 trait bonus on <Link to="/skill/stealth">Stealth</Link> checks and Initiative checks in forests.</Pair>
</Ability>
<Ability id="traithardtokill-hard-to-kill-fn17-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traithardtokill-hard-to-kill-fn17-3"><Link to="/trait/hard_to_kill">⮞</Link> Hard to Kill <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-17.3" id="main-traits_combat_all-fake-fn-17.3" data-hash-target to="main-traits_combat_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traithardtokill-hard-to-kill-fn17-3-flavor">Your strong will to live and spread good combined with your pure physicality makes you a tough opponent to take down. You may have discovered this as a child after a tragic accident or during the course of your first battle.</Pair>
<Pair single="benefit" id="traithardtokill-hard-to-kill-fn17-3-benefit">When you are attempting a Constitution check to stabilize when <Link to="/misc/dying">dying</Link>, the penalty on the check is only half your negative hit point total instead of your full negative hit point total.</Pair>
</Ability>
<Ability id="traithellknightdevotion-hellknight-devotion-fn1-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traithellknightdevotion-hellknight-devotion-fn1-3"><Link to="/trait/hellknight_devotion">⮞</Link> Hellknight Devotion <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-1.3" id="main-traits_combat_all-fake-fn-1.3" data-hash-target to="main-traits_combat_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traithellknightdevotion-hellknight-devotion-fn1-3-flavor">Your family has strong ties to a <Link to="/rule/hellknights">Hellknight</Link> order, and you harness this belief as a weapon.</Pair>
<Pair single="benefit" id="traithellknightdevotion-hellknight-devotion-fn1-3-benefit">Once per day as a <strong className="hl">swift action</strong>, you can empower the next single melee attack you make to be treated as lawful-aligned for the purpose of overcoming damage reduction.</Pair>
</Ability>
<Ability id="traithellknightinitiate-hellknight-initiate-fn23" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traithellknightinitiate-hellknight-initiate-fn23"><Link to="/trait/hellknight_initiate">⮞</Link> Hellknight Initiate <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-23" id="main-traits_combat_all-fake-fn-23" data-hash-target to="main-traits_combat_all-fake-fn-23-target">23</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traithellknightinitiate-hellknight-initiate-fn23-flavor">You have laboriously studied the training rites of various <Link to="/rule/hellknights">Hellknight</Link> orders with the intent of joining one yourself.</Pair>
<Pair single="benefit" id="traithellknightinitiate-hellknight-initiate-fn23-benefit">You gain a +2 trait bonus on damage rolls against outsiders summoned through conjuration (calling) and conjuration (summoning) spells and effects.</Pair>
</Ability>
<Ability id="traithelpfulcop-helpful-cop-fn17-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traithelpfulcop-helpful-cop-fn17-4"><Link to="/trait/helpful_cop">⮞</Link> Helpful (CoP) <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-17.4" id="main-traits_combat_all-fake-fn-17.4" data-hash-target to="main-traits_combat_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traithelpfulcop-helpful-cop-fn17-4-flavor">You always know the best way to assist your companions, be it assisting them with a task, defending them in battle, or helping them place a well-aimed strike.</Pair>
<Pair single="benefit" id="traithelpfulcop-helpful-cop-fn17-4-benefit">When using the <Link to="/rule/aid_another">aid another</Link> action, you grant your ally a +3 bonus instead of a +2 bonus.</Pair>
</Ability>
<Ability id="traithiddenhand-hidden-hand-fn6-20" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traithiddenhand-hidden-hand-fn6-20"><Link to="/trait/hidden_hand">⮞</Link> Hidden Hand <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.20" id="main-traits_combat_all-fake-fn-6.20" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traithiddenhand-hidden-hand-fn6-20-flavor">Your concealed weapons strike fast and true.</Pair>
<Pair single="benefit" id="traithiddenhand-hidden-hand-fn6-20-benefit">You gain a +1 trait bonus on <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> checks made to conceal light weapons and a +1 trait bonus on attack rolls when making an attack with a light weapon during a surprise round.</Pair>
</Ability>
<Ability id="traithillfighter-hill-fighter-fn24" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traithillfighter-hill-fighter-fn24"><Link to="/trait/hill_fighter">⮞</Link> Hill Fighter <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-24" id="main-traits_combat_all-fake-fn-24" data-hash-target to="main-traits_combat_all-fake-fn-24-target">24</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Region" hl>Sargava</Pair>
<Pair single="flavor" id="traithillfighter-hill-fighter-fn24-flavor">You are used to fighting in <Link to="/rule/hills_terrain">hilly environments</Link>.</Pair>
<Pair single="benefit" id="traithillfighter-hill-fighter-fn24-benefit">You may <Link to="/rule/run">run</Link> or <Link to="/rule/charge">charge</Link> downhill on a steep slope (moving up to your base speed) without making an <Link to="/skill/acrobatics">Acrobatics</Link> check to avoid stumbling - but if you travel farther than this distance, the normal rules for steep slopes apply.</Pair>
</Ability>
<Ability id="traitholdout-holdout-fn18-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitholdout-holdout-fn18-4"><Link to="/trait/holdout">⮞</Link> Holdout <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-18.4" id="main-traits_combat_all-fake-fn-18.4" data-hash-target to="main-traits_combat_all-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitholdout-holdout-fn18-4-flavor">You were robbed at a young age by bullies, an experience that impressed upon you the importance of being able to hold on to whatever you cared to keep.</Pair>
<Pair single="benefit" id="traitholdout-holdout-fn18-4-benefit"><p>You gain a +1 trait bonus to CMD against disarm and steal combat maneuvers.</p>
<p><strong>Suggested Characters:</strong> Half-orcs, River Kingdoms natives, Varisians.</p>
</Pair>
</Ability>
<Ability id="traithonoredfistofthesociety-honored-fist-of-the-society-fn12-4-fn13-6" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traithonoredfistofthesociety-honored-fist-of-the-society-fn12-4-fn13-6"><Link to="/trait/honored_fist_of_the_society">⮞</Link> Honored Fist of the Society <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-12.4" id="main-traits_combat_all-fake-fn-12.4" data-hash-target to="main-traits_combat_all-fake-fn-12-target">12</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-13.6" id="main-traits_combat_all-fake-fn-13.6" data-hash-target to="main-traits_combat_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traithonoredfistofthesociety-honored-fist-of-the-society-fn12-4-fn13-6-flavor">You have studied dozens of ancient texts on martial arts that only the Society possesses, and are more learned in these arts than most.</Pair>
<Pair single="benefit" id="traithonoredfistofthesociety-honored-fist-of-the-society-fn12-4-fn13-6-benefit">You increase your ki pool by 1 point.</Pair>
</Ability>
<Ability id="traithuntersknack-hunters-knack-fn6-21" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traithuntersknack-hunters-knack-fn6-21"><Link to="/trait/hunters_knack">⮞</Link> Hunter's Knack <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.21" id="main-traits_combat_all-fake-fn-6.21" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traithuntersknack-hunters-knack-fn6-21-flavor">When you watch and wait before attacking, your strike is true.</Pair>
<Pair single="benefit" id="traithuntersknack-hunters-knack-fn6-21-benefit">You gain a +1 trait bonus on attack rolls against your <Link to="/ability/favored_enemies">favored enemies</Link> when you make such attacks as part of a <Link to="/rule/readied_action">readied action</Link>.</Pair>
</Ability>
<Ability id="traitichimeiyochampion-ichimeiyo-champion-fn4-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitichimeiyochampion-ichimeiyo-champion-fn4-4"><Link to="/trait/ichimeiyo_champion">⮞</Link> Ichimeiyo Champion <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-4.4" id="main-traits_combat_all-fake-fn-4.4" data-hash-target to="main-traits_combat_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitichimeiyochampion-ichimeiyo-champion-fn4-4-flavor">You draw strength from adhering to the Ichimeiyo honor code in combat.</Pair>
<Pair single="benefit" id="traitichimeiyochampion-ichimeiyo-champion-fn4-4-benefit">Once per day, if an effect would compel you to harm an ally, abandon an ally, or break your word, you can attempt a Will save at the usual DC to end the effect. If the effect normally allows a Will save at this point, you can roll twice and take the better result.</Pair>
</Ability>
<Ability id="traitimproviseddefense-improvised-defense-fn25" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitimproviseddefense-improvised-defense-fn25"><Link to="/trait/improvised_defense">⮞</Link> Improvised Defense <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-25" id="main-traits_combat_all-fake-fn-25" data-hash-target to="main-traits_combat_all-fake-fn-25-target">25</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitimproviseddefense-improvised-defense-fn25-flavor">You're never defenseless, even when you are caught off guard.</Pair>
<Pair single="benefit" id="traitimproviseddefense-improvised-defense-fn25-benefit">Whenever you wield an improvised weapon, you gain a +1 shield bonus to AC. If you use the improvised weapon to attack, you lose this shield bonus until the beginning of your next turn.</Pair>
</Ability>
<Ability id="traitindelibleire-indelible-ire-fn6-22" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitindelibleire-indelible-ire-fn6-22"><Link to="/trait/indelible_ire">⮞</Link> Indelible Ire <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.22" id="main-traits_combat_all-fake-fn-6.22" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitindelibleire-indelible-ire-fn6-22-flavor">When you are gravely wounded, you're stirred to greater combat focus.</Pair>
<Pair single="benefit" id="traitindelibleire-indelible-ire-fn6-22-benefit">Each time a critical hit is confirmed against you, you gain a +1 trait bonus on attack rolls for 1 round.</Pair>
</Ability>
<Ability id="traitinspiring-inspiring-fn18-5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitinspiring-inspiring-fn18-5"><Link to="/trait/inspiring">⮞</Link> Inspiring <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-18.5" id="main-traits_combat_all-fake-fn-18.5" data-hash-target to="main-traits_combat_all-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitinspiring-inspiring-fn18-5-flavor">As a child, you learned the power of a simple expression of faith in another when you gave a hero the inspiration to fight on in the face of terrible odds and save you from danger.</Pair>
<Pair single="benefit" id="traitinspiring-inspiring-fn18-5-benefit"><p>As a <strong className="hl">standard action</strong>, you can speak words of encouragement to grant a +1 morale bonus to an ally within 30 feet who can see and hear you. The ally can use this bonus on any d20 roll of her choice before the start of your next turn. You cannot use this trait to grant a bonus to yourself or to an ally who has already benefited from this trait within the last 24 hours.</p>
<p><strong>Suggested Characters:</strong> <Link to="/rule/eagle_knights">Eagle Knights</Link>, <Link to="/faith/iomedae">Iomedaeans</Link>, Mendevian crusaders.</p>
</Pair>
</Ability>
<Ability id="traitinspiringrush-inspiring-rush-fn2-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitinspiringrush-inspiring-rush-fn2-3"><Link to="/trait/inspiring_rush">⮞</Link> Inspiring Rush <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-2.3" id="main-traits_combat_all-fake-fn-2.3" data-hash-target to="main-traits_combat_all-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitinspiringrush-inspiring-rush-fn2-3-flavor">Your charge inspires nearby companions to new heights of daring.</Pair>
<Pair single="benefit" id="traitinspiringrush-inspiring-rush-fn2-3-benefit">Once per day when you make a <Link to="/rule/charge">charge</Link> attack, you gain a +1 trait bonus on both your attack and damage rolls, as do any allies who make a charge attack before the beginning of your next turn.</Pair>
</Ability>
<Ability id="traitjackettraining-jacket-training-fn9-6" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitjackettraining-jacket-training-fn9-6"><Link to="/trait/jacket_training">⮞</Link> Jacket Training <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-9.6" id="main-traits_combat_all-fake-fn-9.6" data-hash-target to="main-traits_combat_all-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traitjackettraining-jacket-training-fn9-6-benefit">You can treat an armored coat as light armor. This choice must be made when you don the armor, and can't be changed until you remove and redon the armor. You must still be proficient in wearing medium armor to avoid adding the armor's check penalty on all attack rolls and skill checks that involve moving.</Pair>
</Ability>
<Ability id="traitjunglefighter-jungle-fighter-fn24-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitjunglefighter-jungle-fighter-fn24-2"><Link to="/trait/jungle_fighter">⮞</Link> Jungle Fighter <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-24.2" id="main-traits_combat_all-fake-fn-24.2" data-hash-target to="main-traits_combat_all-fake-fn-24-target">24</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Region" hl>Sargava</Pair>
<Pair single="benefit" id="traitjunglefighter-jungle-fighter-fn24-2-benefit">You are sure-footed in jungle environments, and your speed may not be reduced to less than 10 feet by difficult terrain in jungles (meaning you may take a 5-foot step in difficult terrain and not provoke an attack of opportunity).</Pair>
</Ability>
<Ability id="traitjustlikenew-just-like-new-fn6-23" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitjustlikenew-just-like-new-fn6-23"><Link to="/trait/just_like_new">⮞</Link> Just Like New <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.23" id="main-traits_combat_all-fake-fn-6.23" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitjustlikenew-just-like-new-fn6-23-flavor">Broken firearms are not problems: they are challenges.</Pair>
<Pair single="benefit" id="traitjustlikenew-just-like-new-fn6-23-benefit">Your first attempt to remove the broken condition from your starting firearm and to upgrade it to a masterwork weapon costs 150 gp instead of 300 gp. In addition, when wielding a firearm that has the broken condition or is treated as if it had the broken condition, you take a -1 penalty on attack rolls made with it instead of the normal -2.</Pair>
</Ability>
<Ability id="traitkiller-killer-fn6-24-fn7-8-fn8-8" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitkiller-killer-fn6-24-fn7-8-fn8-8"><Link to="/trait/killer">⮞</Link> Killer <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.24" id="main-traits_combat_all-fake-fn-6.24" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-7.8" id="main-traits_combat_all-fake-fn-7.8" data-hash-target to="main-traits_combat_all-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-8.8" id="main-traits_combat_all-fake-fn-8.8" data-hash-target to="main-traits_combat_all-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitkiller-killer-fn6-24-fn7-8-fn8-8-flavor">You made your first kill at a very young age and found the task of war or murder to your liking. You either take particular pride in a well-placed blow, or find vile pleasure in twisting the blade to maximize your target's pain.</Pair>
<Pair single="benefit" id="traitkiller-killer-fn6-24-fn7-8-fn8-8-benefit">You deal an amount of additional damage equal to your weapon's critical hit modifier when you score a successful critical hit with a weapon; this additional damage is added to the final total, and is not multiplied by the critical hit multiple itself. This extra damage is a trait bonus.</Pair>
</Ability>
<Ability id="traitkinguardian-kin-guardian-fn6-25" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitkinguardian-kin-guardian-fn6-25"><Link to="/trait/kin_guardian">⮞</Link> Kin Guardian <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.25" id="main-traits_combat_all-fake-fn-6.25" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitkinguardian-kin-guardian-fn6-25-flavor">You are dedicated to defending members of your family.</Pair>
<Pair single="benefit" id="traitkinguardian-kin-guardian-fn6-25-benefit">When you use the <Link to="/rule/aid_another_2">aid another</Link> action to give a member of your family a bonus to AC, increase the bonus by 2. This increase is a trait bonus (and therefore doesn't stack with increases granted by other family members using this trait). This trait has no effect when using the aid another action to increase a family member's next attack roll.</Pair>
</Ability>
<Ability id="traitlargerthanlife-larger-than-life-fn6-26" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitlargerthanlife-larger-than-life-fn6-26"><Link to="/trait/larger_than_life">⮞</Link> Larger Than Life <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.26" id="main-traits_combat_all-fake-fn-6.26" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitlargerthanlife-larger-than-life-fn6-26-flavor">You wield firearms with truly terrifying menace.</Pair>
<Pair single="benefit" id="traitlargerthanlife-larger-than-life-fn6-26-benefit">When you use the <Link to="/skill/intimidate">Intimidate</Link> skill on a creature while wielding a firearm, you are considered one size category larger than your actual size.</Pair>
</Ability>
<Ability id="traitlastwalldefender-lastwall-defender-fn1-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitlastwalldefender-lastwall-defender-fn1-4"><Link to="/trait/lastwall_defender">⮞</Link> Lastwall Defender <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-1.4" id="main-traits_combat_all-fake-fn-1.4" data-hash-target to="main-traits_combat_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitlastwalldefender-lastwall-defender-fn1-4-flavor">Your military service in Lastwall taught you how to identify undead creatures, changing them in your mind from mysterious terrors to concrete foes you know how to deal with.</Pair>
<Pair single="benefit" id="traitlastwalldefender-lastwall-defender-fn1-4-benefit">You gain a +1 trait bonus on attack and damage rolls against undead creatures that you have personally identified using the <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> skill.</Pair>
</Ability>
<Ability id="traitmartialperformer-martial-performer-fn6-27" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitmartialperformer-martial-performer-fn6-27"><Link to="/trait/martial_performer">⮞</Link> Martial Performer <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.27" id="main-traits_combat_all-fake-fn-6.27" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitmartialperformer-martial-performer-fn6-27-flavor">Your training has made you a martial performer.</Pair>
<Pair single="benefit" id="traitmartialperformer-martial-performer-fn6-27-benefit">When you gain a monk bonus feat, you may instead take a <Link to="/main/feats_performance">performance feat</Link> for which you meet the prerequisites.</Pair>
</Ability>
<Ability id="traitmercifulscimitar-merciful-scimitar-fn4-5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitmercifulscimitar-merciful-scimitar-fn4-5"><Link to="/trait/merciful_scimitar">⮞</Link> Merciful Scimitar <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-4.5" id="main-traits_combat_all-fake-fn-4.5" data-hash-target to="main-traits_combat_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitmercifulscimitar-merciful-scimitar-fn4-5-flavor">You learned from worshipers of <Link to="/faith/sarenrae">Sarenrae</Link> to cut foes with a scimitar without killing them.</Pair>
<Pair single="benefit" id="traitmercifulscimitar-merciful-scimitar-fn4-5-benefit">You can deal nonlethal damage with a scimitar without taking a penalty on your attack rolls.</Pair>
</Ability>
<Ability id="traitmonkweaponskill-monk-weapon-skill-fn4-6" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitmonkweaponskill-monk-weapon-skill-fn4-6"><Link to="/trait/monk_weapon_skill">⮞</Link> Monk Weapon Skill <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-4.6" id="main-traits_combat_all-fake-fn-4.6" data-hash-target to="main-traits_combat_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitmonkweaponskill-monk-weapon-skill-fn4-6-flavor">Your exposure to teaching from the <Link to="/rule/houses_of_perfection">Houses of Perfection</Link> makes your attacks with monk weapons even more deadly.</Pair>
<Pair single="benefit" id="traitmonkweaponskill-monk-weapon-skill-fn4-6-benefit">Select one <Link to="/class/monk">monk</Link> weapon with which you are proficient (unarmed attacks do not qualify for this purpose). You gain a +1 trait bonus on damage rolls with this weapon.</Pair>
</Ability>
<Ability id="traitmonsterchallenger-monster-challenger-fn26" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitmonsterchallenger-monster-challenger-fn26"><Link to="/trait/monster_challenger">⮞</Link> Monster Challenger <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-26" id="main-traits_combat_all-fake-fn-26" data-hash-target to="main-traits_combat_all-fake-fn-26-target">26</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitmonsterchallenger-monster-challenger-fn26-flavor">You have made it your mission to bring down a fearsome beast.</Pair>
<Pair single="benefit" id="traitmonsterchallenger-monster-challenger-fn26-benefit">Choose two of the following: aberrations, animals, dragons, fey, magical beasts, oozes, and vermin. You can move at full speed without penalty while using <Link to="/skill/survival">Survival</Link> to follow tracks left by your chosen creature types.</Pair>
</Ability>
<Ability id="traitmonstersurvivor-monster-survivor-fn26-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitmonstersurvivor-monster-survivor-fn26-2"><Link to="/trait/monster_survivor">⮞</Link> Monster Survivor <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-26.2" id="main-traits_combat_all-fake-fn-26.2" data-hash-target to="main-traits_combat_all-fake-fn-26-target">26</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitmonstersurvivor-monster-survivor-fn26-2-flavor">You've escaped with your life after a terrible monster attack.</Pair>
<Pair single="benefit" id="traitmonstersurvivor-monster-survivor-fn26-2-benefit">You gain a +4 dodge bonus to AC against attacks of opportunity made against you by Large or larger opponents when you're making a <Link to="/rule/withdraw">withdraw</Link> action.</Pair>
</Ability>
<Ability id="traitmuscleofthesociety-muscle-of-the-society-fn5-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitmuscleofthesociety-muscle-of-the-society-fn5-2"><Link to="/trait/muscle_of_the_society">⮞</Link> Muscle of the Society <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-5.2" id="main-traits_combat_all-fake-fn-5.2" data-hash-target to="main-traits_combat_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitmuscleofthesociety-muscle-of-the-society-fn5-2-flavor">Your intense training with the Swords has taught you how to infiltrate otherwise inaccessible ruins and extract their treasures without too much exertion.</Pair>
<Pair single="benefit" id="traitmuscleofthesociety-muscle-of-the-society-fn5-2-benefit">You gain a +2 trait bonus on Strength checks made to break doors and lift portcullises, and you treat your Strength score as 2 higher for the purpose of determining your carrying capacity.</Pair>
</Ability>
<Ability id="traitnaturalflyer-natural-flyer-fn27" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitnaturalflyer-natural-flyer-fn27"><Link to="/trait/natural_flyer">⮞</Link> Natural Flyer <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-27" id="main-traits_combat_all-fake-fn-27" data-hash-target to="main-traits_combat_all-fake-fn-27-target">27</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitnaturalflyer-natural-flyer-fn27-flavor">All your life, the sky has beckoned to you, and you have dreamed of reveling in the freedom and bliss of flight.</Pair>
<Pair single="benefit" id="traitnaturalflyer-natural-flyer-fn27-benefit">You gain a +1 trait bonus on <Link to="/skill/fly">Fly</Link> checks, as well as <Link to="/skill/acrobatics">Acrobatics</Link> checks attempted while flying. Fly is always a class skill for you.</Pair>
</Ability>
<Ability id="traitnaturesmimic-natures-mimic-fn6-28" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitnaturesmimic-natures-mimic-fn6-28"><Link to="/trait/natures_mimic">⮞</Link> Nature's Mimic <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.28" id="main-traits_combat_all-fake-fn-6.28" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitnaturesmimic-natures-mimic-fn6-28-flavor">Your knowledge of nature informs your fighting style, and that style gives you insight into related aspects of the natural world.</Pair>
<Pair single="benefit" id="traitnaturesmimic-natures-mimic-fn6-28-benefit">You gain a +1 trait bonus on all <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> checks, and Knowledge (nature) is always a class skill for you. You can make Knowledge (nature) checks pertaining to animals that correspond to your style feats untrained.</Pair>
</Ability>
<Ability id="traitneverstopshooting-never-stop-shooting-fn6-29" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitneverstopshooting-never-stop-shooting-fn6-29"><Link to="/trait/never_stop_shooting">⮞</Link> Never Stop Shooting <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.29" id="main-traits_combat_all-fake-fn-6.29" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitneverstopshooting-never-stop-shooting-fn6-29-flavor">Even when the chips are down, you keep on shooting.</Pair>
<Pair single="benefit" id="traitneverstopshooting-never-stop-shooting-fn6-29-benefit"><p>If your hit point total drops to 0 or lower but you are not dead, you may act as if <Link to="/misc/disabled">disabled</Link> rather than <Link to="/misc/dying">dying</Link> (as if you possessed the <Link to="/feat/diehard">Diehard</Link> feat). However, you can use your actions only to draw a firearm, reload a firearm, or attack with a firearm.</p>
<p>If you have the Diehard feat, this trait also allows you to substitute your Wisdom score for your Constitution score for the purpose of determining the negative hit point total at which you die.</p>
</Pair>
</Ability>
<Ability id="traitnoescape-no-escape-fn28" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitnoescape-no-escape-fn28"><Link to="/trait/no_escape">⮞</Link> No Escape <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-28" id="main-traits_combat_all-fake-fn-28" data-hash-target to="main-traits_combat_all-fake-fn-28-target">28</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitnoescape-no-escape-fn28-flavor">Struggle as they might, ne'er-do-wells and vagrants are hard pressed to evade the law once in your clutches.</Pair>
<Pair single="benefit" id="traitnoescape-no-escape-fn28-benefit">You gain a +1 trait bonus on <Link to="/rule/combat_maneuvers">combat maneuver</Link> checks to lawfully and nonlethally restrain a creature you've witnessed commit a crime.</Pair>
</Ability>
<Ability id="traitobariveteran-obari-veteran-fn29" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitobariveteran-obari-veteran-fn29"><Link to="/trait/obari_veteran">⮞</Link> Obari Veteran <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-29" id="main-traits_combat_all-fake-fn-29" data-hash-target to="main-traits_combat_all-fake-fn-29-target">29</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitobariveteran-obari-veteran-fn29-flavor">You've spent years aboard ships traveling the lucrative Obari Crossing, transporting Garundi and Vudrani goods.</Pair>
<Pair single="benefit" id="traitobariveteran-obari-veteran-fn29-benefit">You gain +1 bonus on <Link to="/skill/profession">Profession</Link> (sailor) checks, and Profession (sailor) is a class skill for you. You also gain a +1 trait bonus on weapon damage rolls against creatures with the aquatic subtype.</Pair>
</Ability>
<Ability id="traitogreavoidance-ogre-avoidance-fn14-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitogreavoidance-ogre-avoidance-fn14-4"><Link to="/trait/ogre_avoidance">⮞</Link> Ogre Avoidance <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-14.4" id="main-traits_combat_all-fake-fn-14.4" data-hash-target to="main-traits_combat_all-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitogreavoidance-ogre-avoidance-fn14-4-flavor">You have practiced defensive maneuvers to avoid being caught by <Link to="/monster/ogre">ogres</Link>, whose grasps you know are tight and unforgiving.</Pair>
<Pair single="benefit" id="traitogreavoidance-ogre-avoidance-fn14-4-benefit">You gain a +2 trait bonus to CMD against <Link to="/rule/bull_rush">bull rush</Link> and <Link to="/rule/grapple">grapple</Link> combat maneuvers.</Pair>
</Ability>
<Ability id="traitozeminspired-ozem-inspired-fn4-7" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitozeminspired-ozem-inspired-fn4-7"><Link to="/trait/ozem_inspired">⮞</Link> Ozem-Inspired <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-4.7" id="main-traits_combat_all-fake-fn-4.7" data-hash-target to="main-traits_combat_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitozeminspired-ozem-inspired-fn4-7-flavor">Tales of the Knights of Ozem have inspired you since childhood to lash out reflexively against the undead.</Pair>
<Pair single="benefit" id="traitozeminspired-ozem-inspired-fn4-7-benefit">You gain a +1 trait bonus on attack rolls and damage rolls when making attacks of opportunity against undead. While you wield a shield, your shield bonus to AC improves by 1 against attacks of opportunity made by undead.</Pair>
</Ability>
<Ability id="traitperformerssurprise-performers-surprise-fn4-8" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitperformerssurprise-performers-surprise-fn4-8"><Link to="/trait/performers_surprise">⮞</Link> Performer's Surprise <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-4.8" id="main-traits_combat_all-fake-fn-4.8" data-hash-target to="main-traits_combat_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitperformerssurprise-performers-surprise-fn4-8-flavor">You are practiced at the surprising combat tricks of Varisian wanderers.</Pair>
<Pair single="benefit" id="traitperformerssurprise-performers-surprise-fn4-8-benefit">Against foes denied their Dexterity bonus to AC, you gain a +1 trait bonus on damage rolls with <Link to="/misc/improvised_weapons">improvised weapons</Link>, exotic weapons, and thrown weapons.</Pair>
</Ability>
<Ability id="traitpermanentscars-permanent-scars-fn9-7" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitpermanentscars-permanent-scars-fn9-7"><Link to="/trait/permanent_scars">⮞</Link> Permanent Scars <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-9.7" id="main-traits_combat_all-fake-fn-9.7" data-hash-target to="main-traits_combat_all-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitpermanentscars-permanent-scars-fn9-7-flavor">You carry the physical and emotional scars of your <Link to="/rule/gray_maidens">Gray Maiden</Link> initiation as mental armor.</Pair>
<Pair single="benefit" id="traitpermanentscars-permanent-scars-fn9-7-benefit">You receive a +2 trait bonus on saving throws against emotion and pain spells and effects.</Pair>
</Ability>
<Ability id="traitpillager-pillager-fn18-6" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitpillager-pillager-fn18-6"><Link to="/trait/pillager">⮞</Link> Pillager <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-18.6" id="main-traits_combat_all-fake-fn-18.6" data-hash-target to="main-traits_combat_all-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitpillager-pillager-fn18-6-flavor">Growing up in a place where authorities, if there were any, rarely enforced property laws, you learned quickly that you have only what you can hold - but you gain whatever you can take.</Pair>
<Pair single="benefit" id="traitpillager-pillager-fn18-6-benefit"><p>You gain a +1 trait bonus on combat maneuver checks to perform <Link to="/rule/disarm">disarm</Link> and <Link to="/rule/steal">steal</Link> combat maneuvers.</p>
<p><strong>Suggested Characters:</strong> Halflings, River Kingdoms natives, Shackles natives.</p>
</Pair>
</Ability>
<Ability id="traitpromising-promising-fn9-8" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitpromising-promising-fn9-8"><Link to="/trait/promising">⮞</Link> Promising <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-9.8" id="main-traits_combat_all-fake-fn-9.8" data-hash-target to="main-traits_combat_all-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitpromising-promising-fn9-8-flavor">Your superiors have identified you as an <Link to="/rule/eagle_knights">Eagle Knights</Link> candidate, and their praise encourages you to strive to meet their expectations.</Pair>
<Pair single="benefit" id="traitpromising-promising-fn9-8-benefit">Each day after getting a full night's sleep, you gain a +1 trait bonus to your AC when wearing armor or carrying a shield. This bonus lasts until you are first hit by an attack within the next 24 hours.</Pair>
</Ability>
<Ability id="traitpunishinsurrection-punish-insurrection-fn15-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitpunishinsurrection-punish-insurrection-fn15-2"><Link to="/trait/punish_insurrection">⮞</Link> Punish Insurrection <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-15.2" id="main-traits_combat_all-fake-fn-15.2" data-hash-target to="main-traits_combat_all-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitpunishinsurrection-punish-insurrection-fn15-2-flavor">You relish reminding people who's in charge.</Pair>
<Pair single="benefit" id="traitpunishinsurrection-punish-insurrection-fn15-2-benefit"><p>Against members of the same organization or hierarchy who formally answer to you, you gain a +1 trait bonus on attack and damage rolls.</p>
<p>You also gain this bonus against members who have openly defied the authority or rules of that body, provided the infraction is serious enough that their standing is now less than yours.</p>
</Pair>
</Ability>
<Ability id="traitreactionary-reactionary-fn6-30-fn7-9-fn8-9" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitreactionary-reactionary-fn6-30-fn7-9-fn8-9"><Link to="/trait/reactionary">⮞</Link> Reactionary <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.30" id="main-traits_combat_all-fake-fn-6.30" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-7.9" id="main-traits_combat_all-fake-fn-7.9" data-hash-target to="main-traits_combat_all-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-8.9" id="main-traits_combat_all-fake-fn-8.9" data-hash-target to="main-traits_combat_all-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitreactionary-reactionary-fn6-30-fn7-9-fn8-9-flavor">You were bullied often as a child, but never quite developed an offensive response. Instead, you became adept at anticipating sudden attacks and reacting to danger quickly.</Pair>
<Pair single="benefit" id="traitreactionary-reactionary-fn6-30-fn7-9-fn8-9-benefit">You gain a +2 trait bonus on initiative checks.</Pair>
</Ability>
<Ability id="traitreckless-reckless-fn6-31" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitreckless-reckless-fn6-31"><Link to="/trait/reckless">⮞</Link> Reckless <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.31" id="main-traits_combat_all-fake-fn-6.31" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitreckless-reckless-fn6-31-flavor">You have a tendency for rash behavior, often disregarding your own safety as you move across the battlefield.</Pair>
<Pair single="benefit" id="traitreckless-reckless-fn6-31-benefit">You gain a +1 bonus on <Link to="/skill/acrobatics">Acrobatics</Link> checks, and Acrobatics is always a class skill for you.</Pair>
</Ability>
<Ability id="traitrecklesscontempt-reckless-contempt-fn6-32" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitrecklesscontempt-reckless-contempt-fn6-32"><Link to="/trait/reckless_contempt">⮞</Link> Reckless Contempt <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.32" id="main-traits_combat_all-fake-fn-6.32" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitrecklesscontempt-reckless-contempt-fn6-32-flavor">You do not fear the threat of lesser weapons.</Pair>
<Pair single="benefit" id="traitrecklesscontempt-reckless-contempt-fn6-32-benefit">Whenever you provoke an attack of opportunity by firing a firearm, you gain a +1 trait bonus on the attack roll that provoked the attack of opportunity.</Pair>
</Ability>
<Ability id="traitredmantisbleeding-red-mantis-bleeding-fn4-9" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitredmantisbleeding-red-mantis-bleeding-fn4-9"><Link to="/trait/red_mantis_bleeding">⮞</Link> Red Mantis Bleeding <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-4.9" id="main-traits_combat_all-fake-fn-4.9" data-hash-target to="main-traits_combat_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitredmantisbleeding-red-mantis-bleeding-fn4-9-flavor">You witnessed the training of <Link to="/rule/red_mantis">Red Mantis</Link> assassins, either as a child on Mediogalti Island or as an aspirant, and learned to leave bleeding wounds.</Pair>
<Pair single="benefit" id="traitredmantisbleeding-red-mantis-bleeding-fn4-9-benefit">Whenever you confirm a critical hit with a slashing weapon, you also deal 1 point of <Link to="/rule/bleed">bleed</Link> damage.</Pair>
</Ability>
<Ability id="traitresilient-resilient-fn6-33-fn8-10-fn7-10" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitresilient-resilient-fn6-33-fn8-10-fn7-10"><Link to="/trait/resilient">⮞</Link> Resilient <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.33" id="main-traits_combat_all-fake-fn-6.33" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-8.10" id="main-traits_combat_all-fake-fn-8.10" data-hash-target to="main-traits_combat_all-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-7.10" id="main-traits_combat_all-fake-fn-7.10" data-hash-target to="main-traits_combat_all-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitresilient-resilient-fn6-33-fn8-10-fn7-10-flavor">Growing up in a poor neighborhood or in the unforgiving wilds often forced you to subsist on food and water from doubtful sources.</Pair>
<Pair single="benefit" id="traitresilient-resilient-fn6-33-fn8-10-fn7-10-benefit">You've built up your constitution as a result, and gain a +1 trait bonus on Fortitude saves.</Pair>
</Ability>
<Ability id="traitresolveoftherejected-resolve-of-the-rejected-fn6-34" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitresolveoftherejected-resolve-of-the-rejected-fn6-34"><Link to="/trait/resolve_of_the_rejected">⮞</Link> Resolve of the Rejected <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.34" id="main-traits_combat_all-fake-fn-6.34" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitresolveoftherejected-resolve-of-the-rejected-fn6-34-flavor">Some disagree with your choice to wield a firearm, and their scorn has only hardened your resolve in battle.</Pair>
<Pair single="benefit" id="traitresolveoftherejected-resolve-of-the-rejected-fn6-34-benefit">You gain a +1 trait bonus on all saving throws against charm and compulsion effects. Also, once per day when you succeed at a saving throw against such an effect, you regain 1 grit point.</Pair>
</Ability>
<Ability id="traitridersbond-riders-bond-fn30" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitridersbond-riders-bond-fn30"><Link to="/trait/riders_bond">⮞</Link> Rider's Bond <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-30" id="main-traits_combat_all-fake-fn-30" data-hash-target to="main-traits_combat_all-fake-fn-30-target">30</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Region" hl>Lastwall</Pair>
<Pair title="Requirements" hl>Associated with the court of Castle Overwatch</Pair>
<Pair single="flavor" id="traitridersbond-riders-bond-fn30-flavor">Your mount keenly understands your commands.</Pair>
<Pair single="benefit" id="traitridersbond-riders-bond-fn30-benefit">If you gain a horse as an animal companion or mount as one of your class abilities, it gains two bonus tricks that don't count against the normal limit of tricks known by the animal.</Pair>
</Ability>
<Ability id="traitriverfighter-river-fighter-fn24-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitriverfighter-river-fighter-fn24-3"><Link to="/trait/river_fighter">⮞</Link> River Fighter <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-24.3" id="main-traits_combat_all-fake-fn-24.3" data-hash-target to="main-traits_combat_all-fake-fn-24-target">24</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Region" hl>Sargava</Pair>
<Pair single="flavor" id="traitriverfighter-river-fighter-fn24-3-flavor">You are used to fighting while swimming.</Pair>
<Pair single="benefit" id="traitriverfighter-river-fighter-fn24-3-benefit">You may swim downstream or cross-current as a <Link to="/rule/charge">charge</Link> if you make your <Link to="/skill/swim">Swim</Link> DC by 5 or more.</Pair>
</Ability>
<Ability id="traitrovingrange-roving-range-fn4-10" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitrovingrange-roving-range-fn4-10"><Link to="/trait/roving_range">⮞</Link> Roving Range <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-4.10" id="main-traits_combat_all-fake-fn-4.10" data-hash-target to="main-traits_combat_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitrovingrange-roving-range-fn4-10-flavor">You learned from pirates to make the most of ranged attacks as you close with targets.</Pair>
<Pair single="benefit" id="traitrovingrange-roving-range-fn4-10-benefit">Increase the range increment of ranged weapons (but not thrown weapons) you wield by 5 feet.</Pair>
</Ability>
<Ability id="traitsavannahunter-savanna-hunter-fn24-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitsavannahunter-savanna-hunter-fn24-4"><Link to="/trait/savanna_hunter">⮞</Link> Savanna Hunter <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-24.4" id="main-traits_combat_all-fake-fn-24.4" data-hash-target to="main-traits_combat_all-fake-fn-24-target">24</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitsavannahunter-savanna-hunter-fn24-4-flavor">You have been trained to hunt and fight on the open plains since birth.</Pair>
<Pair single="benefit" id="traitsavannahunter-savanna-hunter-fn24-4-benefit">You gain a +1 trait bonus on attacks of opportunity attack rolls made with a <Link to="/eq-weapon/shortspear">shortspear</Link>, as well as a +1 racial bonus on Constitution checks to continue <Link to="/rule/run">running</Link> and avoid nonlethal damage from a <Link to="/rule/forced_march">forced march</Link>.</Pair>
</Ability>
<Ability id="traitscarredbyspacepirates-scarred-by-space-pirates-fn16-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitscarredbyspacepirates-scarred-by-space-pirates-fn16-4"><Link to="/trait/scarred_by_space_pirates">⮞</Link> Scarred by Space Pirates <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-16.4" id="main-traits_combat_all-fake-fn-16.4" data-hash-target to="main-traits_combat_all-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitscarredbyspacepirates-scarred-by-space-pirates-fn16-4-flavor">You were attacked by Vercite space pirates in your youth, inspiring you to find ways to deal with the alien interlopers should they return.</Pair>
<Pair single="benefit" id="traitscarredbyspacepirates-scarred-by-space-pirates-fn16-4-benefit">You gain a +1 trait bonus on attack rolls against humanoids from beyond Golarion, including androids, kasathas, Triaxians, and Vercites, among others.</Pair>
</Ability>
<Ability id="traitscarreddescendant-scarred-descendant-fn6-35" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitscarreddescendant-scarred-descendant-fn6-35"><Link to="/trait/scarred_descendant">⮞</Link> Scarred Descendant <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.35" id="main-traits_combat_all-fake-fn-6.35" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitscarreddescendant-scarred-descendant-fn6-35-flavor">Your own people are your <Link to="/ability/favored_enemy">favored enemy</Link>.</Pair>
<Pair single="benefit" id="traitscarreddescendant-scarred-descendant-fn6-35-benefit">You gain a +1 trait bonus on rolls to confirm critical hits against favored enemies of your own subtype and on Survival checks made to track such creatures.</Pair>
</Ability>
<Ability id="traitshadowtrained-shadow-trained-fn30-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitshadowtrained-shadow-trained-fn30-2"><Link to="/trait/shadow_trained">⮞</Link> Shadow Trained <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-30.2" id="main-traits_combat_all-fake-fn-30.2" data-hash-target to="main-traits_combat_all-fake-fn-30-target">30</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Region" hl>Nidal</Pair>
<Pair title="Requirements" hl>Associated with the Umbral Court of Nidal</Pair>
<Pair single="flavor" id="traitshadowtrained-shadow-trained-fn30-2-flavor">You have experience fighting in darkness.</Pair>
<Pair single="benefit" id="traitshadowtrained-shadow-trained-fn30-2-benefit">Your miss chance while fighting in areas of dim light is only 10%.</Pair>
</Ability>
<Ability id="traitsiegedefender-siege-defender-fn10-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitsiegedefender-siege-defender-fn10-2"><Link to="/trait/siege_defender">⮞</Link> Siege Defender <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-10.2" id="main-traits_combat_all-fake-fn-10.2" data-hash-target to="main-traits_combat_all-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitsiegedefender-siege-defender-fn10-2-flavor">Aroden taught the people of Absalom to survive any siege with proper preparation and cooperation, and those teachings were passed on to you.</Pair>
<Pair single="benefit" id="traitsiegedefender-siege-defender-fn10-2-benefit">You gain a +1 trait bonus on melee damage rolls when you attack a target from <Link to="/rule/higher_ground">higher ground</Link>.</Pair>
</Ability>
<Ability id="traitslippery-slippery-fn13-7" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitslippery-slippery-fn13-7"><Link to="/trait/slippery">⮞</Link> Slippery <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-13.7" id="main-traits_combat_all-fake-fn-13.7" data-hash-target to="main-traits_combat_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/bellflower_network">Bellflower Network</Link></Pair>
<Pair single="flavor" id="traitslippery-slippery-fn13-7-flavor">You have escaped from so many dangerous situations in your life that you've gotten quite good at not getting caught.</Pair>
<Pair single="benefit" id="traitslippery-slippery-fn13-7-benefit">You gain a +1 trait bonus on <Link to="/skill/stealth">Stealth</Link> checks and Stealth is a class skill for you.</Pair>
</Ability>
<Ability id="traitsoaringsprinter-soaring-sprinter-fn18-7" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitsoaringsprinter-soaring-sprinter-fn18-7"><Link to="/trait/soaring_sprinter">⮞</Link> Soaring Sprinter <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-18.7" id="main-traits_combat_all-fake-fn-18.7" data-hash-target to="main-traits_combat_all-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitsoaringsprinter-soaring-sprinter-fn18-7-flavor">As a youth, you often leaped and ran at treacherous heights, either because it was the only place with enough freedom for you to play or because it was not a good idea to play any lower.</Pair>
<Pair single="benefit" id="traitsoaringsprinter-soaring-sprinter-fn18-7-benefit"><p>You gain a +2 trait bonus on <Link to="/skill/acrobatics">Acrobatics</Link> checks to keep your balance or jump, and Acrobatics becomes a class skill for you.</p>
<p><strong>Suggested Characters:</strong> Chelaxians, gnomes, Korvosans.</p>
</Pair>
</Ability>
<Ability id="traitsolitary-solitary-fn19-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitsolitary-solitary-fn19-3"><Link to="/trait/solitary">⮞</Link> Solitary <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-19.3" id="main-traits_combat_all-fake-fn-19.3" data-hash-target to="main-traits_combat_all-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitsolitary-solitary-fn19-3-flavor">You are skilled at slipping away from crowds.</Pair>
<Pair single="benefit" id="traitsolitary-solitary-fn19-3-benefit">Once per day, you can attempt a <Link to="/skill/bluff">Bluff</Link> check to create a diversion to hide with a +2 trait bonus on the check, and if successful, you take only a -5 penalty on your <Link to="/skill/stealth">Stealth</Link> check to get to an unobserved place while observers are distracted (instead of the normal -10 penalty).</Pair>
</Ability>
<Ability id="traitspiritofthelaw-spirit-of-the-law-fn19-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitspiritofthelaw-spirit-of-the-law-fn19-4"><Link to="/trait/spirit_of_the_law">⮞</Link> Spirit of the Law <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-19.4" id="main-traits_combat_all-fake-fn-19.4" data-hash-target to="main-traits_combat_all-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitspiritofthelaw-spirit-of-the-law-fn19-4-flavor">You have seen the rules of society endlessly twisted in their implementation, and as such, you are especially wary of those who exploit the law to impose their own will.</Pair>
<Pair single="benefit" id="traitspiritofthelaw-spirit-of-the-law-fn19-4-benefit">You gain a +1 trait bonus on attacks against lawful-aligned humanoids and a +2 trait bonus on saving throws against effects with the lawful descriptor.</Pair>
</Ability>
<Ability id="traitsplashattack-splash-attack-fn31" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitsplashattack-splash-attack-fn31"><Link to="/trait/splash_attack">⮞</Link> Splash Attack <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-31" id="main-traits_combat_all-fake-fn-31" data-hash-target to="main-traits_combat_all-fake-fn-31-target">31</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitsplashattack-splash-attack-fn31-flavor">You catch others off-guard when a confrontation escalates.</Pair>
<Pair single="benefit" id="traitsplashattack-splash-attack-fn31-benefit"><p>As long as you are standing in or adjacent to water, or holding at least a pint of liquid (including insoluble liquids like <Link to="/eq-misc/oil">oil</Link> or <Link to="/eq-weapon/alchemists_fire">alchemist's fire</Link>), you can perform a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver to blind a foe within reach without provoking an attack of opportunity.</p>
<p>If you select the <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link> feat, you gain a +2 trait bonus on dirty trick combat maneuvers to blind foes as long as you are standing in or adjacent to water or holding a pint of liquid.</p>
</Pair>
</Ability>
<Ability id="traitsprint-sprint-fn21-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitsprint-sprint-fn21-2"><Link to="/trait/sprint">⮞</Link> Sprint <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-21.2" id="main-traits_combat_all-fake-fn-21.2" data-hash-target to="main-traits_combat_all-fake-fn-21-target">21</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traitsprint-sprint-fn21-2-flavor">You were taught from a young age that the world is full of big, fast, dangerous foes, and that sometimes the best course of action is to put your head down and run. Your parents taught you how to make the most of a solid mid-length sprint and how to squeeze just a little extra speed out of yourself.</Pair>
<Pair single="benefit" id="traitsprint-sprint-fn21-2-benefit">If you do nothing but move in a turn (that is, if you <Link to="/rule/run">run</Link> or use both of your actions in a round to move your speed) and you are in no armor or light armor, you may move an extra 5 feet.</Pair>
</Ability>
<Ability id="traitstartlingreport-startling-report-fn6-36" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitstartlingreport-startling-report-fn6-36"><Link to="/trait/startling_report">⮞</Link> Startling Report <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.36" id="main-traits_combat_all-fake-fn-6.36" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitstartlingreport-startling-report-fn6-36-flavor">Through either perfect timing or the determination of your action, the sound of your firearm going off sets your enemies on edge.</Pair>
<Pair single="benefit" id="traitstartlingreport-startling-report-fn6-36-benefit">When you shoot a firearm, you gain a +2 trait bonus on Intimidate checks for 1 round against those who heard the shot.</Pair>
</Ability>
<Ability id="traitsteelskin-steel-skin-fn2-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitsteelskin-steel-skin-fn2-4"><Link to="/trait/steel_skin">⮞</Link> Steel Skin <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-2.4" id="main-traits_combat_all-fake-fn-2.4" data-hash-target to="main-traits_combat_all-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traitsteelskin-steel-skin-fn2-4-benefit"><p>You gain the ability to <Link to="/rule/don_armor">don or remove</Link> heavy armor in half the normal time.</p>
<p>Additionally, you begin play with a great helm bearing the iconography of your family (this helm grants no special defensive benefits). While wearing this helm with a suit of heavy armor, you gain a +2 trait bonus on Intimidate checks.</p>
</Pair>
</Ability>
<Ability id="traitstrongarmsupplewrist-strong-arm-supple-wrist-fn32-fn33" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitstrongarmsupplewrist-strong-arm-supple-wrist-fn32-fn33"><Link to="/trait/strong_arm_supple_wrist">⮞</Link> Strong Arm, Supple Wrist <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-32" id="main-traits_combat_all-fake-fn-32" data-hash-target to="main-traits_combat_all-fake-fn-32-target">32</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-33" id="main-traits_combat_all-fake-fn-33" data-hash-target to="main-traits_combat_all-fake-fn-33-target">33</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitstrongarmsupplewrist-strong-arm-supple-wrist-fn32-fn33-flavor">You have been trained in the javelin and the spear, and you know how to make the best use of your momentum.</Pair>
<Pair single="benefit" id="traitstrongarmsupplewrist-strong-arm-supple-wrist-fn32-fn33-benefit">When you move at least 10 feet before making an attack with a thrown weapon, you can add 10 feet to the range increment of the weapon thrown. You can gain this benefit only once per round.</Pair>
</Ability>
<Ability id="traitsubjectiveequilibrium-subjective-equilibrium-fn34" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitsubjectiveequilibrium-subjective-equilibrium-fn34"><Link to="/trait/subjective_equilibrium">⮞</Link> Subjective Equilibrium <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-34" id="main-traits_combat_all-fake-fn-34" data-hash-target to="main-traits_combat_all-fake-fn-34-target">34</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitsubjectiveequilibrium-subjective-equilibrium-fn34-flavor">You understand that gravity is far from constant when traversing the Great Beyond.</Pair>
<Pair single="benefit" id="traitsubjectiveequilibrium-subjective-equilibrium-fn34-benefit">You gain a +2 trait bonus on Wisdom checks to move on a plane with <Link to="/rule/gravity_traits">subjective directional gravity</Link>, and you gain a +10-foot enhancement bonus to your speed when "falling" on such a plane.</Pair>
</Ability>
<Ability id="traitsurpriseweapon-surprise-weapon-fn6-37" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitsurpriseweapon-surprise-weapon-fn6-37"><Link to="/trait/surprise_weapon">⮞</Link> Surprise Weapon <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.37" id="main-traits_combat_all-fake-fn-6.37" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitsurpriseweapon-surprise-weapon-fn6-37-flavor">You are skilled at fighting with objects not traditionally considered weapons.</Pair>
<Pair single="benefit" id="traitsurpriseweapon-surprise-weapon-fn6-37-benefit">You gain a +2 trait bonus on attack rolls with <Link to="/misc/improvised_weapons">improvised weapons</Link>.</Pair>
</Ability>
<Ability id="traitswornenemy-sworn-enemy-fn18-8" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitswornenemy-sworn-enemy-fn18-8"><Link to="/trait/sworn_enemy">⮞</Link> Sworn Enemy <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-18.8" id="main-traits_combat_all-fake-fn-18.8" data-hash-target to="main-traits_combat_all-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitswornenemy-sworn-enemy-fn18-8-flavor">You were raised with defiance, fear, or hatred of a particular sort of foe. To make you ready to resist such foes, you were trained for long hours in the proper ways to defeat them.</Pair>
<Pair single="benefit" id="traitswornenemy-sworn-enemy-fn18-8-benefit"><p>Choose a foe from the ranger's list of <Link to="/ability/favored_enemies">favored enemies</Link>. You gain a +1 trait bonus on attacks of opportunity against the chosen foe.</p>
<p><strong>Suggested Characters:</strong> Dwarves, Isgeri, Mendevian crusaders.</p>
</Pair>
</Ability>
<Ability id="traittactician-tactician-fn6-38" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traittactician-tactician-fn6-38"><Link to="/trait/tactician">⮞</Link> Tactician <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.38" id="main-traits_combat_all-fake-fn-6.38" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traittactician-tactician-fn6-38-flavor">You know how to take advantage of enemies who are unprepared for your assault.</Pair>
<Pair single="benefit" id="traittactician-tactician-fn6-38-benefit">You gain a +1 trait bonus on initiative checks. In addition, once per day when you make an attack of opportunity, you gain a +2 trait bonus on the attack roll.</Pair>
</Ability>
<Ability id="traittartaargadthtrained-tar-taargadth-trained-fn35" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traittartaargadthtrained-tar-taargadth-trained-fn35"><Link to="/trait/tar_taargadth_trained">⮞</Link> Tar Taargadth Trained <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-35" id="main-traits_combat_all-fake-fn-35" data-hash-target to="main-traits_combat_all-fake-fn-35-target">35</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traittartaargadthtrained-tar-taargadth-trained-fn35-flavor">You know the ancient fighting techniques of the Tar Taargadth Empire.</Pair>
<Pair single="benefit" id="traittartaargadthtrained-tar-taargadth-trained-fn35-benefit">You gain a +1 trait bonus on damage rolls when using any weapon with the word "dwarven" in its name.</Pair>
</Ability>
<Ability id="traittarnishedhallsrunner-tarnished-halls-runner-fn36" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traittarnishedhallsrunner-tarnished-halls-runner-fn36"><Link to="/trait/tarnished_halls_runner">⮞</Link> Tarnished Halls Runner <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-36" id="main-traits_combat_all-fake-fn-36" data-hash-target to="main-traits_combat_all-fake-fn-36-target">36</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traittarnishedhallsrunner-tarnished-halls-runner-fn36-flavor">You evaded Technic League patrols with the <Link to="/rule/tarnished_halls">Blood Gar pirates</Link>.</Pair>
<Pair single="benefit" id="traittarnishedhallsrunner-tarnished-halls-runner-fn36-benefit">When you move at least 10 feet, you gain a +1 trait bonus on attack rolls with firearms and technological weapons and a +1 dodge bonus to your AC against such weapons until the start of your next turn.</Pair>
</Ability>
<Ability id="traitthreateningdefender-threatening-defender-fn3-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitthreateningdefender-threatening-defender-fn3-2"><Link to="/trait/threatening_defender">⮞</Link> Threatening Defender <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-3.2" id="main-traits_combat_all-fake-fn-3.2" data-hash-target to="main-traits_combat_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitthreateningdefender-threatening-defender-fn3-2-flavor">You know how to avoid a blow while still maintaining your offensive posture.</Pair>
<Pair single="benefit" id="traitthreateningdefender-threatening-defender-fn3-2-benefit">When you use <Link to="/feat/combat_expertise">Combat Expertise</Link>, reduce the number you subtract from your melee attack rolls by 1.</Pair>
</Ability>
<Ability id="traitthunderandfangperformer-thunder-and-fang-performer-fn4-11" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitthunderandfangperformer-thunder-and-fang-performer-fn4-11"><Link to="/trait/thunder_and_fang_performer">⮞</Link> Thunder and Fang Performer <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-4.11" id="main-traits_combat_all-fake-fn-4.11" data-hash-target to="main-traits_combat_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitthunderandfangperformer-thunder-and-fang-performer-fn4-11-flavor">You learned from Shoanti champions to take advantage of the dramatic swings required by heavy weapons like the <Link to="/eq-weapon/earth_breaker">earth breaker</Link>.</Pair>
<Pair single="benefit" id="traitthunderandfangperformer-thunder-and-fang-performer-fn4-11-benefit">You gain a +2 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks while wielding a two-handed melee weapon.</Pair>
</Ability>
<Ability id="traittothelast-to-the-last-fn9-9" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traittothelast-to-the-last-fn9-9"><Link to="/trait/to_the_last">⮞</Link> To The Last <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-9.9" id="main-traits_combat_all-fake-fn-9.9" data-hash-target to="main-traits_combat_all-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traittothelast-to-the-last-fn9-9-benefit">Choose one type of medium or heavy armor (such as <Link to="/eq-armor/chainmail">chainmail</Link> or <Link to="/eq-armor/half_plate">half-plate</Link>). If you have no allies within 60 feet when you are wearing that type of armor, you gain DR 1/-. This stacks with any one other source of damage resistance you have.</Pair>
</Ability>
<Ability id="traittrackerofthesociety-tracker-of-the-society-fn12-5-fn13-8" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traittrackerofthesociety-tracker-of-the-society-fn12-5-fn13-8"><Link to="/trait/tracker_of_the_society">⮞</Link> Tracker of the Society <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-12.5" id="main-traits_combat_all-fake-fn-12.5" data-hash-target to="main-traits_combat_all-fake-fn-12-target">12</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-13.8" id="main-traits_combat_all-fake-fn-13.8" data-hash-target to="main-traits_combat_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traittrackerofthesociety-tracker-of-the-society-fn12-5-fn13-8-flavor">Thanks to your time as a Pathfinder, you've mastered the art of tracking.</Pair>
<Pair single="benefit" id="traittrackerofthesociety-tracker-of-the-society-fn12-5-fn13-8-benefit">You gain a +1 trait bonus on initiative checks and a +2 trait bonus on Survival checks made while traveling through any of your favored terrains. This is in addition to any bonuses you receive from your <Link to="/ability/favored_terrain">favored terrain</Link> class ability.</Pair>
</Ability>
<Ability id="traitunblemishedbarrel-unblemished-barrel-fn6-39" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitunblemishedbarrel-unblemished-barrel-fn6-39"><Link to="/trait/unblemished_barrel">⮞</Link> Unblemished Barrel <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.39" id="main-traits_combat_all-fake-fn-6.39" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitunblemishedbarrel-unblemished-barrel-fn6-39-flavor">Your skill with firearms speeds your repair of such weapons.</Pair>
<Pair single="benefit" id="traitunblemishedbarrel-unblemished-barrel-fn6-39-benefit">You gain a +1 trait bonus on <Link to="/skill/craft">Craft</Link> (alchemy) and Craft (weapons) checks, and it takes you only 30 minutes to remove the broken condition from a firearm.</Pair>
</Ability>
<Ability id="traitundergrowthspecialist-undergrowth-specialist-fn14-5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitundergrowthspecialist-undergrowth-specialist-fn14-5"><Link to="/trait/undergrowth_specialist">⮞</Link> Undergrowth Specialist <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-14.5" id="main-traits_combat_all-fake-fn-14.5" data-hash-target to="main-traits_combat_all-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitundergrowthspecialist-undergrowth-specialist-fn14-5-flavor">You've trained yourself to move in and out of undergrowth with ease.</Pair>
<Pair single="benefit" id="traitundergrowthspecialist-undergrowth-specialist-fn14-5-benefit">The DCs of <Link to="/skill/acrobatics">Acrobatics</Link> checks don't increase for you when you're moving through light undergrowth, and the DCs of Acrobatics checks you attempt while you're moving through heavy undergrowth increase only by 2.</Pair>
</Ability>
<Ability id="traitunpredictablereactions-unpredictable-reactions-fn28-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitunpredictablereactions-unpredictable-reactions-fn28-2"><Link to="/trait/unpredictable_reactions">⮞</Link> Unpredictable Reactions <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-28.2" id="main-traits_combat_all-fake-fn-28.2" data-hash-target to="main-traits_combat_all-fake-fn-28-target">28</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitunpredictablereactions-unpredictable-reactions-fn28-2-flavor">Your reactions to combat beginning aren't what people expect.</Pair>
<Pair single="benefit" id="traitunpredictablereactions-unpredictable-reactions-fn28-2-benefit">You gain a +1 trait bonus on attack rolls made during the surprise round of combat.</Pair>
</Ability>
<Ability id="traitvandal-vandal-fn37" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitvandal-vandal-fn37"><Link to="/trait/vandal">⮞</Link> Vandal <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-37" id="main-traits_combat_all-fake-fn-37" data-hash-target to="main-traits_combat_all-fake-fn-37-target">37</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traitvandal-vandal-fn37-benefit">You gain a +2 bonus on Strength checks to break objects, and when damaging an object with a weapon, natural weapon, or unarmed attack, you ignore 2 points of its hardness.</Pair>
</Ability>
<Ability id="traitvengefulcombat-vengeful-combat-fn18-9" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitvengefulcombat-vengeful-combat-fn18-9"><Link to="/trait/vengeful_combat">⮞</Link> Vengeful (Combat) <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-18.9" id="main-traits_combat_all-fake-fn-18.9" data-hash-target to="main-traits_combat_all-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitvengefulcombat-vengeful-combat-fn18-9-flavor">During your childhood, you suffered occasional or frequent abuse from those too powerful for you to resist. Now you thrill at the chance to get back at those who wronged you.</Pair>
<Pair single="benefit" id="traitvengefulcombat-vengeful-combat-fn18-9-benefit"><p>Whenever you strike the last creature that damaged you in the past 24 hours, you gain a +1 trait bonus on damage rolls against that creature.</p>
<p><strong>Suggested Characters:</strong> Calistrians, Galtan refugees, Gyronna worshipers.</p>
</Pair>
</Ability>
<Ability id="traitvenomresistance-venom-resistance-fn14-6" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitvenomresistance-venom-resistance-fn14-6"><Link to="/trait/venom_resistance">⮞</Link> Venom Resistance <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-14.6" id="main-traits_combat_all-fake-fn-14.6" data-hash-target to="main-traits_combat_all-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitvenomresistance-venom-resistance-fn14-6-flavor">You have spent considerable time in arid wastelands where girtablilus and other venomous creatures are common, and you have built up a resistance to poison.</Pair>
<Pair single="benefit" id="traitvenomresistance-venom-resistance-fn14-6-benefit">You gain a +2 trait bonus on Fortitude saving throws against poison, and once per day when attempting a saving throw to resist <Link to="/monster/girtablilu">girtablilu</Link> poison, you can roll twice and take the higher result.</Pair>
</Ability>
<Ability id="traitvigilantbattler-vigilant-battler-fn6-40" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitvigilantbattler-vigilant-battler-fn6-40"><Link to="/trait/vigilant_battler">⮞</Link> Vigilant Battler <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-6.40" id="main-traits_combat_all-fake-fn-6.40" data-hash-target to="main-traits_combat_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitvigilantbattler-vigilant-battler-fn6-40-flavor">You are hard to fool and harder to trick with a feint.</Pair>
<Pair single="benefit" id="traitvigilantbattler-vigilant-battler-fn6-40-benefit">You gain a +1 trait bonus on all <Link to="/skill/sense_motive">Sense Motive</Link> checks. This trait bonus increases to +2 when used to counter a <Link to="/rule/feint">feint</Link> in combat.</Pair>
</Ability>
<Ability id="traitvolatilefuse-volatile-fuse-fn14-7" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitvolatilefuse-volatile-fuse-fn14-7"><Link to="/trait/volatile_fuse">⮞</Link> Volatile Fuse <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-14.7" id="main-traits_combat_all-fake-fn-14.7" data-hash-target to="main-traits_combat_all-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitvolatilefuse-volatile-fuse-fn14-7-flavor">Firearms you wield are especially dangerous to you and everyone nearby.</Pair>
<Pair single="benefit" id="traitvolatilefuse-volatile-fuse-fn14-7-benefit"><p>Whenever a firearm you wield misfires or explodes, roll a d%. On a result of 1-25, the misfire or explosion is delayed; reroll the attack with a -5 penalty (penalties from the broken condition are not applied to this reroll, and a firearm that was already broken does not explode). After the reroll is resolved, apply the effects of the misfire or explosion as normal. (If the d% roll result is 26 or higher, the misfire or explosion happens as normal.)</p>
<p>Whenever a firearm you wield explodes due to a misfire, increase the explosion's damage by 1d6 plus 1d6 for every 4 character levels you have.</p>
</Pair>
</Ability>
<Ability id="traitwaryeye-wary-eye-fn38" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitwaryeye-wary-eye-fn38"><Link to="/trait/wary_eye">⮞</Link> Wary Eye <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-38" id="main-traits_combat_all-fake-fn-38" data-hash-target to="main-traits_combat_all-fake-fn-38-target">38</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitwaryeye-wary-eye-fn38-flavor">You know that you could be exposed at any time. Even your closest friends could someday become enemies, and so you have trained yourself to never be surprised by a betrayal.</Pair>
<Pair single="benefit" id="traitwaryeye-wary-eye-fn38-benefit"><p>At the beginning of combat, before initiative checks are revealed, you can select one opponent you are aware of to be the subject of this trait. If you succeed at a Wisdom check opposed by the subject's initiative check, you are not considered <Link to="/rule/flat_footed">flat-footed</Link> against this subject for this combat, even if you normally would be.</p>
<p>You can use this trait in a surprise round, even if you cannot otherwise act that round.</p>
</Pair>
</Ability>
<Ability id="traitweaponofpeace-weapon-of-peace-fn17-5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitweaponofpeace-weapon-of-peace-fn17-5"><Link to="/trait/weapon_of_peace">⮞</Link> Weapon of Peace <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-17.5" id="main-traits_combat_all-fake-fn-17.5" data-hash-target to="main-traits_combat_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitweaponofpeace-weapon-of-peace-fn17-5-flavor">Even though you are a trained combatant, proficient with any number of weapons, you don't relish killing your enemies. It's not that you're afraid of seeing blood, but rather that disabling a foe is superior to killing someone capable of admitting defeat.</Pair>
<Pair single="benefit" id="traitweaponofpeace-weapon-of-peace-fn17-5-benefit">When using a melee weapon that deals lethal damage to instead deal nonlethal damage, you take only a -2 penalty instead of -4.</Pair>
</Ability>
<Ability id="traitwittyrepartee-witty-repartee-fn13-9" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitwittyrepartee-witty-repartee-fn13-9"><Link to="/trait/witty_repartee">⮞</Link> Witty Repartee <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-13.9" id="main-traits_combat_all-fake-fn-13.9" data-hash-target to="main-traits_combat_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl><Link to="/rule/kitharodian_academy">Kitharodian Academy</Link></Pair>
<Pair single="flavor" id="traitwittyrepartee-witty-repartee-fn13-9-flavor">You are quick with your tongue and have always possessed the talent to quickly admonish your enemies.</Pair>
<Pair single="benefit" id="traitwittyrepartee-witty-repartee-fn13-9-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks and Bluff is a class skill for you.</Pair>
</Ability>
<Ability id="traityouthfulinfiltrator-youthful-infiltrator-fn38-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traityouthfulinfiltrator-youthful-infiltrator-fn38-2"><Link to="/trait/youthful_infiltrator">⮞</Link> Youthful Infiltrator <sup><InnerLink showBacklink="backlink-main-traits_combat_all-fake-fn-38.2" id="main-traits_combat_all-fake-fn-38.2" data-hash-target to="main-traits_combat_all-fake-fn-38-target">38</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traityouthfulinfiltrator-youthful-infiltrator-fn38-2-flavor">You were trained from a young age to ambush the enemies of your order or organization, which makes you hard to trust for most outside your organization if they learn your affiliation.</Pair>
<Pair single="benefit" id="traityouthfulinfiltrator-youthful-infiltrator-fn38-2-benefit">You gain a +1 trait bonus on attack rolls against <Link to="/rule/flat_footed">flat-footed</Link> foes, as long as they have not seen you make an attack with this bonus before.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_combat_all-label">Footnotes</h3><ol>
<li id="main-traits_combat_all-fake-fn-1-target"><p><Link to="/source/advanced_class_origins">Advanced Class Origins</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_combat_all-fake-fn-1" data-hash-target to="main-traits_combat_all-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_combat_all-fake-fn-1.2" data-hash-target to="main-traits_combat_all-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_combat_all-fake-fn-1.3" data-hash-target to="main-traits_combat_all-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_combat_all-fake-fn-1.4" data-hash-target to="main-traits_combat_all-fake-fn-1.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-2-target"><p><Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_combat_all-fake-fn-2" data-hash-target to="main-traits_combat_all-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_combat_all-fake-fn-2.2" data-hash-target to="main-traits_combat_all-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_combat_all-fake-fn-2.3" data-hash-target to="main-traits_combat_all-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_combat_all-fake-fn-2.4" data-hash-target to="main-traits_combat_all-fake-fn-2.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-3-target"><p><Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_all-fake-fn-3" data-hash-target to="main-traits_combat_all-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_all-fake-fn-3.2" data-hash-target to="main-traits_combat_all-fake-fn-3.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-4-target"><p><Link to="/source/weapon_masters_handbook">Weapon Master's Handbook</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_all-fake-fn-4" data-hash-target to="main-traits_combat_all-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_all-fake-fn-4.2" data-hash-target to="main-traits_combat_all-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_all-fake-fn-4.3" data-hash-target to="main-traits_combat_all-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_all-fake-fn-4.4" data-hash-target to="main-traits_combat_all-fake-fn-4.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_all-fake-fn-4.5" data-hash-target to="main-traits_combat_all-fake-fn-4.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_all-fake-fn-4.6" data-hash-target to="main-traits_combat_all-fake-fn-4.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_all-fake-fn-4.7" data-hash-target to="main-traits_combat_all-fake-fn-4.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_all-fake-fn-4.8" data-hash-target to="main-traits_combat_all-fake-fn-4.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_all-fake-fn-4.9" data-hash-target to="main-traits_combat_all-fake-fn-4.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_all-fake-fn-4.10" data-hash-target to="main-traits_combat_all-fake-fn-4.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_all-fake-fn-4.11" data-hash-target to="main-traits_combat_all-fake-fn-4.11">↩<sup>11</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-5-target"><p><Link to="/source/pathfinder_society_primer">Pathfinder Society Primer</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_combat_all-fake-fn-5" data-hash-target to="main-traits_combat_all-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_combat_all-fake-fn-5.2" data-hash-target to="main-traits_combat_all-fake-fn-5.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-6-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6" data-hash-target to="main-traits_combat_all-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.2" data-hash-target to="main-traits_combat_all-fake-fn-6.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.3" data-hash-target to="main-traits_combat_all-fake-fn-6.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.4" data-hash-target to="main-traits_combat_all-fake-fn-6.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.5" data-hash-target to="main-traits_combat_all-fake-fn-6.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.6" data-hash-target to="main-traits_combat_all-fake-fn-6.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.7" data-hash-target to="main-traits_combat_all-fake-fn-6.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.8" data-hash-target to="main-traits_combat_all-fake-fn-6.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.9" data-hash-target to="main-traits_combat_all-fake-fn-6.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.10" data-hash-target to="main-traits_combat_all-fake-fn-6.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.11" data-hash-target to="main-traits_combat_all-fake-fn-6.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.12" data-hash-target to="main-traits_combat_all-fake-fn-6.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.13" data-hash-target to="main-traits_combat_all-fake-fn-6.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.14" data-hash-target to="main-traits_combat_all-fake-fn-6.14">↩<sup>14</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.15" data-hash-target to="main-traits_combat_all-fake-fn-6.15">↩<sup>15</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.16" data-hash-target to="main-traits_combat_all-fake-fn-6.16">↩<sup>16</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.17" data-hash-target to="main-traits_combat_all-fake-fn-6.17">↩<sup>17</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.18" data-hash-target to="main-traits_combat_all-fake-fn-6.18">↩<sup>18</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.19" data-hash-target to="main-traits_combat_all-fake-fn-6.19">↩<sup>19</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.20" data-hash-target to="main-traits_combat_all-fake-fn-6.20">↩<sup>20</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.21" data-hash-target to="main-traits_combat_all-fake-fn-6.21">↩<sup>21</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.22" data-hash-target to="main-traits_combat_all-fake-fn-6.22">↩<sup>22</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.23" data-hash-target to="main-traits_combat_all-fake-fn-6.23">↩<sup>23</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.24" data-hash-target to="main-traits_combat_all-fake-fn-6.24">↩<sup>24</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.25" data-hash-target to="main-traits_combat_all-fake-fn-6.25">↩<sup>25</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.26" data-hash-target to="main-traits_combat_all-fake-fn-6.26">↩<sup>26</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.27" data-hash-target to="main-traits_combat_all-fake-fn-6.27">↩<sup>27</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.28" data-hash-target to="main-traits_combat_all-fake-fn-6.28">↩<sup>28</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.29" data-hash-target to="main-traits_combat_all-fake-fn-6.29">↩<sup>29</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.30" data-hash-target to="main-traits_combat_all-fake-fn-6.30">↩<sup>30</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.31" data-hash-target to="main-traits_combat_all-fake-fn-6.31">↩<sup>31</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.32" data-hash-target to="main-traits_combat_all-fake-fn-6.32">↩<sup>32</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.33" data-hash-target to="main-traits_combat_all-fake-fn-6.33">↩<sup>33</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.34" data-hash-target to="main-traits_combat_all-fake-fn-6.34">↩<sup>34</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.35" data-hash-target to="main-traits_combat_all-fake-fn-6.35">↩<sup>35</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.36" data-hash-target to="main-traits_combat_all-fake-fn-6.36">↩<sup>36</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.37" data-hash-target to="main-traits_combat_all-fake-fn-6.37">↩<sup>37</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.38" data-hash-target to="main-traits_combat_all-fake-fn-6.38">↩<sup>38</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.39" data-hash-target to="main-traits_combat_all-fake-fn-6.39">↩<sup>39</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_all-fake-fn-6.40" data-hash-target to="main-traits_combat_all-fake-fn-6.40">↩<sup>40</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-7-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_combat_all-fake-fn-7" data-hash-target to="main-traits_combat_all-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_combat_all-fake-fn-7.2" data-hash-target to="main-traits_combat_all-fake-fn-7.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_combat_all-fake-fn-7.3" data-hash-target to="main-traits_combat_all-fake-fn-7.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_combat_all-fake-fn-7.4" data-hash-target to="main-traits_combat_all-fake-fn-7.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_combat_all-fake-fn-7.5" data-hash-target to="main-traits_combat_all-fake-fn-7.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_combat_all-fake-fn-7.6" data-hash-target to="main-traits_combat_all-fake-fn-7.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_combat_all-fake-fn-7.7" data-hash-target to="main-traits_combat_all-fake-fn-7.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_combat_all-fake-fn-7.8" data-hash-target to="main-traits_combat_all-fake-fn-7.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_combat_all-fake-fn-7.9" data-hash-target to="main-traits_combat_all-fake-fn-7.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_combat_all-fake-fn-7.10" data-hash-target to="main-traits_combat_all-fake-fn-7.10">↩<sup>10</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-8-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_all-fake-fn-8" data-hash-target to="main-traits_combat_all-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_all-fake-fn-8.2" data-hash-target to="main-traits_combat_all-fake-fn-8.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_all-fake-fn-8.3" data-hash-target to="main-traits_combat_all-fake-fn-8.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_all-fake-fn-8.4" data-hash-target to="main-traits_combat_all-fake-fn-8.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_all-fake-fn-8.5" data-hash-target to="main-traits_combat_all-fake-fn-8.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_all-fake-fn-8.6" data-hash-target to="main-traits_combat_all-fake-fn-8.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_all-fake-fn-8.7" data-hash-target to="main-traits_combat_all-fake-fn-8.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_all-fake-fn-8.8" data-hash-target to="main-traits_combat_all-fake-fn-8.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_all-fake-fn-8.9" data-hash-target to="main-traits_combat_all-fake-fn-8.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_all-fake-fn-8.10" data-hash-target to="main-traits_combat_all-fake-fn-8.10">↩<sup>10</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-9-target"><p><Link to="/source/armor_masters_handbook">Armor Master's Handbook</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_combat_all-fake-fn-9" data-hash-target to="main-traits_combat_all-fake-fn-9">↩</InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_combat_all-fake-fn-9.2" data-hash-target to="main-traits_combat_all-fake-fn-9.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_combat_all-fake-fn-9.3" data-hash-target to="main-traits_combat_all-fake-fn-9.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_combat_all-fake-fn-9.4" data-hash-target to="main-traits_combat_all-fake-fn-9.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_combat_all-fake-fn-9.5" data-hash-target to="main-traits_combat_all-fake-fn-9.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_combat_all-fake-fn-9.6" data-hash-target to="main-traits_combat_all-fake-fn-9.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_combat_all-fake-fn-9.7" data-hash-target to="main-traits_combat_all-fake-fn-9.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_combat_all-fake-fn-9.8" data-hash-target to="main-traits_combat_all-fake-fn-9.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_combat_all-fake-fn-9.9" data-hash-target to="main-traits_combat_all-fake-fn-9.9">↩<sup>9</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-10-target"><p><Link to="/source/arcane_anthology">Arcane Anthology</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_combat_all-fake-fn-10" data-hash-target to="main-traits_combat_all-fake-fn-10">↩</InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_combat_all-fake-fn-10.2" data-hash-target to="main-traits_combat_all-fake-fn-10.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-11-target"><p><Link to="/source/agents_of_evil">Agents of Evil</Link> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_combat_all-fake-fn-11" data-hash-target to="main-traits_combat_all-fake-fn-11">↩</InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_combat_all-fake-fn-11.2" data-hash-target to="main-traits_combat_all-fake-fn-11.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-12-target"><p><Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_combat_all-fake-fn-12" data-hash-target to="main-traits_combat_all-fake-fn-12">↩</InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_combat_all-fake-fn-12.2" data-hash-target to="main-traits_combat_all-fake-fn-12.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_combat_all-fake-fn-12.3" data-hash-target to="main-traits_combat_all-fake-fn-12.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_combat_all-fake-fn-12.4" data-hash-target to="main-traits_combat_all-fake-fn-12.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_combat_all-fake-fn-12.5" data-hash-target to="main-traits_combat_all-fake-fn-12.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-13-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_combat_all-fake-fn-13" data-hash-target to="main-traits_combat_all-fake-fn-13">↩</InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_combat_all-fake-fn-13.2" data-hash-target to="main-traits_combat_all-fake-fn-13.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_combat_all-fake-fn-13.3" data-hash-target to="main-traits_combat_all-fake-fn-13.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_combat_all-fake-fn-13.4" data-hash-target to="main-traits_combat_all-fake-fn-13.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_combat_all-fake-fn-13.5" data-hash-target to="main-traits_combat_all-fake-fn-13.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_combat_all-fake-fn-13.6" data-hash-target to="main-traits_combat_all-fake-fn-13.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_combat_all-fake-fn-13.7" data-hash-target to="main-traits_combat_all-fake-fn-13.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_combat_all-fake-fn-13.8" data-hash-target to="main-traits_combat_all-fake-fn-13.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_combat_all-fake-fn-13.9" data-hash-target to="main-traits_combat_all-fake-fn-13.9">↩<sup>9</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-14-target"><p><Link to="/source/people_of_the_wastes">People of the Wastes</Link> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_combat_all-fake-fn-14" data-hash-target to="main-traits_combat_all-fake-fn-14">↩</InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_combat_all-fake-fn-14.2" data-hash-target to="main-traits_combat_all-fake-fn-14.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_combat_all-fake-fn-14.3" data-hash-target to="main-traits_combat_all-fake-fn-14.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_combat_all-fake-fn-14.4" data-hash-target to="main-traits_combat_all-fake-fn-14.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_combat_all-fake-fn-14.5" data-hash-target to="main-traits_combat_all-fake-fn-14.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_combat_all-fake-fn-14.6" data-hash-target to="main-traits_combat_all-fake-fn-14.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_combat_all-fake-fn-14.7" data-hash-target to="main-traits_combat_all-fake-fn-14.7">↩<sup>7</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-15-target"><p><Link to="/source/champions_of_corruption">Champions of Corruption</Link> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_combat_all-fake-fn-15" data-hash-target to="main-traits_combat_all-fake-fn-15">↩</InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_combat_all-fake-fn-15.2" data-hash-target to="main-traits_combat_all-fake-fn-15.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-16-target"><p><Link to="/source/people_of_the_stars">People of the Stars</Link> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_combat_all-fake-fn-16" data-hash-target to="main-traits_combat_all-fake-fn-16">↩</InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_combat_all-fake-fn-16.2" data-hash-target to="main-traits_combat_all-fake-fn-16.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_combat_all-fake-fn-16.3" data-hash-target to="main-traits_combat_all-fake-fn-16.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_combat_all-fake-fn-16.4" data-hash-target to="main-traits_combat_all-fake-fn-16.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-17-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_combat_all-fake-fn-17" data-hash-target to="main-traits_combat_all-fake-fn-17">↩</InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_combat_all-fake-fn-17.2" data-hash-target to="main-traits_combat_all-fake-fn-17.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_combat_all-fake-fn-17.3" data-hash-target to="main-traits_combat_all-fake-fn-17.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_combat_all-fake-fn-17.4" data-hash-target to="main-traits_combat_all-fake-fn-17.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_combat_all-fake-fn-17.5" data-hash-target to="main-traits_combat_all-fake-fn-17.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-18-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_combat_all-fake-fn-18" data-hash-target to="main-traits_combat_all-fake-fn-18">↩</InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_combat_all-fake-fn-18.2" data-hash-target to="main-traits_combat_all-fake-fn-18.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_combat_all-fake-fn-18.3" data-hash-target to="main-traits_combat_all-fake-fn-18.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_combat_all-fake-fn-18.4" data-hash-target to="main-traits_combat_all-fake-fn-18.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_combat_all-fake-fn-18.5" data-hash-target to="main-traits_combat_all-fake-fn-18.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_combat_all-fake-fn-18.6" data-hash-target to="main-traits_combat_all-fake-fn-18.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_combat_all-fake-fn-18.7" data-hash-target to="main-traits_combat_all-fake-fn-18.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_combat_all-fake-fn-18.8" data-hash-target to="main-traits_combat_all-fake-fn-18.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_combat_all-fake-fn-18.9" data-hash-target to="main-traits_combat_all-fake-fn-18.9">↩<sup>9</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-19-target"><p><Link to="/source/antiheros_handbook">Antihero's Handbook</Link> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_combat_all-fake-fn-19" data-hash-target to="main-traits_combat_all-fake-fn-19">↩</InnerLink> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_combat_all-fake-fn-19.2" data-hash-target to="main-traits_combat_all-fake-fn-19.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_combat_all-fake-fn-19.3" data-hash-target to="main-traits_combat_all-fake-fn-19.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_combat_all-fake-fn-19.4" data-hash-target to="main-traits_combat_all-fake-fn-19.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-20-target"><p><Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_combat_all-fake-fn-20" data-hash-target to="main-traits_combat_all-fake-fn-20">↩</InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-21-target"><p><Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link> <InnerLink aria-label="Back to reference 21" id="backlink-main-traits_combat_all-fake-fn-21" data-hash-target to="main-traits_combat_all-fake-fn-21">↩</InnerLink> <InnerLink aria-label="Back to reference 21" id="backlink-main-traits_combat_all-fake-fn-21.2" data-hash-target to="main-traits_combat_all-fake-fn-21.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-22-target"><p><Link to="/source/wilderness_origins">Wilderness Origins</Link> <InnerLink aria-label="Back to reference 22" id="backlink-main-traits_combat_all-fake-fn-22" data-hash-target to="main-traits_combat_all-fake-fn-22">↩</InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-23-target"><p><Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook</Link> <InnerLink aria-label="Back to reference 23" id="backlink-main-traits_combat_all-fake-fn-23" data-hash-target to="main-traits_combat_all-fake-fn-23">↩</InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-24-target"><p><Link to="/source/sargava_the_lost_colony">Sargava, the Lost Colony</Link> <InnerLink aria-label="Back to reference 24" id="backlink-main-traits_combat_all-fake-fn-24" data-hash-target to="main-traits_combat_all-fake-fn-24">↩</InnerLink> <InnerLink aria-label="Back to reference 24" id="backlink-main-traits_combat_all-fake-fn-24.2" data-hash-target to="main-traits_combat_all-fake-fn-24.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 24" id="backlink-main-traits_combat_all-fake-fn-24.3" data-hash-target to="main-traits_combat_all-fake-fn-24.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 24" id="backlink-main-traits_combat_all-fake-fn-24.4" data-hash-target to="main-traits_combat_all-fake-fn-24.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-25-target"><p><Link to="/source/bastards_of_golarion">Bastards of Golarion</Link> <InnerLink aria-label="Back to reference 25" id="backlink-main-traits_combat_all-fake-fn-25" data-hash-target to="main-traits_combat_all-fake-fn-25">↩</InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-26-target"><p><Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook</Link> <InnerLink aria-label="Back to reference 26" id="backlink-main-traits_combat_all-fake-fn-26" data-hash-target to="main-traits_combat_all-fake-fn-26">↩</InnerLink> <InnerLink aria-label="Back to reference 26" id="backlink-main-traits_combat_all-fake-fn-26.2" data-hash-target to="main-traits_combat_all-fake-fn-26.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-27-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 29 <InnerLink aria-label="Back to reference 27" id="backlink-main-traits_combat_all-fake-fn-27" data-hash-target to="main-traits_combat_all-fake-fn-27">↩</InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-28-target"><p><Link to="/source/champions_of_balance">Champions of Balance</Link> <InnerLink aria-label="Back to reference 28" id="backlink-main-traits_combat_all-fake-fn-28" data-hash-target to="main-traits_combat_all-fake-fn-28">↩</InnerLink> <InnerLink aria-label="Back to reference 28" id="backlink-main-traits_combat_all-fake-fn-28.2" data-hash-target to="main-traits_combat_all-fake-fn-28.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-29-target"><p><Link to="/source/merchants_manifest">Merchant's Manifest</Link> <InnerLink aria-label="Back to reference 29" id="backlink-main-traits_combat_all-fake-fn-29" data-hash-target to="main-traits_combat_all-fake-fn-29">↩</InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-30-target"><p><Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link> <InnerLink aria-label="Back to reference 30" id="backlink-main-traits_combat_all-fake-fn-30" data-hash-target to="main-traits_combat_all-fake-fn-30">↩</InnerLink> <InnerLink aria-label="Back to reference 30" id="backlink-main-traits_combat_all-fake-fn-30.2" data-hash-target to="main-traits_combat_all-fake-fn-30.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-31-target"><p><Link to="/source/people_of_the_river">People of the River</Link> <InnerLink aria-label="Back to reference 31" id="backlink-main-traits_combat_all-fake-fn-31" data-hash-target to="main-traits_combat_all-fake-fn-31">↩</InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-32-target"><p><Link to="/source/qadira_jewel_of_the_east">Qadira, Jewel of the East</Link> <InnerLink aria-label="Back to reference 32" id="backlink-main-traits_combat_all-fake-fn-32" data-hash-target to="main-traits_combat_all-fake-fn-32">↩</InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-33-target"><p><Link to="/source/qadira_gateway_to_the_east">Qadira, Gateway to the East</Link> <InnerLink aria-label="Back to reference 33" id="backlink-main-traits_combat_all-fake-fn-33" data-hash-target to="main-traits_combat_all-fake-fn-33">↩</InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-34-target"><p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook</Link> <InnerLink aria-label="Back to reference 34" id="backlink-main-traits_combat_all-fake-fn-34" data-hash-target to="main-traits_combat_all-fake-fn-34">↩</InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-35-target"><p>Blood of the Ancients pg. 31 <InnerLink aria-label="Back to reference 35" id="backlink-main-traits_combat_all-fake-fn-35" data-hash-target to="main-traits_combat_all-fake-fn-35">↩</InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-36-target"><p><Link to="/source/black_markets">Black Markets</Link> <InnerLink aria-label="Back to reference 36" id="backlink-main-traits_combat_all-fake-fn-36" data-hash-target to="main-traits_combat_all-fake-fn-36">↩</InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-37-target"><p><Link to="/source/heroes_of_the_wild">Heroes of the Wild</Link> <InnerLink aria-label="Back to reference 37" id="backlink-main-traits_combat_all-fake-fn-37" data-hash-target to="main-traits_combat_all-fake-fn-37">↩</InnerLink></p></li>
<li id="main-traits_combat_all-fake-fn-38-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 38" id="backlink-main-traits_combat_all-fake-fn-38" data-hash-target to="main-traits_combat_all-fake-fn-38">↩</InnerLink> <InnerLink aria-label="Back to reference 38" id="backlink-main-traits_combat_all-fake-fn-38.2" data-hash-target to="main-traits_combat_all-fake-fn-38.2">↩<sup>2</sup></InnerLink></p></li>
</ol></section></IonList>};
const _traits_combat_ab = {title: "Skill/Feat/Ability Combat Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_combat" className="reversed" info="Back to Combat Traits" /><Ability id="traitabsoluteloyalty-absolute-loyalty-fn1" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitabsoluteloyalty-absolute-loyalty-fn1"><Link to="/trait/absolute_loyalty">⮞</Link> Absolute Loyalty <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-1" id="main-traits_combat_ab-fake-fn-1" data-hash-target to="main-traits_combat_ab-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traitabsoluteloyalty-absolute-loyalty-fn1-benefit">You gain the one-time ability to immediately cast <Link to="/spell/atonement">atonement</Link> upon yourself as a spell-like ability upon performing an act or being subjected to an effect that spell affects. This ability can only be used while you are acting in the service of your liege (an individual of higher social standing chosen when you take this feat).</Pair>
</Ability>
<Ability id="traitaccelerateddrinker-accelerated-drinker-fn2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitaccelerateddrinker-accelerated-drinker-fn2"><Link to="/trait/accelerated_drinker">⮞</Link> Accelerated Drinker <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-2" id="main-traits_combat_ab-fake-fn-2" data-hash-target to="main-traits_combat_ab-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitaccelerateddrinker-accelerated-drinker-fn2-flavor">You know how to drink a potion efficiently, such as by not using your hands, tossing it in the air and catching it in your mouth, or opening it with your teeth.</Pair>
<Pair single="benefit" id="traitaccelerateddrinker-accelerated-drinker-fn2-benefit">You may drink a potion as a <strong className="hl">move action</strong> instead of a standard as long as you start your turn with the potion in your hand.</Pair>
</Ability>
<Ability id="traitarmorexpert-armor-expert-fn3-fn4-fn5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitarmorexpert-armor-expert-fn3-fn4-fn5"><Link to="/trait/armor_expert">⮞</Link> Armor Expert <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-3" id="main-traits_combat_ab-fake-fn-3" data-hash-target to="main-traits_combat_ab-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-4" id="main-traits_combat_ab-fake-fn-4" data-hash-target to="main-traits_combat_ab-fake-fn-4-target">4</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-5" id="main-traits_combat_ab-fake-fn-5" data-hash-target to="main-traits_combat_ab-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitarmorexpert-armor-expert-fn3-fn4-fn5-flavor">You have worn armor as long as you can remember, either as part of your training to become a knight's squire or simply because you were seeking to emulate a hero. Your childhood armor wasn't the real thing as far as protection, but it did encumber you as much as real armor would have, and you've grown used to moving in such suits with relative grace.</Pair>
<Pair single="benefit" id="traitarmorexpert-armor-expert-fn3-fn4-fn5-benefit">When you wear armor of any sort, reduce that suit's armor check penalty by 1, to a minimum check penalty of 0.</Pair>
</Ability>
<Ability id="traitarmoredrider-armored-rider-fn6" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitarmoredrider-armored-rider-fn6"><Link to="/trait/armored_rider">⮞</Link> Armored Rider <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-6" id="main-traits_combat_ab-fake-fn-6" data-hash-target to="main-traits_combat_ab-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traitarmoredrider-armored-rider-fn6-benefit">You gain a +1 trait bonus on <Link to="/skill/ride">Ride</Link> checks, and Ride is a class skill for you. You don't take an armor check penalty on Ride checks while wearing light or medium armor.</Pair>
</Ability>
<Ability id="traitbattlefielddisciple-battlefield-disciple-fn3-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbattlefielddisciple-battlefield-disciple-fn3-2"><Link to="/trait/battlefield_disciple">⮞</Link> Battlefield Disciple <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-3.2" id="main-traits_combat_ab-fake-fn-3.2" data-hash-target to="main-traits_combat_ab-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitbattlefielddisciple-battlefield-disciple-fn3-2-flavor">You are skilled at supporting your allies in the heat of battle.</Pair>
<Pair single="benefit" id="traitbattlefielddisciple-battlefield-disciple-fn3-2-benefit">You gain a +2 trait bonus on Heal checks made to stabilize a <Link to="/misc/dying">dying</Link> creature. In addition, when you successfully use the <Link to="/rule/aid_another_2">aid another</Link> action in combat to grant an ally a bonus on her next attack roll, the bonus you grant increases by 1.</Pair>
</Ability>
<Ability id="traitbrokennotbeaten-broken-not-beaten-fn7" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbrokennotbeaten-broken-not-beaten-fn7"><Link to="/trait/broken_not_beaten">⮞</Link> Broken, Not Beaten <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-7" id="main-traits_combat_ab-fake-fn-7" data-hash-target to="main-traits_combat_ab-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traitbrokennotbeaten-broken-not-beaten-fn7-benefit">You automatically <Link to="/misc/stabilize">stabilize</Link> when reduced below 0 hit points. Once per day when brought below 0 hit points, you can accept 1 point of damage to regain consciousness for 1 round, though you remain staggered and only able to take a single move or standard action.</Pair>
</Ability>
<Ability id="traitguerrillatactics-guerrilla-tactics-fn8" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitguerrillatactics-guerrilla-tactics-fn8"><Link to="/trait/guerrilla_tactics">⮞</Link> Guerrilla Tactics <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-8" id="main-traits_combat_ab-fake-fn-8" data-hash-target to="main-traits_combat_ab-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traitguerrillatactics-guerrilla-tactics-fn8-benefit">You gain a +2 trait bonus on <Link to="/skill/stealth">Stealth</Link> checks and Initiative checks in forests.</Pair>
</Ability>
<Ability id="traithelpfulcop-helpful-cop-fn9" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traithelpfulcop-helpful-cop-fn9"><Link to="/trait/helpful_cop">⮞</Link> Helpful (CoP) <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-9" id="main-traits_combat_ab-fake-fn-9" data-hash-target to="main-traits_combat_ab-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traithelpfulcop-helpful-cop-fn9-flavor">You always know the best way to assist your companions, be it assisting them with a task, defending them in battle, or helping them place a well-aimed strike.</Pair>
<Pair single="benefit" id="traithelpfulcop-helpful-cop-fn9-benefit">When using the <Link to="/rule/aid_another">aid another</Link> action, you grant your ally a +3 bonus instead of a +2 bonus.</Pair>
</Ability>
<Ability id="traitinspiring-inspiring-fn10" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitinspiring-inspiring-fn10"><Link to="/trait/inspiring">⮞</Link> Inspiring <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-10" id="main-traits_combat_ab-fake-fn-10" data-hash-target to="main-traits_combat_ab-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitinspiring-inspiring-fn10-flavor">As a child, you learned the power of a simple expression of faith in another when you gave a hero the inspiration to fight on in the face of terrible odds and save you from danger.</Pair>
<Pair single="benefit" id="traitinspiring-inspiring-fn10-benefit"><p>As a <strong className="hl">standard action</strong>, you can speak words of encouragement to grant a +1 morale bonus to an ally within 30 feet who can see and hear you. The ally can use this bonus on any d20 roll of her choice before the start of your next turn. You cannot use this trait to grant a bonus to yourself or to an ally who has already benefited from this trait within the last 24 hours.</p>
<p><strong>Suggested Characters:</strong> <Link to="/rule/eagle_knights">Eagle Knights</Link>, <Link to="/faith/iomedae">Iomedaeans</Link>, Mendevian crusaders.</p>
</Pair>
</Ability>
<Ability id="traitjackettraining-jacket-training-fn6-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitjackettraining-jacket-training-fn6-2"><Link to="/trait/jacket_training">⮞</Link> Jacket Training <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-6.2" id="main-traits_combat_ab-fake-fn-6.2" data-hash-target to="main-traits_combat_ab-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traitjackettraining-jacket-training-fn6-2-benefit">You can treat an armored coat as light armor. This choice must be made when you don the armor, and can't be changed until you remove and redon the armor. You must still be proficient in wearing medium armor to avoid adding the armor's check penalty on all attack rolls and skill checks that involve moving.</Pair>
</Ability>
<Ability id="traitjunglefighter-jungle-fighter-fn11" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitjunglefighter-jungle-fighter-fn11"><Link to="/trait/jungle_fighter">⮞</Link> Jungle Fighter <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-11" id="main-traits_combat_ab-fake-fn-11" data-hash-target to="main-traits_combat_ab-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Region" hl>Sargava</Pair>
<Pair single="benefit" id="traitjunglefighter-jungle-fighter-fn11-benefit">You are sure-footed in jungle environments, and your speed may not be reduced to less than 10 feet by difficult terrain in jungles (meaning you may take a 5-foot step in difficult terrain and not provoke an attack of opportunity).</Pair>
</Ability>
<Ability id="traitkinguardian-kin-guardian-fn3-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitkinguardian-kin-guardian-fn3-3"><Link to="/trait/kin_guardian">⮞</Link> Kin Guardian <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-3.3" id="main-traits_combat_ab-fake-fn-3.3" data-hash-target to="main-traits_combat_ab-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitkinguardian-kin-guardian-fn3-3-flavor">You are dedicated to defending members of your family.</Pair>
<Pair single="benefit" id="traitkinguardian-kin-guardian-fn3-3-benefit">When you use the <Link to="/rule/aid_another_2">aid another</Link> action to give a member of your family a bonus to AC, increase the bonus by 2. This increase is a trait bonus (and therefore doesn't stack with increases granted by other family members using this trait). This trait has no effect when using the aid another action to increase a family member's next attack roll.</Pair>
</Ability>
<Ability id="traitmonsterchallenger-monster-challenger-fn12" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitmonsterchallenger-monster-challenger-fn12"><Link to="/trait/monster_challenger">⮞</Link> Monster Challenger <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-12" id="main-traits_combat_ab-fake-fn-12" data-hash-target to="main-traits_combat_ab-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitmonsterchallenger-monster-challenger-fn12-flavor">You have made it your mission to bring down a fearsome beast.</Pair>
<Pair single="benefit" id="traitmonsterchallenger-monster-challenger-fn12-benefit">Choose two of the following: aberrations, animals, dragons, fey, magical beasts, oozes, and vermin. You can move at full speed without penalty while using <Link to="/skill/survival">Survival</Link> to follow tracks left by your chosen creature types.</Pair>
</Ability>
<Ability id="traitmuscleofthesociety-muscle-of-the-society-fn13" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitmuscleofthesociety-muscle-of-the-society-fn13"><Link to="/trait/muscle_of_the_society">⮞</Link> Muscle of the Society <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-13" id="main-traits_combat_ab-fake-fn-13" data-hash-target to="main-traits_combat_ab-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitmuscleofthesociety-muscle-of-the-society-fn13-flavor">Your intense training with the Swords has taught you how to infiltrate otherwise inaccessible ruins and extract their treasures without too much exertion.</Pair>
<Pair single="benefit" id="traitmuscleofthesociety-muscle-of-the-society-fn13-benefit">You gain a +2 trait bonus on Strength checks made to break doors and lift portcullises, and you treat your Strength score as 2 higher for the purpose of determining your carrying capacity.</Pair>
</Ability>
<Ability id="traitnaturalflyer-natural-flyer-fn14" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitnaturalflyer-natural-flyer-fn14"><Link to="/trait/natural_flyer">⮞</Link> Natural Flyer <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-14" id="main-traits_combat_ab-fake-fn-14" data-hash-target to="main-traits_combat_ab-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitnaturalflyer-natural-flyer-fn14-flavor">All your life, the sky has beckoned to you, and you have dreamed of reveling in the freedom and bliss of flight.</Pair>
<Pair single="benefit" id="traitnaturalflyer-natural-flyer-fn14-benefit">You gain a +1 trait bonus on <Link to="/skill/fly">Fly</Link> checks, as well as <Link to="/skill/acrobatics">Acrobatics</Link> checks attempted while flying. Fly is always a class skill for you.</Pair>
</Ability>
<Ability id="traitnaturesmimic-natures-mimic-fn3-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitnaturesmimic-natures-mimic-fn3-4"><Link to="/trait/natures_mimic">⮞</Link> Nature's Mimic <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-3.4" id="main-traits_combat_ab-fake-fn-3.4" data-hash-target to="main-traits_combat_ab-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitnaturesmimic-natures-mimic-fn3-4-flavor">Your knowledge of nature informs your fighting style, and that style gives you insight into related aspects of the natural world.</Pair>
<Pair single="benefit" id="traitnaturesmimic-natures-mimic-fn3-4-benefit">You gain a +1 trait bonus on all <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> checks, and Knowledge (nature) is always a class skill for you. You can make Knowledge (nature) checks pertaining to animals that correspond to your style feats untrained.</Pair>
</Ability>
<Ability id="traitobariveteran-obari-veteran-fn15" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitobariveteran-obari-veteran-fn15"><Link to="/trait/obari_veteran">⮞</Link> Obari Veteran <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-15" id="main-traits_combat_ab-fake-fn-15" data-hash-target to="main-traits_combat_ab-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitobariveteran-obari-veteran-fn15-flavor">You've spent years aboard ships traveling the lucrative Obari Crossing, transporting Garundi and Vudrani goods.</Pair>
<Pair single="benefit" id="traitobariveteran-obari-veteran-fn15-benefit">You gain +1 bonus on <Link to="/skill/profession">Profession</Link> (sailor) checks, and Profession (sailor) is a class skill for you. You also gain a +1 trait bonus on weapon damage rolls against creatures with the aquatic subtype.</Pair>
</Ability>
<Ability id="traitreckless-reckless-fn3-5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitreckless-reckless-fn3-5"><Link to="/trait/reckless">⮞</Link> Reckless <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-3.5" id="main-traits_combat_ab-fake-fn-3.5" data-hash-target to="main-traits_combat_ab-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitreckless-reckless-fn3-5-flavor">You have a tendency for rash behavior, often disregarding your own safety as you move across the battlefield.</Pair>
<Pair single="benefit" id="traitreckless-reckless-fn3-5-benefit">You gain a +1 bonus on <Link to="/skill/acrobatics">Acrobatics</Link> checks, and Acrobatics is always a class skill for you.</Pair>
</Ability>
<Ability id="traitslippery-slippery-fn16" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitslippery-slippery-fn16"><Link to="/trait/slippery">⮞</Link> Slippery <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-16" id="main-traits_combat_ab-fake-fn-16" data-hash-target to="main-traits_combat_ab-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/bellflower_network">Bellflower Network</Link></Pair>
<Pair single="flavor" id="traitslippery-slippery-fn16-flavor">You have escaped from so many dangerous situations in your life that you've gotten quite good at not getting caught.</Pair>
<Pair single="benefit" id="traitslippery-slippery-fn16-benefit">You gain a +1 trait bonus on <Link to="/skill/stealth">Stealth</Link> checks and Stealth is a class skill for you.</Pair>
</Ability>
<Ability id="traitsoaringsprinter-soaring-sprinter-fn10-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitsoaringsprinter-soaring-sprinter-fn10-2"><Link to="/trait/soaring_sprinter">⮞</Link> Soaring Sprinter <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-10.2" id="main-traits_combat_ab-fake-fn-10.2" data-hash-target to="main-traits_combat_ab-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitsoaringsprinter-soaring-sprinter-fn10-2-flavor">As a youth, you often leaped and ran at treacherous heights, either because it was the only place with enough freedom for you to play or because it was not a good idea to play any lower.</Pair>
<Pair single="benefit" id="traitsoaringsprinter-soaring-sprinter-fn10-2-benefit"><p>You gain a +2 trait bonus on <Link to="/skill/acrobatics">Acrobatics</Link> checks to keep your balance or jump, and Acrobatics becomes a class skill for you.</p>
<p><strong>Suggested Characters:</strong> Chelaxians, gnomes, Korvosans.</p>
</Pair>
</Ability>
<Ability id="traitsolitary-solitary-fn17" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitsolitary-solitary-fn17"><Link to="/trait/solitary">⮞</Link> Solitary <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-17" id="main-traits_combat_ab-fake-fn-17" data-hash-target to="main-traits_combat_ab-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitsolitary-solitary-fn17-flavor">You are skilled at slipping away from crowds.</Pair>
<Pair single="benefit" id="traitsolitary-solitary-fn17-benefit">Once per day, you can attempt a <Link to="/skill/bluff">Bluff</Link> check to create a diversion to hide with a +2 trait bonus on the check, and if successful, you take only a -5 penalty on your <Link to="/skill/stealth">Stealth</Link> check to get to an unobserved place while observers are distracted (instead of the normal -10 penalty).</Pair>
</Ability>
<Ability id="traitsprint-sprint-fn18" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitsprint-sprint-fn18"><Link to="/trait/sprint">⮞</Link> Sprint <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-18" id="main-traits_combat_ab-fake-fn-18" data-hash-target to="main-traits_combat_ab-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traitsprint-sprint-fn18-flavor">You were taught from a young age that the world is full of big, fast, dangerous foes, and that sometimes the best course of action is to put your head down and run. Your parents taught you how to make the most of a solid mid-length sprint and how to squeeze just a little extra speed out of yourself.</Pair>
<Pair single="benefit" id="traitsprint-sprint-fn18-benefit">If you do nothing but move in a turn (that is, if you <Link to="/rule/run">run</Link> or use both of your actions in a round to move your speed) and you are in no armor or light armor, you may move an extra 5 feet.</Pair>
</Ability>
<Ability id="traitstartlingreport-startling-report-fn3-6" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitstartlingreport-startling-report-fn3-6"><Link to="/trait/startling_report">⮞</Link> Startling Report <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-3.6" id="main-traits_combat_ab-fake-fn-3.6" data-hash-target to="main-traits_combat_ab-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitstartlingreport-startling-report-fn3-6-flavor">Through either perfect timing or the determination of your action, the sound of your firearm going off sets your enemies on edge.</Pair>
<Pair single="benefit" id="traitstartlingreport-startling-report-fn3-6-benefit">When you shoot a firearm, you gain a +2 trait bonus on Intimidate checks for 1 round against those who heard the shot.</Pair>
</Ability>
<Ability id="traitsteelskin-steel-skin-fn1-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitsteelskin-steel-skin-fn1-2"><Link to="/trait/steel_skin">⮞</Link> Steel Skin <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-1.2" id="main-traits_combat_ab-fake-fn-1.2" data-hash-target to="main-traits_combat_ab-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traitsteelskin-steel-skin-fn1-2-benefit"><p>You gain the ability to <Link to="/rule/don_armor">don or remove</Link> heavy armor in half the normal time.</p>
<p>Additionally, you begin play with a great helm bearing the iconography of your family (this helm grants no special defensive benefits). While wearing this helm with a suit of heavy armor, you gain a +2 trait bonus on Intimidate checks.</p>
</Pair>
</Ability>
<Ability id="traitsubjectiveequilibrium-subjective-equilibrium-fn19" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitsubjectiveequilibrium-subjective-equilibrium-fn19"><Link to="/trait/subjective_equilibrium">⮞</Link> Subjective Equilibrium <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-19" id="main-traits_combat_ab-fake-fn-19" data-hash-target to="main-traits_combat_ab-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitsubjectiveequilibrium-subjective-equilibrium-fn19-flavor">You understand that gravity is far from constant when traversing the Great Beyond.</Pair>
<Pair single="benefit" id="traitsubjectiveequilibrium-subjective-equilibrium-fn19-benefit">You gain a +2 trait bonus on Wisdom checks to move on a plane with <Link to="/rule/gravity_traits">subjective directional gravity</Link>, and you gain a +10-foot enhancement bonus to your speed when "falling" on such a plane.</Pair>
</Ability>
<Ability id="traitthunderandfangperformer-thunder-and-fang-performer-fn20" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitthunderandfangperformer-thunder-and-fang-performer-fn20"><Link to="/trait/thunder_and_fang_performer">⮞</Link> Thunder and Fang Performer <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-20" id="main-traits_combat_ab-fake-fn-20" data-hash-target to="main-traits_combat_ab-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitthunderandfangperformer-thunder-and-fang-performer-fn20-flavor">You learned from Shoanti champions to take advantage of the dramatic swings required by heavy weapons like the <Link to="/eq-weapon/earth_breaker">earth breaker</Link>.</Pair>
<Pair single="benefit" id="traitthunderandfangperformer-thunder-and-fang-performer-fn20-benefit">You gain a +2 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks while wielding a two-handed melee weapon.</Pair>
</Ability>
<Ability id="traitunblemishedbarrel-unblemished-barrel-fn3-7" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitunblemishedbarrel-unblemished-barrel-fn3-7"><Link to="/trait/unblemished_barrel">⮞</Link> Unblemished Barrel <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-3.7" id="main-traits_combat_ab-fake-fn-3.7" data-hash-target to="main-traits_combat_ab-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitunblemishedbarrel-unblemished-barrel-fn3-7-flavor">Your skill with firearms speeds your repair of such weapons.</Pair>
<Pair single="benefit" id="traitunblemishedbarrel-unblemished-barrel-fn3-7-benefit">You gain a +1 trait bonus on <Link to="/skill/craft">Craft</Link> (alchemy) and Craft (weapons) checks, and it takes you only 30 minutes to remove the broken condition from a firearm.</Pair>
</Ability>
<Ability id="traitundergrowthspecialist-undergrowth-specialist-fn21" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitundergrowthspecialist-undergrowth-specialist-fn21"><Link to="/trait/undergrowth_specialist">⮞</Link> Undergrowth Specialist <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-21" id="main-traits_combat_ab-fake-fn-21" data-hash-target to="main-traits_combat_ab-fake-fn-21-target">21</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitundergrowthspecialist-undergrowth-specialist-fn21-flavor">You've trained yourself to move in and out of undergrowth with ease.</Pair>
<Pair single="benefit" id="traitundergrowthspecialist-undergrowth-specialist-fn21-benefit">The DCs of <Link to="/skill/acrobatics">Acrobatics</Link> checks don't increase for you when you're moving through light undergrowth, and the DCs of Acrobatics checks you attempt while you're moving through heavy undergrowth increase only by 2.</Pair>
</Ability>
<Ability id="traitvandal-vandal-fn22" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitvandal-vandal-fn22"><Link to="/trait/vandal">⮞</Link> Vandal <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-22" id="main-traits_combat_ab-fake-fn-22" data-hash-target to="main-traits_combat_ab-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traitvandal-vandal-fn22-benefit">You gain a +2 bonus on Strength checks to break objects, and when damaging an object with a weapon, natural weapon, or unarmed attack, you ignore 2 points of its hardness.</Pair>
</Ability>
<Ability id="traitvigilantbattler-vigilant-battler-fn3-8" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitvigilantbattler-vigilant-battler-fn3-8"><Link to="/trait/vigilant_battler">⮞</Link> Vigilant Battler <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-3.8" id="main-traits_combat_ab-fake-fn-3.8" data-hash-target to="main-traits_combat_ab-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitvigilantbattler-vigilant-battler-fn3-8-flavor">You are hard to fool and harder to trick with a feint.</Pair>
<Pair single="benefit" id="traitvigilantbattler-vigilant-battler-fn3-8-benefit">You gain a +1 trait bonus on all <Link to="/skill/sense_motive">Sense Motive</Link> checks. This trait bonus increases to +2 when used to counter a <Link to="/rule/feint">feint</Link> in combat.</Pair>
</Ability>
<Ability id="traitvolatilefuse-volatile-fuse-fn21-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitvolatilefuse-volatile-fuse-fn21-2"><Link to="/trait/volatile_fuse">⮞</Link> Volatile Fuse <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-21.2" id="main-traits_combat_ab-fake-fn-21.2" data-hash-target to="main-traits_combat_ab-fake-fn-21-target">21</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitvolatilefuse-volatile-fuse-fn21-2-flavor">Firearms you wield are especially dangerous to you and everyone nearby.</Pair>
<Pair single="benefit" id="traitvolatilefuse-volatile-fuse-fn21-2-benefit"><p>Whenever a firearm you wield misfires or explodes, roll a d%. On a result of 1-25, the misfire or explosion is delayed; reroll the attack with a -5 penalty (penalties from the broken condition are not applied to this reroll, and a firearm that was already broken does not explode). After the reroll is resolved, apply the effects of the misfire or explosion as normal. (If the d% roll result is 26 or higher, the misfire or explosion happens as normal.)</p>
<p>Whenever a firearm you wield explodes due to a misfire, increase the explosion's damage by 1d6 plus 1d6 for every 4 character levels you have.</p>
</Pair>
</Ability>
<Ability id="traitwittyrepartee-witty-repartee-fn16-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitwittyrepartee-witty-repartee-fn16-2"><Link to="/trait/witty_repartee">⮞</Link> Witty Repartee <sup><InnerLink showBacklink="backlink-main-traits_combat_ab-fake-fn-16.2" id="main-traits_combat_ab-fake-fn-16.2" data-hash-target to="main-traits_combat_ab-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl><Link to="/rule/kitharodian_academy">Kitharodian Academy</Link></Pair>
<Pair single="flavor" id="traitwittyrepartee-witty-repartee-fn16-2-flavor">You are quick with your tongue and have always possessed the talent to quickly admonish your enemies.</Pair>
<Pair single="benefit" id="traitwittyrepartee-witty-repartee-fn16-2-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks and Bluff is a class skill for you.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_combat_ab-label">Footnotes</h3><ol>
<li id="main-traits_combat_ab-fake-fn-1-target"><p><Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_combat_ab-fake-fn-1" data-hash-target to="main-traits_combat_ab-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_combat_ab-fake-fn-1.2" data-hash-target to="main-traits_combat_ab-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-2-target"><p><Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_combat_ab-fake-fn-2" data-hash-target to="main-traits_combat_ab-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-3-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_ab-fake-fn-3" data-hash-target to="main-traits_combat_ab-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_ab-fake-fn-3.2" data-hash-target to="main-traits_combat_ab-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_ab-fake-fn-3.3" data-hash-target to="main-traits_combat_ab-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_ab-fake-fn-3.4" data-hash-target to="main-traits_combat_ab-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_ab-fake-fn-3.5" data-hash-target to="main-traits_combat_ab-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_ab-fake-fn-3.6" data-hash-target to="main-traits_combat_ab-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_ab-fake-fn-3.7" data-hash-target to="main-traits_combat_ab-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_ab-fake-fn-3.8" data-hash-target to="main-traits_combat_ab-fake-fn-3.8">↩<sup>8</sup></InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-4-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_ab-fake-fn-4" data-hash-target to="main-traits_combat_ab-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-5-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_combat_ab-fake-fn-5" data-hash-target to="main-traits_combat_ab-fake-fn-5">↩</InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-6-target"><p><Link to="/source/armor_masters_handbook">Armor Master's Handbook</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_ab-fake-fn-6" data-hash-target to="main-traits_combat_ab-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_ab-fake-fn-6.2" data-hash-target to="main-traits_combat_ab-fake-fn-6.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-7-target"><p><Link to="/source/agents_of_evil">Agents of Evil</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_combat_ab-fake-fn-7" data-hash-target to="main-traits_combat_ab-fake-fn-7">↩</InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-8-target"><p><Link to="/source/wilderness_origins">Wilderness Origins</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_ab-fake-fn-8" data-hash-target to="main-traits_combat_ab-fake-fn-8">↩</InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-9-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_combat_ab-fake-fn-9" data-hash-target to="main-traits_combat_ab-fake-fn-9">↩</InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-10-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_combat_ab-fake-fn-10" data-hash-target to="main-traits_combat_ab-fake-fn-10">↩</InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_combat_ab-fake-fn-10.2" data-hash-target to="main-traits_combat_ab-fake-fn-10.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-11-target"><p><Link to="/source/sargava_the_lost_colony">Sargava, the Lost Colony</Link> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_combat_ab-fake-fn-11" data-hash-target to="main-traits_combat_ab-fake-fn-11">↩</InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-12-target"><p><Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook</Link> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_combat_ab-fake-fn-12" data-hash-target to="main-traits_combat_ab-fake-fn-12">↩</InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-13-target"><p><Link to="/source/pathfinder_society_primer">Pathfinder Society Primer</Link> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_combat_ab-fake-fn-13" data-hash-target to="main-traits_combat_ab-fake-fn-13">↩</InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-14-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 29 <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_combat_ab-fake-fn-14" data-hash-target to="main-traits_combat_ab-fake-fn-14">↩</InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-15-target"><p><Link to="/source/merchants_manifest">Merchant's Manifest</Link> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_combat_ab-fake-fn-15" data-hash-target to="main-traits_combat_ab-fake-fn-15">↩</InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-16-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_combat_ab-fake-fn-16" data-hash-target to="main-traits_combat_ab-fake-fn-16">↩</InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_combat_ab-fake-fn-16.2" data-hash-target to="main-traits_combat_ab-fake-fn-16.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-17-target"><p><Link to="/source/antiheros_handbook">Antihero's Handbook</Link> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_combat_ab-fake-fn-17" data-hash-target to="main-traits_combat_ab-fake-fn-17">↩</InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-18-target"><p><Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_combat_ab-fake-fn-18" data-hash-target to="main-traits_combat_ab-fake-fn-18">↩</InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-19-target"><p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook</Link> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_combat_ab-fake-fn-19" data-hash-target to="main-traits_combat_ab-fake-fn-19">↩</InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-20-target"><p><Link to="/source/weapon_masters_handbook">Weapon Master's Handbook</Link> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_combat_ab-fake-fn-20" data-hash-target to="main-traits_combat_ab-fake-fn-20">↩</InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-21-target"><p><Link to="/source/people_of_the_wastes">People of the Wastes</Link> <InnerLink aria-label="Back to reference 21" id="backlink-main-traits_combat_ab-fake-fn-21" data-hash-target to="main-traits_combat_ab-fake-fn-21">↩</InnerLink> <InnerLink aria-label="Back to reference 21" id="backlink-main-traits_combat_ab-fake-fn-21.2" data-hash-target to="main-traits_combat_ab-fake-fn-21.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_ab-fake-fn-22-target"><p><Link to="/source/heroes_of_the_wild">Heroes of the Wild</Link> <InnerLink aria-label="Back to reference 22" id="backlink-main-traits_combat_ab-fake-fn-22" data-hash-target to="main-traits_combat_ab-fake-fn-22">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_combat_off = {title: "Offense Combat Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_combat" className="reversed" info="Back to Combat Traits" /><Ability id="traitabsalombouncer-absalom-bouncer-fn1" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitabsalombouncer-absalom-bouncer-fn1"><Link to="/trait/absalom_bouncer">⮞</Link> Absalom Bouncer <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-1" id="main-traits_combat_off-fake-fn-1" data-hash-target to="main-traits_combat_off-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitabsalombouncer-absalom-bouncer-fn1-flavor">You learned to fight while serving as a bodyguard in the taverns of Absalom, where keeping the patrons alive through bloody bar brawls was just part of your job.</Pair>
<Pair single="benefit" id="traitabsalombouncer-absalom-bouncer-fn1-benefit">When you make an attack that deals nonlethal damage with an unarmed strike, you gain a +1 bonus on your damage roll.</Pair>
</Ability>
<Ability id="traitambushtraining-ambush-training-fn2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitambushtraining-ambush-training-fn2"><Link to="/trait/ambush_training">⮞</Link> Ambush Training <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-2" id="main-traits_combat_off-fake-fn-2" data-hash-target to="main-traits_combat_off-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitambushtraining-ambush-training-fn2-flavor">You've learned that taking an enemy by surprise can end a combat before it begins.</Pair>
<Pair single="benefit" id="traitambushtraining-ambush-training-fn2-benefit">You gain a +1 trait bonus on initiative checks and a +1 trait bonus on weapon damage rolls during any surprise round in which you act.</Pair>
</Ability>
<Ability id="traitanatomist-anatomist-fn3-fn4-fn5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitanatomist-anatomist-fn3-fn4-fn5"><Link to="/trait/anatomist">⮞</Link> Anatomist <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-3" id="main-traits_combat_off-fake-fn-3" data-hash-target to="main-traits_combat_off-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-4" id="main-traits_combat_off-fake-fn-4" data-hash-target to="main-traits_combat_off-fake-fn-4-target">4</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-5" id="main-traits_combat_off-fake-fn-5" data-hash-target to="main-traits_combat_off-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitanatomist-anatomist-fn3-fn4-fn5-flavor">You have studied the workings of anatomy, either as a student at university or as an apprentice mortician or necromancer. You know where to aim your blows to strike vital organs.</Pair>
<Pair single="benefit" id="traitanatomist-anatomist-fn3-fn4-fn5-benefit">You gain a +1 trait bonus on all rolls made to confirm critical hits.</Pair>
</Ability>
<Ability id="traitarodeniteswordtraining-arodenite-sword-training-fn6" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitarodeniteswordtraining-arodenite-sword-training-fn6"><Link to="/trait/arodenite_sword_training">⮞</Link> Arodenite Sword Training <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-6" id="main-traits_combat_off-fake-fn-6" data-hash-target to="main-traits_combat_off-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitarodeniteswordtraining-arodenite-sword-training-fn6-flavor">Your family has passed down training in <Link to="/faith/aroden">Aroden's</Link> favored weapon, even though the god no longer answers their prayers.</Pair>
<Pair single="benefit" id="traitarodeniteswordtraining-arodenite-sword-training-fn6-benefit">You are proficient with the <Link to="/eq-weapon/longsword">longsword</Link>. If your class grants longsword proficiency as well, you gain a +1 trait bonus on attacks of opportunity with longswords.</Pair>
</Ability>
<Ability id="traitaxetogrind-axe-to-grind-fn3-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitaxetogrind-axe-to-grind-fn3-2"><Link to="/trait/axe_to_grind">⮞</Link> Axe to Grind <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-3.2" id="main-traits_combat_off-fake-fn-3.2" data-hash-target to="main-traits_combat_off-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitaxetogrind-axe-to-grind-fn3-2-flavor">There is a fire in your heart that can't be quenched.</Pair>
<Pair single="benefit" id="traitaxetogrind-axe-to-grind-fn3-2-benefit">You gain a +1 trait bonus on damage against foes who are threatened by only you.</Pair>
</Ability>
<Ability id="traitbackformore-back-for-more-fn7" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbackformore-back-for-more-fn7"><Link to="/trait/back_for_more">⮞</Link> Back for More <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-7" id="main-traits_combat_off-fake-fn-7" data-hash-target to="main-traits_combat_off-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traitbackformore-back-for-more-fn7-benefit">Anytime an opponent confirms a critical hit against you, you gain a +2 morale bonus on attack rolls and damage rolls against that foe until the end of your next turn.</Pair>
</Ability>
<Ability id="traitblackjacketweaponflair-blackjacket-weapon-flair-fn8" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitblackjacketweaponflair-blackjacket-weapon-flair-fn8"><Link to="/trait/blackjacket_weapon_flair">⮞</Link> Blackjacket Weapon Flair <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-8" id="main-traits_combat_off-fake-fn-8" data-hash-target to="main-traits_combat_off-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitblackjacketweaponflair-blackjacket-weapon-flair-fn8-flavor">You trained with the Blackjackets of Druma to make optimal use of magic weapons.</Pair>
<Pair single="benefit" id="traitblackjacketweaponflair-blackjacket-weapon-flair-fn8-benefit">Whenever you roll a natural 20 (the die shows a 20) on a <Link to="/rule/combat_maneuvers">combat maneuver</Link> check with a magic weapon, you gain a +5 trait bonus on the check.</Pair>
</Ability>
<Ability id="traitblightsbane-blights-bane-fn9" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitblightsbane-blights-bane-fn9"><Link to="/trait/blights_bane">⮞</Link> Blight's Bane <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-9" id="main-traits_combat_off-fake-fn-9" data-hash-target to="main-traits_combat_off-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitblightsbane-blights-bane-fn9-flavor">You are trained in the destruction of blights.</Pair>
<Pair single="benefit" id="traitblightsbane-blights-bane-fn9-benefit">You gain a +2 trait bonus to confirm critical hits against a creature that has a template affiliated with some kind of communicable condition, such as a <Link to="/template/blighted_fey">blighted fey</Link> or a <Link to="/template/fungal_creature">fungal creature</Link>.</Pair>
</Ability>
<Ability id="traitbloodthirsty-bloodthirsty-fn3-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbloodthirsty-bloodthirsty-fn3-3"><Link to="/trait/bloodthirsty">⮞</Link> Bloodthirsty <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-3.3" id="main-traits_combat_off-fake-fn-3.3" data-hash-target to="main-traits_combat_off-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitbloodthirsty-bloodthirsty-fn3-3-flavor">You have a vicious streak, and nothing satisfies you more than warm blood on your hands and blade.</Pair>
<Pair single="benefit" id="traitbloodthirsty-bloodthirsty-fn3-3-benefit">Whenever you make an attack that reduces a foe to 0 hit points or fewer or you confirm a critical hit, your attack deals 1 additional point of damage. The additional damage is a trait bonus, and is multiplied by your weapon's critical hit multiplier.</Pair>
</Ability>
<Ability id="traitbloodyminded-bloody-minded-fn10" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbloodyminded-bloody-minded-fn10"><Link to="/trait/bloody_minded">⮞</Link> Bloody-Minded <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-10" id="main-traits_combat_off-fake-fn-10" data-hash-target to="main-traits_combat_off-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitbloodyminded-bloody-minded-fn10-flavor">You are always ready for bloodshed.</Pair>
<Pair single="benefit" id="traitbloodyminded-bloody-minded-fn10-benefit">You gain a +1 trait bonus on initiative and <Link to="/skill/intimidate">Intimidate</Link> checks.</Pair>
</Ability>
<Ability id="traitbornunderthecradle-born-under-the-cradle-fn11" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbornunderthecradle-born-under-the-cradle-fn11"><Link to="/trait/born_under_the_cradle">⮞</Link> Born under the Cradle <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-11" id="main-traits_combat_off-fake-fn-11" data-hash-target to="main-traits_combat_off-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitbornunderthecradle-born-under-the-cradle-fn11-flavor">Your birth sign aligned significantly with Bretheda on the day you were born, granting you a knack for cooperation in the heat of battle.</Pair>
<Pair single="benefit" id="traitbornunderthecradle-born-under-the-cradle-fn11-benefit">You gain a +2 trait bonus on attack rolls to perform the <Link to="/rule/aid_another_2">aid another</Link> action.</Pair>
</Ability>
<Ability id="traitbornunderthestranger-born-under-the-stranger-fn11-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbornunderthestranger-born-under-the-stranger-fn11-2"><Link to="/trait/born_under_the_stranger">⮞</Link> Born under the Stranger <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-11.2" id="main-traits_combat_off-fake-fn-11.2" data-hash-target to="main-traits_combat_off-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitbornunderthestranger-born-under-the-stranger-fn11-2-flavor">Your birth was marked by the alignment of Aucturn with your birth sign and by strange happenings, giving you a link to alien beings.</Pair>
<Pair single="benefit" id="traitbornunderthestranger-born-under-the-stranger-fn11-2-benefit">When <Link to="/rule/feint">feinting</Link> against aberrations, you do not take a -4 penalty for feinting against a non-humanoid creature, and you take only a -4 penalty if you feint against an aberration of animal Intelligence (instead of -8). You still cannot feint against mindless creatures.</Pair>
</Ability>
<Ability id="traitbullied-bullied-fn3-4-fn5-2-fn4-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbullied-bullied-fn3-4-fn5-2-fn4-2"><Link to="/trait/bullied">⮞</Link> Bullied <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-3.4" id="main-traits_combat_off-fake-fn-3.4" data-hash-target to="main-traits_combat_off-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-5.2" id="main-traits_combat_off-fake-fn-5.2" data-hash-target to="main-traits_combat_off-fake-fn-5-target">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-4.2" id="main-traits_combat_off-fake-fn-4.2" data-hash-target to="main-traits_combat_off-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitbullied-bullied-fn3-4-fn5-2-fn4-2-flavor">You were bullied often as a child, and you are now constantly ready to defend yourself with your fists when an enemy comes near.</Pair>
<Pair single="benefit" id="traitbullied-bullied-fn3-4-fn5-2-fn4-2-benefit"><p>You gain a +1 trait bonus on attack of opportunity attack rolls made with unarmed strikes.</p>
<p>Note that this trait does not grant the ability to make attacks of opportunity with your unarmed strikes - you must have a level in monk, the <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> feat, or some other similar power to gain the use of this character trait. However, that doesn't prevent you from selecting this trait. You simply cannot make use of it until a later point if you do.</p>
</Pair>
</Ability>
<Ability id="traitclockworkengineer-clockwork-engineer-fn9-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitclockworkengineer-clockwork-engineer-fn9-2"><Link to="/trait/clockwork_engineer">⮞</Link> Clockwork Engineer <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-9.2" id="main-traits_combat_off-fake-fn-9.2" data-hash-target to="main-traits_combat_off-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitclockworkengineer-clockwork-engineer-fn9-2-flavor">You have experience with the ancient clockwork constructs that roam certain wastelands, and this has granted you an understanding of these guardians.</Pair>
<Pair single="benefit" id="traitclockworkengineer-clockwork-engineer-fn9-2-benefit">You gain a +2 trait bonus on damage rolls against creatures with the <Link to="/subtype/clockwork">clockwork</Link> subtype.</Pair>
</Ability>
<Ability id="traitdedicateddefender-dedicated-defender-fn3-5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdedicateddefender-dedicated-defender-fn3-5"><Link to="/trait/dedicated_defender">⮞</Link> Dedicated Defender <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-3.5" id="main-traits_combat_off-fake-fn-3.5" data-hash-target to="main-traits_combat_off-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdedicateddefender-dedicated-defender-fn3-5-flavor">When a companion is down, you fight harder.</Pair>
<Pair single="benefit" id="traitdedicateddefender-dedicated-defender-fn3-5-benefit">You gain a +1 trait bonus on attack rolls and on checks made to overcome spell resistance while you are adjacent to a <Link to="/misc/dying">dying</Link> or <Link to="/misc/disabled">disabled</Link> ally, animal companion, eidolon, familiar, or mount.</Pair>
</Ability>
<Ability id="traitdemonslayer-demon-slayer-fn12" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdemonslayer-demon-slayer-fn12"><Link to="/trait/demon_slayer">⮞</Link> Demon Slayer <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-12" id="main-traits_combat_off-fake-fn-12" data-hash-target to="main-traits_combat_off-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Mendev Crusaders</Pair>
<Pair single="flavor" id="traitdemonslayer-demon-slayer-fn12-flavor">By studying a demonic opponent, you can sense and target its weak spots.</Pair>
<Pair single="benefit" id="traitdemonslayer-demon-slayer-fn12-benefit">You can attempt a <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> check to find a demon's weak spot. (DC 10 + the demon's CR). If you succeed, you gain a +3 trait bonus on rolls to confirm critical hits against that <Link to="/family/demon">demon</Link> until the end of the battle. This effect only works on demons.</Pair>
</Ability>
<Ability id="traitdemonsmiter-demon-smiter-fn13" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdemonsmiter-demon-smiter-fn13"><Link to="/trait/demon_smiter">⮞</Link> Demon Smiter <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-13" id="main-traits_combat_off-fake-fn-13" data-hash-target to="main-traits_combat_off-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdemonsmiter-demon-smiter-fn13-flavor">You grew up around those who fight the demons streaming out of the Worldwound, and from their stories you learned about the demons' weaknesses. You are likely from Mendev or have joined that nation's cause as a crusader.</Pair>
<Pair single="benefit" id="traitdemonsmiter-demon-smiter-fn13-benefit">Once per day when fighting <Link to="/family/demon">demons</Link>, you gain a +4 trait bonus on a single attack roll.</Pair>
</Ability>
<Ability id="traitdevilfighter-devil-fighter-fn14" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdevilfighter-devil-fighter-fn14"><Link to="/trait/devil_fighter">⮞</Link> Devil Fighter <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-14" id="main-traits_combat_off-fake-fn-14" data-hash-target to="main-traits_combat_off-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdevilfighter-devil-fighter-fn14-flavor">Learning how devils think helps you resist their trickery.</Pair>
<Pair single="benefit" id="traitdevilfighter-devil-fighter-fn14-benefit">You gain a +1 trait bonus to your AC against attacks made by lawful outsiders.</Pair>
</Ability>
<Ability id="traitdirtyfighterapg-dirty-fighter-apg-fn3-6-fn5-3-fn4-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdirtyfighterapg-dirty-fighter-apg-fn3-6-fn5-3-fn4-3"><Link to="/trait/dirty_fighter_apg">⮞</Link> Dirty Fighter (APG) <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-3.6" id="main-traits_combat_off-fake-fn-3.6" data-hash-target to="main-traits_combat_off-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-5.3" id="main-traits_combat_off-fake-fn-5.3" data-hash-target to="main-traits_combat_off-fake-fn-5-target">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-4.3" id="main-traits_combat_off-fake-fn-4.3" data-hash-target to="main-traits_combat_off-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdirtyfighterapg-dirty-fighter-apg-fn3-6-fn5-3-fn4-3-flavor">You wouldn't have lived to make it out of childhood without the aid of a sibling, friend, or companion you could always count on to distract your enemies long enough for you to do a little bit more damage than normal. That companion may be another PC or an NPC (who may even be recently departed from your side).</Pair>
<Pair single="benefit" id="traitdirtyfighterapg-dirty-fighter-apg-fn3-6-fn5-3-fn4-3-benefit">When you hit a foe you are <Link to="/rule/flanking">flanking</Link>, you deal 1 additional point of damage (this damage is added to your base damage, and is multiplied on a critical hit). This additional damage is a trait bonus.</Pair>
</Ability>
<Ability id="traitdirtytrickster-dirty-trickster-fn15" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdirtytrickster-dirty-trickster-fn15"><Link to="/trait/dirty_trickster">⮞</Link> Dirty Trickster <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-15" id="main-traits_combat_off-fake-fn-15" data-hash-target to="main-traits_combat_off-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdirtytrickster-dirty-trickster-fn15-flavor">You learned early that there's no point in fighting fair when you're fighting for your life. Others may look down their noses at your tactics, but you know you wouldn't have survived this long without breaking a few conventions of fair play.</Pair>
<Pair single="benefit" id="traitdirtytrickster-dirty-trickster-fn15-benefit">You can take the <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link> feat without meeting its prerequisites, and you gain a +1 trait bonus on combat maneuver checks to attempt a <Link to="/rule/dirty_trick">dirty trick</Link>.</Pair>
</Ability>
<Ability id="traitdispelledbattler-dispelled-battler-fn3-7" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdispelledbattler-dispelled-battler-fn3-7"><Link to="/trait/dispelled_battler">⮞</Link> Dispelled Battler <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-3.7" id="main-traits_combat_off-fake-fn-3.7" data-hash-target to="main-traits_combat_off-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdispelledbattler-dispelled-battler-fn3-7-flavor">When deprived of magic, you fight harder.</Pair>
<Pair single="benefit" id="traitdispelledbattler-dispelled-battler-fn3-7-benefit">You gain a +1 trait bonus on weapon attack and damage rolls while within an area of antimagic such as that created by an <Link to="/spell/antimagic_field">antimagic field</Link>. You also gain this bonus for 1 round after you are subject to an area or targeted <Link to="/spell/dispel_magic">dispel magic</Link> spell, regardless of the effect's success or failure in dispelling your spells and magical effects.</Pair>
</Ability>
<Ability id="traitduelingcloakadept-dueling-cloak-adept-fn16" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitduelingcloakadept-dueling-cloak-adept-fn16"><Link to="/trait/dueling_cloak_adept">⮞</Link> Dueling Cloak Adept <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-16" id="main-traits_combat_off-fake-fn-16" data-hash-target to="main-traits_combat_off-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitduelingcloakadept-dueling-cloak-adept-fn16-flavor">You are trained in using your cloak to disguise your body and deceive your enemies.</Pair>
<Pair single="benefit" id="traitduelingcloakadept-dueling-cloak-adept-fn16-benefit">While wearing a cloak and using an <Link to="/eq-weapon/aldori_dueling_sword">Aldori dueling sword</Link>, you gain a +2 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks made to feint. Additionally, every time you successfully feint while wearing a cloak, you gain a +1 dodge bonus to your Armor Class until your next turn.</Pair>
</Ability>
<Ability id="traitelementalapprentice-elemental-apprentice-fn17" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitelementalapprentice-elemental-apprentice-fn17"><Link to="/trait/elemental_apprentice">⮞</Link> Elemental Apprentice <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-17" id="main-traits_combat_off-fake-fn-17" data-hash-target to="main-traits_combat_off-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitelementalapprentice-elemental-apprentice-fn17-flavor">You spent your childhood in a region of Golarion where the use of elemental magic is commonplace or the environment is heavily infused with elemental energies, such as the volcano Asuulek's Mouth or the hurricane-lashed Sodden Lands. Your time near raw elemental energies has inured you to taking damage from them.</Pair>
<Pair single="benefit" id="traitelementalapprentice-elemental-apprentice-fn17-benefit">At character creation, select acid, cold, electricity, or fire (once chosen, this damage type can't be changed). Once per day as a <strong className="hl">free action</strong>, when you hit a creature with a melee weapon, you can convert an amount of damage dealt by your attack equal to your character level into the selected energy type. You cannot convert this damage if any damage from the attack would normally deal a different type of energy damage (such as that of a <Link to="/magic-enh/flaming">flaming</Link> weapon).</Pair>
</Ability>
<Ability id="traitfailedaspirant-failed-aspirant-fn1-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitfailedaspirant-failed-aspirant-fn1-2"><Link to="/trait/failed_aspirant">⮞</Link> Failed Aspirant <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-1.2" id="main-traits_combat_off-fake-fn-1.2" data-hash-target to="main-traits_combat_off-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitfailedaspirant-failed-aspirant-fn1-2-flavor">You've failed the trials to gain entry to one of the <Link to="/rule/houses_of_perfection">Houses of Perfection</Link>. Though you are disappointed, you were able to pick up one trick from the monks.</Pair>
<Pair single="benefit" id="traitfailedaspirant-failed-aspirant-fn1-2-benefit">Choose a single <Link to="/rule/combat_maneuver">combat maneuver</Link>. Once per day, you can perform that combat maneuver without provoking an attack of opportunity, and you gain a +2 bonus on that attempt.</Pair>
</Ability>
<Ability id="traitfencer-fencer-fn3-8-fn4-4-fn5-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitfencer-fencer-fn3-8-fn4-4-fn5-4"><Link to="/trait/fencer">⮞</Link> Fencer <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-3.8" id="main-traits_combat_off-fake-fn-3.8" data-hash-target to="main-traits_combat_off-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-4.4" id="main-traits_combat_off-fake-fn-4.4" data-hash-target to="main-traits_combat_off-fake-fn-4-target">4</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-5.4" id="main-traits_combat_off-fake-fn-5.4" data-hash-target to="main-traits_combat_off-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitfencer-fencer-fn3-8-fn4-4-fn5-4-flavor">You trained with blades for long hours as a youth, either taking lessons in the genteel art of fencing from tutors paid for by your parents or being taken under the wing of a disenfranchised fencer who may have turned to a life of crime.</Pair>
<Pair single="benefit" id="traitfencer-fencer-fn3-8-fn4-4-fn5-4-benefit">You gain a +1 trait bonus on attack of opportunity attack rolls made with daggers, swords, and similar bladed weapons.</Pair>
</Ability>
<Ability id="traitfirebugqac-firebug-qac-fn18" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitfirebugqac-firebug-qac-fn18"><Link to="/trait/firebug_qac">⮞</Link> Firebug (QaC) <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-18" id="main-traits_combat_off-fake-fn-18" data-hash-target to="main-traits_combat_off-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitfirebugqac-firebug-qac-fn18-flavor">You were the child of a gunsmith or alchemist and always enjoyed experimenting with fiery alchemical items and minor explosives.</Pair>
<Pair single="benefit" id="traitfirebugqac-firebug-qac-fn18-benefit"><p>You gain a +1 trait bonus on attack rolls made with <Link to="/rule/throw_splash_weapon">thrown splash weapons</Link> and <Link to="/class/alchemist">alchemist</Link> bombs.</p>
<p><strong>Suggested Characters:</strong> Alkenstar natives, Katapeshi, Thuvians.</p>
</Pair>
</Ability>
<Ability id="traithellknightdevotion-hellknight-devotion-fn1-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traithellknightdevotion-hellknight-devotion-fn1-3"><Link to="/trait/hellknight_devotion">⮞</Link> Hellknight Devotion <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-1.3" id="main-traits_combat_off-fake-fn-1.3" data-hash-target to="main-traits_combat_off-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traithellknightdevotion-hellknight-devotion-fn1-3-flavor">Your family has strong ties to a <Link to="/rule/hellknights">Hellknight</Link> order, and you harness this belief as a weapon.</Pair>
<Pair single="benefit" id="traithellknightdevotion-hellknight-devotion-fn1-3-benefit">Once per day as a <strong className="hl">swift action</strong>, you can empower the next single melee attack you make to be treated as lawful-aligned for the purpose of overcoming damage reduction.</Pair>
</Ability>
<Ability id="traithellknightinitiate-hellknight-initiate-fn19" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traithellknightinitiate-hellknight-initiate-fn19"><Link to="/trait/hellknight_initiate">⮞</Link> Hellknight Initiate <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-19" id="main-traits_combat_off-fake-fn-19" data-hash-target to="main-traits_combat_off-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traithellknightinitiate-hellknight-initiate-fn19-flavor">You have laboriously studied the training rites of various <Link to="/rule/hellknights">Hellknight</Link> orders with the intent of joining one yourself.</Pair>
<Pair single="benefit" id="traithellknightinitiate-hellknight-initiate-fn19-benefit">You gain a +2 trait bonus on damage rolls against outsiders summoned through conjuration (calling) and conjuration (summoning) spells and effects.</Pair>
</Ability>
<Ability id="traithiddenhand-hidden-hand-fn3-9" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traithiddenhand-hidden-hand-fn3-9"><Link to="/trait/hidden_hand">⮞</Link> Hidden Hand <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-3.9" id="main-traits_combat_off-fake-fn-3.9" data-hash-target to="main-traits_combat_off-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traithiddenhand-hidden-hand-fn3-9-flavor">Your concealed weapons strike fast and true.</Pair>
<Pair single="benefit" id="traithiddenhand-hidden-hand-fn3-9-benefit">You gain a +1 trait bonus on <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> checks made to conceal light weapons and a +1 trait bonus on attack rolls when making an attack with a light weapon during a surprise round.</Pair>
</Ability>
<Ability id="traithillfighter-hill-fighter-fn20" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traithillfighter-hill-fighter-fn20"><Link to="/trait/hill_fighter">⮞</Link> Hill Fighter <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-20" id="main-traits_combat_off-fake-fn-20" data-hash-target to="main-traits_combat_off-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Region" hl>Sargava</Pair>
<Pair single="flavor" id="traithillfighter-hill-fighter-fn20-flavor">You are used to fighting in <Link to="/rule/hills_terrain">hilly environments</Link>.</Pair>
<Pair single="benefit" id="traithillfighter-hill-fighter-fn20-benefit">You may <Link to="/rule/run">run</Link> or <Link to="/rule/charge">charge</Link> downhill on a steep slope (moving up to your base speed) without making an <Link to="/skill/acrobatics">Acrobatics</Link> check to avoid stumbling - but if you travel farther than this distance, the normal rules for steep slopes apply.</Pair>
</Ability>
<Ability id="traitindelibleire-indelible-ire-fn3-10" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitindelibleire-indelible-ire-fn3-10"><Link to="/trait/indelible_ire">⮞</Link> Indelible Ire <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-3.10" id="main-traits_combat_off-fake-fn-3.10" data-hash-target to="main-traits_combat_off-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitindelibleire-indelible-ire-fn3-10-flavor">When you are gravely wounded, you're stirred to greater combat focus.</Pair>
<Pair single="benefit" id="traitindelibleire-indelible-ire-fn3-10-benefit">Each time a critical hit is confirmed against you, you gain a +1 trait bonus on attack rolls for 1 round.</Pair>
</Ability>
<Ability id="traitinspiringrush-inspiring-rush-fn16-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitinspiringrush-inspiring-rush-fn16-2"><Link to="/trait/inspiring_rush">⮞</Link> Inspiring Rush <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-16.2" id="main-traits_combat_off-fake-fn-16.2" data-hash-target to="main-traits_combat_off-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitinspiringrush-inspiring-rush-fn16-2-flavor">Your charge inspires nearby companions to new heights of daring.</Pair>
<Pair single="benefit" id="traitinspiringrush-inspiring-rush-fn16-2-benefit">Once per day when you make a <Link to="/rule/charge">charge</Link> attack, you gain a +1 trait bonus on both your attack and damage rolls, as do any allies who make a charge attack before the beginning of your next turn.</Pair>
</Ability>
<Ability id="traitkiller-killer-fn3-11-fn4-5-fn5-5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitkiller-killer-fn3-11-fn4-5-fn5-5"><Link to="/trait/killer">⮞</Link> Killer <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-3.11" id="main-traits_combat_off-fake-fn-3.11" data-hash-target to="main-traits_combat_off-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-4.5" id="main-traits_combat_off-fake-fn-4.5" data-hash-target to="main-traits_combat_off-fake-fn-4-target">4</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-5.5" id="main-traits_combat_off-fake-fn-5.5" data-hash-target to="main-traits_combat_off-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitkiller-killer-fn3-11-fn4-5-fn5-5-flavor">You made your first kill at a very young age and found the task of war or murder to your liking. You either take particular pride in a well-placed blow, or find vile pleasure in twisting the blade to maximize your target's pain.</Pair>
<Pair single="benefit" id="traitkiller-killer-fn3-11-fn4-5-fn5-5-benefit">You deal an amount of additional damage equal to your weapon's critical hit modifier when you score a successful critical hit with a weapon; this additional damage is added to the final total, and is not multiplied by the critical hit multiple itself. This extra damage is a trait bonus.</Pair>
</Ability>
<Ability id="traitlargerthanlife-larger-than-life-fn3-12" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitlargerthanlife-larger-than-life-fn3-12"><Link to="/trait/larger_than_life">⮞</Link> Larger Than Life <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-3.12" id="main-traits_combat_off-fake-fn-3.12" data-hash-target to="main-traits_combat_off-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitlargerthanlife-larger-than-life-fn3-12-flavor">You wield firearms with truly terrifying menace.</Pair>
<Pair single="benefit" id="traitlargerthanlife-larger-than-life-fn3-12-benefit">When you use the <Link to="/skill/intimidate">Intimidate</Link> skill on a creature while wielding a firearm, you are considered one size category larger than your actual size.</Pair>
</Ability>
<Ability id="traitlastwalldefender-lastwall-defender-fn1-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitlastwalldefender-lastwall-defender-fn1-4"><Link to="/trait/lastwall_defender">⮞</Link> Lastwall Defender <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-1.4" id="main-traits_combat_off-fake-fn-1.4" data-hash-target to="main-traits_combat_off-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitlastwalldefender-lastwall-defender-fn1-4-flavor">Your military service in Lastwall taught you how to identify undead creatures, changing them in your mind from mysterious terrors to concrete foes you know how to deal with.</Pair>
<Pair single="benefit" id="traitlastwalldefender-lastwall-defender-fn1-4-benefit">You gain a +1 trait bonus on attack and damage rolls against undead creatures that you have personally identified using the <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> skill.</Pair>
</Ability>
<Ability id="traitmercifulscimitar-merciful-scimitar-fn8-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitmercifulscimitar-merciful-scimitar-fn8-2"><Link to="/trait/merciful_scimitar">⮞</Link> Merciful Scimitar <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-8.2" id="main-traits_combat_off-fake-fn-8.2" data-hash-target to="main-traits_combat_off-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitmercifulscimitar-merciful-scimitar-fn8-2-flavor">You learned from worshipers of <Link to="/faith/sarenrae">Sarenrae</Link> to cut foes with a scimitar without killing them.</Pair>
<Pair single="benefit" id="traitmercifulscimitar-merciful-scimitar-fn8-2-benefit">You can deal nonlethal damage with a scimitar without taking a penalty on your attack rolls.</Pair>
</Ability>
<Ability id="traitmonkweaponskill-monk-weapon-skill-fn8-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitmonkweaponskill-monk-weapon-skill-fn8-3"><Link to="/trait/monk_weapon_skill">⮞</Link> Monk Weapon Skill <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-8.3" id="main-traits_combat_off-fake-fn-8.3" data-hash-target to="main-traits_combat_off-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitmonkweaponskill-monk-weapon-skill-fn8-3-flavor">Your exposure to teaching from the <Link to="/rule/houses_of_perfection">Houses of Perfection</Link> makes your attacks with monk weapons even more deadly.</Pair>
<Pair single="benefit" id="traitmonkweaponskill-monk-weapon-skill-fn8-3-benefit">Select one <Link to="/class/monk">monk</Link> weapon with which you are proficient (unarmed attacks do not qualify for this purpose). You gain a +1 trait bonus on damage rolls with this weapon.</Pair>
</Ability>
<Ability id="traitnoescape-no-escape-fn21" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitnoescape-no-escape-fn21"><Link to="/trait/no_escape">⮞</Link> No Escape <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-21" id="main-traits_combat_off-fake-fn-21" data-hash-target to="main-traits_combat_off-fake-fn-21-target">21</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitnoescape-no-escape-fn21-flavor">Struggle as they might, ne'er-do-wells and vagrants are hard pressed to evade the law once in your clutches.</Pair>
<Pair single="benefit" id="traitnoescape-no-escape-fn21-benefit">You gain a +1 trait bonus on <Link to="/rule/combat_maneuvers">combat maneuver</Link> checks to lawfully and nonlethally restrain a creature you've witnessed commit a crime.</Pair>
</Ability>
<Ability id="traitobariveteran-obari-veteran-fn22" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitobariveteran-obari-veteran-fn22"><Link to="/trait/obari_veteran">⮞</Link> Obari Veteran <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-22" id="main-traits_combat_off-fake-fn-22" data-hash-target to="main-traits_combat_off-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitobariveteran-obari-veteran-fn22-flavor">You've spent years aboard ships traveling the lucrative Obari Crossing, transporting Garundi and Vudrani goods.</Pair>
<Pair single="benefit" id="traitobariveteran-obari-veteran-fn22-benefit">You gain +1 bonus on <Link to="/skill/profession">Profession</Link> (sailor) checks, and Profession (sailor) is a class skill for you. You also gain a +1 trait bonus on weapon damage rolls against creatures with the aquatic subtype.</Pair>
</Ability>
<Ability id="traitozeminspired-ozem-inspired-fn8-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitozeminspired-ozem-inspired-fn8-4"><Link to="/trait/ozem_inspired">⮞</Link> Ozem-Inspired <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-8.4" id="main-traits_combat_off-fake-fn-8.4" data-hash-target to="main-traits_combat_off-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitozeminspired-ozem-inspired-fn8-4-flavor">Tales of the Knights of Ozem have inspired you since childhood to lash out reflexively against the undead.</Pair>
<Pair single="benefit" id="traitozeminspired-ozem-inspired-fn8-4-benefit">You gain a +1 trait bonus on attack rolls and damage rolls when making attacks of opportunity against undead. While you wield a shield, your shield bonus to AC improves by 1 against attacks of opportunity made by undead.</Pair>
</Ability>
<Ability id="traitperformerssurprise-performers-surprise-fn8-5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitperformerssurprise-performers-surprise-fn8-5"><Link to="/trait/performers_surprise">⮞</Link> Performer's Surprise <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-8.5" id="main-traits_combat_off-fake-fn-8.5" data-hash-target to="main-traits_combat_off-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitperformerssurprise-performers-surprise-fn8-5-flavor">You are practiced at the surprising combat tricks of Varisian wanderers.</Pair>
<Pair single="benefit" id="traitperformerssurprise-performers-surprise-fn8-5-benefit">Against foes denied their Dexterity bonus to AC, you gain a +1 trait bonus on damage rolls with <Link to="/misc/improvised_weapons">improvised weapons</Link>, exotic weapons, and thrown weapons.</Pair>
</Ability>
<Ability id="traitpillager-pillager-fn18-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitpillager-pillager-fn18-2"><Link to="/trait/pillager">⮞</Link> Pillager <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-18.2" id="main-traits_combat_off-fake-fn-18.2" data-hash-target to="main-traits_combat_off-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitpillager-pillager-fn18-2-flavor">Growing up in a place where authorities, if there were any, rarely enforced property laws, you learned quickly that you have only what you can hold - but you gain whatever you can take.</Pair>
<Pair single="benefit" id="traitpillager-pillager-fn18-2-benefit"><p>You gain a +1 trait bonus on combat maneuver checks to perform <Link to="/rule/disarm">disarm</Link> and <Link to="/rule/steal">steal</Link> combat maneuvers.</p>
<p><strong>Suggested Characters:</strong> Halflings, River Kingdoms natives, Shackles natives.</p>
</Pair>
</Ability>
<Ability id="traitpunishinsurrection-punish-insurrection-fn10-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitpunishinsurrection-punish-insurrection-fn10-2"><Link to="/trait/punish_insurrection">⮞</Link> Punish Insurrection <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-10.2" id="main-traits_combat_off-fake-fn-10.2" data-hash-target to="main-traits_combat_off-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitpunishinsurrection-punish-insurrection-fn10-2-flavor">You relish reminding people who's in charge.</Pair>
<Pair single="benefit" id="traitpunishinsurrection-punish-insurrection-fn10-2-benefit"><p>Against members of the same organization or hierarchy who formally answer to you, you gain a +1 trait bonus on attack and damage rolls.</p>
<p>You also gain this bonus against members who have openly defied the authority or rules of that body, provided the infraction is serious enough that their standing is now less than yours.</p>
</Pair>
</Ability>
<Ability id="traitrecklesscontempt-reckless-contempt-fn3-13" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitrecklesscontempt-reckless-contempt-fn3-13"><Link to="/trait/reckless_contempt">⮞</Link> Reckless Contempt <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-3.13" id="main-traits_combat_off-fake-fn-3.13" data-hash-target to="main-traits_combat_off-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitrecklesscontempt-reckless-contempt-fn3-13-flavor">You do not fear the threat of lesser weapons.</Pair>
<Pair single="benefit" id="traitrecklesscontempt-reckless-contempt-fn3-13-benefit">Whenever you provoke an attack of opportunity by firing a firearm, you gain a +1 trait bonus on the attack roll that provoked the attack of opportunity.</Pair>
</Ability>
<Ability id="traitredmantisbleeding-red-mantis-bleeding-fn8-6" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitredmantisbleeding-red-mantis-bleeding-fn8-6"><Link to="/trait/red_mantis_bleeding">⮞</Link> Red Mantis Bleeding <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-8.6" id="main-traits_combat_off-fake-fn-8.6" data-hash-target to="main-traits_combat_off-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitredmantisbleeding-red-mantis-bleeding-fn8-6-flavor">You witnessed the training of <Link to="/rule/red_mantis">Red Mantis</Link> assassins, either as a child on Mediogalti Island or as an aspirant, and learned to leave bleeding wounds.</Pair>
<Pair single="benefit" id="traitredmantisbleeding-red-mantis-bleeding-fn8-6-benefit">Whenever you confirm a critical hit with a slashing weapon, you also deal 1 point of <Link to="/rule/bleed">bleed</Link> damage.</Pair>
</Ability>
<Ability id="traitriverfighter-river-fighter-fn20-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitriverfighter-river-fighter-fn20-2"><Link to="/trait/river_fighter">⮞</Link> River Fighter <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-20.2" id="main-traits_combat_off-fake-fn-20.2" data-hash-target to="main-traits_combat_off-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Region" hl>Sargava</Pair>
<Pair single="flavor" id="traitriverfighter-river-fighter-fn20-2-flavor">You are used to fighting while swimming.</Pair>
<Pair single="benefit" id="traitriverfighter-river-fighter-fn20-2-benefit">You may swim downstream or cross-current as a <Link to="/rule/charge">charge</Link> if you make your <Link to="/skill/swim">Swim</Link> DC by 5 or more.</Pair>
</Ability>
<Ability id="traitrovingrange-roving-range-fn8-7" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitrovingrange-roving-range-fn8-7"><Link to="/trait/roving_range">⮞</Link> Roving Range <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-8.7" id="main-traits_combat_off-fake-fn-8.7" data-hash-target to="main-traits_combat_off-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitrovingrange-roving-range-fn8-7-flavor">You learned from pirates to make the most of ranged attacks as you close with targets.</Pair>
<Pair single="benefit" id="traitrovingrange-roving-range-fn8-7-benefit">Increase the range increment of ranged weapons (but not thrown weapons) you wield by 5 feet.</Pair>
</Ability>
<Ability id="traitsavannahunter-savanna-hunter-fn20-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitsavannahunter-savanna-hunter-fn20-3"><Link to="/trait/savanna_hunter">⮞</Link> Savanna Hunter <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-20.3" id="main-traits_combat_off-fake-fn-20.3" data-hash-target to="main-traits_combat_off-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitsavannahunter-savanna-hunter-fn20-3-flavor">You have been trained to hunt and fight on the open plains since birth.</Pair>
<Pair single="benefit" id="traitsavannahunter-savanna-hunter-fn20-3-benefit">You gain a +1 trait bonus on attacks of opportunity attack rolls made with a <Link to="/eq-weapon/shortspear">shortspear</Link>, as well as a +1 racial bonus on Constitution checks to continue <Link to="/rule/run">running</Link> and avoid nonlethal damage from a <Link to="/rule/forced_march">forced march</Link>.</Pair>
</Ability>
<Ability id="traitscarredbyspacepirates-scarred-by-space-pirates-fn11-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitscarredbyspacepirates-scarred-by-space-pirates-fn11-3"><Link to="/trait/scarred_by_space_pirates">⮞</Link> Scarred by Space Pirates <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-11.3" id="main-traits_combat_off-fake-fn-11.3" data-hash-target to="main-traits_combat_off-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitscarredbyspacepirates-scarred-by-space-pirates-fn11-3-flavor">You were attacked by Vercite space pirates in your youth, inspiring you to find ways to deal with the alien interlopers should they return.</Pair>
<Pair single="benefit" id="traitscarredbyspacepirates-scarred-by-space-pirates-fn11-3-benefit">You gain a +1 trait bonus on attack rolls against humanoids from beyond Golarion, including androids, kasathas, Triaxians, and Vercites, among others.</Pair>
</Ability>
<Ability id="traitshadowtrained-shadow-trained-fn23" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitshadowtrained-shadow-trained-fn23"><Link to="/trait/shadow_trained">⮞</Link> Shadow Trained <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-23" id="main-traits_combat_off-fake-fn-23" data-hash-target to="main-traits_combat_off-fake-fn-23-target">23</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Region" hl>Nidal</Pair>
<Pair title="Requirements" hl>Associated with the Umbral Court of Nidal</Pair>
<Pair single="flavor" id="traitshadowtrained-shadow-trained-fn23-flavor">You have experience fighting in darkness.</Pair>
<Pair single="benefit" id="traitshadowtrained-shadow-trained-fn23-benefit">Your miss chance while fighting in areas of dim light is only 10%.</Pair>
</Ability>
<Ability id="traitsiegedefender-siege-defender-fn6-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitsiegedefender-siege-defender-fn6-2"><Link to="/trait/siege_defender">⮞</Link> Siege Defender <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-6.2" id="main-traits_combat_off-fake-fn-6.2" data-hash-target to="main-traits_combat_off-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitsiegedefender-siege-defender-fn6-2-flavor">Aroden taught the people of Absalom to survive any siege with proper preparation and cooperation, and those teachings were passed on to you.</Pair>
<Pair single="benefit" id="traitsiegedefender-siege-defender-fn6-2-benefit">You gain a +1 trait bonus on melee damage rolls when you attack a target from <Link to="/rule/higher_ground">higher ground</Link>.</Pair>
</Ability>
<Ability id="traitspiritofthelaw-spirit-of-the-law-fn15-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitspiritofthelaw-spirit-of-the-law-fn15-2"><Link to="/trait/spirit_of_the_law">⮞</Link> Spirit of the Law <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-15.2" id="main-traits_combat_off-fake-fn-15.2" data-hash-target to="main-traits_combat_off-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitspiritofthelaw-spirit-of-the-law-fn15-2-flavor">You have seen the rules of society endlessly twisted in their implementation, and as such, you are especially wary of those who exploit the law to impose their own will.</Pair>
<Pair single="benefit" id="traitspiritofthelaw-spirit-of-the-law-fn15-2-benefit">You gain a +1 trait bonus on attacks against lawful-aligned humanoids and a +2 trait bonus on saving throws against effects with the lawful descriptor.</Pair>
</Ability>
<Ability id="traitsplashattack-splash-attack-fn24" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitsplashattack-splash-attack-fn24"><Link to="/trait/splash_attack">⮞</Link> Splash Attack <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-24" id="main-traits_combat_off-fake-fn-24" data-hash-target to="main-traits_combat_off-fake-fn-24-target">24</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitsplashattack-splash-attack-fn24-flavor">You catch others off-guard when a confrontation escalates.</Pair>
<Pair single="benefit" id="traitsplashattack-splash-attack-fn24-benefit"><p>As long as you are standing in or adjacent to water, or holding at least a pint of liquid (including insoluble liquids like <Link to="/eq-misc/oil">oil</Link> or <Link to="/eq-weapon/alchemists_fire">alchemist's fire</Link>), you can perform a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver to blind a foe within reach without provoking an attack of opportunity.</p>
<p>If you select the <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link> feat, you gain a +2 trait bonus on dirty trick combat maneuvers to blind foes as long as you are standing in or adjacent to water or holding a pint of liquid.</p>
</Pair>
</Ability>
<Ability id="traitstrongarmsupplewrist-strong-arm-supple-wrist-fn25-fn26" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitstrongarmsupplewrist-strong-arm-supple-wrist-fn25-fn26"><Link to="/trait/strong_arm_supple_wrist">⮞</Link> Strong Arm, Supple Wrist <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-25" id="main-traits_combat_off-fake-fn-25" data-hash-target to="main-traits_combat_off-fake-fn-25-target">25</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-26" id="main-traits_combat_off-fake-fn-26" data-hash-target to="main-traits_combat_off-fake-fn-26-target">26</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitstrongarmsupplewrist-strong-arm-supple-wrist-fn25-fn26-flavor">You have been trained in the javelin and the spear, and you know how to make the best use of your momentum.</Pair>
<Pair single="benefit" id="traitstrongarmsupplewrist-strong-arm-supple-wrist-fn25-fn26-benefit">When you move at least 10 feet before making an attack with a thrown weapon, you can add 10 feet to the range increment of the weapon thrown. You can gain this benefit only once per round.</Pair>
</Ability>
<Ability id="traitsurpriseweapon-surprise-weapon-fn3-14" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitsurpriseweapon-surprise-weapon-fn3-14"><Link to="/trait/surprise_weapon">⮞</Link> Surprise Weapon <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-3.14" id="main-traits_combat_off-fake-fn-3.14" data-hash-target to="main-traits_combat_off-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitsurpriseweapon-surprise-weapon-fn3-14-flavor">You are skilled at fighting with objects not traditionally considered weapons.</Pair>
<Pair single="benefit" id="traitsurpriseweapon-surprise-weapon-fn3-14-benefit">You gain a +2 trait bonus on attack rolls with <Link to="/misc/improvised_weapons">improvised weapons</Link>.</Pair>
</Ability>
<Ability id="traitswornenemy-sworn-enemy-fn18-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitswornenemy-sworn-enemy-fn18-3"><Link to="/trait/sworn_enemy">⮞</Link> Sworn Enemy <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-18.3" id="main-traits_combat_off-fake-fn-18.3" data-hash-target to="main-traits_combat_off-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitswornenemy-sworn-enemy-fn18-3-flavor">You were raised with defiance, fear, or hatred of a particular sort of foe. To make you ready to resist such foes, you were trained for long hours in the proper ways to defeat them.</Pair>
<Pair single="benefit" id="traitswornenemy-sworn-enemy-fn18-3-benefit"><p>Choose a foe from the ranger's list of <Link to="/ability/favored_enemies">favored enemies</Link>. You gain a +1 trait bonus on attacks of opportunity against the chosen foe.</p>
<p><strong>Suggested Characters:</strong> Dwarves, Isgeri, Mendevian crusaders.</p>
</Pair>
</Ability>
<Ability id="traittactician-tactician-fn3-15" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traittactician-tactician-fn3-15"><Link to="/trait/tactician">⮞</Link> Tactician <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-3.15" id="main-traits_combat_off-fake-fn-3.15" data-hash-target to="main-traits_combat_off-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traittactician-tactician-fn3-15-flavor">You know how to take advantage of enemies who are unprepared for your assault.</Pair>
<Pair single="benefit" id="traittactician-tactician-fn3-15-benefit">You gain a +1 trait bonus on initiative checks. In addition, once per day when you make an attack of opportunity, you gain a +2 trait bonus on the attack roll.</Pair>
</Ability>
<Ability id="traittartaargadthtrained-tar-taargadth-trained-fn27" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traittartaargadthtrained-tar-taargadth-trained-fn27"><Link to="/trait/tar_taargadth_trained">⮞</Link> Tar Taargadth Trained <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-27" id="main-traits_combat_off-fake-fn-27" data-hash-target to="main-traits_combat_off-fake-fn-27-target">27</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traittartaargadthtrained-tar-taargadth-trained-fn27-flavor">You know the ancient fighting techniques of the Tar Taargadth Empire.</Pair>
<Pair single="benefit" id="traittartaargadthtrained-tar-taargadth-trained-fn27-benefit">You gain a +1 trait bonus on damage rolls when using any weapon with the word "dwarven" in its name.</Pair>
</Ability>
<Ability id="traittarnishedhallsrunner-tarnished-halls-runner-fn28" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traittarnishedhallsrunner-tarnished-halls-runner-fn28"><Link to="/trait/tarnished_halls_runner">⮞</Link> Tarnished Halls Runner <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-28" id="main-traits_combat_off-fake-fn-28" data-hash-target to="main-traits_combat_off-fake-fn-28-target">28</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traittarnishedhallsrunner-tarnished-halls-runner-fn28-flavor">You evaded Technic League patrols with the <Link to="/rule/tarnished_halls">Blood Gar pirates</Link>.</Pair>
<Pair single="benefit" id="traittarnishedhallsrunner-tarnished-halls-runner-fn28-benefit">When you move at least 10 feet, you gain a +1 trait bonus on attack rolls with firearms and technological weapons and a +1 dodge bonus to your AC against such weapons until the start of your next turn.</Pair>
</Ability>
<Ability id="traitthreateningdefender-threatening-defender-fn29" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitthreateningdefender-threatening-defender-fn29"><Link to="/trait/threatening_defender">⮞</Link> Threatening Defender <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-29" id="main-traits_combat_off-fake-fn-29" data-hash-target to="main-traits_combat_off-fake-fn-29-target">29</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitthreateningdefender-threatening-defender-fn29-flavor">You know how to avoid a blow while still maintaining your offensive posture.</Pair>
<Pair single="benefit" id="traitthreateningdefender-threatening-defender-fn29-benefit">When you use <Link to="/feat/combat_expertise">Combat Expertise</Link>, reduce the number you subtract from your melee attack rolls by 1.</Pair>
</Ability>
<Ability id="traitunpredictablereactions-unpredictable-reactions-fn21-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitunpredictablereactions-unpredictable-reactions-fn21-2"><Link to="/trait/unpredictable_reactions">⮞</Link> Unpredictable Reactions <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-21.2" id="main-traits_combat_off-fake-fn-21.2" data-hash-target to="main-traits_combat_off-fake-fn-21-target">21</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitunpredictablereactions-unpredictable-reactions-fn21-2-flavor">Your reactions to combat beginning aren't what people expect.</Pair>
<Pair single="benefit" id="traitunpredictablereactions-unpredictable-reactions-fn21-2-benefit">You gain a +1 trait bonus on attack rolls made during the surprise round of combat.</Pair>
</Ability>
<Ability id="traitvengefulcombat-vengeful-combat-fn18-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitvengefulcombat-vengeful-combat-fn18-4"><Link to="/trait/vengeful_combat">⮞</Link> Vengeful (Combat) <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-18.4" id="main-traits_combat_off-fake-fn-18.4" data-hash-target to="main-traits_combat_off-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitvengefulcombat-vengeful-combat-fn18-4-flavor">During your childhood, you suffered occasional or frequent abuse from those too powerful for you to resist. Now you thrill at the chance to get back at those who wronged you.</Pair>
<Pair single="benefit" id="traitvengefulcombat-vengeful-combat-fn18-4-benefit"><p>Whenever you strike the last creature that damaged you in the past 24 hours, you gain a +1 trait bonus on damage rolls against that creature.</p>
<p><strong>Suggested Characters:</strong> Calistrians, Galtan refugees, Gyronna worshipers.</p>
</Pair>
</Ability>
<Ability id="traitweaponofpeace-weapon-of-peace-fn13-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitweaponofpeace-weapon-of-peace-fn13-2"><Link to="/trait/weapon_of_peace">⮞</Link> Weapon of Peace <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-13.2" id="main-traits_combat_off-fake-fn-13.2" data-hash-target to="main-traits_combat_off-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitweaponofpeace-weapon-of-peace-fn13-2-flavor">Even though you are a trained combatant, proficient with any number of weapons, you don't relish killing your enemies. It's not that you're afraid of seeing blood, but rather that disabling a foe is superior to killing someone capable of admitting defeat.</Pair>
<Pair single="benefit" id="traitweaponofpeace-weapon-of-peace-fn13-2-benefit">When using a melee weapon that deals lethal damage to instead deal nonlethal damage, you take only a -2 penalty instead of -4.</Pair>
</Ability>
<Ability id="traityouthfulinfiltrator-youthful-infiltrator-fn30" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traityouthfulinfiltrator-youthful-infiltrator-fn30"><Link to="/trait/youthful_infiltrator">⮞</Link> Youthful Infiltrator <sup><InnerLink showBacklink="backlink-main-traits_combat_off-fake-fn-30" id="main-traits_combat_off-fake-fn-30" data-hash-target to="main-traits_combat_off-fake-fn-30-target">30</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traityouthfulinfiltrator-youthful-infiltrator-fn30-flavor">You were trained from a young age to ambush the enemies of your order or organization, which makes you hard to trust for most outside your organization if they learn your affiliation.</Pair>
<Pair single="benefit" id="traityouthfulinfiltrator-youthful-infiltrator-fn30-benefit">You gain a +1 trait bonus on attack rolls against <Link to="/rule/flat_footed">flat-footed</Link> foes, as long as they have not seen you make an attack with this bonus before.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_combat_off-label">Footnotes</h3><ol>
<li id="main-traits_combat_off-fake-fn-1-target"><p><Link to="/source/advanced_class_origins">Advanced Class Origins</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_combat_off-fake-fn-1" data-hash-target to="main-traits_combat_off-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_combat_off-fake-fn-1.2" data-hash-target to="main-traits_combat_off-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_combat_off-fake-fn-1.3" data-hash-target to="main-traits_combat_off-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_combat_off-fake-fn-1.4" data-hash-target to="main-traits_combat_off-fake-fn-1.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-2-target"><p><Link to="/source/pathfinder_society_primer">Pathfinder Society Primer</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_combat_off-fake-fn-2" data-hash-target to="main-traits_combat_off-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-3-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_off-fake-fn-3" data-hash-target to="main-traits_combat_off-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_off-fake-fn-3.2" data-hash-target to="main-traits_combat_off-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_off-fake-fn-3.3" data-hash-target to="main-traits_combat_off-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_off-fake-fn-3.4" data-hash-target to="main-traits_combat_off-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_off-fake-fn-3.5" data-hash-target to="main-traits_combat_off-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_off-fake-fn-3.6" data-hash-target to="main-traits_combat_off-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_off-fake-fn-3.7" data-hash-target to="main-traits_combat_off-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_off-fake-fn-3.8" data-hash-target to="main-traits_combat_off-fake-fn-3.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_off-fake-fn-3.9" data-hash-target to="main-traits_combat_off-fake-fn-3.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_off-fake-fn-3.10" data-hash-target to="main-traits_combat_off-fake-fn-3.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_off-fake-fn-3.11" data-hash-target to="main-traits_combat_off-fake-fn-3.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_off-fake-fn-3.12" data-hash-target to="main-traits_combat_off-fake-fn-3.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_off-fake-fn-3.13" data-hash-target to="main-traits_combat_off-fake-fn-3.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_off-fake-fn-3.14" data-hash-target to="main-traits_combat_off-fake-fn-3.14">↩<sup>14</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_off-fake-fn-3.15" data-hash-target to="main-traits_combat_off-fake-fn-3.15">↩<sup>15</sup></InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-4-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_off-fake-fn-4" data-hash-target to="main-traits_combat_off-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_off-fake-fn-4.2" data-hash-target to="main-traits_combat_off-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_off-fake-fn-4.3" data-hash-target to="main-traits_combat_off-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_off-fake-fn-4.4" data-hash-target to="main-traits_combat_off-fake-fn-4.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_off-fake-fn-4.5" data-hash-target to="main-traits_combat_off-fake-fn-4.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-5-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_combat_off-fake-fn-5" data-hash-target to="main-traits_combat_off-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_combat_off-fake-fn-5.2" data-hash-target to="main-traits_combat_off-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_combat_off-fake-fn-5.3" data-hash-target to="main-traits_combat_off-fake-fn-5.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_combat_off-fake-fn-5.4" data-hash-target to="main-traits_combat_off-fake-fn-5.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_combat_off-fake-fn-5.5" data-hash-target to="main-traits_combat_off-fake-fn-5.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-6-target"><p><Link to="/source/arcane_anthology">Arcane Anthology</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_off-fake-fn-6" data-hash-target to="main-traits_combat_off-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_off-fake-fn-6.2" data-hash-target to="main-traits_combat_off-fake-fn-6.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-7-target"><p><Link to="/source/agents_of_evil">Agents of Evil</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_combat_off-fake-fn-7" data-hash-target to="main-traits_combat_off-fake-fn-7">↩</InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-8-target"><p><Link to="/source/weapon_masters_handbook">Weapon Master's Handbook</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_off-fake-fn-8" data-hash-target to="main-traits_combat_off-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_off-fake-fn-8.2" data-hash-target to="main-traits_combat_off-fake-fn-8.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_off-fake-fn-8.3" data-hash-target to="main-traits_combat_off-fake-fn-8.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_off-fake-fn-8.4" data-hash-target to="main-traits_combat_off-fake-fn-8.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_off-fake-fn-8.5" data-hash-target to="main-traits_combat_off-fake-fn-8.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_off-fake-fn-8.6" data-hash-target to="main-traits_combat_off-fake-fn-8.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_off-fake-fn-8.7" data-hash-target to="main-traits_combat_off-fake-fn-8.7">↩<sup>7</sup></InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-9-target"><p><Link to="/source/people_of_the_wastes">People of the Wastes</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_combat_off-fake-fn-9" data-hash-target to="main-traits_combat_off-fake-fn-9">↩</InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_combat_off-fake-fn-9.2" data-hash-target to="main-traits_combat_off-fake-fn-9.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-10-target"><p><Link to="/source/champions_of_corruption">Champions of Corruption</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_combat_off-fake-fn-10" data-hash-target to="main-traits_combat_off-fake-fn-10">↩</InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_combat_off-fake-fn-10.2" data-hash-target to="main-traits_combat_off-fake-fn-10.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-11-target"><p><Link to="/source/people_of_the_stars">People of the Stars</Link> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_combat_off-fake-fn-11" data-hash-target to="main-traits_combat_off-fake-fn-11">↩</InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_combat_off-fake-fn-11.2" data-hash-target to="main-traits_combat_off-fake-fn-11.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_combat_off-fake-fn-11.3" data-hash-target to="main-traits_combat_off-fake-fn-11.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-12-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_combat_off-fake-fn-12" data-hash-target to="main-traits_combat_off-fake-fn-12">↩</InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-13-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_combat_off-fake-fn-13" data-hash-target to="main-traits_combat_off-fake-fn-13">↩</InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_combat_off-fake-fn-13.2" data-hash-target to="main-traits_combat_off-fake-fn-13.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-14-target"><p><Link to="/source/armor_masters_handbook">Armor Master's Handbook</Link> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_combat_off-fake-fn-14" data-hash-target to="main-traits_combat_off-fake-fn-14">↩</InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-15-target"><p><Link to="/source/antiheros_handbook">Antihero's Handbook</Link> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_combat_off-fake-fn-15" data-hash-target to="main-traits_combat_off-fake-fn-15">↩</InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_combat_off-fake-fn-15.2" data-hash-target to="main-traits_combat_off-fake-fn-15.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-16-target"><p><Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_combat_off-fake-fn-16" data-hash-target to="main-traits_combat_off-fake-fn-16">↩</InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_combat_off-fake-fn-16.2" data-hash-target to="main-traits_combat_off-fake-fn-16.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-17-target"><p><Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_combat_off-fake-fn-17" data-hash-target to="main-traits_combat_off-fake-fn-17">↩</InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-18-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_combat_off-fake-fn-18" data-hash-target to="main-traits_combat_off-fake-fn-18">↩</InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_combat_off-fake-fn-18.2" data-hash-target to="main-traits_combat_off-fake-fn-18.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_combat_off-fake-fn-18.3" data-hash-target to="main-traits_combat_off-fake-fn-18.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_combat_off-fake-fn-18.4" data-hash-target to="main-traits_combat_off-fake-fn-18.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-19-target"><p><Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook</Link> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_combat_off-fake-fn-19" data-hash-target to="main-traits_combat_off-fake-fn-19">↩</InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-20-target"><p><Link to="/source/sargava_the_lost_colony">Sargava, the Lost Colony</Link> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_combat_off-fake-fn-20" data-hash-target to="main-traits_combat_off-fake-fn-20">↩</InnerLink> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_combat_off-fake-fn-20.2" data-hash-target to="main-traits_combat_off-fake-fn-20.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_combat_off-fake-fn-20.3" data-hash-target to="main-traits_combat_off-fake-fn-20.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-21-target"><p><Link to="/source/champions_of_balance">Champions of Balance</Link> <InnerLink aria-label="Back to reference 21" id="backlink-main-traits_combat_off-fake-fn-21" data-hash-target to="main-traits_combat_off-fake-fn-21">↩</InnerLink> <InnerLink aria-label="Back to reference 21" id="backlink-main-traits_combat_off-fake-fn-21.2" data-hash-target to="main-traits_combat_off-fake-fn-21.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-22-target"><p><Link to="/source/merchants_manifest">Merchant's Manifest</Link> <InnerLink aria-label="Back to reference 22" id="backlink-main-traits_combat_off-fake-fn-22" data-hash-target to="main-traits_combat_off-fake-fn-22">↩</InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-23-target"><p><Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link> <InnerLink aria-label="Back to reference 23" id="backlink-main-traits_combat_off-fake-fn-23" data-hash-target to="main-traits_combat_off-fake-fn-23">↩</InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-24-target"><p><Link to="/source/people_of_the_river">People of the River</Link> <InnerLink aria-label="Back to reference 24" id="backlink-main-traits_combat_off-fake-fn-24" data-hash-target to="main-traits_combat_off-fake-fn-24">↩</InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-25-target"><p><Link to="/source/qadira_jewel_of_the_east">Qadira, Jewel of the East</Link> <InnerLink aria-label="Back to reference 25" id="backlink-main-traits_combat_off-fake-fn-25" data-hash-target to="main-traits_combat_off-fake-fn-25">↩</InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-26-target"><p><Link to="/source/qadira_gateway_to_the_east">Qadira, Gateway to the East</Link> <InnerLink aria-label="Back to reference 26" id="backlink-main-traits_combat_off-fake-fn-26" data-hash-target to="main-traits_combat_off-fake-fn-26">↩</InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-27-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 31 <InnerLink aria-label="Back to reference 27" id="backlink-main-traits_combat_off-fake-fn-27" data-hash-target to="main-traits_combat_off-fake-fn-27">↩</InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-28-target"><p><Link to="/source/black_markets">Black Markets</Link> <InnerLink aria-label="Back to reference 28" id="backlink-main-traits_combat_off-fake-fn-28" data-hash-target to="main-traits_combat_off-fake-fn-28">↩</InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-29-target"><p><Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link> <InnerLink aria-label="Back to reference 29" id="backlink-main-traits_combat_off-fake-fn-29" data-hash-target to="main-traits_combat_off-fake-fn-29">↩</InnerLink></p></li>
<li id="main-traits_combat_off-fake-fn-30-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 30" id="backlink-main-traits_combat_off-fake-fn-30" data-hash-target to="main-traits_combat_off-fake-fn-30">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_combat_def = {title: "Defense Combat Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_combat" className="reversed" info="Back to Combat Traits" /><Ability id="traitaldoricaution-aldori-caution-fn1" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitaldoricaution-aldori-caution-fn1"><Link to="/trait/aldori_caution">⮞</Link> Aldori Caution <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-1" id="main-traits_combat_def-fake-fn-1" data-hash-target to="main-traits_combat_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitaldoricaution-aldori-caution-fn1-flavor">You learned defensive moves from Aldori trainers.</Pair>
<Pair single="benefit" id="traitaldoricaution-aldori-caution-fn1-benefit">You gain an additional +1 dodge bonus to Armor Class while you <Link to="/misc/fight_defensively">fight defensively</Link> or use the <Link to="/misc/total_defense">total defense</Link> action.</Pair>
</Ability>
<Ability id="traitarmedgrit-armed-grit-fn1-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitarmedgrit-armed-grit-fn1-2"><Link to="/trait/armed_grit">⮞</Link> Armed Grit <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-1.2" id="main-traits_combat_def-fake-fn-1.2" data-hash-target to="main-traits_combat_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitarmedgrit-armed-grit-fn1-2-flavor">You make an impression during a standoff.</Pair>
<Pair single="benefit" id="traitarmedgrit-armed-grit-fn1-2-benefit">As long as you have a firearm drawn, you gain a +2 trait bonus on saving throws against fear and the DCs of <Link to="/skill/intimidate">Intimidate</Link> checks to demoralize you increase by 2.</Pair>
</Ability>
<Ability id="traitarmoredsoul-armored-soul-fn2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitarmoredsoul-armored-soul-fn2"><Link to="/trait/armored_soul">⮞</Link> Armored Soul <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-2" id="main-traits_combat_def-fake-fn-2" data-hash-target to="main-traits_combat_def-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traitarmoredsoul-armored-soul-fn2-benefit">When wearing armor or using a shield, you gain a +1 trait bonus on saving throws against divine spells that deal damage.</Pair>
</Ability>
<Ability id="traitblackpowderfortune-black-powder-fortune-fn3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitblackpowderfortune-black-powder-fortune-fn3"><Link to="/trait/black_powder_fortune">⮞</Link> Black Powder Fortune <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-3" id="main-traits_combat_def-fake-fn-3" data-hash-target to="main-traits_combat_def-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitblackpowderfortune-black-powder-fortune-fn3-flavor">You have little to fear when there's a gun in your hand.</Pair>
<Pair single="benefit" id="traitblackpowderfortune-black-powder-fortune-fn3-benefit">As long as you are wielding a firearm, you gain a +2 trait bonus on all saving throws against curse, fear, and emotion effects.</Pair>
</Ability>
<Ability id="traitcarefulcombatant-careful-combatant-fn4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitcarefulcombatant-careful-combatant-fn4"><Link to="/trait/careful_combatant">⮞</Link> Careful Combatant <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-4" id="main-traits_combat_def-fake-fn-4" data-hash-target to="main-traits_combat_def-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitcarefulcombatant-careful-combatant-fn4-flavor">You have a strong sense of self-preservation, believing it is more important to safely extract yourself from a fight that has turned hopeless than to stubbornly stand your ground and risk death - for when you're dead, you can't protect the innocent.</Pair>
<Pair single="benefit" id="traitcarefulcombatant-careful-combatant-fn4-benefit">When using the <Link to="/rule/withdraw">withdraw</Link> action, both the first and second squares of your movement are not considered threatened by any opponents you can see, rather than just the first square.</Pair>
</Ability>
<Ability id="traitcourageous-courageous-fn3-2-fn5-fn6" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitcourageous-courageous-fn3-2-fn5-fn6"><Link to="/trait/courageous">⮞</Link> Courageous <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-3.2" id="main-traits_combat_def-fake-fn-3.2" data-hash-target to="main-traits_combat_def-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-5" id="main-traits_combat_def-fake-fn-5" data-hash-target to="main-traits_combat_def-fake-fn-5-target">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-6" id="main-traits_combat_def-fake-fn-6" data-hash-target to="main-traits_combat_def-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitcourageous-courageous-fn3-2-fn5-fn6-flavor">Your childhood was brutal, but you persevered through force of will and faith. No matter how hard things got, you knew you'd make it through as long as you kept a level head.</Pair>
<Pair single="benefit" id="traitcourageous-courageous-fn3-2-fn5-fn6-benefit">You gain a +2 trait bonus on saving throws against fear effects.</Pair>
</Ability>
<Ability id="traitcrimsoncarapace-crimson-carapace-fn2-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitcrimsoncarapace-crimson-carapace-fn2-2"><Link to="/trait/crimson_carapace">⮞</Link> Crimson Carapace <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-2.2" id="main-traits_combat_def-fake-fn-2.2" data-hash-target to="main-traits_combat_def-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitcrimsoncarapace-crimson-carapace-fn2-2-flavor">A combination of armor and agility protects you from deadly attacks.</Pair>
<Pair single="benefit" id="traitcrimsoncarapace-crimson-carapace-fn2-2-benefit">When wearing light armor and <Link to="/misc/fighting_defensively">fighting defensively</Link> or using <Link to="/feat/combat_expertise">Combat Expertise</Link>, you receive a +2 trait bonus to your AC against attack rolls to confirm a critical threat.</Pair>
</Ability>
<Ability id="traitcrowddodger-crowd-dodger-fn7" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitcrowddodger-crowd-dodger-fn7"><Link to="/trait/crowd_dodger">⮞</Link> Crowd Dodger <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-7" id="main-traits_combat_def-fake-fn-7" data-hash-target to="main-traits_combat_def-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitcrowddodger-crowd-dodger-fn7-flavor">You spent much of your youth on crowded streets, dodging quickly around and under others.</Pair>
<Pair single="benefit" id="traitcrowddodger-crowd-dodger-fn7-benefit"><p>You gain a +2 trait bonus on <Link to="/skill/acrobatics">Acrobatics</Link> checks to move through another creature's space and to avoid attacks of opportunity for leaving a threatened square.</p>
<p><strong>Suggested Characters:</strong> Absalom natives, Chelaxians, Lion Blades.</p>
</Pair>
</Ability>
<Ability id="traitdefenderofthesociety-defender-of-the-society-fn8-fn9" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdefenderofthesociety-defender-of-the-society-fn8-fn9"><Link to="/trait/defender_of_the_society">⮞</Link> Defender of the Society <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-8" id="main-traits_combat_def-fake-fn-8" data-hash-target to="main-traits_combat_def-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-9" id="main-traits_combat_def-fake-fn-9" data-hash-target to="main-traits_combat_def-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traitdefenderofthesociety-defender-of-the-society-fn8-fn9-flavor">Your time spent studying the greatest warriors of the Society taught you new defensive skills while wearing armor.</Pair>
<Pair single="benefit" id="traitdefenderofthesociety-defender-of-the-society-fn8-fn9-benefit">You gain a +1 trait bonus to Armor Class when wearing medium or heavy armor.</Pair>
</Ability>
<Ability id="traitdeftdodger-deft-dodger-fn3-3-fn5-2-fn6-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdeftdodger-deft-dodger-fn3-3-fn5-2-fn6-2"><Link to="/trait/deft_dodger">⮞</Link> Deft Dodger <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-3.3" id="main-traits_combat_def-fake-fn-3.3" data-hash-target to="main-traits_combat_def-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-5.2" id="main-traits_combat_def-fake-fn-5.2" data-hash-target to="main-traits_combat_def-fake-fn-5-target">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-6.2" id="main-traits_combat_def-fake-fn-6.2" data-hash-target to="main-traits_combat_def-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdeftdodger-deft-dodger-fn3-3-fn5-2-fn6-2-flavor">Growing up in a rough neighborhood or a dangerous environment has honed your senses.</Pair>
<Pair single="benefit" id="traitdeftdodger-deft-dodger-fn3-3-fn5-2-fn6-2-benefit">You gain a +1 trait bonus on Reflex saves.</Pair>
</Ability>
<Ability id="traitdisillusioned-disillusioned-fn7-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdisillusioned-disillusioned-fn7-2"><Link to="/trait/disillusioned">⮞</Link> Disillusioned <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-7.2" id="main-traits_combat_def-fake-fn-7.2" data-hash-target to="main-traits_combat_def-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdisillusioned-disillusioned-fn7-2-flavor">Your childhood was ended by a great disaster or atrocity that you witnessed. To cope with the horror, you have learned to reflexively suppress all emotion.</Pair>
<Pair single="benefit" id="traitdisillusioned-disillusioned-fn7-2-benefit"><p>You gain a +2 trait bonus on Will saving throws against emotion and fear effects.</p>
<p><strong>Suggested Characters:</strong> Galtans, <Link to="/rule/hellknights">Hellknights</Link>, Nidalese.</p>
</Pair>
</Ability>
<Ability id="traitdormantdefense-dormant-defense-fn10" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdormantdefense-dormant-defense-fn10"><Link to="/trait/dormant_defense">⮞</Link> Dormant Defense <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-10" id="main-traits_combat_def-fake-fn-10" data-hash-target to="main-traits_combat_def-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdormantdefense-dormant-defense-fn10-flavor">Your body never lets down its defenses, even when you rest.</Pair>
<Pair single="benefit" id="traitdormantdefense-dormant-defense-fn10-benefit"><p>The DC for <Link to="/skill/perception">Perception</Link> checks you attempt while asleep increases only by 7 (instead of the normal +10 increase). While you are <Link to="/misc/dazed">dazed</Link>, <Link to="/misc/stunned">stunned</Link>, or <Link to="/misc/helpless">helpless</Link>, each critical hit or sneak attack scored against you has a 25% chance of being negated; when a critical hit or sneak attack is negated, roll its damage normally.</p>
<p>This doesn't stack with the <Link to="/magic-enh/fortification">fortification</Link> armor special ability and similar effects.</p>
</Pair>
</Ability>
<Ability id="traitdragonarmor-dragon-armor-fn2-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitdragonarmor-dragon-armor-fn2-3"><Link to="/trait/dragon_armor">⮞</Link> Dragon Armor <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-2.3" id="main-traits_combat_def-fake-fn-2.3" data-hash-target to="main-traits_combat_def-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitdragonarmor-dragon-armor-fn2-3-flavor">Xa Hoi's elite warriors are trained to deflect energy attacks.</Pair>
<Pair single="benefit" id="traitdragonarmor-dragon-armor-fn2-3-benefit">Choose an energy type (acid, cold, electricity, fire, or sonic) when you acquire this trait. When you are wearing medium or heavy armor, you gain a +2 trait bonus on Reflex saves against spells and effects of the chosen energy type.</Pair>
</Ability>
<Ability id="traitduelingcloakadept-dueling-cloak-adept-fn11" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitduelingcloakadept-dueling-cloak-adept-fn11"><Link to="/trait/dueling_cloak_adept">⮞</Link> Dueling Cloak Adept <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-11" id="main-traits_combat_def-fake-fn-11" data-hash-target to="main-traits_combat_def-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitduelingcloakadept-dueling-cloak-adept-fn11-flavor">You are trained in using your cloak to disguise your body and deceive your enemies.</Pair>
<Pair single="benefit" id="traitduelingcloakadept-dueling-cloak-adept-fn11-benefit">While wearing a cloak and using an <Link to="/eq-weapon/aldori_dueling_sword">Aldori dueling sword</Link>, you gain a +2 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks made to feint. Additionally, every time you successfully feint while wearing a cloak, you gain a +1 dodge bonus to your Armor Class until your next turn.</Pair>
</Ability>
<Ability id="traithardtokill-hard-to-kill-fn4-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traithardtokill-hard-to-kill-fn4-2"><Link to="/trait/hard_to_kill">⮞</Link> Hard to Kill <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-4.2" id="main-traits_combat_def-fake-fn-4.2" data-hash-target to="main-traits_combat_def-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traithardtokill-hard-to-kill-fn4-2-flavor">Your strong will to live and spread good combined with your pure physicality makes you a tough opponent to take down. You may have discovered this as a child after a tragic accident or during the course of your first battle.</Pair>
<Pair single="benefit" id="traithardtokill-hard-to-kill-fn4-2-benefit">When you are attempting a Constitution check to stabilize when <Link to="/misc/dying">dying</Link>, the penalty on the check is only half your negative hit point total instead of your full negative hit point total.</Pair>
</Ability>
<Ability id="traitholdout-holdout-fn7-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitholdout-holdout-fn7-3"><Link to="/trait/holdout">⮞</Link> Holdout <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-7.3" id="main-traits_combat_def-fake-fn-7.3" data-hash-target to="main-traits_combat_def-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitholdout-holdout-fn7-3-flavor">You were robbed at a young age by bullies, an experience that impressed upon you the importance of being able to hold on to whatever you cared to keep.</Pair>
<Pair single="benefit" id="traitholdout-holdout-fn7-3-benefit"><p>You gain a +1 trait bonus to CMD against disarm and steal combat maneuvers.</p>
<p><strong>Suggested Characters:</strong> Half-orcs, River Kingdoms natives, Varisians.</p>
</Pair>
</Ability>
<Ability id="traitichimeiyochampion-ichimeiyo-champion-fn1-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitichimeiyochampion-ichimeiyo-champion-fn1-3"><Link to="/trait/ichimeiyo_champion">⮞</Link> Ichimeiyo Champion <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-1.3" id="main-traits_combat_def-fake-fn-1.3" data-hash-target to="main-traits_combat_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitichimeiyochampion-ichimeiyo-champion-fn1-3-flavor">You draw strength from adhering to the Ichimeiyo honor code in combat.</Pair>
<Pair single="benefit" id="traitichimeiyochampion-ichimeiyo-champion-fn1-3-benefit">Once per day, if an effect would compel you to harm an ally, abandon an ally, or break your word, you can attempt a Will save at the usual DC to end the effect. If the effect normally allows a Will save at this point, you can roll twice and take the better result.</Pair>
</Ability>
<Ability id="traitimproviseddefense-improvised-defense-fn12" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitimproviseddefense-improvised-defense-fn12"><Link to="/trait/improvised_defense">⮞</Link> Improvised Defense <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-12" id="main-traits_combat_def-fake-fn-12" data-hash-target to="main-traits_combat_def-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitimproviseddefense-improvised-defense-fn12-flavor">You're never defenseless, even when you are caught off guard.</Pair>
<Pair single="benefit" id="traitimproviseddefense-improvised-defense-fn12-benefit">Whenever you wield an improvised weapon, you gain a +1 shield bonus to AC. If you use the improvised weapon to attack, you lose this shield bonus until the beginning of your next turn.</Pair>
</Ability>
<Ability id="traitmonstersurvivor-monster-survivor-fn13" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitmonstersurvivor-monster-survivor-fn13"><Link to="/trait/monster_survivor">⮞</Link> Monster Survivor <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-13" id="main-traits_combat_def-fake-fn-13" data-hash-target to="main-traits_combat_def-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitmonstersurvivor-monster-survivor-fn13-flavor">You've escaped with your life after a terrible monster attack.</Pair>
<Pair single="benefit" id="traitmonstersurvivor-monster-survivor-fn13-benefit">You gain a +4 dodge bonus to AC against attacks of opportunity made against you by Large or larger opponents when you're making a <Link to="/rule/withdraw">withdraw</Link> action.</Pair>
</Ability>
<Ability id="traitneverstopshooting-never-stop-shooting-fn3-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitneverstopshooting-never-stop-shooting-fn3-4"><Link to="/trait/never_stop_shooting">⮞</Link> Never Stop Shooting <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-3.4" id="main-traits_combat_def-fake-fn-3.4" data-hash-target to="main-traits_combat_def-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitneverstopshooting-never-stop-shooting-fn3-4-flavor">Even when the chips are down, you keep on shooting.</Pair>
<Pair single="benefit" id="traitneverstopshooting-never-stop-shooting-fn3-4-benefit"><p>If your hit point total drops to 0 or lower but you are not dead, you may act as if <Link to="/misc/disabled">disabled</Link> rather than <Link to="/misc/dying">dying</Link> (as if you possessed the <Link to="/feat/diehard">Diehard</Link> feat). However, you can use your actions only to draw a firearm, reload a firearm, or attack with a firearm.</p>
<p>If you have the Diehard feat, this trait also allows you to substitute your Wisdom score for your Constitution score for the purpose of determining the negative hit point total at which you die.</p>
</Pair>
</Ability>
<Ability id="traitogreavoidance-ogre-avoidance-fn10-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitogreavoidance-ogre-avoidance-fn10-2"><Link to="/trait/ogre_avoidance">⮞</Link> Ogre Avoidance <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-10.2" id="main-traits_combat_def-fake-fn-10.2" data-hash-target to="main-traits_combat_def-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitogreavoidance-ogre-avoidance-fn10-2-flavor">You have practiced defensive maneuvers to avoid being caught by <Link to="/monster/ogre">ogres</Link>, whose grasps you know are tight and unforgiving.</Pair>
<Pair single="benefit" id="traitogreavoidance-ogre-avoidance-fn10-2-benefit">You gain a +2 trait bonus to CMD against <Link to="/rule/bull_rush">bull rush</Link> and <Link to="/rule/grapple">grapple</Link> combat maneuvers.</Pair>
</Ability>
<Ability id="traitozeminspired-ozem-inspired-fn1-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitozeminspired-ozem-inspired-fn1-4"><Link to="/trait/ozem_inspired">⮞</Link> Ozem-Inspired <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-1.4" id="main-traits_combat_def-fake-fn-1.4" data-hash-target to="main-traits_combat_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitozeminspired-ozem-inspired-fn1-4-flavor">Tales of the Knights of Ozem have inspired you since childhood to lash out reflexively against the undead.</Pair>
<Pair single="benefit" id="traitozeminspired-ozem-inspired-fn1-4-benefit">You gain a +1 trait bonus on attack rolls and damage rolls when making attacks of opportunity against undead. While you wield a shield, your shield bonus to AC improves by 1 against attacks of opportunity made by undead.</Pair>
</Ability>
<Ability id="traitpermanentscars-permanent-scars-fn2-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitpermanentscars-permanent-scars-fn2-4"><Link to="/trait/permanent_scars">⮞</Link> Permanent Scars <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-2.4" id="main-traits_combat_def-fake-fn-2.4" data-hash-target to="main-traits_combat_def-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitpermanentscars-permanent-scars-fn2-4-flavor">You carry the physical and emotional scars of your <Link to="/rule/gray_maidens">Gray Maiden</Link> initiation as mental armor.</Pair>
<Pair single="benefit" id="traitpermanentscars-permanent-scars-fn2-4-benefit">You receive a +2 trait bonus on saving throws against emotion and pain spells and effects.</Pair>
</Ability>
<Ability id="traitpromising-promising-fn2-5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitpromising-promising-fn2-5"><Link to="/trait/promising">⮞</Link> Promising <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-2.5" id="main-traits_combat_def-fake-fn-2.5" data-hash-target to="main-traits_combat_def-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitpromising-promising-fn2-5-flavor">Your superiors have identified you as an <Link to="/rule/eagle_knights">Eagle Knights</Link> candidate, and their praise encourages you to strive to meet their expectations.</Pair>
<Pair single="benefit" id="traitpromising-promising-fn2-5-benefit">Each day after getting a full night's sleep, you gain a +1 trait bonus to your AC when wearing armor or carrying a shield. This bonus lasts until you are first hit by an attack within the next 24 hours.</Pair>
</Ability>
<Ability id="traitresilient-resilient-fn3-5-fn5-3-fn6-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitresilient-resilient-fn3-5-fn5-3-fn6-3"><Link to="/trait/resilient">⮞</Link> Resilient <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-3.5" id="main-traits_combat_def-fake-fn-3.5" data-hash-target to="main-traits_combat_def-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-5.3" id="main-traits_combat_def-fake-fn-5.3" data-hash-target to="main-traits_combat_def-fake-fn-5-target">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-6.3" id="main-traits_combat_def-fake-fn-6.3" data-hash-target to="main-traits_combat_def-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitresilient-resilient-fn3-5-fn5-3-fn6-3-flavor">Growing up in a poor neighborhood or in the unforgiving wilds often forced you to subsist on food and water from doubtful sources.</Pair>
<Pair single="benefit" id="traitresilient-resilient-fn3-5-fn5-3-fn6-3-benefit">You've built up your constitution as a result, and gain a +1 trait bonus on Fortitude saves.</Pair>
</Ability>
<Ability id="traitresolveoftherejected-resolve-of-the-rejected-fn3-6" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitresolveoftherejected-resolve-of-the-rejected-fn3-6"><Link to="/trait/resolve_of_the_rejected">⮞</Link> Resolve of the Rejected <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-3.6" id="main-traits_combat_def-fake-fn-3.6" data-hash-target to="main-traits_combat_def-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitresolveoftherejected-resolve-of-the-rejected-fn3-6-flavor">Some disagree with your choice to wield a firearm, and their scorn has only hardened your resolve in battle.</Pair>
<Pair single="benefit" id="traitresolveoftherejected-resolve-of-the-rejected-fn3-6-benefit">You gain a +1 trait bonus on all saving throws against charm and compulsion effects. Also, once per day when you succeed at a saving throw against such an effect, you regain 1 grit point.</Pair>
</Ability>
<Ability id="traitsavannahunter-savanna-hunter-fn14" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitsavannahunter-savanna-hunter-fn14"><Link to="/trait/savanna_hunter">⮞</Link> Savanna Hunter <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-14" id="main-traits_combat_def-fake-fn-14" data-hash-target to="main-traits_combat_def-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitsavannahunter-savanna-hunter-fn14-flavor">You have been trained to hunt and fight on the open plains since birth.</Pair>
<Pair single="benefit" id="traitsavannahunter-savanna-hunter-fn14-benefit">You gain a +1 trait bonus on attacks of opportunity attack rolls made with a <Link to="/eq-weapon/shortspear">shortspear</Link>, as well as a +1 racial bonus on Constitution checks to continue <Link to="/rule/run">running</Link> and avoid nonlethal damage from a <Link to="/rule/forced_march">forced march</Link>.</Pair>
</Ability>
<Ability id="traitspiritofthelaw-spirit-of-the-law-fn15" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitspiritofthelaw-spirit-of-the-law-fn15"><Link to="/trait/spirit_of_the_law">⮞</Link> Spirit of the Law <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-15" id="main-traits_combat_def-fake-fn-15" data-hash-target to="main-traits_combat_def-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitspiritofthelaw-spirit-of-the-law-fn15-flavor">You have seen the rules of society endlessly twisted in their implementation, and as such, you are especially wary of those who exploit the law to impose their own will.</Pair>
<Pair single="benefit" id="traitspiritofthelaw-spirit-of-the-law-fn15-benefit">You gain a +1 trait bonus on attacks against lawful-aligned humanoids and a +2 trait bonus on saving throws against effects with the lawful descriptor.</Pair>
</Ability>
<Ability id="traittarnishedhallsrunner-tarnished-halls-runner-fn16" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traittarnishedhallsrunner-tarnished-halls-runner-fn16"><Link to="/trait/tarnished_halls_runner">⮞</Link> Tarnished Halls Runner <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-16" id="main-traits_combat_def-fake-fn-16" data-hash-target to="main-traits_combat_def-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traittarnishedhallsrunner-tarnished-halls-runner-fn16-flavor">You evaded Technic League patrols with the <Link to="/rule/tarnished_halls">Blood Gar pirates</Link>.</Pair>
<Pair single="benefit" id="traittarnishedhallsrunner-tarnished-halls-runner-fn16-benefit">When you move at least 10 feet, you gain a +1 trait bonus on attack rolls with firearms and technological weapons and a +1 dodge bonus to your AC against such weapons until the start of your next turn.</Pair>
</Ability>
<Ability id="traittothelast-to-the-last-fn2-6" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traittothelast-to-the-last-fn2-6"><Link to="/trait/to_the_last">⮞</Link> To The Last <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-2.6" id="main-traits_combat_def-fake-fn-2.6" data-hash-target to="main-traits_combat_def-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="traittothelast-to-the-last-fn2-6-benefit">Choose one type of medium or heavy armor (such as <Link to="/eq-armor/chainmail">chainmail</Link> or <Link to="/eq-armor/half_plate">half-plate</Link>). If you have no allies within 60 feet when you are wearing that type of armor, you gain DR 1/-. This stacks with any one other source of damage resistance you have.</Pair>
</Ability>
<Ability id="traitvenomresistance-venom-resistance-fn10-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitvenomresistance-venom-resistance-fn10-3"><Link to="/trait/venom_resistance">⮞</Link> Venom Resistance <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-10.3" id="main-traits_combat_def-fake-fn-10.3" data-hash-target to="main-traits_combat_def-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitvenomresistance-venom-resistance-fn10-3-flavor">You have spent considerable time in arid wastelands where girtablilus and other venomous creatures are common, and you have built up a resistance to poison.</Pair>
<Pair single="benefit" id="traitvenomresistance-venom-resistance-fn10-3-benefit">You gain a +2 trait bonus on Fortitude saving throws against poison, and once per day when attempting a saving throw to resist <Link to="/monster/girtablilu">girtablilu</Link> poison, you can roll twice and take the higher result.</Pair>
</Ability>
<Ability id="traitvigilantbattler-vigilant-battler-fn3-7" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitvigilantbattler-vigilant-battler-fn3-7"><Link to="/trait/vigilant_battler">⮞</Link> Vigilant Battler <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-3.7" id="main-traits_combat_def-fake-fn-3.7" data-hash-target to="main-traits_combat_def-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitvigilantbattler-vigilant-battler-fn3-7-flavor">You are hard to fool and harder to trick with a feint.</Pair>
<Pair single="benefit" id="traitvigilantbattler-vigilant-battler-fn3-7-benefit">You gain a +1 trait bonus on all <Link to="/skill/sense_motive">Sense Motive</Link> checks. This trait bonus increases to +2 when used to counter a <Link to="/rule/feint">feint</Link> in combat.</Pair>
</Ability>
<Ability id="traitwaryeye-wary-eye-fn17" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitwaryeye-wary-eye-fn17"><Link to="/trait/wary_eye">⮞</Link> Wary Eye <sup><InnerLink showBacklink="backlink-main-traits_combat_def-fake-fn-17" id="main-traits_combat_def-fake-fn-17" data-hash-target to="main-traits_combat_def-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitwaryeye-wary-eye-fn17-flavor">You know that you could be exposed at any time. Even your closest friends could someday become enemies, and so you have trained yourself to never be surprised by a betrayal.</Pair>
<Pair single="benefit" id="traitwaryeye-wary-eye-fn17-benefit"><p>At the beginning of combat, before initiative checks are revealed, you can select one opponent you are aware of to be the subject of this trait. If you succeed at a Wisdom check opposed by the subject's initiative check, you are not considered <Link to="/rule/flat_footed">flat-footed</Link> against this subject for this combat, even if you normally would be.</p>
<p>You can use this trait in a surprise round, even if you cannot otherwise act that round.</p>
</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_combat_def-label">Footnotes</h3><ol>
<li id="main-traits_combat_def-fake-fn-1-target"><p><Link to="/source/weapon_masters_handbook">Weapon Master's Handbook</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_combat_def-fake-fn-1" data-hash-target to="main-traits_combat_def-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_combat_def-fake-fn-1.2" data-hash-target to="main-traits_combat_def-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_combat_def-fake-fn-1.3" data-hash-target to="main-traits_combat_def-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_combat_def-fake-fn-1.4" data-hash-target to="main-traits_combat_def-fake-fn-1.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_combat_def-fake-fn-2-target"><p><Link to="/source/armor_masters_handbook">Armor Master's Handbook</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_combat_def-fake-fn-2" data-hash-target to="main-traits_combat_def-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_combat_def-fake-fn-2.2" data-hash-target to="main-traits_combat_def-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_combat_def-fake-fn-2.3" data-hash-target to="main-traits_combat_def-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_combat_def-fake-fn-2.4" data-hash-target to="main-traits_combat_def-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_combat_def-fake-fn-2.5" data-hash-target to="main-traits_combat_def-fake-fn-2.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_combat_def-fake-fn-2.6" data-hash-target to="main-traits_combat_def-fake-fn-2.6">↩<sup>6</sup></InnerLink></p></li>
<li id="main-traits_combat_def-fake-fn-3-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_def-fake-fn-3" data-hash-target to="main-traits_combat_def-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_def-fake-fn-3.2" data-hash-target to="main-traits_combat_def-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_def-fake-fn-3.3" data-hash-target to="main-traits_combat_def-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_def-fake-fn-3.4" data-hash-target to="main-traits_combat_def-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_def-fake-fn-3.5" data-hash-target to="main-traits_combat_def-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_def-fake-fn-3.6" data-hash-target to="main-traits_combat_def-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_def-fake-fn-3.7" data-hash-target to="main-traits_combat_def-fake-fn-3.7">↩<sup>7</sup></InnerLink></p></li>
<li id="main-traits_combat_def-fake-fn-4-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_def-fake-fn-4" data-hash-target to="main-traits_combat_def-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_def-fake-fn-4.2" data-hash-target to="main-traits_combat_def-fake-fn-4.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_def-fake-fn-5-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_combat_def-fake-fn-5" data-hash-target to="main-traits_combat_def-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_combat_def-fake-fn-5.2" data-hash-target to="main-traits_combat_def-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_combat_def-fake-fn-5.3" data-hash-target to="main-traits_combat_def-fake-fn-5.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_combat_def-fake-fn-6-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_def-fake-fn-6" data-hash-target to="main-traits_combat_def-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_def-fake-fn-6.2" data-hash-target to="main-traits_combat_def-fake-fn-6.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_def-fake-fn-6.3" data-hash-target to="main-traits_combat_def-fake-fn-6.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_combat_def-fake-fn-7-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_combat_def-fake-fn-7" data-hash-target to="main-traits_combat_def-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_combat_def-fake-fn-7.2" data-hash-target to="main-traits_combat_def-fake-fn-7.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_combat_def-fake-fn-7.3" data-hash-target to="main-traits_combat_def-fake-fn-7.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_combat_def-fake-fn-8-target"><p><Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_def-fake-fn-8" data-hash-target to="main-traits_combat_def-fake-fn-8">↩</InnerLink></p></li>
<li id="main-traits_combat_def-fake-fn-9-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_combat_def-fake-fn-9" data-hash-target to="main-traits_combat_def-fake-fn-9">↩</InnerLink></p></li>
<li id="main-traits_combat_def-fake-fn-10-target"><p><Link to="/source/people_of_the_wastes">People of the Wastes</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_combat_def-fake-fn-10" data-hash-target to="main-traits_combat_def-fake-fn-10">↩</InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_combat_def-fake-fn-10.2" data-hash-target to="main-traits_combat_def-fake-fn-10.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_combat_def-fake-fn-10.3" data-hash-target to="main-traits_combat_def-fake-fn-10.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_combat_def-fake-fn-11-target"><p><Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_combat_def-fake-fn-11" data-hash-target to="main-traits_combat_def-fake-fn-11">↩</InnerLink></p></li>
<li id="main-traits_combat_def-fake-fn-12-target"><p><Link to="/source/bastards_of_golarion">Bastards of Golarion</Link> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_combat_def-fake-fn-12" data-hash-target to="main-traits_combat_def-fake-fn-12">↩</InnerLink></p></li>
<li id="main-traits_combat_def-fake-fn-13-target"><p><Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook</Link> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_combat_def-fake-fn-13" data-hash-target to="main-traits_combat_def-fake-fn-13">↩</InnerLink></p></li>
<li id="main-traits_combat_def-fake-fn-14-target"><p><Link to="/source/sargava_the_lost_colony">Sargava, the Lost Colony</Link> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_combat_def-fake-fn-14" data-hash-target to="main-traits_combat_def-fake-fn-14">↩</InnerLink></p></li>
<li id="main-traits_combat_def-fake-fn-15-target"><p><Link to="/source/antiheros_handbook">Antihero's Handbook</Link> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_combat_def-fake-fn-15" data-hash-target to="main-traits_combat_def-fake-fn-15">↩</InnerLink></p></li>
<li id="main-traits_combat_def-fake-fn-16-target"><p><Link to="/source/black_markets">Black Markets</Link> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_combat_def-fake-fn-16" data-hash-target to="main-traits_combat_def-fake-fn-16">↩</InnerLink></p></li>
<li id="main-traits_combat_def-fake-fn-17-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_combat_def-fake-fn-17" data-hash-target to="main-traits_combat_def-fake-fn-17">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_combat_class = {title: "Class-Specific Combat Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_combat" className="reversed" info="Back to Combat Traits" /><Ability id="traitberserkerofthesociety-berserker-of-the-society-fn1-fn2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitberserkerofthesociety-berserker-of-the-society-fn1-fn2"><Link to="/trait/berserker_of_the_society">⮞</Link> Berserker of the Society <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-1" id="main-traits_combat_class-fake-fn-1" data-hash-target to="main-traits_combat_class-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-2" id="main-traits_combat_class-fake-fn-2" data-hash-target to="main-traits_combat_class-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traitberserkerofthesociety-berserker-of-the-society-fn1-fn2-flavor">Your time spent as a Pathfinder has taught you new truths about the origins of the your rage ability.</Pair>
<Pair single="benefit" id="traitberserkerofthesociety-berserker-of-the-society-fn1-fn2-benefit">You may use your <em>rage</em> ability for 3 additional rounds per day.</Pair>
</Ability>
<Ability id="traitblackpowderbravado-black-powder-bravado-fn3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitblackpowderbravado-black-powder-bravado-fn3"><Link to="/trait/black_powder_bravado">⮞</Link> Black Powder Bravado <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-3" id="main-traits_combat_class-fake-fn-3" data-hash-target to="main-traits_combat_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitblackpowderbravado-black-powder-bravado-fn3-flavor">You are particularly successful when using deeds.</Pair>
<Pair single="benefit" id="traitblackpowderbravado-black-powder-bravado-fn3-benefit">Once per day, when you perform a deed that requires an attack roll and you miss with that roll, you can reroll it. You must take the second result even if it is worse.</Pair>
</Ability>
<Ability id="traitblackpowderinterjection-black-powder-interjection-fn3-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitblackpowderinterjection-black-powder-interjection-fn3-2"><Link to="/trait/black_powder_interjection">⮞</Link> Black Powder Interjection <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-3.2" id="main-traits_combat_class-fake-fn-3.2" data-hash-target to="main-traits_combat_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitblackpowderinterjection-black-powder-interjection-fn3-2-flavor">Your confidence rises when you foil spellcasting.</Pair>
<Pair single="benefit" id="traitblackpowderinterjection-black-powder-interjection-fn3-2-benefit">Once per day, when you interrupt the casting of a spell with a firearm attack, you may regain 1 grit point.</Pair>
</Ability>
<Ability id="traitbladeofthesociety-blade-of-the-society-fn1-2-fn2-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbladeofthesociety-blade-of-the-society-fn1-2-fn2-2"><Link to="/trait/blade_of_the_society">⮞</Link> Blade of the Society <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-1.2" id="main-traits_combat_class-fake-fn-1.2" data-hash-target to="main-traits_combat_class-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-2.2" id="main-traits_combat_class-fake-fn-2.2" data-hash-target to="main-traits_combat_class-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traitbladeofthesociety-blade-of-the-society-fn1-2-fn2-2-flavor">The Society gave you access to charts detailing the weak spots of hundreds of humanoids and monsters.</Pair>
<Pair single="benefit" id="traitbladeofthesociety-blade-of-the-society-fn1-2-fn2-2-benefit">You gain a +1 trait bonus on damage rolls from sneak attacks.</Pair>
</Ability>
<Ability id="traitcoherentrage-coherent-rage-fn2-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitcoherentrage-coherent-rage-fn2-3"><Link to="/trait/coherent_rage">⮞</Link> Coherent Rage <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-2.3" id="main-traits_combat_class-fake-fn-2.3" data-hash-target to="main-traits_combat_class-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Associated with the <Link to="/rule/ulfen_guard">Ulfen Guard</Link></Pair>
<Pair single="flavor" id="traitcoherentrage-coherent-rage-fn2-3-flavor">Your determination allows you to hold onto a shred of your rational mind at all times.</Pair>
<Pair single="benefit" id="traitcoherentrage-coherent-rage-fn2-3-benefit">Select one of the following skills: <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/handle_animal">Handle Animal</Link>, or <Link to="/skill/stealth">Stealth</Link>. You may use this skill normally while raging.</Pair>
</Ability>
<Ability id="traitcoldandcalculating-cold-and-calculating-fn3-3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitcoldandcalculating-cold-and-calculating-fn3-3"><Link to="/trait/cold_and_calculating">⮞</Link> Cold and Calculating <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-3.3" id="main-traits_combat_class-fake-fn-3.3" data-hash-target to="main-traits_combat_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitcoldandcalculating-cold-and-calculating-fn3-3-flavor">You are adept at tricking <Link to="/ability/favored_enemies">favored enemies</Link> of your race or those related to your race.</Pair>
<Pair single="benefit" id="traitcoldandcalculating-cold-and-calculating-fn3-3-benefit">You gain a +1 trait bonus on all <Link to="/skill/bluff">Bluff</Link> checks against favored enemies that share one of your subtypes. You also gain a +1 trait bonus on attack rolls made against such favored enemies during the surprise round.</Pair>
</Ability>
<Ability id="traiteasywayorthehardway-easy-way-or-the-hard-way-fn3-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traiteasywayorthehardway-easy-way-or-the-hard-way-fn3-4"><Link to="/trait/easy_way_or_the_hard_way">⮞</Link> Easy Way or the Hard Way <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-3.4" id="main-traits_combat_class-fake-fn-3.4" data-hash-target to="main-traits_combat_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traiteasywayorthehardway-easy-way-or-the-hard-way-fn3-4-flavor">You are skilled at subduing your enemies.</Pair>
<Pair single="benefit" id="traiteasywayorthehardway-easy-way-or-the-hard-way-fn3-4-benefit">Whenever you attack one of your <Link to="/ability/favored_enemies">favored enemies</Link> with a weapon that deals lethal damage and choose to deal nonlethal damage, you take only a -2 penalty on the attack roll instead of the normal -4.</Pair>
</Ability>
<Ability id="traitevasivesting-evasive-sting-fn3-5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitevasivesting-evasive-sting-fn3-5"><Link to="/trait/evasive_sting">⮞</Link> Evasive Sting <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-3.5" id="main-traits_combat_class-fake-fn-3.5" data-hash-target to="main-traits_combat_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitevasivesting-evasive-sting-fn3-5-flavor">Larger enemies have a hard time striking you.</Pair>
<Pair single="benefit" id="traitevasivesting-evasive-sting-fn3-5-benefit">You gain a +1 dodge bonus to AC against enemies that are both your <Link to="/ability/favored_enemy">favored enemy</Link> and at least two size categories larger than you.</Pair>
</Ability>
<Ability id="traitfaithshunter-faiths-hunter-fn3-6" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitfaithshunter-faiths-hunter-fn3-6"><Link to="/trait/faiths_hunter">⮞</Link> Faith's Hunter <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-3.6" id="main-traits_combat_class-fake-fn-3.6" data-hash-target to="main-traits_combat_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitfaithshunter-faiths-hunter-fn3-6-flavor">Divine powers smile upon you each time you grievously wound a favored enemy.</Pair>
<Pair single="benefit" id="traitfaithshunter-faiths-hunter-fn3-6-benefit">When you confirm a critical hit against a <Link to="/ability/favored_enemy">favored enemy</Link>, you may extend the duration of any divine spell affecting you by 1 round. The benefits from multiple critical hits stack. Divine spells with an instantaneous duration can't be extended in this manner.</Pair>
</Ability>
<Ability id="traitfirebugqac-firebug-qac-fn4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitfirebugqac-firebug-qac-fn4"><Link to="/trait/firebug_qac">⮞</Link> Firebug (QaC) <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-4" id="main-traits_combat_class-fake-fn-4" data-hash-target to="main-traits_combat_class-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitfirebugqac-firebug-qac-fn4-flavor">You were the child of a gunsmith or alchemist and always enjoyed experimenting with fiery alchemical items and minor explosives.</Pair>
<Pair single="benefit" id="traitfirebugqac-firebug-qac-fn4-benefit"><p>You gain a +1 trait bonus on attack rolls made with <Link to="/rule/throw_splash_weapon">thrown splash weapons</Link> and <Link to="/class/alchemist">alchemist</Link> bombs.</p>
<p><strong>Suggested Characters:</strong> Alkenstar natives, Katapeshi, Thuvians.</p>
</Pair>
</Ability>
<Ability id="traithonoredfistofthesociety-honored-fist-of-the-society-fn1-3-fn2-4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traithonoredfistofthesociety-honored-fist-of-the-society-fn1-3-fn2-4"><Link to="/trait/honored_fist_of_the_society">⮞</Link> Honored Fist of the Society <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-1.3" id="main-traits_combat_class-fake-fn-1.3" data-hash-target to="main-traits_combat_class-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-2.4" id="main-traits_combat_class-fake-fn-2.4" data-hash-target to="main-traits_combat_class-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traithonoredfistofthesociety-honored-fist-of-the-society-fn1-3-fn2-4-flavor">You have studied dozens of ancient texts on martial arts that only the Society possesses, and are more learned in these arts than most.</Pair>
<Pair single="benefit" id="traithonoredfistofthesociety-honored-fist-of-the-society-fn1-3-fn2-4-benefit">You increase your ki pool by 1 point.</Pair>
</Ability>
<Ability id="traithuntersknack-hunters-knack-fn3-7" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traithuntersknack-hunters-knack-fn3-7"><Link to="/trait/hunters_knack">⮞</Link> Hunter's Knack <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-3.7" id="main-traits_combat_class-fake-fn-3.7" data-hash-target to="main-traits_combat_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traithuntersknack-hunters-knack-fn3-7-flavor">When you watch and wait before attacking, your strike is true.</Pair>
<Pair single="benefit" id="traithuntersknack-hunters-knack-fn3-7-benefit">You gain a +1 trait bonus on attack rolls against your <Link to="/ability/favored_enemies">favored enemies</Link> when you make such attacks as part of a <Link to="/rule/readied_action">readied action</Link>.</Pair>
</Ability>
<Ability id="traitjustlikenew-just-like-new-fn3-8" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitjustlikenew-just-like-new-fn3-8"><Link to="/trait/just_like_new">⮞</Link> Just Like New <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-3.8" id="main-traits_combat_class-fake-fn-3.8" data-hash-target to="main-traits_combat_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitjustlikenew-just-like-new-fn3-8-flavor">Broken firearms are not problems: they are challenges.</Pair>
<Pair single="benefit" id="traitjustlikenew-just-like-new-fn3-8-benefit">Your first attempt to remove the broken condition from your starting firearm and to upgrade it to a masterwork weapon costs 150 gp instead of 300 gp. In addition, when wielding a firearm that has the broken condition or is treated as if it had the broken condition, you take a -1 penalty on attack rolls made with it instead of the normal -2.</Pair>
</Ability>
<Ability id="traitmartialperformer-martial-performer-fn3-9" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitmartialperformer-martial-performer-fn3-9"><Link to="/trait/martial_performer">⮞</Link> Martial Performer <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-3.9" id="main-traits_combat_class-fake-fn-3.9" data-hash-target to="main-traits_combat_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitmartialperformer-martial-performer-fn3-9-flavor">Your training has made you a martial performer.</Pair>
<Pair single="benefit" id="traitmartialperformer-martial-performer-fn3-9-benefit">When you gain a monk bonus feat, you may instead take a <Link to="/main/feats_performance">performance feat</Link> for which you meet the prerequisites.</Pair>
</Ability>
<Ability id="traitnaturesmimic-natures-mimic-fn3-10" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitnaturesmimic-natures-mimic-fn3-10"><Link to="/trait/natures_mimic">⮞</Link> Nature's Mimic <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-3.10" id="main-traits_combat_class-fake-fn-3.10" data-hash-target to="main-traits_combat_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitnaturesmimic-natures-mimic-fn3-10-flavor">Your knowledge of nature informs your fighting style, and that style gives you insight into related aspects of the natural world.</Pair>
<Pair single="benefit" id="traitnaturesmimic-natures-mimic-fn3-10-benefit">You gain a +1 trait bonus on all <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> checks, and Knowledge (nature) is always a class skill for you. You can make Knowledge (nature) checks pertaining to animals that correspond to your style feats untrained.</Pair>
</Ability>
<Ability id="traitresolveoftherejected-resolve-of-the-rejected-fn3-11" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitresolveoftherejected-resolve-of-the-rejected-fn3-11"><Link to="/trait/resolve_of_the_rejected">⮞</Link> Resolve of the Rejected <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-3.11" id="main-traits_combat_class-fake-fn-3.11" data-hash-target to="main-traits_combat_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitresolveoftherejected-resolve-of-the-rejected-fn3-11-flavor">Some disagree with your choice to wield a firearm, and their scorn has only hardened your resolve in battle.</Pair>
<Pair single="benefit" id="traitresolveoftherejected-resolve-of-the-rejected-fn3-11-benefit">You gain a +1 trait bonus on all saving throws against charm and compulsion effects. Also, once per day when you succeed at a saving throw against such an effect, you regain 1 grit point.</Pair>
</Ability>
<Ability id="traitridersbond-riders-bond-fn5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitridersbond-riders-bond-fn5"><Link to="/trait/riders_bond">⮞</Link> Rider's Bond <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-5" id="main-traits_combat_class-fake-fn-5" data-hash-target to="main-traits_combat_class-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Region" hl>Lastwall</Pair>
<Pair title="Requirements" hl>Associated with the court of Castle Overwatch</Pair>
<Pair single="flavor" id="traitridersbond-riders-bond-fn5-flavor">Your mount keenly understands your commands.</Pair>
<Pair single="benefit" id="traitridersbond-riders-bond-fn5-benefit">If you gain a horse as an animal companion or mount as one of your class abilities, it gains two bonus tricks that don't count against the normal limit of tricks known by the animal.</Pair>
</Ability>
<Ability id="traitscarreddescendant-scarred-descendant-fn3-12" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitscarreddescendant-scarred-descendant-fn3-12"><Link to="/trait/scarred_descendant">⮞</Link> Scarred Descendant <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-3.12" id="main-traits_combat_class-fake-fn-3.12" data-hash-target to="main-traits_combat_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitscarreddescendant-scarred-descendant-fn3-12-flavor">Your own people are your <Link to="/ability/favored_enemy">favored enemy</Link>.</Pair>
<Pair single="benefit" id="traitscarreddescendant-scarred-descendant-fn3-12-benefit">You gain a +1 trait bonus on rolls to confirm critical hits against favored enemies of your own subtype and on Survival checks made to track such creatures.</Pair>
</Ability>
<Ability id="traittrackerofthesociety-tracker-of-the-society-fn1-4-fn2-5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traittrackerofthesociety-tracker-of-the-society-fn1-4-fn2-5"><Link to="/trait/tracker_of_the_society">⮞</Link> Tracker of the Society <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-1.4" id="main-traits_combat_class-fake-fn-1.4" data-hash-target to="main-traits_combat_class-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_class-fake-fn-2.5" id="main-traits_combat_class-fake-fn-2.5" data-hash-target to="main-traits_combat_class-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traittrackerofthesociety-tracker-of-the-society-fn1-4-fn2-5-flavor">Thanks to your time as a Pathfinder, you've mastered the art of tracking.</Pair>
<Pair single="benefit" id="traittrackerofthesociety-tracker-of-the-society-fn1-4-fn2-5-benefit">You gain a +1 trait bonus on initiative checks and a +2 trait bonus on Survival checks made while traveling through any of your favored terrains. This is in addition to any bonuses you receive from your <Link to="/ability/favored_terrain">favored terrain</Link> class ability.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_combat_class-label">Footnotes</h3><ol>
<li id="main-traits_combat_class-fake-fn-1-target"><p><Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_combat_class-fake-fn-1" data-hash-target to="main-traits_combat_class-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_combat_class-fake-fn-1.2" data-hash-target to="main-traits_combat_class-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_combat_class-fake-fn-1.3" data-hash-target to="main-traits_combat_class-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_combat_class-fake-fn-1.4" data-hash-target to="main-traits_combat_class-fake-fn-1.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_combat_class-fake-fn-2-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_combat_class-fake-fn-2" data-hash-target to="main-traits_combat_class-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_combat_class-fake-fn-2.2" data-hash-target to="main-traits_combat_class-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_combat_class-fake-fn-2.3" data-hash-target to="main-traits_combat_class-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_combat_class-fake-fn-2.4" data-hash-target to="main-traits_combat_class-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_combat_class-fake-fn-2.5" data-hash-target to="main-traits_combat_class-fake-fn-2.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_combat_class-fake-fn-3-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_class-fake-fn-3" data-hash-target to="main-traits_combat_class-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_class-fake-fn-3.2" data-hash-target to="main-traits_combat_class-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_class-fake-fn-3.3" data-hash-target to="main-traits_combat_class-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_class-fake-fn-3.4" data-hash-target to="main-traits_combat_class-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_class-fake-fn-3.5" data-hash-target to="main-traits_combat_class-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_class-fake-fn-3.6" data-hash-target to="main-traits_combat_class-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_class-fake-fn-3.7" data-hash-target to="main-traits_combat_class-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_class-fake-fn-3.8" data-hash-target to="main-traits_combat_class-fake-fn-3.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_class-fake-fn-3.9" data-hash-target to="main-traits_combat_class-fake-fn-3.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_class-fake-fn-3.10" data-hash-target to="main-traits_combat_class-fake-fn-3.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_class-fake-fn-3.11" data-hash-target to="main-traits_combat_class-fake-fn-3.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_class-fake-fn-3.12" data-hash-target to="main-traits_combat_class-fake-fn-3.12">↩<sup>12</sup></InnerLink></p></li>
<li id="main-traits_combat_class-fake-fn-4-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_class-fake-fn-4" data-hash-target to="main-traits_combat_class-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_combat_class-fake-fn-5-target"><p><Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_combat_class-fake-fn-5" data-hash-target to="main-traits_combat_class-fake-fn-5">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_combat_init = {title: "Initiative Combat Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_combat" className="reversed" info="Back to Combat Traits" /><Ability id="traitambushtraining-ambush-training-fn1" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitambushtraining-ambush-training-fn1"><Link to="/trait/ambush_training">⮞</Link> Ambush Training <sup><InnerLink showBacklink="backlink-main-traits_combat_init-fake-fn-1" id="main-traits_combat_init-fake-fn-1" data-hash-target to="main-traits_combat_init-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitambushtraining-ambush-training-fn1-flavor">You've learned that taking an enemy by surprise can end a combat before it begins.</Pair>
<Pair single="benefit" id="traitambushtraining-ambush-training-fn1-benefit">You gain a +1 trait bonus on initiative checks and a +1 trait bonus on weapon damage rolls during any surprise round in which you act.</Pair>
</Ability>
<Ability id="traitbloodyminded-bloody-minded-fn2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbloodyminded-bloody-minded-fn2"><Link to="/trait/bloody_minded">⮞</Link> Bloody-Minded <sup><InnerLink showBacklink="backlink-main-traits_combat_init-fake-fn-2" id="main-traits_combat_init-fake-fn-2" data-hash-target to="main-traits_combat_init-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitbloodyminded-bloody-minded-fn2-flavor">You are always ready for bloodshed.</Pair>
<Pair single="benefit" id="traitbloodyminded-bloody-minded-fn2-benefit">You gain a +1 trait bonus on initiative and <Link to="/skill/intimidate">Intimidate</Link> checks.</Pair>
</Ability>
<Ability id="traitbornunderthedreamer-born-under-the-dreamer-fn3" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitbornunderthedreamer-born-under-the-dreamer-fn3"><Link to="/trait/born_under_the_dreamer">⮞</Link> Born under the Dreamer <sup><InnerLink showBacklink="backlink-main-traits_combat_init-fake-fn-3" id="main-traits_combat_init-fake-fn-3" data-hash-target to="main-traits_combat_init-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitbornunderthedreamer-born-under-the-dreamer-fn3-flavor">Your birth sign aligned significantly with Liavara on the day you were born, and you are touched by the instinctual dreaming spirit of that planet, making you naturally poised and hard to surprise.</Pair>
<Pair single="benefit" id="traitbornunderthedreamer-born-under-the-dreamer-fn3-benefit">Once per day as a <strong className="hl">free action</strong>, you can take 10 on your initiative check.</Pair>
</Ability>
<Ability id="traitexcitable-excitable-fn4" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitexcitable-excitable-fn4"><Link to="/trait/excitable">⮞</Link> Excitable <sup><InnerLink showBacklink="backlink-main-traits_combat_init-fake-fn-4" id="main-traits_combat_init-fake-fn-4" data-hash-target to="main-traits_combat_init-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traitexcitable-excitable-fn4-flavor">You demand that everything must happen right now, no matter what, and are too impatient to wait for everyone else to catch up. You finish people's sentences, blurt out the punch lines to slowly-told jokes, rarely make plans, and leap headlong into anything that looks like it might get interesting. While this has sometimes gotten you in trouble, it's also trained you to start moving a split second before everyone else, and that's saved your hide a few times as well.</Pair>
<Pair single="benefit" id="traitexcitable-excitable-fn4-benefit">You gain a +2 trait bonus on all Initiative checks.</Pair>
</Ability>
<Ability id="traitfugitive-fugitive-fn5" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitfugitive-fugitive-fn5"><Link to="/trait/fugitive">⮞</Link> Fugitive <sup><InnerLink showBacklink="backlink-main-traits_combat_init-fake-fn-5" id="main-traits_combat_init-fake-fn-5" data-hash-target to="main-traits_combat_init-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitfugitive-fugitive-fn5-flavor">You crossed the law (or those in charge thought you did), and you are now a wanted criminal. As such, you have grown used to looking over your shoulder wherever you go.</Pair>
<Pair single="benefit" id="traitfugitive-fugitive-fn5-benefit">While in settlements, you gain a +3 trait bonus on <Link to="/skill/perception">Perception</Link> checks to determine awareness for the purpose of a surprise round.</Pair>
</Ability>
<Ability id="traitreactionary-reactionary-fn6-fn7-fn8" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traitreactionary-reactionary-fn6-fn7-fn8"><Link to="/trait/reactionary">⮞</Link> Reactionary <sup><InnerLink showBacklink="backlink-main-traits_combat_init-fake-fn-6" id="main-traits_combat_init-fake-fn-6" data-hash-target to="main-traits_combat_init-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_init-fake-fn-7" id="main-traits_combat_init-fake-fn-7" data-hash-target to="main-traits_combat_init-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_combat_init-fake-fn-8" id="main-traits_combat_init-fake-fn-8" data-hash-target to="main-traits_combat_init-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traitreactionary-reactionary-fn6-fn7-fn8-flavor">You were bullied often as a child, but never quite developed an offensive response. Instead, you became adept at anticipating sudden attacks and reacting to danger quickly.</Pair>
<Pair single="benefit" id="traitreactionary-reactionary-fn6-fn7-fn8-benefit">You gain a +2 trait bonus on initiative checks.</Pair>
</Ability>
<Ability id="traittactician-tactician-fn6-2" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="traittactician-tactician-fn6-2"><Link to="/trait/tactician">⮞</Link> Tactician <sup><InnerLink showBacklink="backlink-main-traits_combat_init-fake-fn-6.2" id="main-traits_combat_init-fake-fn-6.2" data-hash-target to="main-traits_combat_init-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="traittactician-tactician-fn6-2-flavor">You know how to take advantage of enemies who are unprepared for your assault.</Pair>
<Pair single="benefit" id="traittactician-tactician-fn6-2-benefit">You gain a +1 trait bonus on initiative checks. In addition, once per day when you make an attack of opportunity, you gain a +2 trait bonus on the attack roll.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_combat_init-label">Footnotes</h3><ol>
<li id="main-traits_combat_init-fake-fn-1-target"><p><Link to="/source/pathfinder_society_primer">Pathfinder Society Primer</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_combat_init-fake-fn-1" data-hash-target to="main-traits_combat_init-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_combat_init-fake-fn-2-target"><p><Link to="/source/champions_of_corruption">Champions of Corruption</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_combat_init-fake-fn-2" data-hash-target to="main-traits_combat_init-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_combat_init-fake-fn-3-target"><p><Link to="/source/people_of_the_stars">People of the Stars</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_combat_init-fake-fn-3" data-hash-target to="main-traits_combat_init-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_combat_init-fake-fn-4-target"><p><Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_combat_init-fake-fn-4" data-hash-target to="main-traits_combat_init-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_combat_init-fake-fn-5-target"><p><Link to="/source/antiheros_handbook">Antihero's Handbook</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_combat_init-fake-fn-5" data-hash-target to="main-traits_combat_init-fake-fn-5">↩</InnerLink></p></li>
<li id="main-traits_combat_init-fake-fn-6-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_init-fake-fn-6" data-hash-target to="main-traits_combat_init-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_combat_init-fake-fn-6.2" data-hash-target to="main-traits_combat_init-fake-fn-6.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_combat_init-fake-fn-7-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_combat_init-fake-fn-7" data-hash-target to="main-traits_combat_init-fake-fn-7">↩</InnerLink></p></li>
<li id="main-traits_combat_init-fake-fn-8-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_combat_init-fake-fn-8" data-hash-target to="main-traits_combat_init-fake-fn-8">↩</InnerLink></p></li>
</ol></section></IonList>};
export default {traits_combat:_traits_combat,traits_combat_all:_traits_combat_all,traits_combat_ab:_traits_combat_ab,traits_combat_off:_traits_combat_off,traits_combat_def:_traits_combat_def,traits_combat_class:_traits_combat_class,traits_combat_init:_traits_combat_init}