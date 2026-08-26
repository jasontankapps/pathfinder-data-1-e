import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import {Block,Row,Cell} from '../../components/Block';
import ScrollContainer from '../../components/ScrollContainer';
const _not_found = {title: "Unknown", jsx: <><h2 id="discipline-not_found-error">Error</h2>
<p>Unable to find the requested discipline.</p>
</>};
const _abomination = {title: "Abomination", jsx: <><h2 id="discipline-abomination-abomination">Abomination</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 64</Link><br/>Your mind is impure, tainted by outside forces. These might be monstrous ancestors whose blood still flows within you, or powerful and unknowable psychic forces that intrude upon your mind. Like a psychic disease, this influence consumes part of your brain, creating a dark counterpart to your normal self. Every time you call forth a psychic spell, you're drawing on this dangerous force - and potentially giving it a greater hold on you. This malign influence might stem from creatures like <Link to="/family/rakshasa">rakshasas</Link> and <Link to="/monster/aboleth">aboleths</Link>, or perhaps malign entities that dwell in the voids between the stars.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Charisma</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/ray_of_enfeeblement">Ray of enfeeblement</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/alter_self">Alter self</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/excruciating_deformation">Excruciating deformation</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/black_tentacles">Black tentacles</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/explode_head">Explode head</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/repulsion">Repulsion</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/insanity">Insanity</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/orb_of_the_void">Orb of the void</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/telekinetic_storm">Telekinetic storm</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Your powers allow the dark influences to take over, and it can be difficult to come back from the brink.</Pair>
</Ability>
<Ability id="dark-half-su" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="dark-half-su">Dark Half (Su)</Pair>
<Pair title="Swift Action"><p>By allowing the dark forces to overcome you, you can enter a state of instinctual cruelty. While you're manifesting your dark half, you increase the DCs of your psychic spells by 1, gain a +2 morale bonus on Will saves, and become immune to fear effects.</p>
<p>Whenever you cast a spell that deals damage while manifesting your dark half, you can cause one creature that took damage from the spell to also take 1 point of <Link to="/rule/bleed">bleed</Link> damage. While manifesting your dark half, you can't use any Charisma-, Dexterity-, or Intelligence-based skills (except Acrobatics, Fly, Intimidate, and Ride) or any ability that requires patience or concentration other than casting spells using psychic magic, using phrenic amplifications, or attempting to return to normal.</p>
</Pair>
<Pair title="Ability">You can attempt to return to your normal self as a <strong className="hl">free action</strong>, but must succeed at a <Link to="/rule/concentration">concentration</Link> check with a DC equal to 10 + your caster level. If you fail, you continue to manifest your dark half and can't attempt to change back for 1 round.</Pair>
<Pair title="Usage">3 + &amp;frac12&amp; your Psychic level + Charisma modifier times/day</Pair>
<Pair title="At 5th Level">The bleed damage increases to 2 points.</Pair>
<Pair title="At 13th Level">The bleed damage becomes 1d6 points.</Pair>
<Pair title="Special">When your <em>dark half</em> rounds are expended, you return to your normal self without requiring a concentration check.</Pair>
</Ability>
<Ability id="morphic-form-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="morphic-form-ex">Morphic Form (Ex)</Pair>
<Pair title="At 5th Level"><p>While manifesting your dark half, you gain DR 5. This damage reduction can be overcome by a random type of damage each time you manifest your dark half, determined by rolling on the table below.</p>
<ScrollContainer id="discipline-abomination--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Damage Reduction</th>
</tr>
</thead>
<tbody><tr>
<td>01-35</td>
<td>DR 5/bludgeoning</td>
</tr>
<tr>
<td>36-60</td>
<td>DR 5/cold iron</td>
</tr>
<tr>
<td>61-100</td>
<td>DR 5/magic</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
</Ability>
<Ability id="psychic-safeguard-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="psychic-safeguard-su">Psychic Safeguard (Su)</Pair>
<Pair title="At 13th Level">You project constant mental defenses, gaining spell resistance equal to 8 + your caster level. While manifesting your dark half, this spell resistance increases to 16 + your caster level.</Pair>
</Ability>
</>};
const _bleaching = {title: "Bleaching", jsx: <><h2 id="discipline-bleaching-bleaching">Bleaching</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 18</Link><br/>You draw power from a void in your emotions, a yawning and empty chasm where your hopes and dreams and fears should be. It is very rare for any creature besides a <Link to="/race/gnome">gnome</Link> to have this psychic discipline - usually a bleachling or a gnome with a particularly strong fear of the Bleaching - but in occasional cases members of other races have been known to develop such a strong nihilistic ennui or depression that they can tap into the vitality-draining effects of this discipline as well.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Wisdom</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/decrepit_disguise">Decrepit disguise</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/steal_voice">Steal voice</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/cup_of_dust">Cup of dust</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/enervation">Enervation</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/pessimism">Pessimism</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/disintegrate">Disintegrate</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/waves_of_exhaustion">Waves of exhaustion</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/greater_spell_immunity">Greater spell immunity</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/energy_drain">Energy drain</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Your emotional malaise combines with your psychic ability to allow you to drain the vibrancy from the world around you.</Pair>
</Ability>
<Ability id="draining-touch" extraClasses="subAbility" icon={["magic-palm"]}>
<Pair single id="draining-touch">Draining Touch</Pair>
<Pair title="Usage">Wisdom modifier times/day</Pair>
<Pair title="Standard Action"><p>You can make a melee touch attack to drain vitality from a creature. If the attack hits, the target must succeed at a Fortitude save (DC = 10 + half your psychic level + your Wisdom modifier) or take 1d2 points of <Link to="/rule/charisma_damage">Charisma damage</Link>. If a creature is affected, the colors of its skin, hair, and eyes dull and become less vibrant.</p>
<p>Whether or not the save is successful, a creature cannot be the target of this power again for 24 hours. You regain 1 point in your phrenic pool each time you successfully drain a creature this way.</p>
</Pair>
</Ability>
<Ability id="emotionally-distant" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="emotionally-distant" flavor="Your emotions have atrophied such that you rarely have any genuine feelings at all.">Emotionally Distant</Pair>
<Pair title="At 5th Level">You gain a +4 bonus on saving throws to resist charm, emotion, and fear effects.</Pair>
</Ability>
<Ability id="drain-vibrancy" extraClasses="subAbility" icon={["aura"]}>
<Pair single id="drain-vibrancy" flavor="You can drain the color and vitality from the world around you.">Drain Vibrancy</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Usage">3 times a day</Pair>
<Pair title="Standard Action">You can drain vibrancy within a 30-foot radius, causing the area and all creatures within it to become pale and sallow. Each living creature in the area must succeed at a Fortitude save (DC = 10 + half your psychic level + your Wisdom modifier) or take 1 temporary <Link to="/rule/negative_level">negative level</Link> as their life force drains away.</Pair>
<Pair title="At 17th Level">A creature that fails its saving throw takes 2 temporary negative levels instead.</Pair>
</Ability>
</>};
const _dream = {title: "Dream", jsx: <><h2 id="discipline-dream-dream">Dream</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 65</Link><br/>You discover deeper and more powerful corners of your mind through journeys you make in your dreams. Your consciousness expands outward into other dreaming minds, allowing you to explore the psychic landscapes of unconsciousness or regions of nightmare and horror.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Charisma</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/sleep">Sleep</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/oneiric_horror">Oneiric horror</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/deep_slumber">Deep slumber</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/sleepwalk">Sleepwalk</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/nightmare">Nightmare</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/cloak_of_dreams">Cloak of dreams</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/ethereal_jaunt">Ethereal jaunt</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/dream_voyage">Dream voyage</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/microcosm">Microcosm</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Your mind can powerfully influence dreaming consciousnesses.</Pair>
</Ability>
<Ability id="dream-leech-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="dream-leech-su">Dream Leech (Su)</Pair>
<Pair title="Swift Action"><p>While adjacent to a sleeping or unconscious creature, you can siphon that creature's dreams, thereby learning new things about your own mind. The creature can attempt a Will save to negate this effect; such creatures are never considered willing. Creatures that don't dream are immune to this effect.</p>
<p>If the subject fails the save, you gain a +4 bonus on your next Bluff, Diplomacy, or Intimidate check against the subject within the next 24 hours, and you regain 1 point in your phrenic pool.</p>
</Pair>
<Pair title="Usage">Charisma modifier times/day</Pair>
<Pair title="Special">You can use this ability no more than once per hour and no more than once per creature per day.</Pair>
</Ability>
<Ability id="oneiromancy-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="oneiromancy-su">Oneiromancy (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action"><p>You can tamper with the minds of sleeping creatures. You plant a subconscious thought in a sleeping creature's mind by attempting a <Link to="/skill/diplomacy">Diplomacy</Link> or <Link to="/skill/intimidate">Intimidate</Link> check to modify the sleeping creature's attitude or request a service from it. If you succeed, when the creature wakes it behaves in the way you dictated with the normal restrictions for the Diplomacy or Intimidate skill. The target of <em>oneiromancy</em> remains unaware of this manipulation, though if you fail your Diplomacy check the subject might have its starting attitude toward you negatively impacted, as normal. You must be adjacent to the sleeping creature to use this ability.</p>
<p>Alternatively, you can use this ability as part of the casting of <Link to="/spell/dream">dream</Link>, <Link to="/spell/minor_dream">minor dream</Link>, or <Link to="/spell/nightmare">nightmare</Link>. In this case, the <em>oneiromancy</em> effect takes place when the spell is cast.</p>
</Pair>
<Pair title="Special">Creatures that don't dream are immune to this effect.</Pair>
</Ability>
<Ability id="mind-heist-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="mind-heist-sp" flavor="You can delve into the subconscious mind of a sleeping target.">Mind Heist (Sp)</Pair>
<Pair title="At 5th Level">You can cast <Link to="/spell/detect_thoughts">detect thoughts</Link> as a spell-like ability on any adjacent sleeping creature. Additionally, you can gain the benefit of <em>detect thoughts</em> on a target of your <em>dream, minor dream,</em> or <em>nightmare</em> spells as if you had studied the target for 3 rounds. If you cast <Link to="/spell/dream_scan">dream scan</Link>, you know whether you received false information from the dream. A successful Will save negates <em>mind heist.</em></Pair>
<Pair title="Usage">Charisma modifier times/day</Pair>
</Ability>
<Ability id="waking-dream-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="waking-dream-sp">Waking Dream (Sp)</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Usage">Charisma modifier times/day</Pair>
<Pair title="Standard Action">You can take control of the body of a sleeping creature within 30 feet for 1 hour per level. This ability functions like <Link to="/spell/magic_jar">magic jar</Link>, except that your soul travels directly into the sleeping target with no receptacle necessary and the target creature's consciousness remains dreaming and unaware of its body's actions. When *waking dream *ends or the host body is destroyed, you immediately wake up in your body regardless of the distance from the host body, provided your body hasn't been destroyed.</Pair>
<Pair title="Special">Creatures that don't dream are immune to this effect.</Pair>
</Ability>
</>};
const _enlightenment = {title: "Enlightenment", jsx: <><h2 id="discipline-enlightenment-enlightenment">Enlightenment</h2>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 16</Link><br/>Your quest for enlightenment has opened your eyes to new concepts and heights of spiritual awareness. You seek learning that allows you to evolve in mind and spirit, improving your next incarnation.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Wisdom</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/acute_senses">Acute senses</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/identify">Identify</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/clairaudience_clairvoyance">Clairaudience/clairvoyance</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/thoughtsense">Thoughtsense</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/atonement">Atonement</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/greater_arcane_sight">Greater arcane sight</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/circle_of_clarity">Circle of clarity</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/protection_from_spells">Protection from spells</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/overwhelming_presence">Overwhelming presence</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Your enlightened mind eases your burden and allows troubles to harmlessly wash over you.</Pair>
</Ability>
<Ability id="expanded-awareness-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="expanded-awareness-su">Expanded Awareness (Su)</Pair>
<Pair title="Usage">Wisdom modifier times/day</Pair>
<Pair title="Move-Equivalent Action">You can focus on your senses and gain one of the following sensory abilities: <Link to="/umr/blindsense">blindsense</Link> (10 feet), darkvision (30 feet), low-light vision, or <Link to="/umr/scent">scent</Link>. This new sense lasts for 1 round per psychic level.</Pair>
<Pair title="At 11th Level">You can use <em>expanded awareness</em> to gain <Link to="/umr/see_in_darkness">see in darkness</Link> or <Link to="/umr/thoughtsense">thoughtsense</Link> (20 feet).</Pair>
<Pair title="At 15th Level">You can use it to gain <Link to="/umr/lifesense">lifesense</Link>.</Pair>
</Ability>
<Ability id="patient-insight-ex" extraClasses="subAbility" icon={["rolling-dices"]}>
<Pair single id="patient-insight-ex">Patient Insight (Ex)</Pair>
<Pair title="Ability">When you attempt a <Link to="/skill/heal">Heal</Link>, <Link to="/skill/knowledge">Knowledge</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, or <Link to="/skill/survival">Survival</Link> check, you can spend 1 point from your phrenic pool to roll the check twice and take the higher result.</Pair>
</Ability>
<Ability id="focused-trance-ex" extraClasses="subAbility" icon={["armor-upgrade","upgrade"]}>
<Pair single id="focused-trance-ex">Focused Trance (Ex)</Pair>
<Pair title="At 5th Level">You can enter a deep meditation, allowing you to concentrate on a single problem, philosophical issue, or memory. This trance lasts 1d6 rounds, during which time you can take only move actions and gain a bonus equal to your psychic level on all saves against sonic effects and <Link to="/umr/gaze">gaze</Link> attacks. When you come out of your trance, you can attempt a single <Link to="/skill/appraise">Appraise</Link>, Knowledge, or <Link to="/skill/spellcraft">Spellcraft</Link> check with a +20 circumstance bonus.</Pair>
<Pair title="Usage">Wisdom modifier times/day</Pair>
</Ability>
<Ability id="empty-mind-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="empty-mind-su" flavor="You can clear your mind by focusing on a sense of emptiness, purging yourself of doubt and discomfort.">Empty Mind (Su)</Pair>
<Pair title="At 13th Level">You can spend 1 point from your phrenic pool on your turn as a <strong className="hl">free action</strong> to remove the blinded, confused, dazed, deafened, staggered, or stunned condition from yourself.</Pair>
</Ability>
</>};
const _faith = {title: "Faith", jsx: <><h2 id="discipline-faith-faith">Faith</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 65</Link><br/>Your belief in a higher power fuels your psychic abilities. Whether your mental abilities truly come to you as a divine gift or are simply enhanced by the power of your belief, none can say. In many ways, you resemble a divine caster, and prayers often factor into your casting of psychic spells.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Wisdom</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/bless">Bless</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/spiritual_weapon">Spiritual weapon</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/magic_vestment">Magic vestment</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/guardian_of_faith">Guardian of faith</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/commune">Commune</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/psychic_surgery">Psychic surgery</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/greater_scrying">Greater scrying</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/greater_planar_ally">Greater planar ally</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/miracle">Miracle</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal","hazard-sign"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Your powers serve to protect or cure you and your allies.</Pair>
<Pair title="At 1st Level">Choose a deity to worship. Your alignment must remain within one step of your deity's or you lose access to all this discipline's bonus spells and discipline powers.</Pair>
</Ability>
<Ability id="divine-energy" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="divine-energy">Divine Energy</Pair>
<Pair title="Ability"><p>You can channel spell energy into <Link to="/main/inflict_spells">cure or inflict spells</Link>. This ability functions similarly to the <Link to="/class/cleric">cleric's</Link> ability to spontaneously cast <em>cure</em> or <em>inflict</em> spells, and the type of spells you can convert depends on your alignment in the same way. The <em>cure</em> or <em>inflict</em> spells don't count as being on your psychic spell list for the purposes of any other effects.</p>
<p>Each day, you can convert up to one spell from each spell level you can cast. Each time you use this ability to convert a spell, you regain 1 point in your phrenic pool. The maximum number of points you can regain in this way per day is equal to your Wisdom modifier.</p>
</Pair>
</Ability>
<Ability id="resilience-of-the-faithful-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="resilience-of-the-faithful-su">Resilience of the Faithful (Su)</Pair>
<Pair title="At 5th Level">You gain a resistance bonus on all saving throws equal to 2 + <Link to="/misc/one_fifth">one-fifth</Link> of your psychic level.</Pair>
</Ability>
<Ability id="prayer-aura-su" extraClasses="subAbility" icon={["aura","upgrade","armor-upgrade","armor-downgrade"]}>
<Pair single id="prayer-aura-su">Prayer Aura (Su)</Pair>
<Pair title="At 13th Level"><p>As a <strong className="hl">free action</strong>, you can extend an aura around you to bolster your allies and make your enemies less effective. This functions as the <Link to="/spell/prayer">prayer</Link> spell, granting your allies a +1 luck bonus on attack rolls, weapon damage rolls, saves, and skill checks and imposing a -1 penalty on your enemies' rolls of those types.</p>
<p>If you are chaotic, lawful, good, or evil, the penalty from your aura changes to -2 against creatures of an opposing alignment. The penalty doesn't change further for a creature that opposes you on two alignment axes (such as a chaotic evil creature fighting a lawful good psychic).</p>
</Pair>
<Pair title="Usage">1 round/day per psychic level; these rounds need not be consecutive</Pair>
</Ability>
</>};
const _ferocity = {title: "Ferocity", jsx: <><h2 id="discipline-ferocity-ferocity">Ferocity</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 92</Link><br/>You are in touch with the most primal part of your subconscious. Your training allows you to unlock animalistic senses and powers.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Wisdom</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/anticipate_peril">Anticipate peril</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/bulls_strength">Bull's strength</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/heroism">Heroism</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/freedom_of_movement">Freedom of movement</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/stoneskin">Stoneskin</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/transformation">Transformation</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/greater_arcane_sight">Greater arcane sight</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/mind_blank">Mind blank</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/foresight">Foresight</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Through your psychic training, you can unleash the most animalistic portions of your subconscious, enhancing your senses and physical capabilities.</Pair>
</Ability>
<Ability id="enhanced-senses-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="enhanced-senses-ex" flavor="Your mind can process sensory stimuli with exceptional efficiency, awakening you to a world most humanoids cannot comprehend.">Enhanced Senses (Ex)</Pair>
<Pair title="Ability"> You gain <Link to="/umr/scent">scent</Link> as per the universal monster rule.</Pair>
<Pair title="Standard Action">You can spend 1 point from your phrenic pool to amplify your sense of smell, gaining <Link to="/umr/blindsense">blindsense</Link> with a range of 30 feet for 1 minute.</Pair>
<Pair title="At 11th Level">Your blindsense is continuously active, and you can spend 1 point from your phrenic pool as a <strong className="hl">standard action</strong> to gain <Link to="/umr/blindsight">blindsight</Link> with a range of 30 feet for 1 minute.</Pair>
</Ability>
<Ability id="survival-instinct-ex" extraClasses="subAbility" icon={["armor-upgrade","upgrade"]}>
<Pair single id="survival-instinct-ex" flavor="Through sheer willpower, you can keep your body going longer than should be possible.">Survival Instinct (Ex)</Pair>
<Pair title="Passive Ability">You add your Wisdom bonus (minimum +1) to your Constitution score to determine the negative hit point total at which you die, and as a bonus on Constitution checks to become stable or regain consciousness.</Pair>
</Ability>
<Ability id="ferocity-ex" extraClasses="subAbility" icon={["armor-upgrade","upgrade"]}>
<Pair single id="ferocity-ex" flavor="You cling to life with increasing ferocity.">Ferocity (Ex)</Pair>
<Pair title="At 5th Level">You gain <Link to="/umr/ferocity">ferocity</Link> as per the universal monster rule. Whenever you have 0 hit points or negative hit points, you gain a +4 morale bonus to your Strength and Dexterity, as well as a +2 morale bonus on Fortitude saves.</Pair>
<Pair title="At 8th Level">You are not <Link to="/misc/staggered">staggered</Link> when you have 0 hit points or negative hit points, and you automatically stabilize when you have negative hit points.</Pair>
</Ability>
<Ability id="primal-fury-su" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="primal-fury-su">Primal Fury (Su)</Pair>
<Pair title="At 13th Level">You can unleash a more primal version of yourself as a <strong className="hl">free action</strong>. This functions as <Link to="/spell/transformation">transformation</Link>, with the following exceptions. You can use this ability for a number of rounds per day equal to your psychic level. These rounds do not need to be consecutive. You can end the effect as a <strong className="hl">free action</strong>. After using this ability, you are <Link to="/misc/fatigued">fatigued</Link> for a number of rounds equal to twice the number of rounds spent in <em>primal fury.</em> You cannot enter a new <em>primal fury</em> while fatigued or <Link to="/misc/exhausted">exhausted</Link>. If you fall <Link to="/misc/unconscious">unconscious</Link>, your <em>primal fury</em> immediately ends.</Pair>
</Ability>
</>};
const _hag_called = {title: "Hag-Called", jsx: <><h2 id="discipline-hag_called-hag-called">Hag-Called</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven pg. 23</Link><br/>A <Link to="/family/hag">hag's</Link> call echoes through your mind like a siren's song, enticing you to surrender and become something horrible. Even after you've resisted the call or even killed your hag mother, those echoes remain, shaping your mind into something else and telling you who you were meant to be. While you're almost certainly a <Link to="/race/changeling">changeling</Link>, you might be a latent psychic who came into accidental psychic contact with a hag's call through a changeling associate, or your dreams might have long been infested by a <Link to="/monster/night_hag">night hag's</Link> machinations.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Charisma</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/ill_omen">Ill omen</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/enthrall">Enthrall</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/bestow_curse">Bestow curse</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/charm_monster">Charm monster</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/threefold_aspect">Threefold aspect</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/veil">Veil</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/control_weather">Control weather</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/trap_the_soul">Trap the soul</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/dominate_monster">Dominate monster</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">The echoes of the hag's call shapes the psychic potential of your mind, granting you exceptional abilities that might one day exceed the hag's own.</Pair>
</Ability>
<Ability id="threefold-casting-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="threefold-casting-ex" flavor="While you cannot join a true witch's coven, you are nonetheless skilled at casting magic in conjunction with others.">Threefold Casting (Ex)</Pair>
<Pair title="Ability">You gain a +2 insight bonus on skill checks for <Link to="/rule/occult_rituals">ritual magic</Link> in which you have at least two secondary casters. In addition, whenever you are within 30 feet of another hag, psychic, or <Link to="/class/witch">witch</Link>, you can use the <Link to="/rule/aid_another">aid another</Link> action to grant a +1 bonus to the other spellcaster's caster level for 1 round.</Pair>
</Ability>
<Ability id="mothers-embrace-su" extraClasses="subAbility" icon={["rolling-dices","armor-upgrade"]}>
<Pair single id="mothers-embrace-su" flavor="The hag's call grows stronger as you grow more desperate, promising protection and release if only you would succumb.">Mother's Embrace (Su)</Pair>
<Pair title="Ability"><p>When you would fail a Will save, you can add 1d4 to your result; whether or not this causes you to succeed at the saving throw, you take 2 points of <Link to="/rule/wisdom_damage">Wisdom damage</Link>.</p>
<p>When you perform an act of cruelty, you regain 1 phrenic pool point.</p>
</Pair>
<Pair title="Usage">You can use each aspect of this ability a number of times per day equal to your Charisma modifier.</Pair>
</Ability>
<Ability id="deceptive-shapes-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="deceptive-shapes-su" flavor="You learn the hag's art of concealing your true face to get what you want.">Deceptive Shapes (Su)</Pair>
<Pair title="At 5th Level">You can change into any Small or Medium humanoid at will as <Link to="/spell/alter_self">alter self</Link>, though you don't gain any special abilities or ability score adjustments. You can't replicate a specific person using this ability.</Pair>
</Ability>
<Ability id="curse-mastery-sp" extraClasses="subAbility" icon={["armor-upgrade","upgrade"]}>
<Pair single id="curse-mastery-sp" flavor="You have made the accursed magic of the hags your own.">Curse Mastery (Sp)</Pair>
<Pair title="At 13th Level">You become immune to spells of the curse subschool and curse effects. Furthermore, the DCs of your spells with the curse descriptor increase by 1, and you can apply the <Link to="/phrenicamp/overpowering_mind">overpowering mind</Link> and <Link to="/phrenicamp/synaptic_shock">synaptic shock</Link> phrenic amplifications to spells with the curse descriptor so long as you have learned those amplifications.</Pair>
</Ability>
</>};
const _haunted = {title: "Haunted", jsx: <><h2 id="discipline-haunted-haunted">Haunted</h2>
<p><strong>Sources</strong> <Link to="/source/haunted_heroes_handbook">Haunted Heroes Handbook pg. 18</Link><br/>You attract the attention of spirits as naturally as a lodestone attracts iron filings. Testing your power leads you to develop some control over undead forces, despite the inherent defenses such creatures have against psychic abilities. Meanwhile, those spirits clinging to your life essence become increasingly protective, channeling their abilities to aid you and warn of threats. Psychics of this discipline are most common in Ustalav and Shenmen, where so many spirits are stuck in the transition between life and death.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Charisma</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/detect_undead">Detect undead</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/calm_spirit">Calm spirit</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/halt_undead">Halt undead</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/speak_with_haunt">Speak with haunt</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/disrupting_weapon">Disrupting weapon</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/undeath_to_death">Undeath to death</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/ethereal_jaunt">Ethereal jaunt</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/greater_possession">Greater possession</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/etherealness">Etherealness</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Your powers interact with the spiritual world, attracting the attention of minor spirits and undead.</Pair>
</Ability>
<Ability id="lingering-spirits-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="lingering-spirits-sp">Lingering Spirits (Sp)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Ability">Numerous minor spirits find themselves attracted to you. Your connection with these spirits allows you to manifest any of the following spell-like abilities as a <strong className="hl">swift action</strong>: <Link to="/spell/mage_hand">mage hand</Link>, <Link to="/spell/ghost_sound">ghost sound</Link>, <Link to="/spell/grave_words">grave words</Link>, or <Link to="/spell/telekinetic_projectile">telekinetic projectile</Link>.</Pair>
</Ability>
<Ability id="spiritual-bulwark-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="spiritual-bulwark-su" flavor="You develop a deeper attachment to your lingering spirits, and learn to rely on their presence as protection from external spiritual attacks.">Spiritual Bulwark (Su)</Pair>
<Pair title="At 5th Level">You gain a bonus equal to your Charisma modifier on saving throws against effects generated by haunts, incorporeal undead, incorporeal outsiders, and on saving throws against possession attempts.</Pair>
</Ability>
<Ability id="phantasmal-assault-su" extraClasses="subAbility" icon={["upgrade","armor-downgrade"]}>
<Pair single id="phantasmal-assault-su" flavor="You learn to harness your psychic force against all forms of haunts and undead creatures.">Phantasmal Assault (Su)</Pair>
<Pair title="At 13th Level">Your mind-affecting spells that deal damage can now be used against haunts and undead normally immune to mind-affecting effects (including mindless undead). These spells are treated as though they dealt positive energy damage. This affects only spells that deal purely psychic-based damage (such as <Link to="/spell/psychic_crush_1">psychic crush</Link>, <Link to="/spell/mind_thrust_1">mind thrust</Link>, or <Link to="/spell/synapse_overload">synapse overload</Link>); effects based on physical effects (such as <em>telekinetic projectile</em> or <Link to="/spell/telekinetic_storm">telekinetic storm</Link>) don't benefit from this ability. Additional non-damaging effects from such spells don't affect the haunt, unless it would be normally affected.</Pair>
<Pair title="Special">When you use a mind-affecting effect that deals damage against a possessed creature, the possessing entity takes a -4 penalty on the saving throw against the mind-affecting attack.</Pair>
</Ability>
</>};
const _lore = {title: "Lore", jsx: <><h2 id="discipline-lore-lore">Lore</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 66</Link><br/>By collecting expert information and reading all sorts of treatises and chapbooks on occult subjects, you learn proper techniques and rituals to empower your mental abilities. Your abilities become stronger through study and science, not instinct.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Wisdom</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/comprehend_languages">Comprehend languages</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/hypercognition">Hypercognition</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/dispel_magic">Dispel magic</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/mind_probe">Mind probe</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/retrocognition">Retrocognition</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/legend_lore">Legend lore</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/greater_arcane_sight">Greater arcane sight</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/moment_of_prescience">Moment of prescience</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/divide_mind">Divide mind</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Your powers relate to your extensive knowledge and your ability to alter and adapt your memory.</Pair>
</Ability>
<Ability id="illuminating-answers-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="illuminating-answers-su" flavor="You can glean deeper truths from advice you magically obtain, even if the information itself is specious.">Illuminating Answers (Su)</Pair>
<Pair title="Passive Ability">When you use a spell or spell-like ability that allows you to get answers to questions (such as <Link to="/spell/augury">augury</Link>, <Link to="/spell/blood_biography">blood biography</Link>, or <Link to="/spell/contact_other_plane">contact other plane</Link>) and get at least one answer, you regain 1 point in your phrenic pool. You regain this point even if the answer is false or vague.</Pair>
<Pair title="Special">The maximum number of points you can regain in this way per day is equal to your Wisdom modifier.</Pair>
</Ability>
<Ability id="mnemonic-cache-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="mnemonic-cache-su">Mnemonic Cache (Su)</Pair>
<Pair title="Ability"><p>You can memorize a piece of information and later recall it perfectly. Your mnemonic cache can hold roughly 10 pages of written information, including images and maps, or 30 minutes' worth of speech or music. (Memorizing music doesn't confer the ability to perform it properly.)</p>
<p>The amount you can store increases by 5 pages and 5 minutes at 2nd level, and at every psychic level thereafter. You can hold only one piece of information in your mnemonic cache at a time. The information doesn't go away when you recall it, but when you put a new piece of information in the cache, the old piece becomes as imperfect any other memory. Memorizing magical writing (such as a scroll or a page from a spellbook) doesn't confer the ability to borrow, duplicate, or retain any of the magic in the writing. You could reproduce the spell in writing to allow someone who prepares spells from a spellbook to prepare it, though this functions as using a borrowed spellbook for anyone other than you.</p>
<p>If you're in telepathic contact with another creature (through <Link to="/spell/telepathic_bond">telepathic bond</Link>, for example), you can transfer the information directly into its mind as a <strong className="hl">free action</strong>. For this creature, the information functions like a normal memory, not one with perfect clarity.</p>
<p>You can attempt to sequester a written magical trap (such as <Link to="/spell/explosive_runes">explosive runes</Link> or <Link to="/spell/sepia_snake_sigil">sepia snake sigil</Link>) in your mnemonic cache and destroy it. Treat this as a <Link to="/skill/disable_device">Disable Device</Link> check to disarm a magical trap (as though you had the <Link to="/ability/trapfinding">trapfinding</Link> class feature). Your bonus on this roll is equal to either your Disable Device modifier or the sum of 5 + your psychic level + your Wisdom modifier, whichever is higher. If you succeed, instead of being disabled, the trap is erased and destroyed. This ability can't destroy <em>symbol</em> traps; it functions only if written text is involved.</p>
</Pair>
</Ability>
<Ability id="superior-automatic-writing-ex" extraClasses="subAbility" icon={["upgrade","magic-swirl"]}>
<Pair single id="superior-automatic-writing-ex">Superior Automatic Writing (Ex)</Pair>
<Pair title="At 5th Level">When attempting checks for the <Link to="/skill/automatic_writing">automatic writing</Link> occult skill unlock, you can treat your psychic level + your Wisdom bonus as your number of Linguistics skill ranks.</Pair>
<Pair title="At 8th Level">You gain an additional option when using <em>automatic writing,</em> and can attempt a DC 35 check to gain information as though you'd used <Link to="/spell/commune">commune</Link> instead of <em>augury</em> or <Link to="/spell/divination">divination</Link>. This type of <em>commune</em> requires no material component, and the duration equals 1 round per psychic class level you possess. You connect to a distant being of great intellect, a fragment of the <Link to="/rule/akashic_record">Akashic Record</Link>, or a similar bastion of knowledge instead of to a deity.</Pair>
</Ability>
<Ability id="memory-palace-su" icon={["magic-swirl","upgrade"]}>
<Pair single id="memory-palace-su">Memory Palace (Su)</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Usage">You can create your memory palace once per day.</Pair>
<Pair title="Ability"><p>You mentally construct an extradimensional library to house mental constructs representing the volumes of lore you've studied. This ability functions as <Link to="/spell/mages_magnificent_mansion">mage's magnificent mansion</Link>, with the following adjustments: the memory palace is limited in size to a number of 10-foot cubes equal to your psychic level; your memory palace doesn't contain any furniture other than bookcases and a few desks and sofas where you and your visitors can study; and there is no food within, though the memory palace does contain a number of <Link to="/spell/unseen_servant">unseen servants</Link> equal to 1/2 your psychic level, which function solely as librarians. The library keeps the same layout each time you summon it, though you can alter its appearance each time you gain a level or by spending 15 minutes concentrating. You can reshape the memory palace in your mind, so it doesn't need to currently be in effect for you to alter it.</p>
<p>Choose one type of <Link to="/skill/knowledge">Knowledge</Link> skill when you gain this ability. Consulting your memory palace gives anyone who studies within - including you - a +4 circumstance bonus on Knowledge checks of that type, and the memory palace counts as an extensive <Link to="/rule/using_a_library">library</Link> for people attempting Knowledge checks of that type untrained. You gain a +2 circumstance bonus on checks with the chosen skill when you're not consulting the palace (including when the palace isn't in effect).</p>
</Pair>
<Pair title="At 14th Level">Choose another Knowledge skill to which your memory palace's library bonuses apply.</Pair>
<Pair title="At 15th Level">Choose another Knowledge skill to which your memory palace's library bonuses apply.</Pair>
<Pair title="At 16th Level">Choose another Knowledge skill to which your memory palace's library bonuses apply.</Pair>
<Pair title="At 17th Level">Choose another Knowledge skill to which your memory palace's library bonuses apply.</Pair>
<Pair title="At 18th Level">Choose another Knowledge skill to which your memory palace's library bonuses apply.</Pair>
<Pair title="At 19th Level">Choose another Knowledge skill to which your memory palace's library bonuses apply.</Pair>
<Pair title="At 20th Level">Choose another Knowledge skill to which your memory palace's library bonuses apply.</Pair>
</Ability>
</>};
const _mindtech = {title: "Mindtech", jsx: <><h2 id="discipline-mindtech-mindtech">Mindtech</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 13</Link><br/>You are innately tied to and can communicate with electronic machinery and similar technological objects, through which you can funnel your psychic power like flowing water. You can amplify and focus your psychic energies using the technology that surrounds you: even certain kinds of technology that might not be obvious to others.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Wisdom</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/technomancy">Technomancy</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/protection_from_technology">Protection from technology</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/irradiate">Irradiate</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/malfunction">Malfunction</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/lightning_arc">Lightning arc</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/destroy_robot">Destroy robot</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/memory_of_function">Memory of function</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/prismatic_wall">Prismatic wall</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/time_stop">Time stop</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Your powers relate to uniting technology with psychic energy.</Pair>
</Ability>
<Ability id="synergized-energy-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="synergized-energy-su">Synergized Energy (Su)</Pair>
<Pair title="Ability">Whenever you use a <Link to="/tech-misc/battery">battery</Link>, a <Link to="/main/tech_artifacts">generator</Link>, or the ability described in the <em>psychic battery</em> <Link to="/ability/psi_tech">psi-tech discovery</Link> to restore charges to any piece of technological equipment, you regain 1 point in your phrenic pool. The maximum number of points you can regain in your phrenic pool in this way per day is equal to your Wisdom modifier.</Pair>
</Ability>
<Ability id="attune-implants-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="attune-implants-su">Attune Implants (Su)</Pair>
<Pair title="At 5th Level">You can spend a <strong className="hl">full-round action</strong> once per day to harness and channel the power of your cybernetic implants into your psychic spellcasting. This increases the saving throw DCs of your psychic spells by 1, and the increase lasts a number of minutes equal to your psychic level.</Pair>
<Pair title="Special">You must have at least one piece of <Link to="/main/tech_cybertech">cybertech</Link> implanted in you to use this ability. Additional implants do not increase the duration or the number of uses of this discipline ability.</Pair>
</Ability>
<Ability id="dominate-technology-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="dominate-technology-sp" flavor="You can meld your mind with a piece of technology and temporarily control it, even if you had no hand in creating it or anything like it.">Dominate Technology (Sp)</Pair>
<Pair title="At 13th Level">Once per day, you can target one construct with <Link to="/spell/control_construct">control construct</Link> (as per the spell), except the DC of the <Link to="/skill/spellcraft">Spellcraft</Link> check each round to maintain control of the construct is equal to 15 + the construct's HD. If you must attempt opposed Spellcraft checks against the construct's creator, you take a -5 penalty on your Spellcraft checks while you concentrate on this ability.</Pair>
</Ability>
</>};
const _pageantry = {title: "Pageantry", jsx: <><h2 id="discipline-pageantry-pageantry">Pageantry</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court pg. 16</Link><br/>The act of ritual, no matter how ostentatious, can be a route to mental strength. By engaging in esoteric and intricate routines, you have unlocked potent psychic power.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Charisma</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/bless">Bless</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/calm_emotions">Calm emotions</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/slow">Slow</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/overwhelming_presence">Overwhelming presence</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/seeming">Seeming</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/heroes_feast">Heroes' feast</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/mages_magnificent_mansion">Mage's magnificent mansion</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/divine_vessel">Divine vessel</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/heroic_invocation">Heroic invocation</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Your mastery of intricate rituals allows you to wield great power, given time.</Pair>
</Ability>
<Ability id="ritual-unity-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="ritual-unity-su">Ritual Unity (Su)</Pair>
<Pair title="Ability">You receive a +2 bonus on all skill checks attempted as part of an <Link to="/rule/occult_rituals">occult ritual</Link>. When you take the <Link to="/rule/aid_another">aid another</Link> action to assist an ally with a skill check and succeed at a DC 20 check, you impart a +4 bonus to your ally instead. When you successfully aid an ally in this way, you regain 1 point in your phrenic pool.</Pair>
</Ability>
<Ability id="power-from-pageantry-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="power-from-pageantry-su">Power from Pageantry (Su)</Pair>
<Pair title="Ability">When casting a spell with a casting time of 1 standard action or less, you can spend 1 point from your phrenic pool to extend the casting time to 1 full round. If you do, the caster level and saving throw DC increase by 2.</Pair>
</Ability>
<Ability id="force-of-habit-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="force-of-habit-su" flavor="You are so accustomed to complex tasks that you can maintain focus on multiple mental foci simultaneously.">Force of Habit (Su)</Pair>
<Pair title="At 13th Level">If you spend 1 point from your phrenic pool as you cast a psychic spell that requires <Link to="/rule/concentration">concentration</Link>, you can maintain concentration on that spell as a <strong className="hl">swift action</strong>. In addition, you can cast other psychic spells while concentrating on that spell.</Pair>
</Ability>
<Ability id="unrivaled-focus-su" extraClasses="subAbility" icon={["rolling-dices"]}>
<Pair single id="unrivaled-focus-su" flavor="Your powers of concentration become unmatched.">Unrivaled Focus (Su)</Pair>
<Pair title="At 13th Level">Whenever you attempt a concentration check, you can spend 1 point from your phrenic pool to treat the result of your die roll as a 20. You must choose to use this ability before rolling the check.</Pair>
</Ability>
</>};
const _pain = {title: "Pain", jsx: <><h2 id="discipline-pain-pain">Pain</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 67</Link><br/>Mental blocks prevent your immense inborn psychic energies from flowing freely. They are unleashed only when you suffer pain.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Charisma</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/persuasive_goad">Persuasive goad</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/pain_strike">Pain strike</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/vampiric_touch">Vampiric touch</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/mass_pain_strike">Mass pain strike</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/synapse_overload">Synapse overload</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/mass_inflict_pain">Mass inflict pain</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/waves_of_exhaustion">Waves of exhaustion</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/horrid_wilting">Horrid wilting</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/mass_suffocation">Mass suffocation</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Your powers allow you to cause and endure pain.</Pair>
</Ability>
<Ability id="painful-reminder-su" extraClasses="subAbility" icon={["smoking-finger"]}>
<Pair single id="painful-reminder-su">Painful Reminder (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Swift Action">You can cause an enemy to take 1d6 points of nonlethal damage if you dealt damage to that enemy with a spell since the start of your previous turn.</Pair>
<Pair title="At 8th Level">This damage increases to 2d6.</Pair>
<Pair title="At 15th Level">The damage becomes 3d6 .</Pair>
</Ability>
<Ability id="power-from-pain-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="power-from-pain-su">Power from Pain (Su)</Pair>
<Pair title="Passive Ability">If your <em>painful reminder</em> deals at least 5 points of damage, you regain 1 point in your phrenic pool. The maximum number of points you can regain in this way per day is equal to your Wisdom modifier.</Pair>
</Ability>
<Ability id="live-on-sp" extraClasses="subAbility" icon={["stairs-goal","remedy"]}>
<Pair single id="live-on-sp">Live On (Sp)</Pair>
<Pair title="At 5th Level">You can use <Link to="/ability/lay_on_hands">lay on hands</Link> as though you were a <Link to="/class/paladin">paladin</Link> of 3 levels lower than your psychic level. You also gain access to <Link to="/ability/mercies">mercies</Link> as though you were a paladin of 3 levels lower than your psychic level. You can target only yourself with <em>lay on hands</em> or <em>mercies</em> gained from this discipline. This stacks with <em>lay on hands</em> abilities gained from other sources.</Pair>
</Ability>
<Ability id="agonizing-wound-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="agonizing-wound-su">Agonizing Wound (Su)</Pair>
<Pair title="At 13th Level">Whenever you cast a spell that deals damage to a creature, you can also make that creature <Link to="/misc/frightened">frightened</Link> or <Link to="/misc/sickened">sickened</Link> (your choice) for a number of rounds equal to your Charisma modifier. If you expend two uses of this ability, you can instead have the creature become <Link to="/misc/dazed">dazed</Link>, <Link to="/misc/nauseated">nauseated</Link>, or <Link to="/misc/panicked">panicked</Link> for 1 round. The creature can attempt a Will saving throw to negate this effect.</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Special">This is a mind-affecting pain effect.</Pair>
</Ability>
</>};
const _psychedelia = {title: "Psychedelia", jsx: <><h2 id="discipline-psychedelia-psychedelia">Psychedelia</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 67</Link><br/>You ingest hallucinogens to expand your mind. Experimentation and study show you which ones will have the greatest effect. Your psychedelic forays put you into a different mental space from others, and normal people don't really understand you.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Wisdom</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/polypurpose_panacea">Polypurpose panacea</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/mad_hallucination">Mad hallucination</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/synesthesia">Synesthesia</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/confusion">Confusion</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/mirage_arcana">Mirage arcana</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/joyful_rapture">Joyful rapture</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/waves_of_ecstasy">Waves of ecstasy</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/euphoric_tranquility">Euphoric tranquility</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/astral_projection">Astral projection</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">You distort your own mind and perceptions, and can impress your altered states onto others.</Pair>
</Ability>
<Ability id="drug-resistance-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="drug-resistance-ex">Drug Resistance (Ex)</Pair>
<Pair title="Passive Ability">When you ingest <Link to="/rule/drugs">drugs</Link>, you take half as much <Link to="/rule/ability_damage">ability damage</Link> (minimum 1). You also gain a +4 bonus on saving throws to avoid becoming addicted to a drug or to overcome being addicted.</Pair>
</Ability>
<Ability id="cognatogen-su" extraClasses="subAbility" icon={["stairs-goal","upgrade","broken-shield"]}>
<Pair single id="cognatogen-su">Cognatogen (Su)</Pair>
<Pair title="Ability"><p>Once per day, you can create a <Link to="/discovery/cognatogen">cognatogen</Link>, a mutagen-like mixture that heightens one mental ability score at the expense of a physical ability score. When you imbibe a cognatogen, you gain a +2 natural armor bonus and a +4 alchemical bonus to the selected ability score for 1 minute per psychic level. In addition, while the cognatogen is in effect, you take a -2 penalty to one of your physical ability scores.</p>
<p>If the cognatogen enhances your Intelligence, it applies a penalty to your Strength. If it enhances your Wisdom, it applies a penalty to your Dexterity. If it enhances your Charisma, it applies a penalty to your Constitution.</p>
<p>Otherwise, this ability works just like the <Link to="/class/alchemist">alchemist's</Link> <em>mutagen</em> ability. When the effect of the cognatogen ends, you take 2 points of ability damage to the ability score penalized by the cognatogen. If you have both alchemist and psychic levels, these levels stack to determine the duration of your cognatogen and the DC of the save a non-alchemist must attempt if he drinks your cognatogen.</p>
<p>If you gain discoveries, you can take the <Link to="/discovery/grand_cognatogen">grand cognatogen</Link> and <Link to="/discovery/greater_cognatogen">greater cognatogen</Link> discoveries to improve your cognatogen. The <Link to="/discovery/infuse_mutagen">infuse mutagen</Link> discovery and the <em>persistent mutagen</em> class ability apply to cognatogens. However, even if you have alchemist levels, the duration of your cognatogen remains 1 minute per level (instead of 10 minutes per level) and you can still create only one per day (instead of an unlimited number) unless you also possess the <em>cognatogen</em> discovery.</p>
</Pair>
</Ability>
<Ability id="warped-brain-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="warped-brain-su" flavor="Your mind becomes difficult to comprehend.">Warped Brain (Su)</Pair>
<Pair title="At 5th Level">When another creature uses a mind-affecting spell or ability against you, that creature must attempt a Will save. If it fails, it becomes <Link to="/misc/nauseated">nauseated</Link> for 1 round. This ability triggers even if you succeed at your save (or are otherwise unaffected by the spell or ability), but doesn't apply if you're a willing subject of the spell. This is a mind-affecting effect.</Pair>
</Ability>
<Ability id="hallucinogenic-aura-su" extraClasses="subAbility" icon={["aura","stairs-goal"]}>
<Pair single id="hallucinogenic-aura-su" flavor="A mental field emanates from you, touching the minds of those nearby.">Hallucinogenic Aura (Su)</Pair>
<Pair title="At 13th Level">Any creature within 30 feet of you must succeed at a Will save or be <Link to="/misc/confused">confused</Link> for 1d4 rounds. A creature that succeeds at its saving throw is immune to your <em>hallucinogenic aura</em> for 24 hours. A creature that fails its save doesn't need to continue making saves while it's confused by this aura, and becomes immune for 24 hours once its confusion ends. This is a mind-affecting effect. You're immune to your own hallucinogenic aura, as well as that of any other psychic.</Pair>
<Pair title="Special">You can brew an antidote that protects the imbiber from your aura. Brewing 1 dose requires 1 hour and a successful DC 15 <Link to="/skill/craft">Craft</Link> (alchemy) check. One dose's effects last for 1 month.</Pair>
</Ability>
</>};
const _rapport = {title: "Rapport", jsx: <><h2 id="discipline-rapport-rapport">Rapport</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 68</Link><br/>Forging a close bond with other people brings out the best in you, making it easier for you to link your mind with theirs. Through bonding your psyche with another person, you're able to fill in your own mental gaps and develop new psychic powers.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Charisma</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/charm_person">Charm person</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/enthrall">Enthrall</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/coordinated_effort">Coordinated effort</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/lesser_geas">Lesser geas</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/telepathy">Telepathy</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/battlemind_link">Battlemind link</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/mass_hold_person">Mass hold person</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/mass_charm_monster">Mass charm monster</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/overwhelming_presence">Overwhelming presence</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Your powers meld several minds together, or allow you to more easily influence others.</Pair>
</Ability>
<Ability id="emotional-bond-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="emotional-bond-su">Emotional Bond (Su)</Pair>
<Pair title="Ability"><p>You can create an empathic link between yourself and your allies, allowing you to monitor their emotional states. Setting up the link requires 10 minutes of uninterrupted concentration from you and all subjects, who must remain within 10 feet of you. You can link with a number of allies equal to your Charisma modifier. This bond lasts until the next time you regain your spells, or until you go <Link to="/misc/unconscious">unconscious</Link> or voluntarily end the bond as a <strong className="hl">free action</strong>. If the bond ends, you can establish a new bond at will with another 10 minutes of mutual concentration.</p>
<p>This link allows you to monitor emotions, detecting when allies become angry, surprised, confused, fearful, or the like, but doesn't allow them to communicate specific details. You can also easily tell whether a subject is unconscious. If a subject dies or moves to a different plane than you, your bond with that creature is severed. The distance between you and the subjects doesn't affect the bond as long as you're on the same plane of existence.</p>
</Pair>
<Pair title="At 4th Level">The bond also gives you the benefits of the <Link to="/spell/status">status</Link> spell with all subjects of the emotional bond.</Pair>
</Ability>
<Ability id="emotional-push-su" extraClasses="subAbility" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="emotional-push-su" flavor="You can draw upon the intense power of your own emotions in desperate situations, and your allies can call upon you through your emotional link to protect themselves.">Emotional Push (Su)</Pair>
<Pair title="Usage">1 time/day + 1 per four psychic levels</Pair>
<Pair title="Ability"><p> When you or a subject of your <em>emotional bond</em> must attempt a saving throw, the person attempting the save can gain a bonus equal to your Charisma bonus on the save as an <strong className="hl">immediate action</strong>.</p>
<p>Allies using this ability don't need your permission, since the emotional connection is so direct, though you know when one of the uses has been expended. If the ally's saving throw is successful, you regain 1 point in your phrenic pool.</p>
</Pair>
</Ability>
<Ability id="share-memory-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="share-memory-sp">Share Memory (Sp)</Pair>
<Pair title="At 5th Level">You can use <Link to="/spell/share_memory">share memory</Link> at will, but only with a willing target.</Pair>
</Ability>
<Ability id="team-player-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="team-player-ex">Team Player (Ex)</Pair>
<Pair title="At 5th Level">You gain a bonus <Link to="/main/teamwork_feat">teamwork feat</Link>.</Pair>
<Pair title="At 13th Level">You gain another bonus teamwork feat.</Pair>
</Ability>
<Ability id="shared-skill-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="shared-skill-ex">Shared Skill (Ex)</Pair>
<Pair title="At 13th Level">Each time you set up an <em>emotional bond,</em> you can choose one Intelligence- or Charisma-based skill from the list of psychic's class skills. Any subject of your bond can use your bonus instead of his own when attempting checks with that skill as long as the bond lasts.</Pair>
<Pair title="Special"><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/craft">Craft</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/fly">Fly</Link>, <Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/knowledge_all">Knowledge (all)</Link>, <Link to="/skill/linguistics">Linguistics</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession">Profession</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, and <Link to="/skill/spellcraft">Spellcraft</Link> are class skills, unless modified by an archetype.</Pair>
</Ability>
</>};
const _rebirth = {title: "Rebirth", jsx: <><h2 id="discipline-rebirth-rebirth">Rebirth</h2>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 17</Link><br/>Your mind is forged from the most powerful memories of a multitude of lifetimes. You have fragmentary knowledge of your prior lives and can leverage the experience gained during these lifetimes into raw psychic power.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Charisma</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/burst_of_insight">Burst of insight</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/false_life">False life</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/contact_other_plane">Contact other plane</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/ancestral_memory">Ancestral memory</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/reincarnate">Reincarnate</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/transformation">Transformation</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/ethereal_jaunt">Ethereal jaunt</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/bilocation">Bilocation</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/akashic_form">Akashic form</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Your myriad lives inspire diverse exceptional abilities.</Pair>
</Ability>
<Ability id="past-life-memories-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="past-life-memories-ex">Past-Life Memories (Ex)</Pair>
<Pair title="Ability">You add a bonus equal to half your psychic level (minimum 1) to all <Link to="/skill/knowledge">Knowledge</Link> checks and can attempt all Knowledge skill checks untrained.</Pair>
</Ability>
<Ability id="mnemonic-esoterica-ex" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="mnemonic-esoterica-ex" flavor="By reaching into the recesses of your past lives, you gain knowledge beyond that of most psychics.">Mnemonic Esoterica (Ex)</Pair>
<Pair title="Choice">Select a single additional spellcasting class.</Pair>
<Pair title="Ability">Once per day when you prepare your spells, you can add one spell from the chosen class's spell list to your spells known and class spell list for 24 hours. This spell must be 1 level lower than the highest-level spell you can cast, and you cast it as if it were psychic magic.</Pair>
<Pair title="Special">You can decide to change the spellcasting class from which you draw this spell each time you gain a new level.</Pair>
</Ability>
<Ability id="resurgence-su" extraClasses="subAbility" icon={["armor-upgrade","remedy"]}>
<Pair single id="resurgence-su">Resurgence (Su)</Pair>
<Pair title="At 5th Level">When you would be reduced to 0 hit points or fewer by an attack, you can spend 2 points from your phrenic pool as an <strong className="hl">immediate action</strong> to regain a number of hit points equal to 1d8 points of damage + your psychic level.</Pair>
<Pair title="At 10th Level">This ability's healing increases to 3d8 + your psychic level.</Pair>
<Pair title="Special">If this healing is insufficient to bring you above negative hit points, you are automatically <Link to="/misc/stabilize">stabilized</Link>. If you would still be killed by the amount of damage taken, you erupt with positive energy and heal all allies within 30-foot-radius <Link to="/misc/burst">burst</Link> for the amount you healed yourself.</Pair>
</Ability>
<Ability id="physical-regression-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="physical-regression-sp">Physical Regression (Sp)</Pair>
<Pair title="At 13th Level">You can spend 2 points from your phrenic pool as a <strong className="hl">standard action</strong> once per day to take on the form of one of your previous incarnations. This ability functions as the <Link to="/spell/polymorph">polymorph</Link> spell, but its range is personal and its duration becomes 10 minutes per caster level.</Pair>
</Ability>
</>};
const _rivethun = {title: "Rivethun", jsx: <><h2 id="discipline-rivethun-rivethun"><Link to="/rule/rivethun">Rivethun</Link></h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 168</Link><br/>You have embraced those aspects of your body that cause you agony, respecting the perspective they grant you if not necessarily the roles they've condemned you to in life.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Charisma</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/heightened_awareness">Heightened awareness</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/bears_endurance">Bear's endurance</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/aura_sight">Aura sight</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/persistent_vigor">Persistent vigor</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/true_seeing">True seeing</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/thought_shield_v">Thought shield V</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/mind_blank">Mind blank</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/iron_body">Iron body</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/akashic_form">Akashic form</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Your powers relate to your discipline and mastery of mind over matter.</Pair>
</Ability>
<Ability id="agitating-cognizance-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="agitating-cognizance-su">Agitating Cognizance (Su)</Pair>
<Pair title="Passive Ability">Whenever you are not maintaining an altered form via <em>metamorphosis</em> (including the 24 hours normally required to assume a new form), your maximum number of points in your phrenic pool increases by 1.</Pair>
</Ability>
<Ability id="metamorphosis-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="metamorphosis-su">Metamorphosis (Su)</Pair>
<Pair title="Ability"><p>By meditating for 1 hour, you can trigger a slow, physical metamorphosis that takes 24 hours to complete (during which you do not gain the benefits of this new form). This ability cannot change your type or subtype, grant new abilities or natural weapons, or change your size category, but otherwise allows you to transform your appearance into anything possible for creatures of your type and subtype.</p>
<p>You gain an enhancement bonus to one physical ability score of your choice (Strength, Dexterity, or Constitution) while in this altered form. This bonus is equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of your psychic level. Your shape and ability score bonus persist until you assume a new form or your current altered form ends.</p>
<p>When meditating to begin your <em>metamorphosis,</em> you can spend 1 point from your phrenic pool either to change your size category to Small or Medium, or to gain a new ability from those provided by the <Link to="/spell/alter_self">alter self</Link> spell. If you do so, your altered form lasts only 1 hour per level.</p>
</Pair>
</Ability>
<Ability id="spirit-channeling-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="spirit-channeling-su" flavor="As your self-awareness expands, you become increasingly attuned to the spirit world around you.">Spirit Channeling (Su)</Pair>
<Pair title="At 5th Level">As part of your meditation to initiate <em>metamorphosis,</em> you can invite a <Link to="/ability/shaman_spirits">wandering spirit</Link> to share your body as if you were a <Link to="/class/shaman">shaman</Link>. You gain the associated 1st-level <em>spirit ability</em> as long as you maintain your altered form, but your <em>metamorphosis</em> form also exhibits some aspect of the spirit you host, such as vivid red hair for a <Link to="/shamanspirit/flame">flame</Link> spirit or gauntness for a <Link to="/shamanspirit/bones">bones</Link> spirit.</Pair>
</Ability>
<Ability id="greater-spirit-channeling-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="greater-spirit-channeling-su">Greater Spirit Channeling (Su)</Pair>
<Pair title="At 13th Level">When you open your body to a wandering spirit, you also gain that wandering spirit's <em>greater spirit ability</em> as long as you are in a metamorphosed form.</Pair>
</Ability>
</>};
const _self_perfection = {title: "Self-Perfection", jsx: <><h2 id="discipline-self_perfection-self-perfection">Self-Perfection</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 68</Link><br/>You take a holistic view of psychic power, believing that you must hone both your mental and physical attributes to remain in balance. The focus you find while exercising, fasting, and otherwise tending to your body broadens your psychic powers.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Wisdom</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/expeditious_retreat">Expeditious retreat</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/bears_endurance">Bear's endurance</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/haste">Haste</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/freedom_of_movement">Freedom of movement</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/echolocation">Echolocation</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/transformation">Transformation</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/ethereal_jaunt">Ethereal jaunt</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/iron_body">Iron body</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/akashic_form">Akashic form</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Your powers alter your body through your force of will.</Pair>
</Ability>
<Ability id="ac-bonus-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="ac-bonus-ex">AC Bonus (Ex)</Pair>
<Pair title="Passive Ability">When unarmored and unencumbered, you add your Wisdom bonus (if any) to your AC and CMD. The bonus to AC applies even against touch attacks or when you're <Link to="/rule/flat_footed">flat-footed</Link>. You lose these bonuses when you're immobilized or <Link to="/misc/helpless">helpless</Link>, when you wear any armor, when you carry a shield, or when you carry a medium or heavy load.</Pair>
</Ability>
<Ability id="physical-push-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="physical-push-su" flavor="By channeling your psychic energy, you can make your body capable of greater physical feats.">Physical Push (Su)</Pair>
<Pair title="Usage">Wisdom modifier times/day</Pair>
<Pair title="Ability">When you attempt a Strength-, Dexterity-, or Constitution-based ability check or skill check, you can gain a bonus on the check equal to your Wisdom bonus.</Pair>
<Pair title="Special">Using this ability is part of the action used to attempt the skill check (if any). If you succeed at the check, you regain 1 point in your phrenic pool.</Pair>
</Ability>
<Ability id="bodily-purge-su" extraClasses="subAbility" icon={["remedy"]}>
<Pair single id="bodily-purge-su" flavor="You can heal your own wounds and maladies with the power of thought alone.">Bodily Purge (Su)</Pair>
<Pair title="At 5th Level">You gain access to a daily pool of healing energy. This pool starts with 3d8 dice per day. As a <strong className="hl">standard action</strong>, you can use up any number of these dice to regain a number of hit points equal to the result of rolling that many d8s. For example, at 5th level you could regain 3d8 hit points all at once, 1d8 hit points three separate times, or 1d8 hit points once and 2d8 hit points at a different time. In addition, you can expend 2 dice from this pool to instead gain the benefit of <Link to="/spell/lesser_restoration">lesser restoration</Link> (affecting yourself only).</Pair>
<Pair title="At 7th Level">You can expend 3 dice from this pool to instead gain the benefit of <Link to="/spell/neutralize_poison">neutralize poison</Link>, <Link to="/spell/remove_disease">remove disease</Link>, or <Link to="/spell/restoration">restoration</Link> (affecting yourself only). To use <em>restoration</em> to dispel a permanent <Link to="/rule/negative_level">negative level</Link>, you must expend 4 dice from this pool instead of 3.</Pair>
<Pair title="At 7th Level">Your healing pool becomes 4d8.</Pair>
<Pair title="At 9th Level">Your healing pool increases to 5d8.</Pair>
<Pair title="At 11th Level">Your healing pool becomes 6d8.</Pair>
<Pair title="At 13th Level">Your healing pool increases to 7d8.</Pair>
<Pair title="At 15th Level">Your healing pool becomes 8d8.</Pair>
<Pair title="At 17th Level">Your healing pool increases to 9d8.</Pair>
<Pair title="At 19th Level">Your healing pool becomes 10d8.</Pair>
<Pair title="Special">Use your psychic level as your caster level for these effects.</Pair>
</Ability>
<Ability id="pure-body-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="pure-body-ex">Pure Body (Ex)</Pair>
<Pair title="At 13th Level">You gain immunity to diseases and poisons.</Pair>
</Ability>
</>};
const _shadow = {title: "Shadow", jsx: <><h2 id="discipline-shadow-shadow">Shadow</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 17</Link><br/>You perceive the space between light and darkness, and draw power from it. Shadows conceal and protect you, while revealing the locations of those who dare to hide within them. Over time, you develop the ability to deny the warmth of light or life to your enemies.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Wisdom</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/blurred_movement">Blurred movement</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/fear_the_sun">Fear the sun</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/deeper_darkness">Deeper darkness</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/shadow_step">Shadow step</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/shadow_evocation">Shadow evocation</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/shadow_walk">Shadow walk</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/lunar_veil">Lunar veil</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/umbral_strike">Umbral strike</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/polar_midnight">Polar midnight</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Your powers give you authority over light and shadow.</Pair>
</Ability>
<Ability id="twilight-influence-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="twilight-influence-su">Twilight Influence (Su)</Pair>
<Pair title="Ability"><p>You can channel spell energy into spells drawn from the <Link to="/domain/darkness">Darkness</Link> cleric domain. This ability functions similarly to the <Link to="/class/cleric">cleric's</Link> ability to spontaneously cast <em>cure</em> or <em>inflict</em> spells, but you instead spontaneously cast Darkness domain spells. The domain spells don't count as being on your psychic spell list for the purposes of any other effects (unless they are independently on your psychic spell list, such as <Link to="/spell/blindness_deafness">blindness/deafness</Link>). Each day, you can convert up to one spell from each spell level you can cast.</p>
<p>Each time you use this ability to convert a spell, you regain 1 point in your phrenic pool. The maximum number of points you can regain in this way per day is equal to your Wisdom modifier.</p>
</Pair>
</Ability>
<Ability id="dark-defense-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="dark-defense-su" flavor="Light and darkness become your allies, moving around you to protect you from your enemies.">Dark Defense (Su)</Pair>
<Pair title="At 5th Level">You gain a +2 deflection bonus to Armor Class against any attack while you benefit from <Link to="/rule/concealment">concealment</Link> against that attack. If you have full concealment from that attack, this deflection bonus increases to +4.</Pair>
</Ability>
<Ability id="adumbration-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="adumbration-su" flavor="Shadows move to conceal you.">Adumbration (Su)</Pair>
<Pair title="At 13th Level">You gain a bonus on <Link to="/skill/stealth">Stealth</Link> checks equal to half your level. In addition, you can use the Stealth skill even while being observed and without <Link to="/rule/cover">cover</Link> or concealment, as long as you are within 10 feet of a shadow other than your own. You gain no benefit from adumbration in areas of <Link to="/rule/bright_light">bright light</Link>.</Pair>
</Ability>
</>};
const _sorrow = {title: "Sorrow", jsx: <><h2 id="discipline-sorrow-sorrow">Sorrow</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 22</Link><br/>You draw strength from deep feelings of abandonment, loneliness, and sadness, turning these emotions into a powerful weapon or a barrier that protects you.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Charisma</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/sanctuary">Sanctuary</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/silence">Silence</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/nondetection">Nondetection</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/crushing_despair">Crushing despair</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/mind_fog">Mind fog</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/eyebite">Eyebite</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/sequester">Sequester</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/maze">Maze</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/imprisonment">Imprisonment</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Through your powers, you can use overwhelming sorrow to protect yourself and weaken others.</Pair>
</Ability>
<Ability id="numb-to-the-pain-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="numb-to-the-pain-ex">Numb to the Pain (Ex)</Pair>
<Pair title="Passive Ability">You gain a morale bonus equal to your Charisma bonus on saving throws against mind-affecting spells and effects. This bonus cannot exceed your psychic level.</Pair>
</Ability>
<Ability id="despair-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="despair-su">Despair (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Immediate Action">When a creature within 30 feet rolls for an attack, a save against a fear effect, or a skill check, you can flood its mind with a feeling of hopelessness before the roll is made. The target takes a penalty on the roll equal to 1 + <Link to="/misc/one_sixth">one-sixth</Link> of your psychic level. If the target fails its attack roll, save, or skill check, you regain 1 point in your phrenic pool.</Pair>
<Pair title="Special">This is a mind-affecting emotion effect.</Pair>
</Ability>
<Ability id="wave-of-gloom-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="wave-of-gloom-su">Wave of Gloom (Su)</Pair>
<Pair title="At 5th Level">By expending 1 use of your <em>despair</em> ability as a <strong className="hl">standard action</strong>, you can project a strong feeling of dejection. All creatures within 30 feet of you must succeed at a Will save or take a penalty on attack rolls, saves against fear effects, and skill checks for 1d4 minutes. The penalty is equal to (but doesn't stack with) the penalty provided by your <em>despair</em> ability. The DC of the saving throw equals 10 + half your psychic level + your Charisma modifier.</Pair>
<Pair title="Special">You're immune to your own <em>wave of gloom.</em> This is a mind-affecting emotion effect.</Pair>
</Ability>
<Ability id="fortress-of-sorrow-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="fortress-of-sorrow-sp">Fortress of Sorrow (Sp)</Pair>
<Pair title="At 13th Level">You can mentally construct an extraplanar retreat on the <Link to="/rule/astral_plane">Astral Plane</Link>. This ability functions as <Link to="/spell/lesser_create_demiplane">lesser create demiplane</Link> with a caster level equal to your psychic level, with the following adjustments: you need no focus to create the <em>fortress of sorrow;</em> the demiplane is permanent until dismissed by you; you cannot create more than one demiplane with this ability or add to the plane's area by casting the spell again; the light level on the demiplane is dim, though light sources affect it normally; and you cannot bring other creatures to your demiplane.</Pair>
<Pair title="Usage">Once per day, you can enter your demiplane (as <Link to="/spell/plane_shift">plane shift</Link>), and once per day, you can return in a similar manner, arriving at the same spot you left from (or the nearest available space).</Pair>
</Ability>
</>};
const _superiority = {title: "Superiority", jsx: <><h2 id="discipline-superiority-superiority">Superiority</h2>
<p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 19</Link><br/>You know that you are far better than average creatures of your kind. The more you leverage your psychic talents to prove yourself superior, the more powerful you become.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Charisma</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/moment_of_greatness">Moment of greatness</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/deflect_blame">Deflect blame</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/unflappable_mien">Unflappable mien</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/majestic_image">Majestic image</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/mages_private_sanctum">Mage's private sanctum</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/transformation">Transformation</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/project_image">Project image</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/clone">Clone</Link> (self only)</Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/overwhelming_presence">Overwhelming presence</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Your unflappable sense of self-worth grants you powers that your rivals can't hope to countermand.</Pair>
</Ability>
<Ability id="self-assurance-su" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="self-assurance-su" flavor="Overwhelming confidence in your success brings you closer to your goals, and you know that your superiority has destined you for greatness.">Self-Assurance (Su)</Pair>
<Pair title="Usage">Charisma modifier times/day</Pair>
<Pair title="Immediate Action">You can gain a morale bonus equal to half your psychic level (minimum 1) on a single ability check, attack roll, saving throw, or skill check. You must declare that you are using this ability before attempting the roll in question. If you succeed at the check, you regain 1 point in your phrenic pool.</Pair>
</Ability>
<Ability id="at-arms-length-ex" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="at-arms-length-ex">At Arm's Length (Ex)</Pair>
<Pair title="At 5th Level">You gain <Link to="/feat/reach_spell">Reach Spell</Link> as a bonus feat. Additionally, when using this feat, you can spend 1 point from your phrenic pool for each increase in the spell's range category. If you do, the spell does not use up a higher-level spell slot than normal. (For example, a spell with a range of touch increased to long range via this feat would normally use up a spell slot 3 levels higher, but if you spend 3 points from your phrenic pool, the spell does not use up a higher spell slot.)</Pair>
</Ability>
<Ability id="magical-hoarder-su" extraClasses="subAbility" icon={["remedy"]}>
<Pair single id="magical-hoarder-su">Magical Hoarder (Su)</Pair>
<Pair title="At 13th Level"><p>Whenever a creature within 30 feet of you casts a spell intended to benefit its targets, you can spend 1 point from your phrenic pool as an <strong className="hl">immediate action</strong> to include yourself as a target of that spell. If the creature is not your ally, you must be able to clearly see the spell's effects and you must succeed at a <Link to="/skill/spellcraft">Spellcraft</Link> check (DC = 15 + the spell's level) to identify the spell before using this ability.</p>
<p>If you are not within the normal range of the spell, then you must spend 1 additional point from your phrenic pool to use this ability. If the spell has a range of personal, then you must instead spend 2 additional phrenic points from your pool to use this ability. This ability does not affect spells with an instantaneous or permanent duration.</p>
</Pair>
</Ability>
</>};
const _symbiosis = {title: "Symbiosis", jsx: <><h2 id="discipline-symbiosis-symbiosis">Symbiosis</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 93</Link><br/>Like pollen on the wind or the roots of plants in the ground, your thoughts permeate your surroundings, allowing you to study and manipulate the world around you.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Charisma</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/hide_from_animals">Hide from animals</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/hold_animal">Hold animal</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/dominate_animal">Dominate animal</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/command_plants">Command plants</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/awaken">Awaken</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/liveoak">Liveoak</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/greater_scrying">Greater scrying</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/control_plants">Control plants</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/dominate_monster">Dominate monster</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Your powers allow you to connect with and manipulate natural life.</Pair>
</Ability>
<Ability id="animal-mastery-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="animal-mastery-su">Animal Mastery (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action"><p>You can project your mind into the mind of an animal you can see, establishing a mental link that allows you to share the animal's senses - hearing, seeing, smelling, tasting, and touching everything the animal does. You cannot use this ability on an animal if its Hit Dice exceed your psychic level. The animal can attempt a Will save to resist the effect. If it is successful, the animal is immune to this ability for 24 hours.</p>
<p>While sharing an animal's senses, your body is effectively <Link to="/misc/unconscious">unconscious</Link>, but you can end the effect as a <strong className="hl">free action</strong>. You can maintain the link for 1 hour per level, but the link is immediately severed if the animal moves beyond a range of 1 mile per psychic level you have.</p>
</Pair>
<Pair title="At 7th Level">The mental link becomes stronger. Whenever you share an animal's senses, you can control it, as per <em>dominate animal,</em> except the duration, Hit Dice limit, range, and other conditions listed above apply.</Pair>
</Ability>
<Ability id="one-with-nature-sp-su" extraClasses="subAbility" icon={["magic-swirl","upgrade"]}>
<Pair single id="one-with-nature-sp-su">One with Nature (Sp, Su)</Pair>
<Pair title="Ability">You can cast <Link to="/spell/detect_animals_or_plants">detect animals or plants</Link> as a spell-like ability at will. You gain a +2 insight bonus on Knowledge (nature) checks, and while using <em>detect animals or plants,</em> the bonus increases to +4 to identify a matching animal or plant creature within the area of effect.</Pair>
<Pair title="At 7th Level">You can speak with any animal you successfully identify, as per <Link to="/spell/speak_with_animals">speak with animals</Link>, but this ability doesn't make the creature any friendlier than normal.</Pair>
</Ability>
<Ability id="bionetwork-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="bionetwork-su" flavor="Your mental influence over nature increases.">Bionetwork (Su)</Pair>
<Pair title="At 5th Level"><p>You can spend 10 minutes to mentally connect with living fungi, leaves, moss, roots, and similar plants or plant-like things. You form a temporary network that functions as an extension of your senses. The network allows you to use one of the following two effects: you can remotely view any familiar or obvious location within a range of 250 feet per psychic level, as per <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link>; or you can attempt to locate a creature within the area, as per <Link to="/spell/scrying">scrying</Link>. You don't need a focus to use this effect, and you can't cast spells through the sensor.</p>
<p>This ability doesn't function in areas of sparse vegetation, such as arid deserts, barren caverns, or frozen tundras. Buildings and urban areas are generally excluded from your network, but ruins reclaimed by nature are connected. While you're underground, roots and fungi function as your network, but the radius of the network is only 100 feet per psychic level.</p>
</Pair>
<Pair title="Usage">1 time/day + 1 per four psychic levels beyond 5th</Pair>
</Ability>
<Ability id="animate-trees-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="animate-trees-su">Animate Trees (Su)</Pair>
<Pair title="At 13th Level">You can animate a tree within 180 feet as a <strong className="hl">standard action</strong>. This functions as a <Link to="/monster/treant">treant's</Link> <em>animate trees</em> ability, with the following exceptions. Each day, you can animate a number of trees equal to 3 + your Charisma modifier, and you can control up to one tree at a time. A tree remains animated for 10 minutes per level, or until dismissed by you or destroyed.</Pair>
<Pair title="At 15th Level">The amount of trees you can control becomes 2.</Pair>
<Pair title="At 17th Level">The amount of trees you can control increases to 3.</Pair>
<Pair title="At 19th Level">The amount of trees you can control becomes 4.</Pair>
</Ability>
</>};
const _tranquility = {title: "Tranquility", jsx: <><h2 id="discipline-tranquility-tranquility">Tranquility</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 69</Link><br/>Psychic magic flows through you when you attain a peaceful mental state. Regular meditation expands your mind, allowing new powers to develop.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Wisdom</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/telempathic_projection">Telempathic projection</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/silence">Silence</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/mantle_of_calm">Mantle of calm</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/mass_daze">Mass daze</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/serenity">Serenity</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/psychic_surgery">Psychic surgery</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/mind_blank">Mind blank</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/euphoric_tranquility">Euphoric tranquility</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/time_stop">Time stop</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Your stable mind protects you and your allies.</Pair>
</Ability>
<Ability id="mental-placidity-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="mental-placidity-su">Mental Placidity (Su)</Pair>
<Pair title="Usage">Wisdom modifier times/day</Pair>
<Pair title="Immediate Action">You can gain a +2 bonus on a Will saving throw you are about to attempt. This bonus increases to +4 against an enchantment spell or effect. Any ally who attempts a saving throw against the same effect gains a +1 bonus on the Will save, or a +2 bonus if the effect is an enchantment. If you succeed at the saving throw, you regain 1 point in your phrenic pool.</Pair>
</Ability>
<Ability id="calming-presence-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="calming-presence-su" flavor="You become a calming force.">Calming Presence (Su)</Pair>
<Pair title="At 5th Level">You can use <Link to="/spell/calm_emotions">calm emotions</Link> as a spell-like ability.</Pair>
<Pair title="Usage">Wisdom modifier times/day</Pair>
</Ability>
<Ability id="purge-disquiet-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="purge-disquiet-su" flavor="You can banish mental distress.">Purge Disquiet (Su)</Pair>
<Pair title="At 13th Level"><p>You become immune to fear spells and effects and to the <Link to="/misc/confused">confused</Link> condition.</p>
<p>As a <strong className="hl">standard action</strong>, you can choose a willing creature that is either within 30 feet or in telepathic contact with you. For 1 round per psychic level you possess, you suppress any fear effect or confused, cowering, frightened, panicked, or shaken condition affecting that creature. You can suppress only one effect at a time with this ability, and choosing a new target ends the suppression for the character you previously chose.</p>
</Pair>
</Ability>
</>};
const _warp = {title: "Warp", jsx: <><h2 id="discipline-warp-warp">Warp</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 24</Link><br/>Ratfolk mythology claims they were appointed by the gods to sniff out the ragged edges of creation. Whether the art of ranatagi descended from this glorious role or formed the source of such myths, this psychic tradition among the ratfolk of Vudra and eastern Casmaron unlocks the psychic potential in trainees, teaching them to sniff out folds and tears in reality. Ancient practitioners of ranatagi even claimed that the art once allowed ratfolk to guide great caravans to the stars.</p>
<Block size="simple">
<Row><Cell>Phrenic Pool Ability</Cell><Cell>Charisma</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>Bonus Spells</p>
</Cell></Row>
<Row><Cell>1st Level</Cell><Cell><Link to="/spell/entropic_shield">Entropic shield</Link></Cell></Row>
<Row><Cell>4th Level</Cell><Cell><Link to="/spell/apport_object">Apport object</Link></Cell></Row>
<Row><Cell>6th Level</Cell><Cell><Link to="/spell/displacement">Displacement</Link></Cell></Row>
<Row><Cell>8th Level</Cell><Cell><Link to="/spell/dimension_door">Dimension door</Link></Cell></Row>
<Row><Cell>10th Level</Cell><Cell><Link to="/spell/dismissal">Dismissal</Link></Cell></Row>
<Row><Cell>12th Level</Cell><Cell><Link to="/spell/ethereal_jaunt">Ethereal jaunt</Link></Cell></Row>
<Row><Cell>14th Level</Cell><Cell><Link to="/spell/greater_teleport">Greater teleport</Link></Cell></Row>
<Row><Cell>16th Level</Cell><Cell><Link to="/spell/dimensional_lock">Dimensional lock</Link></Cell></Row>
<Row><Cell>18th Level</Cell><Cell><Link to="/spell/interplanetary_teleport">Interplanetary teleport</Link></Cell></Row></Block>
<Ability id="discipline-powers" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="discipline-powers">Discipline Powers</Pair>
<Pair title="Description">Your powers allow you to sidestep obstacles, defend yourself, and assault others by tearing holes in reality.</Pair>
</Ability>
<Ability id="planar-scent-su" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="planar-scent-su">Planar Scent (Su)</Pair>
<Pair title="Passive Ability">You can intuitively sense disruptions in the cosmos. This ability functions as a constant <Link to="/spell/detect_magic">detect magic</Link>, but only for effects of the conjuration (calling), conjuration (summoning), conjuration (teleport), and illusion (shadow) subschools. You gain a +2 insight bonus on <Link to="/skill/spellcraft">Spellcraft</Link> checks to identify such effects.</Pair>
</Ability>
<Ability id="rift-reach-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="rift-reach-su">Rift Reach (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Move-Equivalent Action"><p>You can tear open a small rent in reality just large enough to reach an arm through. The far end of this portal must be within 10 feet of you, but otherwise allows you to manipulate objects, perform melee attacks requiring a single hand, or even cast spells. If you cannot see your target, standard <Link to="/rule/concealment">concealment</Link> penalties apply. You cannot move either end of the portal once it's created, and the opening collapses immediately when you leave your current space or withdraw your arm, but it otherwise lasts for 1 round per psychic level.</p>
<p>Your disembodied hand uses your AC with a +4 size bonus, should opponents target it. This size bonus does not apply to <Link to="/rule/disarm">disarm</Link> combat maneuver checks.</p>
</Pair>
<Pair title="At 11th Level">The range of your <em>rift reach</em> increases to 20 feet.</Pair>
<Pair title="At 15th Level">Your range increases to 30 feet.</Pair>
</Ability>
<Ability id="turn-aside-su" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="turn-aside-su" flavor="You can compress or inflate enough space around you to turn aside ranged attacks.">Turn Aside (Su)</Pair>
<Pair title="At 5th Level">You gain <Link to="/feat/deflect_arrows">Deflect Arrows</Link> as a bonus feat. You can expend 1 point from your phrenic pool as an <strong className="hl">immediate action</strong> to gain a +4 deflection bonus against a single ranged attack.</Pair>
</Ability>
<Ability id="sidestep-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="sidestep-su" flavor="You can push your way through holes in reality, crossing vast distances in a single stride.">Sidestep (Su)</Pair>
<Pair title="At 13th Level">You can teleport up to 10 feet per psychic level per day as a <strong className="hl">move action</strong>. This teleportation must be used in 5-foot increments and such movement does not provoke attacks of opportunity. You must have line of sight to your destination to use this ability. You can bring other willing creatures with you, but you must expend an equal amount of distance for each creature transported.</Pair>
</Ability>
</>};
export default {not_found:_not_found,abomination:_abomination,bleaching:_bleaching,dream:_dream,enlightenment:_enlightenment,faith:_faith,ferocity:_ferocity,hag_called:_hag_called,haunted:_haunted,lore:_lore,mindtech:_mindtech,pageantry:_pageantry,pain:_pain,psychedelia:_psychedelia,rapport:_rapport,rebirth:_rebirth,rivethun:_rivethun,self_perfection:_self_perfection,shadow:_shadow,sorrow:_sorrow,superiority:_superiority,symbiosis:_symbiosis,tranquility:_tranquility,warp:_warp}