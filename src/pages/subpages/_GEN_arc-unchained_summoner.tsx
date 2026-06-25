import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import {Block,Row,Cell} from '../../components/Block';
import ScrollContainer from '../../components/ScrollContainer';
import ByLevelPop from '../../components/ByLevelPop';
const _construct_caller = {title: "Construct Caller", jsx: <><h2 id="arc-unchained_summoner-construct_caller-construct-caller">Construct Caller</h2>
<p><strong>Sources</strong> <Link to="/source/construct_handbook">Construct Handbook pg. 10</Link><br/>Construct callers use their mechanical and planar understandings to work planar energies as a tinkerer works parts. They use this understanding to hand-craft unique, constructed eidolons.</p>
<Ability id="arc-unchained_summoner-construct_caller-construct-eidolon-ex" icon={["info"]}>
<Pair single id="arc-unchained_summoner-construct_caller-construct-eidolon-ex">Construct Eidolon (Ex)</Pair>
<Pair hl title="Alters">Eidolon</Pair>
<Pair title="At 1st Level">A construct caller must select the <Link to="/eidolon/inevitable">inevitable</Link> subtype for her eidolon. A construct eidolon functions as an inevitable eidolon except as noted here. A construct eidolon can be of any alignment. It has no Constitution score and gains bonus hit points appropriate for a construct of its size.</Pair>
<Pair title="At 12th Level">The construct eidolon gains DR 5/adamantine instead of DR 5/chaotic.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-construct_caller-planar-tinkering-ex" icon={["upgrade"]}>
<Pair single id="arc-unchained_summoner-construct_caller-planar-tinkering-ex" flavor="A construct caller learns to better shape planar energy to improve her eidolon.">Planar Tinkering (Ex)</Pair>
<Pair hl title="Replaces">Summon monster I</Pair>
<Pair title="At 3rd Level">The number of points in her eidolon's evolution pool increases by 1.</Pair>
<Pair title="At 7th Level">The number of points in the eidolon's evolution pool increases by an additional 1.</Pair>
<Pair title="At 11th Level">The number of points in the eidolon's evolution pool increases by an additional 1.</Pair>
<Pair title="At 15th Level">The number of points in the eidolon's evolution pool increases by an additional 1.</Pair>
<Pair title="At 19th Level">The number of points in the eidolon's evolution pool increases by an additional 1.</Pair>
</Ability>
</>};
const _devil_binder = {title: "Devil Binder", jsx: <><h2 id="arc-unchained_summoner-devil_binder-devil-binder">Devil Binder</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 94</Link><br/>While many assume <Link to="/rule/hellknights">Hellknights</Link> are worshipers or agents of devilkind - or, at best, duped puppets of the infernal realm - most Hellknights see Hell and its native devils as a challenge to be conquered. If one can dominate these beings of pure (albeit cruel) law, then the power of that law is theirs by right. While the Test undertaken by those who seek to become full Hellknights is one method by which this power is earned, the devil binder takes this philosophy a step further, forcing a devil into service.</p>
<p>Unlike those of most summoners, a devil binder's eidolon does not willingly serve its master due to a similar philosophical bent. While some devil binders (especially those who do serve Hell) seek more amicable relationships with these infernal servants, others treat their eidolons as mere tools, remorselessly ordering the devils into battle. The nature of the summoner's magical bond is irrevocably altered by their style of invocation. A devil binder borrows extraplanar quintessence from her eidolon, gaining strange abilities for herself and evolving her eidolon's magical powers.</p>
<Ability id="arc-unchained_summoner-devil_binder-alignment" icon={["hazard-sign"]}>
<Pair single id="arc-unchained_summoner-devil_binder-alignment">Alignment</Pair>
<Pair title="Info">The infernal bargains and rituals a devil binder pursues leave an indelible stain upon her soul. A devil binder must be lawful evil or lawful neutral in alignment.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-devil_binder-infernal-binding-ex" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-unchained_summoner-devil_binder-infernal-binding-ex">Infernal Binding (Ex)</Pair>
<Pair hl title="Alters">Eidolon</Pair>
<Pair title="Info">A devil binder must select an eidolon of the <Link to="/eidolon/devil">devil</Link> subtype. The devil binder's eidolon never increases its maximum number of attacks, and its base attack bonus is equal to half its Hit Dice.</Pair>
<Pair title="At 4th Level">The eidolon's Charisma score increases by 2.</Pair>
<Pair title="At 8th Level">The eidolon's Charisma score increases by 2.</Pair>
<Pair title="At 12th Level">The eidolon's Charisma score increases by 2.</Pair>
<Pair title="At 16th Level">The eidolon's Charisma score increases by 2.</Pair>
<Pair title="At 20th Level">The eidolon's Charisma score increases by 2.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-devil_binder-infernal-arcana-sp" icon={["magic-swirl"]}>
<Pair single id="arc-unchained_summoner-devil_binder-infernal-arcana-sp">Infernal Arcana (Sp)</Pair>
<Pair hl title="Replaces">Summon monster I</Pair>
<Pair title="Info">The devil binder's eidolon gains the following spell-like abilities at the listed summoner level.</Pair>
<Pair plain title="1st"><Link to="/spell/protection_from_chaos">Protection from chaos</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/scorching_ray">Scorching ray</Link></Pair>
<Pair plain title="5th"><Link to="/spell/suggestion">Suggestion</Link></Pair>
<Pair plain title="7th"><Link to="/spell/charm_monster">Charm monster</Link></Pair>
<Pair plain title="9th"><Link to="/spell/dominate_person">Dominate person</Link></Pair>
<Pair plain title="11th"><Link to="/spell/planar_binding">Planar binding</Link> (devils only)</Pair>
<Pair plain title="13th"><Link to="/spell/greater_teleport">Greater teleport</Link></Pair>
<Pair plain title="15th"><Link to="/spell/power_word_stun">Power word stun</Link></Pair>
<Pair plain title="17th"><Link to="/spell/meteor_swarm">Meteor swarm</Link></Pair>
<Pair title="At 19th Level">The devil binder's eidolon can use each of its <em>infernal arcana</em> spell-like abilities three times per day.</Pair>
<Pair title="Special">Each of these spell-like abilities is usable once per day, and the eidolon's caster level is equal to the devil binder's summoner level. When the eidolon casts <em>planar binding</em> this way, the devil binder is considered to be the spell's caster instead.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-devil_binder-infernal-affinity-ex-su-or-sp" icon={["stairs-goal"]}>
<Pair single id="arc-unchained_summoner-devil_binder-infernal-affinity-ex-su-or-sp">Infernal Affinity (Ex, Su, or Sp)</Pair>
<Pair hl title="Replaces">Bond senses, shield ally, transposition, greater shield ally, merge forms, twin eidolon</Pair>
<Pair title="Info">A devil binder wrenches Hell's power from her eidolon. This grants the devil binder the bloodline powers of the <Link to="/sorcbloodline/infernal">infernal</Link> sorcerer bloodline (gained at the following levels).</Pair>
<Pair title="At 4th Level">Corrupting touch</Pair>
<Pair title="At 8th Level">Infernal resistances</Pair>
<Pair title="At 12th Level">Hellfire</Pair>
<Pair title="At 16th Level">On dark wings</Pair>
<Pair title="At 20th Level">Power of the Pit</Pair>
<Pair title="Special">The devil binder treats her summoner level as her sorcerer level for the purpose of determining their effects.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-devil_binder-smite-chaos-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-unchained_summoner-devil_binder-smite-chaos-su">Smite Chaos (Su)</Pair>
<Pair hl title="Replaces">Maker's call, eidolon's <em>devotion</em> ability</Pair>
<Pair title="Usage">1 time/day + 1 per four summoner levels beyond 6th</Pair>
<Pair title="Ability">The summoner's eidolon gains the ability to <em>smite chaos</em> as a <Link to="/pclass/hellknight">Hellknight</Link> of its Hit Dice</Pair>
</Ability>
<Ability id="arc-unchained_summoner-devil_binder-smite-chaos-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-unchained_summoner-devil_binder-smite-chaos-su" flavor="Text from the hellknight class ability.">Smite Chaos (Su)</Pair>
<Pair title="Ability">This ability functions as the paladin's <em>smite evil</em> class feature but against chaotic-aligned creatures. This ability is twice as effective against outsiders with the chaotic subtype, chaotic-aligned aberrations, and fey.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-devil_binder-smite-evil-su" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-unchained_summoner-devil_binder-smite-evil-su" flavor="Relevant text from the paladin class ability.">Smite Evil (Su)</Pair>
<Pair title="Swift Action"><p>You can call out to the powers of good to aid you in your struggle against evil, choosing one target within sight to smite. If you target a creature that is not evil, the smite is wasted with no effect.</p>
<p>If this target is evil, you add your Charisma bonus (if any) on your attack rolls and add your paladin level to all damage rolls made against the target of your smite. If the target of <em>smite evil</em> is an <Link to="/type/outsider">outsider</Link> with the <Link to="/subtype/evil">evil</Link> subtype, an evil-aligned <Link to="/type/dragon">dragon</Link>, an <Link to="/type/undead">undead</Link> creature, or a creature with levels in <Link to="/class/antipaladin">antipaladin</Link>, the bonus to damage on the first successful attack increases to 2 points of damage per paladin level. Regardless of the target, <em>smite evil</em> attacks automatically bypass any DR the creature might possess.</p>
<p>In addition, while <em>smite evil</em> is in effect, you gain a deflection bonus equal to your Charisma modifier (if any) to your AC against attacks made by the target of the smite.</p>
<p>The <em>smite evil</em> effect remains until the target of the smite is dead or the next time you rest and regain your uses of this ability.</p>
</Pair>
</Ability>
</>};
const _devil_impostor = {title: "Devil Impostor", jsx: <><h2 id="arc-unchained_summoner-devil_impostor-devil-impostor">Devil Impostor</h2>
<p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil pg. 17</Link><br/>Some summoners can't abide the cruelty of devils, or simply can't outwit them, but must appear to do so to get by in Cheliax, the Outer Planes, or similar areas of infernal influence. Rather than risk binding true devils, they reshape their eidolons into deceptive forms.</p>
<Ability icon={["skills"]} id="arc-unchained_summoner-devil_impostor-undefined">
<Pair id="arc-unchained_summoner-devil_impostor-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/intimidate">Intimidate</Link> (CHA)</Pair></Ability>
<Ability id="arc-unchained_summoner-devil_impostor-bond-alignment-su" icon={["aura"]}>
<Pair single id="arc-unchained_summoner-devil_impostor-bond-alignment-su">Bond Alignment (Su)</Pair>
<Pair hl title="Replaces">Bond senses</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A devil impostor and her eidolon both radiate alignment auras of lawful evil for the purpose of divination spells that reveal auras (such as <Link to="/spell/detect_evil">detect evil</Link>), as long as they remain within 1,000 feet of one another. This does not affect other abilities that depend on alignment (such as <em>smite evil</em>).</Pair>
<Pair title="Special">The devil impostor can suppress this effect for 1 minute as a <strong className="hl">standard action</strong>.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-devil_impostor-deceptive-eidolon" icon={["stairs-goal","aura"]}>
<Pair single id="arc-unchained_summoner-devil_impostor-deceptive-eidolon">Deceptive Eidolon</Pair>
<Pair hl title="Alters">Eidolon</Pair>
<Pair title="Info">A devil impostor's eidolon always resembles a specific type of devil of the same size (caster's choice), and radiates the aura of a lawful evil outsider under magical effects such as <em>detect evil,</em> regardless of its actual alignment. The eidolon still uses its actual alignment when resolving all other alignment-dependent abilities, effects, and spells. The eidolon can have any subtype, though its appearance always remains that of a devil, and it can select only evolutions available to its true subtype.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-devil_impostor-fiendish-summons-sp" icon={["broken-shield"]}>
<Pair single id="arc-unchained_summoner-devil_impostor-fiendish-summons-sp">Fiendish Summons (Sp)</Pair>
<Pair hl title="Alters">Summon monster</Pair>
<Pair title="Passive Ability">A devil impostor must apply the <Link to="/template/fiendish">fiendish</Link> template to any creatures summoned via her <em>summon monster</em> spell-like ability regardless of her alignment.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-devil_impostor-devils-flesh-ex" icon={["stairs-goal"]}>
<Pair single id="arc-unchained_summoner-devil_impostor-devils-flesh-ex" flavor="A devil impostor's eidolon adopts several fiendish traits.">Devil's Flesh (Ex)</Pair>
<Pair hl title="Replaces">Shield ally</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">The devil impostor's eidolon gains the <Link to="/unchevolution/skilled">skilled</Link> (Bluff) and <Link to="/unchevolution/resistance">resistance</Link> (fire) evolutions (or <Link to="/unchevolution/immunity">immunity</Link> [fire] if it already has resistance to fire). The eidolon can select additional evolutions available to the devil subtype.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-devil_impostor-devils-tongue-ex" icon={["upgrade"]}>
<Pair single id="arc-unchained_summoner-devil_impostor-devils-tongue-ex">Devil's Tongue (Ex)</Pair>
<Pair hl title="Replaces">Greater shield ally</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">The devil impostor's eidolon can apply its master's skill ranks and proficiency bonuses when attempting Bluff, Diplomacy, and Intimidate skill checks.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-devil_impostor-fiendish-appearance-su" icon={["magic-swirl"]}>
<Pair single id="arc-unchained_summoner-devil_impostor-fiendish-appearance-su">Fiendish Appearance (Su)</Pair>
<Pair hl title="Replaces">Transposition</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A devil impostor can use her <em>maker's call</em> ability to immediately dismiss her eidolon and take on its appearance. This functions as a modified <Link to="/spell/alter_self">alter self</Link> spell, transforming the devil impostor into a replica of her eidolon. She gains a single natural attack possessed by her eidolon, and if her eidolon is smaller than Small or larger than Medium, she assumes the form of a Small- or Medium-sized version of her eidolon, respectively. The transformation lasts for 10 minutes &times; her unchained summoner level or until the eidolon is resummoned.</Pair>
</Ability>
</>};
const _fey_caller = {title: "Fey Caller", jsx: <><h2 id="arc-unchained_summoner-fey_caller-fey-caller">Fey Caller</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 71</Link><br/>The strange creatures known as fey hail from a variety of places, including the natural world and their own domains on other planes. Fey callers are summoners whose voices reach out into those strange faerie realms and call forth the fey who dwell there. The touch of the fey makes the fey caller different from those summoners who call other outsiders to their sides as eidolons.</p>
<Ability icon={["skills"]} id="arc-unchained_summoner-fey_caller-undefined">
<Pair id="arc-unchained_summoner-fey_caller-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/disguise">Disguise</Link> (CHA), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Knowledge (arcana), Knowledge (dungeoneering), Knowledge (engineering), Knowledge (geography), Knowledge (history), Knowledge (local), Knowledge (nobility), Knowledge (religion)</Pair></Ability>
<Ability id="arc-unchained_summoner-fey_caller-natures-call" icon={["info"]}>
<Pair single id="arc-unchained_summoner-fey_caller-natures-call">Nature's Call</Pair>
<Pair hl title="Alters">Summon monster</Pair>
<Pair title="Info">Instead of summoning creatures from the summon monster list, the fey caller's <em>summoning</em> spell-like ability summons creatures from the list for the <Link to="/spell/summon_natures_ally">summon nature's ally</Link> spell of the same level. It still follows the other rules and restrictions for the summoner's <em>summon monster</em> spell-like ability.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-fey_caller-fey-eidolon" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-unchained_summoner-fey_caller-fey-eidolon">Fey Eidolon</Pair>
<Pair title="Info">A fey caller's eidolon is still an outsider, and its base statistics don't change, but it also counts as a <Link to="/type/fey">fey</Link>. A fey caller's eidolon has the new subtype below.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-fey_caller-fey" extraClasses="subAbility" icon={["info","stairs-goal","magic-swirl","armor-upgrade"]}>
<Pair single id="arc-unchained_summoner-fey_caller-fey">Fey</Pair>
<Pair title="Description"><p>Fey eidolons are whimsical and mysterious creatures, prone to flights of fancy, odd compulsions, and alien humor. While some creatures from the faerie realms have truly unusual shapes, the ones close enough to the human mind to serve as eidolons tend to look like idealized humanoids with unusual features that set them apart, such as pointed ears or gossamer wings.</p>
<p>Fey eidolons usually choose to bond with mortals for their own mysterious reasons that vary as much as their disparate temperaments; occasionally, their need may be immediate, such as when a <Link to="/monster/dryad">dryad</Link> whose tree is dying decides to bond with a summoner instead and become something new. On the other hand, a <Link to="/monster/redcap">redcap</Link> just looking for bloodshed might connect with an equally sadistic summoner. Whatever their reasons, they tend to have strong bonds of loyalty to their summoners entangled with equally strong emotional attachments, even evil fey eidolons.</p>
</Pair>
<Pair title="Alignment">Any. Fey eidolons don't have alignment subtypes.</Pair>
<Pair title="Base Form">Biped (<Link to="/unchevolution/limbs">limbs</Link> [arms], limbs [legs]).</Pair>
<Pair title="Base Evolutions">Starting at 1st level, fey eidolons gain Acrobatics, Diplomacy, Disguise, Escape Artist, Knowledge (nature), Perform, Sleight of Hand, and Use Magic Device as class skills instead of those gained by most eidolons. They also gain the <Link to="/unchevolution/low_light_vision">low-light vision</Link> evolution, the <Link to="/unchevolution/skilled">skilled</Link> evolution (selecting one class skill), and the ability to use either <Link to="/spell/dancing_lights">dancing lights</Link>, <Link to="/spell/detect_magic">detect magic</Link>, <Link to="/spell/ghost_sound">ghost sound</Link>, or <Link to="/spell/prestidigitation">prestidigitation</Link> at will as a spell-like ability. Once the summoner selects this and any other spell-like abilities for his fey eidolon, the selection cannot be changed.</Pair>
<Pair title="At 4th Level">Fey eidolons gain <Link to="/ability/woodland_stride">woodland stride</Link> (as the druid ability).</Pair>
<Pair title="At 8th Level">Fey eidolons gain the ability to use either <Link to="/spell/charm_person">charm person</Link>, <Link to="/spell/entangle">entangle</Link>, <Link to="/spell/grease">grease</Link>, <Link to="/spell/silent_image">silent image</Link>, <Link to="/spell/obscuring_mist">obscuring mist</Link>, or <Link to="/spell/vanish">vanish</Link> as a spell-like ability three times per day, and they can select an additional spell-like ability from the 1st-level list.</Pair>
<Pair title="At 12th Level">Fey eidolons gain DR 5/cold iron. They also grow gossamer wings, gaining the <Link to="/unevolution/flight">flight</Link> evolution.</Pair>
<Pair title="At 16th Level">Fey eidolons gain the ability to use either <Link to="/spell/blindness_deafness">blindness/deafness</Link>, <Link to="/spell/detect_thoughts">detect thoughts</Link>, <Link to="/spell/glitterdust">glitterdust</Link>, <Link to="/spell/hideous_laughter">hideous laughter</Link>, <Link to="/spell/invisibility">invisibility</Link> (self only), <Link to="/spell/minor_image">minor image</Link>, <Link to="/spell/mirror_image">mirror image</Link>, or <Link to="/spell/tongues">tongues</Link> as a spell-like ability three times per day. They also can select an additional spell-like ability from the 1st-level list or the 8th-level list.</Pair>
<Pair title="At 20th Level">Fey eidolons increase their DR to DR 10/cold iron. They gain the ability to use either <Link to="/spell/mass_suggestion">mass suggestion</Link>, <Link to="/spell/mislead">mislead</Link>, <Link to="/spell/programmed_image">programmed image</Link>, or <Link to="/spell/veil">veil</Link> as a spell-like ability once per day. They also can select an additional spell-like ability from the 1st-level list, the 8th-level list, or the 16th-level list.</Pair>
</Ability>
</>};
const _god_caller = {title: "God Caller", jsx: <><h2 id="arc-unchained_summoner-god_caller-god-caller">God Caller</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 40</Link><br/>God callers follow a fractured tradition that originated in the now-lost nation of Sarkoris. They speak to an assortment of ancient divine powers to lead their communities and sometimes stir up reformations in faiths with ideals similar to their personal convictions.</p>
<Ability icon={["skills"]} id="arc-unchained_summoner-god_caller-undefined">
<Pair id="arc-unchained_summoner-god_caller-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/intimidate">Intimidate</Link> (CHA)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering), Knowledge (engineering), Knowledge (geography), Knowledge (nature), Use Magic Device</Pair></Ability>
<Ability id="arc-unchained_summoner-god_caller-guidance-sp" icon={["magic-swirl","broken-shield"]}>
<Pair single id="arc-unchained_summoner-god_caller-guidance-sp" flavor="A god caller's eidolon has a tiny spark of divinity.">Guidance (Sp)</Pair>
<Pair hl title="Alters">Life link</Pair>
<Pair title="Ability">The eidolon can use <Link to="/spell/guidance">guidance</Link> as a spell-like ability at will. However, the eidolon and the god caller must remain within 50 feet of one another for the eidolon to remain at full strength. If the eidolon is beyond 50 feet but closer than 1,000 feet, its current and maximum hit point totals are reduced by half.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-god_caller-divine-word-ex" icon={["rolling-dices","upgrade"]}>
<Pair single id="arc-unchained_summoner-god_caller-divine-word-ex">Divine Word (Ex)</Pair>
<Pair hl title="Replaces">Transposition</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">If a god caller's eidolon would grant him a bonus with the <Link to="/rule/aid_another">aid another</Link> action on a Diplomacy or Intimidate check, the god caller can instead choose to roll twice and take the better result. He makes the choice before rolling.</Pair>
<Pair title="Ability">Once per day while his eidolon uses the aid another action to assist him in such a check, if the god caller would improve a target's attitude toward him, or gain a success if using the individual <Link to="/rule/influence">influence rules</Link>, he instead improves that target's attitude by 2 steps or it counts as 2 successes.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-god_caller-divine-awareness-sp" icon={["magic-swirl"]}>
<Pair single id="arc-unchained_summoner-god_caller-divine-awareness-sp">Divine Awareness (Sp)</Pair>
<Pair hl title="Replaces">Aspect</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four summoner levels beyond 10th<ByLevelPop levels={[[10,1],[14,2],[18,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">After 10 minutes of concentration, a god caller's eidolon can see from afar as per <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link>.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-god_caller-divine-might-ex" icon={["upgrade"]}>
<Pair single id="arc-unchained_summoner-god_caller-divine-might-ex">Divine Might (Ex)</Pair>
<Pair hl title="Replaces">Greater aspect</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Passive Ability">A god caller's eidolon's attacks are treated as epic for the purpose of overcoming damage reduction and harming mythic creatures.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-god_caller-overwhelming-presence-sp" icon={["magic-swirl"]}>
<Pair single id="arc-unchained_summoner-god_caller-overwhelming-presence-sp">Overwhelming Presence (Sp)</Pair>
<Pair hl title="Replaces">Twin eidolon</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A god caller's eidolon can use <Link to="/spell/overwhelming_presence">overwhelming presence</Link> three times per day. The save DC is equal to 19 + the eidolon's Charisma modifier.</Pair>
</Ability>
</>};
const _leshy_caller = {title: "Leshy Caller", jsx: <><h2 id="arc-unchained_summoner-leshy_caller-leshy-caller">Leshy Caller</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 94</Link><br/>A leshy caller summons creatures from the First World and forges a bond with a leshy eidolon.</p>
<Ability id="arc-unchained_summoner-leshy_caller-leshy-eidolon" icon={["info"]}>
<Pair single id="arc-unchained_summoner-leshy_caller-leshy-eidolon">Leshy Eidolon</Pair>
<Pair title="Info">When a leshy caller summons her eidolon, the eidolon's body is created from extraplanar plant material and imbued with the intelligence of a leshy spirit. It uses the <Link to="/eidolon/plant">plant</Link> eidolon subtype and its statistics are changed from those of a standard eidolon as follows.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-leshy_caller-type" icon={["info"]}>
<Pair single id="arc-unchained_summoner-leshy_caller-type">Type</Pair>
<Pair title="Info">The eidolon is still an outsider, and its statistics don't change, but it also counts as a plant. As it isn't truly a plant, it doesn't gain the plant immunities.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-leshy_caller-base-form" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-unchained_summoner-leshy_caller-base-form">Base Form</Pair>
<Pair hl title="Alters">Eidolon</Pair>
<Pair title="Info"><p>The leshy caller chooses one of the base forms listed below for her eidolon. When the eidolon is summoned in an environment matching one of these base forms, the leshy caller can change the eidolon's base form to the matching form by sacrificing one daily use of her <em>summon nature's ally</em> ability as a <strong className="hl">free action</strong>.</p>
<p>Plant eidolon base forms are as follows.</p>
<Block titled><Row><Cell>Cactus (Desert)</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Saves</Cell><Cell>Fort (good), Ref (good), Will (bad)</Cell></Row>
<Row><Cell>Attack</Cell><Cell>sting (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 14, Con 13, Int 7, Wis 10, Cha 11</Cell></Row>
<Row><Cell>Free Evolutions</Cell><Cell><Link to="/evolution/limbs">limbs</Link> (arms), limbs (legs), <Link to="/evolution/sting">sting</Link></Cell></Row></Block>
<Block titled><Row><Cell>Conifer (Forest, Mountain)</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Saves</Cell><Cell>Fort (good), Ref (bad), Will (good)</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 12, Con 15, Int 7, Wis 10, Cha 11</Cell></Row>
<Row><Cell>Free Evolutions</Cell><Cell><Link to="/evolution/claws">claws</Link>, <Link to="/evolution/limbs">limbs</Link> (arms), limbs (legs)</Cell></Row></Block>
<Block titled><Row><Cell>Fungus (Swamp, Underground)</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Saves</Cell><Cell>Fort (good), Ref (good), Will (bad)</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 14, Con 13, Int 7, Wis 10, Cha 11</Cell></Row>
<Row><Cell>Free Evolutions</Cell><Cell><Link to="/evolution/bite">bite</Link>, <Link to="/evolution/limbs">limbs</Link> (arms), limbs (legs)</Cell></Row></Block>
<Block titled><Row><Cell>Leaf (Forest, Jungle, Swamp)</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Saves</Cell><Cell>Fort (good), Ref (good), Will (bad)</Cell></Row>
<Row><Cell>Attack</Cell><Cell>slam (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 16, Dex 12, Con 13, Int 7, Wis 10, Cha 11</Cell></Row>
<Row><Cell>Free Evolutions</Cell><Cell><Link to="/evolution/limbs">limbs</Link> (arms), limbs (legs), <Link to="/evolution/slam">slam</Link></Cell></Row></Block>
<Block titled><Row><Cell>Seaweed (Aquatic)</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., swim 40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Saves</Cell><Cell>Fort (good), Ref (good), Will (bad)</Cell></Row>
<Row><Cell>Attack</Cell><Cell>slam (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 14, Con 15, Int 7, Wis 10, Cha 11</Cell></Row>
<Row><Cell>Free Evolutions</Cell><Cell><Link to="/evolution/limbs">limbs</Link> (arms), <Link to="/evolution/slam">slam</Link>, <Link to="/evolution/swim">swim</Link> (2)</Cell></Row></Block>
</Pair>
</Ability>
<Ability id="arc-unchained_summoner-leshy_caller-summon-natures-ally-sp" icon={["magic-swirl"]}>
<Pair single id="arc-unchained_summoner-leshy_caller-summon-natures-ally-sp">Summon Nature's Ally (Sp)</Pair>
<Pair hl title="Alters">Summon monster</Pair>
<Pair title="Ability">A leshy caller can cast <Link to="/spell/summon_natures_ally">summon nature's ally</Link> as a spell-like ability a number of times per day equal to 3 + her Charisma modifier.</Pair>
<Pair title="Info">At levels where a regular summoner would gain access to a new level of <em>summon monster</em> as a spell-like ability, the leshy caller instead gains the equivalent <em>summon nature's ally</em> spell; at 19th level, she can cast <Link to="/spell/summon_natures_ally_ix">summon nature's ally IX</Link> or <Link to="/spell/gate">gate</Link>.</Pair>
<Pair title="Passive Ability">When a leshy caller gains a <em>summon nature's ally</em> spell as a spell-like ability, she adds it to her class spell list (though she must still select it as a spell known if she wants to gain the ability to cast it as a normal spell). She adds <Link to="/monster/leaf_leshy">leaf leshys</Link>, <Link to="/monster/gourd_leshy">gourd leshys</Link>, <Link to="/monster/fungus_leshy">fungus leshys</Link>, <Link to="/monster/seaweed_leshy">seaweed leshys</Link>, and <Link to="/monster/lotus_leshy">lotus leshys</Link> to her list of creatures for <em>summon nature's ally I, II, III, IV,</em> and <em>V,</em> respectively.</Pair>
</Ability>
</>};
const _morphic_savant = {title: "Morphic Savant", jsx: <><h2 id="arc-unchained_summoner-morphic_savant-morphic-savant">Morphic Savant</h2>
<p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook pg. 16</Link><br/>A morphic savant is an agent of change who draws power from the Abyss, Elysium, or the Maelstrom to fulfill whatever goals strike his fancy. Chaotic evil and chaotic neutral morphic savants often train with <Link to="/pclass/blackfire_adept">Blackfire Adepts</Link> in the hopes of learning greater powers of chaotic unmaking, and chaotic good morphic savants are most common as agents of the <Link to="/rule/bellflower_network">Bellflower Network</Link>.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-unchained_summoner-morphic_savant--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Chaotic alignment</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-unchained_summoner-morphic_savant-eidolon-of-chaos" icon={["info","stairs-goal"]}>
<Pair single id="arc-unchained_summoner-morphic_savant-eidolon-of-chaos">Eidolon of Chaos</Pair>
<Pair hl title="Alters">Eidolon</Pair>
<Pair title="Ability">A morphic savant's eidolon must have the <Link to="/eidolon/azata">azata</Link>, <Link to="/eidolon/demon">demon</Link>, or <Link to="/eidolon/protean">protean</Link> subtype. The morphic savant's eidolon has three base forms: biped, quadruped, and serpentine. Each form has the same feats and skills, but has its own set of <Link to="/ability/unchained_evolutions">evolutions</Link>. When the summoner meditates and regains his spell slots for the day, he can select any of the three base forms of his eidolon. The eidolon has 1 fewer evolution point than normal for an eidolon of the morphic savant's summoner level, and has 1 fewer skill point per Hit Die.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-morphic_savant-morphic-monsters" icon={["info","magic-swirl","broken-shield","upgrade"]}>
<Pair single id="arc-unchained_summoner-morphic_savant-morphic-monsters">Morphic Monsters</Pair>
<Pair hl title="Alters">Summon monster</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Info"><p>Since a morphic savant's power is drawn from planar energies aligned with chaos, all the creatures he summons must be of a chaotic alignment. If a creature would normally be celestial or fiendish, it is instead an <Link to="/template/entropic">entropic creature</Link>.</p>
<p>This also causes the morphic savant's summoning power to be less reliable than a standard summoner's. Each time he uses his <em>summon monster</em> spell-like ability to summon multiple creatures, there is a 50% chance he summons one more monster than normal for the <em>summon monster</em> spell he uses, in which case the creatures remain for only 1 round per level (instead of 1 minute per level).</p>
</Pair>
<Pair title="At 2nd Level">The morphic savant can grant one 1-point evolutions to all the creatures he summons with his <em>summon monster</em> spell-like ability. He can't grant an evolution that duplicates the function of, or has the same name as, any ability the summoned creatures already possess (for example, he can't grant a creature with a bite attack another bite attack), nor can he add an evolution that causes the summoned monsters to have more attacks than his eidolon's maximum number of attacks. The creatures do not have to be of the correct subtype to gain an evolution, but do have to meet any other prerequisites.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-morphic_savant-chaos-magic" icon={["spell-book"]}>
<Pair single id="arc-unchained_summoner-morphic_savant-chaos-magic">Chaos Magic</Pair>
<Pair hl title="Alters">Spells known</Pair>
<Pair title="Info">A morphic savant gains the following bonus spells known at the listed spell level. The morphic savant gains one fewer spell known per spell level for spell levels 1-6.</Pair>
<Pair plain title="1st"><Link to="/spell/protection_from_law">Protection from law</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/shard_of_chaos">Shard of chaos</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/magic_circle_against_law">Magic circle against law</Link></Pair>
<Pair plain title="4th"><Link to="/spell/chaos_hammer">Chaos hammer</Link></Pair>
<Pair plain title="5th"><Link to="/spell/dispel_law">Dispel law</Link></Pair>
<Pair plain title="6th"><Link to="/spell/word_of_chaos">Word of chaos</Link></Pair>
</Ability>
</>};
const _soulbound_summoner = {title: "Soulbound Summoner", jsx: <><h2 id="arc-unchained_summoner-soulbound_summoner-soulbound-summoner">Soulbound Summoner</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_144_midwives_to_death">Pathfinder #144: Midwives to Death pg. 83</Link><br/>Not everyone who becomes a summoner is an intentional dabbler in the arcane arts. Soulbound summoners, as a rule, never set out to bind their soul to a dangerous and enigmatic power. Rather, they have found themselves unintentional masters of eidolons through incredible circumstances. Most common are those who forged their pacts with an outsider out of a mutual desire for self-preservation. Other soulbound summoners never contacted a true outsider at all, instead manifesting an eidolon from their minds in response to mental or magical trauma. The events that create such a summoner result in the eidolon fusing entirely to the summoner's psyche. These accidental summoners lack the practiced skill at reaching across planes that most summoners have, but their intense bond with their eidolon grants both summoner and outsider unusual power.</p>
<Ability id="arc-unchained_summoner-soulbound_summoner-pactbond-curse-ex" icon={["info","broken-shield","stairs-goal"]}>
<Pair single id="arc-unchained_summoner-soulbound_summoner-pactbond-curse-ex" flavor="A soulbound summoner's metaphysical connection with his eidolon has profound effects on both of them.">Pactbond Curse (Ex)</Pair>
<Pair hl title="Alters">Eidolon</Pair>
<Pair title="Info">The eidolon's alignment always matches that of the soulbound summoner, regardless of its subtype.</Pair>
<Pair title="At 1st Level">The summoner must choose an <Link to="/ability/oracle_curses">oracle curse</Link>, using his summoner level as his oracle level for determining the curse's effects. Once this choice is made, it cannot be changed. A summoner that gains spells for his list of spells known as a result of his curse must be able to cast spells of the appropriate level in order to cast the learned spell.</Pair>
<Pair title="Special">The glowing rune that the soulbound summoner shares with his eidolon always appears on a place symbolic of his pactbond curse. For example, a summoner who chooses the <Link to="/oraclecurse/clouded_vision">clouded vision</Link> curse might have his summoner's rune manifest on one of his eyes, while a summoner who chooses the <Link to="/oraclecurse/tongues">tongues</Link> curse might have his summoner's rune appear on his lips. A soulbound summoner's eidolon is summoned from his own psyche rather than a different plane, so spells such as <Link to="/spell/banishment">banishment</Link> and <Link to="/spell/dismissal">dismissal</Link> do not work when cast on the eidolon.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-soulbound_summoner-soulbound-life-link-su" icon={["remedy"]}>
<Pair single id="arc-unchained_summoner-soulbound_summoner-soulbound-life-link-su" flavor="The essence of a soulbound summoner's eidolon resides within the summoner's mind and soul instead of a home plane, and he can use this connection to restore his eidolon with his own vitality.">Soulbound Life Link (Su)</Pair>
<Pair hl title="Alters">Life link</Pair>
<Pair title="Ability">The summoner can use his <em>life link</em> ability to sacrifice any number of his hit points without using an action. Each hit point sacrificed in this way heals the eidolon for 1 point of damage.</Pair>
<Pair title="Special">The soulbound summoner can use this ability even after the eidolon has been killed and sent back to its summoner's mind; if the eidolon is healed enough that its hit point total is above 0, it can be summoned again as normal.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-soulbound_summoner-weakened-summoning" icon={["broken-shield"]}>
<Pair single id="arc-unchained_summoner-soulbound_summoner-weakened-summoning" flavor="A soulbound summoner's eidolon is usually the result of unintended magic, trauma, or a singular pact, instead of rigorous arcane study.">Weakened Summoning</Pair>
<Pair title="Info">Soulbound summoners do not gain the ability to cast the <Link to="/spell/summon_monster">summon monster</Link> or <Link to="/spell/gate">gate</Link> spells as a spell-like ability.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-soulbound_summoner-soulbound-evolution" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-unchained_summoner-soulbound_summoner-soulbound-evolution" flavor="A soulbound summoner's eidolon gains power from its unusually strong bond with its summoner.">Soulbound Evolution</Pair>
<Pair title="At 5th Level">The eidolon adds 1 point to its evolution pool.</Pair>
<Pair title="At 7th Level">The eidolon adds 1 point to its evolution pool. The eidolon can select evolutions even if it does not meet the subtype requirements for that evolution.</Pair>
<Pair title="At 9th Level">The eidolon adds 1 point to its evolution pool.</Pair>
<Pair title="At 13th Level">The eidolon can draw from its summoner's power to cast spells. The spell must be a spell that the summoner knows, and the summoner must expend two spell slots of the same spell level or higher to allow the eidolon to cast the spell. Expending spell slots in this way does not take an action. The eidolon uses the summoner's caster level, feats, and casting statistics for all spellcasting purposes. The eidolon must be able to meet all other requirements for casting the spell, such as being able to speak for spells requiring verbal components and providing any material components or focuses for spells that require them. The eidolon must be able to move its body to cast spells with somatic components, but it does not need to have the <Link to="/unchevolution/limbs">limbs</Link> (arms) evolution.</Pair>
<Pair title="At 15th Level">The eidolon adds 2 points to its evolution pool.</Pair>
<Pair title="At 17th Level">The eidolon adds 2 points to its evolution pool.</Pair>
<Pair title="At 19th Level">The eidolon adds 2 points to its evolution pool.</Pair>
</Ability>
</>};
const _storm_caller = {title: "Storm Caller", jsx: <><h2 id="arc-unchained_summoner-storm_caller-storm-caller">Storm Caller</h2>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 16</Link><br/>Many summoners beckon monsters from the Elemental Planes, but few are as specialized as storm callers, who channel the elemental energies of the Plane of Air. Storm callers are most commonly encountered in areas where thunderstorms appear frequently, including supernaturally stormy places like the Sodden Lands.</p>
<Ability id="arc-unchained_summoner-storm_caller-stormy-eidolon" icon={["hazard-sign"]}>
<Pair single id="arc-unchained_summoner-storm_caller-stormy-eidolon">Stormy Eidolon</Pair>
<Pair hl title="Alters">Eidolon</Pair>
<Pair title="Info">A storm caller must select an eidolon subtype that gains <Link to="/unchevolution/resistance">resistance</Link> or <Link to="/unchevolution/immunity">immunity</Link> to electricity at 1st level, such as the <Link to="/eidolon/elemental">elemental</Link> eidolon or <Link to="/eidolon/genie">genie</Link> eidolon. If the eidolon has neither of these evolutions, it becomes <Link to="/misc/nauseated">nauseated</Link> until it regains one of them.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-storm_caller-summon-storms-fury-sp" icon={["broken-shield","magic-swirl","spell-book"]}>
<Pair single id="arc-unchained_summoner-storm_caller-summon-storms-fury-sp">Summon Storm's Fury (Sp)</Pair>
<Pair hl title="Alters">Summon monster I-IX</Pair>
<Pair title="Ability"><p>A storm caller can summon creatures infused with the power of the storm to help him. This functions as the summoner's <em>summon monster I-IX</em> abilities, except the storm caller can summon only the following creatures at the indicated spell levels:</p>
<Block size="tiny">
<Row><Cell>I</Cell><Cell><Link to="/monster/eagle">eagle</Link></Cell></Row>
<Row><Cell>II</Cell><Cell><Link to="/monster/small_air_elemental">small air elemental</Link>, <Link to="/monster/small_lightning_elemental">small lightning elemental</Link></Cell></Row>
<Row><Cell>III</Cell><Cell><Link to="/monster/dire_bat">dire bat</Link></Cell></Row>
<Row><Cell>IV</Cell><Cell><Link to="/monster/medium_air_elemental">medium air elemental</Link>, <Link to="/monster/medium_lightning_elemental">medium lightning elemental</Link>, <Link to="/monster/pteranodon">pteranodon</Link></Cell></Row>
<Row><Cell>V</Cell><Cell><Link to="/monster/large_air_elemental">large air elemental</Link>, <Link to="/monster/large_lightning_elemental">large lightning elemental</Link></Cell></Row>
<Row><Cell>VI</Cell><Cell><Link to="/monster/huge_air_elemental">huge air elemental</Link>, <Link to="/monster/huge_lightning_elemental">huge lightning elemental</Link></Cell></Row>
<Row><Cell>VII</Cell><Cell><Link to="/monster/roc">roc</Link></Cell></Row>
<Row><Cell>VIII</Cell><Cell><Link to="/monster/elder_air_elemental">elder air elemental</Link>, <Link to="/monster/elder_lightning_elemental">elder lightning elemental</Link></Cell></Row>
<Row><Cell>IX</Cell><Cell><Link to="/template/advanced">advanced</Link> elder air elemental, advanced elder lightning elemental</Cell></Row></Block>
<p>Any creatures summoned with this ability gain immunity to electricity.</p>
<p>Alternatively, whenever his eidolon is not summoned, a storm caller can expend a daily use of this ability to summon a magical storm as a <strong className="hl">standard action</strong>. This functions as <Link to="/spell/call_lightning">call lightning</Link> with a caster level equal to his summoner level, except as noted below.</p>
<p>Each bolt of lightning deals 1d6 points of electricity damage. As the summoner gains levels, this damage increases as indicated on the table below. The prevailing weather has no effect on the damage of the lightning bolts. The Reflex save DC is equal to 10 + half the storm caller's summoner level + his Charisma modifier. If the storm caller uses this ability again before he has used all of his available bolts of lightning (to summon another magical storm, to summon a monster, or to use the <Link to="/spell/gate">gate</Link> spell), any unused bolts are expended with no effect.</p>
<ScrollContainer id="arc-unchained_summoner-storm_caller--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Damage</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>1d6</td>
</tr>
<tr>
<td>3</td>
<td>2d6</td>
</tr>
<tr>
<td>5</td>
<td>3d6</td>
</tr>
<tr>
<td>7</td>
<td>4d6</td>
</tr>
<tr>
<td>8</td>
<td>5d6</td>
</tr>
<tr>
<td>11</td>
<td>6d6</td>
</tr>
<tr>
<td>13</td>
<td>7d6</td>
</tr>
<tr>
<td>15</td>
<td>8d6</td>
</tr>
<tr>
<td>17</td>
<td>9d6</td>
</tr>
<tr>
<td>19</td>
<td>10d6</td>
</tr>
</tbody></table></ScrollContainer>
<p>The storm caller adds <em>call lightning</em> to his summoner spell list as a 3rd-level spell and <Link to="/spell/call_lightning_storm">call lightning storm</Link> to his summoner spell list as a 5th-level spell, but he does not automatically add them to his list of spells known.</p>
</Pair>
</Ability>
<Ability id="arc-unchained_summoner-storm_caller-electrical-polarity-su" icon={["barbed-arrow"]}>
<Pair single id="arc-unchained_summoner-storm_caller-electrical-polarity-su">Electrical Polarity (Su)</Pair>
<Pair hl title="Replaces">Shield ally, greater shield ally</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A storm caller and his eidolon can temporarily form an electrical current between them. The storm caller can expend a use of his <em>summon storm's fury</em> ability as a <strong className="hl">standard action</strong> to create an instantaneous line of lightning between him and his eidolon, provided that the eidolon is within 60 feet of him. The lightning arc deals the same amount of damage to all creatures in the line and has the same save DC as a bolt of lightning from the <em>summon storm's fury</em> ability (unlike <em>call lightning,</em> this damage is dealt only once). The storm caller and his eidolon are not affected by this lightning.</Pair>
<Pair title="At 12th Level">The storm caller gains the benefit of his eidolon's resistance (electricity) or immunity (electricity) evolution whenever he is within 30 feet of the eidolon.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-storm_caller-storms-wings-su" icon={["stairs-goal"]}>
<Pair single id="arc-unchained_summoner-storm_caller-storms-wings-su">Storm's Wings (Su)</Pair>
<Pair hl title="Replaces">Maker's call, transposition</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A storm caller can borrow some of his eidolon's elemental might. He can gain the <Link to="/unchevolution/flight">flight</Link> evolution as though he were using the summoner's <em>aspect</em> ability, deducting 2 evolution points from the eidolon's evolution pool. If he does so, his eidolon is unable to take the flight evolution as long as the storm caller has that evolution.</Pair>
<Pair title="At 8th Level">The storm caller's eidolon can have the flight evolution even if the storm caller has that evolution.</Pair>
<Pair title="At 10th Level">The storm caller automatically gains the flight evolution without reducing the number of evolution points available to the eidolon. He can use the <em>aspect</em> ability (and at 18th level, the <em>greater aspect</em> ability) to gain additional evolutions.</Pair>
</Ability>
</>};
const _twinned_summoner = {title: "Twinned Summoner", jsx: <><h2 id="arc-unchained_summoner-twinned_summoner-twinned-summoner">Twinned Summoner</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 18</Link><br/>Reflecting the connected nature of Imbrex, a twinned summoner and his eidolon appear identical save for any obvious differences, such as evolutions or equipment.</p>
<Ability id="arc-unchained_summoner-twinned_summoner-twinned-eidolon" icon={["broken-shield"]}>
<Pair single id="arc-unchained_summoner-twinned_summoner-twinned-eidolon">Twinned Eidolon</Pair>
<Pair title="Info">The twinned summoner's eidolon is restricted to the <Link to="/eidolon/twinned">twinned</Link> eidolon subtype. If the summoner's natural size is smaller than Medium, the twinned summoner's eidolon must be Small. This ability may require a different base form or subtype to match the twinned summoner's natural form, at the GM's discretion, if the twinned summoner is not a bipedal creature.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-twinned_summoner-teamwork-feats-ex" icon={["stairs-goal"]}>
<Pair single id="arc-unchained_summoner-twinned_summoner-teamwork-feats-ex">Teamwork Feats (Ex)</Pair>
<Pair hl title="Replaces">Shield ally, greater shield ally</Pair>
<Pair title="At 4th Level">A twinned summoner gains a bonus <Link to="/main/teamwork_feat">teamwork feat</Link>. He must meet the prerequisites of the selected teamwork feat.</Pair>
<Pair title="At 12th Level">The summoner gains another bonus teamwork feat he meets the prerequisites of.</Pair>
<Pair title="Special">The twinned summoner automatically grants all of his teamwork feats to his eidolon. The eidolon doesn't need to meet the prerequisites of these teamwork feats.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-twinned_summoner-twinned-transposition-su" icon={["magic-swirl"]}>
<Pair single id="arc-unchained_summoner-twinned_summoner-twinned-transposition-su">Twinned Transposition (Su)</Pair>
<Pair hl title="Replaces">Maker's call, transposition</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four summoner levels beyond 6th<ByLevelPop levels={[[6,1],[10,2],[14,3],[18,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">A twinned summoner can swap locations with his eidolon as if each were using <Link to="/spell/dimension_door">dimension door</Link>, using the twinned summoner's caster level. If the eidolon is out of range, the ability is wasted. If either the twinned summoner or his eidolon occupies more squares than the other, each must occupy one or more squares that were occupied by the other if possible, or as close as possible if not.</Pair>
<Pair title="At 8th Level">He can use this ability as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-unchained_summoner-twinned_summoner-twin-summoner-su" icon={["magic-swirl"]}>
<Pair single id="arc-unchained_summoner-twinned_summoner-twin-summoner-su">Twin Summoner (Su)</Pair>
<Pair hl title="Replaces">Merge forms</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Usage">1 minute/day per summoner level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action">A twinned summoner can touch his eidolon, enhancing its similarity to the summoner. The eidolon loses any natural weapons or size increases gained from evolutions, and its Intelligence, Wisdom, and Charisma scores change to match the base scores of the summoner. The eidolon can cast any of the summoner's spells known using the summoner's caster level and spell slots. It doesn't gain the benefit of any of the summoner's items, feats, or other effects that affect spellcasting.</Pair>
<Pair title="Special">The summoner can end this effect as a <strong className="hl">free action</strong>.</Pair>
</Ability>
</>};
export default {construct_caller:_construct_caller,devil_binder:_devil_binder,devil_impostor:_devil_impostor,fey_caller:_fey_caller,god_caller:_god_caller,leshy_caller:_leshy_caller,morphic_savant:_morphic_savant,soulbound_summoner:_soulbound_summoner,storm_caller:_storm_caller,twinned_summoner:_twinned_summoner}