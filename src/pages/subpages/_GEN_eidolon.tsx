import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import {Block,Row,Cell} from '../../components/Block';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested unchained eidolon subtype.</p>
</>};
const _aberrant = {title: "Aberrant", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms pg. 18</Link></p>
<h2>Aberrant</h2>
<p>Alien entities from the farthest stars, the lightless depths of the Darklands, the sea itself, or even a lunatic's nightmares have long intrigued summoners who become obsessed with the monstrous form. While most summoners call upon outsiders from the Great Beyond, some discover the secret to summoning alien entities from strange corners of the Material Plane. These summoned minions are known as aberrant eidolons. Aberrant eidolons share many abilities and physical features with the nonoutsider aberrations that dwell in forgotten or nameless reaches of reality, but these malformed entities are still outsiders like any other eidolon for the purposes of determining which spells affect them.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Chaotic evil, chaotic neutral, neutral, or neutral evil.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Aberrant (<Link to="/unchevolution/bite">bite</Link>, <Link to="/unchevolution/grab">grab</Link> [tentacle mass], <Link to="/unchevolution/tentacle_mass">tentacle mass</Link>), biped (<Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs], <Link to="/unchevolution/slam">slam</Link>), quadruped (bite, limbs [legs, 2]), or serpentine (bite, grab [bite], <Link to="/unchevolution/reach">reach</Link> [bite], <Link to="/unchevolution/tail">tail</Link>, <Link to="/unchevolution/tail_slap">tail slap</Link>).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["skills","armor-upgrade","upgrade","stairs-goal","magic-swirl"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Aberrant eidolons gain the following class skills in place of those normally gained by eidolons: <Link to="/skill/escape_artist">Escape Artist</Link>; <Link to="/skill/intimidate">Intimidate</Link>; <Link to="/skill/knowledge">Knowledge</Link> (pick one); <Link to="/skill/perception">Perception</Link>; <Link to="/skill/stealth">Stealth</Link>; and <Link to="/skill/climb">Climb</Link>, <Link to="/skill/fly">Fly</Link>, or <Link to="/skill/swim">Swim</Link> (pick one). The summoner can choose four additional skills to be class skills for his eidolon. Aberrant eidolons count as both aberrations and outsiders for spells and effects. They gain a +4 racial bonus on saving throws against mind-affecting effects.</Pair>
<Pair title="At 4th Level">Aberrant eidolons add 1 point to their evolution pools.</Pair>
<Pair title="At 8th Level">Aberrant eidolons gain immunity to mind-affecting effects (including morale bonuses).</Pair>
<Pair title="At 12th Level">Aberrant eidolons gain DR 5/slashing. They also gain the <Link to="/unchevolution/blindsense">blindsense</Link> evolution as a bonus evolution.</Pair>
<Pair title="At 16th Level">Aberrant eidolons gain the <Link to="/unchevolution/blindsight">blindsight</Link> evolution. They also gain <Link to="/umr/telepathy">telepathy</Link> with a range of up to 100 feet.</Pair>
<Pair title="At 20th Level">Aberrant eidolons gain the ability to use <Link to="/spell/transmogrify">transmogrify</Link> as a <Link to="/feat/quicken_spell_like_ability">quickened spell-like ability</Link> once per day. These eidolons can gain the benefit of a <em>transmogrify</em> spell any number of times per day.</Pair>
</Ability>
</>};
const _aeon = {title: "Aeon", jsx: <><p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 24</Link></p>
<h2>Aeon</h2>
<p>Created to monitor a specific duality, an aeon eidolon often proves frustratingly headstrong in enforcing its own interpretation of balance.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Neutral.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Biped (<Link to="/unchevolution/claws">claws</Link>, <Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs]) or serpentine (limbs [arms], <Link to="/unchevolution/tail">tail</Link>, <Link to="/unchevolution/slam">slam</Link>).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["stairs-goal","armor-upgrade","magic-swirl"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Aeon eidolons gain the <em>envisaging</em> ability of other <Link to="/family/aeon">aeons</Link>. Aeon eidolons halve the armor and natural armor bonuses they gain per level, but gain an equal deflection bonus to their AC. They also gain a +4 bonus on saving throws against poison.</Pair>
<Pair title="At 4th Level">Aeon eidolons gain the benefits of the <Link to="/magic-enh/moderate_fortification">moderate fortification</Link> armor special ability and cannot be tripped.</Pair>
<Pair title="At 8th Level">Aeon eidolons gain the <Link to="/unchevolution/flight">flight</Link> evolution (using magic) with a speed equal to their base speed.</Pair>
<Pair title="At 12th Level"><p>Aeon eidolons gain the ability to influence either emotions or time as a <strong className="hl">standard action</strong>, as chosen by the summoner. Whenever the summoner gains a level, he can change which ability the eidolon influences.</p>
<p>When affecting emotions, an aeon eidolon affects up to five targets within 30 feet as <Link to="/spell/crushing_despair">crushing despair</Link>. A target can negate this effect with a successful Will save (DC = 14 + the eidolon's Charisma modifier). For each target that fails its save, the eidolon can affect one other creature within 30 feet as <Link to="/spell/good_hope">good hope</Link>. The caster level equals the eidolon's Hit Dice, and the save DC is equal to 10 + half the eidolon's Hit Dice + the eidolon's Charisma modifier.</p>
<p>When affecting time, the ability functions in the same way, but the eidolon affects primary targets as <Link to="/spell/slow">slow</Link> and secondary targets as <Link to="/spell/haste">haste</Link>.</p>
<p>The eidolon can use this ability once per day for every 5 Hit Dice it has.</p>
</Pair>
<Pair title="At 16th Level">Aeon eidolons become immune to critical hits, poison, and sneak attacks.</Pair>
<Pair title="At 20th Level">Aeon eidolons gain the ability to cast <Link to="/spell/moment_of_prescience">moment of prescience</Link> (CL 20th) as a spell-like ability three times per day.</Pair>
</Ability>
</>};
const _agathion = {title: "Agathion", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 29</Link></p>
<h2>Agathion</h2>
<p>Patient and enlightened liaisons of the good-aligned Outer Planes, <Link to="/family/agathion">agathion</Link> eidolons seek to vanquish evil and protect that which is good. Agathion eidolons always have aspects of a single animal or creature, rather than a hodgepodge of several. Though they have patience for summoners with unorthodox methods and even those who stray from the path of good, they will not brook their powers being used for evil ends. An agathion eidolon seeks to bring its summoner closer to its own enlightenment.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Neutral good.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Biped (<Link to="/unchevolution/claws">claws</Link>, <Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs]) or quadruped (limbs [legs, 2], <Link to="/unchevolution/bite">bite</Link>).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["armor-upgrade","remedy","stairs-goal","magic-swirl"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Agathion eidolons gain the <Link to="/unchevolution/resistance">resistance</Link> (electricity) evolution. They also gain a +4 bonus on saving throws against poison and petrification.</Pair>
<Pair title="At 4th Level">Agathion eidolons gain cold <em>resistance</em> 10 and sonic <em>resistance</em> 10.</Pair>
<Pair title="At 8th Level">Agathion eidolons gain <Link to="/ability/lay_on_hands">lay on hands</Link> as paladins with levels equal to their Hit Dice.</Pair>
<Pair title="At 12th Level">Agathion eidolons gain DR 5/evil. They also gain immunity to petrification and the <em>truespeech</em> ability (see the <Link to="/subtype/agathion">agathion creature subtype</Link>).</Pair>
<Pair title="At 16th Level">Agathion eidolons lose the <em>resistance</em> (electricity) evolution, and instead gain the <Link to="/unchevolution/immunity">immunity</Link> (electricity) evolution. They also gain the agathion's <em>speak with animals</em> ability (see the agathion creature subtype).</Pair>
<Pair title="At 20th Level">Agathion eidolons gain <Link to="/spell/detect_thoughts">detect thoughts</Link> as a spell-like ability at will and also increase their damage reduction to DR 10/evil.</Pair>
</Ability>
</>};
const _ancestor = {title: "Ancestor", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 31</Link></p>
<h2>Ancestor</h2>
<p>Whether created by bonding with the soul of a petitioner that was the summoner's ancestor in life or calling upon the impressions of such a soul left behind on the Ethereal Plane or the Akashic Record, ancestor eidolons are outsiders cast in the mold of mortals, and exhibit extraordinary skill and talent. They usually appear as idealized versions of the bodies they possessed while still alive, but distinctive and proud. Ancestor eidolons lend whatever aid they can to their summoner, who typically has some form of familial connection with the eidolon, be it by blood, honor, or devotion.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Any. Ancestor eidolons don't have any alignment subtypes.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Biped (<Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs]).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["stairs-goal"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">An ancestor eidolon gains all of the racial traits associated with its summoner's race; a summoner who isn't a 0-Hit Die creature must choose one 0-Hit Die race of his choice. For any effect dependent on class level, an ancestor eidolon uses its total Hit Dice instead (such as with the human's skilled racial trait). An ancestor eidolon counts as a creature of its chosen race's type and subtype for all effects, except for the purpose of meeting feat prerequisite requirements. An ancestor eidolon gains only the standard racial traits of its race; it cannot select alternate racial traits.</Pair>
<Pair title="At 4th Level">The ancestor eidolon chooses one of the following simple class templates: <Link to="/template/fighter">fighter</Link>, <Link to="/template/rogue">rogue</Link>, or <Link to="/template/sorcerer">sorcerer</Link>. It gains the abilities noted under the template's quick rules as if it were a creature with 1 Hit Die. The eidolon does not gain any abilities that a character with 1 level in the class associated with the chosen template wouldn't have. For instance, a 1-HD creature with the rogue simple template would normally gain the <em>evasion</em> and <em>uncanny dodge</em> abilities, but an ancestor eidolon that chooses the rogue simple template does not gain these abilities since a 1st-level rogue would not have <em>evasion</em> or <em>uncanny dodge.</em></Pair>
<Pair title="At 8th Level">The ancestor eidolon gains the <Link to="/unchevolution/skilled">skilled</Link> evolution with two skills that are on the list of class skills of the class associated with the eidolon's chosen simple class template.</Pair>
<Pair title="At 12th Level">The ancestor eidolon gains the abilities noted under its chosen simple class templates as if it were a creature with 5 Hit Dice, rather than 1 Hit Die. The eidolon doesn't gain any abilities that a character with 5 levels in the class associated with the chosen template wouldn't have.</Pair>
<Pair title="At 16th Level">The ancestor eidolon gains a bonus feat, chosen from the following list: <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <Link to="/feat/toughness">Toughness</Link>, or any feat that lists the eidolon's chosen race as a prerequisite. The eidolon must meet all of the chosen feat's prerequisites.</Pair>
<Pair title="At 20th Level">The ancestor eidolon gains the abilities noted under its chosen simple class templates as if it were a creature with 10 Hit Dice, rather than 5 Hit Dice. The eidolon doesn't gain any abilities that a character with 10 levels in the class associated with the chosen template wouldn't have.</Pair>
</Ability>
</>};
const _angel = {title: "Angel", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 30</Link></p>
<h2>Angel</h2>
<p>Hailing from the higher planes, <Link to="/family/angel">angel</Link> eidolons are creatures of exquisite beauty. They usually appear in idealized humanoid forms, with smooth skin, shining hair, and bright eyes. Angel eidolons are impeccably honorable, trustworthy, and diplomatic, but they do not shy away from confrontation when facing off against evil and its minions.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Any good.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Biped (<Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs], slam).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["armor-upgrade","stairs-goal","aura"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Angel eidolons gain the <Link to="/unchevolution/resistance">resistance</Link> (acid) and <em>resistance</em> (cold) evolutions. They also gain a +4 bonus on saving throws against poison.</Pair>
<Pair title="At 4th Level">Angel eidolons gain electricity <em>resistance</em> 10 and fire <em>resistance</em> 10.</Pair>
<Pair title="At 8th Level">Angel eidolons grow large, feathery wings, gaining the <Link to="/unchevolution/flight">flight</Link> evolution.</Pair>
<Pair title="At 12th Level">Angel eidolons gain DR 5/evil. They also gain immunity to petrification and the <em>truespeech</em> ability (see the <Link to="/subtype/angel">angel creature subtype</Link>).</Pair>
<Pair title="At 16th Level">Angel eidolons lose the <em>resistance</em> (acid) and <em>resistance</em> (cold) evolutions, and instead gain the <Link to="/unchevolution/immunity">immunity</Link> (acid) and <em>immunity</em> (cold) evolutions.</Pair>
<Pair title="At 20th Level">Angel eidolons gain the <em>protective aura</em> ability (see the angel creature subtype).</Pair>
</Ability>
</>};
const _archon = {title: "Archon", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 30</Link></p>
<h2>Archon</h2>
<p>Summoned from heaven, <Link to="/family/archon">archon</Link> eidolons are the embodiments of righteousness. They often take on powerful, graceful forms, rippling with muscles but refined in their movements. Archon eidolons are totally dedicated to the cause of good, and have little patience for those who violate their oaths and ideals - including the summoner who called them. Archons will do whatever it takes to stop the advance of evil and protect the innocent.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Lawful good.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Biped (<Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs], <Link to="/unchevolution/slam">slam</Link>).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["armor-upgrade","upgrade","aura","magic-swirl"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Archon eidolons gain the <Link to="/unchevolution/resistance">resistance</Link> (electricity) evolution and the <Link to="/unchevolution/skilled">skilled</Link> (Intimidate) evolution. They also gain a +4 bonus on saving throws against poison.</Pair>
<Pair title="At 4th Level">Archon eidolons add 1 point to their evolution pools.</Pair>
<Pair title="At 8th Level">Archon eidolons gain the <Link to="/unchevolution/ability_increase">ability increase</Link> evolution, applied to an ability score the summoner chooses.</Pair>
<Pair title="At 12th Level">Archon eidolons gain DR 5/evil. They also gain immunity to petrification and the <em>truespeech</em> ability (see the <Link to="/subtype/archon">archon creature subtype</Link>).</Pair>
<Pair title="At 16th Level">Archon eidolons lose the <em>resistance</em> (electricity) evolution and skilled (Intimidate) evolution, and instead gain the <Link to="/unchevolution/immunity">immunity</Link> (electricity) evolution. In addition, they gain the <em>aura of menace</em> ability (see the archon creature subtype).</Pair>
<Pair title="At 20th Level">Archon eidolons gain the ability to use <Link to="/spell/greater_teleport">greater teleport</Link> at will, as the spell (caster level 14th), except they can teleport only themselves and up to 50 pounds of carried objects.</Pair>
</Ability>
</>};
const _astral = {title: "Astral", jsx: <><p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 24</Link></p>
<h2>Astral</h2>
<p>While some resemble ouroboroses, most astral eidolons are spun from raw thought or the husks of Astral travelers whose silver cords broke.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Neutral.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Biped (<Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs], <Link to="/unchevolution/slam">slam</Link>) or serpentine (<Link to="/unchevolution/bite">bite</Link>, <Link to="/unchevolution/magic_attacks">magic attacks</Link>, <Link to="/unchevolution/reach">reach</Link> [bite], <Link to="/unchevolution/tail">tail</Link>, <Link to="/unchevolution/tail_slap">tail slap</Link>).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["armor-upgrade","broken-shield","upgrade","magic-swirl"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Astral eidolons gain immunity to aging as well as a +4 bonus on saving throws against curses, diseases, and poisons. A summoner's class level is halved for the purpose of determining the rate at which his astral eidolon's Strength and Dexterity increase.</Pair>
<Pair title="At 4th Level"><p>Astral eidolons gain the ability to augment their masters' summoning abilities three times per day.</p>
<p>To do so, the astral eidolon must <Link to="/rule/ready">ready an action</Link> to meld with a summoned creature. The summoner can use his <em>summon monster</em> spell-like ability or cast a <Link to="/spell/summon_monster">summon monster</Link> spell while the astral eidolon is summoned and readied to activate this ability. The eidolon physically melds with one summoned creature as it appears, during which time the eidolon cannot be harmed or take actions of its own except to end the effect as a <strong className="hl">standard action</strong>. The eidolon must be adjacent to or share the space where the summoned creature will appear.</p>
<p>The effect ends either when the spell ends, when the summoned creature is slain or dismissed, or when either the summoner or eidolon ends the effect as a <strong className="hl">standard action</strong>, after which the summoned creature disappears and the eidolon appears in the creature's space and is <Link to="/misc/staggered">staggered</Link> until the beginning of the summoner's next turn.</p>
<p>When melded with a summoned creature, the eidolon grants the summoned creature one or more evolutions the eidolon has (maximum 1 point worth of evolutions for every 3 Hit Dice the eidolon has) and a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to 1d8 plus the eidolon's number of Hit Dice.</p>
<p>The summoned creature must conform to any limitations of the evolution (for example, it must have wings in order to gain the <Link to="/unchevolution/wing_buffet">wing buffet</Link> evolution). Furthermore, the summoned creature cannot gain more than one natural attack in this way, though it can replace the damage of its natural weapons with that dealt by the evolution, provided the natural weapons are similar.</p>
<p>For effects dependent on Hit Dice, use the eidolon's Hit Dice.</p>
</Pair>
<Pair title="At 8th Level">Astral eidolons gain the <Link to="/unchevolution/flight">flight</Link> evolution (using magic) with a speed equal to their base speed.</Pair>
<Pair title="At 12th Level">Astral eidolons gain the ability to augment their master's summoning two additional times per day. When the eidolon melds with a summoned creature, that creature also gains the eidolon's evasion and devotion abilities.</Pair>
<Pair title="At 16th Level"><p>Astral eidolons gain immunity to curses, diseases, and poisons. They also increase by 50% the number of evolution points their summoners can divert using the <em>aspect</em> and <em>greater aspect</em> abilities. If the summoner lacks the <em>aspect</em> ability, he gains this ability but can divert only 1 evolution point.</p>
<p>The summoner no longer takes penalties to his ability scores for <Link to="/rule/aging">aging</Link>, cannot be magically aged, and does not age retroactively when leaving a plane with the <Link to="/rule/time_traits">timeless planar trait</Link>. Ability score bonuses from age still accrue, and the summoner still dies of old age when his time is up.</p>
</Pair>
<Pair title="At 20th Level">Astral eidolons can simultaneously meld with each creature summoned by the summoner's <em>summon monster</em> spell-like ability or <em>summon monster</em> spells, and the eidolon does not reappear automatically until each of the creatures is slain. Alternatively, the eidolon can meld with one summoned creature without disappearing, though the eidolon is staggered until the effect ends.</Pair>
</Ability>
</>};
const _azata = {title: "Azata", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 30</Link></p>
<h2>Azata</h2>
<p>Embodiments of the untamable beauty and noble passion of Elysium, <Link to="/family/azata">azata</Link> eidolons have wild and beautiful features. They often take graceful forms reminiscent of elves or fey, but they occasionally appear like lillends, with serpentine tails. Azata eidolons are flighty and independent, and they often have their own ideas about how to defeat evil or have a good time. Thus, an azata eidolon is likely to balk if its summoner commands it to perform offensive or nefarious actions. On the other hand, an azata eidolon in sync with its summoner is a passionate and devoted companion.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Chaotic good.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Biped (<Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs]) or serpentine (limbs [arms], <Link to="/unchevolution/tail">tail</Link>, <Link to="/unchevolution/tail_slap">tail slap</Link>).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["armor-upgrade","stairs-goal","upgrade","magic-swirl"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Azata eidolons gain the <Link to="/unchevolution/resistance">resistance</Link> (electricity) evolution and the 4-point <Link to="/unchevolution/weapon_training">weapon training</Link> evolution (proficiency in martial weapons).</Pair>
<Pair title="At 4th Level">Azata eidolons gain cold <em>resistance</em> 10 and fire <em>resistance</em> 10.</Pair>
<Pair title="At 8th Level">Azata eidolons grow large, feathery wings, gaining the <Link to="/unchevolution/flight">flight</Link> evolution.</Pair>
<Pair title="At 12th Level">Azata eidolons gain DR 5/evil. They also gain immunity to petrification and the <em>truespeech</em> ability (see the <Link to="/subtype/azata">azata creature subtype</Link>).</Pair>
<Pair title="At 16th Level">Azata eidolons lose the <em>resistance</em> (electricity) evolution, and instead gain the <Link to="/unchevolution/immunity">immunity</Link> (electricity) evolution. They also gain the <Link to="/unchevolution/ability_increase">ability increase</Link> evolution, applied to an ability score of the summoner's choice.</Pair>
<Pair title="At 20th Level">An azata eidolon gains the ability to switch between its normal form and an energy form as a <strong className="hl">standard action</strong>. In its energy form, an azata eidolon is incorporeal and doubles its fly speed, but it can't make natural or manufactured weapon attacks; it can, however, activate any <em>spell-like ability</em> evolutions it possesses.</Pair>
</Ability>
</>};
const _daemon = {title: "Daemon", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 31</Link></p>
<h2>Daemon</h2>
<p>The agents of horrible deaths, <Link to="/family/daemon">daemon</Link> eidolons desire the utter annihilation of all things. Their forms vary wildly depending on which type of death they embody, and daemon eidolons sometimes represent a more obscure kind of death than the most famous daemons. Daemon eidolons wish to sow death and misery through a variety of means. Most are capable of seeing the big picture, and will obediently follow even a neutral summoner. Ending lives is a typical part of an adventurer's career, so following along with a summoner gives a daemon eidolon many opportunities to gather mortal soul energy for its own dark and inscrutable purposes.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Neutral evil.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Aberrant (<Link to="/unchevolution/bite">bite</Link>, <Link to="/unchevolution/tentacle_mass">tentacle mass</Link>), Biped (<Link to="/unchevolution/claws">claws</Link>, <Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs]), quadruped (limbs [legs, 2], bite), or serpentine (bite, <Link to="/unchevolution/reach">reach</Link> [bite], reach [sting], <Link to="/unchevolution/sting">sting</Link>, <Link to="/unchevolution/tail">tail</Link>).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["armor-upgrade","upgrade","stairs-goal"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Daemon eidolons gain the <Link to="/unchevolution/resistance">resistance</Link> (acid) evolution as well as a +4 bonus on saving throws against death effects, disease, and poison.</Pair>
<Pair title="At 4th Level">Daemon eidolons gain cold <em>resistance</em> 10, electricity <em>resistance</em> 10, and fire <em>resistance</em> 10.</Pair>
<Pair title="At 8th Level">Daemon eidolons add 1 point to their evolution pools.</Pair>
<Pair title="At 12th Level">Daemon eidolons gain DR 5/good. They also gain immunity to death effects, disease, and poison.</Pair>
<Pair title="At 16th Level">Daemon eidolons lose the <em>resistance</em> (acid) evolution, and instead gain the <Link to="/unchevolution/immunity">immunity</Link> (acid) evolution. They also gain <Link to="/umr/telepathy">telepathy</Link>.</Pair>
<Pair title="At 20th Level">As a <strong className="hl">standard action</strong>, a daemon eidolon can devour a portion of the soul of a dying creature or a creature that died no earlier than 1 round ago. This kills the creature and provides the daemon eidolon a profane bonus on attack rolls, saving throws, and skill checks for 24 hours. The bonus is equal to +1 per 5 Hit Dice the slain creature possessed. A creature whose soul was devoured in this way requires <Link to="/spell/resurrection">resurrection</Link> or more powerful magic to return from the dead.</Pair>
</Ability>
</>};
const _deepwater = {title: "Deepwater", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_sea">Blood of the Sea pg. 23</Link></p>
<h2>Deepwater</h2>
<p>The vast, lightless reaches of the sea are home to creatures of unimaginable power with connections to dangerous planes. A few rare summoners attempt to conjure forth eidolons from these cold, alien depths, drawing forth utterly inhuman allies with squirming tentacles and gnashing beaks. Although these eidolons may superficially resemble primeval beasts such as <Link to="/monster/aboleth">aboleths</Link>, <Link to="/monster/kraken">krakens</Link>, or monstrous squids or eels - if they resemble any previously encountered deep-sea life-form at all - they are outsiders like any other eidolon for the purposes of spells and effects that affect them.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Chaotic evil, chaotic neutral, neutral, or neutral evil.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Serpentine (<Link to="/unchevolution/bite">bite</Link>, <Link to="/unchevolution/grab">grab</Link> [tail slap], <Link to="/unchevolution/reach">reach</Link> [tail slap], <Link to="/unchevolution/tail">tail</Link>, <Link to="/unchevolution/tail_slap">tail slap</Link>).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["stairs-goal","armor-upgrade","upgrade","mailed-fist"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Deepwater eidolons gain the <Link to="/unchevolution/gills">gills</Link>, <Link to="/unchevolution/resistance">resistance</Link> (cold), and <Link to="/unchevolution/swim">swim</Link> evolutions.</Pair>
<Pair title="At 4th Level">Deepwater eidolons gain the <Link to="/umr/jet">jet</Link> ability at a speed of 200 feet and increase the range of their darkvision to 120 feet.</Pair>
<Pair title="At 8th Level">Deepwater eidolons gain the <Link to="/unchevolution/poison">poison</Link> evolution for all tail slap and tentacle attacks, although the poison can be used only once per round. The summoner can spend 2 evolution points to make this poison deal <Link to="/rule/constitution_damage">Constitution damage</Link> instead of Strength damage, as normal for the poison evolution.</Pair>
<Pair title="At 12th Level">Deepwater eidolons gain DR 5/magic. They also gain the <Link to="/unchevolution/rend">rend</Link> evolution for tentacle attacks rather than claw attacks.</Pair>
<Pair title="At 16th Level">Deepwater eidolons lose the <em>resistance</em> (cold) evolution and instead gain the <Link to="/unchevolution/immunity">immunity</Link> (cold) evolution.</Pair>
<Pair title="At 20th Level">Deepwater eidolons gain constant <Link to="/spell/freedom_of_movement">freedom of movement</Link> and <Link to="/umr/fast_healing">fast healing</Link> 5.</Pair>
</Ability>
</>};
const _demon = {title: "Demon", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 31</Link></p>
<h2>Demon</h2>
<p>Raw destruction given material substance, <Link to="/family/demon">demon</Link> eidolons form out of the Abyss's stew of soul energy, leading some scholars to speculate that the summoner's arts are related to the magical tampering that gave rise to the first demons. Demon eidolons revel in causing destruction and inflicting suffering, and they will do so for their summoners without question, taking pleasure in whatever havoc they can create. For a demon eidolon, the means justify the ends.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Chaotic evil.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Aberrant (<Link to="/unchevolution/bite">bite</Link>, <Link to="/unchevolution/tentacle_mass">tentacle mass</Link>), Biped (<Link to="/unchevolution/claws">claws</Link>, <Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs]), quadruped (limbs [legs, 2], bite), or serpentine (bite, <Link to="/unchevolution/improved_damage">improved damage</Link> [bite], <Link to="/unchevolution/reach">reach</Link> [bite], <Link to="/unchevolution/tail">tail</Link>, <Link to="/unchevolution/tail_slap">tail slap</Link>).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["armor-upgrade","stairs-goal","upgrade"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Demon eidolons gain the <Link to="/unchevolution/resistance">resistance</Link> (electricity) and <em>resistance</em> (fire) evolutions as well as a +4 bonus on saving throws against poison.</Pair>
<Pair title="At 4th Level">Demon eidolons gain acid <em>resistance</em> 10 and cold <em>resistance</em> 10.</Pair>
<Pair title="At 8th Level">Demon eidolons lose the +4 bonus on saving throws against poison and gain immunity to poison. They also add 1 point to their evolution pools.</Pair>
<Pair title="At 12th Level">Demon eidolons gain DR 5/good. They also gain the <Link to="/unchevolution/ability_increase">ability increase</Link> evolution in an ability score of the summoner's choice.</Pair>
<Pair title="At 16th Level">Demon eidolons lose the <em>resistance</em> (electricity) evolution, and instead gain the <Link to="/unchevolution/immunity">immunity</Link> (electricity) evolution. They also gain <Link to="/umr/telepathy">telepathy</Link>.</Pair>
<Pair title="At 20th Level">Demon eidolons gain <Link to="/spell/true_seeing">true seeing</Link> as a constant spell-like ability.</Pair>
</Ability>
</>};
const _devil = {title: "Devil", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 32</Link></p>
<h2>Devil</h2>
<p>Corruptors, tempters, and despoilers, <Link to="/family/devil">devil</Link> eidolons often serve their summoners obediently and efficiently, all in a long-term attempt to damn the summoner's soul to the deepest depths of Hell. While some types of devils have truly unusual forms, devil eidolons have found that the more traditional bipedal form allows them to build up a strong rapport with their summoners - and consequently to corrupt them - more easily than if they possessed a more monstrous appearance.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Lawful evil.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Biped (<Link to="/unchevolution/claws">claws</Link>, <Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs]).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["armor-upgrade","upgrade","stairs-goal"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Devil eidolons gain the <Link to="/unchevolution/resistance">resistance</Link> (fire) evolution and the <Link to="/unchevolution/skilled">skilled</Link> (Bluff) evolution. They also gain a +4 bonus on saving throws against poison.</Pair>
<Pair title="At 4th Level">Devil eidolons gain acid <em>resistance</em> 10 and cold <em>resistance</em> 10.</Pair>
<Pair title="At 8th Level">Devil eidolons gain the <em>skilled</em> (Diplomacy) evolution and gain immunity to poison.</Pair>
<Pair title="At 12th Level">Devil eidolons gain DR 5/good. They also gain <em>see in darkness</em> (see the <Link to="/subtype/devil">devil creature subtype</Link>).</Pair>
<Pair title="At 16th Level">Devil eidolons lose the <em>resistance</em> (fire) evolution, and instead gain the <Link to="/unchevolution/immunity">immunity</Link> (fire) evolution. They also gain <Link to="/umr/telepathy">telepathy</Link>.</Pair>
<Pair title="At 20th Level">Devil eidolons gain regeneration 5 (good weapons, good spells). They are still banished to Hell as normal for eidolons if they take enough damage.</Pair>
</Ability>
</>};
const _div = {title: "Div", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 32</Link></p>
<h2>Div</h2>
<p>Formed of hatred and spite, <Link to="/family/div">div</Link> eidolons seek to despoil and ruin all things beautiful and joyous. Div eidolons particularly resent having mortal masters, and seek to doom their summoners to existences full of suffering and loss. Each div eidolon has a unique compulsion it must follow - usually something similar to the <Link to="/monster/doru">doru's</Link> obsession with secrets - that leads it to bargain its loyalty for something the summoner provides. The div's summoner uses his eidolon's compulsion to entrap and control the eidolon. Still, div eidolons never fully give in, and continue to plot ways they might corrupt that which their masters hold dearest.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Neutral evil.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Biped (<Link to="/unchevolution/claws">claws</Link>, <Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs]).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["armor-upgrade","upgrade","stairs-goal","magic-swirl"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Div eidolons gain the <Link to="/unchevolution/resistance">resistance</Link> (fire) evolution. They also gain a +4 bonus on saving throws against poison.</Pair>
<Pair title="At 4th Level">Div eidolons gain acid <em>resistance</em> 10 and electricity <em>resistance</em> 10.</Pair>
<Pair title="At 8th Level">Div eidolons add 1 point to their evolution pools and immunity to poison.</Pair>
<Pair title="At 12th Level">Div eidolons gain DR 5/good. They also gain <em>see in darkness</em> (see the <Link to="/subtype/div">div creature subtype</Link>).</Pair>
<Pair title="At 16th Level">Div eidolons lose the <em>resistance</em> (fire) evolution, and instead gain the <Link to="/unchevolution/immunity">immunity</Link> (fire) evolution. They also gain <Link to="/umr/telepathy">telepathy</Link>.</Pair>
<Pair title="At 20th Level">Div eidolons gain the ability to use <Link to="/spell/greater_teleport">greater teleport</Link> at will, as per the spell (caster level 14th), except they can teleport only themselves and up to 50 pounds of carried objects.</Pair>
</Ability>
</>};
const _elemental = {title: "Elemental", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 33</Link></p>
<h2>Elemental</h2>
<p>Pulled in from one of the four elemental planes, these eidolons are linked to one of the four elements: air, earth, fire, or water. Generally, an <Link to="/family/elemental">elemental</Link> eidolon appears as a creature made entirely of one element, but there is some variation. Elemental eidolons are decidedly moderate in their views and actions. They tend to avoid the conflicts of others when they can and seek to maintain balance. The only exception is when facing off against emissaries of their opposing elements, which they hate utterly.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Neutral.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Aberrant (<Link to="/unchevolution/bite">bite</Link>, <Link to="/unchevolution/tentacle_mass">tentacle mass</Link>), Biped (<Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs], <Link to="/unchevolution/slam">slam</Link>), quadruped (limbs [legs, 2], bite), or serpentine (bite, <Link to="/unchevolution/improved_natural_armor">improved natural armor</Link>, <Link to="/unchevolution/reach">reach</Link> [bite], <Link to="/unchevolution/tail">tail</Link>, <Link to="/unchevolution/tail_slap">tail slap</Link>).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["armor-upgrade","upgrade","stairs-goal"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="Choice">The base evolutions of an elemental eidolon depend entirely on its chosen element. When first summoning an elemental eidolon, the summoner must select air, earth, fire, or water. Once made, this choice cannot be changed. The eidolon gains the following evolutions and abilities, which can vary depending on its element.</Pair>
<Pair title="At 1st Level">All elemental eidolons gain immunity to paralysis and sleep. In addition, air elemental eidolons gain the <Link to="/unchevolution/immunity">immunity</Link> (electricity) evolution. Earth elemental eidolons gain the <em>immunity</em> (acid) evolution. Fire elemental eidolons gain the <em>immunity</em> (fire) evolution. Water elemental eidolons gain the <em>immunity</em> (cold) evolution.</Pair>
<Pair title="At 4th Level">All elemental eidolons add 1 point to their evolution pools.</Pair>
<Pair title="At 8th Level">Air elemental eidolons gain the <Link to="/unchevolution/flight">flight</Link> evolution (using magic) with a speed equal to their base speed. Earth elemental eidolons gain the <Link to="/unchevolution/burrow">burrow</Link> evolution. Fire elemental eidolons increase their base speed by 20 feet. Water elemental eidolons gain the <Link to="/unchevolution/swim">swim</Link> evolution twice, gaining a swim speed equal to their base speed + 20 feet. They also gain the <Link to="/unchevolution/gills">gills</Link> evolution, which allows them to breathe underwater.</Pair>
<Pair title="At 12th Level">All elemental eidolons gain immunity to bleed, poison, and stun. In addition, they can no longer be <Link to="/rule/flanked">flanked</Link>.</Pair>
<Pair title="At 16th Level">All elemental eidolons gain immunity to critical hits and do not take additional damage from <Link to="/misc/precision_based_attacks">precision-based attacks</Link>, such as sneak attack.</Pair>
<Pair title="At 20th Level">An air elemental eidolon gains the <Link to="/umr/whirlwind">whirlwind</Link> ability, with a maximum height of 15 feet (30 feet for a Large air elemental) and dealing 1d6 points of damage (1d8 for a Large air elemental). Earth elemental eidolons gain the <em>earth mastery</em> ability of an <Link to="/monster/earth_elemental">earth elemental</Link> and DR 5/-. Fire elemental eidolons gain the <Link to="/unchevolution/energy_attacks">energy attacks</Link> (fire) evolution and the <Link to="/umr/burn">burn</Link> ability. Water elemental eidolons gain the <em>drench</em> and <em>vortex</em> abilities of a <Link to="/monster/water_elemental">water elemental</Link>. The <em>vortex</em> ability works as the air elemental eidolon's <em>whirlwind</em> ability (except as noted in the <em>vortex</em> ability's description).</Pair>
</Ability>
</>};
const _genie = {title: "Genie", jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 27</Link></p>
<h2>Genie</h2>
<p>Genies are elemental beings that take humanoid forms, and <Link to="/family/genie">genie</Link> eidolons often vacillate between humble kowtowing and biting observations about the summoner's foibles that make the eidolon look superior.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Chaotic good, chaotic neutral, lawful evil, lawful neutral, or neutral.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Biped (<Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs], <Link to="/unchevolution/slam">slam</Link>).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["stairs-goal","armor-upgrade","magic-swirl","upgrade"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Genie eidolons gain the 4-point <Link to="/unchevolution/weapon_training">weapon training</Link> evolution as well as the <Link to="/unchevolution/resistance">resistance</Link> evolution for any one energy type.</Pair>
<Pair title="At 4th Level">Genie eidolons gain the ability to grow in size twice per day as a <strong className="hl">full-round action</strong>. This grants them the <Link to="/unchevolution/large">large</Link> evolution for 1 round per Hit Die they have, increases the size of their equipment for the duration, and does not stack with other size-changing effects. Genie eidolons who later purchase the <em>large</em> evolution lose this ability, but they add 1 point to their evolution pools.</Pair>
<Pair title="At 8th Level">Genie eidolons gain either the <Link to="/unchevolution/flight">flight</Link> evolution (using magic) with a speed equal to their base speed; the <Link to="/unchevolution/burrow">burrow</Link> evolution; or the <Link to="/unchevolution/gills">gills</Link> evolution, plus the <Link to="/unchevolution/swim">swim</Link> evolution twice, gaining a swim speed equal to their base speed + 20 feet.</Pair>
<Pair title="At 12th Level">Genie eidolons lose the resistance evolution gained at 1st level and instead gain the <Link to="/unchevolution/immunity">immunity</Link> evolution to the selected energy type. They can also cast <Link to="/spell/plane_shift">plane shift</Link> as a spell-like ability once per day (CL 12th), but only to transport willing targets to the Astral Plane, Elemental Planes, or Material Plane.</Pair>
<Pair title="At 16th Level">Once per day as a <strong className="hl">standard action</strong>, genie eidolons can cast <Link to="/spell/cleanse">cleanse</Link> or <Link to="/spell/greater_evolution_surge">greater evolution surge</Link> (CL 16th) on themselves as a spell-like ability, but only in response to their masters' spoken wish (such as "I wish you were stronger"). The master can make such a wish as a <strong className="hl">free action</strong>.</Pair>
<Pair title="At 20th Level">Genie eidolons gain the 20th-level base evolutions of an <Link to="/eidolon/elemental">elemental</Link> eidolon of any one element.</Pair>
</Ability>
</>};
const _inevitable = {title: "Inevitable", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 33</Link></p>
<h2>Inevitable</h2>
<p>Implacable and ceaseless in their fight against chaos and those who break natural laws, <Link to="/family/inevitable">inevitables</Link> make loyal, if literal-minded, companions for lawful summoners. Summoners of inevitables generally get along well with axiomites, who share their understanding of the process of forging and modifying an inevitable. Inevitable eidolons appear as a mixture between clockwork constructs and idealized humanoid statues.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Lawful neutral.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Biped (<Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs], <Link to="/unchevolution/slam">slam</Link>).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Inevitable eidolons count as both constructs and outsiders for the purpose of effects such as the <Link to="/magic-enh/bane">bane</Link> weapon special ability and the <Link to="/ability/favored_enemy">favored enemy</Link> class feature. They gain a +4 bonus on saving throws against death effects, disease, necromancy effects, paralysis, poison, sleep, and stun.</Pair>
<Pair title="At 4th Level">Inevitable eidolons gain a +4 bonus on saving throws against mind-affecting effects and immunity to nonlethal damage, fatigue, and exhaustion.</Pair>
<Pair title="At 8th Level">Inevitable eidolons gain immunity to death effects, disease, and poison.</Pair>
<Pair title="At 12th Level">Inevitable eidolons gain DR 5/chaotic. They also gain immunity to sleep, as well as the <em>truespeech</em> ability (see the <Link to="/subtype/inevitable">inevitable creature subtype</Link>).</Pair>
<Pair title="At 16th Level">Inevitable eidolons lose the +4 bonus on saving throws against necromancy effects and gain immunity to ability damage, ability drain, energy drain, and necromancy effects.</Pair>
<Pair title="At 20th Level">Inevitable eidolons gain immunity to paralysis, sleep, stun, and any effect that requires a Fortitude save (unless the effect also works on objects).</Pair>
</Ability>
</>};
const _kami = {title: "Kami", jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 18</Link></p>
<h2>Kami</h2>
<p><Link to="/family/kami">Kami</Link> eidolons are spirits of nature bound to an unchained summoner. They seek to protect their wards, but because of their summoner's bond, they have more flexibility choosing their wards than most of their kind.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Any non-evil. Kami eidolons do not have an alignment subtype, instead having the <Link to="/subtype/native">native</Link> subtype.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Biped (<Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs], <Link to="/unchevolution/slam">slam</Link>).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["armor-upgrade","shield-reflect","remedy"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">A kami eidolon gains the <Link to="/unchevolution/resistance">resistance</Link> (fire) evolution and the 4-point <Link to="/unchevolution/weapon_training">weapon training</Link> evolution (proficiency in martial weapons).</Pair>
<Pair title="At 4th Level">A kami eidolon gains acid <em>resistance</em> 10 and cold <em>resistance</em> 10.</Pair>
<Pair title="At 8th Level">A kami eidolon can declare a <em>ward</em> once per day as a <strong className="hl">standard action</strong>. Its <em>ward</em> must be an object, a plant, or a creature with an Intelligence score of 2 or less, and the <em>ward</em> maintains the designation for 1 hour. So long as a kami eidolon is within 60 feet of its <em>ward,</em> it and its <em>ward</em> gain a +2 sacred bonus on saving throws.</Pair>
<Pair title="At 12th Level">A kami eidolon gains the 4-point version of the <Link to="/unchevolution/fast_healing">fast healing</Link> evolution and the <em>merge with ward</em> ability (see the <Link to="/subtype/kami">kami subtype</Link>. A kami eidolon automatically emerges from its <em>ward</em> if they are merged when that object or creature ceases to be the eidolon's <em>ward.</em></Pair>
<Pair title="At 16th Level">Kami eidolons are immune to bleed, mind-affecting, petrification, and polymorph effects.</Pair>
<Pair title="At 20th Level">A kami eidolon increases the <em>fast healing</em> from its <em>fast healing</em> evolution by 2 points whenever it is within 30 feet of its <em>ward;</em> while the kami is merged with its <em>ward,</em> the <em>ward</em> gains the same amount of <em>fast healing.</em></Pair>
</Ability>
</>};
const _kyton = {title: "Kyton", jsx: <><p><strong>Sources</strong> <Link to="/source/curse_of_the_crimson_throne">Curse of the Crimson Throne pg. 431</Link></p>
<h2>Kyton</h2>
<p>Scholars of the exquisiteness of agony and explorers of the limitations of the flesh, <Link to="/family/kyton">kytons</Link> understand the mortal form is a blank canvas aching for transformation. They appear as humanoids, save that they are covered in piercings, draped with chains, and bear grisly body modifications. Kyton eidolons gain access to the <Link to="/unchevolution/tentacle">tentacle</Link> and <Link to="/unchevolution/web">web</Link> evolutions, but kyton eidolon tentacles and webs always appear as animated chains.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Lawful evil.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Biped (<Link to="/unchevolution/improved_natural_armor">improved natural armor</Link>, <Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs]).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["armor-upgrade","stairs-goal","upgrade","armor-downgrade"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Kyton eidolons gain the <Link to="/unchevolution/resistance">resistance</Link> (cold) and skilled (Heal) evolutions. They also gain proficiency with the <Link to="/eq-weapon/spiked_chain">spiked chain</Link>.</Pair>
<Pair title="At 4th Level">A kyton eidolon adds 1 point to its evolution pool.</Pair>
<Pair title="At 8th Level"><p>A kyton eidolon gains an <em>unnerving gaze</em> that manipulates the perceptions of those who look upon it. Unlike typical <Link to="/umr/gaze">gaze</Link> weapons, a kyton eidolon's <em>unnerving gaze</em> can affect only one creature per round when the kyton directs its <em>gaze</em> at the target on its turn as a <strong className="hl">free action</strong>. An <em>unnerving gaze</em> has a range of 30 feet, and can be negated by a successful Will save.</p>
<p>Any creature that fails the save becomes <Link to="/misc/sickened">sickened</Link> by the kyton's grisly modifications for 1 round. A kyton eidolon is immune to the <em>unnerving gazes</em> of other kytons, and the kyton's summoner is immune to its <em>unnerving gaze.</em> This is a mind-affecting fear effect. The save DC is Charisma-based.</p>
</Pair>
<Pair title="At 12th Level">A kyton eidolon gains DR 5/good. The effects of a kyton eidolon's <em>unnerving gaze</em> now persist for 1d3 rounds, and as a <strong className="hl">free action</strong>, a kytons can target up to two creatures per round with its <em>gaze</em> on its turns.</Pair>
<Pair title="At 16th Level">A kyton eidolon loses the <em>resistance</em> (cold) evolution, and gains the <Link to="/unchevolution/immunity">immunity</Link> (cold) evolution in its place. The effects of a kyton eidolon's <em>unnerving gaze</em> now <Link to="/misc/stagger">stagger</Link> the target for 1 round, and as a <strong className="hl">free action</strong>, a kyton eidolon can target up to three creatures per round with its <em>gaze.</em></Pair>
<Pair title="At 20th Level">A kyton eidolon gains <Link to="/umr/regeneration">regeneration</Link> 5 (good weapons, good spells). It is still banished to the Shadow Plane as normal for an eidolon if it takes enough damage.</Pair>
</Ability>
</>};
const _plant = {title: "Plant", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 95</Link></p>
<h2>Plant</h2>
<p>Plant eidolons consist of vegetable matter infused with raw natural spiritual power.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Any. Plant eidolons don't have alignment subtypes.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Cactus (<Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs], <Link to="/unchevolution/sting">sting</Link>), conifer (<Link to="/unchevolution/claws">claws</Link>, limbs [arms], limbs [legs]), fungus (<Link to="/unchevolution/bite">bite</Link>, limbs [arms], limbs [legs]), leaf (limbs [arms], limbs [legs], <Link to="/unchevolution/slam">slam</Link>), seaweed (limbs [arms], slam, <Link to="/unchevolution/swim">swim</Link> [2]).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["stairs-goal","armor-upgrade","magic-swirl"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Plant eidolons gain low-light vision as well as the <Link to="/unchevolution/resistance">resistance</Link> (electricity) and <em>resistance</em> (sonic) evolutions.</Pair>
<Pair title="At 4th Level">Plant eidolons gain constant <Link to="/spell/pass_without_trace">pass without trace</Link> and they can change shape into plants of the size category corresponding to their base form with results similar to <Link to="/spell/tree_shape">tree shape</Link>.</Pair>
<Pair title="At 8th Level">Plant eidolons gain the ability to use <Link to="/spell/speak_with_plants">speak with plants</Link> for 1 minute per Hit Die per day with any plants related to the eidolon's base form. These minutes need not be consecutive.</Pair>
<Pair title="At 12th Level">Plant eidolons gain immunity to paralysis, poison, sleep, and stun.</Pair>
<Pair title="At 16th Level">Plant eidolons gain the ability to use <Link to="/spell/commune_with_nature">commune with nature</Link> once per day and can use their <em>speak with plants</em> ability at will.</Pair>
<Pair title="At 20th Level">Plant eidolons gain a +8 resistance bonus on saving throws against mind-affecting effects. They lose their <em>resistance</em> (electricity) and <em>resistance</em> (sonic) evolutions and instead gain the <Link to="/unchevolution/immunity">immunity</Link> (electricity) and <em>immunity</em> (sonic) evolutions.</Pair>
</Ability>
</>};
const _protean = {title: "Protean", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 33</Link></p>
<h2>Protean</h2>
<p>Serpentine beings of pure chaos, <Link to="/family/protean">proteans</Link> seek to reshape reality. Protean eidolons appreciate creative summoners who often rebuild their forms and make liberal use of the <Link to="/spell/transmogrify">transmogrify</Link> spell. Beyond that, protean eidolons are happy to work with their summoners for any purpose, though they are quick to remind their summoners that while they have a mutually beneficial relationship, they are not servants.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Chaotic neutral.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Serpentine (<Link to="/unchevolution/bite">bite</Link>, <Link to="/unchevolution/grab">grab</Link> [tail slap], <Link to="/unchevolution/tail">tail</Link>, <Link to="/unchevolution/tail_slap">tail slap</Link>).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["armor-upgrade","mailed-fist","stairs-goal"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Protean eidolons gain the <Link to="/unchevolution/resistance">resistance</Link> (acid) evolution as well as the <em>grab</em> evolution, tied to an attack type of the summoner's choice. Whenever the summoner changes the protean eidolon's evolutions, he can also change the attack type for <em>grab.</em></Pair>
<Pair title="At 4th Level">Protean eidolons gain electricity <em>resistance</em> 10 and sonic <em>resistance</em> 10.</Pair>
<Pair title="At 8th Level">Protean eidolons gain the <Link to="/unchevolution/constrict">constrict</Link> evolution.</Pair>
<Pair title="At 12th Level">Protean eidolons gain DR 5/lawful. They also gain the <Link to="/unchevolution/blindsense">blindsense</Link> evolution and the ability to fly without wings with perfect maneuverability, as the <Link to="/unchevolution/flight">flight</Link> evolution with 4 points spent.</Pair>
<Pair title="At 16th Level">Protean eidolons lose the <em>resistance</em> (acid) evolution and instead gain the <Link to="/unchevolution/immunity">immunity</Link> (acid) evolution. They also gain the amorphous anatomy ability (see the <Link to="/subtype/protean">protean creature subtype</Link>).</Pair>
<Pair title="At 20th Level">Protean eidolons gain constant <Link to="/spell/freedom_of_movement">freedom of movement</Link> and the protean version of the change shape (greater polymorph) ability (see the protean creature subtype).</Pair>
</Ability>
</>};
const _psychopomp = {title: "Psychopomp", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 34</Link></p>
<h2>Psychopomp</h2>
<p>Stewards, chroniclers, and guides of all things that die, <Link to="/family/psychopomp">psychopomps</Link> make dispassionate yet loyal eidolons. When they deal with the world of mortals, psychopomp eidolons nearly always wear masks. They do not tolerate summoners who traffic with daemons, undead, and other entities that interfere with the transmigration of souls, but otherwise they are comfortable with most actions on the summoner's part. When the summoner dies, a psychopomp eidolon personally escorts him to the afterlife and serves as an expert witness when it is time for him to be judged.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Neutral.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Biped (<Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs], <Link to="/unchevolution/slam">slam</Link>), quadruped (<Link to="/unchevolution/bite">bite</Link>, limbs [legs, 2]), or serpentine (bite, <Link to="/unchevolution/pull">pull</Link> [bite], <Link to="/unchevolution/reach">reach</Link> [bite], <Link to="/unchevolution/tail">tail</Link>, <Link to="/unchevolution/tail_slap">tail slap</Link>).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["armor-upgrade","stairs-goal","upgrade","magic-swirl"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Psychopomp eidolons gain immunity to death effects, disease, and poison.</Pair>
<Pair title="At 4th Level">Psychopomp eidolons gain cold <Link to="/unchevolution/resistance">resistance</Link> 10 and electricity <em>resistance</em> 10.</Pair>
<Pair title="At 8th Level">Psychopomp eidolons gain the <em>spirit touch</em> ability (see the <Link to="/subtype/psychopomp">psychopomp creature subtype</Link>) and add 1 point to their evolution pools.</Pair>
<Pair title="At 12th Level">Psychopomp eidolons gain DR 5/adamantine. They also gain the <em>spiritsense</em> ability (see the psychopomp creature subtype).</Pair>
<Pair title="At 16th Level">Psychopomp eidolons gain the <Link to="/unchevolution/ability_increase">ability increase</Link> evolution, applied to an ability score of the summoner's choice. They also gain the ability to cast <Link to="/spell/invisibility">invisibility</Link> (self only) as a spell-like ability at will.</Pair>
<Pair title="At 20th Level">Psychopomp eidolons increase their damage reduction to 10/adamantine and gain the <Link to="/unchevolution/immunity">immunity</Link> (cold) and <em>immunity</em> (electricity) evolutions.</Pair>
</Ability>
</>};
const _radiant = {title: "Radiant", jsx: <><p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 25</Link></p>
<h2>Radiant</h2>
<p>Practically glowing with the Positive Energy Plane's potential, radiant eidolons make for passionate, if judgmental, companions that often have avian features.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Neutral.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Biped (<Link to="/unchevolution/bite">bite</Link>, <Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs]) or quadruped (<Link to="/unchevolution/claws">claws</Link>, limbs [legs, 2]).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["armor-upgrade","remedy","mailed-fist","stairs-goal","magic-swirl","upgrade"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Radiant eidolons are immune to death effects and energy drain. They can exist comfortably on the Positive Energy Plane and do not benefit or suffer from the <Link to="/rule/elemental_and_energy_traits">positive-dominant planar trait</Link>. Whenever radiant eidolons are subjected to a magical healing effect, they regain 1 additional hit point per die rolled.</Pair>
<Pair title="At 4th Level">Radiant eidolons' natural attacks can strike incorporeal targets as though they were <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapons. Radiant eidolons glow as <Link to="/spell/light">light</Link> with an effective spell level equal to half their Hit Dice (round down); they can suppress or resume this effect as a <strong className="hl">standard action</strong>.</Pair>
<Pair title="At 8th Level">Radiant eidolons grow feathery wings, gaining the <Link to="/unchevolution/flight">flight</Link> evolution.</Pair>
<Pair title="At 12th Level">Radiant eidolons gain the <Link to="/unchevolution/fast_healing">fast healing</Link> evolution.</Pair>
<Pair title="At 16th Level">Radiant eidolons gain the ability to cast <Link to="/spell/cure_serious_wounds">cure serious wounds</Link> three times per day. When a radiant eidolon's summoner dies or falls unconscious within 60 feet as a result of hit point loss, the eidolon can die as an <strong className="hl">immediate action</strong> to grant the summoner the benefits of <Link to="/spell/breath_of_life">breath of life</Link>. The caster level for both abilities equals the eidolon's Hit Dice.</Pair>
<Pair title="At 20th Level">Radiant eidolons deal an additional 2 points of damage per die rolled against undead creatures when attacking with the <Link to="/unchevolution/energy_attacks">energy attacks</Link> or <Link to="/unchevolution/breath_weapon">breath weapon</Link> evolutions. Whenever radiant eidolons are subjected to a magical healing effect, the effect functions at its full potential, as if enhanced by <Link to="/feat/maximize_spell">Maximize Spell</Link>.</Pair>
</Ability>
</>};
const _shadow = {title: "Shadow", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 11</Link></p>
<h2>Shadow</h2>
<p>Summoned from the dreary shadowscapes of the Shadow Plane, shadow eidolons are grim, colorless mockeries of creatures that inhabit the Material Plane. Shadow eidolons resent being pulled into the unbearable brightness of the Material Plane. Despite this, shadow eidolons serve their summoners with somberness, acknowledging that shadow cannot exist without light.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Any nongood.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Biped (<Link to="/unchevolution/claws">claws</Link>, <Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs]), quadruped (limbs [legs, 2], <Link to="/unchevolution/bite">bite</Link>), or serpentine (bite, <Link to="/unchevolution/improved_natural_armor">improved natural armor</Link>, <Link to="/unchevolution/reach">reach</Link> [bite], <Link to="/unchevolution/tail">tail</Link>, <Link to="/unchevolution/tail_slap">tail slap</Link>).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["armor-upgrade","magic-swirl","upgrade"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Shadow eidolons gain the <Link to="/unchevolution/resistance">resistance</Link> (cold) and <em>resistance</em> (electricity) evolutions. They also gain the ability to cast <Link to="/spell/darkness">darkness</Link> as a spell-like ability three times per day. The caster level for this spell-like ability is equal to the eidolon's Hit Dice.</Pair>
<Pair title="At 4th Level">Shadow eidolons effortlessly blend into the shadows, giving them <Link to="/rule/concealment">concealment</Link> (20% miss chance) in any illumination other than bright light. In <Link to="/rule/dim_light">dim light</Link> or darkness, shadow eidolons have a 50% miss chance instead of the normal 20% miss chance; this doesn't grant the eidolons total concealment. A shadow eidolon can suspend or resume this ability as a <strong className="hl">free action</strong>.</Pair>
<Pair title="At 8th Level">Shadow eidolons gain DR 5/magic and increase the range of their darkvision to 90 feet. In addition, they add 1 point to their evolution pools.</Pair>
<Pair title="At 12th Level">Shadow eidolons lose the ability to cast <em>darkness</em> as a spell-like ability and instead gain the ability to cast <Link to="/spell/deeper_darkness">deeper darkness</Link> as a spell-like ability three times per day. In addition, they gain the <Link to="/umr/see_in_darkness">see in darkness</Link> universal monster ability.</Pair>
<Pair title="At 16th Level">Shadow eidolons' damage reduction increases to DR 10/magic and they gain the <Link to="/unchevolution/spell_resistance">spell resistance</Link> evolution.</Pair>
<Pair title="At 20th Level">Shadow eidolons increase the range of their darkvision to 120 feet and gain the ability to cast <Link to="/spell/shadow_step">shadow step</Link> as a spell-like ability at will. Three times per day, a shadow eidolon can quicken this spell-like ability, functioning as the <Link to="/feat/quicken_spell_like_ability">Quicken Spell-Like Ability</Link> feat.</Pair>
</Ability>
</>};
const _storykin = {title: "Storykin", jsx: <><p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 26</Link></p>
<h2>Storykin</h2>
<p>The storykin are avatars of the harrow deck's cards, brought to life through the power of the <Link to="/rule/harrowed_realm">Harrowed Realm</Link>. Most of the storykin are limited in their autonomy, spending their lives acting out the roles in the stories they originated from. The form and alignment of a storykin eidolon is dependent on the harrow card the eidolon is based on. You can reference an actual <Link to="/eq-misc/harrow_deck">harrow deck</Link> for these eidolons, but you can also simulate the suit and alignment of an eidolon from a harrow deck.</p>
<Block size="simple">
<Row><Cell>Restriction</Cell><Cell>To select a storykin eidolon, the player must possess a Harrow Deck or Deluxe Harrow Deck.</Cell></Row>
<Row><Cell>Special</Cell><Cell>The first time a summoner summons a storykin eidolon, he must select a specific harrow card, typically one that features a creature, such as the Paladin, the Rabbit Prince, or the Tyrant. This choice determines the eidolon's base form, alignment, and overall appearance, as the eidolon resembles the creature from the chosen card. Harrow cards without an obvious creature instead manifest as a generic humanoid creature made of colorful patchwork cloth.<br/><br/>The suit of the chosen harrow card determines the abilities of the storykin eidolon as it evolves. When the summoner gains a level, he can choose a different harrow card and thus a different base form, alignment, and appearance.</Cell></Row>
<Row><Cell>Alignment</Cell><Cell>A storykin eidolon's alignment matches the alignment of the chosen harrow card and still must be within one step of the summoner's alignment.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Bipedal (<Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs], <Link to="/unchevolution/slam">slam</Link>), quadruped (limbs [legs, 2], slam), or serpentine (<Link to="/unchevolution/bite">bite</Link>, <Link to="/unchevolution/grab">grab</Link> [tail slap], <Link to="/unchevolution/tail">tail</Link>, <Link to="/unchevolution/tail_slap">tail slap</Link>).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["armor-upgrade","upgrade","stairs-goal"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">A storykin eidolon gains the <Link to="/unchevolution/resistance">resistance</Link> (sonic) evolution. In addition, storykin eidolons of the suit of hammers and suit of shields gain a +2 bonus on Fortitude saving throws. Storykin eidolons of the suit of books and suit of keys gain a +2 bonus on Reflex saving throws. Storykin eidolons of the suit of crowns and suit of stars gain a +2 bonus on Will saving throws.</Pair>
<Pair title="At 4th Level">A storykin eidolon gains cold <em>resistance</em> 10 and electricity <em>resistance</em> 10.</Pair>
<Pair title="At 8th Level">A storykin eidolon gains the <Link to="/unchevolution/ability_increase">ability increase</Link> evolution, applied to the ability score corresponding to its harrow suit.</Pair>
<Pair title="At 12th Level">A storykin eidolon gains immunity to bleed, poison, and stun. It also gains DR 5/adamantine.</Pair>
<Pair title="At 16th Level">A storykin eidolon loses the <em>resistance</em> (sonic) evolution and instead gains the <Link to="/unchevolution/immunity">immunity</Link> (sonic) evolution. It also gains immunity to mind-affecting effects.</Pair>
<Pair title="At 20th Level">A storykin eidolon gains immunity to all types of <Link to="/rule/ability_damage_drain">ability damage and ability drain</Link> against the ability score corresponding to its harrow suit and immunity to <Link to="/rule/energy_drain">energy drain</Link>. It also gains the <em>ability increase</em> evolution again, applied to the same ability score that was increased at 8th level.</Pair>
</Ability>
</>};
const _twinned = {title: "Twinned", jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 18</Link></p>
<h2>Twinned</h2>
<p>Just like a summoner, a twinned eidolon learns to use weapons and magic. While twinned eidolons are ethically more flexible than most eidolons, they are quite adamant about being treated as equals and not as servants. They demonstrate an eerie consistency with the summoner's manner of thinking, providing similar answers to questions and reacting similarly to startling events. This subtype is restricted to <Link to="/arc-unchained_summoner/twinned_summoner">twinned summoners</Link>.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Any.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Biped (<Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs]).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["stairs-goal","upgrade","magic-swirl","armor-upgrade"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">A twinned eidolon gains the <Link to="/unchevolution/weapon_training">weapon training</Link> evolution. The twinned eidolon also gains the <Link to="/unchevolution/skilled">skilled</Link> (Disguise) evolution. The racial bonus provided by this evolution is doubled when the eidolon is impersonating the twinned summoner.</Pair>
<Pair title="At 4th Level">A twinned eidolon can cast a summoner spell once per day as a spell-like ability. The spell must be one known by the eidolon's summoner and must be at least 1 level lower than the highest-level spell the summoner can cast. The eidolon must have a Charisma score of at least 10 + the spell level. The caster level for this spell-like ability is equal to the eidolon's Hit Dice minus 2. The save DC is 10 + half the eidolon's HD + the eidolon's Charisma modifier.</Pair>
<Pair title="At 8th Level">A twinned eidolon gains the <Link to="/unchevolution/shared_slot">shared slot</Link> evolution.</Pair>
<Pair title="At 12th Level">A twinned eidolon gains DR 5/magic. The eidolon also gains the <Link to="/unchevolution/extra_feat">extra feat</Link> evolution.</Pair>
<Pair title="At 16th Level">A twinned eidolon gains the <em>skilled</em> evolution and the <Link to="/unchevolution/ability_increase">ability increase</Link> evolution, applied to a skill and an ability score of the summoner's choice.</Pair>
<Pair title="At 20th Level">A twinned eidolon gains <Link to="/umr/fast_healing">fast healing</Link> 5.</Pair>
</Ability>
</>};
const _void = {title: "Void", jsx: <><p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 25</Link></p>
<h2>Void</h2>
<p>Like the sharp-angled <Link to="/monster/sceaduinar">sceaduinars</Link> they resemble, void eidolons exult in entropy and resent anything bearing even a hint of life - including their summoners.</p>
<Block size="simple">
<Row><Cell>Alignment</Cell><Cell>Neutral or neutral evil.</Cell></Row>
<Row><Cell>Base Form</Cell><Cell>Biped (<Link to="/unchevolution/bite">bite</Link>, <Link to="/unchevolution/limbs">limbs</Link> [legs], <Link to="/unchevolution/skilled">skilled</Link> [Stealth], <Link to="/unchevolution/wing_buffet">wing buffet</Link>).</Cell></Row></Block>
<Ability id="base-evolutions" icon={["armor-upgrade","broken-shield","mailed-fist","stairs-goal"]}>
<Pair single id="base-evolutions">Base Evolutions</Pair>
<Pair title="At 1st Level">Void eidolons have <Link to="/umr/negative_energy_affinity">negative energy affinity</Link> and are immune to death effects, disease, energy drain, and poison.</Pair>
<Pair title="At 4th Level">Void eidolons gain the <Link to="/unchevolution/resistance">resistance</Link> (cold) evolution. Their natural attacks can strike incorporeal targets as though they were <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapons.</Pair>
<Pair title="At 8th Level">Void eidolons can use their wings to fly, gaining the <Link to="/unchevolution/flight">flight</Link> evolution. When selecting the <Link to="/unchevolution/energy_attacks">energy attacks</Link> evolution, void eidolons can instead choose to deal 1d6 points of negative energy damage on a successful hit; this damage does not heal creatures.</Pair>
<Pair title="At 12th Level">Void eidolons gain the <Link to="/umr/lifesense">lifesense</Link> ability. They also gain the <Link to="/umr/energy_drain">energy drain</Link> ability (1 negative level) with their bite attacks, though they can drain only a total number of levels per day equal to half their Hit Dice (rounded down).</Pair>
<Pair title="At 16th Level">Void eidolons lose the <em>resistance</em> (cold) evolution and instead gain the <Link to="/unchevolution/immunity">immunity</Link> (cold) evolution. They also gain DR 5/adamantine.</Pair>
<Pair title="At 20th Level">Void eidolons can bestow up to 2 negative levels with a successful bite attack, and the number of negative levels they can bestow per day increases by their Constitution modifier. Their damage reduction increases to DR 10/adamantine.</Pair>
</Ability>
</>};
export default {not_found:_not_found,aberrant:_aberrant,aeon:_aeon,agathion:_agathion,ancestor:_ancestor,angel:_angel,archon:_archon,astral:_astral,azata:_azata,daemon:_daemon,deepwater:_deepwater,demon:_demon,devil:_devil,div:_div,elemental:_elemental,genie:_genie,inevitable:_inevitable,kami:_kami,kyton:_kyton,plant:_plant,protean:_protean,psychopomp:_psychopomp,radiant:_radiant,shadow:_shadow,storykin:_storykin,twinned:_twinned,void:_void}