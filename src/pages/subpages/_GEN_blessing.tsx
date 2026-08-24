import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import InnerLink from '../../components/InnerLink';
import AffInfo from '../../components/AfflictionInfo';
const _not_found = {title: "Unknown", jsx: <><h2 id="blessing-not_found-error">Error</h2>
<p>Unable to find the requested blessing.</p>
</>};
const _air = {title: "Air", jsx: <><h2 id="blessing-air-air">Air</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 63</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/shelyn">Shelyn</Link></p>
<Ability id="zephyrs-gift-minor" icon={["upgrade","armor-upgrade"]}>
<Pair single id="zephyrs-gift-minor" flavor="You can touch any one ranged weapon and enhance it with the quality of air.">Zephyr's Gift (minor)</Pair>
<Pair title="At 1st Level">For 1 minute, any attacks made with the weapon take no penalties due to range. In addition, making a ranged attack with this weapon doesn't provoke an attack of opportunity.</Pair>
</Ability>
<Ability id="soaring-assault-major" icon={["stairs-goal","upgrade"]}>
<Pair single id="soaring-assault-major" flavor={<>You can touch an ally and give her the gift of flight for 1 minute (as <Link to="/spell/fly">fly</Link>).</>}>Soaring Assault (major)</Pair>
<Pair title="At 10th Level">The ally gains a fly speed of 60 feet with average maneuverability. She gains a bonus on Fly skill checks equal to your level. Whenever the ally succeeds at a <Link to="/rule/charge">charge</Link> attack while flying, that attack deals an amount of additional electricity damage equal to your level.</Pair>
</Ability>
</>};
const _animal = {title: "Animal", jsx: <><h2 id="blessing-animal-animal">Animal</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 63</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/gozreh">Gozreh</Link></p>
<Ability id="animal-fury-minor" icon={["mailed-fist"]}>
<Pair single id="animal-fury-minor" flavor="You can touch one ally and grant it feral features.">Animal Fury (minor)</Pair>
<Pair title="At 1st Level">The ally gains 2 claw attacks that each deal 1d6 points of damage if the ally is Medium or 1d4 if it's Small, or 1 bite attack that deals 1d8 points of damage if the ally is Medium or 1d6 if it's Small. These are primary <Link to="/umr/natural_attacks">natural attacks</Link> that replace any similar primary natural attacks the ally might have. This effect lasts for 1 minute.</Pair>
</Ability>
<Ability id="battle-companion-major" icon={["magic-swirl"]}>
<Pair single id="battle-companion-major" flavor="You can summon a battle companion.">Battle Companion (major)</Pair>
<Pair title="At 10th Level">This ability functions as <Link to="/spell/summon_natures_ally_v">summon nature's ally V</Link> with a duration of 1 minute. This ability can summon only one animal, regardless of the list used.</Pair>
<Pair title="At 12th Level">This now behaves as <Link to="/spell/summon_natures_ally_vi">summon nature's ally VI</Link>.</Pair>
<Pair title="At 14th Level">This now behaves as <Link to="/spell/summon_natures_ally_vii">summon nature's ally VII</Link>.</Pair>
<Pair title="At 16th Level">This now behaves as <Link to="/spell/summon_natures_ally_viii">summon nature's ally VIII</Link>.</Pair>
<Pair title="At 18th Level">This now behaves as <Link to="/spell/summon_natures_ally_ix">summon nature's ally IX</Link>.</Pair>
</Ability>
</>};
const _artifice = {title: "Artifice", jsx: <><h2 id="blessing-artifice-artifice">Artifice</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 64</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/torag">Torag</Link></p>
<Ability id="crafters-wrath-minor" icon={["upgrade"]}>
<Pair single id="crafters-wrath-minor" flavor="You can touch one melee weapon and grant it greater power to harm and destroy crafted objects.">Crafter's Wrath (minor)</Pair>
<Pair title="At 1st Level">For 1 minute, whenever this weapon deals damage to constructs or objects, it bypasses hardness and damage reduction.</Pair>
</Ability>
<Ability id="transfer-magic-major" icon={["magic-swirl"]}>
<Pair single id="transfer-magic-major">Transfer Magic (major)</Pair>
<Pair title="At 10th Level"><p>You can temporarily transfer a weapon special ability from one weapon to another. The bearers of each of the weapons must be willing, and you must be touching both weapons to activate this ability.</p>
<p>You can transfer a weapon special ability with a base price modifier of +1 or +2. If you are using this ability on a <Link to="/misc/double">double</Link> weapon, only one end of the double weapon is affected. The transfer lasts for 1 minute, after which the transferred weapon special ability automatically returns to the source weapon.</p>
<p>You can use this ability multiple times on the same weapon or weapons. Alternatively, you can use <em>transfer magic</em> to move a +1 or +2 armor special ability from one touched suit of armor to another, or move a +1 or +2 armor or weapon enhancement bonus to another armor or weapon.</p>
</Pair>
</Ability>
</>};
const _chaos = {title: "Chaos", jsx: <><h2 id="blessing-chaos-chaos">Chaos</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 64</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/desna">Desna</Link>, <Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/rovagug">Rovagug</Link></p>
<Ability id="anarchic-strike-minor" icon={["upgrade"]}>
<Pair single id="anarchic-strike-minor" flavor="You can touch one weapon and grant it a chaotic blessing.">Anarchic Strike (minor)</Pair>
<Pair title="At 1st Level">For 1 minute, the touched weapon glows yellow or purple and deals an additional 1d6 points of damage against lawful creatures. During this time, it's treated as chaotic for the purposes of overcoming damage reduction.</Pair>
<Pair title="Special">This blessing's additional damage doesn't stack with the additional damage from the <Link to="/magic-enh/anarchic">anarchic</Link> weapon special ability.</Pair>
</Ability>
<Ability id="battle-companion-major" icon={["magic-swirl"]}>
<Pair single id="battle-companion-major" flavor="You can summon a battle companion.">Battle Companion (major)</Pair>
<Pair title="At 10th Level">This ability functions as <Link to="/spell/summon_monster_iv">summon monster IV</Link> with a duration of 1 minute, but for only a chaotic outsider or an animal with the <Link to="/template/entropic">entropic</Link> creature simple template. This ability can summon only one creature, regardless of the list used.</Pair>
<Pair title="At 12th Level">This now behaves as <Link to="/spell/summon_monster_v">summon monster V</Link>.</Pair>
<Pair title="At 14th Level">This now behaves as <Link to="/spell/summon_monster_vi">summon monster VI</Link>.</Pair>
<Pair title="At 16th Level">This now behaves as <Link to="/spell/summon_monster_vii">summon monster VII</Link>.</Pair>
<Pair title="At 18th Level">This now behaves as <Link to="/spell/summon_monster_viii">summon monster VIII</Link>.</Pair>
<Pair title="At 20th Level">This now behaves as <Link to="/spell/summon_monster_ix">summon monster IX</Link>.</Pair>
</Ability>
</>};
const _charm = {title: "Charm", jsx: <><h2 id="blessing-charm-charm">Charm</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 64</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/shelyn">Shelyn</Link></p>
<Ability id="charming-presence-minor" icon={["armor-upgrade"]}>
<Pair single id="charming-presence-minor" flavor="You can touch an ally and grant an entrancing blessing.">Charming Presence (minor)</Pair>
<Pair title="At 1st Level">For 1 minute, the ally becomes mesmerizing to her opponents, filling them with either abject admiration or paralyzing fear. This effect functions as <Link to="/spell/sanctuary">sanctuary</Link>, except if the ally attacks an opponent, the effect ends with respect to only that opponent. This is a mind-affecting effect.</Pair>
</Ability>
<Ability id="dominance-aura-major" icon={["aura","magic-swirl"]}>
<Pair single id="dominance-aura-major">Dominance Aura (major)</Pair>
<Pair title="At 10th Level">You can surround yourself with a tangible aura of majesty for 1 minute. While this aura is active, once per round as a <strong className="hl">swift action</strong> you can issue a command (as the <Link to="/spell/command">command</Link> spell) to one creature within 30 feet; the creature must succeed at a Will saving throw or submit for 1 round.</Pair>
</Ability>
</>};
const _community = {title: "Community", jsx: <><h2 id="blessing-community-community">Community</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 65</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/erastil">Erastil</Link></p>
<Ability id="communal-aid-minor" icon={["upgrade"]}>
<Pair single id="communal-aid-minor" flavor="You can touch an ally and grant it the blessing of community.">Communal Aid (minor)</Pair>
<Pair title="At 1st Level">For the next minute, whenever that ally uses the <Link to="/rule/aid_another_2">aid another</Link> action, the bonus granted increases to +4. You can instead use this ability on yourself as a swift action.</Pair>
</Ability>
<Ability id="fight-as-one-major" icon={["upgrade"]}>
<Pair single id="fight-as-one-major" flavor="You can rally your allies to fight together.">Fight as One (major)</Pair>
<Pair title="At 10th Level">For 1 minute, whenever you make a successful melee or ranged attack against a foe, allies within 10 feet of you gain a +2 insight bonus on attacks of the same type you made against that foe - melee attacks if you made a melee attack, or ranged attacks if you made a ranged attack.</Pair>
<Pair title="Special">If you score a critical hit, this bonus increases to +4 until the start of your next turn.</Pair>
</Ability>
<h3 id="blessing-community-cooperation">Cooperation</h3>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 13</Link></p>
<p><strong className="hl">ReplacementBlessing:</strong> The following minor blessing replaces the <em>communal aid</em> ability of the Community blessing.</p>
<Ability id="team-effort-minor" icon={["stairs-goal"]}>
<Pair single id="team-effort-minor" flavor="You can touch an ally and grant it the blessing of cooperation.">Team Effort (minor)</Pair>
<Pair title="At 1st Level">Choose one <Link to="/main/teamwork_feat">teamwork feat</Link> that you have. The touched ally gains the benefit of the chosen teamwork feat for a number of rounds equal to 1/2 your warpriest level (minimum 1). Alternatively, you can choose one teamwork feat that a touched ally has and gain the benefit of the chosen feat for a number of rounds equal to 1/2 your warpriest level (minimum 1).</Pair>
</Ability>
</>};
const _curse = {title: "Curse", jsx: <><h2 id="blessing-curse-curse">Curse</h2>
<p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 22</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/andirifkhu">Andirifkhu</Link>, <Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/desna">Desna</Link>, <Link to="/faith/graffiacane">Graffiacane</Link>, <Link to="/faith/magdh">Magdh</Link></p>
<Ability id="hexing-attack-minor" icon={["armor-downgrade"]}>
<Pair single id="hexing-attack-minor">Hexing Attack (minor)</Pair>
<Pair title="At 1st Level">You can touch one weapon and enhance it to inflict a minor curse on the next target it strikes. The struck target must succeed at a Will saving throw or take a -2 penalty on attack rolls, saving throws, skill checks, or ability checks (warpriest's choice) for 1 minute.</Pair>
</Ability>
<Ability id="retributive-curse-major" icon={["armor-downgrade"]}>
<Pair single id="retributive-curse-major">Retributive Curse (major)</Pair>
<Pair title="At 10th Level"><p>As a <strong className="hl">swift</strong> or <strong className="hl">immediate action</strong>, you can inflict a curse on any adjacent creature that scores a critical hit against you or deals <Link to="/misc/precision_damage">precision damage</Link> to you. The target must succeed at a Will saving throw or be cursed.</p>
<p>Select one of the following effects: the target takes a -2 penalty to one ability score of your choice (the ability cannot be reduced below 1); the target takes a -2 penalty on attack rolls, saving throws, ability checks, and skill checks; each turn, the target has a 25% chance of taking no action (otherwise, it acts normally).</p>
<p>This curse lasts for 1 hour. A creature can be subjected to only one instance of <em>retributive curse</em> at a time. This otherwise functions as <Link to="/spell/bestow_curse">bestow curse</Link>.</p>
</Pair>
</Ability>
</>};
const _darkness = {title: "Darkness", jsx: <><h2 id="blessing-darkness-darkness">Darkness</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 65</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/zon_kuthon">Zon-Kuthon</Link></p>
<Ability id="enshrouding-darkness-minor" icon={["armor-upgrade"]}>
<Pair single id="enshrouding-darkness-minor" flavor="You can touch an ally and bestow a darkness blessing.">Enshrouding Darkness (minor)</Pair>
<Pair title="At 1st Level">For 1 minute, the ally becomes enshrouded in shadows while in combat, granting it <Link to="/rule/concealment">concealment</Link> (20%). Creatures that are normally able to see in supernatural darkness ignore this concealment.</Pair>
</Ability>
<Ability id="darkened-vision-major" icon={["armor-downgrade"]}>
<Pair single id="darkened-vision-major">Darkened Vision (major)</Pair>
<Pair title="At 10th Level">You can place a shroud of darkness around the eyes of one foe within 30 feet. The target must succeed at a Will saving throw or be <Link to="/misc/blinded">blinded</Link> for 1 minute (as <Link to="/spell/blindness_deafness">blindness/deafness</Link>).</Pair>
</Ability>
</>};
const _death = {title: "Death", jsx: <><h2 id="blessing-death-death">Death</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 65</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/urgathoa">Urgathoa</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link></p>
<Ability id="from-the-grave-minor" icon={["upgrade","armor-upgrade"]}>
<Pair single id="from-the-grave-minor" flavor="You can take on a corpse-like visage for 1 minute, making you more intimidating and giving you undead-like protection from harm.">From the Grave (minor)</Pair>
<Pair title="At 1st Level">You gain a +4 bonus on Disguise checks to resemble an undead creature and on Intimidate checks, as well as a +2 profane bonus on saving throws against disease, mind-affecting effects, paralysis, poison, and stun.</Pair>
</Ability>
<Ability id="deaths-touch-major" icon={["armor-downgrade"]}>
<Pair single id="deaths-touch-major">Death's Touch (major)</Pair>
<Pair title="At 10th Level">You can make a melee touch attack against an opponent to deliver grim suffering. If you succeed, you inflict 1 temporary <Link to="/rule/negative_level">negative level</Link> on the target for 1 minute. Alternatively, you can activate this ability as a <strong className="hl">swift action</strong> upon hitting an opponent with a melee attack.</Pair>
<Pair title="Special">These temporary negative levels stack. You gain no benefit from imposing these negative levels (such as the temporary hit points undead gain from <Link to="/spell/enervation">enervation</Link>).</Pair>
</Ability>
</>};
const _destruction = {title: "Destruction", jsx: <><h2 id="blessing-destruction-destruction">Destruction</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 65</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/rovagug">Rovagug</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link></p>
<Ability id="destructive-attacks-minor" icon={["upgrade"]}>
<Pair single id="destructive-attacks-minor" flavor="You can touch an ally and bless it with the power of destruction.">Destructive Attacks (minor)</Pair>
<Pair title="At 1st Level">For 1 minute, the ally gains a morale bonus on weapon damage rolls equal to half your level (minimum 1).</Pair>
</Ability>
<Ability id="heart-of-carnage-major" icon={["upgrade","armor-upgrade"]}>
<Pair single id="heart-of-carnage-major" flavor="You can touch an ally and bless it with even greater destructive power.">Heart of Carnage (major)</Pair>
<Pair title="At 10th Level">For 1 minute, the ally gains a +4 insight bonus on attack rolls made to confirm critical hits and has a 50% chance to treat any critical hit or <Link to="/ability/sneak_attack">sneak attack</Link> against it as a normal hit.</Pair>
</Ability>
</>};
const _earth = {title: "Earth", jsx: <><h2 id="blessing-earth-earth">Earth</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 65</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/torag">Torag</Link></p>
<Ability id="acid-strike-minor" icon={["upgrade"]}>
<Pair single id="acid-strike-minor" flavor="You can touch one weapon and enhance it with acidic potency.">Acid Strike (minor)</Pair>
<Pair title="At 1st Level">For 1 minute, this weapon emits acrid fumes that deal an additional 1d4 points of acid damage with each strike. This additional damage doesn't stack with the additional damage from the <Link to="/magic-enh/corrosive">corrosive</Link> weapon special ability.</Pair>
</Ability>
<Ability id="armor-of-earth-major" icon={["armor-upgrade"]}>
<Pair single id="armor-of-earth-major">Armor of Earth (major)</Pair>
<Pair title="At 10th Level">You can touch an ally and harden its armor or clothing. For 1 minute, the ally gains DR 1/-.</Pair>
<Pair title="At 12th Level">The ally's DR improves to 2/-.</Pair>
<Pair title="At 14th Level">The ally's DR increases to 3/-.</Pair>
<Pair title="At 16th Level">The ally's DR improves to 4/-.</Pair>
<Pair title="At 18th Level">The ally's DR increases to 5/-.</Pair>
<Pair title="Special">This doesn't stack with any other damage resistance.</Pair>
</Ability>
</>};
const _earthquake = {title: "Earthquake", jsx: <><h2 id="blessing-earthquake-earthquake">Earthquake</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 97</Link><br/><strong className="hl">Deities:</strong> Evil deities that offer the <Link to="/blessing/earth">Earth</Link> blessing or nonevil deities with disasters in their portfolios</p>
<Ability id="stones-base-minor" icon={["armor-upgrade"]}>
<Pair single id="stones-base-minor" flavor="You can touch an ally to bless it with the stalwart resilience of stone.">Stone's Base (minor)</Pair>
<Pair title="At 1st Level">For 1 minute, the creature gains a +4 bonus to its CMD against maneuvers that would move the ally or knock it prone.</Pair>
</Ability>
<Ability id="earth-hammer-major" icon={["armor-downgrade"]}>
<Pair single id="earth-hammer-major">Earth Hammer (major)</Pair>
<Pair title="At 10th Level">You can touch a weapon to bless it with the force of a mighty earthquake for 1 minute. When the weapon hits a creature, the target must succeed at a Reflex save or fall <Link to="/rule/prone">prone</Link>; either way, the creature is immune to this ability for 24 hours.</Pair>
</Ability>
</>};
const _evil = {title: "Evil", jsx: <><h2 id="blessing-evil-evil">Evil</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 65</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/rovagug">Rovagug</Link>, <Link to="/faith/urgathoa">Urgathoa</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link></p>
<Ability id="unholy-strike-minor" icon={["upgrade"]}>
<Pair single id="unholy-strike-minor" flavor="You can touch one weapon and give it an evil blessing.">Unholy Strike (minor)</Pair>
<Pair title="At 1st Level">For 1 minute, this weapon takes on a black, orange, or violet cast and deals an additional 1d6 points of damage against good creatures. During this time, it's treated as evil for the purposes of overcoming damage reduction. This additional damage doesn't stack with the additional damage from the <Link to="/magic-enh/unholy">unholy</Link> weapon special ability.</Pair>
</Ability>
<Ability id="battle-companion-major" icon={["magic-swirl"]}>
<Pair single id="battle-companion-major">Battle Companion (major)</Pair>
<Pair title="At 10th Level">You can summon a battle companion. This ability functions as <Link to="/spell/summon_monster_iv">summon monster IV</Link> with a duration of 1 minute, but for only an evil outsider or an animal with the <Link to="/template/fiendish">fiendish</Link> creature simple template. This ability can summon only one creature, regardless of the list used.</Pair>
<Pair title="At 12th Level">This now behaves as <Link to="/spell/summon_monster_v">summon monster V</Link>.</Pair>
<Pair title="At 14th Level">This now behaves as <Link to="/spell/summon_monster_vi">summon monster VI</Link>.</Pair>
<Pair title="At 16th Level">This now behaves as <Link to="/spell/summon_monster_vii">summon monster VII</Link>.</Pair>
<Pair title="At 18th Level">This now behaves as <Link to="/spell/summon_monster_viii">summon monster VIII</Link>.</Pair>
<Pair title="At 20th Level">This now behaves as <Link to="/spell/summon_monster_ix">summon monster IX</Link>.</Pair>
</Ability>
</>};
const _fire = {title: "Fire", jsx: <><h2 id="blessing-fire-fire">Fire</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 65</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></p>
<Ability id="fire-strike-minor" icon={["upgrade"]}>
<Pair single id="fire-strike-minor" flavor="You can touch one weapon and enhance it with the grandeur of fire.">Fire Strike (minor)</Pair>
<Pair title="At 1st Level">For 1 minute, this weapon glows red-hot and deals an additional 1d4 points of fire damage with each hit. This additional damage doesn't stack with the additional damage from the <Link to="/magic-enh/flaming">flaming</Link> or <Link to="/magic-enh/flaming_burst">flaming burst</Link> weapon special abilities.</Pair>
</Ability>
<Ability id="armor-of-flame-major" icon={["armor-upgrade"]}>
<Pair single id="armor-of-flame-major">Armor of Flame (major)</Pair>
<Pair title="At 10th Level">You can touch an ally to wreath it in flames. This works as <Link to="/spell/fire_shield">fire shield</Link> (warm shield only) with a duration of 1 minute.</Pair>
</Ability>
</>};
const _flood = {title: "Flood", jsx: <><h2 id="blessing-flood-flood">Flood</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 97</Link><br/><strong className="hl">Deities:</strong> Evil deities that offer the <Link to="/blessing/water">Water</Link> blessing or nonevil deities with disasters in their portfolios</p>
<Ability id="lasting-breath-minor" icon={["armor-upgrade"]}>
<Pair single id="lasting-breath-minor" flavor="You can touch an ally to bless it with an extra reserve of breath.">Lasting Breath (minor)</Pair>
<Pair title="At 1st Level">For 1 minute, while the ally <Link to="/misc/hold_its_breath">holds its breath</Link>, standard and full-round actions don't decrease the number of rounds the ally can hold its breath.</Pair>
</Ability>
<Ability id="tsunami-burst-major" icon={["armor-upgrade"]}>
<Pair single id="tsunami-burst-major">Tsunami Burst (major)</Pair>
<Pair title="At 10th Level">When you are hit by a melee attack, you can invoke this blessing as an <strong className="hl">immediate action</strong>. A wave of water blasts out from you at your attacker, attempting a <Link to="/rule/bull_rush">bull rush</Link> combat maneuver check using your CMB but adding your Wisdom modifier instead of your Strength modifier.</Pair>
</Ability>
</>};
const _glory = {title: "Glory", jsx: <><h2 id="blessing-glory-glory">Glory</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 65</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></p>
<Ability id="glorious-presence-minor" icon={["armor-upgrade"]}>
<Pair single id="glorious-presence-minor" flavor="You can touch an ally and grant it a glorious blessing.">Glorious Presence (minor)</Pair>
<Pair title="At 1st Level">For 1 minute, the ally becomes mesmerizing to her foes. This functions as <Link to="/spell/sanctuary">sanctuary</Link>, except if the ally attacks an opponent, this effect ends with respect to only that opponent. This is a mind-affecting effect.</Pair>
</Ability>
<Ability id="demoralizing-glory-major" icon={["armor-downgrade"]}>
<Pair single id="demoralizing-glory-major">Demoralizing Glory (major)</Pair>
<Pair title="At 10th Level">When you successfully damage an opponent with a melee attack or attack spell, as a <strong className="hl">swift action</strong> you can attempt to demoralize that opponent with the <Link to="/skill/intimidate">Intimidate</Link> skill using your ranks in Intimidate or your warpriest level, whichever is higher.</Pair>
</Ability>
</>};
const _godclaw = {title: "Godclaw", jsx: <><h2 id="blessing-godclaw-godclaw">Godclaw</h2>
<p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 14</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/torag">Torag</Link></p>
<Ability id="command-obedience-minor" icon={["armor-upgrade"]}>
<Pair single id="command-obedience-minor">Command Obedience (minor)</Pair>
<Pair title="At 1st Level">You can touch an ally and say a quick word to remind her of her obligations, granting her a new saving throw against each enchantment effect that currently affects her. If the saving throw is successful, the enchantment effect immediately ends. This power affects only effects that allow a saving throw.</Pair>
</Ability>
<Ability id="tactical-readiness-major" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="tactical-readiness-major">Tactical Readiness (major)</Pair>
<Pair title="At 10th Level">You can rally your allies within 30 feet, allowing each to immediately do one of the following as a free action that does not provoke attacks of opportunity: remove the <Link to="/rule/flat_footed">flat-footed</Link> condition, <Link to="/rule/take_a_5_foot_step">take a 5-foot step</Link>, draw a weapon, ready a shield, or gain a +1 dodge bonus to AC for 1 round. You can affect a number of allies equal to your Wisdom bonus. These actions do not count against your allies' total movement or actions on their next turn.</Pair>
</Ability>
</>};
const _good = {title: "Good", jsx: <><h2 id="blessing-good-good">Good</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 66</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/desna">Desna</Link>, <Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/shelyn">Shelyn</Link>, <Link to="/faith/torag">Torag</Link></p>
<Ability id="holy-strike-minor" icon={["upgrade"]}>
<Pair single id="holy-strike-minor" flavor="You can touch one weapon and bless it with the power of purity and goodness.">Holy Strike (minor)</Pair>
<Pair title="At 1st Level">For 1 minute, this weapon glows green, white, or yellow-gold and deals an additional 1d6 points of damage against evil creatures. During this time, it's treated as good for the purposes of overcoming damage reduction. This additional damage doesn't stack with the additional damage from the <Link to="/magic-enh/holy">holy</Link> weapon special ability.</Pair>
</Ability>
<Ability id="battle-companion-major" icon={["magic-swirl"]}>
<Pair single id="battle-companion-major">Battle Companion (major)</Pair>
<Pair title="At 10th Level">You can summon a battle companion. This ability functions as <Link to="/spell/summon_monster_iv">summon monster IV</Link> with a duration of 1 minute, but for only a good outsider or an animal with the <Link to="/template/celestial">celestial</Link> creature simple template. This ability can summon only one creature, regardless of the list used.</Pair>
<Pair title="At 12th Level">This now behaves as <Link to="/spell/summon_monster_v">summon monster V</Link>.</Pair>
<Pair title="At 14th Level">This now behaves as <Link to="/spell/summon_monster_vi">summon monster VI</Link>.</Pair>
<Pair title="At 16th Level">This now behaves as <Link to="/spell/summon_monster_vii">summon monster VII</Link>.</Pair>
<Pair title="At 18th Level">This now behaves as <Link to="/spell/summon_monster_viii">summon monster VIII</Link>.</Pair>
<Pair title="At 20th Level">This now behaves as <Link to="/spell/summon_monster_ix">summon monster IX</Link>.</Pair>
</Ability>
</>};
const _healing = {hasJL:true,title: "Healing", jsx: <><div className="jumpList" id="blessing-healing-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="blessing-healing-restoration">Restoration</InnerLink></li><li><InnerLink toTop to="blessing-healing-resurrection">Resurrection</InnerLink></li></ul></div><h2 id="blessing-healing-healing">Healing</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 66</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/irori">Irori</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></p>
<Ability id="powerful-healer-minor" icon={["upgrade"]}>
<Pair single id="powerful-healer-minor" flavor={<>You can add power to a <Link to="/main/cure_spells">cure spell</Link> as you cast it.</>}>Powerful Healer (minor)</Pair>
<Pair title="At 1st Level">As a <strong className="hl">swift action</strong>, you can treat any <em>cure</em> spell as if it were empowered (as the <Link to="/feat/empower_spell">Empower Spell</Link> feat), causing it to heal 50% more damage (or deal 50% more damage if used against undead). This ability doesn't stack with itself or the Empower Spell feat.</Pair>
</Ability>
<Ability id="fast-healing-major" icon={["remedy"]}>
<Pair single id="fast-healing-major">Fast Healing (major)</Pair>
<Pair title="At 10th Level">You can touch an ally and grant it <Link to="/umr/fast_healing">fast healing</Link> 3 for 1 minute.</Pair>
</Ability>
<h3 id="blessing-healing-restoration" data-hash-target>Restoration</h3>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 13</Link></p>
<p><strong className="hl">ReplacementBlessing:</strong> The following minor blessing replaces the <em>powerful healer</em> ability of the Healing blessing.</p>
<Ability id="ameliorating-touch-minor" icon={["remedy"]}>
<Pair single id="ameliorating-touch-minor" flavor="Your touch is a balm to your suffering allies.">Ameliorating Touch (minor)</Pair>
<Pair title="At 1st Level">You can touch an ally as a <strong className="hl">swift action</strong> to temporarily relieve that ally of the <Link to="/misc/fatigued">fatigued</Link>, <Link to="/misc/shaken">shaken</Link>, or <Link to="/misc/sickened">sickened</Link> condition. This blessing suppresses those conditions for 1 minute.</Pair>
<Pair title="At 2nd Level">You can spend two uses of your blessing ability whenever you heal yourself or an ally with your <em>fervor</em> class ability to use this minor blessing as a <strong className="hl">free action</strong> instead of a swift action.</Pair>
</Ability>
<h3 id="blessing-healing-resurrection" data-hash-target>Resurrection</h3>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 13</Link></p>
<p><strong className="hl">ReplacementBlessing:</strong> The following major blessing replaces the <em>fast healing</em> ability of the Healing blessing.</p>
<Ability id="return-of-the-fallen-major" icon={["magic-swirl"]}>
<Pair single id="return-of-the-fallen-major" flavor="Your touch can defy the cold claws of death itself.">Return of the Fallen (major)</Pair>
<Pair title="At 10th Level">You can temporarily revive a touched ally to continue fighting, as if you had cast <Link to="/spell/raise_dead">raise dead</Link> on her. The revived ally is also <Link to="/misc/staggered">staggered</Link> for a number of rounds equal to 1/2 your warpriest level, after which she immediately dies. The ally is free to act as she sees fit during this time, and you are granted no control over her.</Pair>
</Ability>
</>};
const _knowledge = {title: "Knowledge", jsx: <><h2 id="blessing-knowledge-knowledge">Knowledge</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 66</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/pharasma">Pharasma</Link></p>
<Ability id="lore-keeper-minor" icon={["magic-palm"]}>
<Pair single id="lore-keeper-minor" flavor="You can touch a creature to learn about its abilities and weaknesses.">Lore Keeper (minor)</Pair>
<Pair title="At 1st Level">With a successful touch attack, you gain information as if your result on the appropriate Knowledge skill check were equal to 15 + your warpriest level + your Wisdom modifier.</Pair>
</Ability>
<Ability id="monster-lore-major" icon={["upgrade","armor-upgrade"]}>
<Pair single id="monster-lore-major">Monster Lore (major)</Pair>
<Pair title="At 10th Level">When you succeed at a Knowledge check against an opponent to learn about its abilities or weaknesses (or succeed at a touch attack using the <em>lore keeper</em> blessing, above), you can as a <strong className="hl">swift action</strong> gain a +2 insight bonus on attacks, saving throws, and ability and skill checks, as well as to your AC against that creature. This effect lasts for 1 minute.</Pair>
</Ability>
</>};
const _law = {title: "Law", jsx: <><h2 id="blessing-law-law">Law</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 66</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/torag">Torag</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link></p>
<Ability id="axiomatic-strike-minor" icon={["upgrade"]}>
<Pair single id="axiomatic-strike-minor" flavor="You can touch one weapon and enhance it with the essence of law.">Axiomatic Strike (minor)</Pair>
<Pair title="At 1st Level">For 1 minute, this weapon glows blue, pale yellow, or white and deals an additional 1d6 points of damage against chaotic creatures. During this time, it's treated as lawful for the purposes of overcoming damage reduction. This additional damage doesn't stack with the additional damage from the <Link to="/magic-enh/axiomatic">axiomatic</Link> weapon special ability.</Pair>
</Ability>
<Ability id="battle-companion-major" icon={["magic-swirl"]}>
<Pair single id="battle-companion-major">Battle Companion (major)</Pair>
<Pair title="At 10th Level">You can summon a battle companion. This ability functions as <Link to="/spell/summon_monster_iv">summon monster IV</Link> with a duration of 1 minute, but for only a lawful outsider or an animal with the <Link to="/template/resolute">resolute</Link> creature simple template. This ability can summon only one creature, regardless of the list used.</Pair>
<Pair title="At 12th Level">This now behaves as <Link to="/spell/summon_monster_v">summon monster V</Link>.</Pair>
<Pair title="At 14th Level">This now behaves as <Link to="/spell/summon_monster_vi">summon monster VI</Link>.</Pair>
<Pair title="At 16th Level">This now behaves as <Link to="/spell/summon_monster_vii">summon monster VII</Link>.</Pair>
<Pair title="At 18th Level">This now behaves as <Link to="/spell/summon_monster_viii">summon monster VIII</Link>.</Pair>
<Pair title="At 20th Level">This now behaves as <Link to="/spell/summon_monster_ix">summon monster IX</Link>.</Pair>
</Ability>
</>};
const _liberation = {title: "Liberation", jsx: <><h2 id="blessing-liberation-liberation">Liberation</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 66</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/desna">Desna</Link></p>
<Ability id="liberation-minor" icon={["magic-swirl"]}>
<Pair single id="liberation-minor">Liberation (minor)</Pair>
<Pair title="At 1st Level">For 1 round as a <strong className="hl">swift action</strong>, you can ignore impediments to your mobility and effects that cause <Link to="/rule/paralysis">paralysis</Link> (as <Link to="/spell/freedom_of_movement">freedom of movement</Link>). You can activate this blessing even if you're otherwise unable to take actions, but not if you're unconscious.</Pair>
</Ability>
<Ability id="freedoms-shout-major" icon={["aura","magic-swirl"]}>
<Pair single id="freedoms-shout-major">Freedom's Shout (major)</Pair>
<Pair title="At 10th Level">As a <strong className="hl">swift action</strong> you can emit a 30-foot aura that affects all allies with the <em>liberation</em> blessing described above. This effect lasts for 1 round.</Pair>
</Ability>
<h3 id="blessing-liberation-freedom">Freedom</h3>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 13</Link></p>
<p><strong className="hl">ReplacementBlessing:</strong> The following major blessing replaces the <em>freedom's shout</em> ability of the Liberation blessing.</p>
<Ability id="greater-liberation-major" icon={["upgrade"]}>
<Pair single id="greater-liberation-major">Greater Liberation (major)</Pair>
<Pair title="At 10th Level">When you use the <em>liberation</em> ability of the Liberation blessing, its effects last for 1 minute.</Pair>
</Ability>
</>};
const _luck = {title: "Luck", jsx: <><h2 id="blessing-luck-luck">Luck</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 66</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/desna">Desna</Link>, <Link to="/faith/shelyn">Shelyn</Link></p>
<Ability id="lucky-presence-minor" icon={["rolling-dices"]}>
<Pair single id="lucky-presence-minor" flavor="You can touch an ally and grant it a lucky presence.">Lucky Presence (minor)</Pair>
<Pair title="At 1st Level">The target of this luck can call upon it to roll any one ability check, attack roll, saving throw, or skill check twice and take the better result. The decision to use this ability must be made before the roll is made. Once used, or once 1 minute passes, the effect ends.</Pair>
</Ability>
<Ability id="unlucky-enemy-major" icon={["rolling-dices"]}>
<Pair single id="unlucky-enemy-major">Unlucky Enemy (major)</Pair>
<Pair title="At 10th Level">As an <strong className="hl">immediate action</strong> you can force an adjacent opponent to reroll an attack, saving throw, or skill or ability check it just attempted; it must take the lower of the two rolls. You must declare this after the roll is made but before the result is revealed.</Pair>
</Ability>
</>};
const _madness = {title: "Madness", jsx: <><h2 id="blessing-madness-madness">Madness</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 66</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/lamashtu">Lamashtu</Link></p>
<Ability id="madness-supremacy-minor" icon={["remedy"]}>
<Pair single id="madness-supremacy-minor">Madness Supremacy (minor)</Pair>
<Pair title="At 1st Level">As a <strong className="hl">swift action</strong> you can target a creature within 30 feet that has the <Link to="/misc/cowering">cowering</Link>, <Link to="/misc/frightened">frightened</Link>, <Link to="/misc/panicked">panicked</Link>, or <Link to="/rule/paralyzed">paralyzed</Link> condition. That condition is suspended for 1 round, and the chosen creature gains the <Link to="/misc/confused">confused</Link> condition instead. The confused creature rerolls any result other than "attack self" or "attack nearest creature." The round spent confused counts toward the duration of the suspended effect. At the end of the confused round, the suspended condition resumes.</Pair>
</Ability>
<Ability id="control-madness-major" icon={["stairs-goal"]}>
<Pair single id="control-madness-major">Control Madness (major)</Pair>
<Pair title="At 10th Level">As a <strong className="hl">swift action</strong> you can choose one behavior for all confused creatures within 30 feet to exhibit (as if all creatures rolled the same result). This effect lasts for 1 round. You can use this ability even while you are confused.</Pair>
</Ability>
</>};
const _magic = {title: "Magic", jsx: <><h2 id="blessing-magic-magic">Magic</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 67</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/urgathoa">Urgathoa</Link></p>
<Ability id="hand-of-the-acolyte-minor" icon={["bowman"]}>
<Pair single id="hand-of-the-acolyte-minor">Hand of the Acolyte (minor)</Pair>
<Pair title="At 1st Level">You can cause your melee weapon to fly from your grasp and strike an opponent, then instantly return to you. You can make a single attack using a melee weapon at a range of 30 feet. This attack is treated as a ranged attack with a thrown weapon, except that you add your Wisdom modifier to the attack roll instead of your Dexterity modifier (you still add your Strength modifier to the damage roll as normal). This ability cannot be used to perform a combat maneuver.</Pair>
</Ability>
<Ability id="blessed-magic-major" icon={["magic-swirl"]}>
<Pair single id="blessed-magic-major">Blessed Magic (major)</Pair>
<Pair title="At 10th Level">You can cast a prepared warpriest spell without expending its spell slot. The spell must have a casting time of 1 standard action and must use a spell slot that is at least 3 spell levels lower than the highest warpriest spell level you can cast. In addition, the spell must be one that damages a creature or causes a creature to take penalties (such as <Link to="/spell/inflict_light_wounds">inflict light wounds</Link> or <Link to="/spell/bane">bane</Link>). For example, if you are 10th level and can cast 4th-level warpriest spells, you could use this blessing to cast a 1st-level warpriest spell without expending its spell slot.</Pair>
</Ability>
</>};
const _nobility = {title: "Nobility", jsx: <><h2 id="blessing-nobility-nobility">Nobility</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 67</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/abadar">Abadar</Link></p>
<Ability id="inspiring-word-minor" icon={["upgrade","armor-upgrade"]}>
<Pair single id="inspiring-word-minor">Inspiring Word (minor)</Pair>
<Pair title="At 1st Level">You can speak a few words to a creature within 30 feet that fill them with inspiration. You can grant that creature a +2 morale bonus on attack rolls, ability checks, skill checks, or saving throws (your choice). This effect lasts for 1 minute.</Pair>
</Ability>
<Ability id="lead-by-example-major" icon={["upgrade"]}>
<Pair single id="lead-by-example-major">Lead by Example (major)</Pair>
<Pair title="At 10th Level">As a <strong className="hl">swift action</strong> you can inspire your allies to follow your lead. If the following action on your turn is an attack or skill check, all allies within 30 feet who take the same action against the same foe or obstacle on their next turn gain a +4 morale bonus on that roll.</Pair>
</Ability>
<h3 id="blessing-nobility-martyr">Martyr</h3>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 13</Link></p>
<p><strong className="hl">ReplacementBlessing:</strong> The following major blessing replaces the <em>lead by example</em> ability of the Nobility blessing.</p>
<Ability id="martyrs-sacrifice-major" icon={["shield-reflect"]}>
<Pair single id="martyrs-sacrifice-major" flavor="Your body can accept wounds meant for others you deem worthy.">Martyr's Sacrifice (major)</Pair>
<Pair title="At 10th Level">You can shoulder the wounds of an ally within 50 feet for 1 minute, and during this time, the ally is affected as if you had cast <Link to="/spell/shield_other">shield other</Link> on her (except with a range of 50 feet).</Pair>
<Pair title="Special">You can have only one use of this ability active at a time; if you use this major blessing again, the previous use immediately expires.</Pair>
</Ability>
</>};
const _plant = {title: "Plant", jsx: <><h2 id="blessing-plant-plant">Plant</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 67</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/gozreh">Gozreh</Link></p>
<Ability id="creeping-vines-minor" icon={["armor-downgrade"]}>
<Pair single id="creeping-vines-minor">Creeping Vines (minor)</Pair>
<Pair title="At 1st Level">Upon hitting with a melee attack, as a <strong className="hl">swift action</strong> you cause the creature you hit to sprout entangling vines that attempt to hold it in place, <Link to="/rule/entangled">entangling</Link> it for 1 round (Reflex negates).</Pair>
</Ability>
<Ability id="battle-companion-major" icon={["magic-swirl"]}>
<Pair single id="battle-companion-major">Battle Companion (major)</Pair>
<Pair title="At 10th Level">You can summon a battle companion. This ability functions as <Link to="/spell/summon_natures_ally_iv">summon nature's ally IV</Link>, with a duration of 1 minute. This ability can summon only one animal, regardless of the list used, and the creature's type changes to <Link to="/type/plant">plant</Link> instead of animal.</Pair>
<Pair title="At 12th Level">This now behaves as <Link to="/spell/summon_natures_ally_v">summon nature's ally V</Link>.</Pair>
<Pair title="At 14th Level">This now behaves as <Link to="/spell/summon_natures_ally_vi">summon nature's ally VI</Link>.</Pair>
<Pair title="At 16th Level">This now behaves as <Link to="/spell/summon_natures_ally_vii">summon nature's ally VII</Link>.</Pair>
<Pair title="At 18th Level">This now behaves as <Link to="/spell/summon_natures_ally_viii">summon nature's ally VIII</Link>.</Pair>
<Pair title="At 20th Level">This now behaves as <Link to="/spell/summon_natures_ally_ix">summon nature's ally IX</Link>.</Pair>
</Ability>
</>};
const _protection = {title: "Protection", jsx: <><h2 id="blessing-protection-protection">Protection</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 67</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/shelyn">Shelyn</Link>, <Link to="/faith/torag">Torag</Link></p>
<Ability id="increased-defense-minor" icon={["armor-upgrade"]}>
<Pair single id="increased-defense-minor">Increased Defense (minor)</Pair>
<Pair title="At 1st Level">You can gain a +1 sacred bonus on saving throws and a +1 sacred bonus to AC for 1 minute.</Pair>
<Pair title="At 10th Level">The bonus becomes +2.</Pair>
<Pair title="At 20th Level">The bonus increases to +3.</Pair>
</Ability>
<Ability id="aura-of-protection-major" icon={["aura","armor-upgrade","shield-reflect"]}>
<Pair single id="aura-of-protection-major">Aura of Protection (major)</Pair>
<Pair title="At 10th Level">You can emit a 30-foot aura of protection for 1 minute. You and your allies within this aura gain <Link to="/umr/resistance">resistance</Link> 10 against acid, cold, electricity, fire, and sonic.</Pair>
<Pair title="At 15th Level">The energy resistance increases to 20.</Pair>
</Ability>
</>};
const _repose = {title: "Repose", jsx: <><h2 id="blessing-repose-repose">Repose</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 67</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/pharasma">Pharasma</Link></p>
<Ability id="gentle-rest-minor" icon={["magic-palm"]}>
<Pair single id="gentle-rest-minor">Gentle Rest (minor)</Pair>
<Pair title="At 1st Level">You can fill a living creature with lethargy by hitting it with a melee touch attack, causing it to become <Link to="/misc/staggered">staggered</Link> for 1 round. If the target is already staggered, it falls asleep for 1 round instead. An undead creature that's touched is staggered for a number of rounds equal to your Wisdom modifier (minimum 1).</Pair>
</Ability>
<Ability id="back-to-the-grave-major" icon={["aura"]}>
<Pair single id="back-to-the-grave-major">Back to the Grave (major)</Pair>
<Pair title="At 10th Level">When using <Link to="/ability/channel_energy">channel energy</Link> to heal living creatures, you can take a <strong className="hl">swift action</strong> on that same turn to also deal damage to undead creatures (as your <em>channel energy</em> ability). Undead take an amount of damage equal to half the amount healed, and can attempt the normal saving throw to halve this damage.</Pair>
</Ability>
</>};
const _rune = {title: "Rune", jsx: <><h2 id="blessing-rune-rune">Rune</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 67</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/irori">Irori</Link>, <Link to="/faith/nethys">Nethys</Link></p>
<Ability id="blast-rune-minor" icon={["magic-swirl"]}>
<Pair single id="blast-rune-minor">Blast Rune (minor)</Pair>
<Pair title="At 1st Level"><p>You can create a blast rune in any adjacent square. Any creature entering this square takes an amount of damage equal to 1d6 + 1/2 your warpriest level. This rune deals either acid, cold, electricity, or fire damage, designated when you create the rune.</p>
<p>The rune is invisible, and lasts a number of rounds equal to your warpriest level or until discharged. You cannot create a blast rune in a square occupied by another creature. This rune counts as a 1st-level spell for the purposes of dispelling. It can be discovered with a successful DC 26 Perception skill check and disarmed with a successful DC 26 Disable Device skill check.</p>
</Pair>
</Ability>
<Ability id="spell-storing-weapon-major" icon={["magic-swirl"]}>
<Pair single id="spell-storing-weapon-major">Spell-Storing Weapon (major)</Pair>
<Pair title="At 10th Level">You can cast a spell into a magic weapon as if it had the <Link to="/magic-enh/spell_storing">spell storing</Link> weapon special ability. If the stored spell is not used within 10 minutes, it dissipates.</Pair>
</Ability>
</>};
const _scalykind = {title: "Scalykind", jsx: <><h2 id="blessing-scalykind-scalykind">Scalykind</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 25</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/apsu">Apsu</Link>, <Link to="/faith/dahak">Dahak</Link>, <Link to="/faith/ragadahn">Ragadahn</Link>, <Link to="/faith/ydersius">Ydersius</Link></p>
<Ability id="scaly-touch-minor" icon={["armor-upgrade"]}>
<Pair single id="scaly-touch-minor">Scaly Touch (minor)</Pair>
<Pair title="At 1st Level">You can touch an ally as a <strong className="hl">standard action</strong> to grant it reptilian scales. For 1 minute, the ally gains an enhancement bonus to its natural armor equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of your warpriest level.</Pair>
</Ability>
<Ability id="serpent-fang-major" icon={["mailed-fist"]}>
<Pair single id="serpent-fang-major">Serpent Fang (major)</Pair>
<Pair title="At 10th Level"><p>As a <strong className="hl">standard action</strong> you can manifest venomous fangs for 1 minute. These fangs grant a <Link to="/umr/bite_attack">bite attack</Link> that deals 1d4 points of damage (for a Medium warpriest, 1d3 if Small). A successful bite also afflicts the opponent with a debilitating venom.</p>
<AffInfo type="Bite-injury" save="Fort 10 + 1/2 your warpriest level + your Con modifier" freq="1/round for 4 rounds" eff={<>1d2 <Link to="/rule/con_damage">Con damage</Link></>} cure1 icon="p">Serpent Venom</AffInfo>
</Pair>
</Ability>
</>};
const _shadow = {title: "Shadow", jsx: <><h2 id="blessing-shadow-shadow">Shadow</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 17</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/nocticula">Nocticula</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link></p>
<Ability id="flicker-of-shadows-minor" icon={["upgrade"]}>
<Pair single id="flicker-of-shadows-minor">Flicker of Shadows (minor)</Pair>
<Pair title="At 1st Level">You can cause a weapon you touch to warp and become insubstantial for a split second before an attack. The first attack made with this weapon each round ignores any shield bonus to Armor Class, as well as bonuses from <Link to="/rule/cover">cover</Link>. Total cover still provides a creature its full benefit. This effect lasts for 1 minute.</Pair>
</Ability>
<Ability id="swift-as-shadow-major" icon={["upgrade"]}>
<Pair single id="swift-as-shadow-major">Swift as Shadow (major)</Pair>
<Pair title="At 10th Level"><p>You can spend a <strong className="hl">swift action</strong> to empower yourself or an ally within 30 feet to move over the ground as easily as its shadow. The subject's land speed increases by 10 feet and it takes no movement penalties for darkness, difficult terrain, or slickness. The creature can safely move over areas of ice and even those affected by a <Link to="/spell/grease">grease</Link> spell.</p>
<p>When a creature affected by this ability hits with a <Link to="/rule/charge">charge</Link> attack, that attack deals an amount of additional cold damage equal to your level.</p>
</Pair>
</Ability>
</>};
const _strength = {title: "Strength", jsx: <><h2 id="blessing-strength-strength">Strength</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 68</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/urgathoa">Urgathoa</Link></p>
<Ability id="strength-surge-minor" icon={["upgrade"]}>
<Pair single id="strength-surge-minor">Strength Surge (minor)</Pair>
<Pair title="At 1st Level">As a <strong className="hl">swift action</strong> you can focus your own strength. You gain an enhancement bonus equal to 1/2 your warpriest level (minimum +1) on melee attack rolls, combat maneuver checks that rely on Strength, Strength-based skills, and Strength checks for 1 round.</Pair>
</Ability>
<Ability id="strength-of-will-major" icon={["upgrade","armor-upgrade"]}>
<Pair single id="strength-of-will-major">Strength of Will (major)</Pair>
<Pair title="At 10th Level">As a <strong className="hl">swift action</strong> you can ignore the movement penalties caused by wearing medium or heavy armor or by carrying a medium or heavy load. This effect lasts for 1 minute. During this time, you can add your Strength modifier on saving throws against effects that would cause you to become <Link to="/rule/entangled">entangled</Link>, <Link to="/misc/staggered">staggered</Link>, or <Link to="/rule/paralyzed">paralyzed</Link>.</Pair>
</Ability>
</>};
const _sun = {title: "Sun", jsx: <><h2 id="blessing-sun-sun">Sun</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 68</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></p>
<Ability id="blinding-strike-minor" icon={["armor-downgrade"]}>
<Pair single id="blinding-strike-minor">Blinding Strike (minor)</Pair>
<Pair title="At 1st Level">You can create a flash of sunlight in the eyes of one of your opponents. The target is <Link to="/misc/blinded">blinded</Link> for 1 round. If it succeeds at a Reflex saving throw, it's instead <Link to="/misc/dazzled">dazzled</Link> for 1 round. Creatures with <Link to="/umr/light_blindness">light blindness</Link> or <Link to="/umr/light_sensitivity">light sensitivity</Link> take a -4 penalty on this saving throw.</Pair>
<Pair title="Special">This is a <Link to="/spelldef/light">light</Link> effect. Sightless creatures are unaffected by this ability.</Pair>
</Ability>
<Ability id="cleansing-fire-major" icon={["upgrade"]}>
<Pair single id="cleansing-fire-major">Cleansing Fire (major)</Pair>
<Pair title="At 10th Level">You can touch a weapon and grant it either the <Link to="/magic-enh/flaming">flaming</Link> or undead-<Link to="/magic-enh/bane">bane</Link> weapon special ability for 1 minute. If you spend two uses of your <em>blessing</em> when activating this ability, the weapon can have both weapon special abilities.</Pair>
</Ability>
</>};
const _tornado = {title: "Tornado", jsx: <><h2 id="blessing-tornado-tornado">Tornado</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 97</Link><br/><strong className="hl">Deities:</strong> Evil deities that offer the <Link to="/blessing/air">Air</Link> blessing or nonevil deities with disasters in their portfolios</p>
<Ability id="dust-devil-minor" icon={["armor-downgrade"]}>
<Pair single id="dust-devil-minor">Dust Devil (minor)</Pair>
<Pair title="At 1st Level">When you hit with a weapon attack, you can use a <strong className="hl">swift action</strong> to cause a sudden burst of wind and debris to swirl around your target. The target is <Link to="/misc/dazzled">dazzled</Link> for 1 minute.</Pair>
</Ability>
<Ability id="howling-gale-major" icon={["aura"]}>
<Pair single id="howling-gale-major">Howling Gale (major)</Pair>
<Pair title="At 10th Level">You can invoke a howling windstorm around yourself as a <strong className="hl">standard action</strong>. For 1 minute, any Large or smaller creature takes twice as much movement to enter a space adjacent to you due to the winds, and thus can't <Link to="/rule/take_a_5_foot_step">take a 5-foot step</Link> to move adjacent to you.</Pair>
</Ability>
</>};
const _travel = {title: "Travel", jsx: <><h2 id="blessing-travel-travel">Travel</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 68</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/desna">Desna</Link></p>
<Ability id="agile-feet-minor" icon={["upgrade"]}>
<Pair single id="agile-feet-minor">Agile Feet (minor)</Pair>
<Pair title="At 1st Level">As a <strong className="hl">swift action</strong> you gain increased mobility. For 1 round, you ignore all <Link to="/rule/difficult_terrain">difficult terrain</Link> (including magical terrain) and take no penalties for moving through it.</Pair>
</Ability>
<Ability id="dimensional-hop-major" icon={["magic-swirl"]}>
<Pair single id="dimensional-hop-major">Dimensional Hop (major)</Pair>
<Pair title="At 10th Level">You can teleport up to 20 feet as a <strong className="hl">move action</strong>. You can increase this distance by expending another use of your <em>blessing</em> - each use spent grants an additional 20 feet. You must have line of sight to your destination. This teleportation doesn't provoke attacks of opportunity.</Pair>
<Pair title="Special">You can bring other willing creatures with you, but each such creature requires expending one additional use of your <em>blessing,</em> regardless of the distance traveled. (For example, transporting yourself 40 feet costs 2 uses of your <em>blessing,</em> and transporting an additional person this distance costs 1 more use.)</Pair>
</Ability>
</>};
const _trickery = {title: "Trickery", jsx: <><h2 id="blessing-trickery-trickery">Trickery</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 68</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/norgorber">Norgorber</Link></p>
<Ability id="double-minor" icon={["armor-upgrade"]}>
<Pair single id="double-minor">Double (minor)</Pair>
<Pair title="At 1st Level">As a <strong className="hl">move action</strong> you can create an illusory double of yourself. This double functions as a single <Link to="/spell/mirror_image">mirror image</Link>, and lasts for a number of rounds equal to your warpriest level, or until the illusory duplicate is <Link to="/spell/dispel">dispelled</Link> or destroyed.</Pair>
<Pair title="Special">You can have no more than one double at a time. The double created by this ability doesn't stack with the additional images from the mirror image spell.</Pair>
</Ability>
<Ability id="greater-invisibility-major" icon={["magic-swirl"]}>
<Pair single id="greater-invisibility-major">Greater Invisibility (major)</Pair>
<Pair title="At 10th Level">As a <strong className="hl">swift action</strong> you can become invisible for 1 round (as <Link to="/spell/greater_invisibility">greater invisibility</Link>).</Pair>
</Ability>
</>};
const _void = {title: "Void", jsx: <><h2 id="blessing-void-void">Void</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 25</Link><br/><strong className="hl">Deities:</strong> Great Old Ones, <Link to="/faith/groetus">Groetus</Link></p>
<Ability id="airless-touch-minor" icon={["magic-palm","armor-downgrade"]}>
<Pair single id="airless-touch-minor">Airless Touch (minor)</Pair>
<Pair title="At 1st Level">With a successful melee touch attack you can steal the breath from an opponent's lungs, leaving it unable to speak, use breath weapons, cast spells with verbal components, or do anything else requiring breath for 1 round. If the target fails at a Fortitude saving throw, it's also <Link to="/misc/staggered">staggered</Link> for 1 round as it catches its breath. If the target was attempting to <Link to="/misc/hold_its_breath">hold its breath</Link>, it can no longer do so: it must breathe on its turn or risk <Link to="/rule/suffocation">suffocation</Link> and unconsciousness.</Pair>
<Pair title="Special">Creatures that don't need to breathe are unaffected. Regardless of whether it succeeds at its saving throw, the target is immune to further uses of your <em>airless touch</em> for 24 hours.</Pair>
</Ability>
<Ability id="deny-gravity-major" icon={["upgrade"]}>
<Pair single id="deny-gravity-major">Deny Gravity (major)</Pair>
<Pair title="At 10th Level">As a <strong className="hl">standard action</strong> you can touch an ally to allow her to ignore the effects of gravity for 1 minute (as <Link to="/spell/fly">fly</Link>). The ally gains a fly speed of 40 feet with average maneuverability. The ally is also immune to dangerous environmental conditions (as <Link to="/spell/life_bubble">life bubble</Link>) for 1 minute.</Pair>
</Ability>
</>};
const _war = {title: "War", jsx: <><h2 id="blessing-war-war">War</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 68</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/rovagug">Rovagug</Link>, <Link to="/faith/urgathoa">Urgathoa</Link></p>
<Ability id="war-mind-minor" icon={["upgrade","armor-upgrade"]}>
<Pair single id="war-mind-minor">War Mind (minor)</Pair>
<Pair title="At 1st Level">You can touch an ally and grant it a tactical advantage for 1 minute. At the start of its turn each round, it can select one of the following bonuses: +10 feet to base land speed, +1 dodge bonus to AC, +1 insight bonus on attack rolls, or a +1 luck bonus on saving throws. Each bonus selected lasts for 1 round.</Pair>
</Ability>
<Ability id="battle-lust-major" icon={["upgrade"]}>
<Pair single id="battle-lust-major">Battle Lust (major)</Pair>
<Pair title="At 10th Level">You can touch an ally and grant it a thirst for battle.``All of the ally's melee attacks are treated as if they had the <Link to="/magic-enh/vicious">vicious</Link> weapon special ability, but the additional damage dealt to the ally from that special ability is nonlethal. In addition, the ally receives a +4 insight bonus on attack rolls made to confirm critical hits. These benefits last for 1 minute.</Pair>
</Ability>
</>};
const _water = {title: "Water", jsx: <><h2 id="blessing-water-water">Water</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 68</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/pharasma">Pharasma</Link></p>
<Ability id="ice-strike-minor" icon={["upgrade"]}>
<Pair single id="ice-strike-minor">Ice Strike (minor)</Pair>
<Pair title="At 1st Level">You can touch one weapon and enhance it with the power of water.``For 1 minute, this weapon glows with a blue-white chill and deals an additional 1d4 points of cold damage with each strike. This additional damage doesn't stack with the additional damage from the <Link to="/magic-enh/frost">frost</Link> or <Link to="/magic-enh/icy_burst">icy burst</Link> weapon special abilities.</Pair>
</Ability>
<Ability id="armor-of-ice-major" icon={["shield-reflect"]}>
<Pair single id="armor-of-ice-major">Armor of Ice (major)</Pair>
<Pair title="At 10th Level">You can touch any one ally and wreath it in freezing mist. This works as <Link to="/spell/fire_shield">fire shield</Link> (chill shield only) with a duration 1 minute.</Pair>
</Ability>
</>};
const _weather = {title: "Weather", jsx: <><h2 id="blessing-weather-weather">Weather</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 68</Link><br/><strong className="hl">Deities:</strong> <Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/rovagug">Rovagug</Link></p>
<Ability id="storm-strike-minor" icon={["upgrade"]}>
<Pair single id="storm-strike-minor">Storm Strike (minor)</Pair>
<Pair title="At 1st Level">You can touch one weapon and grant it a blessing of stormy weather.``For 1 minute, this weapon glows with blue or yellow sparks and deals an additional 1d4 points of electricity damage with each hit. This additional damage doesn't stack with the additional damage from the <Link to="/magic-enh/shock">shock</Link> or <Link to="/magic-enh/shocking_burst">shocking burst</Link> weapon special abilities.</Pair>
</Ability>
<Ability id="wind-barrier-major" icon={["magic-swirl"]}>
<Pair single id="wind-barrier-major">Wind Barrier (major)</Pair>
<Pair title="At 10th Level">You can create a barrier of fast winds around yourself for 1 minute. This acts as a <Link to="/spell/wind_wall">wind wall</Link> on all sides of your square, protects you with <Link to="/spell/feather_fall">feather fall</Link>, and doesn't interfere with your ranged attacks.</Pair>
</Ability>
</>};
const _wildfire = {title: "Wildfire", jsx: <><h2 id="blessing-wildfire-wildfire">Wildfire</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 97</Link><br/><strong className="hl">Deities:</strong> Evil deities that offer the <Link to="/blessing/fire">Fire</Link> blessing or nonevil deities with disasters in their portfolios</p>
<Ability id="leaping-flames-minor" icon={["upgrade","armor-upgrade"]}>
<Pair single id="leaping-flames-minor">Leaping Flames (minor)</Pair>
<Pair title="At 1st Level">You touch an ally to bless it with the speed of a wildfire for 1 minute. The ally gains a +10-foot enhancement bonus to its base speed, and the ally gains a +1 dodge bonus to its AC against attacks of opportunity.</Pair>
</Ability>
<Ability id="fiery-wake-major" icon={["magic-swirl"]}>
<Pair single id="fiery-wake-major">Fiery Wake (major)</Pair>
<Pair title="At 10th Level">When you move, you can use a <strong className="hl">swift action</strong> to invoke a blazing blessing on yourself. For the rest of your turn, your movement leaves behind a 10-foot-tall wall of opaque fire in your path. The wall burns for 1 minute. A creature that touches the wall takes 2d6 points of fire damage.</Pair>
</Ability>
</>};
export default {not_found:_not_found,air:_air,animal:_animal,artifice:_artifice,chaos:_chaos,charm:_charm,community:_community,curse:_curse,darkness:_darkness,death:_death,destruction:_destruction,earth:_earth,earthquake:_earthquake,evil:_evil,fire:_fire,flood:_flood,glory:_glory,godclaw:_godclaw,good:_good,healing:_healing,knowledge:_knowledge,law:_law,liberation:_liberation,luck:_luck,madness:_madness,magic:_magic,nobility:_nobility,plant:_plant,protection:_protection,repose:_repose,rune:_rune,scalykind:_scalykind,shadow:_shadow,strength:_strength,sun:_sun,tornado:_tornado,travel:_travel,trickery:_trickery,void:_void,war:_war,water:_water,weather:_weather,wildfire:_wildfire}