import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested mesmerist trick.</p>
</>};
const _astounding_avoidance = {title: "Astounding Avoidance", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 40</Link></p>
<Ability id="astounding-avoidance" icon={["shield-reflect"]}>
<Pair single id="astounding-avoidance" flavor="The subject can avoid damage from magical and unusual attacks.">Astounding Avoidance</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject attempts a saving throw against an attack or spell that normally deals half damage on a successful save, before the subject rolls the save. If the subject succeeds at her save, she takes no damage.</Pair>
<Pair title="At 12th Level">The subject takes only half damage if she fails her save.</Pair>
<Pair title="Special">The benefits of this trick don't stack with those of the <em>evasion</em> or <em>stalwart</em> class features.</Pair>
</Ability>
</>};
const _break_stupor = {title: "Break Stupor", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 18</Link></p>
<Ability id="break-stupor" icon={["remedy","broken-shield"]}>
<Pair single id="break-stupor">Break Stupor</Pair>
<Pair title="Ability"><p>The mesmerist can trigger this trick whenever the subject is under an effect such as the <Link to="/misc/fascinated">fascinated</Link> condition or magical slumber as per the <Link to="/spell/sleep">sleep</Link> spell that would be ended by the subject taking damage or by an obvious threat. The trick sends a momentary phantom threat and sensation of pain, ending the effect. This ability works fast enough to prevent a sleeping creature from falling <Link to="/rule/prone">prone</Link> or dropping what it is holding, if the mesmerist uses it immediately.</p>
<p>The mesmerist can also trigger the trick if the subject becomes <Link to="/misc/confused">confused</Link> as per <Link to="/spell/confusion">confusion</Link>, but if he does so, the subject attacks the mesmerist on its next turn, as if the mesmerist attacked the subject.</p>
</Pair>
</Ability>
</>};
const _chain_of_eyes = {title: "Chain of Eyes", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 12</Link></p>
<Ability id="chain-of-eyes" icon={["stairs-goal","broken-shield"]}>
<Pair single id="chain-of-eyes">Chain of Eyes</Pair>
<Pair title="Ability"><p>The subject can share her senses with the mesmerist. The mesmerist triggers <em>chain of eyes</em> by closing his eyes and concentrating on the implanted subject, allowing the mesmerist to see and hear everything the target experiences with her own senses of sight and hearing (including any special senses or magical effects).</p>
<p>Once triggered, <em>chain of eyes</em> lasts for 1 minute per mesmerist level or until the mesmerist shifts his field of vision back to himself as a <strong className="hl">free action</strong>.</p>
</Pair>
<Pair title="Special">While viewing events from the target's perspective, the mesmerist is <Link to="/rule/flat_footed">flat-footed</Link>, even if he can see himself from another perspective.</Pair>
</Ability>
</>};
const _compel_alacrity = {title: "Compel Alacrity", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 40</Link></p>
<Ability id="compel-alacrity" icon={["upgrade","armor-upgrade"]}>
<Pair single id="compel-alacrity" flavor="A dash of mental speed lets the subject push past her physical limits to avoid an enemy.">Compel Alacrity</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject begins her turn within an enemy's reach. The subject can move 10 feet as a <strong className="hl">free action</strong> without provoking attacks of opportunity.</Pair>
<Pair title="At 5th Level">The subject can move 15 feet as a free action.</Pair>
<Pair title="At 10th Level">The subject can move 20 feet as a free action.</Pair>
<Pair title="At 15th Level">The subject can move 25 feet as a free action.</Pair>
<Pair title="At 20th Level">The subject can move 30 feet as a free action.</Pair>
<Pair title="Special">The subject can't move farther than her speed in this way. The movement from this trick doesn't count against the subject's movement speed for that round.</Pair>
</Ability>
</>};
const _enchanting_words = {title: "Enchanting Words", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 18</Link></p>
<Ability id="enchanting-words" icon={["upgrade"]}>
<Pair single id="enchanting-words">Enchanting Words</Pair>
<Pair title="Ability">The mesmerist can trigger this trick whenever the subject attempts a Diplomacy or Intimidate check to adjust a creature's attitude. The subject can use the mesmerist's Charisma modifier instead of her own Charisma modifier on the check.</Pair>
<Pair title="Special">If the subject uses Intimidate, the adjustment in attitude lasts an additional number of minutes equal to 10 &times; the mesmerist's Charisma modifier (minimum of 10 additional minutes).</Pair>
</Ability>
</>};
const _false_flanker = {title: "False Flanker", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 40</Link></p>
<Ability id="false-flanker" icon={["upgrade"]}>
<Pair single id="false-flanker" flavor="A duplicate of the mesmerist appears momentarily, as though he were fighting in tandem with the subject.">False Flanker</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject moves into or begins her turn in a square where she threatens an enemy. An illusory duplicate of the mesmerist appears in any unoccupied space adjacent to that enemy. This duplicate counts as threatening the enemy for the purposes of determining <Link to="/rule/flanking">flanking</Link>, but can't actually make attacks. The duplicate disappears at the end of the turn during which the trick is triggered.</Pair>
<Pair title="Special">This is an illusion (figment) effect, and a creature that interacts with the <em>false flanker</em> can attempt a saving throw to disbelieve the effect.</Pair>
</Ability>
</>};
const _fearsome_guise = {title: "Fearsome Guise", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 40</Link></p>
<Ability id="fearsome-guise" icon={["magic-swirl","upgrade"]}>
<Pair single id="fearsome-guise" flavor="A veil of illusion makes the subject appear to be someone else and then transform into a hideous monster at an opportune time.">Fearsome Guise</Pair>
<Pair title="Ability"><p>While this trick is implanted, the subject's appearance is altered, as <Link to="/spell/disguise_self">disguise self</Link>. The mesmerist can trigger this trick when the subject attacks a creature. The illusory appearance briefly makes the subject appear monstrous, then ends.</p>
<p>The mesmerist attempts an <Link to="/skill/intimidate">Intimidate</Link> check to demoralize the target of the triggering attack. The restrictions on attempts to demoralize a target (the target being within 30 feet and able to see and hear the creature attempting the Intimidate check) apply to the subject of the trick.</p>
</Pair>
<Pair title="Special">This is an illusion (glamer) effect.</Pair>
</Ability>
</>};
const _fleet_in_shadows = {title: "Fleet in Shadows", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link></p>
<Ability id="fleet-in-shadows" icon={["upgrade"]}>
<Pair single id="fleet-in-shadows">Fleet in Shadows</Pair>
<Pair title="Ability">The mesmerist can trigger this trick whenever the target enters an area with <Link to="/rule/dim_light">dim or darker light</Link>. The subject can move double its normal speed (up to an additional 30 feet) for 1 round, but only while moving through areas of dim or darker light. Additionally, the subject can move at its normal speed and use the bonus speed from this trick in areas of total darkness, even if it cannot see.</Pair>
</Ability>
</>};
const _gift_of_will = {title: "Gift of Will", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 40</Link></p>
<Ability id="gift-of-will" icon={["shield-reflect"]}>
<Pair single id="gift-of-will" flavor="A small portion of the mesmerist's vast mental power buttresses his ally's mind.">Gift of Will</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject attempts a Will saving throw or a Sense Motive check, or is targeted by an Intimidate check to demoralize her. For a saving throw, the subject uses the mesmerist's Will saving throw bonus instead of her own. For a Sense Motive check or Intimidate check, she adds the mesmerist's Charisma bonus as a morale bonus on the check or to the DC.</Pair>
<Pair title="Special">The mesmerist can't implant this trick on himself.</Pair>
</Ability>
</>};
const _levitation_buffer = {title: "Levitation Buffer", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 41</Link></p>
<Ability id="levitation-buffer" icon={["shield-reflect"]}>
<Pair single id="levitation-buffer" flavor="A mesmerist's telekinetic assault renders foes around the subject less of a threat.">Levitation Buffer</Pair>
<Pair title="Ability"><p>The mesmerist can trigger this trick when either an enemy moves adjacent to the subject or the subject begins her turn with one or more enemies adjacent to her. The mesmerist can either lift all enemies adjacent to the subject slightly into the air or push them all away from the subject.</p>
<p>Lifting enemies causes them to move at half speed and take a -4 penalty to their CMDs against <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/drag">drag</Link>, and <Link to="/rule/reposition">reposition</Link> attempts for 1 round (Will negates). The speed reduction and CMD penalty don't stack with those from hostile levitation.</p>
<p>Pushing enemies away requires the mesmerist to attempt a bull rush combat maneuver check using his mesmerist level + his Charisma modifier as his CMB. Any enemy that's successfully pushed moves away from the subject of the trick using the normal rules for a bull rush.</p>
</Pair>
</Ability>
</>};
const _life_revier = {title: "Life Revier", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 19</Link></p>
<Ability id="life-revier" icon={["upgrade"]}>
<Pair single id="life-revier">Life Revier</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject attempts an Intelligence or Knowledge check to remember a previous experience. The subject receives flashes of her entire life up to this point. She can use the mesmerist's Charisma modifier in place of her Intelligence modifier on the check, and she can attempt the check untrained. The subject cannot learn information that she has not previously read, heard, or otherwise experienced at some point during her life when using this ability.</Pair>
</Ability>
</>};
const _linked_reaction = {title: "Linked Reaction", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 41</Link></p>
<Ability id="linked-reaction" icon={["upgrade"]}>
<Pair single id="linked-reaction" flavor="A hive mind allows the mesmerist and an ally to share one another's reaction times.">Linked Reaction</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when either the subject or the mesmerist is surprised and the other isn't (even if the mesmerist would normally be unable to take actions because of being surprised). Both the mesmerist and the subject can act in this surprise round.</Pair>
<Pair title="Special">The mesmerist can't implant this trick on himself.</Pair>
</Ability>
</>};
const _mask_misery = {title: "Mask Misery", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 41</Link></p>
<Ability id="mask-misery" icon={["remedy"]}>
<Pair single id="mask-misery" flavor="The subject can shrug off a condition for a short time before succumbing to it.">Mask Misery</Pair>
<Pair title="Ability"><p>The mesmerist can trigger this trick when the subject becomes affected by a minor condition listed under the <em>touch treatment</em> ability. The subject can ignore the effect of that condition for 1d4 rounds, after which the subject takes the full effect. This has no effect on any conditions affecting the subject other than the triggering condition, even if those other effects are also listed under <em>touch treatment.</em></p>
<p>The rounds during which the subject ignores the triggering effect still count against that effect's duration; if the duration of <em>mask misery</em> is longer than the effect lasts, the subject isn't affected by the condition at all. If an effect that imposes more than one condition triggers this trick, the subject ignores all eligible conditions.</p>
</Pair>
<Pair title="At 6th Level">He adds the <em>moderate conditions</em> to the conditions he can ignore with this trick, and this trick ends <em>minor conditions</em> entirely instead of suppressing them temporarily.</Pair>
<Pair title="Special">The mesmerist doesn't need to have <em>touch treatment</em> to choose or use this trick.</Pair>
</Ability>
</>};
const _meek_facade = {title: "Meek Facade", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 41</Link></p>
<Ability id="meek-facade" icon={["shield-reflect","magic-swirl"]}>
<Pair single id="meek-facade" flavor="The subject magically seems like a weak target, goading an enemy into attacking her.">Meek Facade</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject misses a creature with an attack (even if it's part of a full attack in which she hits that creature with another attack). The enemy must attack no one other than the subject, and the subject gains a +2 dodge bonus to AC against the triggering enemy's attacks. Both of these effects last for 1 round.</Pair>
<Pair title="At 5th Level">The bonus to AC becomes +3.</Pair>
<Pair title="At 10th Level">The bonus to AC increases to +4.</Pair>
<Pair title="At 15th Level">The bonus to AC becomes +5.</Pair>
<Pair title="At 20th Level">The bonus to AC increases to +6.</Pair>
<Pair title="Special">This is a mind-affecting compulsion effect.</Pair>
</Ability>
</>};
const _mesmeric_mirror = {title: "Mesmeric Mirror", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 41</Link></p>
<Ability id="mesmeric-mirror" icon={["shield-reflect"]}>
<Pair single id="mesmeric-mirror" flavor="An illusory image appears near the subject to throw off attackers.">Mesmeric Mirror</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject is attacked or becomes the target of a spell that requires an attack roll. One duplicate of the subject appears, and the attacker must determine randomly which it hits (as <Link to="/spell/mirror_image">mirror image</Link>).</Pair>
<Pair title="At 5th Level">This trick now creates 2 duplicates.</Pair>
<Pair title="At 10th Level">This trick now makes 3 duplicates.</Pair>
<Pair title="At 15th Level">This trick now creates 4 duplicates.</Pair>
<Pair title="At 20th Level">This trick now makes 5 duplicates.</Pair>
<Pair title="Special">Each image lasts for 1 minute per mesmerist level or until destroyed. This is an illusion (figment) effect.</Pair>
</Ability>
</>};
const _mesmeric_pantomime = {title: "Mesmeric Pantomime", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 41</Link></p>
<Ability id="mesmeric-pantomime" icon={["upgrade"]}>
<Pair single id="mesmeric-pantomime" flavor="By orchestrating the movement of his ally's body, the mesmerist imparts to that ally his own skill at a physical task.">Mesmeric Pantomime</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject attempts a Strength- or Dexterity-based skill check. The subject either uses the mesmerist's bonus on the skill check in place of her own or gains a morale bonus on the check equal to the mesmerist's Charisma bonus, whichever results in a higher modifier.</Pair>
<Pair title="Special">The mesmerist can't implant this trick on himself.</Pair>
</Ability>
</>};
const _misdirection = {title: "Misdirection", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 41</Link></p>
<Ability id="misdirection" icon={["armor-downgrade"]}>
<Pair single id="misdirection" flavor="An enemy's perception of an attack by the subject shifts, making the foe unprepared to defend against the attack.">Misdirection</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject makes an attack or uses a spell that requires an attack roll. The mesmerist attempts a <Link to="/skill/bluff">Bluff</Link> check to feint against a single target of the subject's attack. Unlike a normal feint, this ability can be used on non-melee attacks. If the feint succeeds, the target of the attack is denied its Dexterity bonus to AC against the triggering attack. The target doesn't suffer any additional effects that the mesmerist or the subject would cause on a normal feint or Bluff check.</Pair>
<Pair title="Special">This is an illusion (glamer) effect.</Pair>
</Ability>
</>};
const _psychic_impression = {title: "Psychic Impression", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 9</Link></p>
<Ability id="psychic-impression" icon={["magic-swirl"]}>
<Pair single id="psychic-impression" flavor={<>Objects retain <em>psychic impressions</em> of those who come in contact with them, and a powerful mind can read these impressions.</>}>Psychic Impression</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject touches an object that another creature with an Intelligence score of 3 or more has touched in the last 10 minutes. The mesmerist receives a <em>psychic impression</em> of the emotional state of the last such creature to touch the object. This impression contains no images or languages and can't show the mesmerist who the creature was if the mesmerist doesn't already know.</Pair>
</Ability>
</>};
const _psychosomatic_surge = {title: "Psychosomatic Surge", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 41</Link></p>
<Ability id="psychosomatic-surge" icon={["remedy"]}>
<Pair single id="psychosomatic-surge" flavor="Psychic magic soothes the subject, alleviating her wounds temporarily.">Psychosomatic Surge</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject takes damage. The subject gains a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to 1d8 + 1/2 the mesmerist's level. If the damage from the triggering attack would have reduced the subject to 0 hit points or fewer, this trick grants an additional 1d8 temporary hit points. These temporary hit points last for 1 hour or until discharged.</Pair>
</Ability>
</>};
const _reflect_fear = {title: "Reflect Fear", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link></p>
<Ability id="reflect-fear" icon={["remedy"]}>
<Pair single id="reflect-fear">Reflect Fear</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject is affected by a fear effect or is the target of an Intimidate check to demoralize it. When the trick is triggered, the subject suppresses the fear effect that triggered the trick for 1d4 rounds, and any creature that caused this effect must succeed at a Will save or become <Link to="/misc/shaken">shaken</Link> for 1 round. The rounds during which the subject ignores the triggering fear effect still count against the effect's duration. If the duration of the <em>reflect fear</em> trick is longer than the fear effect lasts, the subject isn't affected by the fear effect at all.</Pair>
</Ability>
</>};
const _reflection_of_weakness = {title: "Reflection of Weakness", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 41</Link></p>
<Ability id="reflection-of-weakness" icon={["shield-reflect","armor-downgrade"]}>
<Pair single id="reflection-of-weakness" flavor="Psychic feedback causes an enemy to suffer from the same weakening effect it imposes on the subject.">Reflection of Weakness</Pair>
<Pair title="Ability"><p>The mesmerist can trigger this trick when an attack or spell used by an enemy causes the subject to take <Link to="/rule/ability_damage_drain">ability damage, ability drain</Link>, <Link to="/rule/bleed">bleed</Link> damage, or a minor or moderate condition listed under the <em>touch treatment</em> class feature.</p>
<p>If the trick is triggered by ability damage, ability drain, or bleed damage, the amount of damage or drain the subject takes is reduced by 2 points (to a minimum of 0 points), and the creature that made the attack or cast the spell takes 2 points of ability damage to an ability score of the mesmerist's choice. The monster can attempt a Will save to negate the ability damage. This ability can be used if the attacker inflicts a curse, disease, or poison that deals ability damage or drain, but only if it deals that damage immediately, with no onset time.</p>
<p>If the trick is triggered by the subject gaining a condition, the subject is still affected by the condition, but the attacker takes a condition of the mesmerist's choice for 1 round. This condition must come from the minor condition or moderate condition lists of the <em>touch treatment</em> class feature. The enemy can attempt a Will save to avoid gaining the condition.</p>
</Pair>
<Pair title="Special">The mesmerist doesn't need to have <em>touch treatment</em> to select or use this trick.</Pair>
</Ability>
</>};
const _see_in_darkness = {title: "See in Darkness", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link></p>
<Ability id="see-in-darkness" icon={["stairs-goal"]}>
<Pair single id="see-in-darkness">See in Darkness</Pair>
<Pair title="Ability">The subject gains darkvision with a range of 60 feet for 1 minute. The mesmerist can trigger this trick when the subject moves into an area of darkness.</Pair>
</Ability>
</>};
const _shadow_splinter = {title: "Shadow Splinter", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 42</Link></p>
<Ability id="shadow-splinter" icon={["shield-reflect"]}>
<Pair single id="shadow-splinter" flavor="The mesmerist protects the subject against an attack and redirects the harm to someone else.">Shadow Splinter</Pair>
<Pair title="Ability"><p>The mesmerist can trigger this trick when the subject takes damage from an attack. The damage the subject takes is reduced by an amount equal to 3 + the mesmerist's Charisma modifier (to a maximum of the total amount of damage the attack deals).</p>
<p>Another creature within range of the original attack, other than the attacker, is affected by a shadow illusion that makes it appear as if the attacker is attacking that creature instead of the attacker's actual target. This second creature takes an amount of damage equal to the amount by which the attack's damage was reduced. This shadow doesn't require a roll to hit and ignores cover and concealment, but the target can attempt a Will save to disbelieve the effect. If it succeeds at this save, it neither takes the damage nor believes the attacker targeted it.</p>
</Pair>
<Pair title="Special">This trick can't be triggered if there's no eligible second creature within range to take the redirected damage. This is an illusion (shadow) effect.</Pair>
</Ability>
</>};
const _slip_bonds = {title: "Slip Bonds", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 12</Link></p>
<Ability id="slip-bonds" icon={["shield-reflect"]}>
<Pair single id="slip-bonds">Slip Bonds</Pair>
<Pair title="Passive Ability">While implanted with this trick, the subject gains a +2 circumstance bonus on Escape Artist checks.</Pair>
<Pair title="Ability">If the subject becomes grappled, pinned, shackled, or otherwise personally restrained, the mesmerist can trigger the trick and cause the subject to become incorporeal just long enough to slip her bonds (unless they can otherwise restrain an incorporeal creature). This effect doesn't last long enough for the subject to move through walls or other barriers.</Pair>
<Pair title="At 12th Level">The subject remains incorporeal until the beginning of the mesmerist's next turn.</Pair>
</Ability>
</>};
const _spectral_smoke = {title: "Spectral Smoke", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 42</Link></p>
<Ability id="spectral-smoke" icon={["shield-reflect"]}>
<Pair single id="spectral-smoke" flavor="A cloud of smoke pops up around the subject, foiling attacks.">Spectral Smoke</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject is targeted by an attack or by a spell that requires an attack roll. A smoke cloud appears in the subject's square and in a 10-foot radius around it. This cloud lasts for 1 round per mesmerist level. The cloud functions as <Link to="/spell/fog_cloud">fog cloud</Link>, but is an illusion (figment) effect that can't be dispersed by wind and can be used underwater. A creature that interacts with the cloud can attempt a saving throw to disbelieve the effect.</Pair>
<Pair title="At 5th Level">The radius of the cloud becomes 15 feet.</Pair>
<Pair title="At 10th Level">The radius of the cloud increases to 20 feet.</Pair>
<Pair title="At 15th Level">The radius of the cloud becomes 25 feet.</Pair>
<Pair title="At 20th Level">The radius of the cloud increases to 30 feet.</Pair>
</Ability>
</>};
const _telepathic_link = {title: "Telepathic Link", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 9</Link></p>
<Ability id="telepathic-link" icon={["stairs-goal"]}>
<Pair single id="telepathic-link" flavor="The subject can communicate telepathically with the mesmerist during a crisis.">Telepathic Link</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject and her allies are outnumbered in combat. For 1 minute per mesmerist level, the subject and the mesmerist can communicate telepathically.</Pair>
<Pair title="Special">If the subject and the mesmerist are more than a medium distance (100 feet + 10 feet per level) apart, the telepathic connection is severed and cannot be regained unless the trick is implanted again. The mesmerist and the subject must share a language to be able to communicate.</Pair>
</Ability>
</>};
const _umbral_shield = {title: "Umbral Shield", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link></p>
<Ability id="umbral-shield" icon={["shield-reflect"]}>
<Pair single id="umbral-shield" flavor="The subject ignores any harmful effects of bright light or sunlight for 1 minute.">Umbral Shield</Pair>
<Pair title="Ability">The mesmerist can trigger this trick whenever the subject would be exposed to harmful bright light (such as sunlight is to a <Link to="/template/vampire">vampire</Link>). The subject is immune to the <Link to="/misc/dazzled">dazzled</Link> condition while this trick is in effect.</Pair>
</Ability>
</>};
const _unwitting_messenger = {title: "Unwitting Messenger", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 12</Link></p>
<Ability id="unwitting-messenger" icon={["magic-swirl"]}>
<Pair single id="unwitting-messenger">Unwitting Messenger</Pair>
<Pair title="Ability"><p>The mesmerist describes a recipient to the subject while implanting this trick, then recites a verbal message no longer than five words per mesmerist level. The subject of <em>unwitting messenger</em> has no memory of the message or the target recipient.</p>
<p>When the subject encounters the specified recipient, she repeats the message verbatim, but does not recall speaking the message or its contents.</p>
</Pair>
<Pair title="Special">The message remains buried in the subject's subconscious for 24 hours, after which time it disappears if not delivered. The subject of <em>unwitting messenger</em> can be fooled by mundane disguises or illusions, causing her to deliver the message to the wrong recipient.</Pair>
</Ability>
</>};
const _vanish_arrow = {title: "Vanish Arrow", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 42</Link></p>
<Ability id="vanish-arrow" icon={["shield-reflect"]}>
<Pair single id="vanish-arrow" flavor="With a flourish, the mesmerist snatches a projectile from an enemy before it can be shot.">Vanish Arrow</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject is targeted by a ranged weapon attack, before the attack roll is made. The mesmerist attempts a <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> check opposed by the attacker's <Link to="/skill/perception">Perception</Link> check. If the mesmerist succeeds, that ranged attack automatically misses, and the projectile appears stowed on the mesmerist's person.</Pair>
<Pair title="Special">If the attacker is making a full attack, this affects only one of the attacks (of the mesmerist's choice). If the attack is made with a <Link to="/eq-weapon/javelin">javelin</Link> or other thrown weapon, the attacker gains a +4 bonus on its Perception check. Unusually massive ranged weapons (such as boulders or ballista bolts) and ranged attacks generated by natural attacks or spell effects are not affected by this ability.</Pair>
</Ability>
</>};
const _voice_of_reason = {title: "Voice of Reason", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 9</Link></p>
<Ability id="voice-of-reason" icon={["shield-reflect"]}>
<Pair single id="voice-of-reason" flavor="The subject can more easily pierce sight-based illusions with the mesmerist's aid.">Voice of Reason</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject attempts a saving throw to disbelieve a sight-based illusion effect, but only so long as the mesmerist is not affected by or has disbelieved the illusion himself. The subject receives an insight bonus on her saving throw to disbelieve the illusion equal to the mesmerist's Charisma modifier.</Pair>
<Pair title="Special">This trick cannot be used for illusions that do not allow a saving throw.</Pair>
</Ability>
</>};
const _allay_pain = {title: "Allay Pain", topLink: ["Masterful Tricks","ability/masterful_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link></p>
<Ability id="allay-pain" icon={["shield-reflect"]}>
<Pair single id="allay-pain">Allay Pain</Pair>
<Pair title="Ability">The subject of this trick gains DR 15/- against one attack that deals nonlethal damage. The mesmerist can trigger this trick whenever the subject is hit with an attack that deals nonlethal damage.</Pair>
</Ability>
</>};
const _avian_escape = {title: "Avian Escape", topLink: ["Masterful Tricks","ability/masterful_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 43</Link></p>
<Ability id="avian-escape" icon={["shield-reflect","magic-swirl"]}>
<Pair single id="avian-escape" flavor="The subject changes shape to elude an attacking enemy.">Avian Escape</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject takes damage from an enemy's attack. The subject transforms into a bird (as <Link to="/spell/beast_shape_iii">beast shape III</Link>).</Pair>
<Pair title="Special">Though the subject can appear as any Tiny bird, it uses the statistics for a <Link to="/monster/raven">raven</Link>. This is a polymorph effect.</Pair>
</Ability>
</>};
const _concealing_veil = {title: "Concealing Veil", topLink: ["Masterful Tricks","ability/masterful_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 12</Link></p>
<Ability id="concealing-veil" icon={["shield-reflect"]}>
<Pair single id="concealing-veil">Concealing Veil</Pair>
<Pair title="Passive Ability">When this trick is triggered, the subject is affected by a <Link to="/spell/nondetection">nondetection</Link> spell for 1 round per mesmerist level.</Pair>
</Ability>
</>};
const _cursed_sanction = {title: "Cursed Sanction", topLink: ["Masterful Tricks","ability/masterful_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 43</Link></p>
<Ability id="cursed-sanction" icon={["shield-reflect"]}>
<Pair single id="cursed-sanction" flavor="A ward curses an enemy who attacks the subject.">Cursed Sanction</Pair>
<Pair title="Passive Ability">While this trick is implanted, a visible, circular symbol appears on the subject's forehead.</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject is attacked or becomes the target of a spell that requires an attack roll. The attacker takes a -4 penalty on attack rolls, saves, ability checks, and skill checks for 1 minute per mesmerist level (Will negates). This penalty applies to the triggering attack roll.</Pair>
<Pair title="Special">This is a curse effect.</Pair>
</Ability>
</>};
const _faked_death = {title: "Faked Death", topLink: ["Masterful Tricks","ability/masterful_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 44</Link></p>
<Ability id="faked-death" icon={["shield-reflect","magic-swirl"]}>
<Pair single id="faked-death" flavor="The subject appears to die, but actually can stealthily move about.">Faked Death</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject is damaged by an attack. The subject seems to fall down dead (as <Link to="/spell/programmed_image">programmed image</Link>), but actually turns invisible (as <Link to="/spell/invisibility">invisibility</Link>) for a number of rounds equal to the mesmerist's level or until she attacks. Once the subject becomes visible again, the illusory dead body disappears.</Pair>
<Pair title="Special">These are illusion effects, and a creature that interacts with the false body can attempt a saving throw to disbelieve the effect. The false body is a figment; the invisibility is a glamer.</Pair>
</Ability>
</>};
const _free_in_body = {title: "Free in Body", topLink: ["Masterful Tricks","ability/masterful_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 44</Link></p>
<Ability id="free-in-body" icon={["shield-reflect"]}>
<Pair single id="free-in-body" flavor="When constrained, the subject can easily slip loose.">Free in Body</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject begins its turn grappled or under an effect that impedes its movement (including paralysis, <Link to="/spell/solid_fog">solid fog</Link>, <Link to="/spell/slow">slow</Link>, and <Link to="/spell/web">web</Link>). The subject gains the benefits of <Link to="/spell/freedom_of_movement">freedom of movement</Link> for 1 minute.</Pair>
</Ability>
</>};
const _greater_mask_misery = {title: "Greater Mask Misery", topLink: ["Masterful Tricks","ability/masterful_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 44</Link></p>
<Ability id="greater-mask-misery" icon={["remedy"]}>
<Pair single id="greater-mask-misery">Greater Mask Misery</Pair>
<Pair title="Prerequisites"><Link to="/trick/mask_misery">Mask misery</Link></Pair>
<Pair title="Info">This trick functions as the <em>mask misery</em> trick, but can be used to ignore <em>greater conditions</em> as well.</Pair>
</Ability>
</>};
const _mental_fallback = {title: "Mental Fallback", topLink: ["Masterful Tricks","ability/masterful_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 44</Link></p>
<Ability id="mental-fallback" icon={["shield-reflect","magic-swirl"]}>
<Pair single id="mental-fallback" flavor="Mental commands placed deep in the subject's mind trigger when she would fall under mind control, allowing the mesmerist to control her instead.">Mental Fallback</Pair>
<Pair title="Ability"><p>The mesmerist can trigger this trick when the subject is affected by a charm or compulsion effect created by an enemy. The subject acts as though the mesmerist had cast the spell instead of the enemy. For instance, if the subject were affected by <Link to="/spell/charm_monster">charm monster</Link> cast by an enemy, that enemy can't try to give her orders, but the mesmerist could.</p>
<p>If the charm or compulsion causes penalties or conditions (such as those imposed by <Link to="/spell/confusion">confusion</Link>, <Link to="/spell/crushing_despair">crushing despair</Link>, or <Link to="/spell/hold_person">hold person</Link>), the subject can ignore any of those penalties or conditions the mesmerist chooses.</p>
<p>This trick overrides the charm or compulsion for a number of rounds equal to the mesmerist's level or until the duration of the triggering effect elapses, whichever comes first.</p>
</Pair>
<Pair title="Special">The mesmerist can't implant this trick on himself.</Pair>
</Ability>
</>};
const _shadow_blend = {title: "Shadow Blend", topLink: ["Masterful Tricks","ability/masterful_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link></p>
<Ability id="shadow-blend" icon={["shield-reflect"]}>
<Pair single id="shadow-blend">Shadow Blend</Pair>
<Pair title="Ability">The mesmerist can trigger this trick whenever the subject attempts a Stealth check while in an area of <Link to="/rule/dim_light">dim or darker light</Link>. The subject gains total <Link to="/rule/concealment">concealment</Link> from all enemies (50% miss chance) as long as it remains within areas of dim or darker light. Against creatures with darkvision, the subject gains concealment (20% miss chance) rather than total concealment.</Pair>
<Pair title="Special">Once triggered, this effect lasts for 1 round per mesmerist level or until the subject enters an area of normal or brighter light.</Pair>
</Ability>
</>};
const _spatial_switch = {title: "Spatial Switch", topLink: ["Masterful Tricks","ability/masterful_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 44</Link></p>
<Ability id="spatial-switch" icon={["magic-swirl"]}>
<Pair single id="spatial-switch" flavor="The mesmerist allows himself and an ally to physically swap places.">Spatial Switch</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when an enemy moves adjacent to or attacks either the subject or the mesmerist, provided the subject and the mesmerist are within 100 feet of one another. The subject and the mesmerist then swap positions.</Pair>
<Pair title="Special">If this trick was triggered by an attack, the swap happens before checking to see whether the attack hits. The mesmerist can't implant this trick on himself. This is a conjuration (teleportation) effect.</Pair>
</Ability>
</>};
const _spell_anticipation = {title: "Spell Anticipation", topLink: ["Masterful Tricks","ability/masterful_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 44</Link></p>
<Ability id="spell-anticipation" icon={["shield-reflect","magic-swirl"]}>
<Pair single id="spell-anticipation" flavor="The mesmerist can choose a spell to strike back at enemy spellcasters.">Spell Anticipation</Pair>
<Pair title="Ability">When the mesmerist implants this trick, he must expend one spell slot to couple a spell he knows of that level with the trick. That spell must have a casting time of 1 standard action or less and be able to target one creature (spells like <Link to="/spell/dominate_person">dominate person</Link> that have more restrictive targeting can be used, but have no effect if triggered against creatures that don't match).</Pair>
<Pair title="Ability">He can trigger this trick when the subject is targeted by an enemy's spell. The mesmerist's spell then triggers, affecting only the enemy spellcaster. This takes effect only if the enemy spellcaster is within range of the spell (as measured from the subject of the trick), and functions as though the mesmerist were in the subject's square.</Pair>
<Pair title="Special">The enemy's spell still has its full effect, even if the mesmerist's spell would normally protect against it or make the caster unable to cast it.</Pair>
</Ability>
</>};
const _umbral_transformation = {title: "Umbral Transformation", topLink: ["Masterful Tricks","ability/masterful_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link></p>
<Ability id="umbral-transformation" icon={["stairs-goal","broken-shield"]}>
<Pair single id="umbral-transformation">Umbral Transformation</Pair>
<Pair title="Ability">The subject of this trick turns into a living shadow for 1 round, as if affected by <Link to="/spell/shadow_body">shadow body</Link>. After this trick ends, the subject is <Link to="/misc/staggered">staggered</Link> for 1 round.</Pair>
</Ability>
</>};
const _vision_of_blood = {title: "Vision of Blood", topLink: ["Masterful Tricks","ability/masterful_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 44</Link></p>
<Ability id="vision-of-blood" icon={["armor-downgrade"]}>
<Pair single id="vision-of-blood" flavor="When an enemy is struck by the subject, it believes its wound is far more severe, and the shock overwhelms it.">Vision of Blood</Pair>
<Pair title="Ability">The mesmerist can trigger this trick when the subject hits with an attack using a weapon, a natural weapon, or an unarmed strike. The attack's target must succeed at a Will saving throw or be <Link to="/misc/stunned">stunned</Link> for 1 round.</Pair>
<Pair title="Special">If the triggering attack was a critical hit, the target doesn't get a saving throw.</Pair>
</Ability>
</>};
const _willful_ignorance = {title: "Willful Ignorance", topLink: ["Masterful Tricks","ability/masterful_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 12</Link></p>
<Ability id="willful-ignorance" icon={["stairs-goal","shield-reflect"]}>
<Pair single id="willful-ignorance">Willful Ignorance</Pair>
<Pair title="Ability">The subject gains the ability to tell one undetectable lie. When the subject attempts to lie, the mesmerist can trigger this trick. That particular lie resists truth-detecting magic, and creatures attempting to use such magic must succeed at a caster level check against a DC equal to 15 + the mesmerist's class level to succeed; failure means the magic doesn't detect the subject's lie or force her to speak only the truth.</Pair>
</Ability>
</>};
export default {not_found:_not_found,astounding_avoidance:_astounding_avoidance,break_stupor:_break_stupor,chain_of_eyes:_chain_of_eyes,compel_alacrity:_compel_alacrity,enchanting_words:_enchanting_words,false_flanker:_false_flanker,fearsome_guise:_fearsome_guise,fleet_in_shadows:_fleet_in_shadows,gift_of_will:_gift_of_will,levitation_buffer:_levitation_buffer,life_revier:_life_revier,linked_reaction:_linked_reaction,mask_misery:_mask_misery,meek_facade:_meek_facade,mesmeric_mirror:_mesmeric_mirror,mesmeric_pantomime:_mesmeric_pantomime,misdirection:_misdirection,psychic_impression:_psychic_impression,psychosomatic_surge:_psychosomatic_surge,reflect_fear:_reflect_fear,reflection_of_weakness:_reflection_of_weakness,see_in_darkness:_see_in_darkness,shadow_splinter:_shadow_splinter,slip_bonds:_slip_bonds,spectral_smoke:_spectral_smoke,telepathic_link:_telepathic_link,umbral_shield:_umbral_shield,unwitting_messenger:_unwitting_messenger,vanish_arrow:_vanish_arrow,voice_of_reason:_voice_of_reason,allay_pain:_allay_pain,avian_escape:_avian_escape,concealing_veil:_concealing_veil,cursed_sanction:_cursed_sanction,faked_death:_faked_death,free_in_body:_free_in_body,greater_mask_misery:_greater_mask_misery,mental_fallback:_mental_fallback,shadow_blend:_shadow_blend,spatial_switch:_spatial_switch,spell_anticipation:_spell_anticipation,umbral_transformation:_umbral_transformation,vision_of_blood:_vision_of_blood,willful_ignorance:_willful_ignorance}