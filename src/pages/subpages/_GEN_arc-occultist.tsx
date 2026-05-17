import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _ancestral_aspirant = {title: "Ancestral Aspirant", jsx: <><h2 id="arc-occultist-ancestral_aspirant-ancestral-aspirant">Ancestral Aspirant</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 67</Link><br/>It is common for a noble to possess a deep pride for his family's past, but when such self-importance gives way to obsession, an ancestral aspirant is born. Ancestral aspirants perform all the typical social functions of a noble, but they fill their conversations with stories of the great deeds of their family forebears, and they spend their nights researching old histories and primary sources, hungry for more.</p>
<Ability icon={["skills"]} id="arc-occultist-ancestral_aspirant-undefined">
<Pair id="arc-occultist-ancestral_aspirant-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (planes), Profession</Pair></Ability>
<Ability id="arc-occultist-ancestral_aspirant-family-jewels" icon={["info"]}>
<Pair single id="arc-occultist-ancestral_aspirant-family-jewels">Family Jewels</Pair>
<Pair hl title="Alters">Implements</Pair>
<Pair title="Info">An ancestral aspirant's implements are always objects connected to his family history. One of his starting implements must be an implement from the <Link to="/implement/enchantment">enchantment</Link> school.</Pair>
</Ability>
<Ability id="arc-occultist-ancestral_aspirant-emotional-reading-su" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-ancestral_aspirant-emotional-reading-su">Emotional Reading (Su)</Pair>
<Pair hl title="Replaces">Object reading</Pair>
<Pair title="Ability">An ancestral aspirant doesn't care much about objects that didn't belong to his ancestors, but he is keenly attuned to his relatives and fellow nobles, allowing him to read the emotions of others. If he spends 1 minute examining a creature, he learns one fact, chosen by the GM, about the creature's current emotions. Since emotional auras are complex, this ability is unlikely to reveal the secret feelings of a professional spy; instead, it only touches upon surface emotions.</Pair>
</Ability>
<Ability id="arc-occultist-ancestral_aspirant-courtly-contacts-su" icon={["stairs-goal"]}>
<Pair single id="arc-occultist-ancestral_aspirant-courtly-contacts-su">Courtly Contacts (Su)</Pair>
<Pair hl title="Replaces">Outside contact</Pair>
<Pair title="Ability">Ancestral aspirants have contacts among courtly circles rather than otherworldly circles. This works similarly to <em>outside contact</em> except for the following differences: First, he doesn't need to use a <em>magic circle</em> or make a payment (though he still expends 1 point of mental focus from his enchantment implement). Second, he can use those contacts to gather information for him (as per the Diplomacy skill to gather information) without spending the time himself, rather than asking a question and receiving a result similar to a divination.</Pair>
<Pair title="At 12th Level">He can ask an additional question over the same time period, as normal with <em>outside contact.</em></Pair>
<Pair title="At 16th Level">He can ask an additional question over the same time period, as normal with <em>outside contact.</em> Instead of delivering messages and objects, the courtly contacts can spread vicious rumors and gossip about a target throughout a settlement, causing any creatures in the settlement whose attitude toward the target wasn't helpful to have its attitude toward the target worsened by one step. These baseless rumors last 1 week or until the target spends 8 hours refuting them and succeeds at a Diplomacy check (DC = 10 + the ancestral aspirant's occultist level + his Intelligence modifier).</Pair>
<Pair title="At 20th Level">He can ask an additional question over the same time period, as normal with <em>outside contact.</em></Pair>
</Ability>
</>};
const _battle_host = {title: "Battle Host", jsx: <><h2 id="arc-occultist-battle_host-battle-host">Battle Host</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 100</Link><br/>Well versed in military history, battlefield lore, and the occult, a battle host forms a supernatural bond with a chosen weapon, suit of armor, or shield, from which he can channel psychic energy to cast spells, conjure the spirit of the object's former owner, increase his own physical might, and produce a number of other remarkable abilities.</p>
<Ability icon={["skills"]} id="arc-occultist-battle_host-undefined">
<Pair id="arc-occultist-battle_host-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT)</Pair></Ability>
<Ability id="arc-occultist-battle_host-weapon-and-armor-proficiency" icon={["stairs-goal"]}>
<Pair single id="arc-occultist-battle_host-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Weapon and armor proficiency</Pair>
<Pair title="Ability">A battle host is proficient with all simple and martial weapons and with all types of armor (heavy, light, and medium) and shields (including tower shields).</Pair>
</Ability>
<Ability id="arc-occultist-battle_host-panoply-bond-su" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-occultist-battle_host-panoply-bond-su">Panoply Bond (Su)</Pair>
<Pair hl title="Alters">Implements, mental focus, spellcasting, implement mastery</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A battle host forms a supernatural bond with a specific weapon, suit of armor, or shield. This selection is permanent and can never be changed. The bonded item is masterwork quality and the battle host begins play with it at no cost. The bonded item is immune to the <Link to="/misc/broken">broken</Link> condition for as long as the battle host lives. If a battle host dies and is restored to life, the bonded item is also restored if it was destroyed. Any magic powers associated with a battle host's bonded item function only for the battle host; in the hands of anyone else it is only a masterwork item.</Pair>
<Pair title="At 1st Level">The bonded item starts as an implement for any single school of magic, granting access to its base focus powers and resonant powers.</Pair>
<Pair title="At 2nd Level">His bonded item gains access to an additional school of magic (and its focus and resonant powers, as usual).</Pair>
<Pair title="At 10th Level">His bonded item gains access to an additional school of magic (and its focus and resonant powers, as usual).</Pair>
<Pair title="At 14th Level">His bonded item gains access to an additional school of magic (and its focus and resonant powers, as usual).</Pair>
<Pair title="At 18th Level">His bonded item gains access to an additional school of magic (and its focus and resonant powers, as usual).</Pair>
<Pair title="Special">The battle host's bonded item serves as his implement component to cast occultist spells of all the schools that he knows. However, he must split his mental focus among the schools he knows for the purpose of determining resonant powers and using focus powers, even though he possesses only one physical item as an implement.</Pair>
</Ability>
<Ability id="arc-occultist-battle_host-battle-skill" icon={["broken-shield"]}>
<Pair single id="arc-occultist-battle_host-battle-skill">Battle Skill</Pair>
<Pair hl title="Alters">Magic item skill</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Info">A battle host's <em>magic item skill</em> ability applies only on checks with weapons, armor, and shields.</Pair>
</Ability>
<Ability id="arc-occultist-battle_host-battle-reading" icon={["broken-shield"]}>
<Pair single id="arc-occultist-battle_host-battle-reading">Battle Reading</Pair>
<Pair hl title="Alters">Object reading</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Info">A battle host can use <em>object reading</em> on only weapons, armor, and shields.</Pair>
</Ability>
<Ability id="arc-occultist-battle_host-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-occultist-battle_host-bonus-feats">Bonus Feats</Pair>
<Pair hl title="Replaces">Shift focus, magic circles, binding circles, fast circles</Pair>
<Pair title="At 4th Level">A battle host gains a bonus feat in addition to those gained from normal advancement. These bonus feats must be selected from those listed as <Link to="/main/combat_feat">combat feats</Link>.</Pair>
<Pair title="At 8th Level">The battle host gains another bonus feat, following the restrictions above.</Pair>
<Pair title="At 12th Level">The battle host gains another bonus feat, following the restrictions above.</Pair>
<Pair title="At 16th Level">The battle host gains another bonus feat, following the restrictions above.</Pair>
<Pair title="Special">The battle host must meet the prerequisites of these bonus feats.</Pair>
</Ability>
<Ability id="arc-occultist-battle_host-spirit-warrior-sp" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-battle_host-spirit-warrior-sp">Spirit Warrior (Sp)</Pair>
<Pair hl title="Replaces">Aura sight</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">Once per day, a battle host can call forth the spirit of a dead warrior who once owned his bonded item. This ability functions as <Link to="/spell/spiritual_ally">spiritual ally</Link>, using the battle host's occultist level as his caster level and his Intelligence modifier instead of his Wisdom modifier to determine the spell's effects.</Pair>
<Pair title="At 9th Level">He can use this ability 2 times a day.</Pair>
<Pair title="At 13th Level">He can use this action 3 times a day.</Pair>
<Pair title="At 17th Level">He can use this ability 4 times a day.</Pair>
<Pair title="Special">Unlike the use of most spell-like abilities, this doesn't provoke an attack of opportunity.</Pair>
</Ability>
<Ability id="arc-occultist-battle_host-heroic-splendor-su" icon={["upgrade"]}>
<Pair single id="arc-occultist-battle_host-heroic-splendor-su" flavor="A battle host can draw power from his bonded item to imbue himself with superhuman strength, agility, or resilience.">Heroic Splendor (Su)</Pair>
<Pair hl title="Replaces">Outside contact</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Swift Action">Once a day, a battle host can grant himself a +4 insight bonus to Strength, Dexterity, or Constitution for 1 minute.</Pair>
<Pair title="At 10th Level">He can use this ability 2 times a day.</Pair>
<Pair title="At 14th Level">He can use this power 3 times a day.</Pair>
<Pair title="At 18th Level">He can use this ability 4 times a day.</Pair>
<Pair title="Special">If he activates <em>heroic splendor</em> again before the duration expires, the new use of <em>heroic splendor</em> replaces the old use.</Pair>
</Ability>
</>};
const _construct_collector = {title: "Construct Collector", jsx: <><h2 id="arc-occultist-construct_collector-construct-collector">Construct Collector</h2>
<p><strong>Sources</strong> <Link to="/source/construct_handbook">Construct Handbook pg. 11</Link><br/>Trapped within each construct is a spiritual presence, be it a bound elemental or raw magical energy. Construct collectors draw out that presence and use it to gain unlikely power in the battlefield.</p>
<Ability id="arc-occultist-construct_collector-constructed-focus-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-occultist-construct_collector-constructed-focus-su">Constructed Focus (Su)</Pair>
<Pair hl title="Replaces">3rd-, 9th- and 15th-level focus powers</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A construct collector can harvest components from destroyed constructs to fuel his implements. Harvesting a component takes 1 minute. A construct collector can harvest a number of active components equal to his Intelligence modifier per day. An active component is infused with 1 point of generic mental focus, which the construct collector can expend to activate any focus power at that power's normal cost, as opposed to the increased cost normally associated with generic mental focus. This otherwise functions as expending focus saved inside a construct collector's body. Once this mental focus is expended, the component becomes inactive and is useless. An unused component does not lose its mental focus, even after a construct collector refreshes his mental focus. A construct collector can only have one active component at the same time.</Pair>
<Pair title="At 9th Level">A construct collector can now have 2 active components at a time.</Pair>
<Pair title="At 15th Level">A construct collector can now have 3 active components at a time.</Pair>
</Ability>
<Ability id="arc-occultist-construct_collector-repower-construct-su" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-construct_collector-repower-construct-su" flavor="A construct collector can use his mental focus to restore and gain control of a construct.">Repower Construct (Su)</Pair>
<Pair hl title="Replaces">Magic circles, outside contact, binding circles, fast circles</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Immediate Action">He can expend a number of points of generic mental focus (minimum 2 points) to prevent a construct within 30 feet from becoming destroyed when reduced to 0 or fewer hit points. The construct immediately regains a number of hit points equal to half of the construct collector's current hit points (minimum 1). The construct follows all of the construct collector's orders until the end of the collector's next turn or until reduced to 0 or fewer hit points. Afterwards, the construct is completely destroyed and cannot be repowered again, even by another construct collector.</Pair>
<Pair title="At 12th Level">The construct is instead completely destroyed after a number of rounds equal to the number of points of generic mental focus expended.</Pair>
<Pair title="At 16th Level">The construct is instead completely destroyed after a number of minutes equal to the number of points of generic mental focus expended.</Pair>
</Ability>
</>};
const _curator = {title: "Curator", jsx: <><h2 id="arc-occultist-curator-curator">Curator</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 32</Link><br/>Most occultists acquire and study antiques at a steady pace, learning new techniques one at a time. A lucky few join wealthy organizations replete with relics or inherit undocumented vaults full of historical treasures, and dabble in a wide variety of implements while mastering few. This is especially common in the <Link to="/rule/aspis_consortium">Aspis Consortium</Link>, whose far-flung merchants handle countless relics every year. It's simple enough to snag choice items from Aspis ships, allowing these curators to compile truly prodigious collections. While all agents of the Aspis Consortium are expected to catalog and file their discoveries, in practice many of them keep prizes for their personal use, and the curator has elevated this practice almost to an art form. When confronted by superiors with accusations of failing to hand over rare treasures or mysterious items, the curator is swift to point out that such objects do the group no good sitting on a dusty shelf. Instead, the curator lives up to his name, and seeks to access the ancient powers hidden in such objects so that he can use them in the best interest of the Aspis Consortium. Over time, the Consortium has been forced to admit the wisdom in this way of thinking.</p>
<Ability id="arc-occultist-curator-extensive-collection-su" icon={["stairs-goal"]}>
<Pair single id="arc-occultist-curator-extensive-collection-su">Extensive Collection (Su)</Pair>
<Pair hl title="Replaces">One of the two occultist implements learned at 1st level, 6th- and 14th-level implements</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A curator acquires a collection of esoteric relics that function as occultist implements associated with two schools of magic; he must select these schools and their associated spells when he gains this feature.</Pair>
<Pair title="Move-Equivalent Action">Once a day, the curator can empower a single piece of his collection, choosing one of the two selected schools, gaining that school's focus power, and accessing the selected spells for 10 minutes. The curator can empower only a single relic at a time in this way, and activating this ability a second time ends any other relic's ongoing benefits. A curator's relic collection has a number of points of mental focus equal to his Intelligence modifier. Empowered relics are automatically invested with these mental focus points; expending a relic's mental focus reduces this total for the day.</Pair>
<Pair title="At 2nd Level">A curator can use this ability 2 times per day.</Pair>
<Pair title="At 6th Level">A curator can empower a relic 3 times per day. A curator chooses two additional schools of magic - in addition to their spells - and adds them to his collection.</Pair>
<Pair title="At 10th Level">A curator can use this ability 4 times per day.</Pair>
<Pair title="At 14th Level">A curator can empower a relic 5 times per day. A curator chooses two additional schools of magic - in addition to their spells - and adds them to his collection.</Pair>
<Pair title="At 18th Level">A curator can use this ability 6 times per day.</Pair>
</Ability>
<Ability id="arc-occultist-curator-split-focus-su" icon={["broken-shield"]}>
<Pair single id="arc-occultist-curator-split-focus-su">Split Focus (Su)</Pair>
<Pair hl title="Alters">Mental focus</Pair>
<Pair title="Info">A curator has a number of points of mental focus equal to only his occultist level.</Pair>
</Ability>
<Ability id="arc-occultist-curator-adaptable-powers-su" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-curator-adaptable-powers-su">Adaptable Powers (Su)</Pair>
<Pair hl title="Replaces">3rd-level focus power</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A curator learns one focus power from each of the schools associated with his extensive collection. Whenever he activates his collection, he can use those focus powers associated with his selected school of magic while the relic remains empowered.</Pair>
<Pair title="Special">Whenever the curator would learn another focus power for an implement, he can instead select two new focus powers from different schools associated with his extensive relic collection.</Pair>
</Ability>
<Ability id="arc-occultist-curator-relic-resistance-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-occultist-curator-relic-resistance-ex" flavor="A curator develops a resistance to harmful items.">Relic Resistance (Ex)</Pair>
<Pair hl title="Replaces">Shift focus</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">He never gains <Link to="/rule/negative_levels">negative levels</Link> due to his alignment as a result of wielding or wearing magic items, and he gains a +4 bonus on Will saves to resolve personality conflicts with intelligent magic items.</Pair>
<Pair title="Ability">Whenever a cursed item's harmful condition would trigger, a curator can attempt a Will save (DC = 10 + the item's CL) to suppress the curse just long enough to discard the item before it activates.</Pair>
<Pair title="Special">When identifying an item, a curator needs to exceed the item's DC by only 5 (instead of 10) to determine whether the item is cursed.</Pair>
</Ability>
<Ability id="arc-occultist-curator-complex-collection-su" icon={["upgrade"]}>
<Pair single id="arc-occultist-curator-complex-collection-su">Complex Collection (Su)</Pair>
<Pair hl title="Replaces">Outsider contact</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A curator can empower two relics that are in his collection simultaneously, and he gains the benefits of both. When he does so, he must allocate his relic collection's mental focus between the two relics.</Pair>
</Ability>
<Ability id="arc-occultist-curator-mental-catalog-su" icon={["upgrade"]}>
<Pair single id="arc-occultist-curator-mental-catalog-su">Mental Catalog (Su)</Pair>
<Pair hl title="Replaces">Magic circles, binding circles, fast circles</Pair>
<Pair title="At 8th Level">The points of mental focus invested in the curator's relic collection increase by 2.</Pair>
<Pair title="At 12th Level">The points instead increase by 3.</Pair>
<Pair title="At 16th Level">The total points now increase by 4 additional points.</Pair>
</Ability>
</>};
const _esoteric_initiate = {title: "Esoteric Initiate", jsx: <><h2 id="arc-occultist-esoteric_initiate-esoteric-initiate">Esoteric Initiate</h2>
<p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 8</Link><br/>While most occultists learn to draw power from a variety of implements and objects, esoteric initiates have focused their study entirely on items of antiquity connected to the teachings of the Esoteric Order of the Palatine Eye, believing such items to be more powerful than mundane items.</p>
<Ability id="arc-occultist-esoteric_initiate-implements-of-the-palatine-eye-su" icon={["magic-swirl","upgrade"]}>
<Pair single id="arc-occultist-esoteric_initiate-implements-of-the-palatine-eye-su">Implements of the Palatine Eye (Su)</Pair>
<Pair hl title="Alters">Mental focus, implements, shift focus</Pair>
<Pair title="Ability">An esoteric initiate has formed a supernatural bond with a set of the order's writings collected into a book. If the book is damaged, it is restored to full hit points when the initiate's mental focus refreshes. If the book is lost or destroyed, the initiate can replace it with another similar one, but doing so requires an 8-hour ritual that binds the new book to him.</Pair>
<Pair title="Info">The book serves as an implement for any two schools of magic at 1st level. The initiate gains new implement schools normally. However, the initiate's additional implements must be masterwork or magic items worth at least 50 gp, and they must directly or nominally represent the Esoteric Order of the Palatine Eye's beliefs or history. For example, the initiate's implements could be Osirian antiques, trinkets covered in Palatine iconography, or the like.</Pair>
<Pair title="Passive Ability">When the initiate benefits from his implements' resonant powers, he treats his occultist level as 1 higher for the purpose of determining the powers' benefits only.</Pair>
<Pair title="At 4th Level">When using the ability to shift his mental focus from one implement to another, he loses no focus when doing so.</Pair>
<Pair title="Special">An esoteric initiate can't save generic mental focus inside his own body instead of investing all of it.</Pair>
</Ability>
<Ability id="arc-occultist-esoteric_initiate-symbolism-sp" icon={["stairs-goal"]}>
<Pair single id="arc-occultist-esoteric_initiate-symbolism-sp">Symbolism (Sp)</Pair>
<Pair hl title="Replaces">Aura sight</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">An initiate who spends 1 minute carefully studying any written work can understand its gist even if he doesn't speak the language in which the text is written. A number of times per day equal to the initiate's occultist level, the initiate can cast <Link to="/spell/comprehend_languages">comprehend languages</Link> as a spell-like ability to read a written work, using his occultist level as his caster level. If he uses <em>symbolism</em> to read a portion of the work that contains a hidden message or a cypher, he is automatically granted a Linguistics check with a bonus equal to his occultist level to decipher the message.</Pair>
</Ability>
</>};
const _extemporaneous_channeler = {title: "Extemporaneous Channeler", jsx: <><h2 id="arc-occultist-extemporaneous_channeler-extemporaneous-channeler">Extemporaneous Channeler</h2>
<p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 8</Link><br/>Extemporaneous channelers study the power of transformation and use items in unintended ways to awaken their potential.</p>
<Ability id="arc-occultist-extemporaneous_channeler-weapon-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-occultist-extemporaneous_channeler-weapon-proficiency">Weapon Proficiency</Pair>
<Pair hl title="Alters">Weapon proficiencies</Pair>
<Pair title="Info">An extemporaneous channeler is proficient with all simple weapons.</Pair>
</Ability>
<Ability id="arc-occultist-extemporaneous_channeler-improvisational-combatant-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-occultist-extemporaneous_channeler-improvisational-combatant-ex">Improvisational Combatant (Ex)</Pair>
<Pair title="Ability">An extemporaneous channeler does not incur any penalties for using an <Link to="/misc/improvised_weapon">improvised weapon</Link>. She is considered to have the <Link to="/feat/catch_off_guard">Catch Off-Guard</Link> and <Link to="/feat/throw_anything">Throw Anything</Link> feats for the purpose of meeting prerequisites.</Pair>
</Ability>
<Ability id="arc-occultist-extemporaneous_channeler-fleeting-focus-su" icon={["magic-swirl","stairs-goal"]}>
<Pair single id="arc-occultist-extemporaneous_channeler-fleeting-focus-su">Fleeting Focus (Su)</Pair>
<Pair hl title="Alters">Mental focus</Pair>
<Pair title="Info">An extemporaneous channeler's studies of the changing nature of objects give her more mental focus, which she learns to quickly invest in her implements throughout the day, but which she struggles to maintain.</Pair>
<Pair title="Ability">When an extemporaneous channeler refreshes her mental focus, she must spend 1 hour preparing her implements for spellcasting but does not immediately invest them with her generic focus, which is equal to her occultist level + twice her Intelligence modifier. At any point during the day, she can shift any amount of her generic focus to any number of her implements by concentrating for 1 round while touching her implements. After every 10 minutes, her invested implements each lose 1 point of mental focus, as if it had been expended on a focus power.</Pair>
<Pair title="Special">If the extemporaneous channeler uses her <em>withdraw focus</em> ability to remove focus before a full 10-minute increment has elapsed, each implement still loses 1 point of mental focus as if it had been invested for that entire increment.</Pair>
</Ability>
<Ability id="arc-occultist-extemporaneous_channeler-transformative-resonance-su" icon={["upgrade"]}>
<Pair single id="arc-occultist-extemporaneous_channeler-transformative-resonance-su">Transformative Resonance (Su)</Pair>
<Pair title="Swift Action">An extemporaneous channeler can expend 1 point of generic focus as to allow her generic focus to resonate in her improvised weapons. For 1 minute, the extemporaneous channeler grants any item she uses as an improvised weapon a +1 enhancement bonus on attack and damage rolls for every 3 points of generic focus she has in her body. She can give it a maximum bonus of +1.</Pair>
<Pair title="At 5th Level">The maximum bonus becomes +2.</Pair>
<Pair title="At 9th Level">The maximum bonus increases to +3.</Pair>
<Pair title="At 13th Level">The maximum bonus becomes +4.</Pair>
<Pair title="At 17th Level">The maximum bonus increases to +5.</Pair>
<Pair title="Special">The extemporaneous channeler can imbue the item with any one weapon special ability with an equivalent enhancement bonus less than or equal to her maximum bonus by reducing the granted enhancement bonus by the appropriate amount, such as reducing a +2 bonus to a +1 <Link to="/magic-enh/flaming">flaming</Link> enchantment. She chooses the special ability when she activates this power, but she can spend 1 point of generic focus as a <strong className="hl">swift action</strong> to change it, which also resets the duration of the power. The item must have an enhancement bonus of at least +1 (either on its own or from her imbuing it) to gain a weapon special ability. This ability stacks with any other effect that grants an enhancement bonus to an improvised weapon, such as <Link to="/magic-wondrous/gloves_of_improvised_might">gloves of improvised might</Link>, to a maximum of +5.</Pair>
</Ability>
<Ability id="arc-occultist-extemporaneous_channeler-withdraw-focus-su" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-extemporaneous_channeler-withdraw-focus-su">Withdraw Focus (Su)</Pair>
<Pair hl title="Alters">Shift focus</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Standard Action">An extemporaneous channeler can shift any amount of focus from any number of implements back into herself as generic focus. Doing so costs her no loss of focus (other than what's lost due to her <em>fleeting focus</em> ability).</Pair>
<Pair title="Special">Unlike expending focus normally, this shift can reduce the effect of a resonant power in the implement from which the mental focus was taken.</Pair>
</Ability>
<Ability id="arc-occultist-extemporaneous_channeler-improvised-spell-su" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-extemporaneous_channeler-improvised-spell-su" flavor="An extemporaneous channeler learns to use her implements to improvise a spell similar to one she already knows.">Improvised Spell (Su)</Pair>
<Pair hl title="Replaces">Magic circles, outside contact, binding circles, fast circles</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">Once per day, an extemporaneous channeler can cast an occultist spell from an implement school she knows as if it were one of her spells known, expending a spell slot of the same level and an amount of generic focus equal to the spell's level to cast the desired spell. A spell cast as an <em>improvised spell</em> always has a minimum casting time of 1 round, regardless of the casting time of the spell.</Pair>
<Pair title="At 12th Level">The number of uses becomes 2 times a day.</Pair>
<Pair title="At 17th Level">The number of uses increases to 3 times a day.</Pair>
</Ability>
</>};
const _geomancer = {title: "Geomancer", jsx: <><h2 id="arc-occultist-geomancer-geomancer">Geomancer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 66</Link><br/>A geomancer studies every type of land, deriving power from the differences between types of terrain.</p>
<Ability icon={["skills"]} id="arc-occultist-geomancer-undefined">
<Pair id="arc-occultist-geomancer-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Disable Device, Knowledge (engineering), Knowledge (religion)</Pair></Ability>
<Ability id="arc-occultist-geomancer-geomantic-focus-su" icon={["stairs-goal"]}>
<Pair single id="arc-occultist-geomancer-geomantic-focus-su">Geomantic Focus (Su)</Pair>
<Pair hl title="Alters">Mental focus</Pair>
<Pair title="Ability">When a geomancer invests mental focus into his implements for the day, he can store some of it in the surrounding terrain. As long as he remains in physical contact with the terrain, he gains the <em>survivalist</em> resonant power (see below) and the ability to use the <em>terrain stride, dominion,</em> and <em>wall of terrain</em> focus powers as appropriate for his level.</Pair>
</Ability>
<Ability id="arc-occultist-geomancer-geomancy-su" extraClasses="hasSubs" icon={["broken-shield","spell-book"]}>
<Pair single id="arc-occultist-geomancer-geomancy-su">Geomancy (Su)</Pair>
<Pair hl title="Alters">Implements</Pair>
<Pair title="Ability">A geomancer learns one fewer implement school at 1st level. Instead, the spells that he knows are partially determined by the type of terrain he is currently in (and the level of spells he can cast). When he leaves a type of terrain, he loses knowledge of the spells that terrain grants and instead knows the spells granted by the new type of terrain he has entered. If a specific terrain falls into more than one category, the geomancer chooses which list of spells he receives when he enters the terrain. The spells at each spell level for the various types of terrain are listed below.</Pair>
</Ability>
<Ability id="arc-occultist-geomancer-cold-terrain" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-occultist-geomancer-cold-terrain">Cold Terrain</Pair>
<Pair plain title="1st"><Link to="/spell/frostbite">Frostbite</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/frigid_touch">Frigid touch</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/sleet_storm">Sleet storm</Link></Pair>
<Pair plain title="4th"><Link to="/spell/creeping_ice">Creeping ice</Link></Pair>
<Pair plain title="5th"><Link to="/spell/icy_prison">Icy prison</Link></Pair>
<Pair plain title="6th"><Link to="/spell/freezing_sphere">Freezing sphere</Link></Pair>
</Ability>
<Ability id="arc-occultist-geomancer-desert-terrain" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-occultist-geomancer-desert-terrain">Desert Terrain</Pair>
<Pair plain title="1st"><Link to="/spell/sun_metal">Sun metal</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/shifting_sand">Shifting sand</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/cup_of_dust">Cup of dust</Link></Pair>
<Pair plain title="4th"><Link to="/spell/fire_shield">Fire shield</Link></Pair>
<Pair plain title="5th"><Link to="/spell/flame_strike">Flame strike</Link></Pair>
<Pair plain title="6th"><Link to="/spell/sirocco">Sirocco</Link></Pair>
</Ability>
<Ability id="arc-occultist-geomancer-forest-terrain" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-occultist-geomancer-forest-terrain">Forest Terrain</Pair>
<Pair plain title="1st"><Link to="/spell/entangle">Entangle</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/tree_shape">Tree shape</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/speak_with_plants">Speak with plants</Link></Pair>
<Pair plain title="4th"><Link to="/spell/arboreal_hammer">Arboreal hammer</Link></Pair>
<Pair plain title="5th"><Link to="/spell/tree_stride">Tree stride</Link></Pair>
<Pair plain title="6th"><Link to="/spell/liveoak">Liveoak</Link></Pair>
</Ability>
<Ability id="arc-occultist-geomancer-jungle-terrain" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-occultist-geomancer-jungle-terrain">Jungle Terrain</Pair>
<Pair plain title="1st"><Link to="/spell/nauseating_dart">Nauseating dart</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/sickening_entanglement">Sickening entanglement</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/venomous_bolt">Venomous bolt</Link></Pair>
<Pair plain title="4th"><Link to="/spell/poison">Poison</Link></Pair>
<Pair plain title="5th"><Link to="/spell/snake_staff">Snake staff</Link></Pair>
<Pair plain title="6th"><Link to="/spell/swarm_skin">Swarm skin</Link></Pair>
</Ability>
<Ability id="arc-occultist-geomancer-mountain-terrain" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-occultist-geomancer-mountain-terrain">Mountain Terrain</Pair>
<Pair plain title="1st"><Link to="/spell/stone_fist">Stone fist</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/stone_call">Stone call</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/stone_shape">Stone shape</Link></Pair>
<Pair plain title="4th"><Link to="/spell/obsidian_flow">Obsidian flow</Link></Pair>
<Pair plain title="5th"><Link to="/spell/cave_fangs">Cave fangs</Link></Pair>
<Pair plain title="6th"><Link to="/spell/move_earth">Move earth</Link></Pair>
</Ability>
<Ability id="arc-occultist-geomancer-plains-terrain" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-occultist-geomancer-plains-terrain">Plains Terrain</Pair>
<Pair plain title="1st"><Link to="/spell/mount">Mount</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/gust_of_wind">Gust of wind</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/plant_growth">Plant growth</Link></Pair>
<Pair plain title="4th"><Link to="/spell/aspect_of_the_stag">Aspect of the stag</Link></Pair>
<Pair plain title="5th"><Link to="/spell/control_winds">Control winds</Link></Pair>
<Pair plain title="6th"><Link to="/spell/whip_of_ants">Whip of ants</Link></Pair>
</Ability>
<Ability id="arc-occultist-geomancer-planes-other-than-the-material-plane" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-occultist-geomancer-planes-other-than-the-material-plane">Planes (Other Than the Material Plane)</Pair>
<Pair plain title="1st"><Link to="/spell/endure_elements">Endure elements</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/rope_trick">Rope trick</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/blink">Blink</Link></Pair>
<Pair plain title="4th"><Link to="/spell/dimensional_anchor">Dimensional anchor</Link></Pair>
<Pair plain title="5th"><Link to="/spell/planar_adaptation">Planar adaptation</Link></Pair>
<Pair plain title="6th"><Link to="/spell/plane_shift">Plane shift</Link></Pair>
</Ability>
<Ability id="arc-occultist-geomancer-swamp-terrain" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-occultist-geomancer-swamp-terrain">Swamp Terrain</Pair>
<Pair plain title="1st"><Link to="/spell/mudball">Mudball</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/burst_of_nettles">Burst of nettles</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/lily_pad_stride">Lily pad stride</Link></Pair>
<Pair plain title="4th"><Link to="/spell/slowing_mud">Slowing mud</Link></Pair>
<Pair plain title="5th"><Link to="/spell/insect_plague">Insect plague</Link></Pair>
<Pair plain title="6th"><Link to="/spell/mass_fester">Mass fester</Link></Pair>
</Ability>
<Ability id="arc-occultist-geomancer-underground-terrain" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-occultist-geomancer-underground-terrain">Underground Terrain</Pair>
<Pair plain title="1st"><Link to="/spell/expeditious_excavation">Expeditious excavation</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/darkvision">Darkvision</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/meld_into_stone">Meld into stone</Link></Pair>
<Pair plain title="4th"><Link to="/spell/echolocation">Echolocation</Link></Pair>
<Pair plain title="5th"><Link to="/spell/suffocation">Suffocation</Link></Pair>
<Pair plain title="6th"><Link to="/spell/conjure_black_pudding">Conjure black pudding</Link></Pair>
</Ability>
<Ability id="arc-occultist-geomancer-urban-terrain" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-occultist-geomancer-urban-terrain">Urban Terrain</Pair>
<Pair plain title="1st"><Link to="/spell/urban_grace">Urban grace</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/share_language">Share language</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/urban_step">Urban step</Link></Pair>
<Pair plain title="4th"><Link to="/spell/zone_of_silence">Zone of silence</Link></Pair>
<Pair plain title="5th"><Link to="/spell/telepathic_bond">Telepathic bond</Link></Pair>
<Pair plain title="6th"><Link to="/spell/statue">Statue</Link></Pair>
</Ability>
<Ability id="arc-occultist-geomancer-water-terrain" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-occultist-geomancer-water-terrain">Water Terrain</Pair>
<Pair plain title="1st"><Link to="/spell/air_bubble">Air bubble</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/slipstream">Slipstream</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/water_breathing">Water breathing</Link></Pair>
<Pair plain title="4th"><Link to="/spell/fluid_form">Fluid form</Link></Pair>
<Pair plain title="5th"><Link to="/spell/geyser">Geyser</Link></Pair>
<Pair plain title="6th"><Link to="/spell/control_water">Control water</Link></Pair>
</Ability>
<Ability id="arc-occultist-geomancer-survivalist-su" icon={["upgrade"]}>
<Pair single id="arc-occultist-geomancer-survivalist-su">Survivalist (Su)</Pair>
<Pair hl title="Replaces">Magic item skill</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A geomancer gains a +1 bonus on Survival checks for every point of mental focus invested in the terrain (to a maximum equal to his occultist level).</Pair>
</Ability>
<Ability id="arc-occultist-geomancer-terrain-stride-su" icon={["upgrade"]}>
<Pair single id="arc-occultist-geomancer-terrain-stride-su">Terrain Stride (Su)</Pair>
<Pair hl title="Replaces">Aura sight</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Swift Action">A geomancer can expend 1 point of mental focus invested in the terrain to increase all of his movement speeds by 10 feet.</Pair>
<Pair title="At 5th Level">The geomancer can expend 2 points of mental focus invested in the terrain to instead increase all of his movement speeds by 20 feet.<sup><InnerLink showBacklink="backlink-arc-occultist-geomancer-fake-fn-1" id="arc-occultist-geomancer-fake-fn-1" data-hash-target to="arc-occultist-geomancer-fake-fn-1-target">1</InnerLink></sup> This affects only movement speeds he already has.</Pair>
</Ability>
<Ability id="arc-occultist-geomancer-dominion-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-occultist-geomancer-dominion-su">Dominion (Su)</Pair>
<Pair hl title="Replaces">7th-level focus power</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Standard Action">A geomancer can expend 1 or more points of mental focus invested in the terrain to infuse himself and each of his allies within 30 feet of him with the might of the land. Affected creatures gain a +1 morale bonus on attack rolls, damage rolls, and Fortitude saves for every point of mental focus expended. These bonuses last for 1 minute and can't exceed one-quarter the geomancer's occultist level.</Pair>
</Ability>
<Ability id="arc-occultist-geomancer-wall-of-terrain-sp" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-geomancer-wall-of-terrain-sp">Wall of Terrain (Sp)</Pair>
<Pair hl title="Replaces">13th-level focus power</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Standard Action">A geomancer can expend 3 points of mental focus invested in the terrain to fashion a solid wall of the surrounding terrain, no matter its actual composition. This functions as per <Link to="/spell/wall_of_stone">wall of stone</Link>, using the geomancer's occultist level as his caster level.</Pair>
<Pair title="Special">By expending an extra point of generic mental focus, he can increase the hardness of the wall to 10 and give it an extra 5 hit points per inch of thickness.</Pair>
</Ability>
<section data-footnotes><h3 id="arc-occultist-geomancer-label">Footnotes</h3><ol>
<li id="arc-occultist-geomancer-fake-fn-1-target"><p>The original source material lists both abilities as being 5th-level. It does not list how long the bonuses last, either. No errata has been printed. <InnerLink aria-label="Back to reference 1" id="backlink-arc-occultist-geomancer-fake-fn-1" data-hash-target to="arc-occultist-geomancer-fake-fn-1">↩</InnerLink></p></li>
</ol></section></>};
const _haunt_collector = {title: "Haunt Collector", jsx: <><h2 id="arc-occultist-haunt_collector-haunt-collector">Haunt Collector</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 62</Link><br/>Haunt collectors use items haunted by their former owners to create ghostly presences imbued with psychic power.</p>
<Ability id="arc-occultist-haunt_collector-possessed-possessions-su" icon={["stairs-goal"]}>
<Pair single id="arc-occultist-haunt_collector-possessed-possessions-su">Possessed Possessions (Su)</Pair>
<Pair hl title="Alters">Implements</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Choice">When the haunt collector chooses an implement school he doesn't already know, instead of using implements as normal for that school, he can gain access to a haunted implement - a powerful, spirit-possessed item collected during his travels.</Pair>
<Pair title="Ability">When he selects a haunted implement, he forsakes the resonant power from the item's implement group and instead selects a spirit from the <Link to="/class/medium">medium's</Link> list of <Link to="/ability/spirits">spirits</Link>, gaining that spirit's <em>seance boon</em> in place of the resonant power. Once the spirit type is selected for an implement, it cannot be changed.</Pair>
<Pair title="Swift Action">He can also call upon the implement's haunting entity to temporarily gain bonuses on all checks associated with the selected legendary spirit's spirit bonus for 1 round. This spirit bonus is equal to 1/2 the amount of mental focus invested in the implement, to a maximum bonus of 1 + <Link to="/misc/one_fourth">one-fourth</Link> of his occultist level. He can call upon this spirit bonus a number of times per day equal to the amount of mental focus invested in the implement, though invoking it doesn't expend any mental focus.</Pair>
<Pair title="At 6th Level">The haunt collector may either learn a new implement school or a choose a new haunted implement.</Pair>
<Pair title="At 10th Level">The haunt collector may either learn a new implement school or a choose a new haunted implement.</Pair>
<Pair title="At 14th Level">The haunt collector may either learn a new implement school or a choose a new haunted implement.</Pair>
<Pair title="At 18th Level">The haunt collector may either learn a new implement school or a choose a new haunted implement.</Pair>
</Ability>
<Ability id="arc-occultist-haunt_collector-hauntist-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-occultist-haunt_collector-hauntist-su">Hauntist (Su)</Pair>
<Pair hl title="Replaces">Aura sight</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A haunt collector with at least one haunted implement gains the medium's <em>haunt channeler</em> class feature, with an effective medium level equal to his occultist level - 2.</Pair>
</Ability>
<Ability id="arc-occultist-haunt_collector-haunt-channeler-su" extraClasses="subAbility" icon={["upgrade","mailed-fist"]}>
<Pair single id="arc-occultist-haunt_collector-haunt-channeler-su" flavor="Text from the medium class">Haunt Channeler (Su)</Pair>
<Pair title="Passive Ability">You can always act on the surprise round against a haunt.</Pair>
<Pair title="Ability">Your touch funnels a portion of the haunt into yourself, dealing 1d6 points of damage to the haunt per 2 medium levels you possess as if via positive energy and allowing you to ask the haunt a single question. The haunt can answer the question however it chooses. Additionally, you can forgo your saving throw against a haunt's effects to funnel the haunt entirely into yourself. If you do so, you suffer the haunt's full effect, but the haunt doesn't affect anyone else (even if it normally would). The haunt then gains control of your body for 24 hours. Once per minute, you can attempt to end this possession early by succeeding at a Will save (DC = 20 + 1/2 your medium level).</Pair>
</Ability>
<Ability id="arc-occultist-haunt_collector-spirit-speaker-sp" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-haunt_collector-spirit-speaker-sp">Spirit Speaker (Sp)</Pair>
<Pair hl title="Replaces">Outside contact</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A haunt collector with at least one haunted implement can commune with the spirits once per day. By holding a seance for 10 minutes, he can ask questions of a destroyed undead or a neutralized or destroyed haunt. To use this ability on a corporeal undead, the haunt collector must have the creature's head in his possession. For a haunt or incorporeal undead, this seance must be held in the haunt's location or where the incorporeal undead was destroyed. Treat this ability as <Link to="/spell/speak_with_haunt">speak with haunt</Link> or as <Link to="/spell/speak_with_dead">speak with dead</Link> (but affecting only destroyed undead rather than only corpses), using the haunt collector's occultist level as the caster level.</Pair>
<Pair title="At 12th Level">He can use this ability twice a day.</Pair>
<Pair title="At 16th Level">He may use this ability three times a day.</Pair>
</Ability>
<Ability id="arc-occultist-haunt_collector-extricate-haunt-su" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-haunt_collector-extricate-haunt-su">Extricate Haunt (Su)</Pair>
<Pair hl title="Replaces">Magic circles, binding circles, fast circles</Pair>
<Pair title="Usage">1 + Intelligence modifier times/day</Pair>
<Pair title="Ability"><p>The haunt collector can temporarily exorcise his haunted implements' possessing entities to spontaneously create phenomena similar to <Link to="/rule/haunts">haunts</Link> and imbue them with spells the occultist knows. As a <strong className="hl">full-round action</strong> that provokes attacks of opportunity, the haunt collector expends 1 point of mental focus to extricate an implement's spirit and infuse an adjacent square with its ghostly presence while granting it the power to deliver a spell from the implement's associated school (whose range is touch or greater) on the haunt collector's behalf. This action consumes the spell just as if it had been cast, but the energy is held in check by the created haunt until triggered by conditions set forth by the haunt collector. The conditions needed to trigger the haunt's spell effect must be clear, although they can be general, using the guidelines of the <Link to="/spell/magic_mouth">magic mouth</Link> spell. The haunt is stationary, and once the conditions for the trigger are met, the spell is discharged normally, though it now originates from the haunt's square.</p>
<p>The haunt itself is an invisible, incorporeal, spectral force, similar to a stationary <Link to="/spell/unseen_servant">unseen servant</Link> with an undead aura for the purposes of spells such as <Link to="/spell/detect_undead">detect undead</Link>. It has a number of hit points equal to the double the level of the spell used to create it + the occultist's Intelligence modifier. If triggered during the same combat it is created, the haunt acts at initiative count 10; otherwise, when the trigger occurs, the haunt initiates combat and acts at initiative count 10 on the surprise round. Other creatures must succeed at a Perception check (DC = 10 + the haunt collector's occultist level) to act in the surprise round. The haunt can be damaged by positive energy and anything else that can harm haunts, and if destroyed before it is triggered, it dissipates harmlessly. If the haunt is destroyed, it does not reform in its haunted implement until the occultist next invests his implements with mental focus. If the haunt doesn't trigger before the occultist next invests his implements with mental focus, the haunt dissolves at that point and reforms in its haunted implement.</p>
</Pair>
<Pair title="At 12th Level">The haunt collector can create a free-roaming haunt by expending an additional point of mental focus, granting it a fly speed of 10 feet with good maneuverability, which allows it to change locations or seek targets, under the restrictions for trigger conditions as outlined above. If the haunt wanders beyond <Link to="/rule/range">medium range</Link> (measured from the haunt collector's current position), it is instantly destroyed.</Pair>
<Pair title="At 16th Level">The haunt collector can extricate an implement's spirit as a <strong className="hl">standard action</strong>.</Pair>
<Pair title="Special">While a haunting presence is extricated from its implement, the haunt collector does not receive the benefit of the implement's <em>seance boon,</em> nor can he call upon the implement's spirit bonus or use its focus powers, though he can still cast spells associated with the implement without penalty. If the spell is discharged successfully (rather than the haunt being destroyed), the spirit's presence returns to the haunt collector's implement the following round, and the <em>seance boon</em> and spirit bonus abilities are again available to the haunt collector.</Pair>
</Ability>
</>};
const _naturalist = {title: "Naturalist", jsx: <><h2 id="arc-occultist-naturalist-naturalist">Naturalist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 66</Link><br/>A naturalist eschews the contact with outsiders that other occultists use as the core of their work. Instead, he attunes his mind to the natural spirits that exist everywhere, just out of sight for the unawakened mind.</p>
<Ability icon={["skills"]} id="arc-occultist-naturalist-undefined">
<Pair id="arc-occultist-naturalist-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (planes)</Pair></Ability>
<Ability id="arc-occultist-naturalist-natural-focus-su" icon={["upgrade","hazard-sign"]}>
<Pair single id="arc-occultist-naturalist-natural-focus-su" flavor="A naturalist can always hear the spirits of nature whispering in his ears, and sometimes those whispers contain helpful advice.">Natural Focus (Su)</Pair>
<Pair hl title="Replaces">Magic circles, fast circles</Pair>
<Pair hl title="Alters">Mental focus</Pair>
<Pair title="Free Action">A naturalist can expend 1 point of generic mental focus before rolling an ability check, saving throw, or skill check to add 1d6 to the result. The naturalist must be conscious and aware to use this ability, and he can use this ability at most once per round.</Pair>
<Pair title="At 8th Level">The naturalist's natural focus die increases to 1d8.</Pair>
<Pair title="At 16th Level">It increases to 1d10.</Pair>
<Pair title="Special">This ability doesn't function while the naturalist is wearing metal armor or using a metal shield (although he can wear a suit of armor or use a shield altered by the <Link to="/spell/ironwood">ironwood</Link> spell). This restriction is similar to the <Link to="/class/druid">druid's</Link> armor restriction.</Pair>
</Ability>
<Ability id="arc-occultist-naturalist-tree-talker-sp" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-naturalist-tree-talker-sp">Tree Talker (Sp)</Pair>
<Pair hl title="Replaces">Outside contact</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A naturalist can cast <Link to="/spell/speak_with_plants">speak with plants</Link> three times per day as a spell-like ability with a caster level equal to his occultist level. In addition, when the naturalist uses this power, he can whisper a message of 25 or fewer words to the surrounding plant life and designate a creature with which he is familiar. The next time that creature is on the same plane of existence and in an area of similar vegetation, it receives the message.</Pair>
</Ability>
<Ability id="arc-occultist-naturalist-reflect-on-the-land-sp" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-naturalist-reflect-on-the-land-sp">Reflect on the Land (Sp)</Pair>
<Pair hl title="Replaces">Binding circles</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">A naturalist can cast <Link to="/spell/commune_with_nature">commune with nature</Link> once per day as a spell-like ability with a caster level equal to his occultist level.</Pair>
</Ability>
</>};
const _necroccultist = {title: "Necroccultist", jsx: <><h2 id="arc-occultist-necroccultist-necroccultist">Necroccultist</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 100</Link><br/>Necroccultists' fascination with death and the undead drives them to explore the forbidden necromantic arts as they search for secrets they can use to manipulate the natural cycle of life and death. They contact and learn from the dead, rather than from items or outsiders, allowing them to drain the life of their foes to feed their own power, and even call forth phantasmal hordes of spirits to destroy their enemies.</p>
<Ability id="arc-occultist-necroccultist-necromantic-bond-su" icon={["broken-shield","spell-book","upgrade"]}>
<Pair single id="arc-occultist-necroccultist-necromantic-bond-su">Necromantic Bond (Su)</Pair>
<Pair hl title="Alters">Implements, implement mastery</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Info">A necroccultist gains access to only the <Link to="/implement/necromancy">necromancy</Link> school of implements. He must select necromancy for his <em>implement mastery.</em></Pair>
<Pair title="Ability">Each time he gains an occultist level, a necroccultist can add one necromancy spell from the <Link to="/main/wizard_spell">wizard spell list</Link> to his occultist spell list and his list of spells known. The necroccultist can't choose a spell of a higher level than he is able to cast, and he adds the spell at the same spell level it appears on the wizard spell list.</Pair>
<Pair title="At 14th Level">He doesn't gain an additional school of implements. Instead, the DCs of saving throws to resist a necroccultist's necromancy spells and necromancy focus powers increase by 2.</Pair>
</Ability>
<Ability id="arc-occultist-necroccultist-deadspeaker-su" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-necroccultist-deadspeaker-su">Deadspeaker (Su)</Pair>
<Pair hl title="Replaces">Object reading</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 time/day per two occultist levels<ByLevelPop levels={[[2,1],[4,2],[6,3],[8,4],[10,5],[12,6],[14,7],[16,8],[18,9],[20,10]]} unit="time" postText="/day" /></Pair>
<Pair title="Full-Round Action">A necroccultist can learn the answers to a specific set of questions concerning a dead or undead creature. The necroccultist must consume at least one drop of the creature's blood, a small portion of its flesh, or a fragment of one of its bones as a part of this action. This ability otherwise functions as <Link to="/spell/blood_biography">blood biography</Link>, using the necroccultist's occultist level as his caster level.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>Yes</Pair>
</Ability>
<Ability id="arc-occultist-necroccultist-ghostly-horde-su" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-necroccultist-ghostly-horde-su">Ghostly Horde (Su)</Pair>
<Pair hl title="Replaces">Aura sight</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 time/day per five occultist levels<ByLevelPop levels={[[5,1],[10,2],[15,3],[20,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">A necroccultist can spend 1 point of mental focus from a necromancy implement to summon a mob of ghostly spirits to harass his enemies. The ghostly horde appears within 60 feet of the necroccultist, fills an area 20 feet in diameter, and always hovers a few inches off the ground (thus ignoring any <Link to="/rule/difficult_terrain">difficult terrain</Link>). The necroccultist can command the ghostly horde to move up to 30 feet each round as a <strong className="hl">move action</strong>, though the farthest edge of the ghostly horde can never be more than 60 feet from the necroccultist. Any creature caught inside the ghostly horde takes 1d6 points of damage per 2 occultist levels at the start of its turn (up to a maximum of 10d6 points of damage at 20th level). A successful Fortitude save (DC = 10 + 1/2 the necroccultist's occultist level + the necroccultist's Intelligence modifier) halves this damage. This damage is not negative energy - it manifests in the form of physical wounds and aches as if from supernatural aging. Nonliving creatures and creatures immune to magical aging are immune to this damage, but otherwise the damage bypasses all forms of damage reduction.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
<Pair title="Special">The ghostly horde remains for 1 round, though at the beginning of his turn, the necroccultist can expend 1 point of mental focus as a <strong className="hl">swift action</strong> to extend the duration for 1 additional round.</Pair>
</Ability>
<Ability id="arc-occultist-necroccultist-life-drain-sp" icon={["smoking-finger","heart-plus"]}>
<Pair single id="arc-occultist-necroccultist-life-drain-sp">Life Drain (Sp)</Pair>
<Pair hl title="Replaces">Outside contact</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 time/day + 1 per three occultist levels beyond 8th<ByLevelPop levels={[[8,1],[11,2],[14,3],[17,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A necroccultist can expend 1 point of mental focus from a necromancy implement to unleash a life-draining ray as a ranged touch attack that causes the target to accrue 1d4 <Link to="/rule/negative_levels">negative levels</Link>. The ray has a range of 60 feet. The negative levels last a number of minutes equal to the necroccultist's occultist level.</Pair>
<Pair title="Special">For each negative level this attack gives a target, the necroccultist regains a number of hit points equal to his occultist level.</Pair>
</Ability>
</>};
const _occult_historian = {title: "Occult Historian", jsx: <><h2 id="arc-occultist-occult_historian-occult-historian">Occult Historian</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 67</Link><br/>Many wilderness areas contain the remnants of ancient civilizations, with some waiting to be discovered and some held by fierce monsters or devious cults. An occult historian seeks these ruins not only for their esoteric artifacts but also to learn the structures' secrets.</p>
<Ability id="arc-occultist-occult_historian-ruin-reading-su" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-occult_historian-ruin-reading-su">Ruin Reading (Su)</Pair>
<Pair hl title="Replaces">Object reading, aura sight</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 time/day + 1 per four occultist levels beyond 2nd<ByLevelPop levels={[[2,1],[6,2],[10,3],[14,4],[18,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">An occult historian can glean secrets from ruined structures. She must spend 1 minute examining and touching part of the structure (such as a wall or a doorframe). At the end of the minute, the occult historian attempts a Knowledge (history) check. If the ruin has been claimed as a lair for a creature, the DC of this check is equal to 10 + the CR of the most powerful creature in the ruin. If the ruin holds a magic item (or multiple magic items), the DC of this check is equal to 11 + the highest caster level of all the magic items in the ruin. If the occult historian succeeds at the check, she learns the layout of the area of the ruin within 30 feet of her (including any secret doors), as well as a piece of information about the structure's history (as determined by the GM).</Pair>
<Pair title="At 5th Level">The occult historian can see into a ruin's past. This reveals the same information that can be gathered with the spell <Link to="/spell/retrocognition">retrocognition</Link>, except the occult historian can use it only in ruins. If the occult historian succeeds at the check outlined above, she sees the events that occurred in the ruin over the past hour; for each minute she concentrates, she can see 1 additional hour into the ruin's past. If the result of her check exceeds the DC by 5 or more, she can see the events that occurred over the past week, plus for 1 additional week per minute she concentrates. If the result of her check exceeds the DC by 10 or more, she can see the events of the past year, plus for 1 additional year per minute she concentrates. If the result of her check exceeds the DC by 20 or more, she can see the events of the past century, plus for 1 additional century per minute she concentrates.</Pair>
</Ability>
<Ability id="arc-occultist-occult_historian-trap-sense-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-occultist-occult_historian-trap-sense-ex">Trap Sense (Ex)</Pair>
<Pair hl title="Replaces">3rd-level focus power</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">An occult historian gains <Link to="/ability/trap_sense">trap sense</Link>, as per the rogue class feature of the same name, giving her a bonus on Reflex saves made to avoid traps and a dodge bonus to AC against attacks made by traps. This bonus is equal to <Link to="/misc/one_third">one-third</Link> of her occultist level.</Pair>
</Ability>
<Ability id="arc-occultist-occult_historian-crumbling-strike-su" icon={["mailed-fist"]}>
<Pair single id="arc-occultist-occult_historian-crumbling-strike-su" flavor="An occult historian can channel the erosion of countless ages into a single melee strike.">Crumbling Strike (Su)</Pair>
<Pair hl title="Replaces">Outside contact 2, 3, and 4</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four occultist levels beyond 12th<ByLevelPop levels={[[12,1],[16,2],[20,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">The occult historian can make a melee attack against a single target at her highest base attack bonus. If she hits, she deals 2d6 points of damage per occultist level she has (maximum 40d6). If the target succeeds at a Fortitude save (the save DC is equal to 10 + half the occult historian's occultist level + her Intelligence modifier), it takes only 5d6 points of damage. A creature slain by this attack crumbles to dust.</Pair>
</Ability>
</>};
const _panoply_savant = {title: "Panoply Savant", jsx: <><h2 id="arc-occultist-panoply_savant-panoply-savant">Panoply Savant</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 28</Link><br/>Some occultists specialize in a particular panoply, fully dedicating themselves to mastering the secrets of the psychic resonance of each of its component implements, as well as the way they interact with one another.</p>
<Ability id="arc-occultist-panoply_savant-panoply-specialization" icon={["broken-shield"]}>
<Pair single id="arc-occultist-panoply_savant-panoply-specialization">Panoply Specialization</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">The panoply savant must choose (but doesn't learn how to use) a single <Link to="/ability/implements">panoply</Link>. When learning new implement schools, he must choose either schools associated with his chosen panoply or the chosen panoply itself. Once he has learned to use the chosen panoply, he can learn any further implement schools freely.</Pair>
</Ability>
<Ability id="arc-occultist-panoply_savant-panoply-focus-su" icon={["upgrade"]}>
<Pair single id="arc-occultist-panoply_savant-panoply-focus-su">Panoply Focus (Su)</Pair>
<Pair hl title="Replaces">Shift focus</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A panoply savant gains additional points of mental focus each day, which can be invested only in implements associated with his chosen panoply. The amount of additional points is equal to <Link to="/misc/one_fourth">one-fourth</Link> of his occultist level.</Pair>
</Ability>
<Ability id="arc-occultist-panoply_savant-implement-specialist-su" icon={["upgrade"]}>
<Pair single id="arc-occultist-panoply_savant-implement-specialist-su" flavor="A panoply savant learns to use his mastery over the implements in his chosen panoply to unlock greater power from magic items associated with that panoply.">Implement Specialist (Su)</Pair>
<Pair hl title="Replaces">Outside contact</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">3 + Intelligence modifier times/day</Pair>
<Pair title="Ability">When he uses a magic item that matches one of his chosen panoply's associated implements (crystal balls, robes, and wands for the <Link to="/implement/mages_paraphernalia">mage's paraphernalia</Link>, for instance) and produces a spell effect, he can have the item use his caster level instead of its own. If the magic item doesn't produce a spell effect, the panoply savant can use his caster level against attempts to <Link to="/spell/dispel">dispel</Link> that item.</Pair>
<Pair title="Special">Additionally, if the item has any abilities that can be used at least three times per day or has three or more daily charges, the panoply savant can spend 1 minute quietly meditating on the item and expend 2 points of mental focus to restore one daily use or one charge to the item.</Pair>
</Ability>
<Ability id="arc-occultist-panoply_savant-panoptic-harmony-su" icon={["upgrade"]}>
<Pair single id="arc-occultist-panoply_savant-panoptic-harmony-su" flavor="A panoply savant can empower his abilities by harnessing the harmonic resonance between his chosen panoply's associated implements.">Panoptic Harmony (Su)</Pair>
<Pair hl title="Replaces">Magic circles</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">Whenever he casts a spell or uses a focus power with one of his chosen panoply's associated implements, he treats it as though his caster level were 2 higher than it actually is, but only if on his previous turn, he cast a spell with or used a focus power from a different one of his chosen panoply's associated implements.</Pair>
</Ability>
<Ability id="arc-occultist-panoply_savant-panoptic-call-su" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-panoply_savant-panoptic-call-su" flavor="A panoply savant's mastery over his chosen panoply's associated implements is so strong that he can call similar items to him.">Panoptic Call (Su)</Pair>
<Pair hl title="Replaces">Binding circles</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Standard Action">By expending 1 point of mental focus from any of his chosen panoply's associated implements, he can cause a single item he can currently see that matches one of his chosen panoply's associated implements (such as a weapon or shield for the <Link to="/implement/trappings_of_the_warrior">trappings of the warrior</Link>) to fly through the air toward him at a rate of 30 feet per round, landing in his outstretched hand. If the item is unattended, the panoply savant automatically succeeds, but if it is held or worn, he must attempt a special <Link to="/rule/disarm">disarm</Link> or <Link to="/rule/steal">steal</Link> combat maneuver check, using his occultist level as his base attack bonus and his Intelligence modifier in place of his Strength modifier.</Pair>
<Pair title="Special">If the item in question is an implement he currently has 1 or more points of focus invested in, he gains a bonus on this combat maneuver check equal to twice the amount of focus currently invested in it.</Pair>
</Ability>
<Ability id="arc-occultist-panoply_savant-combined-powers-su" icon={["stairs-goal"]}>
<Pair single id="arc-occultist-panoply_savant-combined-powers-su">Combined Powers (Su)</Pair>
<Pair hl title="Replaces">Fast circles</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">Whenever a panoply savant uses a focus power from one of his chosen panoply's associated implements, he can expend 2 additional points of mental focus to also use a focus power from one of his chosen panoply's other associated implements as part of the same action. The second focus power must take the same amount of time or less to activate than the first focus power, and the panoply savant must expend the normal mental focus cost to use the second focus power.</Pair>
</Ability>
</>};
const _planar_harmonizer = {title: "Planar Harmonizer", jsx: <><h2 id="arc-occultist-planar_harmonizer-planar-harmonizer">Planar Harmonizer</h2>
<p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 7</Link><br/>Tuning forks resonate with the music of the planes, guiding travelers between worlds. Planar harmonizers are masters of this symphony, forging bonds with tuning forks to unlock the true potential of these instruments. Planar harmonizers typically select their tuning forks carefully, choosing planes that resonate best with particular schools of magic.</p>
<Ability id="arc-occultist-planar_harmonizer-conductor-su" icon={["broken-shield","spell-book","upgrade"]}>
<Pair single id="arc-occultist-planar_harmonizer-conductor-su">Conductor (Su)</Pair>
<Pair hl title="Alters">Implements, implement mastery</Pair>
<Pair title="Info">A planar harmonizer gains access to only the <Link to="/implement/conjuration">conjuration</Link> school of implements, gaining a <Link to="/rule/common_tuning_fork">common tuning fork</Link> as her implement. She must select conjuration for her <em>implement mastery.</em></Pair>
<Pair title="Ability">Each time she gains an occultist level, a planar harmonizer can add one conjuration spell from the <Link to="/main/wizard_spell">wizard spell list</Link> to her occultist spell list and her list of spells known. The planar harmonizer can't choose a spell of a higher level than she is able to cast, and she adds the spell at the same spell level it appears on the wizard spell list.</Pair>
<Pair title="At 10th Level">She adds <Link to="/spell/plane_shift">plane shift</Link> to her list as a 5th-level occultist spell.</Pair>
<Pair title="At 14th Level">She doesn't gain an additional school of implements. Instead, the DCs of saving throws to resist a planar harmonizer's conjuration spells and conjuration focus powers increase by 2.</Pair>
<Pair title="Special">All future implements that a planar harmonizer gains are common tuning forks.</Pair>
</Ability>
<Ability id="arc-occultist-planar_harmonizer-planar-scholar-su" icon={["upgrade"]}>
<Pair single id="arc-occultist-planar_harmonizer-planar-scholar-su" flavor="A planar harmonizer deepens her knowledge about other worlds.">Planar Scholar (Su)</Pair>
<Pair hl title="Replaces">Magic item skill</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">She gains a bonus on Knowledge (planes) checks equal to half her occultist level.</Pair>
</Ability>
<Ability id="arc-occultist-planar_harmonizer-harmonic-shield-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-occultist-planar_harmonizer-harmonic-shield-su" flavor="A planar harmonizer learns to cloak herself in the essence of her home plane.">Harmonic Shield (Su)</Pair>
<Pair hl title="Replaces">Shift focus, 7th-level focus power</Pair>
<Pair title="At 4th Level">She doesn't take penalties on Intelligence-, Wisdom-, or Charisma-based checks for being on a plane whose alignment traits clash with her own alignment.</Pair>
<Pair title="At 7th Level">She can expend 1 point of mental focus to gain the benefits of <Link to="/spell/planar_adaptation">planar adaptation</Link> for 1 minute per occultist level.</Pair>
<Pair title="At 11th Level">The duration of this protection extends to 1 hour per occultist level.</Pair>
</Ability>
<Ability id="arc-occultist-planar_harmonizer-outside-messenger-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-occultist-planar_harmonizer-outside-messenger-su">Outside Messenger (Su)</Pair>
<Pair hl title="Replaces">Aura sight, 5th-level focus power</Pair>
<Pair hl title="Alters">Magic circles</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A planar harmonizer gains the <em>magic circles</em> class feature. Whenever she creates a <em>magic circle,</em> she can expend 1 additional point of mental focus (either generic focus or focus from any one of her implements) to focus the circle inward and lure that outsider to the circle (similar to using <Link to="/spell/lesser_planar_binding">lesser planar binding</Link>). This functions as the <em>outside contact</em> occultist ability, except the information gained can be anything that might be learned through an <Link to="/spell/augury">augury</Link> spell.</Pair>
</Ability>
</>};
const _psychodermist = {title: "Psychodermist", jsx: <><h2 id="arc-occultist-psychodermist-psychodermist">Psychodermist</h2>
<p><strong>Sources</strong> <Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook pg. 25</Link><br/>Rather than tapping the psychic energy residing within esoteric items, psychodermists form supernatural bonds with trophies taken from creatures they have slain. Through these mementos, these occultists manifest not only their own magic, but also the unique powers of their fallen foes.</p>
<Ability icon={["skills"]} id="arc-occultist-psychodermist-undefined">
<Pair id="arc-occultist-psychodermist-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/heal">Heal</Link> (WIS), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Disable Device, Knowledge (engineering), Knowledge (history), Sleight of Hand</Pair></Ability>
<Ability id="arc-occultist-psychodermist-trophies-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-occultist-psychodermist-trophies-su" flavor="A psychodermist learns how to siphon power from pieces of creatures he has slain.">Trophies (Su)</Pair>
<Pair hl title="Alters">Implements</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">The psychodermist gains <Link to="/feat/harvest_parts">Harvest Parts</Link> as a bonus feat, and he can select one monster part per implement school he knows to become a permanently preserved trophy so long as it remains in his possession. Each trophy functions as the psychodermist's implement for its associated implement school. A trophy that fits multiple implement categories, such as a hand with clawed fingers, can function for only one implement school at a time.</Pair>
<Pair title="Info">A trophy can be integrated into another item, such as an ornament or a magic item, but otherwise does not take up a magic item slot, even when worn. A psychodermist can replace trophies with new ones harvested from slain foes, although doing so causes the old trophies to rot at their normal rate. In order to craft a trophy, the psychodermist must have been present during the creature's death.</Pair>
<Pair title="Special">Psychodermists use the following monster parts for each implement school.</Pair>
</Ability>
<Ability id="arc-occultist-psychodermist-abjuration" extraClasses="subAbility" icon={["info"]}>
<Pair single id="arc-occultist-psychodermist-abjuration">Abjuration</Pair>
<Pair title="Info">Chitin, hides, scales, and other natural armor.</Pair>
</Ability>
<Ability id="arc-occultist-psychodermist-conjuration" extraClasses="subAbility" icon={["info"]}>
<Pair single id="arc-occultist-psychodermist-conjuration">Conjuration</Pair>
<Pair title="Info">Gizzards, glands, hearts, livers, and other internal organs.</Pair>
</Ability>
<Ability id="arc-occultist-psychodermist-divination" extraClasses="subAbility" icon={["info"]}>
<Pair single id="arc-occultist-psychodermist-divination">Divination</Pair>
<Pair title="Info">Ears, eyes, tongues, and other sensory organs.</Pair>
</Ability>
<Ability id="arc-occultist-psychodermist-enchantment" extraClasses="subAbility" icon={["info"]}>
<Pair single id="arc-occultist-psychodermist-enchantment">Enchantment</Pair>
<Pair title="Info">Feathers, fur, hair, spines, and other decorative features.</Pair>
</Ability>
<Ability id="arc-occultist-psychodermist-evocation" extraClasses="subAbility" icon={["info"]}>
<Pair single id="arc-occultist-psychodermist-evocation">Evocation</Pair>
<Pair title="Info">Claws, fangs, horns, and other natural weapons.</Pair>
</Ability>
<Ability id="arc-occultist-psychodermist-illusion" extraClasses="subAbility" icon={["info"]}>
<Pair single id="arc-occultist-psychodermist-illusion">Illusion</Pair>
<Pair title="Info">Fingers, tendrils, toes, and other prehensile digits.</Pair>
</Ability>
<Ability id="arc-occultist-psychodermist-necromancy" extraClasses="subAbility" icon={["info"]}>
<Pair single id="arc-occultist-psychodermist-necromancy">Necromancy</Pair>
<Pair title="Info">Bones, bile, and life-sustaining fluids, such as blood.</Pair>
</Ability>
<Ability id="arc-occultist-psychodermist-transmutation" extraClasses="subAbility" icon={["info"]}>
<Pair single id="arc-occultist-psychodermist-transmutation">Transmutation</Pair>
<Pair title="Info">Feet, hands, paws, wings, and other appendages tied to locomotion.</Pair>
</Ability>
<Ability id="arc-occultist-psychodermist-monster-hunting-lore-ex" icon={["upgrade"]}>
<Pair single id="arc-occultist-psychodermist-monster-hunting-lore-ex">Monster Hunting Lore (Ex)</Pair>
<Pair hl title="Replaces">Magic item skill</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A psychodermist gains a bonus equal to half his occultist level on skill checks made to craft trophies and Knowledge checks made to identify the abilities and weaknesses of creatures.</Pair>
</Ability>
<Ability id="arc-occultist-psychodermist-discern-death-su" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-psychodermist-discern-death-su">Discern Death (Su)</Pair>
<Pair hl title="Replaces">Object reading</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 time/day + 1 per three occultist levels beyond 2nd<ByLevelPop levels={[[2,1],[5,2],[8,3],[11,4],[14,5],[17,6],[20,7]]} unit="time" postText="/day" /></Pair>
<Pair title="Full-Round Action">A psychodermist can glean information from a creature's corpse. The psychodermist must study at least one drop of the creature's blood, a small portion of its flesh, or a fragment of one of its bones as a part of this action. This ability otherwise functions as <Link to="/spell/blood_biography">blood biography</Link>, using the psychodermist's occultist level as his caster level.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>Yes</Pair>
</Ability>
<Ability id="arc-occultist-psychodermist-seek-prey-su" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-psychodermist-seek-prey-su">Seek Prey (Su)</Pair>
<Pair hl title="Replaces">Aura sight</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">A psychodermist can supernaturally detect creatures around him. This functions as the spell <Link to="/spell/aura_sight">aura sight</Link>, except the duration is 1 round and the psychodermist learns the locations and power of all auras of a specific creature type, similar to <Link to="/spell/detect_undead">detect undead</Link> except the psychodermist can choose any creature type represented among the trophies he has selected for that day.</Pair>
</Ability>
<Ability id="arc-occultist-psychodermist-residual-hatred-su" icon={["upgrade"]}>
<Pair single id="arc-occultist-psychodermist-residual-hatred-su" flavor="A psychodermist can tap into the psychic death throes of the monsters his trophies are derived from, increasing his efficiency at slaying similar beasts.">Residual Hatred (Su)</Pair>
<Pair hl title="Replaces">Outside contact</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">The psychodermist can spend mental focus invested in a trophy to gain the ranger's <Link to="/ability/favored_enemy">favored enemy</Link> class feature against the kind of creature from which the trophy was crafted. The favored enemy bonus is +2, and it applies against the specific creature variety, not the creature type; a psychodermist could use a red dragon scale trophy to gain favored enemy (red dragon), but not favored enemy (dragon).</Pair>
<Pair title="At 10th Level">Each point of mental focus spent grants a cumulative +2 favored enemy bonus, with a maximum bonus of +4.</Pair>
<Pair title="At 15th Level">The maximum bonus becomes +3.</Pair>
<Pair title="At 20th Level">The maximum bonus increases to +4.</Pair>
<Pair title="Special">This benefit lasts until the psychodermist regains his mental focus.</Pair>
</Ability>
<Ability id="arc-occultist-psychodermist-manifest-abilities-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-occultist-psychodermist-manifest-abilities-su" flavor="A psychodermist can use the latent energy within his trophies to replicate his victims' special abilities.">Manifest Abilities (Su)</Pair>
<Pair hl title="Replaces">Binding circles, fast circles</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Standard Action">He can spend 1 point of mental focus invested in a trophy to gain one of that creature's special abilities that could be granted by the spell <Link to="/spell/monstrous_physique_iii">monstrous physique III</Link>.</Pair>
<Pair title="Ability">Alternatively, he can spend 1 point of mental focus as a <strong className="hl">standard action</strong> to add any two of the creature's spell-like abilities to his list of spells known. To determine the spell's level for this ability, use the level as it appears on the spell list for an <Link to="/main/spells_occultist">occultist</Link>, wizard, or <Link to="/main/spells_cleric">cleric</Link>, in that order; if it appears on none of those lists, use the spell's highest spell level. (For example, <Link to="/spell/lesser_restoration">lesser restoration</Link> would be a 2nd-level spell, despite appearing on the paladin's 1st-level list.)</Pair>
<Pair title="Ability">He can instead spend 2 points of mental focus to activate either ability as a <strong className="hl">move action</strong>, or 3 points to activate it as a <strong className="hl">swift action</strong>.</Pair>
<Pair title="At 16th Level">The psychodermist adds abilities offered by <Link to="/spell/monstrous_physique_iv">monstrous physique IV</Link> to the options he can select using the first ability.</Pair>
<Pair title="Special">Both uses of this ability last for 1 minute per psychodermist level. The saving throw DC for creature special abilities is equal to 10 + half the psychodermist's level + his Intelligence modifier.</Pair>
</Ability>
</>};
const _reliquarian = {title: "Reliquarian", jsx: <><h2 id="arc-occultist-reliquarian-reliquarian">Reliquarian</h2>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 14</Link><br/>Not all occultists derive their power from psychic impressions left on objects. Some find faith first, and draw out the divine potential in religious relics. Many see these religious scholars as eccentrics or heretics who pilfer holy magic with their bizarre rituals.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-occultist-reliquarian--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Must worship a deity, and must be within one step of her deity's alignment, along either the law/chaos axis or the good/evil axis.</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-occultist-reliquarian-faithful" icon={["stairs-goal"]}>
<Pair single id="arc-occultist-reliquarian-faithful">Faithful</Pair>
<Pair title="Info">A reliquarian is proficient with her deity's favored weapon in addition to her normal weapon and armor proficiencies.</Pair>
</Ability>
<Ability id="arc-occultist-reliquarian-spells" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-reliquarian-spells">Spells</Pair>
<Pair hl title="Alters">Spells</Pair>
<Pair title="Info">A reliquarian's spells are considered divine spells, not psychic spells. The reliquarian's spells use verbal components instead of thought components, and somatic components instead of emotional components, and she uses a <em>sacred implement</em> (see below) as a divine focus.</Pair>
</Ability>
<Ability id="arc-occultist-reliquarian-domain" icon={["magic-swirl","spell-book"]}>
<Pair single id="arc-occultist-reliquarian-domain">Domain</Pair>
<Pair title="Ability">A reliquarian gains access to one of her deity's <Link to="/ability/domains">domains</Link>. She treats her occultist level as her cleric level for the purposes of access to domain powers and their strength. Additionally, the reliquarian adds the domain's spells to her occultist spell list and her spells known.</Pair>
</Ability>
<Ability id="arc-occultist-reliquarian-diminished-focus-power-su" icon={["broken-shield"]}>
<Pair single id="arc-occultist-reliquarian-diminished-focus-power-su">Diminished Focus Power (Su)</Pair>
<Pair hl title="Alters">Focus powers</Pair>
<Pair title="Info">A reliquarian learns only the base focus power from one implement school at 1st level. She gains additional focus powers as normal.</Pair>
</Ability>
<Ability id="arc-occultist-reliquarian-sacred-implements-su" icon={["magic-swirl","hazard-sign"]}>
<Pair single id="arc-occultist-reliquarian-sacred-implements-su">Sacred Implements (Su)</Pair>
<Pair hl title="Alters">Implements</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A reliquarian gains one implement school. Additionally, the reliquarian gains a relic of her god, typically a holy symbol of significant age, a fixture from a lost temple, or bone or hair from a prominent historical figure of the religion. This grants the reliquarian access to one of her deity's domains, as detailed above. Without this implement, the reliquarian cannot use her <em>domain</em> powers and must succeed at a <Link to="/rule/concentration">concentration</Link> check to cast spells from her <em>domain.</em></Pair>
<Pair title="Special">All of a reliquarian's future implements must be somehow representative of her faith.</Pair>
</Ability>
<Ability id="arc-occultist-reliquarian-orisons" icon={["spell-book"]}>
<Pair single id="arc-occultist-reliquarian-orisons">Orisons</Pair>
<Pair hl title="Replaces">Knacks</Pair>
<Pair title="Ability">A reliquarian gains one orison, or 0-level divine spell, each time she selects an implement school (including when she again selects a school that she has already learned to use.) These orisons otherwise behave as an occultist's knacks.</Pair>
</Ability>
<Ability id="arc-occultist-reliquarian-divine-focus-su" icon={["upgrade"]}>
<Pair single id="arc-occultist-reliquarian-divine-focus-su">Divine Focus (Su)</Pair>
<Pair hl title="Alters">Mental focus</Pair>
<Pair title="Info">A reliquarian uses her Wisdom modifier, rather than her Intelligence modifier, to determine the amount of mental focus available to her each day.</Pair>
</Ability>
</>};
const _secret_broker = {title: "Secret Broker", jsx: <><h2 id="arc-occultist-secret_broker-secret-broker">Secret Broker</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 68</Link><br/>Whether as spymasters, extortionists, political fixers, or puppet masters, secret brokers use their talents with objects to gain information, then leverage that information for their own purposes.</p>
<Ability icon={["skills"]} id="arc-occultist-secret_broker-undefined">
<Pair id="arc-occultist-secret_broker-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT)</Pair></Ability>
<Ability id="arc-occultist-secret_broker-knowledge-is-power" icon={["broken-shield","info","upgrade"]}>
<Pair single id="arc-occultist-secret_broker-knowledge-is-power">Knowledge Is Power</Pair>
<Pair hl title="Alters">Implements, implement mastery</Pair>
<Pair title="Info">The secret broker starts play possessing a single <Link to="/implement/divination">divination</Link> implement, typically a ledger of secrets. She gains new implements as normal at 2nd level and every 4 levels thereafter, and they can be of any school.</Pair>
<Pair title="Ability">A secret broker's <em>third eye</em> resonant power grants an insight bonus on Profession and Sense Motive checks equal to the bonus it grants on Perception checks, and an insight bonus on all Knowledge checks equal to half that bonus.</Pair>
<Pair title="Special">She must select divination with <em>implement mastery.</em></Pair>
</Ability>
<Ability id="arc-occultist-secret_broker-broker-secrets-su" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-secret_broker-broker-secrets-su">Broker Secrets (Su)</Pair>
<Pair hl title="Replaces">Magic item skill</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A secret broker can trade her secrets to another. For the purpose of this ability, an object's secret is composed of pieces of information gained from a single object through <em>object reading, object seer, psychometry,</em> or <em>read object</em> that the occultist didn't otherwise know and hasn't shared with another, written somewhere, or otherwise recorded or found a way to recover should she forget them and lose possession of the object. The secret broker can willingly use this ability in tandem with handing the object over to another creature in order to transfer the object's secret to that creature. The secret broker forgets the object's secret and the creature instantly learns the object's secret.</Pair>
<Pair title="Special">The secret broker can also destroy an object to remove his memory of the object's secret without transferring it to another. In either case, any onlookers who understand what the secret broker is doing, and the recipient in the case of a transfer, can intrinsically tell that the secret broker has used this ability rather than simply sharing the memory through other means or destroying the object but keeping its secret.</Pair>
</Ability>
<Ability id="arc-occultist-secret_broker-share-memory-sp" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-secret_broker-share-memory-sp">Share Memory (Sp)</Pair>
<Pair hl title="Replaces">Shift focus</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A secret broker learns to use her knowledge transference powers more flexibly, allowing her to use <Link to="/spell/share_memory">share memory</Link> at will, but only with willing targets.</Pair>
</Ability>
<Ability id="arc-occultist-secret_broker-steal-secret-sp" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-secret_broker-steal-secret-sp">Steal Secret (Sp)</Pair>
<Pair hl title="Replaces">Magic circles</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A secret broker learns how to steal a secret from an unwilling target. This works as her <em>share memory</em> ability, except it allows her to access memories from unwilling targets. A target that succeeds at its saving throw against a secret broker's <em>steal secret</em> ability is forever after immune to that secret broker's <em>steal secret</em> ability.</Pair>
</Ability>
<Ability id="arc-occultist-secret_broker-erase-secret-sp" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-secret_broker-erase-secret-sp">Erase Secret (Sp)</Pair>
<Pair hl title="Replaces">Binding circles</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">A secret broker can expend 1 point of mental focus from her divination implement in order to erase a fact from someone's mind by touch. This works similarly to <Link to="/spell/modify_memory">modify memory</Link> to erase the memory of an event, except the effect is instantaneous and leaves no magical trace (it can still be removed by <Link to="/spell/break_enchantment">break enchantment</Link>, <Link to="/spell/psychic_surgery">psychic surgery</Link>, <Link to="/spell/limited_wish">limited wish</Link>, <Link to="/spell/miracle">miracle</Link>, or <Link to="/spell/wish">wish</Link>) and the secret broker can remove only one fact, such as "The queen and the general are having an affair" rather than a 5-minute event. Erasing the memory of a fact does not prevent the target from learning the fact again, or even potentially from deducing the fact again from evidence, given time.</Pair>
</Ability>
<Ability id="arc-occultist-secret_broker-purge-secret-sp" icon={["upgrade"]}>
<Pair single id="arc-occultist-secret_broker-purge-secret-sp">Purge Secret (Sp)</Pair>
<Pair hl title="Replaces">Fast circles</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">A secret broker can expend 3 points of mental focus from her divination implement to apply her <em>erase secret</em> ability to up to one creature per level within 30 feet of her.</Pair>
</Ability>
</>};
const _shair = {title: "Sha'ir", jsx: <><h2 id="arc-occultist-shair-shair">Sha'ir</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 102</Link><br/>Sha'irs delve into the occult not through power over objects but instead via their connection with minor servitor genies from the elemental planes. A sha'ir's jin is both a precious ally and a living implement for its master.</p>
<Ability id="arc-occultist-shair-jin-su" icon={["stairs-goal","broken-shield","spell-book"]}>
<Pair single id="arc-occultist-shair-jin-su">Jin (Su)</Pair>
<Pair hl title="Replaces">Implements</Pair>
<Pair hl title="Alters">Mental focus, spellcasting, implement mastery</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>A sha'ir learns how to contact a jin - a minor, insubstantial genie that makes its home on the elemental planes. She learns how to contact more jin as she gains levels. Each of these jin is connected to one of the eight schools of magic, just like an occultist <Link to="/ability/implements">implement</Link>, but also to the <Link to="/arcaneschool/air">air</Link>, <Link to="/arcaneschool/earth">earth</Link>, <Link to="/arcaneschool/fire">fire</Link>, or <Link to="/arcaneschool/water">water</Link> school. Each jin works like a living implement for both of its schools. To provide the implement component for a spell or focus power, a jin must be within 30 feet of its master.</p>
<p>The elemental schools don't have focus powers or resonant powers. Instead, the sha'ir considers all <Link to="/main/wizard_spell">wizard spells</Link> of 6th level and lower from the lists corresponding to her jin's elemental schools to be on her occultist spell list. In addition, she adds additional spells to her list of spells known. For every spell level she can cast, she adds one spell from each jin's elemental school and one spell from each jin's non-elemental school.</p>
<p>A jin in its natural form has the base statistics of a Small <Link to="/family/elemental">elemental</Link> of the chosen type with the <Link to="/template/young">young</Link> simple template and without the <em>air mastery, burn, drench, earth glide, earth mastery, vortex, water mastery,</em> or <em>whirlwind</em> abilities.</p>
</Pair>
<Pair title="At 6th Level">The sha'ir learns how to contact a second jin.</Pair>
<Pair title="At 14th Level">The sha'ir contacts a third jin.</Pair>
<Pair title="At 20th Level">A sha'ir selects one of her jin and chooses one of its two schools instead of selecting an implement for <em>implement mastery.</em></Pair>
<Pair title="Special">If one of her jin is slain, the sha'ir is treated as if she didn't have the appropriate implement to cast the spells associated with that jin. The sha'ir can replace the slain jin the following morning by expending 1 point of mental focus in a special ritual that takes 1 hour to perform.</Pair>
</Ability>
<Ability id="arc-occultist-shair-augment-jin-sp-su" icon={["upgrade"]}>
<Pair single id="arc-occultist-shair-augment-jin-sp-su">Augment Jin (Sp, Su)</Pair>
<Pair hl title="Replaces">Magic item skill, object reading</Pair>
<Pair title="At 2nd Level">A sha'ir's jin uses its master's base saving throws if they are better than its own, and it uses either its own hit point total or 1/2 its master's hit points, whichever is higher.</Pair>
<Pair title="At 4th Level">A sha'ir can concentrate for 1 full round and expend 1 point of mental focus stored in a jin to grant that jin all the statistics of a Small elemental of its type for 1 round per occultist level (this includes gaining any of the following abilities, if applicable: <em>air mastery, burn, drench, earth glide, earth mastery, vortex, water mastery,</em> and <em>whirlwind</em>).</Pair>
<Pair title="At 8th Level">She can instead expend 2 points of mental focus to give one of her jin all the statistics of a Medium elemental.</Pair>
<Pair title="At 10th Level">The cost of giving a jin the statistics of a Medium elemental decreases to 1 point of mental focus, and the sha'ir can give a jin all the statistics of a Large elemental for 2 points of mental focus.</Pair>
<Pair title="At 12th Level">The cost of giving a jin the statistics of a Large elemental decreases to 1 point of mental focus and the sha'ir can give a jin the statistics of a Huge elemental for 2 points of mental focus.</Pair>
<Pair title="At 14th Level">The cost of giving a jin the statistics of a Huge elemental decreases to 1 point of mental focus and the sha'ir can give a jin the statistics of a greater elemental for 2 points of mental focus.</Pair>
<Pair title="At 16th Level">The sha'ir can give a jin the statistics of an elder elemental for 3 points of mental focus.</Pair>
</Ability>
<Ability id="arc-occultist-shair-manifest-jin-su" icon={["upgrade"]}>
<Pair single id="arc-occultist-shair-manifest-jin-su">Manifest Jin (Su)</Pair>
<Pair hl title="Replaces">Aura sight</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">The sha'ir can designate one of her jin and manifest its powers, allowing it to count as a Small elemental at all times, as if using <em>augment jin</em> to augment it to a Small elemental but with a permanent duration.</Pair>
<Pair title="Special">By concentrating for 1 full round, she can change which of her jin she manifests in this way.</Pair>
</Ability>
<Ability id="arc-occultist-shair-jin-spy-su" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-shair-jin-spy-su">Jin Spy (Su)</Pair>
<Pair hl title="Alters">Outside contact</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">When a sha'ir gains her <em>outside contact</em> ability, instead of learning the true names of outsiders, she can ask one or more of her jin to perform tasks. She chooses from the same tasks listed under <em>outside contact</em> (as appropriate to her occultist level). This doesn't require negotiation or gifts, but the jin is not available to the sha'ir during the time it spends performing these tasks.</Pair>
</Ability>
</>};
const _silksworn = {title: "Silksworn", jsx: <><h2 id="arc-occultist-silksworn-silksworn">Silksworn</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court pg. 29</Link><br/>Occultists who recognize that flashy garb and fashionable accoutrements can be just as powerful as psychically charged relics in the right situations are known as silksworn. They draw their power from wearing luxurious garments and can be found in many noble courts throughout Golarion, though they often keep their abilities secret. Silksworn are even found among the mystics and the magical practitioners of Nex, each seeking the patronage of one or more of the Arclords.</p>
<Ability icon={["skills"]} id="arc-occultist-silksworn-undefined">
<Pair id="arc-occultist-silksworn-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (engineering), Knowledge (planes)</Pair></Ability>
<Ability id="arc-occultist-silksworn-spells" icon={["info"]}>
<Pair single id="arc-occultist-silksworn-spells">Spells</Pair>
<Pair hl title="Alters">Spells</Pair>
<Pair title="Info">A silksworn's spells are considered arcane spells, not psychic spells, and his spells use verbal and somatic components instead of thought and emotion components.</Pair>
</Ability>
<Ability id="arc-occultist-silksworn-implements" icon={["info","hazard-sign"]}>
<Pair single id="arc-occultist-silksworn-implements">Implements</Pair>
<Pair hl title="Alters">Implements</Pair>
<Pair title="Info">When a silksworn chooses an implement school, he does not choose a specific object. Instead, a silksworn must be wearing an ostentatious garment or magic item worth 10 gp or more of the appropriate type and in the appropriate slot: abjuration (wrists), conjuration (shoulders), divination (eyes), enchantment (neck), evocation (hands), illusion (head), necromancy (chest), and transmutation (feet). A silksworn who does not meet this requirement is treated as lacking the appropriate implement for the purpose of his class features, including spellcasting.</Pair>
</Ability>
<Ability id="arc-occultist-silksworn-cantrips" icon={["spell-book"]}>
<Pair single id="arc-occultist-silksworn-cantrips">Cantrips</Pair>
<Pair hl title="Replaces">Knacks</Pair>
<Pair title="Ability">Each time he selects an implement school, a silksworn gains one cantrip, or 0-level arcane spell (including when he selects a school that he has already learned to use). These cantrips otherwise behave as an occultist's knacks.</Pair>
</Ability>
<Ability id="arc-occultist-silksworn-mental-focus-su" icon={["upgrade"]}>
<Pair single id="arc-occultist-silksworn-mental-focus-su">Mental Focus (Su)</Pair>
<Pair hl title="Alters">Mental focus</Pair>
<Pair title="Passive Ability">The silksworn's available mental focus is equal to his occultist level + his Intelligence modifier + his Charisma modifier.</Pair>
</Ability>
<Ability id="arc-occultist-silksworn-devoted-mystic" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-occultist-silksworn-devoted-mystic">Devoted Mystic</Pair>
<Pair hl title="Replaces">Outside contact</Pair>
<Pair hl title="Alters">Implements, weapon and armor proficiencies</Pair>
<Pair title="Info">A silksworn is proficient with only simple weapons and isn't proficient with any armor or shields.</Pair>
<Pair title="At 1st Level">The silksworn gains access to four implement schools instead of two.</Pair>
<Pair title="At 2nd Level">The silksworn gains access to his 5th implement school.</Pair>
<Pair title="At 6th Level">The silksworn gains access to his 6th implement school.</Pair>
<Pair title="At 8th Level">The silksworn increases the number of spells of each level he can cast each day by one. This does not allow the silksworn to cast spells of a level he does not yet have access to.</Pair>
<Pair title="At 10th Level">The silksworn gains access to his 7th implement school.</Pair>
<Pair title="At 12th Level">The silksworn increases the number of spells of each level he can cast each day by one.</Pair>
<Pair title="At 14th Level">The silksworn gains access to his 8th implement school.</Pair>
<Pair title="At 16th Level">The silksworn increases the number of spells of each level he can cast each day by one.</Pair>
<Pair title="At 18th Level">The silksworn gains access to his 9th implement school.</Pair>
</Ability>
<Ability id="arc-occultist-silksworn-silksworn-eloquence-ex" icon={["upgrade"]}>
<Pair single id="arc-occultist-silksworn-silksworn-eloquence-ex">Silksworn Eloquence (Ex)</Pair>
<Pair hl title="Replaces">Magic circles</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">A silksworn gains a +1 bonus on Bluff and Diplomacy checks for each magical article of clothing occupying one of his implement schools' magic item slots.</Pair>
</Ability>
<Ability id="arc-occultist-silksworn-silksworn-deception-su" icon={["stairs-goal"]}>
<Pair single id="arc-occultist-silksworn-silksworn-deception-su" flavor="A silksworn can hide his speech and gestures within his extravagant clothing.">Silksworn Deception (Su)</Pair>
<Pair hl title="Replaces">Binding circles</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">Whenever the silksworn casts a spell, he can attempt a Bluff check opposed by Sense Motive checks from those observing him. Those who fail are unaware of his spellcasting, unless an effect obviously originates from the silksworn.</Pair>
</Ability>
<Ability id="arc-occultist-silksworn-silksworn-arcana-su" icon={["upgrade"]}>
<Pair single id="arc-occultist-silksworn-silksworn-arcana-su">Silksworn Arcana (Su)</Pair>
<Pair hl title="Replaces">Fast circles</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Passive Ability">When a silksworn casts a spell while wearing a magic article of clothing in the appropriate school's magic item slot, the spell's saving throw DC increases by 2.</Pair>
</Ability>
<Ability id="arc-occultist-silksworn-implement-mastery-su" icon={["upgrade"]}>
<Pair single id="arc-occultist-silksworn-implement-mastery-su">Implement Mastery (Su)</Pair>
<Pair hl title="Alters">Implement mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A silksworn chooses two implement schools instead of one, and <em>implement mastery's</em> effects apply to both. The silksworn gains 4 additional points of mental focus for each school's implement.</Pair>
</Ability>
</>};
const _talisman_crafter = {title: "Talisman Crafter", jsx: <><h2 id="arc-occultist-talisman_crafter-talisman-crafter">Talisman Crafter</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 63</Link><br/>Talisman crafters specialize in the creation of seals, constructing master talismans to use as implements and inscribing wards with esoteric geometry.</p>
<Ability id="arc-occultist-talisman_crafter-talismanic-implements-su" icon={["info"]}>
<Pair single id="arc-occultist-talisman_crafter-talismanic-implements-su">Talismanic Implements (Su)</Pair>
<Pair hl title="Alters">Implements</Pair>
<Pair title="Ability">The talisman crafter doesn't gain normal implements; rather, after refreshing her mental focus, she spends 1 hour crafting a number of small master talismans out of cast metal, parchment, wax, or wood, inscribing them with esoteric seals and investing them with power to serve as her implements for casting occultist spells of the schools she knows. The talisman crafter selects schools as normal (two at 1st level and an additional one at 2nd level and every 4 occultist levels thereafter)</Pair>
<Pair title="Special">She creates one master talisman for each implement school she knows, unless she selected that implement school multiple times, in which case she needs one master talisman per time she has selected that school. The talisman crafter splits her mental focus among the schools she knows and generic focus as normal.</Pair>
</Ability>
<Ability id="arc-occultist-talisman_crafter-spellbound-tailsman-su" icon={["magic-swirl","smoking-finger","magic-palm"]}>
<Pair single id="arc-occultist-talisman_crafter-spellbound-tailsman-su">Spellbound Tailsman (Su)</Pair>
<Pair hl title="Replaces">Magic item skill, object reading</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A talisman crafter can inscribe <em>spellbound talismans</em> in addition to her master talismans, infusing small tokens she crafts with psychic spells she knows that normally affect one or more target creatures (but not spells that target the caster, spells that affect an area, spells that create effects, or other such spells). When the occultist infuses a talisman with one of her spells, she expends the spell slot just as if she had cast the spell and expends any material components necessary.</Pair>
<Pair title="Standard Action">The talisman crafter can hurl this prepared talisman, which provokes an attack of opportunity and requires the same thought and emotion components as the original spell. Even if she can normally throw objects without provoking an attack of opportunity, throwing a talisman still provokes an attack of opportunity unless she also succeeds at a <Link to="/rule/concentration">concentration</Link> check to cast defensively. The thrown talisman has a range of 20 feet, and the occultist must succeed at a ranged touch attack to hit her target. If she hits the target, the spell affects it normally, and the creature receives the normal saving throw (if any) against the spell effect. This allows the talisman crafter to deliver touch spells at range through the <em>spellbound talisman.</em></Pair>
<Pair title="Ability">Alternatively, the talisman crafter can touch the talisman to a target creature as a melee touch attack (for a willing target, she automatically hits); this attack doesn't provoke an attack of opportunity as long as she succeeds at a concentration check to cast defensively.</Pair>
<Pair title="Info">If an inscribed talisman's spell would normally target more than one creature, its DC increases by 2.</Pair>
<Pair title="Special">Only a talisman crafter can activate her <em>spellbound talismans.</em> Once created, a <em>spellbound talisman</em> remains potent until the next time the talisman crafter regains spell slots before losing its magic. Inscribing a <em>spellbound talisman</em> in this manner takes 1 minute of work.</Pair>
</Ability>
<Ability id="arc-occultist-talisman_crafter-shared-talisman-su" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-talisman_crafter-shared-talisman-su">Shared Talisman (Su)</Pair>
<Pair hl title="Replaces">Shift focus</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A talisman crafter can expend 1 point of generic mental focus to create a <em>spellbound talisman</em> that anyone can activate. As long as the <em>spellbound talisman</em> exists, it continues to occupy one of the occultist's spell slots, but can be used by another creature to trigger its effects.</Pair>
<Pair title="Special">Whoever triggers the effect, a <em>shared talisman</em> does not require thought or emotion components, and it doesn't provoke attacks of opportunity for casting a spell (though it still does so as normal if thrown).</Pair>
</Ability>
<Ability id="arc-occultist-talisman_crafter-warding-seal-su" icon={["magic-swirl"]}>
<Pair single id="arc-occultist-talisman_crafter-warding-seal-su">Warding Seal (Su)</Pair>
<Pair hl title="Replaces">Aura sight, 5th- and 17th-level focus powers</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A talisman crafter can inscribe a <em>warding seal,</em> infusing an inscribed glyph with psychic energy. Inscribing the seal follows the rules for drawing <em>magic circles,</em> takes 1 minute, and requires the occultist to expend 1 point of mental focus (either generic focus or focus from any one of her implements).</Pair>
<Pair title="Full-Round Action">The talisman crafter expends 1 point of mental focus to scribe a special seal, infusing the glyph with a psychic spell she knows that affects one or more creatures and expending the spell slot just as if she had cast the spell. This action provokes attacks of opportunity. This seal holds the spell energy in check until it's triggered by conditions set forth when the seal is crafted or until the occultist refreshes her mental focus. The seal functions as the spell glyph option of the <Link to="/spell/glyph_of_warding">glyph of warding</Link> spell.</Pair>
<Pair title="At 17th Level">The talisman crafter's <em>fast circles</em> ability applies to her <em>warding seals,</em> and she treats the ability as the <em>greater spell glyph</em> option of the <Link to="/spell/greater_glyph_of_warding">greater glyph of warding</Link> spell.</Pair>
</Ability>
</>};
const _tome_eater = {title: "Tome Eater", jsx: <><h2 id="arc-occultist-tome_eater-tome-eater">Tome Eater</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 102</Link><br/>Tome eaters have learned how to tap into the latent psychic energy of the written word by physically devouring books and scrolls to create magical effects and gain mystical insights. They use their bonded tomes to gain access to all sorts of magic, and as they grow in power, they gain an innate sense of the books and writings around them.</p>
<Ability id="arc-occultist-tome_eater-bonded-tome-su" icon={["magic-swirl","upgrade"]}>
<Pair single id="arc-occultist-tome_eater-bonded-tome-su">Bonded Tome (Su)</Pair>
<Pair hl title="Alters">Implements, mental focus, spellcasting, implement mastery</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Info">A tome eater forms a supernatural bond with a specific book. She can replace her bonded tome with another book at any time, though the tome eater must perform a 24-hour binding ritual to attune herself to the new book.</Pair>
<Pair title="Ability">As part of casting an occultist spell, a tome eater can expend 1 point of mental focus tied to the appropriate school to increase the spell's caster level by 1 or increase the spell's DC by 1.</Pair>
<Pair title="Usage">1 time/day + 1 per five occultist levels beyond 1st<ByLevelPop levels={[[1,1],[6,2],[11,3],[16,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Special">The bonded tome starts as an implement for any two schools of magic at 1st level, and it gains access to additional schools of magic at 2nd, 10th, 14th, and 18th levels, granting the tome eater access to base focus powers and resonant powers accordingly. The tome eater's bonded tome serves as her implement component to cast occultist spells of all schools she knows. However, she must split her mental focus among the schools she knows for the purpose of determining resonant powers and using focus powers, even though she possesses only one physical item as an implement.</Pair>
</Ability>
<Ability id="arc-occultist-tome_eater-devour-books-and-scrolls-sp" icon={["magic-swirl","upgrade","armor-upgrade"]}>
<Pair single id="arc-occultist-tome_eater-devour-books-and-scrolls-sp">Devour Books and Scrolls (Sp)</Pair>
<Pair hl title="Replaces">Shift focus, 6th-level implement, magic circles, outside contact, binding circles, fast circles</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Full-Round Action">A tome eater can devour books and scrolls in order to gain various benefits (described below). A devoured book or scroll is absorbed into the tome eater's body and completely destroyed.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>Yes</Pair>
<Pair title="At 4th Level">Once per day a tome eater can devour a spell scroll or a book to regain mental focus, which she can divide as she likes among her schools of magic, to a maximum of the amount of mental focus she assigned to that school at the beginning of the day. If she devours a scroll, a tome eater regains a number of points of mental focus equal to the spell level of the highest-level spell contained on the scroll. If she devours a nonmagical book that contains at least 100 pages of written text and is worth at least 25 gp, a tome eater regains 1 point of mental focus. If she devours a magical book, she regains a number of points of mental focus equal to half the caster level of the item. If the tome eater devours a spellbook with at least 50 pages of spells of 1st level or higher, she regains 4 points of mental focus.</Pair>
<Pair title="At 6th Level">A tome eater can <Link to="/rule/ready_an_action">ready an action</Link> to devour an enemy's spell when an enemy within 30 feet attempts to cast a spell from a scroll. This ability works as the <Link to="/rule/counterspells">counterspell</Link> action as if the tome eater were using <Link to="/spell/dispel_magic">dispel magic</Link>, though the tome eater doesn't need to cast a spell to counter the enemy's spell. A tome eater can use this ability a number of times per day equal to <Link to="/misc/one_sixth">one-sixth</Link> of her occultist level.</Pair>
<Pair title="At 8th Level">A tome eater can devour a book or scroll as a <strong className="hl">standard action</strong>. Additionally, whenever a tome eater successfully uses this ability to counter a spell being cast from a scroll, she can devour the enemy's scroll without spending any additional actions if she hasn't devoured a scroll or book yet that day.</Pair>
<Pair title="At 12th Level">A tome eater can devour a book or scroll as a <strong className="hl">move action</strong>. Additionally, whenever a tome eater successfully uses this ability to counter a spell being cast from a scroll, she can choose to turn the spell back on its caster (as <Link to="/spell/spell_turning">spell turning</Link>) instead of devouring the scroll. She can do this whether or not she has devoured a scroll or book yet that day.</Pair>
<Pair title="At 16th Level">The tome eater can use the spell-devouring ability as an <strong className="hl">immediate action</strong> without readying an action</Pair>
<Pair title="Special">If a tome eater readies an action to devour a spell and the readied action never triggers, she doesn't expend a daily use of that ability.</Pair>
</Ability>
<Ability id="arc-occultist-tome_eater-word-sense-sp-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-occultist-tome_eater-word-sense-sp-su">Word Sense (Sp, Su)</Pair>
<Pair hl title="Replaces">Aura sight</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A tome eater is constantly under the effect of <Link to="/spell/read_magic">read magic</Link>. Additionally, she can automatically detect the general topic of a piece of writing, and whether that writing is a magical scroll or tome, simply by looking at it.</Pair>
<Pair title="Ability">If she spends 1 round concentrating on a text within 30 feet per 100 pages of the text, she can gain a sense of a text's contents as if she had skimmed the text.</Pair>
</Ability>
</>};
export default {ancestral_aspirant:_ancestral_aspirant,battle_host:_battle_host,construct_collector:_construct_collector,curator:_curator,esoteric_initiate:_esoteric_initiate,extemporaneous_channeler:_extemporaneous_channeler,geomancer:_geomancer,haunt_collector:_haunt_collector,naturalist:_naturalist,necroccultist:_necroccultist,occult_historian:_occult_historian,panoply_savant:_panoply_savant,planar_harmonizer:_planar_harmonizer,psychodermist:_psychodermist,reliquarian:_reliquarian,secret_broker:_secret_broker,shair:_shair,silksworn:_silksworn,talisman_crafter:_talisman_crafter,tome_eater:_tome_eater}