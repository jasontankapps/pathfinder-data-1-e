import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _black_asp = {title: "Black Asp", jsx: <><h2 id="arc-monk-black_asp-black-asp">Black Asp</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 67</Link><br/>The black asps are a sinister order of monks who train as assassins and infiltrators with no need for weapons to achieve their goals. Through meditation and study, they learn how to use poison, hide any magics they choose to employ, and even empty their minds of thought to protect themselves from divinations.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-black_asp-black-asps-path-ex" data-hash-target><div className="box">Black Asp's Path (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Stunning fist, still mind</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A black asp is trained in the use of poison and cannot accidentally poison himself when applying poison to a weapon or when rolling a natural 1 on an attack roll with a poisoned weapon.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 3rd Level</div></div><div className="abEnd"><div className="box">The black asp's ability to use poison improves. He gains <Link to="/feat/adder_strike">Adder Strike</Link> as a bonus feat even if he does not meet the prerequisites.</div></div></div></div>
<div className="ability p hasSubs"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-black_asp-forbidden-powers-su" data-hash-target><div className="box">Forbidden Powers (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A black asp can select a <em>forbidden ki power</em> in place of any of the following monk class abilities: <em>slow fall</em> (4th), <em>high jump</em> (5th), <em>wholeness of body</em> (7th), <em>diamond body</em> (11th), <em>abundant step</em> (12th), <em>diamond soul</em> (13th), <em>quivering palm</em> (15th), <em>tongue of the sun and moon</em> (17th), and <em>empty body</em> (19th). If he chooses to do so, he replaces the monk class ability the black asp gives up for the chosen <em>forbidden ki power.</em> The black asp can select any of the following <em>forbidden ki powers.</em></div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-black_asp-black-asp-venom-su" data-hash-target><div className="box">Black Asp Venom (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Prerequisites</div></div><div className="abEnd"><div className="box">12th-level monk</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">A black asp with this ki power can poison his unarmed strike or a weapon in his hand. The poison lasts for 1 minute or until expended. A creature damaged by the poisoned weapon is affected as per the <Link to="/spell/poison">poison</Link> spell. The save DC is equal to 10 + 1/2 the black asp's monk level + his Wisdom modifier. Each use of this ability costs 2 ki points.</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-black_asp-hidden-magic-sp" data-hash-target><div className="box">Hidden Magic (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Immediate Action</div></div><div className="abEnd"><div className="box">The black asp can spend 1 ki point to hide the auras of all magic items he is carrying (as if they were all under <Link to="/spell/magic_aura">magic aura</Link>) for 1 hour per monk level.</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-black_asp-greater-hidden-magic-sp" data-hash-target><div className="box">Greater Hidden Magic (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Prerequisites</div></div><div className="abEnd"><div className="box">8th-level monk, <em>hidden magic</em> ki power</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">As long as he has at least 1 point in his <em>ki pool,</em> all of the black asp's items are constantly under the effects of <em>magic aura.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Immediate Action</div></div><div className="abEnd"><div className="box">He can spend 2 ki points to cause himself and any magic items he is carrying to appear to be nonmagical (as if he had cast <Link to="/spell/greater_magic_aura">greater magic aura</Link>) for 1 hour per monk level.</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-black_asp-empty-mind-sp" data-hash-target><div className="box">Empty Mind (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Prerequisites</div></div><div className="abEnd"><div className="box">16th-level monk, <em>greater hidden magic</em> ki power</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A black asp with this ki power can choose to lower the number of ki points in his <em>ki pool</em> by 3 when he recovers his ki points for the day. If he does so, he gains the benefits of <Link to="/spell/mind_blank">mind blank</Link> for 24 hours.</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-black_asp-shifting-form-su" data-hash-target><div className="box">Shifting Form (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Immediate Action</div></div><div className="abEnd"><div className="box">A black asp can spend 1 ki point to make his outline shift and waver for 1 round. This ability otherwise functions as per the spell <Link to="/spell/blur">blur</Link>.</div></div></div></div>
</>};
const _black_asp_uc = {title: "Black Asp (Unchained)", topLink: ["Unchained Monk","class/unchained_monk"], jsx: <><h2 id="arc-monk-black_asp_uc-black-asp">Black Asp</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 67</Link><br/>The black asps are a sinister order of monks who train as assassins and infiltrators with no need for weapons to achieve their goals. Through meditation and study, they learn how to use poison, hide any magics they choose to employ, and even empty their minds of thought to protect themselves from divinations.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-black_asp_uc-black-asps-path-ex" data-hash-target><div className="box">Black Asp's Path (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Stunning fist, still mind</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A black asp is trained in the use of poison and cannot accidentally poison himself when applying poison to a weapon or when rolling a natural 1 on an attack roll with a poisoned weapon.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 3rd Level</div></div><div className="abEnd"><div className="box">The black asp's ability to use poison improves. He gains <Link to="/feat/adder_strike">Adder Strike</Link> as a bonus feat even if he does not meet the prerequisites.</div></div></div></div>
<div className="ability p hasSubs"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-black_asp_uc-forbidden-powers-su" data-hash-target><div className="box">Forbidden Powers (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A black asp can select a <em>forbidden ki power</em> as a <em>ki power.</em> The black asp can select any of the following <em>forbidden ki powers.</em></div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-black_asp_uc-black-asp-venom-su" data-hash-target><div className="box">Black Asp Venom (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Prerequisites</div></div><div className="abEnd"><div className="box">12th-level monk</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">A black asp with this ki power can poison his unarmed strike or a weapon in his hand. The poison lasts for 1 minute or until expended. A creature damaged by the poisoned weapon is affected as per the <Link to="/spell/poison">poison</Link> spell. The save DC is equal to 10 + 1/2 the black asp's monk level + his Wisdom modifier. Each use of this ability costs 2 ki points.</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-black_asp_uc-hidden-magic-sp" data-hash-target><div className="box">Hidden Magic (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Immediate Action</div></div><div className="abEnd"><div className="box">The black asp can spend 1 ki point to hide the auras of all magic items he is carrying (as if they were all under <Link to="/spell/magic_aura">magic aura</Link>) for 1 hour per monk level.</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-black_asp_uc-greater-hidden-magic-sp" data-hash-target><div className="box">Greater Hidden Magic (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Prerequisites</div></div><div className="abEnd"><div className="box">8th-level monk, <em>hidden magic</em> ki power</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">As long as he has at least 1 point in his <em>ki pool,</em> all of the black asp's items are constantly under the effects of <em>magic aura.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Immediate Action</div></div><div className="abEnd"><div className="box">He can spend 2 ki points to cause himself and any magic items he is carrying to appear to be nonmagical (as if he had cast <Link to="/spell/greater_magic_aura">greater magic aura</Link>) for 1 hour per monk level.</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-black_asp_uc-empty-mind-sp" data-hash-target><div className="box">Empty Mind (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Prerequisites</div></div><div className="abEnd"><div className="box">16th-level monk, <em>greater hidden magic</em> ki power</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A black asp with this ki power can choose to lower the number of ki points in his <em>ki pool</em> by 3 when he recovers his ki points for the day. If he does so, he gains the benefits of <Link to="/spell/mind_blank">mind blank</Link> for 24 hours.</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-black_asp_uc-shifting-form-su" data-hash-target><div className="box">Shifting Form (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Immediate Action</div></div><div className="abEnd"><div className="box">A black asp can spend 1 ki point to make his outline shift and waver for 1 round. This ability otherwise functions as per the spell <Link to="/spell/blur">blur</Link>.</div></div></div></div>
</>};
const _brazen_disciple = {title: "Brazen Disciple", jsx: <><h2 id="arc-monk-brazen_disciple-brazen-disciple">Brazen Disciple</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 104</Link><br/>Of the three monasteries, the Monastery of Unblinking Flame has been the most successful in developing a specific and unique fighting style that sets its disciples apart from other monks. In order to be admitted into the Monastery of Unblinking Flame and become one of these disciples, a supplicant must prove his worth by outwitting an <Link to="/monster/efreeti">efreeti</Link>. Those who succeed often become monks known as the brazen disciples.</p>
<p>Brazen disciples believe that the best way to prepare for this test is to emulate the efreeti's own duplicitous ways. By studying genie contracts, brazen disciples learn how to take advantage of loopholes, and by pondering riddles, they learn how to obfuscate truth. They use deception in their fighting style, and many go a step further, incorporating fire and smoke both mundane and magical. Though most brazen disciples focus on joining the <Link to="/rule/houses_of_perfection">Houses of Perfection</Link>, some become enamored with the efreet and instead seek out genie masters.</p>
<Ability icon={["skills"]} id="arc-monk-brazen_disciple-undefined">
<Pair id="arc-monk-brazen_disciple-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/disguise">Disguise</Link> (CHA), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (religion), Ride, Swim</Pair></Ability>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-brazen_disciple-feinting-flurry-ex" data-hash-target><div className="box">Feinting Flurry (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Bonus feats gained at 1st level and at 6th level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When using <em>flurry of blows</em> to make melee attacks, a brazen disciple can forgo his first attack to attempt a Bluff check to feint.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">When a brazen disciple successfully feints, his opponent is denied its Dexterity bonus to AC until the end of the monk's turn.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-brazen_disciple-bonus-feats" data-hash-target><div className="box">Bonus Feats</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Bonus feats</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 2nd Level</div></div><div className="abEnd"><div className="box">At 2nd, 10th, 14th, and 18th levels, a brazen disciple can select a bonus feat. These feats must be chosen from the following list: <Link to="/feat/catch_off_guard">Catch Off-Guard</Link>, <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/deceitful">Deceitful</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/elemental_fist">Elemental Fist</Link>, and <Link to="/feat/improved_initiative">Improved Initiative</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">The brazen disciple can also choose from the following feats: <Link to="/feat/efreeti_style">Efreeti Style</Link>, <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link>, <Link to="/feat/improved_disarm">Improved Disarm</Link>, <Link to="/feat/improved_steal">Improved Steal</Link>, <Link to="/feat/improved_trip">Improved Trip</Link>, and <Link to="/feat/mobility">Mobility</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">The brazen disciple can also choose from the following feats: <Link to="/feat/efreeti_stance">Efreeti Stance</Link>, <Link to="/feat/efreeti_touch">Efreeti Touch</Link>, <Link to="/feat/improved_critical">Improved Critical</Link>, and <Link to="/feat/spring_attack">Spring Attack</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">He need not meet the prerequisites normally required for these feats to select them.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-brazen_disciple-efreetis-guile-ex" data-hash-target><div className="box">Efreeti's Guile (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Still mind</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A brazen disciple can add his Wisdom modifier on Bluff and Disguise checks instead of his Charisma modifier.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-brazen_disciple-confounding-koan-sp" data-hash-target><div className="box">Confounding Koan (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Abundant step</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">A brazen disciple can spend 2 ki points to confuse a target within 30 feet with a riddle or paradox. This ability functions as per <Link to="/spell/confusion">confusion</Link>, except that it is language-dependent. The DC is equal to 10 + half the monk's class level + his Wisdom modifier, and the caster level is equal to his class level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-brazen_disciple-genie-apotheosis" data-hash-target><div className="box">Genie Apotheosis</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Perfect self</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A brazen disciple is treated as a native outsider with the fire subtype rather than as a humanoid (or whatever the monk's creature type was) for the purpose of spells and magical effects. He has immunity to fire and vulnerability to cold.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Once per day, the brazen disciple can grant a <Link to="/spell/limited_wish">limited wish</Link> to a non-outsider as a spell-like ability (CL 20th).</div></div></div></div>
</>};
const _brazen_disciple_uc = {title: "Brazen Disciple (Unchained)", topLink: ["Unchained Monk","class/unchained_monk"], jsx: <><h2 id="arc-monk-brazen_disciple_uc-brazen-disciple">Brazen Disciple</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 104</Link><br/>Of the three monasteries, the Monastery of Unblinking Flame has been the most successful in developing a specific and unique fighting style that sets its disciples apart from other monks. In order to be admitted into the Monastery of Unblinking Flame and become one of these disciples, a supplicant must prove his worth by outwitting an <Link to="/monster/efreeti">efreeti</Link>. Those who succeed often become monks known as the brazen disciples.</p>
<p>Brazen disciples believe that the best way to prepare for this test is to emulate the efreeti's own duplicitous ways. By studying genie contracts, brazen disciples learn how to take advantage of loopholes, and by pondering riddles, they learn how to obfuscate truth. They use deception in their fighting style, and many go a step further, incorporating fire and smoke both mundane and magical. Though most brazen disciples focus on joining the <Link to="/rule/houses_of_perfection">Houses of Perfection</Link>, some become enamored with the efreet and instead seek out genie masters.</p>
<Ability icon={["skills"]} id="arc-monk-brazen_disciple_uc-undefined">
<Pair id="arc-monk-brazen_disciple_uc-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/disguise">Disguise</Link> (CHA), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (religion), Ride, Swim</Pair></Ability>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-brazen_disciple_uc-feinting-flurry-ex" data-hash-target><div className="box">Feinting Flurry (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Bonus feats gained at 1st level and at 6th level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When using <em>flurry of blows</em> to make melee attacks, a brazen disciple can forgo his first attack to attempt a Bluff check to feint.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">When a brazen disciple successfully feints, his opponent is denied its Dexterity bonus to AC until the end of the monk's turn.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-brazen_disciple_uc-bonus-feats" data-hash-target><div className="box">Bonus Feats</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Bonus feats</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 2nd Level</div></div><div className="abEnd"><div className="box">At 2nd, 10th, 14th, and 18th levels, a brazen disciple can select a bonus feat. These feats must be chosen from the following list: <Link to="/feat/catch_off_guard">Catch Off-Guard</Link>, <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/deceitful">Deceitful</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/elemental_fist">Elemental Fist</Link>, and <Link to="/feat/improved_initiative">Improved Initiative</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">The brazen disciple can also choose from the following feats: <Link to="/feat/efreeti_style">Efreeti Style</Link>, <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link>, <Link to="/feat/improved_disarm">Improved Disarm</Link>, <Link to="/feat/improved_steal">Improved Steal</Link>, <Link to="/feat/improved_trip">Improved Trip</Link>, and <Link to="/feat/mobility">Mobility</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">The brazen disciple can also choose from the following feats: <Link to="/feat/efreeti_stance">Efreeti Stance</Link>, <Link to="/feat/efreeti_touch">Efreeti Touch</Link>, <Link to="/feat/improved_critical">Improved Critical</Link>, and <Link to="/feat/spring_attack">Spring Attack</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">He need not meet the prerequisites normally required for these feats to select them.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-brazen_disciple_uc-efreetis-guile-ex" data-hash-target><div className="box">Efreeti's Guile (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Still mind</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A brazen disciple can add his Wisdom modifier on Bluff and Disguise checks instead of his Charisma modifier.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-brazen_disciple_uc-confounding-koan-sp" data-hash-target><div className="box">Confounding Koan (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">12th-level ki power</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">A brazen disciple can spend 2 ki points to confuse a target within 30 feet with a riddle or paradox. This ability functions as per <Link to="/spell/confusion">confusion</Link>, except that it is language-dependent. The DC is equal to 10 + half the monk's class level + his Wisdom modifier, and the caster level is equal to his class level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-brazen_disciple_uc-genie-apotheosis" data-hash-target><div className="box">Genie Apotheosis</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Perfect self</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A brazen disciple is treated as a native outsider with the fire subtype rather than as a humanoid (or whatever the monk's creature type was) for the purpose of spells and magical effects. He has immunity to fire and vulnerability to cold.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Once per day, the brazen disciple can grant a <Link to="/spell/limited_wish">limited wish</Link> to a non-outsider as a spell-like ability (CL 20th).</div></div></div></div>
</>};
const _disciple_of_wholeness = {title: "Disciple of Wholeness", jsx: <><h2 id="arc-monk-disciple_of_wholeness-disciple-of-wholeness">Disciple of Wholeness</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 4</Link><br/>Disciples of wholeness train to bring themselves and others closer to physical and spiritual perfection.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/heart-plus"><IonIcon icon="/icons/heart-plus.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-disciple_of_wholeness-healing-ki-su" data-hash-target><div className="box">Healing Ki (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">The ability to spend ki to gain an extra attack during a <em>flurry of blows</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Ki pool</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">A disciple of wholeness can touch a creature and spend 1 point from her <em>ki pool</em> to restore a number of hit points equal to 1d4 + 1/2 her monk level to that creature. If she has the <em>wholeness of body</em> class feature, she can spend 2 points to restore a number of hit points equal to 1d8 + her monk level to a touched creature.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-disciple_of_wholeness-hone-body-su" data-hash-target><div className="box">Hone Body (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Purity of body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A disciple of wholeness has immunity to supernatural and magical diseases as long as she is undamaged (she loses this immunity when she has hit point or ability score damage).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">She can touch a creature and spend 1 point from her <em>ki pool</em> to render it immune to all diseases for 1 day. She cannot grant this immunity if the target is already afflicted with a disease.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-disciple_of_wholeness-greater-hone-body-su" data-hash-target><div className="box">Greater Hone Body (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Diamond body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A disciple of wholeness is immune to poison while undamaged and can grant immunity to poison (lasting for 1 day). This ability otherwise functions as per <em>hone body.</em></div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-disciple_of_wholeness-hone-soul-su" data-hash-target><div className="box">Hone Soul (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Diamond soul</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 13th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">A disciple of wholeness can dispel a spell affecting a living creature by touching it and spending 1 point from her <em>ki pool.</em> This power functions like the targeted dispel option of <Link to="/spell/greater_dispel_magic">greater dispel magic</Link>, with the caster level equal to the disciple of wholeness's monk level.</div></div></div></div>
</>};
const _disciple_of_wholeness_uc = {title: "Disciple of Wholeness (Unchained)", topLink: ["Unchained Monk","class/unchained_monk"], jsx: <><h2 id="arc-monk-disciple_of_wholeness_uc-disciple-of-wholeness">Disciple of Wholeness</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 4</Link><br/>Disciples of wholeness train to bring themselves and others closer to physical and spiritual perfection.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/heart-plus"><IonIcon icon="/icons/heart-plus.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-disciple_of_wholeness_uc-healing-ki-su" data-hash-target><div className="box">Healing Ki (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">4th-level ki power</div></div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Ki pool</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">A disciple of wholeness can touch a creature and spend 1 point from her <em>ki pool</em> to restore a number of hit points equal to 1d4 + 1/2 her monk level to that creature. If she has the <Link to="/kipower/wholeness_of_body">wholeness of body</Link> ki power, she can spend 2 points to restore a number of hit points equal to 1d8 + her monk level to a touched creature.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-disciple_of_wholeness_uc-hone-body-su" data-hash-target><div className="box">Hone Body (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Purity of body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A disciple of wholeness has immunity to supernatural and magical diseases as long as she is undamaged (she loses this immunity when she has hit point or ability score damage).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">She can touch a creature and spend 1 point from her <em>ki pool</em> to render it immune to all diseases for 1 day. She cannot grant this immunity if the target is already afflicted with a disease.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-disciple_of_wholeness_uc-greater-hone-body-su" data-hash-target><div className="box">Greater Hone Body (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">12th-level ki power, ability to select the <Link to="/kipower/diamond_body">diamond body</Link> ki power</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A disciple of wholeness is immune to poison while undamaged and can grant immunity to poison (lasting for 1 day). This ability otherwise functions as per <em>hone body.</em></div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-disciple_of_wholeness_uc-hone-soul-su" data-hash-target><div className="box">Hone Soul (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">14th-level ki power, ability to select the <Link to="/kipower/diamond_soul">diamond soul</Link> ki power</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 13th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">A disciple of wholeness can dispel a spell affecting a living creature by touching it and spending 1 point from her <em>ki pool.</em> This power functions like the targeted dispel option of <Link to="/spell/greater_dispel_magic">greater dispel magic</Link>, with the caster level equal to the disciple of wholeness's monk level.</div></div></div></div>
</>};
const _drunken_master = {title: "Drunken Master", jsx: <><h2 id="arc-monk-drunken_master-drunken-master">Drunken Master</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 110</Link><br/>Most monks lead lives of moderation and quiet contemplation. But the drunken master finds perfection through excess. Powered by strong wine, he uses his intoxication to reach a state where his ki is more potent, if somewhat fleeting. A drunken master has the following class features.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-drunken_master-drunken-ki-su" data-hash-target><div className="box">Drunken Ki (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Still mind</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">A drunken master can drink a tankard of ale or strong alcohol and gain one temporary ki point. This does not provoke attacks of opportunity. The monk can have a maximum of 1 <em>drunken ki point.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">As long as he has at least 1 <em>drunken ki point,</em> the monk can spend 1 ki point to move 5 feet without provoking attacks of opportunity.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Provokes <Link to="/rule/aoo">AoO?</Link></div></div><div className="abEnd"><div className="box">No</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">The monk's maximum becomes 2 <em>drunken ki points.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">The monk's maximum increases to 3 <em>drunken ki points.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">The monk's maximum becomes 4 <em>drunken ki points.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">The monk's maximum increases to 5 <em>drunken ki points.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">The monk's maximum becomes 6 <em>drunken ki points.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">The monk's maximum increases to 7 <em>drunken ki points.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">The monk's maximum becomes 8 <em>drunken ki points.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">The monk's maximum increases to 9 <em>drunken ki points.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The monk can gain this temporary ki even before he gains a <em>ki pool</em> at 4th level. These <em>drunken ki points</em> last for 1 hour or until spent, whichever is shorter.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-drunken_master-drunken-strength-su" data-hash-target><div className="box">Drunken Strength (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Purity of body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">A drunken master can spend 1 point of ki to inflict 1d6 extra points of damage on a single successful melee attack. The monk can choose to apply the damage after the attack roll is made.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">The monk may spend 2 <em>drunken ki points</em> to increase the extra damage to 2d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">The monk may spend 3 <em>drunken ki points</em> to increase the extra damage to 3d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">The monk may spend 4 <em>drunken ki points</em> to increase the extra damage to 4d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The monk must have at least 1 <em>drunken ki point</em> to use this ability.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-drunken_master-drunken-courage-su" data-hash-target><div className="box">Drunken Courage (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Diamond body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A drunken master is immune to fear as long as he has at least 1 point of <em>drunken ki.</em></div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-drunken_master-drunken-resilience-ex" data-hash-target><div className="box">Drunken Resilience (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Diamond soul</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 13th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A drunken master gains <Link to="/rule/dr">DR</Link> 1/- as long as he has at least 1 point of <em>drunken ki.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">The DR increases to 2/-.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">It increases to 3/-.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/tornado-discs"><IonIcon icon="/icons/tornado-discs.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-drunken_master-firewater-breath-su" data-hash-target><div className="box">Firewater Breath (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Empty body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 19th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">A drunken master can take a drink and expel a gout of alcohol-fueled fire in a 30-foot cone. Creatures within the cone take 20d6 points of fire damage. A successful Reflex saving throw (DC 10 + 1/2 the monk's level + the monk's Wis modifier) halves the damage. Using this ability consumes 4 ki points from the monk's <em>ki pool.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The monk must have at least 1 <em>drunken ki point</em> to use this ability.</div></div></div></div>
</>};
const _elemental_monk = {title: "Elemental Monk", jsx: <><h2 id="arc-monk-elemental_monk-elemental-monk">Elemental Monk</h2>
<p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 4</Link><br/>Elemental monks draw inspiration from genies to create their fighting style. Their adaptability and versatility make them capable of serving as emissaries of elemental balance.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/info"><IonIcon icon="/icons/info.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-elemental_monk-alignment" data-hash-target><div className="box">Alignment</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Alignment requirement</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">An elemental monk must be true neutral.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-elemental_monk-elemental-strike-ex" data-hash-target><div className="box">Elemental Strike (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">All bonus feats, stunning fist</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">An elemental monk gains <Link to="/feat/elemental_fist">Elemental Fist</Link> as a bonus feat, even if she doesn't meet the prerequisites. She does not have to select an element; instead, each time she hits with an Elemental Fist attack, she can choose acid, cold, electricity, or fire for the type of the additional damage granted by that feat.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-elemental_monk-genie-style-ex-sp" data-hash-target><div className="box">Genie Style (Ex, Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Evasion, purity of body, diamond body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 2nd Level</div></div><div className="abEnd"><div className="box">As a <strong className="hl">swift action</strong> an elemental monk can gain the benefits of one of the following style feats, based on one of the five types of genies. When she does so, she automatically enters that feat's stance: <Link to="/feat/djinni_style">Djinni Style</Link>, <Link to="/feat/efreeti_style">Efreeti Style</Link>, <Link to="/feat/janni_style">Janni Style</Link>, <Link to="/feat/marid_style">Marid Style</Link>, or <Link to="/feat/shaitan_style">Shaitan Style</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">While the elemental monk is using a genie style feat, she also gains the benefits of a feat from the following list, as appropriate for that style's feat path: <Link to="/feat/djinni_spirit">Djinni Spirit</Link>, <Link to="/feat/efreeti_stance">Efreeti Stance</Link>, <Link to="/feat/janni_tempest">Janni Tempest</Link>, <Link to="/feat/marid_spirit">Marid Spirit</Link>, and <Link to="/feat/shaitan_skin">Shaitan Skin</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">While the elemental monk is using a genie style feat, she also gains the benefits of a feat from the following list, as appropriate for that style's feat path: <Link to="/feat/djinni_spin">Djinni Spin</Link>, <Link to="/feat/efreeti_touch">Efreeti Touch</Link>, <Link to="/feat/janni_rush">Janni Rush</Link>, <Link to="/feat/marid_coldsnap">Marid Coldsnap</Link>, and <Link to="/feat/shaitan_earthblast">Shaitan Earthblast</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">When the elemental monk gains the benefits of Djinni Spirit, Efreeti Stance, Marid Spirit, or Shaitan Skin, her elemental resistance from that feat instead becomes immunity to that element, as long as she is not denied her Dexterity bonus to AC. While she is using Janni Style, she gains the effects of <Link to="/spell/enlarge_person">enlarge person</Link> or <Link to="/spell/reduce_person">reduce person</Link> (her choice), even if she is not humanoid. This is a spell-like ability with a caster level equal to the elemental monk's level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-elemental_monk-elemental-precision-ex" data-hash-target><div className="box">Elemental Precision (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Ki pool</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 10th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Instead of treating her unarmed strikes as lawful for the purpose of overcoming damage reduction, an elemental monk overcomes all damage reduction of creatures with the air, earth, fire, or water subtypes except DR/- and DR/epic.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-elemental_monk-planar-guide-sp" data-hash-target><div className="box">Planar Guide (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 14th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">An elemental monk can spend 1 ki point to transport herself and up to seven additional willing creatures, as per the <Link to="/spell/plane_shift">plane shift</Link> spell, to one of the four Elemental Planes. Each additional creature increases the cost by 1 ki point.</div></div></div></div>
</>};
const _elemental_monk_uc = {title: "Elemental Monk (Unchained)", topLink: ["Unchained Monk","class/unchained_monk"], jsx: <><h2 id="arc-monk-elemental_monk_uc-elemental-monk">Elemental Monk</h2>
<p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 4</Link><br/>Elemental monks draw inspiration from genies to create their fighting style. Their adaptability and versatility make them capable of serving as emissaries of elemental balance.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/info"><IonIcon icon="/icons/info.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-elemental_monk_uc-alignment" data-hash-target><div className="box">Alignment</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Alignment requirement</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">An elemental monk must be true neutral.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-elemental_monk_uc-elemental-strike-ex" data-hash-target><div className="box">Elemental Strike (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">All bonus feats, stunning fist</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">An elemental monk gains <Link to="/feat/elemental_fist">Elemental Fist</Link> as a bonus feat, even if she doesn't meet the prerequisites. She does not have to select an element; instead, each time she hits with an Elemental Fist attack, she can choose acid, cold, electricity, or fire for the type of the additional damage granted by that feat.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-elemental_monk_uc-genie-style-ex-sp" data-hash-target><div className="box">Genie Style (Ex, Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Evasion, purity of body, 10th-level ki power</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 2nd Level</div></div><div className="abEnd"><div className="box">As a <strong className="hl">swift action</strong> an elemental monk can gain the benefits of one of the following style feats, based on one of the five types of genies. When she does so, she automatically enters that feat's stance: <Link to="/feat/djinni_style">Djinni Style</Link>, <Link to="/feat/efreeti_style">Efreeti Style</Link>, <Link to="/feat/janni_style">Janni Style</Link>, <Link to="/feat/marid_style">Marid Style</Link>, or <Link to="/feat/shaitan_style">Shaitan Style</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">While the elemental monk is using a genie style feat, she also gains the benefits of a feat from the following list, as appropriate for that style's feat path: <Link to="/feat/djinni_spirit">Djinni Spirit</Link>, <Link to="/feat/efreeti_stance">Efreeti Stance</Link>, <Link to="/feat/janni_tempest">Janni Tempest</Link>, <Link to="/feat/marid_spirit">Marid Spirit</Link>, and <Link to="/feat/shaitan_skin">Shaitan Skin</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">While the elemental monk is using a genie style feat, she also gains the benefits of a feat from the following list, as appropriate for that style's feat path: <Link to="/feat/djinni_spin">Djinni Spin</Link>, <Link to="/feat/efreeti_touch">Efreeti Touch</Link>, <Link to="/feat/janni_rush">Janni Rush</Link>, <Link to="/feat/marid_coldsnap">Marid Coldsnap</Link>, and <Link to="/feat/shaitan_earthblast">Shaitan Earthblast</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">When the elemental monk gains the benefits of Djinni Spirit, Efreeti Stance, Marid Spirit, or Shaitan Skin, her elemental resistance from that feat instead becomes immunity to that element, as long as she is not denied her Dexterity bonus to AC. While she is using Janni Style, she gains the effects of <Link to="/spell/enlarge_person">enlarge person</Link> or <Link to="/spell/reduce_person">reduce person</Link> (her choice), even if she is not humanoid. This is a spell-like ability with a caster level equal to the elemental monk's level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-elemental_monk_uc-elemental-precision-ex" data-hash-target><div className="box">Elemental Precision (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Ki pool</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 10th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Instead of treating her unarmed strikes as lawful for the purpose of overcoming damage reduction, an elemental monk overcomes all damage reduction of creatures with the air, earth, fire, or water subtypes except DR/- and DR/epic.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-elemental_monk_uc-planar-guide-sp" data-hash-target><div className="box">Planar Guide (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 14th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">An elemental monk can spend 1 ki point to transport herself and up to seven additional willing creatures, as per the <Link to="/spell/plane_shift">plane shift</Link> spell, to one of the four Elemental Planes. Each additional creature increases the cost by 1 ki point.</div></div></div></div>
</>};
const _far_strike_monk = {title: "Far Strike Monk", jsx: <><h2 id="arc-monk-far_strike_monk-far-strike-monk">Far Strike Monk</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 9</Link><br/>Far strike monks are masters of thrown weapons, from <Link to="/eq-weapon/shuriken">shuriken</Link> to <Link to="/eq-weapon/throwing_axe">throwing axes</Link> to <Link to="/eq-weapon/spear">spears</Link>. The far strike school views thrown attacks as an extension of unarmed strikes, and masters of this school can infuse thrown weapons with their ki.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-far_strike_monk-weapon-and-armor-proficiency" data-hash-target><div className="box">Weapon and Armor Proficiency</div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">In addition to the standard monk weapon proficiencies, a far strike monk is proficient with all thrown weapons.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/bowman"><IonIcon icon="/icons/bowman.svg" color="secondary" /></Link><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-far_strike_monk-flurry-of-blows-ex" data-hash-target><div className="box">Flurry of Blows (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Flurry of blows</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A far strike monk can make a <em>flurry of blows</em> as a full-attack action as long as he's attacking with thrown weapons. He can't make a <em>flurry of blows</em> with his unarmed attacks or any other weapons. A far strike monk's <em>flurry of blows</em> otherwise functions as the standard monk class feature.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">A far strike monk can't use <Link to="/feat/rapid_shot">Rapid Shot</Link> when making a <em>flurry of blows</em> with a thrown weapon.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-far_strike_monk-bonus-feats" data-hash-target><div className="box">Bonus Feats</div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">A far strike monk adds the following feats to his list of bonus feats: <Link to="/feat/far_shot">Far Shot</Link>, <Link to="/feat/point_blank_shot">Point-Blank Shot</Link>, <Link to="/feat/precise_shot">Precise Shot</Link>, and any <Link to="/main/feats_optional_rules">targeting feat</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">He adds the following feats: <Link to="/feat/improved_precise_shot">Improved Precise Shot</Link>, <Link to="/feat/parting_shot">Parting Shot</Link>, and <Link to="/feat/trick_shooter">Trick Shooter</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">He adds the following feats: <Link to="/feat/improvised_weapon_mastery">Improvised Weapon Mastery</Link> and <Link to="/feat/pinpoint_targeting">Pinpoint Targeting</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/bowman"><IonIcon icon="/icons/bowman.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-far_strike_monk-fast-thrower" data-hash-target><div className="box">Fast Thrower</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Stunning Fist</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">A far strike monk gains <Link to="/feat/quick_draw">Quick Draw</Link> as a bonus feat, even if he doesn't meet the prerequisites.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">He gains <Link to="/feat/shot_on_the_run">Shot on the Run</Link> as a bonus feat, even if he doesn't meet the prerequisites.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">When using the Shot on the Run feat, he can make a second ranged attack with a -5 penalty at any point during his movement.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">He can make a third ranged attack with a -10 penalty at any point during his movement.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-far_strike_monk-invisible-blade-ex" data-hash-target><div className="box">Invisible Blade (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Still mind</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When a far strike monk uses the Stealth skill to maintain his obscured location after sniping, he takes a -10 penalty on his Stealth check instead of -20.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-far_strike_monk-ki-pool-su" data-hash-target><div className="box">Ki Pool (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">In addition to the normal abilities of his <em>ki pool,</em> a far strike monk can spend 1 point from his <em>ki pool</em> to increase the range increment of a thrown weapon by 20 feet for 1 round.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-far_strike_monk-ki-missile-su" data-hash-target><div className="box">Ki Missile (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Purity of body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">A far strike monk can spend 1 point from his <em>ki pool</em> to change the base damage dice of thrown weapons to that of his unarmed strikes. These weapons are also treated as <Link to="/magic-enh/ki_focus">ki focus</Link> weapons, allowing the monk to apply his special ki attacks to his thrown weapons as if they were unarmed strikes. This effect lasts until the beginning of his next turn.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-far_strike_monk-trick-throw-su" data-hash-target><div className="box">Trick Throw (Su)</div><div className="flavor">A far strike monk can infuse his thrown weapons with ki to hit targets that he might otherwise miss.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Diamond body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">By spending 1 point from his <em>ki pool,</em> the far strike monk can ignore <Link to="/rule/concealment">concealment</Link>. By spending 2 points, he can ignore total concealment or <Link to="/rule/cover">cover</Link>. By spending 3 points, he can ignore total cover, even throwing weapons around corners. These effects last for 1 round.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The weapon must still be able to reach the target; for instance, a target inside a closed building with no open doors or windows cannot be attacked using Trick Throw.</div></div></div></div>
</>};
const _flowing_monk = {title: "Flowing Monk", jsx: <><h2 id="arc-monk-flowing_monk-flowing-monk">Flowing Monk</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 58</Link><br/>The flowing monk is the wind and the river. He knows how the world flows, and forces his enemies to flow with it. Even the most powerful stone breaks under the graceful and persistent pressure of wind and water.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-flowing_monk-bonus-feat" data-hash-target><div className="box">Bonus Feat</div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">A flowing monk replaces the normal monk bonus feats with the following: <Link to="/feat/agile_maneuvers">Agile Maneuvers</Link>, <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/deflect_arrows">Deflect Arrows</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/improved_reposition">Improved Reposition</Link>, <Link to="/feat/improved_trip">Improved Trip</Link>, <Link to="/feat/nimble_moves">Nimble Moves</Link>, and <Link to="/feat/weapon_finesse">Weapon Finesse</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">The following feats are also available: <Link to="/feat/acrobatic_steps">Acrobatic Steps</Link>, <Link to="/feat/bodyguard">Bodyguard</Link>, <Link to="/feat/improved_disarm">Improved Disarm</Link>, <Link to="/feat/improved_feint">Improved Feint</Link>, <Link to="/feat/ki_throw">Ki Throw</Link>, <Link to="/feat/mobility">Mobility</Link>, <Link to="/feat/second_chance">Second Chance</Link>, and <Link to="/feat/sidestep">Sidestep</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">The following feats are added: <Link to="/feat/in_harms_way">In Harm's Way</Link>, <Link to="/feat/repositioning_strike">Repositioning Strike</Link>, <Link to="/feat/snatch_arrows">Snatch Arrows</Link>, <Link to="/feat/spring_attack">Spring Attack</Link>, and <Link to="/feat/tripping_strike">Tripping Strike</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-flowing_monk-redirection-ex" data-hash-target><div className="box">Redirection (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Stunning fist</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Immediate Action</div></div><div className="abEnd"><div className="box">A flowing monk can attempt a <Link to="/rule/reposition">reposition</Link> or <Link to="/rule/trip">trip</Link> combat maneuver against a creature that the flowing monk threatens and that attacks him. If the combat maneuver is successful, the attacker is <Link to="/misc/sickened">sickened</Link> for a number of rounds equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of her monk level (Reflex DC = 10 + 1/2 the monk's level + monk's Wisdom modifier to halve the duration). The monk gains a +2 bonus on the reposition or trip combat maneuver check and the save DC for redirection increases by 2 if the attacker is using <Link to="/feat/power_attack">Power Attack</Link> or is <Link to="/rule/charging">charging</Link> when attacking him. The benefit increases to a +4 bonus and an increase of the saving throw by 4 if both apply.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">A flowing monk can use redirection against an opponent that the flowing monk threatens and that attacks an ally with a melee attack.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">A flowing monk can make both a reposition and a trip maneuver as part of a single immediate action with this ability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">A flowing monk can use redirection against any opponent that attacks him in melee, even if the flowing monk is not threatening the opponent who attacks him.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">A flowing monk can use this ability once per day per monk level, but no more than once per round.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-flowing_monk-unbalancing-counter-ex" data-hash-target><div className="box">Unbalancing Counter (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">The bonus feat gained at 2nd level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A flowing monk's attacks of opportunity render a struck creature <Link to="/rule/flat_footed">flat-footed</Link> until the end of the flowing monk's next turn (Reflex DC 10 + 1/2 the monk's level + Wisdom modifier negates).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-flowing_monk-flowing-dodge-ex" data-hash-target><div className="box">Flowing Dodge (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Fast movement</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A flowing monk gains a +1 dodge bonus to AC for each enemy adjacent to him, up to a maximum bonus equal to his Wisdom modifier (minimum 1).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-flowing_monk-elusive-target-ex" data-hash-target><div className="box">Elusive Target (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Purity of body, diamond body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Immediate Action</div></div><div className="abEnd"><div className="box">A flowing monk may spend 2 points from his <em>ki pool</em> to attempt a Reflex save opposed by an attacker's attack roll to halve damage from that attack.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">The flowing monk suffers no damage on a successful save, or half damage on a failed save. If the attacker is <Link to="/rule/flanking">flanking</Link> the monk, the flanking opponent who is not attacking becomes the target of the attack. Use the same attack roll, and if the attack hits the new target, that creatures takes half damage (or full damage if the attack is completely avoided). Any associated effects from the attack (such as <Link to="/umr/bleed">bleed</Link>, poison, or spell effects) apply fully even if the attack deals only half damage.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-flowing_monk-volley-spell-su" data-hash-target><div className="box">Volley Spell (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Quivering palm</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 15th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When a targeted spell or spell-like ability fails to overcome a flowing monk's spell resistance, he may reflect the effect onto its caster as <Link to="/spell/spell_turning">spell turning</Link> by spending a number of points from his <em>ki pool</em> equal to 1/2 the spell's level (minimum 1).</div></div></div></div>
</>};
const _gray_disciple = {title: "Gray Disciple", jsx: <><h2 id="arc-monk-gray_disciple-gray-disciple">Gray Disciple</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 187</Link><br/>The gray disciple contemplates the inner voice of duergar magic and the silent eternity of stone, mastering these dual mysteries and combining them to deadly effect.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-monk-gray_disciple--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/duergar">Duergar</Link></td></tr></tbody></table></ScrollContainer></div><div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-gray_disciple-fade-from-sight-sp" data-hash-target><div className="box">Fade from Sight (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Slow fall, still mind</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">The gray disciple can become invisible (as the <Link to="/spell/invisibility">invisibility</Link> spell) for 1 round by spending 1 ki point.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">To use this ability, the gray disciple must already have <em>invisibility</em> as a spell-like ability.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-gray_disciple-gray-heart-sp" data-hash-target><div className="box">Gray Heart (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">High jump, bonus feat gained at 6th level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 6th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">The gray disciple can enlarge himself (as the <Link to="/spell/enlarge_person">enlarge person</Link> spell) for 1 minute by spending 1 ki point. To use this ability, the gray disciple must already have <em>enlarge person</em> available as a spell-like ability.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link><Link to="/icons/abstract-091"><IonIcon icon="/icons/abstract-091.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-gray_disciple-born-in-darkness-sp" data-hash-target><div className="box">Born in Darkness (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Wholeness of body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 7th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">The gray disciple can radiate <Link to="/spell/darkness">darkness</Link> (as the spell, except originating from the disciple's person) for 1 round per level by spending 1 ki point.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-gray_disciple-earth-glide-su" data-hash-target><div className="box">Earth Glide (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Abundant step</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">The gray disciple can spend a ki point to walk through solid stone for 1 round. This functions as the <Link to="/umr/earth_glide">earth glide</Link> universal monster ability. The gray disciple may continue <em>earth gliding</em> as long as he spends 1 ki point every round as a <strong className="hl">swift action</strong>. If he ceases <em>earth gliding</em> within a solid object, he is violently ejected and takes 5d6 points of damage. The gray disciple is not harmed by damage caused to material he is <em>earth gliding</em> through, but a <Link to="/spell/stone_to_flesh">stone to flesh</Link> spell cast upon it causes violent ejection as described above.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-gray_disciple-entomb-su" data-hash-target><div className="box">Entomb (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Quivering palm</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 15th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A gray disciple can phase a foe into solid rock, killing it instantly. To use this ability, he expends 1 ki point as part of a <Link to="/rule/bull_rush">bull rush</Link> or <Link to="/rule/reposition">reposition</Link> combat maneuver against a creature adjacent to unworked earth or stone. If the attempt succeeds, the gray disciple pushes his foe inside the rock using his <em>earth glide</em> ability. If the creature succeeds at a Reflex save (DC 10 + 1/2 the gray disciple's monk level + the gray disciple's Wisdom modifier), it is ejected in the nearest open space and takes 5d6 points of damage. If it fails, it dies instantly as its body merges with the surrounding stone.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box"><em>Entomb</em> is usable once per day, but a failed bull rush or reposition attempt does not count as a use of the ability. <em>Entomb</em> has no effect on creatures that can <em>earth glide,</em> are <Link to="/umr/incorporeal">incorporeal</Link>, or can otherwise can survive merging with a solid object.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-gray_disciple-earthen-thrall-sp" data-hash-target><div className="box">Earthen Thrall (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Tongue of the sun and moon, empty body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 17th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A gray disciple can attempt to control a creature with the earth subtype once per day. This ability is treated as <Link to="/spell/dominate_monster">dominate monster</Link> (DC 10 + 1/2 the gray disciple's monk level + the gray disciple's Wisdom modifier), but is only effective against creatures with the earth subtype, and the gray disciple can keep only a single creature enthralled.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If he attempts to control a second creature with this ability, the first creature is automatically released from domination whether or not the second attempt succeeds.</div></div></div></div>
</>};
const _hamatulatsu_master = {title: "Hamatulatsu Master", jsx: <><h2 id="arc-monk-hamatulatsu_master-hamatulatsu-master">Hamatulatsu Master</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 38</Link><br/>Once part of the Sisterhood of Eiseth, the Sisterhood of the Golden Erinyes is an order of female monks dedicated to emulating the painful strikes of the <Link to="/monster/barbed_devil">barbed devil</Link>, leaving targets alive but permanently scarred and broken by pain - a method called hamatulatsu. The sisters train equally hard to resist their own techniques, and nearly all revere <Link to="/faith/asmodeus">Asmodeus</Link>.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/info"><IonIcon icon="/icons/info.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-hamatulatsu_master-alignment" data-hash-target><div className="box">Alignment</div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">A hamatulatsu master must be lawful neutral or lawful evil.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-hamatulatsu_master-bonus-feats" data-hash-target><div className="box">Bonus Feats</div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">A hamatulatsu master replaces the normal monk bonus feats with the following: <Link to="/feat/deflect_arrows">Deflect Arrows</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link>, <Link to="/feat/improved_grapple">Improved Grapple</Link>, <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link>, <Link to="/feat/scorpion_style">Scorpion Style</Link>, or <Link to="/feat/weapon_focus">Weapon Focus</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">The following feats are added to the list: <Link to="/feat/gorgons_fist">Gorgon's Fist</Link>, <Link to="/feat/hamatulatsu">Hamatulatsu</Link>, <Link to="/feat/improved_sunder">Improved Sunder</Link>, <Link to="/feat/mobility">Mobility</Link>, <Link to="/feat/power_attack">Power Attack</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">The following feats are added to the list: <Link to="/feat/critical_focus">Critical Focus</Link>, <Link to="/feat/impaling_critical">Impaling Critical</Link> (unarmed strike), <Link to="/feat/improved_critical">Improved Critical</Link>, <Link to="/feat/medusas_wrath">Medusa's Wrath</Link>, <Link to="/feat/snatch_arrows">Snatch Arrows</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 14th Level</div></div><div className="abEnd"><div className="box">The following feat is added to the list: <Link to="/feat/improved_impaling_critical">Improved Impaling Critical</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Any time a hamatulatsu master would gain a bonus feat, she can instead choose to gain two additional uses of <em>stunning fist</em> per day.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-hamatulatsu_master-stunning-fist-ex" data-hash-target><div className="box">Stunning Fist (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A hamatulatsu master expands the conditions that she can apply to the target of her <em>stunning fist</em> beyond merely stunning her target.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">She can choose to make the target <Link to="/misc/shaken">shaken</Link> for 1 minute.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">She can choose to deal 1d10 points of nonlethal <Link to="/umr/bleed">bleed</Link> damage.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">She can choose to make the target <Link to="/misc/frightened">frightened</Link> for 1d3 rounds.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">She can deal 2d12 points of nonlethal bleed damage.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The shaken and frightened conditions allow the target to attempt a Will save to negate the effect instead of a Fortitude save. This ability otherwise functions as normal for a monk of her level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-hamatulatsu_master-ki-pool-su" data-hash-target><div className="box">Ki Pool (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">By spending 1 point from her <em>ki pool,</em> a hamatulatsu master can make one additional attack at her highest attack bonus when making a <em>flurry of blows</em> attack. Alternatively, she can spend 1 ki point to gain one additional use of her <em>stunning fist</em> ability that round, though this does not grant her an additional attack.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Immediate Action</div></div><div className="abEnd"><div className="box">A hamatulatsu master can spend 1 ki point to make a single melee attack with a +2 bonus against a creature that has damaged her with a natural melee attack, unarmed strike, or weapon without the reach property.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">This ability otherwise functions as normal for a monk of her level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-hamatulatsu_master-infernal-resilience-ex" data-hash-target><div className="box">Infernal Resilience (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Purity of body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A hamatulatsu master gains immunity to all spells, spell-like abilities, and effects with the pain descriptor, as well as a +2 bonus on saving throws against effects that would sicken, nauseate, stagger, or stun her.</div></div></div></div>
</>};
const _harrow_warden = {title: "Harrow Warden", jsx: <><h2 id="arc-monk-harrow_warden-harrow-warden">Harrow Warden</h2>
<p><strong>Sources</strong> <Link to="/source/the_harrow_handbook">The Harrow Handbook pg. 7</Link><br/>Some who study the mysteries of the harrow do so to restore lost knowledge and pride to the Varisian people. The harrow warden fulfills this role as she seeks to bring her mind and body into alignment, and she protects her people by invoking the folklore that has guided them for so long. In mastering her own place in fate, a harrow warden learns how to misalign the destinies of others.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/info"><IonIcon icon="/icons/info.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-harrow_warden-weapon-and-armor-proficiency" data-hash-target><div className="box">Weapon and Armor Proficiency</div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">The harrow warden is proficient with all simple weapons, as well as with the <Link to="/eq-armor/klar">klar</Link>, <Link to="/eq-weapon/rapier">rapier</Link>, <Link to="/eq-weapon/short_sword">short sword</Link>, and <Link to="/eq-weapon/starknife">starknife</Link>. Additionally, harrow wardens treat starknives as monk weapons.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-harrow_warden-idiot-strike-su" data-hash-target><div className="box">Idiot Strike (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Stunning fist</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">1 time/day per monk level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">The harrow warden can make an unarmed strike against a target and curse the creature with bad luck. Foes damaged by an <em>idiot strike</em> must succeed at a Will save (DC 10 + 1/2 the monk's level + the monk's Wisdom modifier) or become jinxed. A jinxed creature must roll twice whenever it attempts an attack roll, a saving throw, a skill check, or a caster level check for 1 round, taking the lower result in each instance. She must declare that she is using an <em>idiot strike</em> before making the attack roll; thus, a failed roll wastes the attempt.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">The jinxed condition lasts for 2 rounds.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">The jinxed condition lasts for 3 rounds.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">A harrow warden can expend two uses of <em>idiot strike</em> to instead curse her target as the <Link to="/spell/bestow_curse">bestow curse</Link> spell.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-harrow_warden-mute-hag-stance-su" data-hash-target><div className="box">Mute Hag Stance (Su)</div><div className="flavor">The harrow warden can block opponents' metaphysical ties to one another.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Improved evasion</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 9th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Enemies threatened by the harrow warden do not gain the effects of any morale or insight bonuses on attack rolls or skill checks as long as they are within the harrow warden's threatened area.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-harrow_warden-big-sky-stance-su" data-hash-target><div className="box">Big Sky Stance (Su)</div><div className="flavor">The harrow warden becomes secure in her role within the larger story.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Diamond body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">She gains immunity to curses and polymorph effects.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-harrow_warden-eclipse-strike-su" data-hash-target><div className="box">Eclipse Strike (Su)</div><div className="flavor">The harrow warden can strike a target with enough force to realign its place in the world.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Quivering palm</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 15th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Foes damaged by the harrow warden's <em>idiot strike</em> can attempt a Fortitude save (DC 10 + 1/2 the monk's level + the monk's Wisdom modifier). Those that fail are transmuted into a harmless form, as per the <Link to="/spell/baleful_polymorph">baleful polymorph</Link> spell.</div></div></div></div>
</>};
const _hellcat = {title: "Hellcat", jsx: <><h2 id="arc-monk-hellcat-hellcat">Hellcat</h2>
<p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex pg. 92</Link><br/>Monks of the hellcat sect follow the teachings of Asmodeus or another infernal power. Their brutal training strips away their physical weaknesses, and their vicious fighting style is inspired by the predatory techniques of the hellcat.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/hazard-sign"><IonIcon icon="/icons/hazard-sign.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-hellcat-alignment" data-hash-target><div className="box">Alignment</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Alignment requirements</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">A hellcat must be lawful evil or lawful neutral. A hellcat who becomes lawful good or nonlawful cannot gain new levels as a monk but retains all monk abilities.</div></div></div></div>
<Ability icon={["skills"]} id="arc-monk-hellcat-undefined">
<Pair id="arc-monk-hellcat-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Craft, Knowledge (history), Perform, Profession</Pair></Ability>
<div className="ability p"><div className="abIcon"><Link to="/icons/info"><IonIcon icon="/icons/info.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-hellcat-weapon-proficiency" data-hash-target><div className="box">Weapon Proficiency</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Weapon proficiencies</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">A hellcat is proficient with the <Link to="/eq-weapon/club">club</Link>, <Link to="/eq-weapon/crossbow">crossbow</Link> (light or heavy), <Link to="/eq-weapon/dagger">dagger</Link>, <Link to="/eq-weapon/kama">kama</Link>, <Link to="/eq-weapon/light_mace">light mace</Link>, <Link to="/eq-weapon/nunchaku">nunchaku</Link>, <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>, <Link to="/eq-weapon/repeating_crossbow">repeating crossbow</Link> (light or heavy), <Link to="/eq-weapon/sai">sai</Link>, <Link to="/eq-weapon/shuriken">shuriken</Link>, and <Link to="/eq-weapon/siangham">siangham</Link>. In addition to monk weapons and unarmed strikes, a hellcat can use a <Link to="/eq-weapon/light_mace">light mace</Link> to perform a <em>flurry of blows</em>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-hellcat-bonus-feat" data-hash-target><div className="box">Bonus Feat</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Bonus feat</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">A hellcat selects bonus feats from the following list: <Link to="/feat/aspect_of_the_beast">Aspect of the Beast</Link>, <Link to="/feat/blind_fight">Blind-Fight</Link>, <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/diehard">Diehard</Link>, <Link to="/feat/improved_grapple">Improved Grapple</Link>, and <Link to="/feat/power_attack">Power Attack</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">The following feats are added to the list: <Link to="/feat/critical_focus">Critical Focus</Link>, <Link to="/feat/greater_grapple">Greater Grapple</Link>, <Link to="/feat/improved_blind_fight">Improved Blind-Fight</Link>, <Link to="/feat/mobility">Mobility</Link>, and <Link to="/feat/stalwart">Stalwart</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">The following feats are added to the list: <Link to="/feat/bleeding_critical">Bleeding Critical</Link>, <Link to="/feat/greater_blind_fight">Greater Blind-Fight</Link>, <Link to="/feat/improved_critical">Improved Critical</Link>, <Link to="/feat/improved_stalwart">Improved Stalwart</Link>, and <Link to="/feat/spring_attack">Spring Attack</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-hellcat-hellcat-fury-ex" data-hash-target><div className="box">Hellcat Fury (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Stunning fist, fast movement</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">A hellcat can deal slashing damage with his unarmed strikes.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">Whenever a hellcat confirms a critical hit with his slashing unarmed strike, the target of that attack also takes 1d4 points of <Link to="/umr/bleed">bleed</Link> damage.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">The bleed damage increases to 1d6 points.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">The bleed damage increases to 1d8 points.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">The bleed damage increases to 1d10 points.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">The bleed damage increases to 1d12 points.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-hellcat-torture-training-ex" data-hash-target><div className="box">Torture Training (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Evasion, purity of body, improved evasion</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A hellcat who fails a save against an effect that causes him to become fatigued, sickened, or staggered can attempt a second save against the effect at the end of his next turn. Only one additional save is allowed.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">He can also attempt this second save against effects that would cause him to become frightened or shaken.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">He can also attempt this second save against effects that would cause him to become exhausted, nauseated, or dazed.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-hellcat-crucible-of-pain-ex" data-hash-target><div className="box">Crucible of Pain (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Slow fall, still mind</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A hellcat gains an amount of <Link to="/rule/dr">DR</Link>/- equal to half his monk level against nonlethal damage. In addition, a hellcat is inured to hot climate effects as if using <Link to="/spell/endure_elements">endure elements</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-hellcat-hellcat-ki-su" data-hash-target><div className="box">Hellcat Ki (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Wholeness of body, diamond body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Ki pool</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A hellcat gains a pool of ki points that he can use as per the monk class feature but with the following changes. In addition to spending ki to gain an additional attack, increased speed, or improved AC, a hellcat can spend 1 ki point as a <strong className="hl">swift action</strong> to enhance his sight (gaining 60-foot darkvision) or his sense of smell (gaining the <Link to="/umr/scent">scent</Link> ability) for 1 minute per level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">A hellcat can spend 1 point of ki as a <strong className="hl">swift action</strong> to gain fire resistance 5 for 1 round per level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">The fire resistance increases to 10.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">A hellcat can spend 1 point of ki as a <strong className="hl">swift action</strong> to become silhouetted with a ghostly flame, which makes him harder to see in light but easier to see in darkness for 1 round per level. He becomes invisible in bright light, gains <Link to="/rule/concealment">concealment</Link> (20% miss chance) in normal light, gains no benefit in dim light, and gives off light like a <Link to="/eq-misc/candle">candle</Link> in darkness, allowing other creatures to see him even without darkvision. If he takes any action that would break <Link to="/spell/invisibility">invisibility</Link> while in bright light, his invisibility is reduced to concealment until the end of his next turn.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 14th Level</div></div><div className="abEnd"><div className="box">The fire resistance increases to 15.</div></div></div></div>
</>};
const _hungry_ghost_monk = {title: "Hungry Ghost Monk", jsx: <><h2 id="arc-monk-hungry_ghost_monk-hungry-ghost-monk">Hungry Ghost Monk</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 110</Link><br/>The hungry ghost monk looks to spirits that prey upon the living as models of perfection. He sees the life energy of the universe as a resource to be manipulated, even stealing it from other creatures. It is through this constant influx of energy that the hungry ghost monk reaches his ultimate goal: power - personal, pure, and simple. A hungry ghost monk has the following class features.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-hungry_ghost_monk-punishing-kick-ex" data-hash-target><div className="box">Punishing Kick (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Stunning Fist</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A hungry ghost monk gains <Link to="/feat/punishing_kick">Punishing Kick</Link> as a bonus feat, even if he does not meet the prerequisites.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">The monk can push the target of his Punishing Kick an additional 5 feet (to 10 feet).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">He can push the target 15 feet away. Or, he can instead choose to push the target 5 feet and knock the target <Link to="/rule/prone">prone</Link> with the same attack. The target still gets a saving throw to avoid being knocked prone.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">He can push the target 20 feet away.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-hungry_ghost_monk-steal-ki-ex" data-hash-target><div className="box">Steal Ki (Ex)</div><div className="flavor">A hungry ghost monk can steal ki from other creatures, though this ability is controversial in some circles of monks, who see it as nothing less than a form of vampirism.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Purity of body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">If the monk scores a confirmed critical hit against a living enemy or reduces a living enemy to 0 or fewer hit points, he can steal some of that creature's ki. This ability replenishes 1 spent ki point to the monk's <em>ki pool,</em> as long as the monk has at least 1 ki point in his pool. He cannot exceed his *ki pool's maximum.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">Each time the monk successfully steals ki, he can make an immediate saving throw against one disease he is suffering from. There is no penalty for failing this saving throw. The monk gains a bonus equal to his Wisdom modifier on the saving throw.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/heart-plus"><IonIcon icon="/icons/heart-plus.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-hungry_ghost_monk-life-funnel-su" data-hash-target><div className="box">Life Funnel (Su)</div><div className="flavor">A hungry ghost monk can steal a creature's life force to replenish his own.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Wholeness of body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 7th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">If the monk has at least 1 ki point in his <em>ki pool</em> and scores a confirmed critical hit against a living enemy or reduces a living enemy to 0 or fewer hit points, he heals a number of hit points equal to his monk level. As with <em>steal ki,</em> some monks believe that <em>life funnel</em> is an unsavory act, no better than what the undead do to the living.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">A monk with this ability cannot steal both ki and hit points at the same time.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/heart-plus"><IonIcon icon="/icons/heart-plus.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-hungry_ghost_monk-life-from-a-stone-su" data-hash-target><div className="box">Life from a Stone (Su)</div><div className="flavor">A hungry ghost monk can steal ki or life force from any creature, not just living creatures.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Diamond body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">If the monk has at least 1 ki point in his pool, he gains the benefit of <em>life funnel</em> and <em>steal ki</em> when he confirms a critical hit against any creature or reduces any creature to 0 or fewer hit points.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/heart-plus"><IonIcon icon="/icons/heart-plus.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-hungry_ghost_monk-sipping-demon-su" data-hash-target><div className="box">Sipping Demon (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Diamond soul</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 13th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A hungry ghost monk gains 1 <Link to="/rule/temporary_hit_points">temporary hit point</Link> each time he hits an enemy with a melee attack. The monk gains a number of temporary hit points equal to his Wisdom modifier when he scores a critical hit. The maximum number of temporary hit points the monk can have is equal to his monk level. The temporary hit points disappear 1 hour later.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The monk can only use this ability when he has at least 1 ki point in his <em>ki pool.</em> This ability is a proscribed manipulation of ki considered by many good monks to be a corruption.</div></div></div></div>
</>};
const _invested_regent = {hasJL:true,title: "Invested Regent", jsx: <><div className="jumpList" id="arc-monk-invested_regent-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arc-monk-invested_regent-2nd-level-vested-powers">2nd-Level Vested Powers</InnerLink></li><li><InnerLink toTop to="arc-monk-invested_regent-6th-level-vested-powers">6th-Level Vested Powers</InnerLink></li><li><InnerLink toTop to="arc-monk-invested_regent-10th-level-vested-powers">10th-Level Vested Powers</InnerLink></li><li><InnerLink toTop to="arc-monk-invested_regent-14th-level-vested-powers">14th-Level Vested Powers</InnerLink></li><li><InnerLink toTop to="arc-monk-invested_regent-18th-level-vested-powers">18th-Level Vested Powers</InnerLink></li></ul></div><h2 id="arc-monk-invested_regent-invested-regent">Invested Regent</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court pg. 22</Link><br/>The invested regent has been handpicked by inscrutable divine forces to command others - either at the present or at some future time. The invested regent can harness a divine spark to perform superhuman stunts, influence others, and escape injury. Invested regents come from all races and walks of life, but they are more likely to be nobleborn in their cultures. Although some invested regents are acutely aware of their powers' divine origins (such as powers gained from an investment ceremony to <Link to="/faith/asmodeus">Asmodeus</Link> in the nation of Cheliax), others do not know the source of their abilities. Invested regents have strong personalities and a destiny to rule.</p>
<div style={{clear:"both"}}></div><div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-invested_regent-investiture-su" data-hash-target><div className="box">Investiture (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Bonus feat gained at 1st level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">An invested regent gains a pool of <em>investiture points,</em> supernatural energy he can use to call upon amazing abilities and divine protection. The number of points in the invested regent's <em>investiture pool</em> is equal to 1/2 his monk level + his Charisma modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">As long as he has at least 1 point in his <em>investiture pool,</em> the invested regent can select one of his saving throws and gain a +1 sacred bonus on saving throws of that type for 1 round. If he spends 1 point from his <em>investiture pool</em> during this swift action, he instead gains a sacred bonus equal to his Charisma modifier on the saving throw selected.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">A character with this feature and the <em>ki pool</em> class feature tracks <em>investiture points</em> and ki points separately.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-invested_regent-vested-power-ex-or-sp" data-hash-target><div className="box">Vested Power (Ex or Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Bonus feat the invested regent gives up for the vested power</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">An invested regent can select a vested power (see the Vested Powers section below) for which he qualifies in place of selecting a monk bonus feat. The invested regent need not do so and can instead take the bonus feat, but once the decision to take a bonus feat or a vested power is made, he can't change it.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">He can select a 2nd vested power.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">He can select a 3rd vested power.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 14th Level</div></div><div className="abEnd"><div className="box">He can select a 4th vested power.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">He can select a 5th vested power.</div></div></div></div>
<div className="ability p hasSubs"><div className="abIcon"><Link to="/icons/info"><IonIcon icon="/icons/info.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-invested_regent-vested-powers" data-hash-target><div className="box">Vested Powers</div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box"><p>Vested powers are abilities that draw on an invested regent's <em>investiture pool.</em> Vested powers are divided into two categories: feats and spells.</p>
<p>All vested powers have a minimum level requirement to select them. An invested regent who hasn't reached the required monk level cannot select that vested power.</p>
<p>Most vested powers require the invested regent to spend <em>investiture points;</em> the exact amount is listed after the vested power. Vested powers that cost 0 <em>investiture points</em> don't require the invested regent to have any <em>investiture points</em> in his <em>investiture pool</em> to use the ability. The saving throw against an invested regent's vested power, if any, is equal to 10 + 1/2 the invested regent's monk level + his Charisma bonus.</p>
</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/info"><IonIcon icon="/icons/info.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-invested_regent-feats" data-hash-target><div className="box">Feats</div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">These vested powers duplicate the effects of specific feats. An invested regent doesn't need to qualify for a feat to select it as a vested power. For example, an invested regent can select Spring Attack as a vested power even if he doesn't meet the prerequisites for selecting Spring Attack as a feat. Activating one of these vested powers is a <strong className="hl">free action</strong> on the invested regent's turn; until the start of his next turn, the invested regent is treated as if he had that feat. Some feats can also be activated as an <strong className="hl">immediate action</strong> when it isn't the invested regent's turn.</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/info"><IonIcon icon="/icons/info.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-invested_regent-spells" data-hash-target><div className="box">Spells</div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">These vested powers duplicate the effects of a spell and are spell-like abilities. An invested regent's monk level is the caster level for these spell-like abilities, and he uses Charisma to determine his <Link to="/rule/concentration">concentration</Link> check bonus. Activating one of these vested powers is a <strong className="hl">standard action</strong></div></div></div></div>
<h3 id="arc-monk-invested_regent-2nd-level-vested-powers" data-hash-target>2nd-Level Vested Powers</h3>
<ScrollContainer id="arc-monk-invested_regent--table-0"><table>
<thead>
<tr>
<th>Power</th>
<th>Type</th>
<th>Investiture Points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/spell/comprehend_languages">Comprehend languages</Link></strong></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/divine_favor">Divine favor</Link></strong></td>
<td>Spell</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/dodge">Dodge</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-I-1" id="arc-monk-invested_regent-ref-I-1" data-hash-target to="arc-monk-invested_regent-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>0</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/entropic_shield">Entropic shield</Link></strong></td>
<td>Spell</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/expeditious_retreat">Expeditious retreat</Link></strong></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/feather_step">Feather step</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-S-1" id="arc-monk-invested_regent-ref-S-1" data-hash-target to="arc-monk-invested_regent-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/hide_from_undead">Hide from undead</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-S-2" id="arc-monk-invested_regent-ref-S-2" data-hash-target to="arc-monk-invested_regent-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/sanctuary">Sanctuary</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-S-3" id="arc-monk-invested_regent-ref-S-3" data-hash-target to="arc-monk-invested_regent-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/shield_of_faith">Shield of faith</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-S-4" id="arc-monk-invested_regent-ref-S-4" data-hash-target to="arc-monk-invested_regent-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>1</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="arc-monk-invested_regent-6th-level-vested-powers" data-hash-target>6th-Level Vested Powers</h3>
<ScrollContainer id="arc-monk-invested_regent--table-1"><table>
<thead>
<tr>
<th>Power</th>
<th>Type</th>
<th>Investiture Points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/spell/calm_emotions">Calm emotions</Link></strong></td>
<td>Spell</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/cloak_of_winds">Cloak of winds</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-S-5" id="arc-monk-invested_regent-ref-S-5" data-hash-target to="arc-monk-invested_regent-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/enthrall">Enthrall</Link></strong></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/gaseous_form">Gaseous form</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-S-6" id="arc-monk-invested_regent-ref-S-6" data-hash-target to="arc-monk-invested_regent-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/helping_hand">Helping hand</Link></strong></td>
<td>Spell</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/heroic_defiance">Heroic Defiance</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-I-2" id="arc-monk-invested_regent-ref-I-2" data-hash-target to="arc-monk-invested_regent-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/heroic_recovery">Heroic Recovery</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-I-3" id="arc-monk-invested_regent-ref-I-3" data-hash-target to="arc-monk-invested_regent-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/protective_spirit">Protective spirit</Link></strong></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/remove_disease">Remove disease</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-S-7" id="arc-monk-invested_regent-ref-S-7" data-hash-target to="arc-monk-invested_regent-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/sidestep">Sidestep</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-I-4" id="arc-monk-invested_regent-ref-I-4" data-hash-target to="arc-monk-invested_regent-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/snatch_arrows">Snatch Arrows</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-I-5" id="arc-monk-invested_regent-ref-I-5" data-hash-target to="arc-monk-invested_regent-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/spring_attack">Spring Attack</Link></strong></td>
<td>Feat</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/tongues">Tongues</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-S-8" id="arc-monk-invested_regent-ref-S-8" data-hash-target to="arc-monk-invested_regent-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>2</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="arc-monk-invested_regent-10th-level-vested-powers" data-hash-target>10th-Level Vested Powers</h3>
<ScrollContainer id="arc-monk-invested_regent--table-2"><table>
<thead>
<tr>
<th>Power</th>
<th>Type</th>
<th>Investiture Points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/spell/air_walk">Air walk</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-S-9" id="arc-monk-invested_regent-ref-S-9" data-hash-target to="arc-monk-invested_regent-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/death_ward">Death ward</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-S-10" id="arc-monk-invested_regent-ref-S-10" data-hash-target to="arc-monk-invested_regent-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/dimension_door">Dimension door</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-S-11" id="arc-monk-invested_regent-ref-S-11" data-hash-target to="arc-monk-invested_regent-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/discern_lies">Discern lies</Link></strong></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/divine_power">Divine power</Link></strong></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/freedom_of_movement">Freedom of movement</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-S-12" id="arc-monk-invested_regent-ref-S-12" data-hash-target to="arc-monk-invested_regent-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/improved_blind_fight">Improved Blind-Fight</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-I-6" id="arc-monk-invested_regent-ref-I-6" data-hash-target to="arc-monk-invested_regent-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/improved_great_fortitude">Improved Great Fortitude</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-I-7" id="arc-monk-invested_regent-ref-I-7" data-hash-target to="arc-monk-invested_regent-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/improved_iron_will">Improved Iron Will</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-I-8" id="arc-monk-invested_regent-ref-I-8" data-hash-target to="arc-monk-invested_regent-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/improved_lightning_reflexes">Improved Lightning Reflexes</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-I-9" id="arc-monk-invested_regent-ref-I-9" data-hash-target to="arc-monk-invested_regent-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/mark_of_justice">Mark of justice</Link></strong></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/neutralize_poison">Neutralize poison</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-S-13" id="arc-monk-invested_regent-ref-S-13" data-hash-target to="arc-monk-invested_regent-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/restoration">Restoration</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-S-14" id="arc-monk-invested_regent-ref-S-14" data-hash-target to="arc-monk-invested_regent-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/spell_resistance">Spell resistance</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-S-15" id="arc-monk-invested_regent-ref-S-15" data-hash-target to="arc-monk-invested_regent-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/wind_stance">Wind Stance</Link></strong></td>
<td>Feat</td>
<td>2</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="arc-monk-invested_regent-14th-level-vested-powers" data-hash-target>14th-Level Vested Powers</h3>
<ScrollContainer id="arc-monk-invested_regent--table-3"><table>
<thead>
<tr>
<th>Power</th>
<th>Type</th>
<th>Investiture Points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/spell/antilife_shell">Antilife shell</Link></strong></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/disarming_strike">Disarming Strike</Link></strong></td>
<td>Feat</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/greater_blind_fight">Greater Blind-Fight</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-I-10" id="arc-monk-invested_regent-ref-I-10" data-hash-target to="arc-monk-invested_regent-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/greater_command">Greater command</Link></strong></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/greater_forbid_action">Greater forbid action</Link></strong></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/lightning_stance">Lightning Stance</Link></strong></td>
<td>Feat</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/shadow_walk">Shadow walk</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-S-16" id="arc-monk-invested_regent-ref-S-16" data-hash-target to="arc-monk-invested_regent-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/unwilling_shield">Unwilling shield</Link></strong></td>
<td>Spell</td>
<td>3</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="arc-monk-invested_regent-18th-level-vested-powers" data-hash-target>18th-Level Vested Powers</h3>
<ScrollContainer id="arc-monk-invested_regent--table-4"><table>
<thead>
<tr>
<th>Power</th>
<th>Type</th>
<th>Investiture Points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/spell/divine_vessel">Divine vessel</Link></strong></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/foresight">Foresight</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-S-17" id="arc-monk-invested_regent-ref-S-17" data-hash-target to="arc-monk-invested_regent-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/greater_restoration">Greater restoration</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-S-18" id="arc-monk-invested_regent-ref-S-18" data-hash-target to="arc-monk-invested_regent-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/regenerate">Regenerate</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent-ref-S-19" id="arc-monk-invested_regent-ref-S-19" data-hash-target to="arc-monk-invested_regent-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/repulsion">Repulsion</Link></strong></td>
<td>Spell</td>
<td>3</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="arc-monk-invested_regent-label">Footnotes</h3>
<ol>
<li id="arc-monk-invested_regent-I">
<p>Can be used as an immediate action. <InnerLink id="backlink-arc-monk-invested_regent-ref-I-1" data-hash-target to="arc-monk-invested_regent-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-I-2" data-hash-target to="arc-monk-invested_regent-ref-I-2" aria-label="Back to reference I-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-I-3" data-hash-target to="arc-monk-invested_regent-ref-I-3" aria-label="Back to reference I-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-I-4" data-hash-target to="arc-monk-invested_regent-ref-I-4" aria-label="Back to reference I-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-I-5" data-hash-target to="arc-monk-invested_regent-ref-I-5" aria-label="Back to reference I-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-I-6" data-hash-target to="arc-monk-invested_regent-ref-I-6" aria-label="Back to reference I-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-I-7" data-hash-target to="arc-monk-invested_regent-ref-I-7" aria-label="Back to reference I-7">↩<sup>7</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-I-8" data-hash-target to="arc-monk-invested_regent-ref-I-8" aria-label="Back to reference I-8">↩<sup>8</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-I-9" data-hash-target to="arc-monk-invested_regent-ref-I-9" aria-label="Back to reference I-9">↩<sup>9</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-I-10" data-hash-target to="arc-monk-invested_regent-ref-I-10" aria-label="Back to reference I-10">↩<sup>10</sup></InnerLink></p>
</li>
<li id="arc-monk-invested_regent-S">
<p>Can only be used on himself. <InnerLink id="backlink-arc-monk-invested_regent-ref-S-1" data-hash-target to="arc-monk-invested_regent-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-S-2" data-hash-target to="arc-monk-invested_regent-ref-S-2" aria-label="Back to reference S-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-S-3" data-hash-target to="arc-monk-invested_regent-ref-S-3" aria-label="Back to reference S-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-S-4" data-hash-target to="arc-monk-invested_regent-ref-S-4" aria-label="Back to reference S-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-S-5" data-hash-target to="arc-monk-invested_regent-ref-S-5" aria-label="Back to reference S-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-S-6" data-hash-target to="arc-monk-invested_regent-ref-S-6" aria-label="Back to reference S-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-S-7" data-hash-target to="arc-monk-invested_regent-ref-S-7" aria-label="Back to reference S-7">↩<sup>7</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-S-8" data-hash-target to="arc-monk-invested_regent-ref-S-8" aria-label="Back to reference S-8">↩<sup>8</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-S-9" data-hash-target to="arc-monk-invested_regent-ref-S-9" aria-label="Back to reference S-9">↩<sup>9</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-S-10" data-hash-target to="arc-monk-invested_regent-ref-S-10" aria-label="Back to reference S-10">↩<sup>10</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-S-11" data-hash-target to="arc-monk-invested_regent-ref-S-11" aria-label="Back to reference S-11">↩<sup>11</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-S-12" data-hash-target to="arc-monk-invested_regent-ref-S-12" aria-label="Back to reference S-12">↩<sup>12</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-S-13" data-hash-target to="arc-monk-invested_regent-ref-S-13" aria-label="Back to reference S-13">↩<sup>13</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-S-14" data-hash-target to="arc-monk-invested_regent-ref-S-14" aria-label="Back to reference S-14">↩<sup>14</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-S-15" data-hash-target to="arc-monk-invested_regent-ref-S-15" aria-label="Back to reference S-15">↩<sup>15</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-S-16" data-hash-target to="arc-monk-invested_regent-ref-S-16" aria-label="Back to reference S-16">↩<sup>16</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-S-17" data-hash-target to="arc-monk-invested_regent-ref-S-17" aria-label="Back to reference S-17">↩<sup>17</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-S-18" data-hash-target to="arc-monk-invested_regent-ref-S-18" aria-label="Back to reference S-18">↩<sup>18</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent-ref-S-19" data-hash-target to="arc-monk-invested_regent-ref-S-19" aria-label="Back to reference S-19">↩<sup>19</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _invested_regent_uc = {hasJL:true,title: "Invested Regent (Unchained)", topLink: ["Unchained Monk","class/unchained_monk"], jsx: <><div className="jumpList" id="arc-monk-invested_regent_uc-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arc-monk-invested_regent_uc-2nd-level-vested-powers">2nd-Level Vested Powers</InnerLink></li><li><InnerLink toTop to="arc-monk-invested_regent_uc-6th-level-vested-powers">6th-Level Vested Powers</InnerLink></li><li><InnerLink toTop to="arc-monk-invested_regent_uc-10th-level-vested-powers">10th-Level Vested Powers</InnerLink></li><li><InnerLink toTop to="arc-monk-invested_regent_uc-14th-level-vested-powers">14th-Level Vested Powers</InnerLink></li><li><InnerLink toTop to="arc-monk-invested_regent_uc-18th-level-vested-powers">18th-Level Vested Powers</InnerLink></li></ul></div><h2 id="arc-monk-invested_regent_uc-invested-regent">Invested Regent</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court pg. 22</Link><br/>The invested regent has been handpicked by inscrutable divine forces to command others - either at the present or at some future time. The invested regent can harness a divine spark to perform superhuman stunts, influence others, and escape injury. Invested regents come from all races and walks of life, but they are more likely to be nobleborn in their cultures. Although some invested regents are acutely aware of their powers' divine origins (such as powers gained from an investment ceremony to <Link to="/faith/asmodeus">Asmodeus</Link> in the nation of Cheliax), others do not know the source of their abilities. Invested regents have strong personalities and a destiny to rule.</p>
<div style={{clear:"both"}}></div><div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-invested_regent_uc-investiture-su" data-hash-target><div className="box">Investiture (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Bonus feat gained at 1st level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">An invested regent gains a pool of <em>investiture points,</em> supernatural energy he can use to call upon amazing abilities and divine protection. The number of points in the invested regent's <em>investiture pool</em> is equal to 1/2 his monk level + his Charisma modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">As long as he has at least 1 point in his <em>investiture pool,</em> the invested regent can select one of his saving throws and gain a +1 sacred bonus on saving throws of that type for 1 round. If he spends 1 point from his <em>investiture pool</em> during this swift action, he instead gains a sacred bonus equal to his Charisma modifier on the saving throw selected.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">A character with this feature and the <em>ki pool</em> class feature tracks <em>investiture points</em> and ki points separately.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-invested_regent_uc-vested-power-ex-or-sp" data-hash-target><div className="box">Vested Power (Ex or Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Bonus feat the invested regent gives up for the vested power</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">An invested regent can select a vested power (see the Vested Powers section below) for which he qualifies in place of selecting a monk bonus feat. The invested regent need not do so and can instead take the bonus feat, but once the decision to take a bonus feat or a vested power is made, he can't change it.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">He can select a 2nd vested power.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">He can select a 3rd vested power.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 14th Level</div></div><div className="abEnd"><div className="box">He can select a 4th vested power.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">He can select a 5th vested power.</div></div></div></div>
<div className="ability p hasSubs"><div className="abIcon"><Link to="/icons/info"><IonIcon icon="/icons/info.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-invested_regent_uc-vested-powers" data-hash-target><div className="box">Vested Powers</div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box"><p>Vested powers are abilities that draw on an invested regent's <em>investiture pool.</em> Vested powers are divided into two categories: feats and spells.</p>
<p>All vested powers have a minimum level requirement to select them. An invested regent who hasn't reached the required monk level cannot select that vested power.</p>
<p>Most vested powers require the invested regent to spend <em>investiture points;</em> the exact amount is listed after the vested power. Vested powers that cost 0 <em>investiture points</em> don't require the invested regent to have any <em>investiture points</em> in his <em>investiture pool</em> to use the ability. The saving throw against an invested regent's vested power, if any, is equal to 10 + 1/2 the invested regent's monk level + his Charisma bonus.</p>
</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/info"><IonIcon icon="/icons/info.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-invested_regent_uc-feats" data-hash-target><div className="box">Feats</div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">These vested powers duplicate the effects of specific feats. An invested regent doesn't need to qualify for a feat to select it as a vested power. For example, an invested regent can select Spring Attack as a vested power even if he doesn't meet the prerequisites for selecting Spring Attack as a feat. Activating one of these vested powers is a <strong className="hl">free action</strong> on the invested regent's turn; until the start of his next turn, the invested regent is treated as if he had that feat. Some feats can also be activated as an <strong className="hl">immediate action</strong> when it isn't the invested regent's turn.</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/info"><IonIcon icon="/icons/info.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-invested_regent_uc-spells" data-hash-target><div className="box">Spells</div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">These vested powers duplicate the effects of a spell and are spell-like abilities. An invested regent's monk level is the caster level for these spell-like abilities, and he uses Charisma to determine his <Link to="/rule/concentration">concentration</Link> check bonus. Activating one of these vested powers is a <strong className="hl">standard action</strong></div></div></div></div>
<h3 id="arc-monk-invested_regent_uc-2nd-level-vested-powers" data-hash-target>2nd-Level Vested Powers</h3>
<ScrollContainer id="arc-monk-invested_regent_uc--table-0"><table>
<thead>
<tr>
<th>Power</th>
<th>Type</th>
<th>Investiture Points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/spell/comprehend_languages">Comprehend languages</Link></strong></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/divine_favor">Divine favor</Link></strong></td>
<td>Spell</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/dodge">Dodge</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-I-1" id="arc-monk-invested_regent_uc-ref-I-1" data-hash-target to="arc-monk-invested_regent_uc-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>0</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/entropic_shield">Entropic shield</Link></strong></td>
<td>Spell</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/expeditious_retreat">Expeditious retreat</Link></strong></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/feather_step">Feather step</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-S-1" id="arc-monk-invested_regent_uc-ref-S-1" data-hash-target to="arc-monk-invested_regent_uc-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/hide_from_undead">Hide from undead</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-S-2" id="arc-monk-invested_regent_uc-ref-S-2" data-hash-target to="arc-monk-invested_regent_uc-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/sanctuary">Sanctuary</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-S-3" id="arc-monk-invested_regent_uc-ref-S-3" data-hash-target to="arc-monk-invested_regent_uc-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/shield_of_faith">Shield of faith</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-S-4" id="arc-monk-invested_regent_uc-ref-S-4" data-hash-target to="arc-monk-invested_regent_uc-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>1</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="arc-monk-invested_regent_uc-6th-level-vested-powers" data-hash-target>6th-Level Vested Powers</h3>
<ScrollContainer id="arc-monk-invested_regent_uc--table-1"><table>
<thead>
<tr>
<th>Power</th>
<th>Type</th>
<th>Investiture Points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/spell/calm_emotions">Calm emotions</Link></strong></td>
<td>Spell</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/cloak_of_winds">Cloak of winds</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-S-5" id="arc-monk-invested_regent_uc-ref-S-5" data-hash-target to="arc-monk-invested_regent_uc-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/enthrall">Enthrall</Link></strong></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/gaseous_form">Gaseous form</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-S-6" id="arc-monk-invested_regent_uc-ref-S-6" data-hash-target to="arc-monk-invested_regent_uc-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/helping_hand">Helping hand</Link></strong></td>
<td>Spell</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/heroic_defiance">Heroic Defiance</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-I-2" id="arc-monk-invested_regent_uc-ref-I-2" data-hash-target to="arc-monk-invested_regent_uc-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/heroic_recovery">Heroic Recovery</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-I-3" id="arc-monk-invested_regent_uc-ref-I-3" data-hash-target to="arc-monk-invested_regent_uc-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/protective_spirit">Protective spirit</Link></strong></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/remove_disease">Remove disease</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-S-7" id="arc-monk-invested_regent_uc-ref-S-7" data-hash-target to="arc-monk-invested_regent_uc-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/sidestep">Sidestep</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-I-4" id="arc-monk-invested_regent_uc-ref-I-4" data-hash-target to="arc-monk-invested_regent_uc-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/snatch_arrows">Snatch Arrows</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-I-5" id="arc-monk-invested_regent_uc-ref-I-5" data-hash-target to="arc-monk-invested_regent_uc-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/spring_attack">Spring Attack</Link></strong></td>
<td>Feat</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/tongues">Tongues</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-S-8" id="arc-monk-invested_regent_uc-ref-S-8" data-hash-target to="arc-monk-invested_regent_uc-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>2</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="arc-monk-invested_regent_uc-10th-level-vested-powers" data-hash-target>10th-Level Vested Powers</h3>
<ScrollContainer id="arc-monk-invested_regent_uc--table-2"><table>
<thead>
<tr>
<th>Power</th>
<th>Type</th>
<th>Investiture Points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/spell/air_walk">Air walk</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-S-9" id="arc-monk-invested_regent_uc-ref-S-9" data-hash-target to="arc-monk-invested_regent_uc-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/death_ward">Death ward</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-S-10" id="arc-monk-invested_regent_uc-ref-S-10" data-hash-target to="arc-monk-invested_regent_uc-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/dimension_door">Dimension door</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-S-11" id="arc-monk-invested_regent_uc-ref-S-11" data-hash-target to="arc-monk-invested_regent_uc-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/discern_lies">Discern lies</Link></strong></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/divine_power">Divine power</Link></strong></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/freedom_of_movement">Freedom of movement</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-S-12" id="arc-monk-invested_regent_uc-ref-S-12" data-hash-target to="arc-monk-invested_regent_uc-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/improved_blind_fight">Improved Blind-Fight</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-I-6" id="arc-monk-invested_regent_uc-ref-I-6" data-hash-target to="arc-monk-invested_regent_uc-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/improved_great_fortitude">Improved Great Fortitude</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-I-7" id="arc-monk-invested_regent_uc-ref-I-7" data-hash-target to="arc-monk-invested_regent_uc-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/improved_iron_will">Improved Iron Will</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-I-8" id="arc-monk-invested_regent_uc-ref-I-8" data-hash-target to="arc-monk-invested_regent_uc-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/improved_lightning_reflexes">Improved Lightning Reflexes</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-I-9" id="arc-monk-invested_regent_uc-ref-I-9" data-hash-target to="arc-monk-invested_regent_uc-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/mark_of_justice">Mark of justice</Link></strong></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/neutralize_poison">Neutralize poison</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-S-13" id="arc-monk-invested_regent_uc-ref-S-13" data-hash-target to="arc-monk-invested_regent_uc-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/restoration">Restoration</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-S-14" id="arc-monk-invested_regent_uc-ref-S-14" data-hash-target to="arc-monk-invested_regent_uc-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/spell_resistance">Spell resistance</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-S-15" id="arc-monk-invested_regent_uc-ref-S-15" data-hash-target to="arc-monk-invested_regent_uc-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/wind_stance">Wind Stance</Link></strong></td>
<td>Feat</td>
<td>2</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="arc-monk-invested_regent_uc-14th-level-vested-powers" data-hash-target>14th-Level Vested Powers</h3>
<ScrollContainer id="arc-monk-invested_regent_uc--table-3"><table>
<thead>
<tr>
<th>Power</th>
<th>Type</th>
<th>Investiture Points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/spell/antilife_shell">Antilife shell</Link></strong></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/disarming_strike">Disarming Strike</Link></strong></td>
<td>Feat</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/greater_blind_fight">Greater Blind-Fight</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-I-10" id="arc-monk-invested_regent_uc-ref-I-10" data-hash-target to="arc-monk-invested_regent_uc-I">1</InnerLink></sup></td>
<td>Feat</td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/greater_command">Greater command</Link></strong></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/greater_forbid_action">Greater forbid action</Link></strong></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/lightning_stance">Lightning Stance</Link></strong></td>
<td>Feat</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/shadow_walk">Shadow walk</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-S-16" id="arc-monk-invested_regent_uc-ref-S-16" data-hash-target to="arc-monk-invested_regent_uc-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/unwilling_shield">Unwilling shield</Link></strong></td>
<td>Spell</td>
<td>3</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="arc-monk-invested_regent_uc-18th-level-vested-powers" data-hash-target>18th-Level Vested Powers</h3>
<ScrollContainer id="arc-monk-invested_regent_uc--table-4"><table>
<thead>
<tr>
<th>Power</th>
<th>Type</th>
<th>Investiture Points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/spell/divine_vessel">Divine vessel</Link></strong></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/foresight">Foresight</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-S-17" id="arc-monk-invested_regent_uc-ref-S-17" data-hash-target to="arc-monk-invested_regent_uc-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/greater_restoration">Greater restoration</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-S-18" id="arc-monk-invested_regent_uc-ref-S-18" data-hash-target to="arc-monk-invested_regent_uc-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/regenerate">Regenerate</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-invested_regent_uc-ref-S-19" id="arc-monk-invested_regent_uc-ref-S-19" data-hash-target to="arc-monk-invested_regent_uc-S">2</InnerLink></sup></td>
<td>Spell</td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/repulsion">Repulsion</Link></strong></td>
<td>Spell</td>
<td>3</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="arc-monk-invested_regent_uc-label">Footnotes</h3>
<ol>
<li id="arc-monk-invested_regent_uc-I">
<p>Can be used as an immediate action. <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-I-1" data-hash-target to="arc-monk-invested_regent_uc-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-I-2" data-hash-target to="arc-monk-invested_regent_uc-ref-I-2" aria-label="Back to reference I-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-I-3" data-hash-target to="arc-monk-invested_regent_uc-ref-I-3" aria-label="Back to reference I-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-I-4" data-hash-target to="arc-monk-invested_regent_uc-ref-I-4" aria-label="Back to reference I-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-I-5" data-hash-target to="arc-monk-invested_regent_uc-ref-I-5" aria-label="Back to reference I-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-I-6" data-hash-target to="arc-monk-invested_regent_uc-ref-I-6" aria-label="Back to reference I-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-I-7" data-hash-target to="arc-monk-invested_regent_uc-ref-I-7" aria-label="Back to reference I-7">↩<sup>7</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-I-8" data-hash-target to="arc-monk-invested_regent_uc-ref-I-8" aria-label="Back to reference I-8">↩<sup>8</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-I-9" data-hash-target to="arc-monk-invested_regent_uc-ref-I-9" aria-label="Back to reference I-9">↩<sup>9</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-I-10" data-hash-target to="arc-monk-invested_regent_uc-ref-I-10" aria-label="Back to reference I-10">↩<sup>10</sup></InnerLink></p>
</li>
<li id="arc-monk-invested_regent_uc-S">
<p>Can only be used on himself. <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-S-1" data-hash-target to="arc-monk-invested_regent_uc-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-S-2" data-hash-target to="arc-monk-invested_regent_uc-ref-S-2" aria-label="Back to reference S-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-S-3" data-hash-target to="arc-monk-invested_regent_uc-ref-S-3" aria-label="Back to reference S-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-S-4" data-hash-target to="arc-monk-invested_regent_uc-ref-S-4" aria-label="Back to reference S-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-S-5" data-hash-target to="arc-monk-invested_regent_uc-ref-S-5" aria-label="Back to reference S-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-S-6" data-hash-target to="arc-monk-invested_regent_uc-ref-S-6" aria-label="Back to reference S-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-S-7" data-hash-target to="arc-monk-invested_regent_uc-ref-S-7" aria-label="Back to reference S-7">↩<sup>7</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-S-8" data-hash-target to="arc-monk-invested_regent_uc-ref-S-8" aria-label="Back to reference S-8">↩<sup>8</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-S-9" data-hash-target to="arc-monk-invested_regent_uc-ref-S-9" aria-label="Back to reference S-9">↩<sup>9</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-S-10" data-hash-target to="arc-monk-invested_regent_uc-ref-S-10" aria-label="Back to reference S-10">↩<sup>10</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-S-11" data-hash-target to="arc-monk-invested_regent_uc-ref-S-11" aria-label="Back to reference S-11">↩<sup>11</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-S-12" data-hash-target to="arc-monk-invested_regent_uc-ref-S-12" aria-label="Back to reference S-12">↩<sup>12</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-S-13" data-hash-target to="arc-monk-invested_regent_uc-ref-S-13" aria-label="Back to reference S-13">↩<sup>13</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-S-14" data-hash-target to="arc-monk-invested_regent_uc-ref-S-14" aria-label="Back to reference S-14">↩<sup>14</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-S-15" data-hash-target to="arc-monk-invested_regent_uc-ref-S-15" aria-label="Back to reference S-15">↩<sup>15</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-S-16" data-hash-target to="arc-monk-invested_regent_uc-ref-S-16" aria-label="Back to reference S-16">↩<sup>16</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-S-17" data-hash-target to="arc-monk-invested_regent_uc-ref-S-17" aria-label="Back to reference S-17">↩<sup>17</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-S-18" data-hash-target to="arc-monk-invested_regent_uc-ref-S-18" aria-label="Back to reference S-18">↩<sup>18</sup></InnerLink> <InnerLink id="backlink-arc-monk-invested_regent_uc-ref-S-19" data-hash-target to="arc-monk-invested_regent_uc-ref-S-19" aria-label="Back to reference S-19">↩<sup>19</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _ironskin_monk = {title: "Ironskin Monk", jsx: <><h2 id="arc-monk-ironskin_monk-ironskin-monk">Ironskin Monk</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 122</Link><br/>Through discipline and training, an ironskin monk hardens his body to withstand punishing blows. Though slow on his feet, his calloused hands and feet can shatter stone and stagger foes.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-monk-ironskin_monk--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/hobgoblin">Hobgoblin</Link></td></tr></tbody></table></ScrollContainer></div><div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-ironskin_monk-iron-skin-ex" data-hash-target><div className="box">Iron Skin (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">AC bonus, the ability to add his Wisdom bonus to his AC</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">An ironskin monk gains a bonus to his natural armor equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of his monk level. This bonus stacks with any existing natural armor the ironskin monk already has.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-ironskin_monk-bonus-feat" data-hash-target><div className="box">Bonus Feat</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box"><Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/mobility">Mobility</Link>, and <Link to="/feat/spring_attack">Spring Attack</Link> on the monk's bonus feat list</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">An ironskin monk adds <Link to="/feat/power_attack">Power Attack</Link> to his list of bonus feats.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">He adds <Link to="/feat/improved_sunder">Improved Sunder</Link> to the list.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">He adds <Link to="/feat/greater_sunder">Greater Sunder</Link> to the list.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-ironskin_monk-resilience-ex" data-hash-target><div className="box">Resilience (Ex)</div><div className="flavor">An ironskin monk can shake off the physical effects of certain attacks.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Evasion</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">If he makes a Fortitude saving throw against an attack that has a reduced effect on a successful save, he instead avoids the effect entirely.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">This ability can be used only if the monk is wearing light armor or no armor. A helpless monk does not gain the benefits of <em>resilience.</em></div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-ironskin_monk-ki-pool-su" data-hash-target><div className="box">Ki Pool (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">The ability to increase speed with ki</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">An ironskin monk can spend 1 point from his <em>ki pool</em> to gain a damage bonus equal to 1/2 his level against objects and constructs for 1 round.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-ironskin_monk-staggering-blow-ex" data-hash-target><div className="box">Staggering Blow (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">High jump</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Free Action</div></div><div className="abEnd"><div className="box">An ironskin monk attacking with an unarmed strike can spend 1 point from his <em>ki pool</em> after a successful critical hit to <Link to="/misc/stagger">stagger</Link> the creature struck for 1 round (Fort DC 10 + 1/2 the ironskin monk's level + the ironskin monk's Wisdom modifier negates).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-ironskin_monk-tough-as-nails-ex" data-hash-target><div className="box">Tough as Nails (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Fast movement, slow fall</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 6th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">An ironskin monk gains <Link to="/rule/dr">DR</Link> 1/-.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">The DR becomes 2/-.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">The DR increases to 3/-.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">The DR becomes 4/-.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">The DR increases to 5/-.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-ironskin_monk-evasion-ex" data-hash-target><div className="box">Evasion (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Improved evasion</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 9th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">An ironskin monk gains <Link to="/ability/evasion">evasion</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-ironskin_monk-surefooted-ex" data-hash-target><div className="box">Surefooted (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Tongue of the sun and moon</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 17th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">An ironskin monk's speed is not reduced by <Link to="/rule/difficult_terrain">difficult terrain</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-ironskin_monk-unbreakable-ex" data-hash-target><div className="box">Unbreakable (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Perfect self</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">An ironskin monk sets aside many of the frailties of mortal flesh. He becomes immune to death effects and stunning. He is not subject to <Link to="/rule/ability_damage">ability damage or ability drain</Link>, and has a 75% chance of ignoring the extra damage dealt by critical hits and sneak attacks.</div></div></div></div>
</>};
const _karmic_monk = {title: "Karmic Monk", jsx: <><h2 id="arc-monk-karmic_monk-karmic-monk">Karmic Monk</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 122</Link><br/>A karmic monk contemplates the myriad harmonies that guide existence. He learns to use the disharmony in others against them, and to alter his own inner harmonies to exploit weaknesses in his opponents' defenses.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/info"><IonIcon icon="/icons/info.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-karmic_monk-alignment" data-hash-target><div className="box">Alignment</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Alignment requirement</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">A karmic monk must be true neutral or of any lawful alignment.</div></div></div></div>
<Ability icon={["skills"]} id="arc-monk-karmic_monk-undefined">
<Pair id="arc-monk-karmic_monk-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/diplomacy">Diplomacy</Link> (CHA)</Pair>
<Pair title="Removed Skills">Intimidate</Pair></Ability>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-karmic_monk-karmic-strike-su" data-hash-target><div className="box">Karmic Strike (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Stunning fist</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A karmic monk gains bonuses against creatures that attack him first. If a creature the karmic monk has not attacked within the past 24 hours makes an attack roll against the karmic monk or casts an offensive spell that affects the karmic monk, the karmic monk receives a +2 bonus on attack rolls and damage rolls against that creature. If the karmic monk hits such a target, this bonus lasts until the end of the karmic monk's turn (or until the beginning of the karmic monk's next turn, if it isn't his turn). Otherwise, the bonus against a particular creature lasts for 1 minute after the creature's last attack against the karmic monk.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-karmic_monk-balanced-mind-su" data-hash-target><div className="box">Balanced Mind (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Still mind</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A karmic monk receives a +2 bonus on saving throws against effects with the chaos, evil, good, or law subtype. He also receives this bonus against the abilities and effects of creatures of the listed subtypes.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-karmic_monk-ki-pool-su" data-hash-target><div className="box">Ki Pool (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">7th- and 10th-level <em>ki pool</em> abilities</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 7th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">When a karmic monk makes unarmed strikes, they're treated as chaotic, evil, good, and lawful.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-karmic_monk-harmony-su" data-hash-target><div className="box">Harmony (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Improved evasion</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 9th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Immediate Action</div></div><div className="abEnd"><div className="box">A karmic monk can shift his alignment by one step for the purpose of all effects dependent on alignment until the beginning of his next turn. This does not actually alter the karmic monk's alignment.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-karmic_monk-karmic-disruption-su" data-hash-target><div className="box">Karmic Disruption (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">The <em>slow fall</em> improvement; it remains at 70 feet</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">A karmic monk can spend 1 point from his <em>ki pool</em> to add 1d6 points of damage to his unarmed strikes against creatures of either chaotic, evil, good, or lawful alignment for 1 round. This stacks with other abilities that deal damage based on alignment. He cannot alter his alignment choice until the next time he uses this ability. Creatures that are of the appropriate alignment and are struck by this attack must succeed at a Will save (DC = 10 + 1/2 the karmic monk's class level + the karmic monk's Wisdom modifier) or lose any damage reduction based on alignment for a number of rounds equal to the karmic monk's Wisdom modifier (minimum 1 round). A creature that succeeds at this save is immune to having its damage reduction disrupted by that karmic monk for 24 hours.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">This attack disrupts only alignment components of damage reduction, not any other components; for example, DR/cold iron and good becomes DR/cold iron.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-karmic_monk-slow-fall" data-hash-target><div className="box">Slow Fall</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Slow fall</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 18th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box"><em>Slow fall</em> now reduces your fall damage by 80 feet.<sup><InnerLink showBacklink="backlink-arc-monk-karmic_monk-fake-fn-1" id="arc-monk-karmic_monk-fake-fn-1" data-hash-target to="arc-monk-karmic_monk-fake-fn-1-target">1</InnerLink></sup></div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-karmic_monk-harmonic-self" data-hash-target><div className="box">Harmonic Self</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Perfect self</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A karmic monk is truly in tune with the harmonic balance of the universe. He gains the abilities of <em>perfect self,</em> except that instead of DR 10/chaotic, he gains DR 10 that is overcome only by attacks that do not count as chaotic, evil, good, or lawful.</div></div></div></div>
<section data-footnotes><h3 id="arc-monk-karmic_monk-label">Footnotes</h3><ol>
<li id="arc-monk-karmic_monk-fake-fn-1-target"><p>The original source book presents this as replacing the <em>slow fall</em> increase at 19th level, but the ability actually increases at 18th level. This would mean that the ability would increase to 90 feet at 18th level, then revert down to 80 feet at 19th level, which would be strange. There is no official errata confirming this, but the ability is presented above as if it was adjusted at 18th level. <InnerLink aria-label="Back to reference 1" id="backlink-arc-monk-karmic_monk-fake-fn-1" data-hash-target to="arc-monk-karmic_monk-fake-fn-1">↩</InnerLink></p></li>
</ol></section></>};
const _kata_master = {title: "Kata Master", jsx: <><h2 id="arc-monk-kata_master-kata-master">Kata Master</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 105</Link><br/>The kata master takes the visual aspect of his martial art to its logical extreme, harnessing her flowing movements and skilled maneuvers as a psychological weapon against her enemies. A kata master forsakes the mental discipline of her more contemplative brethren in favor of these flamboyant exhibitions. She often performs in staged fights and tournaments, utilizing stylized forms to amaze the audience and shock and dismay her opponents.</p>
<div className="ability p hasSubs"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-kata_master-panache" data-hash-target><div className="box">Panache</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Stunning fist</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A kata master gains the <Link to="/class/swashbuckler">swashbuckler's</Link> <em>panache</em> class ability. At the start of each day, a kata master gains a number of <em>panache</em> points equal to her Charisma bonus (minimum 1). Her <em>panache</em> goes up or down throughout the day, but usually cannot go higher than his Charisma bonus (minimum 1). A kata master gains the swashbuckler's <Link to="/swashdeed/derring_do">derring-do</Link> and <Link to="/swashdeed/dodging_panache">dodging panache</Link> deeds. A kata master can use an unarmed strike or monk special weapon in place of a light or one-handed piercing melee weapon for granted swashbuckler class features and deeds.</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-kata_master-panache-ex" data-hash-target><div className="box">Panache (Ex)</div><div className="flavor">Text from the swashbuckler class</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box"><p>You spend panache to accomplish deeds, and regain panache in the following ways.</p>
<p>Each time you confirm a critical hit with a light or one-handed piercing melee weapon, you regain 1 panache point. Confirming a critical hit on a <Link to="/misc/helpless">helpless</Link> or unaware creature or a creature that has fewer Hit Dice than <Link to="/misc/half">half</Link> your character level doesn't restore panache.</p>
<p>When you reduce a creature to 0 or fewer hit points with a light or one-handed piercing melee weapon attack while in combat, you regain 1 panache point. Destroying an unattended object, reducing a helpless or unaware creature to 0 or fewer hit points, or reducing a creature that has fewer Hit Dice than half your character level to 0 or fewer hit points doesn't restore any panache.</p>
</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-kata_master-menacing-swordplay-ex" data-hash-target><div className="box">Menacing Swordplay (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Still mind</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A kata master gains the swashbuckler's <Link to="/swashdeed/menacing_swordplay">menacing swordplay</Link> deed.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-kata_master-ki-pool-su" data-hash-target><div className="box">Ki Pool (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Ki pool</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A kata master can treat ki points as <em>panache</em> points for any swashbuckler deed gained through this archetype.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-kata_master-targeted-strike-ex" data-hash-target><div className="box">Targeted Strike (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Wholeness of body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 7th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A kata master gains the swashbuckler's <Link to="/swashdeed/targeted_strike">targeted strike</Link> deed.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-kata_master-dizzying-defense-ex" data-hash-target><div className="box">Dizzying Defense (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Quivering palm</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 15th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A kata master gains the <Link to="/swashdeed/dizzying_defense">dizzying defense</Link> swashbuckler deed.</div></div></div></div>
</>};
const _ki_mystic = {title: "Ki Mystic", jsx: <><h2 id="arc-monk-ki_mystic-ki-mystic">Ki Mystic</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 111</Link><br/>The ki mystic believes that violence is sometimes necessary, but knowing and understanding is the true root of perfection. Through meditation and spiritual visions, a ki mystic can see beyond the veil of reality to the underlying truth of all existence. A ki mystic has the following class features.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-ki_mystic-ki-mystic-su" data-hash-target><div className="box">Ki Mystic (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Still mind</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A ki mystic gains a pool of ki points equal to his Wisdom modifier. If the monk has at least 1 point of ki in his <em>ki pool,</em> he gains a +2 bonus on all Knowledge skill checks.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">The monk can spend 1 ki point immediately before making an ability or skill check to gain a +4 insight bonus on the check.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">The pool increases to 1/2 his monk level + his Wisdom modifier + 2.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/rolling-dices"><IonIcon icon="/icons/rolling-dices.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-ki_mystic-mystic-insight-su" data-hash-target><div className="box">Mystic Insight (Su)</div><div className="flavor">A ki mystic becomes apt at giving just the right word of advice in just the nick of time.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Purity of body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Immediate Action</div></div><div className="abEnd"><div className="box">The monk can spend 2 ki points to grant an ally within 30 feet the ability to reroll a single attack roll or saving throw. The ally must be able to hear the monk to gain the reroll benefit.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-ki_mystic-mystic-visions-su" data-hash-target><div className="box">Mystic Visions (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Diamond body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A ki mystic may receive mystic visions when he rests. These visions can come as a dream, an epiphany, or even as the voice of an old friend whispering in the monk's mind. The effect is similar to a <Link to="/spell/divination">divination</Link> spell with a caster level equal to the monk's level. The divination has no casting time; it is just part of the normal dreams or visions that occur every night. Using this ability costs 2 ki points that are removed from the next day's total.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-ki_mystic-mystic-prescience-su" data-hash-target><div className="box">Mystic Prescience (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Diamond soul</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">A ki mystic gains a +2 insight bonus to AC and CMD.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">The bonus increases to +4.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/abstract-091"><IonIcon icon="/icons/abstract-091.svg" color="secondary" /></Link><Link to="/icons/rolling-dices"><IonIcon icon="/icons/rolling-dices.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-ki_mystic-mystic-persistence-su" data-hash-target><div className="box">Mystic Persistence (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Empty body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 19th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">A ki mystic can create an aura once per day at the cost of at least 2 points of ki. The aura emanates out to a 20-foot radius. The monk and all allies within the aura can roll two dice when making an attack roll or a saving throw and take the better result. The aura lasts for 1 round, plus an additional round for every 2 ki points spent when the monk created the aura.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The monk can dismiss the aura at any time as a <strong className="hl">free action</strong>, but the ki points for the full duration of the aura are lost.</div></div></div></div>
</>};
const _lifting_hand = {title: "Lifting Hand", jsx: <><h2 id="arc-monk-lifting_hand-lifting-hand">Lifting Hand</h2>
<p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 23</Link><br/>Those studied in the art of grappling know that using their opponents' own weight and momentum to lift, disable, or throw them is impressive and effective. When facing a master of the lifting hand, an enemy is likely to find itself sailing through the air or locked in a tortuous compliance hold.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-lifting_hand-savage-toss-ex" data-hash-target><div className="box">Savage Toss (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Stunning fist</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">A lifting hand gains <Link to="/feat/savage_slam">Savage Slam</Link> as a bonus feat, even if she doesn't meet the prerequisites.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">When the lifting hand succeeds at her grapple combat maneuver check while using the Savage Slam feat and her grapple combat maneuver check result exceeds the opponent's CMD by at least 5, she can throw the opponent into an non-adjacent square. The lifting hand can throw the opponent 10 feet, plus an additional 5 feet for every 5 by which her grapple check exceeds the opponent's CMD. For instance, if the lifting monk exceeds the target's CMD by 15, she can throw the target into a square 20 feet away.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">When using Savage Slam, the lifting hand's target no longer receives a bonus to its CMD when the lifting hand attempts to throw it into a dangerous area.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-lifting_hand-bonus-feats-ex" data-hash-target><div className="box">Bonus Feats (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Bonus feats</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">A lifting hand adds <Link to="/feat/whirling_hold">Whirling Hold</Link> to her list of bonus feats.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">She adds <Link to="/feat/dramatic_slam">Dramatic Slam</Link> and <Link to="/feat/overhead_flip">Overhead Flip</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">She adds <Link to="/feat/savage_leap">Savage Leap</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-lifting_hand-joint-lock-ex" data-hash-target><div className="box">Joint Lock (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Bonus feat gained at 10th level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 10th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When a lifting hand succeeds at a combat maneuver check to maintain a grapple, instead of choosing to damage, move, pin, or tie up the opponent, she can instead force one of the target's limbs into an agonizing position. The target becomes <Link to="/misc/sickened">sickened</Link> as long as the lifting hand maintains the grapple. When the grapple is released or broken, the target is <Link to="/misc/fatigued">fatigued</Link> for a number of rounds equal to the lifting hand's level. This is a pain effect.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-lifting_hand-counter-throw-sp" data-hash-target><div className="box">Counter-Throw (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Abundant step</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A lifting hand can <Link to="/rule/ready_an_action">ready an action</Link> to trigger if a creature tries to attack her. When the readied action triggers, the lifting hand can attempt a grapple combat maneuver check with a +2 bonus. If she succeeds, she grapples the creature and negates the triggering attack, and she can spend an <strong className="hl">immediate action</strong> to use the Savage Slam feat.</div></div></div></div>
</>};
const _lifting_hand_uc = {title: "Lifting Hand (Unchained)", topLink: ["Unchained Monk","class/unchained_monk"], jsx: <><h2 id="arc-monk-lifting_hand_uc-lifting-hand">Lifting Hand</h2>
<p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 23</Link><br/>Those studied in the art of grappling know that using their opponents' own weight and momentum to lift, disable, or throw them is impressive and effective. When facing a master of the lifting hand, an enemy is likely to find itself sailing through the air or locked in a tortuous compliance hold.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-lifting_hand_uc-savage-toss-ex" data-hash-target><div className="box">Savage Toss (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Stunning fist</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">A lifting hand gains <Link to="/feat/savage_slam">Savage Slam</Link> as a bonus feat, even if she doesn't meet the prerequisites.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">When the lifting hand succeeds at her grapple combat maneuver check while using the Savage Slam feat and her grapple combat maneuver check result exceeds the opponent's CMD by at least 5, she can throw the opponent into an non-adjacent square. The lifting hand can throw the opponent 10 feet, plus an additional 5 feet for every 5 by which her grapple check exceeds the opponent's CMD. For instance, if the lifting monk exceeds the target's CMD by 15, she can throw the target into a square 20 feet away.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">When using Savage Slam, the lifting hand's target no longer receives a bonus to its CMD when the lifting hand attempts to throw it into a dangerous area.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-lifting_hand_uc-bonus-feats-ex" data-hash-target><div className="box">Bonus Feats (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Bonus feats</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">A lifting hand adds <Link to="/feat/whirling_hold">Whirling Hold</Link> to her list of bonus feats.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">She adds <Link to="/feat/dramatic_slam">Dramatic Slam</Link> and <Link to="/feat/overhead_flip">Overhead Flip</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">She adds <Link to="/feat/savage_leap">Savage Leap</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-lifting_hand_uc-joint-lock-ex" data-hash-target><div className="box">Joint Lock (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Bonus feat gained at 10th level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 10th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When a lifting hand succeeds at a combat maneuver check to maintain a grapple, instead of choosing to damage, move, pin, or tie up the opponent, she can instead force one of the target's limbs into an agonizing position. The target becomes <Link to="/misc/sickened">sickened</Link> as long as the lifting hand maintains the grapple. When the grapple is released or broken, the target is <Link to="/misc/fatigued">fatigued</Link> for a number of rounds equal to the lifting hand's level. This is a pain effect.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-lifting_hand_uc-counter-throw-sp" data-hash-target><div className="box">Counter-Throw (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">12th-level ki power</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A lifting hand can <Link to="/rule/ready_an_action">ready an action</Link> to trigger if a creature tries to attack her. When the readied action triggers, the lifting hand can attempt a grapple combat maneuver check with a +2 bonus. If she succeeds, she grapples the creature and negates the triggering attack, and she can spend an <strong className="hl">immediate action</strong> to use the Savage Slam feat.</div></div></div></div>
</>};
const _maneuver_master = {title: "Maneuver Master", jsx: <><h2 id="arc-monk-maneuver_master-maneuver-master">Maneuver Master</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 58</Link><br/>The maneuver master specializes in more complicated moves than simple damage-dealing strikes.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-maneuver_master-bonus-feat" data-hash-target><div className="box">Bonus Feat</div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">In addition to normal monk bonus feats, a maneuver master may select any Improved combat maneuver feat (such as <Link to="/feat/improved_overrun">Improved Overrun</Link>) as a bonus feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">He may select any Greater combat maneuver feat (such as <Link to="/feat/greater_grapple">Greater Grapple</Link>) as a bonus feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">He may select any maneuver Strike feat (such as <Link to="/feat/tripping_strike">Tripping Strike</Link>) as a bonus feat.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-maneuver_master-flurry-of-maneuvers-ex" data-hash-target><div className="box">Flurry of Maneuvers (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Flurry of blows</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">As part of a full-attack action, a maneuver master can make one additional combat maneuver, regardless of whether the maneuver normally replaces a melee attack or requires a standard action. The maneuver master uses his monk level in place of his base attack bonus to determine his CMB for the bonus maneuvers, though all combat maneuver checks suffer a -2 penalty when using a flurry.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">A maneuver master may attempt a second additional combat maneuver, with an additional -3 penalty on combat maneuver checks.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">A maneuver master may attempt a third additional combat maneuver, with an additional -7 penalty on combat maneuver checks.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">A maneuver master loses this ability when wearing armor, using a shield, or carrying a medium or heavy load.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-maneuver_master-maneuver-defense-ex" data-hash-target><div className="box">Maneuver Defense (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Still mind</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">If a maneuver master has an Improved combat maneuver feat, any creature attempting that maneuver against the maneuver master provokes an attack of opportunity, even if it would not normally do so.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/rolling-dices"><IonIcon icon="/icons/rolling-dices.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-maneuver_master-reliable-maneuver-ex" data-hash-target><div className="box">Reliable Maneuver (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Slow fall</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">A maneuver master may spend 1 point from his <em>ki pool</em> before attempting a combat maneuver. He can roll his combat maneuver check for that maneuver twice and use the better result.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-maneuver_master-meditative-maneuver-ex" data-hash-target><div className="box">Meditative Maneuver (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Purity of body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">A maneuver master can add his Wisdom modifier on any combat maneuver check he makes before the beginning of his next turn. He must choose which combat maneuver check to grant the bonus to before making the combat maneuver check.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-maneuver_master-sweeping-maneuver-ex" data-hash-target><div className="box">Sweeping Maneuver (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Diamond body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A maneuver master can make two combat maneuvers as a <strong className="hl">standard action</strong>, as long as neither maneuver requires the maneuver master to move. He may perform two identical maneuvers against two adjacent enemies, or he may perform two different combat maneuvers against the same target.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-maneuver_master-whirlwind-maneuver-ex" data-hash-target><div className="box">Whirlwind Maneuver (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Quivering palm</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 15th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Full-Round Action</div></div><div className="abEnd"><div className="box">Once per day, a maneuver master can attempt a single combat maneuver against every opponent he threatens, as long as the combat maneuver does not require movement. He makes a single combat maneuver check, and it applies to all targets.</div></div></div></div>
</>};
const _martial_artist = {title: "Martial Artist", jsx: <><h2 id="arc-monk-martial_artist-martial-artist">Martial Artist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 59</Link><br/>The martial artist pursues a mastery of pure martial arts without the monastic traditions. He is a master of form, but lacks the ability to harness his ki.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/info"><IonIcon icon="/icons/info.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-martial_artist-alignment" data-hash-target><div className="box">Alignment</div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">A martial artist may be of any alignment.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-martial_artist-pain-points-ex" data-hash-target><div className="box">Pain Points (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Still mind</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A martial artist's advanced knowledge of humanoid anatomy grants a +1 bonus on critical hit confirmation rolls and increases the DC of his <em>stunning fist</em> and <em>quivering palm</em> by 1.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-martial_artist-martial-arts-master-ex" data-hash-target><div className="box">Martial Arts Master (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Slow fall</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A martial artist may use his monk level to qualify for feats with a fighter level prerequisite when those feats are applied to unarmed strikes or weapons with the monk special quality.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-martial_artist-exploit-weakness-ex" data-hash-target><div className="box">Exploit Weakness (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Ki pool</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">A martial artist can observe a creature or object to find its weak point by making a Wisdom check and adding his monk level against a DC of 10 + the object's hardness or the target's CR. If the check succeeds, the martial artist gains a +2 bonus on attack rolls until the end of his turn, and any attacks he makes until the end of his turn ignore the creature or object's DR or hardness.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A martial artist may instead use this ability as a <strong className="hl">swift action</strong> to analyze the movements and expressions of one creature within 30 feet, granting a bonus on Sense Motive checks and Reflex saves and a dodge bonus to AC against that opponent equal to 1/2 his monk level until the start of his next turn.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-martial_artist-extreme-endurance-ex" data-hash-target><div className="box">Extreme Endurance (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Purity of body, diamond body, perfect self</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">A martial artist gains immunity to <Link to="/misc/fatigue">fatigue</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">He also gains immunity to <Link to="/misc/exhaustion">exhaustion</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">He gains immunity to stunning.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">He gains immunity to death effects and <Link to="/rule/energy_drain">energy drain</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-martial_artist-physical-resistance-ex" data-hash-target><div className="box">Physical Resistance (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Wholeness of body, timeless body, tongue of sun and moon</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 7th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">If a martial artist suffers any effect that causes <Link to="/rule/ability_damage">ability damage</Link>, ability drain, or temporary ability score penalties, the effect is reduced by 1 point.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">This reduction becomes 2 points.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">This reduction increases to 3 points.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">This reduction becomes 4 points.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">This reduction increases to 5 points.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-martial_artist-bonus-feats" data-hash-target><div className="box">Bonus Feats</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Abundant step</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A martial artist gains an additional bonus feat, selected from those available in the monk class feature.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-martial_artist-defensive-roll-ex" data-hash-target><div className="box">Defensive Roll (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Diamond soul</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 13th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A martial artist may use the defensive roll <Link to="/ability/advanced_rogue_talent">advanced rogue talent</Link> once per day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">He may use it 2 times per day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">He may use it 3 times per day.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-martial_artist-quivering-palm" data-hash-target><div className="box">Quivering Palm</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Quivering palm</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">A martial artist may use this ability one additional time per day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">He can now use this 2 additional times per day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">He can now use this 3 additional times per day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">He can now use this 4 additional times per day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">He can now use this 5 additional times per day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">A martial artis may not have more than one <em>quivering palm</em> in effect at a time.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-martial_artist-greater-defensive-roll-ex" data-hash-target><div className="box">Greater Defensive Roll (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Empty body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 19th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A martial artist suffers no damage on a successful defensive roll, and only half damage if the Reflex saving throw fails.</div></div></div></div>
</>};
const _master_of_many_styles = {title: "Master of Many Styles", jsx: <><h2 id="arc-monk-master_of_many_styles-master-of-many-styles">Master of Many Styles</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 59</Link><br/>The master of many styles is a collector. For every move, he seeks a counter. For every style, he has a riposte. Ultimately, he seeks perfection through the fusion of styles.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-master_of_many_styles-bonus-feat" data-hash-target><div className="box">Bonus Feat</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Standard bonus feats</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">A master of many styles may select a bonus <Link to="/main/style_feat">style feat</Link> or the <Link to="/feat/elemental_fist">Elemental Fist</Link> feat. He does not need to meet the prerequisites of that feat, except the Elemental Fist feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 2nd Level</div></div><div className="abEnd"><div className="box">He may select another such feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">A master of many styles can choose to instead another such feat, or gain a <em>wildcard style slot.</em> Whenever he enters one or more styles, he can spend his <em>wildcard style slots</em> to gain feats in those styles' feat paths (such as <Link to="/feat/earth_child_topple">Earth Child Topple</Link>) as long as he meets the prerequisites. Each time he changes styles, he can also change these <em>wildcard style slots.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">He gains another feat or <em>slot,</em> as above.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 14th Level</div></div><div className="abEnd"><div className="box">He gains another feat or <em>slot,</em> as above.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">He gains another feat or <em>slot,</em> as above.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-master_of_many_styles-fuse-style-ex" data-hash-target><div className="box">Fuse Style (Ex)</div><div className="flavor">A master of many styles can fuse two of the styles he knows into a more perfect style.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Flurry of blows</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">The master of many styles can have two style feat stances active at once. Starting a stance provided by a style feat is still a <strong className="hl">swift action</strong>, but when the master of many styles switches to another style feat, he can choose one style whose stance is already active to persist. He may only have two style feat stances active at a time.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">The master of many styles can fuse three styles at once, having the stances of three style feats active at the same time. He gains a bonus on attack rolls equal to the number of styles whose stances he currently has active. Furthermore, he can enter up to three stances as a <strong className="hl">swift action</strong>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">The master of many styles can fuse four styles at once, having the stances of four style feats active at the same time. Furthermore, he can enter up to four stances as a <strong className="hl">free action</strong> by spending 1 point from his <em>ki pool.</em></div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-master_of_many_styles-perfect-style-ex" data-hash-target><div className="box">Perfect Style (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Perfect self</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A master of many styles can have the stances of five style feats active at once, and can change those stances as a <strong className="hl">free action</strong>.</div></div></div></div>
</>};
const _menhir_guardian = {title: "Menhir Guardian", jsx: <><h2 id="arc-monk-menhir_guardian-menhir-guardian">Menhir Guardian</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 64</Link><br/>Menhir guardians are ascetic protectors of sacred druidic sites, less concerned with structure and maintaining internal order than they are with preserving the natural balance of the world.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/info"><IonIcon icon="/icons/info.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-menhir_guardian-alignment" data-hash-target><div className="box">Alignment</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Alignment requirement</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">A menhir guardian can be lawful neutral, neutral good, neutral evil, or neutral. While they can work with chaotic allies, they cannot themselves be chaotic.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-menhir_guardian-weapon-and-armor-proficiency" data-hash-target><div className="box">Weapon and Armor Proficiency</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Weapon and armor proficiency</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A menhir guardian is proficient with the <Link to="/eq-weapon/club">club</Link>, <Link to="/eq-weapon/dagger">dagger</Link>, <Link to="/eq-weapon/dart">dart</Link>, <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>, <Link to="/eq-weapon/sickle">sickle</Link>, <Link to="/eq-weapon/shortspear">shortspear</Link>, <Link to="/eq-weapon/sling">sling</Link>, and <Link to="/eq-weapon/spear">spear</Link>. A menhir guardian can use these weapons in conjunction with his <em>wild flurry</em> ability.</div></div></div></div>
<div className="ability p hasSubs"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-menhir_guardian-claws-ex" data-hash-target><div className="box">Claws (Ex)</div><div className="flavor">A menhir guardian learns to draw upon natural forces to subtly change his body.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Unarmed strike, ki strike</div></div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Ki pool</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">He gains the <Link to="/class/shifter">shifter's</Link> <em>shifter claws</em> class feature and treats his monk level as his shifter level for the purposes of this ability.</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-menhir_guardian-shifter-claws-su" data-hash-target><div className="box">Shifter Claws (Su)</div><div className="flavor">Text from the shifter class</div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">In your natural form, you can extend your claws to use as a weapon.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">The claws on each hand can be used as a primary <Link to="/umr/natural_attack">natural attack</Link>, dealing 1d4 points of piercing and slashing damage (1d3 if you are Small). If you use one of your claw attacks in concert with a weapon held in the other hand, the claw acts as a secondary natural attack instead.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 3rd Level</div></div><div className="abEnd"><div className="box">Your claws ignore DR/cold iron, DR/magic, and DR/silver.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">Your claw damage becomes 1d6 (1d4 if Small).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">Your claw damage becomes 1d8 (1d6 if Small).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">Your claws' critical multiplier becomes &times;3.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">Your claws ignore DR/adamantine and DR/-.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-menhir_guardian-wild-flurry-ex" data-hash-target><div className="box">Wild Flurry (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Furry of blows</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A menhir guardian gains <em>flurry of blows.</em> He can use this ability with the natural attacks provided by his <em>shifter claws</em> ability or the weapons specified above under weapon and armor proficiency.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-menhir_guardian-rebuking-strike-ex" data-hash-target><div className="box">Rebuking Strike (Ex)</div><div className="flavor">A menhir guardian can channel his ki into a devastating strike that repels his enemies.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Stunning fist, high jump, quivering palm</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">The menhir guardian can attempt a <em>rebuking strike</em> a number of times per day equal to his monk level, but only once per round.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A menhir guardian must declare that he is using <em>rebuking strike</em> before making a natural attack with his claws. On a hit, a foe damaged by the menhir guardian's claws must succeed at a Fortitude saving throw (DC = 10 + half the menhir guardian's level + his Wisdom modifier) or be pushed back 5 feet directly away from the menhir guardian.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">The distance the foe is pushed becomes 10 feet. A creature pushed also has its speed reduced by half for a number of rounds equal to the menhir guardian's level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">The distance the foe is pushed increases to 15 feet.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">The distance the foe is pushed becomes 20 feet.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">A pushed creature is also affected by <Link to="/spell/aversion">aversion</Link>, making it avoid the menhir guardian's current location for 1 round per level the menhir guardian has.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">The distance the foe is pushed increases to 25 feet.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If this movement would be blocked by a solid object, the target of <em>rebuking strike</em> takes 1d6 points of damage per 10 feet moved and falls <Link to="/rule/prone">prone</Link> at the end of the movement.</div></div></div></div>
</>};
const _monk_of_the_empty_hand = {title: "Monk of the Empty Hand", jsx: <><h2 id="arc-monk-monk_of_the_empty_hand-monk-of-the-empty-hand">Monk of the Empty Hand</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 111</Link><br/>The monk of the empty hand eschews normal weapons in favor of whatever is lying around - rocks, chair legs, flagons of ale, even a simple quill pen all become deadly weapons in the hands of such a monk. A monk of the empty hand draws on his own ki to infuse his improvised weapons with power, and can transform a broken bottle into a magical weapon.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_empty_hand-weapon-and-armor-proficiency" data-hash-target><div className="box">Weapon and Armor Proficiency</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Weapon proficiencies</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Monks of the empty hand are proficient with the <Link to="/eq-weapon/shuriken">shuriken</Link> only. A monk of the empty hand treats normal weapons as <Link to="/misc/improvised_weapons">improvised weapons</Link> with the following equivalencies (substituting all of their statistics for the listed weapon): a light weapon functions as a <Link to="/eq-weapon/light_hammer">light hammer</Link>, a one-handed weapon functions as a <Link to="/eq-weapon/club">club</Link>, and a two-handed weapon functions as a <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_empty_hand-flurry-of-blows-ex" data-hash-target><div className="box">Flurry of Blows (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Flurry of blows</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A monk of the empty hand can make a <em>flurry of blows</em> using any combination of unarmed strikes or attacks with an improvised weapon. He may not make a <em>flurry of blows</em> with any other weapons, including special monk weapons. A monk of the empty hand's <em>flurry of blows</em> otherwise functions as normal for a monk of his level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_empty_hand-bonus-feat" data-hash-target><div className="box">Bonus Feat</div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">A monk of the empty hand adds the following feats to his list of bonus feats: <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link>, <Link to="/feat/improved_steal">Improved Steal</Link>, and <Link to="/feat/improvised_weapon_mastery">Improvised Weapon Mastery</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_empty_hand-versatile-improvisation-ex" data-hash-target><div className="box">Versatile Improvisation (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Still mind</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">A monk of the empty hand may use an improvised weapon to deal damage as if it were another type (bludgeoning, piercing, or slashing) for 1 round, regardless of the weapon's normal damage type.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/bowman"><IonIcon icon="/icons/bowman.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_empty_hand-ki-pool-su" data-hash-target><div className="box">Ki Pool (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">In addition to the normal abilities of his <em>ki pool,</em> a monk of the empty hand may spend 1 point from his <em>ki pool</em> to increase the range increment for an improvised thrown weapon or shuriken by 20 feet for 1 round.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_empty_hand-ki-weapons-su" data-hash-target><div className="box">Ki Weapons (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Purity of body, diamond body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">A monk of the empty hand may spend 1 point from his <em>ki pool</em> to deal damage equal to his unarmed strike damage with an improvised weapon for 1 round.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">The monk may spend ki to grant an enhancement bonus or magical weapon abilities to an improvised weapon for 1 round, at the rate of 1 point of ki per +1 bonus or its equivalent. The monk may not spend more than 3 points of ki at one time for this purpose. For example, a monk can spend 2 points of ki to give his improvised weapon a +1 enhancement bonus and the <Link to="/magic-enh/ki_focus">ki focus</Link> quality, or just the <Link to="/magic-enh/flaming_burst">flaming burst</Link> quality.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">The limit increases to 5 ki per round. The monk may use this ability to add magical weapon qualities to improvised weapons that could not normally have such a quality, such as adding the <Link to="/magic-enh/disruption">disruption</Link> quality to a slashing weapon, or the <Link to="/magic-enh/vorpal">vorpal</Link> quality to a bludgeoning weapon.</div></div></div></div>
</>};
const _monk_of_the_four_winds = {title: "Monk of the Four Winds", jsx: <><h2 id="arc-monk-monk_of_the_four_winds-monk-of-the-four-winds">Monk of the Four Winds</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 112</Link><br/>The monk of the four winds is connected to the natural world in a way few other creatures - even other monks - can hope to match. He can call upon the elements and the spirits of the world in times of need, and as he nears his goal of perfection, he gains the ability to slow down time and even defeat death itself. A monk of the four winds has the following class features.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_four_winds-elemental-fist-su" data-hash-target><div className="box">Elemental Fist (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Stunning Fist</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">A monk of the four winds gains <Link to="/feat/elemental_fist">Elemental Fist</Link> as a bonus feat, even if he does not meet the prerequisites.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">The monk increases the damage of his Elemental Fist by 1d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">The damage is now increased by 2d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">The damage is now increased by 3d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">The damage is now increased by 4d6.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_four_winds-slow-time-su" data-hash-target><div className="box">Slow Time (Su)</div><div className="flavor">A monk of the four winds can use his ki to slow time or quicken his movements, depending on the observer.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Abundant step</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">The monk can expend 6 ki points to gain three standard actions during his turn instead of just one. The monk can use these actions to do the following: take a melee attack action, use a skill, use an extraordinary ability, or take a move action. The monk cannot use these actions to cast spells or use spell-like abilities, and cannot combine them to take full-attack actions. Any move actions the monk makes this turn do not provoke attacks of opportunity.</div></div></div></div>
<div className="ability p hasSubs"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/hazard-sign"><IonIcon icon="/icons/hazard-sign.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_four_winds-aspect-master-su" data-hash-target><div className="box">Aspect Master (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Timeless body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 17th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A monk of the four winds must choose an aspect of one of the great spirits of the world. Once made, this choice cannot be changed. This spirit grants the monk a new appearance and new abilities, as well as changing or augmenting the monk's personality in some way. Once this choice is made, it cannot be changed.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The monk must abide by the alignment restrictions of the aspect. If the monk ever changes his alignment to something outside the aspect's alignment restrictions, he loses this ability and cannot regain it unless his alignment later changes again to match that of the aspect.</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_four_winds-aspect-of-the-carp" data-hash-target><div className="box">Aspect of the Carp</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">The monk's skin becomes a coat of golden, iridescent fish scales, his neck grows gills, and his fingers become webbed. He can breathe water and gains a swim speed equal to his land speed.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The carp is heroic and adventurous - a monk must be nonevil to take on the aspect of the carp.</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_four_winds-aspect-of-the-ki-rin" data-hash-target><div className="box">Aspect of the Ki-Rin</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">The monk's skin takes on a golden luminescence, and a silvery mane that cannot be bound grows atop his head. He gains a fly speed equal to his land speed, but he must end each turn on the ground. If the monk does not land by the end of his turn, he falls from whatever height he has attained.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The ki-rin is honorable, honest, and self-sacrificing - a monk must be lawful good to take on the aspect of the ki-rin.</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_four_winds-aspect-of-the-monkey" data-hash-target><div className="box">Aspect of the Monkey</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">The monk's face becomes that of a monkey, and he grows a prehensile tail. The monk can pick up objects and make unarmed attacks with his tail (though the tail does not grant additional unarmed attacks or natural attacks). In addition, the monk gains a climb speed equal to his land speed.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The monkey is a creature of whimsy and a lover of pranks - a monk of any alignment can take on the aspect of the monkey.</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_four_winds-aspect-of-the-oni" data-hash-target><div className="box">Aspect of the Oni</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">The monk's skin becomes pitch black, and his hair turns white, black, red, or violet. He can assume <Link to="/spell/gaseous_form">gaseous form</Link> (as the spell) as a standard action for 1 minute per day per monk level. This duration does not need to be consecutive, but it must be spent in 1-minute increments.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The oni is treacherous and deceitful, and it hungers for the pain and death of living creatures - a monk must be evil to take on the aspect of the oni.</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_four_winds-aspect-of-the-owl" data-hash-target><div className="box">Aspect of the Owl</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">The monk grows feathers, and his head becomes avian, with wide, unblinking eyes. He gains a fly speed of 30 feet.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The owl is a sage creature, deeply serious, and driven toward a single goal - a monk of any alignment can take on the aspect of the owl.</div></div></div></div>
<div className="ability p subAbility"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_four_winds-aspect-of-the-tiger" data-hash-target><div className="box">Aspect of the Tiger</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Dark stripes appear on the monk's skin, and his face becomes more feline. His eyes become cat-like, with vertical pupils, and his canines enlarge. Once per hour, the monk can move at 10 times his normal land speed when he makes a charge and is treated as if he had the <Link to="/umr/pounce">pounce</Link> ability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The tiger is swift, fierce, and deadly - a monk of any alignment can take on the aspect of the tiger.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_four_winds-immortality-su" data-hash-target><div className="box">Immortality (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Perfect self</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A monk of the four winds no longer ages. He remains in his current age category forever. Even if the monk comes to a violent end, he spontaneously <Link to="/spell/reincarnate">reincarnates</Link> (as the spell) 24 hours later in a place of his choosing within 20 miles of the place he died. The monk must have visited the place in which he returns back to life at least once.</div></div></div></div>
</>};
const _monk_of_the_healing_hand = {title: "Monk of the Healing Hand", jsx: <><h2 id="arc-monk-monk_of_the_healing_hand-monk-of-the-healing-hand">Monk of the Healing Hand</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 113</Link><br/>Monks of the healing hand seek perfection through helping others. By focusing their meditations on the flow of life within themselves and all creation they gain an understanding of how to share their ki with others, healing wounds and even bringing the dead back to life. For such a monk, sacrificing himself to save another is the surest way to achieve transcendence. A monk of the healing hand has the following class features.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/heart-plus"><IonIcon icon="/icons/heart-plus.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_healing_hand-ancient-healing-hand-su" data-hash-target><div className="box">Ancient Healing Hand (Su)</div><div className="flavor">A monk of the healing hand can heal another creature's wounds with a touch.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Wholeness of body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 7th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Full-Round Action</div></div><div className="abEnd"><div className="box">The monk can spend 2 ki points to heal a number of hit points equal to the monk's level. He needs at least one hand free to use this ability, and cannot heal himself. If the action is interrupted, the subject heals no hit points, and the ki points are lost.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_healing_hand-ki-sacrifice-su" data-hash-target><div className="box">Ki Sacrifice (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Diamond body, quivering palm</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A monk of the healing hand can use his entire <em>ki pool</em> to bring a person back to life. It takes 1 hour to perform this ritual. At the end of the ritual, the monk sacrifices all of his ki in order to cast <Link to="/spell/raise_dead">raise dead</Link> (as the spell) with a caster level equal to his monk level. The ritual uses all of the ki in the monk's <em>ki pool;</em> the monk must have at least 6 points of ki in his <em>ki pool</em> to use this ability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">The monk may sacrifice his ki to cast <Link to="/spell/resurrection">resurrection</Link>. The monk must have at least 8 points of ki in his <em>ki pool</em> to use this ability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">These rituals do not require material components. When this ability is used, the monk's <em>ki pool</em> is not replenished until 24 hours have passed.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/abstract-091"><IonIcon icon="/icons/abstract-091.svg" color="secondary" /></Link><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_healing_hand-true-sacrifice-su" data-hash-target><div className="box">True Sacrifice (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Perfect self</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">In a final selfless act, a monk of the healing hand can draw in his entire ki, which then explodes outward in a 50-foot-radius <Link to="/misc/emanation">emanation</Link>. All dead allies within the emanation are brought back to life, as if they were the subject of a <Link to="/spell/true_resurrection">true resurrection</Link> spell with a caster level equal to the monk's level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">When the monk does this, he is truly and utterly destroyed. A monk destroyed in this way can never come back to life, not even by way of a <Link to="/spell/wish">wish</Link> or <Link to="/spell/miracle">miracle</Link> spell or by the power of a deity. Furthermore, the monk's name can never be spoken or written down again. All written mentions of his name become nothing more than a blank space.</div></div></div></div>
</>};
const _monk_of_the_lotus = {title: "Monk of the Lotus", jsx: <><h2 id="arc-monk-monk_of_the_lotus-monk-of-the-lotus">Monk of the Lotus</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 114</Link><br/>Monks are warriors who hone their bodies into deadly weapons, but some monks eschew violence in favor of a more peaceful philosophy. While a monk of the lotus realizes that combat cannot always be avoided - and is more than capable in a fight - he understands that all creatures are connected, and to harm another is to harm the self. Instead, he strives to find peaceful resolutions to conflicts, and in doing so, hopes to achieve inner peace. A monk of the lotus has the following class features.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_lotus-touch-of-serenity-su" data-hash-target><div className="box">Touch of Serenity (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Stunning Fist</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A monk of the lotus gains <Link to="/feat/touch_of_serenity">Touch of Serenity</Link> as a bonus feat, even if he does not meet the prerequisites. The duration of Touch of Serenity is increased by <Link to="/misc/one_sixth">one-sixth</Link> of his monk level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Each round on its turn, the target may attempt a new Will save to end the effect. This duration does not stack; only the longest remaining duration applies.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_lotus-touch-of-surrender-su" data-hash-target><div className="box">Touch of Surrender (Su)</div><div className="flavor">A monk of the lotus makes a foe into a friend with a single show of mercy.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Abundant step</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Immediate Action</div></div><div className="abEnd"><div className="box">When one of his melee attacks would reduce a creature to 0 or fewer hit points, the monk can spend 6 ki points to make the target of that attack surrender. When the target surrenders, it is reduced to 0 hit points, becomes <Link to="/misc/disabled">disabled</Link>, and is charmed, as if the monk had cast <Link to="/spell/charm_monster">charm monster</Link> with a caster level equal to the monk's level. The target does not get a saving throw against this effect.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">This charm lasts until its duration expires, until the monk dismisses it or uses it on another creature, or until the target is again reduced to 0 or fewer hit points, whichever happens first. The monk can only have one creature charmed with <em>touch of surrender</em> at a time. This is a mind-affecting charm effect.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_lotus-touch-of-peace-su" data-hash-target><div className="box">Touch of Peace (Su)</div><div className="flavor">A monk of the lotus can set up vibrations within the body of another creature to win over the creature's mind.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Quivering palm</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 15th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">The monk can use <em>touch of peace</em> once per day, and must announce his intent before making his attack roll. On a successful hit, the attack deals no damage, but the target is charmed as if the monk had cast <em>charm monster</em> with a caster level equal to the monk's level. The target does not get a saving throw against this effect. The creature is charmed for 1 day per level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If the monk or his allies attack the charmed creature, or if the monk asks or commands the charmed creature to take hostile actions, the effect ends. This is a mind-affecting charm effect.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_lotus-learned-master-ex" data-hash-target><div className="box">Learned Master (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Tongue of the sun and the moon</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 17th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A monk of the lotus gains all <Link to="/skill/knowledge">Knowledge</Link> skills and the <Link to="/skill/linguistics">Linguistics</Link> skill as class skills. The monk uses Wisdom instead of Intelligence as the key ability for these skills.</div></div></div></div>
</>};
const _monk_of_the_mantis = {title: "Monk of the Mantis", jsx: <><h2 id="arc-monk-monk_of_the_mantis-monk-of-the-mantis">Monk of the Mantis</h2>
<p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox pg. 11</Link><br/>A body contains many points where the flesh, mind, and spirit coincide. A monk of the mantis is skilled at manipulating these points. With precise strikes, she temporarily disrupts a body's connection with the rest of the self.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_mantis-pressuring-strikes-ex" data-hash-target><div className="box">Pressuring Strikes (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">2nd-, 6th-, 10th-, 14th-, and 18th-level bonus feats</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A monk of the mantis gains the <Link to="/ability/sneak_attack">sneak attack</Link> ability. This ability functions as the <Link to="/class/rogue">rogue</Link> ability of the same name, except it can be used only during a <em>flurry of blows.</em> The initial sneak attack damage is +1d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">The damage becomes +2d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">The damage increases to +3d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 14th Level</div></div><div className="abEnd"><div className="box">The damage becomes +4d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">The damage increases to +5d6.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_mantis-debilitating-blows-ex" data-hash-target><div className="box">Debilitating Blows (Ex)</div><div className="flavor">A monk of the mantis's knowledge of anatomy allows her to deal blows that both deal damage and impose debilitating conditions.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Wholeness of body, diamond body, diamond soul</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">If a monk of the mantis stuns a target with <Link to="/feat/stunning_fist">Stunning Fist</Link>, the target is also <Link to="/rule/entangled">entangled</Link> for 1 round after the Stunning Fist effect ends.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">If the monk of the mantis stuns a target with Stunning Fist, the target is also <Link to="/misc/exhausted">exhausted</Link> for 1 round after the Stunning Fist effect ends.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">The monk can spend 1 point from her <em>ki pool</em> as part of her Stunning Fist attack to increase the duration of these additional effects to a number of rounds equal to her Wisdom bonus (minimum 2 rounds).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_mantis-disabling-palm-su" data-hash-target><div className="box">Disabling Palm (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Quivering palm</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 15th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A monk of the mantis can render the target of her <em>quivering palm</em> unconscious instead of killing the creature. Upon failing its Fortitude saving throw, the target either is knocked <Link to="/misc/unconscious">unconscious</Link> for a number of minutes equal to the monk of the mantis's monk level or dies (the monk of the mantis's choice).</div></div></div></div>
</>};
const _monk_of_the_mantis_uc = {title: "Monk of the Mantis (Unchained)", topLink: ["Unchained Monk","class/unchained_monk"], jsx: <><h2 id="arc-monk-monk_of_the_mantis_uc-monk-of-the-mantis">Monk of the Mantis</h2>
<p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox pg. 11</Link><br/>A body contains many points where the flesh, mind, and spirit coincide. A monk of the mantis is skilled at manipulating these points. With precise strikes, she temporarily disrupts a body's connection with the rest of the self.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_mantis_uc-pressuring-strikes-ex" data-hash-target><div className="box">Pressuring Strikes (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">2nd-, 6th-, 10th-, 14th-, and 18th-level bonus feats</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A monk of the mantis gains the <Link to="/ability/sneak_attack">sneak attack</Link> ability. This ability functions as the <Link to="/class/rogue">rogue</Link> ability of the same name, except it can be used only during a <em>flurry of blows.</em> The initial sneak attack damage is +1d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">The damage becomes +2d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">The damage increases to +3d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 14th Level</div></div><div className="abEnd"><div className="box">The damage becomes +4d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">The damage increases to +5d6.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_mantis_uc-debilitating-blows-ex" data-hash-target><div className="box">Debilitating Blows (Ex)</div><div className="flavor">A monk of the mantis's knowledge of anatomy allows her to deal blows that both deal damage and impose debilitating conditions.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">6th-, 10th-, and 12th-level ki powers</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">If a monk of the mantis stuns a target with <Link to="/feat/stunning_fist">Stunning Fist</Link>, the target is also <Link to="/rule/entangled">entangled</Link> for 1 round after the Stunning Fist effect ends.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">If the monk of the mantis stuns a target with Stunning Fist, the target is also <Link to="/misc/exhausted">exhausted</Link> for 1 round after the Stunning Fist effect ends.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">The monk can spend 1 point from her <em>ki pool</em> as part of her Stunning Fist attack to increase the duration of these additional effects to a number of rounds equal to her Wisdom bonus (minimum 2 rounds).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_mantis_uc-disabling-palm-su" data-hash-target><div className="box">Disabling Palm (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 15th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A monk of the mantis can render the target of her <em>quivering palm</em> unconscious instead of killing the creature. Upon failing its Fortitude saving throw, the target either is knocked <Link to="/misc/unconscious">unconscious</Link> for a number of minutes equal to the monk of the mantis's monk level or dies (the monk of the mantis's choice).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">This ability only applies if the monk selects the <em>quivering palm</em> ki power.</div></div></div></div>
</>};
const _monk_of_the_sacred_mountain = {title: "Monk of the Sacred Mountain", jsx: <><h2 id="arc-monk-monk_of_the_sacred_mountain-monk-of-the-sacred-mountain">Monk of the Sacred Mountain</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 114</Link><br/>The monk of the sacred mountain finds strength and power in the earth beneath his feet. Rather than spinning though the battlefield with the fluid motion of the river, he roots himself to the ground, as immovable and unshakable as the stones of the mountain. A monk of the sacred mountain has the following class features.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_sacred_mountain-iron-monk-ex" data-hash-target><div className="box">Iron Monk (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Evasion</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A monk of the sacred mountain gains <Link to="/feat/toughness">Toughness</Link> as a bonus feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The monk gains a +1 natural armor bonus.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_sacred_mountain-bastion-stance-ex" data-hash-target><div className="box">Bastion Stance (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Slow fall</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">A monk of the sacred mountain becomes like stone, nearly impossible to move when he stands his ground. If the monk starts and ends his turn in the same space, he cannot be knocked <Link to="/rule/prone">prone</Link> or forcibly moved until the start of his next turn, except by mind-affecting or teleportation effects.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">He is immune to any attempts to force him to move, even mind-affecting and teleportation effects.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_sacred_mountain-iron-limb-defense-ex" data-hash-target><div className="box">Iron Limb Defense (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">High jump</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A monk of the sacred mountain can deflect blows with an active defense that complements his bastion stance. If the monk starts and ends his turn in the same space, he gains a +2 shield bonus to AC and CMD until the start of his next turn.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">He can spend 1 ki point to increase this bonus to +4.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_sacred_mountain-adamantine-monk-ex" data-hash-target><div className="box">Adamantine Monk (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Improved evasion</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 9th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A monk of the sacred mountain has muscles so strong and skin so resilient that he gains DR 1/-.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">The monk can spend 1 ki point to double his DR until the beginning of his next turn.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">The monk's DR becomes 2/-.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">The monk's DR increases to 3/-.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">The monk's DR becomes 4/-.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/hazard-sign"><IonIcon icon="/icons/hazard-sign.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_sacred_mountain-vow-of-silence-su" data-hash-target><div className="box">Vow of Silence (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Tongue of the sun and the moon</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 17th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A monk of the sacred mountain becomes as impassive as stone, making a vow of silence in exchange for greater abilities. The monk gains a +2 insight bonus to AC and CMD and a +4 bonus on Sense Motive, Stealth, and Perception checks.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The monk does not lose the capacity for speech, but if he ever speaks, he loses this feature for 24 hours.</div></div></div></div>
</>};
const _monk_of_the_seven_forms = {title: "Monk of the Seven Forms", jsx: <><h2 id="arc-monk-monk_of_the_seven_forms-monk-of-the-seven-forms">Monk of the Seven Forms</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 40</Link><br/>When Tian monks founded the Monastery of the Seven Forms near the present border between Qadira and Taldor, they did so as a challenge to prospective students to travel great distances and prove their devotion before training within the monastery's walls. Over the centuries, the monastery has fallen under Qadiran control many times, and the original seven forms for which the monastery was named have been lost to history. In their place, the monks of the isolated sanctuary now teach a style featuring lightning-fast strikes that mimic both dervish dances and the searing winds of the arid desert, favoring mobility and endurance.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_seven_forms-bonus-feats" data-hash-target><div className="box">Bonus Feats</div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">A monk of the seven forms loses the ability to take <Link to="/feat/improved_disarm">Improved Disarm</Link>, <Link to="/feat/improved_feint">Improved Feint</Link>, <Link to="/feat/improved_grapple">Improved Grapple</Link>, and <Link to="/feat/improved_trip">Improved Trip</Link> as bonus feats. He adds <Link to="/feat/nimble_moves">Nimble Moves</Link> to his list of bonus feats.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">He also adds <Link to="/feat/acrobatic_steps">Acrobatic Steps</Link> and <Link to="/feat/wind_stance">Wind Stance</Link> to his list of bonus feats.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">He adds <Link to="/feat/lightning_stance">Lightning Stance</Link> to his list of bonus feats.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_seven_forms-lightning-finish-ex" data-hash-target><div className="box">Lightning Finish (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Stunning fist</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">A monk of the seven forms can use this ability a number of times per day equal to his monk level, but no more than once per round.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Immediate Action</div></div><div className="abEnd"><div className="box">A monk of the seven forms can make a single attack with a manufactured light or one-handed slashing weapon he is currently wielding against any target he has successfully hit at least twice with his unarmed strike during his turn. This attack deals normal damage but without the normal Strength bonus to damage.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">He can take a 5-foot step before or after performing a <em>lightning finish</em> so long as he ends adjacent to his target, though if he takes this step, he cannot perform a 5-foot step during his next turn.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">He applies his full Strength bonus to his damage roll for the extra attack, even if he made the attack with an off-hand weapon or with a weapon wielded in two hands.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">If he hit the target at least three times with his unarmed strike during his turn, taking the 5-foot step granted by <em>lightning finish</em> does not prevent him from taking a 5-foot step during his next turn.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_seven_forms-endurance-ex" data-hash-target><div className="box">Endurance (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Maneuver training</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A monk of the seven forms gains <Link to="/feat/endurance">Endurance</Link> as a bonus feat.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-monk_of_the_seven_forms-sirocco-fury-su" data-hash-target><div className="box">Sirocco Fury (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Abundant step, quivering palm</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Full-Round Action</div></div><div className="abEnd"><div className="box">A monk of the seven forms can spend 2 ki points to enter a meditative trance that replicates the spell <Link to="/spell/dance_of_a_hundred_cuts">dance of a hundred cuts</Link>, using his monk level as his caster level. Unlike the spell, a monk of the seven forms must both move 10 feet and make a melee attack each round after he begins this trance to prevent the effect from ending.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">He can instead spend 3 ki points when using this ability to make his trance replicate <Link to="/spell/dance_of_a_thousand_cuts">dance of a thousand cuts</Link> with the same limitations.</div></div></div></div>
</>};
const _nimble_guardian = {title: "Nimble Guardian", jsx: <><h2 id="arc-monk-nimble_guardian-nimble-guardian">Nimble Guardian</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 92</Link><br/>Some catfolk monks dedicate their graceful prowess to the defense of others, especially those dedicated to a similar ethos or who prove themselves as stalwart allies of the monk's cause. A nimble guardian has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-monk-nimble_guardian--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/catfolk">Catfolk</Link></td></tr></tbody></table></ScrollContainer></div><div className="ability p"><div className="abIcon"><Link to="/icons/shield-reflect"><IonIcon icon="/icons/shield-reflect.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-nimble_guardian-defensive-aid-ex" data-hash-target><div className="box">Defensive Aid (Ex)</div><div className="flavor">A nimble guardian can interpose herself between one adjacent ally and an attack or damage dealt in an area of effect.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Evasion</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Wisdom modifier times/day</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Immediate Action</div></div><div className="abEnd"><div className="box">If an adjacent ally is the target of the attack or is required to make a Reflex saving throw against a damaging effect, the nimble guardian can grant that ally a +4 circumstance bonus to AC or on the saving throw against the effect.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The nimble guardian must use this ability before the attack roll or saving throw is made. The nimble guardian can only use this ability if he is wearing light or no armor.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-nimble_guardian-nimble-reflexes-ex" data-hash-target><div className="box">Nimble Reflexes (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Still mind</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A nimble guardian gains a +2 bonus on all Reflex saving throws.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/shield-reflect"><IonIcon icon="/icons/shield-reflect.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-nimble_guardian-defensive-mastery-ex" data-hash-target><div className="box">Defensive Mastery (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Purity of body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A nimble guardian gains 3 additional uses of her <em>defensive aid</em> ability per day. Furthermore, if an ally that gained the benefit of a use of defensive aid succeeds her Reflex saving throw, and the effect still deals damage on a successful saving throw, the nimble guardian can spend 1 ki point to negate that damage. Doing so is not an action.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-nimble_guardian-guardian-feline-su" data-hash-target><div className="box">Guardian Feline (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Wholeness of body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 7th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">A nimble guardian can transform himself into a feline creature by spending 2 ki points. The effect lasts for 1 hour or until the nimble guardian changes back. The chosen form must be some form of feline (<Link to="/monster/cheetah">cheetah</Link>, <Link to="/monster/lion">lion</Link>, etc.). This ability is otherwise identical to <Link to="/spell/beast_shape_ii">beast shape II</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Provokes <Link to="/rule/aoo">AoO?</Link></div></div><div className="abEnd"><div className="box">No</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">This ability functions as <Link to="/spell/beast_shape_iii">beast shape III</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-nimble_guardian-evasion-ex" data-hash-target><div className="box">Evasion (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Improved evasion</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 9th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A nimble guardian gains <Link to="/ability/evasion">evasion</Link>.</div></div></div></div>
</>};
const _nornkith = {title: "Nornkith", jsx: <><h2 id="arc-monk-nornkith-nornkith">Nornkith</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 24</Link><br/>Nornkith hone their bodies and minds to follow the branching threefold paths of fate. Nornkith seek to emulate the fey masters of fate called <Link to="/monster/norn">norns</Link> and eventually ascend to become norns in their own right.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/info"><IonIcon icon="/icons/info.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-nornkith-conviction-of-fate-ex" data-hash-target><div className="box">Conviction of Fate (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">A nornkith uses her Charisma, rather than her Wisdom, to determine all class features and effects relating to his monk class.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/rolling-dices"><IonIcon icon="/icons/rolling-dices.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-nornkith-forewarned-su" data-hash-target><div className="box">Forewarned (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Stunning fist</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A nornkith can always act in the surprise round, even if he does not notice her enemies, though she remains <Link to="/rule/flat_footed">flat-footed</Link> until she takes an action. In addition, she gains a bonus on initiative rolls equal to half her monk level (minimum +1).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">A nornkith's initiative roll is automatically a natural 20.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-nornkith-shears-su" data-hash-target><div className="box">Shears (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Bonus feat gained at 1st level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">Whenever a nornkith makes an unarmed strike, she can cause shimmering silver shears to manifest around the blow, causing the unarmed strike to count as silver for the purpose of overcoming <Link to="/rule/damage_reduction">damage reduction</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">She gains <Link to="/feat/improved_critical">Improved Critical</Link> (unarmed strike) as a bonus feat, even if she does not meet the prerequisites.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-nornkith-resist-deaths-lure-su" data-hash-target><div className="box">Resist Death's Lure (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Purity of body, bonus feat gained at 10th level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A nornkith gains a +4 morale bonus on saves against death effects, <Link to="/rule/energy_drain">energy drain</Link>, and negative energy.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">She gains immunity to energy drain and negative energy.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/rolling-dices"><IonIcon icon="/icons/rolling-dices.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-nornkith-fate-weaver-su" data-hash-target><div className="box">Fate Weaver (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Diamond soul</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Immediate Action</div></div><div className="abEnd"><div className="box">A nornkith can spend 1 ki point to force a creature within 60 feet to reroll one saving throw before the results of the roll are revealed. The creature must take the result of the second roll, even if it's worse than the original roll. Whether the new result is a success or failure, the creature cannot be the target of this ability again for 1 day.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/smoking-finger"><IonIcon icon="/icons/smoking-finger.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-nornkith-snip-thread-su" data-hash-target><div className="box">Snip Thread (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Quivering palm</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 15th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">1 time/day</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">A monk can spend 1 ki point to produce a golden thread linked to the fate of a creature within 60 feet and mimic snipping through the thread with a pair of shears. The target takes 1d6 points of damage per nornkith level and can attempt a Fortitude saving throw (DC = 10 + half the nornkith's monk level + her Charisma modifier) to halve this damage. If the damage would bring the target's hit points to 0 or below, the nornkith can spend another ki point to sever the golden thread completely; in this case, the target dies and can only be restored to life with <Link to="/spell/miracle">miracle</Link>, <Link to="/spell/wish">wish</Link>, or divine intervention.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">This is a death effect.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-nornkith-inscrutable-su" data-hash-target><div className="box">Inscrutable (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Empty body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 19th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The nornkith is protected by a constant <Link to="/spell/mind_blank">mind blank</Link> effect with a caster level equal to her monk level. The nornkith can suppress or resume this protection as a <strong className="hl">standard action</strong>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-nornkith-norn-transformation" data-hash-target><div className="box">Norn Transformation</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Perfect self</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A nornkith attains her fey heritage. Her type changes to <Link to="/type/fey">fey</Link>, and she gains DR 10/cold iron.</div></div></div></div>
</>};
const _ouat = {title: "Ouat", jsx: <><h2 id="arc-monk-ouat-ouat">Ouat</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 41</Link><br/>The ascetic, desert-dwelling dwarves known as the Ouat have eschewed dwarven traditions, whose unchanging rigidity, they believe, shackles their people to the past and inhibits self-improvement. Shaving their heads, living under the open sky, and practicing arts unfamiliar to the typical <Link to="/race/dwarf">dwarf</Link>, the Ouat follow in the footsteps of Irori and Nethys by aspiring to awaken the divine essence that lives within each creature.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-monk-ouat--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/dwarf">Dwarf</Link> with the <em>greed, hatred, defensive training, stonecunning,</em> and <em>weapon familiarity</em> racial traits.</td></tr></tbody></table></ScrollContainer></div><div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/shield-reflect"><IonIcon icon="/icons/shield-reflect.svg" color="secondary" /></Link><Link to="/icons/rolling-dices"><IonIcon icon="/icons/rolling-dices.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-ouat-awaken-divinity-su" data-hash-target><div className="box">Awaken Divinity (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Stunning fist, and the <strong>greed</strong> and <strong>hatred</strong> dwarf racial traits</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">As a <strong className="hl">standard action</strong>, an Ouat can touch a creature to grant it a temporary ki point until the beginning of the Ouat's next turn. In addition to any other ways in which the target can use ki, it can expend the ki point as a <strong className="hl">swift action</strong> in order to either gain a +2 dodge bonus to AC for 1 round or increase its base speed by 20 feet for 1 round. The Ouat can target himself with this ability as a <strong className="hl">swift action</strong>, but doing so costs 2 uses of the ability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">The dodge bonus to AC increases to +4.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">An affected creature can spend the ki point to ignore all Strength, Dexterity, and Constitution penalties it would otherwise take for 1 round.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">An Ouat can target two adjacent creatures with this ability as a <strong className="hl">standard action</strong>, but must expend one use of the ability for each target affected.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">An affected creature can spend this ki point to roll all saving throws twice and take the higher result for 1 round.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">An affected creature can spend the ki point to benefit from the Ouat's <em>perfect self</em> class ability for 1 round. If the creature already has the <em>perfect self</em> class feature, its damage reduction and any spell resistance it has increases by 2 for 1 round.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">1 time/day per monk level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">An Ouat can use this ability no more than once per round.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-ouat-spurn-tradition-ex" data-hash-target><div className="box">Spurn Tradition (Ex)</div><div className="flavor">Ouat dwarves strive to separate themselves from the rest of their race and the traditions that bind them.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">The <strong>defensive training, stonecunning,</strong> and <strong>weapon familiarity</strong> dwarf racial traits</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">The bonuses for nonmagical effects that target or specifically affect dwarf subtype creatures (such as a ranger's <Link to="/ability/favored_enemy">favored enemy</Link> class feature) are all reduced by half. In addition, an Ouat becomes proficient in one martial weapon with the monk property.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-monk-ouat-know-the-unseen-disciples-su" data-hash-target><div className="box">Know the Unseen Disciples (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Wholeness of body</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 7th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">An Ouat can spot hidden creatures, as if using the spell <Link to="/spell/see_invisibility">see invisibility</Link>. Using this ability consumes 2 points from his <em>ki pool.</em> His caster level for this effect is equal to his class level.</div></div></div></div>
</>};
export default {black_asp:_black_asp,black_asp_uc:_black_asp_uc,brazen_disciple:_brazen_disciple,brazen_disciple_uc:_brazen_disciple_uc,disciple_of_wholeness:_disciple_of_wholeness,disciple_of_wholeness_uc:_disciple_of_wholeness_uc,drunken_master:_drunken_master,elemental_monk:_elemental_monk,elemental_monk_uc:_elemental_monk_uc,far_strike_monk:_far_strike_monk,flowing_monk:_flowing_monk,gray_disciple:_gray_disciple,hamatulatsu_master:_hamatulatsu_master,harrow_warden:_harrow_warden,hellcat:_hellcat,hungry_ghost_monk:_hungry_ghost_monk,invested_regent:_invested_regent,invested_regent_uc:_invested_regent_uc,ironskin_monk:_ironskin_monk,karmic_monk:_karmic_monk,kata_master:_kata_master,ki_mystic:_ki_mystic,lifting_hand:_lifting_hand,lifting_hand_uc:_lifting_hand_uc,maneuver_master:_maneuver_master,martial_artist:_martial_artist,master_of_many_styles:_master_of_many_styles,menhir_guardian:_menhir_guardian,monk_of_the_empty_hand:_monk_of_the_empty_hand,monk_of_the_four_winds:_monk_of_the_four_winds,monk_of_the_healing_hand:_monk_of_the_healing_hand,monk_of_the_lotus:_monk_of_the_lotus,monk_of_the_mantis:_monk_of_the_mantis,monk_of_the_mantis_uc:_monk_of_the_mantis_uc,monk_of_the_sacred_mountain:_monk_of_the_sacred_mountain,monk_of_the_seven_forms:_monk_of_the_seven_forms,nimble_guardian:_nimble_guardian,nornkith:_nornkith,ouat:_ouat}