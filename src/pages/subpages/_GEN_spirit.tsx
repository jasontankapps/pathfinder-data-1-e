import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import {Block,Row,Cell} from '../../components/Block';
import ScrollContainer from '../../components/ScrollContainer';
import ByLevelPop from '../../components/ByLevelPop';
import Icons from '../../components/Icons';
const _not_found = {title: "Unknown", jsx: <><h2 id="spirit-not_found-error">Error</h2>
<p>Unable to find the requested spirit.</p>
</>};
const _archmage = {title: "Archmage", jsx: <><h2 id="spirit-archmage-archmage">Archmage</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 33</Link><br/>An archmage spirit is a font of knowledge and arcane power.</p>
<Block hl>
<Row><Cell>Spirit Bonus</Cell><Cell>When you channel an archmage, your <em>spirit bonus</em> applies on <Link to="/rule/concentration">concentration</Link> checks, Intelligence checks, and Intelligence-based skill checks.</Cell></Row>
<Row><Cell>Seance Boon</Cell><Cell><Icons id="spirit-archmage-boost-icons" wrapper="prefixIcon" list={["boost"]} /> Your damaging spells deal an additional 2 points of damage of the same type that they would normally deal to each target.</Cell></Row>
<Row><Cell>Favored Locations</Cell><Cell>Arcane redoubts, areas of unusual magic, libraries, schools.</Cell></Row>
<Row><Cell>Influence Penalty</Cell><Cell><Icons id="spirit-archmage-down-icons" wrapper="prefixIcon" list={["down"]} /> Your body begins to respond as if you were a frail, aged scholar. You take a penalty equal to your <em>spirit bonus</em> on Strength checks, Strength-based skill checks, Constitution checks, attack rolls, and non-spell damage rolls.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell><p>Choose one:</p>
<ul>
<li>You eschew all faith in the divine, so you must not be the willing target of divine spells or abilities and you must attempt a Will saving throw against even harmless divine spells and abilities.</li>
<li>You must not pass up the opportunity to learn something new and significant (a non-trivial piece of information with a Knowledge check of DC 20 or higher) when that opportunity is directly present.</li>
<li>You must use your own magical solution to a challenge if you can, even if a mundane solution that would require fewer resources is available.</li>
</ul>
</Cell></Row></Block>
<h3 id="spirit-archmage-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="archmage-arcana-su" icon={["learn"]}>
<Pair single id="archmage-arcana-su">Archmage Arcana (Su)</Pair>
<Pair title="Ability"><p>Instead of your normal spells per day for your medium level, you use the spells per day from the <Link to="/class/mesmerist">Mesmerist</Link> class.</p>
<p>For each level of spell you can now cast (including level 0), each time you channel an archmage spirit, select a single spell of that level from the <Link to="/main/spells_sorcerer">sorcerer</Link>/<Link to="/main/spells_wizard">wizard</Link> spell list to add to your medium spell list and spells known until you lose contact with the archmage.</p>
</Pair>
<Pair title="Special">When you cast these spells, they count as arcane (though not for the purpose of fulfilling prerequisites), and thus you must provide verbal and somatic components instead of thought and emotion components.</Pair>
</Ability>
<h3 id="spirit-archmage-intermediate-spirit-power">Intermediate Spirit Power</h3>
<Ability id="arcane-surge-su" icon={["magic","boost"]}>
<Pair single id="arcane-surge-su">Arcane Surge (Su)</Pair>
<Pair title="Ability">You can allow the archmage spirit to gain 1 point of influence over you in order to cast one of your medium spells known without expending a spell slot. When you do so, the caster level and DC of the spell increase by 1, and you can't apply metamagic to the spell.</Pair>
</Ability>
<h3 id="spirit-archmage-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="wild-arcana-su" icon={["magic"]}>
<Pair single id="wild-arcana-su">Wild Arcana (Su)</Pair>
<Pair title="Ability">You can allow the archmage spirit to gain 1 point of influence over you in order to cast any sorcerer/wizard spell of a level you can cast. You must expend a spell slot of the appropriate level, and you can't apply metamagic to the spell.</Pair>
</Ability>
<h3 id="spirit-archmage-supreme-spirit-power">Supreme Spirit Power</h3>
<Ability id="legendary-archmage-su" icon={["magic"]}>
<Pair single id="legendary-archmage-su">Legendary Archmage (Su)</Pair>
<Pair title="Ability">Once per day, you can cast any spell on the sorcerer/wizard spell list as if using the <em>wild arcana</em> ability, except the archmage doesn't gain 1 point of influence over you, the spell doesn't require a spell slot, and you can select a spell of any level.</Pair>
</Ability>
</>};
const _champion = {title: "Champion", jsx: <><h2 id="spirit-champion-champion">Champion</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 34</Link><br/>A champion spirit is a paragon of skill at arms.</p>
<Block hl>
<Row><Cell>Spirit Bonus</Cell><Cell>When you channel a champion, your <em>spirit bonus</em> applies on attack rolls, non-spell damage rolls, Strength checks, Strength-based skill checks, and Fortitude saves.</Cell></Row>
<Row><Cell>Seance Boon</Cell><Cell><Icons id="spirit-champion-boost-icons" wrapper="prefixIcon" list={["boost"]} /> You gain a +2 bonus on all non-spell damage rolls.</Cell></Row>
<Row><Cell>Favored Locations</Cell><Cell>Arenas, battlefields, places of violence, practice yards.</Cell></Row>
<Row><Cell>Influence Penalty</Cell><Cell><Icons id="spirit-champion-down-icons" wrapper="prefixIcon" list={["down"]} /> You are quick to violence and prefer a weapon to spells or contemplation. You take a penalty equal to your <em>spirit bonus</em> on Intelligence checks and Intelligence-based skill checks, and to your caster level (to a minimum of caster level 0); as usual, a reduced caster level may render you unable to cast spells. You can't benefit from effects that increase your caster level.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell><p>Choose one:</p>
<ul>
<li>You are superstitious about arcane spellcasting, so you must not be the willing target of arcane spells or abilities and you must attempt a Will saving throw against even harmless arcane spells and abilities.</li>
<li>You may not make an attack with any weapon except a specific manufactured weapon (such as "my father's +2 falchion") that you choose when you take the <em>taboo,</em> and you may not choose unarmed strike for this <em>taboo.</em></li>
<li>You must accept any challenge to prove your prowess in battle, including challenges to single combat - if you or an ally breaks the rules of the challenge, you break this <em>taboo.</em></li>
</ul>
</Cell></Row></Block>
<h3 id="spirit-champion-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="champions-prowess-su" icon={["power"]}>
<Pair single id="champions-prowess-su">Champion's Prowess (Su)</Pair>
<Pair title="Ability">You gain proficiency in all martial weapons and in one <Link to="/main/exotic_weapon">exotic weapon</Link> of your choice, which you choose each time you channel a champion spirit.</Pair>
</Ability>
<h3 id="spirit-champion-intermediate-spirit-power">Intermediate Spirit Power</h3>
<Ability id="sudden-attack-su" icon={["power"]}>
<Pair single id="sudden-attack-su">Sudden Attack (Su)</Pair>
<Pair title="Ability">Whenever you take a full-attack action, you gain one additional attack at your highest base attack bonus. This ability stacks with the extra attack from <Link to="/spell/haste">haste</Link>, but it doesn't stack with special actions that grant extra attacks, such as <em>flurry of blows</em> or <em>spell combat.</em></Pair>
<Pair title="Special"><em>Sudden attack</em> works as normal with full-attack options such as <Link to="/rule/two_weapon_fighting">two-weapon fighting</Link>.</Pair>
</Ability>
<h3 id="spirit-champion-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="fleet-charge-su" icon={["power"]}>
<Pair single id="fleet-charge-su">Fleet Charge (Su)</Pair>
<Pair title="Ability">You can take a <strong className="hl">swift action</strong> and a <strong className="hl">full-round action</strong> to move up to your speed and then make a full attack. This special action doesn't combine with <em>sudden attack,</em> but works as normal with effects such as <em>haste</em> and <em>two-weapon fighting.</em></Pair>
<Pair title="Special">As soon as you begin moving, you are considered to have begun the full-round action, even if circumstances prevent you from attacking at the end of your movement.</Pair>
</Ability>
<h3 id="spirit-champion-supreme-spirit-power">Supreme Spirit Power</h3>
<Ability id="legendary-champion-su" icon={["power"]}>
<Pair single id="legendary-champion-su">Legendary Champion (Su)</Pair>
<Pair title="Ability">You gain two <Link to="/main/combat_feat">combat feats</Link> of your choice, and you can choose different feats each time you channel a champion spirit. You can treat your base attack bonus from your medium levels as equal to your medium level for the purposes of qualifying for combat feats and determining their effects, and you can count your medium levels as levels of one other class whose base attack bonus equals its class level (such as fighter, barbarian, or slayer) for the purpose of qualifying for the two new combat feats.</Pair>
</Ability>
</>};
const _guardian = {title: "Guardian", jsx: <><h2 id="spirit-guardian-guardian">Guardian</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 35</Link><br/>A guardian spirit is an exemplar of protection and defense.</p>
<Block hl>
<Row><Cell>Spirit Bonus</Cell><Cell>When you channel a guardian, your <em>spirit bonus</em> applies to AC and on Constitution checks, Fortitude saves, and Reflex saves.</Cell></Row>
<Row><Cell>Seance Boon</Cell><Cell><Icons id="spirit-guardian-def-icons" wrapper="prefixIcon" list={["def"]} /> You gain a +1 bonus to CMD.</Cell></Row>
<Row><Cell>Favored Locations</Cell><Cell>City walls, forts, gates, keeps.</Cell></Row>
<Row><Cell>Influence Penalty</Cell><Cell><Icons id="spirit-guardian-down-icons" wrapper="prefixIcon" list={["down"]} /> You are incredibly cautious and guarded in all things, and your caution sometimes gets in the way. When <Link to="/rule/attack">attacking</Link>, you always <Link to="/misc/fight_defensively">fight defensively</Link>, and when <Link to="/rule/cast_a_spell">casting a spell</Link>, you always cast defensively. Because of your focus on defense, you take a penalty on damage rolls equal to your <em>spirit bonus.</em></Cell></Row>
<Row><Cell>Taboos</Cell><Cell><p>Choose one:</p>
<ul>
<li>You must always protect others from danger when you can (including defeated enemies, but not enemies that are an active threat to you and others).</li>
<li>You must keep your body in fit physical condition, and you break this <em>taboo</em> every time you drop below half your maximum hit points.</li>
<li>You must speak no words and use no abilities with the sonic descriptor, and you break this <em>taboo</em> if you become <Link to="/spell/rage">enraged</Link>, <Link to="/misc/frightened">frightened</Link>, or <Link to="/misc/panicked">panicked</Link>.</li>
</ul>
</Cell></Row></Block>
<h3 id="spirit-guardian-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="guardians-shield-su" icon={["def"]}>
<Pair single id="guardians-shield-su">Guardian's Shield (Su)</Pair>
<Pair title="Ability">You gain proficiency in heavy armors and shields (including tower shields).</Pair>
</Ability>
<h3 id="spirit-guardian-intermediate-spirit-power">Intermediate Spirit Power</h3>
<Ability id="absorb-blow-su" icon={["def","learn"]}>
<Pair single id="absorb-blow-su">Absorb Blow (Su)</Pair>
<Pair title="Passive Ability">You gain DR/- and resistance to acid, cold, electricity, fire, and sonic equal to <Link to="/misc/half">half</Link> of your medium level.</Pair>
<Pair title="Ability">Add <Link to="/spell/paladins_sacrifice">paladin's sacrifice</Link> to your medium spells known as a 2nd-level spell.</Pair>
</Ability>
<h3 id="spirit-guardian-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="sudden-block-su" icon={["protect","power"]}>
<Pair single id="sudden-block-su">Sudden Block (Su)</Pair>
<Pair title="Ability">After an enemy's attack would hit you or an adjacent creature, you can use <em>spirit surge</em> to increase the victim's AC, possibly causing the attack to fail, by rolling your <em>spirit surge</em> die and adding it to the chosen character's AC. You must not be flat-footed, and you must be aware of the attack.</Pair>
<Pair title="Special">If use of this ability causes the enemy's attack to miss, you can make an attack at your highest base attack bonus against that enemy as an <strong className="hl">immediate action</strong>.</Pair>
</Ability>
<h3 id="spirit-guardian-supreme-spirit-power">Supreme Spirit Power</h3>
<Ability id="legendary-guardian-su" icon={["def"]}>
<Pair single id="legendary-guardian-su">Legendary Guardian (Su)</Pair>
<Pair title="Immediate Action">Once per day, you can ignore the effects of a single attack against you, including enemy spells targeting you or whose area or effect includes you. The attack affects other creatures as normal.</Pair>
</Ability>
</>};
const _hierophant = {title: "Hierophant", jsx: <><h2 id="spirit-hierophant-hierophant">Hierophant</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 35</Link><br/>A hierophant spirit is a being of true and pure faith.</p>
<Block hl>
<Row><Cell>Spirit Bonus</Cell><Cell>When you channel a hierophant, your <em>spirit bonus</em> applies on Wisdom checks, Wisdom-based skill checks, and Will saves.</Cell></Row>
<Row><Cell>Seance Boon</Cell><Cell><Icons id="spirit-hierophant-boost-icons" wrapper="prefixIcon" list={["boost"]} /> Your healing spells and abilities heal an additional 2 points of damage to each target. This does not affect healing conferred by magic items, nor does it add to <Link to="/umr/fast_healing">fast healing</Link> or similar effects.</Cell></Row>
<Row><Cell>Favored Locations</Cell><Cell>Altars, churches, sacred groves, shrines.</Cell></Row>
<Row><Cell>Influence Penalty</Cell><Cell><Icons id="spirit-hierophant-down-icons" wrapper="prefixIcon" list={["down"]} /> Whether the spirit hopes to offer a chance for redemption or to sacrifice foes later on a dark altar, you must strike for nonlethal damage in combat whenever possible. You take a penalty equal to your <em>spirit bonus</em> on all Charisma checks and Charisma-based skill checks involving worshipers of faiths other than the spirit's, except checks to convince others to convert to the spirit's faith.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell><p>Choose one:</p>
<ul>
<li>You must strongly revere nature and may not wear metal armor or shields.</li>
<li>You must follow a paladin or antipaladin code as appropriate for the spirit's deity.</li>
<li>You may not deliberately speak any lies, including bluffing, exaggerating, stating half-truths with intent to deceive, lies by omission, and so on, and if you know the answer to a question that someone asks you, you must give the answer.</li>
</ul>
</Cell></Row></Block>
<h3 id="spirit-hierophant-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="divine-surge-su" icon={["learn"]}>
<Pair single id="divine-surge-su">Divine Surge (Su)</Pair>
<Pair title="Ability"><p>This power functions as the <Link to="/spirit/archmage">archmage</Link> arcana spirit power, except that you add spells from the <Link to="/main/spells_cleric">cleric</Link>/<Link to="/main/spells_oracle">oracle</Link> list instead of the sorcerer/wizard list (these spells count as divine), and you need a divine focus if the spell requires one.</p>
<p>Instead of your normal spells per day for your medium level, you use the spells per day from the <Link to="/class/mesmerist">Mesmerist</Link> class. For each level of spell you can now cast (including level 0), each time you channel a hierophant spirit, select a single spell of that level from the cleric/oracle spell list to add to your medium spell list and spells known until you lose contact with the hierophant. When you cast these spells, they count as divine (though not for the purpose of fulfilling prerequisites), and thus you must provide verbal and somatic components instead of thought and emotion components.</p>
</Pair>
</Ability>
<h3 id="spirit-hierophant-intermediate-spirit-power">Intermediate Spirit Power</h3>
<Ability id="energy-font-su" icon={["aura","learn"]}>
<Pair single id="energy-font-su">Energy Font (Su)</Pair>
<Pair title="Ability">You can <Link to="/ability/channel_energy">channel energy</Link> a number of times per day equal to 1 + your Charisma modifier.</Pair>
<Pair title="Choice">Choose whether you channel positive or negative energy each time you contact a hierophant spirit; this choice must match the spirit's faith. If you choose positive energy, add <Link to="/main/cure_spells">cure spells</Link> of each level you can cast from the cleric list to your medium spell list and spells known. Otherwise, add inflict spells in the same way. These spells count as divine, as in the divine surge spirit power.</Pair>
</Ability>
<h3 id="spirit-hierophant-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="overflowing-grace-su" icon={["boost","protect","def"]}>
<Pair single id="overflowing-grace-su">Overflowing Grace (Su)</Pair>
<Pair title="Ability">When you heal a creature to full hit points or a creature already at full hit points with your positive or negative energy, that creature gains a +1 sacred bonus on attack rolls, skill checks, ability checks, and saving throws for 1 round. The bonus is sacred if you use positive energy and profane if you use negative energy.</Pair>
<Pair title="Ability">If you destroy or kill one or more creatures with positive or negative energy, you gain a +1 bonus of the same type on attack rolls, skill checks, ability checks, and saving throws for 1 round.</Pair>
</Ability>
<h3 id="spirit-hierophant-supreme-spirit-power">Supreme Spirit Power</h3>
<Ability id="legendary-hierophant-su" icon={["magic"]}>
<Pair single id="legendary-hierophant-su">Legendary Hierophant (Su)</Pair>
<Pair title="Ability">Once per day, you can request a minor miracle. This request must be in line with the options for <Link to="/spell/miracle">miracle</Link> that don't cost powdered diamond. As usual for a <em>miracle,</em> the deity or other being the spirit worships can choose whether or not to grant the request at its whim.</Pair>
</Ability>
</>};
const _marshal = {title: "Marshal", jsx: <><h2 id="spirit-marshal-marshal">Marshal</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 36</Link><br/>A marshal spirit is a towering presence and an inspiration to others.</p>
<Block hl>
<Row><Cell>Spirit Bonus</Cell><Cell>When you channel a marshal, your <em>spirit bonus</em> applies on Charisma checks and Charisma-based skill checks, as well as on <em>spirit surge</em> rolls. This allows the bonus to apply twice to the total result if you use a <em>spirit surge</em> on a Charisma check or on a Charisma-based skill check.</Cell></Row>
<Row><Cell>Seance Boon</Cell><Cell><Icons id="spirit-marshal-boost-def-icons" wrapper="prefixIcon" list={["boost","def"]} /> Choose a <em>seance boon</em> from any of the other legends to benefit from. When using the <em>shared seance</em> class feature, each participant can choose a different boon.</Cell></Row>
<Row><Cell>Favored Locations</Cell><Cell>Council rooms, stages, theaters, throne rooms.</Cell></Row>
<Row><Cell>Influence Penalty</Cell><Cell><Icons id="spirit-marshal-down-icons" wrapper="prefixIcon" list={["down"]} /> The time you spend concentrating on your allies prevents you from attending to other important matters. You take a penalty equal to your <em>spirit bonus</em> on Wisdom checks and Wisdom-based skill checks. Additionally, if you are not at least nominally in charge of your present allies, you lose the marshal's <em>spirit bonus</em> and <em>seance boon.</em></Cell></Row>
<Row><Cell>Taboos</Cell><Cell><p>Choose one:</p>
<ul>
<li>You may not allow yourself or your allies to prevent a fleeing enemy from escaping, since an at-large villain makes a better tale (this applies only to enemies seeking to escape, not to those retreating to alert others or fight again from a better position).</li>
<li>You may never leave an ally behind or allow yourself or your allies to sacrifice another ally, even a summoned creature.</li>
<li>You must embrace any opportunity to spread the legend of yourself and your allies, even when a low profile would be helpful.</li>
</ul>
</Cell></Row></Block>
<h3 id="spirit-marshal-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="marshals-order-su" icon={["boost","aura"]}>
<Pair single id="marshals-order-su">Marshal's Order (Su)</Pair>
<Pair title="Ability">You can use your <em>spirit surge</em> on attack rolls, saving throws, ability checks, <Link to="/rule/concentration">concentration</Link> checks, and skill checks rolled by you or any allies who participated in your <em>seance</em> as long as you have line of sight and line of effect, and are within 30 feet of the chosen ally. You can still use <em>spirit surge</em> only once per round.</Pair>
</Ability>
<h3 id="spirit-marshal-intermediate-spirit-power">Intermediate Spirit Power</h3>
<Ability id="inspiring-call-su" icon={["boost","def"]}>
<Pair single id="inspiring-call-su">Inspiring Call (Su)</Pair>
<Pair title="Standard Action">You can grant all allies who can see and hear you a competence bonus equal to your <em>spirit bonus</em> on either saving throws or attack and damage rolls. You choose which bonus to grant each time you use <em>inspiring call.</em> This ability lasts for 1 round.</Pair>
</Ability>
<h3 id="spirit-marshal-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="decisive-strike-su" icon={["select","power"]}>
<Pair single id="decisive-strike-su">Decisive Strike (Su)</Pair>
<Pair title="Swift Action"><p>You can allow the marshal to gain 1 point of influence over you to allow an ally within 30 feet who can see and hear you to make a single melee or ranged attack during your turn.</p>
<p>You can use this ability as a <strong className="hl">standard action</strong> to instead allow the ally to perform any standard action.</p>
</Pair>
<Pair title="Special">You can use <em>inspiring call</em> as a <strong className="hl">move action</strong>.</Pair>
</Ability>
<h3 id="spirit-marshal-supreme-spirit-power">Supreme Spirit Power</h3>
<Ability id="legendary-marshal-su" icon={["boost"]}>
<Pair single id="legendary-marshal-su">Legendary Marshal (Su)</Pair>
<Pair title="Ability">You can use a lesser <em>spirit surge</em> without incurring influence. This lesser surge adds a maximum of 1d6 to the roll and does not apply your <em>spirit bonus,</em> regardless of other effects or abilities you have that alter your <em>spirit surge.</em> A lesser surge still counts as a <em>spirit surge</em> for the purpose of the limit of one <em>spirit surge</em> per round, but it does not consume any free uses of <em>spirit surge</em> you may have from effects such as <em>taboo.</em></Pair>
<Pair title="Special">You can use <em>inspiring call</em> as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
</>};
const _trickster = {title: "Trickster", jsx: <><h2 id="spirit-trickster-trickster">Trickster</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 36</Link><br/>A trickster spirit is a savvy and manipulative master of skills.</p>
<Block hl>
<Row><Cell>Spirit Bonus</Cell><Cell>When you channel a trickster, your <em>spirit bonus</em> applies on Dexterity checks, skill checks, and Reflex saves.</Cell></Row>
<Row><Cell>Seance Boon</Cell><Cell><Icons id="spirit-trickster-boost-icons" wrapper="prefixIcon" list={["boost"]} /> Choose one skill when you gain this <em>seance boon.</em> You gain a +1 bonus on skill checks using that skill, and that skill counts as a class skill for you.</Cell></Row>
<Row><Cell>Favored Locations</Cell><Cell>Alleys, mazes, taverns, trap-filled locations.</Cell></Row>
<Row><Cell>Influence Penalty</Cell><Cell><Icons id="spirit-trickster-down-icons" wrapper="prefixIcon" list={["down"]} /> The trickster within you is a protean manipulator, and you begin to see the possibility that everyone around you might have ulterior motives as well. You never count as an ally for the purpose of gaining benefits from another creature's abilities, nor do you count as a willing target for spells. Anyone attempting to target you with a touch range spell, even a beneficial spell, must succeed at a melee touch attack, though you need not attempt saving throws against harmless spells. You gain no benefit from another creature's <Link to="/rule/aid_another">aid another</Link> attempts, as you are too busy making sure they aren't secretly tricking or sabotaging you.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell><p>Choose one:</p>
<ul>
<li>You can't abide revealing your true identity, and you break this <em>taboo</em> when anyone pierces your disguise, even your own allies.</li>
<li>You can never tell the truth.</li>
<li>You can never pass up a more lucrative offer, even if it causes you to switch sides.</li>
</ul>
</Cell></Row></Block>
<h3 id="spirit-trickster-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="tricksters-edge-su" icon={["boost"]}>
<Pair single id="tricksters-edge-su">Trickster's Edge (Su)</Pair>
<Pair title="Choice">Choose any two skills. These skills count as class skills for you, and you are treated as if you had an additional number of ranks in those skills equal to your medium level (to a maximum of your character level).</Pair>
</Ability>
<h3 id="spirit-trickster-intermediate-spirit-power">Intermediate Spirit Power</h3>
<Ability id="surprise-strike-su" icon={["boost"]}>
<Pair single id="surprise-strike-su">Surprise Strike (Su)</Pair>
<Pair title="Ability">When you attack an opponent that's denied its Dexterity bonus to AC, you deal 1d6 points of extra <Link to="/misc/precision_damage">precision damage</Link> for every 3 medium levels. Your target counts as <Link to="/rule/flat_footed">flat-footed</Link> against the first attack you make against that target in a day, regardless of abilities like <Link to="/ability/uncanny_dodge">uncanny dodge</Link>.</Pair>
<Pair title="Special">After your first attack, that target is immune to being made flat-footed by your surprise strike for 24 hours.</Pair>
</Ability>
<h3 id="spirit-trickster-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="transfer-magic-su" icon={["touch"]}>
<Pair single id="transfer-magic-su">Transfer Magic (Su)</Pair>
<Pair title="Standard Action"><p>You can allow the trickster to gain 1 point of influence over you to make a melee touch attack against another creature. If the attack succeeds, you randomly steal one of the harmless spells of the highest spell level active on that creature, ending the effect for the original creature and gaining all remaining duration for yourself.</p>
<p>This ability does not work on personal-range or instantaneous- or permanent-duration spells.</p>
</Pair>
</Ability>
<h3 id="spirit-trickster-supreme-spirit-power">Supreme Spirit Power</h3>
<Ability id="legendary-trickster-su" icon={["roll","magic"]}>
<Pair single id="legendary-trickster-su">Legendary Trickster (Su)</Pair>
<Pair title="Ability">Once per day, instead of rolling for a skill check, you can choose your d20 result.</Pair>
<Pair title="Ability">Additionally, you gain the ability to change form at will as if using <Link to="/spell/greater_polymorph">greater polymorph</Link>, except that you can mimic the form of a specific individual.</Pair>
</Ability>
</>};
const _abrogail_thrune_i = {title: "Abrogail Thrune I", jsx: <><h2 id="spirit-abrogail_thrune_i-abrogail-thrune-i">Abrogail Thrune I</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 10</Link><br/>The ruthless monarch who single-handedly changed the course of Cheliax's history, Abrogail Thrune I struck a bargain with Hell to enable her to seize the nation's throne for her family, ending a bloody civil war.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/hierophant">Hierophant</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain Abrogail Thrune's favor, you must travel to the giant bronze statue of her in the Triumph district in Egorian, or to any place where a lawful outsider with at least 20 Hit Dice has visited or been called. Once there, you must vow to never break a binding contract, and must make a case for why you should be entrusted with power over others. Doing so requires a Wisdom check; if you succeed, Thrune answers your call.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>If you accept a <em>taboo</em> while channeling Thrune, you must vow to fight against chaos wherever you see it.</Cell></Row></Block>
<h3 id="spirit-abrogail_thrune_i-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="dynamic-decree-su" icon={["learn"]}>
<Pair single id="dynamic-decree-su">Dynamic Decree (Su)</Pair>
<Pair hl title="Alters">Divine surge</Pair>
<Pair title="Info">Thrune always grants the following spells of each spell level.</Pair>
<Pair plain title="0"><Link to="/spell/bleed">Bleed</Link></Pair>
<Pair plain title="1st"><Link to="/spell/bane">Bane</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/enthrall">Enthrall</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/agonize">Agonize</Link></Pair>
<Pair plain title="4th"><Link to="/spell/greater_infernal_healing">Greater infernal healing</Link></Pair>
<Pair plain title="5th"><Link to="/spell/true_seeing">True seeing</Link></Pair>
<Pair plain title="6th"><Link to="/spell/banishment">Banishment</Link></Pair>
</Ability>
<h3 id="spirit-abrogail_thrune_i-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="supernatural-aid-su" icon={["magic"]}>
<Pair single id="supernatural-aid-su">Supernatural Aid (Su)</Pair>
<Pair hl title="Replaces">Overflowing grace</Pair>
<Pair title="Ability">Once per day, you can call an outsider with a number of Hit Dice equal to or less than yours (maximum 18 HD) as if casting the appropriate <Link to="/spell/planar_ally">planar ally</Link> spell. You do not need to pay the material component required to cast the spell, but you still must bargain with and pay the outsider for its services.</Pair>
</Ability>
</>};
const _ambras_imre = {title: "Ambras Imre", jsx: <><h2 id="spirit-ambras_imre-ambras-imre">Ambras Imre</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 10</Link><br/>Seeking a place to practice his illegal art, Chelish poisoner Count Ambras Imre settled in Daggermark and eventually established the notorious Daggermark Poisoner's Guild.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/trickster">Trickster</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>Ambras Imre answers only mediums who show ingenuity and proficiency in making poisons. To gain his favor, you must travel to the Daggermark Poisoners' Guild, or to the headquarters of any poisoners' guild, herbalists' guild, or similar organization. Once there, you must vow to use poison to eliminate foes significantly stronger than yourself, and stealthily place a poison you created on a guild member's person (without harming that person) or among the person's belongings, which requires a Dexterity check. If you succeed, Imre answers your call.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>If you accept a <em>taboo</em> while channeling Imre, you must never work for or ally with a monarch or totalitarian.</Cell></Row></Block>
<h3 id="spirit-ambras_imre-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="apprentice-poisoner-su" icon={["def","boost"]}>
<Pair single id="apprentice-poisoner-su">Apprentice Poisoner (Su)</Pair>
<Pair hl title="Replaces">Trickster's edge</Pair>
<Pair title="Ability">You gain <Link to="/ability/poison_use">poison use</Link>, as per the alchemist class feature.</Pair>
<Pair title="Passive Ability">When using <Link to="/skill/craft">Craft</Link> (alchemy) to create poisons, you receive a bonus equal to 1/2 your medium level (minimum 1).</Pair>
<Pair title="At 4th Level">You gain a +2 bonus on all saving throws against poison.</Pair>
</Ability>
</>};
const _ardril_the_would_be_king = {title: "Ardril, the Would-Be King", jsx: <><h2 id="spirit-ardril_the_would_be_king-ardril-the-would-be-king">Ardril, the Would-Be King</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 5</Link><br/>The Would-Be King is an Ulfen folk hero famous for slaying nearly a dozen <Link to="/family/linnorm">linnorms</Link> but refusing to rule any nation until she had slain <Link to="/monster/fafnheir">Fafnheir</Link>, the father of all linnorms. The Linnorm Kings at the time were fearful of losing their positions and sent their own warriors to kill her. Ardril barely escaped with her life, and she fled her home for Valenhall.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/champion">Champion</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain Ardril's favor, you must defeat an enemy with the dragon type and at least 7 Hit Dice without any aid from allies. After defeating the enemy, you must attempt a Wisdom check as you are bombarded with the memory of a linnorm's curse. If you succeed, Ardril answers your call.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>If you accept a <em>taboo</em> while channeling Ardril, you must never seek out or accept any position of power or leadership.</Cell></Row></Block>
<h3 id="spirit-ardril_the_would_be_king-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="challenge-su" extraClasses="hasSubs" icon={["power","boost","def"]}>
<Pair single id="challenge-su">Challenge (Su)</Pair>
<Pair title="Ability">You gain the <em>challenge</em> ability as a <Link to="/class/cavalier">cavalier</Link> of your level. When you <em>challenge</em> a foe, your attacks ignore any damage reduction your target has. In addition, you gain a +2 bonus on saving throws until the <em>challenge</em> ends.</Pair>
</Ability>
<Ability id="challenge-ex" extraClasses="subAbility" icon={["select","boost","down"]}>
<Pair single id="challenge-ex" flavor="Relevant text from the cavalier class ability.">Challenge (Ex)</Pair>
<Pair title="Usage">1 time/day + 1 per three cavalier levels beyond 1st<ByLevelPop levels={[[1,1],[4,2],[7,3],[10,4],[13,5],[16,6],[19,7]]} unit="time" postText="/day" /></Pair>
<Pair title="Swift Action">You challenge a foe to combat, choosing one target within sight to challenge. Your melee attacks deal extra damage whenever the attacks are made against the target of your challenge. This extra damage is equal to your level. Challenging a foe requires much of your concentration. You take a -2 penalty to your Armor Class, except against attacks made by the target of your challenge.</Pair>
<Pair title="Special">The challenge remains in effect until the target is dead or unconscious or until the combat ends.</Pair>
</Ability>
<h3 id="spirit-ardril_the_would_be_king-supreme-spirit-power">Supreme Spirit Power</h3>
<Ability id="death-curse-su" icon={["power"]}>
<Pair single id="death-curse-su">Death Curse (Su)</Pair>
<Pair title="Ability">When you channel Ardril, you can select any two linnorm death curse rage powers (listed below). You can select different rage powers each time you channel Ardril. Treat your medium level as your barbarian level for the purpose of meeting prerequisites. You gain the benefit of these rage powers against challenged foes even if you are not raging. For each additional point of damage that would be dealt by a rage power, you deal 1d6 points of damage instead.</Pair>
</Ability>
<ul>
<li><Link to="/ragepower/cairn_linnorm_death_curse">Cairn Linnorm Death Curse</Link></li>
<li><Link to="/ragepower/crag_linnorm_death_curse">Crag Linnorm Death Curse</Link></li>
<li><Link to="/ragepower/fjord_linnorm_death_curse">Fjord Linnorm Death Curse</Link></li>
<li><Link to="/ragepower/ice_linnorm_death_curse">Ice Linnorm Death Curse</Link></li>
<li><Link to="/ragepower/taiga_linnorm_death_curse">Taiga Linnorm Death Curse</Link></li>
<li><Link to="/ragepower/tarn_linnorm_death_curse">Tarn Linnorm Death Curse</Link></li>
<li><Link to="/ragepower/tor_linnorm_death_curse">Tor Linnorm Death Curse</Link></li>
</ul>
</>};
const _arnisant = {title: "Arnisant", jsx: <><h2 id="spirit-arnisant-arnisant">Arnisant</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 10</Link><br/>General Arnisant was a Taldan hero who sacrificed himself in the battle against <Link to="/monster/tar_baphon">Tar-Baphon</Link> at the end of the Shining Crusade, weakening the lich so his allies could trap the Whispering Tyrant.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/guardian">Guardian</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain Arnisant's favor, you must travel either to the Crusader War College in Vigil, where the Shattered Shield of Arnisant is enshrined, or to the site of any major Shining Crusade battle. Once there, you must swear an oath to slay any undead you meet and concoct a tincture from the remains of a corporeal undead you have killed. You then must drink the tincture and succeed at a Constitution check before Arnisant will answer your call.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>If you accept a <em>taboo</em> while channeling Arnisant, you must always protect others from danger when you can (including defeated enemies, but not enemies that are an active threat to you and others).</Cell></Row></Block>
<h3 id="spirit-arnisant-intermediate-spirit-power">Intermediate Spirit Power</h3>
<Ability id="arnisants-shield-su" icon={["def"]}>
<Pair single id="arnisants-shield-su">Arnisant's Shield (Su)</Pair>
<Pair hl title="Replaces">Absorb blow</Pair>
<Pair title="Ability">Arnisant grants his power to a single shield you wear, allowing you to increase its enhancement bonus by 1 (or add a <Link to="/main/magic_enhancements">shield special ability</Link>) with a +1 bonus base price modifier if the shield's enhancement bonus is already +5).</Pair>
<Pair title="Ability"><p>When you would be slain, turned to stone, or otherwise incapacitated, you can allow Arnisant's spirit to sacrifice himself to protect you from the effect. This negates any single non-damaging effect, and for a damaging effect, it leaves you with 0 hit points or your hit point total just before the deathblow, whichever is lower.</p>
<p>In exchange, you lose contact with Arnisant and have no spirit abilities until your next day's <em>seance.</em> Furthermore, you can't contact Arnisant for 24 hours, and when you next contact Arnisant, he starts with 1 more point of influence over you than normal.</p>
</Pair>
</Ability>
</>};
const _azghaad_i = {title: "Azghaad I", jsx: <><h2 id="spirit-azghaad_i-azghaad-i">Azghaad I</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 11</Link><br/>The ancient founder of Osirion, Azghaad I brought his people together under <Link to="/faith/nethys">Nethys's</Link> guidance at the dawn of the Age of Destiny.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/marshal">Marshal</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain Azghaad's favor, you must visit Azghaad's Spire in Sothis or any government building or ruin tied to Ancient Osirion. Once there, you must extol the greatness of the early god-kings, swear to support Osirion's return to prominence when possible, and succeed at a Charisma check before Azghaad answers your call.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>If you accept a <em>taboo</em> while channeling Azghaad, you must embrace any opportunity to spread the legend of past or former Osirian greatness, even if doing so would be disadvantageous.</Cell></Row></Block>
<h3 id="spirit-azghaad_i-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="all-seeing-eye-su" icon={["magic"]}>
<Pair single id="all-seeing-eye-su" flavor="While your eyes aren't literally all-seeing, you can keep track of all your allies with ease.">All-Seeing Eye (Su)</Pair>
<Pair hl title="Replaces">Decisive strike</Pair>
<Pair title="Move-Equivalent Action">You can shift your senses to any ally who was present for your <em>seance,</em> as if you had the <Link to="/spell/witness">witness</Link> spell active on all of them at all times.</Pair>
</Ability>
</>};
const _beldam_i = {title: "Beldam I", jsx: <><h2 id="spirit-beldam_i-beldam-i">Beldam I</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_132_the_six_legend_soul">Pathfinder #132: The Six-Legend Soul pg. 70</Link><br/>History has a divided memory when it comes to Grand Prince Beldam I. Scholars of the schism that took place between Taldor and its erstwhile territories paint a picture of a diplomatic emperor whose insightful approach resulted in a largely bloodless transition from a monolithic empire to a collection of neighboring nations. Yet those who relate the tales for which the emperor is best known recall a quirky prankster with little regard for ceremony, tradition, or propriety. A rare few see the way in which these two personas combined to form exactly the leader Taldor needed at this fraught point in its history: someone who could offset the difficulty of a painful decision with frivolous antics. It is this balance of effectiveness through trickery that those channeling the spirit of Beldam seek to emulate.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/trickster">Trickster</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>Beldam answers the call of only those who share his esoteric sense of humor. You must convince someone to place a non-sentient animal in a position of authority, so long as such an act would not cause civil unrest or instability. You must then swear a vow to never act without due consideration of the consequences of your actions and attempt a Charisma check. If you succeed, Beldam answers your call.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>If you accept a <em>taboo</em> while channeling Beldam, you must embrace every opportunity to pull a prank or make a jest, but never at your own expense.</Cell></Row></Block>
<h3 id="spirit-beldam_i-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="princely-humor-su" icon={["power"]}>
<Pair single id="princely-humor-su">Princely Humor (Su)</Pair>
<Pair title="Ability">You gain <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link> and <Link to="/feat/improved_feint">Improved Feint</Link> as bonus feats.</Pair>
<Pair title="Ability">When you successfully perform a dirty trick, you can allow Beldam's spirit to gain 1 point of influence over you to target that opponent with <Link to="/spell/hideous_laughter">hideous laughter</Link> (DC = 10 + 1/2 your medium level + your Charisma modifier) as a <strong className="hl">free action</strong> that does not provoke an attack of opportunity, in addition to the effects of the dirty trick.</Pair>
</Ability>
<h3 id="spirit-beldam_i-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="atrocious-gift-su" icon={["touch"]}>
<Pair single id="atrocious-gift-su">Atrocious Gift (Su)</Pair>
<Pair title="Ability">You can allow Beldam to gain 1 point of influence over you to make a melee touch attack against another creature as a <strong className="hl">standard action</strong>. If you hit, you can transfer one disease or poison from yourself to the touched creature. You are immediately cured of the disease or poison and the target must attempt a saving throw against the transferred affliction (at the affliction's save DC) or suffer its effect or initial effect immediately. The target then continues to suffer from the affliction's normal effects thereafter.</Pair>
</Ability>
</>};
const _butcher = {title: "Butcher", jsx: <><h2 id="spirit-butcher-butcher">Butcher</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 58</Link><br/>The Butcher is a spirit of blood, violence, murder, and pain.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/champion">Champion</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain the Butcher's favor, you must deal a total number of hit points of <Link to="/rule/bleed">bleed</Link> damage equal to twice your medium level to two dozen non-mindless living creatures, inflicting as much pain and suffering as possible. You must next vow to never use the Heal skill or magical healing to heal or treat another creature, then succeed at a Strength check.</Cell></Row>
<Row><Cell>Favored Locations</Cell><Cell>Abattoirs, battlefields, execution sites.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>If you accept a <em>taboo</em> while channeling the Butcher, you must not attack with bludgeoning weapons in combat and must never deal nonlethal damage. You must also kill all your defeated foes in combat, although you can accept surrender or take prisoners for the purpose of torturing and then killing those prisoners later (but before the Butcher departs).</Cell></Row></Block>
<h3 id="spirit-butcher-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="bladesharp-ex" icon={["power","boost"]}>
<Pair single id="bladesharp-ex">Bladesharp (Ex)</Pair>
<Pair title="Ability">You gain proficiency in all slashing martial weapons and the <Link to="/eq-weapon/spiked_chain">spiked chain</Link>. Any slashing weapon or spiked chain you wield gains the <Link to="/magic-enh/deadly">deadly</Link> weapon special quality and on a critical hit deals an amount of bleed damage equal to the weapon's critical multiplier - 1.</Pair>
</Ability>
<h3 id="spirit-butcher-intermediate-spirit-power">Intermediate Spirit Power</h3>
<Ability id="bloodletter-ex" icon={["boost"]}>
<Pair single id="bloodletter-ex">Bloodletter (Ex)</Pair>
<Pair title="Ability">The Butcher enhances a single slashing weapon or spiked chain, allowing you to add the <Link to="/magic-enh/keen">keen</Link>, <Link to="/magic-enh/mighty_cleaving">mighty cleaving</Link>, or <Link to="/magic-enh/wounding">wounding</Link> special abilities to the weapon when you wield it.</Pair>
<Pair title="Swift Action">You can allow the Butcher to gain 1 point of influence over you to make that weapon <Link to="/magic-enh/vorpal">vorpal</Link> until the end of your turn, though the vorpal special ability doesn't work with abilities that let you choose the result of your d20 roll. Each time you kill a creature whose CR is greater than your medium level with this vorpal special ability, the butcher gains an additional point of influence over you.</Pair>
</Ability>
</>};
const _cyricas = {title: "Cyricas", jsx: <><h2 id="spirit-cyricas-cyricas">Cyricas</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_132_the_six_legend_soul">Pathfinder #132: The Six-Legend Soul pg. 70</Link><br/>Cyricas the Leaping Lion is a favorite hero among Taldan youth, due to both his miraculous recovery from a childhood ailment and his wild adventures with his ape companion Mardu. Most tales of Cyricas carry some lesson, whether encouraging kindness to animals or bravery in the face of adversity. Many Taldans grow to regard the adventures of Cyricas and Mardu as childish, but learn to respect his inspiring and widely circulated lectures. Those who seek rapport with this legendary spirit find that the bond between juvenile thrill-seeker and learned scholar is perhaps the strongest aspect of Cyricas's identity, superseded perhaps only by an unusual affinity for the number eight.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/hierophant">Hierophant</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain the Leaping Lion's favor, you must release an animal that has been unjustly restrained. You must then swear an oath to never stand idle while an animal is being abused and attempt a Wisdom check. If you succeed, Cyricas answers your call.</Cell></Row>
<Row><Cell>Seance Boon</Cell><Cell>Your bonus on attack rolls when flanking an opponent increases by 2 (normally, to +4).</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>If you accept a <em>taboo</em> while channeling Cyricas, you must vow to never harm an animal.</Cell></Row></Block>
<h3 id="spirit-cyricas-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="natural-magic-su" icon={["learn"]}>
<Pair single id="natural-magic-su">Natural Magic (Su)</Pair>
<Pair title="Ability"><p>You can draw upon the power of nature itself. Instead of your normal spells per day for your medium level, you use the spells per day from the <Link to="/class/mesmerist">Mesmerist</Link> class.</p>
<p>For each level of spell you can now cast (including level 0), each time you channel Cyricas, select a single spell of that level from the <Link to="/main/druid_spell">druid spell list</Link> to add to your medium spell list and spells known until you lose contact with Cyricas.</p>
</Pair>
<Pair title="Special">When you cast these spells, they count as divine (though not for the purpose of fulfilling prerequisites), and thus you must provide verbal and somatic components instead of thought and emotion components, and you must present a sprig of holly or another sacred plant to cast spells that require a divine focus.</Pair>
</Ability>
<h3 id="spirit-cyricas-intermediate-spirit-power">Intermediate Spirit Power</h3>
<Ability id="princely-allies-su" icon={["learn","boost"]}>
<Pair single id="princely-allies-su">Princely Allies (Su)</Pair>
<Pair title="Ability">Add the appropriate <Link to="/spell/summon_natures_ally">summon nature's ally</Link> spell for each spell level you can cast to your medium spell list. As long as you have exactly 1 creature summoned, it gains the benefits of the <Link to="/feat/augment_summoning">Augment Summoning</Link> feat, even if you don't have that feat.</Pair>
</Ability>
<h3 id="spirit-cyricas-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="breaking-chains-su" icon={["def","aura"]}>
<Pair single id="breaking-chains-su">Breaking Chains (Su)</Pair>
<Pair title="Swift Action">You can allow Cyricas to gain 1 point of influence over you to grant the benefits of <Link to="/spell/freedom_of_movement">freedom of movement</Link> to you and all allies within 60 feet for 1 minute.</Pair>
</Ability>
</>};
const _daronlyr_xii = {title: "Daronlyr XII", jsx: <><h2 id="spirit-daronlyr_xii-daronlyr-xii">Daronlyr XII</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_132_the_six_legend_soul">Pathfinder #132: The Six-Legend Soul pg. 71</Link><br/>While most of the legendary spirits of Taldor gained their fame through noble deeds, Daronlyr the Overthrower came to infamy through bold ambition. No one alive today - and likely no one other than Daronlyr himself - knows how much of his arcane might he leveraged in overthrowing his predecessor, but his ability to circumvent even the <Link to="/rule/ulfen_guard">Ulfen Guard</Link> in claiming the throne left few doubting his abilities or his ruthlessness. Students of the arcane seek to trace their heritage to Daronlyr in the hope of capturing some of the Overthrower's prestige, but it is usually particularly ambitious students of the occult who find themselves calling upon the legendary spirit's power.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/archmage">Archmage</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>The Overthrower respects only those who are willing to reach out and claim power. You must use magic to gain control over the leader of a group of 50 or more individuals. Following this accomplishment, you must vow that you will never pass up an opportunity to gain further power for yourself, no matter the cost. This requires an Intelligence check. If you succeed, Daronlyr answers your call.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>If you accept a <em>taboo</em> while channeling Daronlyr, you must acknowledge no authority above your own and reject orders or directives from others.</Cell></Row></Block>
<h3 id="spirit-daronlyr_xii-intermediate-spirit-power">Intermediate Spirit Power</h3>
<Ability id="assume-the-role-su" icon={["magic","boost"]}>
<Pair single id="assume-the-role-su">Assume the Role (Su)</Pair>
<Pair title="Swift Action">You can allow Daronlyr to gain 1 point of influence over you in order to swap your position with that of a willing ally within 60 feet. This is a conjuration [teleportation] effect. The next medium spell you cast within 1 round after making this swap doesn't expend a spell slot and doesn't provoke an attack of opportunity.</Pair>
</Ability>
<h3 id="spirit-daronlyr_xii-supreme-spirit-power">Supreme Spirit Power</h3>
<Ability id="usurp-su" icon={["magic","lower"]}>
<Pair single id="usurp-su">Usurp (Su)</Pair>
<Pair title="Ability">Once per day, when a creature fails a Will save against one of your spell effects, you can forfeit the spell's normal effects to instead affect the target creature as if you had cast <Link to="/spell/greater_possession">greater possession</Link>.</Pair>
</Ability>
</>};
const _deceiver = {title: "Deceiver", jsx: <><h2 id="spirit-deceiver-deceiver">Deceiver</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 58</Link><br/>The Deceiver is the prince of prevarication.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/trickster">Trickster</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain the Deceiver's favor, you must successfully lie to 100 different sentient creatures, convincing each one of a different lie that somehow leads to its death or other great misfortune. You must then vow to never make a truthful statement, except to answer a question whose answer is clearly already known to the asker (such as the color of the sky), and succeed at a Charisma check.</Cell></Row>
<Row><Cell>Spirit Bonus</Cell><Cell>When you channel the Deceiver, your <em>spirit bonus</em> applies to Charisma checks, Charisma-based skill checks, and Will saves against compulsions and divinations.</Cell></Row>
<Row><Cell>Favored Locations</Cell><Cell>Bordellos, courtrooms, gambling dens, taverns.</Cell></Row></Block>
<h3 id="spirit-deceiver-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="skilled-deceiver-ex" icon={["boost"]}>
<Pair single id="skilled-deceiver-ex">Skilled Deceiver (Ex)</Pair>
<Pair title="Passive Ability">You add <Link to="/misc/half">half</Link> of your medium level (minimum 1) as a bonus on all <Link to="/skill/bluff">Bluff</Link> checks.</Pair>
</Ability>
<h3 id="spirit-deceiver-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="shift-blame-ex" icon={["def"]}>
<Pair single id="shift-blame-ex">Shift Blame (Ex)</Pair>
<Pair title="Ability">When you provoke an attack of opportunity from a given enemy, you can divert that attack of opportunity to another target of your choice within the attacker's reach. Afterward, the foe whose attack you diverted becomes immune to this ability for 24 hours.</Pair>
<Pair title="Ability">When you target a creature with a spell, spell-like ability, or supernatural ability, or when you fail a Bluff, Diplomacy, or Intimidate check, you can allow the Deceiver to gain 1 point of influence over you to make the target believe another creature adjacent to you created the effect or attempted to lie to, convince, or bully the target.</Pair>
</Ability>
</>};
const _father_of_legends = {title: "Father of Legends", jsx: <><h2 id="spirit-father_of_legends-father-of-legends">Father of Legends</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 5</Link><br/>The Ulfen regard the Father of Legends as the greatest <Link to="/class/skald">skald</Link> of all time. During his life, there was no greater honor than to be immortalized by his song, and several of the most famous Ulfen epics were first sung by him.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/marshal">Marshal</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain the Father of Legends' favor, you must first compose a song or poem about a heroic event that you witnessed but did not take part in. Then you must perform the piece in front of a crowd of at least 100 people. If you succeed at a Charisma check during the performance, the Father of Legends will answer your call.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>If you accept a <em>taboo</em> while channeling the Father of Legends, you cannot take any actions that would deny an ally an opportunity for glory. This includes killing an enemy that an ally was attempting to defeat or forcibly removing an ally from combat, even when her life is in danger.</Cell></Row></Block>
<h3 id="spirit-father_of_legends-intermediate-spirit-power">Intermediate Spirit Power</h3>
<Ability id="song-of-valor-su" icon={["aura","boost"]}>
<Pair single id="song-of-valor-su">Song of Valor (Su)</Pair>
<Pair title="Standard Action"><p>You can begin a performance that fills allies with power and confidence. Any ally that participated in your <em>seance</em> who can hear your performance receives a morale bonus to Strength and Constitution equal to your <em>spirit bonus.</em></p>
<p>You can maintain this performance for a number of rounds equal to your Charisma modifier plus your <em>spirit bonus.</em> These rounds need not be consecutive. Maintaining your performance is a <strong className="hl">free action</strong>.</p>
</Pair>
</Ability>
<h3 id="spirit-father_of_legends-supreme-spirit-power">Supreme Spirit Power</h3>
<Ability id="saga-of-future-kings-su" icon={["protect"]}>
<Pair single id="saga-of-future-kings-su">Saga of Future Kings (Su)</Pair>
<Pair title="Passive Ability">Each ally who benefits from your <em>song of valor</em> gains DR/- equal to your <em>spirit bonus.</em></Pair>
<Pair title="Ability">In addition, when an ally affected by your song would be reduced to fewer than 0 hit points, she can attempt a Fortitude saving throw (DC = 10 + half the damage received). If the ally succeeds, she instead is reduced to 0 hit points.</Pair>
</Ability>
</>};
const _gennaris_iii = {title: "Gennaris III", jsx: <><h2 id="spirit-gennaris_iii-gennaris-iii">Gennaris III</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_132_the_six_legend_soul">Pathfinder #132: The Six-Legend Soul pg. 71</Link><br/>If Taldaris was the greatest leader of the empire's history, then Grand Prince Gennaris III was unquestionably Taldor's greatest general. No one before or since led as effective a campaign against the Qadiran encroachment as Gennaris, and the brevity of his time as an emperor only strengthened his legacy as a martyr. Few leaders have been so widely loved and so deeply mourned. Renowned for his tactical brilliance as well as his personal might, Gennaris is held up as a paragon of excellence to which Taldan warriors have since aspired. Those seeking to channel the Conqueror's legendary spirit know they must prove their own worth before they merit the attention of Gennaris's spirit.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/champion">Champion</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain the favor of Gennaris, you must gather six weapons, each from defeating a significant enemy (a foe whose CR equals at least your character level - 3). Surrounded by the assembled weapons, you must recount the tales of the battles in which you obtained them and swear an oath that you will become a master of each of them. This requires a Strength check. If you succeed, Gennaris answers your call.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>If you accept a <em>taboo</em> while channeling Gennaris, you must face your opponents with confidence and never retreat from a fight out of cowardice.</Cell></Row></Block>
<h3 id="spirit-gennaris_iii-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="conquerors-weapons-su" icon={["power"]}>
<Pair single id="conquerors-weapons-su">Conqueror's Weapons (Su)</Pair>
<Pair title="Ability">You are considered proficient with the weapon types you gathered in order to gain favor with this spirit (such as longswords or hand crossbows).</Pair>
</Ability>
<h3 id="spirit-gennaris_iii-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="conquered-blades-su" icon={["power","boost"]}>
<Pair single id="conquered-blades-su">Conquered Blades (Su)</Pair>
<Pair title="Ability">You gain <Link to="/feat/improved_critical">Improved Critical</Link> with the weapon types you gathered to gain favor with this spirit. In addition, your attacks with such weapons ignore up to 5 points of damage reduction, except for damage reduction without a type (such as DR 10/-).</Pair>
</Ability>
</>};
const _heretic = {title: "Heretic", jsx: <><h2 id="spirit-heretic-heretic">Heretic</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 58</Link><br/>The Heretic warps the faith of a good deity.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/hierophant">Hierophant</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain the Heretic's favor, you must first pervert the worship of a congregation of worshipers of a good deity to evil. You must then vow to corrupt, debase, and violate the worship of that deity and never perform a truly altruistic act, and finally succeed at a Charisma check.</Cell></Row>
<Row><Cell>Spirit Bonus</Cell><Cell>The Heretic warps the faith of a good deity.</Cell></Row>
<Row><Cell>Seance Boon</Cell><Cell>For the purpose of spells and effects that have an effect based on which deity you worship, you count as worshiping the deity chosen in your vow. For the purpose of divinations, your alignment is the same as the deity's, and you have an aura corresponding to that deity's alignment as if you were a <Link to="/class/cleric">cleric</Link> of that deity. This doesn't alter other effects based on alignment, like smite evil.</Cell></Row>
<Row><Cell>Favored Locations</Cell><Cell>Hidden shrines, repositories of dark knowledge, sacrificial altars, temples.</Cell></Row></Block>
<h3 id="spirit-heretic-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="heresy-su" icon={["learn","boost"]}>
<Pair single id="heresy-su">Heresy (Su)</Pair>
<Pair title="Ability">This functions as the <em>divine surge</em> lesser spirit power but you gain the following <Link to="/class/inquisitor">inquisitor</Link> spells at the indicated spell levels, instead of selecting a set of cleric spells each day.</Pair>
<Pair plain title="0"><Link to="/spell/guidance">Guidance</Link></Pair>
<Pair plain title="1st"><Link to="/spell/divine_favor">Divine favor</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/castigate">Castigate</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/terrible_remorse">Terrible remorse</Link></Pair>
<Pair plain title="4th"><Link to="/spell/reprobation">Reprobation</Link></Pair>
<Pair plain title="5th"><Link to="/spell/mass_castigate">Mass castigate</Link></Pair>
<Pair plain title="6th"><Link to="/spell/overwhelming_presence">Overwhelming presence</Link></Pair>
<Pair title="Special">Whenever you use your <em>spirit surge</em> on a skill check or ability check to convince or trick someone into perverting his faith in the good deity you chose with your vow, the Heretic is pleased and does not gain the usual point of influence over you.</Pair>
</Ability>
<h3 id="spirit-heretic-intermediate-spirit-power">Intermediate Spirit Power</h3>
<Ability id="false-front-su" icon={["power"]}>
<Pair single id="false-front-su">False Front (Su)</Pair>
<Pair title="Ability">You gain the effects of the <em>energy font</em> intermediate spirit power, but you must match the faith you chose to pervert, meaning that you always <Link to="/ability/channel_positive_energy">channel positive energy</Link> and add <Link to="/main/cure_spells">cure spells</Link>.</Pair>
</Ability>
<h3 id="spirit-heretic-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="stolen-grace-su" icon={["magic"]}>
<Pair single id="stolen-grace-su">Stolen Grace (Su)</Pair>
<Pair title="Ability">When a member of your chosen faith who believes that you are a member of that faith's clergy requests you to cast a cleric spell of a spell level you can cast, you can allow the Heretic to gain 1 point of influence over you and expend a spell slot of the appropriate level to cast the spell.</Pair>
</Ability>
</>};
const _kelksiomides = {title: "Kelksiomides", jsx: <><h2 id="spirit-kelksiomides-kelksiomides">Kelksiomides</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 14</Link><br/>Kelksiomides spent his early years working in his family's vineyard. He was selected by his village to be blessed by the <Link to="/monster/cyclops">cyclopes</Link> of the isle, who told the young vintner that tragedy would precede his mythic ascension. Sure enough, Kelksiomides returned home to find his whole village slaughtered. The culprits were captured, but Kelksiomides forgave them, an act that was rewarded by the gods. Kelksiomides stands for hope in the face of despair, for new growth, and for redemption.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/hierophant">Hierophant</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain Kelksiomides's favor, you must travel to the hills of Pol-Ptirmeios, where the hero-god was born. There you must swear to never bear a grudge against another, even if you have been grievously wronged. You must then succeed at a Wisdom check, and if you do, Kelksiomides will answer your call.</Cell></Row>
<Row><Cell>Spirit Bonus</Cell><Cell>When you channel Kelksiomides, your <em>spirit bonus</em> applies on Wisdom checks, Wisdom-based skill checks, and saving throws against spells with the evil descriptor.</Cell></Row>
<Row><Cell>Favored Locations</Cell><Cell>Farms, gardens, orchards, and wooded areas.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>If you accept a <em>taboo</em> while channeling Kelksiomides, you may not deal lethal damage.</Cell></Row></Block>
<h3 id="spirit-kelksiomides-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="student-of-the-earth-su" icon={["learn"]}>
<Pair single id="student-of-the-earth-su">Student of the Earth (Su)</Pair>
<Pair title="Ability"><p>You can draw upon the power of nature itself. Instead of your normal spells per day for your medium level, you use the spells per day from the <Link to="/class/mesmerist">Mesmerist</Link> class.</p>
<p>For each level of spell you can now cast (including level 0), each time you channel Kelksiomides, select a single spell of that level from the <Link to="/main/druid_spell">druid spell list</Link> to add to your medium spell list and spells known until you lose contact with Kelksiomides.</p>
</Pair>
<Pair title="Special">When you cast these spells, they count as divine (though not for the purpose of fulfilling prerequisites), and thus you must provide verbal and somatic components instead of thought and emotion components.</Pair>
</Ability>
<h3 id="spirit-kelksiomides-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="divine-overseer-su" icon={["aura"]}>
<Pair single id="divine-overseer-su">Divine Overseer (Su)</Pair>
<Pair title="Usage">Charisma modifier times/day</Pair>
<Pair title="Swift Action">You can allow Kelksiomides to gain 1 point of influence over you to enable you to <Link to="/ability/channel_positive_energy">channel positive energy</Link> as a cleric of your level and automatically restore or deal the maximum amount your channel permits (for example, 6 points if you roll 1d6 when you channel).</Pair>
</Ability>
</>};
const _lich = {title: "Lich", jsx: <><h2 id="spirit-lich-lich">Lich</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 59</Link><br/>The Lich is a spirit of power over death and the undead.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/archmage">Archmage</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain the Lich's favor, you must research fragments of how to create a personal phylactery and then outline a plan for lichdom. This requires spending 2 months visiting libraries and sites of necromantic power, followed by a successful Intelligence check. You must then vow to never destroy an intelligent undead creature, even if it attacks you first (though it is perfectly acceptable to control it with magic).</Cell></Row>
<Row><Cell>Seance Boon</Cell><Cell>You gain a +4 bonus on damage rolls with your necromancy spells.</Cell></Row>
<Row><Cell>Favored Locations</Cell><Cell>Battlefields, graveyards, tombs.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>If you accept a <em>taboo</em> while channeling the Lich, you must not use beneficial spells on living creatures (except yourself if you are a living creature).</Cell></Row></Block>
<h3 id="spirit-lich-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="necromantic-arcana-su" icon={["learn"]}>
<Pair single id="necromantic-arcana-su">Necromantic Arcana (Su)</Pair>
<Pair title="Ability">This functions as the <em>archmage arcana</em> lesser spirit power, except you gain the following spells at the indicated spell levels (even if they are not the usual spell levels for the sorcerer/wizard spell list), instead of selecting them each day.</Pair>
<Pair plain title="0"><Link to="/spell/bleed">Bleed</Link></Pair>
<Pair plain title="1st"><Link to="/spell/chill_touch">Chill touch</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/command_undead">Command undead</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/animate_dead">Animate dead</Link></Pair>
<Pair plain title="4th"><Link to="/spell/enervation">Enervation</Link></Pair>
<Pair plain title="5th"><Link to="/spell/magic_jar">Magic jar</Link></Pair>
<Pair plain title="6th"><Link to="/spell/create_greater_undead">Create greater undead</Link></Pair>
</Ability>
<h3 id="spirit-lich-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="lesser-lichdom-su" icon={["warning","def"]}>
<Pair single id="lesser-lichdom-su">Lesser Lichdom (Su)</Pair>
<Pair title="Info">In order to benefit from this power, you must have a proto-phylactery that costs you 10,000 gp to create (if you continue with the process of lichdom, you can upgrade this to a true phylactery by paying the difference in cost).</Pair>
<Pair title="Passive Ability">If you die while channeling the Lich, you return from the dead in 1d10 days, reforming around the proto-phylactery and gaining 1 permanent <Link to="/rule/negative_level">negative level</Link> (as if subject to the <Link to="/spell/resurrection">resurrection</Link> spell). This process consumes the proto-phylactery.</Pair>
<Pair title="Special">If you are already a lich, you can instead create a backup phylactery for 10,000 gp, at which you reform if your normal phylactery is destroyed. This consumes the backup phylactery.</Pair>
</Ability>
</>};
const _namzaruum = {title: "Namzaruum", jsx: <><h2 id="spirit-namzaruum-namzaruum">Namzaruum</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 24</Link><br/>Not all gods of Ninshabur are forgotten. Prophets of the herogod Namzaruum claim he rests in the Hall of Slumbering Kings, but will return to lead the faithful to victory.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/marshal">Marshal</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain Namzaruum's favor, journey to his ziggurat at the center of Ezida. There, you must swear to help gather the descendants of Ninshabur and to tell all of Namzaruum's inevitable return. You must also succeed at a Charisma check before Namzaruum will answer your call.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>If you accept a <em>taboo</em> while channeling Namzaruum, you must take any opportunity to seek out Ninshaburian descendants and proselytize, even if doing so would be disadvantageous.</Cell></Row></Block>
<h3 id="spirit-namzaruum-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="phalanx-defense-su" icon={["power","boost"]}>
<Pair single id="phalanx-defense-su">Phalanx Defense (Su)</Pair>
<Pair hl title="Alters">Marshal's order</Pair>
<Pair title="Ability">This functions as the <em>marshal's order</em> ability, except if you or an ally who participated in your <em>seance</em> are adjacent to another ally who participated, you and any applicable allies can also add your <em>spirit surge</em> to your CMD against bull rush, drag, overrun, and trip attempts.</Pair>
</Ability>
<h3 id="spirit-namzaruum-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="slumbering-sword-su" icon={["protect"]}>
<Pair single id="slumbering-sword-su">Slumbering Sword (Su)</Pair>
<Pair hl title="Replaces">Decisive strike</Pair>
<Pair title="Immediate Action"><p>When an ally within 30 feet is attacked, you can allow Namzaruum to gain 1 point of influence over you to provide partial <Link to="/rule/cover">cover</Link> to that ally for a single attack. The ally must be able to see and hear you for this ability to function.</p>
<p>If the attack against your ally misses, your ally can make an attack of opportunity against the enemy who made the attack if that enemy is within your ally's reach.</p>
</Pair>
<Pair title="Special">You can use this ability as a <strong className="hl">standard action</strong> to instead grant an ally partial cover for 1 round, but missed attacks against the ally do not provoke attacks of opportunity.</Pair>
</Ability>
</>};
const _nex = {title: "Nex", jsx: <><h2 id="spirit-nex-nex">Nex</h2>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 11</Link><br/>Nex's legendary spirit offers the power of one of the greatest archmages in Golarion's history. Unlike normal archmage spirits, Nex's legendary spirit grants strange abilities shaped by the lost wizard's unique experiments. Mediums channeling Nex's legendary spirit eventually realize that the spirit has its own long-term plans for them, usually involving the Spire of Nex, but so far no medium has gleaned the full scope of that plan.</p>
<p>The Nex legendary spirit grants modified or unique spirit powers. In all other ways, it functions identically to a standard Archmage spirit.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="spirit-nex--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/arc-medium/nexian_channeler">Nexian Channeler</Link> archetype</td></tr></tbody></table></ScrollContainer></div><Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/archmage">Archmage</Link></Cell></Row>
<Row><Cell>Spirit Bonus</Cell><Cell>When you channel Nex, your <em>spirit bonus</em> applies on <Link to="/rule/concentration">concentration</Link> checks, Intelligence checks, and Intelligence-based skill checks.</Cell></Row>
<Row><Cell>Seance Boon</Cell><Cell><Icons id="spirit-nex-boost-icons" wrapper="prefixIcon" list={["boost"]} /> Your damaging spells deal an additional 2 points of damage of the same type that they would normally deal to each target.</Cell></Row>
<Row><Cell>Favored Locations</Cell><Cell>Arcane redoubts, areas of unusual magic, libraries, schools.</Cell></Row>
<Row><Cell>Influence Penalty</Cell><Cell><Icons id="spirit-nex-down-icons" wrapper="prefixIcon" list={["down"]} /> Your body begins to respond as if you were a frail, aged scholar. You take a penalty equal to your <em>spirit bonus</em> on Strength checks, Strength-based skill checks, Constitution checks, attack rolls, and non-spell damage rolls.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell><p>Choose one:</p>
<ul>
<li>You eschew all faith in the divine, so you must not be the willing target of divine spells or abilities and you must attempt a Will saving throw against even harmless divine spells and abilities.</li>
<li>You must not pass up the opportunity to learn something new and significant (a non-trivial piece of information with a Knowledge check of DC 20 or higher) when that opportunity is directly present.</li>
<li>You must use your own magical solution to a challenge if you can, even if a mundane solution that would require fewer resources is available.</li>
</ul>
</Cell></Row></Block>
<h3 id="spirit-nex-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="nexs-arcana-su" icon={["learn"]}>
<Pair single id="nexs-arcana-su">Nex's Arcana (Su)</Pair>
<Pair title="Ability">Rather than your normal spells per day for your medium level, you gain the spells per day of a <Link to="/class/mesmerist">mesmerist</Link>. For each level of spell you can now cast (including level 0), each time you channel Nex's spirit, select a single spell from the <Link to="/main/spells_sorcerer">sorcerer</Link>/<Link to="/main/spells_wizard">wizard</Link> spell list of that level to add to your medium spell list and spells known until you lose contact with Nex. When you cast these spells, they count as arcane (though not for the purpose of fulfilling prerequisites), and thus you must provide verbal and somatic components instead of thought and emotion components.</Pair>
<Pair title="Special">Because of Nex's hatred of Geb, these spells can't be of the necromancy school.</Pair>
</Ability>
<h3 id="spirit-nex-intermediate-spirit-power">Intermediate Spirit Power</h3>
<Ability id="project-servitor-su" icon={["magic","boost"]}>
<Pair single id="project-servitor-su" flavor="You can create projections of the creatures trapped in the Spire of Nex, just as Nex did during his siege of Absalom.">Project Servitor (Su)</Pair>
<Pair title="Ability">You can expend a spell slot to cast <Link to="/spell/shadow_conjuration">shadow conjuration</Link>, mimicking a <Link to="/spell/summon_monster">summon monster</Link> or <Link to="/spell/summon_natures_ally">summon nature's ally</Link> spell of the spell slot's level (or that spell slot's level + 1 for 5th- and 6th-level slots). These shadows are 10% real per level of the spell slot expended.</Pair>
<Pair title="Special">If you allow Nex to gain 1 point of influence over you, double the reality percentage (to a maximum of 100%; if the result would be greater than 100%, the creature or creatures instead gain the <Link to="/template/advanced">advanced</Link> template).</Pair>
</Ability>
<h3 id="spirit-nex-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="wild-arcana-su" icon={["magic"]}>
<Pair single id="wild-arcana-su">Wild Arcana (Su)</Pair>
<Pair title="Ability">You can allow Nex to gain 1 point of influence over you in order to cast any sorcerer/wizard spell of a level you can cast (even necromancy spells). You must expend a spell slot of the appropriate level, and you can't apply metamagic feats to the spell.</Pair>
</Ability>
<h3 id="spirit-nex-supreme-spirit-power">Supreme Spirit Power</h3>
<Ability id="personal-spire-su" icon={["magic"]}>
<Pair single id="personal-spire-su">Personal Spire (Su)</Pair>
<Pair title="Ability">Nex's legendary spirit grants you access to a personal demiplane that you create (as per one created by <Link to="/spell/greater_create_demiplane">greater create demiplane</Link>). As long as you channel Nex each day, your demiplane remains, but if you ever channel a spirit from a different legend, the demiplane disappears, dumping its inhabitants onto the Astral Plane.</Pair>
<Pair title="Ability">You can use <em>project servitor</em> to summon a shadowy projection of any creature currently within your demiplane, as long as its CR matches the summon spell (CR 1/2 or lower for <Link to="/spell/summon_monster_i">summon monster I</Link>, CR 1 for <Link to="/spell/summon_monster_ii">summon monster II</Link>, CR 2 for <Link to="/spell/summon_monster_iii">summon monster III</Link>, CR 3 or 4 for <Link to="/spell/summon_monster_iv">summon monster IV</Link>, CR 5 or 6 for <Link to="/spell/summon_monster_v">summon monster V</Link>, CR 7 or 8 for <Link to="/spell/summon_monster_vi">summon monster VI</Link>, or CR 9 or 10 for <Link to="/spell/summon_monster_vii">summon monster VII</Link>).</Pair>
<Pair title="Ability">You can allow Nex to gain 1 point of influence over you and expend a 6th-level spell slot to use <em>project servitor</em> as per <Link to="/spell/summon_monster_viii">summon monster VIII</Link> (80% real and can mimic trapped creatures of CR 11 or 12) or <Link to="/spell/summon_monster_ix">summon monster IX</Link> (90% real and can mimic trapped creatures of CR 13 or 14).</Pair>
</Ability>
</>};
const _psomeira = {title: "Psomeira", jsx: <><h2 id="spirit-psomeira-psomeira">Psomeira</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 14</Link><br/>Psomeira was a prodigy captain in the Liachoran guard. It was her spear that forced the beast Ousmariku back into the sea, though not before it laid the city to ruin. Psomeira went missing following the battle and was presumed dead, but she returned a decade later in Aelyosos, and quickly stepped up to train the city for the battle against Ousmariku which she feels is inevitable.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/champion">Champion</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain Psomeira's favor, you first must travel to the ruins of Liachora. On the beach where Psomeira fought the sea monster Ousmariku, you must swear an oath to defend civilization from senseless violence wherever you find it. You must then succeed at a Strength check, and if you do, Psomeira will answer your call.</Cell></Row>
<Row><Cell>Seance Boon</Cell><Cell><Icons id="spirit-psomeira-boost-icons" wrapper="prefixIcon" list={["boost"]} /> You gain a +2 morale bonus on attack rolls against creatures that are at least one size category larger than you.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>If you accept a <em>taboo</em> while channeling Psomeira, you must attack any hostile Huge or larger creature on sight.</Cell></Row></Block>
<h3 id="spirit-psomeira-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="divine-vengeance-su" icon={["magic"]}>
<Pair single id="divine-vengeance-su">Divine Vengeance (Su)</Pair>
<Pair title="Ability">As a divine warrior, you can cast each of the following spells once per day: <Link to="/spell/align_weapon">align weapon</Link> (lawful), <Link to="/spell/magic_weapon">magic weapon</Link>, and <Link to="/spell/shield_of_faith">shield of faith</Link>. Use your medium level in place of a cleric level. These spells do not count toward your regular allotment of spells per day, but you must have a Charisma score of at least 10 + the spell's level to cast them.</Pair>
</Ability>
<h3 id="spirit-psomeira-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="spiritual-force-su" icon={["magic"]}>
<Pair single id="spiritual-force-su">Spiritual Force (Su)</Pair>
<Pair title="Ability">Add <Link to="/spell/divine_power">divine power</Link>, <Link to="/spell/greater_magic_weapon">greater magic weapon</Link>, and <Link to="/spell/magic_vestment">magic vestment</Link> to the list of spells you can cast once per day, following the same rules as the <em>divine vengeance</em> spirit power.</Pair>
</Ability>
</>};
const _savith = {title: "Savith", jsx: <><h2 id="spirit-savith-savith">Savith</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 11</Link><br/>Savith was the Azlanti hero who, during the Age of Legend, descended into the serpentfolk city of Ilmurea and beheaded the evil creatures' god, <Link to="/faith/ydersius">Ydersius</Link>.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/champion">Champion</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain Savith's favor, you must defeat an evil serpentfolk who is at least 1 level higher than yourself. Using a magic weapon, you must decapitate the creature (which requires a successful Strength check) and toss its head into lava or a massive fire while vowing to never retreat from a battle involving evil serpentfolk or worshipers of Ydersius. Savith then answers your call.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>If you accept a <em>taboo</em> while channeling Savith, you must never coat any of your natural or manufactured weapons in poison, nor can you ever dose an enemy with any type of poison.</Cell></Row></Block>
<h3 id="spirit-savith-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="azlanti-heroics-su" icon={["boost"]}>
<Pair single id="azlanti-heroics-su">Azlanti Heroics (Su)</Pair>
<Pair hl title="Alters">Champion's prowess</Pair>
<Pair title="Ability">Savith grants a +1 bonus on all attack rolls when you are wielding a <Link to="/eq-weapon/greatsword">greatsword</Link> in melee combat against evil monstrous humanoids instead of granting proficiency in an exotic weapon with <em>champion's prowess.</em></Pair>
</Ability>
<h3 id="spirit-savith-intermediate-spirit-power">Intermediate Spirit Power</h3>
<Ability id="toe-to-toe-sp" icon={["boost"]}>
<Pair single id="toe-to-toe-sp">Toe to Toe (Sp)</Pair>
<Pair title="Swift Action">When you are in melee combat with a creature that is at least one size category larger than you, if none of your allies are <Link to="/rule/flanking">flanking</Link> it, you can increase your own size as if through <Link to="/spell/enlarge_person">enlarge person</Link>, gaining all the effects of that spell. This does not provoke attacks of opportunity, and the effect lasts as long as you are in melee with that creature or until it is dead.</Pair>
</Ability>
<h3 id="spirit-savith-supreme-spirit-power">Supreme Spirit Power</h3>
<Ability id="azlanti-heroics-su" icon={["power"]}>
<Pair single id="azlanti-heroics-su">Azlanti Heroics (Su)</Pair>
<Pair hl title="Alters">Legendary champion</Pair>
<Pair title="Ability">For the <em>legendary champion</em> ability, Savith grants any two of the following feats: <Link to="/feat/disruptive">Disruptive</Link>, <Link to="/feat/greater_weapon_focus">Greater Weapon Focus</Link> (greatsword), <Link to="/feat/greater_weapon_specialization">Greater Weapon Specialization</Link> (greatsword), <Link to="/feat/weapon_focus">Weapon Focus</Link> (greatsword), <Link to="/feat/weapon_specialization">Weapon Specialization</Link> (greatsword), and <Link to="/feat/spellbreaker">Spellbreaker</Link>.</Pair>
</Ability>
</>};
const _stavian_i = {title: "Stavian I", jsx: <><h2 id="spirit-stavian_i-stavian-i">Stavian I</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_132_the_six_legend_soul">Pathfinder #132: The Six-Legend Soul pg. 71</Link><br/>The Bounty Prince was blessed with many advantages: great charm, noble leadership, and adamant will. His stalwart defense of Taldor against the perceived incursions and offenses of the Sarenites - starting with those whose divinations sparked strife between Stavian and his own brothers - showed his resolve for protecting the nation against the might of divine magic in enemy hands. While some have questioned the necessity of the Great Purge, none can argue the effectiveness with which Stavian pursued his enemies. His spirit has since been called by any number of Taldans who oppose the divine, whether fighting worshipers of evil deities or continuing Stavian's crusade against Qadiran Sarenites.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/guardian">Guardian</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>Stavian tolerates no ambivalence toward or acceptance of an enemy's faith. To gain Stavian's favor, you must destroy an altar or other permanent fixture dedicated to a deity or religion whose followers have wronged you. You must then completely submerge yourself in purifying waters for as long as you can; this requires a Constitution check. If you succeed, Stavian answers your call.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>If you accept a <em>taboo</em> while channeling Stavian, you must relentlessly oppose your enemies and never consort with them.</Cell></Row></Block>
<h3 id="spirit-stavian_i-intermediate-spirit-power">Intermediate Spirit Power</h3>
<Ability id="magical-purge-su" icon={["def"]}>
<Pair single id="magical-purge-su" flavor="Stavian grants you protection against the magical power of your enemies.">Magical Purge (Su)</Pair>
<Pair title="Passive Ability">You gain spell resistance equal to 11 + your medium level.</Pair>
</Ability>
<h3 id="spirit-stavian_i-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="confiscate-healing-su" icon={["lower","aid"]}>
<Pair single id="confiscate-healing-su">Confiscate Healing (Su)</Pair>
<Pair title="Immediate Action">When a creature within 30 feet would benefit from magical healing, you can allow Stavian to gain 1 point of influence over you to redirect the benefits of that healing from the original target to yourself.</Pair>
</Ability>
</>};
const _sulesh_the_great = {title: "Sulesh the Great", jsx: <><h2 id="spirit-sulesh_the_great-sulesh-the-great">Sulesh the Great</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 11</Link><br/>A powerful genie binder from the Padishah Empire of Kelesh, Sulesh the Great created many famed genie seals, including the artifact known as the <Link to="/magic-artifact/bottle_of_the_bound">Bottle of the Bound</Link>, which houses 666 fiends.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/archmage">Archmage</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain Sulesh's favor, you must travel to the Padishah Empire of Kelesh, or to any place where <Link to="/pclass/genie_binder">genie binders</Link> exist, and prove your knowledge about all manner of <Link to="/family/genie">genies</Link>. This requires a successful Intelligence check. You must then vow to never release a genie from its bonds, even if you did not bind it. Sulesh the Great then answers your call.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>If you accept a <em>taboo</em> while channeling Sulesh, you must not suffer the presence of a rival's summoned creatures and must target them if possible during combat, even if doing so would be disadvantageous to your allies.</Cell></Row></Block>
<h3 id="spirit-sulesh_the_great-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="suleshs-spells-su" icon={["learn"]}>
<Pair single id="suleshs-spells-su">Sulesh's Spells (Su)</Pair>
<Pair hl title="Alters">Archmage arcana</Pair>
<Pair title="Ability">Sulesh always grants <Link to="/spell/summon_monster_vi">summon monster I-VI</Link>, plus the cantrip <Link to="/spell/detect_magic">detect magic</Link>.</Pair>
</Ability>
<h3 id="spirit-sulesh_the_great-intermediate-spirit-power">Intermediate Spirit Power</h3>
<Ability id="master-summoner-su" icon={["magic"]}>
<Pair single id="master-summoner-su">Master Summoner (Su)</Pair>
<Pair hl title="Replaces">Arcane surge</Pair>
<Pair title="Usage">1 time/day per two medium levels (minimum 1)</Pair>
<Pair title="Ability">You can cast any <em>summon monster</em> spell as a <strong className="hl">standard action</strong> instead of a full-round action.</Pair>
<Pair title="Ability">Additionally, you can allow Sulesh to gain 1 point of influence over you and expend one of your highest-level spell slots to summon a monster that can be summoned with a <em>summon monster</em> spell 1 level higher than the highest one you can cast.</Pair>
</Ability>
</>};
const _taldaris = {title: "Taldaris", jsx: <><h2 id="spirit-taldaris-taldaris">Taldaris</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_132_the_six_legend_soul">Pathfinder #132: The Six-Legend Soul pg. 71</Link><br/>Never since the days of Taldor's founding has there been any leader so capable of unification as the one who brought together the disparate city-states vying for power along the northeastern coast of the Inner Sea. Already legendary when crowned Grand Prince of Oppara, Taldaris nevertheless went on to conquer neighboring territories and found the Principalities of Taldaris, a nascent entity destined to become the greatest empire in the Inner Sea region. Those who seek to channel the spirit of Taldaris must show courage, honor, and integrity, with noble goals of leadership and unification in the face of adversity.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/marshal">Marshal</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain the favor of Taldaris, you must be publicly recognized as the leader of an organization of 50 or more individuals and swear an oath to ensure the cohesion of that group. This requires a Charisma check; if you succeed, Taldaris answers your call.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>If you accept a <em>taboo</em> while channeling Taldaris, you must place the interests of the many above your own, and you must not take any actions that would cause you to benefit at the expense of your allies or your allies' collective goals.</Cell></Row></Block>
<h3 id="spirit-taldaris-intermediate-spirit-power">Intermediate Spirit Power</h3>
<Ability id="legion-leader-su" icon={["power"]}>
<Pair single id="legion-leader-su">Legion Leader (Su)</Pair>
<Pair title="Ability">You gain a <Link to="/main/teamwork_feat">teamwork feat</Link> of your choice for which you meet the prerequisites. All of your allies who joined in the <em>shared seance</em> also gain this feat as a bonus feat, even if they do not meet the prerequisites. You can choose a different feat each time you channel this spirit.</Pair>
</Ability>
<h3 id="spirit-taldaris-supreme-spirit-power">Supreme Spirit Power</h3>
<Ability id="first-emperors-order-su" icon={["boost","def"]}>
<Pair single id="first-emperors-order-su">First Emperor's Order (Su)</Pair>
<Pair title="Ability">You have no limit on the number of times you can use <em>spirit surge</em> in a round, although you can't use it more than once on any d20 roll.</Pair>
<Pair title="Passive Ability">When the spirit of Taldaris gains influence over you for using the <em>marshal's order</em> spirit power on an ally's check, further uses of <em>marshal's order</em> before the start of that creature's next turn do not cause the spirit to gain additional influence over you.</Pair>
</Ability>
</>};
const _terminator = {title: "Terminator", jsx: <><h2 id="spirit-terminator-terminator">Terminator</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 59</Link><br/>The Terminator is a stoic spirit of relentless death.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/guardian">Guardian</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain the Terminator's favor, you must engage in over 1 hour (600 combat rounds) of actual life-or-death battle in the same day, refusing to cease because of either fatigue or mercy. In addition to the battles themselves, this requires a Constitution check. If you succeed, you must swear an oath to never retreat from combat and to eschew all mercy, always killing unconscious, captured, or surrendered foes, regardless of extenuating circumstances.</Cell></Row>
<Row><Cell>Favored Locations</Cell><Cell>Arenas, fortifications under siege, places of violence.</Cell></Row></Block>
<h3 id="spirit-terminator-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="bloodless-su" icon={["def"]}>
<Pair single id="bloodless-su">Bloodless (Su)</Pair>
<Pair title="Passive Ability">You automatically <Link to="/misc/stabilize">stabilize</Link> when at negative hit points, and you are killed only if your negative hit point total exceeds double your Constitution score.</Pair>
<Pair title="Ability">You can allow the Terminator to gain 1 point of influence over you to automatically end any <Link to="/umr/bleed">bleed</Link> or <Link to="/umr/blood_drain">blood drain</Link> effect or effect with the pain descriptor. Doing so is not an action, so you can do this even if you are unconscious.</Pair>
</Ability>
<h3 id="spirit-terminator-intermediate-spirit-power">Intermediate Spirit Power</h3>
<Ability id="emotionless-killer-su" icon={["def","down"]}>
<Pair single id="emotionless-killer-su">Emotionless Killer (Su)</Pair>
<Pair title="Passive Ability">You are immune to emotion effects, including fear, but you can't benefit from morale bonuses or bardic performances.</Pair>
</Ability>
</>};
const _twice_damned_prince = {title: "Twice-Damned Prince", jsx: <><h2 id="spirit-twice_damned_prince-twice-damned-prince">Twice-Damned Prince</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 52</Link><br/>Eccardian Drovenge, son of <Link to="/monster/mammon">Mammon</Link>, was slain atop the Arodennama during a bid for rulership of Westcrown, in a battle that saw the collapse of the Council of Thieves. It was Aspexia's accidental communion with his spirit during a recent <em>seance</em> at the monument that inspired her to rebuild the <Link to="/rule/council_of_thieves">Council of Thieves</Link> in its new incarnation.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/trickster">Trickster</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain the Prince's favor, you must climb atop the 90-foot-tall Arodennama in Westcrown. There, you must pour oil down the statue's cheeks, then set the oil afire. You must vow to seek political influence, and then succeed at a Charisma check (DC = 10 + half your medium level). Tieflings gain a +5 bonus on this check.</Cell></Row>
<Row><Cell>Favored Locations</Cell><Cell>Monuments, noble homes, thieves' dens, anywhere in Westcrown.</Cell></Row>
<Row><Cell>Taboos</Cell><Cell>Eccardian's pride demanded that his victims know whose hand they died by. If you accept a <em>taboo</em> while channeling the Prince, you must not attack any foe who is completely unaware of your presence.</Cell></Row></Block>
<h3 id="spirit-twice_damned_prince-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="master-duelist-su" icon={["def","boost"]}>
<Pair single id="master-duelist-su">Master Duelist (Su)</Pair>
<Pair title="Passive Ability">While wielding a light or one-handed piercing weapon, you gain a +3 dodge bonus to your AC against melee attacks. Your <em>surprise strike</em> damage also applies to attacks against creatures you are <Link to="/rule/flanking">flanking</Link>.</Pair>
</Ability>
</>};
const _warmonger = {title: "Warmonger", jsx: <><h2 id="spirit-warmonger-warmonger">Warmonger</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 59</Link><br/>The Warmonger is a spirit of unbridled strife, inspiring others to throw their lives away in pursuit of hatred and vengeance.</p>
<Block hl>
<Row><Cell>Base Legend</Cell><Cell><Link to="/spirit/marshal">Marshal</Link></Cell></Row>
<Row><Cell>Gaining Favor</Cell><Cell>To gain the Warmonger's favor, you must intentionally incite a war or blood feud between two groups (which could be nations but don't have to be) that results in at least 36 deaths. You must then swear an oath to never allow quarter or truce or to compromise with those who will not meet your demands, and succeed at a Charisma check.</Cell></Row>
<Row><Cell>Favored Locations</Cell><Cell>Barracks, battlefields, fortresses, throne rooms.</Cell></Row></Block>
<h3 id="spirit-warmonger-lesser-spirit-power">Lesser Spirit Power</h3>
<Ability id="no-mercy-su" icon={["boost","protect"]}>
<Pair single id="no-mercy-su">No Mercy (Su)</Pair>
<Pair title="Ability"><p>You can use <em>spirit surge</em> on your own attack rolls or those of allies within 30 feet who participated in your <em>seance,</em> as long as you have line of sight and line of effect.</p>
<p>You can also use your <em>spirit surge</em> when an enemy takes an action that would provoke an attack of opportunity from you or such an ally who threatens that enemy. If you do so, you or an ally of your choice who threatens that enemy can make an attack of opportunity and add your <em>spirit surge,</em> and that attack of opportunity does not count against your normal limit for the round or your ally's.</p>
<p>When you use a <em>spirit surge</em> on an attack roll and the attack hits, the <em>spirit surge</em> benefit also applies to the damage roll.</p>
</Pair>
</Ability>
<h3 id="spirit-warmonger-intermediate-spirit-power">Intermediate Spirit Power</h3>
<Ability id="warmongers-way-su" icon={["learn","boost"]}>
<Pair single id="warmongers-way-su">Warmonger's Way (Su)</Pair>
<Pair title="Info">Add the following spells of spell levels you can currently cast to your list of spells known of those levels.</Pair>
<Pair plain title="1st"><Link to="/spell/command">Command</Link>, <Link to="/spell/murderous_command">murderous command</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/rage">Rage</Link>, <Link to="/spell/tactical_acumen">tactical acumen</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/confusion">Confusion</Link>, <Link to="/spell/fear">fear</Link></Pair>
<Pair plain title="4th"><Link to="/spell/battlemind_link">Battlemind link</Link>, <Link to="/spell/song_of_discord">song of discord</Link></Pair>
<Pair title="Special">You can also use your <em>spirit surge</em> on <Link to="/rule/concentration">concentration</Link> and caster level checks when you cast these spells.</Pair>
</Ability>
<h3 id="spirit-warmonger-greater-spirit-power">Greater Spirit Power</h3>
<Ability id="inspiring-call-su" icon={["boost"]}>
<Pair single id="inspiring-call-su">Inspiring Call (Su)</Pair>
<Pair hl title="Alters">Inspiring call</Pair>
<Pair title="Move-Equivalent Action">You can grant all allies who can see and hear you a competence bonus equal to your <em>spirit bonus</em> on either saving throws or attack and damage rolls. You choose which bonus to grant each time you use inspiring call. This ability lasts for 1 round.</Pair>
<Pair title="Special">If you have the <em>legendary marshal</em> supreme spirit power, you can use inspiring call as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
</>};
const _aeon = {title: "Aeon", topLink: ["Outer Channeler Archetype","arc-medium/outer_channeler"], jsx: <><h2 id="spirit-aeon-aeon">Aeon</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 13</Link><br/>An <Link to="/family/aeon">aeon</Link> is an inscrutable force that dispassionately seeks to bring perfect balance to the multiverse.</p>
<p><strong>Alignment:</strong> Neutral.<br/><strong>Spirits:</strong> <Link to="/monster/akhana">Akhana</Link> (<Link to="/spirit/guardian">guardian</Link>), <Link to="/monster/bythos">bythos</Link> (<Link to="/spirit/archmage">archmage</Link>), <Link to="/monster/lipika">lipika</Link> (<Link to="/spirit/hierophant">hierophant</Link>), <Link to="/monster/paracletus">paracletus</Link> (<Link to="/spirit/marshal">marshal</Link>), and <Link to="/monster/pleroma">pleroma</Link> (<Link to="/spirit/champion">champion</Link>), <Link to="/monster/theletos">theletos</Link> (<Link to="/spirit/trickster">trickster</Link>).<br/><strong>Taboos:</strong> Choose one of the following:</p>
<ul>
<li>You must not be the willing target of a spell or ability that grants a morale bonus</li>
<li>You must not consciously lie or attempt to deceive</li>
<li>You must not purposefully end the life or stop the bleeding (through skill or magic) of a dying creature</li>
</ul>
<p><strong>Void Form (Intermediate, Su):</strong> You gain a +2 deflection bonus to your AC. In addition, there is a 50% chance that a confirmed critical hit against you is negated, and the damage is rolled normally; this chance doesn't stack with any provided by similar abilities, such as from a suit of armor with the light, medium, or heavy <Link to="/magic-enh/fortification">fortification</Link> special ability.</p>
<p><strong>Telepathy (Gift, Su):</strong> You can mentally communicate with any other creature within 100 feet that has a language. It is possible to telepathically address multiple creatures at once, although maintaining a telepathic conversation with more than one creature at a time is just as difficult as simultaneously speaking and listening to multiple people at the same time.</p>
</>};
const _agathion = {title: "Agathion", topLink: ["Outer Channeler Archetype","arc-medium/outer_channeler"], jsx: <><h2 id="spirit-agathion-agathion">Agathion</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 13</Link><br/>An <Link to="/family/agathion">agathion</Link> is an animal-like spirit from Nirvana, a defender of innocence and a champion of good.</p>
<p><strong>Alignment:</strong> Neutral good.<br/><strong>Spirits:</strong> <Link to="/monster/avoral">Avoral</Link> (<Link to="/spirit/guardian">guardian</Link>), <Link to="/monster/bishop_agathion">bishop agathion</Link> (<Link to="/spirit/hierophant">hierophant</Link>), <Link to="/monster/cervinal">cervinal</Link> (<Link to="/spirit/marshal">marshal</Link>), <Link to="/monster/leonal">leonal</Link> (<Link to="/spirit/champion">champion</Link>), <Link to="/monster/reptial">reptial</Link> (<Link to="/spirit/archmage">archmage</Link>), and <Link to="/monster/vulpinal">vulpinal</Link> (<Link to="/spirit/trickster">trickster</Link>).<br/><strong>Taboos:</strong> Choose one of the following:</p>
<ul>
<li>You must act aggressively to best (though not necessarily slay) evil foes</li>
<li>You must provide whatever service you can to promote good in the world and help the innocent, as long as such actions do not impair or prevent you from doing good in the future</li>
<li>You must offer your full protection and support to nonevil innocents who are in need of your service</li>
</ul>
<p><strong>Lay on Hands (Intermediate, Su):</strong> You gain the <Link to="/ability/lay_on_hands">lay on hands</Link> class feature, using your medium level as your effective paladin level.</p>
<p><strong>Voice of Nirvana (Gift, Su):</strong> You can speak to beasts and men alike as a standard action, gaining the benefits of <Link to="/spell/speak_with_animals">speak with animals</Link> and <Link to="/spell/tongues">tongues</Link> simultaneously. You can use this ability for up to 10 minutes per day per medium level. These minutes don't need to be consecutive, but must be used in 1-minute increments.</p>
</>};
const _angel = {title: "Angel", topLink: ["Outer Channeler Archetype","arc-medium/outer_channeler"], jsx: <><h2 id="spirit-angel-angel">Angel</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 13</Link><br/>An <Link to="/family/angel">angel</Link> is a servant of the good-aligned planes, a voice of unity and cooperation among celestial beings.</p>
<p><strong>Alignment:</strong> Any good.<br/><strong>Spirits:</strong> <Link to="/monster/astral_deva">Astral deva</Link> (<Link to="/spirit/trickster">trickster</Link>), <Link to="/monster/balisse">balisse</Link> (<Link to="/spirit/hierophant">hierophant</Link>), <Link to="/monster/empyrean">empyrean</Link> (<Link to="/spirit/archmage">archmage</Link>), <Link to="/monster/movanic_deva">movanic deva</Link> (<Link to="/spirit/champion">champion</Link>), <Link to="/monster/planetar">planetar</Link> (<Link to="/spirit/marshal">marshal</Link>), and <Link to="/monster/solar">solar</Link> (<Link to="/spirit/guardian">guardian</Link>).<br/><strong>Taboos:</strong> Choose one of the following:</p>
<ul>
<li>You must not ignore an opportunity to destroy or hinder an evil creature or organization unless doing so would put innocents in harm's way</li>
<li>You must always offer your foes a chance to peacefully surrender to you, and you must accept and honor any such terms that your foes agree to</li>
<li>You must offer whatever support and assistance you can spare to any creature that asks such service from you, provided your actions do not further the cause of evil</li>
</ul>
<p><strong>Protective Aura (Intermediate, Su):</strong> You gain a +4 deflection bonus to your AC and a +4 resistance bonus on saving throws against attacks made by or effects created by evil creatures. In addition, you are protected from effects created by evil creatures that possess you or exert mental control over you, as per <Link to="/spell/protection_from_evil">protection from evil</Link>.</p>
<p>As a standard action, you can project this benefit to allies within 10 feet as an aura. You may use this ability for a number of rounds per day equal to your medium level. These rounds don't need to be consecutive.</p>
<p><strong>Truespeech (Gift, Su):</strong> You gain <Link to="/spell/tongues">tongues</Link> as a constant spell-like ability, with a caster level equal to your medium level.</p>
</>};
const _archon = {title: "Archon", topLink: ["Outer Channeler Archetype","arc-medium/outer_channeler"], jsx: <><h2 id="spirit-archon-archon">Archon</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 13</Link><br/>An <Link to="/family/archon">archon</Link> is a celestial defender of Heaven, righteousness and justice personified.</p>
<p><strong>Alignment:</strong> Lawful good.<br/><strong>Spirits:</strong> <Link to="/monster/codex_archon">Codex archon</Link> (<Link to="/spirit/archmage">archmage</Link>), <Link to="/monster/hound_archon">hound archon</Link> (<Link to="/spirit/champion">champion</Link>), <Link to="/monster/shield_archon">shield archon</Link> (<Link to="/spirit/guardian">guardian</Link>), <Link to="/monster/spyglass_archon">spyglass archon</Link> (<Link to="/spirit/trickster">trickster</Link>), <Link to="/monster/star_archon">star archon</Link> (<Link to="/spirit/hierophant">hierophant</Link>), and <Link to="/monster/trumpet_archon">trumpet archon</Link> (<Link to="/spirit/marshal">marshal</Link>).<br/><strong>Taboos:</strong> Choose one of the following:</p>
<ul>
<li>You must promote and uphold the tenants of law and good, and may never willingly break a law that is fair and just</li>
<li>You must act with honor and integrity at all times</li>
<li>You must eschew all vices and sinful temptations or desires</li>
</ul>
<p><strong>Aura of Menace (Intermediate, Su):</strong> As a swift action, you activate a righteous aura that embodies your outsider's fury. Hostile creatures within a 20-foot radius of you must succeed at a Will save (DC = 10 + half your medium level + your Charisma modifier) or take a -2 penalty on attack rolls, on saving throws, and to AC. This penalty lasts for 1 minute, or until you become frightened, panicked, paralyzed, stunned, unconscious, or otherwise prevented from participating in the current encounter. Whether or not a creature fails its save, it can't be affected by your aura again for 24 hours.</p>
<p><strong>Teleportation (Gift, Su):</strong> Add <Link to="/spell/dimension_door">dimension door</Link> to your medium spell list and list of spells known as a 4th-level spell. In addition, you can cast dimension door as a spell-like ability a number of times per day equal to your Charisma modifier, using your medium level as the spell's caster level.</p>
</>};
const _azata = {title: "Azata", topLink: ["Outer Channeler Archetype","arc-medium/outer_channeler"], jsx: <><h2 id="spirit-azata-azata">Azata</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 14</Link><br/>An <Link to="/family/azata">azata</Link> is a whimsical outsider from Elysium, a living embodiment of freedom and goodness.</p>
<p><strong>Alignment:</strong> Chaotic good.<br/><strong>Spirits:</strong> <Link to="/monster/bralani">Bralani</Link> (<Link to="/spirit/champion">champion</Link>), <Link to="/monster/ghaele">ghaele</Link> (<Link to="/spirit/hierophant">hierophant</Link>), <Link to="/monster/lillend">lillend</Link> (<Link to="/spirit/marshal">marshal</Link>), <Link to="/monster/raelis">raelis</Link> (<Link to="/spirit/archmage">archmage</Link>), <Link to="/monster/uinuja">uinuja</Link> (<Link to="/spirit/guardian">guardian</Link>), and <Link to="/monster/yamah">yamah</Link> (<Link to="/spirit/trickster">trickster</Link>).<br/><strong>Taboos:</strong> Choose one of the following:</p>
<ul>
<li>Whenever you encounter fine art, food, or performances, you must take no actions for 1d4+1 rounds other than to indulge in your find or until you see a potential or obvious threat (as per the fascinated condition)</li>
<li>You must attempt any challenge or obstacle that blocks your path unless doing so would be obviously harmful to you or those under your care</li>
<li>You must always offer support and protection to any nonevil creature that is unable to protect itself</li>
</ul>
<p><strong>Slip the Surly Bonds (Intermediate, Sp):</strong> You can ignore impediments to your mobility. For a number of rounds per day equal to your medium level, you can move normally regardless of magical effects that impede movement, as if you were affected by <Link to="/spell/freedom_of_movement">freedom of movement</Link>. In addition, you can cast <Link to="/spell/liberating_command">liberating command</Link> as a spell-like ability a number of times per day equal to your Charisma modifier, using your medium level as the spell's caster level.</p>
<p><strong>Gift of Flight (Gift, Ex):</strong> You grow feathery wings as a swift action, which otherwise function as per <Link to="/spell/fly">fly</Link>. You can use this ability for a number of minutes each day equal to your medium level. These minutes don't need to be consecutive, but must be used in 1-minute increments.</p>
</>};
const _daemon = {title: "Daemon", topLink: ["Outer Channeler Archetype","arc-medium/outer_channeler"], jsx: <><h2 id="spirit-daemon-daemon">Daemon</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 14</Link><br/>A <Link to="/family/daemon">daemon</Link> is a nihilistic fiend from Abaddon, an entity obsessed with the eradication of mortal life.</p>
<p><strong>Alignment:</strong> Neutral evil.<br/><strong>Spirits:</strong> <Link to="/monster/astradaemon">Astradaemon</Link> (<Link to="/spirit/hierophant">hierophant</Link>), <Link to="/monster/ceustodaemon">ceustodaemon</Link> (<Link to="/spirit/guardian">guardian</Link>), <Link to="/monster/derghodaemon">derghodaemon</Link> (<Link to="/spirit/champion">champion</Link>), <Link to="/monster/phasmadaemon">phasmadaemon</Link> (<Link to="/spirit/trickster">trickster</Link>), <Link to="/monster/purrodaemon">purrodaemon</Link> (<Link to="/spirit/marshal">marshal</Link>), and <Link to="/monster/venedaemon">venedaemon</Link> (<Link to="/spirit/archmage">archmage</Link>).<br/><strong>Taboos:</strong> Choose one of the following:</p>
<ul>
<li>You must painfully end the life of a single mortal creature (with no fewer than half your Hit Dice) per day, provided that doing so does not jeopardize your own safety</li>
<li>You must take every opportunity to manipulate and coerce others into performing self-deprecating and self-destructive actions</li>
<li>You must consume a bit of every mortal creature you slay, be it flesh or soul</li>
</ul>
<p><strong>Summon Daemon (Intermediate, Sp):</strong> You can summon a servant of Abaddon as a standard action. This functions as per <Link to="/spell/summon_monster_ii">summon monster II</Link>, but you can summon only animals with the <Link to="/template/fiendish">fiendish template</Link> or outsiders with the <Link to="/subtype/daemon">daemon</Link> subtype. This ability can summon only one creature, regardless of the list used. For every 2 medium levels beyond 6th, the level of the summon monster spell increases by 1 (to a maximum of <Link to="/spell/summon_monster_ix">summon monster IX</Link> at 20th level). You can use this ability a number of times per day equal to 3 + your Charisma modifier.</p>
<p><strong>Consume the Soul (Gift, Sp):</strong> You can consume or imprison the soul of a dying creature. You gain the ability to cast <Link to="/spell/death_knell">death knell</Link> as a spell-like ability three times per day using your medium level as the spell's caster level. Instead of gaining the normal benefits of this spell when the target fails its save, you can instead lock the target's soul within a <Link to="/spell/create_soul_gem">soul gem</Link>, functioning like the soul lock ability of a <Link to="/monster/cacodaemon">cacodaemon</Link>. You count as an evil outsider for the purpose of determining whether you receive a benefit when you ingest a soul gem created by the soul lock ability.</p>
</>};
const _demon = {title: "Demon", topLink: ["Outer Channeler Archetype","arc-medium/outer_channeler"], jsx: <><h2 id="spirit-demon-demon">Demon</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 14</Link><br/>A <Link to="/family/demon">demon</Link> is a fiendish spawn of the fecund Abyss, discord and destruction made flesh.</p>
<p><strong>Alignment:</strong> Chaotic evil.<br/><strong>Spirits:</strong> <Link to="/monster/glabrezu">Glabrezu</Link> (<Link to="/spirit/archmage">archmage</Link>), <Link to="/monster/incubus">incubus</Link> (<Link to="/spirit/guardian">guardian</Link>), <Link to="/monster/marilith">marilith</Link> (<Link to="/spirit/marshal">marshal</Link>), <Link to="/monster/succubus">succubus</Link> (<Link to="/spirit/trickster">trickster</Link>), <Link to="/monster/vilsteth">vilsteth</Link> (<Link to="/spirit/hierophant">hierophant</Link>), and <Link to="/monster/vrock">vrock</Link> (<Link to="/spirit/champion">champion</Link>).<br/><strong>Taboos:</strong> Choose one of the following:</p>
<ul>
<li>You must not ignore an opportunity to destroy something (or someone) precious to those who actively oppose your plans or goals</li>
<li>You must take every opportunity to tempt or coerce others into embracing their most sinful desires, and you must partake in such delights at every opportunity</li>
<li>You must take every opportunity to inflict physical or emotional pain upon others, provided such indulgences do not detract from your personal goals or safety</li>
</ul>
<p><strong>Summon Demon (Intermediate, Sp):</strong> You can summon a horror from the Abyss as a standard action. This functions as per <Link to="/spell/summon_monster_ii">summon monster II</Link>, but you can summon only animals with the <Link to="/template/fiendish">fiendish template</Link> or outsiders with the <Link to="/subtype/demon">demon</Link> subtype. This ability can summon only one creature, regardless of the list used. For every 2 medium levels beyond 6th, the level of the summon monster spell increases by 1 (to a maximum of <em>summon monster IX</em> at 20th level). You can use this ability a number of times per day equal to 3 + your Charisma modifier.</p>
<p><strong>Demonic Taint (Gift, Su):</strong> Your natural weapons, as well as any weapons you wield, are treated as chaotic and evil for the purpose of overcoming damage reduction.</p>
</>};
const _devil = {title: "Devil", topLink: ["Outer Channeler Archetype","arc-medium/outer_channeler"], jsx: <><h2 id="spirit-devil-devil">Devil</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 15</Link><br/>A <Link to="/family/devil">devil</Link> is a legalistic fiend from Hell, nothing less than absolute law and order incarnate.</p>
<p><strong>Alignment:</strong> Lawful evil.<br/><strong>Spirits:</strong> <Link to="/monster/ayngavhaul">Ayngavhaul</Link> (<Link to="/spirit/archmage">archmage</Link>), <Link to="/monster/cornugon">cornugon</Link> (<Link to="/spirit/champion">champion</Link>), <Link to="/monster/deimavigga">deimavigga</Link> (<Link to="/spirit/hierophant">hierophant</Link>), <Link to="/monster/erinyes">erinyes</Link> (champion), <Link to="/monster/hamatula">hamatula</Link> (<Link to="/spirit/guardian">guardian</Link>), and <Link to="/monster/osyluth">osyluth</Link> (<Link to="/spirit/trickster">trickster</Link>).<br/><strong>Taboos:</strong> Choose one of the following:</p>
<ul>
<li>You must abide by any contracts you sign or verbally agree to, though you are only ever required to obey the letter of these agreements and may twist their intent to your favor</li>
<li>You must tempt others whenever the opportunity arises</li>
<li>You must destroy or despoil all holy sites and relics that you encounter, if doing so would not put you in obvious danger</li>
</ul>
<p><strong>Summon Devil (Intermediate, Sp):</strong> You can summon a denizen of Hell as a standard action. This functions as per <Link to="/spell/summon_monster_ii">summon monster II</Link>, but you can summon only animals with the <Link to="/template/fiendish">fiendish template</Link> or outsiders with the <Link to="/subtype/devil">devil</Link> subtype. This ability can summon only one creature, regardless of the list used. For every 2 medium levels beyond 6th, the level of the summon monster spell increases by 1 (to a maximum of <Link to="/spell/summon_monster_ix">summon monster IX</Link> at 20th level). You can use this ability a number of times per day equal to 3 + your Charisma modifier.</p>
<p><strong>See in Darkness (Gift, Su):</strong> You gain darkvision 30 feet. If you already have darkvision, your darkvision range increases by 30 feet instead. This darkvision allows you to see perfectly in darkness of any kind, even that created by a <Link to="/spell/deeper_darkness">deeper darkness</Link> spell.</p>
</>};
const _psychopomp = {title: "Psychopomp", topLink: ["Outer Channeler Archetype","arc-medium/outer_channeler"], jsx: <><h2 id="spirit-psychopomp-psychopomp">Psychopomp</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 15</Link><br/>A <Link to="/family/psychopomp">psychopomp</Link> is a steward of souls from the Boneyard, tasked with bringing mortal souls to the afterlife.</p>
<p><strong>Alignment:</strong> Neutral.<br/><strong>Spirits:</strong> <Link to="/monster/ahmuuth">Ahmuuth</Link> (<Link to="/spirit/hierophant">hierophant</Link>), <Link to="/monster/catrina">catrina</Link> (<Link to="/spirit/marshal">marshal</Link>), <Link to="/monster/memitim">memitim</Link> (<Link to="/spirit/champion">champion</Link>), <Link to="/monster/morrigna">morrigna</Link> (<Link to="/spirit/trickster">trickster</Link>), <Link to="/monster/vanth">vanth</Link> (<Link to="/spirit/guardian">guardian</Link>), and <Link to="/monster/viduus">viduus</Link> (<Link to="/spirit/archmage">archmage</Link>).<br/><strong>Taboos:</strong> Choose one of the following:</p>
<ul>
<li>You must destroy all haunts and undead creatures whose paths you cross and oppose the creation of such creatures</li>
<li>You must destroy all creatures that would seek to imprison or destroy mortal souls, and set trapped souls free at every opportunity</li>
<li>You must wear a mask that covers the entirety of your face, and never allow it to be removed for as long as you channel the psychopomp</li>
</ul>
<p><strong>Spirit Touch (Intermediate, Su):</strong> You gain powers that assist in battling evil spirits. You are always granted a saving throw to negate death spells, magical death effects, and energy drain, even if one is not normally allowed. In addition, as a swift action, you can grant your natural weapons, as well as any weapon you wield, the <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapon special ability for a number of rounds equal to your medium level. These rounds don't need to be consecutive.</p>
<p><strong>Spiritsense (Gift, Su):</strong> You can notice, locate, and distinguish between living and undead creatures within 30 feet, just as if you had the psychopomp's spiritsense ability.</p>
</>};
export default {not_found:_not_found,archmage:_archmage,champion:_champion,guardian:_guardian,hierophant:_hierophant,marshal:_marshal,trickster:_trickster,abrogail_thrune_i:_abrogail_thrune_i,ambras_imre:_ambras_imre,ardril_the_would_be_king:_ardril_the_would_be_king,arnisant:_arnisant,azghaad_i:_azghaad_i,beldam_i:_beldam_i,butcher:_butcher,cyricas:_cyricas,daronlyr_xii:_daronlyr_xii,deceiver:_deceiver,father_of_legends:_father_of_legends,gennaris_iii:_gennaris_iii,heretic:_heretic,kelksiomides:_kelksiomides,lich:_lich,namzaruum:_namzaruum,nex:_nex,psomeira:_psomeira,savith:_savith,stavian_i:_stavian_i,sulesh_the_great:_sulesh_the_great,taldaris:_taldaris,terminator:_terminator,twice_damned_prince:_twice_damned_prince,warmonger:_warmonger,aeon:_aeon,agathion:_agathion,angel:_angel,archon:_archon,azata:_azata,daemon:_daemon,demon:_demon,devil:_devil,psychopomp:_psychopomp}