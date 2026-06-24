import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _agathiel = {title: "Agathiel", jsx: <><h2 id="arc-vigilante-agathiel-agathiel">Agathiel</h2>
<p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 25</Link><br/>The legends of Golarion teem with intelligent beasts who emerge from the wild to right wrongs perpetrated by a nation, aid a virtuous family, or extract long-overdue vengeance. Many of these trace back to the agathiel tradition, first stolen from agathion celestials by the elves of Kyonin and again later by Old-Mage Jatembe. Agathiels surrender a portion of their immortal souls to Nirvana in exchange for a measure of animalistic might to aid them in their righteous crusades. This exchange is permanent, and each agathiel commits the rest of his mortal life to service of others and the constant thrum of wild instincts. Though agathiels can be found in small numbers all over Golarion, the rituals to transform a mortal into an agathiel are common only in Kyonin and the Mwangi city-states, and among the wandering scholars of the Mwangi Expanse. The elves in particular relied upon these abilities to scout Golarion before reclaiming their abandoned territories after the Age of Darkness, leading to reports of extraordinary fey animals stalking elven ruins in the century before their return.</p>
<Ability id="arc-vigilante-agathiel-immortal-commitment-su" icon={["hazard-sign"]}>
<Pair single id="arc-vigilante-agathiel-immortal-commitment-su" flavor="Becoming an agathiel commits a portion of the vigilante's soul to Nirvana, and in turn invests him with a portion of the plane's power.">Immortal Commitment (Su)</Pair>
<Pair title="Info">An agathiel's social and vigilante identity alignments must both be within one step of neutral good. If either of the agathiel's alignments moves outside this range (because of his own actions or magical manipulation), he gains 1 permanent <Link to="/rule/negative_level">negative level</Link> and loses the ability to assume his vigilante identity until both of his alignments are within one step of neutral good. This negative level cannot be overcome in any way (including by <Link to="/spell/restoration">restoration</Link> spells) until the agathiel's alignment reverts.</Pair>
</Ability>
<Ability id="arc-vigilante-agathiel-bestial-identity-su" icon={["magic-swirl"]}>
<Pair single id="arc-vigilante-agathiel-bestial-identity-su">Bestial Identity (Su)</Pair>
<Pair hl title="Replaces">Vigilante talents gained at 4th, 8th, 12th, and 16th levels</Pair>
<Pair hl title="Alters">Dual identity</Pair>
<Pair title="At 1st Level">An agathiel's vigilante identity must invoke the appearance and behavior of a single Small or Medium creature of the animal type. The vigilante can attempt to appear to be a normal member of this animal type, but doing so imposes a -10 penalty on his Disguise check. The bonus provided by <em>seamless guise</em> still applies to the vigilante's attempts to appear to be an ordinary animal. Once the vigilante's animal form is selected, it cannot be changed.</Pair>
<Pair title="At 4th Level"><p>When an agathiel assumes his vigilante identity, he physically transforms into an animal, though he always retains unusual traits that set him apart from ordinary animals, as if using <Link to="/spell/beast_shape_i">beast shape I</Link>, except the vigilante gains no ability adjustments and can select only a single animal ability from those listed in the spell's description. His social identity remains his true form, and unlike with <em>beast shape I,</em> an agathiel can remain in his animal form indefinitely. The agathiel's vigilante identity is considered a polymorph effect, and while in his vigilante identity, the agathiel is immune to other polymorph effects.</p>
<p>Unlike with normal polymorph effects, the agathiel's equipment does not meld into his form, and instead changes shape to fit his animal form and provides the same function, though any equipment requiring hands cannot be used until he returns to his social identity.</p>
</Pair>
<Pair title="At 8th Level">When assuming his vigilante identity, the vigilante can select two abilities provided by <em>beast shape I,</em> or select a single ability provided by <Link to="/spell/beast_shape_ii">beast shape II</Link>.</Pair>
<Pair title="At 12th Level">He can instead select two abilities provided by <em>beast shape II,</em> or a single ability provided by <Link to="/spell/beast_shape_iii">beast shape III</Link>.</Pair>
<Pair title="At 16th Level">He can instead select three abilities provided by <em>beast shape III,</em> or a single ability provided by <Link to="/spell/beast_shape_iv">beast shape IV</Link>.</Pair>
</Ability>
<Ability id="arc-vigilante-agathiel-agathion-blessing-su" icon={["stairs-goal"]}>
<Pair single id="arc-vigilante-agathiel-agathion-blessing-su">Agathion Blessing (Su)</Pair>
<Pair hl title="Replaces">Vigilante talent gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">An agathiel gains <Link to="/feat/aspect_of_the_beast">Aspect of the Beast</Link> as a bonus feat while in his vigilante identity. If he selects the *claws of the beast *option, he can select a bite attack (1d8), a gore attack (1d8), or 2 slam attacks (1d4 each), as appropriate to his animal identity.</Pair>
</Ability>
</>};
const _anaphexia_thought_killer = {title: "Anaphexia Thought-Killer", jsx: <><h2 id="arc-vigilante-anaphexia_thought_killer-anaphexia-thought-killer">Anaphexia Thought-Killer</h2>
<p><strong className="hl">NOTE:</strong> The levels given for social and vigilante talents are incorrect, saying the abilities replace social talents at even levels and vigilante talents at odd levels. It is unclear if the abilities and talents should be adjusted up or down a level to compensate, or if the talent types should be switched. Consult your GM if you wish to use this archetype.</p>
<p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 38</Link><br/>Anaphexia thought-killers worship <Link to="/faith/norgorber">Norgorber's</Link> Reaper of Reputation aspect from their secret home in Ustalav. In sacrifice to him, they cut out their own tongues to gain magical protection from exposure and hunt down secrets to steal before they can be spread - which usually requires executing those who already knew them.</p>
<Ability id="arc-vigilante-anaphexia_thought_killer-tongue-sacrifice-su" icon={["info","broken-shield","magic-swirl"]}>
<Pair single id="arc-vigilante-anaphexia_thought_killer-tongue-sacrifice-su">Tongue Sacrifice (Su)</Pair>
<Pair title="Info">An Anaphexia thought-killer's social identity is as a <Link to="/faith/pharasma">Pharasmin</Link> priest, one whom many people assume has taken a vow of silence since they speak so infrequently. In order to assume her vigilante identity, an Anaphexia thought-killer must cut out her own tongue as a <strong className="hl">standard action</strong> - an act that deals 1d4 points of damage plus 1 point of <Link to="/rule/bleed">bleed</Link> damage and leaves her unable to speak (even to cast spells).</Pair>
<Pair title="Ability">The thought-killer gains the ability to cast <Link to="/spell/regenerate">regenerate</Link> as a spell-like ability once per day, and only to restore her own tongue.</Pair>
</Ability>
<Ability id="arc-vigilante-anaphexia_thought_killer-monastic-communication-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-vigilante-anaphexia_thought_killer-monastic-communication-ex">Monastic Communication (Ex)</Pair>
<Pair hl title="Replaces">Social talent gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">An Anaphexia thought-killer is skilled at maintaining a disguise without speaking. She can communicate simple concepts through body language and pantomime as though passing a secret message using the Bluff skill, in half the time normally required to do so. The Anaphexia thought-killer gains a bonus on this check equal to <Link to="/misc/half">half</Link> her vigilante level.</Pair>
</Ability>
<Ability id="arc-vigilante-anaphexia_thought_killer-silent-to-magic-su" icon={["armor-upgrade"]}>
<Pair single id="arc-vigilante-anaphexia_thought_killer-silent-to-magic-su">Silent to Magic (Su)</Pair>
<Pair hl title="Replaces">Social talent gained at 6th level</Pair>
<Pair title="At 6th Level">An Anaphexia thought-killer is protected by <Link to="/spell/nondetection">nondetection</Link> in her social identity but only against mind-reading effects. Her effective caster level is equal to her vigilante level.</Pair>
<Pair title="At 10th Level">This protection also applies to the thought-killer's vigilante identity.</Pair>
</Ability>
<Ability id="arc-vigilante-anaphexia_thought_killer-thought-scent-su" icon={["stairs-goal"]}>
<Pair single id="arc-vigilante-anaphexia_thought_killer-thought-scent-su" flavor="An Anaphexia thought-killer can smell a significant thought.">Thought-Scent (Su)</Pair>
<Pair hl title="Replaces">Vigilante talent gained at 7th level</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Usage">1 minute/day per vigilante level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action">She can choose one fact or idea she already knows, such as a secret she wishes to keep hidden, and can locate any creature within 30 feet who knows it as with the <Link to="/umr/scent">scent</Link> ability. The range increases to 60 feet if the creature is upwind and drops to 15 feet if the creature is downwind. She can discern the direction to the creature until she is adjacent, at which point she can pinpoint the creature's square. This is a mind-affecting divination effect.</Pair>
</Ability>
<Ability id="arc-vigilante-anaphexia_thought_killer-false-reading-su" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="arc-vigilante-anaphexia_thought_killer-false-reading-su">False Reading (Su)</Pair>
<Pair hl title="Replaces">Vigilante talent gained at 15th level</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">An Anaphexia thought-killer is immune to all effects attempting to read her mind in both her social and vigilante identities. The Anaphexia thought-killer can attempt a Bluff check to provide false results to the creature attempting to read her thoughts, which the target can see through with a successful opposed Sense Motive check.</Pair>
</Ability>
</>};
const _avenging_beast = {title: "Avenging Beast", jsx: <><h2 id="arc-vigilante-avenging_beast-avenging-beast">Avenging Beast</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 96</Link><br/>Some vigilantes turn to natural traditions and supernatural forces to transform into beasts, unleashing a primal fury on their foes before returning to an ordinary guise.</p>
<Ability icon={["skills"]} id="arc-vigilante-avenging_beast-undefined">
<Pair id="arc-vigilante-avenging_beast-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/spellcraft">Spellcraft</Link> (INT)</Pair>
<Pair title="Removed Skills">Disable Device, Knowledge (engineering), Perform, Sleight of Hand</Pair></Ability>
<Ability id="arc-vigilante-avenging_beast-skill-ranks-per-level" icon={["broken-shield"]}>
<Pair single id="arc-vigilante-avenging_beast-skill-ranks-per-level">Skill Ranks per Level</Pair>
<Pair hl title="Alters">Skill ranks per level</Pair>
<Pair title="Info">An avenging beast gains a number of skill ranks equal to 4 + his Intelligence modifier at each level, instead of 6 + his Intelligence modifier.</Pair>
</Ability>
<Ability id="arc-vigilante-avenging_beast-animal-mask-ex" icon={["stairs-goal"]}>
<Pair single id="arc-vigilante-avenging_beast-animal-mask-ex">Animal Mask (Ex)</Pair>
<Pair hl title="Alters">Dual identity</Pair>
<Pair title="Info">An avenging beast gains an ornate animal-headed mask that is a focus for his power and must be worn when assuming his vigilante identity. This mask symbolizes one specific animal, and the animal cannot be changed once chosen. Without this mask, an avenging beast cannot assume his vigilante identity.</Pair>
<Pair title="Special">An avenging beast who loses his mask can replace it after 1 week through a specialized ritual that takes 8 hours to complete and costs 200 gp per avenging beast level.</Pair>
</Ability>
<Ability id="arc-vigilante-avenging_beast-spellcasting" icon={["spell-book","magic-swirl"]}>
<Pair single id="arc-vigilante-avenging_beast-spellcasting">Spellcasting</Pair>
<Pair hl title="Replaces">Vigilante talents gained at 4th, 8th, 10th, 14th, and 16th level</Pair>
<Pair title="Ability">An avenging beast casts divine spells as a <Link to="/class/hunter">hunter</Link> and uses the <Link to="/main/spells_hunter">hunter's spell list</Link>.</Pair>
</Ability>
<Ability id="arc-vigilante-avenging_beast-patron-spells" icon={["spell-book"]}>
<Pair single id="arc-vigilante-avenging_beast-patron-spells">Patron Spells</Pair>
<Pair hl title="Replaces">Vigilante specialization</Pair>
<Pair title="Ability">An avenging beast selects a <Link to="/ability/patrons">patron</Link> from the witch patron list and adds the patron bonus spells to his spell list (up to 6th-level spells).</Pair>
<Pair title="Special">Patron spells of 7th level or higher are not counted as being on the avenging beast's spell list.</Pair>
</Ability>
<Ability id="arc-vigilante-avenging_beast-wild-shape-su" extraClasses="hasSubs" icon={["magic-swirl"]}>
<Pair single id="arc-vigilante-avenging_beast-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Startling appearance, frightening appearance, stunning appearance</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">Once per day, when in his vigilante identity, the avenging beast gains the ability to take on the shape of the animal represented by his animal mask. This ability functions identically to the <Link to="/class/druid">druid's</Link> <em>wild shape</em> ability, except the ability does not improve beyond functioning as <Link to="/spell/beast_shape_i">beast shape I</Link>. The avenging beast treats his vigilante level as his druid level for the purposes of this ability.</Pair>
<Pair title="At 7th Level">He can use this 2 times a day.</Pair>
<Pair title="At 9th Level">He can use this 3 times a day.</Pair>
<Pair title="At 11th Level">He can use this 4 times a day.</Pair>
<Pair title="At 13th Level">He can use this 5 times a day.</Pair>
<Pair title="At 15th Level">He can use this 6 times a day.</Pair>
<Pair title="At 17th Level">He can use this 7 times a day.</Pair>
<Pair title="At 19th Level">He can use this 8 times a day.</Pair>
</Ability>
<Ability id="arc-vigilante-avenging_beast-wild-shape-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-vigilante-avenging_beast-wild-shape-su">Wild Shape (Su)</Pair>
<Pair title="Usage">Once a day.</Pair>
<Pair title="Standard Action">You gain the ability to turn yourself into any Small or Medium animal and back again. Your options for new forms include all creatures with the <Link to="/main/monsters_animals">animal</Link> type. This ability functions like the <Link to="/spell/beast_shape_i">beast shape I</Link> spell, except as noted here. The effect lasts for 1 hour per druid level, or until you change back.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
<Pair title="Special">You lose your ability to speak while in animal form because you are limited to the sounds that a normal, untrained animal can make, but you can communicate normally with other animals of the same general grouping as your new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)</Pair>
</Ability>
</>};
const _bellflower_harvester = {title: "Bellflower Harvester", jsx: <><h2 id="arc-vigilante-bellflower_harvester-bellflower-harvester">Bellflower Harvester</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 42</Link>, <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 25</Link><br/>Bellflower harvesters are the front-line operatives of the secretive <Link to="/rule/bellflower_network">Bellflower Network</Link>, whose members infiltrate Chelish estates in the guise of servants and slaves, and tolerate a harsh life as they uncover secrets, gauge security, and send slaves on the first steps toward freedom. While <Link to="/pclass/bellflower_tiller">Bellflower tillers</Link> wander the countryside, escorting the crop of escapees to freedom, Bellflower harvesters remain in seeming bondage to direct others to the road to freedom, undermine efforts to recapture slaves, and end the threat of especially vile masters. Bellflower harvesters consist almost exclusively of halflings, though the role could be taken by anyone with the patience or humility to withstand months or years of cruel abuse without risking being caught raising a hand in his own defense.</p>
<Ability id="arc-vigilante-bellflower_harvester-rebellious-identity-ex" icon={["hazard-sign"]}>
<Pair single id="arc-vigilante-bellflower_harvester-rebellious-identity-ex">Rebellious Identity (Ex)</Pair>
<Pair hl title="Alters">Dual identity</Pair>
<Pair title="Info">A Bellflower harvester's vigilante identity must be within one step of chaotic good, and his social identity must appear to be a servant, slave, or other menial laborer.</Pair>
</Ability>
<Ability id="arc-vigilante-bellflower_harvester-bellflower-crop-ex" icon={["shield-reflect"]}>
<Pair single id="arc-vigilante-bellflower_harvester-bellflower-crop-ex">Bellflower Crop (Ex)</Pair>
<Pair title="Standard Action">A Bellflower harvester can designate a number of allies equal to 3 + his Charisma modifier as part of his Bellflower crop. Members of a Bellflower crop must remain within 30 feet of the vigilante to gain any benefits from abilities that affect a Bellflower crop, regardless of the ability's source (whether it's a Bellflower harvester, <Link to="/arc-rogue/bellflower_irrigator">irrigator</Link>, or <Link to="/pclass/bellflower_tiller">tiller</Link>). If the allies leave this range, the Bellflower harvester must designate them again to include them in his crop.</Pair>
</Ability>
<Ability id="arc-vigilante-bellflower_harvester-crop-vigilance-ex" icon={["upgrade"]}>
<Pair single id="arc-vigilante-bellflower_harvester-crop-vigilance-ex">Crop Vigilance (Ex)</Pair>
<Pair hl title="Replaces">Vigilante specialization</Pair>
<Pair title="Ability">When the Bellflower harvester uses the <Link to="/rule/aid_another_2">aid another</Link> action to grant a member of his Bellflower crop a bonus on an attack roll against an opponent, on a skill check, or to AC against an opponent's next attack, the bonus increases to +3. This doesn't stack with the benefits of other feats or class features that improve the bonus he grants to an ally with aid another.</Pair>
<Pair title="At 5th Level">The bonus becomes +4.</Pair>
<Pair title="At 11th Level">The bonus increases to +5.</Pair>
<Pair title="At 17th Level">The bonus becomes +6.</Pair>
<Pair title="Special">The Bellflower harvester is still treated as if he had the <em>stalker</em> specialization for the purpose of selecting other vigilante talents.</Pair>
</Ability>
<Ability id="arc-vigilante-bellflower_harvester-obsequious-ex" icon={["upgrade"]}>
<Pair single id="arc-vigilante-bellflower_harvester-obsequious-ex" flavor="A Bellflower harvester works hard to cultivate a social identity that plays off others' racist assumptions to deflect blame and excuse suspicious behavior, making him seem harmless or even a model servant.">Obsequious (Ex)</Pair>
<Pair hl title="Replaces">Social talent gained at 1st level</Pair>
<Pair title="Ability">He can use the Bluff skill to deflect suspicion about his vigilante identity and activities (including use of vigilante talents when in his social identity) rather than Disguise, and gains a +2 bonus on Bluff checks to do so.</Pair>
<Pair title="At 5th Level">This bonus becomes +3.</Pair>
<Pair title="At 9th Level">This bonus increases to +4.</Pair>
<Pair title="At 13th Level">This bonus becomes +5.</Pair>
<Pair title="At 17th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="arc-vigilante-bellflower_harvester-tend-the-garden-ex" icon={["stairs-goal"]}>
<Pair single id="arc-vigilante-bellflower_harvester-tend-the-garden-ex" flavor="A Bellflower harvester gains the ability to coordinate the members of his Bellflower crop to improve their performance in battle.">Tend the Garden (Ex)</Pair>
<Pair hl title="Replaces">Vigilante talent gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">He gains <Link to="/feat/stealth_synergy">Stealth Synergy</Link> as a bonus feat.</Pair>
<Pair title="Standard Action">A Bellflower harvester can grant any one teamwork feat he has to all members of his Bellflower crop who can see and hear him. Members of his Bellflower crop retain this feat for 1 round. A Bellflower harvester can share only one teamwork feat at a time in this manner.</Pair>
<Pair title="At 7th Level">They can now retain the feat for 2 rounds.</Pair>
<Pair title="At 12th Level">They can now retain the feat for 3 rounds.</Pair>
<Pair title="At 17th Level">They can now retain the feat for 4 rounds.</Pair>
</Ability>
<p><strong className="hl">The following social talents complement the Bellflower harvester:</strong> <Link to="/soctalent/case_the_joint">case the joint</Link>, <Link to="/soctalent/feign_innocence">feign innocence</Link>, <Link to="/soctalent/gossip_collector">gossip collector</Link>, <Link to="/soctalent/loyal_aid">loyal aid</Link>, and <Link to="/soctalent/subjective_truth">subjective truth</Link>.</p>
<p><strong className="hl">The following vigilante talents complement the Bellflower harvester:</strong> <Link to="/vigtalent/blind_spot">blind spot</Link>, <Link to="/vigtalent/environmental_weapon">environmental weapon</Link>, <Link to="/vigtalent/shadows_sight">shadow's sight</Link>, and <Link to="/vigtalent/team_player">team player</Link>.</p>
</>};
const _brute = {title: "Brute", jsx: <><h2 id="arc-vigilante-brute-brute">Brute</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 54</Link><br/>Either through the results of magical experimentation or bizarre natural sparks, some vigilantes can transform into brutish versions of themselves, becoming larger, more terrifying in appearance, and far more formidable in combat - though at a price.</p>
<Ability id="arc-vigilante-brute-chaotic-vigilante-ex" icon={["hazard-sign"]}>
<Pair single id="arc-vigilante-brute-chaotic-vigilante-ex">Chaotic Vigilante (Ex)</Pair>
<Pair hl title="Alters">Dual identity</Pair>
<Pair title="Info">A brute's vigilante alignment must be chaotic, and his vigilante identity and his social identity must be within one step of each other on the alignment axis.</Pair>
</Ability>
<Ability id="arc-vigilante-brute-brutish-fortitude-ex" icon={["armor-upgrade","broken-shield"]}>
<Pair single id="arc-vigilante-brute-brutish-fortitude-ex">Brutish Fortitude (Ex)</Pair>
<Pair hl title="Alters">Base saving throws</Pair>
<Pair title="Info">A brute's base Fortitude save bonus from his vigilante levels is equal to 2 + half his vigilante level, and his base Reflex and Will save bonuses are equal to 1/3 his vigilante level.</Pair>
</Ability>
<Ability id="arc-vigilante-brute-weapon-and-armor-proficiency" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-vigilante-brute-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Armor and weapon proficiencies</Pair>
<Pair title="Info">A brute isn't proficient with medium armor or martial weapons. However, he gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-vigilante-brute-brute-form-ex" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-vigilante-brute-brute-form-ex">Brute Form (Ex)</Pair>
<Pair hl title="Replaces">Vigilante specialization</Pair>
<Pair title="Ability"><p>Though it is sometimes difficult to maintain, a brute has a measure of control over his abilities.</p>
<p>While in his vigilante identity, a brute becomes one size category larger, gaining no ability score adjustments but otherwise gaining <Link to="/rule/adding_racial_hit_dice">all adjustments</Link> for his new size, including <Link to="/rule/big_and_little_creatures_in_combat">additional reach</Link>, if appropriate.</p>
<p>A brute's vigilante identity is savage and dangerous. While in his vigilante identity, the brute takes a -2 penalty to AC, as well as to all ability checks and skill checks that rely on Charisma, Dexterity, or Intelligence. Furthermore, the brute cannot use any Charisma-, Dexterity-, or Intelligence-based skill (except Acrobatics, Fly, Intimidate, and Ride) or any ability that requires patience or concentration (such as spellcasting).</p>
<p>When a brute is in mortal peril, such as when combat starts, if he is in his social identity, he must succeed at a Will save (DC = 20 + 1/2 his vigilante level) or enter his vigilante identity. Entering his vigilante identity in this way is a horrifying and painful process that takes 1 full round, during which he is <Link to="/rule/flat_footed">flat-footed</Link>, and it typically allows his enemies to see his transformation and learn his identity. The brute's vigilante identity can't always tell friend from foe. While he still attacks enemies preferentially during a battle, when there are no more enemies around, each round he must succeed at a Will save (DC = 20 + 1/2 his vigilante level) or continue fighting against his allies or bystanders. Allies can use the <Link to="/rule/aid_another">aid another</Link> action to assist this saving throw with skills like Diplomacy, as they attempt to calm him down. On a successful save, he slowly turns back to his social identity over the course of 1 minute (or shorter if he has a social talent that reduces that time).</p>
<p>A brute uses his vigilante level as his base attack bonus, but only while he is in his vigilante identity. He uses his normal base attack bonus to qualify for feats and other abilities, although when in his vigilante identity, he uses his increased base attack bonus to determine the effects of feats (such as <Link to="/feat/power_attack">Power Attack</Link>) and other abilities.</p>
<p>A brute's mundane clothes and armor do not increase in size with him, and any such items he wears while changing into his vigilante identity lose one-quarter of their hit points. Magical clothes and accessories increase in size with the vigilante, however (though his magical armor and weapons initially do not, as normal).</p>
<p>A brute can stay in his vigilante identity for up to 2 hours at a time, for a total of up to 6 hours in a 24-hour period. When threatened in his vigilante identity, he has the potential to damage bystanders or allies. After switching from his vigilante identity to his social identity, he is <Link to="/misc/fatigued">fatigued</Link> for the same amount of time (rounds, minutes, or hours) that he spent in his vigilante identity and cannot remove or ignore this fatigue by any means except by waiting the appropriate amount of time. If he enters his vigilante identity while fatigued, once he switches back to his social identity, he becomes <Link to="/misc/exhausted">exhausted</Link> for the amount of time he just spent in his vigilante identity, and he also can't remove or ignore the exhaustion by any means other than waiting the appropriate length of time. A character with immunity to fatigue or exhaustion cannot adopt a brute form at all; that immunity prevents the transformation as an effect that would cause fatigue or exhaustion.</p>
<p>An exhausted brute can only enter his vigilante identity for a number of rounds equal to <Link to="/misc/half">half</Link> his vigilante level (minimum 1); following these rounds, the brute immediately falls unconscious, or into a stupor if he is somehow prevented from falling unconscious. In this state, a brute can be healed as normal (and, if he has 0 hit points or more, he returns to consciousness after receiving any amount of magical healing or a DC 15 Heal check), but he cannot enter his vigilante identity for 1 hour.</p>
</Pair>
<Pair title="At 5th Level">While in his vigilante identity, the brute gains a +1 bonus on melee attack and damage rolls.</Pair>
<Pair title="At 13th Level">This bonus becomes +2.</Pair>
<Pair title="At 19th Level">This bonus increases to +3.</Pair>
</Ability>
<Ability id="arc-vigilante-brute-brute-talents" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-vigilante-brute-brute-talents">Brute Talents</Pair>
<Pair hl title="Alters">Vigilante talents</Pair>
<Pair title="Info">A brute can select from any of the following vigilante talents, in addition to general vigilante talents.</Pair>
</Ability>
<Ability id="arc-vigilante-brute-awesome-blow-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-vigilante-brute-awesome-blow-ex" flavor="The brute has learned that his body is his most formidable weapon.">Awesome Blow (Ex)</Pair>
<Pair title="Prerequisites">8th-level vigilante</Pair>
<Pair title="Ability">He gains the <Link to="/feat/awesome_blow">Awesome Blow</Link> monster feat as a bonus feat, but only while in his vigilante identity. He can ignore the feat's prerequisites. His <em>awesome blow</em> combat maneuver deals an amount of damage equal to 1d6 plus his Strength modifier, or his unarmed strike damage, whichever is better.</Pair>
<Pair title="At 16th Level">The brute can use Awesome Blow against a creature of any size, and he can <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/drag">drag</Link>, <Link to="/rule/reposition">reposition</Link>, and <Link to="/rule/trip">trip</Link> creatures of any size.</Pair>
</Ability>
<Ability id="arc-vigilante-brute-heavy-punches-ex" extraClasses="subAbility" icon={["mailed-fist","upgrade"]}>
<Pair single id="arc-vigilante-brute-heavy-punches-ex" flavor="The brute eschews civilized combat and prefers to wade into a fight with his fists swinging.">Heavy Punches (Ex)</Pair>
<Pair title="Ability">While in his vigilante identity, the brute's unarmed strikes deal damage as if he were a <Link to="/class/monk">monk</Link> of his size and vigilante level.</Pair>
<Pair title="At 1st Level">Your unarmed strike deals 1d6 (Medium) or 1d8 (Large) damage.</Pair>
<Pair title="At 4th Level">Your unarmed strike now deals 1d8 (Medium) or 2d6 (Large) damage.</Pair>
<Pair title="At 8th Level">Your unarmed strike now deals 1d10 (Medium) or 2d8 (Large) damage.</Pair>
<Pair title="At 12th Level">Your unarmed strike now deals 2d6 (Medium) or 3d6 (Large) damage.</Pair>
<Pair title="At 16th Level">Your unarmed strike now deals 2d8 (Medium) or 3d8 (Large) damage.</Pair>
<Pair title="At 20th Level">Your unarmed strike now deals 2d10 (Medium) or 4d8 (Large) damage.</Pair>
<Pair title="Special">If he has levels in other classes that provide monk advancement for unarmed strike damage, his vigilante level stacks with those levels whenever he is in his vigilante identity.</Pair>
</Ability>
<Ability id="arc-vigilante-brute-scale-surroundings-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-vigilante-brute-scale-surroundings-ex" flavor="Instead of letting physical barriers stop him, the brute can simply climb over them.">Scale Surroundings (Ex)</Pair>
<Pair title="Prerequisites">4th-level vigilante</Pair>
<Pair title="Ability">He gains a climb speed of 30 feet when he is in his vigilante identity.</Pair>
</Ability>
<Ability id="arc-vigilante-brute-sizing-equipment-ex" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-vigilante-brute-sizing-equipment-ex" flavor="The brute has learned how to adjust his magic armor so that it provides him some protection while in his vigilante identity.">Sizing Equipment (Ex)</Pair>
<Pair title="Passive Ability">Magic armor the brute wears that is sized for his social identity provides an armor bonus equal to its normal armor bonus - 1 while he is in his vigilante identity. In addition, wielding a magic weapon properly sized for his social identity deals damage as if it were a magic weapon properly sized for his vigilante identity, but it imposes a -1 penalty on attack rolls.</Pair>
<Pair title="At 6th Level">He takes no penalties when using such weapons and armor, and his weapons and armor work in all ways (including damage dice) as if they were of the vigilante's new size.</Pair>
<Pair title="Special">This talent only applies to magic arms and armor; inappropriately sized mundane arms and armor are not affected.</Pair>
</Ability>
<Ability id="arc-vigilante-brute-total-destruction-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-vigilante-brute-total-destruction-ex" flavor="The brute is adept at rampaging through an area, throwing whatever is available at his opponents.">Total Destruction (Ex)</Pair>
<Pair title="Ability">The brute gains <Link to="/feat/throw_anything">Throw Anything</Link> as a bonus feat.</Pair>
<Pair title="Standard Action">While in his vigilante identity, he can throw any unattended object up to two size categories smaller than he is up to 60 feet if he is Medium and 80 feet if he is Large. This deals 1d6 points of bludgeoning damage if he is Medium or 1d8 if he is Large, and the brute adds 1-1/2 times his Strength modifier to this damage.</Pair>
<Pair title="At 8th Level">He can also throw a creature up to two size categories smaller than himself, but he must succeed at a combat maneuver check against that creature's CMD to do so. The thrown creature lands <Link to="/rule/prone">prone</Link> and takes an amount of damage equal to the damage dealt to the target of the throw (as noted above), whether the brute hits or misses.</Pair>
<Pair title="At 16th Level">He can instead throw an object one size category larger than himself at creatures within a 10-foot radius from the object's point of impact. These creatures must succeed at a Reflex save (DC = 10 + 1/2 the brute's vigilante level + his Strength modifier) or take 1d6 points of damage per vigilante level.</Pair>
</Ability>
<Ability id="arc-vigilante-brute-tear-them-apart-ex" icon={["mailed-fist","upgrade"]}>
<Pair single id="arc-vigilante-brute-tear-them-apart-ex" flavor="A brute has learned how to tear at his enemies' bodies when he hits with multiple attacks.">Tear Them Apart (Ex)</Pair>
<Pair hl title="Replaces">Vengeance strike</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">When he takes a full attack action while in his vigilante identity, if a brute hits an opponent with at least two attacks, he deals an additional 1d10 points of damage plus 1-1/2 times his Strength modifier. If he hits an opponent with four attacks during a full attack action while in his vigilante identity, he instead deals an additional 3d10 points of damage plus 1-1/2 times his Strength modifier. The damage occurs after he has taken his last attack with the full attack action. This counts as a <Link to="/umr/rend">rend</Link> and does not stack with other abilities that grant rend.</Pair>
</Ability>
</>};
const _cabalist = {title: "Cabalist", jsx: <><h2 id="arc-vigilante-cabalist-cabalist">Cabalist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 55</Link><br/>Appearing to be an upstanding member of society, the cabalist clandestinely follows the tenets of a secret society. Practice with blood sacrifices, necromancy, and shadow magic gives a cabalist a reputation as a sinister and dangerous vigilante.</p>
<Ability icon={["skills"]} id="arc-vigilante-cabalist-undefined">
<Pair id="arc-vigilante-cabalist-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/spellcraft">Spellcraft</Link> (INT)</Pair>
<Pair title="Removed Skills">Disable Device, Knowledge (engineering), Perception, Survival</Pair></Ability>
<Ability id="arc-vigilante-cabalist-skill-ranks-per-level" icon={["broken-shield"]}>
<Pair single id="arc-vigilante-cabalist-skill-ranks-per-level">Skill Ranks per Level</Pair>
<Pair hl title="Alters">Skill ranks per level</Pair>
<Pair title="Info">The cabalist gains a number of skill ranks equal to 4 + his Intelligence modifier at each level, instead of 6 + his Intelligence modifier skill ranks.</Pair>
</Ability>
<Ability id="arc-vigilante-cabalist-weapon-and-armor-proficiencies" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-vigilante-cabalist-weapon-and-armor-proficiencies">Weapon and Armor Proficiencies</Pair>
<Pair hl title="Alters">Armor and weapon proficiencies</Pair>
<Pair title="Ability">A cabalist is not proficient with medium armor. Like a <Link to="/class/magus">magus</Link>, he can cast cabalist spells while wearing light armor without incurring the normal arcane spell failure chance.</Pair>
</Ability>
<Ability id="arc-vigilante-cabalist-spellcasting-and-spellbook" icon={["magic-swirl"]}>
<Pair single id="arc-vigilante-cabalist-spellcasting-and-spellbook">Spellcasting and Spellbook</Pair>
<Pair hl title="Replaces">4th-, 8th-, 10th-, 14th-, and 16th-level vigilante talents</Pair>
<Pair title="Ability">A cabalist casts arcane spells and cantrips as a magus. He prepares spells using a spellbook, choosing them from the 6th-level and lower spells from the <Link to="/main/witch_spell">witch spell list</Link>; higher-level witch spells are not on the cabalist's spell list.</Pair>
<Pair title="Special">A cabalist has a spellbook that functions in the same way as a magus's spellbook but uses the 6th-level and lower spells from the witch spell list.</Pair>
</Ability>
<Ability id="arc-vigilante-cabalist-spill-blood-ex" icon={["upgrade"]}>
<Pair single id="arc-vigilante-cabalist-spill-blood-ex">Spill Blood (Ex)</Pair>
<Pair hl title="Replaces">Vigilante specialization</Pair>
<Pair title="Ability">A cabalist can cause bleeding when he deals piercing or slashing damage with a melee attack (or a ranged attack within 30 feet) against a living foe who is unaware of his presence, who considers him an ally, or who is denied its Dexterity bonus to AC. The amount of <Link to="/rule/bleed">bleed</Link> damage is equal to the cabalist's level.</Pair>
<Pair title="Special">A cabalist can't deal this bleed damage to a creature with total <Link to="/rule/concealment">concealment</Link>.</Pair>
</Ability>
<Ability id="arc-vigilante-cabalist-cabalist-talents" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-vigilante-cabalist-cabalist-talents">Cabalist Talents</Pair>
<Pair hl title="Alters">Vigilante talents</Pair>
<Pair title="Info">A cabalist can select from the following vigilante talents, in addition to general vigilante talents.</Pair>
</Ability>
<Ability id="arc-vigilante-cabalist-bond-of-blood-sp-su" extraClasses="subAbility" icon={["remedy"]}>
<Pair single id="arc-vigilante-cabalist-bond-of-blood-sp-su" flavor="The cabalist has a magical bond to life-giving blood.">Bond of Blood (Sp, Su)</Pair>
<Pair title="Ability">When the cabalist deals bleed damage or 5 or more points of piercing or slashing damage to an adjacent living creature, he gains 1d6 <Link to="/rule/temporary_hit_points">temporary hit points</Link>. These temporary hit points last for 1 hour, and the cabalist can't gain temporary hit points again from <em>bond of blood</em> during that hour (even if he loses all the temporary hit points from <em>bond of blood</em> before that time).</Pair>
<Pair title="At 4th Level">The number of temporary hit points gained becomes +2d6. The cabalist can also activate <Link to="/spell/blood_armor">blood armor</Link> once per day as a spell-like ability as a <strong className="hl">swift action</strong>.</Pair>
<Pair title="At 8th Level">The number of temporary hit points gained increases to +3d6.</Pair>
<Pair title="At 12th Level">The number of temporary hit points gained becomes +4d6.</Pair>
<Pair title="At 16th Level">The number of temporary hit points gained increases to +5d6.</Pair>
<Pair title="At 20th Level">The number of temporary hit points gained becomes +6d6.</Pair>
</Ability>
<Ability id="arc-vigilante-cabalist-familiar-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-vigilante-cabalist-familiar-ex">Familiar (Ex)</Pair>
<Pair title="Ability">The cabalist gains a <Link to="/sidekick/familiar">familiar</Link>, using his vigilante level as his effective wizard level. The <Link to="/ability/familiar">familiar</Link> also has a social identity as a seemingly normal animal, though cabalists with outlandish familiars might still need to hide them.</Pair>
</Ability>
<Ability id="arc-vigilante-cabalist-living-shadow-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-vigilante-cabalist-living-shadow-sp">Living Shadow (Sp)</Pair>
<Pair title="Prerequisites">12th-level vigilante</Pair>
<Pair title="Ability">Once per day, the cabalist can become a living shadow as though he were using <Link to="/spell/shadow_body">shadow body</Link>. This effect lasts for 1 round per vigilante level, and the cabalist can't cast spells while in this form.</Pair>
<Pair title="At 14th Level">The cabalist can remain as a living shadow for 1 minute per vigilante level instead, and can cast spells while he is a living shadow.</Pair>
</Ability>
<Ability id="arc-vigilante-cabalist-necromantic-focus-ex" extraClasses="subAbility" icon={["stairs-goal","spell-book"]}>
<Pair single id="arc-vigilante-cabalist-necromantic-focus-ex">Necromantic Focus (Ex)</Pair>
<Pair title="Ability">The cabalist gains <Link to="/feat/spell_focus">Spell Focus</Link> (necromancy) as a bonus feat. He also adds the following additional spells to his spellbook, provided he can cast spells of the given level.</Pair>
<Pair plain title="1st"><Link to="/spell/cause_fear">Cause fear</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/blindness_deafness">Blindness/deafness</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/bestow_curse">Bestow curse</Link></Pair>
<Pair plain title="4th"><Link to="/spell/poison">Poison</Link></Pair>
<Pair plain title="5th"><Link to="/spell/feast_on_fear">Feast on fear</Link></Pair>
<Pair plain title="6th"><Link to="/spell/slay_living">Slay living</Link></Pair>
</Ability>
<Ability id="arc-vigilante-cabalist-shadow-jump-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-vigilante-cabalist-shadow-jump-su">Shadow Jump (Su)</Pair>
<Pair title="Prerequisites">10th-level vigilante</Pair>
<Pair title="Ability">The cabalist gains the <Link to="/pclass/shadowdancer">shadowdancer's</Link> <em>shadow jump</em> ability with an effective shadowdancer level equal to his vigilante level - 6. If he has levels in shadowdancer, those levels stack with his vigilante levels to determine the total distance per day he can shadow jump (to a maximum of 320 feet per day).</Pair>
<Pair title="At 4th Level"><em>A shadowdancer gains the ability to travel between shadows as if by means of a <Link to="/spell/dimension_door">dimension door</Link> spell. The limitation is that the magical transport must begin and end in an area with at least some dim light. A shadowdancer can jump up to a total of 40 feet each day in this way; this may be a single jump of 40 feet or four jumps of 10 feet each.</em></Pair>
<Pair title="At 6th Level"><em>The total distance increases to 80 feet.</em></Pair>
<Pair title="At 8th Level"><em>The total distance increases to 160 feet.</em></Pair>
<Pair title="At 10th Level"><em>The total distance increases to 320 feet.</em></Pair>
<Pair title="Special"><em>This amount can be split among many jumps, but each one, no matter how small, counts as a 10-foot increment.</em></Pair>
</Ability>
<Ability id="arc-vigilante-cabalist-tattoo-chamber-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-vigilante-cabalist-tattoo-chamber-su">Tattoo Chamber (Su)</Pair>
<Pair title="Ability">The cabalist can magically absorb items through a tattoo on his hand or wrist and easily retrieve them or activate their magical abilities without making them manifest. The items seemingly disappear into the tattoo, but actually enter an extradimensional space that the cabalist can access via the tattoo. Stowing an item in this way requires a <strong className="hl">full-round action</strong>, and the space can store a number of items equal to 1 + <Link to="/misc/one_third">one-third</Link> of his vigilante level. These items must be items the cabalist can hold in one hand.</Pair>
<Pair title="Ability">Retrieving a stowed item requires mentally activating the tattoo as a <strong className="hl">swift action</strong>. The item appears in the cabalist's hand, so worn items must still be donned to gain their benefits.</Pair>
<Pair title="Special">The cabalist can also activate any <Link to="/misc/spell_trigger">spell-trigger</Link> abilities of a stored item as though he were wielding the item, producing the magic effect from his tattoo rather than from the item. If the cabalist dies while items are within his tattoo chamber, those items fade into existence within 5 feet of the corpse.</Pair>
</Ability>
<Ability id="arc-vigilante-cabalist-bloodbound-spell-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-vigilante-cabalist-bloodbound-spell-ex" flavor="A cabalist gets an advantage when casting spells against bleeding foes.">Bloodbound Spell (Ex)</Pair>
<Pair hl title="Replaces">Startling appearance</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">Whenever the cabalist casts a spell against a foe that is taking bleed damage, the foe takes a -1 penalty on its saving throw against the spell (or to its AC if the spell requires an attack roll). This penalty increases to -2 if the spell is from the necromancy school.</Pair>
</Ability>
<Ability id="arc-vigilante-cabalist-bloody-horror-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-vigilante-cabalist-bloody-horror-ex">Bloody Horror (Ex)</Pair>
<Pair hl title="Replaces">Frightening appearance</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Free Action">When a cabalist casts a spell and one of the targets (or one creature in the area for an area spell) is taking bleed damage, the cabalist can make an Intimidate check to demoralize all targets of the spell (or all creatures in the area for an area spell). The cabalist rolls only one Intimidate check and applies the result to all the targets.</Pair>
<Pair title="Special">Once a creature has been the target of this ability (regardless of whether or not it was successful), it is immune to that cabalist's bloody horror for 24 hours. This is a mind-affecting fear effect.</Pair>
</Ability>
<Ability id="arc-vigilante-cabalist-shadowy-appearance-sp" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="arc-vigilante-cabalist-shadowy-appearance-sp" flavor="A cabalist becomes cloaked in shadow while in his vigilante identity.">Shadowy Appearance (Sp)</Pair>
<Pair hl title="Replaces">Stunning appearance</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">He gains a continuous 20% miss chance (as per <Link to="/spell/blur">blur</Link>). The cabalist can deactivate or reactivate this effect as a <strong className="hl">standard action</strong>.</Pair>
<Pair title="Immediate Action">Once per day, he can gain the benefits of <Link to="/spell/greater_invisibility">greater invisibility</Link> for 1d6 rounds.</Pair>
</Ability>
</>};
const _chu_ye_enforcer = {title: "Chu Ye Enforcer", jsx: <><h2 id="arc-vigilante-chu_ye_enforcer-chu-ye-enforcer">Chu Ye Enforcer</h2>
<p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 18</Link><br/>In the despotic nation of Chu Ye, merciless <Link to="/family/oni">oni</Link> oppress the human populace. Some <Link to="/race/human">humans</Link> and <Link to="/race/tiefling">tieflings</Link> with oni blood use the power of the oni for their own ambitions. Donning terrifying masks, these vigilantes forsake their humanity to become more like the evil beings they mimic.</p>
<Ability id="arc-vigilante-chu_ye_enforcer-yokai-heart-su" icon={["info","stairs-goal"]}>
<Pair single id="arc-vigilante-chu_ye_enforcer-yokai-heart-su" flavor="A Chu Ye enforcer seeks to transmute himself into a destructive spirit and terrorize his enemies.">Yokai Heart (Su)</Pair>
<Pair title="Info">His vigilante identity alignment must be non-good. While in his vigilante identity, the Chu Ye enforcer gains darkvision with a range of 60 feet and low-light vision, and he counts as both a native <Link to="/type/outsider">outsider</Link> with the <Link to="/subtype/oni">oni</Link> subtype and his original type for any effect related to type, whichever is worse for him.</Pair>
</Ability>
<Ability id="arc-vigilante-chu_ye_enforcer-oni-mask-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-vigilante-chu_ye_enforcer-oni-mask-ex">Oni Mask (Ex)</Pair>
<Pair hl title="Alters">Dual identity</Pair>
<Pair title="Ability">A Chu Ye enforcer gains a grotesque horned mask that he must wear when assuming his vigilante identity. The mask has 10 hit points per vigilante level he has and hardness 5.</Pair>
<Pair title="Passive Ability">While wearing the mask, the Chu Ye enforcer gains a bonus to Intimidate equal to <Link to="/misc/half">half</Link> his level (minimum +1).</Pair>
<Pair title="Special">Without this mask, a Chu Ye enforcer can't assume his vigilante identity. A Chu Ye enforcer who loses his mask can replace it after 1 day through a specialized ritual that takes 8 hours to complete and costs 200 gp per vigilante level he has.</Pair>
</Ability>
<Ability id="arc-vigilante-chu_ye_enforcer-steel-dictate-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-vigilante-chu_ye_enforcer-steel-dictate-ex">Steel Dictate (Ex)</Pair>
<Pair hl title="Replaces">Social talent gained at 1st level</Pair>
<Pair title="Ability">A Chu Ye enforcer gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat, and when he hits with his unarmed strike, he gains a bonus on damage rolls equal to half his vigilante level (minimum +1, maximum of +5).</Pair>
</Ability>
<Ability id="arc-vigilante-chu_ye_enforcer-deceitful-form-sp" icon={["magic-swirl"]}>
<Pair single id="arc-vigilante-chu_ye_enforcer-deceitful-form-sp">Deceitful Form (Sp)</Pair>
<Pair hl title="Replaces">Vigilante talents gained at 4th, 14th, and 18th levels</Pair>
<Pair title="At 4th Level">A Chu Ye enforcer gains the <Link to="/subtype/shapechanger">shapechanger</Link> subtype and the ability to change his form, as per <Link to="/spell/alter_self">alter self</Link>.</Pair>
<Pair title="At 14th Level">He can instead use this ability as per <Link to="/spell/giant_form_i">giant form I</Link>.</Pair>
<Pair title="At 18th Level">He can use this ability as per <Link to="/spell/giant_form_ii">giant form II</Link>.</Pair>
<Pair title="Usage">1 minute/day per vigilante level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
</Ability>
<Ability id="arc-vigilante-chu_ye_enforcer-deadly-horns-ex" icon={["mailed-fist"]}>
<Pair single id="arc-vigilante-chu_ye_enforcer-deadly-horns-ex">Deadly Horns (Ex)</Pair>
<Pair hl title="Replaces">Vigilante talent gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">While in his vigilante identity, a Chu Ye enforcer gains a gore attack. This is a primary <Link to="/umr/natural_attack">natural attack</Link> that deals 1d6 points of piercing damage.</Pair>
</Ability>
<Ability id="arc-vigilante-chu_ye_enforcer-third-eye-su" icon={["smoking-finger"]}>
<Pair single id="arc-vigilante-chu_ye_enforcer-third-eye-su" flavor="A Chu Ye enforcer's mask manifests a third eye.">Third Eye (Su)</Pair>
<Pair hl title="Replaces">Vigilante talent gained at 12th level</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Usage">1 time/day per vigilante level</Pair>
<Pair title="Swift Action">He can launch a beam of fire from the mask's third eye as a ranged touch attack with a range of 180 feet. On a hit, the beam deals 4d6 points of fire damage.</Pair>
<Pair title="At 18th Level">The beam damage increases to 8d6 points of fire damage.</Pair>
</Ability>
</>};
const _darklantern = {title: "Darklantern", jsx: <><h2 id="arc-vigilante-darklantern-darklantern">Darklantern</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands pg. 11</Link><br/>The <Link to="/rule/lantern_bearers">Lantern Bearers</Link> are an elite group of elves dedicated to the containment and eradication of the drow. However, some Lantern Bearers are tasked with the unthinkable assignment of infiltrating drow society so as to relay information to the Winter Council - a secret cabal tasked with keeping the existence of drow a secret - about activities in the Darklands and drow cities. In order to accomplish this task, select members of the Lantern Bearers undergo a horrific ritual allowing them to temporarily experience the dark transformation into a drow, but at the cost of their sanity.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-vigilante-darklantern--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Must be a creature with the <Link to="/subtype/elf">elf</Link> subtype</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-vigilante-darklantern-dark-identity-su" icon={["stairs-goal","upgrade","broken-shield"]}>
<Pair single id="arc-vigilante-darklantern-dark-identity-su">Dark Identity (Su)</Pair>
<Pair hl title="Alters">Dual identity</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Info">A darklantern's vigilante identity must be chaotic evil, but her social identity can be more than one step removed from this alignment.</Pair>
<Pair title="Ability">A darklantern can transform into her vigilante identity as a <strong className="hl">full-round action</strong>. When a darklantern switches to her vigilante identity, she undergoes a horrifying transformation from an elf into a <Link to="/race/drow">drow</Link>. After the transformation is complete, the darklantern takes on the appearance of a drow (but otherwise retains her normal facial features and voice) and gains a +2 bonus to Dexterity and Charisma, darkvision with a range of up to 60 feet, and the <Link to="/umr/light_blindness">light blindness</Link> universal monster ability. While in her vigilante identity, the darklantern counts as a drow for the purpose of any ability, spell, or magic item targeting drow.</Pair>
<Pair title="Ability">Transforming back into the darklantern's social identity requires a <strong className="hl">move action</strong>. However, a darklantern must succeed at a Will save (DC = 10 + the number of hours she has been in her vigilante identity) in order to successfully transform back into her social identity; otherwise, the move action is wasted and the action cannot be attempted for 1 minute. Each time a darklantern fails this check, she takes 1 point of <Link to="/rule/wisdom_damage">Wisdom damage</Link> and the DC for the save decreases by 2.</Pair>
</Ability>
<Ability id="arc-vigilante-darklantern-drow-magic-sp" icon={["magic-swirl"]}>
<Pair single id="arc-vigilante-darklantern-drow-magic-sp">Drow Magic (Sp)</Pair>
<Pair hl title="Replaces">1st-level social talent</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">When in her vigilante identity, a darklantern can cast <Link to="/spell/dancing_lights">dancing lights</Link>, <Link to="/spell/darkness">darkness</Link>, and <Link to="/spell/faerie_fire">faerie fire</Link>, once each per day, using her vigilante level as her caster level.</Pair>
</Ability>
<Ability id="arc-vigilante-darklantern-drow-paragon-su" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-vigilante-darklantern-drow-paragon-su">Drow Paragon (Su)</Pair>
<Pair hl title="Replaces">Vigilante talent gained at 4th level</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">The darklantern gains Spell Resistance equal to 6 + her vigilante level, and the range of her darkvision increases to 120 feet while in her vigilante identity.</Pair>
</Ability>
</>};
const _dragonscale_loyalist = {title: "Dragonscale Loyalist", jsx: <><h2 id="arc-vigilante-dragonscale_loyalist-dragonscale-loyalist">Dragonscale Loyalist</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court pg. 24</Link><br/>Since the disappearance of the Rogarvias, Brevoy draws ever closer to civil war. The rule of King-Regent Noleski Surtova grows increasingly tenuous; to hold his position, he sends handpicked agents into the kingdom's courts to flush out traitors to the Dragonscale Throne. When not acting as courtiers, these agents don fearsome draconic masks, becoming anonymous protectors of the kingregent's rule.</p>
<Ability id="arc-vigilante-dragonscale_loyalist-ruby-courtier-ex" icon={["stairs-goal","info"]}>
<Pair single id="arc-vigilante-dragonscale_loyalist-ruby-courtier-ex" flavor="Surtova's minions pose as minor nobles studying the Aldori swordlord traditions common throughout Brevoy.">Ruby Courtier (Ex)</Pair>
<Pair hl title="Replaces">1st-level social talent</Pair>
<Pair hl title="Alters">Social talents</Pair>
<Pair title="At 1st Level">A Dragonscale loyalist gains <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link> (Aldori dueling sword) as a bonus feat. His social identity must appear to be that of a noble, and he can't select <Link to="/soctalent/double_time">double time</Link>, <Link to="/soctalent/many_guises">many guises</Link>, or any social talent inappropriate for a noble social identity.</Pair>
</Ability>
<Ability id="arc-vigilante-dragonscale_loyalist-reflexive-reaction-ex" icon={["stairs-goal"]}>
<Pair single id="arc-vigilante-dragonscale_loyalist-reflexive-reaction-ex" flavor="A Dragonscale loyalist lacks the conviction of other vigilantes, but his reactions are keenly honed.">Reflexive Reaction (Ex)</Pair>
<Pair hl title="Replaces">Unshakable</Pair>
<Pair title="At 3rd Level">If a Dragonscale loyalist acts during a surprise round, he can take a full round's worth of actions. If he does, he is <Link to="/misc/staggered">staggered</Link> during the first full round of combat.</Pair>
</Ability>
<Ability id="arc-vigilante-dragonscale_loyalist-false-allegiance-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-vigilante-dragonscale_loyalist-false-allegiance-ex" flavor="Eventually, a loyalist begins training to infiltrate one of Brevoy's great houses.">False Allegiance (Ex)</Pair>
<Pair hl title="Replaces">Startling appearance</Pair>
<Pair title="At 5th Level">A Dragonscale loyalist chooses one of the seven houses of Brevoy, gaining a bonus feat and a special ability appropriate to the chosen house. He need not meet the feat's prerequisites.</Pair>
</Ability>
<Ability id="arc-vigilante-dragonscale_loyalist-house-garess" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-vigilante-dragonscale_loyalist-house-garess">House Garess</Pair>
<Pair title="Ability">The Dragonscale loyalist gains <Link to="/feat/sure_grasp">Sure Grasp</Link> and <Link to="/race/dwarves">dwarves'</Link> stonecunning racial trait.</Pair>
</Ability>
<Ability id="arc-vigilante-dragonscale_loyalist-house-lebeda" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-vigilante-dragonscale_loyalist-house-lebeda">House Lebeda</Pair>
<Pair title="Ability">The Dragonscale loyalist gains <Link to="/feat/skill_focus">Skill Focus</Link> (Appraise). He can also resell items for 60% of their listed value, rather than 50%. The purchase limit of the settlement must be high enough to accommodate the increased value.</Pair>
</Ability>
<Ability id="arc-vigilante-dragonscale_loyalist-house-lodovka" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-vigilante-dragonscale_loyalist-house-lodovka">House Lodovka</Pair>
<Pair title="Ability">The Dragonscale loyalist gains <Link to="/feat/sea_legs">Sea Legs</Link>. When attempting Swim checks, he ignores the armor check penalty of light or medium armor. If the loyalist has the <Link to="/vigtalent/heavy_training">heavy training</Link> vigilante talent, this applies to heavy armor as well.</Pair>
</Ability>
<Ability id="arc-vigilante-dragonscale_loyalist-house-medvyed" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-vigilante-dragonscale_loyalist-house-medvyed">House Medvyed</Pair>
<Pair title="Ability">The Dragonscale loyalist gains <Link to="/feat/endurance">Endurance</Link> and the druid's <Link to="/ability/resist_natures_lure">resist nature's lure</Link> class feature.</Pair>
</Ability>
<Ability id="arc-vigilante-dragonscale_loyalist-house-orlovsky" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-vigilante-dragonscale_loyalist-house-orlovsky">House Orlovsky</Pair>
<Pair title="Ability">The Dragonscale loyalist gains <Link to="/feat/call_truce">Call Truce</Link> and a +3 bonus to his CMD.</Pair>
</Ability>
<Ability id="arc-vigilante-dragonscale_loyalist-house-rogarvia" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-vigilante-dragonscale_loyalist-house-rogarvia">House Rogarvia</Pair>
<Pair title="Ability">The Dragonscale loyalist gains Skill Focus (Knowledge [history]) and a +2 bonus on Diplomacy checks to gather information. This bonus increases to +4 when gathering information related to the Rogarvias.</Pair>
</Ability>
<Ability id="arc-vigilante-dragonscale_loyalist-house-surtova" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-vigilante-dragonscale_loyalist-house-surtova">House Surtova</Pair>
<Pair title="Ability">The Dragonscale loyalist gains <Link to="/feat/persuasive">Persuasive</Link> and a +4 bonus on Sense Motive checks against creatures that profess to be his allies.</Pair>
</Ability>
<Ability id="arc-vigilante-dragonscale_loyalist-dragonscale-vigilance-su" icon={["magic-swirl"]}>
<Pair single id="arc-vigilante-dragonscale_loyalist-dragonscale-vigilance-su" flavor="A Dragonscale loyalist becomes supernaturally perceptive to plots against his lord.">Dragonscale Vigilance (Su)</Pair>
<Pair hl title="Replaces">Frightening appearance</Pair>
<Pair title="At 11th Level">While in his vigilante identity, a Dragonscale loyalist is treated as constantly being under the effects of <Link to="/spell/perceive_betrayal">perceive betrayal</Link>. This effect's caster level is equal to the Dragonscale loyalist's vigilante level, and he doesn't require material components or a focus.</Pair>
</Ability>
<Ability id="arc-vigilante-dragonscale_loyalist-conquerors-wrath-ex" icon={["mailed-fist","broken-shield"]}>
<Pair single id="arc-vigilante-dragonscale_loyalist-conquerors-wrath-ex" flavor="Inspired by the deeds of Chora the Conqueror, a loyalist can rampage through enemy ranks.">Conqueror's Wrath (Ex)</Pair>
<Pair hl title="Replaces">Stunning appearance</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Full-Round Action">A Dragonscale loyalist can make a full attack and move up to his speed. The loyalist can pause at any point or points during the movement, make one or more of his attacks, and continue moving. Creatures making attacks of opportunity against the loyalist during this movement gain a +4 bonus on their attack and damage rolls.</Pair>
<Pair title="Special">Using this ability counts as using a vigilante talent.</Pair>
</Ability>
</>};
const _experimenter = {title: "Experimenter", jsx: <><h2 id="arc-vigilante-experimenter-experimenter">Experimenter</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 70</Link><br/>Some vigilantes adopt lives of secrecy to hide their strange experiments from public view.</p>
<Ability icon={["skills"]} id="arc-vigilante-experimenter-undefined">
<Pair id="arc-vigilante-experimenter-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT), <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> (INT)</Pair></Ability>
<Ability id="arc-vigilante-experimenter-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-vigilante-experimenter-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Weapon and armor proficiencies</Pair>
<Pair title="Info">Experimenters aren't proficient with martial weapons, medium armor, or shields.</Pair>
</Ability>
<Ability id="arc-vigilante-experimenter-forbidden-science-ex" extraClasses="hasSubs" icon={["upgrade"]}>
<Pair single id="arc-vigilante-experimenter-forbidden-science-ex">Forbidden Science (Ex)</Pair>
<Pair hl title="Replaces">Vigilante specialization</Pair>
<Pair title="Passive Ability">An experimenter gains a bonus equal to 1/2 his vigilante level on Craft (alchemy) checks to create alchemical items and on Knowledge (engineering) checks (minimum +1). He also learns how to craft a <em>mutagen</em> as if he were an <Link to="/class/alchemist">alchemist</Link> of his class level.</Pair>
<Pair title="Ability">He can take <Link to="/ability/discoveries">alchemical discoveries</Link> in place of vigilante talents, but only discoveries that affect his mutagen (including <em>cognatogen</em> discoveries).</Pair>
<Pair title="Special">When an experimenter is confused, dazed, frightened, panicked, or stunned, he must attempt a Will save (DC = 20 + his vigilante level) each round at the start of his turn. If he fails, he transforms as if he had consumed his mutagen (determine which ability score gets the bonus randomly). This doesn't consume his mutagen, and lasts a number of rounds equal to 3 + his vigilante level, after which the transformation ends and he becomes <Link to="/misc/fatigued">fatigued</Link>. While transformed in this way, he is <Link to="/misc/confused">confused</Link>, and he rerolls any result of "act normally." Since the confusion is part of the mutagenic transformation, abilities that prevent or remove confusion don't apply to this effect, though abilities that end the effect of a mutagen work normally. He forgets everything that happened while he was involuntarily transformed.</Pair>
</Ability>
<Ability id="arc-vigilante-experimenter-mutagen-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-vigilante-experimenter-mutagen-su" flavor="Text from the alchemist class">Mutagen (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Standard Action">You can drink a mutagen to heighten your physical prowess at the cost of your personality. You gain a +2 natural armor bonus, a +4 alchemical bonus to a physical stat, and a -2 penalty to a mental stat. See below for details.</Pair>
<Pair title="Usage">A mutagen lasts for 10 minutes per alchemist level.</Pair>
<Pair title="Info"><p>You learn how to create a mutagen that you can imbibe in order to heighten your physical prowess at the cost of your personality. It takes 1 hour to brew a dose of mutagen, and once brewed, it remains potent until used. You can only maintain one dose of mutagen at a time - if you brew a second dose, any existing mutagen becomes inert.</p>
<p>When you brew a mutagen, you select one physical ability score for it to boost - either Strength, Dexterity, or Constitution. If the mutagen enhances your Strength, it applies a penalty to your Intelligence. If it enhances your Dexterity, it applies a penalty to your Wisdom. If it enhances your Constitution, it applies a penalty to your Charisma.</p>
<p>A non-alchemist who drinks a mutagen must make a Fortitude save (DC 10 + 1/2 your alchemist level + your Intelligence modifier) or become <Link to="/misc/nauseated">nauseated</Link> for 1 hour - a non-alchemist can never gain the benefit of a mutagen, but you can gain the effects of another alchemist's mutagen if you drink it. (Although if the other alchemist creates a different mutagen, the effects of the "stolen" mutagen immediately cease.) The effects of a mutagen do not stack. Whenever you drink a mutagen, the effects of any previous mutagen immediately end.</p>
</Pair>
<Pair title="Special">As with an extract or bomb, a mutagen that is not in your possession becomes inert until you pick it up again.</Pair>
</Ability>
<Ability id="arc-vigilante-experimenter-mutagenic-change-ex" icon={["stairs-goal"]}>
<Pair single id="arc-vigilante-experimenter-mutagenic-change-ex">Mutagenic Change (Ex)</Pair>
<Pair hl title="Replaces">1st-level social talent</Pair>
<Pair title="Full-Round Action">An experimenter can consume his mutagen (if he has one) and shift from his social identity to his vigilante identity, as if he had the <Link to="/soctalent/quick_change">quick change</Link> social talent.</Pair>
</Ability>
<Ability id="arc-vigilante-experimenter-brew-potion" icon={["stairs-goal"]}>
<Pair single id="arc-vigilante-experimenter-brew-potion">Brew Potion</Pair>
<Pair hl title="Replaces">Unshakable</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">An experimenter gains <Link to="/feat/brew_potion">Brew Potion</Link> as a bonus feat. He treats his vigilante level as his caster level and can use Craft (alchemy) instead of Spellcraft to brew potions.</Pair>
<Pair title="Special">He can use another potion of the same spell as a sample to provide the necessary spell without consuming the potion, increasing the DC by 5.</Pair>
</Ability>
<Ability id="arc-vigilante-experimenter-lore-master-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-vigilante-experimenter-lore-master-ex">Lore Master (Ex)</Pair>
<Pair hl title="Replaces">Startling appearance</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">An experimenter gains the <em>lore master</em> <Link to="/class/bard">bard</Link> class feature.</Pair>
</Ability>
<Ability id="arc-vigilante-experimenter-lore-master-ex" extraClasses="subAbility" icon={["upgrade","rolling-dices"]}>
<Pair single id="arc-vigilante-experimenter-lore-master-ex" flavor="Text from the bard class ability.">Lore Master (Ex)</Pair>
<Pair title="Ability">You can take 10 on any Knowledge skill check that you have ranks in even when threatened or distracted. You can also choose not to take 10 and can instead roll normally.</Pair>
<Pair title="Standard Action">Once per day, you can take 20 on any Knowledge skill check.</Pair>
<Pair title="At 11th Level">You can Take 20 twice a day.</Pair>
<Pair title="At 17th Level">You can Take 20 three times a day.</Pair>
</Ability>
<Ability id="arc-vigilante-experimenter-craft-construct" icon={["stairs-goal"]}>
<Pair single id="arc-vigilante-experimenter-craft-construct">Craft Construct</Pair>
<Pair hl title="Replaces">Frightening appearance</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">An experimenter gains <Link to="/feat/craft_construct">Craft Construct</Link> as a bonus feat. He treats his vigilante level as his caster level and can use Knowledge (engineering) instead of Spellcraft to craft a construct.</Pair>
</Ability>
<Ability id="arc-vigilante-experimenter-mutable-mutagen" icon={["upgrade"]}>
<Pair single id="arc-vigilante-experimenter-mutable-mutagen">Mutable Mutagen</Pair>
<Pair hl title="Replaces">Stunning appearance</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">The duration of an experimenter's mutagen increases to 1 hour per level.</Pair>
</Ability>
</>};
const _faceless_enforcer = {title: "Faceless Enforcer", jsx: <><h2 id="arc-vigilante-faceless_enforcer-faceless-enforcer">Faceless Enforcer</h2>
<p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 50</Link><br/>Unyielding warriors, faceless enforcers lock their identities behind implacable helms. While their infamous reputations spread far, striking fear in their foes, the individual behind the mask remains a complete mystery.</p>
<p><strong>Weapon and Armor Proficiencies:</strong> A faceless enforcer is proficient with heavy armor, but not with shields.</p>
<p>This alters the vigilante's <strong className="hl">weapon and armor proficiencies</strong>.</p>
<p><strong>Dual Identity (Ex):</strong> A faceless enforcer's vigilante identity is tied to a particular helmet or face covering and suit of armor. Switching between identities means donning or removing this armored outfit. Switching identities means entirely donning or removing armor (even if it is donned hastily) and never takes less than the minimum amount of time to do so. <Link to="/rule/getting_into_and_out_of_armor">How long this takes depends on the type of armor.</Link> Once per month, the vigilante can replace the helmet or face covering and armor associated with his vigilante identity and buy or make a new outfit that becomes tied to that identity. A faceless enforcer cannot select the <Link to="/soctalent/immediate_change">immediate change</Link> or <Link to="/soctalent/quick_change">quick change</Link> social talents.</p>
<p>This ability alters <strong className="hl">dual identity</strong>.</p>
<p><strong>Armored Juggernaut (Ex):</strong> At 2nd level, a faceless enforcer does not need help donning half-plate or full-plate armor, but donning it alone takes him 8 minutes. At 4th level, he can don his half-plate or full-plate alone in 4 minutes, and can don it hastily in 2 minutes. At 6th level, he doesn't apply the armor check penalty for any armor on Acrobatics, Escape Artist, or Stealth checks, but the penalty applies on other skill checks as normal. At 8th level, a faceless enforcer can move 5 feet faster than normal in heavy armor, to a maximum of his base speed. At 10th level, it takes him 2 minutes to don heavy armor, 1 minute to don it hastily, and 1 minute to remove it. At 16th level, he can move at full speed in heavy armor. At 18th level, it never takes the vigilante more than 1 minute to don his armor.</p>
<p>This replaces the <strong className="hl">vigilante talent</strong> gained at 2nd level.</p>
<p><strong>Faceless Infiltrator (Ex):</strong> At 5th level, when he changes his identity, a faceless enforcer has a third option (instead of social or vigilante) he can assume a fictional identity with no known ties to his <Link to="/rule/hellknights">Hellknight</Link> affiliation, his social identity, or his vigilante identity. When he gains this ability, the faceless enforcer must choose a group, organization, or social structure he wishes to infiltrate (such as the beggars in Egorian's Cheapside or the city's congregation of the Midnight Temple to Asmodeus), and the fictional identity he creates must be a recruit, ally, or prospective employee of that group. This fictional identity's alignment must be within one step from either his vigilante or his social identity. A faceless enforcer can use social and vigilante talents when in his fictional identity, but he risks exposing his secret when he does so.</p>
<p>When he gains this ability, the faceless enforcer creates mundane records that can verify his fictional identity. While he is in his fictional identity, a faceless enforcer appears to be an otherwise ordinary member of his race, and he receives a +10 bonus on Disguise checks to appear to be the fictional person he says he is. He must create the appearance for this fictional identity using whatever clothing and tools he has at his disposal. If the faceless enforcer changes from his vigilante identity to his fictional identity and vice versa, changing identities takes him the normal amount of time to don or remove his armor (see the armored juggernaut ability). If he changes from his fictional identity to his social identity and vice versa, it takes him 1 minute. Any attempts to scry or otherwise locate the fictional identity work as normal if the faceless enforcer is in his fictional identity. Otherwise, it reveals a random member of the group he is attempting to infiltrate.</p>
<p>At 11th level, the faceless enforcer's bonus on Disguise checks to appear to be his fictional identity increases to +20. Any spell or ability designed to locate the fictional individual while the faceless enforcer is in that identity has a 50% chance of instead finding a random member of the group. Although this ability does not give the faceless enforcer any special knowledge of the group outside what he gleans himself, the faceless enforcer's training grants him a +10 circumstance bonus on Bluff checks to maintain his fictional guise.</p>
<p>At 17th level, attempts to scry or otherwise locate the faceless enforcer's fictional identity always reveal a random member of the group he has infiltrated. Furthermore, his bonus on Bluff checks to maintain his fictional identity increases to +15.</p>
<p>Every month, a faceless enforcer can create a new fictional identity, if he wishes, but not another fictional identity that is attempting to infiltrate the same group. A faceless enforcer cannot select the any guise, everyman, or many guises social talents.</p>
<p>This ability replaces the <strong className="hl">social talents</strong> gained at 5th, 11th, and 17th levels.</p>
<p><strong>Enforcer's Wrath (Ex):</strong> At 6th level, a faceless enforcer has become adept at using his vigilante identity to terrify and coerce lone enemies, particularly among the group he is currently infiltrating. He gains a +4 bonus on Intimidate checks against enemies when no other opponents are within 30 feet of him (or the creature he is intimidating). This bonus stacks with any bonuses the vigilante receives from <Link to="/soctalent/renown">renown</Link> or similar abilities. Additionally, if the vigilante successfully demoralizes a lone opponent with Intimidate, the opponent is shaken for 1 additional round.</p>
<p>This ability replaces the <strong className="hl">vigilante talent</strong> gained at 6th level.</p>
</>};
const _ferocious_hunter = {title: "Ferocious Hunter", jsx: <><h2 id="arc-vigilante-ferocious_hunter-ferocious-hunter">Ferocious Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 26</Link><br/><Link to="/race/half_orc">Half-orcs</Link> with more distant orc ancestry often look almost indistinguishable from humans, aside from a slightly greenish tint to their skin or sharp teeth. The ability to move through the world without experiencing the same discrimination many of their kin face opens doors that might otherwise be closed, yet many of these half-orcs still take great pride in their heritage and have a powerful desire to show the world that half-orcs are deserving of respect. By taking on an alter-ego that allows them to show their true colors, they can become a champion of the downtrodden and a hero among half-orcs.</p>
<p><strong>Hidden Heritage (Ex):</strong> A ferocious hunter must present as human for his social identity and as a half-orc for his vigilante identity in order to gain the benefits of dual identity. He gains <Link to="/feat/pass_for_human">Pass for Human</Link> as a bonus feat. In addition, his alignment stays the same when he switches between identities.</p>
<p>This alters <strong className="hl">dual identity</strong>.</p>
<p><strong>Symbol of Pride:</strong> At 2nd level, a ferocious hunter gains the <Link to="/vigtalent/signature_weapon">signature weapon</Link> vigilante talent, but must select a <Link to="/eq-weapon/falchion">falchion</Link>, <Link to="/eq-weapon/greataxe">greataxe</Link>, or a weapon with "orc" in its name as his chosen weapon. He gains this talent regardless of his chosen vigilante specialization.</p>
<p>This replaces the <strong className="hl">vigilante talent</strong> gained at 2nd level.</p>
<p><strong>Spirit of Ferocity (Ex):</strong> Starting at 3rd level, when using orc ferocity to continue fighting after falling below 0 hit points, a ferocious hunter fights on for a number of rounds equal to his Constitution modifier.</p>
<p>This replaces <strong className="hl">unshakable</strong>.</p>
<p><strong>Symbol of Mastery:</strong> At 8th level, a ferocious hunter gains <Link to="/feat/improved_critical">Improved Critical</Link> with the weapon chosen for the symbol of pride ability. His base attack bonus is equal to his vigilante level for the purpose of qualifying for <Link to="/feat/critical_focus">Critical Focus</Link> and any feats that require Critical Focus as a prerequisite.</p>
<p>This replaces the <strong className="hl">vigilante talent</strong> gained at 8th level.</p>
</>};
const _gunmaster = {title: "Gunmaster", jsx: <><h2 id="arc-vigilante-gunmaster-gunmaster">Gunmaster</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 57</Link><br/>Firearms can be potent tools for striking fear into the hearts of enemies, and canny vigilantes use this to their advantage. Gunmasters brandish firearms like extensions of their will, taking down their foes with deadly accuracy and skill.</p>
<p><strong>Weapon and Armor Proficiencies:</strong> A gunmaster is proficient with all firearms but not with martial weapons or medium armor.</p>
<p>This alters the vigilante's <strong className="hl">weapon and armor proficiencies</strong>.</p>
<p><strong>Gunmaster:</strong> At 1st level, a gunmaster gains the <Link to="/class/gunslinger">gunslinger's</Link> gunsmith ability. Additionally, the <Link to="/feat/gunsmithing">Gunsmithing</Link> bonus feat allows the gunmaster to repair and restore his initial battered firearm as if he were a gunslinger. At 5th level, and every 4 vigilante levels thereafter, the gunmaster gains a +1 bonus on attack and damage rolls with all firearms.</p>
<p>This ability replaces <strong className="hl">vigilante specialization</strong>.</p>
<p><strong>Gunmaster Talents:</strong> A gunmaster can select from any of the following vigilante talents, in addition to general vigilante talents.</p>
<p>This alters <strong className="hl">vigilante talents</strong>.</p>
<blockquote>
<p><strong>Deadeye (Ex):</strong> Once per day, the gunmaster can resolve an attack against touch AC instead of normal AC when firing one increment beyond his firearm's first range increment. The gunmaster still takes the -2 penalty on attack rolls for shooting a target outside the firearm's first range increment. At 6th level and every 4 vigilante levels thereafter, he can use this ability one additional time per day. A gunmaster can spend multiple daily uses to resolve an attack at a further range increment (for instance, he can spend three uses to resolve an attack three increments beyond his first range increment).</p>
<p><strong>Death's Shot (Ex):</strong> Three times per day, as an immediate action when the gunmaster scores a critical hit, he can attempt to kill his enemy instantly. When the gunmaster uses this talent, the target must succeed at a Fortitude saving throw with a DC equal to 10 + 1/2 the gunmaster's vigilante level + his Dexterity modifier. On a failed saving throw, the target dies instantly. A gunmaster must be 20th level to select this talent.</p>
<p><strong>Gunmaster Initiative (Ex):</strong> The gunmaster gains a +2 bonus on initiative checks. Furthermore, if he has the <Link to="/feat/quick_draw">Quick Draw</Link> feat, his hands are free and unrestrained, and the firearm is not hidden, he can draw a single firearm as part of the initiative check. A gunmaster must be at least 4th level to select this talent.</p>
<p><strong>Lightning Reload (Ex):</strong> A number of times per day equal to half his vigilante level, a gunmaster can reload a single barrel of a one-handed or two-handed firearm as a swift action once per round. If he has the <Link to="/feat/rapid_reload">Rapid Reload</Link> feat or is using an alchemical cartridge (or both), he can reload a single barrel of the weapon as a free action each round instead. Using this talent does not provoke attacks of opportunity. A gunmaster must be at least 12th level to select this talent.</p>
<p><strong>Quick Clear (Ex):</strong> Once per day as a standard action, the gunmaster can remove the broken condition from a single firearm he is currently wielding, as long as that condition was gained by a firearm misfire. Starting at 12th level, once per day, when the gunmaster rolls a misfire with a gun that has the broken condition, she can prevent the gun from exploding, though it retains the broken condition.</p>
</blockquote>
<p><strong>Nimble (Ex):</strong> Starting at 4th level, a gunmaster gains a +1 dodge bonus to AC while wearing light or no armor. Anything that causes the gunmaster to lose her Dexterity bonus to AC also causes the gunmaster to lose this dodge bonus. This bonus increases by 1 for every 6 vigilante levels beyond 4th (to a maximum of +3 at 16th level).</p>
<p>This ability replaces <strong className="hl">unshakable</strong>.</p>
</>};
const _half_elf_double_scion = {title: "Half-Elf Double Scion", jsx: <><h2 id="arc-vigilante-half_elf_double_scion-half-elf-double-scion">Half-Elf Double Scion</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 22</Link><br/>Many <Link to="/race/half_elves">half-elves</Link> who live in human or elven societies try to blend in, hiding their true ancestry. But deception takes a toll, and some half-elves form alternate identities to let the suppressed side of their heritage be known. This other identity can be either a force for good, enabling the half-elf to express a part of himself that has been denied to him, or for evil, with the half-elf hurting others to make up for his own pain.</p>
<p><strong>Dual Heritage:</strong> A half-elf double scion appears to be an elf in one identity and a human in the other identity. He takes no penalties to Disguise checks to appear as the race that matches his current identity. The selection of which race is the social identity and which is the vigilante identity is made at 1st level and cannot be changed. Additionally, when a half-elf double scion switches from one identity to another, he is representing different aspects of his heritage rather than personality. As a result, a half-elf double scion has the same alignment in both of his identities.</p>
<p>This alters <strong className="hl">dual identity</strong>.</p>
<p><strong>Half-Elf Double Scion Talents:</strong> A half-elf double scion can select from the following vigilante talents, in addition to general vigilante talents.</p>
<blockquote>
<p><strong>Elven Weapon Command (Ex):</strong> A half-elf double scion can wield traditional elven weapons as well as elves can. The half-elf double scion treats any weapon with the word "elven" in its name as a martial weapon, and gains <Link to="/feat/weapon_focus">Weapon Focus</Link> as a bonus feat for one such weapon.</p>
<p><strong>Arrogant Strike (Ex):</strong> A half-elf double scion has a highly confident style in battle, characteristic of both humans and elves. A half-elf double scion can declare that he is using this ability at the beginning of his turn as a free action. He automatically confirms any critical hits until the beginning of his next turn. He can use this ability once per day plus one additional time at 14th level and 18th level. A half-elf double scion must be at least 10th level to select this talent.</p>
<p><strong>Slick Step (Ex):</strong> A half-elf double scion can, as a move action, move 10 feet without provoking an attack of opportunity. This movement cannot pass through an opponent's square and must otherwise be a legal movement. He cannot draw a weapon during this movement.</p>
</blockquote>
</>};
const _hangman = {title: "Hangman", jsx: <><h2 id="arc-vigilante-hangman-hangman">Hangman</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 70</Link><br/>Wherever the guilty walk free, the hangman brings judgment.</p>
<p><strong>Weapon and Armor Proficiency:</strong> A hangman is proficient with <Link to="/eq-weapon/net">nets</Link> and <Link to="/eq-weapon/whip">whips</Link>, but not shields.</p>
<p>This alters the vigilante's <strong className="hl">weapon and armor proficiencies</strong>.</p>
<p><strong>Vigilante Specialization:</strong> A hangman must choose the stalker specialization.</p>
<p>This alters <strong className="hl">vigilante specialization</strong>.</p>
<p><strong>Hangman's Noose (Ex):</strong> At 2nd level, a hangman can wield a rope noose as a net or whip, and also can use it to grapple, gaining the benefits of <Link to="/feat/improved_grapple">Improved Grapple</Link> with it. He takes no penalty on combat maneuver checks with the noose for having the noose in his hand, but he still doesn't add any bonuses he might have with a net or whip (such as weapon enhancement bonuses or benefits from <Link to="/feat/weapon_focus">Weapon Focus</Link>) on the check. He can spend 1 minute to weave a magical or masterwork net or whip into a noose, thereafter gaining these benefits with it.</p>
<p>This ability replaces the 2nd-level <strong className="hl">vigilante talent</strong>.</p>
<p><strong>Bound to Truth (Ex, Sp):</strong> At 3rd level, a hangman adds half his vigilante level to his Sense Motive checks to notice lies told by a creature entangled or grappled by his noose, by feeling the creature's throat clench or changes in its breathing. In addition, he can prevent a creature entangled or grappled in his noose from lying by tightening the noose, as per a single-target zone of truth (the caster level equals his vigilante level; the save DC is Charisma-based). He can use the latter ability a number of rounds per day equal to half his vigilante level. These rounds don't need to be consecutive.</p>
<p>This ability replaces <strong className="hl">unshakable</strong>.</p>
<p><strong>Twisted Rope (Su):</strong> At 4th level, a hangman can spend 1 hour preparing his noose, granting it temporary hit points equal to his vigilante level, giving it a hardness equal to 1/2 his vigilante level plus double the weapon's enhancement bonus (or its current hardness, whichever is better), and changing its break DC to 23 + 1/2 his vigilante level (or its current break DC, whichever is better). These benefits last for 8 hours, but end immediately if the hangman prepares another noose.</p>
<p>This ability replaces the 4th-level <strong className="hl">vigilante talent</strong>.</p>
<p><strong>Chokehold:</strong> At 5th level, a hangman gains <Link to="/feat/chokehold">Chokehold</Link> as a bonus feat.</p>
<p>This ability replaces <strong className="hl">startling appearance</strong>.</p>
<p><strong>Tighten the Noose (Ex):</strong> At 11th level, while a hangman is grappling a target with his noose, as a swift action he can deal increased hidden strike damage to the target.</p>
<p>This ability replaces <strong className="hl">frightening appearance</strong>.</p>
<p><strong>Suffocation (Ex):</strong> At 17th level, the first time the hangman succeeds at a check to maintain a grapple (on his next turn after establishing the grapple), in place of the other options, he can suffocate the target and cause her to fall unconscious. A successful Fortitude save (DC = 15 + the hangman's Strength bonus) negates the suffocation. On subsequent rounds, the hangman can maintain the grapple to suffocate the target again. On the next failed save, the target drops to -1 hit points and starts dying. On the third failed save, she dies. Even if the hangman has the ability to maintain a grapple with less than a standard action, he can attempt to maintain a grapple to suffocate only once per round.</p>
<p>This ability replaces <strong className="hl">stunning appearance</strong>.</p>
</>};
const _hidden_current = {title: "Hidden Current", jsx: <><h2 id="arc-vigilante-hidden_current-hidden-current">Hidden Current</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_sea">Blood of the Sea pg. 8</Link><br/>Sometimes the best place to hide is in plain sight. The hidden current operates above and below the sea. When operating underwater, he blends easily with the locals, passing himself off as one of them or as an experienced aquatic traveler. When operating on land, he erases all traces of his aquatic heritage. When the hidden current needs to avoid pursuit, he slips away into his native environment.</p>
<p><strong>Guise of the Land Walker (Ex):</strong> At 1st level, a hidden current gains the <Link to="/soctalent/many_guises">many guises</Link> social talent, but the mundane identity assumed must be of a non-aquatic humanoid and functions only when he is on land.</p>
<p>This ability replaces the hidden current's 1st-level <strong className="hl">social talent</strong>.</p>
<p><strong>Sea's Return (Sp):</strong> At 11th level, a hidden current can magically slip between the sea and the land, as if using the spell <Link to="/spell/dimension_door">dimension door</Link> with a caster level equal to the hidden current's vigilante level. The starting point of this ability must be on land and the ending point in water at least waist deep, or vice versa. Using this ability is a move action. The hidden current cannot take other creatures with him when he uses this ability. A hidden current can use this ability once per day at 11th level and an additional time per day every 4 levels thereafter (to a maximum of three uses per day at 19th level).</p>
<p>This ability replaces <strong className="hl">frightening appearance</strong>.</p>
<p><strong>Stealthy Swimmer (Ex):</strong> Hidden currents can transition between land and sea at a moment's notice. If a hidden current begins his movement on land and ends his movement in water at least waist deep, or vice versa, he gains a +5 circumstance bonus on a Stealth check in the same turn.</p>
<p>This ability replaces the hidden current's 2nd-level <strong className="hl">vigilante talent</strong>.</p>
</>};
const _imperial_agent = {title: "Imperial Agent", jsx: <><h2 id="arc-vigilante-imperial_agent-imperial-agent">Imperial Agent</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 21</Link><br/>Many residents of Lung Wa's successor states refuse to admit the empire has truly fallen, but the self-proclaimed imperial agents have taken matters into their own hands. Imperial agents are often the descendants of nobility and generals from Lung Wa, devoted to reuniting the empire by conquering Lung Wa's successor states. Often forming secret networks with fanciful names, they focus on destabilizing nations with blackmail, slander, and treachery.</p>
<p><strong>Slander (Ex):</strong> At 1st level, an imperial agent becomes an expert at spreading malicious rumors in order to foment chaos and strife to further his aims. Slandering an individual or organization takes 1d4 days in a settlement smaller than a town, or 1 week in a town or larger settlement. The imperial agent must succeed at either a Bluff or Diplomacy check. If the general populace is indifferent towards the target of the slander, the DC of this check is 20 + the target's Charisma modifier. For each step above indifferent the public's attitude towards the target is, the DC increases by 5, and for each step below indifferent the public's attitude towards the target is, the DC decreases by 5. If the imperial agent is successful, the public's attitude toward his target is decreased by 1 step. If the imperial agent fails the check, however, he cannot affect the settlement with this ability for 1 week, and the target of his slander becomes aware that someone is spreading malicious rumors. The GM determines the exact effects of the public's shift in attitude. Even if the public is hostile toward the target, they might not act openly against the target, especially if doing so might be dangerous.</p>
<p>This replaces the <strong className="hl">social talent</strong> gained at 1st level.</p>
<p><strong>Manipulative (Ex):</strong> At 3rd level, an imperial agent is a master of blackmail, extortion, and subterfuge. He gains a bonus equal to 1/2 his vigilante level on Bluff checks (except those to feint) and on Intimidate checks (except those to demoralize an opponent).</p>
<p>This replaces <strong className="hl">unshakable</strong>.</p>
<p><strong>False Flag (Ex):</strong> At 5th level, whenever an imperial agent changes his identity, he has a third option (instead of social or vigilante) he can wear a false flag. This functions identically to the <Link to="/soctalent/many_guises">many guises</Link> social talent, except that the false flag identity is associated with a particular nation, organization, or other faction. The imperial agent gains a +20 circumstance bonus on Disguise checks to impersonate a member of that faction against creatures who are unaffiliated with that faction, potentially allowing the imperial agent to pin the blame for his actions on the faction he was impersonating. However, the imperial agent receives no bonus and a -10 penalty on Disguise checks against members of the faction he is impersonating. An imperial agent can choose a different faction each time he uses this ability. Factions that lack a flag, uniform, or other symbol of membership may be difficult or impossible to impersonate, at the GM's discretion.</p>
<p>This replaces the <strong className="hl">social talent</strong> gained at 5th level.</p>
</>};
const _magical_child = {title: "Magical Child", jsx: <><h2 id="arc-vigilante-magical_child-magical-child">Magical Child</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 57</Link><br/>Some vigilantes, no matter their age, carry a spark of capricious whimsy under which flows a powerful current of magic and wonder. They keep these wondrous abilities secret, though they are aided in their endeavors by creatures just as magical as they are.</p>
<Ability icon={["skills"]} id="arc-vigilante-magical_child-undefined">
<Pair id="arc-vigilante-magical_child-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT), <Link to="/skill/spellcraft">Spellcraft</Link> (INT)</Pair>
<Pair title="Removed Skills">Disable Device, Knowledge (engineering), Perception, Survival</Pair></Ability>
<p><strong>Skill Ranks per Level:</strong> A magical child gains a number of skill ranks equal to 4 + her Intelligence modifier at each level, instead of the normal 6 + her Intelligence modifier skill ranks.</p>
<p>This alters the vigilante's <strong className="hl">skill ranks per level</strong>.</p>
<p><strong>Weapon and Armor Proficiencies:</strong> A magical child is not proficient with medium armor. She can cast summoner spells (see spellcasting below) while wearing light armor without incurring the normal arcane spell failure chance.</p>
<p>This alters the vigilante's <strong className="hl">armor and weapon proficiencies</strong>.</p>
<p><strong>Spellcasting:</strong> A magical child casts arcane spells and cantrips as an unchained summoner. She can cast any spell she knows without preparing it ahead of time, assuming she has not yet used up her allotment of spells per day for the spell's level, and she chooses her spells known from the <Link to="/main/unchained_summoner_spell">unchained summoner spell list</Link> (she cannot choose spells that would affect an eidolon). A magical child's selection of spells is extremely limited; use the Summoner Spells Known table of the <Link to="/class/unchained_summoner">unchained summoner</Link> to determine how many spells the magical child knows at each level. A magical child needs to commune with her animal guide for 1 hour in order to replenish her daily spell slots.</p>
<p>This replaces the 4th-, 8th-, 10th-, 14th-, and 16th-level <strong className="hl">vigilante talents</strong>.</p>
<p><strong>Transformation Sequence (Su):</strong> A magical child's transformation between identities is assisted by magic. This makes it faster than usual, but also more noticeable. A magical child can normally transform between her identities in 5 rounds, though this improves to a standard action with the <Link to="/soctalent/quick_change">quick change</Link> social talent and a swift action with the <Link to="/soctalent/immediate_change">immediate change</Link> social talent. However, the transformation is quite a spectacle, involving loud sounds or music, brilliant colorful energies, and swift motions.</p>
<p><strong>Animal Guide (Ex):</strong> A magical child starts play with a magical spirit guide in the form of a <Link to="/sidekick/familiar">familiar</Link>, using her vigilante level as her effective wizard level. The <Link to="/ability/familiar">familiar</Link> also has a social identity as a seemingly normal animal, though vigilantes with outlandish familiars might still need to hide the familiar.</p>
<p>At 3rd level, the magical child's familiar reveals another aspect of its form, and its vigilante identity changes into a creature on the <Link to="/feat/improved_familiar">Improved Familiar</Link> list that would be available to a 3rd-level spellcaster (the animal guide's social identity always remains as the original normal animal). The familiar can change its vigilante identity again when the magical child reaches 5th and 7th level, each time to familiars available at those levels. The Improved Familiar feat's alignment restrictions apply to this ability, but only the magical child's vigilante identity needs to have an alignment that fulfills the alignment requirements of the improved familiar. The familiar's new vigilante form choices are permanent, and it cannot transform back into its former vigilante identities until 9th level, when the familiar gains the <Link to="/umr/change_shape">change shape</Link> universal monster ability if it doesn't already have it. It can use this ability at will when in its vigilante identity to transform into any of its four vigilante identities. In vigilante form, a magical child's familiar gains an amount of DR/magic equal to her vigilante level. This doesn't stack with any DR/magic that her vigilante form might already possess.</p>
<p>If a magical child's familiar dies, its consciousness simply leaves its body, and the magical child can replace its body after 24 hours. To do so, she must conduct an 8-hour ritual that costs 200 gp per her vigilante level, but once the ritual is complete, the familiar returns in a new body. It retains all of its memories from its earlier service to the magical child.</p>
<p>This ability replaces <strong className="hl">vigilante specialization</strong>.</p>
<p><strong>Staunch Ally (Ex):</strong> A magical child's familiar counts as the magical child for purposes of the startling appearance, frightening appearance, and stunning appearance abilities, and it can calculate its DCs using either its own Charisma modifier or the magical child's, whichever is better. At 20th level, the familiar can make vengeance strikes as if it were the magical child.</p>
<p>This ability alters <strong className="hl">startling appearance</strong>, <strong className="hl">frightening appearance</strong>, <strong className="hl">stunning appearance</strong>, and <strong className="hl">vengeance strike</strong>.</p>
</>};
const _masked_maiden = {title: "Masked Maiden", jsx: <><h2 id="arc-vigilante-masked_maiden-masked-maiden">Masked Maiden</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 82</Link><br/>In the wake of Ileosa's death, some of the surviving <Link to="/rule/gray_maidens">Gray Maidens</Link> attempted to return to their former lives - a task made difficult by the physical and emotional scars of their indoctrination. For a few, suppressing the indoctrination's effects seemed to work. In time, though, the repressed aspects returned, pushing these former conscripts to don their armor and seek out conflict. These so-called masked maidens find themselves leading a double life: ordinary (albeit troubled) citizen by day, faceless warrior by night. In the most tragic cases, the identities entirely disassociate, with the maiden experiencing unexplained exhaustion and injuries upon awakening.</p>
<p>While their social identities cover a wide range of personality types, in their vigilante identities, masked maidens are usually icy and dispassionate. These identities are rarely good-aligned, and are more often merciless bringers of justice than gentle redeemers. Some masked maidens continue enforcing the queen's cruel agenda, while others fight crime or pursue personal vendettas. A masked maiden always uses the iconic Gray Maiden helm when in her vigilante identity, as these helms serve excellently at both hiding the vigilante's identity while simultaneously evoking the significant social gravitas associated with the Gray Maidens. Often, the masked maiden wears signature garb, such as a helm with a distinctively colored plume or a scar-like etching on the helm's face, or perhaps a unique cloak. Although the masked maiden hides behind the armor and is pursuing her goals, she wants to be able to be identified as a specific individual.</p>
<p><strong>Weapon and Armor Proficiency:</strong> All masked maiden vigilantes are proficient with <Link to="/eq-armor/gray_maiden_plate">Gray Maiden plate armor</Link>, but not with any other forms of heavy armor.</p>
<p>This alters the vigilante's <strong className="hl">weapon and armor proficiencies</strong>.</p>
<p><strong>Imperfect Control (Ex):</strong> A masked maiden compulsively resists entering her indoctrinated state, but certain triggers (such as violence) can cause her to lapse. The masked maiden always starts the day in her social identity. To begin willingly changing to her vigilante identity, the masked maiden must succeed at a Will save (DC = 10 + half her vigilante level); if she fails, she becomes shaken for 1 minute and cannot try again during that time. While in her social identity, when the masked maiden is exposed to mortal peril (such as when combat starts), she must succeed at a Will save at the same DC or be compelled to enter her vigilante identity as soon as she can get out of sight to do so. The masked maiden cannot choose to fail this Will save. In addition, if the masked maiden hasn't entered her vigilante identity for a week or longer, she must attempt this Will save at the start of each day; on a failure, she is compelled to change into her vigilante identity immediately (or as soon as she can slip out of sight to do so).</p>
<p>A masked maiden can don Gray Maiden plate in 1 minute without aid, and can do so as part of switching to her vigilante identity. If the maiden reduces the time it takes to change identities (such as with the <Link to="/soctalent/quick_change">quick change</Link> social talent), she can still don her armor as part of changing to her vigilante identity. A masked maiden who changes to her vigilante identity unwillingly can't choose to switch from her vigilante identity back to her social identity that day. While in her vigilante identity, the masked maiden takes a -2 penalty on all Charisma-based ability and skill checks (except for Intimidate) and can't benefit from morale bonuses or bardic performances.</p>
<p>This ability alters <strong className="hl">dual identity</strong>.</p>
<p><strong>Scars of the Past (Ex):</strong> A masked maiden must choose avenger as her vigilante specialization. A 1st-level masked maiden gains a set of Gray Maiden plate at no cost. This armor is battered, and other creatures are never considered proficient with it. This armor can be sold only as scrap for 4d6 gp, but for the masked maiden the armor functions normally. The masked maiden can spend 150 gp and 1 day of work to improve her battered armor to masterwork quality (although it is still considered battered).</p>
<p>This ability replaces <strong className="hl">seamless guise</strong>.</p>
<p><strong>Armor Training (Ex):</strong> All Gray Maidens were drilled in the use of their armor, and as a masked maiden continues to lapse in and out of indoctrination, that training emerges slowly from her subconscious. At 3rd level, a masked maiden gains the <Link to="/class/fighter">fighter's</Link> armor training class feature, and at 19th level she gains armor mastery. She treats her vigilante level as her fighter level for the purposes of both.</p>
<p>This replaces the vigilante's <strong className="hl">social talents</strong> gained at 3rd, 7th, 11th, 15th, and 19th levels.</p>
</>};
const _mounted_fury = {title: "Mounted Fury", jsx: <><h2 id="arc-vigilante-mounted_fury-mounted-fury">Mounted Fury</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 58</Link><br/>Some vigilantes form special bonds with the creatures they use as steeds, considering these loyal and trusted mounts just as much heroes or antiheroes as they might be. Mounted furies often masquerade as anonymous stable hands or humble quartermasters to mask their vigilante activities.</p>
<Ability icon={["skills"]} id="arc-vigilante-mounted_fury-undefined">
<Pair id="arc-vigilante-mounted_fury-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/handle_animal">Handle Animal</Link> (CHA)</Pair>
<Pair title="Removed Skills">Swim, Use Magic Device</Pair></Ability>
<p><strong>Thorough Change:</strong> A mounted fury must take care when changing from one identity to another, including making any changes necessary to ensure that his mount is not associated with his social identity and vice versa (although if anyone suspects him of being anything other than what he appears to be while in his social identity, he need not make a separate Disguise check for his mount). The mounted fury always requires 1 minute to change identities, regardless of other effects that reduce the time required, and he cannot choose the <Link to="/soctalent/immediate_change">immediate change</Link> or <Link to="/soctalent/quick_change">quick change</Link> social talents.</p>
<p>This alters <strong className="hl">dual identity</strong>.</p>
<p><strong>Mount (Ex):</strong> A mounted fury gains the service of a loyal and trusty steed to carry him into battle. This mount functions as a druid's <Link to="/sidekick/animal_companion">animal companion</Link>, using the mounted fury's vigilante level as his effective druid level. The creature must be one that he is capable of riding and is suitable as a mount. A Medium mounted fury can select a <Link to="/companion/camel">camel</Link> or a <Link to="/companion/horse">horse</Link>. A Small mounted fury can select a <Link to="/companion/pony">pony</Link> or a <Link to="/companion/wolf">wolf</Link>, but can also select a <Link to="/companion/boar">boar</Link> or a <Link to="/companion/dog">riding dog</Link> if he is at least 4th level. The GM might approve other animals as suitable mounts. A mounted fury can exchange or replace his mount the same way that a druid exchanges or replaces her animal companion.</p>
<p>A mounted fury does not take an armor check penalty on Ride checks while riding his mount. The mount is always considered combat trained and begins play with <Link to="/feat/light_armor_proficiency">Light Armor Proficiency</Link> as a bonus feat. A mounted fury's mount does not gain the share spells ability.</p>
<p>A mounted fury's bond with his mount is strong, with the pair learning to anticipate each other's moods and moves. At 3rd level, the mounted fury's mount shares all his <Link to="/main/teamwork_feat">teamwork feats</Link>, without needing to meet the prerequisites (although while mounted, the mounted fury and his mount do not count as separate creatures for the purpose of these feats). At 5th level, the mounted fury's mount benefits from the vigilante's startling appearance as if it were the vigilante. Should a mounted fury's mount die, the mounted fury may find another mount to serve him after 1 week of mourning. This new mount does not gain the link or devotion special abilities until the next time the mounted fury gains a level.</p>
<p>A mounted fury can select avenger <Link to="/ability/vigilante_talents">vigilante talents</Link>, despite not being an avenger. He can also select a teamwork feat for which he qualifies in place of a vigilante talent; at 10th level, he gains an additional teamwork feat each time he does so (if he selected any teamwork feats in place of vigilante talents before 10th level, he gains an additional teamwork feat at 10th level for each time he did so).</p>
<p>This ability replaces <strong className="hl">vigilante specialization</strong>.</p>
<p><strong>Furious Charge (Ex):</strong> At 6th level, a mounted fury learns to make more accurate charge attacks while mounted. The mounted fury and his mount receive a +4 bonus on melee attack rolls on a charge while mounted (instead of the normal +2). In addition, the mounted fury and his mount don't take any penalty to AC after making a charge attack while mounted.</p>
<p>This replaces the <strong className="hl">vigilante talent</strong> gained at 6th level.</p>
<p><strong>Mighty Charge (Ex):</strong> At 12th level, a mounted fury learns to make devastating charge attacks while mounted. He doubles the critical threat range of any weapons he wields during a charge while mounted, as well as the critical threat range of the mount's attacks. This increase does not stack with other effects that increase the threat range of weapons. In addition, the mounted fury can make a free bull rush, disarm, sunder, or trip combat maneuver if his charge attack is successful. This free combat maneuver does not provoke an attack of opportunity.</p>
<p>This replaces the <strong className="hl">vigilante talent</strong> gained at 12th level.</p>
<p><strong>Vengeance Strike (Ex):</strong> At 20th level, a mounted fury need not be mounted while he studies a target against whom he plans a vengeance strike, but he must be mounted when he makes the strike's attack.</p>
<p>This ability alters <strong className="hl">vengeance strike</strong>.</p>
</>};
const _mutated_defender = {title: "Mutated Defender", jsx: <><h2 id="arc-vigilante-mutated_defender-mutated-defender">Mutated Defender</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 9</Link><br/>Occasionally a mutation takes hold of the body of a vigilante, but he learns to hide his maladies, usually through alchemical concoctions or magical concealment. Unlike other mutants, who are usually shunned in Alkenstar and other settlements, mutated defenders can appear in public without revealing their mutations - though they can still use them to their full potential in secret.</p>
<p><strong>Mutant Specialization:</strong> A mutated defender gains a base attack bonus equal to his vigilante level instead of using those listed in the vigilante's class table. He adds this value as normal to any other base attack bonus gained from other classes or racial Hit Dice. He also selects one <Link to="/template/mutant">mutant deformity</Link> other than mindless or vulnerability. This deformity magically reverts when the vigilante is in his social identity, as do all mutations from his mutant talents, allowing him to hide his mutation entirely. Unlike with other vigilante talents, the vigilante is entirely unable to use the benefits of his mutant talents while in his social identity.</p>
<p>This replaces <strong className="hl">vigilante specialization</strong>.</p>
<p><strong>Mutant Talents:</strong> At 2nd level and every 2 vigilante levels thereafter, a mutated defender can select from the following mutant talents, in addition to the <Link to="/ability/vigilante_talents">vigilante talents</Link> normally available to him.</p>
<p>This alters <strong className="hl">vigilante talent</strong>.</p>
<blockquote>
<p><strong>Mutant Blast (Su):</strong> One of the mutated defender's extremities becomes elementally warped, and he can discharge a blast of energy from this limb. This functions as the elemental ray bloodline power (from the <Link to="/sorcbloodline/elemental">elemental</Link> sorcerer bloodline) and uses his vigilante level as his sorcerer level. The mutated defender chooses the damage type (acid, cold, electricity, or fire) of his mutant blast when selecting this talent. The mutated defender must be at least 9th level to select this talent.</p>
<p><strong>Mutant Evolution:</strong> The mutated defender gains a 1-point <Link to="/ability/unchained_evolutions">evolution</Link> from the eidolon list other than <Link to="/unchevolution/climb">climb</Link>, <Link to="/unchevolution/improved_natural_armor">improved natural armor</Link>, <Link to="/unchevolution/mount">mount</Link>, <Link to="/unchevolution/skilled">skilled</Link>, or <Link to="/unchevolution/swim">swim</Link>. He must meet any prerequisites as normal, using his vigilante level for prerequisites that require a summoner level. He can select an evolution granting a natural attack without fulfilling the subtype requirement, though he must replace one of his hands with the natural weapon. A mutated defender can select this mutant talent multiple times, choosing a different evolution each time.</p>
<p><strong>Mutated Lobe (Sp):</strong> A mutated defender's brain is enlarged and distended, granting him psychic powers. He can cast <Link to="/spell/detect_thoughts">detect thoughts</Link> as a spell-like ability once per day for every 4 vigilante levels he has, with a caster level equal to his vigilante level. A vigilante must be at least 4th level to select this talent.</p>
</blockquote>
</>};
const _psychometrist = {title: "Psychometrist", jsx: <><h2 id="arc-vigilante-psychometrist-psychometrist">Psychometrist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 59</Link><br/>Wise vigilantes know that there is power in certain seemingly unremarkable items. Psychometrists aren't spellcasters; instead, they collect strange items or create their own uncanny gadgets that seem to only work for them. Psychometrists often hide their clandestine activities behind the guise of an eccentric peddler, curator, tinker, or artificer.</p>
<Ability icon={["skills"]} id="arc-vigilante-psychometrist-undefined">
<Pair id="arc-vigilante-psychometrist-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering), Knowledge (engineering)</Pair></Ability>
<p><strong>Occult Awareness:</strong> At 1st level, a psychometrist gains <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> as a bonus feat.</p>
<p>This ability replaces the <strong className="hl">social talent</strong> gained at 1st level.</p>
<p><strong>Implements and Focus Powers (Su):</strong> At 2nd level, a psychometrist learns to use the powers of one <Link to="/ability/implements">implement school</Link> from the <Link to="/class/occultist">occultist</Link> class; the conjuration implement school is not available to a psychometrist. This implement school does not allow the psychometrist to cast any spells of that school of magic, though, and he can't use spell trigger or spell completion magic items from any schools without succeeding at the appropriate Use Magic Device check. A psychometrist can't select an implement school more than once. The psychometrist treats his vigilante level as his occultist level for purposes of determining how his implements' focus powers work, and for determining at what level he may choose certain focus powers. Unlike an occultist, each of a psychometrist's focus powers has its own associated implement or gadget. For example, a psychometrist might own a scabbard implement to use the legacy weapon focus power and an implement that is a pair of boots to use the sudden speed focus power. The psychometrist must assign mental focus separately to each implement each day, and he doesn't gain resonant powers his implements. Otherwise, this ability acts like the occultist's implements class feature. At 6th, 12th, and 18th levels, the psychometrist learns to use one additional implement school.</p>
<p>Each time a psychometrist learns an implement school, he learns the base focus power from that school, plus one focus power from each implement school he has previously learned (but not from the new school he just learned). The psychometrist can use focus powers only by expending mental focus (see below). Unless otherwise noted, the DC for any saving throw against a focus power equals 10 + 1/2 the psychometrist's vigilante level + the psychometrist's Intelligence modifier. The psychometrist can select a school he already knows, and in this case, he gains a total of two new focus powers from that school (instead of learning the base focus power from the new school).</p>
<p>This replaces the <strong className="hl">vigilante talents</strong> gained at 2nd, 6th, 12th, and 18th levels.</p>
<p><strong>Mental Focus (Su):</strong> At 2nd level, like an occultist, a psychometrist has mental focus he can invest into his implements each day to allow him to utilize abilities tied to them. A psychometrist has a number of points of mental focus equal to half his vigilante level plus his Intelligence modifier.</p>
<p><strong>Object Reading (Su):</strong> At 2nd level, a psychometrist can read information from items he examines, and gains the occultist's object reading ability.</p>
<p>This ability replaces <strong className="hl">unshakable</strong>.</p>
<p><strong>Psychometric Strike (Su):</strong> At 20th level, a psychometrist gains twice the usual benefits of vengeance strike (up to the same maximum) against an opponent who possesses an object that once belonged to the psychometrist.</p>
<p>This ability alters <strong className="hl">vengeance strike</strong>.</p>
</>};
const _serial_killer = {title: "Serial Killer", jsx: <><h2 id="arc-vigilante-serial_killer-serial-killer">Serial Killer</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 71</Link><br/>Some vigilantes adopt an innocent guise to cloak their acts of brutal murder.</p>
<p><strong>Alignment:</strong> A serial killer's vigilante identity must be evil. A serial killer whose vigilante identity becomes nonevil cannot gain new levels as a vigilante but retains all of her class abilities.</p>
<p><strong>Vigilante Specialization:</strong> A serial killer must choose the stalker specialization. Her hidden strike is considered equivalent to a <Link to="/ability/sneak_attack">sneak attack</Link> with the same number of dice for the purpose of meeting prerequisites or using abilities that depend on sneak attack.</p>
<p>This alters <strong className="hl">vigilante specialization</strong>.</p>
<p><strong>Thwart Pursuit (Ex):</strong> At 3rd level, a serial killer adds 1/2 her vigilante level as a bonus on all checks in <Link to="/rule/chases">a chase</Link> and to the DCs of Diplomacy checks to gather information about her and checks to track her or notice her tracks (though not to the DC of the <Link to="/arc-investigator/profiler">profiler's</Link> expert profiler ability).</p>
<p>This ability replaces <strong className="hl">unshakable</strong>.</p>
<p><strong>Studied Target (Ex):</strong> At 4th level, a serial killer gains the studied target ability of a <Link to="/class/slayer">slayer</Link> 3 levels lower, including the ability to study multiple targets simultaneously at the appropriate levels. The serial killer does not provoke attacks of opportunity when attempting a <em>coup de grace</em> against a studied target.</p>
<p>This ability replaces the 4th- and 14th-level <strong className="hl">vigilante talents</strong> and the 9th- and 19th-level <strong className="hl">social talents</strong>.</p>
<p><strong>Charming (Ex):</strong> At 5th level, a serial killer gains the <Link to="/hex/charm">charm</Link> hex as if she were a witch of her vigilante level, but she can't affect animals. The DC is based on her Charisma, and the ability is nonmagical.</p>
<p>This ability replaces <strong className="hl">startling appearance</strong>.</p>
<p><strong>Death Attack (Ex):</strong> At 6th level, a serial killer gains the ability to make a death attack as if she were an <Link to="/pclass/assassin">assassin</Link> (DC = 10 + 1/2 her vigilante level + her Charisma modifier).</p>
<p>This ability replaces the 6th-level <strong className="hl">vigilante talent</strong>.</p>
<p><strong>Calling Card (Ex):</strong> At 7th level, when a serial killer slays a humanoid with a <em>coup de grace</em> or death attack, she can leave a telltale token or clue behind identifying this death as her work. The serial killer chooses her calling card when she gains this ability, and the first time she uses it in an area where she has renown (as per the <Link to="/soctalent/renown">renown</Link> social talent), it becomes associated with her killings. After that, once citizens of a new settlement find this calling card, the serial killer immediately establishes the settlement as an area of renown for her vigilante identity without spending additional time to spread tales, and the Intimidate bonus from renown increases by 2. She still must spend time to establish her social identity's renown.</p>
<p>This replaces the 7th-level <strong className="hl">social talent</strong>.</p>
<p><strong>Grisly Murder (Ex):</strong> At 11th level, a serial killer gains <Link to="/feat/dreadful_carnage">Dreadful Carnage</Link> as a bonus feat, and if she leaves a calling card, the murder is so horrifying that creatures examining the corpse are affected as per <Link to="/spell/nightmare">nightmare</Link> that night (DC = 10 + 1/2 the serial killer's vigilante level + her Charisma modifier). The nightmare affects a number of creatures equal to the serial killer's Charisma modifier, starting with the first creature to examine the corpse.</p>
<p>This replaces <strong className="hl">frightening appearance</strong>.</p>
<p><strong>Quiet Death (Ex):</strong> At 12th level, a serial killer gains the quiet death class feature as if she were an assassin.</p>
<p>This ability replaces the 12th-level <strong className="hl">vigilante talent</strong>.</p>
<p><strong>Swift Death (Ex):</strong> At 17th level, a serial killer gains the swift death class feature as an assassin.</p>
<p>This ability replaces the vigilante's <strong className="hl">stunning appearance</strong>.</p>
</>};
const _splintersoul = {title: "Splintersoul", jsx: <><h2 id="arc-vigilante-splintersoul-splintersoul">Splintersoul</h2>
<p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook pg. 17</Link><br/>A splintersoul pushes the boundaries of what it means to have two separate identities. One may be kind and calm while the other is angry and heartless, and the change from one identity to another is sudden and frightening. The splintersoul is torn by conflicting emotions and thoughts, but because of his dual mind, he can master a uniquely disparate set of skills and abilities no normal person should be able to manage.</p>
<p><strong>Splintered Identity (Ex):</strong> A splintersoul's two identities are even more distant from one another than those of a normal vigilante. He cannot use any of his vigilante talents while in his social identity.</p>
<p>However, for the purpose of qualifying for classes, feats, and other abilities, he is eligible if one of his alignments meets the requirements. While in an identity whose alignment is incompatible with an ability, class, or feat, he temporarily loses access to the feat or ability or is treated as an ex-member of the class, as appropriate.</p>
<p>For example, a splintersoul with <Link to="/class/barbarian">barbarian</Link> levels, a lawful-good social identity, and a neutral vigilante identity can't use his vigilante talents or his rage class feature while in his social identity, but he regains these abilities and can use them as normal as soon as he changes to his vigilante identity.</p>
<p>A splintersoul with <Link to="/class/paladin">paladin</Link> levels must follow the paladin's normal code of conduct while in a lawful-good identity, but while in an identity with a different alignment, the following changes apply to his code: Willingly committing an evil act (for example, casting a spell with the evil descriptor) still causes the vigilante to become an ex-paladin, but otherwise, he can do whatever else he feels is necessary to uphold the causes of law and good. He should strive to act with honor and uphold the tenets of his faith, but failing to do so is not a violation of his code. At the GM's discretion, other classes or archetypes with similarly strict codes of conduct can also follow a less strict version of a code of conduct while in an identity with an incompatible alignment.</p>
<p>This alters <strong className="hl">dual identity</strong>.</p>
<p><strong>Sudden Change (Ex):</strong> More adaptive than other vigilantes, a splintersoul must select the <Link to="/soctalent/quick_change">quick change</Link> social talent at 3rd level and the <Link to="/soctalent/immediate_change">immediate change</Link> social talent at 7th level, ignoring the minimum levels for those talents.</p>
<p>This replaces <strong className="hl">unshakable</strong> and alters the <strong className="hl">social talents</strong> gained at 3rd and 7th levels.</p>
<p><strong>Surprising Change (Ex):</strong> At 7th level, when a splintersoul uses the immediate change talent to reveal his vigilante identity and then attacks a foe in the same round, he can use the startling appearance ability against that foe as though the foe were unaware of his presence. At 11th and 17th levels, he can use frightening appearance and stunning appearance, respectively, while using this ability. A splintersoul can use frightening appearance and stunning appearance only against foes who are unaware of his presence, and he can do so a number of times per day equal to his Charisma modifier. This ability doesn't function against foes who already know the splintersoul's identity.</p>
<p>This alters <strong className="hl">startling appearance</strong>, <strong className="hl">frightening appearance</strong>, and <strong className="hl">stunning appearance</strong>.</p>
</>};
const _teisatsu = {title: "Teisatsu", jsx: <><h2 id="arc-vigilante-teisatsu-teisatsu">Teisatsu</h2>
<p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 26</Link><br/>Teisatsu are specialized vigilantes who focus on infiltrating social scenes and high-society gatherings on behalf of the feuding lords of Minkai. Trained as assassins and spies, they cultivate a suite of personalities and study secret arts that hone their bodies into deadly weapons.</p>
<p><strong>Weapon and Armor Proficiency:</strong> Teisatsu are proficient with all simple weapons, plus the <Link to="/eq-weapon/kama">kama</Link>, <Link to="/eq-weapon/katana">katana</Link>, <Link to="/eq-weapon/kusarigama">kusarigama</Link>, <Link to="/eq-weapon/nunchaku">nunchaku</Link>, <Link to="/eq-weapon/sai">sai</Link>, <Link to="/eq-weapon/short_sword">short sword</Link>, <Link to="/eq-weapon/shortbow">shortbow</Link>, <Link to="/eq-weapon/shuriken">shuriken</Link>, <Link to="/eq-weapon/siangham">siangham</Link>, and <Link to="/eq-weapon/wakizashi">wakizashi</Link>. They are proficient with light and medium armor, but not with shields.</p>
<p>This replaces the vigilante's normal <strong className="hl">weapon and armor proficiencies</strong>.</p>
<p><strong>Infiltrator (Ex):</strong> A teisatsu is required to choose stalker as his specialization.</p>
<p>This alters <strong className="hl">vigilante specialization</strong>.</p>
<p><strong>Ki Pool (Su):</strong> At 2nd level, a teisatsu gains a ki pool, identical to the <Link to="/class/ninja">ninja</Link> class feature, using his vigilante level as his effective ninja level.</p>
<p>This ability replaces the <strong className="hl">vigilante talent</strong> gained at 2nd level.</p>
<p><strong>Teisatsu Talents:</strong> A teisatsu selects <Link to="/ability/vigilante_talents">vigilante talents</Link> as normal. He can't select the <Link to="/vigtalent/rogue_talent">rogue talent</Link> vigilante talent. He can, however, select either of the talents below, which are unique to the teisatsu.</p>
<p>This ability alters <strong className="hl">vigilante talents</strong>.</p>
<blockquote>
<p><strong>Ki Power (Su):</strong> The teisatsu gains a single <Link to="/ability/ki_powers">ki power</Link> of his choice from the list available to the <Link to="/class/unchained_monk">unchained monk</Link> class.</p>
<p><strong>Shadow Tricks (Ex):</strong> The teisatsu gains a single <Link to="/ability/ninja_tricks">ninja trick</Link> (but not a master trick) of his choice. He cannot select a rogue talent in place of a ninja trick in this manner. If he selects a ninja trick labeled as a Primary Sneak Attack Trick, that talent applies to his hidden strikes instead of to sneak attacks, and the talent counts as a Hidden Strike Talent for the limitation of applying only one effect to a single hidden strike.</p>
</blockquote>
</>};
const _warlock = {title: "Warlock", jsx: <><h2 id="arc-vigilante-warlock-warlock">Warlock</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 60</Link><br/>Practicing magic in secret, the warlock obscures her arcane scholarship from public view. Her study of these arts allows her to hide her dual nature and enchant her enemies - or simply blast them with furious magical attacks.</p>
<Ability icon={["skills"]} id="arc-vigilante-warlock-undefined">
<Pair id="arc-vigilante-warlock-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/spellcraft">Spellcraft</Link> (INT)</Pair>
<Pair title="Removed Skills">Disable Device, Knowledge (engineering), Perception, Survival</Pair></Ability>
<p><strong>Skill Ranks per Level:</strong> The warlock gains a number of skill ranks equal to 4 + her Intelligence modifier at each level, instead of 6 + her Intelligence modifier skill ranks.</p>
<p>This alters the vigilante's <strong className="hl">skill ranks per level</strong>.</p>
<p><strong>Armor Proficiencies:</strong> A warlock is not proficient with medium armor. Like a <Link to="/class/magus">magus</Link>, she can cast her spells while wearing light armor without incurring the normal arcane spell failure chance.</p>
<p>This alters the vigilante's <strong className="hl">armor proficiencies</strong>.</p>
<p><strong>Spellcasting:</strong> A warlock casts arcane spells and cantrips as a magus. She prepares spells using a spellbook, choosing them from the 6th-level and lower spells from the <Link to="/main/spells_wizard">sorcerer/wizard spell list</Link>; higher-level sorcerer/wizard spells are not on the warlock's spell list.</p>
<p>This replaces the 4th-, 8th-, 10th-, 14th-, and 16th-level <strong className="hl">vigilante talents</strong>.</p>
<p><strong>Spellbook:</strong> A warlock has a spellbook that functions in the same way as a magus's spellbook but uses the 6th-level and lower spells from the sorcerer/wizard spell list.</p>
<p><strong>Mystic Bolts (Su):</strong> A warlock can sling projectiles of magical energy at will by shooting a bolt or touching her foe. A melee mystic bolt requires the target to be within reach, and a ranged mystic bolt is a ranged attack with a range of 30 feet. A mystic bolt deals 1d6 points of damage plus 1 for every 4 vigilante levels the warlock has. The warlock must choose one type of damage for her mystic bolt: acid, cold, electricity, or fire. Attacking with a mystic bolt takes the place of one of the warlock's normal attacks, and she can make a full attack using mystic bolts. The warlock vigilante attacks with mystic bolts as though they were light one-handed weapons, and the bolts can be used for two-weapon fighting (with each hand creating one mystic bolt) and feats and abilities that apply to weapon attacks (unless they're excluded from that feat, such as with <Link to="/feat/power_attack">Power Attack</Link>). <Link to="/feat/weapon_focus">Weapon Focus</Link> (ray) doesn't apply to mystic bolts, but a warlock can take Weapon Focus (mystic bolt) and apply it to both melee and ranged mystic bolts.</p>
<p>Creating a mystic bolt requires the hand to be free, but the bolt appears only briefly, so a warlock using mystic bolts has a free hand any time she isn't attacking with a mystic bolt. The warlock threatens with a mystic bolt, but only if she has a hand free. Because mystic bolts are impermanent, a spell that targets a single weapon (like <Link to="/spell/magic_weapon">magic weapon</Link>) can't affect it, nor can a mystic bolt be made with magic weapon special abilities. Abilities that affect all weapon attacks the warlock makes, such as the arcane striker warlock talent, function with mystic bolts.</p>
<p>At 7th level and every 6 vigilante levels thereafter, the warlock chooses another damage type from the list above. Each time she creates a mystic bolt, she can have it use any one of the damage types she has selected.</p>
<p>This ability replaces <strong className="hl">vigilante specialization</strong>.</p>
<p><strong>Piercing Bolts (Ex):</strong> At 3rd level, the warlock can choose one mystic bolt per round to be a touch attack. This turns a melee mystic bolt into a melee touch attack or a ranged mystic bolt into a ranged touch attack. At 5th level, the warlock can treat all of her mystic bolts as touch attacks.</p>
<p>This ability replaces <strong className="hl">unshakable</strong>.</p>
<p><strong>Warlock Talents:</strong> A warlock can select from any of the following vigilante talents, in addition to general <Link to="/ability/vigilante_talents">vigilante talents</Link>.</p>
<p>This alters <strong className="hl">vigilante talents</strong>.</p>
<blockquote>
<p><strong>Arcane Striker (Su):</strong> The warlock gains <Link to="/feat/arcane_strike">Arcane Strike</Link> as a bonus feat. At 12th level, when she activates Arcane Strike, she can choose to also give her weapons the <Link to="/magic-enh/flaming">flaming</Link>, <Link to="/magic-enh/frost">frost</Link>, <Link to="/magic-enh/shock">shock</Link>, or <Link to="/magic-enh/thundering">thundering</Link> weapon special ability. She makes this choice each time she activates Arcane Strike, and it lasts for the same duration. At 16th level, she adds <Link to="/magic-enh/anarchic">anarchic</Link>, <Link to="/magic-enh/axiomatic">axiomatic</Link>, <Link to="/magic-enh/flaming_burst">flaming burst</Link>, <Link to="/magic-enh/holy">holy</Link>, <Link to="/magic-enh/icy_burst">icy burst</Link>, <Link to="/magic-enh/shocking_burst">shocking burst</Link>, and <Link to="/magic-enh/unholy">unholy</Link> to the list of special abilities she can select. She can choose to apply an alignment-based weapon special ability only while in her vigilante identity, and only if it matches the alignment of her vigilante identity.</p>
<p><strong>Elemental Armor (Su):</strong> When in her vigilante identity, the warlock gains armor made of elemental energy. She is surrounded by a nimbus of ice, lightning, or flames, granting her resistance 5 to cold, electricity, or fire, respectively. The damage type must be chosen when she selects this talent, and it can't be changed. At 4th level, the warlock's armor deals 1d6 points of damage of the chosen energy type to any creature striking the warlock with a natural weapon or a non-reach melee weapon. A creature that attempts a grapple combat maneuver check against the warlock also takes this damage. A creature can take damage in this way no more than once per round. At 8th level, the energy resistance increases to 10. At 12th level, the damage increases to 2d6 points. At 16th level, the warlock becomes immune to the chosen damage type while in her vigilante identity.</p>
<p><strong>Familiar (Ex):</strong> The warlock gains a <Link to="/sidekick/familiar">familiar</Link>, using her vigilante level as her effective wizard level. The <Link to="/ability/familiar">familiar</Link> also has a social identity as a seemingly normal animal, though warlocks with outlandish familiars might still need to hide them.</p>
<p><strong>Social Simulacrum (Sp):</strong> The warlock can create a short-lived simulacrum (as <Link to="/spell/lesser_simulacrum">lesser simulacrum</Link>) that duplicates her social identity, allowing her to appear to be in two places at once. Creating the duplicate takes 1 hour and requires no material component cost. It lasts for 4 hours before turning back into an inert pile of snow. The duplicate replicates only the warlock's social identity, with the same alignment and social talents. It has no magical abilities, and can't assume a vigilante identity. As with the spell, the simulacrum isn't under the warlock's control. The warlock can create a social simulacrum no more than once per day and can have only one in existence at a time. A warlock must be at least 8th level to select this talent.</p>
<p><strong>Tattoo Chamber (Su):</strong> This talent functions as the <Link to="/arc-vigilante/cabalist">cabalist</Link> ability of the same name.</p>
</blockquote>
</>};
const _wildsoul = {hasJL:true,title: "Wildsoul", jsx: <><div className="jumpList" id="arc-vigilante-wildsoul-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arc-vigilante-wildsoul-arachnid">Arachnid</InnerLink></li><li><InnerLink toTop to="arc-vigilante-wildsoul-falconine">Falconine</InnerLink></li><li><InnerLink toTop to="arc-vigilante-wildsoul-ursine">Ursine</InnerLink></li><li><InnerLink toTop to="arc-vigilante-wildsoul-feline">Feline</InnerLink></li></ul></div><h2 id="arc-vigilante-wildsoul-wildsoul">Wildsoul</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 61</Link><br/>Within some vigilantes are incredible innate abilities that, although normally the domain of natural beasts, inexplicably aid them in fighting their enemies. These vigilantes have ties to the creature whose abilities they emulate, whether from a distant lycanthrope ancestor, a divine touch, unnatural experimentation, or something else altogether.</p>
<p><strong>Natural Course (Ex):</strong> At first level, when a wildsoul chooses a vigilante specialization, he must also choose a natural course: arachnid, falconine, feline, or ursine. This represents the type of creature that influences his body, granting him his remarkable abilities. Once this choice is made, it can't be changed.</p>
<p>At 2nd, 6th, 12th, and 18th levels, a wildsoul gains a specific ability tied to his natural course. These abilities count as vigilante talents, as onlookers who see the wildsoul in his social identity use them overtly might suspect him of being something more than he appears; the more obvious animalistic abilities (like bear form and shoot webs) impart a -10 penalty on the wildsoul's Disguise check to appear as his social identity.</p>
<p>This alters <strong className="hl">vigilante specialization</strong> and replaces the <strong className="hl">vigilante talents</strong> gained at 2nd, 6th, 12th, and 18th levels.</p>
<h3 id="arc-vigilante-wildsoul-arachnid" data-hash-target>Arachnid</h3>
<p>These wildsouls have the blood of spiders running through their veins.</p>
<blockquote>
<p><strong>Heightened Senses (Ex):</strong> At 2nd level, an arachnid wildsoul can anticipate physical danger and react astonishingly quickly. He gains the <Link to="/vigtalent/stalker_sense">stalker sense</Link> vigilante talent, even if he is not a stalker.</p>
<p><strong>Shoot Webs (Ex):</strong> At 6th level, an arachnid wildsoul's wrists can produce thick, sticky webbing that he can shoot at his enemies. Shooting webbing is a ranged touch attack with a range increment of 10 feet. The webbing acts as a <Link to="/eq-weapon/tanglefoot_bag">tanglefoot bag</Link> when it hits a creature, except the DC of the Reflex save to avoid being glued to the floor or unable to fly is equal to 10 + 1/2 the arachnid wildsoul's vigilante level + his Constitution modifier. Like a tanglefoot bag, the webbing does not work underwater. The arachnid wildsoul can shoot webs a number of times per day equal to 3 + his Constitution modifier.</p>
<p><strong>Web Specialist (Ex):</strong> At 12th level, an arachnid wildsoul can coat his hands and feet in super-sticky webbing, even over equipment such as gloves and boots. This gives him a climb speed of 30 feet. Additionally, as a move action that provokes attacks of opportunity, an arachnid wildsoul can use his webbing to create the equivalent of a 50-foot length of <Link to="/eq-misc/silk_rope_50_ft">silk rope</Link> (hp 4, break DC 24) and can shoot it at any flat, unoccupied surface that is at least one 5-foot square in size. If the arachnid wildsoul succeeds at a ranged attack against AC 10, the rope sticks fast to the surface, can only be removed if it is destroyed, and can support the weight of the arachnid wildsoul plus one additional Medium or smaller creature. If more creatures attempt to use the webbing rope, it is destroyed. This costs a daily use of shoot webs.</p>
<p><strong>Web Master (Ex):</strong> At 18th level, an arachnid wildsoul can use web specialist without spending a daily use of shoot webs. Additionally, he can create numerous web-ropes as he is moving and swing from rope to rope, essentially allowing him to move at his base speed through the air as long as he always uses at least one hand to hold the webbing and continues to have tether points within 50 feet and above him. The web ropes he creates in this way dissolve as soon as he is done using them to swing.</p>
</blockquote>
<h3 id="arc-vigilante-wildsoul-falconine" data-hash-target>Falconine</h3>
<p>These wildsouls have the blood of falcons or other large birds of prey running through their veins.</p>
<blockquote>
<p><strong>Soft Landing (Ex):</strong> At 2nd level, a falconine wildsoul can grow feathery wing-flaps under his arms that allow him to fall slowly. He gains the <Link to="/vigtalent/perfect_fall">perfect fall</Link> vigilante talent.</p>
<p><strong>Eagle Eye (Ex):</strong> At 6th level, a falconine wildsoul hones his visual senses. He gains a competence bonus equal to half his vigilante level on visual Perception checks.</p>
<p><strong>Take to the Air (Ex):</strong> At 12th level, a falconine wildsoul can harness the flight inherent in his blood. While in his vigilante identity, he has feathery wings that grant him a fly speed of 40 feet (with good maneuverability).</p>
<p><strong>Deadly Dive (Ex):</strong> At 18th level, a falconine wildsoul has learned how to mimic the swooping and diving of birds of prey. As a full-round action while he is flying at least 30 feet above the ground, a falconine wildsoul can dive onto a creature by moving up to twice his fly speed and make a single melee attack. The movement provokes attacks of opportunity as normal, and the attack provokes an attack of opportunity from the attack's target. If the attack is successful, the falconine wildsoul deals the attack's damage plus 2d6 points of damage for every 10 feet he dove (to a maximum of 20d6 damage if he dove 100 feet or more). Even if the attack misses, the target still takes the extra damage for the distance of the dive, but it receives a Reflex save to halve the damage (DC = 10 + 1/2 the falconine wildsoul's vigilante level + his Strength or Dexterity modifier, whichever is higher). A falconine vigilante can dive in this way a number of times per day equal to his Strength or Dexterity modifier, whichever is higher.</p>
</blockquote>
<h3 id="arc-vigilante-wildsoul-ursine" data-hash-target>Ursine</h3>
<p>These wildsouls have the blood of bears running through their veins.</p>
<blockquote>
<p><strong>Deadly Claws (Ex):</strong> At 2nd level, an ursine wildsoul's hands become claws in his vigilante identity, granting him two claw attacks. These are primary natural attacks that deal 1d4 points of damage if he is Medium or 1d3 if he is Small.</p>
<p><strong>Bear Jaws (Ex):</strong> At 6th level, an ursine wildsoul gains a bite attack while in his vigilante identity. This is a primary natural attack that deals 1d4 points of damage if he is Medium or 1d3 if he is Small.</p>
<p><strong>Thick Hide (Ex):</strong> At 12th level, an ursine wildsoul in his vigilante identity has skin that bristles with thick hair like that of a bear's. He gains a natural armor bonus of +1. This natural armor bonus increases by 1 at 16th and 20th levels.</p>
<p><strong>Bear Form (Su):</strong> At 18th level, an ursine wildsoul has learned how to take a bear's form. He can change into bear form as a standard action, at will, and the transformation lasts until he changes back. While transformed, he becomes a <Link to="/monster/grizzly_bear">grizzly bear</Link> as <Link to="/spell/beast_shape_ii">beast shape II</Link>. An ursine wildsoul loses his ability to speak while in bear form and is limited to the sounds that a normal bear can make, though he can communicate normally with other bears, as speak with animal.</p>
</blockquote>
<h3 id="arc-vigilante-wildsoul-feline" data-hash-target>Feline</h3>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 7</Link><br/>Feline wildsouls have the blood of great cats running through their veins.</p>
<blockquote>
<p><strong>Feline Attributes (Ex):</strong> At 2nd level, a feline wildsoul gains the low-light vision and <Link to="/umr/scent">scent</Link> special abilities and reduces any penalty he takes on Perception checks due to distance by an amount equal to 1/2 his vigilante level (minimum 0). If he also gains low-light vision or scent from a feat or racial trait, he instead gains a +2 bonus on Perception checks for each ability he already has. In addition, he can take <Link to="/feat/aspect_of_the_beast">Aspect of the Beast</Link>, ignoring the feat's prerequisites.</p>
<p><strong>Feline Grace (Ex):</strong> At 6th level, a feline wildsoul gains <Link to="/ability/uncanny_dodge">uncanny dodge</Link>, using his vigilante level as his effective <Link to="/class/rogue">rogue</Link> level. At 12th level, he also gains <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link>.</p>
<p><strong>Feline Pounce (Ex):</strong> At 12th level, a feline wildsoul can strike quickly and lethally at a moment's notice. He gains the <Link to="/vigtalent/mad_rush">mad rush</Link> avenger vigilante talent, even if he is not an avenger.</p>
<p><strong>Nine Lives (Su):</strong> At 18th level, a feline wildsoul can survive attacks that would kill lesser vigilantes. He gains the <Link to="/talent/defensive_roll">defensive roll</Link> advanced rogue talent and can use this ability eight times per day.</p>
</blockquote>
</>};
const _zealot = {title: "Zealot", jsx: <><h2 id="arc-vigilante-zealot-zealot">Zealot</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 62</Link><br/>Dedicated to a single deity, the zealot hunts the enemies of his faith in secret, often because his religion is outlawed or persecuted in the region.</p>
<Ability icon={["skills"]} id="arc-vigilante-zealot-undefined">
<Pair id="arc-vigilante-zealot-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_religion">Knowledge (religion)</Link> (INT), <Link to="/skill/spellcraft">Spellcraft</Link> (INT)</Pair>
<Pair title="Removed Skills">Disable Device, Knowledge (engineering), Perform, Sleight of Hand</Pair></Ability>
<p><strong>Skill Ranks per Level:</strong> A zealot gains a number of skill ranks equal to 4 + his Intelligence modifier at each level, instead of 6 + his Intelligence modifier skill ranks.</p>
<p>This alter's the vigilante's skill ranks per level.</p>
<p><strong>Weapon Proficiencies:</strong> A zealot is also proficient in his deity's favored weapon, even if it is an exotic weapon, and if the deity's favored weapon is unarmed strike, he gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat.</p>
<p>This alters the vigilante's <strong className="hl">weapon proficiencies</strong>.</p>
<p><strong>Spellcasting:</strong> A zealot casts divine spells and orisons as an <Link to="/class/inquisitor">inquisitor</Link> and uses the <Link to="/main/spells_inquisitor">inquisitor's spell list</Link>.</p>
<p>This replaces the 4th-, 8th-, 10th-, 14th-, and 16th-level <strong className="hl">vigilante talents</strong>.</p>
<p><strong>Chaotic, Evil, Good, and Lawful Spells:</strong> Zealots can't cast spells of an alignment opposed to his vigilante identity's alignment or that of his deity. Spells associated with particular alignments are indicated by the chaotic, evil, good, and lawful descriptors in their spell descriptions.</p>
<p><strong>Alignment:</strong> A zealot's alignment must be within one step of his deity's, along either the law/chaos axis or the good/evil axis, but only when in his vigilante identity. If his social identity's alignment isn't within one step of his deity's, he can't cast spells in his social identity.</p>
<p><strong>Aura (Ex):</strong> A zealot of a chaotic, evil, good, or lawful deity has a particularly powerful aura corresponding to the deity's alignment (see <Link to="/spell/detect_evil">detect evil</Link> spell for details), but only when in his vigilante identity.</p>
<p><strong>Inquisition (Ex):</strong> A zealot picks a deity and picks a single <Link to="/ability/inquisitions">inquisition</Link> tied to that deity. He uses his vigilante level as his inquisitor level to determine level dependent inquisition abilities.</p>
<p>This ability replaces <strong className="hl">vigilante specialization</strong>.</p>
<p><strong>Zealot Talents:</strong> A zealot can select from any of the following vigilante talents, in addition to general <Link to="/ability/vigilante_talents">vigilante talents</Link>.</p>
<p>This alters <strong className="hl">vigilante talents</strong>.</p>
<blockquote>
<p><strong>Channel Energy (Su):</strong> A zealot who takes this talent can <Link to="/ability/channel_energy">channel energy</Link> with an effective cleric level equal to his vigilante level - 4 (minimum 1) while in his vigilante identity. If good in his vigilante identity (or if he worships a good deity), the vigilante channels positive energy and can choose to deal damage to undead creatures or to heal living creatures. If evil in his vigilante identity (or if he worships an evil deity), the vigilante channels negative energy and can choose to deal damage to living creatures or to heal undead creatures. If the vigilante is neutral in his vigilante identity and worships a neutral deity, the vigilante must choose whether he channels positive or negative energy. Once this choice is made, it can't be reversed.</p>
<p><strong>Discern Lies (Sp):</strong> The zealot can use <Link to="/spell/discern_lies">discern lies</Link> as a spell-like ability for a number of rounds per day equal to his vigilante level. The rounds need not be consecutive. Activating this ability is an immediate action. A zealot must be 6th level before taking this talent.</p>
<p><strong>Empower Symbol (Su):</strong> As a standard action, the zealot can empower his holy symbol. If the zealot is of good alignment while in his vigilante identity (or worships a good deity), this works as if the holy symbol was the center of a <Link to="/spell/consecrate">consecrate</Link> effect. If the zealot is of evil alignment in his vigilante identity (or worships an evil deity), this works as if the holy symbol was the center of a <Link to="/spell/desecrate">desecrate</Link> effect. If the zealot is neutral in his vigilante identity and worships a neutral deity, he can choose whether this ability acts as per consecrate or desecrate, but once the choice is made, it cannot be changed. At 10th level, the zealot treats his holy symbol as a permanent fixture for the purpose of determining the consecration or desecration effects. A zealot must be at least 6th level to select this talent.</p>
</blockquote>
<p><strong>Harsh Judgment (Su):</strong> A vigilante with this talent can pronounce judgment upon his foes as per the <Link to="/class/inquisitor">inquisitor</Link> class feature. He can choose from among the following inquisitor judgments: destruction, piercing, purity, and smiting. For the purpose of determining the bonuses provided by this ability, the vigilante's level stacks with levels in any other classes that grant judgment or harsh judgment. The vigilante can use this ability once per day plus an additional time per day at 4th level and every 3 levels thereafter (up to a maximum of seven times per day at 19th level). &mdash; <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg.33</Link></p>
<blockquote>
<p><strong>Stalwart (Ex):</strong> A zealot with this talent can use mental and physical resilience to avoid certain attacks. If he succeeds at a Fortitude or Will saving throw against an attack that has a reduced effect on a successful save, he avoids the effect entirely. A helpless zealot doesn't gain the benefit of this ability. A zealot must be 12th level before selecting this talent.</p>
<p><strong>Stern Gaze (Ex):</strong> A zealot with this talent is skilled at sensing deception and intimidating his foes. The zealot gains a morale bonus on all Intimidate and Sense Motive checks equal to half his vigilante level (minimum +1).</p>
<p><strong>Zealot Smite (Su):</strong> Once per day, a zealot with this talent can use this power to smite a foe. Zealots that are good in their vigilante identity (or worship a good deity) can smite evil creatures, those that are evil in their vigilante identity (or worship an evil deity) can smite good creatures, those that are chaotic in their vigilante identity (or worship a chaotic deity) can smite lawful creatures, and those that are lawful in their vigilante identity (or worship a lawful deity) can smite chaotic creatures. A zealot that is neutral when in his vigilante identity and that worships a neutral deity can pick to smite any one of the four alignments; other zealots must select from the alignments available based on their own alignment or their deity's. Once that choice is made, it can't be changed.</p>
<p>As a swift action, the zealot chooses one target within sight to smite. If this target is of the proper alignment, the zealot adds his Charisma bonus on his attack rolls (to a maximum of half his vigilante level) and his vigilante level on all damage rolls against the target of his smite. If the target of smite is an outsider with an alignment subtype of the zealot's smite, a similarly aligned dragon, or an undead creature (if the zealot's smite is against evil creatures), a good-aligned cleric or paladin (if the zealot's smite is against good creatures), a chaotic aberration (if the zealot's smite is against chaotic creatures), or a lawful-aligned cleric or paladin (if the zealot's smite is against lawful creatures), the bonus to damage on the first successful attack increases to 2 points of damage per vigilante level. Regardless of the target, the zealot's smite attacks bypass the creature's DR as if it were a weapon with a +5 enhancement bonus.</p>
<p>At 5th level, and every 3 vigilante levels thereafter, a zealot can smite one additional time per day, to a maximum of seven times per day at 20th level.</p>
</blockquote>
</>};
export default {agathiel:_agathiel,anaphexia_thought_killer:_anaphexia_thought_killer,avenging_beast:_avenging_beast,bellflower_harvester:_bellflower_harvester,brute:_brute,cabalist:_cabalist,chu_ye_enforcer:_chu_ye_enforcer,darklantern:_darklantern,dragonscale_loyalist:_dragonscale_loyalist,experimenter:_experimenter,faceless_enforcer:_faceless_enforcer,ferocious_hunter:_ferocious_hunter,gunmaster:_gunmaster,half_elf_double_scion:_half_elf_double_scion,hangman:_hangman,hidden_current:_hidden_current,imperial_agent:_imperial_agent,magical_child:_magical_child,masked_maiden:_masked_maiden,mounted_fury:_mounted_fury,mutated_defender:_mutated_defender,psychometrist:_psychometrist,serial_killer:_serial_killer,splintersoul:_splintersoul,teisatsu:_teisatsu,warlock:_warlock,wildsoul:_wildsoul,zealot:_zealot}