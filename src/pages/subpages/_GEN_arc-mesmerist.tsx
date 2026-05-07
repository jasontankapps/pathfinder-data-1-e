import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _aromaphile = {title: "Aromaphile", jsx: <><h2 id="arc-mesmerist-aromaphile-aromaphile">Aromaphile</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 18</Link><br/>Rather than employ the baleful glares of the typical mesmerist, aromaphiles hypnotize others using an array of sickeningly sweet scents developed from their unique ghoran physiology.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-mesmerist-aromaphile--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/ghoran">Ghoran</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-mesmerist-aromaphile-hypnotic-aroma-su" icon={["abstract-091","armor-downgrade"]}>
<Pair single id="arc-mesmerist-aromaphile-hypnotic-aroma-su">Hypnotic Aroma (Su)</Pair>
<Pair hl title="Replaces">Hypnotic stare, painful stare, towering ego</Pair>
<Pair title="Swift Action">An aromaphile can use unique aspects of ghoran biology to release intoxicating aromas in a 10-foot-radius <Link to="/misc/burst">burst</Link> centered on him. All creatures within this area, as well as creatures with <Link to="/umr/scent">scent</Link> within 30 feet, take a -2 penalty on Will saving throws. The aroma hovers around the aromaphile, moving with him, and lasts for 1 minute.</Pair>
<Pair title="At 8th Level">This penalty becomes -3.</Pair>
<Pair title="Special">The hypnotic aroma must be inhaled to be effective, and creatures that choose to <Link to="/misc/hold_their_breath">hold their breath</Link>, do not breathe, or are immune to inhaled poisons are immune to its effect.</Pair>
</Ability>
<Ability id="arc-mesmerist-aromaphile-debilitating-aroma-su" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-aromaphile-debilitating-aroma-su">Debilitating Aroma (Su)</Pair>
<Pair hl title="Replaces">Bold stare</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">An aromaphile can imbue his hypnotic aroma with another effect, chosen from those listed within the <em>bold stare</em> mesmerist class feature. However, they affect creatures affected by his <em>hypnotic aroma</em> for as long as they are affected by that ability.</Pair>
<Pair title="At 7th Level">The aromaphile selects a new <em>debilitating aroma.</em></Pair>
<Pair title="At 11th Level">The aromaphile selects a new <em>debilitating aroma.</em></Pair>
<Pair title="At 15th Level">The aromaphile selects a new <em>debilitating aroma.</em></Pair>
<Pair title="At 19th Level">The aromaphile selects a new <em>debilitating aroma.</em></Pair>
<Pair title="Special">The aromaphile chooses one option each time he gains a new debilitating aroma improvement, and the choice can't be changed later. The aromaphile can't choose the same debilitating aroma more than once unless otherwise noted.</Pair>
</Ability>
<Ability id="arc-mesmerist-aromaphile-aromatic-manipulation-su" icon={["magic-palm","heart-plus","armor-downgrade"]}>
<Pair single id="arc-mesmerist-aromaphile-aromatic-manipulation-su">Aromatic Manipulation (Su)</Pair>
<Pair hl title="Replaces">Mental potency</Pair>
<Pair hl title="Alters">Touch treatment</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability"><p>The aromaphile can touch a creature affected by his <em>hypnotic aroma</em> to alter its mental state. This functions as the <em>touch treatment</em> class feature, except the aromaphile cannot remove the <em>confused, cowering,</em> or <em>stunned</em> conditions, and he cannot <em>break enchantments</em> using this ability. Instead, he can remove the <Link to="/misc/fatigued">fatigued</Link> condition at 3rd level and the <Link to="/misc/exhausted">exhausted</Link> condition at 10th level.</p>
<p>An aromaphile can also use this ability to inflict hampering conditions on a target by touching it. Initially, he can cause his target to become <Link to="/misc/fascinated">fascinated</Link> by his <em>aroma,</em> but he gains more abilities as he gains levels.</p>
</Pair>
<Pair title="At 6th Level">His touch can deaden the target's emotions (as per <Link to="/spell/calm_emotions">calm emotions</Link>).</Pair>
<Pair title="At 10th Level">His touch can cause the target to become <Link to="/misc/stunned">stunned</Link>.</Pair>
<Pair title="At 14th Level">His touch can cause the target to fall asleep (as per <Link to="/spell/deep_slumber">deep slumber</Link>, except the Hit Die limit is equal to the aromaphile's level + 2).</Pair>
<Pair title="Special">The target can attempt a Will save to negate these ill effects (DC = 10 + half the aromaphile's level + the aromaphile's Charisma modifier). On a failed save, the target gains the chosen condition for a number of rounds equal to the aromaphile's level. Each round that the target is affected, it can attempt a new Will save at the same DC to end the effect early. If the target succeeds at such a save, its turn immediately ends.</Pair>
</Ability>
</>};
const _autohypnotist = {title: "Autohypnotist", jsx: <><h2 id="arc-mesmerist-autohypnotist-autohypnotist">Autohypnotist</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 17</Link><br/>An autohypnotist has incredibly powerful psychic abilities that he can't entirely control. As a result, maintaining his powers against an opponent hinders him as much as his target.</p>
<Ability id="arc-mesmerist-autohypnotist-autohypnosis-su" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-mesmerist-autohypnotist-autohypnosis-su">Autohypnosis (Su)</Pair>
<Pair hl title="Alters">Hypnotic stare</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>An autohypnotist has mastered techniques that make his <em>hypnotic stare</em> ability more potent, but at a terrible cost - the autohypnotist succumbs to his own power when he uses it. Whenever the autohypnotist focuses his stare on an opponent, the penalties that opponent takes from the <em>hypnotic stare</em> (as well as any <em>bold stare</em> improvements or stare feats that the autohypnotist has) increase by 1. However, the autohypnotist takes the same penalties as his target while focusing his stare, including those of any <em>bold stare</em> improvements he has.</p>
<p>An autohypnotist can reduce or negate the penalty he imposes upon himself with his <em>hypnotic stare,</em> but doing so allows his opponent an opportunity to escape from the stare as well. The autohypnotist can reduce the penalty he takes from his <em>hypnotic stare</em> ability by <Link to="/misc/half">half</Link> for 1 round as a <strong className="hl">swift action</strong>. If he does so, there is a 25% chance that his <em>hypnotic stare</em> ends altogether. Alternatively, he can choose to negate the penalty he takes from his <em>hypnotic stare</em> for 1 round, but his <em>hypnotic stare</em> then has a 50% chance of ending.</p>
</Pair>
</Ability>
<Ability id="arc-mesmerist-autohypnotist-wide-stare-su" icon={["stairs-goal","abstract-091"]}>
<Pair single id="arc-mesmerist-autohypnotist-wide-stare-su">Wide Stare (Su)</Pair>
<Pair hl title="Replaces">Mental potency</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">Whenever an autohypnotist is focusing his stare on a foe, he can broaden his <em>hypnotic stare.</em> When he does so, all creatures within 10 feet of his opponent take penalties from the mesmerist's <em>hypnotic stare</em> and <em>bold stare</em> class features as if he were maintaining his <em>hypnotic stare</em> against each of those creatures, except such creatures treat his <em>hypnotic stare</em> penalty as if it were 2 lower.</Pair>
<Pair title="Special">When the autohypnotist uses this ability, he cannot exclude allies or any other creatures from this effect. If the autohypnotist's <em>hypnotic stare</em> ends for the focused opponent, this effect ends.</Pair>
</Ability>
</>};
const _chart_caster = {title: "Chart Caster", jsx: <><h2 id="arc-mesmerist-chart_caster-chart-caster">Chart Caster</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 10</Link><br/>Lirgeni astrologists would divine their futures by consulting star charts, but some had no talent for astrology and simply faked their results. When prophecy died with Aroden, a few Lirgeni survivors continued with this "reliable" method.</p>
<Ability icon={["skills"]} id="arc-mesmerist-chart_caster-undefined">
<Pair id="arc-mesmerist-chart_caster-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT)</Pair></Ability>
<Ability id="arc-mesmerist-chart_caster-subject-of-the-stars-su" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-mesmerist-chart_caster-subject-of-the-stars-su">Subject of the Stars (Su)</Pair>
<Pair hl title="Alters">Mesmerist tricks, manifold tricks</Pair>
<Pair title="Ability"><p>A chart caster cannot implant tricks as a standard action. Instead, he can spend 5 minutes to implant multiple tricks in a single willing target. The number of tricks he can implant per day is unchanged from the regular mesmerist class, but he can apply as many of those tricks as he chooses on a single use of this ability.</p>
<p>If implanting tricks in himself, the caster merely spends 5 minutes in contemplation; otherwise, he consults star charts while ritually asking the creature questions, and still must touch them to do so. He can select multiple instances of the same trick to implant in a single subject.</p>
</Pair>
<Pair title="At 5th Level">A chart caster can implant 2 different subjects with multiple instances of one trick each and can choose a different trick for each subject.</Pair>
<Pair title="At 9th Level">A chart caster can implant 3 different subjects with multiple instances of one trick each and can choose a different trick for each subject.</Pair>
<Pair title="At 13th Level">A chart caster can implant 4 different subjects with multiple instances of one trick each and can choose a different trick for each subject.</Pair>
<Pair title="At 17th Level">A chart caster can implant 5 different subjects with multiple instances of one trick each and can choose a different trick for each subject.</Pair>
<Pair title="Special">Using this ability again on an existing subject or to implant any trick on a new subject ends all previously implanted tricks. The caster can trigger only one instance of the same trick on a given subject per round.</Pair>
</Ability>
<Ability id="arc-mesmerist-chart_caster-feign-destiny-su" icon={["upgrade","shield-reflect"]}>
<Pair single id="arc-mesmerist-chart_caster-feign-destiny-su">Feign Destiny (Su)</Pair>
<Pair hl title="Replaces">Touch treatment</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">Charisma modifier times/day</Pair>
<Pair title="Immediate Action">A chart caster can grant an ally a +1 competence bonus on a failed attack roll, saving throw, or skill check by reminding his ally of their destined success. The chart caster must use his ability within 1 round of the failed check, and his ally must be within 30 feet of him when he does. If the bonus is enough to turn the failure into a success, the ally succeeds at the check.</Pair>
<Pair title="At 6th Level">The bonus becomes +2.</Pair>
<Pair title="At 10th Level">The bonus increases to +3.</Pair>
</Ability>
</>};
const _cult_master = {title: "Cult Master", jsx: <><h2 id="arc-mesmerist-cult_master-cult-master">Cult Master</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 96</Link><br/>The leaders of some cults are simply charlatans, bathing in the adulation of their followers. Others believe themselves to be truly in touch with an unknown power, bringing their unique messages to those willing to follow and obey them.</p>
<Ability id="arc-mesmerist-cult_master-insidious-personality-ex" icon={["upgrade"]}>
<Pair single id="arc-mesmerist-cult_master-insidious-personality-ex">Insidious Personality (Ex)</Pair>
<Pair hl title="Replaces">Consummate liar</Pair>
<Pair title="Passive Ability">A cult master adds 1/2 his class level (minimum 1) as a bonus on all Diplomacy checks.</Pair>
</Ability>
<Ability id="arc-mesmerist-cult_master-fanatical-stare-su" icon={["upgrade","shield-reflect"]}>
<Pair single id="arc-mesmerist-cult_master-fanatical-stare-su" flavor="A cult master can turn his gaze on a creature to fill it with fervent belief in the cult master.">Fanatical Stare (Su)</Pair>
<Pair hl title="Replaces">Painful stare</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">The target of the gaze gains a competence bonus on attack rolls and weapon damage rolls. This bonus is equal to 1 + <Link to="/misc/one_sixth">one-sixth</Link> of his mesmerist level.</Pair>
<Pair title="Passive Ability">Instead of taking the <em>hypnotic stare's</em> penalty on Will saves, the target gains a bonus of an equal amount on Will saves. The bonuses don't apply to attacks against the cult master or on saves against the cult master's spells or abilities. The cult master can also suppress any penalties inflicted by his stare for the target.</Pair>
</Ability>
<Ability id="arc-mesmerist-cult_master-cult-tricks-su" extraClasses="hasSubs" icon={["stairs-goal","info"]}>
<Pair single id="arc-mesmerist-cult_master-cult-tricks-su">Cult Tricks (Su)</Pair>
<Pair title="Info">The following new tricks can be selected by a cult master. These tricks can be implanted only in a cohort or follower of the cult master.</Pair>
</Ability>
<Ability id="arc-mesmerist-cult_master-double" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-mesmerist-cult_master-double">Double</Pair>
<Pair title="Ability">An illusion makes either the cult master's cohort or one of his followers appear to be him. The cult master can trigger this trick when he is targeted by an attack, provided he is adjacent to the subject, to give the attack a 50% miss chance. If the attack misses the cult master, it targets the subject instead. This is an illusion (glamer) effect.</Pair>
</Ability>
<Ability id="arc-mesmerist-cult_master-extol" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-mesmerist-cult_master-extol">Extol</Pair>
<Pair hl title="Alters">Mesmerist tricks</Pair>
<Pair title="Ability">A mental compulsion causes a cohort or follower to extol the virtues of the cult master. The cult master can trigger this trick whenever he attempts a Diplomacy check, as long as he is within 60 feet of the subject. The subject takes the <Link to="/rule/aid_another">aid another</Link> action on the cult master's Diplomacy check. If the subject is successful, the cult master gains a +4 bonus on his check. This is an enchantment (compulsion) effect.</Pair>
</Ability>
<Ability id="arc-mesmerist-cult_master-false-healing-su" icon={["heart-plus"]}>
<Pair single id="arc-mesmerist-cult_master-false-healing-su" flavor="A cult master can provide temporary healing by using his psychic powers to trick the mind.">False Healing (Su)</Pair>
<Pair hl title="Replaces">3rd- and 6th-level touch treatments</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">The cult master must be able to touch his target. The cult master grants a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to 1d8 + his Charisma modifier to the target.</Pair>
<Pair title="At 6th Level">The cult master can either grant a number of temporary hit points equal to 2d8 + his Charisma modifier to the target or temporarily remove 1d4 points of <Link to="/rule/ability_damage">ability damage</Link>.</Pair>
<Pair title="Special">This can be used as a <strong className="hl">swift action</strong> if the cult master uses it on himself. A creature can receive the effect of the <em>false healing</em> only once per day. The temporary hit points or reduction in ability damage lasts a number of hours equal to the cult master's class level.</Pair>
</Ability>
<Ability id="arc-mesmerist-cult_master-faithful-followers-ex" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-cult_master-faithful-followers-ex" flavor="A cult master begins to attract followers to his espoused beliefs, thanks to his magnetic personality.">Faithful Followers (Ex)</Pair>
<Pair hl title="Replaces">7th-level bold stare</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">The cult master gains <Link to="/feat/leadership">Leadership</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-mesmerist-cult_master-fanatical-devotion-ex" icon={["upgrade"]}>
<Pair single id="arc-mesmerist-cult_master-fanatical-devotion-ex" flavor="A cult master has manipulated his cohort and followers into becoming utterly devoted to him.">Fanatical Devotion (Ex)</Pair>
<Pair hl title="Replaces">10th- and 14th-level touch treatments</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Passive Ability">The cult master no longer takes a penalty to his Leadership score for being aloof or cruel. Additionally, the DCs of all enchantment spells the cult master casts on his cohort and followers increase by 4.</Pair>
<Pair title="At 14th Level">The cult master no longer takes a penalty to his Leadership score for any cohorts or followers he has killed or caused to be killed.</Pair>
</Ability>
<Ability id="arc-mesmerist-cult_master-masterful-cult-tricks-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-cult_master-masterful-cult-tricks-su">Masterful Cult Tricks (Su)</Pair>
<Pair title="Prerequisites">12th-level mesmerist</Pair>
<Pair hl title="Alters">Masterful tricks</Pair>
<Pair title="Info">The following new master tricks can be selected by any cult master of 12th level or higher. These tricks can be implanted only in a cohort or follower of the cult master.</Pair>
</Ability>
<Ability id="arc-mesmerist-cult_master-avenge-me" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-mesmerist-cult_master-avenge-me">Avenge Me</Pair>
<Pair title="Ability">The cult master creates a compulsion for one of his followers to avenge him. Whenever the cult master takes hit point damage from an attack, he can trigger this trick as long as he is within 60 feet of the subject. The subject is immediately affected as if by the <Link to="/spell/rage">rage</Link> spell for 1 round per mesmerist level.</Pair>
</Ability>
<Ability id="arc-mesmerist-cult_master-die-for-me" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-mesmerist-cult_master-die-for-me">Die for Me</Pair>
<Pair title="Ability">The cult master instills within either his cohort or one of his followers the desire to give her life for him. The cult master can trigger this trick whenever he would take hit point damage from an attack, spell, or effect and the subject is with 60 feet of him. Half the damage is psychically transferred to the subject. This is an enchantment (compulsion) effect.</Pair>
</Ability>
<Ability id="arc-mesmerist-cult_master-reborn-su" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="arc-mesmerist-cult_master-reborn-su" flavor="A cult master can ensure his own survival upon his death.">Reborn (Su)</Pair>
<Pair hl title="Replaces">Rule minds</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">The cult master can perform a 1-hour ceremony costing 5,000 gp in rare materials in which he uses his psychic powers to implant a small portion of his essence into his cohort, who must be a minimum of 17th level. When the cult master dies, in 7 days the cohort physically and mentally transforms into the cult master as if <Link to="/spell/clone">clone</Link> had been cast, except that the cohort's body takes the place of the inert body.</Pair>
<Pair title="Special">The cult master can't use this ability again until he gains a new cohort of at least 17th level and performs the necessary ceremony. The cohort can't be brought back to life except through <Link to="/spell/miracle">miracle</Link> or <Link to="/spell/wish">wish</Link>.</Pair>
</Ability>
</>};
const _dreamstalker = {title: "Dreamstalker", jsx: <><h2 id="arc-mesmerist-dreamstalker-dreamstalker">Dreamstalker</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 60</Link><br/>Many mesmerists concentrate their studies on conscious, rational thought, but dreamstalkers instead delve into the unleashed unconscious mind that wanders free in dreams.</p>
<Ability id="arc-mesmerist-dreamstalker-dreams-of-pain" icon={["broken-shield"]}>
<Pair single id="arc-mesmerist-dreamstalker-dreams-of-pain">Dreams of Pain</Pair>
<Pair hl title="Alters">Painful stare</Pair>
<Pair title="Info">A dreamstalker's <em>painful stare</em> deals nonlethal damage.</Pair>
</Ability>
<Ability id="arc-mesmerist-dreamstalker-somnomancer" icon={["stairs-goal","spell-book","magic-swirl"]}>
<Pair single id="arc-mesmerist-dreamstalker-somnomancer">Somnomancer</Pair>
<Pair hl title="Replaces">1st-level mesmerist trick</Pair>
<Pair hl title="Alters">Mesmerist tricks</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A dreamstalker gains the <Link to="/hex/slumber">slumber</Link> hex. Furthermore, when she would normally gain a new mesmerist trick, she can learn additional spells instead. Each time she does so, she adds two of the following spells of a level she can currently cast to her list of spells known.</Pair>
<Pair plain title="1st"><Link to="/spell/oneiric_horror">Oneiric horror</Link>, <Link to="/spell/sleep">sleep</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/detect_mindscape">Detect mindscape</Link>, <Link to="/spell/greater_oneiric_horror">greater oneiric horror</Link>, <Link to="/spell/instigate_psychic_duel">instigate psychic duel</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/deep_slumber">Deep slumber</Link>, <Link to="/spell/minor_dream">minor dream</Link></Pair>
<Pair plain title="4th"><Link to="/spell/create_mindscape">Create mindscape</Link>, <Link to="/spell/dream">dream</Link>, <Link to="/spell/forgetful_slumber">forgetful slumber</Link>, <Link to="/spell/mindscape_door">mindscape door</Link>, <Link to="/spell/sleepwalk">sleepwalk</Link>, <Link to="/spell/sleepwalking_suggestion">sleepwalking suggestion</Link></Pair>
<Pair plain title="5th"><Link to="/spell/cloak_of_dreams">Cloak of dreams</Link>, <Link to="/spell/dream_council">dream council</Link>, <Link to="/spell/dream_scan">dream scan</Link>, <Link to="/spell/symbol_of_sleep">symbol of sleep</Link>, <Link to="/spell/waves_of_fatigue">waves of fatigue</Link></Pair>
<Pair plain title="6th"><Link to="/spell/dream_travel">Dream travel</Link>, <Link to="/spell/greater_create_mindscape">greater create mindscape</Link>, <Link to="/spell/waves_of_exhaustion">waves of exhaustion</Link></Pair>
<Pair title="At 10th Level">She can take the <Link to="/hex/nightmares">nightmares</Link> or <Link to="/hex/vision">vision</Link> hex instead of gaining a new mesmerist trick.</Pair>
<Pair title="At 18th Level">She can select the <Link to="/hex/eternal_slumber">eternal slumber</Link> hex in place of a mesmerist trick.</Pair>
<Pair title="Special">The dreamstalker's effective witch level is equal to her mesmerist level, and she can activate a hex only by expending two daily uses of mesmerist tricks. The save DCs for her hexes are Charisma-based.</Pair>
</Ability>
<Ability id="arc-mesmerist-dreamstalker-sleepless-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-mesmerist-dreamstalker-sleepless-ex">Sleepless (Ex)</Pair>
<Pair hl title="Replaces">Towering ego</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A dreamstalker gains immunity to sleep effects and a bonus equal to her Charisma bonus on saving throws against <Link to="/misc/fatigue">fatigue</Link> and <Link to="/misc/exhaustion">exhaustion</Link>. She loses both benefits when under an effect that would prevent her from providing an <Link to="/rule/emotion_component">emotion component</Link>.</Pair>
</Ability>
<Ability id="arc-mesmerist-dreamstalker-touch-of-night-su" icon={["broken-shield"]}>
<Pair single id="arc-mesmerist-dreamstalker-touch-of-night-su">Touch of Night (Su)</Pair>
<Pair hl title="Alters">Touch treatment</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A dreamstalker can't remove shaken, frightened, sickened, cowering, nauseated, or panicked conditions using her <em>touch treatment.</em> However, she can remove fatigue or magical sleep (other than hard-to-remove magical sleep such as the <em>eternal slumber</em> hex) at 3rd level, <Link to="/misc/staggered">staggered</Link> at 6th level, and <em>exhausted</em> at 10th level. As normal, removing fatigue or exhaustion only removes the condition, not the underlying cause, such as lack of sleep.</Pair>
</Ability>
<Ability id="arc-mesmerist-dreamstalker-dreamwalker-su" icon={["upgrade"]}>
<Pair single id="arc-mesmerist-dreamstalker-dreamwalker-su">Dreamwalker (Su)</Pair>
<Pair hl title="Replaces">Manifold tricks</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A dreamstalker treats <Link to="/rule/dreamscape">dreamscapes</Link> as a <Link to="/ability/favored_terrain">favored terrain</Link>, as per the <Link to="/class/ranger">ranger</Link> ability, gaining a +2 bonus that increases by 2 every 4 mesmerist levels after 5th. While in a dreamscape, she also treats any creature from the <Link to="/rule/dimension_of_dreams_oa">Dimension of Dreams</Link> (including dreamed figments) as her <Link to="/ability/favored_enemy">favored enemy</Link>, with a bonus equal to 1/2 her favored terrain bonus.</Pair>
</Ability>
<Ability id="arc-mesmerist-dreamstalker-tramautic-spell" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-dreamstalker-tramautic-spell">Tramautic Spell</Pair>
<Pair hl title="Replaces">Glib lie</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A dreamstalker gains <Link to="/feat/traumatic_spell">Traumatic Spell</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _enigma = {title: "Enigma", jsx: <><h2 id="arc-mesmerist-enigma-enigma">Enigma</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 36</Link><br/>An enigma spends his life dedicated to developing psychic abilities that allow him to operate unnoticed. While the target of a mesmerist's <em>hypnotic stare</em> might not realize that the mesmerist is the source of the strange thoughts invading his mind, an enigma takes that mental obfuscation to a more extreme level. Enigmas often end up serving as master spies and infiltration experts.</p>
<Ability id="arc-mesmerist-enigma-solipsism-su" icon={["armor-upgrade"]}>
<Pair single id="arc-mesmerist-enigma-solipsism-su">Solipsism (Su)</Pair>
<Pair hl title="Alters">Hypnotic stare</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">Whenever the enigma uses <em>hypnotic stare</em> on a creature, instead of applying a penalty on the creature's saving throws, the enigma begins to fade from the creature's view. Until the enigma's next turn, the enigma gains the effects of <Link to="/rule/concealment">concealment</Link> against that creature (unless it can see invisible creatures). Starting on the enigma's next turn, he gains the effect of <Link to="/spell/invisibility">invisibility</Link> against that creature. These effects last as long as the enigma continues to use his <em>hypnotic stare,</em> but if he takes an action that would end <em>invisibility,</em> it ends his <em>hypnotic stare</em> immediately. The enigma can reinstate this effect whenever he wishes, but each time it begins with 1 round of concealment.</Pair>
<Pair title="At 8th Level">Attacks that would end <em>invisibility</em> do not end the enigma's <em>hypnotic stare,</em> and after 1 round of concealment, he gains the benefits of <Link to="/spell/greater_invisibility">greater invisibility</Link> against the target of his stare.</Pair>
<Pair title="Special">For the purpose of <em>bold stare</em> improvements, the enigma's <em>hypnotic stare</em> always has a penalty of -1.</Pair>
</Ability>
<Ability id="arc-mesmerist-enigma-veiled-steps" icon={["upgrade"]}>
<Pair single id="arc-mesmerist-enigma-veiled-steps">Veiled Steps</Pair>
<Pair hl title="Replaces">Consummate liar</Pair>
<Pair title="Passive Ability">An enigma gains a bonus to his Stealth checks equal to 1/4 his mesmerist level (minimum +1).</Pair>
</Ability>
<Ability id="arc-mesmerist-enigma-enigmatic-stare-su" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-enigma-enigmatic-stare-su">Enigmatic Stare (Su)</Pair>
<Pair hl title="Replaces">Painful stare</Pair>
<Pair title="Passive Ability">The target of an enigma's <em>hypnotic stare</em> takes a -4 penalty on Perception checks to notice the enigma.</Pair>
<Pair title="At 8th Level">This penalty increases to - 6.</Pair>
</Ability>
<Ability id="arc-mesmerist-enigma-transfer-affliction-su" icon={["magic-palm"]}>
<Pair single id="arc-mesmerist-enigma-transfer-affliction-su">Transfer Affliction (Su)</Pair>
<Pair hl title="Alters">Touch treatment</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Standard Action">The enigma can afflict others with the harmful conditions that he endures. This ability functions as the <em>touch treatment</em> ability, but can only be used to remove harmful conditions from the enigma, not other creatures. In order to remove these harmful effects, the enigma must succeed at a touch attack against another creature. The creature touched gains the chosen harmful effect for whatever duration it would have afflicted the enigma and the effect is removed from the enigma, unless the creature succeeds at a Will save (DC = 10 + 1/2 the enigma's mesmerist level + his Charisma modifier). Using this ability is always a standard action.</Pair>
<Pair title="At 14th Level">The enigma can instead expend one use of <em>touch treatment</em> to replicate the effects of <Link to="/spell/bestow_curse">bestow curse</Link>, delivered as a touch attack as part of using this ability.</Pair>
<Pair title="Special"><em>Transfer affliction</em> is a mind-affecting effect.</Pair>
</Ability>
<Ability id="arc-mesmerist-enigma-sneak-attack-ex" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-enigma-sneak-attack-ex">Sneak Attack (Ex)</Pair>
<Pair hl title="Replaces">Manifold tricks</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">An enigma gains the <Link to="/ability/sneak_attack">sneak attack</Link> ability of a rogue, starting at +1d6 damage.</Pair>
<Pair title="At 9th Level">Sneak attack damage becomes +2d6.</Pair>
<Pair title="At 13th Level">Sneak attack damage increases to +3d6.</Pair>
<Pair title="At 17th Level">Sneak attack damage becomes +4d6.</Pair>
</Ability>
<Ability id="arc-mesmerist-enigma-detection-void-su" icon={["armor-upgrade"]}>
<Pair single id="arc-mesmerist-enigma-detection-void-su">Detection Void (Su)</Pair>
<Pair hl title="Replaces">Glib lie</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">An enigma can elude <Link to="/main/detect_spells">detection spells</Link> (spells with "detect" in their name). A creature using this sort of magic against the enigma must succeed at a caster level check against a DC equal to 15 + the enigma's class level to succeed (as if the enigma was under the effect of a <Link to="/spell/nondetection">nondetection</Link> spell); failure means the magic fails to detect the enigma, as if he did not exist.</Pair>
</Ability>
<Ability id="arc-mesmerist-enigma-absentia-su" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-enigma-absentia-su">Absentia (Su)</Pair>
<Pair hl title="Replaces">Rule minds</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">All creatures adjacent to the enigma subconsciously ignore him. Adjacent creatures are always treated as <Link to="/rule/flat_footed">flat-footed</Link> to the enigma and are not considered to be directly observing the enigma for the purpose of the Stealth skill. This effect ends immediately if the enigma makes a successful attack against any creature, but automatically resumes at the beginning of his next turn.</Pair>
</Ability>
</>};
const _eyebiter = {title: "Eyebiter", jsx: <><h2 id="arc-mesmerist-eyebiter-eyebiter">Eyebiter</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 36</Link><br/>Mesmerists focus their abilities through the eyes, drawing forth their power as the windows to the mind and soul. Eyebiters take this a step further. An eyebiter's eyes become so infused with psychic might that they can leave the eyebiter's body and move about on their own.</p>
<Ability id="arc-mesmerist-eyebiter-eyeball-familiar-ex" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-mesmerist-eyebiter-eyeball-familiar-ex">Eyeball Familiar (Ex)</Pair>
<Pair hl title="Replaces">Consummate liar, mesmerist trick gained at 1st level</Pair>
<Pair title="Ability">An eyebiter imbues one of his eyes with limited sentience, so that he can pluck it out and allow it to move on its own. The <em>eyeball familiar</em> functions similarly to the <Link to="/discovery/tumor_familiar">tumor familiar</Link> alchemist discovery except as follows. The <em>eyeball familiar</em> does not have fast healing. The <em>eyeball familiar</em> doesn't resemble an animal, and its size is Fine for a Medium or smaller eyebiter (or one size category larger for every size category the eyebiter is larger than Medium). It has a fly speed of 20 feet (perfect maneuverability) and no physical attacks (though it can still deliver touch spells once the eyebiter has reached 3rd level). The eyeball has a Strength score of 1, a Dexterity score of 12, and a Constitution score of 10. It has no set Hit Die, base saves, or skill ranks of its own, though it uses its master's when a familiar normally would. It doesn't grant its master any familiar bonus, nor can it ever be an <em>improved familiar.</em></Pair>
<Pair title="Special">Whenever the eyebiter's <em>eyeball familiar</em> leaves his body, he is <Link to="/misc/dazzled">dazzled</Link> until it returns (if it is destroyed, the eyebiter loses that eye until he gains the effects of a <Link to="/spell/regenerate">regeneration</Link>). An eyebiter must have at least one eye to use this ability, and an eyebiter with only one eye is <Link to="/misc/blinded">blinded</Link> instead of dazzled until his familiar returns.</Pair>
</Ability>
<Ability id="arc-mesmerist-eyebiter-ocular-occlusion-su" extraClasses="hasSubs" icon={["magic-palm","smoking-finger"]}>
<Pair single id="arc-mesmerist-eyebiter-ocular-occlusion-su">Ocular Occlusion (Su)</Pair>
<Pair hl title="Replaces">All instances of touch treatment</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">An eyebiter gains the ability to cloud the sight of others with a melee touch attack. A successful Will save negates the effect (DC = 10 + 1/2 the eyebiter's mesmerist level + his Charisma modifier); this is a mind-affecting ability.</Pair>
<Pair title="Special">If the eyebiter chooses to use an <em>ocular occlusion</em> of a lower level than the highest-level effect he has gained, he can instead use a standard action to target a creature within 30 feet with that effect as a ranged touch attack.</Pair>
</Ability>
<Ability id="arc-mesmerist-eyebiter-clouded-vision" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-eyebiter-clouded-vision">Clouded Vision</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The eyebiter can cause the target to become dazzled for 1 minute and suffer a 20% miss chance on all attacks the target makes against opponents within 60 feet. Opponents more than 60 feet away have <Link to="/rule/concealment">total concealment</Link> from the target.</Pair>
</Ability>
<Ability id="arc-mesmerist-eyebiter-cause-or-cure-blindness" extraClasses="subAbility" icon={["armor-downgrade","heart-plus"]}>
<Pair single id="arc-mesmerist-eyebiter-cause-or-cure-blindness">Cause or Cure Blindness</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">The eyebiter can blind the target for 1 minute or affect it as per the spell <Link to="/spell/remove_blindness">remove blindness</Link>.</Pair>
</Ability>
<Ability id="arc-mesmerist-eyebiter-eyeless-horror" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-eyebiter-eyeless-horror">Eyeless Horror</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">The eyebiter creates a powerful illusion that causes the target's eyes to appear as if they have been ripped out, with blood pouring from the sockets. The target is blinded and <Link to="/misc/shaken">shaken</Link> for 1 round per the eyebiter's mesmerist level, taking 1d4 points of nonlethal damage each round. The target can attempt a second Will save when attacked to negate the shaken effect and the nonlethal damage.</Pair>
</Ability>
<Ability id="arc-mesmerist-eyebiter-spellblight" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-eyebiter-spellblight">Spellblight</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">The eyebiter can afflict the target with the <em>ebon eyes</em> or the <em>hemoculysis</em> <Link to="/rule/minor_spellblights">minor spellblight</Link>, or the <em>eldritch cataracts</em> <Link to="/rule/major_spellblights">major spellblight</Link>.</Pair>
</Ability>
<Ability id="arc-mesmerist-eyebiter-staring-eye-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-mesmerist-eyebiter-staring-eye-su">Staring Eye (Su)</Pair>
<Pair hl title="Replaces">Mental potency</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">An eyebiter can expend one use of his daily mesmerist tricks to either see through his <em>eyeball familiar</em> as if it were an <Link to="/spell/arcane_eye">arcane eye</Link>, or to use his <em>hypnotic stare</em> (including related abilities like <em>painful stare</em> and <em>bold stare</em>), as well as any <Link to="/umr/gaze">gaze</Link> attack he possesses (like <Link to="/spell/burning_gaze">burning gaze</Link> and <Link to="/spell/eyebite">eyebite</Link>) through his <em>eyeball familiar,</em> as if he were at its location.</Pair>
</Ability>
<Ability id="arc-mesmerist-eyebiter-omnivisual-ex" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="arc-mesmerist-eyebiter-omnivisual-ex">Omnivisual (Ex)</Pair>
<Pair hl title="Replaces">Glib lie</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">An eyebiter's roving <em>eyeball familiar</em> is constantly watching in all directions. As long as his <em>eyeball familiar</em> is outside his body and near enough to see the same things (such as being in the same room), the eyebiter gains <Link to="/umr/all_around_vision">all-around vision</Link> and cannot be <Link to="/rule/flanked">flanked</Link>.</Pair>
</Ability>
</>};
const _fey_trickster = {title: "Fey Trickster", jsx: <><h2 id="arc-mesmerist-fey_trickster-fey-trickster">Fey Trickster</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 37</Link><br/>Most mesmerists draw psychic power from the Astral Plane, but a few gain their powers in an unusual way: from a brush with the fey. Prisoner-guests of the fey, these souls find themselves changed when they return to the mortal world, infused with the eldritch energy of their former hosts.</p>
<Ability icon={["skills"]} id="arc-mesmerist-fey_trickster-undefined">
<Pair id="arc-mesmerist-fey_trickster-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/handle_animal">Handle Animal</Link> (CHA), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Appraise, Knowledge (dungeoneering), Profession</Pair></Ability>
<Ability id="arc-mesmerist-fey_trickster-natures-lure" icon={["magic-swirl"]}>
<Pair single id="arc-mesmerist-fey_trickster-natures-lure">Nature's Lure</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Ability">Rather than casting psychic spells from the mesmerist spell list, a fey trickster casts divine spells drawn from the <Link to="/main/spells_hunter">druid and ranger spell lists</Link>, in just the same way as a hunter does. This means that she gains orisons instead of knacks. This doesn't change her number of spells per day or spells known. The fey trickster's mesmerist spells and spell-like abilities count as if they were fey spell-like abilities for the purpose of effects like <em>resist nature's lure</em> that apply against fey spell-like abilities.</Pair>
</Ability>
<Ability id="arc-mesmerist-fey_trickster-feytouched-ex" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="arc-mesmerist-fey_trickster-feytouched-ex">Feytouched (Ex)</Pair>
<Pair hl title="Replaces">Towering ego</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A fey trickster's time with the fey has granted her strange powers, as well as resistance to further fey mischief. The fey trickster gains the druid's <Link to="/ability/resist_natures_lure">resist nature's lure</Link> and <Link to="/ability/woodland_stride">woodland stride</Link> abilities, and she counts as both <Link to="/type/fey">fey</Link> and her original creature type for the purpose of spells and effects.</Pair>
</Ability>
<Ability id="arc-mesmerist-fey_trickster-fey-veil-sp-su" icon={["upgrade"]}>
<Pair single id="arc-mesmerist-fey_trickster-fey-veil-sp-su" flavor={["A fey trickster's physical form begins to shift, as she gains some of the impossible allure of the fey. At the same time, she begins able to use ",{"tag":"em","content":"fey veils","props":{}}," to assist herself and her allies in befuddling and bewitching their opponents."]}>Fey Veil (Sp, Su)</Pair>
<Pair hl title="Replaces">Touch treatment</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Ability">Using the ability is a <strong className="hl">standard action</strong> (or a <strong className="hl">swift action</strong> if the fey trickster calls up a <em>veil</em> over herself). If she targets another ally, the fey trickster must be able to contact the ally bodily, usually with a kiss. When she uses her <em>fey veil,</em> the fey trickster subtly alters the appearance and aura of her target, granting one of the powers allowed by her mesmerist level.</Pair>
<Pair title="At 3rd Level">She can grant the ally a +2 circumstance bonus on her choice of Diplomacy, Intimidate, or Handle Animal checks for 1 minute.</Pair>
<Pair title="At 6th Level">She can change the ally's form so thoroughly that the ally gains a +10 bonus on Disguise checks until the next sunrise (similar to the bonus from <Link to="/spell/disguise_self">disguise self</Link>, but it also disguises touch and sound, and it doesn't allow a saving throw to disbelieve).</Pair>
<Pair title="At 10th Level">The fey trickster can make the ally and her aura so attractive or repulsive for 10 minutes that the <em>veil</em> automatically adjusts the moods of those who see the ally and fail their saving throw, as <Link to="/spell/telempathic_projection">telempathic projection</Link>.</Pair>
<Pair title="At 14th Level">A fey trickster can create a <em>veil</em> so powerful that it fools even reality, granting the full effects of both the 6th-level <em>fey veil</em> and <Link to="/spell/alter_self">alter self</Link> to the target for 1 hour. Each of these abilities, even the 14th-level ability, is an illusion and glamer effect, though the last ability counts as a size-changing <Link to="/spelldef/polymorph">polymorph</Link> effect for the limit of only one polymorph or size-changing effect on a creature.</Pair>
</Ability>
<Ability id="arc-mesmerist-fey_trickster-one-with-the-fey" extraClasses="hasSubs" icon={["magic-swirl","stairs-goal"]}>
<Pair single id="arc-mesmerist-fey_trickster-one-with-the-fey">One with the Fey</Pair>
<Pair hl title="Replaces">Rule minds</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">A fey trickster fully transforms into a fey, though she can still choose to count as her original creature type as well whenever it would be advantageous to her (such as if she is a humanoid and wishes to be affected by <Link to="/spell/reduce_person">reduce person</Link>). She gains low-light vision as well as an additional ability depending on which type of fey she chooses to most closely associate with. Some examples follow.</Pair>
</Ability>
<Ability id="arc-mesmerist-fey_trickster-erlking" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-mesmerist-fey_trickster-erlking">Erlking</Pair>
<Pair title="Passive Ability">The fey trickster is constantly under the effects of <Link to="/spell/haste">haste</Link>.</Pair>
</Ability>
<Ability id="arc-mesmerist-fey_trickster-nymph" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-fey_trickster-nymph">Nymph</Pair>
<Pair title="Ability">The fey trickster gains the <Link to="/monster/nymph">nymph's</Link> <em>unearthly grace</em> ability</Pair>
</Ability>
<Ability id="arc-mesmerist-fey_trickster-quickling" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-fey_trickster-quickling">Quickling</Pair>
<Pair title="Ability">The fey trickster gains the <Link to="/monster/quickling">quickling's</Link> <em>supernatural speed</em> ability.</Pair>
</Ability>
<Ability id="arc-mesmerist-fey_trickster-rusalka" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-mesmerist-fey_trickster-rusalka">Rusalka</Pair>
<Pair title="Ability">The fey trickster gains the <Link to="/monster/rusalka">rusalka's</Link> <em>tresses</em> ability and four tress primary <Link to="/umr/natural_attacks">natural attacks</Link> similar to those of a rusalka.</Pair>
</Ability>
</>};
const _gaslighter = {title: "Gaslighter", jsx: <><h2 id="arc-mesmerist-gaslighter-gaslighter">Gaslighter</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 60</Link><br/>A gaslighter takes joy in others' suffering, delighting in driving them to madness.</p>
<Ability id="arc-mesmerist-gaslighter-alignment" icon={["hazard-sign"]}>
<Pair single id="arc-mesmerist-gaslighter-alignment">Alignment</Pair>
<Pair title="Info">A gaslighter must be of an evil alignment. A gaslighter who becomes nonevil cannot gain new levels as a mesmerist but retains all his class abilities.</Pair>
</Ability>
<Ability id="arc-mesmerist-gaslighter-consummate-cruelty" icon={["upgrade"]}>
<Pair single id="arc-mesmerist-gaslighter-consummate-cruelty">Consummate Cruelty</Pair>
<Pair hl title="Replaces">Consummate liar</Pair>
<Pair title="Passive Ability">A gaslighter gains a bonus equal to 1/2 his mesmerist level (minimum 1) on Intimidate checks.</Pair>
<Pair title="Ability">A gaslighter can take <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link> and <Link to="/feat/greater_dirty_trick">Greater Dirty Trick</Link> without having <Link to="/feat/combat_expertise">Combat Expertise</Link> or an Intelligence score of 13. He can also ignore those two prerequisites for other feats that have Improved Dirty Trick or Greater Dirty Trick as a prerequisite.</Pair>
</Ability>
<Ability id="arc-mesmerist-gaslighter-horrid-mask-su" icon={["armor-downgrade","magic-swirl","upgrade"]}>
<Pair single id="arc-mesmerist-gaslighter-horrid-mask-su">Horrid Mask (Su)</Pair>
<Pair hl title="Replaces">Touch treatment (minor)</Pair>
<Pair hl title="Alters">Painful stare</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">A gaslighter can implant a maddening phantasm in the mind of the target of his <em>hypnotic stare,</em> causing the target to perceive its own reflection as corrupted in some disturbing way. This is a mind-affecting fear effect, and there is no saving throw. The target is simultaneously captivated and horrified by the sight of its own reflection, and in any round in which the target can see itself in a mirror within 30 feet, the gaslighter can trigger his <em>painful stare</em> against the target without dealing damage. This is a <Link to="/umr/gaze">gaze</Link> attack, and the creature can avert its eyes to attempt to avoid it.</Pair>
<Pair title="Special">Any creature holding a visible mirror that attempts to demoralize the target can choose to add the gaslighter's Charisma modifier to its Intimidate check instead of its own. <em>Horrid mask</em> lasts until that particular <em>hypnotic stare</em> ends (often when the target moves away from a mirror). The gaslighter can use this ability a number of times per day equal to 3 + his Charisma modifier.</Pair>
</Ability>
<Ability id="arc-mesmerist-gaslighter-phantasmal-force-su" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-gaslighter-phantasmal-force-su">Phantasmal Force (Su)</Pair>
<Pair hl title="Replaces">Touch treatment (moderate)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A gaslighter can force the target of his <em>horrid mask</em> ability to recoil from its reflection. Whenever the gaslighter uses <em>horrid mask,</em> if an affected target begins its turn adjacent to a mirror, it must succeed at a Will save (DC = 10 + 1/2 the gaslighter's mesmerist level + his Charisma modifier) or be compelled to either flee from the mirror (or the creature holding it) to beyond 30 feet or attempt to destroy the mirror (or the creature holding it). This is a gaze attack, and the target can attempt to avert its eyes.</Pair>
</Ability>
<Ability id="arc-mesmerist-gaslighter-phantasmal-foes-su" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-gaslighter-phantasmal-foes-su">Phantasmal Foes (Su)</Pair>
<Pair hl title="Replaces">Touch treatment (greater)</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Standard Action">A gaslighter can spend one use of his <em>horrid mask</em> ability to convince the target of his <em>hypnotic stare</em> that it is surrounded by foes only it can see. The target is treated as <Link to="/rule/flanked">flanked</Link> for any melee attacks against it until the <em>hypnotic stare</em> ends.</Pair>
<Pair title="Special">The gaslighter can use either this ability or <em>horrid mask</em> during a particular <em>hypnotic stare,</em> but not both at once. This is a mind-affecting fear effect.</Pair>
</Ability>
<Ability id="arc-mesmerist-gaslighter-corosion-of-sanity-su" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-gaslighter-corosion-of-sanity-su">Corosion of Sanity (Su)</Pair>
<Pair hl title="Replaces">Touch treatment (break enchantment)</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">Whenever a creature fails its initial saving throw against a gaslighter's single-target mind-affecting effect, the target also takes 1 point of <Link to="/rule/wisdom_damage">Wisdom damage</Link>. This has no effect on abilities that don't allow a saving throw or affect multiple targets or an area.</Pair>
<Pair title="Special">If using <Link to="/rule/sanity">the sanity system</Link>, the target takes 2 points of sanity damage instead.</Pair>
</Ability>
</>};
const _hate_monger = {title: "Hate-Monger", jsx: <><h2 id="arc-mesmerist-hate_monger-hate-monger">Hate-Monger</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 61</Link><br/>Hate-mongers are xenophobic and judgmental rabblerousers who whip up mobs against enemies real or imagined.</p>
<Ability id="arc-mesmerist-hate_monger-alignment" icon={["hazard-sign"]}>
<Pair single id="arc-mesmerist-hate_monger-alignment">Alignment</Pair>
<Pair title="Ability">A hate-monger must be of a nongood alignment. A hate-monger who becomes good cannot gain new levels as a mesmerist but retains all his class abilities.</Pair>
</Ability>
<Ability id="arc-mesmerist-hate_monger-mental-manipulator-ex" icon={["spell-book","upgrade"]}>
<Pair single id="arc-mesmerist-hate_monger-mental-manipulator-ex">Mental Manipulator (Ex)</Pair>
<Pair hl title="Replaces">Consummate liar</Pair>
<Pair hl title="Alters">Mesmerist tricks</Pair>
<Pair title="Ability">A hate-monger masters a broad repertoire of emotional corruption. At 1st level, he adds one spell from the 1st-level spells below to his spells known. When he would gain a new mesmerist trick, he can learn additional spells instead, adding two of the following spells of a level he can currently cast to his spells known. When he casts a spell he learns in this way, he increases the duration as if his caster level were 1 higher.</Pair>
<Pair plain title="1st"><Link to="/spell/cause_fear">Cause fear</Link>, <Link to="/spell/compel_hostility">compel hostility</Link>, <Link to="/spell/delusional_pride">delusional pride</Link>, <Link to="/spell/demand_offering">demand offering</Link>, <Link to="/spell/forbid_action">forbid action</Link>, <Link to="/spell/lesser_confusion">lesser confusion</Link>, <Link to="/spell/murderous_command">murderous command</Link>, <Link to="/spell/scare">scare</Link>, <Link to="/spell/sow_thought">sow thought</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/aversion">Aversion</Link>, <Link to="/spell/paranoia">paranoia</Link>, <Link to="/spell/rage">rage</Link>, <Link to="/spell/unadulterated_loathing">unadulterated loathing</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/confusion">Confusion</Link>, <Link to="/spell/crushing_despair">crushing despair</Link>, <Link to="/spell/curse_of_disgust">curse of disgust</Link>, <Link to="/spell/fear">fear</Link>, <Link to="/spell/instant_enemy">instant enemy</Link>, <Link to="/spell/malicious_spite">malicious spite</Link>, <Link to="/spell/smug_narcissism">smug narcissism</Link>, <Link to="/spell/spite">spite</Link></Pair>
<Pair plain title="4th"><Link to="/spell/envious_urge">Envious urge</Link>, <Link to="/spell/feast_on_fear">feast on fear</Link>, <Link to="/spell/greater_forbid_action">greater forbid action</Link>, <Link to="/spell/modify_memory">modify memory</Link>, <Link to="/spell/utter_contempt">utter contempt</Link></Pair>
<Pair plain title="5th"><Link to="/spell/foe_to_friend">Foe to friend</Link>, <Link to="/spell/foster_hatred">foster hatred</Link>, <Link to="/spell/song_of_discord">song of discord</Link>, <Link to="/spell/repress_memory">repress memory</Link>, <Link to="/spell/unwilling_shield">unwilling shield</Link>, <Link to="/spell/vengeful_outrage">vengeful outrage</Link></Pair>
<Pair plain title="6th"><Link to="/spell/eyebite">Eyebite</Link>, <Link to="/spell/insanity">insanity</Link>, <Link to="/spell/overwhelming_presence">overwhelming presence</Link>, <Link to="/spell/symbol_of_persuasion">symbol of persuasion</Link></Pair>
<Pair title="At 5th Level">The save DC is increased by 1 for creatures of his favored enemy type (see <em>xenophobe</em> below).</Pair>
</Ability>
<Ability id="arc-mesmerist-hate_monger-insidious-hatred-su" icon={["magic-swirl"]}>
<Pair single id="arc-mesmerist-hate_monger-insidious-hatred-su" flavor="A hate-monger can sow hatred and strife under the pretense of assisting others.">Insidious Hatred (Su)</Pair>
<Pair hl title="Alters">Touch treatment</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">He can use his <em>touch treatment</em> only on others, but as part of the action of using <em>touch treatment,</em> he can cast any targeted spell from the <em>mental manipulator</em> list that does not have a range of "personal" and has a casting time of 1 standard action or less, targeting only the creature that receives his <em>touch treatment.</em> The target creature takes a -2 penalty on its saving throw and to its spell resistance against the spell.</Pair>
<Pair title="Special">That creature doesn't realize the hatemonger has cast a spell, and considers any manifestations to be part of the <em>touch treatment.</em> Other creatures notice as normal.</Pair>
</Ability>
<Ability id="arc-mesmerist-hate_monger-xenophobe-ex" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-hate_monger-xenophobe-ex">Xenophobe (Ex)</Pair>
<Pair hl title="Replaces">Mental potency, manifold tricks</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A hate-monger can choose one <Link to="/ability/favored_enemy">favored enemy</Link>, as per the <Link to="/class/ranger">ranger</Link> class feature. His favored enemy bonus begins at +2, but he does not gain additional favored enemies. His favored enemy bonus also applies on Intimidate checks against his favored enemy.</Pair>
<Pair title="At 9th Level">The bonus becomes +4.</Pair>
<Pair title="At 13th Level">The bonus increases to +6.</Pair>
<Pair title="At 17th Level">The bonus becomes +8.</Pair>
</Ability>
<Ability id="arc-mesmerist-hate_monger-out-for-blood-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-hate_monger-out-for-blood-ex">Out for Blood (Ex)</Pair>
<Pair hl title="Replaces">7th-level bold stare</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">When a creature takes extra damage from the hate-monger's <em>painful stare,</em> it also takes 1 point of <Link to="/rule/bleed">bleed</Link> damage (or 1 point of bleed damage per 1d6 points of damage dealt by the <em>painful stare</em> if the hatemonger damages the target himself). This bleed damage does not stack with itself or other sources of bleed damage.</Pair>
</Ability>
<Ability id="arc-mesmerist-hate_monger-insidious-emotions-su" icon={["armor-upgrade"]}>
<Pair single id="arc-mesmerist-hate_monger-insidious-emotions-su">Insidious Emotions (Su)</Pair>
<Pair hl title="Replaces">Glib lie</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">The power of a hatemonger's psychic hold becomes more difficult to detect or to break. The DC of Sense Motive checks to notice if a creature is under the effects of his enchantments with the emotion descriptor increases by 5 (if he also has the <Link to="/feat/subtle_enchantments">Subtle Enchantments</Link> feat, the effects stack), as does the DC to identify his emotion spells. Magical divinations can detect his emotion effects only if the caster succeeds at a caster level check (DC = 11 the hate-monger's mesmerist level) as if the affected creatures were the subject of <Link to="/spell/nondetection">nondetection</Link>.</Pair>
</Ability>
</>};
const _material_manipulator = {title: "Material Manipulator", jsx: <><h2 id="arc-mesmerist-material_manipulator-material-manipulator">Material Manipulator</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 18</Link><br/>Rather than waste time limiting himself to ruling minds, a material manipulator forces his whims upon reality and uses his magic to ensure that those around him comply with his demands.</p>
<Ability id="arc-mesmerist-material_manipulator-manipulator-spells" icon={["spell-book"]}>
<Pair single id="arc-mesmerist-material_manipulator-manipulator-spells">Manipulator Spells</Pair>
<Pair hl title="Replaces">Consummate liar, mesmerist trick gained at 2nd level, manifold tricks</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Ability">A material manipulator casts psychic spells drawn from the mesmerist spell list and augmented by a select list of <Link to="/main/spells_wizard">sorcerer/wizard spells</Link>. All <Link to="/main/spells_illusion">illusion</Link> (glamer), illusion (shadow), and <Link to="/main/spells_transmutation">transmutation</Link> spells of 6th level and lower are considered to be part of the material manipulator's spell list. These are psychic spells.</Pair>
</Ability>
<Ability id="arc-mesmerist-material_manipulator-revision-su" icon={["magic-swirl"]}>
<Pair single id="arc-mesmerist-material_manipulator-revision-su" flavor="A material manipulator can revise a creature's body to change its appearance.">Revision (Su)</Pair>
<Pair hl title="Replaces">Touch treatment, rule minds</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Ability">Using <em>revision</em> is a <strong className="hl">standard action</strong> (or a <strong className="hl">swift action</strong> if the material manipulator uses it on himself), and the material manipulator must be able to touch his target. An unwilling target must succeed at a Fortitude save (DC = 10 + half the material manipulator's mesmerist level + his Charisma modifier) to negate the effect. This effect lasts for 10 minutes per mesmerist level.</Pair>
<Pair title="At 3rd Level">The material manipulator can adjust the target's height and weight, increasing it or decreasing it to any height or weight within the standard range for creatures of the target's <Link to="/rule/height_and_weight">type and size category</Link>.</Pair>
<Pair title="At 6th Level">He can adjust the target's gender, physical traits (such as nose size, fingernail length, and foot shape), and pigmentation (including eye, hair, and skin color) to any natural variation for creatures of the target's type (and heritage, if applicable).</Pair>
<Pair title="At 10th Level">He can adjust the target's age, rewinding the target's age to as young as a young adult (approximately 8 years old for a human) or progressing it to as old as venerable. This causes the target to gain aging bonuses and penalties and adjust its size <Link to="/rule/age">as appropriate for its new age</Link>, but doesn't confer any other benefits gained from aging (such as additional racial Hit Dice, supernatural abilities, and so on). The effects of <em>revision</em> now last for 1 hour per mesmerist level.</Pair>
<Pair title="At 14th Level">He can adjust the target's type or subtype, as per <Link to="/spell/polymorph">polymorph</Link>. This <em>revision</em> only lasts 1 minute per mesmerist level.</Pair>
<Pair title="At 20th Level">He can instead adjust the target's type as per <Link to="/spell/greater_polymorph">greater polymorph</Link>. The effect of <em>revision</em> lasts indefinitely, or 10 minutes per mesmerist level if the material manipulator uses it as <em>greater polymorph</em> and causes the target to assume a form with a different type than its true form.</Pair>
<Pair title="Special">The mesmerist can dismiss this effect as a <strong className="hl">free action</strong>. This ability is a polymorph effect, and the subject of a <em>revision</em> cannot end the effect early by any means unless the material manipulator permits it. The material manipulator can stack multiple adjustments from this ability into the same polymorph effect - for instance, a 14th-level material manipulator can adjust himself into an orc, reduce his age to that of a young adult, give himself large feet and a bulbous nose, and change his gender. Clothing and equipment worn by the target is not affected by this effect - gear does not resize to suit the wearer's new form, nor does it merge into her body. Gear unable to be worn or wielded as a result of this effect falls to the ground in the wearer's space.</Pair>
</Ability>
</>};
const _mindwyrm_mesmer = {title: "Mindwyrm Mesmer", jsx: <><h2 id="arc-mesmerist-mindwyrm_mesmer-mindwyrm-mesmer">Mindwyrm Mesmer</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 13</Link><br/>While most mesmerists are subtle and manipulative schemers, mindwyrm mesmers emulate the confidence, swagger, and fear inspired by dragons to bully and browbeat others into obedience. These dragon-inspired psychic magic-users typically employ draconic imagery in their dress and the manifestations of their powers.</p>
<Ability id="arc-mesmerist-mindwyrm_mesmer-innate-coercion" icon={["upgrade"]}>
<Pair single id="arc-mesmerist-mindwyrm_mesmer-innate-coercion">Innate Coercion</Pair>
<Pair hl title="Replaces">Consummate liar</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A mindwyrm mesmer gains a bonus equal to 1/2 his mesmerist level (minimum 1) on Intimidate checks. In addition, a mindwyrm mesmer never takes penalties on Intimidate checks for being smaller than his target.</Pair>
</Ability>
<Ability id="arc-mesmerist-mindwyrm_mesmer-phantasmagorical-breath-su" icon={["tornado-discs","barbed-arrow"]}>
<Pair single id="arc-mesmerist-mindwyrm_mesmer-phantasmagorical-breath-su" flavor={["A mindwyrm mesmer has learned to mimic a ",{"tag":"Link","content":"true dragon's","props":{"to":"/family/true_dragon"}}," destructive breath using his psychic ability."]}>Phantasmagorical Breath (Su)</Pair>
<Pair hl title="Replaces">Painful stare</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">Charisma modifier times/day (minimum 1)</Pair>
<Pair title="Standard Action">A mindwyrm mesmer can unleash his phantasmagoric breath in either a 30-foot cone or a 60-foot line. The breath induces a psychosomatic response in creatures caught in the area, dealing 1d6 points of energy damage. The mindwyrm mesmer selects the type of energy damage this deals (acid, cold, electricity, or fire) when this ability is first gained; once made, this choice can't be changed. Creatures affected can attempt a Will save (DC = 10 + 1/2 the mindwyrm mesmer's mesmerist level + his Charisma modifier) to realize the true nature of the attack, which negates all damage. This is a mind-affecting effect.</Pair>
<Pair title="At 3rd Level">The energy damage becomes 2d6.</Pair>
<Pair title="At 5th Level">The energy damage increases to 3d6.</Pair>
<Pair title="At 7th Level">The energy damage becomes 4d6.</Pair>
<Pair title="At 9th Level">The energy damage increases to 5d6.</Pair>
<Pair title="At 11th Level">The energy damage becomes 6d6.</Pair>
<Pair title="At 13th Level">The energy damage increases to 7d6.</Pair>
<Pair title="At 15th Level">The energy damage becomes 8d6.</Pair>
<Pair title="At 17th Level">The energy damage increases to 9d6.</Pair>
<Pair title="At 19th Level">The energy damage becomes 10d6.</Pair>
</Ability>
<Ability id="arc-mesmerist-mindwyrm_mesmer-draconic-trick-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-mindwyrm_mesmer-draconic-trick-su">Draconic Trick (Su)</Pair>
<Pair title="Info">The following new trick can be selected by a mindwyrm mesmer.</Pair>
</Ability>
<Ability id="arc-mesmerist-mindwyrm_mesmer-threatening-mien" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-mindwyrm_mesmer-threatening-mien">Threatening Mien</Pair>
<Pair title="Ability">The subject's actions appear to be lethal in the extreme. A mindwyrm mesmer can trigger this trick when the subject moves adjacent to an enemy. Enemies adjacent to the subject take a -4 penalty on attacks against targets other than the subject. This trick lasts for 1 round per mindwyrm mesmer's mesmerist level.</Pair>
</Ability>
<Ability id="arc-mesmerist-mindwyrm_mesmer-masterful-draconic-trick-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-mindwyrm_mesmer-masterful-draconic-trick-su">Masterful Draconic Trick (Su)</Pair>
<Pair title="At 12th Level">The following new masterful trick can be selected by a mindwyrm mesmer of 12th level or higher.</Pair>
</Ability>
<Ability id="arc-mesmerist-mindwyrm_mesmer-frightful-countenance" extraClasses="subAbility" icon={["armor-upgrade","armor-downgrade"]}>
<Pair single id="arc-mesmerist-mindwyrm_mesmer-frightful-countenance">Frightful Countenance</Pair>
<Pair title="Ability">The subject's appearance changes into that which frightens an attacker to the core. The mindwyrm mesmer can trigger this trick when the subject is targeted by an attack or by a spell that requires an attack roll. The attacker must succeed at a Will save or the attack misses and the attacker immediately becomes <Link to="/misc/shaken">shaken</Link> for 1d4 rounds. This is a mind-affecting fear effect.</Pair>
</Ability>
</>};
const _projectionist = {title: "Projectionist", jsx: <><h2 id="arc-mesmerist-projectionist-projectionist">Projectionist</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 18</Link><br/>Not content to simply command others from afar, a projectionist is able to use his mesmerizing powers to utterly dominate other creatures and objects by projecting his spirit from his body.</p>
<Ability id="arc-mesmerist-projectionist-spells" icon={["broken-shield","spell-book"]}>
<Pair single id="arc-mesmerist-projectionist-spells">Spells</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Ability">A projectionist's psychic powers manifest in an almost predictable manner, making them less versatile than other spellcasters. At each of the indicated levels, a projectionist must choose the indicated spell to learn - he cannot choose other spells. The spells that a projectionist must learn (and the level at which he must choose them) are shown below.</Pair>
<Pair plain title="4th"><Link to="/spell/enter_image">Enter image</Link></Pair>
<Pair plain title="7th"><Link to="/spell/lesser_object_possession">Lesser object possession</Link></Pair>
<Pair plain title="10th"><Link to="/spell/riding_possession">Riding possession</Link></Pair>
<Pair plain title="13th"><Link to="/spell/object_possession">Object possession</Link></Pair>
<Pair plain title="16th"><Link to="/spell/greater_object_possession">Greater object possession</Link> (as a 6th-level spell)</Pair>
</Ability>
<Ability id="arc-mesmerist-projectionist-implant-consciousness-su" icon={["magic-swirl"]}>
<Pair single id="arc-mesmerist-projectionist-implant-consciousness-su">Implant Consciousness (Su)</Pair>
<Pair hl title="Replaces">Mesmerist tricks gained at 4th and 8th levels</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A projectionist can spend one use of his mesmerist trick ability to create a psychic link between himself and one object that bears his likeness, such as a painting or a statue. This functions in all ways like implanting a mesmerist trick in a creature, except the target is an object. The projectionist can trigger the trick as a <strong className="hl">standard action</strong> at any time - upon doing so, his consciousness leaves his body and fills the target object, functioning as described by the "filling an image with your consciousness" use of the <em>enter image</em> spell. Use the projectionist's mesmerist level as the spell's caster level. While filling an image with his consciousness, the projectionist can use and maintain his <em>hypnotic stare</em> on opponents, and can also trigger his <em>painful stare.</em></Pair>
<Pair title="At 8th Level">He can also use any purely mental action (including casting psychic spells) while filling an object with his consciousness.</Pair>
<Pair title="Special">Once he implants this trick in an object, the projectionist can fill the target with his consciousness whenever he pleases, regardless of distance or whether he is on the same plane as his target. Once he stops concentrating on maintaining the <em>enter image</em> effect, his consciousness returns to his body and he cannot fill the target with his consciousness again until he implants another mesmerist trick in that object.</Pair>
</Ability>
<Ability id="arc-mesmerist-projectionist-hidden-presence" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-projectionist-hidden-presence">Hidden Presence</Pair>
<Pair hl title="Replaces">Mental potency</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A projectionist gains <Link to="/feat/hidden_presence">Hidden Presence</Link> as a bonus feat. He doesn't need to meet the feat's prerequisites. He benefits from Hidden Presence and feats that list Hidden Presence as a prerequisite while possessing objects (as with <em>object possession</em>) or while filling an object with his consciousness (as described in the <em>enter image</em> spell), as well as when he possesses creatures, provided the feat is applicable. For instance, <Link to="/feat/intrusive_presence">Intrusive Presence</Link> cannot be used to read the mind of an inanimate object possessed via <em>enter image</em> or <em>object possession,</em> as objects possess no minds to be read.</Pair>
</Ability>
</>};
const _spirit_walker = {title: "Spirit Walker", jsx: <><h2 id="arc-mesmerist-spirit_walker-spirit-walker">Spirit Walker</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 97</Link><br/>Some mesmerists specialize in dominating and controlling undead rather than the living.</p>
<Ability id="arc-mesmerist-spirit_walker-spells" icon={["spell-book"]}>
<Pair single id="arc-mesmerist-spirit_walker-spells">Spells</Pair>
<Pair hl title="Alters">Spell list</Pair>
<Pair title="Info">A spirit walker adds additional spells to his spell list at the spell levels indicated. He can choose these as spells known, but doesn't gain them automatically.</Pair>
<Pair plain title="1st"><Link to="/spell/hide_from_undead">Hide from undead</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/command_undead">Command undead</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/halt_undead">Halt undead</Link></Pair>
<Pair plain title="4th"><Link to="/spell/speak_with_haunt">Speak with haunt</Link></Pair>
</Ability>
<Ability id="arc-mesmerist-spirit_walker-undead-inception-su" icon={["upgrade"]}>
<Pair single id="arc-mesmerist-spirit_walker-undead-inception-su">Undead Inception (Su)</Pair>
<Pair hl title="Replaces">Consummate liar, mental potency</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A spirit walker can affect undead creatures with his <em>hypnotic stare</em> as the <em>psychic inception</em> <Link to="/ability/stares">bold stare</Link> ability. This allows him to affect only undead; he must actually choose the <em>psychic inception bold stare</em> improvement if he wants to also affect other mindless creatures.</Pair>
<Pair title="At 3rd Level">When the spirit walker uses this ability, undead targets don't receive a saving throw bonus (if they did to begin with), have only a 25% chance of ignoring the spirit walker's mind-affecting spells and abilities, and no longer need to be under the spirit walker's gaze to be affected.</Pair>
<Pair title="At 5th Level">When the spirit walker uses his mind-affecting spells and abilities, they affect all undead normally, with no chance of failure.</Pair>
</Ability>
<Ability id="arc-mesmerist-spirit_walker-continued-animation-su" icon={["magic-swirl"]}>
<Pair single id="arc-mesmerist-spirit_walker-continued-animation-su">Continued Animation (Su)</Pair>
<Pair hl title="Replaces">3rd- and 14th-level touch treatments</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">1 time/day per three mesmerist levels<ByLevelPop levels={[[3,1],[6,2],[9,3],[12,4],[15,5],[18,6]]} unit="time" postText="/day" /></Pair>
<Pair title="Immediate Action">When a spirit walker is using <em>hypnotic stare</em> on a humanoid target and the target dies, the spirit walker can force the target's soul to remain in the body. The spirit walker can then control the target as if using <Link to="/spell/dominate_person">dominate person</Link> for a number of rounds equal to 1/2 the spirit walker's class level. The creature gains a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to 2 &times; the spirit walker's class level and continues acting as though it were alive and conscious until it loses those temporary hit points or the duration expires. During this time, the creature counts as undead, but it can't be healed by negative energy.</Pair>
<Pair title="At 14th Level">The spirit walker can apply this ability to any type of target as if using <Link to="/spell/dominate_monster">dominate monster</Link>.</Pair>
<Pair title="Special">The target receives a Will saving throw (DC = 10 + 1/2 the spirit walker's class level + his Charisma modifier) to avoid this effect and die normally. This ability ends immediately if at any point the target's body is completely destroyed (such as by <Link to="/spell/disintegrate">disintegrate</Link>) or restored to life.</Pair>
</Ability>
<Ability id="arc-mesmerist-spirit_walker-command-undead-su" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-spirit_walker-command-undead-su">Command Undead (Su)</Pair>
<Pair hl title="Replaces">6th- and 10th-level touch treatments</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A spirit walker gains <Link to="/feat/command_undead">Command Undead</Link> as a bonus feat. A spirit walker can use Command Undead a number of times per day equal to 1 + his Charisma modifier (minimum 1), using his mesmerist level as his cleric level.</Pair>
<Pair title="At 10th Level">The DC to resist this effect increases by 2.</Pair>
</Ability>
<Ability id="arc-mesmerist-spirit_walker-master-of-the-dead-su" icon={["magic-swirl"]}>
<Pair single id="arc-mesmerist-spirit_walker-master-of-the-dead-su">Master of the Dead (Su)</Pair>
<Pair hl title="Replaces">Rule minds</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A spirit walker gains mastery of the undead. Once per day, a spirit walker can use <Link to="/spell/control_undead">control undead</Link> as a spell-like ability on one target. If that creature fails its saving throw and has 20 or fewer Hit Dice, it falls permanently under the spirit walker's control until the spirit walker dies. A creature that fails its save but has more than 20 HD suffers the effect of <em>command undead.</em> A creature that succeeds at its save can't be affected by <em>master of the dead</em> for 24 hours. A spirit walker can control only one undead creature in this fashion at a time. If he permanently controls a new undead creature, the previous one is set free.</Pair>
</Ability>
</>};
const _thought_eater = {title: "Thought Eater", jsx: <><h2 id="arc-mesmerist-thought_eater-thought-eater">Thought Eater</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 38</Link><br/>Mesmerists that learn to pierce deep into the minds of their victims are known as thought eaters, dangerous individuals capable of devouring thoughts and assuming the knowledge those notions represent for themselves.</p>
<Ability id="arc-mesmerist-thought_eater-assume-identity-su" icon={["upgrade"]}>
<Pair single id="arc-mesmerist-thought_eater-assume-identity-su">Assume Identity (Su)</Pair>
<Pair hl title="Replaces">Consummate liar</Pair>
<Pair title="Ability">When a thought eater targets a creature with his <em>hypnotic stare</em> ability, the thought eater gains a bonus on Disguise checks to appear as that creature. This bonus is equal to the thought eater's mesmerist level, and lasts for 24 hours, or until he uses his <em>hypnotic stare</em> ability on a different creature.</Pair>
</Ability>
<Ability id="arc-mesmerist-thought_eater-assume-morality-su" icon={["magic-swirl"]}>
<Pair single id="arc-mesmerist-thought_eater-assume-morality-su">Assume Morality (Su)</Pair>
<Pair hl title="Replaces">Towering ego</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">The thought eater's alignment matches that of the target of his <em>assume identity</em> ability for the purposes of spells and effects that discern alignment. This includes any increase to alignment aura strength from class features, such as a cleric's aura ability.</Pair>
</Ability>
<Ability id="arc-mesmerist-thought_eater-assume-knowledge-su" icon={["upgrade"]}>
<Pair single id="arc-mesmerist-thought_eater-assume-knowledge-su">Assume Knowledge (Su)</Pair>
<Pair hl title="Replaces">Touch treatment</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The thought eater can choose one Knowledge skill possessed by the target of his <em>hypnotic stare.</em> He uses the target's number of ranks in that skill, instead of his own, to calculate his bonus (but not for other purposes, such as meeting the prerequisites of feats) to a maximum number of ranks equal to his mesmerist level. This ability lasts for 24 hours or until he uses his <em>hypnotic stare</em> ability on a different creature.</Pair>
</Ability>
<Ability id="arc-mesmerist-thought_eater-consume-identity-su" icon={["magic-swirl"]}>
<Pair single id="arc-mesmerist-thought_eater-consume-identity-su">Consume Identity (Su)</Pair>
<Pair hl title="Replaces">Rule minds</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Free Action">When the thought eater kills a target of his <em>hypnotic stare,</em> he can choose to entirely consume the creature's identity, mind, body, and soul. The target's corpse dissolves and as long as the thought eater lives, the target of <em>consume identity</em> cannot be brought back from the dead until the thought eater releases the identity (a <strong className="hl">standard action</strong>) or uses <em>consume identity</em> on another target. The creature's soul can also be released by a <Link to="/spell/wish">wish</Link> or <Link to="/spell/miracle">miracle</Link> (which ends the effect of <em>consume identity</em>). When the thought eater has consumed an identity, all divination spells identify him as (and consider him to be) the creature whose identity he consumed rather than himself. This ability fools any spell short of <Link to="/spell/discern_location">discern location</Link>. <em>Discern location</em> pinpoints the thought eater's location, whenever either the thought eater or the consumed creature is the target of that spell.</Pair>
</Ability>
</>};
const _toxitician = {title: "Toxitician", jsx: <><h2 id="arc-mesmerist-toxitician-toxitician">Toxitician</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 98</Link><br/>Toxiticians forgo the mesmerist's stare, instead combining their psychic power with their alchemical knowledge to craft injections that torment their foes and bolster themselves and their allies.</p>
<Ability id="arc-mesmerist-toxitician-deft-fingers-ex" icon={["upgrade"]}>
<Pair single id="arc-mesmerist-toxitician-deft-fingers-ex">Deft Fingers (Ex)</Pair>
<Pair hl title="Replaces">Consummate liar</Pair>
<Pair title="Passive Ability">A toxitician adds 1/2 his class level (minimum 1) as a bonus on all Sleight of Hands checks.</Pair>
</Ability>
<Ability id="arc-mesmerist-toxitician-injections-su" icon={["magic-swirl","magic-palm"]}>
<Pair single id="arc-mesmerist-toxitician-injections-su">Injections (Su)</Pair>
<Pair hl title="Replaces">Hypnotic stare</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>The toxitician uses his skill with alchemy and his own psychic powers to create injections. The toxitician can create a number of injections per day equal to his mesmerist level + his Charisma modifier. It takes 1 hour to create the injections. An injection is inert until the toxitician attempts to use it, taking a <strong className="hl">swift action</strong> to infuse it with his psychic power to activate it.</p>
<p>Using an injection requires taking a <strong className="hl">standard action</strong> to attempt a melee touch attack. If the attack hits, the target of an injection takes a -2 penalty on its Will saving throws for a number of minutes equal to 1/2 the toxitican's class level (minimum 1). The toxitician can simultaneously attempt a DC 20 Sleight of Hand check to inject the target surreptitiously. If the toxitician uses Sleight of Hand, the target can attempt a Perception check to detect the attempt, opposed by the Sleight of Hand check result, but detecting the attempt doesn't prevent the creature from being injected. Whenever the toxitician uses Sleight of Hand to administer one of his injections, he can implant it rather than injecting it and then trigger the effect of the injection at a later time. At any point before he regains his injections, the toxitician can trigger an implanted injection as a <strong className="hl">free action</strong>. The toxitician must be within medium range (100 feet + 10 feet per mesmerist level) of the target of the implanted injection.</p>
<p>If either the melee touch attack or the Sleight of Hand check (if attempted) fails, the injection isn't delivered but can still be used again - once activated, it remains potent for 1 day. An injection that hasn't been administered becomes inert if it leaves the toxitician's possession, reactivating as soon as it returns to his keeping.</p>
<p>The penalties from multiple injections don't stack, nor do the penalties from injections stack with penalties from mesmerist <em>stares</em> or witches' <Link to="/hex/evil_eye">evil eye</Link> hexes. Injections are mind-affecting effects.</p>
</Pair>
<Pair title="At 8th Level">The penalty on Will saves becomes -3.</Pair>
</Ability>
<Ability id="arc-mesmerist-toxitician-painful-injection-su" icon={["upgrade","armor-downgrade"]}>
<Pair single id="arc-mesmerist-toxitician-painful-injection-su">Painful Injection (Su)</Pair>
<Pair hl title="Replaces">Painful stare</Pair>
<Pair title="Ability">The toxitician's injection causes intense pain. This increases the damage the subject takes in the same way as the mesmerist's <em>painful stare</em> class feature. This extra damage is dealt automatically, without being triggered by the toxitician, but doesn't increase when the toxitician damages the target and can still be dealt only once per round.</Pair>
</Ability>
<Ability id="arc-mesmerist-toxitician-injection-improvement-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-toxitician-injection-improvement-su">Injection Improvement (Su)</Pair>
<Pair hl title="Replaces">Bold stare</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A toxitician can select one improvement (from those listed below) to add to his injections. The toxitician doesn't have to select the improvements when he prepares his injections at the start of the day; the choice is made as part of the <strong className="hl">swift action</strong> to activate the injection. The target can attempt a Fortitude saving throw to resist an injection with an improvement added to it. The DC is 10 + 1/2 the toxitician's class level + the toxitician's Charisma modifier. On a successful save, the target still takes the penalty on its Will saving throws, but not the effects of the improvement.</Pair>
<Pair title="Free Action">A toxitician can sacrifice one use of his injections to increase the DC of another injection by 2.</Pair>
<Pair title="At 7th Level">He can select a 2nd improvement.</Pair>
<Pair title="At 11th Level">He can select a 3rd improvement.</Pair>
<Pair title="At 15th Level">He can select a 4th improvement.</Pair>
<Pair title="At 19th Level">He can select a 5th improvement.</Pair>
<Pair title="Special">The toxitician can't choose the same improvement more than once.</Pair>
</Ability>
<Ability id="arc-mesmerist-toxitician-ability-decrease" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-toxitician-ability-decrease">Ability Decrease</Pair>
<Pair title="Ability">The target takes a -2 penalty to one ability score of the toxitician's choosing.</Pair>
<Pair title="At 11th Level">The penalty becomes -4.</Pair>
</Ability>
<Ability id="arc-mesmerist-toxitician-excruciating" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-mesmerist-toxitician-excruciating">Excruciating</Pair>
<Pair title="Ability">The extra damage from <em>painful injection</em> increases by an amount equal to 2 points + 1 point per 3 mesmerist levels the toxitician possesses.</Pair>
</Ability>
<Ability id="arc-mesmerist-toxitician-fortitude-decrease" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-toxitician-fortitude-decrease">Fortitude Decrease</Pair>
<Pair title="Ability">The target's immune system weakens, imposing a -2 penalty on Fortitude saving throws.</Pair>
<Pair title="At 11th Level">The penalty becomes -4.</Pair>
</Ability>
<Ability id="arc-mesmerist-toxitician-natural-armor-decrease" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-toxitician-natural-armor-decrease">Natural Armor Decrease</Pair>
<Pair title="Ability">The target's skin becomes looser, decreasing its natural armor (if any) by 2.</Pair>
<Pair title="At 11th Level">Its natural armor bonus instead decreases by 4.</Pair>
</Ability>
<Ability id="arc-mesmerist-toxitician-reflex-decrease" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-toxitician-reflex-decrease">Reflex Decrease</Pair>
<Pair title="Ability">The target's body becomes stiffer, imposing a -2 penalty on the target's Reflex saving throws.</Pair>
<Pair title="At 11th Level">The penalty becomes -4.</Pair>
</Ability>
<Ability id="arc-mesmerist-toxitician-slow" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-toxitician-slow">Slow</Pair>
<Pair title="Ability">The target's actions become sluggish, reducing its base movement by 10 feet and imposing a -1 penalty on attack rolls.</Pair>
<Pair title="At 11th Level">The penalty on attack rolls becomes -2.</Pair>
</Ability>
<Ability id="arc-mesmerist-toxitician-treatment-vials-su" icon={["heart-plus"]}>
<Pair single id="arc-mesmerist-toxitician-treatment-vials-su">Treatment Vials (Su)</Pair>
<Pair hl title="Alters">Touch treatment</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A toxitician can create treatment vials when he creates his injections for the day; creating each treatment vial expends one use of <em>touch treatment.</em> A treatment vial has the same benefit as his <em>touch treatment,</em> but anyone can administer it as a <strong className="hl">standard action</strong>. A vial can remove any condition the toxitician is able to remove at his mesmerist level, but can't be used for a <em>break enchantment</em> effect. A treatment vial becomes inert after 24 hours.</Pair>
</Ability>
<Ability id="arc-mesmerist-toxitician-improved-injections-su" icon={["upgrade"]}>
<Pair single id="arc-mesmerist-toxitician-improved-injections-su">Improved Injections (Su)</Pair>
<Pair hl title="Replaces">Glib lie</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">The toxitician can add two different improvements to an injection. The injection still requires only one save.</Pair>
</Ability>
</>};
const _umbral_mesmerist = {title: "Umbral Mesmerist", jsx: <><h2 id="arc-mesmerist-umbral_mesmerist-umbral-mesmerist">Umbral Mesmerist</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link><br/>Trained in secret, umbral mesmerists are clandestine weapons who spend years learning how to shape terrifying creatures from the inky darkness in which they revel.</p>
<Ability id="arc-mesmerist-umbral_mesmerist-diminished-spellcasting" icon={["broken-shield"]}>
<Pair single id="arc-mesmerist-umbral_mesmerist-diminished-spellcasting">Diminished Spellcasting</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Info">An umbral mesmerist can cast one fewer spell of each level than normal. If this reduces the number of spells for a level to 0, he can cast spells of that level only if his Charisma score allows <Link to="/rule/bonus_spells">bonus spells</Link> of that level.</Pair>
</Ability>
<Ability id="arc-mesmerist-umbral_mesmerist-shadow-summoning-sp" icon={["magic-swirl"]}>
<Pair single id="arc-mesmerist-umbral_mesmerist-shadow-summoning-sp">Shadow Summoning (Sp)</Pair>
<Pair hl title="Replaces">Mesmerist tricks gained at 1st, 4th, 8th, 12th, 16th, and 20th levels</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Ability"><p>An umbral mesmerist gains the ability to summon quasi-real creatures as per the <Link to="/spell/summon_monster_i">summon monster I</Link> spell. The umbral mesmerist can use this ability as a <strong className="hl">standard action</strong>, and the creatures remain for 1 minute per level (instead of 1 round per level). The creatures summoned are only partly real, but have normal effects unless a creature affected by the illusion succeeds at a Will save to disbelieve (as per <Link to="/spell/shadow_conjuration">shadow conjuration</Link>.) The DC for this save is equal to 10 + 1/2 the umbral mesmerist's mesmerist level + the umbral mesmerist's Charisma modifier. This is an illusion with the shadow descriptor.</p>
<p>A shadow creature has half the hit points of a normal creature of its kind (regardless of whether it is recognized as a shadow creature). It deals the normal amount of damage and has all of the base creature's normal abilities and weaknesses. Against a creature that recognizes it as a shadow creature, however, the shadow creature's damage is halved, and all special abilities that do not deal lethal damage are only 50% likely to work. (Roll for each use and each affected character separately.) Furthermore, the shadow creature's AC bonuses are halved. A creature that succeeds at its save to disbelieve sees the summoned creature as transparent images superimposed on vague, shadowy forms. Objects automatically succeed at their Will saves against this spell. The umbral mesmerist cannot use this ability to summon creatures from more than one <em>summon monster</em> spell in this way at one time.</p>
</Pair>
<Pair title="At 4th Level">This power of this ability increases to <Link to="/spell/summon_monster_ii">summon monster II</Link>.</Pair>
<Pair title="At 8th Level">This power increases to <Link to="/spell/summon_monster_iii">summon monster III</Link>.</Pair>
<Pair title="At 12th Level">This ability increases to that of <Link to="/spell/summon_monster_iv">summon monster IV</Link>.</Pair>
<Pair title="At 16th Level">This power increases to <Link to="/spell/summon_monster_v">summon monster V</Link>.</Pair>
<Pair title="At 20th Level">This power of this ability increases to <Link to="/spell/summon_monster_vi">summon monster VI</Link>.</Pair>
</Ability>
<Ability id="arc-mesmerist-umbral_mesmerist-umbral-solipsism-su" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-umbral_mesmerist-umbral-solipsism-su">Umbral Solipsism (Su)</Pair>
<Pair hl title="Replaces">Towering ego</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">When a creature attempts a Will save to disbelieve a quasi-real creature created by <em>shadow summoning,</em> it takes a penalty on the save equal to the mesmerist's Charisma modifier (minimum 0).</Pair>
</Ability>
<Ability id="arc-mesmerist-umbral_mesmerist-ephemeral-stare-su" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-umbral_mesmerist-ephemeral-stare-su">Ephemeral Stare (Su)</Pair>
<Pair hl title="Replaces">Mental potency</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">The umbral mesmerist is treated as if he were invisible by the target of his <em>hypnotic stare</em> (as per the <Link to="/spell/invisibility">invisibility</Link> spell), provided neither he nor any creatures conjured by <em>shadow summoning</em> take hostile actions against the target. Once the umbral mesmerist or any creature conjured by his <em>shadow summoning</em> ability takes a hostile action against the target, the mesmerist becomes visible to the target and the target cannot be affected again by that umbral mesmerist's <em>ephemeral stare</em> ability for 24 hours (although it can be affected by other effects of his <em>hypnotic stare</em>).</Pair>
</Ability>
</>};
const _vexing_daredevil = {title: "Vexing Daredevil", jsx: <><h2 id="arc-mesmerist-vexing_daredevil-vexing-daredevil">Vexing Daredevil</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 98</Link><br/>Vexing daredevils train their psychic powers for combat, specializing in momentarily blinding and confusing their foes with sudden feints and tricks.</p>
<Ability icon={["skills"]} id="arc-mesmerist-vexing_daredevil-undefined">
<Pair id="arc-mesmerist-vexing_daredevil-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX)</Pair></Ability>
<Ability id="arc-mesmerist-vexing_daredevil-martial-weapon-proficiency-ex" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-vexing_daredevil-martial-weapon-proficiency-ex">Martial Weapon Proficiency (Ex)</Pair>
<Pair hl title="Replaces">1st-level mesmerist trick</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A vexing daredevil picks one martial weapon and becomes proficient in its use.</Pair>
</Ability>
<Ability id="arc-mesmerist-vexing_daredevil-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-vexing_daredevil-bonus-feats">Bonus Feats</Pair>
<Pair hl title="Replaces">Touch treatment</Pair>
<Pair title="At 3rd Level">A vexing daredevil gains <Link to="/feat/improved_feint">Improved Feint</Link> as a bonus feat, even if she doesn't meet its prerequisites.</Pair>
<Pair title="At 6th Level">She gains <Link to="/feat/greater_feint">Greater Feint</Link> as a bonus feat, even if she doesn't meet its prerequisites.</Pair>
<Pair title="At 10th Level">She gains <Link to="/feat/greater_mesmerizing_feint">Greater Mesmerizing Feint</Link> as a bonus feat, and doesn't need to meet its prerequisites.</Pair>
<Pair title="At 14th Level">She gains a bonus <Link to="/main/feats_stare">stare feat</Link>; she <strong>must</strong> meet the prerequisites of that feat.</Pair>
</Ability>
<Ability id="arc-mesmerist-vexing_daredevil-dazzling-feint-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-vexing_daredevil-dazzling-feint-su">Dazzling Feint (Su)</Pair>
<Pair hl title="Replaces">Bold stare</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">Each time a vexing daredevil successfully feints against a creature under the effect of her <em>hypnotic stare,</em> she also chooses one of her <em>dazzling feint</em> benefits to activate. Unless otherwise stated, a <em>dazzling feint's</em> benefit applies only on the vexing daredevil's next attack this round.</Pair>
<Pair title="At 3rd Level">She selects her 1st <em>dazzling feint.</em></Pair>
<Pair title="At 7th Level">She selects her 2nd <em>dazzling feint.</em></Pair>
<Pair title="At 11th Level">She selects her 3rd <em>dazzling feint.</em></Pair>
<Pair title="At 15th Level">She selects her 4th <em>dazzling feint.</em></Pair>
<Pair title="At 19th Level">She selects her 5th <em>dazzling feint.</em></Pair>
<Pair title="Special">The DC for any saving throw against a <em>dazzling feint's</em> effect is equal to 10 + 1/2 the vexing daredevil's class level + her Charisma modifier. The vexing daredevil can't choose the same <em>dazzling feint</em> more than once.</Pair>
</Ability>
<Ability id="arc-mesmerist-vexing_daredevil-blinding-strike" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-vexing_daredevil-blinding-strike">Blinding Strike</Pair>
<Pair title="Ability">The vexing daredevil's weapon emits a bright flash of light into the opponent's eyes. If the vexing daredevil's next attack hits, the target must succeed at a Fortitude saving throw or be <Link to="/misc/blinded">blinded</Link> for 1 round.</Pair>
</Ability>
<Ability id="arc-mesmerist-vexing_daredevil-combat-maneuver" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-mesmerist-vexing_daredevil-combat-maneuver">Combat Maneuver</Pair>
<Pair title="Ability">The vexing daredevil's attack patterns become more difficult to discern. The vexing daredevil chooses one <Link to="/rule/combat_maneuvers">combat maneuver</Link> when making this <em>dazzling feint.</em> For the rest of the round, she doesn't provoke an attack of opportunity when performing that combat maneuver against the target of her <em>dazzling feint.</em> This <em>dazzling feint</em> benefit applies on combat maneuvers instead of on the vexing daredevil's next attack.</Pair>
</Ability>
<Ability id="arc-mesmerist-vexing_daredevil-critical-strike" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-mesmerist-vexing_daredevil-critical-strike">Critical Strike</Pair>
<Pair title="Ability">Ever alert, the vexing daredevil hones in on the target's weak points. If her next attack is a critical threat against the target of this <em>dazzling feint,</em> the vexing daredevil gains a circumstance bonus on the roll to confirm that critical hit equal to <Link to="/misc/one_third">one-third</Link> of his mesmerist level.</Pair>
</Ability>
<Ability id="arc-mesmerist-vexing_daredevil-outmanuever" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-mesmerist-vexing_daredevil-outmanuever">Outmanuever</Pair>
<Pair title="Ability">The vexing daredevil's darting movements foil the target's attempts to box her in. If her next attack hits, the vexing daredevil gains a +4 circumstance bonus on Acrobatics checks to move through the target's space or threatened area for 1 round. She can also move up to half her speed after the attack hits as a <strong className="hl">free action</strong>. If she wants to use Acrobatics to move through the target's threatened area or an enemy's space during this movement, she must reduce her speed or the DC of the Acrobatics check increases by 10, as normal.</Pair>
</Ability>
<Ability id="arc-mesmerist-vexing_daredevil-piercing-strike" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-mesmerist-vexing_daredevil-piercing-strike">Piercing Strike</Pair>
<Pair title="Ability">By psychically amplifying the target's pain, the vexing daredevil causes more damage. If she hits with her next attack and deals damage with her <em>painful stare,</em> she increases the damage dice from d6s to d8s.</Pair>
</Ability>
<Ability id="arc-mesmerist-vexing_daredevil-sloppy-defense" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-mesmerist-vexing_daredevil-sloppy-defense">Sloppy Defense</Pair>
<Pair title="Ability">The vexing daredevil's attacks effortlessly penetrate the target's defenses; she gains a circumstance bonus on her next attack roll equal to one-fifth of his mesmerist level.</Pair>
</Ability>
<Ability id="arc-mesmerist-vexing_daredevil-surprise-strike" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-vexing_daredevil-surprise-strike">Surprise Strike</Pair>
<Pair title="Prerequisites">7th-level mesmerist</Pair>
<Pair title="Ability">The vexing daredevil creates an opening so she can squeeze in another strike. If her next attack hits, she can make another attack at her highest attack bonus - 5 as a <strong className="hl">free action</strong>.</Pair>
</Ability>
<Ability id="arc-mesmerist-vexing_daredevil-shimmering-body-sp" icon={["armor-upgrade"]}>
<Pair single id="arc-mesmerist-vexing_daredevil-shimmering-body-sp">Shimmering Body (Sp)</Pair>
<Pair hl title="Replaces">Glib lie</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">When a vexing daredevil moves in a round, until the beginning of her next turn, any target of her <em>hypnotic stare</em> sees her as a constantly shimmering form of light and treats her as if she were under a <Link to="/spell/blur">blur</Link> spell.</Pair>
</Ability>
</>};
const _vexing_trickster = {title: "Vexing Trickster", jsx: <><h2 id="arc-mesmerist-vexing_trickster-vexing-trickster">Vexing Trickster</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 19</Link><br/>While many mesmerists are called to embrace the art of deception, using their mind-binding powers to make their foes believe that even the most outrageous realities are actually true, others indulge in the various hijinks their power enables. These mesmerists are known as vexing tricksters.</p>
<Ability id="arc-mesmerist-vexing_trickster-consummate-trickster-ex" icon={["upgrade"]}>
<Pair single id="arc-mesmerist-vexing_trickster-consummate-trickster-ex">Consummate Trickster (Ex)</Pair>
<Pair hl title="Replaces">Consummate liar</Pair>
<Pair title="Passive Ability">A vexing trickster gains a +1 bonus on Bluff, Disguise, Sleight of Hand, and Stealth checks.</Pair>
<Pair title="At 5th Level">This bonus becomes +2.</Pair>
<Pair title="At 9th Level">This bonus increases to +3.</Pair>
<Pair title="At 13th Level">This bonus becomes +4.</Pair>
<Pair title="At 17th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-mesmerist-vexing_trickster-tricksters-ego-ex" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-vexing_trickster-tricksters-ego-ex">Trickster's Ego (Ex)</Pair>
<Pair hl title="Replaces">Towering ego</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A vexing trickster gains <Link to="/feat/combat_expertise">Combat Expertise</Link> as a bonus feat. If his Intelligence score is less than 13, his Intelligence counts as 13 for the purpose of meeting the prerequisites for combat feats.</Pair>
</Ability>
<Ability id="arc-mesmerist-vexing_trickster-bonus-feat-ex" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-vexing_trickster-bonus-feat-ex">Bonus Feat (Ex)</Pair>
<Pair hl title="Replaces">Touch treatment (minor), touch treatment (greater)</Pair>
<Pair title="At 3rd Level">A vexing trickster gains a <Link to="/main/feats_trick">trick feat</Link> as a bonus feat. He must meet the feat's prerequisites.</Pair>
<Pair title="At 10th Level">He gains a second trick feat as a bonus feat.</Pair>
</Ability>
<Ability id="arc-mesmerist-vexing_trickster-manifold-hijinks-su" icon={["stairs-goal"]}>
<Pair single id="arc-mesmerist-vexing_trickster-manifold-hijinks-su">Manifold Hijinks (Su)</Pair>
<Pair hl title="Replaces">Touch treatment (moderate), touch treatment (break enchantment)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">The vexing trickster learns to implant multiple mesmerist tricks that have been modified by trick feats (henceforth called modified tricks) in his targets' minds simultaneously. The vexing trickster can implant up to two modified mesmerist tricks in a single target simultaneously.</Pair>
<Pair title="At 14th Level">He can implant up to three modified mesmerist tricks in a single target simultaneously.</Pair>
<Pair title="Special">This ability doesn't allow a mesmerist to apply more than one trick feat to a single mesmerist trick at a time.</Pair>
</Ability>
</>};
const _vizier = {title: "Vizier", jsx: <><h2 id="arc-mesmerist-vizier-vizier">Vizier</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 38</Link><br/>While many mesmerists focus on beguiling their foes or taking overt control of others with their mental powers, viziers carve out a subtler niche for themselves as advisors. An adventuring vizier is delighted that enemies focus on the raging barbarian or spell-slinging wizard first, not realizing the threat posed by the vizier until it's too late.</p>
<Ability id="arc-mesmerist-vizier-insidious-influence-su" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-vizier-insidious-influence-su" flavor="A vizier subtly influences his allies and others who trust him, making it more likely they will follow his suggestions.">Insidious Influence (Su)</Pair>
<Pair hl title="Replaces">Consummate liar, bold stare improvement gained at 3rd level</Pair>
<Pair title="Passive Ability">Allies with mesmerist tricks implanted by the vizier take penalties on Will saves made to resist the vizier's abilities and spells, and on Diplomacy, Intimidate, Sense Motive checks attempted against the vizier. This penalty equals that imposed by the vizier's <em>hypnotic stare.</em> If the vizier uses his <em>hypnotic stare</em> against such an ally, these penalties stack.</Pair>
<Pair title="At 3rd Level">The vizier automatically gains the <em>susceptibility bold stare</em> improvement, and it also applies to the DCs of any influence check to manipulate the target (even if it isn't Diplomacy or Intimidate).</Pair>
</Ability>
<Ability id="arc-mesmerist-vizier-power-behind-the-throne-su" icon={["magic-swirl","armor-upgrade"]}>
<Pair single id="arc-mesmerist-vizier-power-behind-the-throne-su" flavor="The vizier can use his mesmerist powers to make it seem like he is just a hanger-on who isn't contributing to a combat or social situation. This includes making it seem like one of his allies is casting his spells instead.">Power Behind the Throne (Su)</Pair>
<Pair hl title="Replaces">Towering ego, mental potency</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">When the vizier casts a spell, once the vizier's spell is complete, a glamer subtly alters onlookers' memories and perception of the spell's casting such that all the usual manifestations of the spell indicate that the caster was one of the vizier's allies with an implanted trick. Creatures who observed the spellcasting can attempt a Will save (DC = 10 + 1/2 the vizier's mesmerist level + his Charisma modifier) to disbelieve the glamer.</Pair>
<Pair title="Info">Since this effect only comes into play after the spell's casting is complete, any attempts to <Link to="/rule/ready_an_action">ready an action</Link> against the spellcasting, <Link to="/rule/counterspells">counterspell</Link>, or take attacks of opportunity still work as normal. This ability does not prevent or otherwise hinder creatures from correctly targeting such attacks and abilities against the vizier (for instance, a creature readying an action to shoot an arrow to interrupt the spellcasting would still shoot the vizier). Additionally, when the vizier triggers an ally's implanted trick, flashy effects make it appear as if the ally was using an activated ability of her own.</Pair>
<Pair title="At 5th Level">The vizier doesn't provoke attacks of opportunity when using <em>power behind the throne,</em> as if under the effects of a constant <Link to="/spell/illusion_of_calm">illusion of calm</Link>. A creature that disbelieves this second effect becomes immune to that vizier's <em>illusion of calm</em> for 24 hours.</Pair>
</Ability>
</>};
const _vox = {title: "Vox", jsx: <><h2 id="arc-mesmerist-vox-vox">Vox</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 39</Link><br/>Most mesmerists practice their mental manipulation through their entrancing gaze, but others have learned to practice their skill through the lilt and intonation of their voice. From sibilant whispers to overwhelming imprecations that resonate with the force of pure will, a vox unleashes the power of his mind with every silken syllable and shattering shout.</p>
<Ability id="arc-mesmerist-vox-spells" icon={["spell-book"]}>
<Pair single id="arc-mesmerist-vox-spells">Spells</Pair>
<Pair hl title="Replaces">Towering ego, 10th-level mesmerist trick, touch treatment (break enchantment)</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Info">A vox adds the following spells to his class list.</Pair>
<Pair plain title="1st"><Link to="/spell/ear_piercing_scream">Ear-piercing scream</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/cacophonous_call">Cacophonous call</Link>, <Link to="/spell/disrupt_silence">disrupt silence</Link>, <Link to="/spell/distracting_cacophony">distracting cacophony</Link>, <Link to="/spell/piercing_shriek">piercing shriek</Link>, <Link to="/spell/sonic_scream">sonic scream</Link></Pair>
<Pair plain title="4th"><Link to="/spell/shout">Shout</Link>, <Link to="/spell/sonic_thrust">sonic thrust</Link>, <Link to="/spell/wall_of_sound">wall of sound</Link></Pair>
<Pair plain title="5th"><Link to="/spell/mass_cacophonous_call">Mass cacophonous call</Link>, <Link to="/spell/echolocation">echolocation</Link>, <Link to="/spell/resonating_word">resonating word</Link></Pair>
<Pair plain title="6th"><Link to="/spell/magnifying_chime">Magnifying chime</Link>, <Link to="/spell/greater_shout">greater shout</Link>, <Link to="/spell/sonic_form">sonic form</Link></Pair>
<Pair title="Special">Unlike most psychic spells, a vox's mesmerist spells use both thought and verbal components; like a <Link to="/class/bard">bard</Link>, a vox cannot remove the verbal components of his spells.</Pair>
</Ability>
<Ability id="arc-mesmerist-vox-compelling-voice-su" icon={["armor-downgrade"]}>
<Pair single id="arc-mesmerist-vox-compelling-voice-su">Compelling Voice (Su)</Pair>
<Pair hl title="Alters">Hypnotic stare</Pair>
<Pair title="Swift Action">A vox can focus the sound of his voice on one creature within 30 feet, sapping that target's willpower and rendering her more vulnerable to mind-affecting powers, rather than using a stare like other mesmerists.</Pair>
<Pair title="Special">A vox can use his <em>compelling voice</em> even while <Link to="/misc/deafened">deafened</Link>, but it has a 20% chance to fail, just like casting a spell with a verbal component. The target does not need to be able to understand what the vox is saying, but does need to be able to hear the sound of the vox's voice (for instance, this ability cannot be used if either the vox or his target is in an area of magical silence). Otherwise, the vox's <em>compelling voice</em> has the effects of the standard mesmerist's <em>hypnotic stare,</em> and it gains further benefits as normal from abilities like the <em>painful stare</em> and <em>bold stare</em> class features.</Pair>
</Ability>
<Ability id="arc-mesmerist-vox-wounding-words-su" icon={["magic-palm","mailed-fist","armor-downgrade"]}>
<Pair single id="arc-mesmerist-vox-wounding-words-su" flavor="A vox can focus the power of his voice to magnify the force of his blows in melee.">Wounding Words (Su)</Pair>
<Pair hl title="Replaces">Touch treatment (minor), touch treatment (moderate)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">A vox can either make a melee touch attack that deals 1d6 points of sonic damage plus 1 point per mesmerist level, or he can make a single attack with a melee weapon, adding the listed sonic damage to the damage dealt by his weapon on a successful attack.</Pair>
<Pair title="Special">If the target of the vox's <em>wounding words</em> is also the target of his <em>compelling voice,</em> that creature must succeed at a Will save (DC = 10 + 1/2 the vox's mesmerist level + his Charisma modifier) or take a -2 penalty on attack rolls, saving throws, skill checks, and ability checks for 1 round. This penalty doesn't stack with the effects of the <Link to="/feat/concussive_spell">Concussive Spell</Link> metamagic feat.</Pair>
</Ability>
<Ability id="arc-mesmerist-vox-subsonic-strike-su" icon={["smoking-finger"]}>
<Pair single id="arc-mesmerist-vox-subsonic-strike-su">Subsonic Strike (Su)</Pair>
<Pair hl title="Replaces">Touch treatment (major)<sup><InnerLink showBacklink="backlink-arc-mesmerist-vox-fake-fn-1" id="arc-mesmerist-vox-fake-fn-1" data-hash-target to="arc-mesmerist-vox-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Standard Action">A vox is able to unleash a deadly flurry of his <em>wounding words</em> at once. He can target a number of creatures or objects equal to his Charisma modifier (minimum 1) within 30 feet, requiring a ranged touch attack against each target. If the target of his <em>compelling voice</em> is within 30 feet, he can choose to instead target only that creature with a single ranged touch or melee touch attack, dealing double normal damage on a successful attack.</Pair>
<Pair title="Special">Whatever choice he makes, the vox must expend one use of <em>wounding words.</em></Pair>
</Ability>
<section data-footnotes><h3 id="arc-mesmerist-vox-label">Footnotes</h3><ol>
<li id="arc-mesmerist-vox-fake-fn-1-target"><p>It is unclear if this refers to only the 10th-level ability (greater), and/or if it affects the 14th-level ability (break enchantment). Consult your GM. <InnerLink aria-label="Back to reference 1" id="backlink-arc-mesmerist-vox-fake-fn-1" data-hash-target to="arc-mesmerist-vox-fake-fn-1">↩</InnerLink></p></li>
</ol></section></>};
export default {aromaphile:_aromaphile,autohypnotist:_autohypnotist,chart_caster:_chart_caster,cult_master:_cult_master,dreamstalker:_dreamstalker,enigma:_enigma,eyebiter:_eyebiter,fey_trickster:_fey_trickster,gaslighter:_gaslighter,hate_monger:_hate_monger,material_manipulator:_material_manipulator,mindwyrm_mesmer:_mindwyrm_mesmer,projectionist:_projectionist,spirit_walker:_spirit_walker,thought_eater:_thought_eater,toxitician:_toxitician,umbral_mesmerist:_umbral_mesmerist,vexing_daredevil:_vexing_daredevil,vexing_trickster:_vexing_trickster,vizier:_vizier,vox:_vox}