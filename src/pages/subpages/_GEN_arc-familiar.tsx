import {IonIcon} from '@ionic/react';
import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import InnerLink from '../../components/InnerLink';
const _ambassador = {title: "Ambassador", jsx: <><h2 id="arc-familiar-ambassador-ambassador">Ambassador</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 210</Link><br/>An ambassador speaks on its master's behalf and sometimes on behalf of its master's patron or other extraplanar contacts.</p>
<p><strong className="hl">Special Requirement:</strong> An ambassador familiar must be able to speak at least one language, either as a special familiar ability (as in the case of a <Link to="/monster/raven">raven</Link> or <Link to="/monster/thrush">thrush</Link>) or by being an <Link to="/feat/improved_familiar">Improved Familiar</Link>. A familiar that can't speak (or can speak only to its master or other animals) can't be an ambassador.</p>
<Ability icon={["skills"]} id="arc-familiar-ambassador-undefined">
<Pair id="arc-familiar-ambassador-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/intimidate">Intimidate</Link> (CHA)</Pair></Ability>
<Ability id="arc-familiar-ambassador-persuasive-ex" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-ambassador-persuasive-ex">Persuasive (Ex)</Pair>
<Pair hl title="Replaces">Alertness</Pair>
<Pair title="Passive Ability">An ambassador gains <Link to="/feat/persuasive">Persuasive</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-familiar-ambassador-enhanced-personality-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-familiar-ambassador-enhanced-personality-ex">Enhanced Personality (Ex)</Pair>
<Pair hl title="Replaces">The familiar's Intelligence score advancement</Pair>
<Pair title="Passive Ability">An ambassador gains a Charisma score equal to the typical Intelligence score of a familiar of its level, if that would be higher than its normal Charisma score. The familiar's Intelligence score remains 6 (or its normal starting Intelligence for an improved familiar) and doesn't increase by level.</Pair>
</Ability>
</>};
const _animal_exemplar = {title: "Animal Exemplar", jsx: <><h2 id="arc-familiar-animal_exemplar-animal-exemplar">Animal Exemplar</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 210</Link><br/>An animal exemplar is a paragon of its species, able to command the loyalty of others of its kind.</p>
<p><strong className="hl">Special Requirement:</strong> An animal exemplar familiar cannot be an improved familiar, plant, vermin, or other non-animal themed familiar.</p>
<Ability icon={["skills"]} id="arc-familiar-animal_exemplar-undefined">
<Pair id="arc-familiar-animal_exemplar-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/handle_animal">Handle Animal</Link> (CHA)</Pair></Ability>
<Ability id="arc-familiar-animal_exemplar-influence-animals-ex-sp" icon={["upgrade","stairs-goal","magic-swirl"]}>
<Pair single id="arc-familiar-animal_exemplar-influence-animals-ex-sp">Influence Animals (Ex, Sp)</Pair>
<Pair hl title="Replaces">Deliver touch spells, spell resistance, scry on familiar</Pair>
<Pair hl title="Alters">Speak with animals of its kind</Pair>
<Pair title="At 3rd Level">An animal exemplar gains speak with animals with respect to others of its kind at 3rd level instead of 7th level.</Pair>
<Pair title="At 7th Level">It gains the ability to influence animals of its kind, as per the <Link to="/ability/wild_empathy">wild empathy</Link> ability of a <Link to="/class/druid">druid</Link> of its master's level with a +4 racial bonus on the check, but only for animals of its kind.</Pair>
<Pair title="At 11th Level">It can cast <Link to="/spell/charm_animal">charm animal</Link> three times per day as a spell-like ability against animals of its kind</Pair>
<Pair title="At 13th Level">It can cast <Link to="/spell/dominate_animal">dominate animal</Link> once per day as a spell-like ability against animals of its kind.</Pair>
</Ability>
</>};
const _arcane_amplifier = {title: "Arcane Amplifier", jsx: <><h2 id="arc-familiar-arcane_amplifier-arcane-amplifier">Arcane Amplifier</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 20</Link><br/>The secret of the arcane amplifier familiar was first discovered in Irrisen, where the winter witches used white-furred foxes or hares to strengthen their spells. More recently, the practice has spread to Nex and Cheliax, and to haunted Ustalav where necromancers use black-eyed ravens for their spells.</p>
<Ability id="arc-familiar-arcane_amplifier-echo-su" icon={["magic-swirl"]}>
<Pair single id="arc-familiar-arcane_amplifier-echo-su">Echo (Su)</Pair>
<Pair hl title="Replaces">Alertness, improved evasion</Pair>
<Pair title="At 1st Level">Once per day when delivering a touch spell, an arcane amplifier can apply the <Link to="/feat/extend_spell">Extend Spell</Link> metamagic feat to the spell.</Pair>
<Pair title="At 8th Level">It can use this ability twice per day.</Pair>
<Pair title="At 13th Level">It can use this ability three times per day.</Pair>
</Ability>
<Ability id="arc-familiar-arcane_amplifier-reverberate-su" icon={["magic-swirl"]}>
<Pair single id="arc-familiar-arcane_amplifier-reverberate-su">Reverberate (Su)</Pair>
<Pair hl title="Replaces">Speak with animals of its kind, spell resistance</Pair>
<Pair title="At 7th Level">Once per day when delivering a touch spell, an arcane amplifier can apply either the <Link to="/feat/empower_spell">Empower Spell</Link> metamagic feat to the spell or use the <Link to="/feat/heighten_spell">Heighten Spell</Link> metamagic feat to increase its spell level by 2.</Pair>
<Pair title="At 11th Level">It can use this ability twice per day.</Pair>
</Ability>
<Ability id="arc-familiar-arcane_amplifier-resonate-su" icon={["magic-swirl"]}>
<Pair single id="arc-familiar-arcane_amplifier-resonate-su">Resonate (Su)</Pair>
<Pair hl title="Replaces">Scry on familiar</Pair>
<Pair title="At 13th Level">Once per day when delivering a touch spell, an arcane amplifier can apply the <Link to="/feat/maximize_spell">Maximize Spell</Link> metamagic feat to the spell.</Pair>
</Ability>
<p><strong className="hl">NOTE:</strong> An arcane amplifier can apply only <strong>one</strong> metamagic effect to a single casting of a spell using its echo, reverberate, or resonate abilities.</p>
</>};
const _decoy = {title: "Decoy", jsx: <><h2 id="arc-familiar-decoy-decoy">Decoy</h2>
<p><strong>Sources</strong> <Link to="/source/familiar_folio">Familiar Folio pg. 10</Link><br/>A decoy misdirects its master's enemies, allowing the master to strike by surprise.</p>
<Ability icon={["skills"]} id="arc-familiar-decoy-undefined">
<Pair id="arc-familiar-decoy-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA)</Pair></Ability>
<Ability id="arc-familiar-decoy-deceitful" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-decoy-deceitful">Deceitful</Pair>
<Pair hl title="Replaces">Alertness</Pair>
<Pair title="Passive Ability">A decoy gains <Link to="/feat/deceitful">Deceitful</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-familiar-decoy-mockingbird-ex" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-decoy-mockingbird-ex">Mockingbird (Ex)</Pair>
<Pair hl title="Replaces">Speak with master, speak with animals of its kind</Pair>
<Pair title="At 5th Level">A decoy can speak any of its master's languages.</Pair>
<Pair title="At 7th Level">It can mimic its master's voice and intonation perfectly.</Pair>
</Ability>
<Ability id="arc-familiar-decoy-masters-guise-sp" icon={["magic-swirl"]}>
<Pair single id="arc-familiar-decoy-masters-guise-sp">Master's Guise (Sp)</Pair>
<Pair hl title="Replaces">Spell resistance</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Standard Action">A decoy can transform into a perfect likeness of its master, as the <Link to="/spell/alter_self">alter self</Link> spell.</Pair>
<Pair title="Special">It can hold this form for up to 1 minute per caster level; upon changing back, the decoy must remain in its natural form for an equal amount of time before transforming again.</Pair>
</Ability>
</>};
const _egotist = {title: "Egotist", jsx: <><h2 id="arc-familiar-egotist-egotist">Egotist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 210</Link><br/>An egotist believes itself to be the real master in the relationship - the power behind the throne. It often attempts to communicate "orders" for its master as best it can, interfering in matters ranging from spell choices and tactical combat decisions to its master's love life.</p>
<Ability icon={["skills"]} id="arc-familiar-egotist-undefined">
<Pair id="arc-familiar-egotist-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/intimidate">Intimidate</Link> (CHA)</Pair></Ability>
<Ability id="arc-familiar-egotist-song-of-myself-ex" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-egotist-song-of-myself-ex">Song of Myself (Ex)</Pair>
<Pair hl title="Alters">Alertness, the variable familiar bonus</Pair>
<Pair title="Passive Ability">An egotist gains <Link to="/feat/alertness">Alertness</Link> as a bonus feat rather than providing that feat to its master. It gains the variable familiar bonus (such as the <Link to="/monster/bat">bat's</Link> +3 bonus on Fly checks) instead of granting the bonus to its master.</Pair>
</Ability>
<Ability id="arc-familiar-egotist-order-master-ex" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-egotist-order-master-ex">Order Master (Ex)</Pair>
<Pair hl title="Alters">Speak with master</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">An egotist gains speak with master at 3rd level instead of 5th level.</Pair>
</Ability>
<Ability id="arc-familiar-egotist-receive-touch-spells-ex" icon={["magic-swirl","stairs-goal"]}>
<Pair single id="arc-familiar-egotist-receive-touch-spells-ex">Receive Touch Spells (Ex)</Pair>
<Pair hl title="Replaces">Deliver touch spells</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">An egotist can demand a particular touch spell.</Pair>
<Pair title="Special">If it does so, until the egotist's next turn, its master can cast that spell on the egotist once as a ranged touch within close range, as if using <Link to="/feat/reach_spell">Reach Spell</Link>.</Pair>
</Ability>
<Ability id="arc-familiar-egotist-scry-on-master-sp" icon={["magic-swirl"]}>
<Pair single id="arc-familiar-egotist-scry-on-master-sp">Scry on Master (Sp)</Pair>
<Pair hl title="Replaces">Scry on familiar</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Usage">Once a day.</Pair>
<Pair title="Ability">At 11th level, an egotist can scry on its master (as if casting the <Link to="/spell/scrying">scrying</Link> spell).</Pair>
</Ability>
</>};
const _elemental_familiar = {title: "Elemental Familiar", jsx: <><h2 id="arc-familiar-elemental_familiar-elemental-familiar">Elemental Familiar</h2>
<p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 26</Link><br/>The raw power of an elemental plane suffuses the body of an elemental familiar.</p>
<Ability id="arc-familiar-elemental_familiar-elemental-type-ex" icon={["upgrade"]}>
<Pair single id="arc-familiar-elemental_familiar-elemental-type-ex">Elemental Type (Ex)</Pair>
<Pair title="Passive Ability">An elemental familiar gains a subtype that matches its element: air, earth, fire, or water.</Pair>
</Ability>
<Ability id="arc-familiar-elemental_familiar-elemental-manifestation-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-elemental_familiar-elemental-manifestation-ex">Elemental Manifestation (Ex)</Pair>
<Pair hl title="Replaces">Improved evasion</Pair>
<Pair title="Passive Ability">An elemental familiar gains one or more special abilities based on its element.</Pair>
</Ability>
<Ability id="arc-familiar-elemental_familiar-air-familiar" extraClasses="subAbility numbered" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-familiar-elemental_familiar-air-familiar">Air Familiar</Pair>
<Pair title="Passive Ability">An air familiar gains a fly speed of 20 feet (good maneuverability); an air familiar that already has a fly speed instead improves its maneuverability by one category or increases its fly speed by 10 feet. An air familiar is considered three size categories larger than its actual size when calculating whether it can be moved by wind.</Pair>
</Ability>
<Ability id="arc-familiar-elemental_familiar-earth-familiar" extraClasses="subAbility numbered" icon={["armor-upgrade"]}>
<Pair single id="arc-familiar-elemental_familiar-earth-familiar">Earth Familiar</Pair>
<Pair title="Passive Ability">An earth familiar increases the natural armor bonus it gains from its master's class level by 50% (minimum +1).</Pair>
</Ability>
<Ability id="arc-familiar-elemental_familiar-fire-familiar" extraClasses="subAbility numbered" icon={["smoking-finger"]}>
<Pair single id="arc-familiar-elemental_familiar-fire-familiar">Fire Familiar</Pair>
<Pair title="Ability">A fire familiar can spit a globule of fire as a ranged touch attack once every 1d4 rounds; this attack has a range of 30 feet and deals 1d4 fire damage for every 3 character levels the master has.</Pair>
</Ability>
<Ability id="arc-familiar-elemental_familiar-water-familiar" extraClasses="subAbility numbered" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-familiar-elemental_familiar-water-familiar">Water Familiar</Pair>
<Pair title="Passive Ability">A water familiar can breathe underwater and gains a swim speed of 20 feet; a water familiar that already has a swim speed instead increases its swim speed by 10 feet. A water familiar also gains a bonus to its CMD when resisting bull rush, drag, reposition, and trip combat maneuvers; this bonus is equal to the natural armor adjustment gained from its master's level.</Pair>
</Ability>
<Ability id="arc-familiar-elemental_familiar-elemental-speech-ex" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-elemental_familiar-elemental-speech-ex">Elemental Speech (Ex)</Pair>
<Pair hl title="Replaces">Speak with animals of its kind</Pair>
<Pair title="Passive Ability">An elemental familiar gains the ability to speak and understand a language based on its element: Aquan (water), Auran (air), Ignan (fire), or Terran (earth).</Pair>
</Ability>
</>};
const _emissary = {title: "Emissary", jsx: <><h2 id="arc-familiar-emissary-emissary">Emissary</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 210</Link>, <Link to="/source/familiar_folio">Familiar Folio pg. 10</Link><br/>The emissary is touched by the divine, serving as a font of wisdom and a moral compass for its master.</p>
<p><strong className="hl">Special Requirement:</strong> An emissary familiar can serve only a master who worships a single deity.</p>
<Ability icon={["skills"]} id="arc-familiar-emissary-undefined">
<Pair id="arc-familiar-emissary-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/heal">Heal</Link> (WIS), <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> (INT), <Link to="/skill/sense_motive">Sense Motive</Link> (WIS)</Pair></Ability>
<Ability id="arc-familiar-emissary-divine-guidance-sp" icon={["magic-swirl"]}>
<Pair single id="arc-familiar-emissary-divine-guidance-sp">Divine Guidance (Sp)</Pair>
<Pair hl title="Replaces">Alertness</Pair>
<Pair title="Standard Action">An emissary can cast <Link to="/spell/guidance">guidance</Link> at will.</Pair>
</Ability>
<Ability id="arc-familiar-emissary-share-will-su" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-familiar-emissary-share-will-su">Share Will (Su)</Pair>
<Pair hl title="Replaces">Share spells</Pair>
<Pair title="Passive Ability">Whenever an emissary or its master fails a saving throw against a mind-affecting effect that affects only one of them, the other can attempt the saving throw as well. If this second saving throw is a success, treat the original result as a success, and the emissary and its master can't use this ability again for 24 hours. On a failure, both the emissary and its master suffer the effects of the failed saving throw, even if one of them wouldn't ordinarily be a valid target.</Pair>
</Ability>
<Ability id="arc-familiar-emissary-domain-influence-sp-or-su" icon={["magic-swirl"]}>
<Pair single id="arc-familiar-emissary-domain-influence-sp-or-su">Domain Influence (Sp or Su)</Pair>
<Pair hl title="Replaces">Deliver touch spells</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">The emissary gains a spark of divine power from the deity its master worships. Choose one of that deity's domains that grants a 1st-level domain power usable a number of times per day equal to 3 + the user's Wisdom modifier. The emissary can use that power once per day.</Pair>
</Ability>
</>};
const _figment = {title: "Figment", jsx: <><h2 id="arc-familiar-figment-figment">Figment</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 211</Link>, <Link to="/source/familiar_folio">Familiar Folio pg. 10</Link><br/>Figments are born from their masters' imaginations rather than being ordinary creatures that are awakened.</p>
<Ability id="arc-familiar-figment-recurring-dream-su" icon={["broken-shield"]}>
<Pair single id="arc-familiar-figment-recurring-dream-su">Recurring Dream (Su)</Pair>
<Pair hl title="Replaces">Improved evasion</Pair>
<Pair title="Passive Ability">A figment has a total number of hit points equal to 1/4 of its master's total hit points. If the figment dies, it vanishes, appearing again with 1 hit point after its master awakens from a full night's sleep. If a figment ever strays more than 100 feet from its master or enters an antimagic field, or if a figment's master is unconscious or asleep, the figment disappears until the next time its master prepares spells or regains her spells per day. Because it is a being of its master's mind, a figment can never serve as a witch's familiar, a shaman's spirit animal, or any other spell-granting familiar, and it can't use any divination spells or spell-like abilities the base creature has.</Pair>
</Ability>
<Ability id="arc-familiar-figment-manifest-dreams-su" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-figment-manifest-dreams-su">Manifest Dreams (Su)</Pair>
<Pair hl title="Replaces">Deliver touch spells, speak with animals of its kind, scry on familiar</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A figment is shaped by its master's dreams. Each time the master awakens from a full night's rest, he can apply to the figment 1 evolution point's worth of <Link to="/ability/evolutions">eidolon evolutions</Link> that don't have a base form requirement.</Pair>
<Pair title="At 7th Level">He can apply 2 points' worth of eidolon evolutions.</Pair>
<Pair title="At 13th Level">He can apply 3 points' worth of eidolon evolutions.</Pair>
</Ability>
</>};
const _infiltrator = {title: "Infiltrator", jsx: <><h2 id="arc-familiar-infiltrator-infiltrator">Infiltrator</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 211</Link>, <Link to="/source/animal_archive">Animal Archive pg. 20</Link><br/>Familiars can be skilled spies, and infiltrators are the very best of their kind at the subtle art of espionage.</p>
<Ability icon={["skills"]} id="arc-familiar-infiltrator-undefined">
<Pair id="arc-familiar-infiltrator-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/disguise">Disguise</Link> (CHA)</Pair></Ability>
<Ability id="arc-familiar-infiltrator-alertness-ex" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-infiltrator-alertness-ex">Alertness (Ex)</Pair>
<Pair hl title="Alters">Alertness</Pair>
<Pair title="Passive Ability">An infiltrator gains <Link to="/feat/alertness">Alertness</Link> as a bonus feat rather than providing that feat to its master.</Pair>
</Ability>
<Ability id="arc-familiar-infiltrator-share-spells-ex" icon={["broken-shield"]}>
<Pair single id="arc-familiar-infiltrator-share-spells-ex">Share Spells (Ex)</Pair>
<Pair hl title="Alters">Share spells</Pair>
<Pair title="Passive Ability">An infiltrator can share only divination spells that have a target of "you" via this ability.</Pair>
</Ability>
<Ability id="arc-familiar-infiltrator-uncanny-stealth-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-familiar-infiltrator-uncanny-stealth-ex">Uncanny Stealth (Ex)</Pair>
<Pair hl title="Replaces">Improved evasion</Pair>
<Pair title="Passive Ability">An infiltrator gains <Link to="/ability/uncanny_dodge">uncanny dodge</Link> and <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link>, treating its master's level as its effective <Link to="/class/rogue">rogue</Link> level.</Pair>
</Ability>
<Ability id="arc-familiar-infiltrator-scry-on-familiar-sp" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-infiltrator-scry-on-familiar-sp">Scry on Familiar (Sp)</Pair>
<Pair hl title="Replaces">Speak with animals of its kind</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">An infiltrator's master can <Link to="/spell/scrying">scry</Link> on it for up to 1 minute per level per day. The duration does not need to be consecutive, but it must be used in 1-minute increments.</Pair>
</Ability>
<Ability id="arc-familiar-infiltrator-telepathic-bond-sp" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-infiltrator-telepathic-bond-sp">Telepathic Bond (Sp)</Pair>
<Pair hl title="Replaces">Spell resistance</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">An infiltrator gains a permanent <Link to="/spell/telepathic_bond">telepathic bond</Link> with its master. This bond has no range limit as long as the familiar and its master are on the same plane.</Pair>
</Ability>
</>};
const _mascot = {title: "Mascot", jsx: <><h2 id="arc-familiar-mascot-mascot">Mascot</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 211</Link>, <Link to="/source/familiar_folio">Familiar Folio pg. 11</Link><br/>A familiar sometimes serves as the centerpiece of an adventuring party. Known as a mascot, this type of familiar eventually treats the entire party as its master.</p>
<Ability icon={["skills"]} id="arc-familiar-mascot-undefined">
<Pair id="arc-familiar-mascot-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/perform">Perform</Link> (CHA)</Pair></Ability>
<Ability id="arc-familiar-mascot-affinity-for-my-team-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-familiar-mascot-affinity-for-my-team-su">Affinity for My Team (Su)</Pair>
<Pair hl title="Replaces">Alertness</Pair>
<Pair hl title="Alters">Empathic link</Pair>
<Pair title="Ability">A mascot is the heart and soul of its team. At first, the team consists of only the familiar and its master, but at 3rd level and every 3 levels thereafter, a mascot can add an additional member to its team. A mascot's <em>empathic link</em> extends to all members of its team. A mascot can add or remove one team member over the course of a day.</Pair>
</Ability>
<Ability id="arc-familiar-mascot-lucky-mascot-su" icon={["upgrade"]}>
<Pair single id="arc-familiar-mascot-lucky-mascot-su">Lucky Mascot (Su)</Pair>
<Pair hl title="Replaces">Improved evasion</Pair>
<Pair title="Passive Ability">Whenever a mascot uses the aid another action to improve a team member's attack roll or AC, that team member also gains a +1 luck bonus to AC for 1 round.</Pair>
</Ability>
<Ability id="arc-familiar-mascot-share-spells-ex" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-familiar-mascot-share-spells-ex">Share Spells (Ex)</Pair>
<Pair hl title="Alters">Share spells</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">Spells that target a mascot via its <em>share spells</em> ability function at its master's caster level - 2. The mascot also benefit from the spells of any team member when it is using <em>share spells.</em></Pair>
</Ability>
<Ability id="arc-familiar-mascot-deliver-touch-spells-su" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-familiar-mascot-deliver-touch-spells-su">Deliver Touch Spells (Su)</Pair>
<Pair hl title="Alters">Deliver touch spells</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">Spells delivered by a mascot's <em>deliver touch spells</em> ability function at its master's caster level - 2. The mascot can deliver the touch spells of any of its team members.</Pair>
</Ability>
<Ability id="arc-familiar-mascot-speak-with-team-ex" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-mascot-speak-with-team-ex">Speak with Team (Ex)</Pair>
<Pair hl title="Replaces">Speak with master, speak with animals of its kind</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">A mascot gains the ability to speak with all members of its team verbally as if using <em>speak with master.</em></Pair>
</Ability>
<Ability id="arc-familiar-mascot-heart-of-the-team-ex" icon={["upgrade"]}>
<Pair single id="arc-familiar-mascot-heart-of-the-team-ex">Heart of the Team (Ex)</Pair>
<Pair hl title="Replaces">Spell resistance, scry on familiar</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Usage">Once per day.</Pair>
<Pair title="Full-Round Action">A mascot can designate any member of its team as its master for the purpose of calculating its base attack bonus, Hit Dice, hit points, saving throws, and skill ranks.</Pair>
</Ability>
</>};
const _mauler = {title: "Mauler", jsx: <><h2 id="arc-familiar-mauler-mauler">Mauler</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 212</Link>, <Link to="/source/familiar_folio">Familiar Folio pg. 11</Link><br/>While most familiars are scouts and assistants, the mauler familiar cares only for the thrill of battle. A mauler often serves a bloodthirsty or martial-minded master.</p>
<Ability icon={["skills"]} id="arc-familiar-mauler-undefined">
<Pair id="arc-familiar-mauler-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/intimidate">Intimidate</Link> (CHA)</Pair></Ability>
<Ability id="arc-familiar-mauler-bond-forged-in-blood-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-familiar-mauler-bond-forged-in-blood-su">Bond Forged in Blood (Su)</Pair>
<Pair hl title="Replaces">Speak with master, speak with animals of its kind</Pair>
<Pair title="At 1st Level">A mauler can't speak or communicate via language in any way, even if it's a type of creature that normally could.</Pair>
<Pair title="At 5th Level">Whenever the mauler's master drops a foe whose Hit Dice are at least half its level to below 0 hit points, the mauler's empathic link surges with power, granting both the mauler and its master a +2 morale bonus on attack and damage rolls for 1 round.</Pair>
</Ability>
<Ability id="arc-familiar-mauler-increased-strength-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-familiar-mauler-increased-strength-ex">Increased Strength (Ex)</Pair>
<Pair hl title="Alters">The familiar's Intelligence score advancement</Pair>
<Pair title="Passive Ability">Starting at 3rd level, a mauler's Strength score increases by 1 at every odd-numbered level (3rd, 5th, 7th, 9th, and so on). The familiar's Intelligence score remains 6; a mauler can never have an Intelligence score higher than 6.</Pair>
</Ability>
<Ability id="arc-familiar-mauler-battle-form-su" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-mauler-battle-form-su">Battle Form (Su)</Pair>
<Pair hl title="Replaces">Deliver touch spells</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Standard Action">A mauler gains the ability to transform into a larger, more ferocious form and back three times per day.</Pair>
<Pair title="Special">In battle form, the mauler's size becomes Medium and it gains a +2 size bonus to its Strength score. Since many familiars are Tiny or Diminutive, be sure to check for any additional Strength and Dexterity adjustments for increasing in size from Tiny or Diminutive to Medium (using the <Link to="/spelldef/polymorph">polymorph table</Link>). This is a polymorph effect.</Pair>
</Ability>
<Ability id="arc-familiar-mauler-damage-reduction-su" icon={["armor-upgrade"]}>
<Pair single id="arc-familiar-mauler-damage-reduction-su">Damage Reduction (Su)</Pair>
<Pair hl title="Replaces">Spell resistance</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">A mauler gains DR 5/magic.</Pair>
</Ability>
</>};
const _occult_messenger = {title: "Occult Messenger", jsx: <><h2 id="arc-familiar-occult_messenger-occult-messenger">Occult Messenger</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 21</Link><br/>Some familiars are messengers of greater powers than themselves. The witch's familiar comes from her patron and the emissary is the servant of a god, but the occult messenger is envoy of an odder power still.</p>
<Ability id="arc-familiar-occult_messenger-see-the-unseen-ex" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-occult_messenger-see-the-unseen-ex">See the Unseen (Ex)</Pair>
<Pair hl title="Replaces">Alertness</Pair>
<Pair title="Passive Ability">While an occult messenger is within arm's reach, the master gains the <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> feat.</Pair>
</Ability>
<Ability id="arc-familiar-occult_messenger-teacher-from-afar-ex" icon={["upgrade"]}>
<Pair single id="arc-familiar-occult_messenger-teacher-from-afar-ex">Teacher from Afar (Ex)</Pair>
<Pair hl title="Replaces">Deliver touch spells</Pair>
<Pair title="Passive Ability">When the occult messenger's master uses a <Link to="/rule/occult_skill_unlocks">psychic skill unlock</Link> while the occult messenger is within arm's reach, the master gains a competence bonus on skill unlocks equal to <Link to="/misc/half">half</Link> the occult messenger's level.</Pair>
</Ability>
</>};
const _parasite = {title: "Parasite", jsx: <><h2 id="arc-familiar-parasite-parasite">Parasite</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 21</Link><br/>Most familiars are still something akin to normal animals, conduits for power rather than powers themselves. The parasite is one of the more disturbing exceptions.</p>
<Ability id="arc-familiar-parasite-infest-su" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-parasite-infest-su">Infest (Su)</Pair>
<Pair title="Full-Round Action"><p>A parasite can infest a willing or helpless target at least two size categories larger than the parasite. This deals 1d6 points of <Link to="/rule/constitution_damage">Constitution damage</Link> as the parasite burrows through viscera before attaching itself to the target's brain or spinal cord (or equivalent). There, the parasite curls up, with no ability to see or hear anything itself, but with access to its host's senses.</p>
<p>Despite the gaping wound, this process is curiously painless. Assuming that the location of the wound and the resultant blood is not obvious (most parasites infest from the back for this reason), the victim must succeed at a Heal or Sense Motive check opposed by the familiar's Bluff check to notice that something is amiss.</p>
<p>Removing a parasite requires a successful Heal check opposed by the familiar's Stealth check, or a successful casting of <Link to="/spell/break_enchantment">break enchantment</Link> against a DC of 11 + the parasite's level. If successful, the parasite is destroyed. The parasite can leave the host willingly as a <strong className="hl">full-round action</strong>. If the host is killed, the parasite must succeed at a DC 20 Fortitude save or be killed as well." replace="Improved evasion~share spells"&#125;</p>
</Pair>
</Ability>
<Ability id="arc-familiar-parasite-puppeteer-sp" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-familiar-parasite-puppeteer-sp">Puppeteer (Sp)</Pair>
<Pair hl title="Replaces">Deliver touch spells, speak with animals of its kind, spell resistance, scry on familiar</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">Once a day.</Pair>
<Pair title="Standard Action">The parasite can attempt to control its host. This functions as <Link to="/spell/suggestion">suggestion</Link>.</Pair>
<Pair title="At 7th Level">The parasite can use this ability to replicate <Link to="/spell/dominate_person">dominate person</Link> instead.</Pair>
<Pair title="At 15th Level">The parasite can replicate <Link to="/spell/dominate_monster">dominate monster</Link>.</Pair>
<Pair title="Special">The DC for this ability is calculated as if the parasite's master had cast the spell (defaulting to Charisma if the owner has no spellcasting ability).</Pair>
</Ability>
</>};
const _pilferer = {title: "Pilferer", jsx: <><h2 id="arc-familiar-pilferer-pilferer">Pilferer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 212</Link>, <Link to="/source/animal_archive">Animal Archive pg. 20</Link><br/>Some familiars are stealthy pilferers that perform tricks of thievery or simple spying on their master's behalf.</p>
<Ability icon={["skills"]} id="arc-familiar-pilferer-undefined">
<Pair id="arc-familiar-pilferer-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/disable_device">Disable Device</Link> (DEX), <Link to="/skill/escape_artist">Escape Artist</Link> (DEX), <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> (DEX)</Pair></Ability>
<Ability id="arc-familiar-pilferer-improved-steal-ex" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-pilferer-improved-steal-ex">Improved Steal (Ex)</Pair>
<Pair hl title="Replaces">Alertness</Pair>
<Pair title="Passive Ability">A pilferer gains <Link to="/feat/improved_steal">Improved Steal</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-familiar-pilferer-nondetection-su" icon={["armor-upgrade"]}>
<Pair single id="arc-familiar-pilferer-nondetection-su">Nondetection (Su)</Pair>
<Pair hl title="Replaces">Improved evasion</Pair>
<Pair title="Passive Ability">A pilferer is under the constant effect of <Link to="/spell/nondetection">nondetection</Link> with a caster level equal to its master's class level. The DC of the caster level check to penetrate this nondetection effect is equal to 15 + the master's caster level.</Pair>
</Ability>
<Ability id="arc-familiar-pilferer-sneak-ex" icon={["upgrade"]}>
<Pair single id="arc-familiar-pilferer-sneak-ex">Sneak (Ex)</Pair>
<Pair hl title="Replaces">Deliver touch spells</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A pilferer gains a competence bonus equal to <Link to="/misc/half">half</Link> its master's class level on Sleight of Hand and Stealth checks.</Pair>
</Ability>
<Ability id="arc-familiar-pilferer-greater-steal-ex" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-pilferer-greater-steal-ex">Greater Steal (Ex)</Pair>
<Pair hl title="Replaces">Speak with animals of its kind</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">A pilferer gains <Link to="/feat/greater_steal">Greater Steal</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _prankster = {title: "Prankster", jsx: <><h2 id="arc-familiar-prankster-prankster">Prankster</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 212</Link><br/>Some familiars love to perform pranks on their unsuspecting masters, as well as on those around their masters - allies and enemies alike. While good-aligned pranksters' tricks are usually good natured except against foes, evil pranksters play tricks that are mean spirited or even downright cruel.</p>
<Ability icon={["skills"]} id="arc-familiar-prankster-undefined">
<Pair id="arc-familiar-prankster-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/disguise">Disguise</Link> (CHA), <Link to="/skill/perform">Perform (comedy)</Link> (CHA), <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> (DEX)</Pair></Ability>
<Ability id="arc-familiar-prankster-autonomous-link-ex" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-prankster-autonomous-link-ex">Autonomous Link (Ex)</Pair>
<Pair hl title="Alters">Empathic link</Pair>
<Pair title="Ability">A prankster can hide its feelings from its master via its <em>empathic link</em> at will. It can also try to project a false emotion through the link by attempting a Bluff check opposed by its master's Sense Motive.</Pair>
</Ability>
<Ability id="arc-familiar-prankster-improved-dirty-trick-ex" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-prankster-improved-dirty-trick-ex">Improved Dirty Trick (Ex)</Pair>
<Pair hl title="Replaces">Alertness</Pair>
<Pair title="Passive Ability">A prankster gains <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-familiar-prankster-magical-pranks-sp" icon={["magic-swirl"]}>
<Pair single id="arc-familiar-prankster-magical-pranks-sp">Magical Pranks (Sp)</Pair>
<Pair hl title="Replaces">Improved evasion, share spells</Pair>
<Pair title="Standard Action">A prankster can cast <Link to="/spell/ghost_sound">ghost sound</Link>, <Link to="/spell/mage_hand">mage hand</Link>, and <Link to="/spell/prestidigitation">prestidigitation</Link> at will as spell-like abilities.</Pair>
</Ability>
<Ability id="arc-familiar-prankster-glib-comedy-ex" icon={["upgrade"]}>
<Pair single id="arc-familiar-prankster-glib-comedy-ex">Glib Comedy (Ex)</Pair>
<Pair hl title="Replaces">Deliver touch spells</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A prankster gains a competence bonus equal to <Link to="/misc/half">half</Link> its master's class level on Bluff, Disguise, and Perform (comedy) checks.</Pair>
</Ability>
<Ability id="arc-familiar-prankster-greater-dirty-trick-ex" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-prankster-greater-dirty-trick-ex">Greater Dirty Trick (Ex)</Pair>
<Pair hl title="Replaces">Spell resistance</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">A prankster gains <Link to="/feat/greater_dirty_trick">Greater Dirty Trick</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-familiar-prankster-unreliable-narrator-sp" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-familiar-prankster-unreliable-narrator-sp">Unreliable Narrator (Sp)</Pair>
<Pair hl title="Alters">Scry on familiar</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">Whenever its master uses <em>scry on familiar,</em> a prankster can use false vision to fool that ability; this doesn't affect any other divination (scrying) effects in the area, only its master's <em>scry on familiar</em> ability.</Pair>
</Ability>
</>};
const _protector = {title: "Protector", jsx: <><h2 id="arc-familiar-protector-protector">Protector</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 212</Link>, <Link to="/source/familiar_folio">Familiar Folio pg. 11</Link><br/>Protector familiars are so devoted that they would give their lives for their masters. A tumor familiar can't be a protector.</p>
<Ability id="arc-familiar-protector-loyal-bodyguard-ex" icon={["stairs-goal","shield-reflect"]}>
<Pair single id="arc-familiar-protector-loyal-bodyguard-ex">Loyal Bodyguard (Ex)</Pair>
<Pair hl title="Replaces">Alertness, improved evasion</Pair>
<Pair title="Passive Ability">A protector gains <Link to="/feat/bodyguard">Bodyguard</Link> and <Link to="/feat/combat_reflexes">Combat Reflexes</Link> as bonus feats.</Pair>
<Pair title="Ability">If the familiar is sharing its master's square, it can use Bodyguard to aid another to improve its master's AC even if it doesn't threaten the attacking foe, though it still needs line of effect to its master and the attacker.</Pair>
</Ability>
<Ability id="arc-familiar-protector-shield-master-su" icon={["armor-upgrade"]}>
<Pair single id="arc-familiar-protector-shield-master-su">Shield Master (Su)</Pair>
<Pair hl title="Replaces">Deliver touch spells, speak with animals of its kind</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">Whenever a protector or its master takes hit point damage, as long as the protector and its master are touching, its master can split the damage evenly between them as if under the effects of <Link to="/spell/shield_other">shield other</Link>.</Pair>
</Ability>
<Ability id="arc-familiar-protector-able-defender-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-familiar-protector-able-defender-ex">Able Defender (Ex)</Pair>
<Pair hl title="Replaces">Spell resistance</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">A protector gains <Link to="/feat/in_harms_way">In Harm's Way</Link> as a bonus feat. In addition, the familiar's hit points are now equal to its master's total hit points (not including temporary hit points), regardless of its actual Hit Dice.</Pair>
</Ability>
</>};
const _sage = {title: "Sage", jsx: <><h2 id="arc-familiar-sage-sage">Sage</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 213</Link>, <Link to="/source/familiar_folio">Familiar Folio pg. 11</Link><br/>Sages are masters of useful facts, able to recall them for their masters' benefit, though this leads many to become haughty and proud.</p>
<Ability icon={["skills"]} id="arc-familiar-sage-undefined">
<Pair id="arc-familiar-sage-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT), <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> (INT)</Pair></Ability>
<Ability id="arc-familiar-sage-dazzling-intellect-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-familiar-sage-dazzling-intellect-ex">Dazzling Intellect (Ex)</Pair>
<Pair hl title="Alters">The familiar's Intelligence score and natural armor adjustment</Pair>
<Pair title="Passive Ability">A sage's Intelligence score is always equal to 5 + its master's class level, but it gains natural armor increases as if its master's class level were <Link to="/misc/half">half</Link> what of the actual class level.</Pair>
</Ability>
<Ability id="arc-familiar-sage-sages-knowledge-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-familiar-sage-sages-knowledge-ex">Sage's Knowledge (Ex)</Pair>
<Pair hl title="Replaces">Alertness, the familiar's ability to share its master's skill ranks</Pair>
<Pair title="Passive Ability">A sage stores information on every topic and is happy to lecture its master on the finer points of a subject. A sage can attempt all Knowledge checks untrained and gains a bonus on Knowledge checks equal to half its master's class level. Additionally, a sage gains 2 skill ranks each time its master gains a class level. Its maximum number of ranks in any given skill is equal to its master's class level.</Pair>
</Ability>
</>};
const _school_familiar = {hasJL:true,title: "School Familiar", jsx: <><div className="jumpList" id="arc-familiar-school_familiar-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arc-familiar-school_familiar-abjuration">Abjuration</InnerLink></li><li><InnerLink toTop to="arc-familiar-school_familiar-conjuration">Conjuration</InnerLink></li><li><InnerLink toTop to="arc-familiar-school_familiar-divination">Divination</InnerLink></li><li><InnerLink toTop to="arc-familiar-school_familiar-enchantment">Enchantment</InnerLink></li><li><InnerLink toTop to="arc-familiar-school_familiar-evocation">Evocation</InnerLink></li><li><InnerLink toTop to="arc-familiar-school_familiar-illusion">Illusion</InnerLink></li><li><InnerLink toTop to="arc-familiar-school_familiar-necromancy">Necromancy</InnerLink></li><li><InnerLink toTop to="arc-familiar-school_familiar-transmutation">Transmutation</InnerLink></li></ul></div><h2 id="arc-familiar-school_familiar-school-familiar">School Familiar</h2>
<p><strong>Sources</strong> <Link to="/source/familiar_folio">Familiar Folio pg. 14</Link><br/>School familiars are tightly bound to the power of their master's chosen school of magic. A school familiar cannot have any other familiar archetype. At the GM's discretion, other schools of magic (such as elemental arcane schools) may have their own school familiars.</p>
<p><strong className="hl">Note:</strong> This archetype is only available to familiars whose masters take the <Link to="/feat/school_familiar">School Familiar</Link> feat. It offers greater powers if the master also takes <Link to="/feat/greater_school_familiar">Greater School Familiar</Link>.</p>
<Ability id="arc-familiar-school_familiar-school-link-su" icon={["broken-shield"]}>
<Pair single id="arc-familiar-school_familiar-school-link-su">School Link (Su)</Pair>
<Pair title="Passive Ability">A school familiar can use the <em>share spells</em> and <em>deliver touch spells</em> abilities only with spells of its master's specialized arcane school.</Pair>
</Ability>
<Ability id="arc-familiar-school_familiar-school-cantrip-sp" icon={["magic-swirl"]}>
<Pair single id="arc-familiar-school_familiar-school-cantrip-sp">School Cantrip (Sp)</Pair>
<Pair title="Ability">A school familiar can cast at will one cantrip selected from its associated arcane school, using its master's caster level.</Pair>
</Ability>
<Ability id="arc-familiar-school_familiar-specialty-stowaway-sp-or-su" icon={["magic-swirl","stairs-goal"]}>
<Pair single id="arc-familiar-school_familiar-specialty-stowaway-sp-or-su">Specialty Stowaway (Sp or Su)</Pair>
<Pair title="Ability">A school familiar can use any granted abilities of its master's arcane school that have a limited number of uses or rounds per day, expending twice the number of uses or rounds as usual.</Pair>
</Ability>
<Ability id="arc-familiar-school_familiar-lesser-school-power" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-school_familiar-lesser-school-power">Lesser School Power</Pair>
<Pair title="Ability">A school familiar gains the lesser school power matching its associated arcane school.</Pair>
</Ability>
<Ability id="arc-familiar-school_familiar-greater-school-power" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-school_familiar-greater-school-power">Greater School Power</Pair>
<Pair title="Ability">A school familiar whose master has taken the <Link to="/feat/greater_school_familiar">Greater School Familiar</Link> feat gains the indicated greater school power of its associated arcane school.</Pair>
</Ability>
<h3 id="arc-familiar-school_familiar-abjuration" data-hash-target>Abjuration</h3>
<p>An abjurer's familiar is an invaluable defensive aid.</p>
<Ability id="arc-familiar-school_familiar-energy-block-su" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-familiar-school_familiar-energy-block-su">Energy Block (Su)</Pair>
<Pair title="Type">Lesser Power</Pair>
<Pair title="Passive Ability">The familiar is immune to <Link to="/spell/magic_missile">magic missile</Link> as if protected by <Link to="/spell/shield">shield</Link>. Choose an energy type: acid, cold, electricity, fire, or sonic. The familiar gains energy resistance equal to <Link to="/misc/half">half</Link> its master's level (minimum 1) to the chosen energy type and can share this resistance with one ally within 5 feet.</Pair>
<Pair title="Standard Action">The familiar's master can change this energy type. </Pair>
</Ability>
<Ability id="arc-familiar-school_familiar-disruptive-spirit-su" icon={["mailed-fist"]}>
<Pair single id="arc-familiar-school_familiar-disruptive-spirit-su">Disruptive Spirit (Su)</Pair>
<Pair title="Type">Greater Power</Pair>
<Pair title="Passive Ability">Whenever the familiar hits a creature with a natural attack, that creature is subject to a targeted <Link to="/spell/dispel_magic">dispel magic</Link> effect at the master's caster level. This ability can't be used while delivering a touch spell, and can't affect the same creature more than once in 24 hours.</Pair>
</Ability>
<h3 id="arc-familiar-school_familiar-conjuration" data-hash-target>Conjuration</h3>
<p>Conjurers' familiars are masters of teleportation that can inhabit the bodies of summoned creatures.</p>
<Ability id="arc-familiar-school_familiar-masters-side-sp" icon={["magic-swirl"]}>
<Pair single id="arc-familiar-school_familiar-masters-side-sp">Master's Side (Sp)</Pair>
<Pair title="Type">Lesser Power</Pair>
<Pair title="Standard Action">The familiar can use <Link to="/spell/dimension_door">dimension door</Link> to return to its master's side a number of times per day equal to 3 + its Intelligence modifier (minimum once per day).</Pair>
</Ability>
<Ability id="arc-familiar-school_familiar-summoned-shell-sp" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-school_familiar-summoned-shell-sp">Summoned Shell (Sp)</Pair>
<Pair title="Type">Greater Power</Pair>
<Pair title="Ability">Whenever the familiar's master casts a <Link to="/spell/summon_monster">summon monster</Link> spell, if the familiar is within the spell's range, it can choose to inhabit the body of one creature summoned by the spell. While inhabiting the body, the familiar maintains its own Intelligence, Wisdom, and Charisma scores and its familiar powers, but otherwise gains the statistics and abilities of the summoned creature. When the spell ends, or the summoned creature's hit points are reduced to 0, the familiar is expelled without suffering any negative effects.</Pair>
</Ability>
<h3 id="arc-familiar-school_familiar-divination" data-hash-target>Divination</h3>
<p>A diviner's familiar complements its master's prescience.</p>
<Ability id="arc-familiar-school_familiar-ever-ready-su" icon={["rolling-dices","upgrade"]}>
<Pair single id="arc-familiar-school_familiar-ever-ready-su">Ever Ready (Su)</Pair>
<Pair title="Type">Lesser Power</Pair>
<Pair title="Passive Ability">At the start of combat, the familiar and its master each roll initiative separately, and the master can choose to trade his initiative result with his familiar's. The familiar can always act on the surprise round.</Pair>
<Pair title="Ability">The familiar gains the benefits of the <Link to="/arcaneschool/divination">diviner's forewarned</Link> school power.</Pair>
</Ability>
<Ability id="arc-familiar-school_familiar-greater-scry-on-familiar-sp" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-school_familiar-greater-scry-on-familiar-sp">Greater Scry on Familiar (Sp)</Pair>
<Pair title="Type">Greater Power</Pair>
<Pair title="Passive Ability">The master gains the <em>scry on familiar</em> ability (if he doesn't already possess it), and can use it at will as <Link to="/spell/greater_scrying">greater scrying</Link>.</Pair>
</Ability>
<h3 id="arc-familiar-school_familiar-enchantment" data-hash-target>Enchantment</h3>
<p>Enchanters' familiars are devious manipulators capable of aiding in charms and compulsions.</p>
<Ability id="arc-familiar-school_familiar-manipulative-abettor-su" icon={["armor-downgrade"]}>
<Pair single id="arc-familiar-school_familiar-manipulative-abettor-su">Manipulative Abettor (Su)</Pair>
<Pair title="Type">Lesser Power</Pair>
<Pair title="Passive Ability">If the familiar's master casts an enchantment spell while targeting a creature whose square is also occupied by his familiar, the save DC of the spell is increased by 2.</Pair>
</Ability>
<Ability id="arc-familiar-school_familiar-puppet-master-su" icon={["magic-palm"]}>
<Pair single id="arc-familiar-school_familiar-puppet-master-su">Puppet Master (Su)</Pair>
<Pair title="Type">Greater Power</Pair>
<Pair title="Ability">The familiar can strongly influence a creature through physical contact. Once per day, the familiar can make a melee touch attack against a creature and force it to make a Will save (DC = 10 + 1/2 the familiar's Hit Dice + its Charisma modifier) or be affected as if by <Link to="/spell/charm_monster">charm monster</Link>. The effect lasts for as long as the familiar remains conscious and within 5 feet of the target (to a maximum of 24 hours). As soon as the effect ends, the freed victim is forever immune to that familiar's puppet master ability.</Pair>
</Ability>
<h3 id="arc-familiar-school_familiar-evocation" data-hash-target>Evocation</h3>
<p>Evocation familiars boost and manipulate energy spells.</p>
<Ability id="arc-familiar-school_familiar-energy-boost-su" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-familiar-school_familiar-energy-boost-su">Energy Boost (Su)</Pair>
<Pair title="Type">Lesser Power</Pair>
<Pair title="Passive Ability">Choose an energy type: acid, cold, electricity, or fire. The familiar gains resistance 10 to the selected energy type. Whenever an ally casts an evocation spell that has the chosen energy type as a descriptor while within 5 feet of the familiar, the spell deals bonus energy damage equal to its spell level.</Pair>
</Ability>
<Ability id="arc-familiar-school_familiar-eldritch-battery-su" icon={["armor-upgrade","stairs-goal","magic-swirl"]}>
<Pair single id="arc-familiar-school_familiar-eldritch-battery-su">Eldritch Battery (Su)</Pair>
<Pair title="Type">Greater Power</Pair>
<Pair title="Passive Ability">The familiar becomes immune to the energy type chosen for its energy boost ability.</Pair>
<Pair title="Ability">If the familiar's master casts an evocation spell that has that energy type as a descriptor, and targets the familiar or includes it in the spell's area, the familiar can choose to absorb the spell. Instead of the spell's normal effect, the familiar gains the spell (including any metamagic feats applied to it) as a spell-like ability. It can use this ability once, at half the spell's original caster level. If the halved caster level is insufficient to cast a spell of that level, the familiar doesn't gain the spell as a spell-like ability. The effect fades after 1 minute if not used.</Pair>
</Ability>
<h3 id="arc-familiar-school_familiar-illusion" data-hash-target>Illusion</h3>
<p>Illusion school familiars can control their master's illusions and create impressive illusions of their own.</p>
<Ability id="arc-familiar-school_familiar-illusory-maestro-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-familiar-school_familiar-illusory-maestro-su">Illusory Maestro (Su)</Pair>
<Pair title="Type">Lesser Power</Pair>
<Pair title="Move-Equivalent Action">The familiar's master can transfer control of any illusion spell that requires concentration to the familiar. The familiar's affinity for illusions also enhances the quality of the illusion, increasing the illusion's save DC (if any) by 1 for as long as the familiar concentrates on the spell.</Pair>
</Ability>
<Ability id="arc-familiar-school_familiar-phantom-swarm-su" icon={["stairs-goal","mailed-fist"]}>
<Pair single id="arc-familiar-school_familiar-phantom-swarm-su">Phantom Swarm (Su)</Pair>
<Pair title="Type">Greater Power</Pair>
<Pair title="Standard Action">The familiar can conjure hundreds of illusory duplicates of itself. The familiar can direct the phantom swarm as a normal swarm by moving along with it. The familiar gains a swarm attack that deals 1d6 points of damage with a distraction DC equal to 10 + the familiar's Constitution modifier. Opponents who fail to disbelieve the effect (Will DC = 10 + 1/2 the master's level + the familiar's Charisma modifier) treat the familiar as if it had the <Link to="/subtype/swarm">swarm</Link> subtype. The familiar takes any damage dealt to the swarm, including extra damage from area attacks, though it takes only half damage from slashing and piercing weapons. Creatures who successfully disbelieve the swarm are immune to the swarm's effects and can target the familiar as an individual creature.</Pair>
<Pair title="Special">Only Tiny or smaller familiars can use this ability. This is an illusion (shadow) effect.</Pair>
</Ability>
<h3 id="arc-familiar-school_familiar-necromancy" data-hash-target>Necromancy</h3>
<p>Necromancers' familiars are scions of undeath.</p>
<Ability id="arc-familiar-school_familiar-spirit-warden-su" icon={["upgrade","magic-palm"]}>
<Pair single id="arc-familiar-school_familiar-spirit-warden-su">Spirit Warden (Su)</Pair>
<Pair title="Type">Lesser Power</Pair>
<Pair title="Passive Ability">Whenever the familiar successfully uses aid another to aid an attack, that attack deals full damage to incorporeal creatures.</Pair>
<Pair title="Ability">When encountering a haunt, the familiar always acts on the surprise round, and can make touch attacks against the haunt that deal 1d6 points of damage per 2 levels its master possesses.</Pair>
</Ability>
<Ability id="arc-familiar-school_familiar-one-with-the-negative-su" icon={["broken-shield","armor-upgrade","mailed-fist"]}>
<Pair single id="arc-familiar-school_familiar-one-with-the-negative-su">One With the Negative (Su)</Pair>
<Pair title="Type">Greater Power</Pair>
<Pair title="Passive Ability">The familiar is healed by negative energy as if undead. It is immune to energy drain. It's constantly affected by <Link to="/spell/hide_from_undead">hide from undead</Link>; if it breaks this effect by attacking, it can activate the effect again as a <strong className="hl">standard action</strong>.</Pair>
<Pair title="Ability">Whenever the familiar hits a living creature with a natural attack, that creature gains 1 negative level. A given creature can receive a negative level from the familiar only once per day.</Pair>
</Ability>
<h3 id="arc-familiar-school_familiar-transmutation" data-hash-target>Transmutation</h3>
<p>A transmutation familiar is capable of protecting its master's effects as well as shapeshifting.</p>
<Ability id="arc-familiar-school_familiar-dispel-bait-su" icon={["stairs-goal","shield-reflect"]}>
<Pair single id="arc-familiar-school_familiar-dispel-bait-su">Dispel Bait (Su)</Pair>
<Pair title="Type">Lesser Power</Pair>
<Pair title="Standard Action">The familiar's master can expend a spell or an open spell slot to imbue the familiar with the ability to protect his transmutations. Whenever one of the master's transmutations would be successfully dispelled, if the familiar is within 10 feet of the transmutation effect and the imbued spell slot is of a level equal to or higher than the transmutation, the familiar can choose to lose the imbued spell slot to prevent the transmutation effect from being dispelled. The familiar can be imbued with only one <em>dispel bait</em> effect at a time.</Pair>
</Ability>
<Ability id="arc-familiar-school_familiar-infinite-forms-su" icon={["magic-swirl"]}>
<Pair single id="arc-familiar-school_familiar-infinite-forms-su">Infinite Forms (Su)</Pair>
<Pair title="Type">Greater Power</Pair>
<Pair title="Standard Action">Once per day, the familiar can transform into any animal familiar (but not an <em>improved familiar</em>), losing all of its racial abilities and becoming a typical familiar of the chosen type, including granting a different familiar bonus to its master.</Pair>
</Ability>
</>};
const _soulbound_familiar = {title: "Soulbound Familiar", jsx: <><h2 id="arc-familiar-soulbound_familiar-soulbound-familiar">Soulbound Familiar</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 213</Link><br/>Soulbound familiars are born when a master uses the magical principles behind soulbound dolls to bind a soul fragment to an animal.</p>
<Ability id="arc-familiar-soulbound_familiar-soul-focus-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-familiar-soulbound_familiar-soul-focus-ex">Soul Focus (Ex)</Pair>
<Pair hl title="Replaces">Alertness</Pair>
<Pair title="Passive Ability">The soul fragment bound to the familiar lives within a focus crystal surgically inserted into the animal. As long as this soul focus remains intact, it can be used to bind the soul fragment into another familiar, with the same cost and time requirements as replacing a familiar. Once bound into the soul focus, the soul continues to learn, and so if it is later put into a new familiar body, the soul retains its personality and memories from its previous body or bodies. A soul focus has hardness 8, 12 hit points, and a break DC of 20, though it can be attacked only when surgically removed from the familiar. If the soul focus is destroyed, creating a new soul focus with none of the old one's memories costs as much as replacing a familiar, in addition to the normal cost of replacing the familiar itself.</Pair>
<Pair title="Ability">The soulbound familiar gains <Link to="/feat/skill_focus">Skill Focus</Link> in a skill important to the creature whose soul provided the fragment.</Pair>
<Pair title="Special">Because it is born of another creature's soul, a soulbound familiar can never serve as a witch's familiar, a shaman's spirit animal, or any other spell-granting familiar.</Pair>
</Ability>
<Ability id="arc-familiar-soulbound_familiar-alignment-variation-ex" icon={["magic-swirl"]}>
<Pair single id="arc-familiar-soulbound_familiar-alignment-variation-ex">Alignment Variation (Ex)</Pair>
<Pair hl title="Replaces">Speak with animals of its kind, scry on familiar</Pair>
<Pair title="Passive Ability">A soulbound familiar's alignment is always at least partially neutral, although it can also be chaotic, evil, good, or lawful, depending on the creature whose soul provided the fragment rather than on the master's alignment (unless the master donates a fragment of her own soul).</Pair>
<Pair title="At 8th Level">It gains one of the following spell-like abilities, usable once per day and based on its alignment (caster level = its master's caster level - 3): chaotic neutral: <Link to="/spell/rage">rage</Link>; lawful neutral: <Link to="/spell/suggestion">suggestion</Link>; neutral: <Link to="/spell/deep_slumber">deep slumber</Link>; neutral evil: <Link to="/spell/inflict_serious_wounds">inflict serious wounds</Link>; or neutral good: <Link to="/spell/heroism">heroism</Link>.</Pair>
<Pair title="At 13th Level">Its caster level increases to its master's caster level.</Pair>
</Ability>
</>};
const _valet = {title: "Valet", jsx: <><h2 id="arc-familiar-valet-valet">Valet</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 213</Link>, <Link to="/source/animal_archive">Animal Archive pg. 21</Link><br/>A valet is a consummate personal servant, able to fetch, deliver, and perform for its master's every need.</p>
<Ability icon={["skills"]} id="arc-familiar-valet-undefined">
<Pair id="arc-familiar-valet-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/craft">Craft</Link> (INT), <Link to="/skill/perform">Perform</Link> (CHA), <Link to="/skill/profession">Profession</Link> (WIS)</Pair></Ability>
<Ability id="arc-familiar-valet-able-assistant-ex" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-valet-able-assistant-ex">Able Assistant (Ex)</Pair>
<Pair hl title="Replaces">Alertness</Pair>
<Pair title="Passive Ability">A valet's master treats the valet as if it had the <Link to="/feat/cooperative_crafting">Cooperative Crafting</Link> feat and shares Craft skills and item creation feats with the valet.</Pair>
</Ability>
<Ability id="arc-familiar-valet-magical-manipulation-sp" icon={["magic-swirl"]}>
<Pair single id="arc-familiar-valet-magical-manipulation-sp">Magical Manipulation (Sp)</Pair>
<Pair hl title="Replaces">Share spells</Pair>
<Pair title="Standard Action">A valet can cast <Link to="/spell/open_close">open/close</Link> and <Link to="/spell/prestidigitation">prestidigitation</Link> at will.</Pair>
</Ability>
<Ability id="arc-familiar-valet-teammate-ex" icon={["stairs-goal"]}>
<Pair single id="arc-familiar-valet-teammate-ex">Teammate (Ex)</Pair>
<Pair hl title="Replaces">Improved evasion</Pair>
<Pair title="Passive Ability">A valet is considered to have all the <Link to="/main/teamwork_feat">teamwork feats</Link> its master has.</Pair>
</Ability>
<Ability id="arc-familiar-valet-deliver-touch-spells-su" icon={["upgrade"]}>
<Pair single id="arc-familiar-valet-deliver-touch-spells-su">Deliver Touch Spells (Su)</Pair>
<Pair hl title="Alters">Deliver touch spells</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">When delivering a harmless touch spell to a willing creature, a valet can move before and after delivering the spell, as long as its total movement does not exceed its speed.</Pair>
</Ability>
<Ability id="arc-familiar-valet-deliver-aid-ex" icon={["upgrade"]}>
<Pair single id="arc-familiar-valet-deliver-aid-ex">Deliver Aid (Ex)</Pair>
<Pair hl title="Replaces">Speak with animals of its kind</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">A valet can move before and after using the aid another action, as long as its total movement does not exceed its speed.</Pair>
</Ability>
<Ability id="arc-familiar-valet-aide-to-all-ex" icon={["upgrade"]}>
<Pair single id="arc-familiar-valet-aide-to-all-ex">Aide to All (Ex)</Pair>
<Pair hl title="Replaces">Scry on familiar</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Full-Round Action">A valet can use the aid another action to grant up to three adjacent creatures bonuses from this action. Each bonus can apply to the same action or check or to different actions or checks.</Pair>
</Ability>
</>};
export default {ambassador:_ambassador,animal_exemplar:_animal_exemplar,arcane_amplifier:_arcane_amplifier,decoy:_decoy,egotist:_egotist,elemental_familiar:_elemental_familiar,emissary:_emissary,figment:_figment,infiltrator:_infiltrator,mascot:_mascot,mauler:_mauler,occult_messenger:_occult_messenger,parasite:_parasite,pilferer:_pilferer,prankster:_prankster,protector:_protector,sage:_sage,school_familiar:_school_familiar,soulbound_familiar:_soulbound_familiar,valet:_valet}