import {IonRippleEffect} from '@ionic/react';
import DisplayTable from '../../components/DisplayTable';
import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import {Block,Row,Cell} from '../../components/Block';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
import AffInfo from '../../components/AfflictionInfo';
const _unchained_eidolon_subtypes = {hasJL:true,title: "Unchained Eidolon Subtypes", topLink: ["Unchained Summoner","class/unchained_summoner"], jsx: <div className="compilation"><div className="jumpList" id="ability-unchained_eidolon_subtypes-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-aberrant">Aberrant</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-aeon">Aeon</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-agathion">Agathion</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-ancestor">Ancestor</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-angel">Angel</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-archon">Archon</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-astral">Astral</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-azata">Azata</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-daemon">Daemon</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-deepwater">Deepwater</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-demon">Demon</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-devil">Devil</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-div">Div</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-elemental">Elemental</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-genie">Genie</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-inevitable">Inevitable</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-kami">Kami</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-kyton">Kyton</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-plant">Plant</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-protean">Protean</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-psychopomp">Psychopomp</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-radiant">Radiant</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-shadow">Shadow</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-storykin">Storykin</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-twinned">Twinned</InnerLink></li><li><InnerLink toTop to="ability-unchained_eidolon_subtypes-void">Void</InnerLink></li></ul></div><h2 id="ability-unchained_eidolon_subtypes-subtypes">Subtypes</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 29</Link><br/>The first time a summoner calls his <Link to="/sidekick/unchained_eidolon">eidolon</Link>, he must decide on its subtype. The eidolon's subtype determines a number of its base statistics and abilities, as well as its overall look and theme. The subtype also determines what sort of <Link to="/ability/unchained_evolutions">evolutions</Link> the summoner can select for his eidolon using the evolution pool. Once the choice of subtype is made, it cannot be changed.</p>
<p>As a summoner gains levels, his eidolon gains specific evolutions based on its subtype. Each subtype entry below includes the following information.</p>
<p><strong className="hl">Name:</strong> This is the name of the eidolon's subtype. The eidolon gains this as a subtype, but unless otherwise noted, it does not gain any of the features, abilities, or weaknesses of that subtype.</p>
<p><strong className="hl">Description:</strong> This gives a basic overview of eidolons of this subtype, including general guidelines on appearance and personality.</p>
<p><strong className="hl">Alignment:</strong> The eidolon is a creature of this alignment. If its alignment is chaotic, evil, lawful, or good, it gains that subtype.</p>
<p><strong className="hl">Base Form:</strong> Eidolons of some subtypes are restricted in their choice of base form. Restrictions are spelled out here. The evolutions listed here are gained automatically, and do not cost points from the eidolon's evolution pool.</p>
<p><strong className="hl">Base Evolutions:</strong> This describes the base evolutions possessed by all eidolons of this subtype. Following the entry is a list of evolutions gained as the summoner gains levels; these evolutions are gained automatically, and do not cost points from the eidolon's evolution pool. In some cases, eidolons of certain subtypes will gain abilities that are not evolutions. Unless otherwise noted, such abilities function as described in the <Link to="/main/umr">Universal Monster Rules</Link>.</p>
<h4 id="ability-unchained_eidolon_subtypes-eidolons-and-alignment">Eidolons and Alignment</h4>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 35</Link><br/>Generally, the summoner controls the actions of his eidolon, even during combat, either through verbal commands or through the link ability, but this does not mean that the eidolon is a puppet that follows every command without question. Eidolons have been known to refuse actions that are against their ethoses or alignments (subject to the GM's discretion) and are quick to chide the summoner about such requests. In addition, should the action of the summoner cause a shift in alignment such that the summoner's alignment is more than one step away from the eidolon's, the eidolon refuses the call of the summoner (although the summoner can still use his summon monster class feature). If the summoner manages to restore his alignment, the eidolon returns to his service.</p>
<h2 id="ability-unchained_eidolon_subtypes-aberrant" data-hash-target><Link to="/eidolon/aberrant">Aberrant</Link></h2>
<p>Alien entities from the farthest stars, the lightless depths of the Darklands, the sea itself, or even a lunatic's nightmares have long intrigued summoners who become obsessed with the monstrous form. While most summoners call upon outsiders from the Great Beyond, some discover the secret to summoning alien entities from strange corners of the Material Plane. These summoned minions are known as aberrant eidolons. Aberrant eidolons share many abilities and physical features with the nonoutsider aberrations that dwell in forgotten or nameless reaches of reality, but these malformed entities are still outsiders like any other eidolon for the purposes of determining which spells affect them. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-1" id="ability-unchained_eidolon_subtypes-fake-fn-1" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-1-target">1</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-aeon" data-hash-target><Link to="/eidolon/aeon">Aeon</Link></h2>
<p>Created to monitor a specific duality, an aeon eidolon often proves frustratingly headstrong in enforcing its own interpretation of balance. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-2" id="ability-unchained_eidolon_subtypes-fake-fn-2" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-2-target">2</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-agathion" data-hash-target><Link to="/eidolon/agathion">Agathion</Link></h2>
<p>Patient and enlightened liaisons of the good-aligned Outer Planes, <Link to="/family/agathion">agathion</Link> eidolons seek to vanquish evil and protect that which is good. Agathion eidolons always have aspects of a single animal or creature, rather than a hodgepodge of several. Though they have patience for summoners with unorthodox methods and even those who stray from the path of good, they will not brook their powers being used for evil ends. An agathion eidolon seeks to bring its summoner closer to its own enlightenment. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-3" id="ability-unchained_eidolon_subtypes-fake-fn-3" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-3-target">3</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-ancestor" data-hash-target><Link to="/eidolon/ancestor">Ancestor</Link></h2>
<p>Whether created by bonding with the soul of a petitioner that was the summoner's ancestor in life or calling upon the impressions of such a soul left behind on the Ethereal Plane or the Akashic Record, ancestor eidolons are outsiders cast in the mold of mortals, and exhibit extraordinary skill and talent. They usually appear as idealized versions of the bodies they possessed while still alive, but distinctive and proud. Ancestor eidolons lend whatever aid they can to their summoner, who typically has some form of familial connection with the eidolon, be it by blood, honor, or devotion. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-4" id="ability-unchained_eidolon_subtypes-fake-fn-4" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-4-target">4</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-angel" data-hash-target><Link to="/eidolon/angel">Angel</Link></h2>
<p>Hailing from the higher planes, <Link to="/family/angel">angel</Link> eidolons are creatures of exquisite beauty. They usually appear in idealized humanoid forms, with smooth skin, shining hair, and bright eyes. Angel eidolons are impeccably honorable, trustworthy, and diplomatic, but they do not shy away from confrontation when facing off against evil and its minions. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-5" id="ability-unchained_eidolon_subtypes-fake-fn-5" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-5-target">5</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-archon" data-hash-target><Link to="/eidolon/archon">Archon</Link></h2>
<p>Summoned from heaven, <Link to="/family/archon">archon</Link> eidolons are the embodiments of righteousness. They often take on powerful, graceful forms, rippling with muscles but refined in their movements. Archon eidolons are totally dedicated to the cause of good, and have little patience for those who violate their oaths and ideals - including the summoner who called them. Archons will do whatever it takes to stop the advance of evil and protect the innocent. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-5.2" id="ability-unchained_eidolon_subtypes-fake-fn-5.2" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-5-target">5</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-astral" data-hash-target><Link to="/eidolon/astral">Astral</Link></h2>
<p>While some resemble ouroboroses, most astral eidolons are spun from raw thought or the husks of Astral travelers whose silver cords broke. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-2.2" id="ability-unchained_eidolon_subtypes-fake-fn-2.2" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-2-target">2</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-azata" data-hash-target><Link to="/eidolon/azata">Azata</Link></h2>
<p>Embodiments of the untamable beauty and noble passion of Elysium, <Link to="/family/azata">azata</Link> eidolons have wild and beautiful features. They often take graceful forms reminiscent of elves or fey, but they occasionally appear like lillends, with serpentine tails. Azata eidolons are flighty and independent, and they often have their own ideas about how to defeat evil or have a good time. Thus, an azata eidolon is likely to balk if its summoner commands it to perform offensive or nefarious actions. On the other hand, an azata eidolon in sync with its summoner is a passionate and devoted companion. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-5.3" id="ability-unchained_eidolon_subtypes-fake-fn-5.3" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-5-target">5</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-daemon" data-hash-target><Link to="/eidolon/daemon">Daemon</Link></h2>
<p>The agents of horrible deaths, <Link to="/family/daemon">daemon</Link> eidolons desire the utter annihilation of all things. Their forms vary wildly depending on which type of death they embody, and daemon eidolons sometimes represent a more obscure kind of death than the most famous daemons. Daemon eidolons wish to sow death and misery through a variety of means. Most are capable of seeing the big picture, and will obediently follow even a neutral summoner. Ending lives is a typical part of an adventurer's career, so following along with a summoner gives a daemon eidolon many opportunities to gather mortal soul energy for its own dark and inscrutable purposes. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-6" id="ability-unchained_eidolon_subtypes-fake-fn-6" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-6-target">6</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-deepwater" data-hash-target><Link to="/eidolon/deepwater">Deepwater</Link></h2>
<p>The vast, lightless reaches of the sea are home to creatures of unimaginable power with connections to dangerous planes. A few rare summoners attempt to conjure forth eidolons from these cold, alien depths, drawing forth utterly inhuman allies with squirming tentacles and gnashing beaks. Although these eidolons may superficially resemble primeval beasts such as <Link to="/monster/aboleth">aboleths</Link>, <Link to="/monster/kraken">krakens</Link>, or monstrous squids or eels - if they resemble any previously encountered deep-sea life-form at all - they are outsiders like any other eidolon for the purposes of spells and effects that affect them. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-7" id="ability-unchained_eidolon_subtypes-fake-fn-7" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-7-target">7</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-demon" data-hash-target><Link to="/eidolon/demon">Demon</Link></h2>
<p>Raw destruction given material substance, <Link to="/family/demon">demon</Link> eidolons form out of the Abyss's stew of soul energy, leading some scholars to speculate that the summoner's arts are related to the magical tampering that gave rise to the first demons. Demon eidolons revel in causing destruction and inflicting suffering, and they will do so for their summoners without question, taking pleasure in whatever havoc they can create. For a demon eidolon, the means justify the ends. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-6.2" id="ability-unchained_eidolon_subtypes-fake-fn-6.2" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-6-target">6</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-devil" data-hash-target><Link to="/eidolon/devil">Devil</Link></h2>
<p>Corruptors, tempters, and despoilers, <Link to="/family/devil">devil</Link> eidolons often serve their summoners obediently and efficiently, all in a long-term attempt to damn the summoner's soul to the deepest depths of Hell. While some types of devils have truly unusual forms, devil eidolons have found that the more traditional bipedal form allows them to build up a strong rapport with their summoners - and consequently to corrupt them - more easily than if they possessed a more monstrous appearance. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-8" id="ability-unchained_eidolon_subtypes-fake-fn-8" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-8-target">8</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-div" data-hash-target><Link to="/eidolon/div">Div</Link></h2>
<p>Formed of hatred and spite, <Link to="/family/div">div</Link> eidolons seek to despoil and ruin all things beautiful and joyous. Div eidolons particularly resent having mortal masters, and seek to doom their summoners to existences full of suffering and loss. Each div eidolon has a unique compulsion it must follow - usually something similar to the <Link to="/monster/doru">doru's</Link> obsession with secrets - that leads it to bargain its loyalty for something the summoner provides. The div's summoner uses his eidolon's compulsion to entrap and control the eidolon. Still, div eidolons never fully give in, and continue to plot ways they might corrupt that which their masters hold dearest. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-8.2" id="ability-unchained_eidolon_subtypes-fake-fn-8.2" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-8-target">8</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-elemental" data-hash-target><Link to="/eidolon/elemental">Elemental</Link></h2>
<p>Pulled in from one of the four elemental planes, these eidolons are linked to one of the four elements: air, earth, fire, or water. Generally, an <Link to="/family/elemental">elemental</Link> eidolon appears as a creature made entirely of one element, but there is some variation. Elemental eidolons are decidedly moderate in their views and actions. They tend to avoid the conflicts of others when they can and seek to maintain balance. The only exception is when facing off against emissaries of their opposing elements, which they hate utterly. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-9" id="ability-unchained_eidolon_subtypes-fake-fn-9" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-9-target">9</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-genie" data-hash-target><Link to="/eidolon/genie">Genie</Link></h2>
<p>Genies are elemental beings that take humanoid forms, and <Link to="/family/genie">genie</Link> eidolons often vacillate between humble kowtowing and biting observations about the summoner's foibles that make the eidolon look superior. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-10" id="ability-unchained_eidolon_subtypes-fake-fn-10" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-10-target">10</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-inevitable" data-hash-target><Link to="/eidolon/inevitable">Inevitable</Link></h2>
<p>Implacable and ceaseless in their fight against chaos and those who break natural laws, <Link to="/family/inevitable">inevitables</Link> make loyal, if literal-minded, companions for lawful summoners. Summoners of inevitables generally get along well with axiomites, who share their understanding of the process of forging and modifying an inevitable. Inevitable eidolons appear as a mixture between clockwork constructs and idealized humanoid statues. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-9.2" id="ability-unchained_eidolon_subtypes-fake-fn-9.2" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-9-target">9</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-kami" data-hash-target><Link to="/eidolon/kami">Kami</Link></h2>
<p><Link to="/family/kami">Kami</Link> eidolons are spirits of nature bound to an unchained summoner. They seek to protect their wards, but because of their summoner's bond, they have more flexibility choosing their wards than most of their kind. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-11" id="ability-unchained_eidolon_subtypes-fake-fn-11" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-11-target">11</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-kyton" data-hash-target><Link to="/eidolon/kyton">Kyton</Link></h2>
<p>Scholars of the exquisiteness of agony and explorers of the limitations of the flesh, <Link to="/family/kyton">kytons</Link> understand the mortal form is a blank canvas aching for transformation. They appear as humanoids, save that they are covered in piercings, draped with chains, and bear grisly body modifications. Kyton eidolons gain access to the <Link to="/unchevolution/tentacle">tentacle</Link> and <Link to="/unchevolution/web">web</Link> evolutions, but kyton eidolon tentacles and webs always appear as animated chains. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-12" id="ability-unchained_eidolon_subtypes-fake-fn-12" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-12-target">12</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-plant" data-hash-target><Link to="/eidolon/plant">Plant</Link></h2>
<p>Plant eidolons consist of vegetable matter infused with raw natural spiritual power. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-13" id="ability-unchained_eidolon_subtypes-fake-fn-13" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-13-target">13</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-protean" data-hash-target><Link to="/eidolon/protean">Protean</Link></h2>
<p>Serpentine beings of pure chaos, <Link to="/family/protean">proteans</Link> seek to reshape reality. Protean eidolons appreciate creative summoners who often rebuild their forms and make liberal use of the <Link to="/spell/transmogrify">transmogrify</Link> spell. Beyond that, protean eidolons are happy to work with their summoners for any purpose, though they are quick to remind their summoners that while they have a mutually beneficial relationship, they are not servants. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-9.3" id="ability-unchained_eidolon_subtypes-fake-fn-9.3" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-9-target">9</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-psychopomp" data-hash-target><Link to="/eidolon/psychopomp">Psychopomp</Link></h2>
<p>Stewards, chroniclers, and guides of all things that die, <Link to="/family/psychopomp">psychopomps</Link> make dispassionate yet loyal eidolons. When they deal with the world of mortals, psychopomp eidolons nearly always wear masks. They do not tolerate summoners who traffic with daemons, undead, and other entities that interfere with the transmigration of souls, but otherwise they are comfortable with most actions on the summoner's part. When the summoner dies, a psychopomp eidolon personally escorts him to the afterlife and serves as an expert witness when it is time for him to be judged. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-14" id="ability-unchained_eidolon_subtypes-fake-fn-14" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-14-target">14</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-radiant" data-hash-target><Link to="/eidolon/radiant">Radiant</Link></h2>
<p>Practically glowing with the Positive Energy Plane's potential, radiant eidolons make for passionate, if judgmental, companions that often have avian features. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-15" id="ability-unchained_eidolon_subtypes-fake-fn-15" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-15-target">15</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-shadow" data-hash-target><Link to="/eidolon/shadow">Shadow</Link></h2>
<p>Summoned from the dreary shadowscapes of the Shadow Plane, shadow eidolons are grim, colorless mockeries of creatures that inhabit the Material Plane. Shadow eidolons resent being pulled into the unbearable brightness of the Material Plane. Despite this, shadow eidolons serve their summoners with somberness, acknowledging that shadow cannot exist without light. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-16" id="ability-unchained_eidolon_subtypes-fake-fn-16" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-16-target">16</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-storykin" data-hash-target><Link to="/eidolon/storykin">Storykin</Link></h2>
<p>The storykin are avatars of the harrow deck's cards, brought to life through the power of the <Link to="/rule/harrowed_realm">Harrowed Realm</Link>. Most of the storykin are limited in their autonomy, spending their lives acting out the roles in the stories they originated from. The form and alignment of a storykin eidolon is dependent on the harrow card the eidolon is based on. You can reference an actual <Link to="/eq-misc/harrow_deck">harrow deck</Link> for these eidolons, but you can also simulate the suit and alignment of an eidolon from a harrow deck. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-17" id="ability-unchained_eidolon_subtypes-fake-fn-17" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-17-target">17</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-twinned" data-hash-target><Link to="/eidolon/twinned">Twinned</Link></h2>
<p>Just like a summoner, a twinned eidolon learns to use weapons and magic. While twinned eidolons are ethically more flexible than most eidolons, they are quite adamant about being treated as equals and not as servants. They demonstrate an eerie consistency with the summoner's manner of thinking, providing similar answers to questions and reacting similarly to startling events. This subtype is restricted to <Link to="/arc-unchained_summoner/twinned_summoner">twinned summoners</Link>. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-18" id="ability-unchained_eidolon_subtypes-fake-fn-18" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-18-target">18</InnerLink></sup></p>
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
<h2 id="ability-unchained_eidolon_subtypes-void" data-hash-target><Link to="/eidolon/void">Void</Link></h2>
<p>Like the sharp-angled <Link to="/monster/sceaduinar">sceaduinars</Link> they resemble, void eidolons exult in entropy and resent anything bearing even a hint of life - including their summoners. <sup><InnerLink showBacklink="backlink-ability-unchained_eidolon_subtypes-fake-fn-15.2" id="ability-unchained_eidolon_subtypes-fake-fn-15.2" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-15-target">15</InnerLink></sup></p>
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
<section data-footnotes><h3 id="ability-unchained_eidolon_subtypes-label">Footnotes</h3><ol>
<li id="ability-unchained_eidolon_subtypes-fake-fn-1-target"><p><Link to="/source/horror_realms">Horror Realms</Link> pg. 18 <InnerLink aria-label="Back to reference 1" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-1" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-1">↩</InnerLink></p></li>
<li id="ability-unchained_eidolon_subtypes-fake-fn-2-target"><p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook</Link> pg. 24 <InnerLink aria-label="Back to reference 2" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-2" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-2.2" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-2.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-unchained_eidolon_subtypes-fake-fn-3-target"><p><Link to="/source/pathfinder_unchained">Pathfinder Unchained</Link> pg. 29 <InnerLink aria-label="Back to reference 3" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-3" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-3">↩</InnerLink></p></li>
<li id="ability-unchained_eidolon_subtypes-fake-fn-4-target"><p><Link to="/source/blood_of_the_beast">Blood of the Beast</Link> pg. 31 <InnerLink aria-label="Back to reference 4" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-4" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-4">↩</InnerLink></p></li>
<li id="ability-unchained_eidolon_subtypes-fake-fn-5-target"><p>Pathfinder Unchained pg. 30 <InnerLink aria-label="Back to reference 5" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-5" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-5.2" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-5.3" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-5.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-unchained_eidolon_subtypes-fake-fn-6-target"><p>Pathfinder Unchained pg. 31 <InnerLink aria-label="Back to reference 6" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-6" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-6.2" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-6.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-unchained_eidolon_subtypes-fake-fn-7-target"><p><Link to="/source/blood_of_the_sea">Blood of the Sea</Link> pg. 23 <InnerLink aria-label="Back to reference 7" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-7" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-7">↩</InnerLink></p></li>
<li id="ability-unchained_eidolon_subtypes-fake-fn-8-target"><p>Pathfinder Unchained pg. 32 <InnerLink aria-label="Back to reference 8" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-8" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-8.2" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-8.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-unchained_eidolon_subtypes-fake-fn-9-target"><p>Pathfinder Unchained pg. 33 <InnerLink aria-label="Back to reference 9" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-9" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-9">↩</InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-9.2" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-9.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-9.3" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-9.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-unchained_eidolon_subtypes-fake-fn-10-target"><p><Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link> pg. 27 <InnerLink aria-label="Back to reference 10" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-10" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-10">↩</InnerLink></p></li>
<li id="ability-unchained_eidolon_subtypes-fake-fn-11-target"><p><Link to="/source/wilderness_origins">Wilderness Origins</Link> pg. 18 <InnerLink aria-label="Back to reference 11" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-11" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-11">↩</InnerLink></p></li>
<li id="ability-unchained_eidolon_subtypes-fake-fn-12-target"><p><Link to="/source/curse_of_the_crimson_throne">Curse of the Crimson Throne</Link> pg. 431 <InnerLink aria-label="Back to reference 12" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-12" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-12">↩</InnerLink></p></li>
<li id="ability-unchained_eidolon_subtypes-fake-fn-13-target"><p><Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link> pg. 95 <InnerLink aria-label="Back to reference 13" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-13" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-13">↩</InnerLink></p></li>
<li id="ability-unchained_eidolon_subtypes-fake-fn-14-target"><p>Pathfinder Unchained pg. 34 <InnerLink aria-label="Back to reference 14" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-14" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-14">↩</InnerLink></p></li>
<li id="ability-unchained_eidolon_subtypes-fake-fn-15-target"><p>Plane-Hopper's Handbook pg. 25 <InnerLink aria-label="Back to reference 15" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-15" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-15">↩</InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-15.2" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-15.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-unchained_eidolon_subtypes-fake-fn-16-target"><p><Link to="/source/blood_of_shadows">Blood of Shadows</Link> pg. 11 <InnerLink aria-label="Back to reference 16" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-16" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-16">↩</InnerLink></p></li>
<li id="ability-unchained_eidolon_subtypes-fake-fn-17-target"><p>Plane-Hopper's Handbook pg. 26 <InnerLink aria-label="Back to reference 17" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-17" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-17">↩</InnerLink></p></li>
<li id="ability-unchained_eidolon_subtypes-fake-fn-18-target"><p><Link to="/source/legacy_of_the_first_world">Legacy of the First World</Link> pg. 18 <InnerLink aria-label="Back to reference 18" id="backlink-ability-unchained_eidolon_subtypes-fake-fn-18" data-hash-target to="ability-unchained_eidolon_subtypes-fake-fn-18">↩</InnerLink></p></li>
</ol></section></div>};
const _investigator_talents = {hasJL:true,title: "Investigator Talents", topLink: ["Investigator","class/investigator"], jsx: <div className="compilation"><div className="jumpList" id="ability-investigator_talents-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-investigator_talents-studied-strike-talents">Studied Strike Talents</InnerLink></li><li><InnerLink toTop to="ability-investigator_talents-other-studied-strike-talents">Other Studied Strike Talents</InnerLink></li><li><InnerLink toTop to="ability-investigator_talents-inspiration-talents">Inspiration Talents</InnerLink></li><li><InnerLink toTop to="ability-investigator_talents-alchemist-and-poison-talents">Alchemist and Poison Talents</InnerLink></li><li><InnerLink toTop to="ability-investigator_talents-other-talents">Other Talents</InnerLink></li></ul></div><h2 id="ability-investigator_talents-talents">Talents</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link><br/>At 3rd level and every 2 levels thereafter, an investigator gains an investigator talent. Except where otherwise noted, each investigator talent can only be selected once.</p>
<h3 id="ability-investigator_talents-studied-strike-talents" data-hash-target>Studied Strike Talents</h3>
<p>These talents add effects to an investigator's studied combat or studied strike. Only one of these talents can be applied to an individual attack, but the decision can be made when the damage is dealt.</p>
<Ability id="invtalentblindingstrike-blinding-strike-ex-fn1" icon={["armor-downgrade"]}>
<Pair single id="invtalentblindingstrike-blinding-strike-ex-fn1"><Link to="/invtalent/blinding_strike">⮞</Link> Blinding Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1" id="ability-investigator_talents-fake-fn-1" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">17th-level investigator</Pair>
<Pair title="Ability">When the investigator deals damage with <em>studied strike,</em> the opponent must succeed at a Fortitude saving throw or be permanently <Link to="/misc/blinded">blinded</Link>. A successful saving throw reduces this to <Link to="/misc/dazzled">dazzled</Link> for 1d4 rounds. The DC for this Fortitude save is equal to 10 + 1/2 the investigator's level + his Intelligence modifier.</Pair>
<Pair title="Special">This talent has no effect on creatures that do not rely on eyes for sight or creatures with more than two eyes (although multiple critical hits might cause blindness, at the GM's discretion). Blindness can be cured by <Link to="/spell/heal">heal</Link>, <Link to="/umr/regeneration">regeneration</Link>, <Link to="/spell/remove_blindness">remove blindness</Link>, or similar abilities.</Pair>
</Ability>
<Ability id="invtalentconfusingstrike-confusing-strike-ex-fn1-2" icon={["armor-downgrade"]}>
<Pair single id="invtalentconfusingstrike-confusing-strike-ex-fn1-2"><Link to="/invtalent/confusing_strike">⮞</Link> Confusing Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.2" id="ability-investigator_talents-fake-fn-1.2" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">19th-level investigator</Pair>
<Pair title="Ability">When the investigator deals damage with <em>studied strike,</em> the opponent must succeed at a Fortitude saving throw or become <Link to="/misc/confused">confused</Link> for 1d4+1 rounds. A successful saving throw reduces the duration to 1 round. The DC for this Fortitude save is equal to 10 + 1/2 the investigator's level + his Intelligence modifier.</Pair>
<Pair title="Special">Constructs, mindless creatures, oozes, plants, undead, incorporeal creatures, and creatures immune to critical hits are not affected by this ability.</Pair>
</Ability>
<Ability id="invtalentdeafeningstrike-deafening-strike-ex-fn1-3" icon={["armor-downgrade"]}>
<Pair single id="invtalentdeafeningstrike-deafening-strike-ex-fn1-3"><Link to="/invtalent/deafening_strike">⮞</Link> Deafening Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.3" id="ability-investigator_talents-fake-fn-1.3" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">15th-level investigator</Pair>
<Pair title="Ability">When an investigator deals damage with <em>studied strike,</em> the opponent must succeed at a Fortitude saving throw or be permanently <Link to="/misc/deafened">deafened</Link>. A successful Fortitude saving throw reduces the duration of this effect to 1 round. The DC for this save is equal to 10 + 1/2 the investigator's level + his Intelligence modifier.</Pair>
<Pair title="Special">This talent has no effect on deaf creatures. Deafness can be cured by <Link to="/spell/heal">heal</Link>, <Link to="/umr/regeneration">regeneration</Link>, <Link to="/spell/remove_blindness">remove blindness</Link>, or similar effects.</Pair>
</Ability>
<Ability id="invtalentdominoeffect-domino-effect-ex-fn2" icon={["upgrade"]}>
<Pair single id="invtalentdominoeffect-domino-effect-ex-fn2" flavor={<>When the investigator uses <em>studied strike,</em> he uses his opponents against each other and sets himself up for his next move.</>}><Link to="/invtalent/domino_effect">⮞</Link> Domino Effect (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-2" id="ability-investigator_talents-fake-fn-2" data-hash-target to="ability-investigator_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level investigator</Pair>
<Pair title="Free Action">Whenever he successfully deals damage to an opponent with <em>studied strike,</em> the investigator can apply the effects of <em>studied combat</em> to an opponent adjacent to the first.</Pair>
</Ability>
<Ability id="invtalenticonclasticstrike-iconclastic-strike-ex-fn3" icon={["mailed-fist"]}>
<Pair single id="invtalenticonclasticstrike-iconclastic-strike-ex-fn3"><Link to="/invtalent/iconclastic_strike">⮞</Link> Iconclastic Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-3" id="ability-investigator_talents-fake-fn-3" data-hash-target to="ability-investigator_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">13th-level investigator</Pair>
<Pair title="Free Action">When the investigator deals damage with a <em>studied strike,</em> she can perform a <Link to="/rule/sunder">sunder</Link> combat maneuver against the creature the <em>studied strike</em> damaged.</Pair>
<Pair title="Special">If the object targeted is a holy symbol or divine scroll, this sunder does not provoke attacks of opportunity and deals maximum damage on a successful check.</Pair>
</Ability>
<Ability id="invtalentnumericalstrike-numerical-strike-ex-fn4" icon={["rolling-dices"]}>
<Pair single id="invtalentnumericalstrike-numerical-strike-ex-fn4"><Link to="/invtalent/numerical_strike">⮞</Link> Numerical Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-4" id="ability-investigator_talents-fake-fn-4" data-hash-target to="ability-investigator_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level investigator</Pair>
<Pair title="Ability">Once per day when the investigator has confirmed a critical hit with a <em>studied strike,</em> he can deal average damage instead of rolling damage as normal. This includes the damage dealt by the successful attack as well as the additional damage from the <em>studied strike.</em></Pair>
<Pair title="Special">He can expend a use of <em>inspiration</em> to use this ability a second time per day. Using this ability doesn't require an action.</Pair>
</Ability>
<Ability id="invtalentgreaternumericalstrike-greater-numerical-strike-ex-fn4-2" icon={["upgrade"]}>
<Pair single id="invtalentgreaternumericalstrike-greater-numerical-strike-ex-fn4-2"><Link to="/invtalent/greater_numerical_strike">⮞</Link> Greater Numerical Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-4.2" id="ability-investigator_talents-fake-fn-4.2" data-hash-target to="ability-investigator_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/invtalent/numerical_strike">Numerical strike</Link>, 13th-level investigator</Pair>
<Pair title="Ability">Once per day, when the investigator has confirmed a critical hit with a <em>studied strike,</em> he can deal the strike's maximum damage instead of rolling damage as normal. This includes the damage dealt by the successful attack as well as the additional damage from the <em>studied strike.</em></Pair>
<Pair title="Special">He can expend a use of <em>inspiration</em> to use this ability a second time per day. Using this ability doesn't require an action.</Pair>
</Ability>
<Ability id="invtalentmasterfulnumericalstrike-masterful-numerical-strike-ex-fn4-3" icon={["upgrade"]}>
<Pair single id="invtalentmasterfulnumericalstrike-masterful-numerical-strike-ex-fn4-3"><Link to="/invtalent/masterful_numerical_strike">⮞</Link> Masterful Numerical Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-4.3" id="ability-investigator_talents-fake-fn-4.3" data-hash-target to="ability-investigator_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/invtalent/numerical_strike">Numerical strike</Link>, <Link to="/invtalent/greater_numerical_strike">greater numerical strike</Link>, 17th-level investigator</Pair>
<Pair title="Ability">The investigator can use both <em>numerical strike</em> and <em>greater numerical strike</em> three times per day. The investigator doesn't need to expend uses of <em>inspiration</em> to use either ability, but he can never use either more than three times per day each.</Pair>
</Ability>
<Ability id="invtalentprolongedstudy-prolonged-study-ex-fn2-2" icon={["upgrade"]}>
<Pair single id="invtalentprolongedstudy-prolonged-study-ex-fn2-2"><Link to="/invtalent/prolonged_study">⮞</Link> Prolonged Study (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-2.2" id="ability-investigator_talents-fake-fn-2.2" data-hash-target to="ability-investigator_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">13th-level investigator</Pair>
<Pair title="Ability">The investigator can study his opponents for long periods of time. The effects of his <em>studied combat</em> ability last for a number of rounds equal to twice his Intelligence modifier (minimum 2) or until he deals damage with a <em>studied strike,</em> whichever comes first.</Pair>
</Ability>
<Ability id="invtalentrepositioningstrike-repositioning-strike-ex-fn1-4" icon={["mailed-fist"]}>
<Pair single id="invtalentrepositioningstrike-repositioning-strike-ex-fn1-4"><Link to="/invtalent/repositioning_strike">⮞</Link> Repositioning Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.4" id="ability-investigator_talents-fake-fn-1.4" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">13th-level investigator</Pair>
<Pair title="Free Action">When the investigator deals damage with <em>studied strike,</em> he can perform a <Link to="/rule/reposition">reposition</Link> combat maneuver against the creature damaged by <em>studied strike.</em> This reposition does not provoke attacks of opportunity.</Pair>
</Ability>
<Ability id="invtalentsappingoffensive-sapping-offensive-ex-fn1-5" icon={["armor-downgrade"]}>
<Pair single id="invtalentsappingoffensive-sapping-offensive-ex-fn1-5"><Link to="/invtalent/sapping_offensive">⮞</Link> Sapping Offensive (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.5" id="ability-investigator_talents-fake-fn-1.5" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level investigator</Pair>
<Pair title="Ability">When the investigator damages a studied target, that creature cannot make attacks of opportunity for 1 round.</Pair>
</Ability>
<Ability id="invtalentsickeningoffensive-sickening-offensive-ex-fn1-6" icon={["armor-downgrade"]}>
<Pair single id="invtalentsickeningoffensive-sickening-offensive-ex-fn1-6"><Link to="/invtalent/sickening_offensive">⮞</Link> Sickening Offensive (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.6" id="ability-investigator_talents-fake-fn-1.6" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level investigator</Pair>
<Pair title="Ability">When the investigator damages a studied target, that creature is also <Link to="/misc/sickened">sickened</Link> for 1 round.</Pair>
</Ability>
<Ability id="invtalentsilencingstrike-silencing-strike-ex-fn3-2" icon={["armor-downgrade"]}>
<Pair single id="invtalentsilencingstrike-silencing-strike-ex-fn3-2"><Link to="/invtalent/silencing_strike">⮞</Link> Silencing Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-3.2" id="ability-investigator_talents-fake-fn-3.2" data-hash-target to="ability-investigator_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">15th-level investigator</Pair>
<Pair title="Ability">When the investigator deals damage with a <em>studied strike,</em> the target must succeed at a Fortitude save (DC = 10 + 1/2 the investigator's class level + her Intelligence modifier) or be unable to speak (even for verbal components) for 1d4+1 rounds. A successful save reduces the duration to 1 round.</Pair>
<Pair title="Special">This talent has no effect on creatures immune to critical hits.</Pair>
</Ability>
<Ability id="invtalentslowingstrike-slowing-strike-ex-fn2-3" icon={["armor-downgrade"]}>
<Pair single id="invtalentslowingstrike-slowing-strike-ex-fn2-3"><Link to="/invtalent/slowing_strike">⮞</Link> Slowing Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-2.3" id="ability-investigator_talents-fake-fn-2.3" data-hash-target to="ability-investigator_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level investigator</Pair>
<Pair title="Ability">When the investigator deals damage with <em>studied strike,</em> the opponent must succeed at a Fortitude save (DC = 10 + 1/2 the investigator's class level + his Intelligence modifier) or be slowed by the crippling blow. A slowed opponent's movement speeds are each reduced by 5 feet (to a minimum of 5 feet) until the creature is healed through the application of any spell that cures hit point damage or with a successful DC 15 Heal check.</Pair>
<Pair title="Special">Multiple <em>slowing strikes</em> stack, to a minimum of 5 feet.</Pair>
</Ability>
<Ability id="invtalentstealingstrike-stealing-strike-ex-fn1-7" icon={["mailed-fist"]}>
<Pair single id="invtalentstealingstrike-stealing-strike-ex-fn1-7"><Link to="/invtalent/stealing_strike">⮞</Link> Stealing Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.7" id="ability-investigator_talents-fake-fn-1.7" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">13th-level investigator</Pair>
<Pair title="Free Action">When the investigator deals damage with <em>studied strike,</em> he can perform a <Link to="/rule/steal">steal</Link> combat maneuver against the creature damaged by <em>studied strike.</em> This steal does not provoke attacks of opportunity.</Pair>
</Ability>
<Ability id="invtalenttimedstrike-timed-strike-ex-fn2-4" icon={["upgrade"]}>
<Pair single id="invtalenttimedstrike-timed-strike-ex-fn2-4" flavor={<>The longer the investigator studies his opponent, the greater the damage he ultimately deals with his <em>studied strike.</em></>}><Link to="/invtalent/timed_strike">⮞</Link> Timed Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-2.4" id="ability-investigator_talents-fake-fn-2.4" data-hash-target to="ability-investigator_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">When the investigator makes a <em>studied strike,</em> he deal a number of points of additional damage equal to the number of consecutive rounds he studied the target with <em>studied combat.</em></Pair>
</Ability>
<Ability id="invtalenttopplingstrike-toppling-strike-ex-fn1-8" icon={["mailed-fist"]}>
<Pair single id="invtalenttopplingstrike-toppling-strike-ex-fn1-8"><Link to="/invtalent/toppling_strike">⮞</Link> Toppling Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.8" id="ability-investigator_talents-fake-fn-1.8" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level investigator</Pair>
<Pair title="Free Action">When the investigator deals damage with <em>studied strike,</em> he can perform a <Link to="/rule/trip">trip</Link> combat maneuver against the creature damaged by <em>studied strike.</em> This trip does not provoke attacks of opportunity.</Pair>
</Ability>
<Ability id="invtalenttwilighttalonimprovisation-twilight-talon-improvisation-ex-fn3-3" icon={["mailed-fist"]}>
<Pair single id="invtalenttwilighttalonimprovisation-twilight-talon-improvisation-ex-fn3-3"><Link to="/invtalent/twilight_talon_improvisation">⮞</Link> Twilight Talon Improvisation (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-3.3" id="ability-investigator_talents-fake-fn-3.3" data-hash-target to="ability-investigator_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Free Action">Whenever the investigator deals <em>studied strike</em> damage with an <Link to="/misc/improvised_weapon">improvised weapon</Link>, she can perform a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver targeting that foe. This combat maneuver provokes attacks of opportunity as normal unless the investigator has a feat or other ability to prevent it.</Pair>
</Ability>
<h3 id="ability-investigator_talents-other-studied-strike-talents" data-hash-target>Other Studied Strike Talents</h3>
<p>These talents add new options to the Studied Strike ability.</p>
<Ability id="invtalentdidacticstrike-didactic-strike-fn5" icon={["upgrade"]}>
<Pair single id="invtalentdidacticstrike-didactic-strike-fn5"><Link to="/invtalent/didactic_strike">⮞</Link> Didactic Strike <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-5" id="ability-investigator_talents-fake-fn-5" data-hash-target to="ability-investigator_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability"><p>When the investigator activates his <em>studied strike,</em> he can end his <em>studied combat</em> and choose not to deal his <em>studied strike</em> damage. He is instead able to show any allies within 30 feet who can see him a weak spot on the target.</p>
<p>Until the beginning of the investigator's next turn, each affected ally's first attack that hits the target deals additional damage equal to one-third the investigator's level.</p>
</Pair>
<Pair title="Special">He can end this effect as an <strong className="hl">immediate action</strong> to instead cause an affected ally's first successful attack to deal the investigator's <em>studied strike</em> damage. This additional damage is <Link to="/misc/precision_damage">precision damage</Link> and does not affect creatures that are immune to sneak attacks.</Pair>
</Ability>
<Ability id="invtalentquickstudy-quick-study-ex-fn1-9" icon={["upgrade"]}>
<Pair single id="invtalentquickstudy-quick-study-ex-fn1-9"><Link to="/invtalent/quick_study">⮞</Link> Quick Study (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.9" id="ability-investigator_talents-fake-fn-1.9" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">An investigator can use his <em>studied combat</em> ability as <strong className="hl">swift action</strong> instead of a move action.</Pair>
</Ability>
<Ability id="invtalentstudieddefense-studied-defense-ex-fn1-10" icon={["armor-upgrade"]}>
<Pair single id="invtalentstudieddefense-studied-defense-ex-fn1-10"><Link to="/invtalent/studied_defense">⮞</Link> Studied Defense (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.10" id="ability-investigator_talents-fake-fn-1.10" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level investigator</Pair>
<Pair title="Ability">When an investigator with this talent uses his <em>studied combat</em> ability, he can chose to apply that ability's insight bonus to his AC against attacks made by the target of his <em>studied combat</em> instead of to attack rolls against the target of his <em>studied combat.</em> (The insight bonus on damage rolls remains.)</Pair>
<Pair title="Special">He must choose which type of bonus he gains when using <em>studied combat,</em> and it cannot be changed until he uses <em>studied combat</em> again.</Pair>
</Ability>
<h3 id="ability-investigator_talents-inspiration-talents" data-hash-target>Inspiration Talents</h3>
<p>These talents either modify the Inspiration ability or provide new uses for it.</p>
<Ability id="invtalentamazinginspiration-amazing-inspiration-ex-fn1-11" icon={["upgrade"]}>
<Pair single id="invtalentamazinginspiration-amazing-inspiration-ex-fn1-11"><Link to="/invtalent/amazing_inspiration">⮞</Link> Amazing Inspiration (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.11" id="ability-investigator_talents-fake-fn-1.11" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level investigator</Pair>
<Pair title="Passive Ability">When using <em>inspiration,</em> the investigator rolls a d8 instead of a d6.</Pair>
<Pair title="At 20th Level">The investigator rolls 2d8 and adds both dice to the result.</Pair>
</Ability>
<Ability id="invtalentappliedengineering-applied-engineering-ex-fn2-5" icon={["upgrade"]}>
<Pair single id="invtalentappliedengineering-applied-engineering-ex-fn2-5" flavor="The investigator can leverage his knowledge of engineering to solve tasks that normally require brute strength or keen eyes."><Link to="/invtalent/applied_engineering">⮞</Link> Applied Engineering (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-2.5" id="ability-investigator_talents-fake-fn-2.5" data-hash-target to="ability-investigator_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Full-Round Action">He can expend one use of <em>inspiration</em> to study an object or area and attempt a <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> check. On his next turn, he can use the result of that Knowledge (engineering) check in place of a Strength check to break the object or in place of a Perception check to locate hidden doors or compartments in that area.</Pair>
</Ability>
<Ability id="invtalentatheistinspiration-atheist-inspiration-ex-fn3-4" icon={["armor-upgrade"]}>
<Pair single id="invtalentatheistinspiration-atheist-inspiration-ex-fn3-4"><Link to="/invtalent/atheist_inspiration">⮞</Link> Atheist Inspiration (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-3.4" id="ability-investigator_talents-fake-fn-3.4" data-hash-target to="ability-investigator_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Passive Ability">The investigator can use her <em>inspiration</em> on saving throws against divine spells without expending uses of <em>inspiration.</em></Pair>
<Pair title="Special">This talent counts as the <Link to="/feat/divine_defiance">Divine Defiance</Link> feat for the purpose of meeting the prerequisites of other feats.</Pair>
</Ability>
<Ability id="invtalentchroniclersinsight-chroniclers-insight-ex-fn6" extraClasses="hasSubs" icon={["upgrade"]}>
<Pair single id="invtalentchroniclersinsight-chroniclers-insight-ex-fn6"><Link to="/invtalent/chroniclers_insight">⮞</Link> Chronicler's Insight (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-6" id="ability-investigator_talents-fake-fn-6" data-hash-target to="ability-investigator_talents-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Standard Action">The investigator can peruse a <Link to="/eq-misc/pathfinder_chronicle">Pathfinder Chronicle</Link>, applying its benefits as though he had studied it for the full 1d4 rounds.</Pair>
<Pair title="Ability">Upon studying a Pathfinder Chronicle, the investigator can expend one use of <em>inspiration</em> to apply the volume's benefits for a number of hours equal to his Intelligence modifier and gain an additional benefit based on the volume's associated Knowledge skill during that time. The investigator can have only one such ongoing benefit at a time, and activating a new benefit ends the first one.</Pair>
</Ability>
<Ability id="arcana-nature-planes-or-religion" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arcana-nature-planes-or-religion">Arcana, Nature, Planes, or Religion</Pair>
<Pair title="Ability"><p>When performing a <em>studied strike,</em> the investigator's attack overcomes damage reduction as if it were a weapon with the following property based on the associated Knowledge check: adamantine (arcana), chaotic (planes), cold iron (nature), evil (planes), good (planes), lawful (planes), silver (religion).</p>
<p>He also gains a +1 insight bonus on saving throws against creatures identifiable by the associated Knowledge check (for example, outsiders for Knowledge [planes]).</p>
</Pair>
</Ability>
<Ability id="dungeoneering" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="dungeoneering">Dungeoneering</Pair>
<Pair title="Ability">The investigator can deal half his <em>studied strike</em> damage to creatures immune to sneak attacks.</Pair>
</Ability>
<Ability id="engineering" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="engineering">Engineering</Pair>
<Pair title="Ability">Whenever he uses his <em>inspiration</em> on <Link to="/skill/disable_device">Disable Device</Link> checks to open locks or on <Link to="/skill/perception">Perception</Link> checks to find hidden compartments, the investigator gains a circumstance bonus on the check equal to <Link to="/misc/one_third">one-third</Link> of his level.</Pair>
</Ability>
<Ability id="geography" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="geography">Geography</Pair>
<Pair title="Ability">The investigator increases any bonuses to AC and on Reflex saving throws he gains from partial <Link to="/rule/cover">cover</Link>, total cover, and improved cover by 1.</Pair>
</Ability>
<Ability id="history" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="history">History</Pair>
<Pair title="Full-Round Action">The investigator can study a foe using <em>studied combat</em> a second time in 24 hours without expending <em>inspiration.</em> Subsequent uses of <em>studied combat</em> require <em>inspiration</em> as normal.</Pair>
</Ability>
<Ability id="local" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="local">Local</Pair>
<Pair title="Ability">Whenever he uses his <em>inspiration</em> on <Link to="/skill/bluff">Bluff</Link> checks to feint, <Link to="/skill/diplomacy">Diplomacy</Link> checks to gather information, or <Link to="/skill/intimidate">Intimidate</Link> checks to improve a creature's attitude, the investigator gains a circumstance bonus on the check equal to one-third his level.</Pair>
</Ability>
<Ability id="nobility" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="nobility">Nobility</Pair>
<Pair title="Ability">Whenever he uses his <em>inspiration</em> on Bluff checks to lie, Diplomacy checks to request favors, or Intimidate checks to demoralize, the investigator gains a circumstance bonus on the check equal to one-third his level.</Pair>
</Ability>
<Ability id="invtalentcombatinspiration-combat-inspiration-ex-fn1-12" icon={["upgrade"]}>
<Pair single id="invtalentcombatinspiration-combat-inspiration-ex-fn1-12"><Link to="/invtalent/combat_inspiration">⮞</Link> Combat Inspiration (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.12" id="ability-investigator_talents-fake-fn-1.12" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level investigator</Pair>
<Pair title="Passive Ability">When an investigator uses <em>inspiration</em> on an attack roll or saving throw, he expends one use of <em>inspiration</em> instead of two.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="invtalentgreatercombatinspiration-greater-combat-inspiration-ex-fn1-13" icon={["upgrade"]}>
<Pair single id="invtalentgreatercombatinspiration-greater-combat-inspiration-ex-fn1-13"><Link to="/invtalent/greater_combat_inspiration">⮞</Link> Greater Combat Inspiration (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.13" id="ability-investigator_talents-fake-fn-1.13" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/invtalent/combat_inspiration">Combat inspiration</Link>, 19th-level investigator</Pair>
<Pair title="Choice">Choose a single weapon type (such as <Link to="/eq-weapon/sword_cane">sword cane</Link> or <Link to="/eq-weapon/short_sword">short sword</Link>). As long as the investigator has at least 1 inspiration point in his inspiration pool, he no longer has to expend a use of <em>inspiration</em> to use that ability with attacks made with this weapon.</Pair>
</Ability>
</div>
<Ability id="invtalenteideticrecollection-eidetic-recollection-su-fn1-14" icon={["upgrade"]}>
<Pair single id="invtalenteideticrecollection-eidetic-recollection-su-fn1-14"><Link to="/invtalent/eidetic_recollection">⮞</Link> Eidetic Recollection (Su) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.14" id="ability-investigator_talents-fake-fn-1.14" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level investigator</Pair>
<Pair title="Ability"><p>An investigator can always choose to take 10 on any of his Knowledge checks, even if he's in immediate danger or distracted.</p>
<p>An investigator may expend one use of <em>inspiration</em> to take 20 on a Knowledge skill check even if he's in immediate danger or distracted.</p>
</Pair>
</Ability>
<Ability id="invtalentempathy-empathy-ex-su-fn1-15" icon={["rolling-dices","stairs-goal"]}>
<Pair single id="invtalentempathy-empathy-ex-su-fn1-15"><Link to="/invtalent/empathy">⮞</Link> Empathy (Ex, Su) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.15" id="ability-investigator_talents-fake-fn-1.15" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level investigator</Pair>
<Pair title="Ability"><p>When attempting a <Link to="/rule/sense_motive">Sense Motive</Link> check, the investigator makes two d20 rolls and takes the higher result.</p>
<p>If an investigator uses <em>inspiration</em> on a Sense Motive check, he rolls the <em>inspiration</em> dice twice and takes the higher result.</p>
</Pair>
<Pair title="Ability"><p>Once per day, the investigator can expend one use of <em>inspiration</em> to target a single creature that he can see and hear within 30 feet. Upon doing so, the investigator detects the surface thoughts of the target's mind, as if he concentrated for 3 rounds while using the <Link to="/spell/detect_thoughts">detect thoughts</Link> spell, unless the creature succeeds a Will saving throw. The DC of this save is 10 + 1/2 the investigator's level + his Intelligence modifier.</p>
<p>If the target fails, the investigator can continue to detect the surface thoughts of the target creature for a number of rounds equal to 1/2 his investigator level.</p>
</Pair>
</Ability>
<Ability id="invtalentexpandedinspiration-expanded-inspiration-ex-fn1-16" icon={["upgrade"]}>
<Pair single id="invtalentexpandedinspiration-expanded-inspiration-ex-fn1-16"><Link to="/invtalent/expanded_inspiration">⮞</Link> Expanded Inspiration (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.16" id="ability-investigator_talents-fake-fn-1.16" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">An investigator can use his <em>inspiration</em> ability when attempting Diplomacy, Heal, Perception, Profession, and Sense Motive checks without expending uses of <em>inspiration,</em> provided he's trained in the skill.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="invtalentrapidperception-rapid-perception-su-fn7" icon={["upgrade"]}>
<Pair single id="invtalentrapidperception-rapid-perception-su-fn7"><Link to="/invtalent/rapid_perception">⮞</Link> Rapid Perception (Su) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-7" id="ability-investigator_talents-fake-fn-7" data-hash-target to="ability-investigator_talents-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/invtalent/expanded_inspiration">Expanded inspiration</Link></Pair>
<Pair title="Ability">An investigator with this talent can attempt a <Link to="/skill/perception">Perception</Link> check to intentionally search for a specific item or creature as a <strong className="hl">swift action</strong> instead of a move action. If she is intentionally searching for an invisible creature, the creature's bonus on its Stealth check from its <Link to="/spell/invisibility">invisibility</Link> is halved.</Pair>
</Ability>
</div>
<Ability id="invtalenthiddenagendas-hidden-agendas-ex-fn1-17" icon={["rolling-dices","armor-upgrade"]}>
<Pair single id="invtalenthiddenagendas-hidden-agendas-ex-fn1-17" flavor="An investigator learns to obscure his thoughts and endeavors from prying eyes and even intrusive magic."><Link to="/invtalent/hidden_agendas">⮞</Link> Hidden Agendas (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.17" id="ability-investigator_talents-fake-fn-1.17" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level investigator</Pair>
<Pair title="Ability"><p>When an investigator uses <em>inspiration</em> while attempting a <Link to="/skill/bluff">Bluff</Link> check to pass secret messages or attempting a <Link to="/skill/linguistics">Linguistics</Link> check to create forgeries, he can roll his <em>inspiration</em> dice twice and take the higher result.</p>
<p>In addition, the investigator can use <em>inspiration</em> when attempting a saving throw against a divination spell or effect without expending a use of <em>inspiration.</em></p>
</Pair>
</Ability>
<Ability id="invtalentinspirationalexpertise-inspirational-expertise-ex-fn1-18" icon={["upgrade"]}>
<Pair single id="invtalentinspirationalexpertise-inspirational-expertise-ex-fn1-18"><Link to="/invtalent/inspirational_expertise">⮞</Link> Inspirational Expertise (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.18" id="ability-investigator_talents-fake-fn-1.18" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level investigator</Pair>
<Pair title="Swift Action">When an investigator succeeds at a Knowledge check to identify a monster's special powers or vulnerabilities, he can expend one use of <em>inspiration</em> to grant allies within 30 feet that can hear him a +4 insight bonus on attack rolls against that monster or type of monster for 1 round.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="invtalentsustainedinspirationalexpertise-sustained-inspirational-expertise-ex-fn3-5" icon={["upgrade"]}>
<Pair single id="invtalentsustainedinspirationalexpertise-sustained-inspirational-expertise-ex-fn3-5"><Link to="/invtalent/sustained_inspirational_expertise">⮞</Link> Sustained Inspirational Expertise (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-3.5" id="ability-investigator_talents-fake-fn-3.5" data-hash-target to="ability-investigator_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level investigator, <Link to="/invtalent/inspirational_expertise">inspirational expertise</Link></Pair>
<Pair title="Swift Action">When granting a bonus to allies via the <em>inspirational expertise</em> investigator talent, the investigator can spend one use of <em>inspiration</em> the following round to extend the duration of the granted bonus for 1 additional round. The insight bonus granted decreases by 1 each round this ability is used.</Pair>
</Ability>
</div>
<Ability id="invtalentinspiredalertness-inspired-alertness-ex-fn1-19" icon={["armor-upgrade"]}>
<Pair single id="invtalentinspiredalertness-inspired-alertness-ex-fn1-19"><Link to="/invtalent/inspired_alertness">⮞</Link> Inspired Alertness (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.19" id="ability-investigator_talents-fake-fn-1.19" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">Whenever the investigator becomes <Link to="/rule/flat_footed">flat-footed</Link>, he can expend one use of <em>inspiration</em> to ignore that condition. He must be conscious to do so, and must decide to do so when he becomes flat-footed. Using this ability doesn't require an action.</Pair>
</Ability>
<Ability id="invtalentinspiredintelligence-inspired-intelligence-ex-fn1-20" icon={["upgrade"]}>
<Pair single id="invtalentinspiredintelligence-inspired-intelligence-ex-fn1-20"><Link to="/invtalent/inspired_intelligence">⮞</Link> Inspired Intelligence (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.20" id="ability-investigator_talents-fake-fn-1.20" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">An investigator can add his <em>inspiration</em> die to all Knowledge, Linguistics, or Spellcraft checks without expending a use of <em>inspiration,</em> even those he's not trained in.</Pair>
</Ability>
<Ability id="invtalentinspiredintimidator-inspired-intimidator-ex-fn1-21" icon={["armor-downgrade"]}>
<Pair single id="invtalentinspiredintimidator-inspired-intimidator-ex-fn1-21"><Link to="/invtalent/inspired_intimidator">⮞</Link> Inspired Intimidator (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.21" id="ability-investigator_talents-fake-fn-1.21" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/intimidate">Intimidate</Link></Pair>
<Pair title="Ability">When the investigator succeeds at an Intimidate check to demoralize an opponent, he can expend one use of <em>inspiration</em> to automatically increase the result of the check by 5 for the purpose of determining the duration of the demoralize effect. He can choose to spend multiple uses to <em>inspiration</em> in this manner to further increase the duration of the demoralize effect.</Pair>
<Pair title="Special">The <Link to="/invtalent/underworld_inspiration">underworld inspiration</Link> investigator talent has no effect on this talent.</Pair>
</Ability>
<Ability id="invtalenttenaciousinspiration-tenacious-inspiration-ex-fn1-22" icon={["rolling-dices"]}>
<Pair single id="invtalenttenaciousinspiration-tenacious-inspiration-ex-fn1-22"><Link to="/invtalent/tenacious_inspiration">⮞</Link> Tenacious Inspiration (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.22" id="ability-investigator_talents-fake-fn-1.22" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">13th-level investigator</Pair>
<Pair title="Passive Ability">When an investigator rolls his <em>inspiration</em> die, he can roll an additional <em>inspiration</em> die and take the higher result.</Pair>
</Ability>
<Ability id="invtalentunconventionalinspiration-unconventional-inspiration-ex-fn1-23" icon={["upgrade"]}>
<Pair single id="invtalentunconventionalinspiration-unconventional-inspiration-ex-fn1-23"><Link to="/invtalent/unconventional_inspiration">⮞</Link> Unconventional Inspiration (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.23" id="ability-investigator_talents-fake-fn-1.23" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Choice">An investigator with this talent can pick any one skill. He can add his <em>inspiration</em> die to checks attempted with that skill without expending a use of <em>inspiration.</em></Pair>
</Ability>
<Ability id="invtalentunderworldinspiration-underworld-inspiration-ex-fn1-24" icon={["upgrade"]}>
<Pair single id="invtalentunderworldinspiration-underworld-inspiration-ex-fn1-24"><Link to="/invtalent/underworld_inspiration">⮞</Link> Underworld Inspiration (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.24" id="ability-investigator_talents-fake-fn-1.24" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">An investigator can use his <em>inspiration</em> on Bluff, Disable Device, Disguise, Intimidate, or Sleight of Hand checks without expending uses of <em>inspiration,</em> provided he's trained in the skill.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="invtalentinnocentfacade-innocent-facade-sp-fn7-2" icon={["magic-swirl","armor-upgrade"]}>
<Pair single id="invtalentinnocentfacade-innocent-facade-sp-fn7-2"><Link to="/invtalent/innocent_facade">⮞</Link> Innocent Facade (Sp) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-7.2" id="ability-investigator_talents-fake-fn-7.2" data-hash-target to="ability-investigator_talents-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/invtalent/underworld_inspiration">Underworld inspiration</Link></Pair>
<Pair title="Ability">Once per day, an investigator with this talent can use <Link to="/spell/innocence">innocence</Link> as a spell-like ability, using her investigator level as the spell's caster level.</Pair>
</Ability>
</div>
<h3 id="ability-investigator_talents-alchemist-and-poison-talents" data-hash-target>Alchemist and Poison Talents</h3>
<p>These talents interface with the investigator's ability to create extracts and use poison.</p>
<Ability id="invtalentalchemistdiscovery-alchemist-discovery-ex-fn1-25" icon={["stairs-goal"]}>
<Pair single id="invtalentalchemistdiscovery-alchemist-discovery-ex-fn1-25"><Link to="/invtalent/alchemist_discovery">⮞</Link> Alchemist Discovery (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.25" id="ability-investigator_talents-fake-fn-1.25" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability"><p>The investigator can select one of the following <Link to="/ability/discoveries">alchemist discoveries</Link> as an investigator talent: <Link to="/discovery/combine_extracts">combine extracts</Link>, <Link to="/discovery/concentrate_poison">concentrate poison</Link>, <Link to="/discovery/dilution">dilution</Link>, <Link to="/discovery/elixir_of_life">elixir of life</Link>, <Link to="/discovery/enhance_potion">enhance potion</Link>, <Link to="/discovery/eternal_potion">eternal potion</Link>, <Link to="/discovery/extend_potion">extend potion</Link>, <Link to="/discovery/infusion">infusion</Link>, <Link to="/discovery/mutagen">mutagen</Link>, and <Link to="/discovery/poison_conversion">poison conversion</Link>.</p>
<p>He can also choose to learn an <Link to="/ability/annointings">annointing</Link>, instead. When selecting an alchemist discovery or annointing, he must be high enough level to qualify for it, using his investigator level as his alchemist level to determine if he qualifies.</p>
</Pair>
<Pair title="Special">This talent can be selected multiple times; each time grants a new alchemist discovery.</Pair>
</Ability>
<Ability id="invtalentanathema-anathema-ex-fn8" icon={["armor-downgrade"]}>
<Pair single id="invtalentanathema-anathema-ex-fn8"><Link to="/invtalent/anathema">⮞</Link> Anathema (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-8" id="ability-investigator_talents-fake-fn-8" data-hash-target to="ability-investigator_talents-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Ability"><p>When an investigator creates or prepares a poison, including poisons derived from racial or class abilities, he can spend one use of <em>inspiration</em> to create an <em>anathema</em> instead. <em>Anathemas</em> count as poisons, but they can affect creatures that are normally immune to poison, as they exploit vulnerabilities in their very nature rather than their biology.</p>
<p>When an <em>anathema</em> is created, select a creature type (and subtype, if applicable) from the ranger <Link to="/ability/favored_enemy">favored enemy</Link> list; the <em>anathema</em> functions only against this chosen type. The investigator also chooses one of the following special abilities for the <em>anathema</em> to affect: damage reduction (except DR/-), energy resistance (one type chosen by the investigator), <Link to="/umr/fast_healing">fast healing</Link>, movement speed, or spell resistance.</p>
<p>The method of delivery (contact, ingested, inhaled, or injury) and the DC of the <em>anathema's</em> save are identical to those of the poison used to make the <em>anathema.</em> If the target fails its save against the <em>anathema</em> (even if the enemy is normally immune to effects that require a specific save, such as undead's immunity to effects that require a Fortitude save), the value of the chosen ability is lowered by 5 (minimum 0) for 1 round per investigator level.</p>
</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="invtalentgreateranathema-greater-anathema-ex-fn8-2" icon={["upgrade","armor-downgrade"]}>
<Pair single id="invtalentgreateranathema-greater-anathema-ex-fn8-2"><Link to="/invtalent/greater_anathema">⮞</Link> Greater Anathema (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-8.2" id="ability-investigator_talents-fake-fn-8.2" data-hash-target to="ability-investigator_talents-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/invtalent/anathema">Anathema</Link></Pair>
<Pair title="Ability"><p>The ability reduction of the investigator's <em>anathemas</em> increases to 10, and he adds DR/- and regeneration to the list of abilities he can lower with an <em>anathema.</em></p>
<p>In addition, when an investigator creates an <em>anathema,</em> he can designate a specific kind of creature (such as <Link to="/template/vampire">vampires</Link>) in addition to the creature type. When used against this specific foe, the DC of the save against the <em>anathema</em> is 2 higher than the component poison.</p>
</Pair>
</Ability>
</div>
<Ability id="invtalentfalsespellcaster-false-spellcaster-ex-fn3-6" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="invtalentfalsespellcaster-false-spellcaster-ex-fn3-6"><Link to="/invtalent/false_spellcaster">⮞</Link> False Spellcaster (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-3.6" id="ability-investigator_talents-fake-fn-3.6" data-hash-target to="ability-investigator_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability"><p>The investigator can modify her extracts to be delivered as oils she can apply covertly to her skin. She can fake verbal or somatic components as she uses an extract this way to trick observers into thinking she cast a spell to produce the extract's effect. She attempts a <Link to="/skill/bluff">Bluff</Link> check to determine how convincing the ruse is. If observers attempt to determine the spell she is casting, those who succeed at a <Link to="/skill/spellcraft">Spellcraft</Link> check opposed by her Bluff check realize the truth.</p>
<p>Whether or not an observer recognizes what is going on, the DC to identify the effect of the extract is equal to 20 + the extract's spell level.</p>
</Pair>
<Pair title="Special">If the investigator has the <Link to="/discovery/infusion">infusion</Link> alchemist discovery, she can deliver her infusions with a range of touch, but the hint of residue grants targets a +2 bonus on the opposed Spellcraft check to realize she is not truly casting spells.</Pair>
</Ability>
<Ability id="invtalentlingeringvenom-lingering-venom-ex-fn8-3" icon={["upgrade"]}>
<Pair single id="invtalentlingeringvenom-lingering-venom-ex-fn8-3"><Link to="/invtalent/lingering_venom">⮞</Link> Lingering Venom (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-8.3" id="ability-investigator_talents-fake-fn-8.3" data-hash-target to="ability-investigator_talents-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level investigator</Pair>
<Pair title="Ability">Poisons that the investigator personally applies to weapons and traps, or otherwise inflicts upon foes, require one additional successful save to cure.</Pair>
</Ability>
<Ability id="invtalentnumericalalchemy-numerical-alchemy-su-fn4-4" icon={["upgrade"]}>
<Pair single id="invtalentnumericalalchemy-numerical-alchemy-su-fn4-4" flavor="The investigator's skill with mental mathematics allows him to know exactly which muscle movements are necessary to mix an extract in the quickest, most efficient way."><Link to="/invtalent/numerical_alchemy">⮞</Link> Numerical Alchemy (Su) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-4.4" id="ability-investigator_talents-fake-fn-4.4" data-hash-target to="ability-investigator_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The investigator can expend one use of <em>inspiration</em> to mix an extract in 1 round (as opposed to 1 minute).</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="invtalentgreaternumericalalchemy-greater-numerical-alchemy-su-fn4-5" icon={["upgrade"]}>
<Pair single id="invtalentgreaternumericalalchemy-greater-numerical-alchemy-su-fn4-5" flavor="The investigator can calculate his movements and account for his reactions to danger or unexpected situations with lightning speed."><Link to="/invtalent/greater_numerical_alchemy">⮞</Link> Greater Numerical Alchemy (Su) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-4.5" id="ability-investigator_talents-fake-fn-4.5" data-hash-target to="ability-investigator_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/invtalent/numerical_alchemy">Numerical alchemy</Link>, 11th-level investigator</Pair>
<Pair title="Ability">He can expend a use of <em>inspiration</em> to mix an extract as a <strong className="hl">standard action</strong>.</Pair>
</Ability>
</div>
<h3 id="ability-investigator_talents-other-talents" data-hash-target>Other Talents</h3>
<Ability id="invtalentcastling-castling-ex-fn9" icon={["armor-upgrade"]}>
<Pair single id="invtalentcastling-castling-ex-fn9"><Link to="/invtalent/castling">⮞</Link> Castling (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-9" id="ability-investigator_talents-fake-fn-9" data-hash-target to="ability-investigator_talents-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Passive Ability">The investigator treats soft cover granted by creatures of her size or larger as though it were <Link to="/rule/cover">cover</Link> instead. Cover the investigator gains from this talent does not allow her to attempt Stealth checks.</Pair>
</Ability>
<Ability id="invtalentdevicetalent-device-talent-ex-fn1-26" icon={["upgrade"]}>
<Pair single id="invtalentdevicetalent-device-talent-ex-fn1-26"><Link to="/invtalent/device_talent">⮞</Link> Device Talent (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.26" id="ability-investigator_talents-fake-fn-1.26" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The investigator can use the <Link to="/skill/use_magic_device">Use Magic Device</Link> skill even if not trained in that skill. If the investigator is trained in Use Magic Device, he can use the <em>inspiration</em> ability with that skill without expending uses of <em>inspiration.</em></Pair>
</Ability>
<Ability id="invtalenteffortlessaid-effortless-aid-ex-fn1-27" icon={["upgrade"]}>
<Pair single id="invtalenteffortlessaid-effortless-aid-ex-fn1-27"><Link to="/invtalent/effortless_aid">⮞</Link> Effortless Aid (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.27" id="ability-investigator_talents-fake-fn-1.27" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability"><p>The investigator can use an <Link to="/rule/aid_another_2">aid another</Link> action as a <strong className="hl">move action</strong> instead of as a standard action.</p>
<p>An investigator can expend one use of <em>inspiration</em> to instead perform an aid another action as a <strong className="hl">swift action</strong>.</p>
</Pair>
</Ability>
<Ability id="invtalenteldritchconduit-eldritch-conduit-su-fn10" icon={["upgrade","magic-swirl"]}>
<Pair single id="invtalenteldritchconduit-eldritch-conduit-su-fn10" flavor="Survival in the Mana Wastes between the nations of Nex and Geb can depend heavily on locating sufficient magical equipment, which sometimes involves stealing power from a wand or scroll to power a more necessary one."><Link to="/invtalent/eldritch_conduit">⮞</Link> Eldritch Conduit (Su) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-10" id="ability-investigator_talents-fake-fn-10" data-hash-target to="ability-investigator_talents-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Full-Round Action">An investigator with this talent can use two potions, two wands, or two scrolls. Each item is expended or loses a charge as if used normally. The investigator chooses to gain the magical effect of one, but calculates its effects using the caster level of the other.</Pair>
<Pair title="Special">The investigator must still succeed at a Use Magic Device check to operate scrolls or wands unless some other ability allows him to do so, but makes only one skill check to operate both items.</Pair>
</Ability>
<Ability id="invtalentextraearthcraft-extra-earthcraft-fn9-2" icon={["upgrade"]}>
<Pair single id="invtalentextraearthcraft-extra-earthcraft-fn9-2"><Link to="/invtalent/extra_earthcraft">⮞</Link> Extra Earthcraft <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-9.2" id="ability-investigator_talents-fake-fn-9.2" data-hash-target to="ability-investigator_talents-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Ability">The investigator gains 2 additional earthcraft points each day. The investigator must have the <Link to="/arc-rogue/earthshadow">earthcraft</Link> ability to select this talent.</Pair>
</Ability>
<Ability id="invtalentfavoredbeat-favored-beat-ex-fn3-7" icon={["stairs-goal"]}>
<Pair single id="invtalentfavoredbeat-favored-beat-ex-fn3-7" flavor={<>The investigator is familiar with a specific community in which she gains the benefits of <em>renown.</em></>}><Link to="/invtalent/favored_beat">⮞</Link> Favored Beat (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-3.7" id="ability-investigator_talents-fake-fn-3.7" data-hash-target to="ability-investigator_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">She gains the <Link to="/soctalent/renown">renown</Link> vigilante social talent. This community can be an entire settlement or portions of a settlement (such as a particular district or neighborhood) depending on the population, as allowed by the <em>renown</em> social talent.</Pair>
<Pair title="Special"><p>Anytime she could select another investigator talent, the investigator can also select from the following list of vigilante social talents, using her investigator level as her vigilante level for the purposes of meeting prerequisites: <Link to="/soctalent/celebrity_discount">celebrity discount</Link>, <Link to="/soctalent/celebrity_perks">celebrity perks</Link>, <Link to="/soctalent/gossip_collector">gossip collector</Link>, <Link to="/soctalent/great_renown">great renown</Link>, <Link to="/soctalent/incredible_renown">incredible renown</Link>, and <Link to="/soctalent/loyal_aid">loyal aid</Link>.</p>
<p>For the purpose of vigilante social talents, the investigator does not have a vigilante identity and is always considered to be in her social identity.</p>
</Pair>
</Ability>
<Ability id="invtalentfortifiedposition-fortified-position-ex-fn9-3" icon={["armor-upgrade"]}>
<Pair single id="invtalentfortifiedposition-fortified-position-ex-fn9-3"><Link to="/invtalent/fortified_position">⮞</Link> Fortified Position (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-9.3" id="ability-investigator_talents-fake-fn-9.3" data-hash-target to="ability-investigator_talents-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Passive Ability">Whenever the investigator gains a bonus on Reflex saves due to cover, she gains an equal bonus on Fortitude saves.</Pair>
</Ability>
<Ability id="invtalentgracefulathlete-graceful-athlete-fn11" icon={["stairs-goal"]}>
<Pair single id="invtalentgracefulathlete-graceful-athlete-fn11"><Link to="/invtalent/graceful_athlete">⮞</Link> Graceful Athlete <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-11" id="ability-investigator_talents-fake-fn-11" data-hash-target to="ability-investigator_talents-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Ability">Gain <Link to="/feat/graceful_athlete">Graceful Athlete</Link> as a bonus feat. You must meet the prerequisites for the feat.</Pair>
</Ability>
<Ability id="invtalentitemlore-item-lore-ex-fn1-28" icon={["upgrade","magic-swirl"]}>
<Pair single id="invtalentitemlore-item-lore-ex-fn1-28"><Link to="/invtalent/item_lore">⮞</Link> Item Lore (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.28" id="ability-investigator_talents-fake-fn-1.28" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level investigator</Pair>
<Pair title="Ability">An investigator can use <Link to="/skill/spellcraft">Spellcraft</Link> to identify the properties and command words of magic items without the use of <Link to="/spell/detect_magic">detect magic</Link> or similar spells.</Pair>
</Ability>
<Ability id="invtalentjustafaceinthecrowd-just-a-face-in-the-crowd-su-fn10-2" icon={["armor-upgrade","upgrade"]}>
<Pair single id="invtalentjustafaceinthecrowd-just-a-face-in-the-crowd-su-fn10-2" flavor="The rabble-rousers of Galt can blend into a crowd and are able to hide and spot others who appear to be hiding."><Link to="/invtalent/just_a_face_in_the_crowd">⮞</Link> Just a Face in the Crowd (Su) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-10.2" id="ability-investigator_talents-fake-fn-10.2" data-hash-target to="ability-investigator_talents-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Passive Ability">The investigator gains a bonus equal to <Link to="/misc/half">half</Link> his class level on <Link to="/skill/disguise">Disguise</Link> and <Link to="/skill/perception">Perception</Link> checks when 10 or more creatures of his size are within 30 feet of him.</Pair>
</Ability>
<Ability id="invtalentoccultdungeoneer-occult-dungeoneer-su-fn10-3" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="invtalentoccultdungeoneer-occult-dungeoneer-su-fn10-3" flavor="Street thieves in Absalom expect wares to be securely locked, and sometimes it takes high-quality tools and magic training to ensure there's a meal at the end of the day."><Link to="/invtalent/occult_dungeoneer">⮞</Link> Occult Dungeoneer (Su) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-10.3" id="ability-investigator_talents-fake-fn-10.3" data-hash-target to="ability-investigator_talents-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Ability"><p>An investigator with this ability can use <Link to="/misc/spell_trigger">spell trigger</Link> and <Link to="/misc/spell_completion">spell completion</Link> items as if the following spells were on a spell list to which he has access: <Link to="/spell/detect_secret_doors">detect secret doors</Link>, <Link to="/spell/find_traps">find traps</Link>, <Link to="/spell/knock">knock</Link>, <Link to="/spell/locate_object">locate object</Link>, and <Link to="/spell/obscure_object">obscure object</Link>.</p>
<p>If the <Link to="/misc/spell_trigger">spell-trigger</Link> device allows a wielder to apply his own caster level (such as with a staff), the investigator may use his class level as his caster level.</p>
</Pair>
<Pair title="Special">The investigator may also use <em>knock</em> as a supernatural ability once per day, using his investigator level as his caster level.</Pair>
</Ability>
<Ability id="invtalentoneofthosefaces-one-of-those-faces-sp-fn12" icon={["magic-swirl"]}>
<Pair single id="invtalentoneofthosefaces-one-of-those-faces-sp-fn12"><Link to="/invtalent/one_of_those_faces">⮞</Link> One of Those Faces (Sp) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-12" id="ability-investigator_talents-fake-fn-12" data-hash-target to="ability-investigator_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Ability">Each day, you can use <Link to="/spell/disguise_self">disguise self</Link> as a spell-like ability for up to 10 minutes per character level. This duration need not be continuous, but it must be used in 10-minute increments. Additionally, once you have used this ability, whenever you use it for the next 24 hours you must take the same alternate appearance.</Pair>
</Ability>
<Ability id="invtalentperceptivetracking-perceptive-tracking-ex-fn1-29" icon={["upgrade"]}>
<Pair single id="invtalentperceptivetracking-perceptive-tracking-ex-fn1-29"><Link to="/invtalent/perceptive_tracking">⮞</Link> Perceptive Tracking (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.29" id="ability-investigator_talents-fake-fn-1.29" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/perception">Perception</Link></Pair>
<Pair title="Passive Ability">The investigator can use Perception instead of <Link to="/skill/survival">Survival</Link> to both find and follow tracks, using the same DCs listed under the Survival skill.</Pair>
</Ability>
<Ability id="invtalentroguetalent-rogue-talent-ex-fn1-30" icon={["stairs-goal"]}>
<Pair single id="invtalentroguetalent-rogue-talent-ex-fn1-30"><Link to="/invtalent/rogue_talent">⮞</Link> Rogue Talent (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-1.30" id="ability-investigator_talents-fake-fn-1.30" data-hash-target to="ability-investigator_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability"><p>An investigator can select one of the following rogue talents in place of an investigator talent: <Link to="/talent/acrobatic_assist">acrobatic assist</Link>, <Link to="/talent/assault_leader">assault leader</Link>, <Link to="/talent/black_market_connections">black market connections</Link>, <Link to="/talent/camouflage">camouflage</Link>, <Link to="/talent/canny_observer">canny observer</Link>, <Link to="/talent/charmer">charmer</Link>, <Link to="/talent/coax_information">coax information</Link>, <Link to="/talent/combat_swipe">combat swipe</Link>, <Link to="/talent/convincing_lie">convincing lie</Link>, <Link to="/talent/cunning_trigger">cunning trigger</Link>, <Link to="/talent/deft_palm">deft palm</Link>, <Link to="/talent/demand_attention">demand attention</Link>, <Link to="/talent/expert_leaper">expert leaper</Link>, <Link to="/talent/fast_fingers">fast fingers</Link>, <Link to="/talent/fast_getaway">fast getaway</Link>, <Link to="/talent/fast_picks">fast picks</Link>, <Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/firearm_training">firearm training</Link>, <Link to="/talent/got_your_back">got your back</Link>, <Link to="/talent/guileful_polyglot">guileful polyglot</Link>, <Link to="/talent/grit">grit</Link>, <Link to="/talent/hard_to_fool">hard to fool</Link>, <Link to="/talent/hold_breath">hold breath</Link>, <Link to="/talent/honeyed_words">honeyed words</Link>, <Link to="/talent/iron_guts">iron guts</Link>, <Link to="/talent/lasting_poison">lasting poison</Link>, <Link to="/talent/ledge_walker">ledge walker</Link>, <Link to="/talent/major_magic">major magic</Link>, <Link to="/talent/minor_magic">minor magic</Link>, <Link to="/talent/nimble_climber">nimble climber</Link>, <Link to="/talent/peerless_maneuver">peerless maneuver</Link>, <Link to="/talent/quick_disable">quick disable</Link>, <Link to="/talent/quick_disguise">quick disguise</Link>, <Link to="/talent/quick_trapsmith">quick trapsmith</Link>, <Link to="/talent/resiliency">resiliency</Link>, <Link to="/talent/rogue_crawl">rogue crawl</Link>, <Link to="/talent/rope_master">rope master</Link>, <Link to="/talent/stand_up">stand up</Link>, <Link to="/talent/strong_stroke">strong stroke</Link>, <Link to="/talent/terrain_mastery">terrain mastery</Link>, <Link to="/talent/trap_spotter">trap spotter</Link>, or <Link to="/talent/wall_scramble">wall scramble</Link>.</p>
<p>Any talent effects based on rogue level use the investigator's class level. If the rogue talent has a prerequisite (such as the <em>major magic</em> rogue talent requiring the <em>minor magic</em> talent), the investigator must fulfill the prerequisite before selecting that rogue talent.</p>
</Pair>
<Pair title="Special">This talent can be selected multiple times; each time, it grants the investigator a new rogue talent.</Pair>
</Ability>
<Ability id="invtalentscryslip-scry-slip-su-fn7-3" icon={["armor-upgrade"]}>
<Pair single id="invtalentscryslip-scry-slip-su-fn7-3"><Link to="/invtalent/scry_slip">⮞</Link> Scry Slip (Su) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-7.3" id="ability-investigator_talents-fake-fn-7.3" data-hash-target to="ability-investigator_talents-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Ability">Whenever an investigator with this talent is targeted by a scrying effect that allows a Will save, the caster of the divination must succeed at a caster level check (DC = 15 + the investigator's class level). This talent wards the investigator and any objects she is holding or carrying.</Pair>
</Ability>
<Ability id="invtalentscryingfamiliarity-scrying-familiarity-ex-fn13" icon={["rolling-dices","armor-upgrade","upgrade"]}>
<Pair single id="invtalentscryingfamiliarity-scrying-familiarity-ex-fn13"><Link to="/invtalent/scrying_familiarity">⮞</Link> Scrying Familiarity (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-13" id="ability-investigator_talents-fake-fn-13" data-hash-target to="ability-investigator_talents-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Ability">You are well acquainted with scrying sensors. You can roll twice and take the better result on saving throws against divination (scrying) spells and effects, on <Link to="/skill/perception">Perception</Link> checks to notice scrying sensors, and on caster level checks to overcome spell resistance when you use a scrying spell or effect.</Pair>
<Pair title="Special">If you notice a magical sensor, you can attempt a <Link to="/skill/stealth">Stealth</Link> check opposed by the caster's caster level check to avoid being detected by the sensor.</Pair>
</Ability>
<Ability id="invtalentspellstoring-spell-storing-su-fn10-4" icon={["magic-swirl"]}>
<Pair single id="invtalentspellstoring-spell-storing-su-fn10-4"><Link to="/invtalent/spell_storing">⮞</Link> Spell Storing (Su) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-10.4" id="ability-investigator_talents-fake-fn-10.4" data-hash-target to="ability-investigator_talents-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/use_magic_device">Use Magic Device</Link></Pair>
<Pair title="Ability">The investigator can store within himself a single targeted harmless spell of up to 2nd level. The spell must have a casting time of 1 standard action. Anytime a spell that meets these conditions is cast on the investigator, and he does not already have a spell stored, he can choose to store it rather than have it take effect immediately. Anytime afterward, as a <strong className="hl">standard action</strong>, the investigator can have the spell take effect (acting in all ways as if it had just been cast on him).</Pair>
</Ability>
<Ability id="invtalentthewholetime-the-whole-time-su-fn10-5" icon={["stairs-goal","magic-swirl","armor-upgrade"]}>
<Pair single id="invtalentthewholetime-the-whole-time-su-fn10-5" flavor={<>Mercenaries in the employ of the <Link to="/rule/aspis_consortium">Aspis Consortium</Link> often use wands of <Link to="/spell/invisibility">invisibility</Link> to attack protected targets, then blend into the crowd to escape or disguise the source of the next attack.</>}><Link to="/invtalent/the_whole_time">⮞</Link> The Whole Time (Su) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-10.5" id="ability-investigator_talents-fake-fn-10.5" data-hash-target to="ability-investigator_talents-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Ability">An investigator with this ability is practiced at attacking from magical concealment. He can use <Link to="/misc/spell_trigger">spell trigger</Link> and <Link to="/misc/spell_completion">spell completion</Link> items as if the following spells were on a spell list to which he has access: <Link to="/spell/greater_invisibility">greater invisibility</Link>, <em>invisibility,</em> and <Link to="/spell/vanish">vanish</Link></Pair>
<Pair title="Free Action">Additionally, if the investigator becomes visible as a result of a weapon or spell attack, he can sheathe his weapon and instantly adopt a neutral posture. With a successful <Link to="/skill/bluff">Bluff</Link> or <Link to="/skill/disguise">Disguise</Link> check (opposed by witnesses' <Link to="/skill/sense_motive">Sense Motive</Link> or <Link to="/skill/perception">Perception</Link> checks, whichever is higher), there is no obvious sign that the investigator is the source of the attack (though a lack of any other reasonable candidate can still lead observers to draw the correct conclusion).</Pair>
</Ability>
<Ability id="invtalentunbalancingtrick-unbalancing-trick-ex-fn9-4" icon={["stairs-goal"]}>
<Pair single id="invtalentunbalancingtrick-unbalancing-trick-ex-fn9-4"><Link to="/invtalent/unbalancing_trick">⮞</Link> Unbalancing Trick (Ex) <sup><InnerLink showBacklink="backlink-ability-investigator_talents-fake-fn-9.4" id="ability-investigator_talents-fake-fn-9.4" data-hash-target to="ability-investigator_talents-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Ability">The investigator gains <Link to="/feat/improved_trip">Improved Trip</Link> as a bonus feat, even if she does not meet the prerequisites.</Pair>
<Pair title="At 6th Level">She is treated as if she meets all the prerequisites of <Link to="/feat/greater_trip">Greater Trip</Link> (although she must take the feat as normal to gain its benefits).</Pair>
</Ability>
<section data-footnotes><h3 id="ability-investigator_talents-label">Footnotes</h3><ol>
<li id="ability-investigator_talents-fake-fn-1-target"><p><Link to="/source/advanced_class_guide">Advanced Class Guide</Link> pg. 32 <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1" data-hash-target to="ability-investigator_talents-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.2" data-hash-target to="ability-investigator_talents-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.3" data-hash-target to="ability-investigator_talents-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.4" data-hash-target to="ability-investigator_talents-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.5" data-hash-target to="ability-investigator_talents-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.6" data-hash-target to="ability-investigator_talents-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.7" data-hash-target to="ability-investigator_talents-fake-fn-1.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.8" data-hash-target to="ability-investigator_talents-fake-fn-1.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.9" data-hash-target to="ability-investigator_talents-fake-fn-1.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.10" data-hash-target to="ability-investigator_talents-fake-fn-1.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.11" data-hash-target to="ability-investigator_talents-fake-fn-1.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.12" data-hash-target to="ability-investigator_talents-fake-fn-1.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.13" data-hash-target to="ability-investigator_talents-fake-fn-1.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.14" data-hash-target to="ability-investigator_talents-fake-fn-1.14">↩<sup>14</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.15" data-hash-target to="ability-investigator_talents-fake-fn-1.15">↩<sup>15</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.16" data-hash-target to="ability-investigator_talents-fake-fn-1.16">↩<sup>16</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.17" data-hash-target to="ability-investigator_talents-fake-fn-1.17">↩<sup>17</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.18" data-hash-target to="ability-investigator_talents-fake-fn-1.18">↩<sup>18</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.19" data-hash-target to="ability-investigator_talents-fake-fn-1.19">↩<sup>19</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.20" data-hash-target to="ability-investigator_talents-fake-fn-1.20">↩<sup>20</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.21" data-hash-target to="ability-investigator_talents-fake-fn-1.21">↩<sup>21</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.22" data-hash-target to="ability-investigator_talents-fake-fn-1.22">↩<sup>22</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.23" data-hash-target to="ability-investigator_talents-fake-fn-1.23">↩<sup>23</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.24" data-hash-target to="ability-investigator_talents-fake-fn-1.24">↩<sup>24</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.25" data-hash-target to="ability-investigator_talents-fake-fn-1.25">↩<sup>25</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.26" data-hash-target to="ability-investigator_talents-fake-fn-1.26">↩<sup>26</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.27" data-hash-target to="ability-investigator_talents-fake-fn-1.27">↩<sup>27</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.28" data-hash-target to="ability-investigator_talents-fake-fn-1.28">↩<sup>28</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.29" data-hash-target to="ability-investigator_talents-fake-fn-1.29">↩<sup>29</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-investigator_talents-fake-fn-1.30" data-hash-target to="ability-investigator_talents-fake-fn-1.30">↩<sup>30</sup></InnerLink></p></li>
<li id="ability-investigator_talents-fake-fn-2-target"><p><Link to="/source/advanced_class_origins">Advanced Class Origins</Link> pg. 15 <InnerLink aria-label="Back to reference 2" id="backlink-ability-investigator_talents-fake-fn-2" data-hash-target to="ability-investigator_talents-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-investigator_talents-fake-fn-2.2" data-hash-target to="ability-investigator_talents-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-investigator_talents-fake-fn-2.3" data-hash-target to="ability-investigator_talents-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-investigator_talents-fake-fn-2.4" data-hash-target to="ability-investigator_talents-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-investigator_talents-fake-fn-2.5" data-hash-target to="ability-investigator_talents-fake-fn-2.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-investigator_talents-fake-fn-3-target"><p><Link to="/source/inner_sea_intrigue">Inner Sea Intrigue</Link> pg. 31 <InnerLink aria-label="Back to reference 3" id="backlink-ability-investigator_talents-fake-fn-3" data-hash-target to="ability-investigator_talents-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-investigator_talents-fake-fn-3.2" data-hash-target to="ability-investigator_talents-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-investigator_talents-fake-fn-3.3" data-hash-target to="ability-investigator_talents-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-investigator_talents-fake-fn-3.4" data-hash-target to="ability-investigator_talents-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-investigator_talents-fake-fn-3.5" data-hash-target to="ability-investigator_talents-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-investigator_talents-fake-fn-3.6" data-hash-target to="ability-investigator_talents-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-investigator_talents-fake-fn-3.7" data-hash-target to="ability-investigator_talents-fake-fn-3.7">↩<sup>7</sup></InnerLink></p></li>
<li id="ability-investigator_talents-fake-fn-4-target"><p><Link to="/source/disciples_doctrine">Disciple's Doctrine</Link> pg. 17 <InnerLink aria-label="Back to reference 4" id="backlink-ability-investigator_talents-fake-fn-4" data-hash-target to="ability-investigator_talents-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-investigator_talents-fake-fn-4.2" data-hash-target to="ability-investigator_talents-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-investigator_talents-fake-fn-4.3" data-hash-target to="ability-investigator_talents-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-investigator_talents-fake-fn-4.4" data-hash-target to="ability-investigator_talents-fake-fn-4.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-investigator_talents-fake-fn-4.5" data-hash-target to="ability-investigator_talents-fake-fn-4.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-investigator_talents-fake-fn-5-target"><p><Link to="/source/adventurers_guide">Adventurer's Guide</Link> pg. 147 <InnerLink aria-label="Back to reference 5" id="backlink-ability-investigator_talents-fake-fn-5" data-hash-target to="ability-investigator_talents-fake-fn-5">↩</InnerLink></p></li>
<li id="ability-investigator_talents-fake-fn-6-target"><p>Adventurer's Guide pg. 146 <InnerLink aria-label="Back to reference 6" id="backlink-ability-investigator_talents-fake-fn-6" data-hash-target to="ability-investigator_talents-fake-fn-6">↩</InnerLink></p></li>
<li id="ability-investigator_talents-fake-fn-7-target"><p><Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox</Link> pg. 27 <InnerLink aria-label="Back to reference 7" id="backlink-ability-investigator_talents-fake-fn-7" data-hash-target to="ability-investigator_talents-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-investigator_talents-fake-fn-7.2" data-hash-target to="ability-investigator_talents-fake-fn-7.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-investigator_talents-fake-fn-7.3" data-hash-target to="ability-investigator_talents-fake-fn-7.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-investigator_talents-fake-fn-8-target"><p><Link to="/source/potions_and_poisons">Potions and Poisons</Link> pg. 15 <InnerLink aria-label="Back to reference 8" id="backlink-ability-investigator_talents-fake-fn-8" data-hash-target to="ability-investigator_talents-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-investigator_talents-fake-fn-8.2" data-hash-target to="ability-investigator_talents-fake-fn-8.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-investigator_talents-fake-fn-8.3" data-hash-target to="ability-investigator_talents-fake-fn-8.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-investigator_talents-fake-fn-9-target"><p><Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link> pg. 9 <InnerLink aria-label="Back to reference 9" id="backlink-ability-investigator_talents-fake-fn-9" data-hash-target to="ability-investigator_talents-fake-fn-9">↩</InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-ability-investigator_talents-fake-fn-9.2" data-hash-target to="ability-investigator_talents-fake-fn-9.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-ability-investigator_talents-fake-fn-9.3" data-hash-target to="ability-investigator_talents-fake-fn-9.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-ability-investigator_talents-fake-fn-9.4" data-hash-target to="ability-investigator_talents-fake-fn-9.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-investigator_talents-fake-fn-10-target"><p>Magic Tactics Toolbox pg. 7 <InnerLink aria-label="Back to reference 10" id="backlink-ability-investigator_talents-fake-fn-10" data-hash-target to="ability-investigator_talents-fake-fn-10">↩</InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-investigator_talents-fake-fn-10.2" data-hash-target to="ability-investigator_talents-fake-fn-10.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-investigator_talents-fake-fn-10.3" data-hash-target to="ability-investigator_talents-fake-fn-10.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-investigator_talents-fake-fn-10.4" data-hash-target to="ability-investigator_talents-fake-fn-10.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-investigator_talents-fake-fn-10.5" data-hash-target to="ability-investigator_talents-fake-fn-10.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-investigator_talents-fake-fn-11-target"><p><Link to="/source/blood_of_the_beast">Blood of the Beast</Link> pg. 6 <InnerLink aria-label="Back to reference 11" id="backlink-ability-investigator_talents-fake-fn-11" data-hash-target to="ability-investigator_talents-fake-fn-11">↩</InnerLink></p></li>
<li id="ability-investigator_talents-fake-fn-12-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> pg. 21 <InnerLink aria-label="Back to reference 12" id="backlink-ability-investigator_talents-fake-fn-12" data-hash-target to="ability-investigator_talents-fake-fn-12">↩</InnerLink></p></li>
<li id="ability-investigator_talents-fake-fn-13-target"><p>Spymaster's Handbook pg. 2 <InnerLink aria-label="Back to reference 13" id="backlink-ability-investigator_talents-fake-fn-13" data-hash-target to="ability-investigator_talents-fake-fn-13">↩</InnerLink></p></li>
</ol></section></div>};
const _ki_powers = {title: "Ki Powers", topLink: ["Unchained Monk","class/unchained_monk"], jsx: <div className="compilation"><h2 id="ability-ki_powers-ki-powers-unchained">Ki Powers (Unchained)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained</Link><br/>At 4th level and every 2 levels thereafter, an unchained monk can select one ki power. These powers allow the monk to perform amazing feats of mystical power and acrobatic prowess by expending points from his ki pool. Once a ki power is selected, it cannot be changed. Some ki powers require the monk to be of a specific level or higher before they can be chosen. Unless otherwise noted, a monk cannot select an individual ki power more than once.</p>
<Ability id="kipowerabundantstep-abundant-step-su-fn1" icon={["magic-swirl"]}>
<Pair single id="kipowerabundantstep-abundant-step-su-fn1"><Link to="/kipower/abundant_step">⮞</Link> Abundant Step (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-1" id="ability-ki_powers-fake-fn-1" data-hash-target to="ability-ki_powers-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">8th-level monk</Pair>
<Pair title="Move-Equivalent Action">A monk with this ki power can slip magically between spaces, as if using the spell <Link to="/spell/dimension_door">dimension door</Link>. Using this ability consumes 2 ki points. The monk's caster level for this effect is equal to his monk level. He cannot take other creatures with him when he uses this ability.</Pair>
</Ability>
<Ability id="kipoweractionbeforethought-action-before-thought-ex-fn2" icon={["rolling-dices"]}>
<Pair single id="kipoweractionbeforethought-action-before-thought-ex-fn2"><Link to="/kipower/action_before_thought">⮞</Link> Action Before Thought (Ex) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-2" id="ability-ki_powers-fake-fn-2" data-hash-target to="ability-ki_powers-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">6th-level monk</Pair>
<Pair title="Free Action">A monk with this ability can spend 2 ki points as part of rolling initiative to roll twice on the initiative check and take the higher result.</Pair>
</Ability>
<Ability id="kipowerbreakingdownkoan-breaking-down-koan-su-fn2-2" icon={["armor-downgrade"]}>
<Pair single id="kipowerbreakingdownkoan-breaking-down-koan-su-fn2-2"><Link to="/kipower/breaking_down_koan">⮞</Link> Breaking-Down Koan (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-2.2" id="ability-ki_powers-fake-fn-2.2" data-hash-target to="ability-ki_powers-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">8th-level monk</Pair>
<Pair title="Swift Action">A monk with this ability can spend 1 ki point to present a paradox, riddle, or complicated question to a creature within 30 feet. The creature must succeed at a Will save (DC = 10 + 1/2 the monk's level + his Wisdom modifier) or be <Link to="/misc/confused">confused</Link> for 1 round.</Pair>
<Pair title="Special">This is a mind-affecting, language-dependent effect.</Pair>
</Ability>
<Ability id="kipowerbuildingupkoan-building-up-koan-su-fn2-3" icon={["armor-upgrade","upgrade","broken-shield"]}>
<Pair single id="kipowerbuildingupkoan-building-up-koan-su-fn2-3"><Link to="/kipower/building_up_koan">⮞</Link> Building-Up Koan (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-2.3" id="ability-ki_powers-fake-fn-2.3" data-hash-target to="ability-ki_powers-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">8th-level monk</Pair>
<Pair title="Swift Action">A monk with this ability can spend 2 ki points to ask himself a koan, which he then tries to answer. The monk must attempt a Will save (DC 15 + 1/2 the monk's level). If successful, he gains an insight bonus equal to his Wisdom modifier to AC and on attack rolls, saving throws, skill checks and until the end of the round. If he fails, the monk is instead <Link to="/misc/confused">confused</Link> for 1 round.</Pair>
<Pair title="Special">This is a mind-affecting, language-dependent effect. A character who can't become confused can't benefit from this ability.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="kipowermasterthoughtkoan-master-thought-koan-su-fn2-4" icon={["upgrade"]}>
<Pair single id="kipowermasterthoughtkoan-master-thought-koan-su-fn2-4"><Link to="/kipower/master_thought_koan">⮞</Link> Master-Thought Koan (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-2.4" id="ability-ki_powers-fake-fn-2.4" data-hash-target to="ability-ki_powers-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">12th-level monk, either <Link to="/kipower/breaking_down_koan">breaking-down koan</Link> or <Link to="/kipower/building_up_koan">building-up koan</Link></Pair>
<Pair title="Ability">A monk with this ability can spend an additional 2 ki points when using either the <em>breaking-down koan</em> or <em>building-up koan</em> ki powers. When combined with <em>master-thought koan, breaking-down koan</em> affects a number of characters of your choice within 30 feet equal to the monk's wisdom modifier. When combined with <em>master-thought koan, building-up koan</em> can be used on an ally within 30 feet.</Pair>
</Ability>
</div>
<Ability id="kipowerdiamondbody-diamond-body-su-fn1-2" icon={["armor-upgrade"]}>
<Pair single id="kipowerdiamondbody-diamond-body-su-fn1-2"><Link to="/kipower/diamond_body">⮞</Link> Diamond Body (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-1.2" id="ability-ki_powers-fake-fn-1.2" data-hash-target to="ability-ki_powers-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">8th-level monk</Pair>
<Pair title="Ability">By spending 1 ki point, a monk with this power can remove one toxin from his body as if using <Link to="/spell/neutralize_poison">neutralize poison</Link>, using his monk level as his caster level. He can remove only one poison in this way per use of this ability.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="kipowercobrabreath-cobra-breath-su-fn1-3" icon={["smoking-finger"]}>
<Pair single id="kipowercobrabreath-cobra-breath-su-fn1-3"><Link to="/kipower/cobra_breath">⮞</Link> Cobra Breath (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-1.3" id="ability-ki_powers-fake-fn-1.3" data-hash-target to="ability-ki_powers-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">12th-level monk, <Link to="/kipower/diamond_body">diamond body</Link></Pair>
<Pair title="Ability">Whenever a monk with this ki power uses <em>diamond body</em> to neutralize a poison, he can instead release that poison as a ranged touch attack against a single foe within 30 feet. If the attack hits, the foe must succeed at a saving throw (using the poison's original DC) or suffer the poison's effects, even if it was not originally a contact poison.</Pair>
</Ability>
</div>
<Ability id="kipowerdiamondmind-diamond-mind-su-fn1-4" icon={["armor-upgrade"]}>
<Pair single id="kipowerdiamondmind-diamond-mind-su-fn1-4"><Link to="/kipower/diamond_mind">⮞</Link> Diamond Mind (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-1.4" id="ability-ki_powers-fake-fn-1.4" data-hash-target to="ability-ki_powers-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">6th-level monk</Pair>
<Pair title="Swift Action">By spending 1 ki point, a monk with this power can suppress a fear effect affecting him as if using <Link to="/spell/remove_fear">remove fear</Link>, using his monk level as his caster level.</Pair>
<Pair title="Special">He can spend 2 ki points to activate this ability even when <Link to="/misc/frightened">frightened</Link> or <Link to="/misc/panicked">panicked</Link>.</Pair>
</Ability>
<Ability id="kipowerdiamondresilience-diamond-resilience-ex-fn1-5" icon={["armor-upgrade"]}>
<Pair single id="kipowerdiamondresilience-diamond-resilience-ex-fn1-5"><Link to="/kipower/diamond_resilience">⮞</Link> Diamond Resilience (Ex) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-1.5" id="ability-ki_powers-fake-fn-1.5" data-hash-target to="ability-ki_powers-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">12th-level monk</Pair>
<Pair title="Swift Action">By spending 1 ki point, the monk gains DR 2/-.</Pair>
<Pair title="At 16th Level">The damage reduction increases to 4/-.</Pair>
<Pair title="At 19th Level">It increases to DR 6/-.</Pair>
<Pair title="Special">This DR lasts for 1 minute.</Pair>
</Ability>
<Ability id="kipowerdiamondsoul-diamond-soul-ex-fn1-6" icon={["armor-upgrade"]}>
<Pair single id="kipowerdiamondsoul-diamond-soul-ex-fn1-6"><Link to="/kipower/diamond_soul">⮞</Link> Diamond Soul (Ex) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-1.6" id="ability-ki_powers-fake-fn-1.6" data-hash-target to="ability-ki_powers-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">12th-level monk</Pair>
<Pair title="Swift Action">A monk can spend 2 ki points to gain spell resistance equal to his monk level + 10. This spell resistance lasts for a number of rounds equal to the monk's level.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="kipowerkivolley-ki-volley-su-fn3" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="kipowerkivolley-ki-volley-su-fn3"><Link to="/kipower/ki_volley">⮞</Link> Ki Volley (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-3" id="ability-ki_powers-fake-fn-3" data-hash-target to="ability-ki_powers-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">16th-level monk, <Link to="/kipower/diamond_soul">diamond soul</Link></Pair>
<Pair title="Immediate Action">When a targeted spell or spell-like ability fails to overcome the monk's spell resistance from <em>diamond soul,</em> he can spend 2 ki points to send that spell back at its caster as <Link to="/spell/spell_turning">spell turning</Link>.</Pair>
</Ability>
</div>
<Ability id="kipowerelementalfury-elemental-fury-su-fn1-7" icon={["mailed-fist","upgrade"]}>
<Pair single id="kipowerelementalfury-elemental-fury-su-fn1-7"><Link to="/kipower/elemental_fury">⮞</Link> Elemental Fury (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-1.7" id="ability-ki_powers-fake-fn-1.7" data-hash-target to="ability-ki_powers-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">6th-level monk</Pair>
<Pair title="Choice">A monk who selects this ki power must select one type of energy: acid, cold, electricity, or fire. Once this choice is made, it cannot be changed.</Pair>
<Pair title="Swift Action">The monk can expend 1 ki point to imbue his natural attacks with the chosen energy, causing them to deal 1d6 points of damage of the chosen type for a number of rounds equal to 1/2 his monk level.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="kipowerelementalburst-elemental-burst-su-fn1-8" icon={["tornado-discs"]}>
<Pair single id="kipowerelementalburst-elemental-burst-su-fn1-8"><Link to="/kipower/elemental_burst">⮞</Link> Elemental Burst (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-1.8" id="ability-ki_powers-fake-fn-1.8" data-hash-target to="ability-ki_powers-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">18th-level monk, <Link to="/kipower/elemental_fury">elemental fury</Link></Pair>
<Pair title="Ability">A monk with this ability can spend 4 ki points to unleash a gout of energy in a 30-foot cone. Creatures within the cone take 20d6 points of damage of the same type as the monk's <em>elemental fury</em> ki power. A Reflex save (DC = 10 + 1/2 the monk's level + his Wisdom modifier) halves the damage.</Pair>
</Ability>
</div>
<Ability id="kipoweremptybody-empty-body-su-fn1-9" icon={["magic-swirl"]}>
<Pair single id="kipoweremptybody-empty-body-su-fn1-9"><Link to="/kipower/empty_body">⮞</Link> Empty Body (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-1.9" id="ability-ki_powers-fake-fn-1.9" data-hash-target to="ability-ki_powers-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Move-Equivalent Action">A monk with this ki power gains the ability to assume an ethereal state for 1 minute as though using the spell <Link to="/spell/etherealness">etherealness</Link>, using his monk level as his caster level. Using this ability consumes 3 points from the monk's ki pool.</Pair>
<Pair title="Special">This ability affects only the monk and cannot be used to make other creatures ethereal.</Pair>
</Ability>
<Ability id="kipowerfeatherbalance-feather-balance-ex-fn4" icon={["upgrade"]}>
<Pair single id="kipowerfeatherbalance-feather-balance-ex-fn4"><Link to="/kipower/feather_balance">⮞</Link> Feather Balance (Ex) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-4" id="ability-ki_powers-fake-fn-4" data-hash-target to="ability-ki_powers-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Swift Action">A monk with this ability can spend 1 ki point to achieve perfect balance. While this is active, the monk treats any <Link to="/skill/acrobatics">Acrobatics</Link> attempt made to balance as if he had rolled a 20. This ability lasts for 1 minute.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="kipowerlightsteps-light-steps-ex-fn3-2" icon={["upgrade"]}>
<Pair single id="kipowerlightsteps-light-steps-ex-fn3-2" flavor="A monk with this ki power can move effortlessly across nearly any surface."><Link to="/kipower/light_steps">⮞</Link> Light Steps (Ex) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-3.2" id="ability-ki_powers-fake-fn-3.2" data-hash-target to="ability-ki_powers-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">8th-level monk, <Link to="/kipower/feather_balance">feather balance</Link></Pair>
<Pair title="Ability">Whenever the monk activates his <em>feather balance</em> ki power, he can also ignore all <Link to="/rule/difficult_terrain">difficult terrain</Link>. In addition, while active, he can cross any solid surface, even if it would normally not support his weight. This does not allow him to walk on liquids.</Pair>
</Ability>
</div>
<Ability id="kipowerfloatingbreath-floating-breath-su-fn5" icon={["magic-swirl"]}>
<Pair single id="kipowerfloatingbreath-floating-breath-su-fn5"><Link to="/kipower/floating_breath">⮞</Link> Floating Breath (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-5" id="ability-ki_powers-fake-fn-5" data-hash-target to="ability-ki_powers-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Prerequisites">8th-level monk</Pair>
<Pair title="Swift Action">A monk with this ki power can spend 1 ki point to balance on the air, hovering in place, until the end of his next turn. This power does not allow the monk to fly or otherwise move into the air; he must jump or use some other ability to reach his position. This otherwise functions as <Link to="/spell/air_walk">air walk</Link>.</Pair>
</Ability>
<Ability id="kipowerformlessmastery-formless-mastery-ex-fn4-2" icon={["armor-upgrade","upgrade"]}>
<Pair single id="kipowerformlessmastery-formless-mastery-ex-fn4-2" flavor="A monk with this ability varies his styles, never repeating the same move twice and capitalizing on the weaknesses of an opponent's style."><Link to="/kipower/formless_mastery">⮞</Link> Formless Mastery (Ex) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-4.2" id="ability-ki_powers-fake-fn-4.2" data-hash-target to="ability-ki_powers-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level monk</Pair>
<Pair title="Immediate Action">As long as he does not possess any style feat, the monk can spend 1 ki point to gain the following against opponents in the stance of a style feat: a +4 dodge bonus to AC, a +4 circumstance bonus on attack rolls, and a bonus equal to his monk level on damage rolls. These bonuses last until the end of the monk's next turn (or his current turn if he uses this ability on his own turn).</Pair>
<Pair title="Special">The monk can activate this ability and the <Link to="/kipower/furious_defense">furious defense</Link> ki power with the same immediate action for a total cost of 3 ki points.</Pair>
</Ability>
<Ability id="kipowerfreedomofmovement-freedom-of-movement-su-fn6" icon={["magic-swirl"]}>
<Pair single id="kipowerfreedomofmovement-freedom-of-movement-su-fn6"><Link to="/kipower/freedom_of_movement">⮞</Link> Freedom of Movement (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-6" id="ability-ki_powers-fake-fn-6" data-hash-target to="ability-ki_powers-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">8th-level monk</Pair>
<Pair title="Swift Action">A monk with this ability can spend 1 ki point to gain the effects of <Link to="/spell/freedom_of_movement">freedom of movement</Link> for 1 round.</Pair>
</Ability>
<Ability id="kipowerfuriousdefense-furious-defense-ex-fn4-3" icon={["armor-upgrade"]}>
<Pair single id="kipowerfuriousdefense-furious-defense-ex-fn4-3"><Link to="/kipower/furious_defense">⮞</Link> Furious Defense (Ex) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-4.3" id="ability-ki_powers-fake-fn-4.3" data-hash-target to="ability-ki_powers-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level monk</Pair>
<Pair title="Immediate Action">By spending 1 ki point, a monk with this ki power can grant himself a +4 dodge bonus to AC until the end of his next turn.</Pair>
<Pair title="Special">The monk can activate this ability and the <Link to="/kipower/formless_mastery">formless mastery</Link> ki power with the same immediate action for a total cost of 3 ki points.</Pair>
</Ability>
<Ability id="kipowerhighjump-high-jump-ex-fn4-4" icon={["upgrade"]}>
<Pair single id="kipowerhighjump-high-jump-ex-fn4-4"><Link to="/kipower/high_jump">⮞</Link> High Jump (Ex) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-4.4" id="ability-ki_powers-fake-fn-4.4" data-hash-target to="ability-ki_powers-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Passive Ability">A monk with this ki power adds his level as a bonus on all <Link to="/skill/acrobatics">Acrobatics</Link> checks to jump, both for vertical jumps and horizontal jumps. In addition, he always counts as having a running start when attempting Acrobatics checks to jump.</Pair>
<Pair title="Swift Action">By spending 1 ki point, the monk gains a +20 bonus on Acrobatics checks to jump for 1 round.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="kipowerwindjump-wind-jump-su-fn3-3" icon={["stairs-goal"]}>
<Pair single id="kipowerwindjump-wind-jump-su-fn3-3"><Link to="/kipower/wind_jump">⮞</Link> Wind Jump (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-3.3" id="ability-ki_powers-fake-fn-3.3" data-hash-target to="ability-ki_powers-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">8th-level monk, <Link to="/kipower/high_jump">high jump</Link></Pair>
<Pair title="Move-Equivalent Action">A monk with this ki power can spend 1 ki point to grant himself a fly speed (with perfect maneuverability) equal to his base land speed. He must end his movement each round on solid ground (or some other surface that can support his weight) or fall as normal. Once activated, this ability lasts for 1 minute.</Pair>
</Ability>
</div>
<Ability id="kipowerimprovisedweaponproficiency-improvised-weapon-proficiency-ex-su-fn6-2" icon={["upgrade"]}>
<Pair single id="kipowerimprovisedweaponproficiency-improvised-weapon-proficiency-ex-su-fn6-2"><Link to="/kipower/improvised_weapon_proficiency">⮞</Link> Improvised Weapon Proficiency (Ex, Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-6.2" id="ability-ki_powers-fake-fn-6.2" data-hash-target to="ability-ki_powers-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Passive Ability">A monk with this ability does not take a penalty on attack rolls for using an <Link to="/misc/improvised_weapon">improvised weapon</Link>.</Pair>
<Pair title="Ability">By spending 1 ki point, the monk can fight with a <Link to="/misc/broken">broken</Link> weapon without taking any penalties on attack rolls or damage rolls for 1 round.</Pair>
</Ability>
<Ability id="kipowerinsightfulwisdom-insightful-wisdom-su-fn4-5" icon={["shield-reflect"]}>
<Pair single id="kipowerinsightfulwisdom-insightful-wisdom-su-fn4-5"><Link to="/kipower/insightful_wisdom">⮞</Link> Insightful Wisdom (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-4.5" id="ability-ki_powers-fake-fn-4.5" data-hash-target to="ability-ki_powers-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">8th-level monk</Pair>
<Pair title="Immediate Action">A monk with this ability can spend 2 ki points to give another ally within 30 feet just the right word of advice to prevent disaster. If the ally can hear the monk, she can reroll a single attack roll or saving throw. The ally must take the second result, even if it is worse.</Pair>
</Ability>
<Ability id="kipowerkiblocker-ki-blocker-su-fn4-6" icon={["armor-downgrade"]}>
<Pair single id="kipowerkiblocker-ki-blocker-su-fn4-6"><Link to="/kipower/ki_blocker">⮞</Link> Ki Blocker (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-4.6" id="ability-ki_powers-fake-fn-4.6" data-hash-target to="ability-ki_powers-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">10th-level monk</Pair>
<Pair title="Free Action"><p>A monk with this ability can spend 1 ki point before making an unarmed strike against a foe. If the attack hits, the monk can interrupt the target's flow of ki.</p>
<p>If the monk successfully damages the target of his attack, that opponent's cost to activate abilities with ki increases by 1 ki point for 1 hour.</p>
</Pair>
<Pair title="Special">If the monk spends 2 ki points, he can use this ability to affect the target's <em>arcane pool, arcane reservoir, grit points, inspiration,</em> or <em>panache points</em> instead of its ki pool. The effects of this ability do not stack, but multiple hits increase the duration by 1 hour for each hit.</Pair>
</Ability>
<Ability id="kipowerkiguardian-ki-guardian-su-fn4-7" icon={["shield-reflect"]}>
<Pair single id="kipowerkiguardian-ki-guardian-su-fn4-7"><Link to="/kipower/ki_guardian">⮞</Link> Ki Guardian (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-4.7" id="ability-ki_powers-fake-fn-4.7" data-hash-target to="ability-ki_powers-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">6th-level monk</Pair>
<Pair title="Immediate Action"><p>Before he rolls a saving throw against a targeted effect that also targets other allies or an area effect whose area includes other allies, a monk with this ability can spend any number of ki points and designate a number of adjacent allies equal to the number of ki points spent.</p>
<p>The monk rolls one saving throw for each designated ally, using his bonus instead of the ally's. For each successful saving throw, the corresponding ally treats the effect as if that ally had succeeded at the saving throw, and for each saving throw failed, the corresponding ally treats the effect as if that ally had failed the saving throw.</p>
<p>If the monk fails any of the saving throws (including his own original saving throw), the monk treats the effect as if he had failed the saving throw.</p>
</Pair>
</Ability>
<Ability id="kipowerkimeditation-ki-meditation-su-fn6-3" icon={["upgrade"]}>
<Pair single id="kipowerkimeditation-ki-meditation-su-fn6-3"><Link to="/kipower/ki_meditation">⮞</Link> Ki Meditation (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-6.3" id="ability-ki_powers-fake-fn-6.3" data-hash-target to="ability-ki_powers-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/feat/combat_meditation">Combat Meditation</Link></Pair>
<Pair title="Full-Round Action">A monk with this ability can spend 2 ki points to meditate, as if using Combat Meditation. Alternatively, he can spend 4 ki points to meditate as a <strong className="hl">move action</strong> instead.</Pair>
<Pair title="Special">Using these ki points does not count as one of the monk's daily uses of Combat Meditation, but it grants him the usual benefits he would gain from his meditation feats for doing so.</Pair>
</Ability>
<Ability id="kipowerkimetabolism-ki-metabolism-su-fn4-8" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="kipowerkimetabolism-ki-metabolism-su-fn4-8" flavor="A monk with this ability uses his ki to control his metabolism."><Link to="/kipower/ki_metabolism">⮞</Link> Ki Metabolism (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-4.8" id="ability-ki_powers-fake-fn-4.8" data-hash-target to="ability-ki_powers-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Passive Ability">As long as he has at least 1 point remaining in his ki pool, the monk needs to eat and drink only 1/4 as often as normal, needs only 2 hours of sleep each night (including to replenish his ki pool), and can <Link to="/misc/hold_his_breath">hold his breath</Link> for up to 1 hour per point of Constitution.</Pair>
<Pair title="Move-Equivalent Action">He can spend 1 ki point to enter a state of suspended animation, falling unconscious and appearing dead to all senses. At the time he enters this state, he indicates a preset period of time or a triggering condition, after which he awakens.</Pair>
</Ability>
<Ability id="kipowerkimount-ki-mount-su-fn4-9" icon={["remedy"]}>
<Pair single id="kipowerkimount-ki-mount-su-fn4-9"><Link to="/kipower/ki_mount">⮞</Link> Ki Mount (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-4.9" id="ability-ki_powers-fake-fn-4.9" data-hash-target to="ability-ki_powers-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">6th-level monk</Pair>
<Pair title="Standard Action">A monk with this ability can spend 1 ki point to grant 2 <Link to="/rule/temporary_hit_points">temporary hit points</Link> per monk level he possesses to his mount for 1 hour per monk level. As long as the monk and his mount are adjacent or the monk is mounted, the mount shares the benefits of whichever of the <em>AC bonus, evasion, high jump, improved evasion, ki strike, perfect self,</em> and <em>still mind</em> abilities the monk possesses.</Pair>
</Ability>
<Ability id="kipowerkirange-ki-range-su-fn4-10" icon={["bowman","upgrade"]}>
<Pair single id="kipowerkirange-ki-range-su-fn4-10"><Link to="/kipower/ki_range">⮞</Link> Ki Range (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-4.10" id="ability-ki_powers-fake-fn-4.10" data-hash-target to="ability-ki_powers-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Swift Action">A monk with this ability can spend 1 ki point to increase the range increment of any thrown monk weapon by 20 feet.</Pair>
<Pair title="Special">Apply this benefit before doubling the range increment with the <Link to="/feat/far_shot">Far Shot</Link> feat.</Pair>
</Ability>
<Ability id="kipowerkisunder-ki-sunder-ex-fn2-5" icon={["upgrade"]}>
<Pair single id="kipowerkisunder-ki-sunder-ex-fn2-5"><Link to="/kipower/ki_sunder">⮞</Link> Ki Sunder (Ex) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-2.5" id="ability-ki_powers-fake-fn-2.5" data-hash-target to="ability-ki_powers-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Free Action">A monk with this ability can spend 1 ki point when attempting a <Link to="/rule/sunder">sunder</Link> combat maneuver check to add his monk level as a bonus to the damage roll.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="kipowerbarehandblock-bare-hand-block-ex-fn2-6" icon={["mailed-fist"]}>
<Pair single id="kipowerbarehandblock-bare-hand-block-ex-fn2-6"><Link to="/kipower/bare_hand_block">⮞</Link> Bare-Hand Block (Ex) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-2.6" id="ability-ki_powers-fake-fn-2.6" data-hash-target to="ability-ki_powers-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">8th-level monk, <Link to="/kipower/ki_sunder">ki sunder</Link></Pair>
<Pair title="Immediate Action">A monk with this ability can spend 1 ki point when attacked with a manufactured weapon to attempt an unarmed <Link to="/rule/sunder">sunder</Link> combat maneuver check against it. If he successfully sunders the weapon and grants it the <Link to="/misc/broken">broken</Link> condition, the attack deals no damage.</Pair>
<Pair title="Special">He can spend an additional 1 ki point when using this ability to activate <em>ki sunder</em> as a <strong className="hl">free action</strong>.</Pair>
</Ability>
</div>
<Ability id="kipowerkivisions-ki-visions-su-fn4-11" icon={["stairs-goal"]}>
<Pair single id="kipowerkivisions-ki-visions-su-fn4-11" flavor="A monk with this ability often sees visions of spirits or hears the voice of his departed mentor in his dreams."><Link to="/kipower/ki_visions">⮞</Link> Ki Visions (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-4.11" id="ability-ki_powers-fake-fn-4.11" data-hash-target to="ability-ki_powers-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">10th-level monk</Pair>
<Pair title="Ability">On any given night during which the monk dreams, he can use this ability to gain the benefits of a <Link to="/spell/divination">divination</Link>. If he does, he spends 2 ki points from the next day's total.</Pair>
</Ability>
<Ability id="kipoweronetouch-one-touch-ex-fn3-4" icon={["magic-palm"]}>
<Pair single id="kipoweronetouch-one-touch-ex-fn3-4"><Link to="/kipower/one_touch">⮞</Link> One Touch (Ex) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-3.4" id="ability-ki_powers-fake-fn-3.4" data-hash-target to="ability-ki_powers-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">12th-level monk</Pair>
<Pair title="Standard Action">As long as he has at least 1 point remaining in his ki pool, a monk with this power can make an unarmed strike against a foe as a touch attack. He adds 1/2 his monk level as a bonus on the damage roll.</Pair>
<Pair title="Special">He can spend 1 ki point to double this bonus for that attack.</Pair>
</Ability>
<Ability id="kipowerqinggongpower-qinggong-power-su-fn3-5" icon={["stairs-goal"]}>
<Pair single id="kipowerqinggongpower-qinggong-power-su-fn3-5"><Link to="/kipower/qinggong_power">⮞</Link> Qinggong Power (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-3.5" id="ability-ki_powers-fake-fn-3.5" data-hash-target to="ability-ki_powers-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">A monk with this power selects any of the <Link to="/arc-monk/qinggong_monk">qinggong monk</Link> ki powers for which he qualifies based on his monk level.</Pair>
<Pair title="Special">A monk can select this ability multiple times. Each time, he must select a different qinggong monk ki power.</Pair>
</Ability>
<Ability id="kipowerquiveringpalm-quivering-palm-su-fn3-6" icon={["armor-downgrade"]}>
<Pair single id="kipowerquiveringpalm-quivering-palm-su-fn3-6"><Link to="/kipower/quivering_palm">⮞</Link> Quivering Palm (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-3.6" id="ability-ki_powers-fake-fn-3.6" data-hash-target to="ability-ki_powers-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">16th-level monk</Pair>
<Pair title="Standard Action"><p>A monk can set up vibrations within the body of another creature that can thereafter be fatal if the monk so desires. Using this ability costs 4 ki points, and the monk must announce his intent to use this ability (and spend the ki points) before making the attack roll.</p>
<p>Creatures immune to critical hits cannot be affected. Otherwise, if the attack hits and the target takes damage from the blow, the <em>quivering palm</em> attack succeeds. Thereafter, the monk can try to slay the victim at any time within a number of days equal to his monk level. To make such an attempt, the monk merely wills the target to die (a <strong className="hl">free action</strong>); unless the target succeeds at a Fortitude saving throw (DC = 10 + 1/2 the monk's level + the monk's Wisdom modifier), it dies.</p>
<p>If the saving throw is successful, the target is no longer in danger from that particular <em>quivering palm</em> attack, but it can still be affected by another one at a later time.</p>
</Pair>
<Pair title="Special">A monk can have no more than one <em>quivering palm</em> in effect at one time. If a monk uses <em>quivering palm</em> while another is still in effect, the previous one is negated.</Pair>
</Ability>
<Ability id="kipowerracingcurrent-racing-current-su-fn5-2" icon={["magic-swirl"]}>
<Pair single id="kipowerracingcurrent-racing-current-su-fn5-2"><Link to="/kipower/racing_current">⮞</Link> Racing Current (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-5.2" id="ability-ki_powers-fake-fn-5.2" data-hash-target to="ability-ki_powers-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Prerequisites">6th-level monk</Pair>
<Pair title="Move-Equivalent Action">A monk with this ki power can create a wave to help him maneuver allies upon the battlefield, as if using the spell <Link to="/spell/slipstream">slipstream</Link>. Using this ability costs 2 ki points, and the ability remains in effect for 1 minute.</Pair>
</Ability>
<Ability id="kipowerslowfall-slow-fall-su-fn3-7" icon={["armor-upgrade"]}>
<Pair single id="kipowerslowfall-slow-fall-su-fn3-7"><Link to="/kipower/slow_fall">⮞</Link> Slow Fall (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-3.7" id="ability-ki_powers-fake-fn-3.7" data-hash-target to="ability-ki_powers-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">A monk within arm's reach of a wall can use it to slow his descent by expending 1 ki point. When he uses this ability, he takes no damage from the fall (as if using <Link to="/spell/feather_fall">feather fall</Link>), but he must be adjacent to a wall for the length of the fall (although this can be used to reduce the damage from a fall if only part of it is adjacent to a wall).</Pair>
</Ability>
<Ability id="kipowersuddenspeed-sudden-speed-su-fn3-8" icon={["upgrade"]}>
<Pair single id="kipowersuddenspeed-sudden-speed-su-fn3-8"><Link to="/kipower/sudden_speed">⮞</Link> Sudden Speed (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-3.8" id="ability-ki_powers-fake-fn-3.8" data-hash-target to="ability-ki_powers-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Swift Action">A monk with this ki power can spend 1 ki point to grant himself a sudden burst of speed. This increases the monk's base land speed by 30 feet for 1 minute.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="kipowerbranchrunner-branch-runner-ex-su-fn7" icon={["upgrade"]}>
<Pair single id="kipowerbranchrunner-branch-runner-ex-su-fn7"><Link to="/kipower/branch_runner">⮞</Link> Branch Runner (Ex, Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-7" id="ability-ki_powers-fake-fn-7" data-hash-target to="ability-ki_powers-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/kipower/sudden_speed">Sudden speed</Link></Pair>
<Pair title="Passive Ability">A monk with this ability adds half the base speed bonus from his <em>fast movement</em> ability to his racial climb speed. In addition, when he uses the <em>sudden speed</em> ki power, he adds the base speed bonus from that ki power to his racial climb speed for 1 round.</Pair>
</Ability>
<Ability id="kipowerkihurricane-ki-hurricane-ex-fn4-12" icon={["stairs-goal","mailed-fist"]}>
<Pair single id="kipowerkihurricane-ki-hurricane-ex-fn4-12"><Link to="/kipower/ki_hurricane">⮞</Link> Ki Hurricane (Ex) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-4.12" id="ability-ki_powers-fake-fn-4.12" data-hash-target to="ability-ki_powers-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">10th-level monk, <Link to="/kipower/sudden_speed">sudden speed</Link></Pair>
<Pair title="Full-Round Action">A monk with this ability can move up to twice his speed. At any point in that movement, the monk can spend 1 ki point to make the first attack in his <em>flurry of blows.</em> He can later spend another ki point to make the next attack in his <em>flurry of blows,</em> and so on, until he either stops spending ki points or has exhausted all the attacks from his <em>flurry of blows.</em></Pair>
</Ability>
</div>
<Ability id="kipowerwatersprint-water-sprint-su-fn3-9" icon={["magic-swirl"]}>
<Pair single id="kipowerwatersprint-water-sprint-su-fn3-9"><Link to="/kipower/water_sprint">⮞</Link> Water Sprint (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-3.9" id="ability-ki_powers-fake-fn-3.9" data-hash-target to="ability-ki_powers-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">6th-level monk</Pair>
<Pair title="Swift Action">A monk with this ki power can spend 1 ki point to gain the ability to walk on water, as if under the effects of <Link to="/spell/water_walk">water walk</Link>. Once activated, this ability lasts for 1 minute per monk level.</Pair>
</Ability>
<Ability id="kipowerwholenessofbody-wholeness-of-body-su-fn3-10" icon={["remedy"]}>
<Pair single id="kipowerwholenessofbody-wholeness-of-body-su-fn3-10" flavor="A monk with this ki power can heal his own wounds."><Link to="/kipower/wholeness_of_body">⮞</Link> Wholeness of Body (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-3.10" id="ability-ki_powers-fake-fn-3.10" data-hash-target to="ability-ki_powers-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">By spending 2 ki points, he can heal an amount of damage equal to 1d8 + his monk level.</Pair>
</Ability>
<Ability id="kipowerzephyrblow-zephyr-blow-su-fn5-3" icon={["magic-swirl"]}>
<Pair single id="kipowerzephyrblow-zephyr-blow-su-fn5-3"><Link to="/kipower/zephyr_blow">⮞</Link> Zephyr Blow (Su) <sup><InnerLink showBacklink="backlink-ability-ki_powers-fake-fn-5.3" id="ability-ki_powers-fake-fn-5.3" data-hash-target to="ability-ki_powers-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Standard Action">By spending 1 ki point, a monk with this power can disrupt the wind and create a sharp blast of air, as if using the spell <Link to="/spell/gust_of_wind">gust of wind</Link>. The monk's caster level for this effect is equal to his monk level.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-ki_powers-label">Footnotes</h3><ol>
<li id="ability-ki_powers-fake-fn-1-target"><p><Link to="/source/pathfinder_unchained">Pathfinder Unchained</Link> pg. 16 <InnerLink aria-label="Back to reference 1" id="backlink-ability-ki_powers-fake-fn-1" data-hash-target to="ability-ki_powers-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ki_powers-fake-fn-1.2" data-hash-target to="ability-ki_powers-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ki_powers-fake-fn-1.3" data-hash-target to="ability-ki_powers-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ki_powers-fake-fn-1.4" data-hash-target to="ability-ki_powers-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ki_powers-fake-fn-1.5" data-hash-target to="ability-ki_powers-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ki_powers-fake-fn-1.6" data-hash-target to="ability-ki_powers-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ki_powers-fake-fn-1.7" data-hash-target to="ability-ki_powers-fake-fn-1.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ki_powers-fake-fn-1.8" data-hash-target to="ability-ki_powers-fake-fn-1.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ki_powers-fake-fn-1.9" data-hash-target to="ability-ki_powers-fake-fn-1.9">↩<sup>9</sup></InnerLink></p></li>
<li id="ability-ki_powers-fake-fn-2-target"><p><Link to="/source/martial_arts_handbook">Martial Arts Handbook</Link> pg. 20 <InnerLink aria-label="Back to reference 2" id="backlink-ability-ki_powers-fake-fn-2" data-hash-target to="ability-ki_powers-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-ki_powers-fake-fn-2.2" data-hash-target to="ability-ki_powers-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-ki_powers-fake-fn-2.3" data-hash-target to="ability-ki_powers-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-ki_powers-fake-fn-2.4" data-hash-target to="ability-ki_powers-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-ki_powers-fake-fn-2.5" data-hash-target to="ability-ki_powers-fake-fn-2.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-ki_powers-fake-fn-2.6" data-hash-target to="ability-ki_powers-fake-fn-2.6">↩<sup>6</sup></InnerLink></p></li>
<li id="ability-ki_powers-fake-fn-3-target"><p>Pathfinder Unchained pg. 18 <InnerLink aria-label="Back to reference 3" id="backlink-ability-ki_powers-fake-fn-3" data-hash-target to="ability-ki_powers-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-ki_powers-fake-fn-3.2" data-hash-target to="ability-ki_powers-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-ki_powers-fake-fn-3.3" data-hash-target to="ability-ki_powers-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-ki_powers-fake-fn-3.4" data-hash-target to="ability-ki_powers-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-ki_powers-fake-fn-3.5" data-hash-target to="ability-ki_powers-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-ki_powers-fake-fn-3.6" data-hash-target to="ability-ki_powers-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-ki_powers-fake-fn-3.7" data-hash-target to="ability-ki_powers-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-ki_powers-fake-fn-3.8" data-hash-target to="ability-ki_powers-fake-fn-3.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-ki_powers-fake-fn-3.9" data-hash-target to="ability-ki_powers-fake-fn-3.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-ki_powers-fake-fn-3.10" data-hash-target to="ability-ki_powers-fake-fn-3.10">↩<sup>10</sup></InnerLink></p></li>
<li id="ability-ki_powers-fake-fn-4-target"><p>Pathfinder Unchained pg. 17 <InnerLink aria-label="Back to reference 4" id="backlink-ability-ki_powers-fake-fn-4" data-hash-target to="ability-ki_powers-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-ki_powers-fake-fn-4.2" data-hash-target to="ability-ki_powers-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-ki_powers-fake-fn-4.3" data-hash-target to="ability-ki_powers-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-ki_powers-fake-fn-4.4" data-hash-target to="ability-ki_powers-fake-fn-4.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-ki_powers-fake-fn-4.5" data-hash-target to="ability-ki_powers-fake-fn-4.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-ki_powers-fake-fn-4.6" data-hash-target to="ability-ki_powers-fake-fn-4.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-ki_powers-fake-fn-4.7" data-hash-target to="ability-ki_powers-fake-fn-4.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-ki_powers-fake-fn-4.8" data-hash-target to="ability-ki_powers-fake-fn-4.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-ki_powers-fake-fn-4.9" data-hash-target to="ability-ki_powers-fake-fn-4.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-ki_powers-fake-fn-4.10" data-hash-target to="ability-ki_powers-fake-fn-4.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-ki_powers-fake-fn-4.11" data-hash-target to="ability-ki_powers-fake-fn-4.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-ki_powers-fake-fn-4.12" data-hash-target to="ability-ki_powers-fake-fn-4.12">↩<sup>12</sup></InnerLink></p></li>
<li id="ability-ki_powers-fake-fn-5-target"><p><Link to="/source/wilderness_origins">Wilderness Origins</Link> pg. 31 <InnerLink aria-label="Back to reference 5" id="backlink-ability-ki_powers-fake-fn-5" data-hash-target to="ability-ki_powers-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-ki_powers-fake-fn-5.2" data-hash-target to="ability-ki_powers-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-ki_powers-fake-fn-5.3" data-hash-target to="ability-ki_powers-fake-fn-5.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-ki_powers-fake-fn-6-target"><p><Link to="/source/blood_of_the_beast">Blood of the Beast</Link> pg. 31 <InnerLink aria-label="Back to reference 6" id="backlink-ability-ki_powers-fake-fn-6" data-hash-target to="ability-ki_powers-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-ki_powers-fake-fn-6.2" data-hash-target to="ability-ki_powers-fake-fn-6.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-ki_powers-fake-fn-6.3" data-hash-target to="ability-ki_powers-fake-fn-6.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-ki_powers-fake-fn-7-target"><p>Blood of the Beast pg. 30 <InnerLink aria-label="Back to reference 7" id="backlink-ability-ki_powers-fake-fn-7" data-hash-target to="ability-ki_powers-fake-fn-7">↩</InnerLink></p></li>
</ol></section></div>};
const _magus_arcana = {title: "Magus Arcana", topLink: ["Magus","class/magus"], jsx: <><h2 id="ability-magus_arcana-magus-arcana">Magus Arcana</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 10</Link><br/>As he gains levels, a magus learns arcane secrets tailored to his specific way of blending martial puissance and magical skill. Starting at 3rd level, a magus gains one magus arcana. He gains an additional magus arcana for every three levels of magus attained after 3rd level. Unless specifically noted in a magus arcana's description, a magus cannot select a particular magus arcana more than once. Magus arcana that affect spells can only be used to modify spells from the <Link to="/main/magus_spell">magus spell list</Link> unless otherwise noted.</p>
<DisplayTable table={{"id":"magus arcana","columns":[{"header":"Arcana","align":"start","link":"arcana"},{"header":"Level","type":"num"},{"header":"Description","align":"start"}],"data":[[["Accurate Strike","accurate_strike"],{"sort":9,"data":"9th"},"Your melee attacks become melee touch attacks."],[["Aquatic Agility","aquatic_agility"],{"sort":6,"data":"6th"},"Gain water breathing and ignore the effects of rough water."],[["Arcane Accuracy","arcane_accuracy"],{"sort":3,"data":"3rd"},"Gain an insight bonus to attack."],[["Arcane Cloak","arcane_cloak"],{"sort":3,"data":"3rd"},"Add your Intelligence bonus to Stealth checks and Bluff checks to hide."],[["Arcane Dealer","arcane_dealer"],{"sort":6,"data":"6th"},"Gain the ‹feat/Deadly Dealer› feat."],[["Arcane Deed","arcane_deed"],{"sort":3,"data":"3rd"},"Learn a swashbuckler deed."],[["Arcane Edge","arcane_edge"],{"sort":9,"data":"9th"},"Add bleed damage to an attack."],[["Arcane Redoubt","arcane_redoubt"],{"sort":3,"data":"3rd"},"Add your shield bonus as a touch AC bonus."],[["Arcane Redoubt, Greater","arcane_redoubt_greater"],{"sort":12,"data":"12th"},"Gain evasion when you use *arcane redoubt.*"],[["Arcane Scent","arcane_scent"],{"sort":3,"data":"3rd"},"Gain scent vs spellcasting creatures."],[["Bane Blade","bane_blade"],{"sort":15,"data":"15th"},"Add *bane* to a weapon you wield."],[["Book-Bound","book_bound"],{"sort":3,"data":"3rd"},"Bonus to concentration while holding your spellbook."],[["Broad Study","broad_study"],{"sort":6,"data":"6th"},"Use spellstrike and spell combat with spells from another class."],[["Circle of Order","circle_of_order"],{"sort":9,"data":"9th"},"Dodge bonus vs chaotic creatures and effects."],[["Close Range","close_range"],{"sort":3,"data":"3rd"},"Deliver ray spells as melee touch spells and with spellstrike."],[["Concentrate","concentrate"],{"sort":3,"data":"3rd"},"Reroll a concentration check."],[["Critical Strike","critical_strike"],{"sort":12,"data":"12th"},"Add a touch spell to a critical hit."],[["Dark Shifter","dark_shifter"],{"sort":6,"data":"6th"},"Change the target of an ongoing spell effect with the darkness descriptor."],[["Devoted Blade","devoted_blade"],{"sort":12,"data":"12th"},"Add the anarchic, axiomatic, holy, or unholy special ability to your weapon."],[["Dispelling Strike","dispelling_strike"],{"sort":9,"data":"9th"},"Your weapon can dispel magic."],[["Disruptive","disruptive"],{"sort":6,"data":"6th"},"Gain ‹feat/Disruptive› as a bonus feat."],[["Distant Spellstrike","distant_spellstrike"],{"sort":12,"data":"12th"},"Increase the range of a spell to your ranged weapon's range."],[["Divinatory Strike","divinatory_strike"],{"sort":3,"data":"3rd"},"Gain deep knowledge about a creature you critically hit."],[["Empowered Magic","empowered_magic"],{"sort":6,"data":"6th"},"Use ‹feat/Empower Spell› for free once per day."],[["Enduring Blade","enduring_blade"],{"sort":6,"data":"6th"},"Your weapon enhancements can last longer than normal."],[["Familiar","familiar"],{"sort":3,"data":"3rd"},"Gain a familiar, as a ‹class/wizard›."],[["Flamboyant Arcana","flamboyant_arcana"],{"sort":3,"data":"3rd"},"Gain the derring-do and opportune parry and riposte deeds from the swashbuckler's list of deeds."],[["Ghost Blade","ghost_blade"],{"sort":9,"data":"9th"},"You can add brilliant energy and ghost touch special abilities to your weapons."],[["Hasted Assault","hasted_assault"],{"sort":9,"data":"9th"},"Become ‹spell/haste«d› temporarily."],[["Intuitive Protection","intuitive_protection"],{"sort":3,"data":"3rd"},"You can protect yourself if you identify a summoning."],[["Ki Arcana","ki_arcana"],{"sort":6,"data":"6th"},"Use your arcane pool as ki points, and vice versa."],[["Lingering Pain","lingering_pain"],{"sort":3,"data":"3rd"},"The pain of your attack lingers, disrupting spellcasting."],[["Maneuver Mastery","maneuver_mastery"],{"sort":3,"data":"3rd"},"Use your magus level as your CMB for one maneuver."],[["Maximized Magic","maximized_magic"],{"sort":12,"data":"12th"},"Use ‹feat/Maximize Spell› for free once per day."],[["Natural Spell Combat","natural_spell_combat"],{"sort":3,"data":"3rd"},"Use spell combat with a natural attack."],[["Planar Hunter","planar_hunter"],{"sort":9,"data":"9th"},"You can add the planar and phase locking special abilities to your weapons."],[["Pool Ray","pool_ray"],{"sort":3,"data":"3rd"},"Imbue your weapon with elemental power."],[["Pool Strike","pool_strike"],{"sort":3,"data":"3rd"},"Imbue your hand with elemental power."],[["Pool Strike, Arcing","pool_strike_arcing"],{"sort":12,"data":"12th"},"Hit more creatures with *pool strike.*"],[["Pool Strike, Clinging","pool_strike_clinging"],{"sort":9,"data":"9th"},"Your *pool strike* hits again the next round."],[["Pool Strike, Thunderous","pool_strike_thunderous"],{"sort":6,"data":"6th"},"Your *pool strike* causes thunder damage and can deafen."],[["Prescient Attack","prescient_attack"],{"sort":6,"data":"6th"},"A creature you hit becomes easier to hit again."],[["Prescient Defense","prescient_defense"],{"sort":3,"data":"3rd"},"Gain greater defense against a creature you hit."],[["Quickened Magic","quickened_magic"],{"sort":15,"data":"15th"},"Use ‹feat/Quicken Spell› for free once per day."],[["Rakshasa's Fortune","rakshasas_fortune"],{"sort":9,"data":"9th"},"Gain a bonus (or penalty) from a Harrow card when you cast a polymorph spell on yourself."],[["Ranger Trap","ranger_trap"],{"sort":10,"data":"10th"},"Learn a ‹ability/ranger trap<s›."],[["Reach Magic","reach_magic"],{"sort":3,"data":"3rd"},"Use ‹feat/Reach Spell› for free once per day."],[["Reach Spellstrike","reach_spellstrike"],{"sort":9,"data":"9th"},"Ranged spellstrike increases a touch spell's range to \"Close\"."],[["Reflection","reflection"],{"sort":15,"data":"15th"},"Reflect a spell back at its caster."],[["Rod Mastery","rod_mastery"],{"sort":3,"data":"3rd"},"Use your intelligence modifier for the DCs of spells from rods you use."],[["Rod Wielder","rod_wielder"],{"sort":3,"data":"3rd"},"Add your Intelligence bonus against spell resistance rolls when you use a rod."],[["Scroll Mastery","scroll_mastery"],{"sort":6,"data":"6th"},"Use your intelligence modifier for the DCs of scrolls you use."],[["Silent Magic","silent_magic"],{"sort":3,"data":"3rd"},"Use ‹feat/Silent Spell› for free once per day."],[["Spell Blending","spell_blending"],{"sort":3,"data":"3rd"},"Learn a wizard spell."],[["Spell Shield","spell_shield"],{"sort":3,"data":"3rd"},"Gain an instant shield bonus."],[["Spell Trickery","spell_trickery"],{"sort":12,"data":"12th"},"Add an illusion or enchantment to a dirty trick combat maneuver."],[["Spellbreaker","spellbreaker"],{"sort":9,"data":"9th"},"Gain ‹feat/Spellbreaker› as a bonus feat."],[["Spell-Scars","spell_scars"],{"sort":3,"data":"3rd"},"Gain the ability to use spell-scars."],[["Still Magic","still_magic"],{"sort":3,"data":"3rd"},"Use ‹feat/Still Spell› for free once per day."],[["Tabris's Step","tabriss_step"],{"sort":3,"data":"3rd"},"Gain the effects of ‹spell/water walk›."],[["Throwing Magus","throwing_magus"],{"sort":3,"data":"3rd"},"Your weapon can gain the returning and throwing abilities, and you regain pool points when you hit."],[["Vision-Clouding Strike","vision_clouding_strike"],{"sort":9,"data":"9th"},"Your weapon can cloud the vision of your targets."],[["Wand Mastery","wand_mastery"],{"sort":3,"data":"3rd"},"Use your intelligence modifier for the DCs of wands you use."],[["Wand Wielder","wand_wielder"],{"sort":3,"data":"3rd"},"Use a wand or staff instead of casting a spell in *spell combat.*"]],"initialColumn":0}} />
</>};
const _major_hexes = {title: "Major Hexes", topLink: ["Witch","class/witch"], jsx: <div className="compilation"><h2 id="ability-major_hexes-major-hexes">Major Hexes</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link><br/>Starting at 10th level, and every two levels thereafter, a witch can choose one of the following major hexes whenever she could select a new <Link to="/ability/hexes">hex</Link>.</p>
<hr/>
<Ability id="hexagony-agony-su-fn1" icon={["armor-downgrade"]}>
<Pair single id="hexagony-agony-su-fn1"><Link to="/hex/agony">⮞</Link> Agony (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-1" id="ability-major_hexes-fake-fn-1" data-hash-target to="ability-major_hexes-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">With a quick incantation, a witch can place this hex on one creature within 60 feet, causing them to suffer intense pain. The target is <Link to="/misc/nauseated">nauseated</Link> for a number of rounds equal to the witch's level. A Fortitude save negates this effect. If the saving throw is failed, the target can attempt a new save each round to end the effect.</Pair>
<Pair title="Special">Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
<Ability id="hexanimalskin-animal-skin-fn2" icon={["magic-swirl"]}>
<Pair single id="hexanimalskin-animal-skin-fn2"><Link to="/hex/animal_skin">⮞</Link> Animal Skin <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-2" id="ability-major_hexes-fake-fn-2" data-hash-target to="ability-major_hexes-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">The witch can become any animal of a size from Tiny to Large whose skin she wears. This ability is similar to <Link to="/spell/beast_shape_ii">beast shape II</Link>, except she takes on the appearance of the specific individual from which the skin came.</Pair>
</Ability>
<Ability id="hexbeasteye-beast-eye-su-fn3" icon={["magic-swirl"]}>
<Pair single id="hexbeasteye-beast-eye-su-fn3"><Link to="/hex/beast_eye">⮞</Link> Beast Eye (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-3" id="ability-major_hexes-fake-fn-3" data-hash-target to="ability-major_hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Usage">1 minute/day per witch level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Ability"><p>The witch can project her senses into an animal within 100 feet, sensing whatever it senses. She cannot control the animal's actions. She can project her senses from that animal to another within 100 feet of it as a <strong className="hl">standard action</strong>, and can continue to make these sensory leaps, potentially viewing things very far from her actual location. She may return her senses to her own body as a <strong className="hl">free action</strong>.</p>
<p>Normal animals get no saving throw against this ability, but animal companions, paladin mounts, and similar unusual animals may resist with a Will save; the witch may use this ability on her own familiar as if it were an animal.</p>
</Pair>
<Pair title="Special">If the witch has the <Link to="/hex/coven">coven</Link> hex, all other witches within 10 feet of her who also have the <em>coven</em> hex can see through this animal at will, although the acting witch still controls the ability.</Pair>
</Ability>
<Ability id="hexbeastsgift-beasts-gift-su-fn4" icon={["mailed-fist"]}>
<Pair single id="hexbeastsgift-beasts-gift-su-fn4" flavor="The witch can use her magic to grant her allies ferocious animal abilities."><Link to="/hex/beasts_gift">⮞</Link> Beast's Gift (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-4" id="ability-major_hexes-fake-fn-4" data-hash-target to="ability-major_hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The witch can partially transform a willing ally, granting him natural attacks for a number of minutes equal to the witch's level.</Pair>
<Pair title="Choice">Choose one: the creature gains one bite attack that deals 1d8 points of damage and one secondary attack of the witch's choice that deals 1d6 points of damage, or the creature gains two claw attacks that deal 1d4 points of damage each.</Pair>
<Pair title="Special">These attacks follow the standard rules for <Link to="/umr/natural_attacks">natural attacks</Link>.</Pair>
</Ability>
<Ability id="hexcookpeople-cook-people-su-fn3-2" icon={["magic-swirl"]}>
<Pair single id="hexcookpeople-cook-people-su-fn3-2" flavor="The witch can create fabulous spells by cooking an intelligent humanoid creature in her cauldron, either alive or dead."><Link to="/hex/cook_people">⮞</Link> Cook People (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-3.2" id="ability-major_hexes-fake-fn-3.2" data-hash-target to="ability-major_hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/hex/cauldron">Cauldron</Link></Pair>
<Pair title="Ability"><p>Using this hex creates one meal or serving of food of the witch's choice, typically a delicious stew or a dough suitable for cookies, pastries, or other desserts. Cooking the victim takes 1 hour.</p>
<p>Eating the food provides one of the following benefits for 1 hour: <Link to="/spell/age_resistance">age resistance</Link>, <Link to="/spell/bears_endurance">bear's endurance</Link>, <Link to="/spell/bulls_strength">bull's strength</Link>, <Link to="/spell/cats_grace">cat's grace</Link>, <Link to="/spell/eagles_splendor">eagle's splendor</Link>, <Link to="/spell/foxs_cunning">fox's cunning</Link>, <Link to="/spell/neutralize_poison">neutralize poison</Link> (instantaneous) <Link to="/spell/owls_wisdom">owl's wisdom</Link>, <Link to="/spell/remove_disease">remove disease</Link> (instantaneous).</p>
<p>Alternatively, the witch can shape the dough into a Small, human-like creature, animating it as a <Link to="/monster/homunculus">homunculus</Link> for 1 hour.</p>
</Pair>
<Pair title="Special">Using this hex or knowingly eating its food is an evil act.</Pair>
</Ability>
<Ability id="hexdeliciousfright-delicious-fright-fn2-2" icon={["armor-downgrade","upgrade","armor-upgrade"]}>
<Pair single id="hexdeliciousfright-delicious-fright-fn2-2" flavor="The witch can feed on the fear of her victim."><Link to="/hex/delicious_fright">⮞</Link> Delicious Fright <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-2.2" id="ability-major_hexes-fake-fn-2.2" data-hash-target to="ability-major_hexes-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">The target of this hex becomes <Link to="/misc/shaken">shaken</Link> for a number of rounds equal to 3 + the witch's Intelligence modifier. As long as the witch remains within 30 feet of her target, she gains a +1 morale bonus on attack rolls and a +1 morale bonus on saving throws as long as this effect persists.</Pair>
<Pair title="Special">A successful Will save reduces the duration of this hex to 1 round. This is a mind-affecting fear effect.</Pair>
</Ability>
<Ability id="hexdrugged-drugged-su-fn4-2" icon={["armor-downgrade"]}>
<Pair single id="hexdrugged-drugged-su-fn4-2"><Link to="/hex/drugged">⮞</Link> Drugged (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-4.2" id="ability-major_hexes-fake-fn-4.2" data-hash-target to="ability-major_hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The witch can combine her magic with her poisons to weaken her enemies' minds. When the witch creates a poison, she can require the target of the poison to attempt a Will save rather than a Fortitude save. The witch must use this hex when she crafts the poison, and once used, the hex can't be undone without remaking the poison.</Pair>
</Ability>
<Ability id="hexfalsehospitality-false-hospitality-su-fn4-3" icon={["magic-swirl"]}>
<Pair single id="hexfalsehospitality-false-hospitality-su-fn4-3" flavor="The witches of Iblydos are known for greeting travelers with warmth only to reveal their powers once their enemies have lowered their defenses."><Link to="/hex/false_hospitality">⮞</Link> False Hospitality (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-4.3" id="ability-major_hexes-fake-fn-4.3" data-hash-target to="ability-major_hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">A witch can use this hex to gain the benefits of <Link to="/spell/glibness">glibness</Link> with a caster level equal to the witch's level. This hex can be used once per day.</Pair>
</Ability>
<Ability id="hexhagseye-hags-eye-su-fn1-2" icon={["magic-swirl"]}>
<Pair single id="hexhagseye-hags-eye-su-fn1-2"><Link to="/hex/hags_eye">⮞</Link> Hag's Eye (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-1.2" id="ability-major_hexes-fake-fn-1.2" data-hash-target to="ability-major_hexes-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Usage">1 minute/day per witch level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Ability">A witch with this hex can create a magic sensor that she can see through. This functions as per the spell <Link to="/spell/arcane_eye">arcane eye</Link>. If the witch has the <Link to="/hex/coven">coven</Link> hex, all other witches within 10 feet who also have the <em>coven</em> hex can see through this sensor as well, although the witch that created it still controls it.</Pair>
</Ability>
<Ability id="hexharrowingcurse-harrowing-curse-su-fn5" icon={["armor-downgrade"]}>
<Pair single id="hexharrowingcurse-harrowing-curse-su-fn5"><Link to="/hex/harrowing_curse">⮞</Link> Harrowing Curse (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-5" id="ability-major_hexes-fake-fn-5" data-hash-target to="ability-major_hexes-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">The witch can curse a target creature by touching it with a card randomly drawn from a <Link to="/eq-misc/harrow_deck">harrow deck</Link> she owns. The target is affected as if by the spell <Link to="/spell/bestow_curse">bestow curse</Link> using the witch's caster level, except that the witch can decrease only the ability score that corresponds to the suit of the card drawn.</Pair>
<Pair title="At 15th Level">This hex acts as a <Link to="/spell/major_curse">major curse</Link> spell.</Pair>
<Pair title="Special">Whether or not the save is successful, a creature cannot be targeted by this hex more than once in 24 hours. A witch with the <Link to="/arc-witch/cartomancer">cartomancer</Link> archetype can combine this hex with her spell deck's deliver touch spell ability.</Pair>
</Ability>
<Ability id="hexhiddenhome-hidden-home-sp-fn3-3" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="hexhiddenhome-hidden-home-sp-fn3-3"><Link to="/hex/hidden_home">⮞</Link> Hidden Home (Sp) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-3.3" id="ability-major_hexes-fake-fn-3.3" data-hash-target to="ability-major_hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The witch can conceal or disguise her home and the area around it as if using <Link to="/spell/mirage_arcana">mirage arcana</Link>. Before using the hex, she must spend 1 day pacing out the border of an area that measures roughly 40,000 square feet (approximately 200 feet by 200 feet) to define her home territory. Thereafter, she can use the hex to change the appearance of that area as a <strong className="hl">standard action</strong> as long as she is within the area. The illusion persists until the witch changes or dismisses it.</Pair>
<Pair title="Special">For the purpose of this ability, a witch can only have one "home" at a time.</Pair>
</Ability>
<Ability id="hexhoarfrost-hoarfrost-su-fn3-4" icon={["armor-downgrade"]}>
<Pair single id="hexhoarfrost-hoarfrost-su-fn3-4"><Link to="/hex/hoarfrost">⮞</Link> Hoarfrost (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-3.4" id="ability-major_hexes-fake-fn-3.4" data-hash-target to="ability-major_hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The target is rimed with a shell of frost needles that slowly work their way into its flesh (Fortitude negates). The target turns pale and blue, and takes 1 point of <Link to="/rule/constitution_damage">Constitution damage</Link> per minute until it dies, saves (once per minute), or is cured. <Link to="/spell/break_enchantment">Break enchantment</Link>, <Link to="/spell/dispel_magic">dispel magic</Link>, <Link to="/spell/remove_curse">remove curse</Link>, and similar spells end the effect.</Pair>
<Pair title="Special">If the target saves, it is immune to this hex for 1 day. This is a cold effect.</Pair>
</Ability>
<Ability id="hexicetomb-ice-tomb-su-fn3-5" icon={["armor-downgrade"]}>
<Pair single id="hexicetomb-ice-tomb-su-fn3-5"><Link to="/hex/ice_tomb">⮞</Link> Ice Tomb (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-3.5" id="ability-major_hexes-fake-fn-3.5" data-hash-target to="ability-major_hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability"><p>A storm of ice and freezing wind envelops the target, which takes 3d8 points of cold damage (Fortitude half). If the target fails its save, it is <Link to="/rule/paralyzed">paralyzed</Link> and <Link to="/misc/unconscious">unconscious</Link> but does not need to eat or breathe while the ice lasts.</p>
<p>The ice has 20 hit points; destroying the ice frees the creature, which is <Link to="/misc/staggered">staggered</Link> for 1d4 rounds after being released.</p>
</Pair>
<Pair title="Special">Whether or not the target's saving throw is successful, it cannot be the target of this hex again for 1 day.</Pair>
</Ability>
<Ability id="hexinfectedwounds-infected-wounds-su-fn3-6" icon={["armor-downgrade"]}>
<Pair single id="hexinfectedwounds-infected-wounds-su-fn3-6"><Link to="/hex/infected_wounds">⮞</Link> Infected Wounds (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-3.6" id="ability-major_hexes-fake-fn-3.6" data-hash-target to="ability-major_hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The target's wounds become infected (Fortitude negates). The target takes 1 point of <Link to="/rule/constitution_damage">Constitution damage</Link> per day. After the first day, the target may save once per day to cure the infection.</Pair>
<Pair title="Special">This is a disease effect.</Pair>
</Ability>
<Ability id="hexmajorameliorating-major-ameliorating-su-fn6" icon={["remedy","shield-reflect"]}>
<Pair single id="hexmajorameliorating-major-ameliorating-su-fn6"><Link to="/hex/major_ameliorating">⮞</Link> Major Ameliorating (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-6" id="ability-major_hexes-fake-fn-6" data-hash-target to="ability-major_hexes-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Ability"><p>The witch can touch a creature to suppress or protect it from more debilitating negative conditions. Each time she uses this hex, the witch either chooses the blinded or deafened condition, or chooses a type of effect: curse, disease, or poison. If the target is or later becomes afflicted with the chosen condition or effect, that condition or effect is suppressed for a number of minutes equal to the witch's level.</p>
<p>Alternatively, for 24 hours the witch can grant her target a +4 circumstance bonus on saving throws against effects that cause any two of the above conditions or effects (witch's choice; she can choose any combination of conditions or effects, as long as she chooses only two total).</p>
</Pair>
<Pair title="At 15th Level">The witch can choose up to two total conditions or types of effects to suppress or three total conditions or types of effects to grant a circumstance bonus against each time she uses the major ameliorating hex.</Pair>
<Pair title="Special">Once a creature has benefited from this hex, it cannot benefit from it again for 24 hours.</Pair>
</Ability>
<Ability id="hexmajorhealing-major-healing-su-fn7" icon={["remedy"]}>
<Pair single id="hexmajorhealing-major-healing-su-fn7" flavor="By calling upon eerie powers, the witch's touch can mend even the most terrible wounds of those she touches."><Link to="/hex/major_healing">⮞</Link> Major Healing (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-7" id="ability-major_hexes-fake-fn-7" data-hash-target to="ability-major_hexes-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Ability">This acts as <Link to="/spell/cure_serious_wounds">cure serious wounds</Link>, using the witch's caster level.</Pair>
<Pair title="At 15th Level">This hex acts like <Link to="/spell/cure_critical_wounds">cure critical wounds</Link>.</Pair>
<Pair title="Special">Once a creature has benefited from the <em>major healing</em> hex, it cannot benefit from it again for 24 hours.</Pair>
</Ability>
<Ability id="hexnightmares-nightmares-su-fn7-2" icon={["armor-downgrade"]}>
<Pair single id="hexnightmares-nightmares-su-fn7-2"><Link to="/hex/nightmares">⮞</Link> Nightmares (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-7.2" id="ability-major_hexes-fake-fn-7.2" data-hash-target to="ability-major_hexes-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Ability">Calling upon fell powers, a witch can place a hex on a creature within 60 feet that causes its sleep to be tormented by terrible nightmares. This functions as the spell <Link to="/spell/nightmare">nightmare</Link> each time the affected creature attempts to rest. A Will save negates this effect. If the save is failed, the target must make a new save each night or be unable to rest.</Pair>
</Ability>
<Ability id="hexpariah-pariah-su-fn8" icon={["armor-downgrade"]}>
<Pair single id="hexpariah-pariah-su-fn8"><Link to="/hex/pariah">⮞</Link> Pariah (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-8" id="ability-major_hexes-fake-fn-8" data-hash-target to="ability-major_hexes-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Ability">The witch can cause a creature within 60 feet to be shunned by its allies for a number of rounds equal to the witch's Intelligence modifier. Any other creature attempting to directly assist the target with a harmless spell or <Link to="/rule/aid_another_2">aid another</Link> action must attempt a Will save. If the save succeeds, the aiding creature is unaffected by this hex. If the save fails, the aiding creature can't follow through, the action is lost, and the aiding creature can't directly aid the target for the duration of this hex. This hex does not prevent the target from benefiting from area of effect spells.</Pair>
</Ability>
<Ability id="hexprophecy-prophecy-su-fn4-4" icon={["magic-swirl"]}>
<Pair single id="hexprophecy-prophecy-su-fn4-4"><Link to="/hex/prophecy">⮞</Link> Prophecy (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-4.4" id="ability-major_hexes-fake-fn-4.4" data-hash-target to="ability-major_hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The witch can call on her prophetic ancestors and cast <Link to="/spell/divination">divination</Link> once per day. She can spend a full hour casting the spell in place of providing the usual material components.</Pair>
</Ability>
<Ability id="hexregenerativesinew-regenerative-sinew-su-fn6-2" icon={["remedy"]}>
<Pair single id="hexregenerativesinew-regenerative-sinew-su-fn6-2"><Link to="/hex/regenerative_sinew">⮞</Link> Regenerative Sinew (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-6.2" id="ability-major_hexes-fake-fn-6.2" data-hash-target to="ability-major_hexes-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Ability">The witch can cause the debilitating wounds of a creature she touches to quickly close, helping it heal rapidly. The target either gains <Link to="/umr/fast_healing">fast healing</Link> 5 for a number of rounds equal to 1/2 the witch's class level or it heals up to 4 points of ability score damage from any two ability scores (witch's choice).</Pair>
<Pair title="At 15th Level">In addition to the chosen effect, the target's severed body members, broken bones, and ruined organs grow back, as per <Link to="/spell/regenerate">regenerate</Link>.</Pair>
<Pair title="Special">Once a creature has benefited from this hex, it cannot benefit from it again for 24 hours.</Pair>
</Ability>
<Ability id="hexrestlessslumber-restless-slumber-su-fn9" icon={["armor-downgrade"]}>
<Pair single id="hexrestlessslumber-restless-slumber-su-fn9"><Link to="/hex/restless_slumber">⮞</Link> Restless Slumber (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-9" id="ability-major_hexes-fake-fn-9" data-hash-target to="ability-major_hexes-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/hex/slumber">Slumber</Link></Pair>
<Pair title="Ability"><p>The witch causes a creature within 30 feet to fall into a sleep riddled with nightmares. This functions as the <em>slumber</em> hex. Additionally, the restless nature of the sleep causes the creature to violently toss and turn, dealing 1d10 points of damage to itself each turn. This damage does not wake the creature.</p>
<p>When it wakes, the creature's addled state causes it to be <Link to="/misc/confused">confused</Link> for a number of rounds equal to half the witch's level.</p>
</Pair>
</Ability>
<Ability id="hexretribution-retribution-su-fn7-3" icon={["armor-downgrade"]}>
<Pair single id="hexretribution-retribution-su-fn7-3"><Link to="/hex/retribution">⮞</Link> Retribution (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-7.3" id="ability-major_hexes-fake-fn-7.3" data-hash-target to="ability-major_hexes-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Ability"><p>A witch can place this hex on a creature within 60 feet, causing terrible wounds to open across the target's flesh whenever it deals damage to another creature in melee.</p>
<p>Immediately after the hexed creature deals damage in melee, it takes half that damage (round down). This damage bypasses any resistances, immunities, or damage reduction the creature possesses.</p>
</Pair>
<Pair title="Special">This effect lasts for a number of rounds equal to the witch's Intelligence modifier. A Will save negates this effect.</Pair>
</Ability>
<Ability id="hexspeakindreams-speak-in-dreams-sp-fn3-7" icon={["magic-swirl"]}>
<Pair single id="hexspeakindreams-speak-in-dreams-sp-fn3-7"><Link to="/hex/speak_in_dreams">⮞</Link> Speak in Dreams (Sp) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-3.7" id="ability-major_hexes-fake-fn-3.7" data-hash-target to="ability-major_hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The witch can contact a creature as if using <Link to="/spell/dream">dream</Link>. The witch can use this ability on a number of creatures per day equal to her Intelligence bonus, but can dream-speak to those creatures as often as desired throughout that time period.</Pair>
</Ability>
<Ability id="hexstealvoice-steal-voice-su-fn10" icon={["armor-downgrade"]}>
<Pair single id="hexstealvoice-steal-voice-su-fn10"><Link to="/hex/steal_voice">⮞</Link> Steal Voice (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-10" id="ability-major_hexes-fake-fn-10" data-hash-target to="ability-major_hexes-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/race/tiefling">Tiefling</Link></Pair>
<Pair title="Ability">The witch can steal the voice of one creature within 30 feet, causing it to lose, for a number of rounds equal to the witch's Intelligence bonus, all abilities that rely on speech, including talking, casting spells with verbal components, and using auditory bardic performances. A successful Will saving throw negates this effect.</Pair>
<Pair title="Special">If this hex is used upon a willing target, the duration lasts for a number of hours equal to the witch's Intelligence bonus. Additionally, the witch can change her voice to match that of any creature whose voice she has stolen with this hex, as per <Link to="/spell/vocal_alteration">vocal alteration</Link>.</Pair>
</Ability>
<Ability id="hexvision-vision-su-fn7-4" icon={["magic-swirl"]}>
<Pair single id="hexvision-vision-su-fn7-4"><Link to="/hex/vision">⮞</Link> Vision (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-7.4" id="ability-major_hexes-fake-fn-7.4" data-hash-target to="ability-major_hexes-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Ability"><p>A witch with this hex can grant a glimpse of the future to a creature touched. Granting a vision takes 1 minute, during which time the witch and the target must remain in contact with one another. At the end of this time, the subject receives a brief image of the future, usually no more than 1 year from the time of the vision, subject to GM discretion.</p>
<p>This is only one possible version of the future, making such visions unreliable at best. Most visions are slanted toward the alignment of the witch that granted them. For example, the visions granted by a chaotic evil witch often show scenes of death and destruction, while those of a neutral good witch tend to be of joyous events or occasions.</p>
</Pair>
<Pair title="Special">A creature cannot be subject to another vision until the current vision has either come to pass or been prevented. A witch cannot use this ability on herself. Unwilling creatures receive a Will save to negate the vision.</Pair>
</Ability>
<Ability id="hexwaxenimage-waxen-image-su-fn7-5" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="hexwaxenimage-waxen-image-su-fn7-5"><Link to="/hex/waxen_image">⮞</Link> Waxen Image (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-7.5" id="ability-major_hexes-fake-fn-7.5" data-hash-target to="ability-major_hexes-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Full-Round Action"><p>The witch can create a crude and unnerving wax duplicate of a creature she can see within 30 feet. Once the image is complete, the subject must make a Will save. If the subject fails, the witch gains a small measure of control over the creature. Whenever she exercises this control, the creature receives a new Will save to end the effect. This effect occurs on the witch's turn and does not impede the creature's actions on its turn.</p>
<p>The witch can use the <em>waxen image</em> a number of times equal to her Intelligence modifier before it melts.</p>
</Pair>
<Pair title="Standard Action"><p>The witch can cause the subject to do any one of the following things: move up to the creature's speed in any direction, attack itself once with any weapon in hand (this attack automatically hits), lay down on the ground, or drop anything held.</p>
<p>Alternatively, she can spend one of her uses to simply torture the <em>image,</em> causing the creature to be both <Link to="/misc/sickened">sickened</Link> and <Link to="/misc/staggered">staggered</Link> on its turn.</p>
</Pair>
<Pair title="Special">As soon as the creature has succeeded on a saving throw against this effect, it is immune to it for 24 hours. The is an enchantment (compulsion) effect.</Pair>
</Ability>
<Ability id="hexweathercontrol-weather-control-su-fn11" icon={["magic-swirl"]}>
<Pair single id="hexweathercontrol-weather-control-su-fn11"><Link to="/hex/weather_control">⮞</Link> Weather Control (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-11" id="ability-major_hexes-fake-fn-11" data-hash-target to="ability-major_hexes-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Ability">A witch with this hex can use <Link to="/spell/control_weather">control weather</Link> once per day, but creating the weather takes 1 full hour of chanting, dancing, and communing with her familiar.</Pair>
</Ability>
<Ability id="hexwitchsbounty-witchs-bounty-su-fn12" icon={["magic-swirl"]}>
<Pair single id="hexwitchsbounty-witchs-bounty-su-fn12"><Link to="/hex/witchs_bounty">⮞</Link> Witch's Bounty (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-12" id="ability-major_hexes-fake-fn-12" data-hash-target to="ability-major_hexes-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Ability">The witch may bless a bush, plant, or tree that is planted in the ground, so that it creates a plentiful harvest. Each day at dawn, this blessed bush grows a number of <Link to="/spell/goodberry">goodberries</Link> equal to twice her witch level. Berries on the tree remain until they are picked, but the tree can never manifest a number of berries greater than twice her level at one time.</Pair>
<Pair title="Special">The witch may only have one <em>witch's bounty</em> active at a time, but can shift her blessing to a new plant with a ritual requiring 1 hour.</Pair>
</Ability>
<Ability id="hexwitchsbrew-witchs-brew-ex-fn3-8" icon={["stairs-goal"]}>
<Pair single id="hexwitchsbrew-witchs-brew-ex-fn3-8"><Link to="/hex/witchs_brew">⮞</Link> Witch's Brew (Ex) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-3.8" id="ability-major_hexes-fake-fn-3.8" data-hash-target to="ability-major_hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/hex/cauldron">Cauldron</Link></Pair>
<Pair title="Ability">When the witch uses her cauldron to brew a potion, she may spend double the cost to create 2 identical potions that day instead of just 1.</Pair>
<Pair title="At 15th Level">She may spend triple the cost to create 3 identical potions that day.</Pair>
</Ability>
<Ability id="hexwitchscharge-witchs-charge-su-fn12-2" icon={["shield-reflect"]}>
<Pair single id="hexwitchscharge-witchs-charge-su-fn12-2"><Link to="/hex/witchs_charge">⮞</Link> Witch's Charge (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-12.2" id="ability-major_hexes-fake-fn-12.2" data-hash-target to="ability-major_hexes-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Ability">Once per day when preparing spells, a witch can designate a willing creature as her <em>charge.</em> She gains a constant <Link to="/spell/status">status</Link> effect on this creature and can target it with beneficial touch spells from a range of 30 feet. The creature remains her <em>charge</em> until she designates a new one.</Pair>
</Ability>
<Ability id="hexwithering-withering-su-fn9-2" icon={["armor-downgrade","upgrade"]}>
<Pair single id="hexwithering-withering-su-fn9-2" flavor="The witch causes a creature within 30 feet to age rapidly, empowering the witch in the process."><Link to="/hex/withering">⮞</Link> Withering (Su) <sup><InnerLink showBacklink="backlink-ability-major_hexes-fake-fn-9.2" id="ability-major_hexes-fake-fn-9.2" data-hash-target to="ability-major_hexes-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Ability">The target ages to the next <Link to="/rule/age">age category</Link> (adult to middle-aged, and so on). The witch gains a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to 1d10 + her witch level and a +2 enhancement bonus to either Strength, Dexterity, or Constitution for a number of hours equal to her Intelligence modifier. These effects last for a number of hours equal to the witch's level.</Pair>
<Pair title="Special">A creature cannot be aged past venerable age by this hex, and it can attempt a Fortitude save to negate the effect altogether. Once a creature has successfully saved against the <em>withering</em> hex, it cannot be affected by it again.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-major_hexes-label">Footnotes</h3><ol>
<li id="ability-major_hexes-fake-fn-1-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> pg. 67 <InnerLink aria-label="Back to reference 1" id="backlink-ability-major_hexes-fake-fn-1" data-hash-target to="ability-major_hexes-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-major_hexes-fake-fn-1.2" data-hash-target to="ability-major_hexes-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-major_hexes-fake-fn-2-target"><p><Link to="/source/blood_of_the_moon">Blood of the Moon</Link> pg. 15 <InnerLink aria-label="Back to reference 2" id="backlink-ability-major_hexes-fake-fn-2" data-hash-target to="ability-major_hexes-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-major_hexes-fake-fn-2.2" data-hash-target to="ability-major_hexes-fake-fn-2.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-major_hexes-fake-fn-3-target"><p><Link to="/source/ultimate_magic">Ultimate Magic</Link> pg. 82 <InnerLink aria-label="Back to reference 3" id="backlink-ability-major_hexes-fake-fn-3" data-hash-target to="ability-major_hexes-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-major_hexes-fake-fn-3.2" data-hash-target to="ability-major_hexes-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-major_hexes-fake-fn-3.3" data-hash-target to="ability-major_hexes-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-major_hexes-fake-fn-3.4" data-hash-target to="ability-major_hexes-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-major_hexes-fake-fn-3.5" data-hash-target to="ability-major_hexes-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-major_hexes-fake-fn-3.6" data-hash-target to="ability-major_hexes-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-major_hexes-fake-fn-3.7" data-hash-target to="ability-major_hexes-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-major_hexes-fake-fn-3.8" data-hash-target to="ability-major_hexes-fake-fn-3.8">↩<sup>8</sup></InnerLink></p></li>
<li id="ability-major_hexes-fake-fn-4-target"><p><Link to="/source/heroes_of_golarion">Heroes of Golarion</Link> pg. 16 <InnerLink aria-label="Back to reference 4" id="backlink-ability-major_hexes-fake-fn-4" data-hash-target to="ability-major_hexes-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-major_hexes-fake-fn-4.2" data-hash-target to="ability-major_hexes-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-major_hexes-fake-fn-4.3" data-hash-target to="ability-major_hexes-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-major_hexes-fake-fn-4.4" data-hash-target to="ability-major_hexes-fake-fn-4.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-major_hexes-fake-fn-5-target"><p><Link to="/source/the_harrow_handbook">The Harrow Handbook</Link> pg. 15 <InnerLink aria-label="Back to reference 5" id="backlink-ability-major_hexes-fake-fn-5" data-hash-target to="ability-major_hexes-fake-fn-5">↩</InnerLink></p></li>
<li id="ability-major_hexes-fake-fn-6-target"><p><Link to="/source/healers_handbook">Healer's Handbook</Link> pg. 17 <InnerLink aria-label="Back to reference 6" id="backlink-ability-major_hexes-fake-fn-6" data-hash-target to="ability-major_hexes-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-major_hexes-fake-fn-6.2" data-hash-target to="ability-major_hexes-fake-fn-6.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-major_hexes-fake-fn-7-target"><p>Advanced Player's Guide pg. 68 <InnerLink aria-label="Back to reference 7" id="backlink-ability-major_hexes-fake-fn-7" data-hash-target to="ability-major_hexes-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-major_hexes-fake-fn-7.2" data-hash-target to="ability-major_hexes-fake-fn-7.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-major_hexes-fake-fn-7.3" data-hash-target to="ability-major_hexes-fake-fn-7.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-major_hexes-fake-fn-7.4" data-hash-target to="ability-major_hexes-fake-fn-7.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-major_hexes-fake-fn-7.5" data-hash-target to="ability-major_hexes-fake-fn-7.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-major_hexes-fake-fn-8-target"><p><Link to="/source/magical_marketplace">Magical Marketplace</Link> pg. 28 <InnerLink aria-label="Back to reference 8" id="backlink-ability-major_hexes-fake-fn-8" data-hash-target to="ability-major_hexes-fake-fn-8">↩</InnerLink></p></li>
<li id="ability-major_hexes-fake-fn-9-target"><p><Link to="/source/potions_and_poisons">Potions and Poisons</Link> pg. 10 <InnerLink aria-label="Back to reference 9" id="backlink-ability-major_hexes-fake-fn-9" data-hash-target to="ability-major_hexes-fake-fn-9">↩</InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-ability-major_hexes-fake-fn-9.2" data-hash-target to="ability-major_hexes-fake-fn-9.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-major_hexes-fake-fn-10-target"><p><Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox</Link> pg. 23 <InnerLink aria-label="Back to reference 10" id="backlink-ability-major_hexes-fake-fn-10" data-hash-target to="ability-major_hexes-fake-fn-10">↩</InnerLink></p></li>
<li id="ability-major_hexes-fake-fn-11-target"><p>Advanced Player's Guide pg. 69 <InnerLink aria-label="Back to reference 11" id="backlink-ability-major_hexes-fake-fn-11" data-hash-target to="ability-major_hexes-fake-fn-11">↩</InnerLink></p></li>
<li id="ability-major_hexes-fake-fn-12-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> pg. 27 <InnerLink aria-label="Back to reference 12" id="backlink-ability-major_hexes-fake-fn-12" data-hash-target to="ability-major_hexes-fake-fn-12">↩</InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-major_hexes-fake-fn-12.2" data-hash-target to="ability-major_hexes-fake-fn-12.2">↩<sup>2</sup></InnerLink></p></li>
</ol></section></div>};
const _major_phrenic_amplifications = {title: "Major Phrenic Amplifications", topLink: ["Psychic","class/psychic"], jsx: <div className="compilation"><h2 id="ability-major_phrenic_amplifications-major-phrenic-amplifications">Major Phrenic Amplifications</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 63</Link><br/>At 11th level and every 4 levels thereafter, a psychic can choose one of the following major amplifications in place of a phrenic amplification.</p>
<hr/>
<Ability id="phrenicampdeflectionfield-deflection-field-su-fn1" icon={["armor-upgrade"]}>
<Pair single id="phrenicampdeflectionfield-deflection-field-su-fn1"><Link to="/phrenicamp/deflection_field">⮞</Link> Deflection Field (Su) <sup><InnerLink showBacklink="backlink-ability-major_phrenic_amplifications-fake-fn-1" id="ability-major_phrenic_amplifications-fake-fn-1" data-hash-target to="ability-major_phrenic_amplifications-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">Whenever the psychic casts a linked spell that grants her a deflection bonus to AC, she can spend 2 points from her phrenic pool to automatically reflect the first ranged attack that misses her (as long as the linked spell remains active) back at the attacker. This reflected attack uses the original attack roll plus a circumstance bonus equal to the psychic's caster level.</Pair>
</Ability>
<Ability id="phrenicampdispellingpulse-dispelling-pulse-su-fn2" icon={["armor-downgrade"]}>
<Pair single id="phrenicampdispellingpulse-dispelling-pulse-su-fn2"><Link to="/phrenicamp/dispelling_pulse">⮞</Link> Dispelling Pulse (Su) <sup><InnerLink showBacklink="backlink-ability-major_phrenic_amplifications-fake-fn-2" id="ability-major_phrenic_amplifications-fake-fn-2" data-hash-target to="ability-major_phrenic_amplifications-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability"><p>The psychic can spend 3 points from her phrenic pool to entwine dispelling magic with a targeted spell. If the target is hit by the linked spell or fails its saving throw, it's affected as though the psychic had cast a targeted <Link to="/spell/dispel_magic">dispel magic</Link> spell on it. This effect can dispel only spells of the linked spell's level or lower.</p>
<p>If the linked spell doesn't already require an attack roll or allow a saving throw, the target can attempt a Will saving throw to avoid the dispelling effect only; the DC is calculated using the linked spell's level (and all other bonuses that would apply if the linked spell allowed a Will save).</p>
</Pair>
<Pair title="Special">This amplification can be linked only to a spell that targets one creature or object.</Pair>
</Ability>
<Ability id="phrenicampdualamplification-dual-amplification-ex-fn2-2" icon={["stairs-goal"]}>
<Pair single id="phrenicampdualamplification-dual-amplification-ex-fn2-2"><Link to="/phrenicamp/dual_amplification">⮞</Link> Dual Amplification (Ex) <sup><InnerLink showBacklink="backlink-ability-major_phrenic_amplifications-fake-fn-2.2" id="ability-major_phrenic_amplifications-fake-fn-2.2" data-hash-target to="ability-major_phrenic_amplifications-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">When the psychic uses this major amplification, she chooses two other <em>amplifications</em> or <em>major amplifications</em> she knows to apply to the same linked spell. She must spend 1 point from her phrenic pool to do so, plus the full cost of the two other amplifications.</Pair>
<Pair title="Special">She can't apply the same amplification to the linked spell more than once, even if she can use that amplification for multiple different effects.</Pair>
</Ability>
<Ability id="phrenicampmimicmetamagic-mimic-metamagic-ex-fn2-3" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="phrenicampmimicmetamagic-mimic-metamagic-ex-fn2-3"><Link to="/phrenicamp/mimic_metamagic">⮞</Link> Mimic Metamagic (Ex) <sup><InnerLink showBacklink="backlink-ability-major_phrenic_amplifications-fake-fn-2.3" id="ability-major_phrenic_amplifications-fake-fn-2.3" data-hash-target to="ability-major_phrenic_amplifications-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Choice">When the psychic gains this amplification, she chooses two <Link to="/main/metamagic_feat">metamagic feats</Link>; she need not have these feats to select them.</Pair>
<Pair title="Ability">When she casts a spell, she can spend points from her phrenic pool to apply one of the chosen feats to the linked spell without increasing the spell's level or casting time. She must spend a number of points equal to double the number of levels by which the feat normally increases a spell's level (minimum 2 points). If the metamagic feat alters the spell's casting time in a different way than the <Link to="/rule/feats_basic">standard rules</Link> for a spontaneous caster using a metamagic feat (as in the case of <Link to="/feat/quicken_spell">Quicken Spell</Link>), it changes the casting time accordingly.</Pair>
<Pair title="Info"><p>The psychic can still apply metamagic feats she knows to the spell while using this amplification, increasing the casting time and spell level as normal.</p>
<p>This amplification can be applied only to a spell that the chosen metamagic feat could normally affect, and only if the spellcaster can cast spells of a high enough level that she would be able to apply the metamagic feat in question to the linked spell. For example, an 11th-level psychic could spend 8 points to <em>quicken</em> a 1st-level spell, but couldn't <em>quicken</em> a 2nd-level spell because she's unable to cast 6th-level spells. This ability doesn't require her to have any free spell slots in the relevant level, however, so the psychic in the example could <em>quicken</em> a 1st-level spell even if she had cast all her 5th-level spells for the day.</p>
</Pair>
<Pair title="Special">A psychic can select this amplification multiple times, adding two additional options to the list of metamagic feats she can apply using this amplification each time.</Pair>
</Ability>
<Ability id="phrenicampspacerendingspell-space-rending-spell-su-fn2-4" icon={["magic-swirl"]}>
<Pair single id="phrenicampspacerendingspell-space-rending-spell-su-fn2-4" flavor="The psychic can warp space with her mind, teleporting herself as she casts her linked spell."><Link to="/phrenicamp/space_rending_spell">⮞</Link> Space-rending Spell (Su) <sup><InnerLink showBacklink="backlink-ability-major_phrenic_amplifications-fake-fn-2.4" id="ability-major_phrenic_amplifications-fake-fn-2.4" data-hash-target to="ability-major_phrenic_amplifications-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">She teleports herself 10 feet per point she spends from her phrenic pool (as <Link to="/spell/dimension_door">dimension door</Link>). The maximum number of points she can spend in this way is equal to the linked spell's level.</Pair>
</Ability>
<Ability id="phrenicampsubordinatespell-subordinate-spell-ex-fn3" icon={["magic-swirl"]}>
<Pair single id="phrenicampsubordinatespell-subordinate-spell-ex-fn3"><Link to="/phrenicamp/subordinate_spell">⮞</Link> Subordinate Spell (Ex) <sup><InnerLink showBacklink="backlink-ability-major_phrenic_amplifications-fake-fn-3" id="ability-major_phrenic_amplifications-fake-fn-3" data-hash-target to="ability-major_phrenic_amplifications-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability"><p>The psychic can divide her mind to cast a less powerful spell upon herself alongside her linked spell. The linked spell can't be lower than 5th level and can't take less than a standard action to cast. This applies to the actual casting time, so the psychic can't add a <em>subordinate spell</em> to a <Link to="/feat/quickened">quickened</Link> spell.</p>
<p>The <em>subordinate spell's</em> casting time must be 1 standard action or less, and its level can be no higher than the linked spell's level - 5. The <em>subordinate spell</em> must target only the psychic (even if it could normally affect other or multiple targets).</p>
<p>The psychic must spend a number of points from her phrenic pool equal to 3 + double the <em>subordinate spell's</em> level. The <em>subordinate spell</em> acts as though it had been cast, and uses up one of the psychic's spells per day of its level. The effects of the two spells are separate, so each might require its own <Link to="/rule/concentration">concentration</Link> check.</p>
</Pair>
</Ability>
<Ability id="phrenicampsynapticshock-synaptic-shock-su-fn3-2" icon={["armor-downgrade"]}>
<Pair single id="phrenicampsynapticshock-synaptic-shock-su-fn3-2" flavor="The psychic manipulates an enemy's mind with brute force, causing mental harm beyond that done by her linked spell."><Link to="/phrenicamp/synaptic_shock">⮞</Link> Synaptic Shock (Su) <sup><InnerLink showBacklink="backlink-ability-major_phrenic_amplifications-fake-fn-3.2" id="ability-major_phrenic_amplifications-fake-fn-3.2" data-hash-target to="ability-major_phrenic_amplifications-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability"><p>She can spend 1 point from her phrenic pool when casting a mind-affecting linked spell to select one of the spell's targets. If the target is affected by the linked spell, that target is <Link to="/misc/confused">confused</Link> for 1 round after the duration of the spell expires (or immediately, if the spell has an instantaneous duration). If the target succeeds at its save against the linked spell, it is instead confused for 1 round immediately.</p>
<p>For each additional point the psychic spends from her phrenic pool, she can confuse one additional target of the linked spell.</p>
</Pair>
<Pair title="Special">This amplification can be applied only to a mind-affecting spell that can affect a number of targets or that has an area. It has no effect on creatures that are immune to mind-affecting effects, unless the linked spell is able to affect such creatures (such as a spell that has both <Link to="/phrenicamp/will_of_the_dead">will of the dead</Link> and <em>synaptic shock</em> applied to it via <Link to="/phrenicamp/dual_amplification">dual amplification</Link>).</Pair>
</Ability>
<Ability id="phrenicamptelepathictargeting-telepathic-targeting-su-fn1-2" icon={["magic-swirl","upgrade"]}>
<Pair single id="phrenicamptelepathictargeting-telepathic-targeting-su-fn1-2"><Link to="/phrenicamp/telepathic_targeting">⮞</Link> Telepathic Targeting (Su) <sup><InnerLink showBacklink="backlink-ability-major_phrenic_amplifications-fake-fn-1.2" id="ability-major_phrenic_amplifications-fake-fn-1.2" data-hash-target to="ability-major_phrenic_amplifications-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">By spending 2 points from her phrenic pool, the psychic can target any creature with which she is in telepathic communication (whether via her <em>telepathic bond</em> ability, a creature's telepathy ability, or another effect) with the linked spell, even if the creature would normally be out of range. The linked spell must have the mind-affecting descriptor and must have a range of touch or greater.</Pair>
</Ability>
<Ability id="phrenicampturningshield-turning-shield-su-fn3-3" icon={["armor-upgrade"]}>
<Pair single id="phrenicampturningshield-turning-shield-su-fn3-3" flavor="The psychic can turn her excess spell energy into a barrier that deflects weaker spells."><Link to="/phrenicamp/turning_shield">⮞</Link> Turning Shield (Su) <sup><InnerLink showBacklink="backlink-ability-major_phrenic_amplifications-fake-fn-3.3" id="ability-major_phrenic_amplifications-fake-fn-3.3" data-hash-target to="ability-major_phrenic_amplifications-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">She can spend a number of points from her phrenic pool equal to the linked spell's level to gain the benefit of <Link to="/spell/spell_turning">spell turning</Link> for 1 round per psychic level. The number of spell levels she can turn is equal to the level of the linked spell.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-major_phrenic_amplifications-label">Footnotes</h3><ol>
<li id="ability-major_phrenic_amplifications-fake-fn-1-target"><p><Link to="/source/occult_origins">Occult Origins</Link> pg. 16 <InnerLink aria-label="Back to reference 1" id="backlink-ability-major_phrenic_amplifications-fake-fn-1" data-hash-target to="ability-major_phrenic_amplifications-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-major_phrenic_amplifications-fake-fn-1.2" data-hash-target to="ability-major_phrenic_amplifications-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-major_phrenic_amplifications-fake-fn-2-target"><p><Link to="/source/occult_adventures">Occult Adventures</Link> pg. 63 <InnerLink aria-label="Back to reference 2" id="backlink-ability-major_phrenic_amplifications-fake-fn-2" data-hash-target to="ability-major_phrenic_amplifications-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-major_phrenic_amplifications-fake-fn-2.2" data-hash-target to="ability-major_phrenic_amplifications-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-major_phrenic_amplifications-fake-fn-2.3" data-hash-target to="ability-major_phrenic_amplifications-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-major_phrenic_amplifications-fake-fn-2.4" data-hash-target to="ability-major_phrenic_amplifications-fake-fn-2.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-major_phrenic_amplifications-fake-fn-3-target"><p>Occult Adventures pg. 64 <InnerLink aria-label="Back to reference 3" id="backlink-ability-major_phrenic_amplifications-fake-fn-3" data-hash-target to="ability-major_phrenic_amplifications-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-major_phrenic_amplifications-fake-fn-3.2" data-hash-target to="ability-major_phrenic_amplifications-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-major_phrenic_amplifications-fake-fn-3.3" data-hash-target to="ability-major_phrenic_amplifications-fake-fn-3.3">↩<sup>3</sup></InnerLink></p></li>
</ol></section></div>};
const _masterful_tricks = {title: "Masterful Tricks", topLink: ["Mesmerist","class/mesmerist"], jsx: <div className="compilation"><h2 id="ability-masterful_tricks-masterful-tricks">Masterful Tricks</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures</Link><br/>At 12th level, a mesmerist can choose one of the following masterful tricks in place of a mesmerist trick. He gains an additional masterful trick every 2 levels thereafter. Using a masterful trick consumes two uses of the <em>mesmerist trick</em> class feature instead of one.</p>
<hr/>
<Ability id="trickallaypain-allay-pain-fn1" icon={["shield-reflect"]}>
<Pair single id="trickallaypain-allay-pain-fn1"><Link to="/trick/allay_pain">⮞</Link> Allay Pain <sup><InnerLink showBacklink="backlink-ability-masterful_tricks-fake-fn-1" id="ability-masterful_tricks-fake-fn-1" data-hash-target to="ability-masterful_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The subject of this trick gains DR 15/- against one attack that deals nonlethal damage. The mesmerist can trigger this trick whenever the subject is hit with an attack that deals nonlethal damage.</Pair>
</Ability>
<Ability id="trickavianescape-avian-escape-fn2" icon={["shield-reflect","magic-swirl"]}>
<Pair single id="trickavianescape-avian-escape-fn2" flavor="The subject changes shape to elude an attacking enemy."><Link to="/trick/avian_escape">⮞</Link> Avian Escape <sup><InnerLink showBacklink="backlink-ability-masterful_tricks-fake-fn-2" id="ability-masterful_tricks-fake-fn-2" data-hash-target to="ability-masterful_tricks-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject takes damage from an enemy's attack. The subject transforms into a bird (as <Link to="/spell/beast_shape_iii">beast shape III</Link>).</Pair>
<Pair title="Special">Though the subject can appear as any Tiny bird, it uses the statistics for a <Link to="/monster/raven">raven</Link>. This is a polymorph effect.</Pair>
</Ability>
<Ability id="trickconcealingveil-concealing-veil-fn3" icon={["shield-reflect"]}>
<Pair single id="trickconcealingveil-concealing-veil-fn3"><Link to="/trick/concealing_veil">⮞</Link> Concealing Veil <sup><InnerLink showBacklink="backlink-ability-masterful_tricks-fake-fn-3" id="ability-masterful_tricks-fake-fn-3" data-hash-target to="ability-masterful_tricks-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Passive Ability">When this trick is triggered, the subject is affected by a <Link to="/spell/nondetection">nondetection</Link> spell for 1 round per mesmerist level.</Pair>
</Ability>
<Ability id="trickcursedsanction-cursed-sanction-fn2-2" icon={["shield-reflect"]}>
<Pair single id="trickcursedsanction-cursed-sanction-fn2-2" flavor="A ward curses an enemy who attacks the subject."><Link to="/trick/cursed_sanction">⮞</Link> Cursed Sanction <sup><InnerLink showBacklink="backlink-ability-masterful_tricks-fake-fn-2.2" id="ability-masterful_tricks-fake-fn-2.2" data-hash-target to="ability-masterful_tricks-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Passive Ability">While this trick is implanted, a visible, circular symbol appears on the subject's forehead.</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject is attacked or becomes the target of a spell that requires an attack roll. The attacker takes a -4 penalty on attack rolls, saves, ability checks, and skill checks for 1 minute per mesmerist level (Will negates). This penalty applies to the triggering attack roll.</Pair>
<Pair title="Special">This is a curse effect.</Pair>
</Ability>
<Ability id="trickfakeddeath-faked-death-fn4" icon={["shield-reflect","magic-swirl"]}>
<Pair single id="trickfakeddeath-faked-death-fn4" flavor="The subject appears to die, but actually can stealthily move about."><Link to="/trick/faked_death">⮞</Link> Faked Death <sup><InnerLink showBacklink="backlink-ability-masterful_tricks-fake-fn-4" id="ability-masterful_tricks-fake-fn-4" data-hash-target to="ability-masterful_tricks-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject is damaged by an attack. The subject seems to fall down dead (as <Link to="/spell/programmed_image">programmed image</Link>), but actually turns invisible (as <Link to="/spell/invisibility">invisibility</Link>) for a number of rounds equal to the mesmerist's level or until she attacks. Once the subject becomes visible again, the illusory dead body disappears.</Pair>
<Pair title="Special">These are illusion effects, and a creature that interacts with the false body can attempt a saving throw to disbelieve the effect. The false body is a figment; the invisibility is a glamer.</Pair>
</Ability>
<Ability id="trickfreeinbody-free-in-body-fn4-2" icon={["shield-reflect"]}>
<Pair single id="trickfreeinbody-free-in-body-fn4-2" flavor="When constrained, the subject can easily slip loose."><Link to="/trick/free_in_body">⮞</Link> Free in Body <sup><InnerLink showBacklink="backlink-ability-masterful_tricks-fake-fn-4.2" id="ability-masterful_tricks-fake-fn-4.2" data-hash-target to="ability-masterful_tricks-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject begins its turn grappled or under an effect that impedes its movement (including paralysis, <Link to="/spell/solid_fog">solid fog</Link>, <Link to="/spell/slow">slow</Link>, and <Link to="/spell/web">web</Link>). The subject gains the benefits of <Link to="/spell/freedom_of_movement">freedom of movement</Link> for 1 minute.</Pair>
</Ability>
<Ability id="trickgreatermaskmisery-greater-mask-misery-fn4-3" icon={["remedy"]}>
<Pair single id="trickgreatermaskmisery-greater-mask-misery-fn4-3"><Link to="/trick/greater_mask_misery">⮞</Link> Greater Mask Misery <sup><InnerLink showBacklink="backlink-ability-masterful_tricks-fake-fn-4.3" id="ability-masterful_tricks-fake-fn-4.3" data-hash-target to="ability-masterful_tricks-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/trick/mask_misery">Mask misery</Link></Pair>
<Pair title="Info">This trick functions as the <em>mask misery</em> trick, but can be used to ignore <em>greater conditions</em> as well.</Pair>
</Ability>
<Ability id="trickmentalfallback-mental-fallback-fn4-4" icon={["shield-reflect","magic-swirl"]}>
<Pair single id="trickmentalfallback-mental-fallback-fn4-4" flavor="Mental commands placed deep in the subject's mind trigger when she would fall under mind control, allowing the mesmerist to control her instead."><Link to="/trick/mental_fallback">⮞</Link> Mental Fallback <sup><InnerLink showBacklink="backlink-ability-masterful_tricks-fake-fn-4.4" id="ability-masterful_tricks-fake-fn-4.4" data-hash-target to="ability-masterful_tricks-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability"><p>The mesmerist can trigger this trick when the subject is affected by a charm or compulsion effect created by an enemy. The subject acts as though the mesmerist had cast the spell instead of the enemy. For instance, if the subject were affected by <Link to="/spell/charm_monster">charm monster</Link> cast by an enemy, that enemy can't try to give her orders, but the mesmerist could.</p>
<p>If the charm or compulsion causes penalties or conditions (such as those imposed by <Link to="/spell/confusion">confusion</Link>, <Link to="/spell/crushing_despair">crushing despair</Link>, or <Link to="/spell/hold_person">hold person</Link>), the subject can ignore any of those penalties or conditions the mesmerist chooses.</p>
<p>This trick overrides the charm or compulsion for a number of rounds equal to the mesmerist's level or until the duration of the triggering effect elapses, whichever comes first.</p>
</Pair>
<Pair title="Special">The mesmerist can't implant this trick on himself.</Pair>
</Ability>
<Ability id="trickshadowblend-shadow-blend-fn1-2" icon={["shield-reflect"]}>
<Pair single id="trickshadowblend-shadow-blend-fn1-2"><Link to="/trick/shadow_blend">⮞</Link> Shadow Blend <sup><InnerLink showBacklink="backlink-ability-masterful_tricks-fake-fn-1.2" id="ability-masterful_tricks-fake-fn-1.2" data-hash-target to="ability-masterful_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick whenever the subject attempts a Stealth check while in an area of <Link to="/rule/dim_light">dim or darker light</Link>. The subject gains total <Link to="/rule/concealment">concealment</Link> from all enemies (50% miss chance) as long as it remains within areas of dim or darker light. Against creatures with darkvision, the subject gains concealment (20% miss chance) rather than total concealment.</Pair>
<Pair title="Special">Once triggered, this effect lasts for 1 round per mesmerist level or until the subject enters an area of normal or brighter light.</Pair>
</Ability>
<Ability id="trickspatialswitch-spatial-switch-fn4-5" icon={["magic-swirl"]}>
<Pair single id="trickspatialswitch-spatial-switch-fn4-5" flavor="The mesmerist allows himself and an ally to physically swap places."><Link to="/trick/spatial_switch">⮞</Link> Spatial Switch <sup><InnerLink showBacklink="backlink-ability-masterful_tricks-fake-fn-4.5" id="ability-masterful_tricks-fake-fn-4.5" data-hash-target to="ability-masterful_tricks-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when an enemy moves adjacent to or attacks either the subject or the mesmerist, provided the subject and the mesmerist are within 100 feet of one another. The subject and the mesmerist then swap positions.</Pair>
<Pair title="Special">If this trick was triggered by an attack, the swap happens before checking to see whether the attack hits. The mesmerist can't implant this trick on himself. This is a conjuration (teleportation) effect.</Pair>
</Ability>
<Ability id="trickspellanticipation-spell-anticipation-fn4-6" icon={["shield-reflect","magic-swirl"]}>
<Pair single id="trickspellanticipation-spell-anticipation-fn4-6" flavor="The mesmerist can choose a spell to strike back at enemy spellcasters."><Link to="/trick/spell_anticipation">⮞</Link> Spell Anticipation <sup><InnerLink showBacklink="backlink-ability-masterful_tricks-fake-fn-4.6" id="ability-masterful_tricks-fake-fn-4.6" data-hash-target to="ability-masterful_tricks-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">When the mesmerist implants this trick, he must expend one spell slot to couple a spell he knows of that level with the trick. That spell must have a casting time of 1 standard action or less and be able to target one creature (spells like <Link to="/spell/dominate_person">dominate person</Link> that have more restrictive targeting can be used, but have no effect if triggered against creatures that don't match).</Pair>
<Pair title="Ability">He can trigger this trick when the subject is targeted by an enemy's spell. The mesmerist's spell then triggers, affecting only the enemy spellcaster. This takes effect only if the enemy spellcaster is within range of the spell (as measured from the subject of the trick), and functions as though the mesmerist were in the subject's square.</Pair>
<Pair title="Special">The enemy's spell still has its full effect, even if the mesmerist's spell would normally protect against it or make the caster unable to cast it.</Pair>
</Ability>
<Ability id="trickumbraltransformation-umbral-transformation-fn1-3" icon={["stairs-goal","broken-shield"]}>
<Pair single id="trickumbraltransformation-umbral-transformation-fn1-3"><Link to="/trick/umbral_transformation">⮞</Link> Umbral Transformation <sup><InnerLink showBacklink="backlink-ability-masterful_tricks-fake-fn-1.3" id="ability-masterful_tricks-fake-fn-1.3" data-hash-target to="ability-masterful_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The subject of this trick turns into a living shadow for 1 round, as if affected by <Link to="/spell/shadow_body">shadow body</Link>. After this trick ends, the subject is <Link to="/misc/staggered">staggered</Link> for 1 round.</Pair>
</Ability>
<Ability id="trickvisionofblood-vision-of-blood-fn4-7" icon={["armor-downgrade"]}>
<Pair single id="trickvisionofblood-vision-of-blood-fn4-7" flavor="When an enemy is struck by the subject, it believes its wound is far more severe, and the shock overwhelms it."><Link to="/trick/vision_of_blood">⮞</Link> Vision of Blood <sup><InnerLink showBacklink="backlink-ability-masterful_tricks-fake-fn-4.7" id="ability-masterful_tricks-fake-fn-4.7" data-hash-target to="ability-masterful_tricks-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject hits with an attack using a weapon, a natural weapon, or an unarmed strike. The attack's target must succeed at a Will saving throw or be <Link to="/misc/stunned">stunned</Link> for 1 round.</Pair>
<Pair title="Special">If the triggering attack was a critical hit, the target doesn't get a saving throw.</Pair>
</Ability>
<Ability id="trickwillfulignorance-willful-ignorance-fn3-2" icon={["stairs-goal","shield-reflect"]}>
<Pair single id="trickwillfulignorance-willful-ignorance-fn3-2"><Link to="/trick/willful_ignorance">⮞</Link> Willful Ignorance <sup><InnerLink showBacklink="backlink-ability-masterful_tricks-fake-fn-3.2" id="ability-masterful_tricks-fake-fn-3.2" data-hash-target to="ability-masterful_tricks-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The subject gains the ability to tell one undetectable lie. When the subject attempts to lie, the mesmerist can trigger this trick. That particular lie resists truth-detecting magic, and creatures attempting to use such magic must succeed at a caster level check against a DC equal to 15 + the mesmerist's class level to succeed; failure means the magic doesn't detect the subject's lie or force her to speak only the truth.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-masterful_tricks-label">Footnotes</h3><ol>
<li id="ability-masterful_tricks-fake-fn-1-target"><p><Link to="/source/occult_realms">Occult Realms</Link> pg. 16 <InnerLink aria-label="Back to reference 1" id="backlink-ability-masterful_tricks-fake-fn-1" data-hash-target to="ability-masterful_tricks-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-masterful_tricks-fake-fn-1.2" data-hash-target to="ability-masterful_tricks-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-masterful_tricks-fake-fn-1.3" data-hash-target to="ability-masterful_tricks-fake-fn-1.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-masterful_tricks-fake-fn-2-target"><p><Link to="/source/occult_adventures">Occult Adventures</Link> pg. 43 <InnerLink aria-label="Back to reference 2" id="backlink-ability-masterful_tricks-fake-fn-2" data-hash-target to="ability-masterful_tricks-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-masterful_tricks-fake-fn-2.2" data-hash-target to="ability-masterful_tricks-fake-fn-2.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-masterful_tricks-fake-fn-3-target"><p><Link to="/source/occult_origins">Occult Origins</Link> pg. 12 <InnerLink aria-label="Back to reference 3" id="backlink-ability-masterful_tricks-fake-fn-3" data-hash-target to="ability-masterful_tricks-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-masterful_tricks-fake-fn-3.2" data-hash-target to="ability-masterful_tricks-fake-fn-3.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-masterful_tricks-fake-fn-4-target"><p>Occult Adventures pg. 44 <InnerLink aria-label="Back to reference 4" id="backlink-ability-masterful_tricks-fake-fn-4" data-hash-target to="ability-masterful_tricks-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-masterful_tricks-fake-fn-4.2" data-hash-target to="ability-masterful_tricks-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-masterful_tricks-fake-fn-4.3" data-hash-target to="ability-masterful_tricks-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-masterful_tricks-fake-fn-4.4" data-hash-target to="ability-masterful_tricks-fake-fn-4.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-masterful_tricks-fake-fn-4.5" data-hash-target to="ability-masterful_tricks-fake-fn-4.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-masterful_tricks-fake-fn-4.6" data-hash-target to="ability-masterful_tricks-fake-fn-4.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-masterful_tricks-fake-fn-4.7" data-hash-target to="ability-masterful_tricks-fake-fn-4.7">↩<sup>7</sup></InnerLink></p></li>
</ol></section></div>};
const _master_tricks = {hasJL:true,title: "Master Ninja Tricks", topLink: ["Ninja","class/ninja"], jsx: <div className="compilation"><div className="jumpList" id="ability-master_tricks-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-master_tricks-primary-sneak-attack-trick">Primary Sneak Attack Trick</InnerLink></li><li><InnerLink toTop to="ability-master_tricks-improved-tricks">Improved Tricks</InnerLink></li><li><InnerLink toTop to="ability-master_tricks-ki-tricks">Ki Tricks</InnerLink></li><li><InnerLink toTop to="ability-master_tricks-other-tricks">Other Tricks</InnerLink></li></ul></div><h2 id="ability-master_tricks-master-ninja-tricks">Master Ninja Tricks</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link><br/>At 10th level, and every two levels thereafter, a ninja can select one of the following master tricks in place of a <Link to="/ability/ninja_tricks">ninja trick</Link>.</p>
<h3 id="ability-master_tricks-primary-sneak-attack-trick" data-hash-target>Primary Sneak Attack Trick</h3>
<p>These tricks add effects to a ninja's <Link to="/ability/sneak_attack">sneak attack</Link>. Only one of these tricks can be applied to an individual attack and the decision must be made before the attack is made.</p>
<Ability id="ninjatrickassassinate-assassinate-ex-fn1" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="ninjatrickassassinate-assassinate-ex-fn1" flavor="A ninja with this master trick can kill foes that are unable to defend themselves."><Link to="/ninjatrick/assassinate">⮞</Link> Assassinate (Ex) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-1" id="ability-master_tricks-fake-fn-1" data-hash-target to="ability-master_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability"><p>To attempt to <em>assassinate</em> a target, the ninja must first study her target for 1 round as a <strong className="hl">standard action</strong>.</p>
<p>On the following round, if the ninja makes a sneak attack against the target and the target is denied its Dexterity bonus to AC, the sneak attack has the additional effect of possibly killing the target. This attempt automatically fails if the target recognizes the ninja as an enemy.</p>
<p>If the sneak attack is successful and the target of this attack fails a Fortitude save, it dies. The DC of this save is equal to 10 + 1/2 the ninja's level + the ninja's Charisma modifier.</p>
<p>If the save is successful, the target still takes the sneak attack damage as normal, but it is immune to that ninja's <em>assassinate</em> ability for 1 day.</p>
</Pair>
</Ability>
<h3 id="ability-master_tricks-improved-tricks" data-hash-target>Improved Tricks</h3>
<p>These tricks upgrade other ninja tricks.</p>
<Ability id="ninjatrickblindingbomb-blinding-bomb-ex-fn1-2" icon={["armor-downgrade"]}>
<Pair single id="ninjatrickblindingbomb-blinding-bomb-ex-fn1-2"><Link to="/ninjatrick/blinding_bomb">⮞</Link> Blinding Bomb (Ex) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-1.2" id="ability-master_tricks-fake-fn-1.2" data-hash-target to="ability-master_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/choking_bomb">Choking bomb</Link></Pair>
<Pair title="Ability">Whenever the ninja throws a <Link to="/ninjatrick/smoke_bomb">smoke bomb</Link>, all living creatures in the cloud must make a Fortitude save or be <Link to="/misc/blinded">blinded</Link> by the black smoke for 1d4 rounds. The DC of this saving throw is equal to 10 + 1/2 the ninja's level + the ninja's Charisma modifier.</Pair>
<Pair title="Special">This trick cannot be combined with a <em>choking bomb,</em> but the ninja can combine a <em>blinding bomb</em> with a <Link to="/ninjatrick/poison_bomb">poison bomb</Link>.</Pair>
</Ability>
<Ability id="ninjatrickfracturedmirror-fractured-mirror-su-fn2" icon={["armor-upgrade","magic-swirl","upgrade"]}>
<Pair single id="ninjatrickfracturedmirror-fractured-mirror-su-fn2" flavor="By sending phantom selves across the battlefield, one may fight as many."><Link to="/ninjatrick/fractured_mirror">⮞</Link> Fractured Mirror (Su) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-2" id="ability-master_tricks-fake-fn-2" data-hash-target to="ability-master_tricks-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/shadow_clone">Shadow clone</Link></Pair>
<Pair title="Ability"><p>When a ninja with this trick uses the <em>shadow clone</em> ninja trick, she gains an additional clone for every 3 ninja levels she has, to a maximum of eight clones.</p>
<p>In addition, while she has <em>shadow clones</em> deployed, the ninja can cause any number of her clones to split from herself as part of a <strong className="hl">move action</strong>. The <em>shadow clones</em> move up to the ninja's speed at her will each time she uses a move action to move. <em>Shadow clones</em> separated in this way are not considered part of the <em>shadow clone</em> trick until they return to the ninja's square, though they can still be destroyed while separated.</p>
</Pair>
<Pair title="Special"><em>Shadow clones</em> separated from the ninja have an AC equal to the ninja's AC - 5 and cannot take any actions, though they can provide <Link to="/rule/flanking">flanking</Link>. <em>Shadow clones</em> do not occupy any space and a creature can freely enter a <em>shadow clone's</em> square.</Pair>
</Ability>
<Ability id="ninjatrickgreaterkivenom-greater-ki-venom-ex-fn3" icon={["upgrade"]}>
<Pair single id="ninjatrickgreaterkivenom-greater-ki-venom-ex-fn3"><Link to="/ninjatrick/greater_ki_venom">⮞</Link> Greater Ki Venom (Ex) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-3" id="ability-master_tricks-fake-fn-3" data-hash-target to="ability-master_tricks-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/ki_venom">Ki venom</Link></Pair>
<Pair title="Ability">A ninja with this trick can further improve her <em>ki venom.</em> The ninja can spend 2 ki points to increase the damage die to a d8 or spend 2 ki points to change the ability damage dealt to <Link to="/rule/constitution_damage">Constitution damage</Link>.</Pair>
</Ability>
<Ability id="ninjatrickinvisibleblade-invisible-blade-su-fn1-3" icon={["magic-swirl"]}>
<Pair single id="ninjatrickinvisibleblade-invisible-blade-su-fn1-3"><Link to="/ninjatrick/invisible_blade">⮞</Link> Invisible Blade (Su) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-1.3" id="ability-master_tricks-fake-fn-1.3" data-hash-target to="ability-master_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/vanishing_trick">Vanishing trick</Link></Pair>
<Pair title="Ability">Whenever a ninja uses the <em>vanishing trick</em> ninja trick, she is treated as if she were under the effects of <Link to="/spell/greater_invisibility">greater invisibility</Link>.</Pair>
</Ability>
<Ability id="ninjatrickmasterdisguise-master-disguise-su-fn1-4" icon={["upgrade"]}>
<Pair single id="ninjatrickmasterdisguise-master-disguise-su-fn1-4" flavor="A ninja with this trick can take on the appearance of other creatures and individuals."><Link to="/ninjatrick/master_disguise">⮞</Link> Master Disguise (Su) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-1.4" id="ability-master_tricks-fake-fn-1.4" data-hash-target to="ability-master_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/sudden_disguise">Sudden disguise</Link></Pair>
<Pair title="Ability">Whenever the ninja uses the <em>sudden disguise</em> ninja trick, the duration increases to 10 minutes per level.</Pair>
<Pair title="Ability"><p>Alternatively, the ninja can use the <em>sudden disguise</em> ninja trick to take on the appearance of a specific individual that the ninja has seen before for 1 minute per level. Creatures that are familiar with the individual receive a Will saving throw to see through the illusion. The DC of this saving throw is 10 + 1/2 the ninja's level + the ninja's Charisma modifier.</p>
<p>This illusion also changes the ninja's speech, if she has heard the individual talk and can speak his language.</p>
</Pair>
</Ability>
<Ability id="ninjatrickshadowsplit-shadow-split-su-fn1-5" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="ninjatrickshadowsplit-shadow-split-su-fn1-5"><Link to="/ninjatrick/shadow_split">⮞</Link> Shadow Split (Su) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-1.5" id="ability-master_tricks-fake-fn-1.5" data-hash-target to="ability-master_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/shadow_clone">Shadow clone</Link></Pair>
<Pair title="Ability"><p>This trick allows the ninja to create an illusory double of herself that moves away from her, allowing the ninja to create a distraction. When she uses this ability, an illusory double appears and moves away from the ninja, heading in one direction.</p>
<p>The double climbs walls, jumps pits, or simply passes through obstacles, moving at twice the ninja's speed in the direction indicated by the ninja when the ability is used. Its course cannot be changed.</p>
<p>The double persists for 1 round per level of the ninja. Those who interact with the double receive a Will saving throw to recognize that it is fake. The DC of this save is 10 + 1/2 the ninja's level + the ninja's Charisma modifier.</p>
</Pair>
<Pair title="Special">Each use of this ability uses up 1 ki point.</Pair>
</Ability>
<h3 id="ability-master_tricks-ki-tricks" data-hash-target>Ki Tricks</h3>
<p>These tricks use or modify the ninja's ki pool.</p>
<Ability id="ninjatrickaccelerationofform-acceleration-of-form-su-fn2-2" icon={["armor-upgrade","upgrade"]}>
<Pair single id="ninjatrickaccelerationofform-acceleration-of-form-su-fn2-2"><Link to="/ninjatrick/acceleration_of_form">⮞</Link> Acceleration of Form (Su) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-2.2" id="ability-master_tricks-fake-fn-2.2" data-hash-target to="ability-master_tricks-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Standard Action">A ninja with this trick can spend 1 ki point to gain the benefits of <Link to="/spell/displacement">displacement</Link> and <Link to="/spell/haste">haste</Link> for 1 round per 2 ninja levels.</Pair>
</Ability>
<Ability id="ninjatrickdeepcover-deep-cover-ex-fn3-2" icon={["stairs-goal"]}>
<Pair single id="ninjatrickdeepcover-deep-cover-ex-fn3-2"><Link to="/ninjatrick/deep_cover">⮞</Link> Deep Cover (Ex) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-3.2" id="ability-master_tricks-fake-fn-3.2" data-hash-target to="ability-master_tricks-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">A ninja with this trick gains the <em>dual identity</em> and <em>seamless guise</em> class feature as a <Link to="/class/vigilante">vigilante</Link>, except that the ninja can spend 1 ki point to change identities as a <strong className="hl">move action</strong>. The ninja's identities are referred to as social and ninja, rather than social and vigilante.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="ninjatrickmanyguises-many-guises-ex-fn3-3" icon={["stairs-goal"]}>
<Pair single id="ninjatrickmanyguises-many-guises-ex-fn3-3"><Link to="/ninjatrick/many_guises">⮞</Link> Many Guises (Ex) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-3.3" id="ability-master_tricks-fake-fn-3.3" data-hash-target to="ability-master_tricks-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/deep_cover">Deep cover</Link></Pair>
<Pair title="Ability">The ninja can take on any number of mundane guises. Whenever he changes his identity, he has a third option (instead of social or ninja): he can become mundane.</Pair>
<Pair title="Info">The mundane identity is not a specific individual. Each one is created at the moment it is assumed, and quickly forgotten as soon as it is removed. While in a mundane identity, the ninja does not gain the benefit of either his social or ninja identity, but instead appears as a member of his race, usually a common laborer, farmer, or peasant of any gender. His alignment is treated as neutral when he is in his mundane identity.</Pair>
<Pair title="Passive Ability">While in this identity, he receives a +20 circumstance bonus on Disguise checks to appear like an ordinary member of his race. Spells and abilities that are looking for the ninja in either of his other identities fail while he is in his mundane identity.</Pair>
<Pair title="Special">He must build the appearance for this identity using whatever clothing and tools he has at his disposal. While he can use magic (such as a <Link to="/magic-wondrous/hat_of_disguise">hat of disguise</Link>), his mundane identity can never be anything other than an ordinary member of a society or large group (subject to GM discretion).</Pair>
</Ability>
</div>
<Ability id="ninjatrickfalseface-false-face-su-fn2-3" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="ninjatrickfalseface-false-face-su-fn2-3" flavor={<>Like <Link to="/family/oni">oni</Link> who take mortal shapes to infiltrate society, some ninjas can mold their flesh to pass unsuspected.</>}><Link to="/ninjatrick/false_face">⮞</Link> False Face (Su) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-2.3" id="ability-master_tricks-fake-fn-2.3" data-hash-target to="ability-master_tricks-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">A ninja with this trick gains the <Link to="/umr/change_shape">change shape</Link> (any Small or Medium humanoid, <Link to="/spell/alter_self">alter self</Link>) universal monster rule as long as she has at least 1 ki point.</Pair>
</Ability>
<Ability id="ninjatrickghoststep-ghost-step-su-fn1-6" icon={["stairs-goal"]}>
<Pair single id="ninjatrickghoststep-ghost-step-su-fn1-6" flavor="A ninja with this trick can pass through walls as if she were a ghost."><Link to="/ninjatrick/ghost_step">⮞</Link> Ghost Step (Su) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-1.6" id="ability-master_tricks-fake-fn-1.6" data-hash-target to="ability-master_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Swift Action">Until the end of her turn, she can pass through a wall or other surface that is up to 5 feet thick per level as if she were incorporeal. She must exit the solid material by the end of her turn.</Pair>
<Pair title="Special">Each use of this ability uses up 1 ki point.</Pair>
</Ability>
<Ability id="ninjatrickkamiwarden-kami-warden-su-fn2-4" icon={["stairs-goal","shield-reflect","armor-upgrade"]}>
<Pair single id="ninjatrickkamiwarden-kami-warden-su-fn2-4" flavor={<>Ninjas can act as bodyguards as well as assassins or spies; some mystically emulate the relationship between <Link to="/family/kami">kami</Link> and their wards when protecting their charges.</>}><Link to="/ninjatrick/kami_warden">⮞</Link> Kami Warden (Su) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-2.4" id="ability-master_tricks-fake-fn-2.4" data-hash-target to="ability-master_tricks-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">A ninja with this trick gains <Link to="/feat/bodyguard">Bodyguard</Link> and <Link to="/feat/in_harms_way">In Harm's Way</Link> as bonus feats, ignoring their prerequisites.</Pair>
<Pair title="Special">When using In Harm's Way to intercept an attack, the ninja can spend 1 ki point to gains DR 10/cold iron and resistance 10 to acid, electricity, and fire for that attack.</Pair>
</Ability>
<Ability id="ninjatrickkawarimi-kawarimi-su-fn4" icon={["armor-upgrade"]}>
<Pair single id="ninjatrickkawarimi-kawarimi-su-fn4"><Link to="/ninjatrick/kawarimi">⮞</Link> Kawarimi (Su) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-4" id="ability-master_tricks-fake-fn-4" data-hash-target to="ability-master_tricks-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Immediate Action"><p>Once per day when a successful attack is made against a ninja with this ability, she can spend 1 ki point to attempt a <Link to="/skill/stealth">Stealth</Link> check opposed by the attacker's <Link to="/skill/perception">Perception</Link> check. The ninja can attempt this check while being observed as long as she has <Link to="/rule/cover">cover</Link> or <Link to="/rule/concealment">concealment</Link> (or an ability that allows her to attempt Stealth checks without cover or concealment).</p>
<p>If she's successful, the opponent's attack hits an inanimate object that the attacker mistook for the ninja, and the ninja may move into an adjacent square and is hidden from the attacker.</p>
</Pair>
</Ability>
<Ability id="ninjatrickoccultedsoul-occulted-soul-su-fn3-4" icon={["magic-swirl","armor-upgrade"]}>
<Pair single id="ninjatrickoccultedsoul-occulted-soul-su-fn3-4" flavor="A ninja with this trick can still her mind to bypass magical detection."><Link to="/ninjatrick/occulted_soul">⮞</Link> Occulted Soul (Su) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-3.4" id="ability-master_tricks-fake-fn-3.4" data-hash-target to="ability-master_tricks-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The ninja can spend 1 ki point to cast <Link to="/spell/nondetection">nondetection</Link> on herself as a spell-like ability, with a caster level equal to her ninja level.</Pair>
</Ability>
<Ability id="ninjatrickseetheunseen-see-the-unseen-su-fn1-7" icon={["magic-swirl"]}>
<Pair single id="ninjatrickseetheunseen-see-the-unseen-su-fn1-7" flavor="A ninja with this trick learns how to see that which cannot be seen."><Link to="/ninjatrick/see_the_unseen">⮞</Link> See the Unseen (Su) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-1.7" id="ability-master_tricks-fake-fn-1.7" data-hash-target to="ability-master_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Swift Action">The ninja can cast <Link to="/spell/see_invisibility">see invisibility</Link>, using her level as the caster level. Each use of this ability uses up 1 ki point.</Pair>
</Ability>
<Ability id="ninjatrickunboundsteps-unbound-steps-su-fn1-8" icon={["stairs-goal"]}>
<Pair single id="ninjatrickunboundsteps-unbound-steps-su-fn1-8" flavor="This trick allows a ninja to use her ki to walk through the air."><Link to="/ninjatrick/unbound_steps">⮞</Link> Unbound Steps (Su) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-1.8" id="ability-master_tricks-fake-fn-1.8" data-hash-target to="ability-master_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">Whenever the ninja uses the <em>light steps</em> class feature, she can walk on air, rising or descending as she desires. She must end her move on a solid surface.</Pair>
<Pair title="Special">Each use of this ability uses up 1 ki point.</Pair>
</Ability>
<h3 id="ability-master_tricks-other-tricks" data-hash-target>Other Tricks</h3>
<Ability id="ninjatrickadvancedtalent-advanced-talent-fn1-9" icon={["stairs-goal"]}>
<Pair single id="ninjatrickadvancedtalent-advanced-talent-fn1-9"><Link to="/ninjatrick/advanced_talent">⮞</Link> Advanced Talent <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-1.9" id="ability-master_tricks-fake-fn-1.9" data-hash-target to="ability-master_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The ninja can select a <Link to="/ability/advanced_rogue_talent">rogue talent</Link> from the list of Advanced Talents in place of a ninja trick. The ninja cannot select a rogue talent that has the same name as a ninja trick.</Pair>
<Pair title="Special">The ninja cannot select <Link to="/talent/improved_evasion">improved evasion</Link> unless she has <Link to="/ability/evasion">evasion</Link> (either as a class feature or as a <Link to="/ninjatrick/evasion">ninja master trick</Link>).</Pair>
</Ability>
<Ability id="ninjatrickallthestarsinthesky-all-the-stars-in-the-sky-ex-fn2-5" icon={["stairs-goal"]}>
<Pair single id="ninjatrickallthestarsinthesky-all-the-stars-in-the-sky-ex-fn2-5" flavor="Certain master ninjas possess a seemingly limitless supply of their trusted weapons."><Link to="/ninjatrick/all_the_stars_in_the_sky">⮞</Link> All the Stars in the Sky (Ex) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-2.5" id="ability-master_tricks-fake-fn-2.5" data-hash-target to="ability-master_tricks-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">Whenever a ninja with this trick buys a set of 50 identical magic <Link to="/eq-weapon/shuriken">shuriken</Link>, she thereafter replenishes them at no cost and never runs out. This stock of magical shuriken can be upgraded as though it were a normal magic weapon, and shuriken upgraded this way likewise never run out.</Pair>
</Ability>
<Ability id="ninjatrickdeadlyshuriken-deadly-shuriken-ex-fn1-10" icon={["bowman","upgrade"]}>
<Pair single id="ninjatrickdeadlyshuriken-deadly-shuriken-ex-fn1-10"><Link to="/ninjatrick/deadly_shuriken">⮞</Link> Deadly Shuriken (Ex) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-1.10" id="ability-master_tricks-fake-fn-1.10" data-hash-target to="ability-master_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Full-Round Action">A ninja with this master trick can take careful aim and pool all of her attack potential into a single, deadly <Link to="/eq-weapon/shuriken">shuriken</Link> throw. When she does this, she throws a single shuriken at a single target, but makes as many attack rolls as she can, based on her base attack bonus. She makes the attack rolls in order from highest bonus to lowest, as if she were making a full attack. If any of the attack rolls hit the target, the attack hits. For each additional successful attack roll beyond the first, the ninja increases the damage by 1d6.</Pair>
<Pair title="Special"><p><Link to="/misc/precision_damage">Precision damage</Link> and extra damage from weapon special abilities (such as <Link to="/magic-enh/flaming">flaming</Link>) are added with damage modifiers and are not increased by this advanced talent.</p>
<p>If one or more rolls are critical threats, she confirms the critical once using her highest base attack bonus -5. For each critical threat beyond the first, she reduces this penalty by 1 (to a maximum of 0).</p>
</Pair>
</Ability>
<Ability id="ninjatrickevasion-evasion-ex-fn1-11" icon={["armor-upgrade"]}>
<Pair single id="ninjatrickevasion-evasion-ex-fn1-11"><Link to="/ninjatrick/evasion">⮞</Link> Evasion (Ex) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-1.11" id="ability-master_tricks-fake-fn-1.11" data-hash-target to="ability-master_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">A ninja can avoid even magical and unusual attacks with great agility. If she makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, she instead takes no damage.</Pair>
<Pair title="Special"><Link to="/ability/evasion">Evasion</Link> can be used only if the ninja is wearing light armor or no armor. A helpless ninja does not gain the benefit of <em>evasion.</em></Pair>
</Ability>
<Ability id="ninjatrickfeat-feat-fn1-12" icon={["stairs-goal"]}>
<Pair single id="ninjatrickfeat-feat-fn1-12"><Link to="/ninjatrick/feat">⮞</Link> Feat <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-1.12" id="ability-master_tricks-fake-fn-1.12" data-hash-target to="ability-master_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">A ninja may gain any feat that she qualifies for in place of a ninja trick.</Pair>
</Ability>
<Ability id="ninjatrickspiritualcompanion-spiritual-companion-ex-fn2-6" icon={["stairs-goal"]}>
<Pair single id="ninjatrickspiritualcompanion-spiritual-companion-ex-fn2-6" flavor="While ninjas are accustomed to solitude, some form pacts with magical beings to seek aid and advice."><Link to="/ninjatrick/spiritual_companion">⮞</Link> Spiritual Companion (Ex) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-2.6" id="ability-master_tricks-fake-fn-2.6" data-hash-target to="ability-master_tricks-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">A ninja with this trick gains an <Link to="/feat/improved_familiar">improved familiar</Link>, treating her ninja level as her wizard level. The ninja can select any of the following as her familiar: <Link to="/monster/calligraphy_wyrm">calligraphy wyrm</Link>, <Link to="/monster/pipefox">pipefox</Link>, <Link to="/monster/shikigami">shikigami kami</Link>, or <Link to="/monster/spirit_oni">spirit oni</Link>. The ninja must have an alignment compatible with the chosen familiar.</Pair>
</Ability>
<Ability id="ninjatrickunarmedcombatmastery-unarmed-combat-mastery-ex-fn1-13" icon={["mailed-fist","upgrade"]}>
<Pair single id="ninjatrickunarmedcombatmastery-unarmed-combat-mastery-ex-fn1-13"><Link to="/ninjatrick/unarmed_combat_mastery">⮞</Link> Unarmed Combat Mastery (Ex) <sup><InnerLink showBacklink="backlink-ability-master_tricks-fake-fn-1.13" id="ability-master_tricks-fake-fn-1.13" data-hash-target to="ability-master_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> (whether from <Link to="/ninjatrick/unarmed_combat_training">unarmed combat training</Link> or not)</Pair>
<Pair title="Ability">A ninja who selects this trick deals damage with her unarmed strikes as if she were a <Link to="/class/monk">monk</Link> of her ninja level - 4.</Pair>
<Pair title="Special">If the ninja has levels in monk, this ability stacks with monk levels to determine how much damage she can do with her unarmed strikes.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-master_tricks-label">Footnotes</h3><ol>
<li id="ability-master_tricks-fake-fn-1-target"><p><Link to="/source/ultimate_combat">Ultimate Combat</Link> <InnerLink aria-label="Back to reference 1" id="backlink-ability-master_tricks-fake-fn-1" data-hash-target to="ability-master_tricks-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-master_tricks-fake-fn-1.2" data-hash-target to="ability-master_tricks-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-master_tricks-fake-fn-1.3" data-hash-target to="ability-master_tricks-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-master_tricks-fake-fn-1.4" data-hash-target to="ability-master_tricks-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-master_tricks-fake-fn-1.5" data-hash-target to="ability-master_tricks-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-master_tricks-fake-fn-1.6" data-hash-target to="ability-master_tricks-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-master_tricks-fake-fn-1.7" data-hash-target to="ability-master_tricks-fake-fn-1.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-master_tricks-fake-fn-1.8" data-hash-target to="ability-master_tricks-fake-fn-1.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-master_tricks-fake-fn-1.9" data-hash-target to="ability-master_tricks-fake-fn-1.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-master_tricks-fake-fn-1.10" data-hash-target to="ability-master_tricks-fake-fn-1.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-master_tricks-fake-fn-1.11" data-hash-target to="ability-master_tricks-fake-fn-1.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-master_tricks-fake-fn-1.12" data-hash-target to="ability-master_tricks-fake-fn-1.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-master_tricks-fake-fn-1.13" data-hash-target to="ability-master_tricks-fake-fn-1.13">↩<sup>13</sup></InnerLink></p></li>
<li id="ability-master_tricks-fake-fn-2-target"><p><Link to="/source/chronicle_of_legends">Chronicle of Legends</Link> <InnerLink aria-label="Back to reference 2" id="backlink-ability-master_tricks-fake-fn-2" data-hash-target to="ability-master_tricks-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-master_tricks-fake-fn-2.2" data-hash-target to="ability-master_tricks-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-master_tricks-fake-fn-2.3" data-hash-target to="ability-master_tricks-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-master_tricks-fake-fn-2.4" data-hash-target to="ability-master_tricks-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-master_tricks-fake-fn-2.5" data-hash-target to="ability-master_tricks-fake-fn-2.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-master_tricks-fake-fn-2.6" data-hash-target to="ability-master_tricks-fake-fn-2.6">↩<sup>6</sup></InnerLink></p></li>
<li id="ability-master_tricks-fake-fn-3-target"><p><Link to="/source/martial_arts_handbook">Martial Arts Handbook</Link> <InnerLink aria-label="Back to reference 3" id="backlink-ability-master_tricks-fake-fn-3" data-hash-target to="ability-master_tricks-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-master_tricks-fake-fn-3.2" data-hash-target to="ability-master_tricks-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-master_tricks-fake-fn-3.3" data-hash-target to="ability-master_tricks-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-master_tricks-fake-fn-3.4" data-hash-target to="ability-master_tricks-fake-fn-3.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-master_tricks-fake-fn-4-target"><p><Link to="/source/champions_of_balance">Champions of Balance</Link> <InnerLink aria-label="Back to reference 4" id="backlink-ability-master_tricks-fake-fn-4" data-hash-target to="ability-master_tricks-fake-fn-4">↩</InnerLink></p></li>
</ol></section></div>};
const _mercies = {hasJL:true,title: "Mercies", topLink: ["Paladin","class/paladin"], jsx: <div className="compilation"><div className="jumpList" id="ability-mercies-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-mercies-3rd-level-mercies">3rd-Level Mercies</InnerLink></li><li><InnerLink toTop to="ability-mercies-6th-level-mercies">6th-Level Mercies</InnerLink></li><li><InnerLink toTop to="ability-mercies-9th-level-mercies">9th-Level Mercies</InnerLink></li><li><InnerLink toTop to="ability-mercies-12th-level-mercies">12th-Level Mercies</InnerLink></li></ul></div><h2 id="ability-mercies-mercies">Mercies</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>At 3rd level, and every three levels thereafter, a paladin can select one mercy. Each mercy adds an effect to the paladin's <Link to="/ability/lay_on_hands">lay on hands</Link> ability. Whenever the paladin uses lay on hands to heal damage to one target, the target also receives the additional effects from all of the mercies possessed by the paladin. A mercy can remove a condition caused by a curse, disease, or poison without curing the affliction. Such conditions return after 1 hour unless the mercy actually removes the affliction that causes the condition.</p>
<h3 id="ability-mercies-3rd-level-mercies" data-hash-target>3rd-Level Mercies</h3>
<Block>
<Row><Cell><Link to="/mercy/deceived">⮞</Link> Deceived</Cell><Cell>The target can immediately attempt a new saving throw to disbelieve any ongoing illusions that it failed to disbelieve within the last minute. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-1" id="ability-mercies-fake-fn-1" data-hash-target to="ability-mercies-fake-fn-1-target">1</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/fatigued">⮞</Link> Fatigued</Cell><Cell>The target is no longer fatigued. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-2" id="ability-mercies-fake-fn-2" data-hash-target to="ability-mercies-fake-fn-2-target">2</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/riled">⮞</Link> Riled</Cell><Cell>The paladin's lay on hands also acts as <Link to="/spell/calm_emotions">calm emotions</Link>, but only for the purpose of suppressing morale bonuses (such as from the <Link to="/spell/rage">rage</Link> spell) and emotion effects that aren't fear effects. Use the paladin's level as the caster level. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-1.2" id="ability-mercies-fake-fn-1.2" data-hash-target to="ability-mercies-fake-fn-1-target">1</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/shaken">⮞</Link> Shaken</Cell><Cell>The target is no longer shaken. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-2.2" id="ability-mercies-fake-fn-2.2" data-hash-target to="ability-mercies-fake-fn-2-target">2</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/sickened">⮞</Link> Sickened</Cell><Cell>The target is no longer sickened. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-2.3" id="ability-mercies-fake-fn-2.3" data-hash-target to="ability-mercies-fake-fn-2-target">2</InnerLink></sup></Cell></Row></Block>
<h3 id="ability-mercies-6th-level-mercies" data-hash-target>6th-Level Mercies</h3>
<Block>
<Row><Cell><Link to="/mercy/dazed">⮞</Link> Dazed</Cell><Cell>The target is no longer dazed. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-2.4" id="ability-mercies-fake-fn-2.4" data-hash-target to="ability-mercies-fake-fn-2-target">2</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/diseased">⮞</Link> Diseased</Cell><Cell>The paladin's lay on hands ability also acts as <Link to="/spell/remove_disease">remove disease</Link>, using the paladin's level as the caster level. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-2.5" id="ability-mercies-fake-fn-2.5" data-hash-target to="ability-mercies-fake-fn-2-target">2</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/enfeebled">⮞</Link> Enfeebled</Cell><Cell>The paladin <Link to="/spell/dispel">dispels</Link> any magical effects that are reducing one of the target's ability scores (paladin's choice). <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-1.3" id="ability-mercies-fake-fn-1.3" data-hash-target to="ability-mercies-fake-fn-1-target">1</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/haunted">⮞</Link> Haunted</Cell><Cell>The paladin's lay on hands also acts as <Link to="/spell/protection_from_evil">protection from evil</Link>, but only for the purpose of allowing a new saving throw against enchantment (charm) and enchantment (compulsion) effects, making the target immune to any attempts to possess or exercise mental control over the target, or preventing a life force from controlling the target (all as described in the second effect of protection from evil). Use the paladin's level as the caster level. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-1.4" id="ability-mercies-fake-fn-1.4" data-hash-target to="ability-mercies-fake-fn-1-target">1</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/staggered">⮞</Link> Staggered</Cell><Cell>The target is no longer staggered, unless the target is at exactly 0 hit points. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-2.6" id="ability-mercies-fake-fn-2.6" data-hash-target to="ability-mercies-fake-fn-2-target">2</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/targeted">⮞</Link> Targeted</Cell><Cell>The paladin's lay on hands also acts as <Link to="/spell/sanctuary">sanctuary</Link>, using the paladin's level as the caster level. The saving throw DC to negate this effect is equal to 10 + 1/2 the paladin's level + the paladin's Charisma modifier. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-1.5" id="ability-mercies-fake-fn-1.5" data-hash-target to="ability-mercies-fake-fn-1-target">1</InnerLink></sup></Cell></Row></Block>
<h3 id="ability-mercies-9th-level-mercies" data-hash-target>9th-Level Mercies</h3>
<Block>
<Row><Cell><Link to="/mercy/confused">⮞</Link> Confused</Cell><Cell>The target is no longer confused. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-1.6" id="ability-mercies-fake-fn-1.6" data-hash-target to="ability-mercies-fake-fn-1-target">1</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/cursed">⮞</Link> Cursed</Cell><Cell>The paladin's lay on hands ability also acts as <Link to="/spell/remove_curse">remove curse</Link>, using the paladin's level as the caster level. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-3" id="ability-mercies-fake-fn-3" data-hash-target to="ability-mercies-fake-fn-3-target">3</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/exhausted">⮞</Link> Exhausted</Cell><Cell>The target is no longer exhausted. The paladin must have the <Link to="/mercy/fatigued">fatigued</Link> mercy before selecting this mercy. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-3.2" id="ability-mercies-fake-fn-3.2" data-hash-target to="ability-mercies-fake-fn-3-target">3</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/frightened">⮞</Link> Frightened</Cell><Cell>The target is no longer frightened. The paladin must have the <Link to="/mercy/shaken">shaken</Link> mercy before selecting this mercy. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-3.3" id="ability-mercies-fake-fn-3.3" data-hash-target to="ability-mercies-fake-fn-3-target">3</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/injured">⮞</Link> Injured</Cell><Cell>The target gains <Link to="/umr/fast_healing">fast healing</Link> 3 for a number of rounds equal to 1/2 the paladin's level. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-1.7" id="ability-mercies-fake-fn-1.7" data-hash-target to="ability-mercies-fake-fn-1-target">1</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/nauseated">⮞</Link> Nauseated</Cell><Cell>The target is no longer nauseated. The paladin must have the <Link to="/mercy/sickened">sickened</Link> mercy before selecting this mercy. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-3.4" id="ability-mercies-fake-fn-3.4" data-hash-target to="ability-mercies-fake-fn-3-target">3</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/poisoned">⮞</Link> Poisoned</Cell><Cell>The paladin's lay on hands ability also acts as <Link to="/spell/neutralize_poison">neutralize poison</Link>, using the paladin's level as the caster level. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-3.5" id="ability-mercies-fake-fn-3.5" data-hash-target to="ability-mercies-fake-fn-3-target">3</InnerLink></sup></Cell></Row></Block>
<h3 id="ability-mercies-12th-level-mercies" data-hash-target>12th-Level Mercies</h3>
<Block>
<Row><Cell><Link to="/mercy/amputated">⮞</Link> Amputated</Cell><Cell>The paladin's lay on hands also acts as <Link to="/spell/regenerate">regenerate</Link>, but only for the purposes of regrowing severed body members, broken bones, and ruined organs. The paladin must have the <Link to="/mercy/injured">injured</Link> mercy before she can select this mercy. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-1.8" id="ability-mercies-fake-fn-1.8" data-hash-target to="ability-mercies-fake-fn-1-target">1</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/blinded">⮞</Link> Blinded</Cell><Cell>The target is no longer blinded. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-3.6" id="ability-mercies-fake-fn-3.6" data-hash-target to="ability-mercies-fake-fn-3-target">3</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/deafened">⮞</Link> Deafened</Cell><Cell>The target is no longer deafened. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-3.7" id="ability-mercies-fake-fn-3.7" data-hash-target to="ability-mercies-fake-fn-3-target">3</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/ensorcelled">⮞</Link> Ensorcelled</Cell><Cell>The paladin's lay on hands also acts as <Link to="/spell/dispel_magic">dispel magic</Link>, using the paladin's level as her caster level (maximum 20). <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-1.9" id="ability-mercies-fake-fn-1.9" data-hash-target to="ability-mercies-fake-fn-1-target">1</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/paralyzed">⮞</Link> Paralyzed</Cell><Cell>The target is no longer paralyzed. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-3.8" id="ability-mercies-fake-fn-3.8" data-hash-target to="ability-mercies-fake-fn-3-target">3</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/petrified">⮞</Link> Petrified</Cell><Cell>The paladin's lay on hands ability also acts as <Link to="/spell/stone_to_flesh">stone to flesh</Link>, but only for the purpose of removing the <Link to="/rule/petrified">petrified</Link> condition from a creature. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-1.10" id="ability-mercies-fake-fn-1.10" data-hash-target to="ability-mercies-fake-fn-1-target">1</InnerLink></sup></Cell></Row></Block>
<Block>
<Row><Cell><Link to="/mercy/stunned">⮞</Link> Stunned</Cell><Cell>The target is no longer stunned. <sup><InnerLink showBacklink="backlink-ability-mercies-fake-fn-3.9" id="ability-mercies-fake-fn-3.9" data-hash-target to="ability-mercies-fake-fn-3-target">3</InnerLink></sup></Cell></Row></Block>
<section data-footnotes><h3 id="ability-mercies-label">Footnotes</h3><ol>
<li id="ability-mercies-fake-fn-1-target"><p><Link to="/source/healers_handbook">Healer's Handbook</Link> pg. 25 <InnerLink aria-label="Back to reference 1" id="backlink-ability-mercies-fake-fn-1" data-hash-target to="ability-mercies-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-mercies-fake-fn-1.2" data-hash-target to="ability-mercies-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-mercies-fake-fn-1.3" data-hash-target to="ability-mercies-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-mercies-fake-fn-1.4" data-hash-target to="ability-mercies-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-mercies-fake-fn-1.5" data-hash-target to="ability-mercies-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-mercies-fake-fn-1.6" data-hash-target to="ability-mercies-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-mercies-fake-fn-1.7" data-hash-target to="ability-mercies-fake-fn-1.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-mercies-fake-fn-1.8" data-hash-target to="ability-mercies-fake-fn-1.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-mercies-fake-fn-1.9" data-hash-target to="ability-mercies-fake-fn-1.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-mercies-fake-fn-1.10" data-hash-target to="ability-mercies-fake-fn-1.10">↩<sup>10</sup></InnerLink></p></li>
<li id="ability-mercies-fake-fn-2-target"><p><Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link> pg. 61 <InnerLink aria-label="Back to reference 2" id="backlink-ability-mercies-fake-fn-2" data-hash-target to="ability-mercies-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-mercies-fake-fn-2.2" data-hash-target to="ability-mercies-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-mercies-fake-fn-2.3" data-hash-target to="ability-mercies-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-mercies-fake-fn-2.4" data-hash-target to="ability-mercies-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-mercies-fake-fn-2.5" data-hash-target to="ability-mercies-fake-fn-2.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-mercies-fake-fn-2.6" data-hash-target to="ability-mercies-fake-fn-2.6">↩<sup>6</sup></InnerLink></p></li>
<li id="ability-mercies-fake-fn-3-target"><p>PRPG Core Rulebook pg. 62 <InnerLink aria-label="Back to reference 3" id="backlink-ability-mercies-fake-fn-3" data-hash-target to="ability-mercies-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-mercies-fake-fn-3.2" data-hash-target to="ability-mercies-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-mercies-fake-fn-3.3" data-hash-target to="ability-mercies-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-mercies-fake-fn-3.4" data-hash-target to="ability-mercies-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-mercies-fake-fn-3.5" data-hash-target to="ability-mercies-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-mercies-fake-fn-3.6" data-hash-target to="ability-mercies-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-mercies-fake-fn-3.7" data-hash-target to="ability-mercies-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-mercies-fake-fn-3.8" data-hash-target to="ability-mercies-fake-fn-3.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-mercies-fake-fn-3.9" data-hash-target to="ability-mercies-fake-fn-3.9">↩<sup>9</sup></InnerLink></p></li>
</ol></section></div>};
const _mysteries = {hasJL:true,title: "Oracle Mysteries", topLink: ["Oracle","class/oracle"], jsx: <><div className="jumpList" id="ability-mysteries-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-mysteries-mysteries-by-deity">Mysteries by Deity</InnerLink></li></ul></div><h2 id="ability-mysteries-mysteries">Mysteries</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 45</Link><br/>Each oracle must choose from among the following mysteries. Unless otherwise noted, the DC to save against these revelations is equal to 10 + 1/2 the oracle's level + the oracle's Charisma modifier.</p>
<ScrollContainer id="ability-mysteries--table-0"><table>
<thead>
<tr>
<th>Mystery</th>
<th>Deities</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/mystery/ancestor">Ancestor<IonRippleEffect /></Link></td>
<td><Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/pharasma">Pharasma</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/apocalypse">Apocalypse<IonRippleEffect /></Link></td>
<td><Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/rovagug">Rovagug</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/ascetic">Ascetic<IonRippleEffect /></Link></td>
<td><Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/irori">Irori</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/battle">Battle<IonRippleEffect /></Link></td>
<td><Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/rovagug">Rovagug</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/bones">Bones<IonRippleEffect /></Link></td>
<td><Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/urgathoa">Urgathoa</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/dark_tapestry">Dark Tapestry<IonRippleEffect /></Link></td>
<td><Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/dragon">Dragon<IonRippleEffect /></Link></td>
<td><Link to="/faith/dahak">Dahak</Link>, <Link to="/faith/general_susumu">General Susumu</Link>, <Link to="/faith/nalinivati">Nalinivati</Link>, <Link to="/faith/ragadahn">Ragadahn</Link>, <Link to="/faith/shizuru">Shizuru</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/elemental">Elemental<IonRippleEffect /></Link></td>
<td><Link to="/main/faiths_pantheons">Elemental Lords</Link>, <Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/yamatsumi">Yamatsumi</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/flame">Flame<IonRippleEffect /></Link></td>
<td><Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/godclaw">Godclaw<IonRippleEffect /></Link></td>
<td><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/torag">Torag</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/heavens">Heavens<IonRippleEffect /></Link></td>
<td><Link to="/faith/desna">Desna</Link>, <Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/intrigue">Intrigue<IonRippleEffect /></Link></td>
<td><Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/norgorber">Norgorber</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/juju">Juju<IonRippleEffect /></Link></td>
<td><Link to="/faith/wendo">Wendo</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/life">Life<IonRippleEffect /></Link></td>
<td><Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/lore">Lore<IonRippleEffect /></Link></td>
<td><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/nethys">Nethys</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/lunar">Lunar<IonRippleEffect /></Link></td>
<td><Link to="/faith/ashava">Ashava</Link>, <Link to="/faith/desna">Desna</Link>, <Link to="/faith/groetus">Groetus</Link>, <Link to="/faith/jezelda">Jezelda</Link>, <Link to="/faith/tsukiyo">Tsukiyo</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/metal">Metal<IonRippleEffect /></Link></td>
<td><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/torag">Torag</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/nature">Nature<IonRippleEffect /></Link></td>
<td><Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/gozreh">Gozreh</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/occult">Occult<IonRippleEffect /></Link></td>
<td><Link to="/faith/magdh">Magdh</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/tsukiyo">Tsukiyo</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/outer_rifts">Outer Rifts<IonRippleEffect /></Link></td>
<td><Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/groetus">Groetus</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/main/faiths_pantheons">Demon Lords</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/reaper">Reaper<IonRippleEffect /></Link></td>
<td><Link to="/faith/achaekek">Achaekek</Link>, <Link to="/faith/groetus">Groetus</Link>, <Link to="/faith/pharasma">Pharasma</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/shadow">Shadow<IonRippleEffect /></Link></td>
<td><Link to="/faith/groetus">Groetus</Link>, <Link to="/faith/lao_shu_po">Lao Shu Po</Link>, <Link to="/faith/tsukiyo">Tsukiyo</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/solar">Solar<IonRippleEffect /></Link></td>
<td><Link to="/faith/desna">Desna</Link>, <Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/keltheald">Keltheald</Link>, <Link to="/faith/lalaci">Lalaci</Link>, <Link to="/faith/nurgal">Nurgal</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/ymeri">Ymeri</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/spellscar">Spellscar<IonRippleEffect /></Link></td>
<td><Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/zyphus">Zyphus</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/stone">Stone<IonRippleEffect /></Link></td>
<td><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/torag">Torag</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/streets">Streets<IonRippleEffect /></Link></td>
<td><Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/milani">Milani</Link>, <Link to="/faith/norgorber">Norgorber</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/succor">Succor<IonRippleEffect /></Link></td>
<td><Link to="/faith/milani">Milani</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/qi_zhong">Qi Zhong</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/time">Time<IonRippleEffect /></Link></td>
<td><Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/pharasma">Pharasma</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/volcano">Volcano<IonRippleEffect /></Link></td>
<td><Link to="/faith/flauros">Flauros</Link>, <Link to="/faith/mhar">Mhar</Link>, <Link to="/faith/rovagug">Rovagug</Link>, <Link to="/faith/valani">Valani</Link>, <Link to="/faith/yamatsumi">Yamatsumi</Link>, <Link to="/faith/ymeri">Ymeri</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/waves">Waves<IonRippleEffect /></Link></td>
<td><Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/pharasma">Pharasma</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/whimsy">Whimsy<IonRippleEffect /></Link></td>
<td><Link to="/faith/the_green_mother">The Green Mother</Link>, <Link to="/faith/the_lantern_king">The Lantern King</Link>, <Link to="/faith/ng">Ng</Link>, <Link to="/faith/shyka">Shyka</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/wind">Wind<IonRippleEffect /></Link></td>
<td><Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/shelyn">Shelyn</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/winter">Winter<IonRippleEffect /></Link></td>
<td><Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/kostchtchie">Kostchtchie</Link>, <Link to="/faith/ng">Ng</Link>, <Link to="/faith/rovagug">Rovagug</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/mystery/wood">Wood<IonRippleEffect /></Link></td>
<td><Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/gozreh">Gozreh</Link></td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="ability-mysteries-mysteries-by-deity" data-hash-target>Mysteries by Deity</h3>
<ScrollContainer id="ability-mysteries--table-1"><table>
<thead>
<tr>
<th>Deity</th>
<th>Mysteries</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/faith/abadar">Abadar<IonRippleEffect /></Link></td>
<td><Link to="/mystery/godclaw">Godclaw</Link>, <Link to="/mystery/lore">Lore</Link>, <Link to="/mystery/metal">Metal</Link>, <Link to="/mystery/stone">Stone</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/achaekek">Achaekek<IonRippleEffect /></Link></td>
<td><Link to="/mystery/reaper">Reaper</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ashava">Ashava<IonRippleEffect /></Link></td>
<td><Link to="/mystery/lunar">Lunar</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/asmodeus">Asmodeus<IonRippleEffect /></Link></td>
<td><Link to="/mystery/flame">Flame</Link>, <Link to="/mystery/godclaw">Godclaw</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/calistria">Calistria<IonRippleEffect /></Link></td>
<td><Link to="/mystery/intrigue">Intrigue</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/cayden_cailean">Cayden Cailean<IonRippleEffect /></Link></td>
<td><Link to="/mystery/battle">Battle</Link>, <Link to="/mystery/streets">Streets</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/dahak">Dahak<IonRippleEffect /></Link></td>
<td><Link to="/mystery/dragon">Dragon</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/main/faiths_pantheons">Demon Lords<IonRippleEffect /></Link></td>
<td><Link to="/mystery/outer_rifts">Outer Rifts</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/desna">Desna<IonRippleEffect /></Link></td>
<td><Link to="/mystery/heavens">Heavens</Link>, <Link to="/mystery/lunar">Lunar</Link>, <Link to="/mystery/solar">Solar</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/main/faiths_pantheons">Elemental Lords<IonRippleEffect /></Link></td>
<td><Link to="/mystery/elemental">Elemental</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/erastil">Erastil<IonRippleEffect /></Link></td>
<td><Link to="/mystery/ancestor">Ancestor</Link>, <Link to="/mystery/nature">Nature</Link>, <Link to="/mystery/wood">Wood</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/flauros">Flauros<IonRippleEffect /></Link></td>
<td><Link to="/mystery/volcano">Volcano</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/general_susumu">General Susumu<IonRippleEffect /></Link></td>
<td><Link to="/mystery/dragon">Dragon</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/gorum">Gorum<IonRippleEffect /></Link></td>
<td><Link to="/mystery/apocalypse">Apocalypse</Link>, <Link to="/mystery/battle">Battle</Link>, <Link to="/mystery/metal">Metal</Link>, <Link to="/mystery/stone">Stone</Link>, <Link to="/mystery/winter">Winter</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/gozreh">Gozreh<IonRippleEffect /></Link></td>
<td><Link to="/mystery/ascetic">Ascetic</Link>, <Link to="/mystery/elemental">Elemental</Link>, <Link to="/mystery/heavens">Heavens</Link>, <Link to="/mystery/life">Life</Link>, <Link to="/mystery/nature">Nature</Link>, <Link to="/mystery/solar">Solar</Link>, <Link to="/mystery/spellscar">Spellscar</Link>, <Link to="/mystery/time">Time</Link>, <Link to="/mystery/waves">Waves</Link>, <Link to="/mystery/wind">Wind</Link>, <Link to="/mystery/winter">Winter</Link>, <Link to="/mystery/wood">Wood</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/the_green_mother">Green Mother, The<IonRippleEffect /></Link></td>
<td><Link to="/mystery/whimsy">Whimsy</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/groetus">Groetus<IonRippleEffect /></Link></td>
<td><Link to="/mystery/lunar">Lunar</Link>, <Link to="/mystery/outer_rifts">Outer Rifts</Link>, <Link to="/mystery/reaper">Reaper</Link>, <Link to="/mystery/shadow">Shadow</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/iomedae">Iomedae<IonRippleEffect /></Link></td>
<td><Link to="/mystery/battle">Battle</Link>, <Link to="/mystery/godclaw">Godclaw</Link>, <Link to="/mystery/outer_rifts">Outer Rifts</Link>, <Link to="/mystery/solar">Solar</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/irori">Irori<IonRippleEffect /></Link></td>
<td><Link to="/mystery/ancestor">Ancestor</Link>, <Link to="/mystery/ascetic">Ascetic</Link>, <Link to="/mystery/godclaw">Godclaw</Link>, <Link to="/mystery/lore">Lore</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/jezelda">Jezelda<IonRippleEffect /></Link></td>
<td><Link to="/mystery/lunar">Lunar</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/keltheald">Keltheald<IonRippleEffect /></Link></td>
<td><Link to="/mystery/solar">Solar</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/kostchtchie">Kostchtchie<IonRippleEffect /></Link></td>
<td><Link to="/mystery/winter">Winter</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/lalaci">Lalaci<IonRippleEffect /></Link></td>
<td><Link to="/mystery/solar">Solar</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/lamashtu">Lamashtu<IonRippleEffect /></Link></td>
<td><Link to="/mystery/dark_tapestry">Dark Tapestry</Link>, <Link to="/mystery/outer_rifts">Outer Rifts</Link>, <Link to="/mystery/spellscar">Spellscar</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/the_lantern_king">Lantern King, The<IonRippleEffect /></Link></td>
<td><Link to="/mystery/whimsy">Whimsy</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/lao_shu_po">Lao Shu Po<IonRippleEffect /></Link></td>
<td><Link to="/mystery/shadow">Shadow</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/magdh">Magdh<IonRippleEffect /></Link></td>
<td><Link to="/mystery/occult">Occult</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/mhar">Mhar<IonRippleEffect /></Link></td>
<td><Link to="/mystery/volcano">Volcano</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/milani">Milani<IonRippleEffect /></Link></td>
<td><Link to="/mystery/streets">Streets</Link>, <Link to="/mystery/succor">Succor</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nalinivati">Nalinivati<IonRippleEffect /></Link></td>
<td><Link to="/mystery/dragon">Dragon</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nethys">Nethys<IonRippleEffect /></Link></td>
<td><Link to="/mystery/elemental">Elemental</Link>, <Link to="/mystery/lore">Lore</Link>, <Link to="/mystery/occult">Occult</Link>, <Link to="/mystery/spellscar">Spellscar</Link>, <Link to="/mystery/time">Time</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ng">Ng<IonRippleEffect /></Link></td>
<td><Link to="/mystery/whimsy">Whimsy</Link>, <Link to="/mystery/winter">Winter</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/norgorber">Norgorber<IonRippleEffect /></Link></td>
<td><Link to="/mystery/bones">Bones</Link>, <Link to="/mystery/dark_tapestry">Dark Tapestry</Link>, <Link to="/mystery/intrigue">Intrigue</Link>, <Link to="/mystery/streets">Streets</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nurgal">Nurgal<IonRippleEffect /></Link></td>
<td><Link to="/mystery/solar">Solar</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/pharasma">Pharasma<IonRippleEffect /></Link></td>
<td><Link to="/mystery/ancestor">Ancestor</Link>, <Link to="/mystery/bones">Bones</Link>, <Link to="/mystery/heavens">Heavens</Link>, <Link to="/mystery/life">Life</Link>, <Link to="/mystery/occult">Occult</Link>, <Link to="/mystery/reaper">Reaper</Link>, <Link to="/mystery/succor">Succor</Link>, <Link to="/mystery/time">Time</Link>, <Link to="/mystery/waves">Waves</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/qi_zhong">Qi Zhong<IonRippleEffect /></Link></td>
<td><Link to="/mystery/succor">Succor</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ragadahn">Ragadahn<IonRippleEffect /></Link></td>
<td><Link to="/mystery/dragon">Dragon</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/rovagug">Rovagug<IonRippleEffect /></Link></td>
<td><Link to="/mystery/apocalypse">Apocalypse</Link>, <Link to="/mystery/battle">Battle</Link>, <Link to="/mystery/volcano">Volcano</Link>, <Link to="/mystery/winter">Winter</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/sarenrae">Sarenrae<IonRippleEffect /></Link></td>
<td><Link to="/mystery/flame">Flame</Link>, <Link to="/mystery/heavens">Heavens</Link>, <Link to="/mystery/life">Life</Link>, <Link to="/mystery/solar">Solar</Link>, <Link to="/mystery/succor">Succor</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/shelyn">Shelyn<IonRippleEffect /></Link></td>
<td><Link to="/mystery/wind">Wind</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/shizuru">Shizuru<IonRippleEffect /></Link></td>
<td><Link to="/mystery/dragon">Dragon</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/shyka">Shyka<IonRippleEffect /></Link></td>
<td><Link to="/mystery/whimsy">Whimsy</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/torag">Torag<IonRippleEffect /></Link></td>
<td><Link to="/mystery/godclaw">Godclaw</Link>, <Link to="/mystery/metal">Metal</Link>, <Link to="/mystery/stone">Stone</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/tsukiyo">Tsukiyo<IonRippleEffect /></Link></td>
<td><Link to="/mystery/lunar">Lunar</Link>, <Link to="/mystery/occult">Occult</Link>, <Link to="/mystery/shadow">Shadow</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/urgathoa">Urgathoa<IonRippleEffect /></Link></td>
<td><Link to="/mystery/bones">Bones</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/valani">Valani<IonRippleEffect /></Link></td>
<td><Link to="/mystery/volcano">Volcano</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/wendo">Wendo<IonRippleEffect /></Link></td>
<td><Link to="/mystery/juju">Juju</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/yamatsumi">Yamatsumi<IonRippleEffect /></Link></td>
<td><Link to="/mystery/elemental">Elemental</Link>, <Link to="/mystery/volcano">Volcano</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ymeri">Ymeri<IonRippleEffect /></Link></td>
<td><Link to="/mystery/solar">Solar</Link>, <Link to="/mystery/volcano">Volcano</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zon_kuthon">Zon-Kuthon<IonRippleEffect /></Link></td>
<td><Link to="/mystery/dark_tapestry">Dark Tapestry</Link>, <Link to="/mystery/lunar">Lunar</Link>, <Link to="/mystery/shadow">Shadow</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zyphus">Zyphus<IonRippleEffect /></Link></td>
<td><Link to="/mystery/spellscar">Spellscar</Link></td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _ninja_tricks = {hasJL:true,title: "Ninja Tricks", topLink: ["Ninja","class/ninja"], jsx: <div className="compilation"><div className="jumpList" id="ability-ninja_tricks-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-ninja_tricks-primary-sneak-attack-tricks">Primary Sneak Attack Tricks</InnerLink></li><li><InnerLink toTop to="ability-ninja_tricks-other-sneak-attack-tricks">Other Sneak Attack Tricks</InnerLink></li><li><InnerLink toTop to="ability-ninja_tricks-ki-tricks">Ki Tricks</InnerLink></li><li><InnerLink toTop to="ability-ninja_tricks-other-tricks">Other Tricks</InnerLink></li></ul></div><h2 id="ability-ninja_tricks-ninja-tricks">Ninja Tricks</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link><br/>As a ninja continues her training, she learns a number of tricks that allow her to confuse her foes and grant her supernatural abilities. Starting at 2nd level, a ninja gains one ninja trick. She gains one additional ninja trick for every 2 levels attained after 2nd. Unless otherwise noted, a ninja cannot select an individual ninja trick more than once.</p>
<h3 id="ability-ninja_tricks-primary-sneak-attack-tricks" data-hash-target>Primary Sneak Attack Tricks</h3>
<p>These tricks add effects to a ninja's <Link to="/ability/sneak_attack">sneak attack</Link>. Only one of these tricks can be applied to an individual attack and the decision must be made before the attack is made.</p>
<Ability id="ninjatrickbleedingattack-bleeding-attack-ex-fn1" icon={["upgrade"]}>
<Pair single id="ninjatrickbleedingattack-bleeding-attack-ex-fn1"><Link to="/ninjatrick/bleeding_attack">⮞</Link> Bleeding Attack (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1" id="ability-ninja_tricks-fake-fn-1" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">A ninja with this trick can cause living opponents to <Link to="/rule/bleed">bleed</Link> by hitting them with a sneak attack. This attack causes the target to take 1 additional point of damage each round for each die of the ninja's sneak attack. Bleeding creatures take that amount of damage every round at the start of each of their turns. The bleeding can be stopped by a DC 15 Heal check or the application of any effect that heals hit point damage.</Pair>
<Pair title="Special">Bleed damage from this ability does not stack with itself. Bleed damage bypasses any DR the creature might possess.</Pair>
</Ability>
<Ability id="ninjatrickkiblock-ki-block-su-fn1-2" icon={["armor-downgrade"]}>
<Pair single id="ninjatrickkiblock-ki-block-su-fn1-2" flavor="A ninja with this trick can prevent a creature from using its ki pool."><Link to="/ninjatrick/ki_block">⮞</Link> Ki Block (Su) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.2" id="ability-ninja_tricks-fake-fn-1.2" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">Whenever the ninja deals sneak attack damage, the target must make a Will save or be unable to spend any points from its ki pool for a number of rounds equal to the ninja's Charisma modifier. The DC of this save is 10 + 1/2 the ninja's level + the ninja's Charisma modifier.</Pair>
<Pair title="Special">The number of points in the target's ki pool is unaffected, and abilities that do not require the subject to spend ki still function.</Pair>
</Ability>
<Ability id="ninjatrickpressurepoints-pressure-points-su-fn1-3" icon={["upgrade"]}>
<Pair single id="ninjatrickpressurepoints-pressure-points-su-fn1-3" flavor={<>A ninja with this trick can strike at an opponent's vital <em>pressure points,</em> causing weakness and intense pain.</>}><Link to="/ninjatrick/pressure_points">⮞</Link> Pressure Points (Su) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.3" id="ability-ninja_tricks-fake-fn-1.3" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">Whenever the ninja deals sneak attack damage, she also deals 1 point of <Link to="/rule/dexterity_damage">Strength or Dexterity damage</Link>, decided by the ninja.</Pair>
<Pair title="Special">Unlike normal ability damage, this damage can be healed by a DC 15 Heal check. Each successful check heals 1 point of damage caused by this trick. A ninja with this trick receives a +10 insight bonus on this Heal check.</Pair>
</Ability>
<Ability id="ninjatrickslowreactions-slow-reactions-ex-fn1-4" icon={["armor-downgrade"]}>
<Pair single id="ninjatrickslowreactions-slow-reactions-ex-fn1-4"><Link to="/ninjatrick/slow_reactions">⮞</Link> Slow Reactions (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.4" id="ability-ninja_tricks-fake-fn-1.4" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">Opponents that are damaged by the ninja's sneak attack can't make attacks of opportunity for 1 round.</Pair>
</Ability>
<h3 id="ability-ninja_tricks-other-sneak-attack-tricks" data-hash-target>Other Sneak Attack Tricks</h3>
<p>These tricks do not have the limitations of the tricks above.</p>
<Ability id="ninjatrickdeadlyrange-deadly-range-ex-fn1-5" icon={["upgrade","bowman"]}>
<Pair single id="ninjatrickdeadlyrange-deadly-range-ex-fn1-5"><Link to="/ninjatrick/deadly_range">⮞</Link> Deadly Range (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.5" id="ability-ninja_tricks-fake-fn-1.5" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">A ninja with this ninja trick increases the range at which she can deal sneak attack damage by 10 feet.</Pair>
<Pair title="Special">A ninja can take this trick more than once. Its effects stack.</Pair>
</Ability>
<h3 id="ability-ninja_tricks-ki-tricks" data-hash-target>Ki Tricks</h3>
<p>These tricks use or modify the ninja's ki pool.</p>
<Ability id="ninjatrickacrobaticmaster-acrobatic-master-su-fn1-6" icon={["upgrade"]}>
<Pair single id="ninjatrickacrobaticmaster-acrobatic-master-su-fn1-6"><Link to="/ninjatrick/acrobatic_master">⮞</Link> Acrobatic Master (Su) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.6" id="ability-ninja_tricks-fake-fn-1.6" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Swift Action">A ninja with this trick can focus her ki to grant her a +20 bonus on one Acrobatics check of her choice made before the start of her next turn.</Pair>
<Pair title="Special">Using this ability expends 1 ki point from her ki pool.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="ninjatrickhighjumper-high-jumper-ex-fn1-7" icon={["upgrade"]}>
<Pair single id="ninjatrickhighjumper-high-jumper-ex-fn1-7"><Link to="/ninjatrick/high_jumper">⮞</Link> High Jumper (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.7" id="ability-ninja_tricks-fake-fn-1.7" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/acrobatic_master">Acrobatic master</Link></Pair>
<Pair title="Passive Ability">When a ninja with this trick makes a <Link to="/skill/acrobatics">high jump</Link>, the DC for that jump is half the normal DC.</Pair>
</Ability>
</div>
<Ability id="ninjatrickblooddebt-blood-debt-su-fn2" icon={["stairs-goal","shield-reflect","armor-upgrade"]}>
<Pair single id="ninjatrickblooddebt-blood-debt-su-fn2"><Link to="/ninjatrick/blood_debt">⮞</Link> Blood Debt (Su) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-2" id="ability-ninja_tricks-fake-fn-2" data-hash-target to="ability-ninja_tricks-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">A ninja with this ability gains <Link to="/feat/in_harms_way">In Harm's Way</Link> as a bonus feat, even if she doesn't meet the prerequisites.</Pair>
<Pair title="Ability">When the ninja intercepts an attack using this feat, she can spend 1 ki point to impose a <em>blood debt</em> on the aided ally. The ninja's ki pool is reduced by 1 until she ends this effect, which she may do as an <strong className="hl">immediate action</strong>. If the ninja ends the <em>blood debt</em> in response to a successful attack against her by a creature the indebted ally threatens, the ally (who must be willing) takes full damage from that attack and any associated effects instead of the ninja.</Pair>
</Ability>
<Ability id="ninjatrickbreathoftheancestors-breath-of-the-ancestors-su-fn3" icon={["tornado-discs","barbed-arrow"]}>
<Pair single id="ninjatrickbreathoftheancestors-breath-of-the-ancestors-su-fn3"><Link to="/ninjatrick/breath_of_the_ancestors">⮞</Link> Breath of the Ancestors (Su) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-3" id="ability-ninja_tricks-fake-fn-3" data-hash-target to="ability-ninja_tricks-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Choice">The ninja chooses one <Link to="/family/imperial_dragon">imperial dragon</Link> type (forest, sea, sky, sovereign, or underworld) when she gains this trick, and the choice can't be changed.</Pair>
<Pair title="Standard Action"><p>She can use supplies similar to those used for ninja <Link to="/ninjatrick/smoke_bomb">smoke bombs</Link> to produce an alchemical breath weapon that deals the same kind of damage as the selected dragon (piercing damage for forest dragons, fire for sea dragons, and so on).</p>
<p>The breath weapon deals the same amount of damage as the ninja's sneak attack, with a Reflex save allowed for half damage. The breath weapon is a 15-foot cone (or a 30-foot line if the underworld dragon is selected). The save DC is equal to 10 + 1/2 the ninja's class level + the ninja's Intelligence modifier.</p>
</Pair>
<Pair title="Special">Using this ability expends up 2 ki points, and once used it cannot be used again for 1d4 rounds.</Pair>
</Ability>
<Ability id="ninjatrickdarkvision-darkvision-su-fn1-8" icon={["stairs-goal"]}>
<Pair single id="ninjatrickdarkvision-darkvision-su-fn1-8"><Link to="/ninjatrick/darkvision">⮞</Link> Darkvision (Su) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.8" id="ability-ninja_tricks-fake-fn-1.8" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">This trick allows the ninja to use her ki to enhance her sight, granting <em>darkvision</em> out to a range of 60 feet.</Pair>
<Pair title="Special">Using this trick is a <strong className="hl">standard action</strong> that costs 1 ki point. The enhanced senses last for 1 hour.</Pair>
</Ability>
<Ability id="ninjatrickfeatherfall-feather-fall-su-fn1-9" icon={["magic-swirl"]}>
<Pair single id="ninjatrickfeatherfall-feather-fall-su-fn1-9"><Link to="/ninjatrick/feather_fall">⮞</Link> Feather Fall (Su) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.9" id="ability-ninja_tricks-fake-fn-1.9" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Immediate Action">The ninja can slow her descent as if using <Link to="/spell/feather_fall">feather fall</Link>. This ability uses her ninja level as the caster level.</Pair>
<Pair title="Special">Each use of this ability uses up 1 ki point.</Pair>
</Ability>
<Ability id="ninjatrickflurryofstars-flurry-of-stars-ex-fn1-10" icon={["bowman","upgrade","broken-shield"]}>
<Pair single id="ninjatrickflurryofstars-flurry-of-stars-ex-fn1-10"><Link to="/ninjatrick/flurry_of_stars">⮞</Link> Flurry of Stars (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.10" id="ability-ninja_tricks-fake-fn-1.10" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Swift Action">A ninja with this ability can expend 1 ki point from her ki pool before she makes a full-attack attack with <Link to="/eq-weapon/shuriken">shuriken</Link>. During that attack, she can throw two additional shuriken at her highest attack bonus, but all of her shuriken attacks are made at a -2 penalty, including the two extra attacks.</Pair>
</Ability>
<Ability id="ninjatrickforgottentrick-forgotten-trick-ex-fn1-11" icon={["stairs-goal"]}>
<Pair single id="ninjatrickforgottentrick-forgotten-trick-ex-fn1-11" flavor="A ninja with this ability can recall one trick taught to her by her ancient masters."><Link to="/ninjatrick/forgotten_trick">⮞</Link> Forgotten Trick (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.11" id="ability-ninja_tricks-fake-fn-1.11" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">When she uses this ability, she selects one ninja trick (not a <em>master trick</em> or <em>rogue talent</em>) that she does not know and can use that ninja trick for a number of rounds equal to her level. She must pay any ki costs associated with the trick as normal.</Pair>
<Pair title="Special">Using this ability expends 2 ki point from her ki pool, plus the ki cost of the trick she chooses.</Pair>
</Ability>
<Ability id="ninjatrickherbalcompound-herbal-compound-ex-fn4" icon={["broken-shield","armor-upgrade"]}>
<Pair single id="ninjatrickherbalcompound-herbal-compound-ex-fn4" flavor="A ninja with this trick can consume specially prepared herbs to strengthen her mind."><Link to="/ninjatrick/herbal_compound">⮞</Link> Herbal Compound (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-4" id="ability-ninja_tricks-fake-fn-4" data-hash-target to="ability-ninja_tricks-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Move-Equivalent Action">The ninja can spend 1 ki point and smoke, eat, or inject an <em>herbal compound.</em> The ninja takes a -2 penalty to AC and on Reflex saves but gains a +4 alchemical bonus on Will saves for 10 minutes per ninja level.</Pair>
</Ability>
<Ability id="ninjatrickkamikaze-kamikaze-su-fn2-2" icon={["upgrade"]}>
<Pair single id="ninjatrickkamikaze-kamikaze-su-fn2-2" flavor="A ninja with this ability strikes without concern for her own well-being."><Link to="/ninjatrick/kamikaze">⮞</Link> Kamikaze (Su) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-2.2" id="ability-ninja_tricks-fake-fn-2.2" data-hash-target to="ability-ninja_tricks-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">The ninja can spend 1 point from her ki pool to give her unarmed strikes and any weapons she wields the <Link to="/magic-enh/vicious">vicious</Link> weapon special ability for 1 round per level.</Pair>
<Pair title="Special">The ninja can spend 1 ki point to dismiss this effect.</Pair>
</Ability>
<Ability id="ninjatrickkicharge-ki-charge-su-fn1-12" icon={["bowman"]}>
<Pair single id="ninjatrickkicharge-ki-charge-su-fn1-12"><Link to="/ninjatrick/ki_charge">⮞</Link> Ki Charge (Su) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.12" id="ability-ninja_tricks-fake-fn-1.12" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Standard Action"><p>A ninja with this trick can invest a portion of her ki into a single thrown weapon, such as a <Link to="/eq-weapon/shuriken">shuriken</Link>, and throw it. The thrown weapon explodes on impact in a 5-foot <Link to="/misc/burst">burst</Link>, dealing 1d6 points of fire damage. Creatures caught in the blast receive a Reflex save to halve the damage. The DC of this save is 10 + 1/2 the ninja's level + the ninja's Charisma modifier.</p>
<p>If the thrown weapon hits a creature, that creature takes a -2 penalty on the saving throw. If the thrown weapon misses, treat it as a <Link to="/rule/throw_splash_weapon">thrown splash weapon</Link>.</p>
</Pair>
<Pair title="At 6th Level">The fire damage becomes 2d6.</Pair>
<Pair title="At 10th Level">The fire damage increases to 3d6.</Pair>
<Pair title="At 14th Level">The fire damage becomes 4d6.</Pair>
<Pair title="At 18th Level">The fire damage increases to 5d6.</Pair>
<Pair title="Special">Using this ability expends 1 ki point from her ki pool.</Pair>
</Ability>
<Ability id="ninjatrickkivenom-ki-venom-ex-fn4-2" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="ninjatrickkivenom-ki-venom-ex-fn4-2" flavor="A ninja with this trick knows how to make poisons from innocuous herbs or minerals."><Link to="/ninjatrick/ki_venom">⮞</Link> Ki Venom (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-4.2" id="ability-ninja_tricks-fake-fn-4.2" data-hash-target to="ability-ninja_tricks-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability"><p>Creating <em>ki venom</em> is a <strong className="hl">full-round action</strong> that costs 1 ki point. The poison lasts for 24 hours before becoming inert. The poison deals either <Link to="/rule/dexterity_damage">Strength or Dexterity damage</Link>, chosen when the venom is created.</p>
<AffInfo type="Poison; injury" save="Fort 10 + 1/2 the ninja's level + her Cha modifier" freq="1/round for a number of rounds equal to the ninja's Charisma modifier" eff={<>1d4 <Link to="/rule/str_damage">Str damage</Link> or 1d4 Dex damage</>} cure1 icon="p">Ki Venom</AffInfo>
</Pair>
<Pair title="Special">The ninja can spend additional ki as part of the process of creating the <em>ki venom</em> to improve the venom in one or more of the following ways: spend 1 ki point to increase the damage die to a d6, spend 1 ki point to change the ability damage dealt to Intelligence, Wisdom, or Charisma damage, or spend 1 ki point to increase the number of saves required to cure the poison by 1.</Pair>
</Ability>
<Ability id="ninjatrickshadowclone-shadow-clone-su-fn1-13" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="ninjatrickshadowclone-shadow-clone-su-fn1-13"><Link to="/ninjatrick/shadow_clone">⮞</Link> Shadow Clone (Su) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.13" id="ability-ninja_tricks-fake-fn-1.13" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Standard Action">The ninja can create 1d4 shadowy duplicates of herself that conceal her true location. This ability functions as <Link to="/spell/mirror_image">mirror image</Link>, using the ninja's level as her caster level.</Pair>
<Pair title="Special">Using this ability costs 1 ki point.</Pair>
</Ability>
<Ability id="ninjatricksmokebomb-smoke-bomb-ex-fn1-14" icon={["stairs-goal","smoking-finger"]}>
<Pair single id="ninjatricksmokebomb-smoke-bomb-ex-fn1-14"><Link to="/ninjatrick/smoke_bomb">⮞</Link> Smoke Bomb (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.14" id="ability-ninja_tricks-fake-fn-1.14" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Standard Action">This ability allows a ninja to throw a <em>smoke bomb</em> that creates a cloud of smoke with a 15-foot radius. This acts like the smoke from a <Link to="/eq-misc/smokestick">smokestick</Link>. The ninja can center this smoke on herself, or throw the bomb as a ranged touch attack with a range of 20 feet.</Pair>
<Pair title="Special">Each use of this ability uses up 1 ki point.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="ninjatrickpoisonbomb-poison-bomb-ex-fn1-15" icon={["stairs-goal"]}>
<Pair single id="ninjatrickpoisonbomb-poison-bomb-ex-fn1-15"><Link to="/ninjatrick/poison_bomb">⮞</Link> Poison Bomb (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.15" id="ability-ninja_tricks-fake-fn-1.15" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/smoke_bomb">Smoke bomb</Link></Pair>
<Pair title="Ability">Whenever the ninja throws a <em>smoke bomb,</em> she can decide to include 1 dose of any inhaled poison she possesses. This poison affects all creatures in the smoke and lasts as long as the smoke lasts. She must pay for the poison normally.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="ninjatrickchokingbomb-choking-bomb-ex-fn1-16" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="ninjatrickchokingbomb-choking-bomb-ex-fn1-16"><Link to="/ninjatrick/choking_bomb">⮞</Link> Choking Bomb (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.16" id="ability-ninja_tricks-fake-fn-1.16" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/poison_bomb">Poison bomb</Link></Pair>
<Pair title="Ability">Whenever a ninja throws a <em>smoke bomb,</em> all living creatures in the resulting cloud must make a Fortitude save or become <Link to="/misc/staggered">staggered</Link> by the choking black smoke for 1d4 rounds. The DC of this saving throw is equal to 10 + 1/2 the ninja's level + the ninja's Charisma modifier. The ninja can decide to create an ordinary <em>smoke bomb</em> or add poison to this <em>smoke bomb</em> as normal.</Pair>
</Ability>
</div>
</div>
<Ability id="ninjatrickstrangler-strangler-ex-fn4-3" icon={["mailed-fist"]}>
<Pair single id="ninjatrickstrangler-strangler-ex-fn4-3"><Link to="/ninjatrick/strangler">⮞</Link> Strangler (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-4.3" id="ability-ninja_tricks-fake-fn-4.3" data-hash-target to="ability-ninja_tricks-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">A ninja with this trick knows how to use a scarf, usually with a coin or large knot, as a lethal <Link to="/eq-weapon/garrote">garrote</Link>. The ninja takes no penalties when using a scarf as an improvised garrote.</Pair>
<Pair title="Free Action">In addition, when attempting a grapple combat maneuver check, the ninja can spend 1 ki point to gain the <Link to="/umr/constrict">constrict</Link> special attack on that maneuver with damage equal to half the ninja's sneak attack dice (minimum 1d6).</Pair>
</Ability>
<Ability id="ninjatricksuddendisguise-sudden-disguise-su-fn1-17" icon={["magic-swirl"]}>
<Pair single id="ninjatricksuddendisguise-sudden-disguise-su-fn1-17"><Link to="/ninjatrick/sudden_disguise">⮞</Link> Sudden Disguise (Su) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.17" id="ability-ninja_tricks-fake-fn-1.17" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Swift Action">A ninja can change her appearance for 1 minute per level. This ability functions as <Link to="/spell/disguise_self">disguise self</Link>. Each use of this ability uses up 1 ki point.</Pair>
</Ability>
<Ability id="ninjatrickvanishingtrick-vanishing-trick-su-fn1-18" icon={["magic-swirl"]}>
<Pair single id="ninjatrickvanishingtrick-vanishing-trick-su-fn1-18"><Link to="/ninjatrick/vanishing_trick">⮞</Link> Vanishing Trick (Su) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.18" id="ability-ninja_tricks-fake-fn-1.18" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Swift Action">The ninja can disappear for 1 round per level. This ability functions as <Link to="/spell/invisibility">invisibility</Link>. Using this ability uses up 1 ki point.</Pair>
</Ability>
<Ability id="ninjatrickventriloquism-ventriloquism-su-fn1-19" icon={["magic-swirl"]}>
<Pair single id="ninjatrickventriloquism-ventriloquism-su-fn1-19"><Link to="/ninjatrick/ventriloquism">⮞</Link> Ventriloquism (Su) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.19" id="ability-ninja_tricks-fake-fn-1.19" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Swift Action">The ninja can throw her voice as if using the spell <Link to="/spell/ventriloquism">ventriloquism</Link>. She can use this ability for 1 minute per ninja level. Each use of this ability uses up 1 ki point.</Pair>
</Ability>
<h3 id="ability-ninja_tricks-other-tricks" data-hash-target>Other Tricks</h3>
<Ability id="ninjatrickarcanebackfire-arcane-backfire-su-fn5" icon={["armor-downgrade"]}>
<Pair single id="ninjatrickarcanebackfire-arcane-backfire-su-fn5"><Link to="/ninjatrick/arcane_backfire">⮞</Link> Arcane Backfire (Su) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-5" id="ability-ninja_tricks-fake-fn-5" data-hash-target to="ability-ninja_tricks-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">When a ninja with this trick successfully attacks a creature that is holding a magic item that has a number of charges or uses per day, she can attempt a <Link to="/skill/use_magic_device">Use Magic Device</Link> check (DC = 20 + the item's CL) to cause the item to lose either one daily use or a number of charges equal to the number of the ninja's sneak attack dice.</Pair>
</Ability>
<Ability id="ninjatrickcombattrick-combat-trick-ex-fn1-20" icon={["stairs-goal"]}>
<Pair single id="ninjatrickcombattrick-combat-trick-ex-fn1-20"><Link to="/ninjatrick/combat_trick">⮞</Link> Combat Trick (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.20" id="ability-ninja_tricks-fake-fn-1.20" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">A ninja who selects this trick gains a bonus <Link to="/main/combat_feat">combat feat</Link>.</Pair>
</Ability>
<Ability id="ninjatrickfaststealth-fast-stealth-ex-fn1-21" icon={["upgrade"]}>
<Pair single id="ninjatrickfaststealth-fast-stealth-ex-fn1-21"><Link to="/ninjatrick/fast_stealth">⮞</Link> Fast Stealth (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.21" id="ability-ninja_tricks-fake-fn-1.21" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">A ninja with this trick can move at full speed using the Stealth skill without penalty.</Pair>
</Ability>
<Ability id="ninjatrickhiddenweapons-hidden-weapons-ex-fn1-22" icon={["upgrade"]}>
<Pair single id="ninjatrickhiddenweapons-hidden-weapons-ex-fn1-22" flavor="A ninja with this ability can easily conceal weapons on her body."><Link to="/ninjatrick/hidden_weapons">⮞</Link> Hidden Weapons (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.22" id="ability-ninja_tricks-fake-fn-1.22" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The ninja adds her level on opposed Sleight of Hand checks made to conceal a weapon. In addition, she can draw hidden weapons as a <strong className="hl">move action</strong>, instead of as a standard action.</Pair>
</Ability>
<Ability id="ninjatrickredirectforce-redirect-force-ex-fn2-3" icon={["broken-shield","upgrade"]}>
<Pair single id="ninjatrickredirectforce-redirect-force-ex-fn2-3"><Link to="/ninjatrick/redirect_force">⮞</Link> Redirect Force (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-2.3" id="ability-ninja_tricks-fake-fn-2.3" data-hash-target to="ability-ninja_tricks-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">If the ninja has a feat that allows her to attempt a combat maneuver without provoking attacks of opportunity, she can choose to provoke them anyway when she performs that maneuver. If she does so and takes damage from the attack of opportunity, the ninja adds the damage as a bonus on her attack roll instead of as a penalty.</Pair>
</Ability>
<Ability id="ninjatrickroguetalent-rogue-talent-fn1-23" icon={["stairs-goal"]}>
<Pair single id="ninjatrickroguetalent-rogue-talent-fn1-23"><Link to="/ninjatrick/rogue_talent">⮞</Link> Rogue Talent <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.23" id="ability-ninja_tricks-fake-fn-1.23" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The ninja can select a <Link to="/ability/rogue_talent">rogue talent</Link> in place of a ninja trick. The ninja cannot select a rogue talent that has the same name as a ninja trick.</Pair>
<Pair title="Special">The ninja can select this talent multiple times.</Pair>
</Ability>
<Ability id="ninjatrickslowmetabolism-slow-metabolism-ex-fn1-24" icon={["armor-upgrade"]}>
<Pair single id="ninjatrickslowmetabolism-slow-metabolism-ex-fn1-24" flavor="The ninja has a slower-than-normal metabolism."><Link to="/ninjatrick/slow_metabolism">⮞</Link> Slow Metabolism (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.24" id="ability-ninja_tricks-fake-fn-1.24" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">She can <Link to="/misc/hold_her_breath">hold her breath</Link> for twice as long as normal before needing to make Constitution checks (four times her Constitution score).</Pair>
<Pair title="Passive Ability">In addition, whenever the ninja is poisoned, the time between saving throws (the poison's frequency) is doubled. Thus, a poison that has a frequency of <em>1/round for 6 rounds</em> would instead be <em>1/2 rounds for 12 rounds.</em></Pair>
</Ability>
<Ability id="ninjatrickstylemaster-style-master-fn1-25" icon={["stairs-goal"]}>
<Pair single id="ninjatrickstylemaster-style-master-fn1-25"><Link to="/ninjatrick/style_master">⮞</Link> Style Master <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.25" id="ability-ninja_tricks-fake-fn-1.25" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">A ninja who selects this ninja trick gains a <Link to="/main/style_feat">style feat</Link> that she qualifies for as a bonus feat.</Pair>
</Ability>
<Ability id="ninjatrickswarmingattack-swarming-attack-fn5-2" icon={["upgrade"]}>
<Pair single id="ninjatrickswarmingattack-swarming-attack-fn5-2" flavor="Ratfolk ninjas use their large numbers to overwhelm their enemies with countless attacks."><Link to="/ninjatrick/swarming_attack">⮞</Link> Swarming Attack <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-5.2" id="ability-ninja_tricks-fake-fn-5.2" data-hash-target to="ability-ninja_tricks-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/race/ratfolk">Ratfolk</Link>, <em>swarming</em> racial trait</Pair>
<Pair title="Ability">While using the swarming racial trait to share a space with an ally, a ninja with this talent gains a bonus on damage roles equal to the number of sneak attack dice her ally has. For example, a ninja would gain +3 damage if her ally has sneak attack 3d6.</Pair>
</Ability>
<Ability id="ninjatrickswiftpoisoner-swift-poisoner-ex-fn4-4" icon={["upgrade"]}>
<Pair single id="ninjatrickswiftpoisoner-swift-poisoner-ex-fn4-4"><Link to="/ninjatrick/swift_poisoner">⮞</Link> Swift Poisoner (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-4.4" id="ability-ninja_tricks-fake-fn-4.4" data-hash-target to="ability-ninja_tricks-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">A ninja with this trick can apply a dose of poison to a weapon as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="ninjatrickunarmedcombattraining-unarmed-combat-training-ex-fn1-26" icon={["stairs-goal","mailed-fist"]}>
<Pair single id="ninjatrickunarmedcombattraining-unarmed-combat-training-ex-fn1-26"><Link to="/ninjatrick/unarmed_combat_training">⮞</Link> Unarmed Combat Training (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.26" id="ability-ninja_tricks-fake-fn-1.26" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">A ninja who selects this ninja trick gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="ninjatrickdeflectarrows-deflect-arrows-ex-fn1-27" icon={["stairs-goal"]}>
<Pair single id="ninjatrickdeflectarrows-deflect-arrows-ex-fn1-27"><Link to="/ninjatrick/deflect_arrows">⮞</Link> Deflect Arrows (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.27" id="ability-ninja_tricks-fake-fn-1.27" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> (whether from <Link to="/ninjatrick/unarmed_combat_training">unarmed combat training</Link> trick or not)</Pair>
<Pair title="Ability">A ninja who selects this ninja trick gains the <Link to="/feat/deflect_arrows">Deflect Arrows</Link> feat as a bonus feat.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="ninjatricksnatcharrows-snatch-arrows-fn1-28" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="ninjatricksnatcharrows-snatch-arrows-fn1-28"><Link to="/ninjatrick/snatch_arrows">⮞</Link> Snatch Arrows <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.28" id="ability-ninja_tricks-fake-fn-1.28" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> (whether from <Link to="/ninjatrick/unarmed_combat_training">unarmed combat training</Link> or not), <Link to="/feat/deflect_arrows">Deflect Arrows</Link> (whether from <Link to="/ninjatrick/deflect_arrows">deflect arrows</Link> trick or not)</Pair>
<Pair title="Ability">A ninja who selects this ninja trick gains the <Link to="/feat/snatch_arrows">Snatch Arrows</Link> feat as a bonus feat.</Pair>
</Ability>
</div>
</div>
<Ability id="ninjatrickundetectedsabotage-undetected-sabotage-ex-fn1-29" icon={["stairs-goal"]}>
<Pair single id="ninjatrickundetectedsabotage-undetected-sabotage-ex-fn1-29"><Link to="/ninjatrick/undetected_sabotage">⮞</Link> Undetected Sabotage (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.29" id="ability-ninja_tricks-fake-fn-1.29" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">Whenever a ninja with this trick uses <Link to="/skill/disable_device">Disable Device</Link> to sabotage or disable a device, she can make a <Link to="/skill/stealth">Stealth</Link> check with a bonus equal to her level. Anyone who inspects the device does not notice the sabotage and assumes the object works unless he beats the ninja's check with an opposed <Link to="/skill/perception">Perception</Link> skill check.</Pair>
</Ability>
<Ability id="ninjatrickwallclimber-wall-climber-su-fn1-30" icon={["stairs-goal"]}>
<Pair single id="ninjatrickwallclimber-wall-climber-su-fn1-30"><Link to="/ninjatrick/wall_climber">⮞</Link> Wall Climber (Su) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.30" id="ability-ninja_tricks-fake-fn-1.30" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">A ninja with this ability gains a climb speed of 20 feet, but only on vertical surfaces. This ability cannot be used to scale perfectly smooth surfaces or to climb on the underside of horizontal surfaces.</Pair>
</Ability>
<Ability id="ninjatrickweapontraining-weapon-training-ex-fn1-31" icon={["stairs-goal"]}>
<Pair single id="ninjatrickweapontraining-weapon-training-ex-fn1-31"><Link to="/ninjatrick/weapon_training">⮞</Link> Weapon Training (Ex) <sup><InnerLink showBacklink="backlink-ability-ninja_tricks-fake-fn-1.31" id="ability-ninja_tricks-fake-fn-1.31" data-hash-target to="ability-ninja_tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">A ninja who selects this ninja trick gains <Link to="/feat/weapon_focus">Weapon Focus</Link> as a bonus feat.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-ninja_tricks-label">Footnotes</h3><ol>
<li id="ability-ninja_tricks-fake-fn-1-target"><p><Link to="/source/ultimate_combat">Ultimate Combat</Link> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1" data-hash-target to="ability-ninja_tricks-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.2" data-hash-target to="ability-ninja_tricks-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.3" data-hash-target to="ability-ninja_tricks-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.4" data-hash-target to="ability-ninja_tricks-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.5" data-hash-target to="ability-ninja_tricks-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.6" data-hash-target to="ability-ninja_tricks-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.7" data-hash-target to="ability-ninja_tricks-fake-fn-1.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.8" data-hash-target to="ability-ninja_tricks-fake-fn-1.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.9" data-hash-target to="ability-ninja_tricks-fake-fn-1.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.10" data-hash-target to="ability-ninja_tricks-fake-fn-1.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.11" data-hash-target to="ability-ninja_tricks-fake-fn-1.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.12" data-hash-target to="ability-ninja_tricks-fake-fn-1.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.13" data-hash-target to="ability-ninja_tricks-fake-fn-1.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.14" data-hash-target to="ability-ninja_tricks-fake-fn-1.14">↩<sup>14</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.15" data-hash-target to="ability-ninja_tricks-fake-fn-1.15">↩<sup>15</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.16" data-hash-target to="ability-ninja_tricks-fake-fn-1.16">↩<sup>16</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.17" data-hash-target to="ability-ninja_tricks-fake-fn-1.17">↩<sup>17</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.18" data-hash-target to="ability-ninja_tricks-fake-fn-1.18">↩<sup>18</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.19" data-hash-target to="ability-ninja_tricks-fake-fn-1.19">↩<sup>19</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.20" data-hash-target to="ability-ninja_tricks-fake-fn-1.20">↩<sup>20</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.21" data-hash-target to="ability-ninja_tricks-fake-fn-1.21">↩<sup>21</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.22" data-hash-target to="ability-ninja_tricks-fake-fn-1.22">↩<sup>22</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.23" data-hash-target to="ability-ninja_tricks-fake-fn-1.23">↩<sup>23</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.24" data-hash-target to="ability-ninja_tricks-fake-fn-1.24">↩<sup>24</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.25" data-hash-target to="ability-ninja_tricks-fake-fn-1.25">↩<sup>25</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.26" data-hash-target to="ability-ninja_tricks-fake-fn-1.26">↩<sup>26</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.27" data-hash-target to="ability-ninja_tricks-fake-fn-1.27">↩<sup>27</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.28" data-hash-target to="ability-ninja_tricks-fake-fn-1.28">↩<sup>28</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.29" data-hash-target to="ability-ninja_tricks-fake-fn-1.29">↩<sup>29</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.30" data-hash-target to="ability-ninja_tricks-fake-fn-1.30">↩<sup>30</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-ninja_tricks-fake-fn-1.31" data-hash-target to="ability-ninja_tricks-fake-fn-1.31">↩<sup>31</sup></InnerLink></p></li>
<li id="ability-ninja_tricks-fake-fn-2-target"><p><Link to="/source/champions_of_balance">Champions of Balance</Link> <InnerLink aria-label="Back to reference 2" id="backlink-ability-ninja_tricks-fake-fn-2" data-hash-target to="ability-ninja_tricks-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-ninja_tricks-fake-fn-2.2" data-hash-target to="ability-ninja_tricks-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-ninja_tricks-fake-fn-2.3" data-hash-target to="ability-ninja_tricks-fake-fn-2.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-ninja_tricks-fake-fn-3-target"><p><Link to="/source/legacy_of_dragons">Legacy of Dragons</Link> <InnerLink aria-label="Back to reference 3" id="backlink-ability-ninja_tricks-fake-fn-3" data-hash-target to="ability-ninja_tricks-fake-fn-3">↩</InnerLink></p></li>
<li id="ability-ninja_tricks-fake-fn-4-target"><p><Link to="/source/martial_arts_handbook">Martial Arts Handbook</Link> <InnerLink aria-label="Back to reference 4" id="backlink-ability-ninja_tricks-fake-fn-4" data-hash-target to="ability-ninja_tricks-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-ninja_tricks-fake-fn-4.2" data-hash-target to="ability-ninja_tricks-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-ninja_tricks-fake-fn-4.3" data-hash-target to="ability-ninja_tricks-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-ninja_tricks-fake-fn-4.4" data-hash-target to="ability-ninja_tricks-fake-fn-4.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-ninja_tricks-fake-fn-5-target"><p><Link to="/source/heroes_from_the_fringe">Heroes from the Fringe</Link> <InnerLink aria-label="Back to reference 5" id="backlink-ability-ninja_tricks-fake-fn-5" data-hash-target to="ability-ninja_tricks-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-ninja_tricks-fake-fn-5.2" data-hash-target to="ability-ninja_tricks-fake-fn-5.2">↩<sup>2</sup></InnerLink></p></li>
</ol></section></div>};
const _swashbuckler_deeds = {hasJL:true,title: "Deeds", topLink: ["Swashbuckler","class/swashbuckler"], jsx: <div className="compilation"><div className="jumpList" id="ability-swashbuckler_deeds-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-swashbuckler_deeds-1st-level-deeds">1st-Level Deeds</InnerLink></li><li><InnerLink toTop to="ability-swashbuckler_deeds-3rd-level-deeds">3rd-Level Deeds</InnerLink></li><li><InnerLink toTop to="ability-swashbuckler_deeds-7th-level-deeds">7th-Level Deeds</InnerLink></li><li><InnerLink toTop to="ability-swashbuckler_deeds-11th-level-deeds">11th-Level Deeds</InnerLink></li><li><InnerLink toTop to="ability-swashbuckler_deeds-15th-level-deeds">15th-Level Deeds</InnerLink></li><li><InnerLink toTop to="ability-swashbuckler_deeds-19th-level-deeds">19th-Level Deeds</InnerLink></li></ul></div><h2 id="ability-swashbuckler_deeds-swashbuckler-deeds">Swashbuckler Deeds</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 56-59</Link><br/>Swashbucklers spend panache points to accomplish deeds. Most deeds grant the swashbuckler a momentary bonus or effect, but some provide longer-lasting effects. Some deeds remain in effect while the swashbuckler has at least 1 panache point, but do not require expending panache to be maintained. A swashbuckler can only perform deeds of her level or lower. Unless otherwise noted, a deed can be performed multiple successive times, as long as the swashbuckler has or spends the required number of panache points to perform the deed.</p>
<h3 id="ability-swashbuckler_deeds-1st-level-deeds" data-hash-target>1st-Level Deeds</h3>
<Ability id="swashdeedderringdo-derring-do-ex-fn1" icon={["upgrade"]}>
<Pair single id="swashdeedderringdo-derring-do-ex-fn1"><Link to="/swashdeed/derring_do">⮞</Link> Derring-Do (Ex) <sup><InnerLink showBacklink="backlink-ability-swashbuckler_deeds-fake-fn-1" id="ability-swashbuckler_deeds-fake-fn-1" data-hash-target to="ability-swashbuckler_deeds-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">1st-level swashbuckler</Pair>
<Pair title="Ability">A swashbuckler can spend 1 panache point when she makes an Acrobatics, Climb, Escape Artist, Fly, Ride, or Swim check to roll 1d6 and add the result to the check. She can do this after she makes the check but before the result is revealed.</Pair>
<Pair title="Special">If the result of the d6 roll is a natural 6, she rolls another 1d6 and adds it to the check. She can continue to do this as long as she rolls natural 6s, up to a number of times equal to her Dexterity modifier (minimum 1).</Pair>
</Ability>
<Ability id="swashdeeddodgingpanache-dodging-panache-ex-fn2" icon={["armor-upgrade"]}>
<Pair single id="swashdeeddodgingpanache-dodging-panache-ex-fn2"><Link to="/swashdeed/dodging_panache">⮞</Link> Dodging Panache (Ex) <sup><InnerLink showBacklink="backlink-ability-swashbuckler_deeds-fake-fn-2" id="ability-swashbuckler_deeds-fake-fn-2" data-hash-target to="ability-swashbuckler_deeds-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">1st-level swashbuckler</Pair>
<Pair title="Immediate Action">When an opponent attempts a melee attack against the swashbuckler, the swashbuckler can spend 1 panache point to move 5 feet; doing so grants the swashbuckler a dodge bonus to AC equal to her Charisma modifier (minimum 0) against the triggering attack. This movement doesn't negate the attack, which is still resolved as if the swashbuckler had not moved from the original square.</Pair>
<Pair title="Special">This movement is not a 5-foot step; it provokes attacks of opportunity from creatures other than the one who triggered this deed. The swashbuckler can only perform this deed while wearing light or no armor, and while carrying no heavier than a light load.</Pair>
</Ability>
<Ability id="swashdeedopportuneparryandriposte-opportune-parry-and-riposte-ex-fn2-2" icon={["armor-upgrade","mailed-fist"]}>
<Pair single id="swashdeedopportuneparryandriposte-opportune-parry-and-riposte-ex-fn2-2"><Link to="/swashdeed/opportune_parry_and_riposte">⮞</Link> Opportune Parry and Riposte (Ex) <sup><InnerLink showBacklink="backlink-ability-swashbuckler_deeds-fake-fn-2.2" id="ability-swashbuckler_deeds-fake-fn-2.2" data-hash-target to="ability-swashbuckler_deeds-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">1st-level swashbuckler</Pair>
<Pair title="Ability"><p>When an opponent makes a melee attack against the swashbuckler, she can spend 1 panache point and expend a use of an attack of opportunity to attempt to parry that attack.</p>
<p>The swashbuckler makes an attack roll as if she were making an attack of opportunity; for each size category the attacking creature is larger than the swashbuckler, the swashbuckler takes a -2 penalty on this roll. If her result is greater than the attacking creature's result, the creature's attack automatically misses. The swashbuckler must declare the use of this ability after the creature's attack is announced, but before its attack roll is made.</p>
</Pair>
<Pair title="Immediate Action">Upon performing a successful parry and if she has at least 1 panache point, the swashbuckler can make an attack against the creature whose attack she parried, provided that creature is within her reach.</Pair>
<Pair title="Special">This deed's cost cannot be reduced by any ability or effect that reduces the number of panache points a deed costs.</Pair>
</Ability>
<h3 id="ability-swashbuckler_deeds-3rd-level-deeds" data-hash-target>3rd-Level Deeds</h3>
<Ability id="swashdeedkipup-kip-up-ex-fn2-3" icon={["stairs-goal"]}>
<Pair single id="swashdeedkipup-kip-up-ex-fn2-3"><Link to="/swashdeed/kip_up">⮞</Link> Kip-Up (Ex) <sup><InnerLink showBacklink="backlink-ability-swashbuckler_deeds-fake-fn-2.3" id="ability-swashbuckler_deeds-fake-fn-2.3" data-hash-target to="ability-swashbuckler_deeds-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">3rd-level swashbuckler</Pair>
<Pair title="Move-Equivalent Action">While the swashbuckler has at least 1 panache point, she can kip-up from <Link to="/rule/prone">prone</Link> without provoking an attack of opportunity.</Pair>
<Pair title="Special">She can kip-up as a <strong className="hl">swift action</strong> instead by spending 1 panache point.</Pair>
</Ability>
<Ability id="swashdeedmenacingswordplay-menacing-swordplay-ex-fn2-4" icon={["armor-downgrade"]}>
<Pair single id="swashdeedmenacingswordplay-menacing-swordplay-ex-fn2-4"><Link to="/swashdeed/menacing_swordplay">⮞</Link> Menacing Swordplay (Ex) <sup><InnerLink showBacklink="backlink-ability-swashbuckler_deeds-fake-fn-2.4" id="ability-swashbuckler_deeds-fake-fn-2.4" data-hash-target to="ability-swashbuckler_deeds-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">3rd-level swashbuckler</Pair>
<Pair title="Ability">While she has at least 1 panache point, when a swashbuckler hits an opponent with a light or one-handed piercing melee weapon, she can choose to use Intimidate to demoralize that opponent as a <strong className="hl">swift action</strong> instead of a standard action.</Pair>
</Ability>
<Ability id="swashdeedprecisestrike-precise-strike-ex-fn2-5" icon={["mailed-fist","upgrade"]}>
<Pair single id="swashdeedprecisestrike-precise-strike-ex-fn2-5"><Link to="/swashdeed/precise_strike">⮞</Link> Precise Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-swashbuckler_deeds-fake-fn-2.5" id="ability-swashbuckler_deeds-fake-fn-2.5" data-hash-target to="ability-swashbuckler_deeds-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">3rd-level swashbuckler</Pair>
<Pair title="Ability"><p>While she has at least 1 panache point, a swashbuckler gains the ability to strike precisely with a light or one-handed piercing melee weapon (though not natural weapon attacks), adding her swashbuckler level to the damage dealt.</p>
<p>To use this deed, a swashbuckler cannot attack with a weapon in her off hand or use a shield other than a buckler. She can even use this ability with thrown light or one-handed piercing melee weapons, so long as the target is within 30 feet of her.</p>
<p>This additional damage is <Link to="/misc/precision_damage">precision damage</Link>, and isn't multiplied on a critical hit. Any creature that is immune to sneak attacks is immune to the additional damage granted by <em>precise strike,</em> and any item or ability that protects a creature from critical hits also protects a creature from the additional damage of a <em>precise strike.</em></p>
</Pair>
<Pair title="Swift Action">A swashbuckler can spend 1 panache point to double her <em>precise strike's</em> damage bonus on the next attack. This benefit must be used before the end of her turn, or it is lost. This deed's cost cannot be reduced by any ability or effect that reduces the amount of panache points a deed costs (such as the <Link to="/feat/signature_deed">Signature Deed</Link> feat).</Pair>
</Ability>
<Ability id="swashdeedswashbucklerinitiative-swashbuckler-initiative-ex-fn3" icon={["upgrade"]}>
<Pair single id="swashdeedswashbucklerinitiative-swashbuckler-initiative-ex-fn3"><Link to="/swashdeed/swashbuckler_initiative">⮞</Link> Swashbuckler Initiative (Ex) <sup><InnerLink showBacklink="backlink-ability-swashbuckler_deeds-fake-fn-3" id="ability-swashbuckler_deeds-fake-fn-3" data-hash-target to="ability-swashbuckler_deeds-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">3rd-level swashbuckler</Pair>
<Pair title="Passive Ability">While the swashbuckler has at least 1 panache point, she gains a +2 bonus on initiative checks. In addition, if she has the <Link to="/feat/quick_draw">Quick Draw</Link> feat, her hands are free and unrestrained, and she has any single light or one-handed piercing melee weapon that isn't hidden, she can draw that weapon as part of the initiative check.</Pair>
</Ability>
<h3 id="ability-swashbuckler_deeds-7th-level-deeds" data-hash-target>7th-Level Deeds</h3>
<Ability id="swashdeedsuperiorfeint-superior-feint-ex-fn3-2" icon={["armor-downgrade"]}>
<Pair single id="swashdeedsuperiorfeint-superior-feint-ex-fn3-2"><Link to="/swashdeed/superior_feint">⮞</Link> Superior Feint (Ex) <sup><InnerLink showBacklink="backlink-ability-swashbuckler_deeds-fake-fn-3.2" id="ability-swashbuckler_deeds-fake-fn-3.2" data-hash-target to="ability-swashbuckler_deeds-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level swashbuckler</Pair>
<Pair title="Standard Action">A swashbuckler with at least 1 panache point can purposefully miss a creature she could make a melee attack against with a wielded light or one-handed piercing weapon. When she does, the creature is denied its Dexterity bonus to AC until the start of the swashbuckler's next turn.</Pair>
</Ability>
<Ability id="swashdeedswashbucklersgrace-swashbucklers-grace-ex-fn3-3" icon={["upgrade"]}>
<Pair single id="swashdeedswashbucklersgrace-swashbucklers-grace-ex-fn3-3"><Link to="/swashdeed/swashbucklers_grace">⮞</Link> Swashbuckler's Grace (Ex) <sup><InnerLink showBacklink="backlink-ability-swashbuckler_deeds-fake-fn-3.3" id="ability-swashbuckler_deeds-fake-fn-3.3" data-hash-target to="ability-swashbuckler_deeds-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level swashbuckler</Pair>
<Pair title="Passive Ability">While the swashbuckler has at least 1 panache point, she takes no penalty for moving at full speed when she uses Acrobatics to attempt to move through a threatened area or an enemy's space.</Pair>
</Ability>
<Ability id="swashdeedtargetedstrike-targeted-strike-ex-fn3-4" icon={["mailed-fist","armor-downgrade"]}>
<Pair single id="swashdeedtargetedstrike-targeted-strike-ex-fn3-4"><Link to="/swashdeed/targeted_strike">⮞</Link> Targeted Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-swashbuckler_deeds-fake-fn-3.4" id="ability-swashbuckler_deeds-fake-fn-3.4" data-hash-target to="ability-swashbuckler_deeds-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level swashbuckler</Pair>
<Pair title="Full-Round Action">The swashbuckler can spend 1 panache point to make an attack with a single light or one-handed piercing melee weapon that cripples part of a foe's body. The swashbuckler chooses a part of the body to target. If the attack succeeds, in addition to the attack's normal damage, the target suffers one of the following effects based on the part of the body targeted. If a creature doesn't have one of the listed body locations, that body part cannot be targeted.</Pair>
<Pair title="Arms">The target takes no damage from the attack, but it drops one carried item of the swashbuckler's choice, even if the item is wielded with two hands. Items held in a <Link to="/eq-armorenh/locked_gauntlet">locked gauntlet</Link> are not dropped on a hit.</Pair>
<Pair title="Head">The target is <Link to="/misc/confused">confused</Link> for 1 round. This is a mind-affecting effect.</Pair>
<Pair title="Legs">The target is knocked <Link to="/rule/prone">prone</Link>. Creatures with four or more legs or that are immune to <Link to="/rule/trip">trip</Link> attacks are immune to this effect.</Pair>
<Pair title="Torso or Wings">The target is <Link to="/misc/staggered">staggered</Link> for 1 round.</Pair>
<Pair title="Special">Creatures that are immune to sneak attacks are also immune to <em>targeted strikes.</em> Items or abilities that protect a creature from critical hits also protect a creature from <em>targeted strikes.</em></Pair>
</Ability>
<h3 id="ability-swashbuckler_deeds-11th-level-deeds" data-hash-target>11th-Level Deeds</h3>
<Ability id="swashdeedbleedingwound-bleeding-wound-ex-fn3-5" icon={["upgrade"]}>
<Pair single id="swashdeedbleedingwound-bleeding-wound-ex-fn3-5"><Link to="/swashdeed/bleeding_wound">⮞</Link> Bleeding Wound (Ex) <sup><InnerLink showBacklink="backlink-ability-swashbuckler_deeds-fake-fn-3.5" id="ability-swashbuckler_deeds-fake-fn-3.5" data-hash-target to="ability-swashbuckler_deeds-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level swashbuckler</Pair>
<Pair title="Free Action"><p>When the swashbuckler hits a living creature with a light or one-handed piercing melee weapon attack, she can spend 1 panache point to have that attack deal additional <Link to="/rule/bleed">bleed</Link> damage. The amount of bleed damage dealt is equal to the swashbuckler's Dexterity modifier (minimum 1).</p>
<p>Alternatively, the swashbuckler can spend 2 panache points to deal 1 point of <Link to="/rule/constitution_damage">Strength, Dexterity, or Constitution bleed damage</Link> instead (swashbuckler's choice).</p>
</Pair>
<Pair title="Special">Creatures that are immune to sneak attacks are also immune to these types of bleed damage.</Pair>
</Ability>
<Ability id="swashdeedevasive-evasive-ex-fn4" icon={["armor-upgrade"]}>
<Pair single id="swashdeedevasive-evasive-ex-fn4"><Link to="/swashdeed/evasive">⮞</Link> Evasive (Ex) <sup><InnerLink showBacklink="backlink-ability-swashbuckler_deeds-fake-fn-4" id="ability-swashbuckler_deeds-fake-fn-4" data-hash-target to="ability-swashbuckler_deeds-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level swashbuckler</Pair>
<Pair title="Passive Ability">While a swashbuckler has at least 1 panache point, she gains the benefits of the <Link to="/ability/evasion">evasion</Link>, <Link to="/ability/uncanny_dodge">uncanny dodge</Link>, and <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link> rogue class features. She uses her swashbuckler level as her rogue level for <em>improved uncanny dodge.</em></Pair>
</Ability>
<Ability id="swashdeedsubtleblade-subtle-blade-ex-fn4-2" icon={["armor-upgrade"]}>
<Pair single id="swashdeedsubtleblade-subtle-blade-ex-fn4-2"><Link to="/swashdeed/subtle_blade">⮞</Link> Subtle Blade (Ex) <sup><InnerLink showBacklink="backlink-ability-swashbuckler_deeds-fake-fn-4.2" id="ability-swashbuckler_deeds-fake-fn-4.2" data-hash-target to="ability-swashbuckler_deeds-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level swashbuckler</Pair>
<Pair title="Passive Ability">While a swashbuckler has at least 1 panache point, she is immune to <Link to="/rule/disarm">disarm</Link>, <Link to="/rule/steal">steal</Link>, and <Link to="/rule/sunder">sunder</Link> combat maneuvers made against a light or one-handed piercing melee weapon she is wielding.</Pair>
</Ability>
<h3 id="ability-swashbuckler_deeds-15th-level-deeds" data-hash-target>15th-Level Deeds</h3>
<Ability id="swashdeeddizzyingdefense-dizzying-defense-ex-fn4-3" icon={["upgrade","armor-upgrade"]}>
<Pair single id="swashdeeddizzyingdefense-dizzying-defense-ex-fn4-3"><Link to="/swashdeed/dizzying_defense">⮞</Link> Dizzying Defense (Ex) <sup><InnerLink showBacklink="backlink-ability-swashbuckler_deeds-fake-fn-4.3" id="ability-swashbuckler_deeds-fake-fn-4.3" data-hash-target to="ability-swashbuckler_deeds-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">15th-level swashbuckler</Pair>
<Pair title="Ability"><p>While wielding a light or one-handed piercing melee weapon in one hand, the swashbuckler can spend 1 panache point to take the <Link to="/misc/fighting_defensively">fighting defensively</Link> action as a <strong className="hl">swift action</strong> instead of a standard action.</p>
<p>When fighting defensively in this manner, the dodge bonus to AC gained from that action increases to +4, and the penalty to attack rolls is reduced to -2.</p>
</Pair>
</Ability>
<Ability id="swashdeedperfectthrust-perfect-thrust-ex-fn4-4" icon={["magic-palm","armor-downgrade"]}>
<Pair single id="swashdeedperfectthrust-perfect-thrust-ex-fn4-4"><Link to="/swashdeed/perfect_thrust">⮞</Link> Perfect Thrust (Ex) <sup><InnerLink showBacklink="backlink-ability-swashbuckler_deeds-fake-fn-4.4" id="ability-swashbuckler_deeds-fake-fn-4.4" data-hash-target to="ability-swashbuckler_deeds-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">15th-level swashbuckler</Pair>
<Pair title="Full-Round Action">While the swashbuckler has at least 1 panache point, she can make a <em>perfect thrust,</em> pooling all of her attack potential into a single melee attack made with a light or one-handed piercing melee weapon. When she does, she makes the attack against the target's touch AC, and ignores all damage reduction.</Pair>
</Ability>
<Ability id="swashdeedswashbucklersedge-swashbucklers-edge-ex-fn4-5" icon={["stairs-goal"]}>
<Pair single id="swashdeedswashbucklersedge-swashbucklers-edge-ex-fn4-5"><Link to="/swashdeed/swashbucklers_edge">⮞</Link> Swashbuckler's Edge (Ex) <sup><InnerLink showBacklink="backlink-ability-swashbuckler_deeds-fake-fn-4.5" id="ability-swashbuckler_deeds-fake-fn-4.5" data-hash-target to="ability-swashbuckler_deeds-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">15th-level swashbuckler</Pair>
<Pair title="Ability">While the swashbuckler has at least 1 panache point, she can take 10 on any Acrobatics, Climb, Escape Artist, Fly, Ride, or Swim check, even while distracted or in immediate danger.</Pair>
<Pair title="Special">She can use this ability in conjunction with the <Link to="/swashdeed/derring_do">derring-do</Link> deed.</Pair>
</Ability>
<h3 id="ability-swashbuckler_deeds-19th-level-deeds" data-hash-target>19th-Level Deeds</h3>
<Ability id="swashdeedcheatdeath-cheat-death-ex-fn4-6" icon={["armor-upgrade"]}>
<Pair single id="swashdeedcheatdeath-cheat-death-ex-fn4-6"><Link to="/swashdeed/cheat_death">⮞</Link> Cheat Death (Ex) <sup><InnerLink showBacklink="backlink-ability-swashbuckler_deeds-fake-fn-4.6" id="ability-swashbuckler_deeds-fake-fn-4.6" data-hash-target to="ability-swashbuckler_deeds-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">19th-level swashbuckler</Pair>
<Pair title="Ability">Whenever the swashbuckler is reduced to 0 hit points or fewer, she can spend all of her remaining panache to instead be reduced to 1 hit point. She must have at least 1 panache point to spend.</Pair>
<Pair title="Special">Effects that kill the swashbuckler outright without dealing hit point damage are not affected by this ability.</Pair>
</Ability>
<Ability id="swashdeeddeadlystab-deadly-stab-ex-fn4-7" icon={["armor-downgrade"]}>
<Pair single id="swashdeeddeadlystab-deadly-stab-ex-fn4-7"><Link to="/swashdeed/deadly_stab">⮞</Link> Deadly Stab (Ex) <sup><InnerLink showBacklink="backlink-ability-swashbuckler_deeds-fake-fn-4.7" id="ability-swashbuckler_deeds-fake-fn-4.7" data-hash-target to="ability-swashbuckler_deeds-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">19th-level swashbuckler</Pair>
<Pair title="Ability">When the swashbuckler confirms a critical hit with a light or one-handed piercing melee weapon, in addition to the normal damage, she can spend 1 panache point to inflict a <em>deadly stab.</em> The target must succeed at a Fortitude saving throw or die. The DC of this save is 10 + 1/2 the swashbuckler's level + the swashbuckler's Dexterity modifier.</Pair>
<Pair title="Special">This is a death attack. Performing this deed does not grant the swashbuckler a panache point.</Pair>
</Ability>
<Ability id="swashdeedstunningstab-stunning-stab-ex-fn4-8" icon={["armor-downgrade"]}>
<Pair single id="swashdeedstunningstab-stunning-stab-ex-fn4-8"><Link to="/swashdeed/stunning_stab">⮞</Link> Stunning Stab (Ex) <sup><InnerLink showBacklink="backlink-ability-swashbuckler_deeds-fake-fn-4.8" id="ability-swashbuckler_deeds-fake-fn-4.8" data-hash-target to="ability-swashbuckler_deeds-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">19th-level swashbuckler</Pair>
<Pair title="Ability">When a swashbuckler hits a creature with a light or one-handed piercing melee weapon, she can spend 2 panache points. The creature must succeed at a Fortitude saving throw (DC = 10 + 1/2 the swashbuckler's level + the swashbuckler's Dexterity modifier) or be <Link to="/misc/stunned">stunned</Link> for 1 round.</Pair>
<Pair title="Special">Creatures that are immune to critical hits are also immune to this effect.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-swashbuckler_deeds-label">Footnotes</h3><ol>
<li id="ability-swashbuckler_deeds-fake-fn-1-target"><p><Link to="/source/advanced_class_guide">Advanced Class Guide</Link> pg. 56 <InnerLink aria-label="Back to reference 1" id="backlink-ability-swashbuckler_deeds-fake-fn-1" data-hash-target to="ability-swashbuckler_deeds-fake-fn-1">↩</InnerLink></p></li>
<li id="ability-swashbuckler_deeds-fake-fn-2-target"><p>Advanced Class Guide pg. 57 <InnerLink aria-label="Back to reference 2" id="backlink-ability-swashbuckler_deeds-fake-fn-2" data-hash-target to="ability-swashbuckler_deeds-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-swashbuckler_deeds-fake-fn-2.2" data-hash-target to="ability-swashbuckler_deeds-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-swashbuckler_deeds-fake-fn-2.3" data-hash-target to="ability-swashbuckler_deeds-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-swashbuckler_deeds-fake-fn-2.4" data-hash-target to="ability-swashbuckler_deeds-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-swashbuckler_deeds-fake-fn-2.5" data-hash-target to="ability-swashbuckler_deeds-fake-fn-2.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-swashbuckler_deeds-fake-fn-3-target"><p>Advanced Class Guide pg. 58 <InnerLink aria-label="Back to reference 3" id="backlink-ability-swashbuckler_deeds-fake-fn-3" data-hash-target to="ability-swashbuckler_deeds-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-swashbuckler_deeds-fake-fn-3.2" data-hash-target to="ability-swashbuckler_deeds-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-swashbuckler_deeds-fake-fn-3.3" data-hash-target to="ability-swashbuckler_deeds-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-swashbuckler_deeds-fake-fn-3.4" data-hash-target to="ability-swashbuckler_deeds-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-swashbuckler_deeds-fake-fn-3.5" data-hash-target to="ability-swashbuckler_deeds-fake-fn-3.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-swashbuckler_deeds-fake-fn-4-target"><p>Advanced Class Guide pg. 59 <InnerLink aria-label="Back to reference 4" id="backlink-ability-swashbuckler_deeds-fake-fn-4" data-hash-target to="ability-swashbuckler_deeds-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-swashbuckler_deeds-fake-fn-4.2" data-hash-target to="ability-swashbuckler_deeds-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-swashbuckler_deeds-fake-fn-4.3" data-hash-target to="ability-swashbuckler_deeds-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-swashbuckler_deeds-fake-fn-4.4" data-hash-target to="ability-swashbuckler_deeds-fake-fn-4.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-swashbuckler_deeds-fake-fn-4.5" data-hash-target to="ability-swashbuckler_deeds-fake-fn-4.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-swashbuckler_deeds-fake-fn-4.6" data-hash-target to="ability-swashbuckler_deeds-fake-fn-4.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-swashbuckler_deeds-fake-fn-4.7" data-hash-target to="ability-swashbuckler_deeds-fake-fn-4.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-swashbuckler_deeds-fake-fn-4.8" data-hash-target to="ability-swashbuckler_deeds-fake-fn-4.8">↩<sup>8</sup></InnerLink></p></li>
</ol></section></div>};
const _swashbuckler_renowned_deeds = {title: "Renowned Deeds", topLink: ["Swashbuckler","class/swashbuckler"], jsx: <><h2 id="ability-swashbuckler_renowned_deeds-renowned-deeds">Renowned Deeds</h2>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 5</Link></p>
<p>Swashbucklers and gunslingers perform impressive deeds through their grit and panache, but some are capable of truly spectacular acts known as renowned deeds. A swashbuckler or gunslinger (though not members of other classes) can select a renowned deed for her class upon reaching the class level listed in the deed's description. This replaces the specific listed deed or deeds; if the character would not gain the appropriate deeds, she cannot select the renowned deed, as if selecting an archetype.</p>
<h3 id="ability-swashbuckler_renowned_deeds-1st-level-renowned-deed">1st-Level Renowned Deed</h3>
<Ability id="vengeful-heart-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="vengeful-heart-ex" flavor="Some swashbucklers are driven by vengeance above all else.">Vengeful Heart (Ex)</Pair>
<Pair hl title="Replaces">The <Link to="/swashdeed/derring_do">derring-do</Link> deed and one other 1st-level deed</Pair>
<Pair title="At 1st Level">The swashbuckler gains the <Link to="/class/samurai">samurai's</Link> <em>resolve</em> class feature, treating her swashbuckler level as her samurai level. Whenever the swashbuckler spends a use of <em>resolve,</em> she must also spend a point of <em>panache</em> or a use of <em>charmed life,</em> or the use of <em>resolve</em> has no effect.</Pair>
</Ability>
<Ability id="resolve-ex" extraClasses="subAbility" icon={["stairs-goal","remedy","rolling-dices","armor-upgrade"]}>
<Pair single id="resolve-ex" flavor="Relevant text from the samurai ability.">Resolve (Ex)</Pair>
<Pair title="Passive Ability">You gain <em>resolve</em> that you can call upon to endure even the most devastating wounds and afflictions. You can use this <em>resolve</em> in a number of ways.</Pair>
<Pair title="Usage">1 time/day + 1 per two samurai levels beyond 1st<ByLevelPop levels={[[1,1],[3,2],[5,3],[7,4],[9,5],[11,6],[13,7],[15,8],[17,9],[19,10]]} unit="time" postText="/day" /></Pair>
<Pair title="Determined">You can spend one use of your <em>resolve</em> as a <strong className="hl">standard action</strong> to remove the <Link to="/misc/fatigued">fatigued</Link>, <Link to="/misc/shaken">shaken</Link>, or <Link to="/misc/sickened">sickened</Link> condition. If the condition has a duration longer than 1 hour or is permanent, this ability removes the condition for 1 hour, at which time the condition returns.</Pair>
<Pair title="Resolute">Whenever you are required to make a Fortitude or Will save, you can spend one use of your <em>resolve</em> as an <strong className="hl">immediate action</strong> to roll twice and take the better result. You must decide to use this ability before you roll the saving throw.</Pair>
<Pair title="Unstoppable">When you are reduced to fewer than 0 hit points but not slain, you can spend one use of your <em>resolve</em> as an <strong className="hl">immediate action</strong> to instantly <Link to="/misc/stabilize">stabilize</Link> and remain conscious. You are staggered, but you do not fall unconscious and begin dying if you take a standard action. You do fall <Link to="/misc/unconscious">unconscious</Link> if you take additional damage from any source.</Pair>
<Pair title="At 8th Level"><em>Determined</em> can now remove the <Link to="/misc/exhausted">exhausted</Link>, <Link to="/misc/frightened">frightened</Link>, <Link to="/misc/nauseated">nauseated</Link>, or <Link to="/misc/staggered">staggered</Link> conditions, instead.</Pair>
</Ability>
<h3 id="ability-swashbuckler_renowned_deeds-3rd-level-renowned-deed">3rd-Level Renowned Deed</h3>
<Ability id="hilt-hammer-ex" icon={["broken-shield","upgrade"]}>
<Pair single id="hilt-hammer-ex" flavor="Precise strikes with a slender blade do little to hinder amorphous or incorporeal creatures; when encountering such threats, some swashbucklers abandon precision in favor of brutish strikes.">Hilt Hammer (Ex)</Pair>
<Pair hl title="Replaces">A 3rd-level deed other than <Link to="/swashdeed/precise_strike">precise strike</Link></Pair>
<Pair hl title="Alters">The <em>precise strike</em> deed</Pair>
<Pair title="At 3rd Level">The swashbuckler can activate this deed before rolling the attack roll when making an attack that would benefit from <em>precise strike.</em> An attack altered this way deals only half the normal damage from <em>precise strike,</em> but this damage is not treated as <Link to="/misc/precision_damage">precision damage</Link>.</Pair>
</Ability>
<h3 id="ability-swashbuckler_renowned_deeds-7th-level-renowned-deed">7th-Level Renowned Deed</h3>
<Ability id="dodging-dance-ex" icon={["armor-upgrade","mailed-fist"]}>
<Pair single id="dodging-dance-ex" flavor="The swashbuckler moves around her opponents' attacks to open them up for strikes.">Dodging Dance (Ex)</Pair>
<Pair hl title="Replaces">The <Link to="/swashdeed/swashbucklers_grace">swashbuckler's grace</Link> deed and one other 7th-level deed</Pair>
<Pair title="At 7th Level">A swashbuckler can spend 1 panache point to move up to half her speed as a <strong className="hl">move action</strong>. If a creature makes an attack of opportunity against her due to this movement, she can attempt an Acrobatics check with a DC equal to the attacking creature's CMD. If she succeeds, the attack of opportunity misses, and the swashbuckler can make an attack of opportunity against the attacking creature instead. She can attempt to evade multiple attacks of opportunity during this movement, but the DC of the Acrobatics check increases by 2 for each additional opponent that makes an attack of opportunity against her during this movement.</Pair>
<Pair title="Special">If the swashbuckler has an ability that grants her additional attacks of opportunity, she can use them to respond to multiple missed attacks of opportunity with her own attacks.</Pair>
</Ability>
<h3 id="ability-swashbuckler_renowned_deeds-11-level-renowned-deed">11-Level Renowned Deed</h3>
<Ability id="vengeful-soul-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="vengeful-soul-ex" flavor="Sometimes vengeance can take years or even decades, forcing the aggrieved swashbuckler to push the limits of her endurance.">Vengeful Soul (Ex)</Pair>
<Pair title="Prerequisites"><em>Vengeful heart</em> renowned deed</Pair>
<Pair hl title="Replaces">The <Link to="/swashdeed/subtle_blade">subtle blade</Link> and <Link to="/swashdeed/cheat_death">cheat death</Link> deeds, plus an additional 11th-level deed</Pair>
<Pair title="At 11th Level">The swashbuckler gains the <Link to="/class/samurai">samurai's</Link> <em>greater resolve</em> class feature.</Pair>
<Pair title="At 19th Level">The swashbuckler gains the samurai's <em>true resolve</em> class feature.</Pair>
</Ability>
<Ability id="greater-resolve-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="greater-resolve-ex" flavor="Text from the samurai class ability.">Greater Resolve (Ex)</Pair>
<Pair title="Immediate Action">After a critical hit is confirmed against you, you can spend one use of your <em>resolve</em> to treat that critical hit as a normal hit.</Pair>
<Pair title="Special">Effects that only trigger on a critical hit do not trigger when you use this ability.</Pair>
</Ability>
<Ability id="true-resolve-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="true-resolve-ex" flavor="Text from the samurai class ability.">True Resolve (Ex)</Pair>
<Pair title="Ability">If you have at least two uses of your <em>resolve</em> remaining, you can spend all of the daily uses of your <em>resolve</em> that you have available to you to avoid death. Regardless of the source of the attack that would have killed you, you are left alive, at -1 hit points (or lower if you were already below -1), unconscious, and <Link to="/misc/stable">stable</Link>.</Pair>
</Ability>
</>};
const _tricks = {title: "Mesmerist Tricks", topLink: ["Mesmerist","class/mesmerist"], jsx: <div className="compilation"><h2 id="ability-tricks-mesmerist-tricks">Mesmerist Tricks</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures</Link><br/>A mesmerist can create hypnotic bonds with his allies, implanting magical suggestions in their minds that he can later activate. Each day, he can implant a number of these tricks equal to 1/2 his mesmerist level (minimum 1) plus his Charisma bonus (if any). He can have only one trick implanted at a given time, and implanting a new trick ends the previous one (the mesmerist still loses the use of this ability he spent on the previous trick).</p>
<p>To implant a trick, the mesmerist must take a standard action and either touch a willing creature or implant the trick in himself. A creature can be the subject of only one mesmerist trick at a time. The mesmerist can activate the trick as a free action when a triggering condition is met (as defined in the trick's description), even if it isn't his turn. The subject must be within medium range (100 feet + 10 feet per level) for the mesmerist to trigger the trick. The mesmerist monitors for the trick's triggering condition through a subtle telepathic connection, so he doesn't need line of sight to trigger it&mdash;but anything that blocks telepathic contact prevents him from triggering tricks. An implanted trick lasts until the next time the mesmerist regains his spells.</p>
<p>Once triggered, a trick is no longer implanted, and can't be triggered again until the mesmerist implants the trick again. The duration of the effect caused by triggering a trick is either instantaneous or appears in the trick's entry. The DC for any mesmerist trick or masterful trick that requires a saving throw or skill check is 10 + 1/2 the mesmerist's level + the mesmerist's Charisma modifier.</p>
<p>The mesmerist knows one trick at 1st level, and learns another trick at 2nd level and every 2 levels thereafter (to a maximum of 11 tricks at 20th level). Each daily use of mesmerist tricks can be used to implant any trick the mesmerist knows. Unless specifically noted in the mesmerist trick's description, a mesmerist can't choose a particular trick more than once.</p>
<hr/>
<Ability id="trickastoundingavoidance-astounding-avoidance-fn1" icon={["shield-reflect"]}>
<Pair single id="trickastoundingavoidance-astounding-avoidance-fn1" flavor="The subject can avoid damage from magical and unusual attacks."><Link to="/trick/astounding_avoidance">⮞</Link> Astounding Avoidance <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-1" id="ability-tricks-fake-fn-1" data-hash-target to="ability-tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject attempts a saving throw against an attack or spell that normally deals half damage on a successful save, before the subject rolls the save. If the subject succeeds at her save, she takes no damage.</Pair>
<Pair title="At 12th Level">The subject takes only half damage if she fails her save.</Pair>
<Pair title="Special">The benefits of this trick don't stack with those of the <em>evasion</em> or <em>stalwart</em> class features.</Pair>
</Ability>
<Ability id="trickbreakstupor-break-stupor-fn2" icon={["remedy","broken-shield"]}>
<Pair single id="trickbreakstupor-break-stupor-fn2"><Link to="/trick/break_stupor">⮞</Link> Break Stupor <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-2" id="ability-tricks-fake-fn-2" data-hash-target to="ability-tricks-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability"><p>The mesmerist can trigger this trick whenever the subject is under an effect such as the <Link to="/misc/fascinated">fascinated</Link> condition or magical slumber as per the <Link to="/spell/sleep">sleep</Link> spell that would be ended by the subject taking damage or by an obvious threat. The trick sends a momentary phantom threat and sensation of pain, ending the effect. This ability works fast enough to prevent a sleeping creature from falling <Link to="/rule/prone">prone</Link> or dropping what it is holding, if the mesmerist uses it immediately.</p>
<p>The mesmerist can also trigger the trick if the subject becomes <Link to="/misc/confused">confused</Link> as per <Link to="/spell/confusion">confusion</Link>, but if he does so, the subject attacks the mesmerist on its next turn, as if the mesmerist attacked the subject.</p>
</Pair>
</Ability>
<Ability id="trickchainofeyes-chain-of-eyes-fn3" icon={["stairs-goal","broken-shield"]}>
<Pair single id="trickchainofeyes-chain-of-eyes-fn3"><Link to="/trick/chain_of_eyes">⮞</Link> Chain of Eyes <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-3" id="ability-tricks-fake-fn-3" data-hash-target to="ability-tricks-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability"><p>The subject can share her senses with the mesmerist. The mesmerist triggers <em>chain of eyes</em> by closing his eyes and concentrating on the implanted subject, allowing the mesmerist to see and hear everything the target experiences with her own senses of sight and hearing (including any special senses or magical effects).</p>
<p>Once triggered, <em>chain of eyes</em> lasts for 1 minute per mesmerist level or until the mesmerist shifts his field of vision back to himself as a <strong className="hl">free action</strong>.</p>
</Pair>
<Pair title="Special">While viewing events from the target's perspective, the mesmerist is <Link to="/rule/flat_footed">flat-footed</Link>, even if he can see himself from another perspective.</Pair>
</Ability>
<Ability id="trickcompelalacrity-compel-alacrity-fn1-2" icon={["upgrade","armor-upgrade"]}>
<Pair single id="trickcompelalacrity-compel-alacrity-fn1-2" flavor="A dash of mental speed lets the subject push past her physical limits to avoid an enemy."><Link to="/trick/compel_alacrity">⮞</Link> Compel Alacrity <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-1.2" id="ability-tricks-fake-fn-1.2" data-hash-target to="ability-tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject begins her turn within an enemy's reach. The subject can move 10 feet as a <strong className="hl">free action</strong> without provoking attacks of opportunity.</Pair>
<Pair title="At 5th Level">The subject can move 15 feet as a free action.</Pair>
<Pair title="At 10th Level">The subject can move 20 feet as a free action.</Pair>
<Pair title="At 15th Level">The subject can move 25 feet as a free action.</Pair>
<Pair title="At 20th Level">The subject can move 30 feet as a free action.</Pair>
<Pair title="Special">The subject can't move farther than her speed in this way. The movement from this trick doesn't count against the subject's movement speed for that round.</Pair>
</Ability>
<Ability id="trickenchantingwords-enchanting-words-fn2-2" icon={["upgrade"]}>
<Pair single id="trickenchantingwords-enchanting-words-fn2-2"><Link to="/trick/enchanting_words">⮞</Link> Enchanting Words <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-2.2" id="ability-tricks-fake-fn-2.2" data-hash-target to="ability-tricks-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick whenever the subject attempts a Diplomacy or Intimidate check to adjust a creature's attitude. The subject can use the mesmerist's Charisma modifier instead of her own Charisma modifier on the check.</Pair>
<Pair title="Special">If the subject uses Intimidate, the adjustment in attitude lasts an additional number of minutes equal to 10 &times; the mesmerist's Charisma modifier (minimum of 10 additional minutes).</Pair>
</Ability>
<Ability id="trickfalseflanker-false-flanker-fn1-3" icon={["upgrade"]}>
<Pair single id="trickfalseflanker-false-flanker-fn1-3" flavor="A duplicate of the mesmerist appears momentarily, as though he were fighting in tandem with the subject."><Link to="/trick/false_flanker">⮞</Link> False Flanker <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-1.3" id="ability-tricks-fake-fn-1.3" data-hash-target to="ability-tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject moves into or begins her turn in a square where she threatens an enemy. An illusory duplicate of the mesmerist appears in any unoccupied space adjacent to that enemy. This duplicate counts as threatening the enemy for the purposes of determining <Link to="/rule/flanking">flanking</Link>, but can't actually make attacks. The duplicate disappears at the end of the turn during which the trick is triggered.</Pair>
<Pair title="Special">This is an illusion (figment) effect, and a creature that interacts with the <em>false flanker</em> can attempt a saving throw to disbelieve the effect.</Pair>
</Ability>
<Ability id="trickfearsomeguise-fearsome-guise-fn1-4" icon={["magic-swirl","upgrade"]}>
<Pair single id="trickfearsomeguise-fearsome-guise-fn1-4" flavor="A veil of illusion makes the subject appear to be someone else and then transform into a hideous monster at an opportune time."><Link to="/trick/fearsome_guise">⮞</Link> Fearsome Guise <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-1.4" id="ability-tricks-fake-fn-1.4" data-hash-target to="ability-tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability"><p>While this trick is implanted, the subject's appearance is altered, as <Link to="/spell/disguise_self">disguise self</Link>. The mesmerist can trigger this trick when the subject attacks a creature. The illusory appearance briefly makes the subject appear monstrous, then ends.</p>
<p>The mesmerist attempts an <Link to="/skill/intimidate">Intimidate</Link> check to demoralize the target of the triggering attack. The restrictions on attempts to demoralize a target (the target being within 30 feet and able to see and hear the creature attempting the Intimidate check) apply to the subject of the trick.</p>
</Pair>
<Pair title="Special">This is an illusion (glamer) effect.</Pair>
</Ability>
<Ability id="trickfleetinshadows-fleet-in-shadows-fn4" icon={["upgrade"]}>
<Pair single id="trickfleetinshadows-fleet-in-shadows-fn4"><Link to="/trick/fleet_in_shadows">⮞</Link> Fleet in Shadows <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-4" id="ability-tricks-fake-fn-4" data-hash-target to="ability-tricks-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick whenever the target enters an area with <Link to="/rule/dim_light">dim or darker light</Link>. The subject can move double its normal speed (up to an additional 30 feet) for 1 round, but only while moving through areas of dim or darker light. Additionally, the subject can move at its normal speed and use the bonus speed from this trick in areas of total darkness, even if it cannot see.</Pair>
</Ability>
<Ability id="trickgiftofwill-gift-of-will-fn1-5" icon={["shield-reflect"]}>
<Pair single id="trickgiftofwill-gift-of-will-fn1-5" flavor="A small portion of the mesmerist's vast mental power buttresses his ally's mind."><Link to="/trick/gift_of_will">⮞</Link> Gift of Will <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-1.5" id="ability-tricks-fake-fn-1.5" data-hash-target to="ability-tricks-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject attempts a Will saving throw or a Sense Motive check, or is targeted by an Intimidate check to demoralize her. For a saving throw, the subject uses the mesmerist's Will saving throw bonus instead of her own. For a Sense Motive check or Intimidate check, she adds the mesmerist's Charisma bonus as a morale bonus on the check or to the DC.</Pair>
<Pair title="Special">The mesmerist can't implant this trick on himself.</Pair>
</Ability>
<Ability id="tricklevitationbuffer-levitation-buffer-fn5" icon={["shield-reflect"]}>
<Pair single id="tricklevitationbuffer-levitation-buffer-fn5" flavor="A mesmerist's telekinetic assault renders foes around the subject less of a threat."><Link to="/trick/levitation_buffer">⮞</Link> Levitation Buffer <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-5" id="ability-tricks-fake-fn-5" data-hash-target to="ability-tricks-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability"><p>The mesmerist can trigger this trick when either an enemy moves adjacent to the subject or the subject begins her turn with one or more enemies adjacent to her. The mesmerist can either lift all enemies adjacent to the subject slightly into the air or push them all away from the subject.</p>
<p>Lifting enemies causes them to move at half speed and take a -4 penalty to their CMDs against <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/drag">drag</Link>, and <Link to="/rule/reposition">reposition</Link> attempts for 1 round (Will negates). The speed reduction and CMD penalty don't stack with those from hostile levitation.</p>
<p>Pushing enemies away requires the mesmerist to attempt a bull rush combat maneuver check using his mesmerist level + his Charisma modifier as his CMB. Any enemy that's successfully pushed moves away from the subject of the trick using the normal rules for a bull rush.</p>
</Pair>
</Ability>
<Ability id="trickliferevier-life-revier-fn6" icon={["upgrade"]}>
<Pair single id="trickliferevier-life-revier-fn6"><Link to="/trick/life_revier">⮞</Link> Life Revier <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-6" id="ability-tricks-fake-fn-6" data-hash-target to="ability-tricks-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject attempts an Intelligence or Knowledge check to remember a previous experience. The subject receives flashes of her entire life up to this point. She can use the mesmerist's Charisma modifier in place of her Intelligence modifier on the check, and she can attempt the check untrained. The subject cannot learn information that she has not previously read, heard, or otherwise experienced at some point during her life when using this ability.</Pair>
</Ability>
<Ability id="tricklinkedreaction-linked-reaction-fn5-2" icon={["upgrade"]}>
<Pair single id="tricklinkedreaction-linked-reaction-fn5-2" flavor="A hive mind allows the mesmerist and an ally to share one another's reaction times."><Link to="/trick/linked_reaction">⮞</Link> Linked Reaction <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-5.2" id="ability-tricks-fake-fn-5.2" data-hash-target to="ability-tricks-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when either the subject or the mesmerist is surprised and the other isn't (even if the mesmerist would normally be unable to take actions because of being surprised). Both the mesmerist and the subject can act in this surprise round.</Pair>
<Pair title="Special">The mesmerist can't implant this trick on himself.</Pair>
</Ability>
<Ability id="trickmaskmisery-mask-misery-fn5-3" icon={["remedy"]}>
<Pair single id="trickmaskmisery-mask-misery-fn5-3" flavor="The subject can shrug off a condition for a short time before succumbing to it."><Link to="/trick/mask_misery">⮞</Link> Mask Misery <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-5.3" id="ability-tricks-fake-fn-5.3" data-hash-target to="ability-tricks-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability"><p>The mesmerist can trigger this trick when the subject becomes affected by a minor condition listed under the <em>touch treatment</em> ability. The subject can ignore the effect of that condition for 1d4 rounds, after which the subject takes the full effect. This has no effect on any conditions affecting the subject other than the triggering condition, even if those other effects are also listed under <em>touch treatment.</em></p>
<p>The rounds during which the subject ignores the triggering effect still count against that effect's duration; if the duration of <em>mask misery</em> is longer than the effect lasts, the subject isn't affected by the condition at all. If an effect that imposes more than one condition triggers this trick, the subject ignores all eligible conditions.</p>
</Pair>
<Pair title="At 6th Level">He adds the <em>moderate conditions</em> to the conditions he can ignore with this trick, and this trick ends <em>minor conditions</em> entirely instead of suppressing them temporarily.</Pair>
<Pair title="Special">The mesmerist doesn't need to have <em>touch treatment</em> to choose or use this trick.</Pair>
</Ability>
<Ability id="trickmeekfacade-meek-facade-fn5-4" icon={["shield-reflect","magic-swirl"]}>
<Pair single id="trickmeekfacade-meek-facade-fn5-4" flavor="The subject magically seems like a weak target, goading an enemy into attacking her."><Link to="/trick/meek_facade">⮞</Link> Meek Facade <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-5.4" id="ability-tricks-fake-fn-5.4" data-hash-target to="ability-tricks-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject misses a creature with an attack (even if it's part of a full attack in which she hits that creature with another attack). The enemy must attack no one other than the subject, and the subject gains a +2 dodge bonus to AC against the triggering enemy's attacks. Both of these effects last for 1 round.</Pair>
<Pair title="At 5th Level">The bonus to AC becomes +3.</Pair>
<Pair title="At 10th Level">The bonus to AC increases to +4.</Pair>
<Pair title="At 15th Level">The bonus to AC becomes +5.</Pair>
<Pair title="At 20th Level">The bonus to AC increases to +6.</Pair>
<Pair title="Special">This is a mind-affecting compulsion effect.</Pair>
</Ability>
<Ability id="trickmesmericmirror-mesmeric-mirror-fn5-5" icon={["shield-reflect"]}>
<Pair single id="trickmesmericmirror-mesmeric-mirror-fn5-5" flavor="An illusory image appears near the subject to throw off attackers."><Link to="/trick/mesmeric_mirror">⮞</Link> Mesmeric Mirror <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-5.5" id="ability-tricks-fake-fn-5.5" data-hash-target to="ability-tricks-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject is attacked or becomes the target of a spell that requires an attack roll. One duplicate of the subject appears, and the attacker must determine randomly which it hits (as <Link to="/spell/mirror_image">mirror image</Link>).</Pair>
<Pair title="At 5th Level">This trick now creates 2 duplicates.</Pair>
<Pair title="At 10th Level">This trick now makes 3 duplicates.</Pair>
<Pair title="At 15th Level">This trick now creates 4 duplicates.</Pair>
<Pair title="At 20th Level">This trick now makes 5 duplicates.</Pair>
<Pair title="Special">Each image lasts for 1 minute per mesmerist level or until destroyed. This is an illusion (figment) effect.</Pair>
</Ability>
<Ability id="trickmesmericpantomime-mesmeric-pantomime-fn5-6" icon={["upgrade"]}>
<Pair single id="trickmesmericpantomime-mesmeric-pantomime-fn5-6" flavor="By orchestrating the movement of his ally's body, the mesmerist imparts to that ally his own skill at a physical task."><Link to="/trick/mesmeric_pantomime">⮞</Link> Mesmeric Pantomime <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-5.6" id="ability-tricks-fake-fn-5.6" data-hash-target to="ability-tricks-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject attempts a Strength- or Dexterity-based skill check. The subject either uses the mesmerist's bonus on the skill check in place of her own or gains a morale bonus on the check equal to the mesmerist's Charisma bonus, whichever results in a higher modifier.</Pair>
<Pair title="Special">The mesmerist can't implant this trick on himself.</Pair>
</Ability>
<Ability id="trickmisdirection-misdirection-fn5-7" icon={["armor-downgrade"]}>
<Pair single id="trickmisdirection-misdirection-fn5-7" flavor="An enemy's perception of an attack by the subject shifts, making the foe unprepared to defend against the attack."><Link to="/trick/misdirection">⮞</Link> Misdirection <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-5.7" id="ability-tricks-fake-fn-5.7" data-hash-target to="ability-tricks-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject makes an attack or uses a spell that requires an attack roll. The mesmerist attempts a <Link to="/skill/bluff">Bluff</Link> check to feint against a single target of the subject's attack. Unlike a normal feint, this ability can be used on non-melee attacks. If the feint succeeds, the target of the attack is denied its Dexterity bonus to AC against the triggering attack. The target doesn't suffer any additional effects that the mesmerist or the subject would cause on a normal feint or Bluff check.</Pair>
<Pair title="Special">This is an illusion (glamer) effect.</Pair>
</Ability>
<Ability id="trickpsychicimpression-psychic-impression-fn7" icon={["magic-swirl"]}>
<Pair single id="trickpsychicimpression-psychic-impression-fn7" flavor={<>Objects retain <em>psychic impressions</em> of those who come in contact with them, and a powerful mind can read these impressions.</>}><Link to="/trick/psychic_impression">⮞</Link> Psychic Impression <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-7" id="ability-tricks-fake-fn-7" data-hash-target to="ability-tricks-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject touches an object that another creature with an Intelligence score of 3 or more has touched in the last 10 minutes. The mesmerist receives a <em>psychic impression</em> of the emotional state of the last such creature to touch the object. This impression contains no images or languages and can't show the mesmerist who the creature was if the mesmerist doesn't already know.</Pair>
</Ability>
<Ability id="trickpsychosomaticsurge-psychosomatic-surge-fn5-8" icon={["remedy"]}>
<Pair single id="trickpsychosomaticsurge-psychosomatic-surge-fn5-8" flavor="Psychic magic soothes the subject, alleviating her wounds temporarily."><Link to="/trick/psychosomatic_surge">⮞</Link> Psychosomatic Surge <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-5.8" id="ability-tricks-fake-fn-5.8" data-hash-target to="ability-tricks-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject takes damage. The subject gains a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to 1d8 + 1/2 the mesmerist's level. If the damage from the triggering attack would have reduced the subject to 0 hit points or fewer, this trick grants an additional 1d8 temporary hit points. These temporary hit points last for 1 hour or until discharged.</Pair>
</Ability>
<Ability id="trickreflectfear-reflect-fear-fn4-2" icon={["remedy"]}>
<Pair single id="trickreflectfear-reflect-fear-fn4-2"><Link to="/trick/reflect_fear">⮞</Link> Reflect Fear <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-4.2" id="ability-tricks-fake-fn-4.2" data-hash-target to="ability-tricks-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject is affected by a fear effect or is the target of an Intimidate check to demoralize it. When the trick is triggered, the subject suppresses the fear effect that triggered the trick for 1d4 rounds, and any creature that caused this effect must succeed at a Will save or become <Link to="/misc/shaken">shaken</Link> for 1 round. The rounds during which the subject ignores the triggering fear effect still count against the effect's duration. If the duration of the <em>reflect fear</em> trick is longer than the fear effect lasts, the subject isn't affected by the fear effect at all.</Pair>
</Ability>
<Ability id="trickreflectionofweakness-reflection-of-weakness-fn5-9" icon={["shield-reflect","armor-downgrade"]}>
<Pair single id="trickreflectionofweakness-reflection-of-weakness-fn5-9" flavor="Psychic feedback causes an enemy to suffer from the same weakening effect it imposes on the subject."><Link to="/trick/reflection_of_weakness">⮞</Link> Reflection of Weakness <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-5.9" id="ability-tricks-fake-fn-5.9" data-hash-target to="ability-tricks-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability"><p>The mesmerist can trigger this trick when an attack or spell used by an enemy causes the subject to take <Link to="/rule/ability_damage_drain">ability damage, ability drain</Link>, <Link to="/rule/bleed">bleed</Link> damage, or a minor or moderate condition listed under the <em>touch treatment</em> class feature.</p>
<p>If the trick is triggered by ability damage, ability drain, or bleed damage, the amount of damage or drain the subject takes is reduced by 2 points (to a minimum of 0 points), and the creature that made the attack or cast the spell takes 2 points of ability damage to an ability score of the mesmerist's choice. The monster can attempt a Will save to negate the ability damage. This ability can be used if the attacker inflicts a curse, disease, or poison that deals ability damage or drain, but only if it deals that damage immediately, with no onset time.</p>
<p>If the trick is triggered by the subject gaining a condition, the subject is still affected by the condition, but the attacker takes a condition of the mesmerist's choice for 1 round. This condition must come from the minor condition or moderate condition lists of the <em>touch treatment</em> class feature. The enemy can attempt a Will save to avoid gaining the condition.</p>
</Pair>
<Pair title="Special">The mesmerist doesn't need to have <em>touch treatment</em> to select or use this trick.</Pair>
</Ability>
<Ability id="trickseeindarkness-see-in-darkness-fn4-3" icon={["stairs-goal"]}>
<Pair single id="trickseeindarkness-see-in-darkness-fn4-3"><Link to="/trick/see_in_darkness">⮞</Link> See in Darkness <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-4.3" id="ability-tricks-fake-fn-4.3" data-hash-target to="ability-tricks-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The subject gains darkvision with a range of 60 feet for 1 minute. The mesmerist can trigger this trick when the subject moves into an area of darkness.</Pair>
</Ability>
<Ability id="trickshadowsplinter-shadow-splinter-fn8" icon={["shield-reflect"]}>
<Pair single id="trickshadowsplinter-shadow-splinter-fn8" flavor="The mesmerist protects the subject against an attack and redirects the harm to someone else."><Link to="/trick/shadow_splinter">⮞</Link> Shadow Splinter <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-8" id="ability-tricks-fake-fn-8" data-hash-target to="ability-tricks-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Ability"><p>The mesmerist can trigger this trick when the subject takes damage from an attack. The damage the subject takes is reduced by an amount equal to 3 + the mesmerist's Charisma modifier (to a maximum of the total amount of damage the attack deals).</p>
<p>Another creature within range of the original attack, other than the attacker, is affected by a shadow illusion that makes it appear as if the attacker is attacking that creature instead of the attacker's actual target. This second creature takes an amount of damage equal to the amount by which the attack's damage was reduced. This shadow doesn't require a roll to hit and ignores cover and concealment, but the target can attempt a Will save to disbelieve the effect. If it succeeds at this save, it neither takes the damage nor believes the attacker targeted it.</p>
</Pair>
<Pair title="Special">This trick can't be triggered if there's no eligible second creature within range to take the redirected damage. This is an illusion (shadow) effect.</Pair>
</Ability>
<Ability id="trickslipbonds-slip-bonds-fn3-2" icon={["shield-reflect"]}>
<Pair single id="trickslipbonds-slip-bonds-fn3-2"><Link to="/trick/slip_bonds">⮞</Link> Slip Bonds <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-3.2" id="ability-tricks-fake-fn-3.2" data-hash-target to="ability-tricks-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Passive Ability">While implanted with this trick, the subject gains a +2 circumstance bonus on Escape Artist checks.</Pair>
<Pair title="Ability">If the subject becomes grappled, pinned, shackled, or otherwise personally restrained, the mesmerist can trigger the trick and cause the subject to become incorporeal just long enough to slip her bonds (unless they can otherwise restrain an incorporeal creature). This effect doesn't last long enough for the subject to move through walls or other barriers.</Pair>
<Pair title="At 12th Level">The subject remains incorporeal until the beginning of the mesmerist's next turn.</Pair>
</Ability>
<Ability id="trickspectralsmoke-spectral-smoke-fn8-2" icon={["shield-reflect"]}>
<Pair single id="trickspectralsmoke-spectral-smoke-fn8-2" flavor="A cloud of smoke pops up around the subject, foiling attacks."><Link to="/trick/spectral_smoke">⮞</Link> Spectral Smoke <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-8.2" id="ability-tricks-fake-fn-8.2" data-hash-target to="ability-tricks-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject is targeted by an attack or by a spell that requires an attack roll. A smoke cloud appears in the subject's square and in a 10-foot radius around it. This cloud lasts for 1 round per mesmerist level. The cloud functions as <Link to="/spell/fog_cloud">fog cloud</Link>, but is an illusion (figment) effect that can't be dispersed by wind and can be used underwater. A creature that interacts with the cloud can attempt a saving throw to disbelieve the effect.</Pair>
<Pair title="At 5th Level">The radius of the cloud becomes 15 feet.</Pair>
<Pair title="At 10th Level">The radius of the cloud increases to 20 feet.</Pair>
<Pair title="At 15th Level">The radius of the cloud becomes 25 feet.</Pair>
<Pair title="At 20th Level">The radius of the cloud increases to 30 feet.</Pair>
</Ability>
<Ability id="tricktelepathiclink-telepathic-link-fn7-2" icon={["stairs-goal"]}>
<Pair single id="tricktelepathiclink-telepathic-link-fn7-2" flavor="The subject can communicate telepathically with the mesmerist during a crisis."><Link to="/trick/telepathic_link">⮞</Link> Telepathic Link <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-7.2" id="ability-tricks-fake-fn-7.2" data-hash-target to="ability-tricks-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject and her allies are outnumbered in combat. For 1 minute per mesmerist level, the subject and the mesmerist can communicate telepathically.</Pair>
<Pair title="Special">If the subject and the mesmerist are more than a medium distance (100 feet + 10 feet per level) apart, the telepathic connection is severed and cannot be regained unless the trick is implanted again. The mesmerist and the subject must share a language to be able to communicate.</Pair>
</Ability>
<Ability id="trickumbralshield-umbral-shield-fn4-4" icon={["shield-reflect"]}>
<Pair single id="trickumbralshield-umbral-shield-fn4-4" flavor="The subject ignores any harmful effects of bright light or sunlight for 1 minute."><Link to="/trick/umbral_shield">⮞</Link> Umbral Shield <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-4.4" id="ability-tricks-fake-fn-4.4" data-hash-target to="ability-tricks-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick whenever the subject would be exposed to harmful bright light (such as sunlight is to a <Link to="/template/vampire">vampire</Link>). The subject is immune to the <Link to="/misc/dazzled">dazzled</Link> condition while this trick is in effect.</Pair>
</Ability>
<Ability id="trickunwittingmessenger-unwitting-messenger-fn3-3" icon={["magic-swirl"]}>
<Pair single id="trickunwittingmessenger-unwitting-messenger-fn3-3"><Link to="/trick/unwitting_messenger">⮞</Link> Unwitting Messenger <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-3.3" id="ability-tricks-fake-fn-3.3" data-hash-target to="ability-tricks-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability"><p>The mesmerist describes a recipient to the subject while implanting this trick, then recites a verbal message no longer than five words per mesmerist level. The subject of <em>unwitting messenger</em> has no memory of the message or the target recipient.</p>
<p>When the subject encounters the specified recipient, she repeats the message verbatim, but does not recall speaking the message or its contents.</p>
</Pair>
<Pair title="Special">The message remains buried in the subject's subconscious for 24 hours, after which time it disappears if not delivered. The subject of <em>unwitting messenger</em> can be fooled by mundane disguises or illusions, causing her to deliver the message to the wrong recipient.</Pair>
</Ability>
<Ability id="trickvanisharrow-vanish-arrow-fn8-3" icon={["shield-reflect"]}>
<Pair single id="trickvanisharrow-vanish-arrow-fn8-3" flavor="With a flourish, the mesmerist snatches a projectile from an enemy before it can be shot."><Link to="/trick/vanish_arrow">⮞</Link> Vanish Arrow <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-8.3" id="ability-tricks-fake-fn-8.3" data-hash-target to="ability-tricks-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject is targeted by a ranged weapon attack, before the attack roll is made. The mesmerist attempts a <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> check opposed by the attacker's <Link to="/skill/perception">Perception</Link> check. If the mesmerist succeeds, that ranged attack automatically misses, and the projectile appears stowed on the mesmerist's person.</Pair>
<Pair title="Special">If the attacker is making a full attack, this affects only one of the attacks (of the mesmerist's choice). If the attack is made with a <Link to="/eq-weapon/javelin">javelin</Link> or other thrown weapon, the attacker gains a +4 bonus on its Perception check. Unusually massive ranged weapons (such as boulders or ballista bolts) and ranged attacks generated by natural attacks or spell effects are not affected by this ability.</Pair>
</Ability>
<Ability id="trickvoiceofreason-voice-of-reason-fn7-3" icon={["shield-reflect"]}>
<Pair single id="trickvoiceofreason-voice-of-reason-fn7-3" flavor="The subject can more easily pierce sight-based illusions with the mesmerist's aid."><Link to="/trick/voice_of_reason">⮞</Link> Voice of Reason <sup><InnerLink showBacklink="backlink-ability-tricks-fake-fn-7.3" id="ability-tricks-fake-fn-7.3" data-hash-target to="ability-tricks-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject attempts a saving throw to disbelieve a sight-based illusion effect, but only so long as the mesmerist is not affected by or has disbelieved the illusion himself. The subject receives an insight bonus on her saving throw to disbelieve the illusion equal to the mesmerist's Charisma modifier.</Pair>
<Pair title="Special">This trick cannot be used for illusions that do not allow a saving throw.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-tricks-label">Footnotes</h3><ol>
<li id="ability-tricks-fake-fn-1-target"><p><Link to="/source/occult_adventures">Occult Adventures</Link> pg. 40 <InnerLink aria-label="Back to reference 1" id="backlink-ability-tricks-fake-fn-1" data-hash-target to="ability-tricks-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-tricks-fake-fn-1.2" data-hash-target to="ability-tricks-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-tricks-fake-fn-1.3" data-hash-target to="ability-tricks-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-tricks-fake-fn-1.4" data-hash-target to="ability-tricks-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-tricks-fake-fn-1.5" data-hash-target to="ability-tricks-fake-fn-1.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-tricks-fake-fn-2-target"><p><Link to="/source/blood_of_the_beast">Blood of the Beast</Link> pg. 18 <InnerLink aria-label="Back to reference 2" id="backlink-ability-tricks-fake-fn-2" data-hash-target to="ability-tricks-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-tricks-fake-fn-2.2" data-hash-target to="ability-tricks-fake-fn-2.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-tricks-fake-fn-3-target"><p><Link to="/source/occult_origins">Occult Origins</Link> pg. 12 <InnerLink aria-label="Back to reference 3" id="backlink-ability-tricks-fake-fn-3" data-hash-target to="ability-tricks-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-tricks-fake-fn-3.2" data-hash-target to="ability-tricks-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-tricks-fake-fn-3.3" data-hash-target to="ability-tricks-fake-fn-3.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-tricks-fake-fn-4-target"><p><Link to="/source/occult_realms">Occult Realms</Link> pg. 16 <InnerLink aria-label="Back to reference 4" id="backlink-ability-tricks-fake-fn-4" data-hash-target to="ability-tricks-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-tricks-fake-fn-4.2" data-hash-target to="ability-tricks-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-tricks-fake-fn-4.3" data-hash-target to="ability-tricks-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-tricks-fake-fn-4.4" data-hash-target to="ability-tricks-fake-fn-4.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-tricks-fake-fn-5-target"><p>Occult Adventures pg. 41 <InnerLink aria-label="Back to reference 5" id="backlink-ability-tricks-fake-fn-5" data-hash-target to="ability-tricks-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-tricks-fake-fn-5.2" data-hash-target to="ability-tricks-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-tricks-fake-fn-5.3" data-hash-target to="ability-tricks-fake-fn-5.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-tricks-fake-fn-5.4" data-hash-target to="ability-tricks-fake-fn-5.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-tricks-fake-fn-5.5" data-hash-target to="ability-tricks-fake-fn-5.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-tricks-fake-fn-5.6" data-hash-target to="ability-tricks-fake-fn-5.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-tricks-fake-fn-5.7" data-hash-target to="ability-tricks-fake-fn-5.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-tricks-fake-fn-5.8" data-hash-target to="ability-tricks-fake-fn-5.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-tricks-fake-fn-5.9" data-hash-target to="ability-tricks-fake-fn-5.9">↩<sup>9</sup></InnerLink></p></li>
<li id="ability-tricks-fake-fn-6-target"><p>Blood of the Beast pg. 19 <InnerLink aria-label="Back to reference 6" id="backlink-ability-tricks-fake-fn-6" data-hash-target to="ability-tricks-fake-fn-6">↩</InnerLink></p></li>
<li id="ability-tricks-fake-fn-7-target"><p><Link to="/source/heroes_of_golarion">Heroes of Golarion</Link> pg. 9 <InnerLink aria-label="Back to reference 7" id="backlink-ability-tricks-fake-fn-7" data-hash-target to="ability-tricks-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-tricks-fake-fn-7.2" data-hash-target to="ability-tricks-fake-fn-7.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-tricks-fake-fn-7.3" data-hash-target to="ability-tricks-fake-fn-7.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-tricks-fake-fn-8-target"><p>Occult Adventures pg. 42 <InnerLink aria-label="Back to reference 8" id="backlink-ability-tricks-fake-fn-8" data-hash-target to="ability-tricks-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-tricks-fake-fn-8.2" data-hash-target to="ability-tricks-fake-fn-8.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-tricks-fake-fn-8.3" data-hash-target to="ability-tricks-fake-fn-8.3">↩<sup>3</sup></InnerLink></p></li>
</ol></section></div>};
export default {unchained_eidolon_subtypes:_unchained_eidolon_subtypes,investigator_talents:_investigator_talents,ki_powers:_ki_powers,magus_arcana:_magus_arcana,major_hexes:_major_hexes,major_phrenic_amplifications:_major_phrenic_amplifications,masterful_tricks:_masterful_tricks,master_tricks:_master_tricks,mercies:_mercies,mysteries:_mysteries,ninja_tricks:_ninja_tricks,swashbuckler_deeds:_swashbuckler_deeds,swashbuckler_renowned_deeds:_swashbuckler_renowned_deeds,tricks:_tricks}