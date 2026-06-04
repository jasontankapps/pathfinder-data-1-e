import {IonRippleEffect,IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _drowned_channeler = {title: "Drowned Channeler", jsx: <><h2 id="arc-spiritualist-drowned_channeler-drowned-channeler">Drowned Channeler</h2>
<p><strong>Sources</strong> <Link to="/source/aquatic_adventures">Aquatic Adventures pg. 52</Link><br/>When a drowned spirit doomed to a watery grave descends toward the evil of undeath and seeks refuge in a mortal shell, the result is an unusual spiritualist with powers that resonate with the drowned spirit's demise.</p>
<Ability icon={["skills"]} id="arc-spiritualist-drowned_channeler-undefined">
<Pair id="arc-spiritualist-drowned_channeler-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/swim">Swim</Link> (STR)</Pair>
<Pair title="Removed Skills">Fly</Pair></Ability>
<Ability id="arc-spiritualist-drowned_channeler-drowned-phantom" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-spiritualist-drowned_channeler-drowned-phantom">Drowned Phantom</Pair>
<Pair hl title="Alters">Phantom, shared consciousness, etheric tether, bonded manifestation</Pair>
<Pair title="Ability">A drowned channeler has a <em>drowned phantom.</em> A <em>drowned phantom's</em> ectoplasmic body drips with water and seems to bleed off watery droplets even its incorporeal form. A <em>drowned phantom</em> gains a swim speed of 30 feet in both forms and gains the <Link to="/subtype/water">water</Link> subtype in addition to the phantom subtype, meaning that it can use its natural slam attacks underwater without taking the penalty for bludgeoning attacks underwater. The drowned channeler's <em>etheric tether</em> extends twice as far underwater, but only half as far above water. Additionally, the <em>drowned phantom</em> doesn't grant any of the usual benefits while confined in the drowned channeler's consciousness unless the drowned channeler is within 25 feet of an ocean, sea, lake, or other large body of water. Both forms of <em>bonded manifestation</em> grant the <em>drowned phantom's</em> swim speed of 30 feet to the drowned channeler, and attacks from the ectoplasmic <em>bonded manifestation's</em> tendrils don't take the typical penalties for bludgeoning attacks underwater, as if the phantom itself made them.</Pair>
</Ability>
<Ability id="arc-spiritualist-drowned_channeler-drowned-spells" icon={["spell-book"]}>
<Pair single id="arc-spiritualist-drowned_channeler-drowned-spells">Drowned Spells</Pair>
<Pair hl title="Replaces">Bonded senses</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A drowned channeler adds <Link to="/spell/control_water">control water</Link> (4th), <Link to="/spell/fluid_form">fluid form</Link> (6th), <Link to="/spell/hydraulic_push">hydraulic push</Link> (1st), <Link to="/spell/hydraulic_torrent">hydraulic torrent</Link> (3rd), <Link to="/spell/life_current">life current</Link> (3rd), <Link to="/spell/pressure_adaptation">pressure adaptation</Link> (3rd), <Link to="/spell/ride_the_waves">ride the waves</Link> (4th), <Link to="/spell/slipstream">slipstream</Link> (2nd), <Link to="/spell/stabilize_pressure">stabilize pressure</Link> (2nd), <Link to="/spell/unlife_current">unlife current</Link> (3rd), <Link to="/spell/water_breathing">water breathing</Link> (3rd), and <Link to="/spell/wave_form">wave form</Link> (4th) to the spiritualist spell list at the listed spell level. (This is the level they appear on the cleric list or sorcerer/wizard list, whichever is lower.)</Pair>
<Pair title="Special">The drowned channeler must still select them as spells known as normal.</Pair>
</Ability>
<Ability id="arc-spiritualist-drowned_channeler-drowned-powers-sp" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-drowned_channeler-drowned-powers-sp">Drowned Powers (Sp)</Pair>
<Pair hl title="Replaces">Detect undead, calm spirit, see invisibility, call spirit</Pair>
<Pair title="At 5th Level">A drowned channeler can use <em>hydraulic push</em> as a spell-like ability once per day.</Pair>
<Pair title="At 7th Level">She can use <em>slipstream</em> once per day as a spell-like ability.</Pair>
<Pair title="At 9th Level">She can use <em>hydraulic push</em> 2 times a day. She can use <em>ride the waves</em> once per day as a spell-like ability.</Pair>
<Pair title="At 11th Level">She can use <em>slipstream</em> 2 times a day.</Pair>
<Pair title="At 13th Level">She can use <em>hydraulic push</em> 3 times a day.</Pair>
<Pair title="At 15th Level">She can use <em>slipstream</em> 3 times a day.</Pair>
<Pair title="At 16th Level">She can use <em>fluid form</em> once per day as a spell-like ability.</Pair>
<Pair title="At 17th Level">She can use <em>hydraulic push</em> 4 times a day.</Pair>
<Pair title="At 19th Level">She can use <em>slipstream</em> 4 times a day.</Pair>
</Ability>
</>};
const _ectoplasmatist = {title: "Ectoplasmatist", jsx: <><h2 id="arc-spiritualist-ectoplasmatist-ectoplasmatist">Ectoplasmatist</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 108</Link><br/>Instead of calling upon a phantom from the Ethereal Plane, an ectoplasmatist infuses herself with the mysterious substance called ectoplasm.</p>
<Ability id="arc-spiritualist-ectoplasmatist-ectoplasmic-lash-su" icon={["mailed-fist"]}>
<Pair single id="arc-spiritualist-ectoplasmatist-ectoplasmic-lash-su">Ectoplasmic Lash (Su)</Pair>
<Pair hl title="Replaces">Etheric tether, phantom, shared consciousness, fused consciousness, spiritual bond, empowered consciousness</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Full-Round Action">An ectoplasmatist can manifest one or two lashes of ectoplasm tethered to her by wispy, ectoplasmic tendrils. If she manifests two lashes, she can wield them both as light melee weapons, each dealing 1d6 points of slashing damage (1d4 if the ectoplasmatist is Small) with a critical threat range and multiplier of 19-20/&times;2. If the ectoplasmatist manifests only one <em>lash,</em> she can manifest it either as a single one-handed melee weapon that deals 1d8 points of slashing damage (1d6 if the ectoplasmatist is Small) with a critical threat range and multiplier of 19-20/&times;2, or as a two-handed melee weapon that deals 2d6 points of bludgeoning damage (1d10 if the ectoplasmatist is Small) with a critical multiplier of &times;2. Only the ectoplasmatist can wield or use these lashes. Dismissing any or all manifested lashes is a <strong className="hl">free action</strong>.</Pair>
<Pair title="At 2nd Level">The ectoplasmatist's lashes gain a +1 enhancement bonus on attack and damage rolls, and are treated as magic weapons.</Pair>
<Pair title="At 4th Level">The ectoplasmatist can use her lashes as <Link to="/misc/reach">reach</Link> weapons or use them to manipulate objects from a distance. When used as weapons, the lashes gain an additional 5 feet of reach. Unlike most other weapons with reach, the lashes can be used to attack foes anywhere within the ectoplasmatist's reach (including adjacent foes). Attacks with the lashes' extended reach provoke attacks of opportunity just as if the ectoplasmatist were attacking with a ranged weapon. When the lashes are used to manipulate items, they have the same manual dexterity as the ectoplasmatist's hands. Using the lashes to manipulate items always provokes attacks of opportunity, even if the action the ectoplasmatist is taking normally wouldn't.</Pair>
<Pair title="At 6th Level">The lashes' enhancement bonus becomes +2. The lashes are treated as having the ectoplasmatist's alignment for the purpose of overcoming damage reduction.</Pair>
<Pair title="At 8th Level">The ectoplasmatist's lashes become <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapons and their reach increases by another 5 feet (for a total increase of 10 feet). Additionally, attacks with the lashes against non-adjacent foes no longer provoke attacks of opportunity. Using the lashes to manipulate objects from a distance still provokes attacks of opportunity, but only if the action the ectoplasmatist is taking would normally provoke such attacks (instead of always provoking).</Pair>
<Pair title="At 10th Level">The lashes' enhancement bonus increases to +3.</Pair>
<Pair title="At 12th Level">The ectoplasmatist chooses a single <Link to="/ability/emotional_focus">emotional focus</Link> (<Link to="/emotionalfocus/anger">anger</Link>, <Link to="/emotionalfocus/dedication">dedication</Link>, <Link to="/emotionalfocus/despair">despair</Link>, <Link to="/emotionalfocus/fear">fear</Link>, <Link to="/emotionalfocus/hatred">hatred</Link>, <Link to="/emotionalfocus/jealousy">jealousy</Link>, <Link to="/emotionalfocus/kindness">kindness</Link>, <Link to="/emotionalfocus/remorse">remorse</Link>, <Link to="/emotionalfocus/whimsey">whimsey</Link>, or <Link to="/emotionalfocus/zeal">zeal</Link>). The ectoplasmatist's lashes gain a special weapon ability as if affected by a <Link to="/spell/spirit_bound_blade">spirit-bound blade</Link> spell matching the emotional energy of the focus the ectoplasmatist has chosen.</Pair>
<Pair title="At 14th Level">The lashes' enhancement bonus becomes +4.</Pair>
<Pair title="At 16th Level">The ectoplasmatist chooses a second <em>emotional focus,</em> and her lashes gain the special weapon abilities as if affected by a <em>spirit-bound blade</em> spell with the special weapon ability of both of the ectoplasmatist's chosen <em>emotional foci.</em></Pair>
<Pair title="At 18th Level">The lashes' enhancement bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-spiritualist-ectoplasmatist-spiritual-combat-su" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-ectoplasmatist-spiritual-combat-su">Spiritual Combat (Su)</Pair>
<Pair hl title="Replaces">Bonded manifestation, phantom recall, dual bond</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Full-Round Action">An ectoplasmatist can make all of her attacks with a single light or one-handed <em>ectoplasmic lash</em> wielded in one hand, and also cast a single spiritualist spell with a casting time of one standard action as a <strong className="hl">free action</strong> either before or after making the <em>ectoplasmic lash</em> attacks. The ectoplasmatist takes a -2 penalty on her attack rolls when using <em>spiritual combat.</em> If she decides to <Link to="/rule/cast_defensively">cast the spell defensively</Link>, she can choose to take an additional penalty on her attack rolls up to her Wisdom bonus, and add the same amount as a circumstance bonus on her <Link to="/rule/concentration">concentration</Link> check. If the concentration check fails, the spell is wasted, but the attacks still take the penalty.</Pair>
<Pair title="Ability">Also, when the ectoplasmatist casts a spiritualist spell with a range of touch, she can deliver the spell through one of her <em>ectoplasmic lashes.</em> Instead of making the free melee touch attack she would normally use to deliver the spell, the ectoplasmatist can choose to make a free <em>ectoplasmic lash</em> attack at her highest base attack bonus. A successful lash attack deals damage normally and imparts the spell's effects. The ectoplasmatist can't hold the charge if her lash attack misses.</Pair>
</Ability>
<Ability id="arc-spiritualist-ectoplasmatist-ectoplasmic-armor-su" icon={["armor-upgrade"]}>
<Pair single id="arc-spiritualist-ectoplasmatist-ectoplasmic-armor-su">Ectoplasmic Armor (Su)</Pair>
<Pair hl title="Replaces">Spiritual interference, greater spiritual interference</Pair>
<Pair title="At 4th Level">When an ectoplasmatist manifests her <em>ectoplasmic lash</em> ability, tendrils of ectoplasmic material envelop her body, granting her a +4 armor bonus to AC.</Pair>
<Pair title="At 12th Level">The ectoplasmatist's armor bonus to AC increases to +6 and is treated as <Link to="/magic-enh/ghost_touch_a">ghost touch</Link> armor.</Pair>
</Ability>
</>};
const _exciter = {title: "Exciter", jsx: <><h2 id="arc-spiritualist-exciter-exciter">Exciter</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 68</Link><br/>Psychic magic draws upon the twin and sometimes opposed powers of thought and emotion, but an exciter cares little for rationality. The phantom that accompanies him fills him with unbridled exultation, as he lets feeling and passion rule and sharpen his mind and body into a glorious fusion.</p>
<Ability id="arc-spiritualist-exciter-merged-phantom" icon={["broken-shield"]}>
<Pair single id="arc-spiritualist-exciter-merged-phantom">Merged Phantom</Pair>
<Pair hl title="Replaces">6th-level phantom recall</Pair>
<Pair hl title="Alters">Phantom, emotional focus</Pair>
<Pair title="Ability">An exciter internalizes his phantom and merges it completely within his mind. He cannot fully manifest his phantom outside of his own body in incorporeal or ectoplasmic form. <em>Emotional focus</em> abilities that affect or require a manifested phantom are lost, except for any aura gained by the phantom at 7th level; if the phantom gains an aura at 7th level, this aura functions despite the phantom not being manifested, and is centered on the exciter.</Pair>
</Ability>
<Ability id="arc-spiritualist-exciter-rapture-su" extraClasses="hasSubs" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-spiritualist-exciter-rapture-su" flavor="An exciter gains the ability to enter an ecstatic state in which he's consumed and overwhelmed by his passions and driven into a fighting fury.">Rapture (Su)</Pair>
<Pair hl title="Replaces">Ability to manifest his phantom, ability to use <em>emotional focus</em> abilities that require a manifested phantom</Pair>
<Pair title="Ability">This functions similarly to a <Link to="/class/bloodrager">bloodrager's</Link> <em>bloodrage,</em> treating his spiritualist level as his bloodrager level, though he doesn't qualify for feats or other elements that require <em>rage</em> or <em>bloodrage.</em> When entering a rapture, the exciter loses all other benefits from having his phantom confined in his consciousness (such as the <Link to="/feat/skill_focus">Skill Focus</Link> feats and bonus against mind-affecting effects), but he can choose to exchange the normal +4 morale bonus to his Strength and Constitution scores normally gained from <em>bloodrage</em> for a +4 morale bonus to his Dexterity and Charisma scores or a +2 morale bonus to his Strength, Dexterity, Constitution, and Charisma scores. In addition to the fatigue for ending a <em>bloodrage,</em> an exciter can't enter a rapture again for 1 minute after ending his last rapture.</Pair>
</Ability>
<Ability id="arc-spiritualist-exciter-bloodrage-su" extraClasses="subAbility" icon={["stairs-goal","upgrade","armor-upgrade","broken-shield"]}>
<Pair single id="arc-spiritualist-exciter-bloodrage-su" flavor="Text from the bloodrager class ability.">Bloodrage (Su)</Pair>
<Pair title="Usage">You can <em>bloodrage</em> for 2 + twice your level + your Con modifier rounds/day; these rounds need not be consecutive. Temporary increases to Con (such as those gained from <em>bloodraging</em> or spells like <Link to="/spell/bears_endurance">bear's endurance</Link>) don't increase this number.</Pair>
<Pair title="Free Action">You can enter or leave a <em>bloodrage</em> as a free action.</Pair>
<Pair title="Passive Ability">While in a <em>bloodrage,</em> you gain a +4 morale bonus to your Strength and Constitution, as well as a +2 morale bonus on Will saves. In addition, you take a -2 penalty to Armor Class. The increase to Constitution grants you 2 hit points per Hit Die, but these disappear when the <em>bloodrage</em> ends and are not lost first like <Link to="/rule/temporary_hit_points">temporary hit points</Link>. While <em>bloodraging,</em> you cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except Acrobatics, Fly, Intimidate, and Ride) or any ability that requires patience or concentration.</Pair>
<Pair title="Special">When the <em>bloodrage</em> ends, you are <Link to="/misc/fatigued">fatigued</Link> for a number of rounds equal to twice the number of rounds spent in the <em>bloodrage.</em> You can't enter a new <em>bloodrage</em> while fatigued or <Link to="/misc/exhausted">exhausted</Link>, but can otherwise enter <em>bloodrage</em> multiple times during a single encounter or combat. If you fall <Link to="/misc/unconscious">unconscious</Link>, your <em>bloodrage</em> immediately ends, placing you in peril of death.</Pair>
</Ability>
<Ability id="arc-spiritualist-exciter-fast-movement-ex" icon={["upgrade"]}>
<Pair single id="arc-spiritualist-exciter-fast-movement-ex">Fast Movement (Ex)</Pair>
<Pair hl title="Replaces">Etheric tether</Pair>
<Pair title="Passive Ability">An exciter's land speed is faster than normal for his race by 10 feet. This benefit applies only when he is wearing light armor, medium armor, or no armor and is not carrying a heavy load. This doesn't stack with the <Link to="/class/barbarian">barbarian</Link> ability of the same name.</Pair>
</Ability>
<Ability id="arc-spiritualist-exciter-excitation-su" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-exciter-excitation-su">Excitation (Su)</Pair>
<Pair hl title="Replaces">Bonded senses</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">When an exciter is in a <em>rapture,</em> each round he can choose to intensify his emotional fury, expending 2 rounds of <em>rapture</em> instead of 1. When he uses <em>excitation,</em> he chooses one of the two abilities that his <em>emotional focus</em> would normally grant to a manifested phantom, such as <em>strength focus</em> and <em>powerful strike</em> for an <Link to="/emotionalfocus/anger">anger</Link> phantom, or <em>power from despair</em> and <em>miserable strike</em> for a <Link to="/emotionalfocus/despair">despair</Link> phantom. He gains these abilities until the beginning of his next turn.</Pair>
<Pair title="Special">If the ability normally augments only a phantom's slam attacks, it instead applies to the ectoplasmic tendrils that the spiritualist can sprout using his ectoplasmic <em>bonded manifestation.</em></Pair>
</Ability>
<Ability id="arc-spiritualist-exciter-rapturous-rage" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-exciter-rapturous-rage">Rapturous Rage</Pair>
<Pair hl title="Replaces">10th-, 14th-, and 18th-level phantom recall, spiritual bond</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">An exciter can select one <Link to="/ability/rage_powers">rage power</Link> for which he qualifies, treating his spiritualist level as his barbarian level for all purposes relating to that particular rage power (he still doesn't qualify for the <Link to="/feat/extra_rage_power">Extra Rage Power</Link> feat or any similar abilities).</Pair>
<Pair title="At 14th Level">He can choose another rage power, following the above restrictions.</Pair>
<Pair title="At 18th Level">He can choose another rage power, following the above restrictions.</Pair>
</Ability>
<Ability id="arc-spiritualist-exciter-perfect-passion-su" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-exciter-perfect-passion-su">Perfect Passion (Su)</Pair>
<Pair hl title="Replaces">Spiritual interference</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">An exciter can cast psychic spells with an emotion component even while in his <em>rapture.</em> He can cast these spells defensively and attempt <Link to="/rule/concentration">concentration</Link> checks for these spells without impairment, despite being in a <em>rapture.</em> He also can attempt Charisma- and Intelligence-based skill checks related to psychic spells with an emotion component while in his <em>rapture.</em> He cannot cast arcane or divine spells or psychic spells that have a thought component while in a <em>rapture.</em></Pair>
</Ability>
<Ability id="arc-spiritualist-exciter-overwhelming-excitment-su" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-exciter-overwhelming-excitment-su">Overwhelming Excitment (Su)</Pair>
<Pair hl title="Replaces">Fused consciousness</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">An exciter can share the effects of his <em>rapture</em> with willing allies within 10 feet. He must expend 2 additional rounds of his <em>rapture</em> each round for each ally sharing its effects. The exciter's allies share all effects of the <em>rapture</em> except the rage powers; each ally must end its turn within 10 feet of the exciter, or the effects of the <em>rapture</em> end for that ally and it becomes fatigued.</Pair>
<Pair title="Special">Whenever he is not sharing the effects of his <em>rapture</em> with an ally, the exciter now retains the benefits of his phantom in his consciousness even during <em>rapture.</em></Pair>
</Ability>
<Ability id="arc-spiritualist-exciter-greater-rapture-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-spiritualist-exciter-greater-rapture-su">Greater Rapture (Su)</Pair>
<Pair hl title="Replaces">Greater spiritual interference</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">An exciter increases the morale bonus his <em>rapture</em> grants to each applicable ability score by 2 and the morale bonus he gains on Will saves by 1. In addition, upon entering a <em>rapture,</em> he can apply the effects of a single spiritualist spell he knows with an emotion component to himself. The spell must have a range of touch or personal, and it must be a 1st- or 2nd-level spell.</Pair>
<Pair title="At 15th Level">He can now apply a 3rd-level spell with this ability.</Pair>
<Pair title="At 18th Level">He can now apply a 4th-level spell with this ability.</Pair>
<Pair title="Special">If he uses this ability to apply the effects of a spell again before the duration of the previous spell expires, the previous spell ends immediately.</Pair>
</Ability>
</>};
const _fated_guide = {title: "Fated Guide", jsx: <><h2 id="arc-spiritualist-fated_guide-fated-guide">Fated Guide</h2>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 18</Link><br/>Not all phantoms are restless dead escaping the afterlife. On rare occasions, <Link to="/faith/pharasma">Pharasma</Link> returns a judged soul to the Material Plane - linking the spirit to a devout believer - to complete some final task, make amends for a crime, or grant a sharply divided soul a second chance. Sadly, from a soul's perspective, the journey along the River of Souls and its trials in the Boneyard last eons, and most phantoms return with little, if any, idea of who they were or the nature of their dedicated purposes. The fated guide helps her phantom uncover details about its life and what it can do to finally move on.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-spiritualist-fated_guide--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Phantom must have the <Link to="/emotionalfocus/remorse">remorse</Link> emotional focus</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-spiritualist-fated_guide-shepherd-to-the-dead" icon={["spell-book"]}>
<Pair single id="arc-spiritualist-fated_guide-shepherd-to-the-dead">Shepherd to the Dead</Pair>
<Pair title="Info">A fated guide adds <Link to="/spell/disrupt_undead">disrupt undead</Link> and <Link to="/spell/sanctify_corpse">sanctify corpse</Link> to her list of spells known.</Pair>
</Ability>
<Ability id="arc-spiritualist-fated_guide-divine-purpose" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-fated_guide-divine-purpose">Divine Purpose</Pair>
<Pair hl title="Replaces">Phantom's antagonistic ability</Pair>
<Pair title="Ability">A fated guide's phantom gains <Link to="/feat/deific_obedience">Deific Obedience</Link> as a bonus feat, though the spiritualist must obey her god's obedience to gain any benefit.</Pair>
</Ability>
<Ability id="arc-spiritualist-fated_guide-thanatopic-bonded-manifestation-su" icon={["stairs-goal","magic-swirl","armor-upgrade","magic-palm"]}>
<Pair single id="arc-spiritualist-fated_guide-thanatopic-bonded-manifestation-su" flavor="A fated guide can bond with her phantom to channel the influence of Pharasma and her servitors.">Thanatopic Bonded Manifestation (Su)</Pair>
<Pair hl title="Alters">Bonded manifestation</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Choice">When a spiritualist gains this ability, she must replace her ability to form either an ectoplasmic <em>bonded manifestation</em> or an incorporeal <em>bonded manifestation.</em></Pair>
<Pair title="Ability">When the fated guide uses this <em>thanatopic bond,</em> she gains access to the benefits of her phantom's Deific Obedience feat, and can use <Link to="/spell/speak_with_dead">speak with dead</Link> as per the spell, asking a maximum of one question per spiritualist level she has each day, and no more than one question per corpse; asking a question and getting an answer requires 2 full rounds.</Pair>
<Pair title="At 8th Level">The fated guide can act normally even after being reduced below 0 hit points. The spiritualist immediately dies if reduced to a number of negative hit points equal to her Constitution score. She takes 1 extra point of damage each round she performs a strenuous action, such as attacking or casting a spell, and immediately falls unconscious and begins dying if she dismisses the <em>thanatopic bond</em> or the duration of <em>bonded manifestation</em> expires. Maintaining her nearly dead form is taxing, and each round that she remains active below 0 hit points consumes 2 rounds of bonded manifestation's duration.</Pair>
<Pair title="At 13th Level">While using her <em>thanatopic bonded manifestation,</em> the fated guide can cast <Link to="/spell/antilife_shell">antilife shell</Link> as a spell-like ability. Maintaining this spell quickly exhausts her phantom, and each round she maintains the spell consumes 2 rounds of bonded manifestation's duration.</Pair>
<Pair title="At 18th Level">The fated guide's touch banishes the unquiet dead. She can deal 10d6 points of positive energy damage (Will half; DC = 10 + 1/2 the fated guide's spiritualist level + her Wisdom modifier) as a touch attack against undead creatures. An undead creature that successfully saves against this touch attack is immune to the same fated guide's positive energy touch for 24 hours.</Pair>
</Ability>
<Ability id="arc-spiritualist-fated_guide-iron-bond-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-spiritualist-fated_guide-iron-bond-ex">Iron Bond (Ex)</Pair>
<Pair hl title="Replaces">See invisibility</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">Her phantom gains a +4 bonus on saving throws against <Link to="/spell/banishment">banishment</Link>, <Link to="/spell/dismissal">dismissal</Link>, or other similar effects.</Pair>
</Ability>
<Ability id="arc-spiritualist-fated_guide-undeniable-bond-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-spiritualist-fated_guide-undeniable-bond-ex">Undeniable Bond (Ex)</Pair>
<Pair hl title="Replaces">Call spirit</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Passive Ability">Her phantom gains an additional +4 bonus on saving throws against <em>banishment, dismissal,</em> or other similar effects, for a total of +8.</Pair>
</Ability>
</>};
const _fractured_mind = {title: "Fractured Mind", jsx: <><h2 id="arc-spiritualist-fractured_mind-fractured-mind">Fractured Mind</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 109</Link><br/>Most spiritualists harbor the spirits of the deceased in their psyches, but a small number of them - known as fractured minds - draw their powers instead from a fraction of their own souls that resonates with extremely powerful emotions. These spiritualists' phantoms are not spiritual allies, but rather extensions of the fractured minds' own inner thoughts and emotions.</p>
<Ability id="arc-spiritualist-fractured_mind-emotional-spellcasting" icon={["info"]}>
<Pair single id="arc-spiritualist-fractured_mind-emotional-spellcasting">Emotional Spellcasting</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Info">A fractured mind's ability to cast spells is tied to the force of her own spirit rather than her connection to the spirit world. As a result, she uses her Charisma score rather than her Wisdom score to determine the highest spell level she can cast, the saving throw DCs of spells she casts, and her bonus spells per day.</Pair>
</Ability>
<Ability id="arc-spiritualist-fractured_mind-emotional-power-sp" extraClasses="hasSubs" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-fractured_mind-emotional-power-sp">Emotional Power (Sp)</Pair>
<Pair hl title="Replaces">Detect undead, calm spirit, see invisibility, call spirit</Pair>
<Pair title="Ability">The fractured mind gains a number of spell-like abilities, which are tied to her phantom's emotional focus. She gains one spell-like ability at 5th level, a second at 7th level, a third at 9th level, and a fourth at 16th level. A fractured mind can use each of these abilities once per day, plus one additional time per day for every 4 spiritualist levels she possesses beyond the level at which she gained the spell-like ability. The saving throw DCs for these spell-like abilities are equal to 10 + 1/2 the fractured mind's spiritualist class level + the fractured mind's Charisma modifier, rather than being based on the spell's level. The spell-like abilities granted by each emotional focus are listed below.</Pair>
<Pair title="At 9th Level">She can use the 5th-level power 2 times a day.</Pair>
<Pair title="At 11th Level">She can use the 7th-level power 2 times a day.</Pair>
<Pair title="At 13th Level">She can use the 5th-level power 3 times a day and the 9th-level power 2 times a day.</Pair>
<Pair title="At 15th Level">She can use the 7th-level power 3 times a day.</Pair>
<Pair title="At 17th Level">She can use the 5th-level power 4 times a day and the 9th-level power 3 times a day.</Pair>
<Pair title="At 19th Level">She can use the 7th-level power 4 times a day.</Pair>
<Pair title="At 20th Level">She can use the 16th-level power 2 times a day.</Pair>
</Ability>
<Ability id="arc-spiritualist-fractured_mind-anger" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-fractured_mind-anger">Anger</Pair>
<Pair plain title="5th"><Link to="/spell/enlarge_person">Enlarge person</Link></Pair>
<Pair plain title="7th"><Link to="/spell/rage">Rage</Link></Pair>
<Pair plain title="9th"><Link to="/spell/longstrider">Longstrider</Link></Pair>
<Pair plain title="16th"><Link to="/spell/shout">Shout</Link></Pair>
</Ability>
<Ability id="arc-spiritualist-fractured_mind-dedication" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-fractured_mind-dedication">Dedication</Pair>
<Pair plain title="5th"><Link to="/spell/command">Command</Link></Pair>
<Pair plain title="7th"><Link to="/spell/spiritual_weapon">Spiritual weapon</Link></Pair>
<Pair plain title="9th"><Link to="/spell/bless">Bless</Link></Pair>
<Pair plain title="16th"><Link to="/spell/death_ward">Death ward</Link></Pair>
</Ability>
<Ability id="arc-spiritualist-fractured_mind-despair" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-fractured_mind-despair">Despair</Pair>
<Pair plain title="5th"><Link to="/spell/bungle">Bungle</Link></Pair>
<Pair plain title="7th"><Link to="/spell/stricken_heart">Stricken heart</Link></Pair>
<Pair plain title="9th"><Link to="/spell/doom">Doom</Link></Pair>
<Pair plain title="16th"><Link to="/spell/crushing_despair">Crushing despair</Link></Pair>
</Ability>
<Ability id="arc-spiritualist-fractured_mind-fear" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-fractured_mind-fear">Fear</Pair>
<Pair plain title="5th"><Link to="/spell/bane">Bane</Link></Pair>
<Pair plain title="7th"><Link to="/spell/mad_hallucination">Mad hallucination</Link></Pair>
<Pair plain title="9th"><Link to="/spell/doom">Doom</Link></Pair>
<Pair plain title="16th"><Link to="/spell/phantasmal_killer">Phantasmal killer</Link></Pair>
</Ability>
<Ability id="arc-spiritualist-fractured_mind-hatred" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-fractured_mind-hatred">Hatred</Pair>
<Pair plain title="5th"><Link to="/spell/doom">Doom</Link></Pair>
<Pair plain title="7th"><Link to="/spell/inflict_moderate_wounds">Inflict moderate wounds</Link></Pair>
<Pair plain title="9th"><Link to="/spell/bane">Bane</Link></Pair>
<Pair plain title="16th"><Link to="/spell/bestow_curse">Bestow curse</Link></Pair>
</Ability>
<Ability id="arc-spiritualist-fractured_mind-jealousy" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-fractured_mind-jealousy">Jealousy</Pair>
<Pair plain title="5th"><Link to="/spell/sanctuary">Sanctuary</Link></Pair>
<Pair plain title="7th"><Link to="/spell/resist_energy">Resist energy</Link></Pair>
<Pair plain title="9th"><Link to="/spell/entropic_shield">Entropic shield</Link></Pair>
<Pair plain title="16th"><Link to="/spell/spell_immunity">Spell immunity</Link></Pair>
</Ability>
<Ability id="arc-spiritualist-fractured_mind-" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-fractured_mind-">Kindness<sup><InnerLink showBacklink="backlink-arc-spiritualist-fractured_mind-fake-fn-1" id="arc-spiritualist-fractured_mind-fake-fn-1" data-hash-target to="arc-spiritualist-fractured_mind-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair plain title="5th"><Link to="/spell/bless">Bless</Link></Pair>
<Pair plain title="7th"><Link to="/spell/calm_emotions">Calm emotions</Link></Pair>
<Pair plain title="9th"><Link to="/spell/heroism">Heroism</Link></Pair>
<Pair plain title="16th"><Link to="/spell/good_hope">Good hope</Link></Pair>
</Ability>
<Ability id="arc-spiritualist-fractured_mind-" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-fractured_mind-">Remorse<sup><InnerLink showBacklink="backlink-arc-spiritualist-fractured_mind-fake-fn-2" id="arc-spiritualist-fractured_mind-fake-fn-2" data-hash-target to="arc-spiritualist-fractured_mind-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair plain title="5th"><Link to="/spell/doom">Doom</Link></Pair>
<Pair plain title="7th"><Link to="/spell/inflict_pain">Inflict pain</Link></Pair>
<Pair plain title="9th"><Link to="/spell/stricken_heart">Stricken heart</Link></Pair>
<Pair plain title="16th"><Link to="/spell/mind_fog">Mind fog</Link></Pair>
</Ability>
<Ability id="arc-spiritualist-fractured_mind-" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-fractured_mind-">Whimsey<sup><InnerLink showBacklink="backlink-arc-spiritualist-fractured_mind-fake-fn-3" id="arc-spiritualist-fractured_mind-fake-fn-3" data-hash-target to="arc-spiritualist-fractured_mind-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair plain title="5th"><Link to="/spell/ventriloquism">Ventriloquism</Link></Pair>
<Pair plain title="7th"><Link to="/spell/absurdity">Absurdity</Link></Pair>
<Pair plain title="9th"><Link to="/spell/major_image">Major image</Link></Pair>
<Pair plain title="16th"><Link to="/spell/rainbow_pattern">Rainbow pattern</Link></Pair>
</Ability>
<Ability id="arc-spiritualist-fractured_mind-zeal" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-fractured_mind-zeal">Zeal</Pair>
<Pair plain title="5th"><Link to="/spell/bless">Bless</Link></Pair>
<Pair plain title="7th"><Link to="/spell/spiritual_weapon">Spiritual weapon</Link></Pair>
<Pair plain title="9th"><Link to="/spell/divine_favor">Divine favor</Link></Pair>
<Pair plain title="16th"><Link to="/spell/freedom_of_movement">Freedom of movement</Link></Pair>
</Ability>
<section data-footnotes><h3 id="arc-spiritualist-fractured_mind-label">Footnotes</h3><ol>
<li id="arc-spiritualist-fractured_mind-fake-fn-1-target"><p><Link to="/source/psychic_anthology">Psychic Anthology</Link> pg. 4 <InnerLink aria-label="Back to reference 1" id="backlink-arc-spiritualist-fractured_mind-fake-fn-1" data-hash-target to="arc-spiritualist-fractured_mind-fake-fn-1">↩</InnerLink></p></li>
<li id="arc-spiritualist-fractured_mind-fake-fn-2-target"><p><Link to="/source/occult_origins">Occult Origins</Link> pg. 19 <InnerLink aria-label="Back to reference 2" id="backlink-arc-spiritualist-fractured_mind-fake-fn-2" data-hash-target to="arc-spiritualist-fractured_mind-fake-fn-2">↩</InnerLink></p></li>
<li id="arc-spiritualist-fractured_mind-fake-fn-3-target"><p><Link to="/source/heroes_from_the_fringe">Heroes from the Fringe</Link> pg. 17 <InnerLink aria-label="Back to reference 3" id="backlink-arc-spiritualist-fractured_mind-fake-fn-3" data-hash-target to="arc-spiritualist-fractured_mind-fake-fn-3">↩</InnerLink></p></li>
</ol></section></>};
const _geist_channeler = {title: "Geist Channeler", jsx: <><h2 id="arc-spiritualist-geist_channeler-geist-channeler">Geist Channeler</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 109</Link><br/>Some phantoms retain less of their personalities and memories than others. Though most phantoms maintain some semblance of their former selves, others of their kind, known as <Link to="/monster/geist">geists</Link>, came close to being lost forever before they became phantoms. Incapable of manifesting in ectoplasmic form and devoid of human emotions, these strange entities are much closer to ghosts than most other phantoms. The spiritualists who work with them, known as geist channelers, are able to call on them in unique ways.</p>
<Ability id="arc-spiritualist-geist_channeler-geistform-phantom-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-spiritualist-geist_channeler-geistform-phantom-su">Geistform Phantom (Su)</Pair>
<Pair hl title="Alters">Phantom</Pair>
<Pair title="Info">A geist channeler's phantom can't manifest in ectoplasmic form, and is limited to manifesting in incorporeal form. As a result, the phantom has no Strength score, and has a starting Wisdom score of 12. Instead of gaining two slam attacks, it gains only a single slam attack that deals 1d8 points of damage (for a Medium phantom; perform <Link to="/misc/damage_die_adjustments">damage die adjustments</Link> for differently-sized phantoms).</Pair>
<Pair title="Ability">While manifested incorporeally, a geist channeler's phantom can attack only other incorporeal creatures. Because the phantom is incorporeal, the damage it deals to such creatures is not reduced as a result of them being incorporeal.</Pair>
<Pair title="At 4th Level">The phantom does not gain the <em>magic attacks</em> ability at 4th level.</Pair>
<Pair title="At 5th Level">The slam attack's damage increases to 1d10 points (Medium). The phantom can take a <strong className="hl">swift action</strong> to infuse itself with trace amounts of ectoplasm so it can attack corporeal creatures for 1 round. During that time, it deals half damage to corporeal creatures with its slam, and corporeal creatures with nonmagical weapons deal half damage to the phantom.</Pair>
<Pair title="At 10th Level">The slam attack's damage increases to 2d6 (Medium). When the phantom infuses itself, its attacks deal normal damage to corporeal creatures.</Pair>
<Pair title="At 15th Level">The slam attack's damage increases to 2d8 (Medium).</Pair>
<Pair title="At 20th Level">The slam attack's damage increases to 2d10 (Medium)</Pair>
</Ability>
<Ability id="arc-spiritualist-geist_channeler-spiritual-manifestation-su" icon={["broken-shield"]}>
<Pair single id="arc-spiritualist-geist_channeler-spiritual-manifestation-su">Spiritual Manifestation (Su)</Pair>
<Pair hl title="Alters">Bonded manifestation</Pair>
<Pair title="Ability">Because of the nature of her phantom, a geist channeler can use the <em>bonded manifestation</em> ability to manifest his phantom only in incorporeal form.</Pair>
</Ability>
<Ability id="arc-spiritualist-geist_channeler-emotionless-su" extraClasses="hasSubs" icon={["broken-shield","upgrade","stairs-goal"]}>
<Pair single id="arc-spiritualist-geist_channeler-emotionless-su">Emotionless (Su)</Pair>
<Pair title="Info">A geist channeler's phantom doesn't have an emotional focus; instead, it is cold and devoid of emotions.</Pair>
<Pair title="Ability">The phantom gains a number of ranks in Knowledge (arcana) and Knowledge (religion) equal to its Hit Dice. While confined in the geist channeler's consciousness, the phantom grants the geist channeler <Link to="/feat/skill_focus">Skill Focus</Link> in each of these skills.</Pair>
<Pair title="Special">The phantom has <Link to="/misc/good_saves">good Reflex and Will saves</Link>, and gains <Link to="/feat/iron_will">Iron Will</Link> as a bonus feat, as well as the following abilities.</Pair>
</Ability>
<Ability id="arc-spiritualist-geist_channeler-unnerving-touch-su" extraClasses="subAbility" icon={["magic-palm"]}>
<Pair single id="arc-spiritualist-geist_channeler-unnerving-touch-su">Unnerving Touch (Su)</Pair>
<Pair title="Standard Action">A geist channeler's phantom can make a melee touch attack against a living creature, even if that creature is corporeal. If the attack hits, the target is <Link to="/misc/shaken">shaken</Link> for 1d4+1 rounds. A successful Will save (DC = 10 + 1/2 the phantom's Hit Dice + the phantom's Charisma modifier) negates this effect.</Pair>
<Pair title="At 5th Level">When the phantom can damage corporeal creatures with its slam attack, its slam attacks against living corporeal creatures gain this ability.</Pair>
<Pair title="Special">Multiple attacks against the same creature don't cause the creature to become <Link to="/misc/frightened">frightened</Link>. This is a mind-affecting fear effect.</Pair>
</Ability>
<Ability id="arc-spiritualist-geist_channeler-poltergeists-knack-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-geist_channeler-poltergeists-knack-sp">Poltergeist's Knack (Sp)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Usage">3 times/day + 1 per three phantom HD beyond 7th</Pair>
<Pair title="Ability">A geist channeler's phantom can use <Link to="/spell/telekinesis">telekinesis</Link> as a spell-like ability. It can use only the <em>sustained force</em> and <em>violent thrust</em> versions of this spell. Its caster level for this spell-like ability is equal to the phantom's Hit Dice.</Pair>
</Ability>
<Ability id="arc-spiritualist-geist_channeler-spectral-protection-su" extraClasses="subAbility" icon={["aura"]}>
<Pair single id="arc-spiritualist-geist_channeler-spectral-protection-su">Spectral Protection (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Usage">1 minute/day per spiritualist level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action">While a geist channeler's phantom is confined within his psyche, he can call upon its power to project an aura of spectral energy that prevents incorporeal creatures from approaching him. This takes the form of a 30-foot-radius <Link to="/misc/emanation">emanation</Link> centered on the geist channeler. Any incorporeal creature attempting to enter this area must succeed at a Will save (DC = 10 + 1/2 the geist channeler's spiritualist class level + the geist channeler's Wisdom modifier) or be unable to do so. This ability can be used only defensively, not aggressively; forcing the aura against an incorporeal creature collapses the aura.</Pair>
</Ability>
<Ability id="arc-spiritualist-geist_channeler-malevolent-possession-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-geist_channeler-malevolent-possession-sp">Malevolent Possession (Sp)</Pair>
<Pair hl title="Replaces">The phantom's emotional focus</Pair>
<Pair hl title="Alters">Phantom</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">Once per day, a geist channeler's phantom can invade the bodies of other creatures. This functions as <Link to="/spell/possession">possession</Link>. To use this ability, the phantom must be adjacent to the target. The target can resist the effect with a successful Will save (DC = 10 + 1/2 the phantom's Hit Dice + the phantom's Charisma modifier).</Pair>
</Ability>
</>};
const _grim_apostle = {hasJL:true,title: "Grim Apostle", jsx: <><div className="jumpList" id="arc-spiritualist-grim_apostle-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arc-spiritualist-grim_apostle-death">Death</InnerLink></li><li><InnerLink toTop to="arc-spiritualist-grim_apostle-famine">Famine</InnerLink></li><li><InnerLink toTop to="arc-spiritualist-grim_apostle-pestilence">Pestilence</InnerLink></li><li><InnerLink toTop to="arc-spiritualist-grim_apostle-war">War</InnerLink></li></ul></div><h2 id="arc-spiritualist-grim_apostle-grim-apostle">Grim Apostle</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_144_midwives_to_death">Pathfinder #144: Midwives to Death pg. 72</Link><br/>Some devotees of the Four Horsemen can form spiritual manifestations of the daemonic demigods.</p>
<Ability id="arc-spiritualist-grim_apostle-grim-phantom-su" icon={["info","broken-shield"]}>
<Pair single id="arc-spiritualist-grim_apostle-grim-phantom-su">Grim Phantom (Su)</Pair>
<Pair hl title="Replaces">The phantom's emotional focus</Pair>
<Pair hl title="Alters">Phantom</Pair>
<Pair title="Ability">The spirit linked to a grim apostle functions in all respects as a regular spiritualist's phantom, but each day when the grim apostle regains her daily spell slots, she can choose which Horseman focus (see below) is dominant within the grim phantom.</Pair>
<Pair title="Ability">When the grim phantom is banished to the Ethereal Plane, the grim apostle takes an amount of damage equal to 1d4 &times; the grim phantom's number of Hit Dice.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-hardened-soul-su" icon={["armor-upgrade"]}>
<Pair single id="arc-spiritualist-grim_apostle-hardened-soul-su">Hardened Soul (Su)</Pair>
<Pair hl title="Replaces">Shared consciousness, fused consciousness</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">While a grim phantom is confined in the grim apostle's consciousness, the grim apostle gains a +4 bonus on saving throws against death effects and effects that would remove or subsume the grim apostle's soul (such as <Link to="/spell/possession">possession</Link> or <Link to="/spell/trap_the_soul">trap the soul</Link>).</Pair>
<Pair title="At 6th Level">This bonus becomes +6.</Pair>
<Pair title="At 12th Level">This bonus increases to +8.</Pair>
<Pair title="At 18th Level">This bonus becomes +10.</Pair>
</Ability>
<h3 id="arc-spiritualist-grim_apostle-horseman-focus">Horseman Focus</h3>
<p>Instead of an emotional focus, a grim phantom has one of the following Horseman foci.</p>
<p>The DC for a saving throw against any of the grim phantom's abilities is equal to 10 + 1/2 the grim phantom's Hit Dice + the grim phantom's Charisma modifier. For any spell-like abilities a grim phantom receives, it uses its Hit Dice as its caster level.</p>
<h4 id="arc-spiritualist-grim_apostle-death" data-hash-target>Death</h4>
<p>Grim phantoms influenced by <Link to="/faith/charon">Charon</Link>, the Horseman of Death, are dark, almost shapeless specters.</p>
<Ability id="arc-spiritualist-grim_apostle-skills-and-saves" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-spiritualist-grim_apostle-skills-and-saves">Skills and Saves</Pair>
<Pair title="Ability">The grim phantom gains ranks in Knowledge (history) and Stealth equal to its number of Hit Dice. Its good saves are Fortitude and Will.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-fleet" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-grim_apostle-fleet">Fleet</Pair>
<Pair title="Ability">The grim phantom gains <Link to="/feat/fleet">Fleet</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-marked-for-death-su" icon={["upgrade"]}>
<Pair single id="arc-spiritualist-grim_apostle-marked-for-death-su">Marked for Death (Su)</Pair>
<Pair title="Ability">When manifested in ectoplasmic form, the grim phantom gains a +1 bonus on attack rolls against a creature the grim apostle has hit with a melee or ranged attack since its last turn (the phantom's "marked target"). Additionally, such an attack by the grim phantom deals additional <strong>X</strong>d6 negative energy damage, where <strong>X</strong> is 1 + <Link to="/misc/one_fifth">one-fifth</Link> of his spiritualist level.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-fatal-aura-su" icon={["aura","armor-downgrade"]}>
<Pair single id="arc-spiritualist-grim_apostle-fatal-aura-su">Fatal Aura (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Swift Action">The grim phantom can create a 10-foot-radius aura that makes healing more difficult. The DC of Heal checks to provide first aid and treat deadly wounds within the aura is increased by 5. Any creature within the aura that casts a conjuration (healing) spell, or casts another spell or uses an ability that restores hit points, must succeed at a Will saving throw or lose the spell or use of the ability. Ending the aura is a <strong className="hl">free action</strong>.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-no-escape-su" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-grim_apostle-no-escape-su">No Escape (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">The grim phantom gains the benefits of the <Link to="/feat/following_step">Following Step</Link>, <Link to="/feat/step_up">Step Up</Link>, and <Link to="/feat/step_up_and_strike">Step Up and Strike</Link> feats but only against its <em>marked target</em> (see above).</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-killing-word-sp" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-grim_apostle-killing-word-sp">Killing Word (Sp)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">The grim phantom can cast <Link to="/spell/power_word_kill">power word kill</Link> once per day as a spell-like ability.</Pair>
</Ability>
<h4 id="arc-spiritualist-grim_apostle-famine" data-hash-target>Famine</h4>
<p>Grim phantoms influenced by <Link to="/faith/trelmarixian">Trelmarixian</Link>, the Horseman of Famine, are gaunt with jackal-like features.</p>
<Ability id="arc-spiritualist-grim_apostle-skills-and-saves" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-spiritualist-grim_apostle-skills-and-saves">Skills and Saves</Pair>
<Pair title="Ability">The grim phantom gains ranks in Perception and Sense Motive equal to its number of Hit Dice. Its good saves are Reflex and Will.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-weapon-finesse" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-grim_apostle-weapon-finesse">Weapon Finesse</Pair>
<Pair title="Ability">The grim phantom gains <Link to="/feat/weapon_finesse">Weapon Finesse</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-ravenous-bite-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-spiritualist-grim_apostle-ravenous-bite-ex">Ravenous Bite (Ex)</Pair>
<Pair title="Ability">The grim phantom's natural attacks take the form of bites that deal piercing damage as a creature <Link to="/misc/one_size_category_larger">one size category larger</Link> than its current size. It also gains <Link to="/feat/power_attack">Power Attack</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-aura-of-starvation-su" icon={["aura","armor-downgrade"]}>
<Pair single id="arc-spiritualist-grim_apostle-aura-of-starvation-su">Aura of Starvation (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Swift Action">The grim phantom can create a 10-foot-radius <em>aura of starvation.</em> Enemies within the aura take a -2 penalty on attack and damage rolls. Ending the aura is a <strong className="hl">free action</strong>.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-wail-of-the-hungry-sp" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-grim_apostle-wail-of-the-hungry-sp">Wail of the Hungry (Sp)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">The grim phantom can cast <Link to="/spell/waves_of_fatigue">waves of fatigue</Link> once per day as a spell-like ability.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-distended-gullet-su" icon={["mailed-fist"]}>
<Pair single id="arc-spiritualist-grim_apostle-distended-gullet-su">Distended Gullet (Su)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Swift Action">The grim phantom in ectoplasmic form gains the <Link to="/umr/swallow_whole">swallow whole</Link> ability (4d8 negative energy damage, AC 17, one-tenth the phantom's total hit points) for a number of rounds equal to its Charisma modifier. This ability can affect creatures no more than two size categories larger than the phantom. Each creature the grim phantom swallows is shunted into an extradimensional space that can hold any number of creatures. When the duration of this ability ends, any creatures still within the extradimensional space appear adjacent to the grim phantom.</Pair>
<Pair title="Special">The grim phantom is <Link to="/misc/exhausted">exhausted</Link> for 1 hour after using this ability and can't use it again during that time.</Pair>
</Ability>
<h4 id="arc-spiritualist-grim_apostle-pestilence" data-hash-target>Pestilence</h4>
<p>Grim phantoms influenced by <Link to="/faith/apollyon">Apollyon</Link>, the Horseman of Pestilence, often have rams' skulls for heads.</p>
<Ability id="arc-spiritualist-grim_apostle-skills-and-saves" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-spiritualist-grim_apostle-skills-and-saves">Skills and Saves</Pair>
<Pair title="Ability">The grim phantom gains ranks in Acrobatics and Heal equal to its number of Hit Dice. Its good saves are Fortitude and Will.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-great-fortitude" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-grim_apostle-great-fortitude">Great Fortitude</Pair>
<Pair title="Ability">The grim phantom gains <Link to="/feat/great_fortitude">Great Fortitude</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-weakening-strike-su" icon={["broken-shield"]}>
<Pair single id="arc-spiritualist-grim_apostle-weakening-strike-su">Weakening Strike (Su)</Pair>
<Pair title="Ability">A creature hit by the grim phantom's slam attack must succeed at a Fortitude saving throw or take a -2 penalty on ability checks, attack rolls, saving throws, and skill checks for 1d4 rounds.</Pair>
<Pair title="Special">This is a disease effect. Penalties from multiple hits don't stack.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-aura-of-flies-su" icon={["aura"]}>
<Pair single id="arc-spiritualist-grim_apostle-aura-of-flies-su">Aura of Flies (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Swift Action">The grim phantom can surround itself with a cloud of biting flies. Any creature that ends its turn adjacent to the grim phantom takes 1d6 piercing damage. Ending the aura is a <strong className="hl">free action</strong>.</Pair>
<Pair title="At 11th Level">This damage becomes 2d6.</Pair>
<Pair title="At 15th Level">This damage increases to 3d6.</Pair>
<Pair title="At 19th Level">This damage becomes 4d6.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-contagious-touch-sp" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-grim_apostle-contagious-touch-sp">Contagious Touch (Sp)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">The grim phantom can cast <Link to="/spell/contagion">contagion</Link> three times per day as a spell-like ability.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-virulent-attack-su" icon={["smoking-finger","armor-downgrade"]}>
<Pair single id="arc-spiritualist-grim_apostle-virulent-attack-su">Virulent Attack (Su)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">Any creature under the effects of the grim phantom's <em>weakening strike</em> becomes a dangerous vector for disease. Any creature that ends its turn adjacent to the target creature is immediately exposed to any diseases the target creature has, no matter the normal method of contracting that disease. The creature must immediately attempt a saving throw against that disease, and the onset period doesn't apply.</Pair>
</Ability>
<h4 id="arc-spiritualist-grim_apostle-war" data-hash-target>War</h4>
<p>Grim phantoms influenced by <Link to="/faith/szuriel">Szuriel</Link>, the Horseman of War, look like sinister, black-winged angels.</p>
<Ability id="arc-spiritualist-grim_apostle-skills-and-saves" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-spiritualist-grim_apostle-skills-and-saves">Skills and Saves</Pair>
<Pair title="Ability">The grim phantom gains ranks in Intimidate and Survival equal to its number of Hit Dice. Its good saves are Fortitude and Reflex.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-strength-focus" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-spiritualist-grim_apostle-strength-focus">Strength Focus</Pair>
<Pair title="Info">The grim phantom gains a +2 bonus to Strength and a -2 penalty to Dexterity. The phantom gains bonuses to Strength instead of Dexterity as the grim apostle gains spiritualist levels.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-ruthless-combatant-su" icon={["upgrade"]}>
<Pair single id="arc-spiritualist-grim_apostle-ruthless-combatant-su">Ruthless Combatant (Su)</Pair>
<Pair title="Ability">The grim phantom threatens a critical hit with its slam attack on a roll of 19-20.</Pair>
<Pair title="At 11th Level">The phantom's critical modifier with slam attacks increases to &times;3. This doesn't stack with <Link to="/feat/improved_critical">Improved Critical</Link> or similar effects.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-aura-of-fury-su" icon={["aura","upgrade","armor-downgrade"]}>
<Pair single id="arc-spiritualist-grim_apostle-aura-of-fury-su">Aura of Fury (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Swift Action">The grim phantom can create a 20-foot-radius aura. Creatures within the aura gain a +2 bonus on melee attack rolls but take a -2 penalty to AC. Ending the aura is a <strong className="hl">free action</strong>.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-bloodlust-su" icon={["remedy"]}>
<Pair single id="arc-spiritualist-grim_apostle-bloodlust-su">Bloodlust (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">The grim phantom regains 1d6 hit points with each successful slam attack it makes.</Pair>
</Ability>
<Ability id="arc-spiritualist-grim_apostle-juggernaut-su" icon={["armor-upgrade"]}>
<Pair single id="arc-spiritualist-grim_apostle-juggernaut-su">Juggernaut (Su)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">The grim phantom becomes immune to any effects that would cause it to become cowering, exhausted, fatigued, frightened, panicked, shaken, or slowed (as the <Link to="/spell/slow">slow</Link> spell).</Pair>
</Ability>
</>};
const _hag_haunted = {title: "Hag-Haunted", jsx: <><h2 id="arc-spiritualist-hag_haunted-hag-haunted">Hag-Haunted</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven pg. 23</Link><br/><Link to="/family/hag">Hags</Link> - those of flesh and blood, at any rate - die like any other mortals, and their souls normally depart to the Outer Planes for judgment. A hag who dies with a curse on her breath is often anchored to the Ethereal Plane by the power of her hatred - similar to vile and angry mortal souls - and some even claw their way back to the living world through the souls of those they despised or ruined... or those unfortunate souls they birthed. Hag-haunted spiritualists are tethered to these spiteful spirits, anchoring them once again in the world of the living. While this partnership imparts powerful magic, they run the constant risk of serving as little more than mounts for their overwhelming phantoms.</p>
<p>Hag-haunted spiritualists are rarely the masters in their relationship with their phantoms, and the only tool at their disposal to control their wicked minion is to dismiss them back to the Ethereal Plane. In the best scenarios, the relationship is one of mutual competition and constant bargaining, but just as often the hag phantom dominates and abuses her spiritualist.</p>
<Ability id="arc-spiritualist-hag_haunted-hag-phantom" icon={["info","stairs-goal"]}>
<Pair single id="arc-spiritualist-hag_haunted-hag-phantom">Hag Phantom</Pair>
<Pair hl title="Replaces">Shared consciousness, fused consciousness</Pair>
<Pair hl title="Alters">Phantom</Pair>
<Pair title="Info">A hag phantom forms from the soul of a deceased hag. She always has an evil alignment, rather than matching the spiritualist's alignment, and must select one of the following emotional focuses: <Link to="/emotionalfocus/anger">anger</Link>, <Link to="/emotionalfocus/hatred">hatred</Link>, <Link to="/emotionalfocus/jealousy">jealousy</Link>, or <Link to="/emotionalfocus/zeal">zeal</Link>.</Pair>
<Pair title="Passive Ability">The hag phantom starts with a +2 bonus to Strength and Intelligence and has her own agenda - usually contrary to the spiritualist's - though she recognizes that the spiritualist can unmanifest her, and therefore she typically hides suspicious actions from her spiritualist.</Pair>
<Pair title="Ability">When in the spiritualist's consciousness, the hag phantom can grant the hag-haunted <Link to="/feat/spell_focus">Spell Focus</Link> (necromancy) and <Link to="/feat/skill_focus">Skill Focus</Link> (Bluff), but she often revokes them if the spiritualist banishes her there as a punishment, and she might use them as leverage to get what she wants.</Pair>
<Pair title="At 10th Level">The hag can also grant the Skill Focus feats while manifested.</Pair>
<Pair title="At 12th Level">The hag can also grant <Link to="/feat/greater_spell_focus">Greater Spell Focus</Link> (necromancy).</Pair>
</Ability>
<Ability id="arc-spiritualist-hag_haunted-hag-spellcasting" icon={["info"]}>
<Pair single id="arc-spiritualist-hag_haunted-hag-spellcasting" flavor="A hag-haunted spiritualist's spells come from her connection to her hag phantom.">Hag Spellcasting</Pair>
<Pair title="Info">Her spells are considered arcane rather than psychic, and they use verbal and somatic components instead of thought and emotion components. She still selects her spells known from the spiritualist class list.</Pair>
</Ability>
<Ability id="arc-spiritualist-hag_haunted-death-curse-sp" icon={["magic-swirl","spell-book"]}>
<Pair single id="arc-spiritualist-hag_haunted-death-curse-sp" flavor="A hag phantom is partially animated by the power of a hag's dying curse, and this eventually grants her a death curse of her own.">Death Curse (Sp)</Pair>
<Pair hl title="Replaces">Spiritual interference, greater spiritual interference</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Immediate Action">Whenever the hag phantom is slain and returned to the Ethereal Plane, the phantom can utter a curse on the creature that killed her, targeting it with <Link to="/spell/bestow_curse">bestow curse</Link>.</Pair>
<Pair title="At 6th Level">The spiritualist gains <em>bestow curse</em> as an extra 3rd-level spell known.</Pair>
<Pair title="At 16th Level">The spiritualist gains <Link to="/spell/major_curse">major curse</Link> as an additional 6th-level spell known.</Pair>
</Ability>
</>};
const _haunted = {title: "Haunted", jsx: <><h2 id="arc-spiritualist-haunted-haunted">Haunted</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 110</Link><br/>The haunted are a dangerous breed of spellcasters bound to temperamental and unpredictable phantoms that leech power from their spiritualists.</p>
<Ability id="arc-spiritualist-haunted-usurp-manifestation-su" icon={["broken-shield","upgrade","armor-upgrade"]}>
<Pair single id="arc-spiritualist-haunted-usurp-manifestation-su">Usurp Manifestation (Su)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Info">The haunted's phantom begins to subtly subvert the relationship with its master, gaining rather than granting power from the connection. When fully manifested in ectoplasmic form, the phantom can use its <em>usurp manifestation</em> ability to draw upon the haunted's body to strengthen its ectoplasmic might, temporarily weakening the spiritualist in order to increase its own power.</Pair>
<Pair title="Usage">3 rounds/day + 1 round per spiritualist level; these rounds need not be consecutive</Pair>
<Pair title="Immediate Action">The phantom must activate this ability at the start of the spiritualist's turn. The phantom can dismiss the effects of a <em>usurped manifestation</em> as a <strong className="hl">free action</strong> on its turn. While this ability is in effect, the haunted's features become sunken and withdrawn, and she gains the <Link to="/misc/nauseated">nauseated</Link> condition until the effect ends. Conversely, the phantom surges in size and power, becoming one size category larger (as if affected by an <Link to="/spell/enlarge_person">enlarge person</Link> spell) and increasing its natural armor bonus to AC by 2 for the effect's duration.</Pair>
<Pair title="Special">If the spiritualist prevents or mitigates the nauseated condition, the phantom is unable to siphon energy and doesn't gain the benefits of <em>usurp manifestation.</em></Pair>
</Ability>
<Ability id="arc-spiritualist-haunted-usurp-spell" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-haunted-usurp-spell" flavor={<>While using <em>usurp manifestation,</em> the phantom can leech spell slots from the haunted to increase its own power.</>}>Usurp Spell</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Swift Action">The phantom can reach through the etheric tether to drain the nauseated haunted's psychic spell energy, effectively taking any touch spell or spell with a target of "you" that the haunted knows and casting it on itself (assuming the haunted has not yet used up her allotment of spells per day for the spell's level).</Pair>
<Pair title="Special">This ability consumes two of the haunted's spell slots of the appropriate level and otherwise follows the rules for the <em>share spells</em> and <em>deliver touch spells</em> abilities.</Pair>
</Ability>
<Ability id="arc-spiritualist-haunted-teleplasmic-surge" icon={["upgrade"]}>
<Pair single id="arc-spiritualist-haunted-teleplasmic-surge">Teleplasmic Surge</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">When using <em>usurp manifestation,</em> the phantom gains a +2 morale bonus on attack rolls, saving throws, and skill checks.</Pair>
</Ability>
<Ability id="arc-spiritualist-haunted-usurped-bond-su" icon={["info"]}>
<Pair single id="arc-spiritualist-haunted-usurped-bond-su">Usurped Bond (Su)</Pair>
<Pair hl title="Replaces">Dual bond</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Info">The haunted's phantom can use <em>usurp manifestation</em> for a number of rounds per day equal to 3 + double the haunted's spiritualist level.</Pair>
</Ability>
<Ability id="arc-spiritualist-haunted-ferocious-phantom" icon={["armor-upgrade"]}>
<Pair single id="arc-spiritualist-haunted-ferocious-phantom">Ferocious Phantom</Pair>
<Pair hl title="Replaces">Bonded manifestation</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Passive Ability">When using <em>usurp manifestation</em> the phantom gains DR 10/slashing and spell resistance equal to 11 + the haunted's spiritualist level (this spell resistance doesn't apply to spells originating from the spiritualist or from the <em>usurp spell</em> ability).</Pair>
</Ability>
</>};
const _involutionist = {title: "Involutionist", jsx: <><h2 id="arc-spiritualist-involutionist-involutionist">Involutionist</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 167</Link><br/>The <Link to="/rule/rivethun">Rivethun</Link> teach their followers to cultivate a well of inner power and to open themselves to the spiritual world, but on occasion - especially among neophytes who join the cult later in life - these processes overlap, and the acolyte invests her spiritual reservoir into some aspect of the world around her. Rather than bond with an existing spirit as most Rivethun eventually do, the involutionist creates a spirit from a piece of her own soul. The bond is deep, and it creates a powerful minion utterly loyal to her creator, but it also cuts off the involutionist's access to the wider spiritual world.</p>
<Ability id="arc-spiritualist-involutionist-divine-spellcasting" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-involutionist-divine-spellcasting">Divine Spellcasting</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Info">An involutionist is a divine spellcaster. Her spells use verbal components instead of thought components and somatic components instead of emotional components. An involutionist's spirit phantom is her conduit to the divine, and it serves as her divine focus; the involutionist must either be within 5 feet on her spirit phantom or absorb her phantom into her consciousness to cast spells that require a divine focus.</Pair>
</Ability>
<Ability id="arc-spiritualist-involutionist-spirit-phantom" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-involutionist-spirit-phantom" flavor="An involutionist's phantom is manifested from her own psyche and invested into the spirit-stuff of the world around her.">Spirit Phantom</Pair>
<Pair hl title="Replaces">Phantom's emotional focus</Pair>
<Pair hl title="Alters">Phantom</Pair>
<Pair title="Ability"><p>Rather than an emotional focus, the involutionist selects a spirit from those available to the <Link to="/class/shaman">shaman</Link>. A spirit phantom always has <Link to="/misc/good_saves">good Fortitude and Reflex saves</Link>, and it gains a number of ranks equal to the phantom's Hit Dice in two skills depending on the spirit it represents, as summarized on the table below.</p>
<ScrollContainer id="arc-spiritualist-involutionist--table-0"><table>
<thead>
<tr>
<th>Spirit</th>
<th>Associated Skills</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/shamanspirit/battle">Battle<IonRippleEffect /></Link></td>
<td>Intimidate and Sense Motive</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/bones">Bones<IonRippleEffect /></Link></td>
<td>Heal and Stealth</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/flame">Flame<IonRippleEffect /></Link></td>
<td>Acrobatics and Intimidate</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/heavens">Heavens<IonRippleEffect /></Link></td>
<td>Acrobatics and Fly</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/life">Life<IonRippleEffect /></Link></td>
<td>Diplomacy and Heal</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/lore">Lore<IonRippleEffect /></Link></td>
<td>Knowledge (arcana) and Linguistics</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/nature">Nature<IonRippleEffect /></Link></td>
<td>Knowledge (nature) and Survival</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/stone">Stone<IonRippleEffect /></Link></td>
<td>Appraise and Knowledge (engineering)</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/waves">Waves<IonRippleEffect /></Link></td>
<td>Diplomacy and Swim</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/wind">Wind<IonRippleEffect /></Link></td>
<td>Bluff and Sense Motive</td>
</tr>
</tbody></table></ScrollContainer>
<p>When fully manifested, the involutionist's spirit phantom gains the special ability normally applied to a shaman's spirit animal. The spirit phantom also gains a single hex from the list of those provided by that spirit.</p>
</Pair>
<Pair title="At 7th Level">The spirit phantom gains one additional hex from their list.</Pair>
<Pair title="At 12th Level">The spirit phantom gains one additional hex from their list.</Pair>
<Pair title="At 17th Level">The spirit phantom gains one additional hex from their list.</Pair>
</Ability>
<Ability id="arc-spiritualist-involutionist-spirit-manifestation-su" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-involutionist-spirit-manifestation-su">Spirit Manifestation (Su)</Pair>
<Pair hl title="Alters">Bonded manifestation</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">When an involutionist uses her <em>bonded manifestation</em> ability, she can instead manifest her spirit phantom's spirit animal special ability and use her spirit phantom's hexes as if they were her own. Hexes used during this manifestation count toward any limited number of uses per day.</Pair>
</Ability>
<Ability id="arc-spiritualist-involutionist-spirit-awareness-sp" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-involutionist-spirit-awareness-sp" flavor="An involutionist gains great insight into the spiritual influence people invest into the world around them.">Spirit Awareness (Sp)</Pair>
<Pair hl title="Replaces">Detect undead</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">She can cast <Link to="/spell/detect_psychic_significance">detect psychic significance</Link> as a spell-like ability at will and <Link to="/spell/analyze_aura">analyze aura</Link> once per day as a spell-like ability (CL = her character level).</Pair>
</Ability>
<Ability id="arc-spiritualist-involutionist-involuate-sp" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-involutionist-involuate-sp" flavor="An involutionist gains the ability to awaken the latent spiritual energy in inanimate objects.">Involuate (Sp)</Pair>
<Pair hl title="Replaces">Additional uses of calm spirit available at 11th, 15th, and 19th levels</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four spiritualist levels beyond 11th<ByLevelPop levels={[[11,1],[15,2],[19,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">She gains the ability to cast <Link to="/spell/animate_objects">animate objects</Link> as a spell-like ability (CL = her character level).</Pair>
</Ability>
</>};
const _necrologist = {title: "Necrologist", jsx: <><h2 id="arc-spiritualist-necrologist-necrologist">Necrologist</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 69</Link><br/>All spiritualists call upon residual phantoms that cling to the living world through force of will and unresolved passion. The vile spiritualists known as necrologists reach farther toward the Negative Energy Plane, however, and for whatever evil purpose, they bring back malevolent spirits whose passions have turned to vengeance and hate for all life.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-spiritualist-necrologist--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Evil alignment</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-spiritualist-necrologist-alignment" icon={["hazard-sign"]}>
<Pair single id="arc-spiritualist-necrologist-alignment">Alignment</Pair>
<Pair hl title="Alters">Alignment</Pair>
<Pair title="Info">If a necrologist becomes nonevil, she can continue to take spiritualist levels, but her phantom ceases to give her benefits while in her consciousness, she can't use <em>bonded manifestation,</em> and if she manifests the phantom, it is no longer loyal to her and likely attacks her and her allies.</Pair>
</Ability>
<Ability id="arc-spiritualist-necrologist-spells" icon={["spell-book"]}>
<Pair single id="arc-spiritualist-necrologist-spells">Spells</Pair>
<Pair title="Info">A necrologist adds the following spells to her class list at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/hide_from_undead">Hide from undead</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/ghostly_disguise">Ghostly disguise</Link>, <Link to="/spell/haunting_mists">haunting mists</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/haunting_choir">Haunting choir</Link></Pair>
<Pair plain title="4th"><Link to="/spell/lesser_age_resistance">Lesser age resistance</Link></Pair>
<Pair plain title="5th"><Link to="/spell/age_resistance">Age resistance</Link></Pair>
<Pair plain title="6th"><Link to="/spell/greater_age_resistance">Greater age resistance</Link>, <Link to="/spell/create_greater_undead">create greater undead</Link></Pair>
</Ability>
<Ability id="arc-spiritualist-necrologist-bonded-manifestation" icon={["broken-shield"]}>
<Pair single id="arc-spiritualist-necrologist-bonded-manifestation">Bonded Manifestation</Pair>
<Pair hl title="Alters">Bonded manifestation</Pair>
<Pair title="Info">A necrologist cannot use ectoplasmic bonded manifestation.</Pair>
</Ability>
<Ability id="arc-spiritualist-necrologist-shared-conciousness" icon={["armor-upgrade"]}>
<Pair single id="arc-spiritualist-necrologist-shared-conciousness">Shared Conciousness</Pair>
<Pair hl title="Alters">Shared consciousness</Pair>
<Pair title="Passive Ability">A necrologist gains a bonus on saving throws against death effects, energy drain, and negative energy rather than against mind-affecting effects (and can shunt such an effect onto the phantom) when her <em>undead phantom</em> is contained within her consciousness.</Pair>
</Ability>
<Ability id="arc-spiritualist-necrologist-undead-phantom" icon={["info"]}>
<Pair single id="arc-spiritualist-necrologist-undead-phantom">Undead Phantom</Pair>
<Pair title="Info">A necrologist's phantom is undead, rather than an outsider. It has normal undead immunities and no Constitution score; uses d8 Hit Dice, each of which is modified by the phantom's Charisma modifier as normal; and gains the abilities below at the levels indicated. An undead phantom otherwise follows the standard phantom rules (for instance, its base attack bonus and skills don't change to match undead).</Pair>
</Ability>
<Ability id="arc-spiritualist-necrologist-cling-of-the-grave-su" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-necrologist-cling-of-the-grave-su">Cling of the Grave (Su)</Pair>
<Pair hl title="Alters">Share spells</Pair>
<Pair title="Ability">An undead phantom can <Link to="/rule/hold_the_charge">hold the charge</Link> on a touch spell of the necromancy school up to a maximum of 1 round per spiritualist level of the necrologist.</Pair>
</Ability>
<Ability id="arc-spiritualist-necrologist-channel-energy-su" icon={["aura"]}>
<Pair single id="arc-spiritualist-necrologist-channel-energy-su">Channel Energy (Su)</Pair>
<Pair hl title="Replaces">Spiritual interference</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">1 + Charisma modifier times/day</Pair>
<Pair title="Ability">A necrologist gains the ability to <Link to="/ability/channel_negative_energy">channel negative energy</Link>, with an effective cleric level equal to her spiritualist level - 3.</Pair>
</Ability>
<Ability id="arc-spiritualist-necrologist-unnatural-aura-su" icon={["armor-upgrade"]}>
<Pair single id="arc-spiritualist-necrologist-unnatural-aura-su">Unnatural Aura (Su)</Pair>
<Pair hl title="Replaces">Slam damage increase gained at 5th level</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">Animals do not willingly approach within 30 feet of a fully manifested undead phantom unless the necrologist succeeds at a Handle Animal, Ride, or wild empathy check (DC = 10 + 1/2 the necrologist's spiritualist level + the phantom's Charisma modifier).</Pair>
</Ability>
<Ability id="arc-spiritualist-necrologist-channel-resistance-su" icon={["armor-upgrade"]}>
<Pair single id="arc-spiritualist-necrologist-channel-resistance-su">Channel Resistance (Su)</Pair>
<Pair hl title="Replaces">Devotion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A necrologist's phantom gains a +4 bonus on saving throws to resist the effects of <em>channel energy.</em></Pair>
</Ability>
<Ability id="arc-spiritualist-necrologist-necropsychic-conduit" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-necrologist-necropsychic-conduit">Necropsychic Conduit</Pair>
<Pair hl title="Replaces">Greater spiritual interference</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">A necrologist can cast psychic spells as if she had the <Link to="/feat/thanatopic_spell">Thanatopic Spell</Link> and <Link to="/feat/threnodic_spell">Threnodic Spell</Link> metamagic feats, using her undead phantom as a conduit to pierce the defenses of undead creatures.</Pair>
<Pair title="Special">If her phantom has been banished or is not within 30 feet of her when she casts the spells, however, these feats have no effect.</Pair>
</Ability>
<Ability id="arc-spiritualist-necrologist-lifedrinker-su" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-necrologist-lifedrinker-su">Lifedrinker (Su)</Pair>
<Pair hl title="Replaces">Slam damage increase gained at 13th level</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">When a necrologist's phantom reduces a creature to fewer than 0 hit points with an attack or spell, the necrologist can expend one use of her <em>channel energy</em> ability as a <strong className="hl">swift action</strong> to affect the same target with <Link to="/spell/death_knell">death knell</Link>. If the target fails its save, the necrologist can choose either herself or her phantom to gain the benefit of the spell.</Pair>
</Ability>
</>};
const _onmyoji = {title: "Onmyoji", jsx: <><h2 id="arc-spiritualist-onmyoji-onmyoji">Onmyoji</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 111</Link><br/>Though most spiritualists are chosen by their phantoms, others deliberately call phantoms to them through years of careful preparation and study in obscure divine traditions. These spiritualists, known as onmyoji, form close bonds with their phantoms, as any other spiritualist does, but see the phantoms as partners and tools in their work. Onmyoji serve as emissaries between the mundane world and the spiritual one, either working to ensure that troubles in the spiritual world do not spill over into the world of mortals, or stirring up spiritual trouble in order to achieve their ends among the living.</p>
<Ability id="arc-spiritualist-onmyoji-divine-spellcasting" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-onmyoji-divine-spellcasting">Divine Spellcasting</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Info">An onmyoji's spellcasting ability comes from divine rather than psychic power. As a divine caster, the onmyoji's spells use verbal components instead of thought components, and somatic components instead of emotional components, and she uses an ofuda as a divine focus. Ofudas are scrolls with holy writings written on parchment, cloth, or wood (having the same cost as a <Link to="/eq-misc/wooden_holy_symbol">wooden holy symbol</Link>) or metal (having the same cost as a <Link to="/eq-misc/silver_holy_symbol">silver holy symbol</Link>).</Pair>
</Ability>
<Ability id="arc-spiritualist-onmyoji-spiritual-resistance-su" icon={["armor-upgrade"]}>
<Pair single id="arc-spiritualist-onmyoji-spiritual-resistance-su" flavor="An onmyoji's phantom provides her with protection from supernatural forces.">Spiritual Resistance (Su)</Pair>
<Pair hl title="Replaces">Shared consciousness, fused consciousness</Pair>
<Pair title="Passive Ability">While the phantom is confined within the onmyoji's consciousness (not stranded on the Ethereal Plane or fully manifested), it grants her a +2 bonus on saving throws against the spell-like and supernatural abilities of fey, outsiders, and incorporeal undead.</Pair>
<Pair title="At 6th Level">This bonus becomes +3.</Pair>
<Pair title="At 12th Level">This bonus increases to +4.</Pair>
<Pair title="At 18th Level">This bonus becomes +5.</Pair>
</Ability>
<Ability id="arc-spiritualist-onmyoji-divine-teachings-su" icon={["spell-book"]}>
<Pair single id="arc-spiritualist-onmyoji-divine-teachings-su" flavor="An onmyoji gains the ability to call upon her phantom to help her cast spells she normally couldn't.">Divine Teachings (Su)</Pair>
<Pair hl title="Replaces">Spiritual interference, greater spiritual interference</Pair>
<Pair title="At 4th Level">An onmyoji can choose a single spell from the <Link to="/main/cleric_spell">cleric spell list</Link> with a spell level she is currently able to cast, and add that spell to her list of spells known, at the same spell level as it appears on the cleric spell list.</Pair>
<Pair title="At 7th Level">She selects another cleric spell, following the restrictions above.</Pair>
<Pair title="At 10th Level">She selects another cleric spell, following the restrictions above.</Pair>
<Pair title="At 13th Level">She selects another cleric spell, following the restrictions above.</Pair>
<Pair title="At 16th Level">She selects another cleric spell, following the restrictions above.</Pair>
<Pair title="At 19th Level">She selects another cleric spell, following the restrictions above.</Pair>
<Pair title="Special">Because the onmyoji relies on her phantom's influence in order to cast these spells, she can cast spells added in this way only while the phantom is confined within her consciousness (not stranded on the Ethereal Plane or fully manifested).</Pair>
</Ability>
</>};
const _phantom_blade = {hasJL:true,title: "Phantom Blade", jsx: <><div className="jumpList" id="arc-spiritualist-phantom_blade-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arc-spiritualist-phantom_blade-phantom-weapon-ability-descriptions">Phantom Weapon Ability Descriptions</InnerLink></li><li><InnerLink toTop to="arc-spiritualist-phantom_blade-phantom-weapon-progression">Phantom Weapon Progression</InnerLink></li></ul></div><h2 id="arc-spiritualist-phantom_blade-phantom-blade">Phantom Blade</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 4</Link><br/>A small selection of spiritualists are connected to spirits of combat and warfare, and manifest a weapon instead of a phantom. These spiritualists are known as phantom blades and fight with ectoplasmic weapons. Phantom blades are often found in Mendev and the Worldwound, where spiritualists are baptized in the blood of comrades; the last survivor of an unfortunate squad might return bearing one of these ghostly blades.</p>
<Ability id="arc-spiritualist-phantom_blade-weapon-and-armor-proficiency" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-phantom_blade-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Weapon, armor proficiency</Pair>
<Pair title="Info">A phantom blade is proficient with all simple and martial weapons. She is also proficient with light and medium armor.</Pair>
</Ability>
<Ability id="arc-spiritualist-phantom_blade-phantom-weapon" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-phantom_blade-phantom-weapon">Phantom Weapon</Pair>
<Pair hl title="Replaces">Phantom, phantom recall, spiritual bond, dual bond</Pair>
<Pair title="Ability">A phantom blade begins play with an ectoplasmic sentient weapon known as a <em>phantom weapon</em> whose weapon type is chosen by the phantom blade. The weapon type must be one with which the phantom blade is proficient. A <em>phantom weapon</em> functions similarly to the <em>black blade</em> of the <Link to="/arc-magus/bladebound">bladebound</Link> magus archetype except as noted on the Phantom Weapon Progression table below. A phantom blade with this class feature can't have a phantom of any kind, even from another class.</Pair>
</Ability>
<Ability id="arc-spiritualist-phantom_blade-spell-combat-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-phantom_blade-spell-combat-ex">Spell Combat (Ex)</Pair>
<Pair hl title="Replaces">Etheric tether, shared consciousness, fused consciousness, empowered consciousness</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A phantom blade can cast spells and wield her <em>phantom weapon</em> at the same time. This functions as the <Link to="/class/magus">magus's</Link> <em>spell combat</em> class ability.</Pair>
</Ability>
<Ability id="arc-spiritualist-phantom_blade-spell-combat-ex" extraClasses="subAbility" icon={["stairs-goal","mailed-fist","magic-swirl"]}>
<Pair single id="arc-spiritualist-phantom_blade-spell-combat-ex" flavor="Text from the magus class ability.">Spell Combat (Ex)</Pair>
<Pair title="Info">A magus learn to cast spells and wield his weapons at the same time. This functions much like <Link to="/rule/two_weapon_fighting">two-weapon fighting</Link>, but the off-hand weapon is a spell that is being cast.</Pair>
<Pair title="Full-Round Action">You can make all of your attacks with your melee weapon at a -2 penalty and can also cast any spell from the magus spell list with a casting time of 1 standard action (any attack roll made as part of this spell also takes this penalty). If you cast this spell defensively, you can decide to take an additional penalty on your attack rolls, up to your Intelligence bonus, and add the same amount as a circumstance bonus on your <Link to="/rule/concentration">concentration</Link> check. If the check fails, the spell is wasted, but the attacks still take the penalty. You can choose to cast the spell first or make the weapon attacks first, but if you have more than one attack, you cannot cast the spell between weapon attacks.</Pair>
<Pair title="Special">To use this ability, you must have one hand free (even if the spell being cast does not have somatic components), while wielding a light or one-handed melee weapon in the other hand.</Pair>
</Ability>
<Ability id="arc-spiritualist-phantom_blade-spellstrike-su" extraClasses="hasSubs" icon={["mailed-fist"]}>
<Pair single id="arc-spiritualist-phantom_blade-spellstrike-su">Spellstrike (Su)</Pair>
<Pair hl title="Replaces">Bonded senses</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A phantom blade can deliver spells through her <em>phantom weapon.</em> This functions like the magus's <em>spellstrike</em> class ability except the only weapon the spiritualist can use to deliver spells is her <em>phantom weapon.</em></Pair>
</Ability>
<Ability id="arc-spiritualist-phantom_blade-spellstrike-su" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-spiritualist-phantom_blade-spellstrike-su" flavor="Text from the magus class ability.">Spellstrike (Su)</Pair>
<Pair title="Ability">Whenever you cast a spell with a range of "touch" from the magus spell list, you can deliver the spell through any weapon you are wielding as part of a melee attack. Instead of the free melee touch attack normally allowed to deliver the spell, you can make one free melee attack with your weapon (at your highest base attack bonus) as part of casting this spell. If successful, this melee attack deals its normal damage as well as the effects of the spell. If you make this attack in concert with <em>spell combat,</em> this melee attack takes all the penalties accrued by spell combat melee attacks.</Pair>
<Pair title="Special">This attack uses the weapon's critical range (20, 19-20, or 18-20 and modified by the <em>keen</em> weapon property or similar effects), but the spell effect only deals &times;2 damage on a successful critical hit, while the weapon damage uses its own critical modifier.</Pair>
</Ability>
<Ability id="arc-spiritualist-phantom_blade-spirit-of-war-ex" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-phantom_blade-spirit-of-war-ex">Spirit of War (Ex)</Pair>
<Pair hl title="Replaces">Bonded manifestation</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A phantom blade gains a bonus combat feat. The spiritualist must meet the prerequisites for these feats, but she treats her spiritualist level as her base attack bonus (in addition to base attack bonuses gained from other classes and racial Hit Dice) for the purpose of qualifying for these feats. The phantom blade also treats her spiritualist level as her fighter level for the purpose of selecting feats with a minimum number of fighter levels as a prerequisite.</Pair>
<Pair title="At 8th Level">She gains another bonus feat, following the restrictions above.</Pair>
<Pair title="At 13th Level">She gains another bonus feat, following the restrictions above.</Pair>
<Pair title="At 18th Level">She gains another bonus feat, following the restrictions above.</Pair>
</Ability>
<Ability id="arc-spiritualist-phantom_blade-etheric-focus-ex" icon={["upgrade"]}>
<Pair single id="arc-spiritualist-phantom_blade-etheric-focus-ex" flavor={<>The phantom blade can use her <em>phantom weapon</em> to aid her in casting spells with <Link to="/rule/components_oa">thought components</Link>.</>}>Etheric Focus (Ex)</Pair>
<Pair hl title="Replaces">Spiritual interference, greater spiritual interference</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Swift Action">She can center herself (instead of as a move action).</Pair>
<Pair title="At 12th Level">The spiritualist can center herself as a <strong className="hl">free action</strong>.</Pair>
</Ability>
<h3 id="arc-spiritualist-phantom_blade-phantom-weapon-ability-descriptions" data-hash-target>Phantom Weapon Ability Descriptions</h3>
<p>A <em>phantom weapon</em> has special abilities (or imparts abilities to its wielder) depending on the wielder's spiritualist level. These abilities are cumulative. A <em>phantom weapon</em> normally refuses to use any of its abilities when wielded by anyone other than its phantom blade, and acts as an incorporeal masterwork weapon of its type.</p>
<h3 id="arc-spiritualist-phantom_blade-phantom-weapon-progression" data-hash-target>Phantom Weapon Progression</h3>
<ScrollContainer id="arc-spiritualist-phantom_blade--table-0"><table>
<thead>
<tr>
<th>Spiritualist Class Level</th>
<th>Enhancement Bonus</th>
<th>Cha</th>
<th>Int/Wis</th>
<th>Ego</th>
<th>Special</th>
</tr>
</thead>
<tbody><tr>
<td>1st-2nd</td>
<td>+0</td>
<td>10</td>
<td>6</td>
<td>5</td>
<td>Alertness, Phantom Touch, telepathy, weapon of the mind</td>
</tr>
<tr>
<td>3rd-4th</td>
<td>+1</td>
<td>11</td>
<td>7</td>
<td>5</td>
<td>Quick manifest</td>
</tr>
<tr>
<td>5th-6th</td>
<td>+2</td>
<td>12</td>
<td>8</td>
<td>8</td>
<td>Ectoplasmic pool</td>
</tr>
<tr>
<td>7th-8th</td>
<td>+2</td>
<td>13</td>
<td>9</td>
<td>10</td>
<td>Reshape</td>
</tr>
<tr>
<td>9th-10th</td>
<td>+3</td>
<td>14</td>
<td>10</td>
<td>12</td>
<td>Phantom tether</td>
</tr>
<tr>
<td>11th-12th</td>
<td>+3</td>
<td>15</td>
<td>11</td>
<td>14</td>
<td>-</td>
</tr>
<tr>
<td>13th-14th</td>
<td>+4</td>
<td>16</td>
<td>12</td>
<td>16</td>
<td>Quick Reshape</td>
</tr>
<tr>
<td>15th-16th</td>
<td>+4</td>
<td>17</td>
<td>13</td>
<td>18</td>
<td>-</td>
</tr>
<tr>
<td>17th-18th</td>
<td>+5</td>
<td>18</td>
<td>14</td>
<td>22</td>
<td>Etheric strikes</td>
</tr>
<tr>
<td>19th-20th</td>
<td>+5</td>
<td>19</td>
<td>15</td>
<td>24</td>
<td>Soul eater</td>
</tr>
</tbody></table></ScrollContainer>
<Ability id="arc-spiritualist-phantom_blade-alertness-ex" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-phantom_blade-alertness-ex">Alertness (Ex)</Pair>
<Pair title="Ability">While the phantom blade is wielding or harboring her <em>phantom weapon,</em> she gains the <Link to="/feat/alertness">Alertness</Link> feat.</Pair>
</Ability>
<Ability id="arc-spiritualist-phantom_blade-phantom-touch-ex" icon={["upgrade"]}>
<Pair single id="arc-spiritualist-phantom_blade-phantom-touch-ex">Phantom Touch (Ex)</Pair>
<Pair title="Ability">A <em>phantom weapon</em> is always treated as a <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapon, regardless of weapon type or any other abilities modifying the weapon. If the <em>phantom weapon</em> would ever be destroyed, it is instead harbored in the spiritualist's consciousness for 24 hours.</Pair>
</Ability>
<Ability id="arc-spiritualist-phantom_blade-telepathy-su" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-phantom_blade-telepathy-su">Telepathy (Su)</Pair>
<Pair title="Ability">While the phantom blade is wielding or carrying her <em>phantom weapon,</em> she can communicate telepathically with the weapon.</Pair>
</Ability>
<Ability id="arc-spiritualist-phantom_blade-weapon-of-the-mind-ex" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-phantom_blade-weapon-of-the-mind-ex">Weapon of the Mind (Ex)</Pair>
<Pair title="Ability">The phantom blade can harbor her <em>phantom weapon</em> in her consciousness or manifest it in its ectoplasmic form. The phantom blade can manifest the weapon through a ritual that takes 1 minute to perform. Harboring the <em>phantom weapon</em> requires a <strong className="hl">full-round action</strong>. While the weapon is harbored, the phantom blade gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat and treats her unarmed strike damage as a <Link to="/class/monk">monk</Link> of her level - 2. If the phantom blade already has this feat, she instead gains <Link to="/feat/weapon_focus">Weapon Focus</Link> (unarmed strike).</Pair>
<Pair title="Special">The phantom blade's unarmed strikes gain the <em>phantom weapon's</em> enhancement bonus and other abilities when the weapon is harbored. The <em>phantom weapon</em> also recovers a number of hit points equal to its ego score every hour that it is harbored.</Pair>
</Ability>
<Ability id="arc-spiritualist-phantom_blade-quick-manifest-ex" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-phantom_blade-quick-manifest-ex">Quick Manifest (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The phantom blade can manifest her <em>phantom weapon</em> as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-spiritualist-phantom_blade-ectoplasmic-pool-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-spiritualist-phantom_blade-ectoplasmic-pool-ex">Ectoplasmic Pool (Ex)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">The phantom blade gains a reservoir of excess ethereal energy and ectoplasm that she can draw upon to improve her <em>phantom weapon.</em> This pool has a number of ectoplasmic points equal to half her spiritualist level + her Wisdom modifier. The pool refreshes once per day when the spiritualist refreshes her daily spells.</Pair>
<Pair title="Ability">The phantom blade can spend a number of ectoplasmic points to enhance or modify her <em>phantom weapon.</em> As a <strong className="hl">free action</strong>, she can spend 1 point to manifest or harbor her weapon. The spiritualist can also spend 2 ectoplasmic points as a <strong className="hl">free action</strong> to allow attacks made with her <em>phantom weapon</em> to resolve against touch AC for 1 round.</Pair>
<Pair title="Swift Action">She can spend 2 ectoplasmic points to grant the weapon one of the following weapon special abilities for 1 minute: <Link to="/magic-enh/corrosive">corrosive</Link>, <Link to="/magic-enh/defending">defending</Link>, <Link to="/magic-enh/flaming">flaming</Link>, <Link to="/magic-enh/frost">frost</Link>, <Link to="/magic-enh/keen">keen</Link>, <Link to="/magic-enh/merciful">merciful</Link>, <Link to="/magic-enh/shock">shock</Link>, or <Link to="/magic-enh/throwing">throwing</Link>.</Pair>
<Pair title="At 11th Level">She can spend 3 ectoplasmic points to grant the weapon one of the following weapon special abilities for 1 minute: <Link to="/magic-enh/corrosive_burst">corrosive burst</Link>, <Link to="/magic-enh/disruption">disruption</Link>, <Link to="/magic-enh/flaming_burst">flaming burst</Link>, <Link to="/magic-enh/holy">holy</Link>, <Link to="/magic-enh/icy_burst">icy burst</Link>, <Link to="/magic-enh/shocking_burst">shocking burst</Link>, or <Link to="/magic-enh/unholy">unholy</Link>.</Pair>
<Pair title="At 15th Level">She can spend 5 ectoplasmic points to grant the weapon one of the following weapon special abilities for 1 minute: <Link to="/magic-enh/brilliant_energy">brilliant energy</Link>, <Link to="/magic-enh/dancing">dancing</Link>, or <Link to="/magic-enh/speed">speed</Link>.</Pair>
<Pair title="Special">A phantom blade can spend an appropriate number of points to grant the weapon multiple abilities as one action. A <em>phantom weapon</em> cannot have a modified bonus higher than +10.</Pair>
</Ability>
<Ability id="arc-spiritualist-phantom_blade-reshape-ex" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-phantom_blade-reshape-ex">Reshape (Ex)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A phantom blade can change the weapon type of her <em>phantom weapon</em> when she refreshes her daily spells.</Pair>
</Ability>
<Ability id="arc-spiritualist-phantom_blade-phantom-tether-su" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-phantom_blade-phantom-tether-su">Phantom Tether (Su)</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Swift Action">A phantom blade can spend 1 ectoplasmic point to instantly recall her <em>phantom weapon</em> to her hand or consciousness from as far as 1 mile away.</Pair>
</Ability>
<Ability id="arc-spiritualist-phantom_blade-quick-reshape-ex" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-phantom_blade-quick-reshape-ex">Quick Reshape (Ex)</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">A phantom blade can spend 1 ectoplasmic point to reshape her <em>phantom weapon</em> as a <strong className="hl">full-round action</strong>, 2 ectoplasmic points to reshape her weapon as a <strong className="hl">standard action</strong>, 3 ectoplasmic points to reshape her weapon as a <strong className="hl">move action</strong>, and 4 ectoplasmic points to reshape her weapon as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-spiritualist-phantom_blade-etheric-strikes-sp" icon={["armor-downgrade"]}>
<Pair single id="arc-spiritualist-phantom_blade-etheric-strikes-sp">Etheric Strikes (Sp)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Swift Action">A phantom blade can spend 1 ectoplasmic point to allow her <em>phantom weapon</em> to ignore a number of points of damage reduction equal to twice her Wisdom modifier or twice the weapon's Charisma modifier, whichever is higher.</Pair>
</Ability>
<Ability id="arc-spiritualist-phantom_blade-soul-eater-su" icon={["upgrade","magic-swirl","remedy"]}>
<Pair single id="arc-spiritualist-phantom_blade-soul-eater-su" flavor="The phantom blade and her weapon can feast on the energy of departing souls.">Soul Eater (Su)</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Ability">Each time she kills a living or incorporeal creature with her <em>phantom weapon,</em> she can pick one of the following effects: she gains a +2 bonus on attack and damage rolls for 1 round, she recovers one 1st- or 2nd-level spell slot, or she gains a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to the <em>phantom weapon's</em> ego (these temporary hit points last until lost or 1 minute, whichever is shorter).</Pair>
<Pair title="Special">The creature killed must have a number of Hit Dice equal to or greater than half the phantom blade's spiritualist level for this to occur.</Pair>
</Ability>
</>};
const _plague_eater = {title: "Plague Eater", jsx: <><h2 id="arc-spiritualist-plague_eater-plague-eater">Plague Eater</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 12</Link><br/>Iobaria has been ravaged by plague for centuries, and many of its dead do not rest. These ghosts often flock around specialized spiritualists called plague eaters. Such a spiritualist bears the weight of many souls within her consciousness, spirits that remember the devastation of disease and seek to protect their host from infections, cleanse others of plague, and use disease itself as a weapon.</p>
<Ability id="arc-spiritualist-plague_eater-plague-ward" icon={["stairs-goal","broken-shield","armor-upgrade"]}>
<Pair single id="arc-spiritualist-plague_eater-plague-ward">Plague Ward</Pair>
<Pair hl title="Alters">Phantom, shared consciousness</Pair>
<Pair title="Ability">A plague eater does not bond with a single spirit, but rather a group of spirits gathered around her psychic presence. The spiritualist can meditate on an emotional focus during her 8-hour rest and bond with a spirit from her community with a matching focus. A spirit associated with the chosen emotion links with the spiritualist and acts as her phantom until the plague eater changes her emotional focus with another 8-hour rest. The changing roster of spirits dilutes the bond between the plague eater and her community, and the manifesting phantom has a level 1 lower than the spiritualist's level (minimum level 1).</Pair>
<Pair title="Passive Ability">While a phantom is confined in a plague eater's consciousness (but not while it's fully manifested or banished to the Ethereal Plane), it grants a +4 bonus on saving throws against disease.</Pair>
<Pair title="At 12th Level">The saving throw bonus becomes +8.</Pair>
<Pair title="Special">In addition, the phantom grants the plague eater the <Link to="/feat/skill_focus">Skill Focus</Link> feat in one of the skills determined by the phantom's emotional focus. This skill is chosen by the plague eater the first time she confines the phantom tied to that particular emotional focus. Once this choice is made for a given emotional focus, it cannot be changed.</Pair>
</Ability>
<Ability id="arc-spiritualist-plague_eater-spiritual-inoculation-su" icon={["armor-upgrade"]}>
<Pair single id="arc-spiritualist-plague_eater-spiritual-inoculation-su">Spiritual Inoculation (Su)</Pair>
<Pair hl title="Alters">Spiritual interference</Pair>
<Pair title="At 4th Level">Whenever a plague eater is within reach of her ectoplasmic manifested phantom, she gains a +4 circumstance bonus on saving throws against disease.</Pair>
</Ability>
<Ability id="arc-spiritualist-plague_eater-remove-sickness-sp" icon={["magic-swirl","remedy"]}>
<Pair single id="arc-spiritualist-plague_eater-remove-sickness-sp">Remove Sickness (Sp)</Pair>
<Pair hl title="Replaces">Detect undead</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A plague eater's understanding of disease grows to the point where she can cast <Link to="/spell/remove_sickness">remove sickness</Link> at will as a spell-like ability with a caster level equal to her spiritualist level.</Pair>
</Ability>
<Ability id="arc-spiritualist-plague_eater-disfiguring-touch-sp" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-plague_eater-disfiguring-touch-sp">Disfiguring Touch (Sp)</Pair>
<Pair hl title="Replaces">Calm spirit</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four spiritualist levels beyond 7th<ByLevelPop levels={[[7,1],[11,2],[15,3],[19,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A plague eater can inflict upon others the superficial disfigurement associated with plague by casting <Link to="/spell/disfiguring_touch">disfiguring touch</Link> as a spell-like ability once per day.</Pair>
</Ability>
<Ability id="arc-spiritualist-plague_eater-remove-disease-sp" icon={["magic-swirl","remedy"]}>
<Pair single id="arc-spiritualist-plague_eater-remove-disease-sp">Remove Disease (Sp)</Pair>
<Pair hl title="Replaces">See invisibility</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A plague eater gains the ability to purge disease from herself and others. She gains the ability to cast <Link to="/spell/remove_disease">remove disease</Link> as a spell-like ability three times per day.</Pair>
</Ability>
<Ability id="arc-spiritualist-plague_eater-fused-well-being-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-spiritualist-plague_eater-fused-well-being-su">Fused Well-Being (Su)</Pair>
<Pair hl title="Replaces">Fused consciousness</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Passive Ability">A plague eater always gains the benefits of <em>bonded senses</em> when her phantom is manifested. She also gains the skill ranks and bonus to resist disease granted by the spirit's emotional focus, even when her phantom is manifested.</Pair>
</Ability>
<Ability id="arc-spiritualist-plague_eater-greater-spiritual-inoculation-su" icon={["armor-upgrade"]}>
<Pair single id="arc-spiritualist-plague_eater-greater-spiritual-inoculation-su">Greater Spiritual Inoculation (Su)</Pair>
<Pair hl title="Alters">Greater spiritual interference</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">The plague eater becomes immune to disease, including supernatural and magical diseases. In addition, whenever a manifested phantom is in ectoplasmic form, each of the plague eater's allies within the phantom's reach gains a +4 circumstance bonus on saving throws against disease.</Pair>
</Ability>
<Ability id="arc-spiritualist-plague_eater-withdraw-affliction-sp" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-plague_eater-withdraw-affliction-sp">Withdraw Affliction (Sp)</Pair>
<Pair hl title="Replaces">Call spirit</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">A plague eater can reach into a body, remove an affliction directly from the flesh, and use the diseased matter as a weapon. She can cast <Link to="/spell/withdraw_affliction">withdraw affliction</Link> once per day as a spell-like ability with a caster level equal to her spiritualist level.</Pair>
</Ability>
</>};
const _priest_of_the_fallen = {title: "Priest of the Fallen", jsx: <><h2 id="arc-spiritualist-priest_of_the_fallen-priest-of-the-fallen">Priest of the Fallen</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 17</Link><br/>Countless hero-gods have risen and fallen through Iblydos's long history, leaving behind mighty spirits. Those attuned to these fallen hero-gods can become conduits for their restless souls and agents acting out their divine will. The result is a priest of the fallen, a spiritualist who channels her land's legends and provides a vessel for mighty heroes to perform heroic acts once more.</p>
<Ability id="arc-spiritualist-priest_of_the_fallen-mythmaker-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-priest_of_the_fallen-mythmaker-su">Mythmaker (Su)</Pair>
<Pair title="Ability">A priest of the fallen can channel many different hero-god phantoms, though only one at a time. These spirits will not suffer being confined in a mortal's consciousness and must be manifested in ectoplasmic or incorporeal form or they return to the Ethereal Plane. They each have an emotional focus depending on their personality and retain some of their hero-god powers, determined by their mythic archetype.</Pair>
<Pair title="Usage">A priest of the fallen can channel a hero-god phantom with a ritual that takes 1 minute to perform. A priest of the fallen can channel only one hero-god phantom per 24 hours, but once channeled, a hero-god phantom remains until a new one is channeled.</Pair>
</Ability>
<Ability id="arc-spiritualist-priest_of_the_fallen-archmage" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-priest_of_the_fallen-archmage">Archmage</Pair>
<Pair title="Ability">The phantom gains <Link to="/spell/magic_missile">magic missile</Link> and <Link to="/spell/sleep">sleep</Link> as spell-like abilities. It can use each spell-like ability a number of times per day equal to its Hit Dice, which it uses in place of a caster level.</Pair>
<Pair title="At 12th Level">It can also cast <Link to="/spell/fireball">fireball</Link> and <Link to="/spell/hold_person">hold person</Link> each once per day.</Pair>
</Ability>
<Ability id="arc-spiritualist-priest_of_the_fallen-champion" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-priest_of_the_fallen-champion">Champion</Pair>
<Pair title="Ability">The phantom gains <Link to="/feat/weapon_focus">Weapon Focus</Link> (slam) as a bonus feat.</Pair>
<Pair title="At 12th Level">It gains <Link to="/feat/greater_weapon_focus">Greater Weapon Focus</Link> (slam) and <Link to="/feat/weapon_specialization">Weapon Specialization</Link> (slam) as bonus feats.</Pair>
</Ability>
<Ability id="arc-spiritualist-priest_of_the_fallen-guardian" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-spiritualist-priest_of_the_fallen-guardian">Guardian</Pair>
<Pair title="Passive Ability">The phantom gains a +2 natural armor bonus when it manifests in its ectoplasmic form, and a +2 deflection bonus to AC when it manifests in its incorporeal form.</Pair>
<Pair title="At 12th Level">The phantom increases its maximum hit points by twice its number of Hit Dice.</Pair>
</Ability>
<Ability id="arc-spiritualist-priest_of_the_fallen-hierophant" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-priest_of_the_fallen-hierophant">Hierophant</Pair>
<Pair title="Ability">The phantom gains <Link to="/spell/bane">bane</Link> and <Link to="/spell/bless">bless</Link> as spell-like abilities. It can use each spell-like ability a number of times per day equal to its Hit Dice, which it uses in place of a caster level.</Pair>
<Pair title="At 12th Level">It can also cast <Link to="/spell/prayer">prayer</Link> and <Link to="/spell/searing_light">searing light</Link> each once per day.</Pair>
</Ability>
<Ability id="arc-spiritualist-priest_of_the_fallen-marshal" extraClasses="subAbility" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-spiritualist-priest_of_the_fallen-marshal">Marshal</Pair>
<Pair title="Usage">2 + Charisma modifier rounds/day; these rounds need not be consecutive</Pair>
<Pair title="Standard Action">The phantom can fill its allies with its triumphant spirit, granting them a +1 morale bonus on saving throws against charm and fear effects and a +1 competence bonus on attack and weapon damage rolls.</Pair>
<Pair title="At 12th Level">If the phantom is hit by an attack of opportunity, it can use an <strong className="hl">immediate action</strong> to allow an ally to make an attack of opportunity against the creature that attacked the phantom if it's within the ally's melee reach.</Pair>
</Ability>
<Ability id="arc-spiritualist-priest_of_the_fallen-trickster" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-spiritualist-priest_of_the_fallen-trickster">Trickster</Pair>
<Pair hl title="Replaces">Shared consciousness</Pair>
<Pair hl title="Alters">Phantom</Pair>
<Pair title="Usage">Dex modifier times/day (minimum 1)</Pair>
<Pair title="Ability">The phantom gains the <Link to="/ability/sneak_attack">sneak attack</Link> rogue class feature as a rogue of a level equal to the phantom's Hit Dice.</Pair>
<Pair title="At 12th Level">Whenever the phantom is in darkness or <Link to="/rule/dim_light">dim light</Link>, it can move at full speed without taking a penalty on Stealth checks.</Pair>
</Ability>
<Ability id="arc-spiritualist-priest_of_the_fallen-channel-energy-su" extraClasses="hasSubs" icon={["stairs-goal","aura"]}>
<Pair single id="arc-spiritualist-priest_of_the_fallen-channel-energy-su" flavor="A priest of the fallen can channel her phantom's divine energy.">Channel Energy (Su)</Pair>
<Pair hl title="Replaces">Bonded manifestation</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">Charisma modifier times/day (minimum 1)</Pair>
<Pair title="Ability">This functions as the cleric's <Link to="/ability/channel_energy">channel energy</Link> class feature, except she heals or deals damage using her spiritualist level - 2 as her cleric level. (1d6 at 3rd level, 2d6 at 5th level, and so on.)</Pair>
<Pair title="Special">The priest of the fallen decides to channel positive or negative energy based on her alignment. A neutral priest of the fallen can channel either positive or negative energy, but once this choice is made, it cannot be changed.</Pair>
</Ability>
<Ability id="arc-spiritualist-priest_of_the_fallen-channel-energy-su" extraClasses="subAbility" icon={["stairs-goal","aura"]}>
<Pair single id="arc-spiritualist-priest_of_the_fallen-channel-energy-su" flavor="Text from the cleric class ability.">Channel Energy (Su)</Pair>
<Pair title="Usage">3 + Cha modifier times/day</Pair>
<Pair title="Standard Action">You must present your holy symbol to channel energy. This causes a <Link to="/misc/burst">burst</Link> that affects all creatures of one type (either undead or living) in a 30-foot radius centered on you. This deals or heals (see below) 1d6 damage. You can choose whether or not to include yourself in this effect. Creatures that take damage from channeled energy receive a Will save to halve the damage, with a DC equal to 10 + <Link to="/misc/half">half</Link> your cleric level + your Charisma modifier.</Pair>
<Pair title="Choice">A good cleric (or one who worships a good deity) channels <strong className="hl">positive energy</strong> and can choose to deal damage to undead creatures or to heal living creatures. An evil cleric (or one who worships an evil deity) channels <strong className="hl">negative energy</strong> and can choose to deal damage to living creatures or to heal undead creatures. A neutral cleric who worships a neutral deity (or one who is not devoted to a particular deity) must choose whether she channels positive or negative energy. Once this choice is made, it cannot be reversed.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
<Pair title="At 3rd Level">The damage becomes 2d6.</Pair>
<Pair title="At 5th Level">The damage increases to 3d6.</Pair>
<Pair title="At 7th Level">The damage becomes 4d6.</Pair>
<Pair title="At 9th Level">The damage increases to 5d6.</Pair>
<Pair title="At 11th Level">The damage becomes 6d6.</Pair>
<Pair title="At 13th Level">The damage increases to 7d6.</Pair>
<Pair title="At 15th Level">The damage becomes 8d6.</Pair>
<Pair title="At 17th Level">The damage increases to 9d6.</Pair>
<Pair title="At 19th Level">The damage becomes 10d6.</Pair>
<Pair title="Special">Creatures healed by channeled energy cannot exceed their maximum hit point total - all excess healing is lost.</Pair>
</Ability>
<Ability id="arc-spiritualist-priest_of_the_fallen-phantom-call-su" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-priest_of_the_fallen-phantom-call-su">Phantom Call (Su)</Pair>
<Pair hl title="Replaces">Phantom recall</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Standard Action">Once per day, a priest of the fallen can summon a fully manifested hero-god phantom from the Ethereal Plane. If she already has a hero-god phantom manifested, that phantom vanishes back to the Ethereal Plane.</Pair>
</Ability>
<Ability id="arc-spiritualist-priest_of_the_fallen-fused-consciousness-su" icon={["info"]}>
<Pair single id="arc-spiritualist-priest_of_the_fallen-fused-consciousness-su">Fused Consciousness (Su)</Pair>
<Pair hl title="Alters">Fused consciousness</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Info">The <em>fused consciousness</em> ability functions as usual, except the phantom retreats to the Ethereal Plane rather than the priest's consciousness.</Pair>
</Ability>
<Ability id="arc-spiritualist-priest_of_the_fallen-masterful-faith-su" icon={["magic-swirl","spell-book"]}>
<Pair single id="arc-spiritualist-priest_of_the_fallen-masterful-faith-su">Masterful Faith (Su)</Pair>
<Pair hl title="Replaces">Dual bond</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">A priest of the fallen chooses any two <Link to="/ability/domains">cleric domains</Link> and receives their full benefits, treating her spiritualist level as her cleric level. She adds the domain spells to her spells known.</Pair>
</Ability>
<Ability id="arc-spiritualist-priest_of_the_fallen-true-legend-su" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-priest_of_the_fallen-true-legend-su" flavor="A priest of the fallen becomes strong enough to confine a phantom in her consciousness.">True Legend (Su)</Pair>
<Pair hl title="Alters">Empowered consciousness</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Usage">4 + Wisdom modifier rounds/day</Pair>
<Pair title="Standard Action">She confines a phantom in her consciousness. On the start of her following turn, she gains access to all standard spiritualist abilities involving a confined phantom.</Pair>
</Ability>
</>};
const _quintessentialist = {title: "Quintessentialist", jsx: <><h2 id="arc-spiritualist-quintessentialist-quintessentialist">Quintessentialist</h2>
<p><strong>Sources</strong> <Link to="/source/distant_realms">Distant Realms pg. 53</Link><br/>When the pressure to grow wars with a personal need for simplicity, a mortal soul can split between extremes, creating two half-beings that rely on one another to survive. The quintessentialist learns to project her best self - her <em>exemplar</em> - as an independent being, but in doing so leaves only the weakest and basest aspects behind in her body.</p>
<Ability id="arc-spiritualist-quintessentialist-unfocused-spellcasting" icon={["broken-shield"]}>
<Pair single id="arc-spiritualist-quintessentialist-unfocused-spellcasting">Unfocused Spellcasting</Pair>
<Pair title="Ability">A quintessentialist's sheared mind has difficulty focusing on even the simplest spells. All of her spells have a minimum casting time of 1 round, even if casting a spell would normally take less time, such as a standard action.</Pair>
</Ability>
<Ability id="arc-spiritualist-quintessentialist-exemplar" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-spiritualist-quintessentialist-exemplar">Exemplar</Pair>
<Pair hl title="Alters">Phantom</Pair>
<Pair title="Info">Instead of bonding to the phantom of a dead soul, a quintessentialist forges her best qualities into a spiritual aspect called an <em>exemplar,</em> which resides in her subconscious mind at all times rather than on the Ethereal Plane. An <em>exemplar</em> uses the quintessentialist's ability scores when fully manifested rather than those of a standard phantom, but otherwise advances as a phantom.</Pair>
<Pair title="Ability">The <em>exemplar</em> can cast any of the spiritualist's spells while fully manifested, sharing the same spells known and spell slots, and does not suffer from the quintessentialist's <em>unfocused spellcasting</em> ability.</Pair>
<Pair title="Ability">A quintessentialist can fully manifest her <em>exemplar</em> as a <strong className="hl">full-round action</strong> rather than a 1-minute ritual, and she can dismiss it back into her mind as a <strong className="hl">standard action</strong>. When fully manifested, a quintessentialist can transfer any equipment she is currently wearing or carrying to her <em>exemplar,</em> allowing it to manifest with weapons, armor, and other equipment, but doing so removes these possessions from the quintessentialist. She can likewise grant her <em>exemplar</em> any feats she knows, losing access to those feats herself while the <em>exemplar</em> remains fully manifested.</Pair>
<Pair title="Special">Projecting an <em>exemplar</em> is draining. A quintessentialist cannot cast any spells herself and she takes a -2 penalty to all ability scores while her <em>exemplar</em> is fully manifested. Every round the <em>exemplar</em> remains fully manifested, the quintessentialist takes 1d6 points of damage; this damage cannot be reduced or prevented in any way.</Pair>
</Ability>
</>};
const _scourge = {title: "Scourge", jsx: <><h2 id="arc-spiritualist-scourge-scourge">Scourge</h2>
<p><strong>Sources</strong> <Link to="/source/haunted_heroes_handbook">Haunted Heroes Handbook pg. 22</Link><br/>Scourges are students of pain and have a rare connection to tormented and wracked spirits. Most are worshipers of <Link to="/faith/zon_kuthon">Zon-Kuthon</Link> who are more attracted to his mastery of pain than his lordship over darkness. As a result, scourges are found not only in Nidal, but also in Cheliax, Geb, and Irrisen. Faithful of the Midnight Lord often claim the spirits bound to scourges are tortured souls who begged to be given some boon by their deity, and that having their torment extend into death is a reward, rather than a punishment. Scourges seek to share their phantoms' miseries with all around them, using the spirit's pain as a weapon. A scourge's phantom is a broken and wretched creature, and the torments it suffered in life are reflected in its ghostly or ectoplasmic appearance as wounds, scars, grotesque malformations, and tattered garments.</p>
<Ability id="arc-spiritualist-scourge-spell-scourge-su" icon={["armor-downgrade","upgrade"]}>
<Pair single id="arc-spiritualist-scourge-spell-scourge-su">Spell Scourge (Su)</Pair>
<Pair hl title="Replaces">Spiritual interference</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">When a scourge's phantom damages a creature, it causes severe pain, requiring that creature to succeed at a <Link to="/rule/concentration">concentration</Link> check (DC = 20 + spell level) to use spells, spell-like abilities, and other abilities that require concentration for 1 round.</Pair>
<Pair title="Passive Ability">The phantom gains a +2 bonus on attack and damage rolls when making attacks of opportunity. Any creature threatened by the scourge's phantom takes a -2 penalty on concentration checks.</Pair>
</Ability>
<Ability id="arc-spiritualist-scourge-endure-torment-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-spiritualist-scourge-endure-torment-ex">Endure Torment (Ex)</Pair>
<Pair hl title="Replaces">Devotion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A scourge's phantom gains immunity to pain effects and gains a +4 bonus on saving throws against effects that could cause it to become <Link to="/misc/staggered">staggered</Link> or <Link to="/misc/stunned">stunned</Link>.</Pair>
</Ability>
<Ability id="arc-spiritualist-scourge-inflict-pain-sp" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-scourge-inflict-pain-sp">Inflict Pain (Sp)</Pair>
<Pair hl title="Replaces">Calm spirit</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four spiritualist levels beyond 7th</Pair>
<Pair title="Ability">A scourge can use <Link to="/spell/inflict_pain">inflict pain</Link> as a spell-like ability. If her phantom is fully manifested, it can also use this ability, though doing so takes the phantom a <strong className="hl">full-round action</strong>, and it still counts against the scourge's daily uses of this ability.</Pair>
</Ability>
<Ability id="arc-spiritualist-scourge-ectoplasmic-swarm-su" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-scourge-ectoplasmic-swarm-su">Ectoplasmic Swarm (Su)</Pair>
<Pair hl title="Replaces">Greater spiritual interference</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Standard Action">A scourge with a phantom manifested in ectoplasmic form can command it to break apart in a gruesome display of gore and agony, transforming it into a swarm of Diminutive ectoplasmic organs and viscera. The phantom gains the <Link to="/subtype/swarm">swarm</Link> subtype, dealing its unmodified slam damage die as damage for its swarm attack. Its distraction DC is equal to 10 + 1/2 the phantom's Hit Dice + its Constitution modifier.</Pair>
<Pair title="Special">In this form, the phantom is too diffuse to use inflict pain or any of its abilities from emotional focus (even passive abilities).</Pair>
</Ability>
</>};
const _seeker_of_enlightenment = {title: "Seeker of Enlightenment", jsx: <><h2 id="arc-spiritualist-seeker_of_enlightenment-seeker-of-enlightenment">Seeker of Enlightenment</h2>
<p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 22</Link><br/>Sometimes a spiritualist is so haunted by a past life's failure to reach enlightenment that the past life is reborn not as a new creature but as a phantom in a spiritualist's consciousness. The spiritualist and phantom work in tandem to reach enlightenment and atone for the past life's failures.</p>
<Ability id="arc-spiritualist-seeker_of_enlightenment-echoes-of-expertise-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-spiritualist-seeker_of_enlightenment-echoes-of-expertise-ex">Echoes of Expertise (Ex)</Pair>
<Pair hl title="Replaces">Shared consciousness</Pair>
<Pair title="Free Action">Once per day, the seeker of enlightenment can attempt a check with any Knowledge skill, including one in which she is not trained, and add her spiritualist level as a bonus on the check.</Pair>
<Pair title="Passive Ability">A seeker of enlightenment gains a bonus equal to her spiritualist level on checks attempted with the two skills determined by her phantom's emotional focus. When the phantom is confined to the seeker of enlightenment's consciousness, it grants a +2 bonus on saving throws against mind-affecting effects.</Pair>
<Pair title="At 12th Level">The bonus to saving throws increases to +4.</Pair>
</Ability>
<Ability id="arc-spiritualist-seeker_of_enlightenment-words-of-the-past-sp" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-seeker_of_enlightenment-words-of-the-past-sp">Words of the Past (Sp)</Pair>
<Pair hl title="Replaces">Detect undead</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A seeker of enlightenment's connection with her past lives becomes so strong that she can cast <Link to="/spell/comprehend_languages">comprehend languages</Link> at will as a spell-like ability, with a caster level equal to her spiritualist level.</Pair>
</Ability>
<Ability id="arc-spiritualist-seeker_of_enlightenment-karmic-insight-sp" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-seeker_of_enlightenment-karmic-insight-sp" flavor="A seeker of enlightenment gains the ability to understand which actions will push her toward ultimate understanding.">Karmic Insight (Sp)</Pair>
<Pair hl title="Replaces">Calm spirit</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four spiritualist levels beyond 7th<ByLevelPop levels={[[7,1],[11,2],[15,3],[19,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">She can cast <Link to="/spell/augury">augury</Link> as a spell-like ability.</Pair>
</Ability>
<Ability id="arc-spiritualist-seeker_of_enlightenment-pinpoint-influence-sp" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-seeker_of_enlightenment-pinpoint-influence-sp" flavor="A seeker of enlightenment gains the ability to track objects that are important to her goal of enlightenment.">Pinpoint Influence (Sp)</Pair>
<Pair hl title="Replaces">See invisibility</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">She can cast <Link to="/spell/locate_object">locate object</Link> as a spell-like ability once per day, with a duration of 10 minutes.</Pair>
</Ability>
<Ability id="arc-spiritualist-seeker_of_enlightenment-echoes-of-mastery-ex" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-spiritualist-seeker_of_enlightenment-echoes-of-mastery-ex">Echoes of Mastery (Ex)</Pair>
<Pair hl title="Replaces">Fused consciousness</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">A seeker of enlightenment gains the bonus on saving throws from <em>echoes of expertise</em> even when her phantom is manifested. Additionally, once per day, she can take 20 on any Knowledge check, including one in which she is not trained.</Pair>
</Ability>
<Ability id="arc-spiritualist-seeker_of_enlightenment-knowledge-of-the-ancestors-sp" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-seeker_of_enlightenment-knowledge-of-the-ancestors-sp" flavor="A seeker of enlightenment learns how to tap into the knowledge of her past lives.">Knowledge of the Ancestors (Sp)</Pair>
<Pair hl title="Replaces">Call spirit</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">She can cast <Link to="/spell/legend_lore">legend lore</Link> as a spell-like ability once per day.</Pair>
</Ability>
</>};
const _shadow_caller = {title: "Shadow Caller", jsx: <><h2 id="arc-spiritualist-shadow_caller-shadow-caller">Shadow Caller</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 50</Link><br/>While most spiritualists form a bond with the remnants of a creature's soul, some explore ways to bind ephemeral shadows to their own souls in exchange for power.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-spiritualist-shadow_caller--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Creatures that don't normally cast shadows (such as vampires) cannot be shadow callers</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-spiritualist-shadow_caller-shadowcaster" icon={["spell-book","upgrade"]}>
<Pair single id="arc-spiritualist-shadow_caller-shadowcaster">Shadowcaster</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Info">A shadow caller adds <Link to="/spell/darkness">darkness</Link> and <Link to="/spell/deeper_darkness">deeper darkness</Link> to their class spell list as 2nd- and 3rd-level spells, respectively.</Pair>
<Pair title="Passive Ability">When her shade (see below) inhabits her shadow, the shadow caller's effective caster level is one higher when she casts all spells with the shadow or darkness descriptor.</Pair>
</Ability>
<Ability id="arc-spiritualist-shadow_caller-shade" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-shadow_caller-shade">Shade</Pair>
<Pair hl title="Alters">Phantom</Pair>
<Pair title="Ability">A shadow caller gains a special kind of phantom known as a shade. A shade functions as a phantom, except as noted below. A shade is from the Shadow Plane instead of the Ethereal Plane. A shade is not confined to the shadow caller's consciousness, but instead inhabits her shadow.</Pair>
</Ability>
<Ability id="arc-spiritualist-shadow_caller-emotionless-su" extraClasses="hasSubs" icon={["upgrade","info"]}>
<Pair single id="arc-spiritualist-shadow_caller-emotionless-su" flavor="A shadow caller's shade lacks an emotional focus; it is cold and devoid of all emotions.">Emotionless (Su)</Pair>
<Pair title="Ability">The shade gains a number of ranks in Intimidate and Stealth equal to its Hit Dice. The shadow caller gains <Link to="/feat/skill_focus">Skill Focus</Link> in each of these skills while the shade inhabits her shadow.</Pair>
<Pair title="Info">The shade has <Link to="/misc/good_saves">good Reflex and Will saves</Link>, gains <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link> as a bonus feat, and gains the following abilities.</Pair>
</Ability>
<Ability id="arc-spiritualist-shadow_caller-weakening-touch-su" extraClasses="subAbility" icon={["armor-downgrade","magic-palm"]}>
<Pair single id="arc-spiritualist-shadow_caller-weakening-touch-su">Weakening Touch (Su)</Pair>
<Pair title="Ability">A shade's slam attack causes its victim to take a -2 penalty to Strength for 1 round.</Pair>
<Pair title="Standard Action">A shade in incorporeal form can deliver the penalty as a touch attack.</Pair>
<Pair title="Special">This penalty does not stack with itself. This is a negative energy effect.</Pair>
</Ability>
<Ability id="arc-spiritualist-shadow_caller-umbral-shroud-su" extraClasses="subAbility" icon={["aura","upgrade"]}>
<Pair single id="arc-spiritualist-shadow_caller-umbral-shroud-su">Umbral Shroud (Su)</Pair>
<Pair title="At 7th Level">The the shadow caller's shade can emit a 10-foot aura of swirling shadows that grants all allies 20% <Link to="/rule/concealment">concealment</Link> against creatures without darkvision or the <Link to="/umr/see_in_darkness">see in darkness</Link> ability, and a +4 bonus on Stealth checks.</Pair>
</Ability>
<Ability id="arc-spiritualist-shadow_caller-shadow-caster-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-shadow_caller-shadow-caster-sp">Shadow Caster (Sp)</Pair>
<Pair title="At 12th Level">Her shade gains the ability to cast either <Link to="/spell/shadow_conjuration">shadow conjuration</Link> or <Link to="/spell/shadow_evocation">shadow evocation</Link> once per day. It uses its Hit Dice as its caster level, and the DC for these spells equals 10 + 1/2 the shade's Hit Dice + its Charisma modifier. Instead of the normal spell level and percentage of reality for the two spells, the maximum spell level of the duplicated spell is 4th level, and the effects are 40% real.</Pair>
<Pair title="At 18th Level">The maximum spell level improves to 6th level and effects are 60% real.</Pair>
</Ability>
<Ability id="arc-spiritualist-shadow_caller-midnight-shroud-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-spiritualist-shadow_caller-midnight-shroud-su">Midnight Shroud (Su)</Pair>
<Pair title="At 17th Level">Her shade's <em>umbral shroud</em> also lowers the <Link to="/rule/light_level">light level</Link> in its range to darkness, regardless of the prevailing conditions; this counts as a 7th-level <em>darkness</em> spell for the purpose of adjudicating light and darkness effects.</Pair>
</Ability>
<Ability id="arc-spiritualist-shadow_caller-inhabit-shadow-su" icon={["info","upgrade"]}>
<Pair single id="arc-spiritualist-shadow_caller-inhabit-shadow-su">Inhabit Shadow (Su)</Pair>
<Pair hl title="Replaces">Shared consciousness</Pair>
<Pair title="Info">A shade resides within a shadow caller's own shadow. When the shade is summoned, the shadow caller does not cast a shadow under any circumstances.</Pair>
<Pair title="Passive Ability">While the shade inhabits its master's shadow, the shadow caller gains darkvision 60 feet. If the shadow caller already has darkvision, its range increases by 30 feet. Additionally, the shadow caller gains a +4 circumstance bonus on Stealth checks against creatures without darkvision or the <em>see in darkness</em> ability.</Pair>
<Pair title="At 12th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-spiritualist-shadow_caller-shadow-bound-su" icon={["broken-shield","info"]}>
<Pair single id="arc-spiritualist-shadow_caller-shadow-bound-su">Shadow Bound (Su)</Pair>
<Pair hl title="Replaces">Etheric tether</Pair>
<Pair title="Ability">A shadow caller's shade remains stable while adjacent to the shadow caller, or while up to 5 feet away from the shadow caller for every 5 levels the shadow caller possesses. If the shade moves beyond this distance, it is automatically dismissed back to the Shadow Plane (preventing the shade from being summoned back for 24 hours) unless the shadow caller concentrates as per the <em>etheric tether</em> ability. However, if both the shadow caller and shade are in areas of total darkness, the shade can move any distance from the shadow caller.</Pair>
<Pair title="Special">If the shade is beyond its maximum distance and enters an area of dim or brighter illumination, it immediately returns to the Shadow Plane and cannot be summoned for 24 hours.</Pair>
</Ability>
<Ability id="arc-spiritualist-shadow_caller-shadow-jump-su" extraClasses="hasSubs" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-shadow_caller-shadow-jump-su">Shadow Jump (Su)</Pair>
<Pair hl title="Replaces">Phantom recall</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">When a shadow caller's shade inhabits her shadow, she can travel between shadows as per the <Link to="/pclass/shadowdancer">shadowdancer's</Link> shadow jump ability. Each day, she can travel a total of 40 feet per spiritualist level in this way and, as with a shadowdancer, the distance is rounded to the nearest 10-foot increment.</Pair>
</Ability>
<Ability id="arc-spiritualist-shadow_caller-shadow-jump-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-shadow_caller-shadow-jump-su" flavor="Relevant text from the shadowdancer class ability.">Shadow Jump (Su)</Pair>
<Pair title="Ability">A shadowdancer gains the ability to travel between shadows as if by means of a <Link to="/spell/dimension_door">dimension door</Link> spell. The limitation is that the magical transport must begin and end in an area with at least some dim light.</Pair>
<Pair title="Usage">A shadowdancer can jump up to a total of 40 feet each day in this way. This amount can be split among many jumps, but each one, no matter how small, counts as a 10-foot increment.</Pair>
</Ability>
<Ability id="arc-spiritualist-shadow_caller-see-in-darkness-su" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-shadow_caller-see-in-darkness-su">See in Darkness (Su)</Pair>
<Pair hl title="Replaces">See invisibility</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Usage">1 round/day per spiritualist level; these rounds need not be consecutive</Pair>
<Pair title="Standard Action">A shadow caller can gain the <Link to="/umr/see_in_darkness">see in darkness</Link> universal monster ability.</Pair>
</Ability>
<Ability id="arc-spiritualist-shadow_caller-umbral-aura-su-sp" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="arc-spiritualist-shadow_caller-umbral-aura-su-sp">Umbral Aura (Su, Sp)</Pair>
<Pair hl title="Replaces">Fused consciousness</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Passive Ability">A shadow caller is wreathed in an aura of darkness while her shade inhabits her shadow, gaining 50% <Link to="/rule/concealment">concealment</Link> against creatures without darkvision or the <em>see in darkness</em> ability. Additionally, the shadow caller's square and all adjacent squares are treated as areas of dim illumination while she benefits from this ability; this second effect counts as a 4th-level <em>darkness</em> spell for the purpose of adjudicating light and darkness effects.</Pair>
<Pair title="Ability">While her shade inhabits her shadow, the shadow caller can <em>hide in plain sight</em> (the ability to use <Link to="/skill/stealth">Stealth</Link> to hide, even while being observed), even if an observing creature has darkvision or <em>see in darkness.</em></Pair>
</Ability>
<Ability id="arc-spiritualist-shadow_caller-living-darkness-su" icon={["armor-upgrade","magic-palm","remedy"]}>
<Pair single id="arc-spiritualist-shadow_caller-living-darkness-su" flavor="A shadow caller becomes a creature of absolute darkness.">Living Darkness (Su)</Pair>
<Pair hl title="Replaces">Empowered consciousness</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">When using her incorporeal bonded manifestation, she is immune to cold and mind-affecting effects.</Pair>
<Pair title="Standard Action">She can use an incorporeal touch attack to deal 20d6 points of negative energy damage. When the shadow caller damages a creature with this ability, she gains 5d6 <Link to="/rule/temporary_hit_points">temporary hit points</Link> (Fortitude half; DC = 20 + her Wisdom modifier), so long as she doesn't already have any temporary hit points gained via this ability). Temporary hit points gained this way disappear after 1 hour.</Pair>
</Ability>
</>};
const _soul_warden = {title: "Soul Warden", jsx: <><h2 id="arc-spiritualist-soul_warden-soul-warden">Soul Warden</h2>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 20</Link><br/>Normally, the bond a spiritualist shares with his phantom persists for the duration of the spiritualist's life, but in certain rare instances, a spiritualist can guide the phantom hiding within her on to the afterlife, choosing to release the phantom and abandoning many of the classic powers her class normally grants her. When this unusual circumstance happens, the spiritualist retains all the psychic potential from her time serving as a conduit and a vessel, even though she is no longer accompanied by her phantom. While some who would have otherwise become adventuring spiritualists take this as an opportunity to instead choose a normal life, others are galvanized to become wardens of the soulstream, serving <Link to="/faith/pharasma">Pharasma</Link> and working with <Link to="/family/psychopomp">psychopomps</Link> to protect vulnerable souls from those who seek to capture, corrupt, or devour them. At the GM's discretion, a spiritualist might help her phantom move on during play, and if the attempt is successful, she can apply this archetype retroactively, making the appropriate modifications to her class choices as if she had been a soul warden from first level.</p>
<Ability id="arc-spiritualist-soul_warden-nosoi-scribe" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-soul_warden-nosoi-scribe">Nosoi Scribe</Pair>
<Pair hl title="Replaces">Phantom, etheric tether, shared consciousness, spiritual interference, fused consciousness, greater spiritual interference</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A soul warden gains a fledgling nosoi <Link to="/ability/familiar">familiar</Link>. Treat this as a <Link to="/monster/raven">raven familiar</Link> until the soul warden reaches 4th level, at which point it is treated as a <Link to="/monster/nosoi">nosoi</Link> (as though the soul warden had taken the <Link to="/feat/improved_familiar">Improved Familiar</Link> feat).</Pair>
<Pair title="Info">The familiar uses the soul warden's spiritualist level as its Hit Dice for the purpose of determining the effects and duration of its <em>haunting melody</em> ability and all other effects related to its HD.</Pair>
<Pair title="At 10th Level">The nosoi scribe gains the ability to use its <em>touch the spirit world</em> ability three times per day, instead of once per day.</Pair>
<Pair title="At 12th Level">It also gains the <Link to="/domain/repose">Repose</Link> domain's <em>ward against death</em> ability.</Pair>
</Ability>
<Ability id="arc-spiritualist-soul_warden-ward-against-death-su" extraClasses="subAbility" icon={["shield-reflect"]}>
<Pair single id="arc-spiritualist-soul_warden-ward-against-death-su" flavor="Text from the Respose domain ability.">Ward Against Death (Su)</Pair>
<Pair title="Usage">1 round/day per cleric level; these rounds need not be consecutive</Pair>
<Pair title="Standard Action">You can emit a 30-foot aura that wards against death. Living creatures in this area are immune to all death effects, energy drain, and effects that cause <Link to="/rule/negative_levels">negative levels</Link>. This ward does not remove negative levels that a creature has already gained, but the negative levels have no effect while the creature is inside the warded area.</Pair>
</Ability>
<Ability id="arc-spiritualist-soul_warden-psychopomps-bond-su" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-soul_warden-psychopomps-bond-su" flavor="A soul warden's bond with her nosoi scribe is stronger than usual for a master and familiar.">Psychopomp's Bond (Su)</Pair>
<Pair hl title="Alters">Bonded senses, phantom recall</Pair>
<Pair title="At 2nd Level">She can use <em>bonded senses</em> with her nosoi scribe.</Pair>
<Pair title="At 6th Level">She can use <em>phantom recall</em> to recall her nosoi scribe to her side.</Pair>
</Ability>
<Ability id="arc-spiritualist-soul_warden-warding-vessel-su" icon={["shield-reflect"]}>
<Pair single id="arc-spiritualist-soul_warden-warding-vessel-su">Warding Vessel (Su)</Pair>
<Pair hl title="Replaces">Bonded manifestation</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A soul warden can allow a spirit, soul, or incorporeal creature to hide inside her. While within the soul warden, the warded creature can communicate with the soul warden, and it can be targeted only by effects that could target a creature possessing another creature's body. The warded creature has no other influence over the soul warden or her body.</Pair>
<Pair title="Special">If the soul warden is reduced below 0 hit points, the warded creature is expelled.</Pair>
</Ability>
<Ability id="arc-spiritualist-soul_warden-phantom-elegy-su" icon={["aura"]}>
<Pair single id="arc-spiritualist-soul_warden-phantom-elegy-su">Phantom Elegy (Su)</Pair>
<Pair hl title="Replaces">Bonded manifestation increases, dual bond</Pair>
<Pair title="At 8th Level">A soul warden's nosoi scribe learns to sing elegies that build on the soul warden's conduit to her former phantom. This allows it to create an effect identical to the 7th-level <em>aura</em> ability of an <Link to="/emotionalfocus/anger">anger</Link>, <Link to="/emotionalfocus/dedication">dedication</Link>, <Link to="/emotionalfocus/despair">despair</Link>, <Link to="/emotionalfocus/fear">fear</Link>, <Link to="/emotionalfocus/hatred">hatred</Link>, <Link to="/emotionalfocus/jealousy">jealousy</Link>, or <Link to="/emotionalfocus/zeal">zeal</Link> phantom, except that the <em>phantom elegy</em> is also a sonic effect and continues only as long as the nosoi scribe sings. Each round of <em>phantom elegy</em> uses 1 round of the nosoi scribe's <em>haunting melody.</em></Pair>
<Pair title="At 17th Level">The nosoi scribe can blend any two of the phantom aura abilities into a single <em>phantom elegy,</em> although it uses 3 rounds of its <em>haunting melody</em> for each round it does so.</Pair>
</Ability>
<Ability id="arc-spiritualist-soul_warden-algea-call-su" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-soul_warden-algea-call-su">Algea Call (Su)</Pair>
<Pair hl title="Replaces">Empowered consciousness</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Standard Action">Once per hour, a soul warden's nosoi scribe can summon countless other nosoi, which flock together to form an <Link to="/monster/algea">algea</Link>. This transformation lasts for 1 minute, after which the nosoi scribe returns unharmed, unless the algea is brought to 0 hit points or killed, in which case the nosoi scribe returns unconscious at 0 hit points. This is a summoning effect.</Pair>
</Ability>
</>};
const _totem_spiritualist = {title: "Totem Spiritualist", jsx: <><h2 id="arc-spiritualist-totem_spiritualist-totem-spiritualist">Totem Spiritualist</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 6</Link><br/>The god callers of Sarkoris had numerous traditions mixing naturalism with the arcane and occult arts. One of the few traditions to survive to the present day is that of the totem spiritualists. These specialized spiritualists call upon phantoms that are manifestations of animals and personifications of nature.</p>
<Ability id="arc-spiritualist-totem_spiritualist-phantom-animal" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-totem_spiritualist-phantom-animal">Phantom Animal</Pair>
<Pair hl title="Replaces">Phantom</Pair>
<Pair title="Ability"><p>A totem spiritualist calls upon spirits of nature known as phantom animals to assist her in her journeys. A phantom animal functions like an <Link to="/sidekick/animal_companion">animal companion</Link> except as noted in the descriptions below.</p>
<p>A totem spiritualist begins play with a phantom animal. The phantom animal uses the statistics of an animal companion and follows the standard animal companion progression in regard to Hit Dice, base attack bonus, saving throws, skills, feats, natural armor bonus, Strength and Dexterity bonuses, and <Link to="/ability/bonus_tricks">bonus tricks</Link>, but not its special abilities. A phantom animal instead gains the special abilities of <Link to="/sidekick/phantom">a standard phantom</Link>. A phantom animal is capable of becoming harbored in the spiritualist's consciousness or becoming fully or partially manifested. A phantom animal is otherwise considered a phantom for the purposes of all feats and abilities.</p>
</Pair>
<Pair title="At 7th Level">The totem spiritualist can either <em>gain an additional phantom animal</em> or <em>empower a phantom animal,</em> as described in the options below.</Pair>
<Pair title="At 12th Level">She can <em>gain</em> or <em>empower</em> again.</Pair>
<Pair title="At 17th Level">She can <em>gain</em> or <em>empower</em> again.</Pair>
<Pair title="Special"><p>A totem spiritualist can release a phantom animal from her service much like a <Link to="/class/druid">druid</Link> releases an animal companion. If a totem spiritualist releases a phantom animal from service, she can gain a new one by performing a ritual requiring 24 uninterrupted hours of meditation in an environment where the animal that the phantom resembles typically lives.</p>
<p>A totem spiritualist treats any druid levels she has as effective spiritualist levels to determine the abilities of her phantom animals, but does not treat her spiritualist levels as effective druid levels to determine the abilities of animal companions.</p>
</Pair>
</Ability>
<Ability id="arc-spiritualist-totem_spiritualist-gain-an-additional-phantom-animal" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-totem_spiritualist-gain-an-additional-phantom-animal">Gain an Additional Phantom Animal</Pair>
<Pair title="Ability">This additional phantom animal uses the appropriate statistics for a phantom animal of its level.</Pair>
<Pair title="Special">A totem spiritualist can have only one active phantom animal at a time. Dismissing an active phantom animal to call another requires a ritual that takes 1 minute to perform.</Pair>
</Ability>
<Ability id="arc-spiritualist-totem_spiritualist-empower-a-phantom-animal" extraClasses="subAbility numbered" icon={["upgrade"]}>
<Pair single id="arc-spiritualist-totem_spiritualist-empower-a-phantom-animal">Empower a Phantom Animal</Pair>
<Pair title="Ability">The first time the phantom animal is empowered, it gains two bonus tricks. The second time it is empowered, the phantom animal gains the hunter's <Link to="/ability/animal_focus">animal focus</Link> class ability, treating the totem spiritualist's spiritualist level as her effective <Link to="/class/hunter">hunter</Link> level. The third time it is empowered, the damage dice of the phantom animal's natural attacks increase <Link to="/misc/by_one_step">by one step</Link>.</Pair>
</Ability>
<Ability id="arc-spiritualist-totem_spiritualist-shared-instincts-su" icon={["upgrade"]}>
<Pair single id="arc-spiritualist-totem_spiritualist-shared-instincts-su">Shared Instincts (Su)</Pair>
<Pair hl title="Alters">Shared consciousness</Pair>
<Pair title="Passive Ability">A totem spiritualist doesn't gain Skill Focus feats while a phantom animal is confined in her consciousness. She instead gains a number of bonus ranks in Knowledge (nature) equal to the phantom animal's Hit Dice.</Pair>
</Ability>
<Ability id="arc-spiritualist-totem_spiritualist-animal-senses-su" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-totem_spiritualist-animal-senses-su" flavor="A totem spiritualist shares her phantom animal's senses.">Animal Senses (Su)</Pair>
<Pair hl title="Replaces">See invisibility</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">If her phantom animal has any of the following abilities, she gains them whenever the phantom animal is harbored in her consciousness: <Link to="/umr/blindsense">blindsense</Link>, darkvision, low-light vision, and <Link to="/umr/scent">scent</Link>.</Pair>
</Ability>
<Ability id="arc-spiritualist-totem_spiritualist-twin-phantoms-su" icon={["upgrade"]}>
<Pair single id="arc-spiritualist-totem_spiritualist-twin-phantoms-su" flavor="The totem spiritualist can call upon two of her phantom animals at once.">Twin Phantoms (Su)</Pair>
<Pair hl title="Replaces">Dual bond</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Standard Action">She can manifest a second phantom animal. The phantom animal remains for a number of rounds per day equal to her spiritualist level and can be dismissed as a <strong className="hl">free action</strong>. This duration does not need to be consecutive.</Pair>
</Ability>
</>};
const _usher_of_lost_souls = {title: "Usher of Lost Souls", jsx: <><h2 id="arc-spiritualist-usher_of_lost_souls-usher-of-lost-souls">Usher of Lost Souls</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 7</Link><br/>Ushers of lost souls are spiritualists who focus on bringing the souls of the dead to their final judgments at the end of the River of Souls. To this end, they specialize in destroying undead and in laying haunts to rest. Skeptics who point out the apparent contradiction that ushers of lost souls use phantoms to aid them are quickly told that their ectoplasmic allies hail from the Ethereal Plane and are not actually undead. Ushers of lost souls are common among the clergy of Pharasma and are seen throughout the Inner Sea region.</p>
<Ability id="arc-spiritualist-usher_of_lost_souls-etheric-channel-su" extraClasses="hasSubs" icon={["aura"]}>
<Pair single id="arc-spiritualist-usher_of_lost_souls-etheric-channel-su" flavor="An usher of lost souls can focus ethereal energies to channel waves of disruption.">Etheric Channel (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day (minimum 1)</Pair>
<Pair title="Ability">The spiritualist can <Link to="/ability/channel_positive_energy">channel positive energy</Link>. She channels energy like a cleric of her spiritualist level, except the channeled energy can be used only to harm undead or haunts. This otherwise functions as <em>channel energy</em> for the purposes of feats and abilities. The spiritualist does not require a holy symbol to use this ability.</Pair>
</Ability>
<Ability id="arc-spiritualist-usher_of_lost_souls-channel-energy-su" extraClasses="subAbility" icon={["aura"]}>
<Pair single id="arc-spiritualist-usher_of_lost_souls-channel-energy-su" flavor="Relevant text from the cleric class ability.">Channel Energy (Su)</Pair>
<Pair title="Standard Action">You cause a <Link to="/misc/burst">burst</Link> that affects all creatures of one type (either undead or living) in a 30-foot radius centered on you. This deals 1d6 damage. Creatures that take damage from channeled energy receive a Will save to halve the damage, with a DC equal to 10 + <Link to="/misc/half">half</Link> your cleric level + your Charisma modifier.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
<Pair title="At 3rd Level">The damage becomes 2d6.</Pair>
<Pair title="At 5th Level">The damage increases to 3d6.</Pair>
<Pair title="At 7th Level">The damage becomes 4d6.</Pair>
<Pair title="At 9th Level">The damage increases to 5d6.</Pair>
<Pair title="At 11th Level">The damage becomes 6d6.</Pair>
<Pair title="At 13th Level">The damage increases to 7d6.</Pair>
<Pair title="At 15th Level">The damage becomes 8d6.</Pair>
<Pair title="At 17th Level">The damage increases to 9d6.</Pair>
<Pair title="At 19th Level">The damage becomes 10d6.</Pair>
</Ability>
<Ability id="arc-spiritualist-usher_of_lost_souls-spirit-senses-ex" icon={["upgrade"]}>
<Pair single id="arc-spiritualist-usher_of_lost_souls-spirit-senses-ex">Spirit Senses (Ex)</Pair>
<Pair hl title="Replaces">Bonded senses</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An usher of lost souls gains a bonus equal to half her spiritualist level on Perception checks to detect haunts and incorporeal creatures and on Sense Motive checks to determine whether a creature is possessed, under the effects of an enchantment or curse, or otherwise magically controlled.</Pair>
</Ability>
<Ability id="arc-spiritualist-usher_of_lost_souls-disrupting-phantom-ex" icon={["mailed-fist"]}>
<Pair single id="arc-spiritualist-usher_of_lost_souls-disrupting-phantom-ex">Disrupting Phantom (Ex)</Pair>
<Pair hl title="Replaces">Spiritual interference, greater spiritual interference</Pair>
<Pair title="At 4th Level">An usher of lost souls's phantom gains the ability to directly harm haunts. The phantom can make an attack while within a haunt's area against an AC equal to 10 + the haunt's caster level. On a hit, the phantom deals its slam damage to the haunt; the haunt is immune to critical hits from the phantom.</Pair>
<Pair title="At 12th Level">Her phantom can deal critical hits to a haunt, and the critical threat range for its slam attacks against haunts increases to 19-20.</Pair>
</Ability>
<Ability id="arc-spiritualist-usher_of_lost_souls-locate-haunts-su" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-usher_of_lost_souls-locate-haunts-su" flavor="An usher of lost souls can locate inactive haunts.">Locate Haunts (Su)</Pair>
<Pair hl title="Replaces">See invisibility</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Usage">10 minutes/day per spiritualist level; these minutes need not be consecutive, but they must be spent in 10-minute increments</Pair>
<Pair title="Standard Action">She can enhance her vision to detect haunts within 60 feet of her. A haunt's area glows with a bright light for an untriggered haunt or dim light for a haunt that is waiting to reset.</Pair>
</Ability>
<Ability id="arc-spiritualist-usher_of_lost_souls-disruptive-influence-su" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-usher_of_lost_souls-disruptive-influence-su" flavor="The usher of lost souls can put spirits to rest.">Disruptive Influence (Su)</Pair>
<Pair hl title="Replaces">Spiritual bond</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">She can use one of her uses of <em>calm spirit</em> to instead cast <Link to="/spell/purge_spirit">purge spirit</Link> as a spell-like ability. She can expend two uses of her <em>etheric channel</em> to cast either of these spells as a spell-like ability.</Pair>
</Ability>
</>};
const _ward_spiritualist = {title: "Ward Spiritualist", jsx: <><h2 id="arc-spiritualist-ward_spiritualist-ward-spiritualist">Ward Spiritualist</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 18</Link><br/>While many spiritualists are bound to a departed spirit, a condition more likely to be the result of chance or tragedy than a career choice, there are some individuals who seek out this life. A ward spiritualist ventures into the wilderness and petitions a <Link to="/family/kami">kami</Link> to help her in her travels, either taking an existing ward with her or becoming the kami's new ward.</p>
<Ability id="arc-spiritualist-ward_spiritualist-kami-phantom-su" icon={["broken-shield"]}>
<Pair single id="arc-spiritualist-ward_spiritualist-kami-phantom-su">Kami Phantom (Su)</Pair>
<Pair hl title="Alters">Phantom</Pair>
<Pair title="Info">The ward spiritualist's phantom is less powerful than most, but it has an innate connection to its ward. The ward spiritualist's phantom is a kami phantom, functioning as normal for a <Link to="/sidekick/phantom">phantom</Link>, except that its base attack bonus is equal to three-quarters its Hit Dice (as a <Link to="/class/rogue">rogue</Link>) and its Hit Dice are d8s instead of d10s. Additionally, a kami phantom cannot manifest as incorporeal, only ectoplasmic.</Pair>
</Ability>
<Ability id="arc-spiritualist-ward_spiritualist-ward-implement-su" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-ward_spiritualist-ward-implement-su">Ward Implement (Su)</Pair>
<Pair hl title="Replaces">Bonded senses, phantom recall, greater spiritual interference</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Ability"><p>The ward spiritualist gains a single implement school of her choice, as an <Link to="/class/occultist">occultist</Link>, along with its resonant focus power and base focus power. The ward spiritualist does not gain additional spells from her ward implement, and it always starts each day with mental focus invested equal to half her class level (minimum 1).</p>
<p>When she gains her ward implement, the ward spiritualist must choose either to have a physical implement or to be the implement herself. If she chooses to have a physical implement, her spiritualist spells include it as a focus component, and she can change what item is her implement when she regains her spells at the start of each day. Her implement must be an item that can be held in one hand, and it cannot be a manufactured weapon. If the ward spiritualist chooses to be her own ward implement, her spiritualist spells always have a somatic component in addition to their other components; this component does not become an emotion component.</p>
<p>She can remove the focus or somatic component of her spells, but this requires a <Link to="/rule/concentration">concentration</Link> check with a DC equal to 15 + twice the spell level, which is increased for a thought component as normal.</p>
</Pair>
<Pair title="At 2nd Level">She gains a focus power for her implement school.</Pair>
<Pair title="At 6th Level">She gains a focus power for her implement school.</Pair>
<Pair title="At 10th Level">She gains a focus power for her implement school.</Pair>
<Pair title="Special">She must meet the prerequisites of these focus powers, treating her spiritualist level as her occultist level for focus power prerequisites. She also treats her spiritualist level as her occultist level for feat prerequisites.</Pair>
</Ability>
<Ability id="arc-spiritualist-ward_spiritualist-merged-manifestation-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-spiritualist-ward_spiritualist-merged-manifestation-su">Merged Manifestation (Su)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The ward spiritualist learns how to merge her kami phantom with her ward implement. This functions as <em>bonded manifestation,</em> except that she does not choose ectoplasmic or incorporeal. Instead, she gains different benefits depending on whether she has a physical implement or is her own implement.</Pair>
</Ability>
<Ability id="arc-spiritualist-ward_spiritualist-physical-implement" extraClasses="subAbility numbered" icon={["upgrade"]}>
<Pair single id="arc-spiritualist-ward_spiritualist-physical-implement">Physical Implement</Pair>
<Pair title="Ability">If she has a physical implement, when using her <em>merged manifestation,</em> her implement functions as a one-handed <Link to="/misc/improvised_weapon">improvised weapon</Link> of appropriate size, and she does not take the usual penalties associated with wielding an improvised weapon. Additionally, it is considered to have a +1 enhancement bonus for the duration of the <em>merged manifestation.</em></Pair>
<Pair title="At 8th Level">The enchantment bonus becomes +2. It deals damage as a weapon <Link to="/misc/one_size_category_larger">one size category larger</Link>.</Pair>
<Pair title="At 13th Level">The enchantment bonus increases to +3. Her implement also gains the benefits of <Link to="/spell/spirit_bound_blade">spirit-bound blade</Link> for the duration of the <em>merged manifestation.</em></Pair>
<Pair title="At 18th Level">The enchantment bonus becomes +4. It now deals damage as a weapon two size categories larger.</Pair>
</Ability>
<Ability id="arc-spiritualist-ward_spiritualist-is-her-own-implement" extraClasses="subAbility numbered" icon={["mailed-fist"]}>
<Pair single id="arc-spiritualist-ward_spiritualist-is-her-own-implement">Is Her Own Implement</Pair>
<Pair title="Ability">If she is her own implement, when using her <em>merged manifestation,</em> she gains the <em>unarmed strike</em> class feature as a 1st level <Link to="/class/unchained_monk">unchained monk</Link>.</Pair>
<Pair title="At 8th Level">Her unarmed strike damage is that of a 4th-level unchained monk, and she gains <em>flurry of blows</em> as a 1st-level unchained monk.</Pair>
<Pair title="At 13th Level">Her unarmed damage is that of an 8th-level unchained monk, and her unarmed strikes gain the benefits of <em>spirit-bound blade</em> for the duration of the <em>merged manifestation.</em></Pair>
<Pair title="At 18th Level">Her unarmed damage is that of a 12th level unchained monk, and she can use <em>flurry of blows</em> as an 11th-level unchained monk.</Pair>
</Ability>
<Ability id="arc-spiritualist-ward_spiritualist-unarmed-strike-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-spiritualist-ward_spiritualist-unarmed-strike-ex" flavor="Text from the unchained monk class ability.">Unarmed Strike (Ex)</Pair>
<Pair title="Ability"><p>You gain <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat. Your attacks can be with fists, elbows, knees, and feet. This means that you can make unarmed strikes with your hands full. There is no such thing as an off-hand attack when you're striking unarmed. You can apply your full Strength bonus on damage rolls for all your unarmed strikes. Your unarmed strikes deal lethal damage, although you can choose to deal nonlethal damage with no penalty on the attack roll. You can make this choice while grappling as well.</p>
<ScrollContainer id="arc-spiritualist-ward_spiritualist--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Damage (Small Monk)</th>
<th>Damage (Medium)</th>
<th>Damage (Large)</th>
</tr>
</thead>
<tbody><tr>
<td>1st-3rd</td>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
</tr>
<tr>
<td>4th-7th</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
</tr>
<tr>
<td>8th-11th</td>
<td>1d8</td>
<td>1d10</td>
<td>2d8</td>
</tr>
<tr>
<td>12th-15th</td>
<td>1d10</td>
<td>2d6</td>
<td>3d6</td>
</tr>
<tr>
<td>16th-19th</td>
<td>2d6</td>
<td>2d8</td>
<td>3d8</td>
</tr>
<tr>
<td>20th</td>
<td>2d8</td>
<td>2d10</td>
<td>4d8</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
<Pair title="Special">Your unarmed strike is treated as both a manufactured weapon and a natural weapon for the purpose of spells and effects that enhance or improve either manufactured weapons or natural weapons. The damage of your strike is determined by your size and level, shown on the chart below.</Pair>
</Ability>
<Ability id="arc-spiritualist-ward_spiritualist-flurry-of-blows-ex" icon={["mailed-fist"]}>
<Pair single id="arc-spiritualist-ward_spiritualist-flurry-of-blows-ex" flavor="Text from the unchained monk class ability.">Flurry of Blows (Ex)</Pair>
<Pair title="Full-Round Action">You can make a flurry of blows as a full-attack action. When doing this, you can make one additional attack at your highest base attack bonus. This additional attack stacks with the bonus attacks from <Link to="/spell/haste">haste</Link> and other similar effects. When using this ability, you can make these attacks with any combination of your unarmed strikes and weapons that have the monk special weapon quality. You take no penalty for using multiple weapons when making a flurry of blows, but you do not gain any additional attacks beyond what's already granted by the flurry for doing so. (You can still gain additional attacks from a high base attack bonus, from this ability, and from <em>haste</em> and similar effects).</Pair>
<Pair title="At 11th Level">You can now make two additional attacks at your highest base attack bonus during your flurry of blows. This still stacks with <em>haste</em> and similar effects.</Pair>
</Ability>
</>};
const _zeitgeist_binder = {title: "Zeitgeist Binder", jsx: <><h2 id="arc-spiritualist-zeitgeist_binder-zeitgeist-binder">Zeitgeist Binder</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 51</Link><br/>Not all spiritualists deal in the souls of creatures that refuse to pass into death. Zeitgeist binders channel the emotional connections of a group of people into a unique phantom that personifies a community.</p>
<Ability id="arc-spiritualist-zeitgeist_binder-zeitgeist-su" icon={["info"]}>
<Pair single id="arc-spiritualist-zeitgeist_binder-zeitgeist-su">Zeitgeist (Su)</Pair>
<Pair hl title="Alters">Phantom</Pair>
<Pair title="Info">A zeitgeist binder's phantom is called a zeitgeist. In addition to an emotion, a zeitgeist is tied to one <Link to="/rule/the_settlement_stat_block">aspect of its settlement</Link>: corruption, crime, economy, law, lore, or society. In order to select an aspect, that aspect of the settlement must have a positive modifier (for instance, a settlement with a negative lore modifier or a modifier of 0 could not manifest a lore zeitgeist). Although a zeitgeist personifies a single chosen settlement, a zeitgeist binder can call it anywhere, but outside the bounds of its settlement, it loses the benefits of its <em>settlement aspect</em> and <em>settlement avatar</em> abilities.</Pair>
</Ability>
<Ability id="arc-spiritualist-zeitgeist_binder-settlement-aspect-sp" extraClasses="hasSubs" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-zeitgeist_binder-settlement-aspect-sp">Settlement Aspect (Sp)</Pair>
<Pair hl title="Replaces">Detect undead, calm spirit, see invisibility, call spirit</Pair>
<Pair title="Ability">A zeitgeist binder gains a number of spell-like abilities tied to her zeitgeist's settlement aspect. Other than being based on Wisdom instead of Charisma, these work the same way as the <Link to="/arc-spiritualist/fractured_mind">fractured mind's</Link> emotional power ability. The <em>masterwork transformation</em> spell-like ability does not ignore the material component.</Pair>
</Ability>
<Ability id="arc-spiritualist-zeitgeist_binder-corruption" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-zeitgeist_binder-corruption">Corruption</Pair>
<Pair plain title="5th"><Link to="/spell/conditional_favor">Conditional favor</Link></Pair>
<Pair plain title="7th"><Link to="/spell/false_belief">False belief</Link></Pair>
<Pair plain title="9th"><Link to="/spell/charm_person">Charm person</Link></Pair>
<Pair plain title="16th"><Link to="/spell/mass_suggestion">Mass suggestion</Link></Pair>
</Ability>
<Ability id="arc-spiritualist-zeitgeist_binder-crime" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-zeitgeist_binder-crime">Crime</Pair>
<Pair plain title="5th"><Link to="/spell/crime_of_opportunity">Crime of opportunity</Link></Pair>
<Pair plain title="7th"><Link to="/spell/pilfering_hand">Pilfering hand</Link></Pair>
<Pair plain title="9th"><Link to="/spell/demand_offering">Demand offering</Link></Pair>
<Pair plain title="16th"><Link to="/spell/crime_wave">Crime wave</Link></Pair>
</Ability>
<Ability id="arc-spiritualist-zeitgeist_binder-economy" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-zeitgeist_binder-economy">Economy</Pair>
<Pair plain title="5th"><Link to="/spell/crafters_fortune">Crafter's fortune</Link></Pair>
<Pair plain title="7th"><Link to="/spell/masterwork_transformation">Masterwork transformation</Link></Pair>
<Pair plain title="9th"><Link to="/spell/beguiling_gift">Beguiling gift</Link></Pair>
<Pair plain title="16th"><Link to="/spell/major_creation">Major creation</Link></Pair>
</Ability>
<Ability id="arc-spiritualist-zeitgeist_binder-law" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-zeitgeist_binder-law">Law</Pair>
<Pair plain title="5th"><Link to="/spell/detect_chaos">Detect chaos</Link></Pair>
<Pair plain title="7th"><Link to="/spell/arrow_of_law">Arrow of law</Link></Pair>
<Pair plain title="9th"><Link to="/spell/peacebond">Peacebond</Link></Pair>
<Pair plain title="16th"><Link to="/spell/mark_of_justice">Mark of justice</Link></Pair>
</Ability>
<Ability id="arc-spiritualist-zeitgeist_binder-lore" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-zeitgeist_binder-lore">Lore</Pair>
<Pair plain title="5th"><Link to="/spell/object_reading">Object reading</Link></Pair>
<Pair plain title="7th"><Link to="/spell/hypercognition">Hypercognition</Link></Pair>
<Pair plain title="9th"><Link to="/spell/heightened_awareness">Heightened awareness</Link></Pair>
<Pair plain title="16th"><Link to="/spell/legend_lore">Legend lore</Link></Pair>
</Ability>
<Ability id="arc-spiritualist-zeitgeist_binder-society" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-spiritualist-zeitgeist_binder-society">Society</Pair>
<Pair plain title="5th"><Link to="/spell/cultural_adaptation">Cultural adaptation</Link></Pair>
<Pair plain title="7th"><Link to="/spell/rumormonger">Rumormonger</Link></Pair>
<Pair plain title="9th"><Link to="/spell/share_language">Share language</Link></Pair>
<Pair plain title="16th"><Link to="/spell/coordinated_effort">Coordinated effort</Link></Pair>
</Ability>
<Ability id="arc-spiritualist-zeitgeist_binder-settlement-avatar-su" icon={["magic-swirl","stairs-goal"]}>
<Pair single id="arc-spiritualist-zeitgeist_binder-settlement-avatar-su" flavor="The zeitgeist becomes a living avatar of the settlement.">Settlement Avatar (Su)</Pair>
<Pair hl title="Replaces">Bonded senses, fused consciousness</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 round/day per spiritualist level; these rounds need not be consecutive</Pair>
<Pair title="Standard Action">The zeitgeist can project its senses out into the settlement, perceiving the general pulse of its chosen aspect throughout the whole settlement as well as anything involving its aspect that is occurring within 50 feet per spiritualist level. The sensing works like <Link to="/spell/enter_image">enter image</Link>, so the zeitgeist attempts a Perception check at a - 10 penalty to notice any particular activity within range.</Pair>
<Pair title="At 10th Level">The zeitgeist can project its senses to feel its settlement aspect at will. Additionally, the zeitgeist binder gains a bonus <Link to="/main/teamwork_feat">teamwork feat</Link> as long as she is in her zeitgeist's settlement. The zeitgeist binder must meet the teamwork feat's prerequisites, and she grants the feat as a bonus feat to her zeitgeist, even if it doesn't meet the prerequisites.</Pair>
</Ability>
</>};
export default {drowned_channeler:_drowned_channeler,ectoplasmatist:_ectoplasmatist,exciter:_exciter,fated_guide:_fated_guide,fractured_mind:_fractured_mind,geist_channeler:_geist_channeler,grim_apostle:_grim_apostle,hag_haunted:_hag_haunted,haunted:_haunted,involutionist:_involutionist,necrologist:_necrologist,onmyoji:_onmyoji,phantom_blade:_phantom_blade,plague_eater:_plague_eater,priest_of_the_fallen:_priest_of_the_fallen,quintessentialist:_quintessentialist,scourge:_scourge,seeker_of_enlightenment:_seeker_of_enlightenment,shadow_caller:_shadow_caller,soul_warden:_soul_warden,totem_spiritualist:_totem_spiritualist,usher_of_lost_souls:_usher_of_lost_souls,ward_spiritualist:_ward_spiritualist,zeitgeist_binder:_zeitgeist_binder}