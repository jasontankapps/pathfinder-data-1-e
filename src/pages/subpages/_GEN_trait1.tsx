import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
const _not_found = {title: "Unknown", jsx: <><h2 id="trait-not_found-error">Error</h2>
<p>Unable to find the requested trait.</p>
</>};
const _absalom_bouncer = {title: "Absalom Bouncer", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins</Link></p>
<Ability id="absalom-bouncer" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="absalom-bouncer">Absalom Bouncer</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="absalom-bouncer-flavor">You learned to fight while serving as a bodyguard in the taverns of Absalom, where keeping the patrons alive through bloody bar brawls was just part of your job.</Pair>
<Pair single="benefit" id="absalom-bouncer-benefit">When you make an attack that deals nonlethal damage with an unarmed strike, you gain a +1 bonus on your damage roll.</Pair>
</Ability>
</>};
const _absolute_loyalty = {title: "Absolute Loyalty", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link></p>
<Ability id="absolute-loyalty" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="absolute-loyalty">Absolute Loyalty</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="absolute-loyalty-benefit">You gain the one-time ability to immediately cast <Link to="/spell/atonement">atonement</Link> upon yourself as a spell-like ability upon performing an act or being subjected to an effect that spell affects. This ability can only be used while you are acting in the service of your liege (an individual of higher social standing chosen when you take this feat).</Pair>
</Ability>
</>};
const _accelerated_drinker = {title: "Accelerated Drinker", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link></p>
<Ability id="accelerated-drinker" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="accelerated-drinker">Accelerated Drinker</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="accelerated-drinker-flavor">You know how to drink a potion efficiently, such as by not using your hands, tossing it in the air and catching it in your mouth, or opening it with your teeth.</Pair>
<Pair single="benefit" id="accelerated-drinker-benefit">You may drink a potion as a <strong className="hl">move action</strong> instead of a standard as long as you start your turn with the potion in your hand.</Pair>
</Ability>
</>};
const _aldori_caution = {title: "Aldori Caution", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook</Link></p>
<Ability id="aldori-caution" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="aldori-caution">Aldori Caution</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="aldori-caution-flavor">You learned defensive moves from Aldori trainers.</Pair>
<Pair single="benefit" id="aldori-caution-benefit">You gain an additional +1 dodge bonus to Armor Class while you <Link to="/misc/fight_defensively">fight defensively</Link> or use the <Link to="/misc/total_defense">total defense</Link> action.</Pair>
</Ability>
</>};
const _ambush_training = {title: "Ambush Training", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_society_primer">Pathfinder Society Primer</Link></p>
<Ability id="ambush-training" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="ambush-training">Ambush Training</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="ambush-training-flavor">You've learned that taking an enemy by surprise can end a combat before it begins.</Pair>
<Pair single="benefit" id="ambush-training-benefit">You gain a +1 trait bonus on initiative checks and a +1 trait bonus on weapon damage rolls during any surprise round in which you act.</Pair>
</Ability>
</>};
const _anatomist = {title: "Anatomist", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="anatomist" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="anatomist">Anatomist</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="anatomist-flavor">You have studied the workings of anatomy, either as a student at university or as an apprentice mortician or necromancer. You know where to aim your blows to strike vital organs.</Pair>
<Pair single="benefit" id="anatomist-benefit">You gain a +1 trait bonus on all rolls made to confirm critical hits.</Pair>
</Ability>
</>};
const _armed_grit = {title: "Armed Grit", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook</Link></p>
<Ability id="armed-grit" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="armed-grit">Armed Grit</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="armed-grit-flavor">You make an impression during a standoff.</Pair>
<Pair single="benefit" id="armed-grit-benefit">As long as you have a firearm drawn, you gain a +2 trait bonus on saving throws against fear and the DCs of <Link to="/skill/intimidate">Intimidate</Link> checks to demoralize you increase by 2.</Pair>
</Ability>
</>};
const _armor_expert = {title: "Armor Expert", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="armor-expert" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="armor-expert">Armor Expert</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="armor-expert-flavor">You have worn armor as long as you can remember, either as part of your training to become a knight's squire or simply because you were seeking to emulate a hero. Your childhood armor wasn't the real thing as far as protection, but it did encumber you as much as real armor would have, and you've grown used to moving in such suits with relative grace.</Pair>
<Pair single="benefit" id="armor-expert-benefit">When you wear armor of any sort, reduce that suit's armor check penalty by 1, to a minimum check penalty of 0.</Pair>
</Ability>
</>};
const _armored_rider = {title: "Armored Rider", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook</Link></p>
<Ability id="armored-rider" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="armored-rider">Armored Rider</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="armored-rider-benefit">You gain a +1 trait bonus on <Link to="/skill/ride">Ride</Link> checks, and Ride is a class skill for you. You don't take an armor check penalty on Ride checks while wearing light or medium armor.</Pair>
</Ability>
</>};
const _armored_soul = {title: "Armored Soul", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook</Link></p>
<Ability id="armored-soul" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="armored-soul">Armored Soul</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="armored-soul-benefit">When wearing armor or using a shield, you gain a +1 trait bonus on saving throws against divine spells that deal damage.</Pair>
</Ability>
</>};
const _arodenite_sword_training = {title: "Arodenite Sword Training", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology</Link></p>
<Ability id="arodenite-sword-training" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="arodenite-sword-training">Arodenite Sword Training</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="arodenite-sword-training-flavor">Your family has passed down training in <Link to="/faith/aroden">Aroden's</Link> favored weapon, even though the god no longer answers their prayers.</Pair>
<Pair single="benefit" id="arodenite-sword-training-benefit">You are proficient with the <Link to="/eq-weapon/longsword">longsword</Link>. If your class grants longsword proficiency as well, you gain a +1 trait bonus on attacks of opportunity with longswords.</Pair>
</Ability>
</>};
const _axe_to_grind = {title: "Axe to Grind", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="axe-to-grind" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="axe-to-grind">Axe to Grind</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="axe-to-grind-flavor">There is a fire in your heart that can't be quenched.</Pair>
<Pair single="benefit" id="axe-to-grind-benefit">You gain a +1 trait bonus on damage against foes who are threatened by only you.</Pair>
</Ability>
</>};
const _back_for_more = {title: "Back for More", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil</Link></p>
<Ability id="back-for-more" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="back-for-more">Back for More</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="back-for-more-benefit">Anytime an opponent confirms a critical hit against you, you gain a +2 morale bonus on attack rolls and damage rolls against that foe until the end of your next turn.</Pair>
</Ability>
</>};
const _battlefield_disciple = {title: "Battlefield Disciple", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="battlefield-disciple" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="battlefield-disciple">Battlefield Disciple</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="battlefield-disciple-flavor">You are skilled at supporting your allies in the heat of battle.</Pair>
<Pair single="benefit" id="battlefield-disciple-benefit">You gain a +2 trait bonus on Heal checks made to stabilize a <Link to="/misc/dying">dying</Link> creature. In addition, when you successfully use the <Link to="/rule/aid_another_2">aid another</Link> action in combat to grant an ally a bonus on her next attack roll, the bonus you grant increases by 1.</Pair>
</Ability>
</>};
const _berserker_of_the_society = {title: "Berserker of the Society", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link>, <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="berserker-of-the-society" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="berserker-of-the-society">Berserker of the Society</Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="berserker-of-the-society-flavor">Your time spent as a Pathfinder has taught you new truths about the origins of the your rage ability.</Pair>
<Pair single="benefit" id="berserker-of-the-society-benefit">You may use your <em>rage</em> ability for 3 additional rounds per day.</Pair>
</Ability>
</>};
const _black_powder_bravado = {title: "Black Powder Bravado", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="black-powder-bravado" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="black-powder-bravado">Black Powder Bravado</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="black-powder-bravado-flavor">You are particularly successful when using deeds.</Pair>
<Pair single="benefit" id="black-powder-bravado-benefit">Once per day, when you perform a deed that requires an attack roll and you miss with that roll, you can reroll it. You must take the second result even if it is worse.</Pair>
</Ability>
</>};
const _black_powder_fortune = {title: "Black Powder Fortune", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="black-powder-fortune" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="black-powder-fortune">Black Powder Fortune</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="black-powder-fortune-flavor">You have little to fear when there's a gun in your hand.</Pair>
<Pair single="benefit" id="black-powder-fortune-benefit">As long as you are wielding a firearm, you gain a +2 trait bonus on all saving throws against curse, fear, and emotion effects.</Pair>
</Ability>
</>};
const _black_powder_interjection = {title: "Black Powder Interjection", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="black-powder-interjection" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="black-powder-interjection">Black Powder Interjection</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="black-powder-interjection-flavor">Your confidence rises when you foil spellcasting.</Pair>
<Pair single="benefit" id="black-powder-interjection-benefit">Once per day, when you interrupt the casting of a spell with a firearm attack, you may regain 1 grit point.</Pair>
</Ability>
</>};
const _blackjacket_weapon_flair = {title: "Blackjacket Weapon Flair", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook</Link></p>
<Ability id="blackjacket-weapon-flair" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="blackjacket-weapon-flair">Blackjacket Weapon Flair</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="blackjacket-weapon-flair-flavor">You trained with the Blackjackets of Druma to make optimal use of magic weapons.</Pair>
<Pair single="benefit" id="blackjacket-weapon-flair-benefit">Whenever you roll a natural 20 (the die shows a -20-) on a <Link to="/rule/combat_maneuvers">combat maneuver</Link> check with a magic weapon, you gain a +5 trait bonus on the check.</Pair>
</Ability>
</>};
const _blade_of_the_society = {title: "Blade of the Society", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link>, <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="blade-of-the-society" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="blade-of-the-society">Blade of the Society</Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="blade-of-the-society-flavor">The Society gave you access to charts detailing the weak spots of hundreds of humanoids and monsters.</Pair>
<Pair single="benefit" id="blade-of-the-society-benefit">You gain a +1 trait bonus on damage rolls from sneak attacks.</Pair>
</Ability>
</>};
const _blights_bane = {title: "Blight's Bane", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes</Link></p>
<Ability id="blights-bane" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="blights-bane">Blight's Bane</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="blights-bane-flavor">You are trained in the destruction of blights.</Pair>
<Pair single="benefit" id="blights-bane-benefit">You gain a +2 trait bonus to confirm critical hits against a creature that has a template affiliated with some kind of communicable condition, such as a <Link to="/template/blighted_fey">blighted fey</Link> or a <Link to="/template/fungal_creature">fungal creature</Link>.</Pair>
</Ability>
</>};
const _bloodthirsty = {title: "Bloodthirsty", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="bloodthirsty" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="bloodthirsty">Bloodthirsty</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="bloodthirsty-flavor">You have a vicious streak, and nothing satisfies you more than warm blood on your hands and blade.</Pair>
<Pair single="benefit" id="bloodthirsty-benefit">Whenever you make an attack that reduces a foe to 0 hit points or fewer or you confirm a critical hit, your attack deals 1 additional point of damage. The additional damage is a trait bonus, and is multiplied by your weapon's critical hit multiplier.</Pair>
</Ability>
</>};
const _bloody_minded = {title: "Bloody-Minded", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption</Link></p>
<Ability id="bloody-minded" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="bloody-minded">Bloody-Minded</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="bloody-minded-flavor">You are always ready for bloodshed.</Pair>
<Pair single="benefit" id="bloody-minded-benefit">You gain a +1 trait bonus on initiative and <Link to="/skill/intimidate">Intimidate</Link> checks.</Pair>
</Ability>
</>};
const _born_under_the_cradle = {title: "Born under the Cradle", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_stars">People of the Stars</Link></p>
<Ability id="born-under-the-cradle" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="born-under-the-cradle">Born under the Cradle</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="born-under-the-cradle-flavor">Your birth sign aligned significantly with Bretheda on the day you were born, granting you a knack for cooperation in the heat of battle.</Pair>
<Pair single="benefit" id="born-under-the-cradle-benefit">You gain a +2 trait bonus on attack rolls to perform the <Link to="/rule/aid_another_2">aid another</Link> action.</Pair>
</Ability>
</>};
const _born_under_the_dreamer = {title: "Born under the Dreamer", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_stars">People of the Stars</Link></p>
<Ability id="born-under-the-dreamer" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="born-under-the-dreamer">Born under the Dreamer</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="born-under-the-dreamer-flavor">Your birth sign aligned significantly with Liavara on the day you were born, and you are touched by the instinctual dreaming spirit of that planet, making you naturally poised and hard to surprise.</Pair>
<Pair single="benefit" id="born-under-the-dreamer-benefit">Once per day as a <strong className="hl">free action</strong>, you can take 10 on your initiative check.</Pair>
</Ability>
</>};
const _born_under_the_stranger = {title: "Born under the Stranger", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_stars">People of the Stars</Link></p>
<Ability id="born-under-the-stranger" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="born-under-the-stranger">Born under the Stranger</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="born-under-the-stranger-flavor">Your birth was marked by the alignment of Aucturn with your birth sign and by strange happenings, giving you a link to alien beings.</Pair>
<Pair single="benefit" id="born-under-the-stranger-benefit">When <Link to="/rule/feint">feinting</Link> against aberrations, you do not take a -4 penalty for feinting against a non-humanoid creature, and you take only a -4 penalty if you feint against an aberration of animal Intelligence (instead of -8). You still cannot feint against mindless creatures.</Pair>
</Ability>
</>};
const _broken_not_beaten = {title: "Broken, Not Beaten", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil</Link></p>
<Ability id="broken-not-beaten" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="broken-not-beaten">Broken, Not Beaten</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="broken-not-beaten-benefit">You automatically <Link to="/misc/stabilize">stabilize</Link> when reduced below 0 hit points. Once per day when brought below 0 hit points, you can accept 1 point of damage to regain consciousness for 1 round, though you remain staggered and only able to take a single move or standard action.</Pair>
</Ability>
</>};
const _bullied = {title: "Bullied", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="bullied" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="bullied">Bullied</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="bullied-flavor">You were bullied often as a child, and you are now constantly ready to defend yourself with your fists when an enemy comes near.</Pair>
<Pair single="benefit" id="bullied-benefit"><p>You gain a +1 trait bonus on attack of opportunity attack rolls made with unarmed strikes.</p>
<p>Note that this trait does not grant the ability to make attacks of opportunity with your unarmed strikes - you must have a level in monk, the <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> feat, or some other similar power to gain the use of this character trait. However, that doesn't prevent you from selecting this trait. You simply cannot make use of it until a later point if you do.</p>
</Pair>
</Ability>
</>};
const _careful_combatant = {title: "Careful Combatant", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="careful-combatant" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="careful-combatant">Careful Combatant</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="careful-combatant-flavor">You have a strong sense of self-preservation, believing it is more important to safely extract yourself from a fight that has turned hopeless than to stubbornly stand your ground and risk death - for when you're dead, you can't protect the innocent.</Pair>
<Pair single="benefit" id="careful-combatant-benefit">When using the <Link to="/rule/withdraw">withdraw</Link> action, both the first and second squares of your movement are not considered threatened by any opponents you can see, rather than just the first square.</Pair>
</Ability>
</>};
const _clockwork_engineer = {title: "Clockwork Engineer", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes</Link></p>
<Ability id="clockwork-engineer" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="clockwork-engineer">Clockwork Engineer</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="clockwork-engineer-flavor">You have experience with the ancient clockwork constructs that roam certain wastelands, and this has granted you an understanding of these guardians.</Pair>
<Pair single="benefit" id="clockwork-engineer-benefit">You gain a +2 trait bonus on damage rolls against creatures with the <Link to="/subtype/clockwork">clockwork</Link> subtype.</Pair>
</Ability>
</>};
const _coherent_rage = {title: "Coherent Rage", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="coherent-rage" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="coherent-rage">Coherent Rage</Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Associated with the <Link to="/rule/ulfen_guard">Ulfen Guard</Link></Pair>
<Pair single="flavor" id="coherent-rage-flavor">Your determination allows you to hold onto a shred of your rational mind at all times.</Pair>
<Pair single="benefit" id="coherent-rage-benefit">Select one of the following skills: <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/handle_animal">Handle Animal</Link>, or <Link to="/skill/stealth">Stealth</Link>. You may use this skill normally while raging.</Pair>
</Ability>
</>};
const _cold_and_calculating = {title: "Cold and Calculating", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="cold-and-calculating" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="cold-and-calculating">Cold and Calculating</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="cold-and-calculating-flavor">You are adept at tricking <Link to="/ability/favored_enemies">favored enemies</Link> of your race or those related to your race.</Pair>
<Pair single="benefit" id="cold-and-calculating-benefit">You gain a +1 trait bonus on all <Link to="/skill/bluff">Bluff</Link> checks against favored enemies that share one of your subtypes. You also gain a +1 trait bonus on attack rolls made against such favored enemies during the surprise round.</Pair>
</Ability>
</>};
const _courageous = {title: "Courageous", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="courageous" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="courageous">Courageous</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="courageous-flavor">Your childhood was brutal, but you persevered through force of will and faith. No matter how hard things got, you knew you'd make it through as long as you kept a level head.</Pair>
<Pair single="benefit" id="courageous-benefit">You gain a +2 trait bonus on saving throws against fear effects.</Pair>
</Ability>
</>};
const _crimson_carapace = {title: "Crimson Carapace", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook</Link></p>
<Ability id="crimson-carapace" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="crimson-carapace">Crimson Carapace</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="crimson-carapace-flavor">A combination of armor and agility protects you from deadly attacks.</Pair>
<Pair single="benefit" id="crimson-carapace-benefit">When wearing light armor and <Link to="/misc/fighting_defensively">fighting defensively</Link> or using <Link to="/feat/combat_expertise">Combat Expertise</Link>, you receive a +2 trait bonus to your AC against attack rolls to confirm a critical threat.</Pair>
</Ability>
</>};
const _crowd_dodger = {title: "Crowd Dodger", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="crowd-dodger" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="crowd-dodger">Crowd Dodger</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="crowd-dodger-flavor">You spent much of your youth on crowded streets, dodging quickly around and under others.</Pair>
<Pair single="benefit" id="crowd-dodger-benefit"><p>You gain a +2 trait bonus on <Link to="/skill/acrobatics">Acrobatics</Link> checks to move through another creature's space and to avoid attacks of opportunity for leaving a threatened square.</p>
<p><strong>Suggested Characters:</strong> Absalom natives, Chelaxians, Lion Blades.</p>
</Pair>
</Ability>
</>};
const _dedicated_defender = {title: "Dedicated Defender", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="dedicated-defender" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="dedicated-defender">Dedicated Defender</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="dedicated-defender-flavor">When a companion is down, you fight harder.</Pair>
<Pair single="benefit" id="dedicated-defender-benefit">You gain a +1 trait bonus on attack rolls and on checks made to overcome spell resistance while you are adjacent to a <Link to="/misc/dying">dying</Link> or <Link to="/misc/disabled">disabled</Link> ally, animal companion, eidolon, familiar, or mount.</Pair>
</Ability>
</>};
const _defender_of_the_society = {title: "Defender of the Society", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link>, <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="defender-of-the-society" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="defender-of-the-society">Defender of the Society</Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="defender-of-the-society-flavor">Your time spent studying the greatest warriors of the Society taught you new defensive skills while wearing armor.</Pair>
<Pair single="benefit" id="defender-of-the-society-benefit">You gain a +1 trait bonus to Armor Class when wearing medium or heavy armor.</Pair>
</Ability>
</>};
const _deft_dodger = {title: "Deft Dodger", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="deft-dodger" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="deft-dodger">Deft Dodger</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="deft-dodger-flavor">Growing up in a rough neighborhood or a dangerous environment has honed your senses.</Pair>
<Pair single="benefit" id="deft-dodger-benefit">You gain a +1 trait bonus on Reflex saves.</Pair>
</Ability>
</>};
const _demon_slayer = {title: "Demon Slayer", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="demon-slayer" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="demon-slayer">Demon Slayer</Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Mendev Crusaders</Pair>
<Pair single="flavor" id="demon-slayer-flavor">By studying a demonic opponent, you can sense and target its weak spots.</Pair>
<Pair single="benefit" id="demon-slayer-benefit">You can attempt a <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> check to find a demon's weak spot. (DC 10 + the demon's CR). If you succeed, you gain a +3 trait bonus on rolls to confirm critical hits against that <Link to="/family/demon">demon</Link> until the end of the battle. This effect only works on demons.</Pair>
</Ability>
</>};
const _demon_smiter = {title: "Demon Smiter", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="demon-smiter" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="demon-smiter">Demon Smiter</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="demon-smiter-flavor">You grew up around those who fight the demons streaming out of the Worldwound, and from their stories you learned about the demons' weaknesses. You are likely from Mendev or have joined that nation's cause as a crusader.</Pair>
<Pair single="benefit" id="demon-smiter-benefit">Once per day when fighting <Link to="/family/demon">demons</Link>, you gain a +4 trait bonus on a single attack roll.</Pair>
</Ability>
</>};
const _devil_fighter = {title: "Devil Fighter", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook</Link></p>
<Ability id="devil-fighter" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="devil-fighter">Devil Fighter</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="devil-fighter-flavor">Learning how devils think helps you resist their trickery.</Pair>
<Pair single="benefit" id="devil-fighter-benefit">You gain a +1 trait bonus to your AC against attacks made by lawful outsiders.</Pair>
</Ability>
</>};
const _dirty_fighter_apg = {title: "Dirty Fighter (APG)", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="dirty-fighter-apg" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="dirty-fighter-apg">Dirty Fighter (APG)</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="dirty-fighter-apg-flavor">You wouldn't have lived to make it out of childhood without the aid of a sibling, friend, or companion you could always count on to distract your enemies long enough for you to do a little bit more damage than normal. That companion may be another PC or an NPC (who may even be recently departed from your side).</Pair>
<Pair single="benefit" id="dirty-fighter-apg-benefit">When you hit a foe you are <Link to="/rule/flanking">flanking</Link>, you deal 1 additional point of damage (this damage is added to your base damage, and is multiplied on a critical hit). This additional damage is a trait bonus.</Pair>
</Ability>
</>};
const _dirty_trickster = {title: "Dirty Trickster", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="dirty-trickster" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="dirty-trickster">Dirty Trickster</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="dirty-trickster-flavor">You learned early that there's no point in fighting fair when you're fighting for your life. Others may look down their noses at your tactics, but you know you wouldn't have survived this long without breaking a few conventions of fair play.</Pair>
<Pair single="benefit" id="dirty-trickster-benefit">You can take the <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link> feat without meeting its prerequisites, and you gain a +1 trait bonus on combat maneuver checks to attempt a <Link to="/rule/dirty_trick">dirty trick</Link>.</Pair>
</Ability>
</>};
const _disillusioned = {title: "Disillusioned", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="disillusioned" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="disillusioned">Disillusioned</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="disillusioned-flavor">Your childhood was ended by a great disaster or atrocity that you witnessed. To cope with the horror, you have learned to reflexively suppress all emotion.</Pair>
<Pair single="benefit" id="disillusioned-benefit"><p>You gain a +2 trait bonus on Will saving throws against emotion and fear effects.</p>
<p><strong>Suggested Characters:</strong> Galtans, <Link to="/rule/hellknights">Hellknights</Link>, Nidalese.</p>
</Pair>
</Ability>
</>};
const _dispelled_battler = {title: "Dispelled Battler", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="dispelled-battler" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="dispelled-battler">Dispelled Battler</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="dispelled-battler-flavor">When deprived of magic, you fight harder.</Pair>
<Pair single="benefit" id="dispelled-battler-benefit">You gain a +1 trait bonus on weapon attack and damage rolls while within an area of antimagic such as that created by an <Link to="/spell/antimagic_field">antimagic field</Link>. You also gain this bonus for 1 round after you are subject to an area or targeted <Link to="/spell/dispel_magic">dispel magic</Link> spell, regardless of the effect's success or failure in dispelling your spells and magical effects.</Pair>
</Ability>
</>};
const _dormant_defense = {title: "Dormant Defense", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes</Link></p>
<Ability id="dormant-defense" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="dormant-defense">Dormant Defense</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="dormant-defense-flavor">Your body never lets down its defenses, even when you rest.</Pair>
<Pair single="benefit" id="dormant-defense-benefit"><p>The DC for <Link to="/skill/perception">Perception</Link> checks you attempt while asleep increases only by 7 (instead of the normal +10 increase). While you are <Link to="/misc/dazed">dazed</Link>, <Link to="/misc/stunned">stunned</Link>, or <Link to="/misc/helpless">helpless</Link>, each critical hit or sneak attack scored against you has a 25% chance of being negated; when a critical hit or sneak attack is negated, roll its damage normally.</p>
<p>This doesn't stack with the <Link to="/magic-enh/fortification">fortification</Link> armor special ability and similar effects.</p>
</Pair>
</Ability>
</>};
const _dragon_armor = {title: "Dragon Armor", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook</Link></p>
<Ability id="dragon-armor" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="dragon-armor">Dragon Armor</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="dragon-armor-flavor">Xa Hoi's elite warriors are trained to deflect energy attacks.</Pair>
<Pair single="benefit" id="dragon-armor-benefit">Choose an energy type (acid, cold, electricity, fire, or sonic) when you acquire this trait. When you are wearing medium or heavy armor, you gain a +2 trait bonus on Reflex saves against spells and effects of the chosen energy type.</Pair>
</Ability>
</>};
const _dueling_cloak_adept = {title: "Dueling Cloak Adept", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link></p>
<Ability id="dueling-cloak-adept" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="dueling-cloak-adept">Dueling Cloak Adept</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="dueling-cloak-adept-flavor">You are trained in using your cloak to disguise your body and deceive your enemies.</Pair>
<Pair single="benefit" id="dueling-cloak-adept-benefit">While wearing a cloak and using an <Link to="/eq-weapon/aldori_dueling_sword">Aldori dueling sword</Link>, you gain a +2 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks made to feint. Additionally, every time you successfully feint while wearing a cloak, you gain a +1 dodge bonus to your Armor Class until your next turn.</Pair>
</Ability>
</>};
const _easy_way_or_the_hard_way = {title: "Easy Way or the Hard Way", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="easy-way-or-the-hard-way" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="easy-way-or-the-hard-way">Easy Way or the Hard Way</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="easy-way-or-the-hard-way-flavor">You are skilled at subduing your enemies.</Pair>
<Pair single="benefit" id="easy-way-or-the-hard-way-benefit">Whenever you attack one of your <Link to="/ability/favored_enemies">favored enemies</Link> with a weapon that deals lethal damage and choose to deal nonlethal damage, you take only a -2 penalty on the attack roll instead of the normal -4.</Pair>
</Ability>
</>};
const _elemental_apprentice = {title: "Elemental Apprentice", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link></p>
<Ability id="elemental-apprentice" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="elemental-apprentice">Elemental Apprentice</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="elemental-apprentice-flavor">You spent your childhood in a region of Golarion where the use of elemental magic is commonplace or the environment is heavily infused with elemental energies, such as the volcano Asuulek's Mouth or the hurricane-lashed Sodden Lands. Your time near raw elemental energies has inured you to taking damage from them.</Pair>
<Pair single="benefit" id="elemental-apprentice-benefit">At character creation, select acid, cold, electricity, or fire (once chosen, this damage type can't be changed). Once per day as a <strong className="hl">free action</strong>, when you hit a creature with a melee weapon, you can convert an amount of damage dealt by your attack equal to your character level into the selected energy type. You cannot convert this damage if any damage from the attack would normally deal a different type of energy damage (such as that of a <Link to="/magic-enh/flaming">flaming</Link> weapon).</Pair>
</Ability>
</>};
const _evasive_sting = {title: "Evasive Sting", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="evasive-sting" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="evasive-sting">Evasive Sting</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="evasive-sting-flavor">Larger enemies have a hard time striking you.</Pair>
<Pair single="benefit" id="evasive-sting-benefit">You gain a +1 dodge bonus to AC against enemies that are both your <Link to="/ability/favored_enemy">favored enemy</Link> and at least two size categories larger than you.</Pair>
</Ability>
</>};
const _excitable = {title: "Excitable", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link></p>
<Ability id="excitable" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="excitable">Excitable</Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="excitable-flavor">You demand that everything must happen right now, no matter what, and are too impatient to wait for everyone else to catch up. You finish people's sentences, blurt out the punch lines to slowly-told jokes, rarely make plans, and leap headlong into anything that looks like it might get interesting. While this has sometimes gotten you in trouble, it's also trained you to start moving a split second before everyone else, and that's saved your hide a few times as well.</Pair>
<Pair single="benefit" id="excitable-benefit">You gain a +2 trait bonus on all Initiative checks.</Pair>
</Ability>
</>};
const _failed_aspirant = {title: "Failed Aspirant", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins</Link></p>
<Ability id="failed-aspirant" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="failed-aspirant">Failed Aspirant</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="failed-aspirant-flavor">You've failed the trials to gain entry to one of the <Link to="/rule/houses_of_perfection">Houses of Perfection</Link>. Though you are disappointed, you were able to pick up one trick from the monks.</Pair>
<Pair single="benefit" id="failed-aspirant-benefit">Choose a single <Link to="/rule/combat_maneuver">combat maneuver</Link>. Once per day, you can perform that combat maneuver without provoking an attack of opportunity, and you gain a +2 bonus on that attempt.</Pair>
</Ability>
</>};
const _faiths_hunter = {title: "Faith's Hunter", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="faiths-hunter" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="faiths-hunter">Faith's Hunter</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="faiths-hunter-flavor">Divine powers smile upon you each time you grievously wound a favored enemy.</Pair>
<Pair single="benefit" id="faiths-hunter-benefit">When you confirm a critical hit against a <Link to="/ability/favored_enemy">favored enemy</Link>, you may extend the duration of any divine spell affecting you by 1 round. The benefits from multiple critical hits stack. Divine spells with an instantaneous duration can't be extended in this manner.</Pair>
</Ability>
</>};
const _fencer = {title: "Fencer", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="fencer" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="fencer">Fencer</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="fencer-flavor">You trained with blades for long hours as a youth, either taking lessons in the genteel art of fencing from tutors paid for by your parents or being taken under the wing of a disenfranchised fencer who may have turned to a life of crime.</Pair>
<Pair single="benefit" id="fencer-benefit">You gain a +1 trait bonus on attack of opportunity attack rolls made with daggers, swords, and similar bladed weapons.</Pair>
</Ability>
</>};
const _firebug_qac = {title: "Firebug (QaC)", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="firebug-qac" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="firebug-qac">Firebug (QaC)</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="firebug-qac-flavor">You were the child of a gunsmith or alchemist and always enjoyed experimenting with fiery alchemical items and minor explosives.</Pair>
<Pair single="benefit" id="firebug-qac-benefit"><p>You gain a +1 trait bonus on attack rolls made with <Link to="/rule/throw_splash_weapon">thrown splash weapons</Link> and <Link to="/class/alchemist">alchemist</Link> bombs.</p>
<p><strong>Suggested Characters:</strong> Alkenstar natives, Katapeshi, Thuvians.</p>
</Pair>
</Ability>
</>};
const _fugitive = {title: "Fugitive", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="fugitive" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="fugitive">Fugitive</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="fugitive-flavor">You crossed the law (or those in charge thought you did), and you are now a wanted criminal. As such, you have grown used to looking over your shoulder wherever you go.</Pair>
<Pair single="benefit" id="fugitive-benefit">While in settlements, you gain a +3 trait bonus on <Link to="/skill/perception">Perception</Link> checks to determine awareness for the purpose of a surprise round.</Pair>
</Ability>
</>};
const _guerrilla_tactics = {title: "Guerrilla Tactics", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link></p>
<Ability id="guerrilla-tactics" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="guerrilla-tactics">Guerrilla Tactics</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="guerrilla-tactics-benefit">You gain a +2 trait bonus on <Link to="/skill/stealth">Stealth</Link> checks and Initiative checks in forests.</Pair>
</Ability>
</>};
const _hard_to_kill = {title: "Hard to Kill", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="hard-to-kill" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="hard-to-kill">Hard to Kill</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="hard-to-kill-flavor">Your strong will to live and spread good combined with your pure physicality makes you a tough opponent to take down. You may have discovered this as a child after a tragic accident or during the course of your first battle.</Pair>
<Pair single="benefit" id="hard-to-kill-benefit">When you are attempting a Constitution check to stabilize when <Link to="/misc/dying">dying</Link>, the penalty on the check is only half your negative hit point total instead of your full negative hit point total.</Pair>
</Ability>
</>};
const _hellknight_devotion = {title: "Hellknight Devotion", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins</Link></p>
<Ability id="hellknight-devotion" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="hellknight-devotion">Hellknight Devotion</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="hellknight-devotion-flavor">Your family has strong ties to a <Link to="/rule/hellknights">Hellknight</Link> order, and you harness this belief as a weapon.</Pair>
<Pair single="benefit" id="hellknight-devotion-benefit">Once per day as a <strong className="hl">swift action</strong>, you can empower the next single melee attack you make to be treated as lawful-aligned for the purpose of overcoming damage reduction.</Pair>
</Ability>
</>};
const _hellknight_initiate = {title: "Hellknight Initiate", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook</Link></p>
<Ability id="hellknight-initiate" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="hellknight-initiate">Hellknight Initiate</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="hellknight-initiate-flavor">You have laboriously studied the training rites of various <Link to="/rule/hellknights">Hellknight</Link> orders with the intent of joining one yourself.</Pair>
<Pair single="benefit" id="hellknight-initiate-benefit">You gain a +2 trait bonus on damage rolls against outsiders summoned through conjuration (calling) and conjuration (summoning) spells and effects.</Pair>
</Ability>
</>};
const _helpful_cop = {title: "Helpful (CoP)", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="helpful-cop" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="helpful-cop">Helpful (CoP)</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="helpful-cop-flavor">You always know the best way to assist your companions, be it assisting them with a task, defending them in battle, or helping them place a well-aimed strike.</Pair>
<Pair single="benefit" id="helpful-cop-benefit">When using the <Link to="/rule/aid_another">aid another</Link> action, you grant your ally a +3 bonus instead of a +2 bonus.</Pair>
</Ability>
</>};
const _hidden_hand = {title: "Hidden Hand", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="hidden-hand" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="hidden-hand">Hidden Hand</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="hidden-hand-flavor">Your concealed weapons strike fast and true.</Pair>
<Pair single="benefit" id="hidden-hand-benefit">You gain a +1 trait bonus on <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> checks made to conceal light weapons and a +1 trait bonus on attack rolls when making an attack with a light weapon during a surprise round.</Pair>
</Ability>
</>};
const _hill_fighter = {title: "Hill Fighter", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/sargava_the_lost_colony">Sargava, the Lost Colony</Link></p>
<Ability id="hill-fighter" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="hill-fighter">Hill Fighter</Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Region" hl>Sargava</Pair>
<Pair single="flavor" id="hill-fighter-flavor">You are used to fighting in <Link to="/rule/hills_terrain">hilly environments</Link>.</Pair>
<Pair single="benefit" id="hill-fighter-benefit">You may <Link to="/rule/run">run</Link> or <Link to="/rule/charge">charge</Link> downhill on a steep slope (moving up to your base speed) without making an <Link to="/skill/acrobatics">Acrobatics</Link> check to avoid stumbling - but if you travel farther than this distance, the normal rules for steep slopes apply.</Pair>
</Ability>
</>};
const _holdout = {title: "Holdout", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="holdout" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="holdout">Holdout</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="holdout-flavor">You were robbed at a young age by bullies, an experience that impressed upon you the importance of being able to hold on to whatever you cared to keep.</Pair>
<Pair single="benefit" id="holdout-benefit"><p>You gain a +1 trait bonus to CMD against disarm and steal combat maneuvers.</p>
<p><strong>Suggested Characters:</strong> Half-orcs, River Kingdoms natives, Varisians.</p>
</Pair>
</Ability>
</>};
const _honored_fist_of_the_society = {title: "Honored Fist of the Society", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link>, <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="honored-fist-of-the-society" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="honored-fist-of-the-society">Honored Fist of the Society</Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="honored-fist-of-the-society-flavor">You have studied dozens of ancient texts on martial arts that only the Society possesses, and are more learned in these arts than most.</Pair>
<Pair single="benefit" id="honored-fist-of-the-society-benefit">You increase your ki pool by 1 point.</Pair>
</Ability>
</>};
const _hunters_knack = {title: "Hunter's Knack", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="hunters-knack" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="hunters-knack">Hunter's Knack</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="hunters-knack-flavor">When you watch and wait before attacking, your strike is true.</Pair>
<Pair single="benefit" id="hunters-knack-benefit">You gain a +1 trait bonus on attack rolls against your <Link to="/ability/favored_enemies">favored enemies</Link> when you make such attacks as part of a <Link to="/rule/readied_action">readied action</Link>.</Pair>
</Ability>
</>};
const _ichimeiyo_champion = {title: "Ichimeiyo Champion", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook</Link></p>
<Ability id="ichimeiyo-champion" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="ichimeiyo-champion">Ichimeiyo Champion</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="ichimeiyo-champion-flavor">You draw strength from adhering to the Ichimeiyo honor code in combat.</Pair>
<Pair single="benefit" id="ichimeiyo-champion-benefit">Once per day, if an effect would compel you to harm an ally, abandon an ally, or break your word, you can attempt a Will save at the usual DC to end the effect. If the effect normally allows a Will save at this point, you can roll twice and take the better result.</Pair>
</Ability>
</>};
const _improvised_defense = {title: "Improvised Defense", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/bastards_of_golarion">Bastards of Golarion</Link></p>
<Ability id="improvised-defense" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="improvised-defense">Improvised Defense</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="improvised-defense-flavor">You're never defenseless, even when you are caught off guard.</Pair>
<Pair single="benefit" id="improvised-defense-benefit">Whenever you wield an improvised weapon, you gain a +1 shield bonus to AC. If you use the improvised weapon to attack, you lose this shield bonus until the beginning of your next turn.</Pair>
</Ability>
</>};
const _indelible_ire = {title: "Indelible Ire", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="indelible-ire" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="indelible-ire">Indelible Ire</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="indelible-ire-flavor">When you are gravely wounded, you're stirred to greater combat focus.</Pair>
<Pair single="benefit" id="indelible-ire-benefit">Each time a critical hit is confirmed against you, you gain a +1 trait bonus on attack rolls for 1 round.</Pair>
</Ability>
</>};
const _inspiring = {title: "Inspiring", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="inspiring" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="inspiring">Inspiring</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="inspiring-flavor">As a child, you learned the power of a simple expression of faith in another when you gave a hero the inspiration to fight on in the face of terrible odds and save you from danger.</Pair>
<Pair single="benefit" id="inspiring-benefit"><p>As a <strong className="hl">standard action</strong>, you can speak words of encouragement to grant a +1 morale bonus to an ally within 30 feet who can see and hear you. The ally can use this bonus on any d20 roll of her choice before the start of your next turn. You cannot use this trait to grant a bonus to yourself or to an ally who has already benefited from this trait within the last 24 hours.</p>
<p><strong>Suggested Characters:</strong> <Link to="/rule/eagle_knights">Eagle Knights</Link>, <Link to="/faith/iomedae">Iomedaeans</Link>, Mendevian crusaders.</p>
</Pair>
</Ability>
</>};
const _inspiring_rush = {title: "Inspiring Rush", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link></p>
<Ability id="inspiring-rush" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="inspiring-rush">Inspiring Rush</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="inspiring-rush-flavor">Your charge inspires nearby companions to new heights of daring.</Pair>
<Pair single="benefit" id="inspiring-rush-benefit">Once per day when you make a <Link to="/rule/charge">charge</Link> attack, you gain a +1 trait bonus on both your attack and damage rolls, as do any allies who make a charge attack before the beginning of your next turn.</Pair>
</Ability>
</>};
const _jacket_training = {title: "Jacket Training", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook</Link></p>
<Ability id="jacket-training" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="jacket-training">Jacket Training</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="jacket-training-benefit">You can treat an armored coat as light armor. This choice must be made when you don the armor, and can't be changed until you remove and redon the armor. You must still be proficient in wearing medium armor to avoid adding the armor's check penalty on all attack rolls and skill checks that involve moving.</Pair>
</Ability>
</>};
const _jungle_fighter = {title: "Jungle Fighter", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/sargava_the_lost_colony">Sargava, the Lost Colony</Link></p>
<Ability id="jungle-fighter" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="jungle-fighter">Jungle Fighter</Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Region" hl>Sargava</Pair>
<Pair single="benefit" id="jungle-fighter-benefit">You are sure-footed in jungle environments, and your speed may not be reduced to less than 10 feet by difficult terrain in jungles (meaning you may take a 5-foot step in difficult terrain and not provoke an attack of opportunity).</Pair>
</Ability>
</>};
const _just_like_new = {title: "Just Like New", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="just-like-new" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="just-like-new">Just Like New</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="just-like-new-flavor">Broken firearms are not problems: they are challenges.</Pair>
<Pair single="benefit" id="just-like-new-benefit">Your first attempt to remove the broken condition from your starting firearm and to upgrade it to a masterwork weapon costs 150 gp instead of 300 gp. In addition, when wielding a firearm that has the broken condition or is treated as if it had the broken condition, you take a -1 penalty on attack rolls made with it instead of the normal -2.</Pair>
</Ability>
</>};
const _killer = {title: "Killer", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="killer" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="killer">Killer</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="killer-flavor">You made your first kill at a very young age and found the task of war or murder to your liking. You either take particular pride in a well-placed blow, or find vile pleasure in twisting the blade to maximize your target's pain.</Pair>
<Pair single="benefit" id="killer-benefit">You deal an amount of additional damage equal to your weapon's critical hit modifier when you score a successful critical hit with a weapon; this additional damage is added to the final total, and is not multiplied by the critical hit multiple itself. This extra damage is a trait bonus.</Pair>
</Ability>
</>};
const _kin_guardian = {title: "Kin Guardian", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="kin-guardian" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="kin-guardian">Kin Guardian</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="kin-guardian-flavor">You are dedicated to defending members of your family.</Pair>
<Pair single="benefit" id="kin-guardian-benefit">When you use the <Link to="/rule/aid_another_2">aid another</Link> action to give a member of your family a bonus to AC, increase the bonus by 2. This increase is a trait bonus (and therefore doesn't stack with increases granted by other family members using this trait). This trait has no effect when using the aid another action to increase a family member's next attack roll.</Pair>
</Ability>
</>};
const _larger_than_life = {title: "Larger Than Life", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="larger-than-life" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="larger-than-life">Larger Than Life</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="larger-than-life-flavor">You wield firearms with truly terrifying menace.</Pair>
<Pair single="benefit" id="larger-than-life-benefit">When you use the <Link to="/skill/intimidate">Intimidate</Link> skill on a creature while wielding a firearm, you are considered one size category larger than your actual size.</Pair>
</Ability>
</>};
const _lastwall_defender = {title: "Lastwall Defender", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins</Link></p>
<Ability id="lastwall-defender" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="lastwall-defender">Lastwall Defender</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="lastwall-defender-flavor">Your military service in Lastwall taught you how to identify undead creatures, changing them in your mind from mysterious terrors to concrete foes you know how to deal with.</Pair>
<Pair single="benefit" id="lastwall-defender-benefit">You gain a +1 trait bonus on attack and damage rolls against undead creatures that you have personally identified using the <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> skill.</Pair>
</Ability>
</>};
const _martial_performer = {title: "Martial Performer", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="martial-performer" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="martial-performer">Martial Performer</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="martial-performer-flavor">Your training has made you a martial performer.</Pair>
<Pair single="benefit" id="martial-performer-benefit">When you gain a monk bonus feat, you may instead take a <Link to="/main/feats_performance">performance feat</Link> for which you meet the prerequisites.</Pair>
</Ability>
</>};
const _merciful_scimitar = {title: "Merciful Scimitar", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook</Link></p>
<Ability id="merciful-scimitar" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="merciful-scimitar">Merciful Scimitar</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="merciful-scimitar-flavor">You learned from worshipers of <Link to="/faith/sarenrae">Sarenrae</Link> to cut foes with a scimitar without killing them.</Pair>
<Pair single="benefit" id="merciful-scimitar-benefit">You can deal nonlethal damage with a scimitar without taking a penalty on your attack rolls.</Pair>
</Ability>
</>};
const _monk_weapon_skill = {title: "Monk Weapon Skill", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook</Link></p>
<Ability id="monk-weapon-skill" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="monk-weapon-skill">Monk Weapon Skill</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="monk-weapon-skill-flavor">Your exposure to teaching from the <Link to="/rule/houses_of_perfection">Houses of Perfection</Link> makes your attacks with monk weapons even more deadly.</Pair>
<Pair single="benefit" id="monk-weapon-skill-benefit">Select one <Link to="/class/monk">monk</Link> weapon with which you are proficient (unarmed attacks do not qualify for this purpose). You gain a +1 trait bonus on damage rolls with this weapon.</Pair>
</Ability>
</>};
const _monster_challenger = {title: "Monster Challenger", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook</Link></p>
<Ability id="monster-challenger" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="monster-challenger">Monster Challenger</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="monster-challenger-flavor">You have made it your mission to bring down a fearsome beast.</Pair>
<Pair single="benefit" id="monster-challenger-benefit">Choose two of the following: aberrations, animals, dragons, fey, magical beasts, oozes, and vermin. You can move at full speed without penalty while using <Link to="/skill/survival">Survival</Link> to follow tracks left by your chosen creature types.</Pair>
</Ability>
</>};
const _monster_survivor = {title: "Monster Survivor", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook</Link></p>
<Ability id="monster-survivor" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="monster-survivor">Monster Survivor</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="monster-survivor-flavor">You've escaped with your life after a terrible monster attack.</Pair>
<Pair single="benefit" id="monster-survivor-benefit">You gain a +4 dodge bonus to AC against attacks of opportunity made against you by Large or larger opponents when you're making a <Link to="/rule/withdraw">withdraw</Link> action.</Pair>
</Ability>
</>};
const _muscle_of_the_society = {title: "Muscle of the Society", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_society_primer">Pathfinder Society Primer</Link></p>
<Ability id="muscle-of-the-society" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="muscle-of-the-society">Muscle of the Society</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="muscle-of-the-society-flavor">Your intense training with the Swords has taught you how to infiltrate otherwise inaccessible ruins and extract their treasures without too much exertion.</Pair>
<Pair single="benefit" id="muscle-of-the-society-benefit">You gain a +2 trait bonus on Strength checks made to break doors and lift portcullises, and you treat your Strength score as 2 higher for the purpose of determining your carrying capacity.</Pair>
</Ability>
</>};
const _natural_flyer = {title: "Natural Flyer", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 29</Link></p>
<Ability id="natural-flyer" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="natural-flyer">Natural Flyer</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="natural-flyer-flavor">All your life, the sky has beckoned to you, and you have dreamed of reveling in the freedom and bliss of flight.</Pair>
<Pair single="benefit" id="natural-flyer-benefit">You gain a +1 trait bonus on <Link to="/skill/fly">Fly</Link> checks, as well as <Link to="/skill/acrobatics">Acrobatics</Link> checks attempted while flying. Fly is always a class skill for you.</Pair>
</Ability>
</>};
const _natures_mimic = {title: "Nature's Mimic", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="natures-mimic" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="natures-mimic">Nature's Mimic</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="natures-mimic-flavor">Your knowledge of nature informs your fighting style, and that style gives you insight into related aspects of the natural world.</Pair>
<Pair single="benefit" id="natures-mimic-benefit">You gain a +1 trait bonus on all <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> checks, and Knowledge (nature) is always a class skill for you. You can make Knowledge (nature) checks pertaining to animals that correspond to your style feats untrained.</Pair>
</Ability>
</>};
const _never_stop_shooting = {title: "Never Stop Shooting", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="never-stop-shooting" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="never-stop-shooting">Never Stop Shooting</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="never-stop-shooting-flavor">Even when the chips are down, you keep on shooting.</Pair>
<Pair single="benefit" id="never-stop-shooting-benefit"><p>If your hit point total drops to 0 or lower but you are not dead, you may act as if <Link to="/misc/disabled">disabled</Link> rather than <Link to="/misc/dying">dying</Link> (as if you possessed the <Link to="/feat/diehard">Diehard</Link> feat). However, you can use your actions only to draw a firearm, reload a firearm, or attack with a firearm.</p>
<p>If you have the Diehard feat, this trait also allows you to substitute your Wisdom score for your Constitution score for the purpose of determining the negative hit point total at which you die.</p>
</Pair>
</Ability>
</>};
const _no_escape = {title: "No Escape", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance</Link></p>
<Ability id="no-escape" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="no-escape">No Escape</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="no-escape-flavor">Struggle as they might, ne'er-do-wells and vagrants are hard pressed to evade the law once in your clutches.</Pair>
<Pair single="benefit" id="no-escape-benefit">You gain a +1 trait bonus on <Link to="/rule/combat_maneuvers">combat maneuver</Link> checks to lawfully and nonlethally restrain a creature you've witnessed commit a crime.</Pair>
</Ability>
</>};
const _obari_veteran = {title: "Obari Veteran", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/merchants_manifest">Merchant's Manifest</Link></p>
<Ability id="obari-veteran" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="obari-veteran">Obari Veteran</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="obari-veteran-flavor">You've spent years aboard ships traveling the lucrative Obari Crossing, transporting Garundi and Vudrani goods.</Pair>
<Pair single="benefit" id="obari-veteran-benefit">You gain +1 bonus on <Link to="/skill/profession">Profession</Link> (sailor) checks, and Profession (sailor) is a class skill for you. You also gain a +1 trait bonus on weapon damage rolls against creatures with the aquatic subtype.</Pair>
</Ability>
</>};
const _ogre_avoidance = {title: "Ogre Avoidance", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes</Link></p>
<Ability id="ogre-avoidance" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="ogre-avoidance">Ogre Avoidance</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="ogre-avoidance-flavor">You have practiced defensive maneuvers to avoid being caught by <Link to="/monster/ogre">ogres</Link>, whose grasps you know are tight and unforgiving.</Pair>
<Pair single="benefit" id="ogre-avoidance-benefit">You gain a +2 trait bonus to CMD against <Link to="/rule/bull_rush">bull rush</Link> and <Link to="/rule/grapple">grapple</Link> combat maneuvers.</Pair>
</Ability>
</>};
const _ozem_inspired = {title: "Ozem-Inspired", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook</Link></p>
<Ability id="ozem-inspired" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="ozem-inspired">Ozem-Inspired</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="ozem-inspired-flavor">Tales of the Knights of Ozem have inspired you since childhood to lash out reflexively against the undead.</Pair>
<Pair single="benefit" id="ozem-inspired-benefit">You gain a +1 trait bonus on attack rolls and damage rolls when making attacks of opportunity against undead. While you wield a shield, your shield bonus to AC improves by 1 against attacks of opportunity made by undead.</Pair>
</Ability>
</>};
const _performers_surprise = {title: "Performer's Surprise", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook</Link></p>
<Ability id="performers-surprise" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="performers-surprise">Performer's Surprise</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="performers-surprise-flavor">You are practiced at the surprising combat tricks of Varisian wanderers.</Pair>
<Pair single="benefit" id="performers-surprise-benefit">Against foes denied their Dexterity bonus to AC, you gain a +1 trait bonus on damage rolls with <Link to="/misc/improvised_weapons">improvised weapons</Link>, exotic weapons, and thrown weapons.</Pair>
</Ability>
</>};
const _permanent_scars = {title: "Permanent Scars", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook</Link></p>
<Ability id="permanent-scars" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="permanent-scars">Permanent Scars</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="permanent-scars-flavor">You carry the physical and emotional scars of your <Link to="/rule/gray_maidens">Gray Maiden</Link> initiation as mental armor.</Pair>
<Pair single="benefit" id="permanent-scars-benefit">You receive a +2 trait bonus on saving throws against emotion and pain spells and effects.</Pair>
</Ability>
</>};
const _pillager = {title: "Pillager", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="pillager" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="pillager">Pillager</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="pillager-flavor">Growing up in a place where authorities, if there were any, rarely enforced property laws, you learned quickly that you have only what you can hold - but you gain whatever you can take.</Pair>
<Pair single="benefit" id="pillager-benefit"><p>You gain a +1 trait bonus on combat maneuver checks to perform <Link to="/rule/disarm">disarm</Link> and <Link to="/rule/steal">steal</Link> combat maneuvers.</p>
<p><strong>Suggested Characters:</strong> Halflings, River Kingdoms natives, Shackles natives.</p>
</Pair>
</Ability>
</>};
const _promising = {title: "Promising", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook</Link></p>
<Ability id="promising" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="promising">Promising</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="promising-flavor">Your superiors have identified you as an <Link to="/rule/eagle_knights">Eagle Knights</Link> candidate, and their praise encourages you to strive to meet their expectations.</Pair>
<Pair single="benefit" id="promising-benefit">Each day after getting a full night's sleep, you gain a +1 trait bonus to your AC when wearing armor or carrying a shield. This bonus lasts until you are first hit by an attack within the next 24 hours.</Pair>
</Ability>
</>};
const _punish_insurrection = {title: "Punish Insurrection", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption</Link></p>
<Ability id="punish-insurrection" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="punish-insurrection">Punish Insurrection</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="punish-insurrection-flavor">You relish reminding people who's in charge.</Pair>
<Pair single="benefit" id="punish-insurrection-benefit"><p>Against members of the same organization or hierarchy who formally answer to you, you gain a +1 trait bonus on attack and damage rolls.</p>
<p>You also gain this bonus against members who have openly defied the authority or rules of that body, provided the infraction is serious enough that their standing is now less than yours.</p>
</Pair>
</Ability>
</>};
const _reactionary = {title: "Reactionary", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="reactionary" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="reactionary">Reactionary</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="reactionary-flavor">You were bullied often as a child, but never quite developed an offensive response. Instead, you became adept at anticipating sudden attacks and reacting to danger quickly.</Pair>
<Pair single="benefit" id="reactionary-benefit">You gain a +2 trait bonus on initiative checks.</Pair>
</Ability>
</>};
const _reckless = {title: "Reckless", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="reckless" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="reckless">Reckless</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="reckless-flavor">You have a tendency for rash behavior, often disregarding your own safety as you move across the battlefield.</Pair>
<Pair single="benefit" id="reckless-benefit">You gain a +1 bonus on <Link to="/skill/acrobatics">Acrobatics</Link> checks, and Acrobatics is always a class skill for you.</Pair>
</Ability>
</>};
const _reckless_contempt = {title: "Reckless Contempt", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="reckless-contempt" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="reckless-contempt">Reckless Contempt</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="reckless-contempt-flavor">You do not fear the threat of lesser weapons.</Pair>
<Pair single="benefit" id="reckless-contempt-benefit">Whenever you provoke an attack of opportunity by firing a firearm, you gain a +1 trait bonus on the attack roll that provoked the attack of opportunity.</Pair>
</Ability>
</>};
const _red_mantis_bleeding = {title: "Red Mantis Bleeding", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook</Link></p>
<Ability id="red-mantis-bleeding" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="red-mantis-bleeding">Red Mantis Bleeding</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="red-mantis-bleeding-flavor">You witnessed the training of <Link to="/rule/red_mantis">Red Mantis</Link> assassins, either as a child on Mediogalti Island or as an aspirant, and learned to leave bleeding wounds.</Pair>
<Pair single="benefit" id="red-mantis-bleeding-benefit">Whenever you confirm a critical hit with a slashing weapon, you also deal 1 point of <Link to="/rule/bleed">bleed</Link> damage.</Pair>
</Ability>
</>};
const _resilient = {title: "Resilient", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="resilient" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="resilient">Resilient</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="resilient-flavor">Growing up in a poor neighborhood or in the unforgiving wilds often forced you to subsist on food and water from doubtful sources.</Pair>
<Pair single="benefit" id="resilient-benefit">You've built up your constitution as a result, and gain a +1 trait bonus on Fortitude saves.</Pair>
</Ability>
</>};
const _resolve_of_the_rejected = {title: "Resolve of the Rejected", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="resolve-of-the-rejected" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="resolve-of-the-rejected">Resolve of the Rejected</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="resolve-of-the-rejected-flavor">Some disagree with your choice to wield a firearm, and their scorn has only hardened your resolve in battle.</Pair>
<Pair single="benefit" id="resolve-of-the-rejected-benefit">You gain a +1 trait bonus on all saving throws against charm and compulsion effects. Also, once per day when you succeed at a saving throw against such an effect, you regain 1 grit point.</Pair>
</Ability>
</>};
const _riders_bond = {title: "Rider's Bond", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link></p>
<Ability id="riders-bond" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="riders-bond">Rider's Bond</Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Region" hl>Lastwall</Pair>
<Pair title="Requirements" hl>Associated with the court of Castle Overwatch</Pair>
<Pair single="flavor" id="riders-bond-flavor">Your mount keenly understands your commands.</Pair>
<Pair single="benefit" id="riders-bond-benefit">If you gain a horse as an animal companion or mount as one of your class abilities, it gains two bonus tricks that don't count against the normal limit of tricks known by the animal.</Pair>
</Ability>
</>};
const _river_fighter = {title: "River Fighter", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/sargava_the_lost_colony">Sargava, the Lost Colony</Link></p>
<Ability id="river-fighter" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="river-fighter">River Fighter</Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Region" hl>Sargava</Pair>
<Pair single="flavor" id="river-fighter-flavor">You are used to fighting while swimming.</Pair>
<Pair single="benefit" id="river-fighter-benefit">You may swim downstream or cross-current as a <Link to="/rule/charge">charge</Link> if you make your <Link to="/skill/swim">Swim</Link> DC by 5 or more.</Pair>
</Ability>
</>};
const _roving_range = {title: "Roving Range", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook</Link></p>
<Ability id="roving-range" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="roving-range">Roving Range</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="roving-range-flavor">You learned from pirates to make the most of ranged attacks as you close with targets.</Pair>
<Pair single="benefit" id="roving-range-benefit">Increase the range increment of ranged weapons (but not thrown weapons) you wield by 5 feet.</Pair>
</Ability>
</>};
const _savanna_hunter = {title: "Savanna Hunter", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/sargava_the_lost_colony">Sargava, the Lost Colony</Link></p>
<Ability id="savanna-hunter" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="savanna-hunter">Savanna Hunter</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="savanna-hunter-flavor">You have been trained to hunt and fight on the open plains since birth.</Pair>
<Pair single="benefit" id="savanna-hunter-benefit">You gain a +1 trait bonus on attacks of opportunity attack rolls made with a <Link to="/eq-weapon/shortspear">shortspear</Link>, as well as a +1 racial bonus on Constitution checks to continue <Link to="/rule/run">running</Link> and avoid nonlethal damage from a <Link to="/rule/forced_march">forced march</Link>.</Pair>
</Ability>
</>};
const _scarred_by_space_pirates = {title: "Scarred by Space Pirates", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_stars">People of the Stars</Link></p>
<Ability id="scarred-by-space-pirates" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="scarred-by-space-pirates">Scarred by Space Pirates</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="scarred-by-space-pirates-flavor">You were attacked by Vercite space pirates in your youth, inspiring you to find ways to deal with the alien interlopers should they return.</Pair>
<Pair single="benefit" id="scarred-by-space-pirates-benefit">You gain a +1 trait bonus on attack rolls against humanoids from beyond Golarion, including androids, kasathas, Triaxians, and Vercites, among others.</Pair>
</Ability>
</>};
const _scarred_descendant = {title: "Scarred Descendant", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="scarred-descendant" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="scarred-descendant">Scarred Descendant</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="scarred-descendant-flavor">Your own people are your <Link to="/ability/favored_enemy">favored enemy</Link>.</Pair>
<Pair single="benefit" id="scarred-descendant-benefit">You gain a +1 trait bonus on rolls to confirm critical hits against favored enemies of your own subtype and on Survival checks made to track such creatures.</Pair>
</Ability>
</>};
const _shadow_trained = {title: "Shadow Trained", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link></p>
<Ability id="shadow-trained" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="shadow-trained">Shadow Trained</Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Region" hl>Nidal</Pair>
<Pair title="Requirements" hl>Associated with the Umbral Court of Nidal</Pair>
<Pair single="flavor" id="shadow-trained-flavor">You have experience fighting in darkness.</Pair>
<Pair single="benefit" id="shadow-trained-benefit">Your miss chance while fighting in areas of dim light is only 10%.</Pair>
</Ability>
</>};
const _siege_defender = {title: "Siege Defender", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology</Link></p>
<Ability id="siege-defender" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="siege-defender">Siege Defender</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="siege-defender-flavor">Aroden taught the people of Absalom to survive any siege with proper preparation and cooperation, and those teachings were passed on to you.</Pair>
<Pair single="benefit" id="siege-defender-benefit">You gain a +1 trait bonus on melee damage rolls when you attack a target from <Link to="/rule/higher_ground">higher ground</Link>.</Pair>
</Ability>
</>};
const _slippery = {title: "Slippery", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="slippery" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="slippery">Slippery</Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/bellflower_network">Bellflower Network</Link></Pair>
<Pair single="flavor" id="slippery-flavor">You have escaped from so many dangerous situations in your life that you've gotten quite good at not getting caught.</Pair>
<Pair single="benefit" id="slippery-benefit">You gain a +1 trait bonus on <Link to="/skill/stealth">Stealth</Link> checks and Stealth is a class skill for you.</Pair>
</Ability>
</>};
const _soaring_sprinter = {title: "Soaring Sprinter", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="soaring-sprinter" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="soaring-sprinter">Soaring Sprinter</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="soaring-sprinter-flavor">As a youth, you often leaped and ran at treacherous heights, either because it was the only place with enough freedom for you to play or because it was not a good idea to play any lower.</Pair>
<Pair single="benefit" id="soaring-sprinter-benefit"><p>You gain a +2 trait bonus on <Link to="/skill/acrobatics">Acrobatics</Link> checks to keep your balance or jump, and Acrobatics becomes a class skill for you.</p>
<p><strong>Suggested Characters:</strong> Chelaxians, gnomes, Korvosans.</p>
</Pair>
</Ability>
</>};
const _solitary = {title: "Solitary", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="solitary" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="solitary">Solitary</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="solitary-flavor">You are skilled at slipping away from crowds.</Pair>
<Pair single="benefit" id="solitary-benefit">Once per day, you can attempt a <Link to="/skill/bluff">Bluff</Link> check to create a diversion to hide with a +2 trait bonus on the check, and if successful, you take only a -5 penalty on your <Link to="/skill/stealth">Stealth</Link> check to get to an unobserved place while observers are distracted (instead of the normal -10 penalty).</Pair>
</Ability>
</>};
const _spirit_of_the_law = {title: "Spirit of the Law", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="spirit-of-the-law" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="spirit-of-the-law">Spirit of the Law</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="spirit-of-the-law-flavor">You have seen the rules of society endlessly twisted in their implementation, and as such, you are especially wary of those who exploit the law to impose their own will.</Pair>
<Pair single="benefit" id="spirit-of-the-law-benefit">You gain a +1 trait bonus on attacks against lawful-aligned humanoids and a +2 trait bonus on saving throws against effects with the lawful descriptor.</Pair>
</Ability>
</>};
const _splash_attack = {title: "Splash Attack", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_river">People of the River</Link></p>
<Ability id="splash-attack" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="splash-attack">Splash Attack</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="splash-attack-flavor">You catch others off-guard when a confrontation escalates.</Pair>
<Pair single="benefit" id="splash-attack-benefit"><p>As long as you are standing in or adjacent to water, or holding at least a pint of liquid (including insoluble liquids like <Link to="/eq-misc/oil">oil</Link> or <Link to="/eq-weapon/alchemists_fire">alchemist's fire</Link>), you can perform a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver to blind a foe within reach without provoking an attack of opportunity.</p>
<p>If you select the <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link> feat, you gain a +2 trait bonus on dirty trick combat maneuvers to blind foes as long as you are standing in or adjacent to water or holding a pint of liquid.</p>
</Pair>
</Ability>
</>};
const _sprint = {title: "Sprint", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link></p>
<Ability id="sprint" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="sprint">Sprint</Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="sprint-flavor">You were taught from a young age that the world is full of big, fast, dangerous foes, and that sometimes the best course of action is to put your head down and run. Your parents taught you how to make the most of a solid mid-length sprint and how to squeeze just a little extra speed out of yourself.</Pair>
<Pair single="benefit" id="sprint-benefit">If you do nothing but move in a turn (that is, if you <Link to="/rule/run">run</Link> or use both of your actions in a round to move your speed) and you are in no armor or light armor, you may move an extra 5 feet.</Pair>
</Ability>
</>};
const _startling_report = {title: "Startling Report", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="startling-report" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="startling-report">Startling Report</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="startling-report-flavor">Through either perfect timing or the determination of your action, the sound of your firearm going off sets your enemies on edge.</Pair>
<Pair single="benefit" id="startling-report-benefit">When you shoot a firearm, you gain a +2 trait bonus on Intimidate checks for 1 round against those who heard the shot.</Pair>
</Ability>
</>};
const _steel_skin = {title: "Steel Skin", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link></p>
<Ability id="steel-skin" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="steel-skin">Steel Skin</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="steel-skin-benefit"><p>You gain the ability to <Link to="/rule/don_armor">don or remove</Link> heavy armor in half the normal time.</p>
<p>Additionally, you begin play with a great helm bearing the iconography of your family (this helm grants no special defensive benefits). While wearing this helm with a suit of heavy armor, you gain a +2 trait bonus on Intimidate checks.</p>
</Pair>
</Ability>
</>};
const _strong_arm_supple_wrist = {title: "Strong Arm, Supple Wrist", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/qadira_jewel_of_the_east">Qadira, Jewel of the East</Link>, <Link to="/source/qadira_gateway_to_the_east">Qadira, Gateway to the East</Link></p>
<Ability id="strong-arm-supple-wrist" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="strong-arm-supple-wrist">Strong Arm, Supple Wrist</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="strong-arm-supple-wrist-flavor">You have been trained in the javelin and the spear, and you know how to make the best use of your momentum.</Pair>
<Pair single="benefit" id="strong-arm-supple-wrist-benefit">When you move at least 10 feet before making an attack with a thrown weapon, you can add 10 feet to the range increment of the weapon thrown. You can gain this benefit only once per round.</Pair>
</Ability>
</>};
const _subjective_equilibrium = {title: "Subjective Equilibrium", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook</Link></p>
<Ability id="subjective-equilibrium" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="subjective-equilibrium">Subjective Equilibrium</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="subjective-equilibrium-flavor">You understand that gravity is far from constant when traversing the Great Beyond.</Pair>
<Pair single="benefit" id="subjective-equilibrium-benefit">You gain a +2 trait bonus on Wisdom checks to move on a plane with <Link to="/rule/gravity_traits">subjective directional gravity</Link>, and you gain a +10-foot enhancement bonus to your speed when "falling" on such a plane.</Pair>
</Ability>
</>};
const _surprise_weapon = {title: "Surprise Weapon", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="surprise-weapon" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="surprise-weapon">Surprise Weapon</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="surprise-weapon-flavor">You are skilled at fighting with objects not traditionally considered weapons.</Pair>
<Pair single="benefit" id="surprise-weapon-benefit">You gain a +2 trait bonus on attack rolls with <Link to="/misc/improvised_weapons">improvised weapons</Link>.</Pair>
</Ability>
</>};
const _sworn_enemy = {title: "Sworn Enemy", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="sworn-enemy" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="sworn-enemy">Sworn Enemy</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="sworn-enemy-flavor">You were raised with defiance, fear, or hatred of a particular sort of foe. To make you ready to resist such foes, you were trained for long hours in the proper ways to defeat them.</Pair>
<Pair single="benefit" id="sworn-enemy-benefit"><p>Choose a foe from the ranger's list of <Link to="/ability/favored_enemies">favored enemies</Link>. You gain a +1 trait bonus on attacks of opportunity against the chosen foe.</p>
<p><strong>Suggested Characters:</strong> Dwarves, Isgeri, Mendevian crusaders.</p>
</Pair>
</Ability>
</>};
const _tactician = {title: "Tactician", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="tactician" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="tactician">Tactician</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="tactician-flavor">You know how to take advantage of enemies who are unprepared for your assault.</Pair>
<Pair single="benefit" id="tactician-benefit">You gain a +1 trait bonus on initiative checks. In addition, once per day when you make an attack of opportunity, you gain a +2 trait bonus on the attack roll.</Pair>
</Ability>
</>};
const _tar_taargadth_trained = {title: "Tar Taargadth Trained", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 31</Link></p>
<Ability id="tar-taargadth-trained" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="tar-taargadth-trained">Tar Taargadth Trained</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="tar-taargadth-trained-flavor">You know the ancient fighting techniques of the Tar Taargadth Empire.</Pair>
<Pair single="benefit" id="tar-taargadth-trained-benefit">You gain a +1 trait bonus on damage rolls when using any weapon with the word "dwarven" in its name.</Pair>
</Ability>
</>};
const _tarnished_halls_runner = {title: "Tarnished Halls Runner", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/black_markets">Black Markets</Link></p>
<Ability id="tarnished-halls-runner" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="tarnished-halls-runner">Tarnished Halls Runner</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="tarnished-halls-runner-flavor">You evaded Technic League patrols with the <Link to="/rule/tarnished_halls">Blood Gar pirates</Link>.</Pair>
<Pair single="benefit" id="tarnished-halls-runner-benefit">When you move at least 10 feet, you gain a +1 trait bonus on attack rolls with firearms and technological weapons and a +1 dodge bonus to your AC against such weapons until the start of your next turn.</Pair>
</Ability>
</>};
const _threatening_defender = {title: "Threatening Defender", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link></p>
<Ability id="threatening-defender" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="threatening-defender">Threatening Defender</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="threatening-defender-flavor">You know how to avoid a blow while still maintaining your offensive posture.</Pair>
<Pair single="benefit" id="threatening-defender-benefit">When you use <Link to="/feat/combat_expertise">Combat Expertise</Link>, reduce the number you subtract from your melee attack rolls by 1.</Pair>
</Ability>
</>};
const _thunder_and_fang_performer = {title: "Thunder and Fang Performer", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook</Link></p>
<Ability id="thunder-and-fang-performer" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="thunder-and-fang-performer">Thunder and Fang Performer</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="thunder-and-fang-performer-flavor">You learned from Shoanti champions to take advantage of the dramatic swings required by heavy weapons like the <Link to="/eq-weapon/earth_breaker">earth breaker</Link>.</Pair>
<Pair single="benefit" id="thunder-and-fang-performer-benefit">You gain a +2 trait bonus on Intimidate checks while wielding a two-handed melee weapon.</Pair>
</Ability>
</>};
const _to_the_last = {title: "To The Last", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook</Link></p>
<Ability id="to-the-last" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="to-the-last">To The Last</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="to-the-last-benefit">Choose one type of medium or heavy armor (such as <Link to="/eq-armor/chainmail">chainmail</Link> or <Link to="/eq-armor/half_plate">half-plate</Link>). If you have no allies within 60 feet when you are wearing that type of armor, you gain DR 1/-. This stacks with any one other source of damage resistance you have.</Pair>
</Ability>
</>};
const _tracker_of_the_society = {title: "Tracker of the Society", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link>, <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="tracker-of-the-society" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="tracker-of-the-society">Tracker of the Society</Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="tracker-of-the-society-flavor">Thanks to your time as a Pathfinder, you've mastered the art of tracking.</Pair>
<Pair single="benefit" id="tracker-of-the-society-benefit">You gain a +1 trait bonus on initiative checks and a +2 trait bonus on Survival checks made while traveling through any of your favored terrains. This is in addition to any bonuses you receive from your <Link to="/ability/favored_terrain">favored terrain</Link> class ability.</Pair>
</Ability>
</>};
const _unblemished_barrel = {title: "Unblemished Barrel", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="unblemished-barrel" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="unblemished-barrel">Unblemished Barrel</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="unblemished-barrel-flavor">Your skill with firearms speeds your repair of such weapons.</Pair>
<Pair single="benefit" id="unblemished-barrel-benefit">You gain a +1 trait bonus on <Link to="/skill/craft">Craft</Link> (alchemy) and Craft (weapons) checks, and it takes you only 30 minutes to remove the broken condition from a firearm.</Pair>
</Ability>
</>};
const _undergrowth_specialist = {title: "Undergrowth Specialist", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes</Link></p>
<Ability id="undergrowth-specialist" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="undergrowth-specialist">Undergrowth Specialist</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="undergrowth-specialist-flavor">You've trained yourself to move in and out of undergrowth with ease.</Pair>
<Pair single="benefit" id="undergrowth-specialist-benefit">The DCs of <Link to="/skill/acrobatics">Acrobatics</Link> checks don't increase for you when you're moving through light undergrowth, and the DCs of Acrobatics checks you attempt while you're moving through heavy undergrowth increase only by 2.</Pair>
</Ability>
</>};
const _unpredictable_reactions = {title: "Unpredictable Reactions", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance</Link></p>
<Ability id="unpredictable-reactions" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="unpredictable-reactions">Unpredictable Reactions</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="unpredictable-reactions-flavor">Your reactions to combat beginning aren't what people expect.</Pair>
<Pair single="benefit" id="unpredictable-reactions-benefit">You gain a +1 trait bonus on attack rolls made during the surprise round of combat.</Pair>
</Ability>
</>};
const _vandal = {title: "Vandal", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild</Link></p>
<Ability id="vandal" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="vandal">Vandal</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="benefit" id="vandal-benefit">You gain a +2 bonus on Strength checks to break objects, and when damaging an object with a weapon, natural weapon, or unarmed attack, you ignore 2 points of its hardness.</Pair>
</Ability>
</>};
const _vengeful_combat = {title: "Vengeful (Combat)", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="vengeful-combat" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="vengeful-combat">Vengeful (Combat)</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="vengeful-combat-flavor">During your childhood, you suffered occasional or frequent abuse from those too powerful for you to resist. Now you thrill at the chance to get back at those who wronged you.</Pair>
<Pair single="benefit" id="vengeful-combat-benefit"><p>Whenever you strike the last creature that damaged you in the past 24 hours, you gain a +1 trait bonus on damage rolls against that creature.</p>
<p><strong>Suggested Characters:</strong> Calistrians, Galtan refugees, Gyronna worshipers.</p>
</Pair>
</Ability>
</>};
const _venom_resistance = {title: "Venom Resistance", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes</Link></p>
<Ability id="venom-resistance" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="venom-resistance">Venom Resistance</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="venom-resistance-flavor">You have spent considerable time in arid wastelands where girtablilus and other venomous creatures are common, and you have built up a resistance to poison.</Pair>
<Pair single="benefit" id="venom-resistance-benefit">You gain a +2 trait bonus on Fortitude saving throws against poison, and once per day when attempting a saving throw to resist <Link to="/monster/girtablilu">girtablilu</Link> poison, you can roll twice and take the higher result.</Pair>
</Ability>
</>};
const _vigilant_battler = {title: "Vigilant Battler", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="vigilant-battler" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="vigilant-battler">Vigilant Battler</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="vigilant-battler-flavor">You are hard to fool and harder to trick with a feint.</Pair>
<Pair single="benefit" id="vigilant-battler-benefit">You gain a +1 trait bonus on all <Link to="/skill/sense_motive">Sense Motive</Link> checks. This trait bonus increases to +2 when used to counter a <Link to="/rule/feint">feint</Link> in combat.</Pair>
</Ability>
</>};
const _volatile_fuse = {title: "Volatile Fuse", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes</Link></p>
<Ability id="volatile-fuse" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="volatile-fuse">Volatile Fuse</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="volatile-fuse-flavor">Firearms you wield are especially dangerous to you and everyone nearby.</Pair>
<Pair single="benefit" id="volatile-fuse-benefit"><p>Whenever a firearm you wield misfires or explodes, roll a d%. On a result of 1-25, the misfire or explosion is delayed; reroll the attack with a -5 penalty (penalties from the broken condition are not applied to this reroll, and a firearm that was already broken does not explode). After the reroll is resolved, apply the effects of the misfire or explosion as normal. (If the d% roll result is 26 or higher, the misfire or explosion happens as normal.)</p>
<p>Whenever a firearm you wield explodes due to a misfire, increase the explosion's damage by 1d6 plus 1d6 for every 4 character levels you have.</p>
</Pair>
</Ability>
</>};
const _wary_eye = {title: "Wary Eye", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="wary-eye" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="wary-eye">Wary Eye</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="wary-eye-flavor">You know that you could be exposed at any time. Even your closest friends could someday become enemies, and so you have trained yourself to never be surprised by a betrayal.</Pair>
<Pair single="benefit" id="wary-eye-benefit"><p>At the beginning of combat, before initiative checks are revealed, you can select one opponent you are aware of to be the subject of this trait. If you succeed at a Wisdom check opposed by the subject's initiative check, you are not considered <Link to="/rule/flat_footed">flat-footed</Link> against this subject for this combat, even if you normally would be.</p>
<p>You can use this trait in a surprise round, even if you cannot otherwise act that round.</p>
</Pair>
</Ability>
</>};
const _weapon_of_peace = {title: "Weapon of Peace", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="weapon-of-peace" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="weapon-of-peace">Weapon of Peace</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="weapon-of-peace-flavor">Even though you are a trained combatant, proficient with any number of weapons, you don't relish killing your enemies. It's not that you're afraid of seeing blood, but rather that disabling a foe is superior to killing someone capable of admitting defeat.</Pair>
<Pair single="benefit" id="weapon-of-peace-benefit">When using a melee weapon that deals lethal damage to instead deal nonlethal damage, you take only a -2 penalty instead of -4.</Pair>
</Ability>
</>};
const _witty_repartee = {title: "Witty Repartee", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="witty-repartee" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="witty-repartee">Witty Repartee</Pair>
<Pair title="Type">Combat</Pair>
<Pair title="Requirements" hl><Link to="/rule/kitharodian_academy">Kitharodian Academy</Link></Pair>
<Pair single="flavor" id="witty-repartee-flavor">You are quick with your tongue and have always possessed the talent to quickly admonish your enemies.</Pair>
<Pair single="benefit" id="witty-repartee-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks and Bluff is a class skill for you.</Pair>
</Ability>
</>};
const _youthful_infiltrator = {title: "Youthful Infiltrator", topLink: ["Combat Traits","main/traits_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="youthful-infiltrator" extraClasses="trait" icon={["crossed-sabres"]}>
<Pair single id="youthful-infiltrator">Youthful Infiltrator</Pair>
<Pair title="Type">Combat</Pair>
<Pair single="flavor" id="youthful-infiltrator-flavor">You were trained from a young age to ambush the enemies of your order or organization, which makes you hard to trust for most outside your organization if they learn your affiliation.</Pair>
<Pair single="benefit" id="youthful-infiltrator-benefit">You gain a +1 trait bonus on attack rolls against <Link to="/rule/flat_footed">flat-footed</Link> foes, as long as they have not seen you make an attack with this bonus before.</Pair>
</Ability>
</>};
const _abject_belief = {title: "Abject Belief", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link></p>
<Ability id="abject-belief" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="abject-belief">Abject Belief</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="abject-belief-flavor">You cling tenaciously to a faith that is doubted by many, perhaps based around a god who has vanished, or was never a god in the first place. You refuse to forsake your beliefs despite all evidence, perhaps due to a need to belong, respect for tradition, or a religious experience. As a result, it is nearly impossible to convince you of your deity's absence.</Pair>
<Pair single="benefit" id="abject-belief-benefit">You gain a +2 trait bonus on Will saving throws against fear effects.</Pair>
</Ability>
</>};
const _acclimatize_alignment = {title: "Acclimatize Alignment", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook</Link></p>
<Ability id="acclimatize-alignment" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="acclimatize-alignment">Acclimatize Alignment</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="acclimatize-alignment-flavor">Like a climber ascending a mountain, you gradually grow acclimatized to an opposing planar alignment.</Pair>
<Pair single="benefit" id="acclimatize-alignment-benefit">For each consecutive day you remain on a <Link to="/rule/alignment_traits">mildly aligned plane</Link> that opposes your alignment, reduce your penalty on Charisma-based checks by 1, to a minimum of 0. This does not affect the penalty from a strongly aligned plane.</Pair>
</Ability>
</>};
const _acolyte_of_apocrypha = {title: "Acolyte of Apocrypha", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="acolyte-of-apocrypha" extraClasses="trait hasSubs" icon={["bolt-eye"]}>
<Pair single id="acolyte-of-apocrypha">Acolyte of Apocrypha</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="acolyte-of-apocrypha-flavor">Your religious studies hinged on teachings rarely recognized by your faith.</Pair>
<Pair single="benefit" id="acolyte-of-apocrypha-benefit"><p>You can select one of the apocryphal subdomains detailed below, provided the subdomain is associated with your patron deity. In some cases, you can select a subdomain associated with a deity despite that deity not offering the associated domain - these exceptions are noted with an asterisk (&#42;), and you gain domain powers and domain spells from the associated domain as usual, even though your deity normally doesn't grant access to that domain.</p>
<p>When selecting a subdomain associated with two domains, a priest can choose only a subdomain that modifies a domain to which he has access.</p>
</Pair>
</Ability>
<Ability id="domainalchemy-domainartificedomainmagic" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainalchemy-domainartificedomainmagic"><Link to="/domain/alchemy">Alchemy</Link> (<Link to="/domain/artifice">Artifice</Link>/<Link to="/domain/magic">Magic</Link>)</Pair>
<Pair title="Associated Gods"><Link to="/faith/brigh">Brigh</Link>, <Link to="/faith/haagenti">Haagenti</Link>, <Link to="/faith/norgorber">Norgorber</Link>&#42; (Artifice only), <Link to="/faith/orgesh">Orgesh</Link>&#42; (Magic only), <Link to="/faith/qi_zhong">Qi Zhong</Link>)</Pair>
</Ability>
<Ability id="domaincaptivation" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domaincaptivation"><Link to="/domain/captivation">Captivation</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/kofusachi">Kofusachi</Link>, <Link to="/faith/nalinivati">Nalinivati</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/shelyn">Shelyn</Link></Pair>
</Ability>
<Ability id="domainhubris-domainglorydomainnobility" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainhubris-domainglorydomainnobility"><Link to="/domain/hubris">Hubris</Link> (<Link to="/domain/glory">Glory</Link>/<Link to="/domain/nobility">Nobility</Link>)</Pair>
<Pair title="Associated Gods"><Link to="/faith/dispater">Dispater</Link>, <Link to="/faith/general_susumu">General Susumu</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/jaidz">Jaidz</Link>, <Link to="/faith/lissala">Lissala</Link>, <Link to="/faith/olheon">Olheon</Link>, <Link to="/faith/ydersius">Ydersius</Link></Pair>
</Ability>
<Ability id="domaininsect" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domaininsect"><Link to="/domain/insect">Insect</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/achaekek">Achaekek</Link>&#42;, <Link to="/faith/aldinach">Aldinach</Link>, <Link to="/faith/deskari">Deskari</Link>&#42;, <Link to="/faith/ghlaunder">Ghlaunder</Link>, <Link to="/faith/kitumu">Kitumu</Link>, <Link to="/faith/mazmezz">Mazmezz</Link></Pair>
</Ability>
<Ability id="domainlegend" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainlegend"><Link to="/domain/legend">Legend</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/general_susumu">General Susumu</Link>, <Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/shizuru">Shizuru</Link></Pair>
</Ability>
<Ability id="domainlightning" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainlightning"><Link to="/domain/lightning">Lightning</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/hei_feng">Hei Feng</Link>, <Link to="/faith/rovagug">Rovagug</Link>, <Link to="/faith/rull">Rull</Link></Pair>
</Ability>
<Ability id="domainmedicine" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainmedicine"><Link to="/domain/medicine">Medicine</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/dalenydra">Dalenydra</Link>, <Link to="/faith/immonhiel">Immonhiel</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/korada">Korada</Link>, <Link to="/faith/qi_zhong">Qi Zhong</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></Pair>
</Ability>
<Ability id="domainmonsoon" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainmonsoon"><Link to="/domain/monsoon">Monsoon</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/daikitsu">Daikitsu</Link>, <Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/hei_feng">Hei Feng</Link>, <Link to="/faith/rull">Rull</Link></Pair>
</Ability>
<Ability id="domainpetrification" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainpetrification"><Link to="/domain/petrification">Petrification</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/ayrzul">Ayrzul</Link>, <Link to="/faith/minderhal">Minderhal</Link>, <Link to="/faith/soralyon">Soralyon</Link>, <Link to="/faith/xoveron">Xoveron</Link></Pair>
</Ability>
<Ability id="domainportal" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainportal"><Link to="/domain/portal">Portal</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/alseta">Alseta</Link>&#42;, <Link to="/faith/barbatos">Barbatos</Link>, <Link to="/faith/yog_sothoth">Yog-Sothoth</Link></Pair>
</Ability>
<Ability id="domainrites" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainrites"><Link to="/domain/rites">Rites</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/abraxas">Abraxas</Link>, <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/nalinivati">Nalinivati</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/nyarlathotep_black_pharaoh">Nyarlathotep</Link>, <Link to="/faith/sivanah">Sivanah</Link></Pair>
</Ability>
<Ability id="domainself-realization-domainliberationdomainstrength" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainself-realization-domainliberationdomainstrength"><Link to="/domain/self_realization">Self-Realization</Link> (<Link to="/domain/liberation">Liberation</Link>/<Link to="/domain/strength">Strength</Link>)</Pair>
<Pair title="Associated Gods"><Link to="/faith/arshea">Arshea</Link>, <Link to="/faith/falayna">Falayna</Link>, <Link to="/faith/haagenti">Haagenti</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/kurgess">Kurgess</Link>, <Link to="/faith/shei">Shei</Link>, <Link to="/faith/urgathoa">Urgathoa</Link></Pair>
</Ability>
<Ability id="domainthirst" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainthirst"><Link to="/domain/thirst">Thirst</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/aldinach">Aldinach</Link>, <Link to="/faith/lalaci">Lalaci</Link>, <Link to="/faith/nurgal">Nurgal</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></Pair>
</Ability>
<Ability id="domainthorns" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainthorns"><Link to="/domain/thorns">Thorns</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/the_green_mother">The Green Mother</Link>, <Link to="/faith/shub_niggurath">Shub-Niggurath</Link>, <Link to="/faith/zyphus">Zyphus</Link></Pair>
</Ability>
<Ability id="domaintruth" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domaintruth"><Link to="/domain/truth">Truth</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/groetus">Groetus</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/sifkesh">Sifkesh</Link>, <Link to="/faith/sivanah">Sivanah</Link></Pair>
</Ability>
</>};
const _apprentice = {title: "Apprentice", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="apprentice" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="apprentice">Apprentice</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="apprentice-flavor">During your studies of The Majestic Book of the Prime Ascended, you learned some minor magical tricks.</Pair>
<Pair single="benefit" id="apprentice-benefit">Select a single 0-level spell from the <Link to="/main/spells_sorcerer">sorcerer</Link>/<Link to="/main/spells_wizard">wizard</Link> spell list. You can cast this spell 1 time per day as a spell-like ability.</Pair>
</Ability>
</>};
const _arcane_scholar = {title: "Arcane Scholar", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="arcane-scholar" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="arcane-scholar">Arcane Scholar</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="arcane-scholar-flavor">Study of the "Prime Archmage" chapter has broadened your magical knowledge.</Pair>
<Pair single="benefit" id="arcane-scholar-benefit">Choose either <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> or <Link to="/skill/spellcraft">Spellcraft</Link>; you gain a +1 trait bonus on that skill and it is a class skill for you.</Pair>
</Ability>
</>};
const _aspect_of_the_quah = {title: "Aspect of the Quah", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine</Link></p>
<Ability id="aspect-of-the-quah" extraClasses="trait hasSubs" icon={["bolt-eye"]}>
<Pair single id="aspect-of-the-quah">Aspect of the Quah</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/class/hunter">Hunter</Link> or have access to the <em>animal aspect</em> class feature; Shoanti</Pair>
<Pair single="flavor" id="aspect-of-the-quah-flavor">You call upon your quah's totem to grant you power. You gain a unique totem aspect that replaces one of the <em>animal aspects</em> granted to you by the <em>animal focus</em> feature.</Pair>
<Pair single="benefit" id="aspect-of-the-quah-benefit">You must choose the Shoanti quah to which you belong. You gain access to the totem aspect listed for that clan, and you lose access to the animal aspect listed. Once made, this choice cannot be changed.</Pair>
</Ability>
<Ability id="cliff-shadde-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="cliff-shadde-quah">Cliff (Shadde-Quah)</Pair>
<Pair title="Frog Aspect">The creature gains a +4 competence bonus on <Link to="/skill/acrobatics">Acrobatics</Link> checks to avoid falling and on Constitution checks to avoid drowning. This bonus increases to +4 at 8th level and +6 at 15th level.</Pair>
</Ability>
<Ability id="emberstorm-sklar-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="emberstorm-sklar-quah">Emberstorm (Sklar-Quah)</Pair>
<Pair title="Bear Aspect">The creature gains fire <Link to="/umr/resistance">resistance</Link> 5. This increases to fire resistance 10 at 8th level and fire resistance 15 at 15th level.</Pair>
</Ability>
<Ability id="horse-shriikirri-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="horse-shriikirri-quah">Horse (Shriikirri-Quah)</Pair>
<Pair title="Owl Aspect">The creature gains a +4 competence bonus on <Link to="/skill/ride">Ride</Link> checks. This bonus increases to +6 at 8th level and +8 at 15th level.</Pair>
</Ability>
<Ability id="star-lyrune-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="star-lyrune-quah">Star (Lyrune-Quah)</Pair>
<Pair title="Falcon Aspect">The creature gains low-light vision and a +2 competence bonus on <Link to="/skill/perception">Perception</Link> checks. This bonus increases to +4 at 8th level and +6 at 15th level.</Pair>
</Ability>
<Ability id="storm-tamiir-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="storm-tamiir-quah">Storm (Tamiir-Quah)</Pair>
<Pair title="Snake Aspect">The creature gains a +4 bonus on saving throws against cold dangers, disease, heat dangers, starvation, and thirst. This bonus increases to +6 at 8th level and +8 at 15th level.</Pair>
</Ability>
<Ability id="storm-roc-shundar-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="storm-roc-shundar-quah">Storm Roc (Shundar-Quah)</Pair>
<Pair title="Mouse Aspect">The creature gains a +2 enhancement bonus to Charisma. This bonus increases to +4 at 8th level and +6 at 15th level.</Pair>
</Ability>
<Ability id="will-o-wisp-skoan-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="will-o-wisp-skoan-quah">Will-o'-Wisp (Skoan-Quah)</Pair>
<Pair title="Wolf Aspect">The creature gains +2 bonus on saving throws against fear effects and mind-affecting effects. This bonus increases to +4 at 8th level and +6 at 15th level.</Pair>
</Ability>
</>};
const _authoritarian = {title: "Authoritarian", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="authoritarian" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="authoritarian">Authoritarian</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="authoritarian-flavor">You spent much of your youth helping the clergy of your chosen faith perform their duties, and learned from them respect for authority.</Pair>
<Pair single="benefit" id="authoritarian-benefit"><p>As long as you are acting in the service of a liege or leader you recognize as legitimate, you gain a +2 trait bonus on saving throws against fear and compulsion effects.</p>
<p><strong>Suggested Characters:</strong> <Link to="/faith/abadar">Abadarans</Link>, <Link to="/rule/hellknights">Hellknights</Link>, Hermeans.</p>
</Pair>
</Ability>
</>};
const _beacon_of_faith = {title: "Beacon of Faith", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="beacon-of-faith" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="beacon-of-faith">Beacon of Faith</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="beacon-of-faith-flavor">You wield the might of your faith with power and clarity.</Pair>
<Pair single="benefit" id="beacon-of-faith-benefit">Once per day as a <strong className="hl">free action</strong>, you may treat your caster level as if it were 2 levels higher when using one of the granted powers of your domain or inquisition, or when casting one of your domain spells.</Pair>
</Ability>
</>};
const _birthmark = {title: "Birthmark", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="birthmark" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="birthmark">Birthmark</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="birthmark-benefit">You were born with a strange birthmark that looks very similar to the holy symbol of the god you chose to worship later in life. This birthmark can serve you as a divine focus for casting spells, and as a physical manifestation of your faith, and it increases your devotion to your god. You gain a +2 trait bonus on all saving throws against charm and compulsion effects.</Pair>
</Ability>
</>};
const _blessed = {title: "Blessed", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="blessed" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="blessed">Blessed</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="blessed-flavor">Some divine agent watches over you and heeds your call.</Pair>
<Pair single="benefit" id="blessed-benefit">Once per day as a <strong className="hl">swift action</strong>, you gain a +1 trait bonus on all saving throws for 1 round.</Pair>
</Ability>
</>};
const _blessed_touch = {title: "Blessed Touch", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="blessed-touch" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="blessed-touch">Blessed Touch</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="blessed-touch-flavor">You may have been raised in a devout family, studied the divine in a formal church environment, or even learned how to combine traditional healing techniques with those of divine casters. In so doing, you have focused yourself into being the perfect vessel for your deity. Divine power flows through you like a mountain stream, making your healing touch more potent than that of others.</Pair>
<Pair single="benefit" id="blessed-touch-benefit">You heal 1 additional point of damage when using <Link to="/ability/lay_on_hands">lay on hands</Link>, <Link to="/ability/channel_energy">channeling energy</Link>, or casting a <Link to="/main/cure_spell">cure spell</Link>.</Pair>
</Ability>
</>};
const _born_free = {title: "Born Free", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link></p>
<Ability id="born-free" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="born-free">Born Free</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="born-free-flavor">You were introduced to an individualistic belief as a youth. Thriving under the promise of control of your own destiny, you soon began to demonstrate the truth of this ideal. Though others may mock you for your unwillingness to go along with a group or accept the easy security and comfort promised by more ecclesiastical faiths, you know that the revelations and destiny you seek can only be brought about through your own actions and individual search for meaning.</Pair>
<Pair single="benefit" id="born-free-benefit">Once per day, after you roll a saving throw against a compulsion effect, you can choose to roll again as an <strong className="hl">immediate action</strong> before the result of the saving throw is announced. You must keep the new roll, even if it is worse.</Pair>
</Ability>
</>};
const _bound_by_honor = {title: "Bound by Honor", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link></p>
<Ability id="bound-by-honor" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="bound-by-honor">Bound by Honor</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="bound-by-honor-flavor">Your code of honor, obligations, and taboos stem from the shame of a misspent youth. Now, a personal code reminds you how to live, and you have an impressive ability to resist temptation.</Pair>
<Pair single="benefit" id="bound-by-honor-benefit">Once per day, if a mind-affecting effect would compel you to take an action that would cause you to lose <Link to="/rule/honor_points">Honor Points</Link>, you may make a new saving throw against the original DC to end the effect.</Pair>
</Ability>
</>};
const _called = {title: "Called", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="called" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="called">Called</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="called-flavor">Your deity or a powerful spirit spoke to you when you were young, dropping cryptic hints about the important destiny that lay before you and how you must win your fights if you are to achieve your predetermined greatness.</Pair>
<Pair single="benefit" id="called-benefit"><p>Once per day upon rolling a natural 1 on an attack roll, you may reroll the die and take the second result instead.</p>
<p><strong>Suggested Characters:</strong> Oracles, paladins, Ulfen.</p>
</Pair>
</Ability>
</>};
const _canon_of_coin = {title: "Canon of Coin", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/merchants_manifest">Merchant's Manifest</Link></p>
<Ability id="canon-of-coin" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="canon-of-coin">Canon of Coin</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="canon-of-coin-flavor">You find the pursuit of earning money to be a religious experience.</Pair>
<Pair single="benefit" id="canon-of-coin-benefit"><Link to="/skill/appraise">Appraise</Link> is a class skill for you. So long as you are carrying coins worth an amount equal to at least 100 gp per character level you have, you gain a +1 trait bonus on Will saves. This bonus increases to +2 against effects that would force you to discard, drop, or give away coins, gems, or trade goods in your possession.</Pair>
</Ability>
</>};
const _caretaker = {title: "Caretaker", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="caretaker" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="caretaker">Caretaker</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="caretaker-flavor">As the child of an herbalist or an assistant in a temple infirmary, you often had to assist in tending to the sick and wounded.</Pair>
<Pair single="benefit" id="caretaker-benefit">You gain a +1 trait bonus on <Link to="/skill/heal">Heal</Link> checks, and Heal is always a class skill for you.</Pair>
</Ability>
</>};
const _child_of_the_temple = {title: "Child of the Temple", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="child-of-the-temple" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="child-of-the-temple">Child of the Temple</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="child-of-the-temple-flavor">You have long served at a temple in a city, where you picked up on many of the nobility's customs in addition to spending much time in the temple libraries studying your faith.</Pair>
<Pair single="benefit" id="child-of-the-temple-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> and <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
</>};
const _chosen_of_iomedae = {title: "Chosen of Iomedae", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="chosen-of-iomedae" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="chosen-of-iomedae">Chosen of Iomedae</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="chosen-of-iomedae-flavor">At your birth, your parents dedicated your soul to <Link to="/faith/iomedae">Iomedae</Link> to mold into a sword of her light. The goddess blessed you, granting you a gift of light to brighten your path through darkness and a fine sword with which to spread her will.</Pair>
<Pair single="benefit" id="chosen-of-iomedae-benefit">You may cast <Link to="/spell/light">light</Link> once per day as a spell-like ability (caster level 1st), and you begin play with a <Link to="/rule/masterwork_w">masterwork</Link> <Link to="/eq-weapon/longsword">longsword</Link>. In addition, whenever <em>light</em> is cast upon this sword, the radius of light and its duration is doubled.</Pair>
</Ability>
</>};
const _covert_channeler = {title: "Covert Channeler", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/black_markets">Black Markets</Link></p>
<Ability id="covert-channeler" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="covert-channeler">Covert Channeler</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="covert-channeler-flavor">Your mentor in the <Link to="/rule/wagons_of_light">Wagons of Light</Link> taught you to hide holy symbols quickly.</Pair>
<Pair single="benefit" id="covert-channeler-benefit">You can draw or stow a holy symbol as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
</>};
const _crisis_of_faith = {title: "Crisis of Faith", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link></p>
<Ability id="crisis-of-faith" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="crisis-of-faith">Crisis of Faith</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="crisis-of-faith-flavor">You were raised to uphold a specific set of tenets, and you never had reason to doubt their veracity. Recent events, however, have undermined that certainty, and you now find yourself wondering if any of the universal truths you once believed in can actually hold up to scrutiny. Perhaps you witnessed a mentor or church official fall from grace or violate your shared tenets. Maybe you watched a friend injured terribly despite (or because of) her pure faith. Whatever the case, your confidence was shaken.</Pair>
<Pair single="benefit" id="crisis-of-faith-benefit"><p>Your shaken confidence grants you a +1 trait bonus on saving throws against illusions.</p>
<p>You may replace any other faith trait with the Crisis of Faith trait whenever you gain a level. This replacement is permanent until you receive <Link to="/spell/atonement">atonement</Link>.</p>
</Pair>
</Ability>
</>};
const _crusader = {title: "Crusader", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="crusader" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="crusader">Crusader</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="crusader-flavor">From studying "Prime Commander" and reading accounts of the battles in the Worldwound, you have trained to be a crusader against demonic forces.</Pair>
<Pair single="benefit" id="crusader-benefit">You gain a +1 trait bonus on attack rolls against outsiders with the chaotic subtype.</Pair>
</Ability>
</>};
const _darkest_before_dawn = {title: "Darkest Before Dawn", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="darkest-before-dawn" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="darkest-before-dawn">Darkest Before Dawn</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="darkest-before-dawn-flavor">Your devotion sustains you when others would fall to despair.</Pair>
<Pair single="benefit" id="darkest-before-dawn-benefit">You gain a +2 trait bonus on saving throws against spells with the emotion, fear, or pain descriptor. Once per day, you can increase this bonus to +4 for a single save, but you must make this decision before you attempt the saving throw.</Pair>
</Ability>
</>};
const _deep_faith = {title: "Deep Faith", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link></p>
<Ability id="deep-faith" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="deep-faith">Deep Faith</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="deep-faith-flavor">Your deity was born of the depths, and you're a child of such realms.</Pair>
<Pair single="benefit" id="deep-faith-benefit">Whenever you cast a spell granted by the <Link to="/domain/earth">earth</Link> domain (or associated subdomains) while in the Darklands, that spell functions at 1 caster level higher than your actual caster level.</Pair>
</Ability>
</>};
const _defy_madness = {title: "Defy Madness", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="defy-madness" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="defy-madness">Defy Madness</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/old_cults">Old Cults</Link></Pair>
<Pair single="flavor" id="defy-madness-flavor">Your direct involvement with supernatural and alien forces has left you less vulnerable to the insanity they cause.</Pair>
<Pair single="benefit" id="defy-madness-benefit">You gain a +1 trait bonus on any saving throws against confusion, insanity, madness, and <Link to="/rule/wisdom_damage">Wisdom damage and drain</Link>.</Pair>
</Ability>
</>};
const _devoted_healer = {title: "Devoted Healer", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="devoted-healer" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="devoted-healer">Devoted Healer</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="devoted-healer-flavor">Raised in the company of skilled healers, you were always encouraged to devote your time and energy to the welfare of others.</Pair>
<Pair single="benefit" id="devoted-healer-benefit"><p>Whenever you take 20 on a <Link to="/skill/heal">Heal</Link> check to treat deadly wounds, you restore an additional 1d4 hit points to those you aid.</p>
<p><strong>Suggested Characters:</strong> Battle clerics, <Link to="/faith/iomedae">Iomedaeans</Link>, Kellids.</p>
</Pair>
</Ability>
</>};
const _devotee_of_the_green = {title: "Devotee of the Green", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="devotee-of-the-green" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="devotee-of-the-green">Devotee of the Green</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="devotee-of-the-green-flavor">Your faith in the natural world or one of the gods of nature makes it easy for you to pick up on related concepts.</Pair>
<Pair single="benefit" id="devotee-of-the-green-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> and <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
</>};
const _devout_visionary = {title: "Devout Visionary", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link></p>
<Ability id="devout-visionary" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="devout-visionary">Devout Visionary</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="devout-visionary-flavor">As a child, you had a strange vision while suffering from a terrible illness, and only found your way back to the mundane world by following the call of a spiritual leader-perhaps a shaman's drum or a druid's lilting poetry. Since then, you have studied symbolism and dreams in the hope that you might understand your own vision, though your lessons prove just as helpful to others.</Pair>
<Pair single="benefit" id="devout-visionary-benefit">You gain a +1 trait bonus on Will saving throws against spells and effects that grant the <Link to="/misc/confused">confused</Link> or <Link to="/misc/dazed">dazed</Link> condition. Once per day as a <strong className="hl">full-round action</strong>, you may grant an adjacent ally a new Will saving throw to end an effect that grants the confused or dazed condition.</Pair>
</Ability>
</>};
const _disdainful_defender = {title: "Disdainful Defender", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="disdainful-defender" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="disdainful-defender">Disdainful Defender</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="disdainful-defender-flavor">You are resistant to the magic of other faiths.</Pair>
<Pair single="benefit" id="disdainful-defender-benefit">You gain a +2 trait bonus on all Will saves you attempt against divine spells. This bonus does not apply against divine spells cast by a caster who worships the same deity you do.</Pair>
</Ability>
</>};
const _divine_confidante = {title: "Divine Confidante", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="divine-confidante" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="divine-confidante">Divine Confidante</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="divine-confidante-flavor">You were inspired with the reverence offered by worshipers to priests and other spiritual leaders, so you assisted them.</Pair>
<Pair single="benefit" id="divine-confidante-benefit">You gain a +3 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks to get hunches about those who discuss matters of faith, mythology, morality, religion, or the Outer Planes with you. Sense Motive is a class skill for you.</Pair>
</Ability>
</>};
const _divine_denier = {title: "Divine Denier", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link></p>
<Ability id="divine-denier" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="divine-denier">Divine Denier</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="divine-denier-flavor">You can't bring yourself to accept the authority of the gods, even though friends might hound you relentlessly to change your ways. Perhaps you're a Rahadoumi objecting on ideological grounds, or perhaps you just want to be left alone. Your doubt causes you to shrug off divine magic more quickly than others.</Pair>
<Pair single="benefit" id="divine-denier-benefit">Once per day when you are affected by a divine spell, you may reduce that spell's duration to half (minimum 1 round) for you alone.</Pair>
</Ability>
</>};
const _dogged = {title: "Dogged", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine</Link></p>
<Ability id="dogged" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="dogged">Dogged</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="dogged-flavor">Drawing inspiration from the Cult of the Failed, you refuse to let setbacks stop you, no matter how disastrous.</Pair>
<Pair single="benefit" id="dogged-benefit">Once per day when you roll a natural 1 on an attack roll, saving throw, skill check, or ability check, you gain a +1 trait bonus on any one roll you attempt before the end of the next round.</Pair>
</Ability>
</>};
const _earthbound = {title: "Earthbound", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/dwarves_of_golarion">Dwarves of Golarion</Link></p>
<Ability id="earthbound" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="earthbound">Earthbound</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/dwarf">Dwarf</Link></Pair>
<Pair single="benefit" id="earthbound-benefit">Your druid spells use a handful of earth or sand as a divine focus in addition to the normal components. While you are touching the ground, you add a +2 trait bonus to saving throw DCs and on caster level checks to overcome spell resistance for all spells you cast against creatures with the <Link to="/subtype/air">air</Link> subtype.</Pair>
</Ability>
</>};
const _ease_of_faith = {title: "Ease of Faith", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="ease-of-faith" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="ease-of-faith">Ease of Faith</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="ease-of-faith-flavor">Your mentor, the person who invested your faith in you from an early age, took steps to ensure you understood that what powers your divine magic is no different from that which powers the magic of other religions. This philosophy makes it easier for you to interact with others who may not share your views.</Pair>
<Pair single="benefit" id="ease-of-faith-benefit">You gain a +1 bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks, and Diplomacy is always a class skill for you.</Pair>
</Ability>
</>};
const _eldritch_smith = {title: "Eldritch Smith", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/dwarves_of_golarion">Dwarves of Golarion</Link></p>
<Ability id="eldritch-smith" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="eldritch-smith">Eldritch Smith</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/dwarf">Dwarf</Link></Pair>
<Pair single="flavor" id="eldritch-smith-flavor">You are learned in the secret lore of the forge, rituals handed down for generations that some say come from <Link to="/faith/torag">Torag</Link> himself.</Pair>
<Pair single="benefit" id="eldritch-smith-benefit">Whenever you use the <Link to="/skill/craft">Craft</Link> skill or a crafting feat to make a stone or metal item, you reduce the cost of making the item by 5%. This includes metal-headed weapons with nonmetal parts, such as axes and spears.</Pair>
</Ability>
</>};
const _empyreal_pantheon = {title: "Empyreal Pantheon", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/distant_shores">Distant Shores</Link></p>
<Ability id="empyreal-pantheon" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="empyreal-pantheon">Empyreal Pantheon</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="empyreal-pantheon-flavor">Your faith in the empyreal lords accommodates numerous gods, and you are gifted at adapting their wide variety of focuses and lessons to your own life.</Pair>
<Pair single="benefit" id="empyreal-pantheon-benefit">Select either the law or chaos alignment descriptor. You may cast spells with that descriptor, even if your alignment or that of your god would normally not allow it. Doing so applies the good descriptor to the spell if it does not already apply.</Pair>
</Ability>
</>};
const _exalted_of_the_society = {title: "Exalted of the Society", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link>, <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="exalted-of-the-society" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="exalted-of-the-society">Exalted of the Society</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="exalted-of-the-society-flavor">The vaults of the Grand Lodge in Absalom contain many secrets of the divine powers of the gods, and you have studied your deity extensively.</Pair>
<Pair single="benefit" id="exalted-of-the-society-benefit">You may <Link to="/ability/channel_energy">channel energy</Link> one additional time per day.</Pair>
</Ability>
</>};
const _eye_for_the_wondrous = {title: "Eye for the Wondrous", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2</Link></p>
<Ability id="eye-for-the-wondrous" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="eye-for-the-wondrous">Eye for the Wondrous</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Region" hl>Katapesh</Pair>
<Pair single="flavor" id="eye-for-the-wondrous-flavor">Your experience with magic items clues you in to their properties more quickly than others.</Pair>
<Pair single="benefit" id="eye-for-the-wondrous-benefit">You can identify the properties of a magic item using <Link to="/spell/detect_magic">detect magic</Link> in 1 round.</Pair>
</Ability>
</>};
const _faithful_feedback = {title: "Faithful Feedback", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="faithful-feedback" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="faithful-feedback">Faithful Feedback</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Must have a religion</Pair>
<Pair single="flavor" id="faithful-feedback-flavor">A shared religious fervor makes your healing magic more effective.</Pair>
<Pair single="benefit" id="faithful-feedback-benefit">Whenever you cast a spell belonging to the healing subschool on someone of your religion, increase the hit points healed by +1.</Pair>
</Ability>
</>};
const _fates_favored = {title: "Fate's Favored", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="fates-favored" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="fates-favored">Fate's Favored</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="fates-favored-flavor">The fates watch over you.</Pair>
<Pair single="benefit" id="fates-favored-benefit">Whenever you are under the effect of a luck bonus of any kind, that bonus increases by 1.</Pair>
</Ability>
</>};
const _fearless_defiance = {title: "Fearless Defiance", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="fearless-defiance" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="fearless-defiance">Fearless Defiance</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="fearless-defiance-flavor">Upon overcoming your fear, you become a scourge to your enemies.</Pair>
<Pair single="benefit" id="fearless-defiance-benefit">You gain a +1 trait bonus on all saving throws against fear effects. In addition, if you successfully save against such an effect, you receive a +1 trait bonus on attack rolls against your <Link to="/ability/favored_enemies">favored enemies</Link> for 1 round.</Pair>
</Ability>
</>};
const _first_memories = {title: "First Memories", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link></p>
<Ability id="first-memories" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="first-memories">First Memories</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link> with the <em>gnome magic</em> racial trait</Pair>
<Pair single="flavor" id="first-memories-flavor">For your whole life, you've felt there was a world just beyond the fabric of the material objects around you, and sometimes you can hear the north wind calling you or smell the dread taint of polluted water before you taste it.</Pair>
<Pair single="benefit" id="first-memories-benefit">You do not gain the normal list of spell-like abilities for the <em>gnome magic</em> racial trait. Instead, if you have a Wisdom of 11 of higher, you gain the following spell-like abilities: 1/day-<Link to="/spell/detect_poison">detect poison</Link>, <Link to="/spell/know_direction">know direction</Link>, <Link to="/spell/stabilize">stabilize</Link>, and <Link to="/spell/speak_with_animals">speak with animals</Link>. The caster level for these effects is equal to your character level. The DC for these spells is equal to 10 + the spell's level + your Wisdom modifier.</Pair>
</Ability>
</>};
const _focused_disciple = {title: "Focused Disciple", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="focused-disciple" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="focused-disciple">Focused Disciple</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="focused-disciple-flavor">When weaker wills falter, you keep a clear mind.</Pair>
<Pair single="benefit" id="focused-disciple-benefit">You gain a +2 trait bonus on saving throws against charm and compulsion effects.</Pair>
</Ability>
</>};
const _godclaw_disciple = {title: "Godclaw Disciple", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight</Link></p>
<Ability id="godclaw-disciple" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="godclaw-disciple">Godclaw Disciple</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="godclaw-disciple-flavor">You worship the amalgamation of lawful deities known as <Link to="/main/the_godclaw">faiths_pantheon</Link>.</Pair>
<Pair single="benefit" id="godclaw-disciple-benefit">You gain a +2 trait bonus on <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks related to lawful deities, their clergy, their mythology, and their tenets. Additionally, Knowledge (religion) is a class skill for you.</Pair>
</Ability>
</>};
const _greater_adept_of_the_society = {title: "Greater Adept of the Society", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link>, <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="greater-adept-of-the-society" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="greater-adept-of-the-society">Greater Adept of the Society</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="greater-adept-of-the-society-flavor">Months of meditation and practice with the greatest spellcasters of the Society have given you an increased capacity for arcane knowledge.</Pair>
<Pair single="benefit" id="greater-adept-of-the-society-benefit">You gain one additional 0-level spell slot.</Pair>
</Ability>
</>};
const _havoc_of_the_society = {title: "Havoc of the Society", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link>, <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="havoc-of-the-society" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="havoc-of-the-society">Havoc of the Society</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="havoc-of-the-society-flavor">Through countless hours studying vast libraries of arcane power, you have learned how to cause greater damage to your foes.</Pair>
<Pair single="benefit" id="havoc-of-the-society-benefit">Whenever you cast a spell that deals damage, you gain a +1 trait bonus to the total damage dealt. This damage is considered force damage regardless of the type of damage dealt by the spell.</Pair>
</Ability>
</>};
const _heedful_readiness = {title: "Heedful Readiness", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="heedful-readiness" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="heedful-readiness">Heedful Readiness</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="heedful-readiness-flavor">Your years of meditation and mindfulness allow you to act correctly on a moment's notice.</Pair>
<Pair single="benefit" id="heedful-readiness-benefit">Once per day, you can add your Wisdom modifier to an initiative check.</Pair>
</Ability>
</>};
const _hellknight_inquisitor = {title: "Hellknight Inquisitor", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight</Link></p>
<Ability id="hellknight-inquisitor" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="hellknight-inquisitor">Hellknight Inquisitor</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="hellknight-inquisitor-benefit">If you are an inquisitor, you can select any <Link to="/ability/inquisitions">inquisition</Link> associated with your preferred <Link to="/rule/hellknights">Hellknight</Link> order, as long as you and your patron deity are of a lawful alignment. Additionally, you gain a +1 trait bonus on saving throws against spells and effects with the chaos descriptor.</Pair>
</Ability>
</>};
const _heretics_caution = {title: "Heretic's Caution", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine</Link></p>
<Ability id="heretics-caution" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="heretics-caution">Heretic's Caution</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="heretics-caution-flavor">You were raised in a faith that did not center on a traditional god or that followed a heretical interpretation of a traditional deity. You learned to deflect attention, especially from ecclesiastical figures.</Pair>
<Pair single="benefit" id="heretics-caution-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks. This bonus increases to +3 on Bluff checks opposed by religious authorities' Sense Motive checks.</Pair>
</Ability>
</>};
const _hidden_faith = {title: "Hidden Faith", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="hidden-faith" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="hidden-faith">Hidden Faith</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="hidden-faith-flavor">You were raised in a religion forbidden by your government, and draw strength from your hidden faith.</Pair>
<Pair single="benefit" id="hidden-faith-benefit">You gain a +1 trait bonus on saving throws against the divine spells of creatures that worship a god other than your own.</Pair>
</Ability>
</>};
const _history_of_heresy = {title: "History of Heresy", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="history-of-heresy" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="history-of-heresy">History of Heresy</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="history-of-heresy-flavor">You were raised with heretical views that have made it difficult for you to accept most religious beliefs and often caused you or those you love to be treated as pariahs. As a result, you have turned your back on religious teachings.</Pair>
<Pair single="benefit" id="history-of-heresy-benefit">As long as you do not possess any levels in a class that grants divine spellcasting power, you gain a +1 trait bonus on all saving throws against divine spells.</Pair>
</Ability>
</>};
const _honest = {title: "Honest", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="honest" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="honest">Honest</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="honest-flavor">A religious mentor instilled in you a sense of uncompromising integrity. You often speak your mind in defiance of any fear or hatred it might earn you, a habit that inspires others to trust you.</Pair>
<Pair single="benefit" id="honest-benefit"><p>You gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks. This bonus increases to +2 when the Diplomacy check is made to influence those who are already friendly or helpful toward you.</p>
<p><strong>Suggested Characters:</strong> <Link to="/pclass/diabolist">Diabolists</Link>, paladins, <Link to="/faith/sarenrae">Sarenrae</Link> worshipers.</p>
</Pair>
</Ability>
</>};
const _imperfect_recall = {title: "Imperfect Recall", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine</Link></p>
<Ability id="imperfect-recall" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="imperfect-recall">Imperfect Recall</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="imperfect-recall-flavor">Your belief in reincarnation, as taught by the Sangpotshi philosophy and in lands that were once Imperial Lung Wa, has been reinforced by personal experience. In moments of great stress, you sometimes experience flashes of deja vu in which you recall information you don't remember ever having known.</Pair>
<Pair single="benefit" id="imperfect-recall-benefit">Once per day while you are in danger or distracted, you gain a +3 bonus on a single <Link to="/skill/knowledge">Knowledge</Link> skill check.</Pair>
</Ability>
</>};
const _indomitable_faith = {title: "Indomitable Faith", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="indomitable-faith" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="indomitable-faith">Indomitable Faith</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="indomitable-faith-flavor">You were born in a region where your faith was not popular, but you still have never abandoned it. Your constant struggle to maintain your own faith has bolstered your drive.</Pair>
<Pair single="benefit" id="indomitable-faith-benefit">You gain a +1 trait bonus on Will saves.</Pair>
</Ability>
</>};
const _inhabitant_of_illusion = {title: "Inhabitant of Illusion", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link></p>
<Ability id="inhabitant-of-illusion" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="inhabitant-of-illusion">Inhabitant of Illusion</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Region" hl>Kyonin</Pair>
<Pair title="Requirements" hl>Ascoiated with the court of Kyonin</Pair>
<Pair single="flavor" id="inhabitant-of-illusion-flavor">Your experience with illusions allows you to discern them easily.</Pair>
<Pair single="benefit" id="inhabitant-of-illusion-benefit">When you first encounter an illusion, you can attempt a Will saving throw with a -2 penalty to disbelieve it, even if you don't suspect the illusion. The GM rolls this saving throw in secret.</Pair>
</Ability>
</>};
const _inspired = {title: "Inspired", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="inspired" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="inspired">Inspired</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="inspired-flavor">A positive force, philosophy, or divine presence fills you with hope, and is a guiding force of inspiration.</Pair>
<Pair single="benefit" id="inspired-benefit">Once per day as a <strong className="hl">free action</strong>, roll twice and take the better result on a skill check or ability check.</Pair>
</Ability>
</>};
const _irrepressible = {title: "Irrepressible", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="irrepressible" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="irrepressible">Irrepressible</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="irrepressible-flavor">Your hope for a brighter future blessed by the gods, combined with your powerful personality, allows you to force your way free of spells that cloud the mind.</Pair>
<Pair single="benefit" id="irrepressible-benefit"><p>You can use your Charisma modifier in place of your Wisdom modifier when attempting Will saving throws against charm and compulsion effects.</p>
<p><strong>Suggested Characters:</strong> <Link to="/race/gnome">Gnomes</Link>, Keleshites, <Link to="/faith/shelyn">Shelyn</Link> worshipers.</p>
</Pair>
</Ability>
</>};
const _irreverent = {title: "Irreverent", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="irreverent" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="irreverent">Irreverent</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="irreverent-flavor">You are suspicious of those who lead spiritual lives and are quick to seek out the smallest hypocrisy in even the most pious individuals. Of course, you are also keenly aware of the power the faithful can draw from their worship, and you are stubbornly resistant to it.</Pair>
<Pair single="benefit" id="irreverent-benefit">You gain a +2 trait bonus on saving throws against divine spells that target only you.</Pair>
</Ability>
</>};
const _jinx_eater = {title: "Jinx Eater", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast</Link></p>
<Ability id="jinx-eater" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="jinx-eater">Jinx Eater</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Region" hl>The Shackles</Pair>
<Pair title="Requirements" hl><Link to="/race/tengu">Tengu</Link></Pair>
<Pair single="benefit" id="jinx-eater-benefit">Your presence dampens curses and other ill effects. You gain a +1 trait bonus on saves against curses, including the hex class ability of shamans and witches. Once per day, you can grant this bonus to all allies within 30 feet for 1 round as an immediate action.</Pair>
</Ability>
</>};
const _kalistocratic_prophecy = {title: "Kalistocratic Prophecy", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="kalistocratic-prophecy" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="kalistocratic-prophecy">Kalistocratic Prophecy</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="kalistocratic-prophecy-benefit">You were raised under the <Link to="/rule/prophecies_of_kalistrade">Prophecies of Kalistrade</Link>, and were inspired to seize upon an untapped business opportunity. Up to once per week, when you work to advance this opportunity with at least 1 day of effort, you can attempt an appropriate Profession check to earn money or gain capital using the downtime rules with a +2 trait bonus. In the event of a failed check, your opportunity is discovered by rivals and you cannot employ this trait for 1 month while you look for a new opportunity.</Pair>
</Ability>
</>};
const _light_in_the_darkness = {title: "Light in the Darkness", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link></p>
<Ability id="light-in-the-darkness" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="light-in-the-darkness">Light in the Darkness</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="light-in-the-darkness-benefit">You're destined to bring light to the darkness and expunge the faithless from the deep. Whenever you cast a spell granted by the <Link to="/domain/sun">sun</Link> domain (or associated subdomains) while in the Darklands, the spell functions at 1 caster level higher than your actual caster level.</Pair>
</Ability>
</>};
const _loyalty_across_lifetimes = {title: "Loyalty across Lifetimes", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="loyalty-across-lifetimes" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="loyalty-across-lifetimes">Loyalty across Lifetimes</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="loyalty-across-lifetimes-benefit">You and your eidolon share a link that seems to span multiple lifetimes. Your eidolon treats its Constitution score as if it were 2 points higher for the purposes of determining when its negative hit point total sends it back to its home plane. In addition, your eidolon gains a +1 trait bonus on Will saves against enchantment spells and effects.</Pair>
</Ability>
</>};
const _lucid_dreamer = {title: "Lucid Dreamer", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="lucid-dreamer" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="lucid-dreamer">Lucid Dreamer</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Varisian wanderers or Wonderseekers</Pair>
<Pair single="benefit" id="lucid-dreamer-benefit">Your dreams are a special place of power that only you get to enjoy; driving away threats to your subconscious is as easy as slamming a door. You receive a +1 trait bonus on Knowledge (planes) checks and a +2 trait bonus on Will saves against effects on your dreaming mind or subconscious, such as a night hag's dream haunting ability, the nightmare spell, and illusions of the phantasm subschool.</Pair>
</Ability>
</>};
const _martial_manuscript = {title: "Martial Manuscript", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="martial-manuscript" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="martial-manuscript">Martial Manuscript</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="martial-manuscript-benefit">You either carry or have memorized a sacred text from your school, temple, or monastery, and its wisdom gives you insight that makes your attacks more devastating. You gain a +2 trait bonus on rolls to confirm critical hits when you're using an unarmed strike or monk weapon.</Pair>
</Ability>
</>};
const _masked = {title: "Masked", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="masked" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="masked">Masked</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="masked-benefit">You learned from "Prime Conspirator" that keeping secrets often means hiding your true identity. Once per day, when attempting a Disguise check, roll twice and take the better result.</Pair>
</Ability>
</>};
const _meditative_rest = {title: "Meditative Rest", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="meditative-rest" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="meditative-rest">Meditative Rest</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="meditative-rest-benefit">When you rest, you ignore the first time you are interrupted during that rest for the purposes of determining how long you need to rest in full to regain the capacity to regain spells, provided the interruption lasts no more than 15 minutes. If you cast spells during this interruption, you don't count these against your daily limit of spells when you wake and prepare spells.</Pair>
</Ability>
</>};
const _monastic = {title: "Monastic", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link></p>
<Ability id="monastic" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="monastic">Monastic</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="monastic-benefit">Either your parents sent you to be raised in a monastery, or you traveled there yourself later in life in order to escape the conflict and distractions of the greater world. There you learned to eschew the material concerns that plague so many and cloud their minds, instead embracing an ascetic lifestyle. You readily let go and step away from trouble, free from any tie or baggage that might slow your path to enlightenment-figuratively or literally. Once per day as a swift action, you gain a +1 trait bonus to Armor Class as long as you are wearing no armor, not using a shield, carrying a light load, and have nothing in your hands. This bonus lasts for 1 minute.</Pair>
</Ability>
</>};
const _mystery_initiate = {title: "Mystery Initiate", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="mystery-initiate" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="mystery-initiate">Mystery Initiate</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="mystery-initiate-benefit"><p>You were initiated into a mystery cult in your youth, and learned secrets that turned your understanding of your faith and the world on its head. This experience has given you a knack for lateral thinking. Once per day, you may reroll any Knowledge skill check. You must decide to use this ability after the first roll is made but before the results are revealed. You must take the second result, even if it is worse.</p>
<p><strong>Suggested Characters:</strong> <Link to="/pclass/mystery_cultist">Mystery cultists</Link>, <Link to="/faith/nethys">Nethys</Link> worshipers, <Link to="/faith/norgorber">Norgorber</Link> worshipers.</p>
</Pair>
</Ability>
</>};
const _natural_ritualist = {title: "Natural Ritualist", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine</Link></p>
<Ability id="natural-ritualist" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="natural-ritualist">Natural Ritualist</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="natural-ritualist-benefit">You venerate nature, either by paying homage to your Shoanti totem spirit or by appeasing the kami around you in accordance with Tamashigo. In return, the spirits bless your path. Once per week, you can build a small shrine of natural materials and pay your respects in a ritual that takes 15 minutes. Spellcasters can do this as part of their daily spell preparation. You gain a +2 trait bonus on Knowledge (nature) and Survival checks for 24 hours.</Pair>
</Ability>
</>};
const _naturally_gifted = {title: "Naturally Gifted", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link></p>
<Ability id="naturally-gifted" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="naturally-gifted">Naturally Gifted</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="benefit" id="naturally-gifted-benefit">For unknown reasons, you have deeper reserves of magical energy than those around you. Perhaps you are descended from a family of powerful arcane casters, or maybe you believe this trait marks you as destined for magical greatness. Wherever the truth lies, you gain an additional use of one of your gnome magic spell-like abilities each day. This does not always have to be the same spell-like ability - one day you might use <Link to="/spell/dancing_lights">dancing lights</Link> twice, only to use the additional casting for <Link to="/spell/speak_with_animals">speak with animals</Link> the next day.</Pair>
</Ability>
</>};
const _nature_worshiper = {title: "Nature Worshiper", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link></p>
<Ability id="nature-worshiper" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="nature-worshiper">Nature Worshiper</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="nature-worshiper-benefit">When you were young, you saw a dead creature's body fertilize a field. Witnessing the connection between life and death moved you to recognize your own connection with the world, and ever since you have revered nature and feared death less. You gain a +1 trait bonus on saving throws against death effects and effects that use negative energy, such as energy drain and <Link to="/main/inflict_spells">inflict spells</Link>.</Pair>
</Ability>
</>};
const _necrotic_aura = {title: "Necrotic Aura", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="necrotic-aura" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="necrotic-aura">Necrotic Aura</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/whispering_way">Whispering Way</Link></Pair>
<Pair single="benefit" id="necrotic-aura-benefit">Your exposure to the necromantic arts has strengthened your defenses against its vile rot. You gain a +1 trait bonus on saving throws against spells from the necromancy school or any effect that deals negative energy damage.</Pair>
</Ability>
</>};
const _oathbound = {title: "Oathbound", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="oathbound" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="oathbound">Oathbound</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="oathbound-benefit">You have made a solemn oath, and you pursue that oath with headstrong determination. Once per day, you may reroll a saving throw against a charm or compulsion effect. You must take the second result even if it is worse.</Pair>
</Ability>
</>};
const _omen = {title: "Omen", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="omen" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="omen">Omen</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="omen-benefit">You are the harbinger of some future event. Whether this event bodes good or ill, you exude an ominous presence. You gain a +1 trait bonus on Intimidate checks, and Intimidate is always a class skill for you. Once per day, you may attempt to demoralize an opponent as a swift action.</Pair>
</Ability>
</>};
const _pact_servant = {title: "Pact Servant", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/distant_shores">Distant Shores</Link></p>
<Ability id="pact-servant" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="pact-servant">Pact Servant</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="pact-servant-benefit">The faith of Holomog focuses on finding the good in unusual places and appreciating the nuances of virtue in the world. You may treat Asmodeus as if he were a lawful neutral deity for the purposes of determining your own alignment as a cleric, inquisitor, or other divine spellcaster. You may not select the evil domain unless your own alignment also contains an evil aspect.</Pair>
</Ability>
</>};
const _patient_calm = {title: "Patient Calm", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="patient-calm" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="patient-calm">Patient Calm</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="patient-calm-benefit"><p>As a child, you struggled to suppress a sharp temper, but the care and patient respect of a trusted community leader rubbed off on you. As you grew older, you developed a remarkable ability to keep calm and collected when performing a task you are familiar with. Choose one Craft or Profession skill. Whenever you take 10 with that skill, determine the result as if you had rolled a 12 instead of a 10.</p>
<p><strong>Suggested Characters:</strong> <Link to="/faith/asmodeus">Asmodeans</Link>, Drumans, <Link to="/faith/irori">Irorans</Link>.</p>
</Pair>
</Ability>
</>};
const _perpetual_companion = {title: "Perpetual Companion", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="perpetual-companion" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="perpetual-companion">Perpetual Companion</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="perpetual-companion-benefit">You are bolstered against fear when your eidolon is near. You gain a +2 trait bonus on all saving throws against fear effects whenever your eidolon is within 30 feet.</Pair>
</Ability>
</>};
const _persuasive_insight = {title: "Persuasive Insight", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="persuasive-insight" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="persuasive-insight">Persuasive Insight</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="persuasive-insight-benefit">You were converted to your faith or taught to bargain with spirits for magic by a figure of inspiring insight who taught you to use keen observation in all dealings. You can use your Wisdom modifier in place of your Charisma modifier on Diplomacy checks to ask favors or gain influence. During a verbal duel, you can use your Wisdom modifier in place of your Charisma modifier when using tactics you assigned to Diplomacy or Wisdom-based skills.</Pair>
</Ability>
</>};
const _planar_savant = {title: "Planar Savant", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="planar-savant" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="planar-savant">Planar Savant</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="planar-savant-benefit">You have always had an innate sense of the workings of the planes and their denizens. You may use your Charisma modifier when making Knowledge (planes) checks instead of your Intelligence modifier.</Pair>
</Ability>
</>};
const _priest_blessed = {title: "Priest-Blessed", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link></p>
<Ability id="priest-blessed" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="priest-blessed">Priest-Blessed</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="priest-blessed-benefit">You were guided to maturity by a trusted priest of an ecclesiastical tradition, who inspired you and made you understand that the authority exerted by a religious hierarchy is a blessing rather than a restriction, allowing the faithful to always feel confident in their direction and the righteousness of the guided actions. Now, your faith wells up whenever you are aided by divine magic, and you find it easy to open up to the magic and succor of any faith, seeing the similarities between all such traditions. Three times per day when you are the target of a harmless divine spell, you may increase its caster level by 1 for purposes of its effect on you alone.</Pair>
</Ability>
</>};
const _principled = {title: "Principled", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="principled" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="principled">Principled</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="principled-benefit">You hold yourself to a strict code of behavior that guides all of your decisions and actions. You take a -2 penalty on Bluff checks and gain a +2 trait bonus on saving throws against charm, compulsion, and emotion effects.</Pair>
</Ability>
</>};
const _prophesied = {title: "Prophesied", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="prophesied" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="prophesied">Prophesied</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="prophesied-benefit">Your coming was foretold in prophecy, and people familiar with your legend regard you with awe and fear. You gain a +1 trait bonus on Diplomacy checks and Intimidate checks when interacting with anyone familiar with you or your reputation.</Pair>
</Ability>
</>};
const _proxy_of_many = {title: "Proxy of Many", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link></p>
<Ability id="proxy-of-many" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="proxy-of-many">Proxy of Many</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="proxy-of-many-benefit">As a pantheist, you are accustomed to calling on aid from a variety of sources, and have a pragmatic sense for how to best make use of any ally. You gain a +2 trait bonus on Diplomacy checks made to request a favor from a creature that has not performed a favor for you in the past week. This bonus increases to +4 if you have performed a favor for that creature since it last did a favor for you.</Pair>
</Ability>
</>};
const _rebuke_the_curse = {title: "Rebuke the Curse", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven</Link></p>
<Ability id="rebuke-the-curse" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="rebuke-the-curse">Rebuke the Curse</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="rebuke-the-curse-benefit">Once per day, you can attempt to suppress the effects of a curse on a single creature with a touch. This functions as a <Link to="/spell/remove_curse">remove curse</Link> spell, treating your character level as your caster level. If you succeed at your caster level check against the curse, the curse's effects are negated for 1 minute. This trait does not allow a person burdened with a cursed item to remove or discard it. Use of this trait is a supernatural ability.</Pair>
</Ability>
</>};
const _redeemer = {title: "Redeemer", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="redeemer" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="redeemer">Redeemer</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="redeemer-benefit">You've always held the strong belief that morality is everyone's choice, and that those who act in wicked ways have simply never been shown how their actions truly affect others. If they could be shown their errors, then they would accept a more positive course of action - and you have just enough patience to see this through. When acting as a sponsor for an evil creature seeking redemption, your patience and kindness grant the creature a +3 bonus on its save rather than a +1 bonus.</Pair>
</Ability>
</>};
const _reincarnated = {title: "Reincarnated", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="reincarnated" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="reincarnated">Reincarnated</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="reincarnated-benefit">You lived a previous life as someone - or something - else. For you, life and death are a cycle, and you have no fear of death. You gain a +2 trait bonus on saving throws against fear and death effects.</Pair>
</Ability>
</>};
const _religious_reformer = {title: "Religious Reformer", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link></p>
<Ability id="religious-reformer" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="religious-reformer">Religious Reformer</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="religious-reformer-benefit">You have spent many years studying the tenets of your faith, and now believe that the dominant factions within the church have deviated from its true meaning and purpose. Rather than breaking with your misguided church, you've decided to stand up and fight to reform the organization you love. You have fervently studied scripture and steeled your will to combat the divergent beliefs of your peers. You gain a +2 trait bonus on Knowledge (religion) checks that pertain to your own religion or spiritual practice, and you gain a +2 trait bonus on saving throws against spells cast by others who worship your god or adhere to your philosophy.</Pair>
</Ability>
</>};
const _river_acumen = {title: "River Acumen", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_river">People of the River</Link></p>
<Ability id="river-acumen" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="river-acumen">River Acumen</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="river-acumen-benefit">Your connection with the river and its tributaries has blended with your reverence for the gods of the river passages so much so that you seem divinely blessed while plying river waters. You gain a +2 trait bonus on Swim checks in rivers or streams, and a +2 trait bonus on Survival checks to forage for food in or near a river or stream.</Pair>
</Ability>
</>};
const _sacred_conduit = {title: "Sacred Conduit", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="sacred-conduit" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="sacred-conduit">Sacred Conduit</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="sacred-conduit-benefit">Your birth was particularly painful and difficult for your mother, who needed potent divine magic to ensure that you survived (your mother may or may not have survived). In any event, that magic infused you from an early age, and you now channel divine energy with greater ease than most. Whenever you channel energy, you gain a +1 trait bonus to the save DC of your channeled energy.</Pair>
</Ability>
</>};
const _sacred_touch = {title: "Sacred Touch", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="sacred-touch" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="sacred-touch">Sacred Touch</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="sacred-touch-benefit">You were exposed to a potent source of positive energy as a child, perhaps by being born under the right cosmic sign, or maybe because one of your parents was a gifted healer. As a standard action, you may automatically stabilize a dying creature merely by touching it.</Pair>
</Ability>
</>};
const _scholar_of_the_great_beyond = {title: "Scholar of the Great Beyond", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="scholar-of-the-great-beyond" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="scholar-of-the-great-beyond">Scholar of the Great Beyond</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="scholar-of-the-great-beyond-benefit">Your greatest interests as a child did not lie with current events or the mundane; you have always felt out of place, as if you were born in the wrong era. You take to philosophical discussions of the Great Beyond and of historical events with ease. You gain a +1 trait bonus on Knowledge (history) and Knowledge (planes) checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
</>};
const _schooled_inquisitor = {title: "Schooled Inquisitor", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="schooled-inquisitor" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="schooled-inquisitor">Schooled Inquisitor</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="schooled-inquisitor-benefit">Your additional training aids in identifying the wiles of your faith's enemies. You gain a +2 trait bonus on all Knowledge (planes) and Knowledge (religion) checks made to identify the abilities and weaknesses of creatures.</Pair>
</Ability>
</>};
const _scourge_of_the_darkness = {title: "Scourge of the Darkness", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link></p>
<Ability id="scourge-of-the-darkness" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="scourge-of-the-darkness">Scourge of the Darkness</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="scourge-of-the-darkness-benefit">Stories of the depredations present in the Darklands drive you to explore its shadowy depths and purge the corruption from within. You gain a +1 trait bonus on saving throws against fear while in the Darklands and a +1 trait bonus on Intimidate checks against creatures native to the Darklands.</Pair>
</Ability>
</>};
const _second_tongue = {title: "Second Tongue", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="second-tongue" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="second-tongue">Second Tongue</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/old_cults">Old Cults</Link></Pair>
<Pair single="benefit" id="second-tongue-benefit">Using an ancient and painful surgical technique, you've reshaped your tongue. These surgical mutilations permit you to speak ancient words unpronounceable to most mortals, enhancing your ability to work magic associated with the Great Old Ones. Any summoning or divination spell you cast to summon or contact a Great Old One or one of their minions is cast at +1 caster level.</Pair>
</Ability>
</>};
const _secret_keeper = {title: "Secret Keeper", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="secret-keeper" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="secret-keeper">Secret Keeper</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="secret-keeper-benefit">Avoiding inquisitors and agents of your enemies has required you to become a practiced liar. You gain a +3 trait bonus on Bluff checks when they are opposed by another's Sense Motive check.</Pair>
</Ability>
</>};
const _self_actualization = {title: "Self-Actualization", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link></p>
<Ability id="self-actualization" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="self-actualization">Self-Actualization</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="self-actualization-benefit">Inspired by stories of mortals ascending to godhood, you're certain that you can do the same, and do all you can to hone your talents and reach your utmost potential. Once per day, when you take 20 on a roll or check, you can complete the action in only five times the normal amount of time for that action, rather than 20 times the normal amount.</Pair>
</Ability>
</>};
const _self_sustaining = {title: "Self-Sustaining", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine</Link></p>
<Ability id="self-sustaining" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="self-sustaining">Self-Sustaining</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>See text</Pair>
<Pair single="benefit" id="self-sustaining-benefit">As a follower of Razmir, the <Link to="/rule/prophecies_of_kalistrade">Prophecies of Kalistrade</Link>, or some other tradition that preaches self-reliance, you make a point of not seeking divine aid for minor matters. When you gain this trait, choose one of the following 0-level spells: <Link to="/spell/create_water">create water</Link>, <Link to="/spell/mending">mending</Link>, <Link to="/spell/purify_food_and_drink">purify food and drink</Link>, or <Link to="/spell/stabilize">stabilize</Link>. You can cast this spell once per day as a spell-like ability, using your character level as your caster level. Once chosen, this selection can't change.</Pair>
</Ability>
</>};
const _soul_searchers_strength = {title: "Soul-Searcher's Strength", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook</Link></p>
<Ability id="soul-searchers-strength" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="soul-searchers-strength">Soul-Searcher's Strength</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Must follow the traditions of the <Link to="/rule/rivethun">Rivethun</Link></Pair>
<Pair single="benefit" id="soul-searchers-strength-benefit">Your introspections have taught you to understand your own flaws and proclivities and how to work with them. Choose one saving throw. You gain a +1 trait bonus on saving throws of the chosen kind.</Pair>
</Ability>
</>};
const _spell_intuition = {title: "Spell Intuition", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="spell-intuition" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="spell-intuition">Spell Intuition</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="spell-intuition-benefit"><p>Blessed by a priest of a deity of magic at birth, you demonstrated a remarkable knack for guessing the nature of spells without the schooling of your instructors. You gain a +1 trait bonus on Spellcraft checks, and Spellcraft becomes a class skill for you.</p>
<p><strong>Suggested Characters:</strong> Gebbites, <Link to="/faith/nethys">Nethys</Link> worshipers, Nexians.</p>
</Pair>
</Ability>
</>};
const _spirit_sense = {title: "Spirit Sense", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="spirit-sense" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="spirit-sense">Spirit Sense</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="spirit-sense-benefit">You are so attuned to the spiritual world that it is hard to get the jump on you. You gain a +2 trait bonus on Perception checks to avoid being surprised and to detect invisible or incorporeal creatures.</Pair>
</Ability>
</>};
const _st_clydwells_ward = {title: "St. Clydwell's Ward", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="st-clydwells-ward" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="st-clydwells-ward">St. Clydwell's Ward</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Mendev Crusaders</Pair>
<Pair single="benefit" id="st-clydwells-ward-benefit">You have learned the secrets of an ancient prayer that wards off the attacks of demons. As a standard action, you can recite a holy chant that affects demons as if you were under the effect of a sanctuary spell (caster level equal to 1/2 your Hit Dice + your Charisma modifier).</Pair>
</Ability>
</>};
const _stalwart_of_the_society = {title: "Stalwart of the Society", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link>, <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="stalwart-of-the-society" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="stalwart-of-the-society">Stalwart of the Society</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="benefit" id="stalwart-of-the-society-benefit">The courageous powers of Golarion's ancient paladin orders are open to you thanks to the Society's records of heroic deeds. As a result, your aura of courage class ability grants an additional +1 trait bonus on saving throws against fear effects.</Pair>
</Ability>
</>};
const _strength_of_submission = {title: "Strength of Submission", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="strength-of-submission" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="strength-of-submission">Strength of Submission</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="strength-of-submission-benefit">Your faith in the church of Razmir and willingness to surrender yourself to him lend you strength and clarity. Whenever you are under the effects of a compulsion effect, you gain a +1 trait bonus on attack and damage rolls.</Pair>
</Ability>
</>};
const _strength_of_the_land = {title: "Strength of the Land", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/dwarves_of_golarion">Dwarves of Golarion</Link></p>
<Ability id="strength-of-the-land" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="strength-of-the-land">Strength of the Land</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/dwarf">Dwarf</Link></Pair>
<Pair single="benefit" id="strength-of-the-land-benefit">You are able to tap into the living energy of the world to shatter lesser magic. You gain a +1 trait bonus on caster level checks while touching the ground or unworked stone. This includes dispel checks and checks to overcome spell resistance.</Pair>
</Ability>
</>};
const _student_of_history = {title: "Student of History", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="student-of-history" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="student-of-history">Student of History</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="student-of-history-benefit">One can move toward enlightenment by understanding the mistakes of past generations. You gain a +1 trait bonus on Knowledge (history) checks, and Knowledge (history) is a class skill for you.</Pair>
</Ability>
</>};
const _tar_baphons_whisper = {title: "Tar-Baphon's Whisper", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="tar-baphons-whisper" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="tar-baphons-whisper">Tar-Baphon's Whisper</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/whispering_way">Whispering Way</Link></Pair>
<Pair single="benefit" id="tar-baphons-whisper-benefit">You have learned the secrets of sotto voce, the eerie, dry whispering voice used to pass on cult secrets. You may cast <Link to="/spell/sotto_voce">sotto voce</Link> as a spell-like ability three times per day as a spell-like ability. This spell-like ability is cast at your highest caster level; if you have no caster level, it functions at CL 1st.</Pair>
</Ability>
</>};
const _tireless_avenger = {title: "Tireless Avenger", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="tireless-avenger" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="tireless-avenger">Tireless Avenger</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="tireless-avenger-benefit">You restlessly pursue your enemies. When you're in pursuit of one of your <Link to="/ability/favored_enemies">favored enemies</Link>, the DC for the Constitution check to avoid taking lethal damage during a forced march is 10 + 1 per extra hour, instead of 10 + 2 per extra hour.</Pair>
</Ability>
</>};
const _totemist = {title: "Totemist", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link></p>
<Ability id="totemist" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="totemist">Totemist</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="totemist-benefit">You grew up in a culture where the touch of totem spirits was felt in everyday life, their subtle urgings constantly guiding you and keeping you safe. As a result, you learned quickly to ask for their help when trouble arises. Once per day, you may call upon your totem's wisdom as a standard action. You gain the benefits of guidance, except that the granted competence bonus is equal to half your character level (minimum +1). This is a supernatural ability.</Pair>
</Ability>
</>};
const _traditionalist = {title: "Traditionalist", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link>, <Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link></p>
<Ability id="traditionalist" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traditionalist">Traditionalist</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traditionalist-benefit">You attempt to maintain older traditions despite changing social norms, and find great value in the trappings and codes of the aristocracy. You gain a +1 trait bonus on Knowledge (nobility) checks, and Knowledge (nobility) is a class skill for you.</Pair>
</Ability>
</>};
const _trickster_gnome = {title: "Trickster (Gnome)", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link></p>
<Ability id="trickster-gnome" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="trickster-gnome">Trickster (Gnome)</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="benefit" id="trickster-gnome-benefit">You are particularly adept with your racial spell-like abilities, and as child you quickly learned how dancing lights and ghost sound could be used to amuse your friends and fool your elders. This natural talent for illusion continued as you grew older, and before long you were being offered training in more advanced figments and glamers. You gain a +1 trait bonus to your caster level when determining the duration, range, and area of all spells from the illusion school.</Pair>
</Ability>
</>};
const _two_world_magic = {title: "Two-World Magic", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/sargava_the_lost_colony">Sargava, the Lost Colony</Link></p>
<Ability id="two-world-magic" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="two-world-magic">Two-World Magic</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Region" hl>Sargava</Pair>
<Pair single="benefit" id="two-world-magic-benefit">You have bridged the gap between the natural magic of the Mwangi peoples and the refined magic of the Chelish colonists. Select one 0-level spell from a class spell list other than your own. This spell is a 0-level spell on your class spell list (or a 1st-level spell if your class doesn't have 0-level spells). For example, if you are a druid, you could select mage hand and thereafter prepare it as a 0-level druid spell; if you are a sorcerer, you could select know direction as a 0-level sorcerer spell known.</Pair>
</Ability>
</>};
const _undaunted = {title: "Undaunted", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="undaunted" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="undaunted">Undaunted</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="undaunted-benefit">Following the path of freedom has resulted in you being threatened by ruffians and bullies throughout your childhood, and it now takes a lot to rattle you. You increase the DC to demoralize you with an Intimidate check by 2.</Pair>
</Ability>
</>};
const _unnatural_presence = {title: "Unnatural Presence", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="unnatural-presence" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="unnatural-presence">Unnatural Presence</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/old_cults">Old Cults</Link></Pair>
<Pair single="benefit" id="unnatural-presence-benefit">Your prolonged association with alien forces leaks from your pores. You can use your Intimidate skill to demoralize animals and vermin; Intimidate is a class skill for you.</Pair>
</Ability>
</>};
const _unshackled = {title: "Unshackled", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="unshackled" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="unshackled">Unshackled</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="unshackled-benefit">You have escaped slavery or other imprisonment and have vowed never to be shackled again. You gain a +1 trait bonus on Escape Artist checks, and Escape Artist is a class skill for you.</Pair>
</Ability>
</>};
const _untrained_scholar = {title: "Untrained Scholar", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="untrained-scholar" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="untrained-scholar">Untrained Scholar</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="untrained-scholar-benefit">While scholarship is not your primary focus, you have spent enough time in classrooms and libraries to learn a few things. Once per day, you can attempt a Knowledge (geography), Knowledge (history) or Knowledge (local) check untrained with a +2 trait bonus.</Pair>
</Ability>
</>};
const _urban_acolyte = {title: "Urban Acolyte", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets</Link></p>
<Ability id="urban-acolyte" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="urban-acolyte">Urban Acolyte</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="urban-acolyte-benefit">Growing up in a city has broadened your philosophy, and helped you interpret your patron's divine will in a novel way. You gain Knowledge (local) as a class skill. Additionally, you can select one of the following subdomains using the normal rules for subdomains so long as your deity grants access to its associated domain: <Link to="/domain/competition">Competition</Link>, <Link to="/domain/duels">Duels</Link>, <Link to="/domain/espionage">Espionage</Link>, <Link to="/domain/fortifications">Fortifications</Link>, <Link to="/domain/industry">Industry</Link>, <Link to="/domain/legislation">Legislation</Link>, <Link to="/domain/plague">Plague</Link>, or <Link to="/domain/riot">Riot</Link>.</Pair>
</Ability>
</>};
const _vile_domain = {title: "Vile Domain", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook</Link></p>
<Ability id="vile-domain" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="vile-domain">Vile Domain</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="vile-domain-benefit">Your connection with a malignant force has granted you great power. Choose a domain granted by an evil aligned deity, such as an archdevil, demon lord, or Great Old One. You gain a +1 trait bonus to your caster level when casting spells that are granted by that domain. This doesn't grant you the ability to cast such spells-you must still have access to the spells through some other means.</Pair>
</Ability>
</>};
const _wanderers_shroud = {title: "Wanderer's Shroud", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="wanderers-shroud" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="wanderers-shroud">Wanderer's Shroud</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="wanderers-shroud-benefit">Your wanderings often go unnoticed. Efforts to use the Diplomacy skill to gather information about you take a -1 penalty, and you gain a +1 trait bonus on all saving throws against scrying and mindreading effects that allow saving throws.</Pair>
</Ability>
</>};
const _wendifa_apprentice = {title: "Wendifa Apprentice", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link></p>
<Ability id="wendifa-apprentice" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="wendifa-apprentice">Wendifa Apprentice</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="wendifa-apprentice-benefit">For a time during your childhood, you were left in the care of a juju oracle or wendifa, who saw your potential and taught you simple juju magic to influence the weakminded for brief periods of time. You can use <Link to="/spell/daze">daze</Link> as a spell-like ability once per day, using your character level as your caster level (minimum 1). The save DC of this effect is Charisma-based. The dazed individual looks ashen and deathly for the duration of the effect.</Pair>
</Ability>
</>};
const _zealot = {title: "Zealot", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link></p>
<Ability id="zealot" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="zealot">Zealot</Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="benefit" id="zealot-benefit">You aren't just faithful to the worship of your patron deity - you are obsessively loyal to all of the faith's tenets and guidelines. Your devotion is an anchor that keeps you from drifting away into the throes of the Bleaching, and you cling to it like the life raft it is. You must match the alignment of your chosen deity exactly. You gain a +1 trait bonus on Knowledge (religion) checks, and that skill is a class skill for you. As long as you remain completely faithful to the tenets of your faith (as determined by the GM), you never suffer from the Bleaching.</Pair>
</Ability>
</>};
const _zealots_bearing = {title: "Zealot's Bearing", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link></p>
<Ability id="zealots-bearing" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="zealots-bearing">Zealot's Bearing</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="zealots-bearing-benefit">Your fiery passion for your faith or philosophy is obvious to everyone around you. Those who share your convictions automatically find themselves wanting to defer to your zealous authority, making you a natural leader of your faith. Unfortunately, your scorn for those who haven't yet seen the wisdom of converting is equally obvious, and makes you a poor ambassador or missionary to the "ignorant masses" (as you not-so secretly think of them). You gain a +2 bonus on Diplomacy and Intimidate checks when dealing with adherents of your faith or philosophy, but a -1 penalty on Diplomacy and Intimidate checks when dealing with anyone else.</Pair>
</Ability>
</>};
const _zealous_striker = {title: "Zealous Striker", topLink: ["Faith Traits","main/traits_faith"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="zealous-striker" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="zealous-striker">Zealous Striker</Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="zealous-striker-benefit">Your zeal is a danger to those of "lesser" faiths. While you have the destruction judgment active, you gain a +1 trait bonus on damage rolls when attacking a foe who can cast divine spells and worships a different deity than you.</Pair>
</Ability>
</>};
const _acrobat = {title: "Acrobat", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="acrobat" extraClasses="trait" icon={["village"]}>
<Pair single id="acrobat">Acrobat</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="acrobat-benefit">Having trained from a young age, you're capable of amazing feats of daring. You gain a +1 bonus on Acrobatics checks, and you take only a -2 penalty instead of the normal -5 penalty when using the Climb skill to attempt an accelerated climb.</Pair>
</Ability>
</>};
const _adopted = {title: "Adopted", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="adopted" extraClasses="trait" icon={["village"]}>
<Pair single id="adopted">Adopted</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="adopted-benefit">You were adopted and raised by someone not of your race, and raised in a society not your own. As a result, you picked up a race trait from your adoptive parents and society, and may immediately select a <Link to="/main/traits_race">race trait</Link> from your adoptive parents' race.</Pair>
</Ability>
</>};
const _affable = {title: "Affable", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="affable" extraClasses="trait" icon={["village"]}>
<Pair single id="affable">Affable</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="affable-benefit">You have a genial personality and make it a point to befriend and help people wherever you go. In your travels, you stop to aid others, tell interesting stories, and often buy rounds of drinks for patrons at the local taverns. You bring good cheer to those you encounter, and for this reason, you often find yourself attending important events or fruitful gatherings, and have even become an honorary member of many families. People find you trustworthy, and they are willing to share information with you. You gain a +2 trait bonus on Diplomacy checks to gather information, and can do so in half the normal time. In addition, Diplomacy and Knowledge (local) are always class skills for you.</Pair>
</Ability>
</>};
const _allies_in_the_deep = {title: "Allies in the Deep", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link></p>
<Ability id="allies-in-the-deep" extraClasses="trait" icon={["village"]}>
<Pair single id="allies-in-the-deep">Allies in the Deep</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="allies-in-the-deep-benefit">You've learned to deal amicably with individuals of questionable morals when necessary. You gain a +1 trait bonus on Charisma-based skill checks to influence evil creatures.</Pair>
</Ability>
</>};
const _ambitious = {title: "Ambitious", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="ambitious" extraClasses="trait" icon={["village"]}>
<Pair single id="ambitious">Ambitious</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="ambitious-benefit">You exude confidence in the presence of those more powerful than you - sometimes unreasonably so. You gain a +4 trait bonus on Diplomacy checks made to influence creatures with at least 5 Hit Dice more than you possess.</Pair>
</Ability>
</>};
const _amiable_blunder = {title: "Amiable Blunder", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance</Link></p>
<Ability id="amiable-blunder" extraClasses="trait" icon={["village"]}>
<Pair single id="amiable-blunder">Amiable Blunder</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="amiable-blunder-benefit">Your easy-going demeanor allows you to sometimes recover from potentially awkward social situations or even condemnatory faux pas. Once per day when you fail a Diplomacy check by 5 or more and would cause an NPC's attitude toward you to worsen, you can immediately attempt another Diplomacy check against the same DC as a free action. If you succeed at this second Diplomacy check, the character's attitude doesn't change, as though you had failed the original check by 4 or less.</Pair>
</Ability>
</>};
const _amiable_briber = {title: "Amiable Briber", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2</Link></p>
<Ability id="amiable-briber" extraClasses="trait" icon={["village"]}>
<Pair single id="amiable-briber">Amiable Briber</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Absalom</Pair>
<Pair single="benefit" id="amiable-briber-benefit">Your attempts to bribe others usually come off as playful or as a gag. The first time someone refuses a bribe you offer, that person's attitude toward you doesn't worsen, even if the offer would normally offend the person (as though you had failed a Diplomacy check by 5 or more).</Pair>
</Ability>
</>};
const _ancestral_armor = {title: "Ancestral Armor", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 31</Link></p>
<Ability id="ancestral-armor" extraClasses="trait" icon={["village"]}>
<Pair single id="ancestral-armor">Ancestral Armor</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="ancestral-armor-benefit">You inherited an ancient set of Tar Taargadth armor. You begin play with a set of masterwork armor of your choice. You must be proficient in wearing this armor, and the armor's total cost cannot exceed 300 gp.</Pair>
</Ability>
</>};
const _arodenite_historian = {title: "Arodenite Historian", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology</Link></p>
<Ability id="arodenite-historian" extraClasses="trait" icon={["village"]}>
<Pair single id="arodenite-historian">Arodenite Historian</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="arodenite-historian-benefit">You believe there is much useful information to glean from the mark Aroden left on history, and learn all you can about his exploits and teachings. This has given you significant insights on how different kinds of information are interconnected. If you fail a Knowledge (arcana, history, or religion) check, you can reroll the check 1 round later using your bonus for one of the other two skills.</Pair>
</Ability>
</>};
const _artisan = {title: "Artisan", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="artisan" extraClasses="trait" icon={["village"]}>
<Pair single id="artisan">Artisan</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="artisan-benefit">You spent time working under artisans, or your parents were artisans who were particularly skilled at their trade. You gain a +2 trait bonus on a single Craft skill (your choice).</Pair>
</Ability>
</>};
const _avid_reader = {title: "Avid Reader", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="avid-reader" extraClasses="trait" icon={["village"]}>
<Pair single id="avid-reader">Avid Reader</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="avid-reader-benefit"><p>As a youth, you voraciously consumed books and scrolls provided by a member of an adventurer's guild or a learned organization like the <Link to="/rule/pathfinder_society">Pathfinder Society</Link>, and you have internalized these stories of bold adventurers. Choose one Knowledge skill. You can always choose to take 10 on checks with the chosen Knowledge skill, even when distracted or threatened.</p>
<p><strong>Suggested Characters:</strong> Osirians, Pathfinders, Taldans.</p>
</Pair>
</Ability>
</>};
const _balanced_determination = {title: "Balanced Determination", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons</Link></p>
<Ability id="balanced-determination" extraClasses="trait" icon={["village"]}>
<Pair single id="balanced-determination">Balanced Determination</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="balanced-determination-benefit">You've come to appreciate the balanced approach taken by sovereign dragons. Once per day, before attempting a saving throw against a spell ability originating from another creature, you can invoke the determination of those dragons. You take 10 on the saving throw (treat the d20 die result as if it were a 10).</Pair>
</Ability>
</>};
const _bastard_uc = {title: "Bastard (UC)", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="bastard-uc" extraClasses="trait" icon={["village"]}>
<Pair single id="bastard-uc">Bastard (UC)</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="bastard-uc-benefit">You were born out of wedlock. You have always been an outsider in society, and in your own family. This perspective has sharpened your insight. You gain a +1 trait bonus on Sense Motive checks, and Sense Motive is always a class skill for you.</Pair>
</Ability>
</>};
const _beast_bond = {title: "Beast Bond", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="beast-bond" extraClasses="trait" icon={["village"]}>
<Pair single id="beast-bond">Beast Bond</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="beast-bond-benefit">You share a close bond with animals. You gain a +1 bonus on Handle Animal checks and Ride checks. One of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
</>};
const _beastkin = {title: "Beastkin", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild</Link></p>
<Ability id="beastkin" extraClasses="trait" icon={["village"]}>
<Pair single id="beastkin">Beastkin</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="beastkin-benefit">Select one specific type of animal (such as wolves or apes). You were raised from infancy by an animal or pack of animals of that type. You learned their ways and have more in common with your beastly kin than members of any humanoid race. You gain a +1 trait bonus on Survival checks and can use <Link to="/spell/speak_with_animals">speak with animals</Link> as a spell-like ability at will to communicate with the type of animal that raised you.</Pair>
</Ability>
</>};
const _binders_blood = {title: "Binder's Blood", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook</Link></p>
<Ability id="binders-blood" extraClasses="trait" icon={["village"]}>
<Pair single id="binders-blood">Binder's Blood</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="binders-blood-benefit">Your lineage features a large number of genie callers, granting you insight into the intricacies of genie binding. You gain a +2 trait bonus on any Charisma-based checks when directly interacting with a genie.</Pair>
</Ability>
</>};
const _brastlewark_businessman_gog = {title: "Brastlewark Businessman (GoG)", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link></p>
<Ability id="brastlewark-businessman-gog" extraClasses="trait" icon={["village"]}>
<Pair single id="brastlewark-businessman-gog">Brastlewark Businessman (GoG)</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="benefit" id="brastlewark-businessman-gog-benefit">Your time among the gnome elite of Brastlewark in Cheliax has led to an extensive knowledge of alchemy and ready connections in the business. You gain a +2 trait bonus on all Craft (alchemy) checks.</Pair>
</Ability>
</>};
const _bruising_intellect = {title: "Bruising Intellect", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="bruising-intellect" extraClasses="trait" icon={["village"]}>
<Pair single id="bruising-intellect">Bruising Intellect</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="bruising-intellect-benefit">Your sharp intellect and rapier-like wit bruise egos. Intimidate is always a class skill for you, and you may use your Intelligence modifier when making Intimidate checks instead of your Charisma modifier.</Pair>
</Ability>
</>};
const _bully = {title: "Bully", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="bully" extraClasses="trait" icon={["village"]}>
<Pair single id="bully">Bully</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="bully-benefit">You grew up in an environment where the meek were ignored and you often had to resort to threats or violence to be heard. You gain a +1 trait bonus on Intimidate checks, and Intimidate is always a class skill for you.</Pair>
</Ability>
</>};
const _bureaucrats_favored = {title: "Bureaucrat's Favored", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link></p>
<Ability id="bureaucrats-favored" extraClasses="trait" icon={["village"]}>
<Pair single id="bureaucrats-favored">Bureaucrat's Favored</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Osirion</Pair>
<Pair title="Requirements" hl>Associated with the court of the Black Dome</Pair>
<Pair single="benefit" id="bureaucrats-favored-benefit">You have gained favor with the government of Sothis. Once per week, you can attempt a DC 20 Diplomacy or Intimidate check to gain access to an exclusive site or event, such as a government building or an aristocrat's ball.</Pair>
</Ability>
</>};
const _calculated_bribe = {title: "Calculated Bribe", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link></p>
<Ability id="calculated-bribe" extraClasses="trait" icon={["village"]}>
<Pair single id="calculated-bribe">Calculated Bribe</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl>Code of Perseverance</Pair>
<Pair single="benefit" id="calculated-bribe-benefit">If you follow this code, you are keenly aware of the value of actions as well as goods. Once per day while haggling with a merchant or striking a bargain with another intelligent creature, you can spend a number of gold pieces equal to your level &times; 10 in order to reroll a Diplomacy check you just made, before the results are revealed. You must take the result of the reroll, even if it's worse than the original roll. In addition, you begin play with a set of extravagant noble's clothes worth 100 gp.</Pair>
</Ability>
</>};
const _callous = {title: "Callous", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="callous" extraClasses="trait" icon={["village"]}>
<Pair single id="callous">Callous</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="callous-benefit">You have endured many hardships throughout your life, and this has hardened you to the suffering of others to the point that you are not easily swayed by a sad story. You gain a +4 trait bonus on Sense Motive checks that oppose the Bluff checks of creatures that attempt to deceive you by winning your sympathy.</Pair>
</Ability>
</>};
const _canter = {title: "Canter", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="canter" extraClasses="trait" icon={["village"]}>
<Pair single id="canter">Canter</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="canter-benefit">You grew up among thieves and scoundrels, and their unusual speech patterns and turns of phrase don't faze you in the slightest. Anyone who attempts to use Bluff to deliver a secret message to you gains a +5 bonus on her Bluff check. When you attempt to intercept a secret message using Sense Motive, you gain a +5 trait bonus on the attempt.</Pair>
</Ability>
</>};
const _carnal_attraction = {title: "Carnal Attraction", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil</Link></p>
<Ability id="carnal-attraction" extraClasses="trait" icon={["village"]}>
<Pair single id="carnal-attraction">Carnal Attraction</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="carnal-attraction-benefit">You know how to ask the wrong questions the right way, granting you a +2 trait bonus on Diplomacy (gather information) and Knowledge (local) checks regarding whichever vice fascinates you: drugs, forbidden lore, gambling, illegal fighting, or a similar debauchery or indecency.</Pair>
</Ability>
</>};
const _charming = {title: "Charming", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="charming" extraClasses="trait" icon={["village"]}>
<Pair single id="charming">Charming</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="charming-benefit">Blessed with good looks, you've come to depend on the fact that others find you attractive. You gain a +1 trait bonus when you use Bluff or Diplomacy on a character that is (or could be) sexually attracted to you, and a +1 trait bonus to the save DC of any language-dependent spell you cast on such characters or creatures.</Pair>
</Ability>
</>};
const _chelish_sympathizer = {title: "Chelish Sympathizer", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="chelish-sympathizer" extraClasses="trait" icon={["village"]}>
<Pair single id="chelish-sympathizer">Chelish Sympathizer</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="chelish-sympathizer-benefit">You feed intelligence to the Thrice-Damned House of Thrune for your own gain or ideological reasons and are given valuable clues gathered by other Chelish spies in exchange. Once per month while in an Inner Sea region settlement of at least 2,000 people, you can call upon these connections to gain an edge in a verbal duel or gain a +2 bonus on one Bluff, Diplomacy, or Intimidate check.</Pair>
</Ability>
</>};
const _child_of_the_streets = {title: "Child of the Streets", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="child-of-the-streets" extraClasses="trait" icon={["village"]}>
<Pair single id="child-of-the-streets">Child of the Streets</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="child-of-the-streets-benefit">You grew up on the streets of a large city, and as a result you have developed a knack for picking pockets and hiding small objects on your person. You gain a +1 trait bonus on Sleight of Hand checks, and Sleight of Hand is always a class skill for you.</Pair>
</Ability>
</>};
const _chip_on_the_shoulder = {title: "Chip on the Shoulder", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/bastards_of_golarion">Bastards of Golarion</Link></p>
<Ability id="chip-on-the-shoulder" extraClasses="trait" icon={["village"]}>
<Pair single id="chip-on-the-shoulder">Chip on the Shoulder</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="chip-on-the-shoulder-benefit">When someone pushes you, you push back. Whenever a creature fails an Intimidate check against you, you gain a +2 trait bonus on your next Intimidate check against that creature. Intimidate becomes a class skill for you.</Pair>
</Ability>
</>};
const _civilized = {title: "Civilized", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="civilized" extraClasses="trait" icon={["village"]}>
<Pair single id="civilized">Civilized</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="civilized-benefit">You are well versed in the local laws, customs, and politics. You gain a +1 trait bonus on Knowledge (nobility) checks and Knowledge (local) checks. Knowledge (local) is always a class skill for you.</Pair>
</Ability>
</>};
const _clever_wordplay = {title: "Clever Wordplay", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_society_primer">Pathfinder Society Primer</Link></p>
<Ability id="clever-wordplay" extraClasses="trait" icon={["village"]}>
<Pair single id="clever-wordplay">Clever Wordplay</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="clever-wordplay-benefit">Your cunning and logic are more than a match for another's confidence and poise. Choose one Charisma-based skill. You attempt checks with that skill using your Intelligence modifier instead of your Charisma modifier.</Pair>
</Ability>
</>};
const _collector = {title: "Collector", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link></p>
<Ability id="collector" extraClasses="trait" icon={["village"]}>
<Pair single id="collector">Collector</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="benefit" id="collector-benefit">You have a small, bizarre collection of apparently worthless items, such as rusty nails, animal droppings, clockwork cogs, or bent spoons. You find this strange menagerie useful in ways no non-gnome could understand. Seeking new items to add to this collection is endlessly fascinating to you, and while no one else may understand why a Chelish horsenail is worthy to add to your collection when a dwarven wheelbarrow nail is not, it all makes sense to you. Select one of the following skills: Craft (any one), Disable Device, Escape Artist, Perform (any one), or Spellcraft. Whenever you have your collection within 5 feet of you, you gain a +2 trait bonus on all checks made with the selected skill. Once this skill has been selected, it cannot be changed, nor can you gain it for any other collection you begin amassing.</Pair>
</Ability>
</>};
const _competitive = {title: "Competitive", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="competitive" extraClasses="trait" icon={["village"]}>
<Pair single id="competitive">Competitive</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="competitive-benefit"><p>You grew up and were raised around fabulous sporting events, and your youth was consumed with a driving need to be better than everyone else. Any hint of a contest spurs you to your greatest heights of potential. Whenever another creature within 30 feet attempts a skill check and you attempt a check with the same skill before the start of that creature's next turn, you gain a +1 trait bonus on your check (this includes attempting an opposed skill check against the creature).</p>
<p><strong>Suggested Characters:</strong> Brevans, Kurgess worshipers, Sargavans.</p>
</Pair>
</Ability>
</>};
const _contagious_mettle = {title: "Contagious Mettle", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link></p>
<Ability id="contagious-mettle" extraClasses="trait" icon={["village"]}>
<Pair single id="contagious-mettle">Contagious Mettle</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl>Code of Valor</Pair>
<Pair single="benefit" id="contagious-mettle-benefit">If you follow this code, you gain a +1 trait bonus on Will saves against fear. In addition, any allies adjacent to you receive a +1 morale bonus on Will saves against fear.</Pair>
</Ability>
</>};
const _contemptuous = {title: "Contemptuous", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="contemptuous" extraClasses="trait" icon={["village"]}>
<Pair single id="contemptuous">Contemptuous</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="contemptuous-benefit">Whether you are a commoner who has come to despise the haughty upper crust or a holier-than-thou noble who can't stand being around the unwashed masses, your contempt drives you to study carefully, making sure you always have the upper hand in social exchanges with them. You gain a +1 trait bonus on Knowledge (local) checks and Knowledge (nobility) checks, and one of these skills becomes a class skill for you.</Pair>
</Ability>
</>};
const _convincing_liar = {title: "Convincing Liar", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="convincing-liar" extraClasses="trait" icon={["village"]}>
<Pair single id="convincing-liar">Convincing Liar</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/bellflower_network">Bellflower Network</Link></Pair>
<Pair single="benefit" id="convincing-liar-benefit">You've spent your life perfecting the art of half-truths in order to accomplish what you need to. You gain a +1 trait bonus on Bluff or Intimidate checks and one of these skills (your choice) is a class skill for you.</Pair>
</Ability>
</>};
const _criminal = {title: "Criminal", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="criminal" extraClasses="trait" icon={["village"]}>
<Pair single id="criminal">Criminal</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="criminal-benefit">You spent your early life robbing and stealing to get by. Select one of the following skills: Disable Device, Intimidate, or Sleight of Hand. You gain a +1 trait bonus on that skill, and it is always a class skill for you.</Pair>
</Ability>
</>};
const _criminal_roots = {title: "Criminal Roots", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="criminal-roots" extraClasses="trait" icon={["village"]}>
<Pair single id="criminal-roots">Criminal Roots</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="criminal-roots-benefit">Your family has long operated outside the law. You gain a +2 trait bonus on Diplomacy checks to influence criminals and on Intimidate checks to influence law-abiding citizens, but take a -2 penalty on Diplomacy checks to influence law-abiding citizens. Diplomacy or Intimidate (your choice) is a class skill for you.</Pair>
</Ability>
</>};
const _criminally_connected = {title: "Criminally Connected", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="criminally-connected" extraClasses="trait" icon={["village"]}>
<Pair single id="criminally-connected">Criminally Connected</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="criminally-connected-benefit">You have spent a lot of time dealing with the criminal underworld - so much that it might be hard for observers to see you as distinct from it. However, this familiarity gives you a leg up on heroes who refuse to muddy their reputation. While in settlements, you gain a +1 trait bonus on Knowledge (local) checks and on Diplomacy checks to gather information.</Pair>
</Ability>
</>};
const _cutting_condescension = {title: "Cutting Condescension", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets</Link></p>
<Ability id="cutting-condescension" extraClasses="trait" icon={["village"]}>
<Pair single id="cutting-condescension">Cutting Condescension</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="cutting-condescension-benefit">The Sable Company has taught you to quickly get compliance from those in your way. You gain a +2 trait bonus on Intimidate checks to force a creature to act friendly towards you, and can attempt such checks in half the normal time.</Pair>
</Ability>
</>};
const _cynical = {title: "Cynical", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="cynical" extraClasses="trait" icon={["village"]}>
<Pair single id="cynical">Cynical</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="cynical-benefit">You have seen many heroes in your time, but you see only their capacity for failure and the ways they fall short of being truly good. This practice in looking past facades has proven a useful skill. You gain a +1 trait bonus on saving throws against illusions and charm effects.</Pair>
</Ability>
</>};
const _cynical_ear = {title: "Cynical Ear", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/bastards_of_golarion">Bastards of Golarion</Link></p>
<Ability id="cynical-ear" extraClasses="trait" icon={["village"]}>
<Pair single id="cynical-ear">Cynical Ear</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="cynical-ear-benefit">Neither honeyed tongues or righteous wrath move you much. Add 2 when determining your Hit Dice for Intimidate checks, and increase the DC or all Diplomacy checks against you by 2.</Pair>
</Ability>
</>};
const _darklands_scholar = {title: "Darklands Scholar", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link></p>
<Ability id="darklands-scholar" extraClasses="trait" icon={["village"]}>
<Pair single id="darklands-scholar">Darklands Scholar</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="darklands-scholar-benefit">Unsatisfied with mere stories, you have spent years researching journals and firsthand accounts of those who explored the Darklands before you. You gain a +2 trait bonus on Knowledge checks to identify the weaknesses of Darklands creatures.</Pair>
</Ability>
</>};
const _darklands_trader = {title: "Darklands Trader", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link></p>
<Ability id="darklands-trader" extraClasses="trait" icon={["village"]}>
<Pair single id="darklands-trader">Darklands Trader</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="darklands-trader-benefit">You're familiar with Nar-Voth's trade routes and negotiation involving the denizens of the Darklands. You gain a +1 trait bonus on Diplomacy checks relating to subterranean trade and on Knowledge (dungeoneering) checks relating to subterranean creatures. Select one of these skills to be a class skill for you.</Pair>
</Ability>
</>};
const _debauchery_defier = {title: "Debauchery Defier", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link></p>
<Ability id="debauchery-defier" extraClasses="trait" icon={["village"]}>
<Pair single id="debauchery-defier">Debauchery Defier</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Taldor</Pair>
<Pair title="Requirements" hl>Associated with the court of the Imperial Palace of Taldor</Pair>
<Pair single="benefit" id="debauchery-defier-benefit">You are particularly adept at resisting addiction. You must fail two saving throws in a row to become addicted to a drug.</Pair>
</Ability>
</>};
const _deep_cover = {title: "Deep Cover", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="deep-cover" extraClasses="trait" icon={["village"]}>
<Pair single id="deep-cover">Deep Cover</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="deep-cover-benefit">You have lived a double life since your youth, perhaps to avoid persecution for your true identity or in service to an enemy of the people or group associated with your cover identity. You can always take 10 on Bluff and Disguise checks to assume and maintain your cover identity. Bluff or Disguise (your choice) is a class skill for you.</Pair>
</Ability>
</>};
const _destined_diplomat = {title: "Destined Diplomat", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="destined-diplomat" extraClasses="trait" icon={["village"]}>
<Pair single id="destined-diplomat">Destined Diplomat</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="destined-diplomat-benefit">Your relationship with your eidolon gives you some clout with other outsiders. You gain a +2 trait bonus on Diplomacy checks toward outsiders, and Diplomacy is always a class skill for you.</Pair>
</Ability>
</>};
const _detect_disobedience = {title: "Detect Disobedience", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption</Link></p>
<Ability id="detect-disobedience" extraClasses="trait" icon={["village"]}>
<Pair single id="detect-disobedience">Detect Disobedience</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="detect-disobedience-benefit">You have an uncanny ability to spot a mutiny brewing. You gain a +2 trait bonus on Sense Motive checks to detect when an underling is trying to hide something from you, and can attempt such checks instead of Perception checks to notice and react to a subordinate's surprise attack against you.</Pair>
</Ability>
</>};
const _dismantle_order = {title: "Dismantle Order", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link></p>
<Ability id="dismantle-order" extraClasses="trait" icon={["village"]}>
<Pair single id="dismantle-order">Dismantle Order</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl>Code of Revolution</Pair>
<Pair single="benefit" id="dismantle-order-benefit">If you follow this code, your appreciation for unfettered social freedom allows you to locate supporters of law with supernatural ease. Once per day, you can use <Link to="/spell/detect_law">detect law</Link> as a spell-like ability (caster level 1st). If you have levels in a class that can cast detect law, your caster level for this spell-like ability is equal to that class level.</Pair>
</Ability>
</>};
const _doublespeak = {title: "Doublespeak", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/bastards_of_golarion">Bastards of Golarion</Link></p>
<Ability id="doublespeak" extraClasses="trait" icon={["village"]}>
<Pair single id="doublespeak">Doublespeak</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="doublespeak-benefit">It isn't what you say - it's how you say it. You gain a +2 trait bonus on Bluff checks to pass along secret messages.</Pair>
</Ability>
</>};
const _draconic_destiny = {title: "Draconic Destiny", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons</Link></p>
<Ability id="draconic-destiny" extraClasses="trait" icon={["village"]}>
<Pair single id="draconic-destiny">Draconic Destiny</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="draconic-destiny-benefit">Whether you are aware of it or not, the moment of your birth was but one part of a far-reaching machination in a dragon's grand design, and the influence of that mysterious plan makes you a little harder to kill. When dying, you gain a +2 trait bonus on Constitution checks to become stable. In addition, you die from hit point loss only once your hit points equal or exceed a negative amount equal to your Constitution score + 2.</Pair>
</Ability>
</>};
const _dragon_hunted = {title: "Dragon-Hunted", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons</Link></p>
<Ability id="dragon-hunted" extraClasses="trait" icon={["village"]}>
<Pair single id="dragon-hunted">Dragon-Hunted</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="dragon-hunted-benefit">You've survived being hunted by the draconic nightmares on the Shackles islands of Dahak's Fang, Dahak's Horn, or Dahak's Tooth. You gain a +1 trait bonus on Will saves against fear effects, and against any saving throw from a spell or effect created by a dragon.</Pair>
</Ability>
</>};
const _dragon_pact = {title: "Dragon Pact", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons</Link></p>
<Ability id="dragon-pact" extraClasses="trait" icon={["village"]}>
<Pair single id="dragon-pact">Dragon Pact</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="dragon-pact-benefit">At some point your family served a dragon, and acted as its emissary to others. Some members of your family have benefited from this arrangement, gaining some small fraction of that dragon's noble bearing. Choose one category of true dragon (chromatic, metallic, primal, etc.). You gain a +1 trait bonus on Diplomacy checks against that category of dragon and a +1 trait bonus on Intimidate checks against all creatures of the dragon type that are not of the same category of true dragon.</Pair>
</Ability>
</>};
const _drake_anatomist = {title: "Drake Anatomist", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons</Link></p>
<Ability id="drake-anatomist" extraClasses="trait" icon={["village"]}>
<Pair single id="drake-anatomist">Drake Anatomist</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="drake-anatomist-benefit">You gain a +1 trait bonus on damage rolls against creatures with the dragon creature type, and a +2 trait bonus on Knowledge (arcana) checks to identify dragons and their special powers and vulnerabilities.</Pair>
</Ability>
</>};
const _dusk_market_bribery = {title: "Dusk Market Bribery", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/black_markets">Black Markets</Link></p>
<Ability id="dusk-market-bribery" extraClasses="trait" icon={["village"]}>
<Pair single id="dusk-market-bribery">Dusk Market Bribery</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="dusk-market-bribery-benefit">You learned how to bribe by watching <Link to="/rule/dusk_market">Dusk Market</Link> merchants interact with Westcrown's dottari guards. Reduce the amount of gold you must spend to bribe a guard or official or compensate a conjured creature by 5%.</Pair>
</Ability>
</>};
const _ecumenical = {title: "Ecumenical", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine</Link></p>
<Ability id="ecumenical" extraClasses="trait" icon={["village"]}>
<Pair single id="ecumenical">Ecumenical</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="ecumenical-benefit">Your childhood in Magnimar (or in a similar cosmopolitan city) taught you to recognize signs of worship of demigods such as empyreal lords. You gain a +2 trait bonus on Knowledge (religion) checks involving entities other than the most influential gods. You also gain a +2 trait bonus on Diplomacy checks to influence worshipers of such entities.</Pair>
</Ability>
</>};
const _elemental_negotiator = {title: "Elemental Negotiator", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link></p>
<Ability id="elemental-negotiator" extraClasses="trait" icon={["village"]}>
<Pair single id="elemental-negotiator">Elemental Negotiator</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="elemental-negotiator-benefit">You have traveled to the Elemental Planes under the protection of a powerful group of merchants or spellcasters. At character creation, you learn one of the following languages as a bonus language: Aquan, Auran, Ignan, or Terran. Additionally, your options for bonus languages from having a high Intelligence score include the other three elemental languages, in addition to those language options allowed by your race and class. You gain a +2 trait bonus on Diplomacy and Bluff checks when using one of these languages to communicate with a creature originating from the language's corresponding Elemental Plane.</Pair>
</Ability>
</>};
const _enemy_of_slavers = {title: "Enemy of Slavers", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link></p>
<Ability id="enemy-of-slavers" extraClasses="trait" icon={["village"]}>
<Pair single id="enemy-of-slavers">Enemy of Slavers</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl>Code of Freedom</Pair>
<Pair single="benefit" id="enemy-of-slavers-benefit">If you follow this code, you are known to be single-minded with regard to slavery, and this fervent belief is easily perceived by others. Those who deal in flesh have a greater desire to appease you before matters escalate to confrontation, knowing that your wrath will be unwavering and swift. You gain a +2 trait bonus on Diplomacy and Intimidate checks made to sway the minds of slavers and anyone who otherwise keeps innocent people against their will.</Pair>
</Ability>
</>};
const _escaped_captive = {title: "Escaped Captive", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link></p>
<Ability id="escaped-captive" extraClasses="trait" icon={["village"]}>
<Pair single id="escaped-captive">Escaped Captive</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="escaped-captive-benefit">Whether you were on your way to becoming a drow slave or slated for the ghoul chattel pits, you very narrowly avoided a life of miserable captivity. You make a habit of avoiding restraints or tight spaces, gaining a +1 trait bonus on Escape Artist checks and a +2 trait bonus to CMD to avoid being pinned.</Pair>
</Ability>
</>};
const _etymologist = {title: "Etymologist", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link></p>
<Ability id="etymologist" extraClasses="trait" icon={["village"]}>
<Pair single id="etymologist">Etymologist</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="benefit" id="etymologist-benefit">When you, like all other young gnomes, were taught the hodgepodge Gnome language, you became curious about the original meaning of each word and what language it was derived from. Anytime you come across a new language, you are immediately absorbed by both how it works and what words you can co-opt from it for the Gnome language. You gain a +1 trait bonus on Linguistics checks, know one additional bonus language, and treat Linguistics as a class skill.</Pair>
</Ability>
</>};
const _excellent_penmanship = {title: "Excellent Penmanship", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 23</Link></p>
<Ability id="excellent-penmanship" extraClasses="trait" icon={["village"]}>
<Pair single id="excellent-penmanship">Excellent Penmanship</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="excellent-penmanship-benefit">You are a master of calligraphy, an art once highly valued in Lung Wa and still held in high esteem in Lingshen. The DC to detect forgeries you create increases by 2. If you attempt to persuade someone via a written message, you gain a +2 bonus on any Bluff, Diplomacy, or Intimidate check attempted for that communication. Linguistics is always a class skill for you.</Pair>
</Ability>
</>};
const _explorer = {title: "Explorer", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link></p>
<Ability id="explorer" extraClasses="trait" icon={["village"]}>
<Pair single id="explorer">Explorer</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="benefit" id="explorer-benefit">Though many gnomes settle down in communities large enough and interesting enough to provide them with all the stimulation they need to ward off the Bleaching, you're never going to be one of them. You are always looking around the next bend in the road or over the next hill, past the borders of where you are to where you want to be. At the beginning of each character level, select one desired terrain type from the following list: cold, desert, forest, jungle, mountains (including hills), plains, planes (other than the Material Plane), swamp, underground (including caves and dungeons), urban, or water. You gain a +2 bonus on all Survival checks made in your desired terrain type. At the beginning of each level, you must select a new desired terrain type to replace the old one (you cannot take the same desired terrain type two levels in a row).</Pair>
</Ability>
</>};
const _expressive_pantomime = {title: "Expressive Pantomime", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook</Link></p>
<Ability id="expressive-pantomime" extraClasses="trait" icon={["village"]}>
<Pair single id="expressive-pantomime">Expressive Pantomime</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="expressive-pantomime-benefit">You have learned to express yourself without having to depend on words. When attempting a Bluff check to deliver a secret message, you can take a -5 penalty on the check to communicate a simple message even to creatures that do not share a language with you. You cannot communicate with mindless creatures.</Pair>
</Ability>
</>};
const _fast_talker = {title: "Fast Talker", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="fast-talker" extraClasses="trait" icon={["village"]}>
<Pair single id="fast-talker">Fast Talker</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="fast-talker-benefit">You had a knack for getting yourself into trouble as a child, and as a result developed a silver tongue at an early age. You gain a +1 trait bonus on Bluff checks, and Bluff is always a class skill for you.</Pair>
</Ability>
</>};
const _feral_speech = {title: "Feral Speech", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild</Link></p>
<Ability id="feral-speech" extraClasses="trait" icon={["village"]}>
<Pair single id="feral-speech">Feral Speech</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="feral-speech-benefit">You were raised in a community that included numerous individuals who spoke with creatures of the wild. You gain one of the following languages of your choice as a bonus language: Aklo, Aquan, Auran, Giant, Ignan, or Sylvan. With your GM's permission, you can instead select Druidic, but druids are protective of their language - you are likely to find yourself hunted by druids wishing to eliminate you as a threat to their sole ownership of their secrets.</Pair>
</Ability>
</>};
const _for_the_money = {title: "For the Money", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil</Link></p>
<Ability id="for-the-money" extraClasses="trait" icon={["village"]}>
<Pair single id="for-the-money">For the Money</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="for-the-money-benefit">You gain a +2 trait bonus on skill checks to haggle prices or negotiate payment; this bonus increases to +4 if you are in a position of military or economic power over your target. You also gain a +1 trait bonus on Appraise checks and Appraise is always a class skill for you.</Pair>
</Ability>
</>};
const _founders_heritage = {title: "Founders' Heritage", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology</Link></p>
<Ability id="founders-heritage" extraClasses="trait" icon={["village"]}>
<Pair single id="founders-heritage">Founders' Heritage</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="founders-heritage-benefit">You can trace your family line back to one of the founding families of Absalom that was called by Aroden to aid him in establishing the city because of their vision and potential. You gain a +1 trait bonus on Charisma-based skill checks to influence citizens of Absalom.</Pair>
</Ability>
</>};
const _free_spirit = {title: "Free Spirit", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="free-spirit" extraClasses="trait" icon={["village"]}>
<Pair single id="free-spirit">Free Spirit</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="free-spirit-benefit"><p>You respect the freedom of others to speak as they will. Your rough-and-tumble youth taught you that everyone deserves a chance to say her piece. After all, you can always simply choose to ignore the speaker. You gain a +1 trait bonus on saving throws against language-dependent and effects with the sonic descriptor. In addition, the DC to Intimidate you increases by 2.</p>
<p><strong>Suggested Characters:</strong> Andorens, Desnans, Erastil worshipers.</p>
</Pair>
</Ability>
</>};
const _friend_in_every_town = {title: "Friend in Every Town", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="friend-in-every-town" extraClasses="trait" icon={["village"]}>
<Pair single id="friend-in-every-town">Friend in Every Town</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="friend-in-every-town-benefit">You have no problem making friends and learning information from them wherever you go. You gain a +1 trait bonus on all Knowledge (local) checks and Diplomacy checks. One of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
</>};
const _friends_in_high_places = {title: "Friends in High Places", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="friends-in-high-places" extraClasses="trait" icon={["village"]}>
<Pair single id="friends-in-high-places">Friends in High Places</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="friends-in-high-places-benefit"><p>You have often seen lawbreakers go free when they demonstrate they have friends in high places, and so you put special effort into befriending powerful people yourself. Whenever you are in an area in which you have used the Diplomacy skill to gather information, you gain a +1 trait bonus on Diplomacy and Intimidate checks. This bonus increases to +2 when dealing with government officials.</p>
<p><strong>Suggested Characters:</strong> Absalom natives, <Link to="/rule/aspis_consortium">Aspis Consortium</Link> agents, Taldans.</p>
</Pair>
</Ability>
</>};
const _friends_in_low_places = {title: "Friends in Low Places", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/bastards_of_golarion">Bastards of Golarion</Link></p>
<Ability id="friends-in-low-places" extraClasses="trait" icon={["village"]}>
<Pair single id="friends-in-low-places">Friends in Low Places</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="friends-in-low-places-benefit">Outcasts know their own, and that knowledge opens doors and loosens tongues. Gathering information in lower quarters, such as vice dens and poorer districts, takes you 1d2 hours (instead of 1d4 hours). In addition, the attitudes of any destitute or impoverished NPCs you interact with begin one step closer to helpful.</Pair>
</Ability>
</>};
const _fury_of_the_red = {title: "Fury of the Red", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons</Link></p>
<Ability id="fury-of-the-red" extraClasses="trait" icon={["village"]}>
<Pair single id="fury-of-the-red">Fury of the Red</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="fury-of-the-red-benefit">Somewhere in your family line, the mystic power of red dragons was infused into one of your relatives. If you ever take a class that requires you to select a draconic heritage, you must select a red dragon as your type. After successfully completing a charge attack, you gain a +2 trait bonus on Will saves for a full round.</Pair>
</Ability>
</>};
const _gesture_expertise = {title: "Gesture Expertise", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/black_markets">Black Markets</Link></p>
<Ability id="gesture-expertise" extraClasses="trait" icon={["village"]}>
<Pair single id="gesture-expertise">Gesture Expertise</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="gesture-expertise-benefit">You are adept at nonverbal communication. You can use a sign language or gestural system to send complex messages quickly in combat, and with a successful DC 15 Linguistics check, you can express yourself clearly enough to communicate basic messages to people who do not understand your gestures. You gain a +2 trait bonus to send secret messages via gestures using the Bluff skill, and to understand gestures with the Linguistics skill.</Pair>
</Ability>
</>};
const _gifted_smuggler = {title: "Gifted Smuggler", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2</Link></p>
<Ability id="gifted-smuggler" extraClasses="trait" icon={["village"]}>
<Pair single id="gifted-smuggler">Gifted Smuggler</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Ostenso</Pair>
<Pair single="benefit" id="gifted-smuggler-benefit">You have a knack for hiding goods on your person. Any small object you attempt to hide on your body is treated as an extraordinarily small object for the purpose of Sleight of Hand checks.</Pair>
</Ability>
</>};
const _gregarious = {title: "Gregarious", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="gregarious" extraClasses="trait" icon={["village"]}>
<Pair single id="gregarious">Gregarious</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="gregarious-benefit"><p>At least once in your childhood, your family moved for a reason you didn't understand and you were forced to leave behind your old friends and make new ones. Ever since, you have always been the first to meet strangers, make new friends, and welcome travelers. You learned that first impressions are the most important, and have a knack for making a good one. Once per day, when you attempt a Diplomacy check to improve a creature's attitude toward you, you may choose to reroll the check after the first roll is made but before the results are revealed. You must take the second result, even if it is worse.</p>
<p><strong>Suggested Characters:</strong> <Link to="/rule/eagle_knights">Eagle Knights</Link>, Garundi, Pathfinders.</p>
</Pair>
</Ability>
</>};
const _grief_filled = {title: "Grief-Filled", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="grief-filled" extraClasses="trait" icon={["village"]}>
<Pair single id="grief-filled">Grief-Filled</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="grief-filled-benefit">You are no stranger to loss and intense emotions. You gain a +2 trait bonus on all saving throws against emotion spells and effects.</Pair>
</Ability>
</>};
const _grim_optimism = {title: "Grim Optimism", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="grim-optimism" extraClasses="trait" icon={["village"]}>
<Pair single id="grim-optimism">Grim Optimism</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="grim-optimism-benefit"><p>Growing up with no one to rely on but yourself, you learned to keep a realistic view of your situation and avoid falling into the trap of cynicism with a healthy dose of wit. As a standard action, you can joke about a troublesome situation to lighten the load of dealing with it for yourself and others. You and all allies within 30 feet who can hear you gain a +2 morale bonus on saving throws against fear and pain effects for 1d4 rounds. A character cannot benefit from this effect more than once in 24 hours.</p>
<p><strong>Suggested Characters:</strong> Galtans, Rahadoumi, Ustalavs.</p>
</Pair>
</Ability>
</>};
const _hardly_a_fool = {title: "Hardly a Fool", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="hardly-a-fool" extraClasses="trait" icon={["village"]}>
<Pair single id="hardly-a-fool">Hardly a Fool</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="hardly-a-fool-benefit">You have always been able to ferret out lies and deception. Maybe you worked as an investigator for a time, you came from a place rife with lies, or you've studied the human condition long enough to read a person's face and get to the heart of his message. You gain a +1 trait bonus on Sense Motive checks and a +1 trait bonus on saving throws against illusion effects.</Pair>
</Ability>
</>};
const _harvester = {title: "Harvester", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="harvester" extraClasses="trait" icon={["village"]}>
<Pair single id="harvester">Harvester</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="harvester-benefit">You were trained to harvest all parts of an animal with care and precision. You gain a +1 trait bonus on Profession (tanner) or Profession (trapper) checks, and you may make these checks as if you were trained in the skill even if you have no ranks. Additionally, you do not risk poisoning yourself whenever you handle or apply poison taken from a venomous creature.</Pair>
</Ability>
</>};
const _heart_of_two_worlds = {title: "Heart of Two Worlds", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/bastards_of_golarion">Bastards of Golarion</Link></p>
<Ability id="heart-of-two-worlds" extraClasses="trait" icon={["village"]}>
<Pair single id="heart-of-two-worlds">Heart of Two Worlds</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="heart-of-two-worlds-benefit">Born into a world split in twain, you are particularly skilled at understanding and empathizing with those around you. You gain a +2 trait bonus on Diplomacy and Sense Motive checks involving creatures that belong to the same race (or, if human, ethnicity) as your mother or father.</Pair>
</Ability>
</>};
const _hellknight_ancestry = {title: "Hellknight Ancestry", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link></p>
<Ability id="hellknight-ancestry" extraClasses="trait" icon={["village"]}>
<Pair single id="hellknight-ancestry">Hellknight Ancestry</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="hellknight-ancestry-benefit">At least one of your parents was a <Link to="/rule/hellknights">Hellknight</Link>, and you see the orders as the embodiment of civic virtue. You gain a +2 trait bonus on Diplomacy checks to influence Hellknights and a +2 trait bonus on Intimidate checks to influence enemies of the Hellknights.</Pair>
</Ability>
</>};
const _imposing_scion = {title: "Imposing Scion", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="imposing-scion" extraClasses="trait" icon={["village"]}>
<Pair single id="imposing-scion">Imposing Scion</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="imposing-scion-benefit">The reputation of your bloodline grants you a degree of fearful respect. You gain a +1 trait bonus on Intimidate checks. If your bloodline is keyed to a specific creature type, your trait bonus increases to +2 when interacting with creatures of that type.</Pair>
</Ability>
</>};
const _inexorable_authority = {title: "Inexorable Authority", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance</Link></p>
<Ability id="inexorable-authority" extraClasses="trait" icon={["village"]}>
<Pair single id="inexorable-authority">Inexorable Authority</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="inexorable-authority-benefit">When you speak with the full weight of law, your conviction lends you a terrible presence. You gain a +2 trait bonus on Intimidate checks when enforcing or pronouncing a lawful judgment that you're legitimately deputed to enforce or pronounce.</Pair>
</Ability>
</>};
const _infernal_colleague = {title: "Infernal Colleague", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link></p>
<Ability id="infernal-colleague" extraClasses="trait" icon={["village"]}>
<Pair single id="infernal-colleague">Infernal Colleague</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Cheliax</Pair>
<Pair title="Requirements" hl>Associated with the court of the Imperial Palace in Cheliax</Pair>
<Pair single="benefit" id="infernal-colleague-benefit">Your experience working with devils has given you nerves of steel. You gain a +2 trait bonus on Will saves to resist fear effects created by outsiders.</Pair>
</Ability>
</>};
const _influence = {title: "Influence", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="influence" extraClasses="trait" icon={["village"]}>
<Pair single id="influence">Influence</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="influence-benefit">Your position in society grants you special insight into others, and special consideration or outright awe from others. Choose one of the following skills: Diplomacy, Intimidate, or Sense Motive. You gain a +1 trait bonus on that skill, and it is always a class skill for you.</Pair>
</Ability>
</>};
const _jistkan_scholar = {title: "Jistkan Scholar", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 19</Link></p>
<Ability id="jistkan-scholar" extraClasses="trait" icon={["village"]}>
<Pair single id="jistkan-scholar">Jistkan Scholar</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="jistkan-scholar-benefit">You have specialized in studying Jistkan history and culture. You gain Jistka as a bonus language and a +1 trait bonus on all Knowledge checks related to the Jistka Imperium.</Pair>
</Ability>
</>};
const _keleshite_princess = {title: "Keleshite Princess", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/qadira_gateway_to_the_east">Qadira, Gateway to the East</Link></p>
<Ability id="keleshite-princess" extraClasses="trait" icon={["village"]}>
<Pair single id="keleshite-princess">Keleshite Princess</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Qadira</Pair>
<Pair title="Requirements" hl>Keleshite; female</Pair>
<Pair single="benefit" id="keleshite-princess-benefit">You have been raised to expect obedience from those around you, regardless of their station, and are not shy about demanding what you want. You gain a +1 trait bonus to Diplomacy and Intimidate checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
</>};
const _king_in_waiting = {title: "King in Waiting", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons</Link></p>
<Ability id="king-in-waiting" extraClasses="trait" icon={["village"]}>
<Pair single id="king-in-waiting">King in Waiting</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="king-in-waiting-benefit">You've been raised with tales of the great linnorms, and taught that the death curses of these vile dragons cannot stop the truly mighty. You gain a +1 trait bonus on saves to resist curses and spells with the curse descriptor and a +3 trait bonus on saves to resist curses originating from a linnorm.</Pair>
</Ability>
</>};
const _knowing_the_enemy = {title: "Knowing the Enemy", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="knowing-the-enemy" extraClasses="trait" icon={["village"]}>
<Pair single id="knowing-the-enemy">Knowing the Enemy</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="knowing-the-enemy-benefit">You know a good deal about your most dire enemies. You gain a +1 trait bonus on checks with the Knowledge skill corresponding to your first <Link to="/ability/favored_enemy">favored enemy</Link> choice, and that Knowledge skill is always a class skill for you.</Pair>
</Ability>
</>};
const _law_enforcer = {title: "Law Enforcer", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link></p>
<Ability id="law-enforcer" extraClasses="trait" icon={["village"]}>
<Pair single id="law-enforcer">Law Enforcer</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl>Code of Vigilance</Pair>
<Pair single="benefit" id="law-enforcer-benefit">If you follow this code, you are always alert to those who transgress against the laws of civilization. You receive a +2 bonus on Sense Motive checks to gain a hunch from social situations, and begin play with a pair of masterwork manacles.</Pair>
</Ability>
</>};
const _life_of_toil = {title: "Life of Toil", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="life-of-toil" extraClasses="trait" icon={["village"]}>
<Pair single id="life-of-toil">Life of Toil</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="life-of-toil-benefit">You have lived a physically taxing life, working long hours for a master or to support a trade. Hard physical labor has toughened your body and mind. You gain a +1 trait bonus on Fortitude saves.</Pair>
</Ability>
</>};
const _lost_nobility = {title: "Lost Nobility", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link></p>
<Ability id="lost-nobility" extraClasses="trait" icon={["village"]}>
<Pair single id="lost-nobility">Lost Nobility</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="lost-nobility-benefit">Your family was prominent before the rise of Thrune, but that legacy is now forgotten by all but you. You hold every Chelish government official (including <Link to="/rule/hellknights">Hellknights</Link>) personally responsible for your lost glory. You gain a +1 trait bonus on attack and damage rolls against these officials.</Pair>
</Ability>
</>};
const _maestro_of_the_society = {title: "Maestro of the Society", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link>, <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="maestro-of-the-society" extraClasses="trait" icon={["village"]}>
<Pair single id="maestro-of-the-society">Maestro of the Society</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="benefit" id="maestro-of-the-society-benefit">The skills of Golarion's greatest musicians are at your fingertips, thanks to the vast treasure trove of musical knowledge in the vaults beneath the Grand Lodge in Absalom. Studying this knowledge gives you the ability to use your bardic performance an additional 3 rounds per day.</Pair>
</Ability>
</>};
const _malevolent_temptations = {title: "Malevolent Temptations", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven</Link></p>
<Ability id="malevolent-temptations" extraClasses="trait" icon={["village"]}>
<Pair single id="malevolent-temptations">Malevolent Temptations</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="malevolent-temptations-benefit">You have resisted or escaped the temptations of a disguised hag, and you learned much from your encounter. You gain a +1 trait bonus on Sense Motive checks and a +2 trait bonus on saving throws to disbelieve illusions.</Pair>
</Ability>
</>};
const _marked_by_unknown_forces = {title: "Marked by Unknown Forces", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/bastards_of_golarion">Bastards of Golarion</Link></p>
<Ability id="marked-by-unknown-forces" extraClasses="trait" icon={["village"]}>
<Pair single id="marked-by-unknown-forces">Marked by Unknown Forces</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="marked-by-unknown-forces-benefit">That which has marked you for power has also given you proof to show others. You may cast <Link to="/spell/light">light</Link> three times per day as a spell-like ability, but this ability only targets the palm of your hand, and it manifests as a glowing sigil representing your ominous birth - a holy or unholy symbol, a demonic symbol, or perhaps some other distinctive marking established by you and your GM. Those who recognize this symbol have a starting attitude toward you of one step closer to friendly (if they are followers of or scholars studying the sign) or one step closer to hostile (if they are opposed to the sign or its followers).</Pair>
</Ability>
</>};
const _master_messenger = {title: "Master Messenger", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2</Link></p>
<Ability id="master-messenger" extraClasses="trait" icon={["village"]}>
<Pair single id="master-messenger">Master Messenger</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Riddleport</Pair>
<Pair single="benefit" id="master-messenger-benefit">Your secret messages are rarely misunderstood. If you fail your Bluff check to pass a simple message by 5 or more, you deliver no message instead of delivering the wrong message.</Pair>
</Ability>
</>};
const _mediator = {title: "Mediator", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="mediator" extraClasses="trait" icon={["village"]}>
<Pair single id="mediator">Mediator</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="mediator-benefit">You have a way with calming tempers, using cool logic to sooth heated disagreements, and you were always the one to settle arguments among your friends, family, and community. You receive a +1 trait bonus on Diplomacy checks. In addition, you receive a +1 trait bonus to the DC of any charm or compulsion effect that does not provide ongoing control and results in peaceful acts, such as calm emotions, sleep, or a suggestion to lay down arms.</Pair>
</Ability>
</>};
const _memorable = {title: "Memorable", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="memorable" extraClasses="trait" icon={["village"]}>
<Pair single id="memorable">Memorable</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="memorable-benefit"><p>Growing up amid a large number of children, you learned quickly how to get others' attention and keep it. When you modify a character's attitude with the Diplomacy or Intimidate skill, the attitude change lasts 1-1/2 times longer than it otherwise would. Whenever you create a fear or mind-affecting effect that imposes a penalty or bonus with a duration of at least 2 rounds, it lasts 1 additional round after it would normally end. For example, if you demoralize a foe with an Intimidate check and beat the DC by 5, the victim is shaken for 3 rounds instead of the usual 2 rounds.</p>
<p><strong>Suggested Characters:</strong> Free Captains, gnomes, Keleshites.</p>
</Pair>
</Ability>
</>};
const _mentored = {title: "Mentored", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="mentored" extraClasses="trait" icon={["village"]}>
<Pair single id="mentored">Mentored</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="mentored-benefit">A tutor or private instructor guided you in learning your art, profession, or trade, and through your education, you became capable of teaching and guiding others. Choose a single Craft, Perform, or Profession skill. You gain a +1 trait bonus on checks with that skill. You also gain a +1 trait bonus when you aid another's skill check with any skill.</Pair>
</Ability>
</>};
const _mercenary = {title: "Mercenary", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="mercenary" extraClasses="trait" icon={["village"]}>
<Pair single id="mercenary">Mercenary</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="mercenary-benefit">For everything there is a price, and you are a negotiator at heart. You gain a +2 trait bonus on Diplomacy, Intimidate, and Sense Motive checks made while negotiating payment for a quest or a service that you provide.</Pair>
</Ability>
</>};
const _merchant = {title: "Merchant", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="merchant" extraClasses="trait" icon={["village"]}>
<Pair single id="merchant">Merchant</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="merchant-benefit">You lived your life as a merchant, buying and selling goods. You gain a +1 trait bonus on any Appraise and Sense Motive checks you attempt while bargaining for the price of goods. Appraise is always a class skill for you.</Pair>
</Ability>
</>};
const _mock_gladiator = {title: "Mock Gladiator", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets</Link></p>
<Ability id="mock-gladiator" extraClasses="trait" icon={["village"]}>
<Pair single id="mock-gladiator">Mock Gladiator</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="mock-gladiator-benefit">You have learned how to work a crowd in Magnimar's mock-gladiator fights. Choose one weapon. You take no penalty on attack rolls when dealing nonlethal damage with that weapon, and once per day if you score a critical hit with the weapon, you can immediately attempt an Intimidate check to demoralize your target.</Pair>
</Ability>
</>};
const _monster_scholar = {title: "Monster Scholar", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook</Link></p>
<Ability id="monster-scholar" extraClasses="trait" icon={["village"]}>
<Pair single id="monster-scholar">Monster Scholar</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="monster-scholar-benefit">Your study of monsters keeps you well informed. Choose either Knowledge (arcana), Knowledge (dungeoneering), or Knowledge (nature). Whenever you succeed at a Knowledge check to identify a creature and its special powers - or vulnerabilities - with the chosen skill, you gain one additional piece of useful information (as if your skill check result had been 5 higher).</Pair>
</Ability>
</>};
const _monster_stalker = {title: "Monster Stalker", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook</Link></p>
<Ability id="monster-stalker" extraClasses="trait" icon={["village"]}>
<Pair single id="monster-stalker">Monster Stalker</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="monster-stalker-benefit">You've been raised to hunt certain beasts. Choose either aberrations, animals, dragons, fey, magical beasts, oozes, or vermin. You gain a limited version of the scent ability (15 feet normal, 30 feet upwind, 5 feet downwind) that detects only your chosen creature type.</Pair>
</Ability>
</>};
const _natural_born_leader_social = {title: "Natural-Born Leader (Social)", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="natural-born-leader-social" extraClasses="trait" icon={["village"]}>
<Pair single id="natural-born-leader-social">Natural-Born Leader (Social)</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="natural-born-leader-social-benefit">You've always found yourself in positions where others look up to you as a leader, and you can distinctly remember an event from your early childhood where you led several other children to accomplish a goal that each of you individually could not. All cohorts, followers, or summoned creatures under your leadership gain a +1 morale bonus on Will saves to avoid mind-affecting effects. If you ever take the <Link to="/feat/leadership">Leadership</Link> feat, you gain a +1 trait bonus to your Leadership score.</Pair>
</Ability>
</>};
const _nightstalls_navigator = {title: "Nightstalls Navigator", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/black_markets">Black Markets</Link></p>
<Ability id="nightstalls-navigator" extraClasses="trait" icon={["village"]}>
<Pair single id="nightstalls-navigator">Nightstalls Navigator</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="nightstalls-navigator-benefit">Long exposure to the endless variety of the <Link to="/rule/nightstalls">Nightstalls</Link> grants you a +2 trait bonus on Diplomacy checks to gather information and on Knowledge (local) checks to recall information about criminal activities. One of these (your choice) is always a class skill for you.</Pair>
</Ability>
</>};
const _noble_savage = {title: "Noble Savage", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="noble-savage" extraClasses="trait" icon={["village"]}>
<Pair single id="noble-savage">Noble Savage</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl>Associated with the <Link to="/rule/ulfen_guard">Ulfen Guard</Link></Pair>
<Pair single="benefit" id="noble-savage-benefit">You hail from the fringes of civilization or the bottommost strata of society, but something in your character makes that seem endearing. You gain a +2 trait bonus on Diplomacy and Perform checks when dealing with people of high social standing.</Pair>
</Ability>
</>};
const _nonchalant_thuggery = {title: "Nonchalant Thuggery", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link></p>
<Ability id="nonchalant-thuggery" extraClasses="trait" icon={["village"]}>
<Pair single id="nonchalant-thuggery">Nonchalant Thuggery</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="nonchalant-thuggery-benefit">You are adept at keeping witnesses from noticing that anything is wrong. You gain a +4 trait bonus on Bluff checks to keep others from noticing your aggressive actions.</Pair>
</Ability>
</>};
const _numerian_fluid_indulger = {title: "Numerian Fluid Indulger", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link></p>
<Ability id="numerian-fluid-indulger" extraClasses="trait" icon={["village"]}>
<Pair single id="numerian-fluid-indulger">Numerian Fluid Indulger</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Numeria</Pair>
<Pair title="Requirements" hl>Associated with the court of the Palace of Fallen Stars in Numeria</Pair>
<Pair single="benefit" id="numerian-fluid-indulger-benefit">You have tasted Numerian fluids many times. Once per day after rolling to determine the side effects of consuming a Numerian fluid, you can roll on the table again, but you must take the second result.</Pair>
</Ability>
</>};
const _obnoxious = {title: "Obnoxious", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="obnoxious" extraClasses="trait" icon={["village"]}>
<Pair single id="obnoxious">Obnoxious</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="obnoxious-benefit">You have long since forgotten to care what people think about you - though your interactions are always memorable, at the very least. Choose Perform (act), Perform (comedy), Perform (oratory), or Perform (sing); you gain a +1 trait bonus on checks with the chosen skill and gain it as a class skill.</Pair>
</Ability>
</>};
const _official_ties = {title: "Official Ties", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="official-ties" extraClasses="trait" icon={["village"]}>
<Pair single id="official-ties">Official Ties</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="official-ties-benefit">You maintain a friendship with one or more figures of authority. You have minor sway with one of these figures if your game uses individual influence. You gain a +2 trait bonus on Diplomacy checks to influence people in positions of authority aware of your contact and who have an attitude of no worse than indifferent toward the government the contact represents. You also take a -2 penalty on Diplomacy checks to influence criminals and agents of opposing governments, if those characters are aware of your association with authorities. If you lose your contact, you lose the benefits of this trait for 1 month, after which you can make a new contact.</Pair>
</Ability>
</>};
const _ordinary = {title: "Ordinary", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="ordinary" extraClasses="trait" icon={["village"]}>
<Pair single id="ordinary">Ordinary</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="ordinary-benefit">The only thing extraordinary about your appearance is its ordinariness. You carry yourself in an understated way, and many people who see your face soon forget it. You gain a +4 trait bonus on Stealth checks whenever you attempt to hide in a crowd.</Pair>
</Ability>
</>};
const _orphaned = {title: "Orphaned", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="orphaned" extraClasses="trait" icon={["village"]}>
<Pair single id="orphaned">Orphaned</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="orphaned-benefit">You grew up separated from your birth parents, and had to learn to watch out for yourself. You gain a +1 trait bonus on Survival checks, and Survival is always a class skill for you.</Pair>
</Ability>
</>};
const _outsider_enemy = {title: "Outsider Enemy", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 29</Link></p>
<Ability id="outsider-enemy" extraClasses="trait" icon={["village"]}>
<Pair single id="outsider-enemy">Outsider Enemy</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="outsider-enemy-benefit">One of your ancestors was a conjurer who specialized in binding outsiders of a particular type. You have inherited some of his skills, but also some of his enemies. Choose a single outsider subtype. The DC of your spells increases by 1 against outsiders of the chosen subtype. Outsiders of the chosen subtype gain a +1 morale bonus on attack and damage rolls made against you, and their starting attitude toward you is reduced by one step.</Pair>
</Ability>
</>};
const _pack_savvy = {title: "Pack Savvy", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes</Link></p>
<Ability id="pack-savvy" extraClasses="trait" icon={["village"]}>
<Pair single id="pack-savvy">Pack Savvy</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="pack-savvy-benefit">You have learned how to gain the respect of gnolls in your region, and you know something of their social structure. You gain a +3 trait bonus on Charisma-based skill checks when dealing with gnolls.</Pair>
</Ability>
</>};
const _passionate_inertia = {title: "Passionate Inertia", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption</Link></p>
<Ability id="passionate-inertia" extraClasses="trait" icon={["village"]}>
<Pair single id="passionate-inertia">Passionate Inertia</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="passionate-inertia-benefit">Your passions drive your thinking so irresistibly that even magic struggles to change your mind. You gain a +2 trait bonus on Will saves to resist having your mind changed about something, but you take a -1 penalty on Will saves to resist temptation and compulsions you might reasonably be already inclined toward.</Pair>
</Ability>
</>};
const _poverty_stricken = {title: "Poverty-Stricken", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="poverty-stricken" extraClasses="trait" icon={["village"]}>
<Pair single id="poverty-stricken">Poverty-Stricken</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="poverty-stricken-benefit">Your childhood was tough, and your parents always had to make every copper piece count. Hunger was your constant companion, and you often had to live off the land or sleep in the wild. You gain a +1 bonus on Survival checks, and Survival is always a class skill for you.</Pair>
</Ability>
</>};
const _practiced_disruptor = {title: "Practiced Disruptor", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets</Link></p>
<Ability id="practiced-disruptor" extraClasses="trait" icon={["village"]}>
<Pair single id="practiced-disruptor">Practiced Disruptor</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="practiced-disruptor-benefit">You are experienced at facing off against spellcasters. You can attempt Knowledge (arcana) checks untrained; if you have ranks in that skill, you instead gain a +1 trait bonus on those checks. The concentration DC to cast a spell defensively in your threatened area increases by 1.</Pair>
</Ability>
</>};
const _preternatural_awareness = {title: "Preternatural Awareness", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven</Link></p>
<Ability id="preternatural-awareness" extraClasses="trait" icon={["village"]}>
<Pair single id="preternatural-awareness">Preternatural Awareness</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="preternatural-awareness-benefit">Multiple encounters with fell magic have left you wary. You gain a +2 trait bonus on Perception and Sense Motive checks to notice cursed objects, haunts, and magically disguised creatures.</Pair>
</Ability>
</>};
const _questing_hellknight = {title: "Questing Hellknight", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight</Link></p>
<Ability id="questing-hellknight" extraClasses="trait" icon={["village"]}>
<Pair single id="questing-hellknight">Questing Hellknight</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="questing-hellknight-benefit">You are a quick study when it comes to local laws. Once per day, you can attempt a Knowledge (local) check untrained to recall information about local laws, rulers, and popular locations. Additionally, you gain a +1 trait bonus on Knowledge (local) checks, and Knowledge (local) is a class skill for you.</Pair>
</Ability>
</>};
const _reassuring_advice = {title: "Reassuring Advice", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology</Link></p>
<Ability id="reassuring-advice" extraClasses="trait" icon={["village"]}>
<Pair single id="reassuring-advice">Reassuring Advice</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="reassuring-advice-benefit">You've studied the speeches and writings of a leader or thinker who served as a reassuring voice in her community in the turbulent times after Aroden died, painfully learning which portions of Aroden's advice no longer applied and what of his writings could still be usefully applied. Once per day, you can speak Aroden's words of encouragement to grant any human a +1 insight bonus on any attack roll, saving throw, or skill check of his choice within the following hour. The choice to use the insight bonus must be made before the related roll is made.</Pair>
</Ability>
</>};
const _red_silk_frankness = {title: "Red Silk Frankness", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/black_markets">Black Markets</Link></p>
<Ability id="red-silk-frankness" extraClasses="trait" icon={["village"]}>
<Pair single id="red-silk-frankness">Red Silk Frankness</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="red-silk-frankness-benefit">You learned from the <Link to="/rule/red_silk_route">Forthright Men</Link>, the Coins' peace-keeping thieves' guild, to use candor to avoid trouble. You gain a +5 trait bonus on Diplomacy checks to convince others to overlook offensive or illegal acts. Diplomacy is always a class skill for you.</Pair>
</Ability>
</>};
const _relic_proof = {title: "Relic-Proof", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_society_primer">Pathfinder Society Primer</Link></p>
<Ability id="relic-proof" extraClasses="trait" icon={["village"]}>
<Pair single id="relic-proof">Relic-Proof</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="relic-proof-benefit">Your experiments - both your successes and failures - have inured you to the effects of stored magic. You gain a +1 trait bonus on saving throws against effects produced by spell completion and spell trigger items.</Pair>
</Ability>
</>};
const _rest_for_the_wicked = {title: "Rest for the Wicked", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/bastards_of_golarion">Bastards of Golarion</Link></p>
<Ability id="rest-for-the-wicked" extraClasses="trait" icon={["village"]}>
<Pair single id="rest-for-the-wicked">Rest for the Wicked</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="rest-for-the-wicked-benefit">Often forced to go without food or stimulation for days at a time, you have learned to use prolonged sleep as a means of escape and a way to heal your wounds. You heal temporary ability damage at a rate of 3 points per day of complete <Link to="/rule/bed_rest">bed rest</Link>. A normal night of rest (8 hours) still heals you at a rate of only 1 point of temporary ability damage per night of rest.</Pair>
</Ability>
</>};
const _rich_parents = {title: "Rich Parents", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="rich-parents" extraClasses="trait" icon={["village"]}>
<Pair single id="rich-parents">Rich Parents</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="rich-parents-benefit">You were born into a rich family, perhaps even the nobility, and even though you turned to a life of adventure, you enjoy a one-time benefit to your initial finances: your starting wealth increases to 900 gp.</Pair>
</Ability>
</>};
const _rugged_dragon_hunter = {title: "Rugged Dragon Hunter", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons</Link></p>
<Ability id="rugged-dragon-hunter" extraClasses="trait" icon={["village"]}>
<Pair single id="rugged-dragon-hunter">Rugged Dragon Hunter</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="rugged-dragon-hunter-benefit">You gain a +2 trait bonus on Survival checks to track dragons. If you have the <Link to="/ability/favored_terrain">favored terrain</Link> class ability, add a +1 bonus to check for skills affected by this ability, as long as you're using these skills in regards to a dragon.</Pair>
</Ability>
</>};
const _savage = {title: "Savage", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="savage" extraClasses="trait" icon={["village"]}>
<Pair single id="savage">Savage</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="savage-benefit">You were born and raised in untamed lands far from civilization. You learned to survive in the elements among brutal humanoids and beasts. You gain a +1 trait bonus on Knowledge (nature) checks and a +1 trait bonus on Survival checks to get along in the wild. Knowledge (nature) is always a class skill for you.</Pair>
</Ability>
</>};
const _savant = {title: "Savant", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="savant" extraClasses="trait" icon={["village"]}>
<Pair single id="savant">Savant</Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl><Link to="/rule/kitharodian_academy">Kitharodian Academy</Link></Pair>
<Pair single="benefit" id="savant-benefit">From a very young age, the ability to master performance types has come quite naturally to you. Choose a performance type. You gain a +2 trait bonus on all Perform checks made using that performance type. Perform is always a class skill for you.</Pair>
</Ability>
</>};
const _seafaring_reputation = {title: "Seafaring Reputation", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets</Link></p>
<Ability id="seafaring-reputation" extraClasses="trait" icon={["village"]}>
<Pair single id="seafaring-reputation">Seafaring Reputation</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="seafaring-reputation-benefit">The Wave Riders' fame helps you convince seafarers to cooperate. You gain a +1 trait bonus on Diplomacy and Intimidate checks against sailors and residents of Absalom.</Pair>
</Ability>
</>};
const _secret_keeper_qac = {title: "Secret-Keeper (QaC)", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="secret-keeper-qac" extraClasses="trait" icon={["village"]}>
<Pair single id="secret-keeper-qac">Secret-Keeper (QaC)</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="secret-keeper-qac-benefit"><p>Growing up in a land where paranoia fills the air and any accusation of heresy or dissent can spell doom for whole families, you learned very quickly to keep a secret. You gain a +1 trait bonus on Bluff checks and a +1 trait bonus on saving throws against divinations, domination effects, and effects that would compel you to speak the truth.</p>
<p><strong>Suggested Characters:</strong> Chelaxians, Galtans, Nidalese.</p>
</Pair>
</Ability>
</>};
const _seeker = {title: "Seeker", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="seeker" extraClasses="trait" icon={["village"]}>
<Pair single id="seeker">Seeker</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="seeker-benefit">You are always on the lookout for reward and danger. You gain a +1 trait bonus on Perception checks, and Perception is always a class skill for you.</Pair>
</Ability>
</>};
const _self_reliant = {title: "Self-Reliant", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild</Link></p>
<Ability id="self-reliant" extraClasses="trait" icon={["village"]}>
<Pair single id="self-reliant">Self-Reliant</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="self-reliant-benefit">You know how to work with your hands and aren't dependent on complex tools. When attempting Craft checks, you take no penalty when using improvised tools. At the GM's discretion, you can attempt certain Craft checks even when no tools are available, though you take a -2 penalty.</Pair>
</Ability>
</>};
const _signature_moves = {title: "Signature Moves", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/bastards_of_golarion">Bastards of Golarion</Link></p>
<Ability id="signature-moves" extraClasses="trait" icon={["village"]}>
<Pair single id="signature-moves">Signature Moves</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="signature-moves-benefit">You're known for some unique item that has become your trademark. Your starting equipment includes a single masterwork item worth less than 900 gp, and you gain a +1 trait bonus on Bluff and Intimidate checks while wielding this item in one or both hands.</Pair>
</Ability>
</>};
const _simple_disciple = {title: "Simple Disciple", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="simple-disciple" extraClasses="trait" icon={["village"]}>
<Pair single id="simple-disciple">Simple Disciple</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="simple-disciple-benefit">You picked up skill in a craft or a profession during your time at a monastery. You gain a +1 trait bonus on checks with a Profession or Craft skill of your choice.</Pair>
</Ability>
</>};
const _slave_runner = {title: "Slave Runner", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="slave-runner" extraClasses="trait" icon={["village"]}>
<Pair single id="slave-runner">Slave Runner</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="slave-runner-benefit">You witnessed or were party to the rescue of a halfling from Chelish slavery by the <Link to="/rule/bellflower_network">Bellflower Network</Link> or <Link to="/rule/eagle_knights">Eagle Knights</Link>. Once per day when attempting to directly free a slave, you gain a +2 trait bonus on your choice of an Acrobatics check, an Escape Artist check, a Stealth check, or a skill check attempted as part of a heist or pursuit</Pair>
</Ability>
</>};
const _snowbound = {title: "Snowbound", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="snowbound" extraClasses="trait" icon={["village"]}>
<Pair single id="snowbound">Snowbound</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="snowbound-benefit"><p>You came of age in a place with harsh winters amid a culture that rewarded you for testing your limits in the cold. You gain a +1 trait bonus on saving throws against cold effects and a +2 trait bonus on Fortitude saves against the effects of cold weather.</p>
<p><strong>Suggested Characters:</strong> Irriseni, Kellids, Ulfen.</p>
</Pair>
</Ability>
</>};
const _student_of_philosophy = {title: "Student of Philosophy", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="student-of-philosophy" extraClasses="trait" icon={["village"]}>
<Pair single id="student-of-philosophy">Student of Philosophy</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="student-of-philosophy-benefit">You were trained in a now-defunct philosophical tradition - such as that of the now-destroyed Galtan universities or Lirgeni astrologers - and learned to use logic and reason to persuade others. You can use your Intelligence modifier in place of your Charisma modifier on Diplomacy checks to persuade others and on Bluff checks to convince others that a lie is true. (This trait does not affect Diplomacy checks to gather information or Bluff checks to feint in combat.) Suggested Characters: Arodenites, Galtans, Sodden Lands natives.</Pair>
</Ability>
</>};
const _style_sage = {title: "Style Sage", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="style-sage" extraClasses="trait" icon={["village"]}>
<Pair single id="style-sage">Style Sage</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="style-sage-benefit">You have a passion for history and news concerning monastic disciplines. You gain a +1 trait bonus on checks with your choice of either Knowledge (local) or Knowledge (history), and the one you choose is always a class skill for you. In addition, you gain a +1 trait bonus on Diplomacy checks made to gather information about any person with levels in monk.</Pair>
</Ability>
</>};
const _subjective_truth = {title: "Subjective Truth", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption</Link></p>
<Ability id="subjective-truth" extraClasses="trait" icon={["village"]}>
<Pair single id="subjective-truth">Subjective Truth</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="subjective-truth-benefit">You are able to divorce your knowledge of the facts from your beliefs about the truth, and thus from your facial expressions and body language. You gain a +2 trait bonus on Bluff checks to lie, provided the person you're lying to has never known you to lie to him. Failing this check counts as being caught in a lie by the target, negating any future use of this bonus against that person.</Pair>
</Ability>
</>};
const _supportive = {title: "Supportive", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="supportive" extraClasses="trait" icon={["village"]}>
<Pair single id="supportive">Supportive</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="supportive-benefit"><p>You were forced to get by in an isolated enclave, whether surrounded by a community that feared and suspected you or in a remote locale far from other people, and you became practiced at assisting your friends. You gain a +1 trait bonus on skill checks to use the aid another action.</p>
<p><strong>Suggested Characters:</strong> Halflings, Mwangi, Tians.</p>
</Pair>
</Ability>
</>};
const _suspicious = {title: "Suspicious", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="suspicious" extraClasses="trait" icon={["village"]}>
<Pair single id="suspicious">Suspicious</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="suspicious-benefit">You discovered at an early age that someone you trusted, perhaps an older sibling or a parent, had lied to you, and lied often, about something you had taken for granted, leaving you quick to question the claims of others. You gain a +1 trait bonus on Sense Motive checks, and Sense Motive is always a class skill for you.</Pair>
</Ability>
</>};
const _talented = {title: "Talented", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="talented" extraClasses="trait" icon={["village"]}>
<Pair single id="talented">Talented</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="talented-benefit">You are a virtuoso musician, actor, or storyteller. You gain a +1 trait bonus on checks with a single Perform skill (your choice), and all Perform skills are always class skills for you.</Pair>
</Ability>
</>};
const _tireless_logic = {title: "Tireless Logic", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="tireless-logic" extraClasses="trait" icon={["village"]}>
<Pair single id="tireless-logic">Tireless Logic</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="tireless-logic-benefit">Your curious mind figures out even the most complex problems. Once per day when you make an Intelligence-based skill check or ability check, you can roll twice and take the better result.</Pair>
</Ability>
</>};
const _triaxus_trained = {title: "Triaxus-Trained", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons</Link></p>
<Ability id="triaxus-trained" extraClasses="trait" icon={["village"]}>
<Pair single id="triaxus-trained">Triaxus-Trained</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="triaxus-trained-benefit">You have been trained in intricate dragon-handling techniques that originated on Triaxus. You gain a +1 trait bonus on Perception checks, and a +1 trait bonus on skill checks attempted as part of trying to influence a dragon.</Pair>
</Ability>
</>};
const _tropical_upbringing = {title: "Tropical Upbringing", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="tropical-upbringing" extraClasses="trait" icon={["village"]}>
<Pair single id="tropical-upbringing">Tropical Upbringing</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="tropical-upbringing-benefit"><p>You were raised in searing-hot deserts, plains, jungles, or other areas, and developed an impressive resistance to heat. You gain a +1 trait bonus on saving throws against fire effects and a +2 trait bonus on Fortitude saves against the effects of hot weather.</p>
<p><strong>Suggested Characters:</strong> Garundi, Keleshites, Mwangi.</p>
</Pair>
</Ability>
</>};
const _trustworthy = {title: "Trustworthy", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="trustworthy" extraClasses="trait" icon={["village"]}>
<Pair single id="trustworthy">Trustworthy</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="trustworthy-benefit">People find it easy to put their faith in you. You gain a +1 trait bonus on Bluff checks made to fool someone. You also gain a +1 trait bonus on Diplomacy checks, and Diplomacy is always a class skill for you.</Pair>
</Ability>
</>};
const _truths_agent = {title: "Truth's Agent", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="truths-agent" extraClasses="trait" icon={["village"]}>
<Pair single id="truths-agent">Truth's Agent</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="truths-agent-benefit">You are skilled at weeding out information. You gain a +1 trait bonus on all Diplomacy checks made to gather information and all Knowledge (local) checks. Knowledge (local) is always a class skill for you.</Pair>
</Ability>
</>};
const _unabashed_gall = {title: "Unabashed Gall", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance</Link></p>
<Ability id="unabashed-gall" extraClasses="trait" icon={["village"]}>
<Pair single id="unabashed-gall">Unabashed Gall</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="unabashed-gall-benefit">Your total indifference to the law even as you're breaking it is such that those watching you are stunned. Whenever you commit an unexpected and outrageously unlawful act (such as knowingly destroying or stealing something) that would elicit a hostile response from another creature, you may attempt a Bluff check opposed by the opponent's Sense Motive check. If you're successful, you and any allies who were willfully expecting your unlawful deed may act in a surprise round. For each ally willfully expecting your unlawful deed, you take a cumulative -2 penalty on your Bluff check. If your Bluff check fails, there is no surprise round. Regardless of whether your Bluff check succeeds, you and any allies willfully taking advantage of your unlawful deed treat your initiative checks for the duration of combat as though you had each rolled a 1.</Pair>
</Ability>
</>};
const _unbalanced_insight = {title: "Unbalanced Insight", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil</Link></p>
<Ability id="unbalanced-insight" extraClasses="trait" icon={["village"]}>
<Pair single id="unbalanced-insight">Unbalanced Insight</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="unbalanced-insight-benefit">You gain Aklo as a bonus language, and gain a +2 trait bonus on all saving throws to resist any effects or spells originating from aberrations that cause confusion or fear.</Pair>
</Ability>
</>};
const _unintentional_linguist = {title: "Unintentional Linguist", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="unintentional-linguist" extraClasses="trait" icon={["village"]}>
<Pair single id="unintentional-linguist">Unintentional Linguist</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="unintentional-linguist-benefit">You can speak with outsiders. You gain a +1 trait bonus on all Linguistics checks, and you begin play knowing one of the following languages (in addition to those granted by your race and Intelligence modifier): Abyssal, Aquan, Celestial, Ignan, Infernal, Protean, or Terran.</Pair>
</Ability>
</>};
const _unnatural_revenge = {title: "Unnatural Revenge", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="unnatural-revenge" extraClasses="trait" icon={["village"]}>
<Pair single id="unnatural-revenge">Unnatural Revenge</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="unnatural-revenge-benefit">You gain a +2 trait bonus on all Intimidate checks against creatures of the animal, fey, or plant type, and Intimidate is always a class skill for you.</Pair>
</Ability>
</>};
const _unpredictable = {title: "Unpredictable", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="unpredictable" extraClasses="trait" icon={["village"]}>
<Pair single id="unpredictable">Unpredictable</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="unpredictable-benefit">Your actions often seem random and chaotic to others, but there is a method to your madness. You gain a +1 trait bonus on Bluff checks, and Bluff is always a class skill for you.</Pair>
</Ability>
</>};
const _untapped_potential = {title: "Untapped Potential", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons</Link></p>
<Ability id="untapped-potential" extraClasses="trait" icon={["village"]}>
<Pair single id="untapped-potential">Untapped Potential</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="untapped-potential-benefit">You've been part of one of Mengkare's minor experiments. Once per day, you can cast <Link to="/spell/detect_psychic_significance">detect psychic significance</Link> or <Link to="/spell/telekinetic_projectile">telekinetic projectile</Link> as a spell-like ability, with a caster level equal to your character level.</Pair>
</Ability>
</>};
const _unwelcome_business = {title: "Unwelcome Business", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/merchants_manifest">Merchant's Manifest</Link></p>
<Ability id="unwelcome-business" extraClasses="trait" icon={["village"]}>
<Pair single id="unwelcome-business">Unwelcome Business</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="unwelcome-business-benefit">You specialize in delivering or procuring shipments where those commodities are not allowed or where your identity would elicit negative bias. You gain a +1 trait bonus on Disguise or Sleight of Hand checks, and that skill becomes a class skill for you. In addition, choose one humanoid species; you ignore the -2 penalty on Disguise checks to disguise yourself as a member of that species.</Pair>
</Ability>
</>};
const _veiled_disciple = {title: "Veiled Disciple", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="veiled-disciple" extraClasses="trait" icon={["village"]}>
<Pair single id="veiled-disciple">Veiled Disciple</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="veiled-disciple-benefit">Trained in espionage, you're skilled at passing messages and staying on task. You gain a +1 trait bonus on Bluff checks made to pass secret messages and a +1 trait bonus on saving throws against charm and compulsion effects.</Pair>
</Ability>
</>};
const _vengeful_social = {title: "Vengeful (Social)", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="vengeful-social" extraClasses="trait" icon={["village"]}>
<Pair single id="vengeful-social">Vengeful (Social)</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="vengeful-social-benefit">You were brutally betrayed, and you have dedicated yourself to pursuing revenge. Choose a humanoid subtype that is not your own from the following list: dwarf, elf, gnome, halfling, or human. You gain a +2 trait bonus on Intimidate checks against creatures with that subtype.</Pair>
</Ability>
</>};
const _vigilant_spycatcher = {title: "Vigilant Spycatcher", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets</Link></p>
<Ability id="vigilant-spycatcher" extraClasses="trait" icon={["village"]}>
<Pair single id="vigilant-spycatcher">Vigilant Spycatcher</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="vigilant-spycatcher-benefit">Paranoid parents or a military trainer taught you to keep vigilant for spies. If you roll less than 10 on Perception checks to see through disguises, determine your result as if you had rolled 10.</Pair>
</Ability>
</>};
const _voices_in_your_head = {title: "Voices in your Head", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link></p>
<Ability id="voices-in-your-head" extraClasses="trait" icon={["village"]}>
<Pair single id="voices-in-your-head">Voices in your Head</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="voices-in-your-head-benefit">Through pacts with eldritch beings or a simple quirk of circumstance, your voice has an uncanny rapport with those swept up in madness. Once per day as an immediate action, you can issue a command to a confused creature within 30 feet. This allows the creature to immediately reroll on the <Link to="/misc/confused">confused condition table</Link>, and you can pick which of the two actions - the action of its initial roll or that of the reroll - the creature takes. Confused creatures do not need to understand you for this trait to take effect.</Pair>
</Ability>
</>};
const _wanderlust = {title: "Wanderlust", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="wanderlust" extraClasses="trait" icon={["village"]}>
<Pair single id="wanderlust">Wanderlust</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="wanderlust-benefit"><p>Your childhood was brightened by the new places you constantly saw as you traveled with your parents, who were merchants. Still excited by travel, you gain great energy when traveling overland. Treat your base land speed as 10 feet higher when determining your overland speed.</p>
<p><strong>Suggested Characters:</strong> Desnans, halflings, Varisians.</p>
</Pair>
</Ability>
</>};
const _wasteland_vargrant = {title: "Wasteland Vargrant", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes</Link></p>
<Ability id="wasteland-vargrant" extraClasses="trait" icon={["village"]}>
<Pair single id="wasteland-vargrant">Wasteland Vargrant</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="wasteland-vargrant-benefit">You have spent most of your life learning how to survive in wastelands, and a lack of normal survival resources apparent in the environment is not a problem for you. When you gain this trait, pick one type of wasteland from the following list: blighted, Abyssal, desert, or waterlogged. You gain a +2 trait bonus on Survival checks in that type of wasteland terrain. (The GM determines whether terrain falls into the chosen type of wasteland.) Once you choose a type of wasteland terrain to gain this benefit in, you cannot change it later.</Pair>
</Ability>
</>};
const _weathered_emissary = {title: "Weathered Emissary", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="weathered-emissary" extraClasses="trait" icon={["village"]}>
<Pair single id="weathered-emissary">Weathered Emissary</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="weathered-emissary-benefit">Your travels in the wildlands gave you insight into how to survive their dangers and communicate with their inhabitants. You gain a +1 trait bonus on all Linguistics and Survival checks, and Linguistics is always a class skill for you.</Pair>
</Ability>
</>};
const _wicked_leader = {title: "Wicked Leader", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption</Link></p>
<Ability id="wicked-leader" extraClasses="trait" icon={["village"]}>
<Pair single id="wicked-leader">Wicked Leader</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="wicked-leader-benefit">You gain a +1 trait bonus on Charisma checks against evil creatures. If you select the <Link to="/feat/leadership">Leadership</Link> feat or the <Link to="/feat/vile_leadership">Vile Leadership</Link> feat at any point when you meet the prerequisites for that feat, you can recruit a cohort who is up to 1 level lower than you (instead of the normal requirement that your cohort must be 2 or more levels lower than you are) as long as your cohort is evil.</Pair>
</Ability>
</>};
const _wiscrani_ear = {title: "Wiscrani Ear", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets</Link></p>
<Ability id="wiscrani-ear" extraClasses="trait" icon={["village"]}>
<Pair single id="wiscrani-ear">Wiscrani Ear</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="wiscrani-ear-benefit">You have a keen ear for the movements of thieves and monsters. You can always take 10 on Perception checks, even when stress and distractions would normally prevent you from doing so.</Pair>
</Ability>
</>};
const _worldly = {title: "Worldly", topLink: ["Social Traits","main/traits_social"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="worldly" extraClasses="trait" icon={["village"]}>
<Pair single id="worldly">Worldly</Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="worldly-benefit">You have acquired an unusual breadth of life experience - more than others of your age, race, or culture. Once per day when attempting a skill check for a skill you're untrained in, you can roll twice and take the better result.</Pair>
</Ability>
</>};
export default {not_found:_not_found,absalom_bouncer:_absalom_bouncer,absolute_loyalty:_absolute_loyalty,accelerated_drinker:_accelerated_drinker,aldori_caution:_aldori_caution,ambush_training:_ambush_training,anatomist:_anatomist,armed_grit:_armed_grit,armor_expert:_armor_expert,armored_rider:_armored_rider,armored_soul:_armored_soul,arodenite_sword_training:_arodenite_sword_training,axe_to_grind:_axe_to_grind,back_for_more:_back_for_more,battlefield_disciple:_battlefield_disciple,berserker_of_the_society:_berserker_of_the_society,black_powder_bravado:_black_powder_bravado,black_powder_fortune:_black_powder_fortune,black_powder_interjection:_black_powder_interjection,blackjacket_weapon_flair:_blackjacket_weapon_flair,blade_of_the_society:_blade_of_the_society,blights_bane:_blights_bane,bloodthirsty:_bloodthirsty,bloody_minded:_bloody_minded,born_under_the_cradle:_born_under_the_cradle,born_under_the_dreamer:_born_under_the_dreamer,born_under_the_stranger:_born_under_the_stranger,broken_not_beaten:_broken_not_beaten,bullied:_bullied,careful_combatant:_careful_combatant,clockwork_engineer:_clockwork_engineer,coherent_rage:_coherent_rage,cold_and_calculating:_cold_and_calculating,courageous:_courageous,crimson_carapace:_crimson_carapace,crowd_dodger:_crowd_dodger,dedicated_defender:_dedicated_defender,defender_of_the_society:_defender_of_the_society,deft_dodger:_deft_dodger,demon_slayer:_demon_slayer,demon_smiter:_demon_smiter,devil_fighter:_devil_fighter,dirty_fighter_apg:_dirty_fighter_apg,dirty_trickster:_dirty_trickster,disillusioned:_disillusioned,dispelled_battler:_dispelled_battler,dormant_defense:_dormant_defense,dragon_armor:_dragon_armor,dueling_cloak_adept:_dueling_cloak_adept,easy_way_or_the_hard_way:_easy_way_or_the_hard_way,elemental_apprentice:_elemental_apprentice,evasive_sting:_evasive_sting,excitable:_excitable,failed_aspirant:_failed_aspirant,faiths_hunter:_faiths_hunter,fencer:_fencer,firebug_qac:_firebug_qac,fugitive:_fugitive,guerrilla_tactics:_guerrilla_tactics,hard_to_kill:_hard_to_kill,hellknight_devotion:_hellknight_devotion,hellknight_initiate:_hellknight_initiate,helpful_cop:_helpful_cop,hidden_hand:_hidden_hand,hill_fighter:_hill_fighter,holdout:_holdout,honored_fist_of_the_society:_honored_fist_of_the_society,hunters_knack:_hunters_knack,ichimeiyo_champion:_ichimeiyo_champion,improvised_defense:_improvised_defense,indelible_ire:_indelible_ire,inspiring:_inspiring,inspiring_rush:_inspiring_rush,jacket_training:_jacket_training,jungle_fighter:_jungle_fighter,just_like_new:_just_like_new,killer:_killer,kin_guardian:_kin_guardian,larger_than_life:_larger_than_life,lastwall_defender:_lastwall_defender,martial_performer:_martial_performer,merciful_scimitar:_merciful_scimitar,monk_weapon_skill:_monk_weapon_skill,monster_challenger:_monster_challenger,monster_survivor:_monster_survivor,muscle_of_the_society:_muscle_of_the_society,natural_flyer:_natural_flyer,natures_mimic:_natures_mimic,never_stop_shooting:_never_stop_shooting,no_escape:_no_escape,obari_veteran:_obari_veteran,ogre_avoidance:_ogre_avoidance,ozem_inspired:_ozem_inspired,performers_surprise:_performers_surprise,permanent_scars:_permanent_scars,pillager:_pillager,promising:_promising,punish_insurrection:_punish_insurrection,reactionary:_reactionary,reckless:_reckless,reckless_contempt:_reckless_contempt,red_mantis_bleeding:_red_mantis_bleeding,resilient:_resilient,resolve_of_the_rejected:_resolve_of_the_rejected,riders_bond:_riders_bond,river_fighter:_river_fighter,roving_range:_roving_range,savanna_hunter:_savanna_hunter,scarred_by_space_pirates:_scarred_by_space_pirates,scarred_descendant:_scarred_descendant,shadow_trained:_shadow_trained,siege_defender:_siege_defender,slippery:_slippery,soaring_sprinter:_soaring_sprinter,solitary:_solitary,spirit_of_the_law:_spirit_of_the_law,splash_attack:_splash_attack,sprint:_sprint,startling_report:_startling_report,steel_skin:_steel_skin,strong_arm_supple_wrist:_strong_arm_supple_wrist,subjective_equilibrium:_subjective_equilibrium,surprise_weapon:_surprise_weapon,sworn_enemy:_sworn_enemy,tactician:_tactician,tar_taargadth_trained:_tar_taargadth_trained,tarnished_halls_runner:_tarnished_halls_runner,threatening_defender:_threatening_defender,thunder_and_fang_performer:_thunder_and_fang_performer,to_the_last:_to_the_last,tracker_of_the_society:_tracker_of_the_society,unblemished_barrel:_unblemished_barrel,undergrowth_specialist:_undergrowth_specialist,unpredictable_reactions:_unpredictable_reactions,vandal:_vandal,vengeful_combat:_vengeful_combat,venom_resistance:_venom_resistance,vigilant_battler:_vigilant_battler,volatile_fuse:_volatile_fuse,wary_eye:_wary_eye,weapon_of_peace:_weapon_of_peace,witty_repartee:_witty_repartee,youthful_infiltrator:_youthful_infiltrator,abject_belief:_abject_belief,acclimatize_alignment:_acclimatize_alignment,acolyte_of_apocrypha:_acolyte_of_apocrypha,apprentice:_apprentice,arcane_scholar:_arcane_scholar,aspect_of_the_quah:_aspect_of_the_quah,authoritarian:_authoritarian,beacon_of_faith:_beacon_of_faith,birthmark:_birthmark,blessed:_blessed,blessed_touch:_blessed_touch,born_free:_born_free,bound_by_honor:_bound_by_honor,called:_called,canon_of_coin:_canon_of_coin,caretaker:_caretaker,child_of_the_temple:_child_of_the_temple,chosen_of_iomedae:_chosen_of_iomedae,covert_channeler:_covert_channeler,crisis_of_faith:_crisis_of_faith,crusader:_crusader,darkest_before_dawn:_darkest_before_dawn,deep_faith:_deep_faith,defy_madness:_defy_madness,devoted_healer:_devoted_healer,devotee_of_the_green:_devotee_of_the_green,devout_visionary:_devout_visionary,disdainful_defender:_disdainful_defender,divine_confidante:_divine_confidante,divine_denier:_divine_denier,dogged:_dogged,earthbound:_earthbound,ease_of_faith:_ease_of_faith,eldritch_smith:_eldritch_smith,empyreal_pantheon:_empyreal_pantheon,exalted_of_the_society:_exalted_of_the_society,eye_for_the_wondrous:_eye_for_the_wondrous,faithful_feedback:_faithful_feedback,fates_favored:_fates_favored,fearless_defiance:_fearless_defiance,first_memories:_first_memories,focused_disciple:_focused_disciple,godclaw_disciple:_godclaw_disciple,greater_adept_of_the_society:_greater_adept_of_the_society,havoc_of_the_society:_havoc_of_the_society,heedful_readiness:_heedful_readiness,hellknight_inquisitor:_hellknight_inquisitor,heretics_caution:_heretics_caution,hidden_faith:_hidden_faith,history_of_heresy:_history_of_heresy,honest:_honest,imperfect_recall:_imperfect_recall,indomitable_faith:_indomitable_faith,inhabitant_of_illusion:_inhabitant_of_illusion,inspired:_inspired,irrepressible:_irrepressible,irreverent:_irreverent,jinx_eater:_jinx_eater,kalistocratic_prophecy:_kalistocratic_prophecy,light_in_the_darkness:_light_in_the_darkness,loyalty_across_lifetimes:_loyalty_across_lifetimes,lucid_dreamer:_lucid_dreamer,martial_manuscript:_martial_manuscript,masked:_masked,meditative_rest:_meditative_rest,monastic:_monastic,mystery_initiate:_mystery_initiate,natural_ritualist:_natural_ritualist,naturally_gifted:_naturally_gifted,nature_worshiper:_nature_worshiper,necrotic_aura:_necrotic_aura,oathbound:_oathbound,omen:_omen,pact_servant:_pact_servant,patient_calm:_patient_calm,perpetual_companion:_perpetual_companion,persuasive_insight:_persuasive_insight,planar_savant:_planar_savant,priest_blessed:_priest_blessed,principled:_principled,prophesied:_prophesied,proxy_of_many:_proxy_of_many,rebuke_the_curse:_rebuke_the_curse,redeemer:_redeemer,reincarnated:_reincarnated,religious_reformer:_religious_reformer,river_acumen:_river_acumen,sacred_conduit:_sacred_conduit,sacred_touch:_sacred_touch,scholar_of_the_great_beyond:_scholar_of_the_great_beyond,schooled_inquisitor:_schooled_inquisitor,scourge_of_the_darkness:_scourge_of_the_darkness,second_tongue:_second_tongue,secret_keeper:_secret_keeper,self_actualization:_self_actualization,self_sustaining:_self_sustaining,soul_searchers_strength:_soul_searchers_strength,spell_intuition:_spell_intuition,spirit_sense:_spirit_sense,st_clydwells_ward:_st_clydwells_ward,stalwart_of_the_society:_stalwart_of_the_society,strength_of_submission:_strength_of_submission,strength_of_the_land:_strength_of_the_land,student_of_history:_student_of_history,tar_baphons_whisper:_tar_baphons_whisper,tireless_avenger:_tireless_avenger,totemist:_totemist,traditionalist:_traditionalist,trickster_gnome:_trickster_gnome,two_world_magic:_two_world_magic,undaunted:_undaunted,unnatural_presence:_unnatural_presence,unshackled:_unshackled,untrained_scholar:_untrained_scholar,urban_acolyte:_urban_acolyte,vile_domain:_vile_domain,wanderers_shroud:_wanderers_shroud,wendifa_apprentice:_wendifa_apprentice,zealot:_zealot,zealots_bearing:_zealots_bearing,zealous_striker:_zealous_striker,acrobat:_acrobat,adopted:_adopted,affable:_affable,allies_in_the_deep:_allies_in_the_deep,ambitious:_ambitious,amiable_blunder:_amiable_blunder,amiable_briber:_amiable_briber,ancestral_armor:_ancestral_armor,arodenite_historian:_arodenite_historian,artisan:_artisan,avid_reader:_avid_reader,balanced_determination:_balanced_determination,bastard_uc:_bastard_uc,beast_bond:_beast_bond,beastkin:_beastkin,binders_blood:_binders_blood,brastlewark_businessman_gog:_brastlewark_businessman_gog,bruising_intellect:_bruising_intellect,bully:_bully,bureaucrats_favored:_bureaucrats_favored,calculated_bribe:_calculated_bribe,callous:_callous,canter:_canter,carnal_attraction:_carnal_attraction,charming:_charming,chelish_sympathizer:_chelish_sympathizer,child_of_the_streets:_child_of_the_streets,chip_on_the_shoulder:_chip_on_the_shoulder,civilized:_civilized,clever_wordplay:_clever_wordplay,collector:_collector,competitive:_competitive,contagious_mettle:_contagious_mettle,contemptuous:_contemptuous,convincing_liar:_convincing_liar,criminal:_criminal,criminal_roots:_criminal_roots,criminally_connected:_criminally_connected,cutting_condescension:_cutting_condescension,cynical:_cynical,cynical_ear:_cynical_ear,darklands_scholar:_darklands_scholar,darklands_trader:_darklands_trader,debauchery_defier:_debauchery_defier,deep_cover:_deep_cover,destined_diplomat:_destined_diplomat,detect_disobedience:_detect_disobedience,dismantle_order:_dismantle_order,doublespeak:_doublespeak,draconic_destiny:_draconic_destiny,dragon_hunted:_dragon_hunted,dragon_pact:_dragon_pact,drake_anatomist:_drake_anatomist,dusk_market_bribery:_dusk_market_bribery,ecumenical:_ecumenical,elemental_negotiator:_elemental_negotiator,enemy_of_slavers:_enemy_of_slavers,escaped_captive:_escaped_captive,etymologist:_etymologist,excellent_penmanship:_excellent_penmanship,explorer:_explorer,expressive_pantomime:_expressive_pantomime,fast_talker:_fast_talker,feral_speech:_feral_speech,for_the_money:_for_the_money,founders_heritage:_founders_heritage,free_spirit:_free_spirit,friend_in_every_town:_friend_in_every_town,friends_in_high_places:_friends_in_high_places,friends_in_low_places:_friends_in_low_places,fury_of_the_red:_fury_of_the_red,gesture_expertise:_gesture_expertise,gifted_smuggler:_gifted_smuggler,gregarious:_gregarious,grief_filled:_grief_filled,grim_optimism:_grim_optimism,hardly_a_fool:_hardly_a_fool,harvester:_harvester,heart_of_two_worlds:_heart_of_two_worlds,hellknight_ancestry:_hellknight_ancestry,imposing_scion:_imposing_scion,inexorable_authority:_inexorable_authority,infernal_colleague:_infernal_colleague,influence:_influence,jistkan_scholar:_jistkan_scholar,keleshite_princess:_keleshite_princess,king_in_waiting:_king_in_waiting,knowing_the_enemy:_knowing_the_enemy,law_enforcer:_law_enforcer,life_of_toil:_life_of_toil,lost_nobility:_lost_nobility,maestro_of_the_society:_maestro_of_the_society,malevolent_temptations:_malevolent_temptations,marked_by_unknown_forces:_marked_by_unknown_forces,master_messenger:_master_messenger,mediator:_mediator,memorable:_memorable,mentored:_mentored,mercenary:_mercenary,merchant:_merchant,mock_gladiator:_mock_gladiator,monster_scholar:_monster_scholar,monster_stalker:_monster_stalker,natural_born_leader_social:_natural_born_leader_social,nightstalls_navigator:_nightstalls_navigator,noble_savage:_noble_savage,nonchalant_thuggery:_nonchalant_thuggery,numerian_fluid_indulger:_numerian_fluid_indulger,obnoxious:_obnoxious,official_ties:_official_ties,ordinary:_ordinary,orphaned:_orphaned,outsider_enemy:_outsider_enemy,pack_savvy:_pack_savvy,passionate_inertia:_passionate_inertia,poverty_stricken:_poverty_stricken,practiced_disruptor:_practiced_disruptor,preternatural_awareness:_preternatural_awareness,questing_hellknight:_questing_hellknight,reassuring_advice:_reassuring_advice,red_silk_frankness:_red_silk_frankness,relic_proof:_relic_proof,rest_for_the_wicked:_rest_for_the_wicked,rich_parents:_rich_parents,rugged_dragon_hunter:_rugged_dragon_hunter,savage:_savage,savant:_savant,seafaring_reputation:_seafaring_reputation,secret_keeper_qac:_secret_keeper_qac,seeker:_seeker,self_reliant:_self_reliant,signature_moves:_signature_moves,simple_disciple:_simple_disciple,slave_runner:_slave_runner,snowbound:_snowbound,student_of_philosophy:_student_of_philosophy,style_sage:_style_sage,subjective_truth:_subjective_truth,supportive:_supportive,suspicious:_suspicious,talented:_talented,tireless_logic:_tireless_logic,triaxus_trained:_triaxus_trained,tropical_upbringing:_tropical_upbringing,trustworthy:_trustworthy,truths_agent:_truths_agent,unabashed_gall:_unabashed_gall,unbalanced_insight:_unbalanced_insight,unintentional_linguist:_unintentional_linguist,unnatural_revenge:_unnatural_revenge,unpredictable:_unpredictable,untapped_potential:_untapped_potential,unwelcome_business:_unwelcome_business,veiled_disciple:_veiled_disciple,vengeful_social:_vengeful_social,vigilant_spycatcher:_vigilant_spycatcher,voices_in_your_head:_voices_in_your_head,wanderlust:_wanderlust,wasteland_vargrant:_wasteland_vargrant,weathered_emissary:_weathered_emissary,wicked_leader:_wicked_leader,wiscrani_ear:_wiscrani_ear,worldly:_worldly}