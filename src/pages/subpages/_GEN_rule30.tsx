import {IonRippleEffect} from '@ionic/react';
import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _occult_rules = {title: "Occult Rules", parent_topics: ["gm_specific_campaigns"], siblings: ["aquatic_adventures_aa","caravans","horror_rules","intrigue_systems","kingdoms_and_war","militias","mythic_rules","occult_rules","planar_adventures","the_first_world","seafaring_and_piracy_rules","technological_equipment"], subtopics: ["occult_skill_unlocks","auras","chakras","psychic_duels","possession","occult_rituals","esoteric_traditions","running_an_occult_game"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 194</Link></p>
<p>One of the most fundamental elements of an occult game is the idea that those versed in the supernatural can use strange, hidden powers that are inaccessible to others. This section contains a variety of occult powers and abilities for characters to use in your game.</p>
<p><strong className="hl">Occult Skill Unlocks:</strong> Characters with psychic magic or the <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> feat can unlock unusual uses of skills in which they're trained. With new uses ranging from the ability to read psychic impressions from an object using Appraise to the power to dowse for water and more using Survival, skills will never seem mundane again.</p>
<p><strong className="hl">Auras:</strong> This section expands auras to include not just magic and alignment auras but also health and emotion auras. A master aura reader can tell what conditions afflict a creature, as well as the state of that creature's emotions.</p>
<p><strong className="hl">Chakras:</strong> Ki users with psychic abilities can use kundalini serpent-fire energy to unlock their chakras for strange and powerful effects, starting with the humble root chakra and moving up to the mighty crown chakra.</p>
<p><strong className="hl">Psychic Duels:</strong> Practitioners of the occult can pit their minds against each other in a terrifying psychic duel. Such psychic combatants enter a mindscape where they can create whatever they can imagine to form attacks, defenses, and even manifested allies called thought-form creatures.</p>
<p><strong className="hl">Possession:</strong> This section explains rules for possession magic, both new and old, including corner cases like what happens when you try to possess someone who's already possessed.</p>
<p><strong className="hl">Occult Rituals:</strong> Occult rituals are rare and powerful rites that anyone who knows the right secrets can perform. Rituals are long and difficult to perform, and they always come at a price.</p>
</>};
const _occult_skill_unlocks = {title: "Occult Skill Unlocks", parent_topics: ["gm_specific_campaigns","occult_rules"], siblings: ["occult_skill_unlocks","auras","chakras","psychic_duels","possession","occult_rituals","esoteric_traditions","running_an_occult_game"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 194</Link></p>
<p>Characters capable of casting psychic spells or who have the <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> feat gain access to skill unlocks - a host of esoteric skill uses not available to other PCs. These are not entirely new skills, but rather new uses of existing skills for those trained in the occult arts. A character must be trained in the appropriate skill to use that skill's unlock, even if the skill can normally be used untrained. It's impossible to take 10 for an occult skill unlock. Occult skill unlocks require intense concentration and strenuous effort, so the amount a character can use each skill unlock is limited to once per day or per week. This limit is for all uses of the skill unlock; if a character uses hypnotism to implant a suggestion, he can't also use it to recall memories on the same day.</p>
<p>Skill descriptions contain sections on their occult unlocks, where applicable. Some new types of gear grant bonuses on specific occult skill unlocks.</p>
<ul>
<li><Link to="/skill/automatic_writing">Automatic Writing</Link> (Linguistics)</li>
<li><Link to="/skill/dowsing">Dowsing</Link> (Survival)</li>
<li><Link to="/skill/faith_healing">Faith Healing</Link> (Heal)</li>
<li><Link to="/skill/hypnotism">Hypnotism</Link> (Diplomacy)</li>
<li><Link to="/skill/phrenology">Phrenology</Link> (Knowledge [Arcana])</li>
<li><Link to="/skill/prognostication">Prognostication</Link> (Sense Motive)</li>
<li><Link to="/skill/psychometry">Psychometry</Link> (Appraise)</li>
<li><Link to="/skill/read_aura">Read Aura</Link> (Perception)</li>
</ul>
</>};
const _auras = {title: "Auras", parent_topics: ["gm_specific_campaigns","occult_rules"], siblings: ["occult_skill_unlocks","auras","chakras","psychic_duels","possession","occult_rituals","esoteric_traditions","running_an_occult_game"], subtopics: ["alignment_aura","emotion_aura","health_aura","magic_aura"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 198</Link></p>
<p>All living creatures are imbued with a spark of the cosmic fire that burns at the heart of the multiverse. This vital principle grants beings animate force, carrying directions from their greater intellects to their gross physical forms. With practice, an initiate in the occult arts can manipulate this force to create fantastic manifestations of psychic phenomena. Different traditions have different names for this vital force - prana, odic force, orgone energy - but it is most commonly known as ki, the source of inner power that grants the monk his incredible powers.</p>
<p>Practiced initiates can learn to pierce the veil between the Material Plane and the Ethereal Plane to gaze upon the interplay of ki within a creature's body. The energy concentrates in seven swirling circular pools positioned throughout the body, known as chakras. From there it flows through the creature's form, and even emanates 2-3 feet out, creating an ovoid nimbus around the creature - its aura.</p>
<p>The energy of the aura permeates the body and spirit of a living creature, influencing its health and vitality while in turn being influenced by the creature's disposition, conception of self, and general emotional state. A creature's aura thus comprises many different auras intermixed with one another to form a singular whole. Emanations of the creature's ki form its health aura. Radiations of thought and belief issuing from the creature's soul suffuse the health aura with patterns that can be interpreted as its alignment aura. The flashes of color flowing through the whole reveal the creature's attitude and disposition, and are known as its emotion aura. Finally, an aura might contain emanations of a magical origin, which is usually a consequence of outside forces at work on the creature.</p>
<p>Various spells can detect aspects of a creature's or object's aura. The <Link to="/spell/analyze_aura">analyze aura</Link> spell and the <Link to="/skill/read_aura">read aura occult skill unlock</Link> are the most comprehensive ways to assess a creature's entire aura.</p>
</>};
const _alignment_aura = {title: "Alignment Aura", parent_topics: ["gm_specific_campaigns","occult_rules","auras"], siblings: ["alignment_aura","emotion_aura","health_aura","magic_aura"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 198</Link></p>
<p>A creature's alignment aura reflects the true nature of its beliefs and inner soul. This aura resembles a churning mist that suffuses the health aura. Close observation of the strange currents in this mist can identify the creature's alignment. Objects or locations infused with powerful magic attuned to a particular alignment (such as the blood-splattered altar at which a debased cult holds its unspeakable rituals or a gilded cup holding the tears of a long-dead saint) sometimes also have alignment auras.</p>
<p>The strength of an alignment aura is based on the creature's Hit Dice or the magic item's caster level, as referenced in certain <em>detect</em> spells.</p>
</>};
const _emotion_aura = {title: "Emotion Aura", parent_topics: ["gm_specific_campaigns","occult_rules","auras"], siblings: ["alignment_aura","emotion_aura","health_aura","magic_aura"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 198</Link></p>
<p>A creature's emotion aura reveals its current disposition and attitudes. These factors color the emanations of the aura with a coruscation of hues known as the emotional spectrum. Any combination of colors from the list below can define a creature's emotional state. Typically, methods of perceiving the emotion aura reveal the emotions themselves, as well as the associated colors. The secrets of the emotional spectrum are laid bare to the initiate, and should not remain mysterious to the player.</p>
<p>Since emotion auras are a function of the health aura, they are not often associated with objects or undead creatures, which are not technically alive. Intelligent magic items sometimes have an emotion aura, while undead - particularly those on the Ethereal Plane barred from the afterlife because of emotional distress or unfinished business - may bear a tattered remnant of their auratic energy clinging to their haunted forms, even though the life energy that created them ceased long ago.</p>
<h3 id="rule-emotion_aura-the-emotional-spectrum">The Emotional Spectrum</h3>
<p>A character trained in auratic techniques sees an interplay of colors within a creature's aura. Understanding the colors of this emotional spectrum can reveal a great deal about the observed creature. The colors constantly blend and shift as the creature's thoughts, emotions, and surroundings change. An observation of a creature's aura is a snapshot of its feelings and general character in a given moment, and might not be accurate days or even minutes later.</p>
<p><strong className="hl">Anger (Bright Red):</strong> Bright red flashes, usually on a field of black, denote anger. The more selfish the anger, the more the red is tinged with brown. Righteous indignation, or anger for what the creature considers a just cause, manifests as lightning-shaped flashes of brilliant vermillion.</p>
<p><strong className="hl">Deceit (Oily Green):</strong> An oily green aura denotes deceit and cunning, making spells like <Link to="/spell/analyze_aura">analyze aura</Link> very useful during interrogations.</p>
<p><strong className="hl">Faith (Blue):</strong> A blue aura signifies religious thought, emotion, and feeling. The hue varies based on the nature of the sentiment, its basis in tolerance or prejudice, and its degree of self-interest. The lighter the tone, the more altruistic and beneficent the feeling. Deep, dark violet denotes religious belief twisted toward selfish or malevolent ends.</p>
<p><strong className="hl">Fear (Livid Gray):</strong> The colors of the aura of a creature experiencing fright and terror fade away, leaving a livid gray cloud in their place. Some overwhelmingly evil creatures - particularly undead - exude a fear aura whose tendrils extend out several feet, reaching toward nearby creatures and bringing an oppressive malaise to their surroundings.</p>
<p><strong className="hl">Flexibility (Emerald Green):</strong> A creature possessed of versatility, adaptability, and a willingness to please gives off an emerald green aura. Though green is usually associated with deception, it here represents compromise and low deceit - going along for the greater good despite personal misgivings or other preferences.</p>
<p><strong className="hl">Greed (Brown-Red):</strong> A dull, brown-red aura - nearly the color of rust - suggests avarice and greed, and usually manifests in parallel bars across a creature's body. Greenish-brown tinged with red flashes represents jealousy.</p>
<p><strong className="hl">Hatred (Black):</strong> Thick black clouds within the aura denote hatred and malice. When a person is overcome with passionate anger, dark images twist and turn within the cloudy aura like ghostly snakes swimming through smoke.</p>
<p><strong className="hl">Intellect (Golden):</strong> Gold denotes a person's intellect. When aimed at lower, personal ambitions, the hue tends toward deep, dull shades. The hue assumes a glowing brilliance as the creature mixes spiritual illumination with intelligence.</p>
<p><strong className="hl">Love (Scarlet):</strong> Among the loveliest auratic hues are the crimsons of a creature in love. The associated shades range from the gorgeous rose shade of selfless love for another to the dull, heavy scarlet tinged with the brown of greed for selfish love concerned with how much it receives in kind. A brilliant rose tinged with lilac denotes spiritual love for all creatures.</p>
<p><strong className="hl">Melancholy (Gray Lines):</strong> A gloomy series of dark gray, parallel vertical lines conveys depression or deep melancholy. Like the brown lines of greed, the gray bars of melancholy suggest an emotional prison.</p>
<p><strong className="hl">Passion (Blood Red):</strong> Sanguinary red suggests animal passions and unconscious instinct. As a creature sleeps, its aura tends to be overtaken by this hue as its visceral nature takes over while the mind wanders the <Link to="/rule/dimension_of_dreams">Dimension of Dreams</Link> in the sheath of its lucid body.</p>
<p><strong className="hl">Pride (Orange):</strong> Orange indicates pride and ambition, and ranges in hue as these emotions are flavored by jealous competition (green), fear of falling behind (pale gray), or even self-love (dull crimson).</p>
</>};
const _health_aura = {title: "Health Aura", parent_topics: ["gm_specific_campaigns","occult_rules","auras"], siblings: ["alignment_aura","emotion_aura","health_aura","magic_aura"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 199</Link></p>
<p>A creature's health aura is a direct representation of the vital force flowing within its body. Ki comes from various sources in the outside world and flows into and throughout the nervous system via a series of swirling pools known as chakras. Within the body, vital force has a faint rosy hue that fades outward into a vaporous white cloud. This aura is streaked by lines extending like bristles. When a creature is in normal health, these bristles stand out stiffly; when the creature is ill, they droop like the whiskers of a weary animal.</p>
<p>Interpretation of the vital force's flow between chakras and the fine lines emanating through the greater aura can allow the observer to note whether the creature is unharmed or wounded, if it is poisoned or diseased, and whether it is under any of the following conditions: confused, disabled, dying, nauseated, panicked, staggered, stunned, or unconscious.</p>
</>};
const _magic_aura = {title: "Magic Aura", parent_topics: ["gm_specific_campaigns","occult_rules","auras"], siblings: ["alignment_aura","emotion_aura","health_aura","magic_aura"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 199</Link></p>
<p>Magic auras are usually the result of external forces working on an object, creature, or location. Each magical effect swirls together in the greater aura, but remains discrete. It's possible to target specific effects within the aura to, for example, dispel a single magical effect while leaving the others intact.</p>
<p>Other magic auras are the result of a creature's inherent supernatural abilities, and can have game effects on those who approach too closely. Such auras (such as a dragon's frightful presence) often force creatures to attempt saving throws to resist their effects. For more information on magic auras, see <Link to="/spell/detect_magic">detect magic</Link>.</p>
</>};
const _chakras = {title: "Chakras", parent_topics: ["gm_specific_campaigns","occult_rules"], siblings: ["occult_skill_unlocks","auras","chakras","psychic_duels","possession","occult_rituals","esoteric_traditions","running_an_occult_game"], subtopics: ["activating_chakras"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 200</Link></p>
<p>According to esoteric traditions, the vital force of ki derives from the Positive Energy Plane and flows to initiates via the emanations of the sun. To students of the occult, every star holds a gate to the realm of positive energy, and through these gates flows the force of life itself in the form of ki. Ki collects in seven mystical vortices within the body called chakras. When observing a living creature's etheric double - its manifestation on the Ethereal Plane - its chakras appear as small disks whirling with brilliant, colorful energy. The chakras distribute this energy throughout the creature's physical body, granting it animate force and giving order to its constituent molecules.</p>
<p>Enlightened initiates versed in the mysteries of ki can awaken their chakras to unlock fabulous mystical powers, but doing so means channeling an even more dangerous and esoteric life force than ki - the potent and ancient kundalini, also known as the serpent-fire.</p>
<p>Unlike ki, kundalini flows not from the heavens above but from the ground below. Some mystics claim its colorful name derives from the fact that its mastery was first pioneered by the ancient serpentfolk who ruled the world millennia ago, but another explanation is that kundalini energy flows through the seven chakras in a coiling, ophidian manner. The kundalini flow awakens each chakra in turn. As it progresses from the root chakra at the base of the spine to the crown chakra at the top of the head, the serpent-fire opens new vistas of personal power to the initiate, granting her unique supernatural abilities.</p>
</>};
const _activating_chakras = {title: "Activating Chakras", parent_topics: ["gm_specific_campaigns","occult_rules","chakras"], siblings: ["activating_chakras"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 200</Link></p>
<p>Awakening the chakras requires a basic mastery of ki energy techniques, and is possible only for an initiate with the ki pool class feature or some other means of utilizing ki (such as the <Link to="/ability/rogue_talents">rogue's ki pool rogue talent</Link>). The initiate must also possess the <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> feat or have levels in one of the occult classes.</p>
<p>Awakening chakras or maintaining awakened chakras is a swift action that costs 1 ki point. On the first round, this opens the root chakra. Each round after the first, it opens the next chakra in the sequence, up to the crown chakra on the seventh round. Once the initiate has begun awakening his chakras, each round he must continue opening chakras or maintain his awakened chakras, or all of his chakras close and he must begin again from the root chakra. If he pauses in the progression, he can resume it at any time, provided he has spent 1 ki point per round in the meanwhile to maintain his open chakras. Each round, when expending the ki for that round, the initiate can select the benefit from one chakra awakened up to that point. For example, if after 4 rounds the initiate has awakened three chakras, he can gain the ability of any of those three. To open a chakra, the initiate's character level (or total HD) must equal at least double the chakra's rank. For example, an initiate must be 14th level to open his crown chakra.</p>
<p>Manipulation of the serpent-fire involves considerable risk. Every round in which a character has one or more awakened chakras, he must succeed at Fortitude and Will saving throws, adding his Charisma modifier to each save, to resist the inherent dangers of the kundalini flow as it suffuses his body with spiritual fire. The save DCs are equal to 10 + the sum of the ranks of the awakened chakras. For example, awakening the root, sacral, and navel chakras would result in a DC of 16. Opening all seven chakras at once results in DC 38 saves. The save DC totals are listed after each chakra's rank and title. If the initiate fails the Fortitude save, he takes 1d6 points of damage per awakened chakra. If the initiate fails the Will save, he is overcome with visions related to the emotions and concepts associated with the awakened chakras, causing him to be dazed for 1 round and causing all of his chakras to close.</p>
<p><strong className="hl">1. Root Chakra (DC 11):</strong> The root chakra is associated with instinct, security, survival, and potential for greater development. It energizes the desires of the flesh and distributes ki throughout the blood to circulate heat to the body. Kundalini energy is sometimes depicted as a serpent coiled around the root chakra, ready to ascend on a path from the body's lower, basic urges and instincts to the heights of a disciplined and enlightened mind.</p>
<p>By awakening his root chakra, the initiate opens himself to an inflow of serpent-fire energy. The bloom of occult power strengthens his aura, granting him DR/- equal to the number of chakras opened for 1 round. The initiate must be at least 2nd level before he can open this chakra.</p>
<p><strong className="hl">2. Sacral Chakra (DC 13):</strong> The sacral chakra is closely associated with the generative power of the reproductive cycle, as well as pleasure, addiction, creativity, emotional needs, and relationships. When the sacral chakra is awakened, the adept recalls moments of sensual or creative ecstasy, when consciousness slips from the physical body into astral realms of weightless bliss. When opened, the sacral chakra gleams with sun-like radiance.</p>
<p>By awakening his sacral chakra, the initiate gains a fly speed equal to his base movement for 1 round with average maneuverability. The movement must begin and end on a solid surface. The initiate must be at least 4th level before he can open this chakra.</p>
<p><strong className="hl">3. Navel Chakra (DC 16):</strong> The navel chakra is sometimes called the power chakra, for it is associated with fire, combustion, digestion, anger, joy, fear, anxiety, and laughter. Here the serpent-fire swirls and swells with heat and vital energy, the source of the so-called "fire in the belly" of common parlance.</p>
<p>Upon awakening his navel chakra, the initiate can channel the serpent-fire as a breath attack that deals 2d8 points of damage in a 30-foot cone. This radiant gout of orange-red liquid flame somewhat resembles fire, but bypasses all forms of energy resistance, protection, and immunity. The amount of damage increases by 1d8 for each open chakra beyond the 3rd, to a maximum of 6d8 if all of the chakras are awakened. The initiate must be at least 6th level before he can open this chakra.</p>
<p><strong className="hl">4. Heart Chakra (DC 20):</strong> The heart chakra is the seat of higher feelings and emotions, an inner realm of compassion, tenderness, love, and rejection. When infused with the substance of a creature's aura, the energies of the heart chakra can take on powerful healing capabilities.</p>
<p>Once the heart chakra has been awakened, the initiate can channel his serpent-fire into a torrent of healing energy. He can use this ability on himself or touch any adjacent living creature with this fire to heal an amount of damage equal to 1d8 + double the number of chakras he has awakened. In addition, he can remove one of the following conditions from the creature healed: confused, nauseated, sickened, staggered, or stunned. This fire has no effect on constructs, undead, or other creatures that are not alive. The initiate must be at least 8th level before he can open this chakra.</p>
<p><strong className="hl">5. Throat Chakra (DC 25):</strong> Speech and hearing are nothing more than vibrations, and the throat chakra thrums with the occult vibrations that govern existence. Here the urges and emotions of the lower chakras give way to more refined, cerebral vistas, making the throat chakra the bridge between feeling and thinking.</p>
<p>By awakening the throat chakra, the initiate can tap into the primordial mystical language underlying all things - the raw tongue of the multiverse that gives motion to atoms, keeps planets rotating in infinite space, and orders the coruscations of the stars. When using this chakra, the initiate slips into a kind of trance. He can take actions as normal, but he constantly mutters incoherent, often disturbing utterances of a vastly primal nature. Each round, he can select one enemy within 30 feet. That foe must succeed at a Will save to resist becoming staggered for 1 round. The DC of this save is 10 + 1/2 the initiate's total Hit Dice + his Charisma modifier. This is a sonic mind-affecting effect. The initiate must be at least 10th level before he can open this chakra.</p>
<p><strong className="hl">6. Brow Chakra (DC 31):</strong> Also called the intuitive chakra, this force center governs occult vision, both literal and metaphorical. Once the brow chakra has been opened, the initiate gains the benefits of <Link to="/spell/true_seeing">true seeing</Link> for 1 round. Engaging this force center literally opens a shining third eye of psychic energy upon the initiate's forehead. The mystical eye is easily perceived by anyone looking at the initiate, and persists so long as he maintains the brow chakra. The initiate must be at least 12th level before he can open this chakra.</p>
<p><strong className="hl">7. Crown Chakra (DC 38):</strong> Channeling serpent-fire through all seven chakras at the same time aligns the initiate's life energy to its utmost potential, bathing his aura in glimmering golden hues that illuminate his head like a gleaming halo. For the briefest of moments, he transcends mortality to become a being of temporary divinity. This alignment with the cosmic harmony of the multiverse grants him enormous sway over probability.</p>
<p>Once the crown chakra is opened, the initiate becomes fully in tune with the powers of the multiverse, allowing him to gain the benefit of any two distinct chakras each round. He gains this benefit even if he doesn't select the crown chakra. If he selects the crown chakra, every time he would roll a d20 during that turn (such as when attempting an attack roll, a saving throw, or a skill check), he can roll twice and take the higher result. The initiate must be at least 14th level before he can open this chakra.</p>
</>};
const _psychic_duels = {title: "Psychic Duels", parent_topics: ["gm_specific_campaigns","occult_rules"], siblings: ["occult_skill_unlocks","auras","chakras","psychic_duels","possession","occult_rituals","esoteric_traditions","running_an_occult_game"], subtopics: ["instigating_a_psychic_duel","running_psychic_duels","psychic_manifestations","concluding_a_psychic_duel"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 201</Link></p>
<p>Psychic duels are battles in which combatants' minds become intertwined within a <Link to="/rule/binary_mindscapes">binary mindscape</Link>. Though psychic spellcasters wield tremendous power in such battles, other creatures can also wield mental might with surprising potency.</p>
</>};
const _instigating_a_psychic_duel = {title: "Instigating a Psychic Duel", parent_topics: ["gm_specific_campaigns","occult_rules","psychic_duels"], siblings: ["instigating_a_psychic_duel","running_psychic_duels","psychic_manifestations","concluding_a_psychic_duel"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 201</Link></p>
<p>A psychic spellcaster creates a binary mindscape when a target fails its save against <Link to="/spell/instigate_psychic_duel">instigate psychic duel</Link>. The caster's and target's minds are then merged in a psychic duel within that mindscape until either the spell's duration ends or the psychic duel reaches its conclusion. If the duel begins during combat, each of the dueling characters retains its initiative order and the psychic duel goes on in conjunction with the initial combat.</p>
<p>If the duel begins outside combat, the initiator can take a swift action to create a supernatural effect called a psychic manifestation upon entering the binary mindscape, before her opponent's first turn.</p>
<p>While locked in a psychic duel, the combatants' physical bodies become unresponsive. They retain their positions, but they can take no actions and lose their Dexterity bonuses to Armor Class for the duration of the duel.</p>
</>};
const _running_psychic_duels = {title: "Running Psychic Duels", parent_topics: ["gm_specific_campaigns","occult_rules","psychic_duels"], siblings: ["instigating_a_psychic_duel","running_psychic_duels","psychic_manifestations","concluding_a_psychic_duel"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 201</Link></p>
<p>Each combatant in a psychic duel attacks her opponent and defends herself with the power of her imagination and force of her personality. Such combatants appear in the binary mindscape much as they appear in reality (unless using a <Link to="/rule/mindscapes">mental mask</Link>), but their abilities and attacks are enhanced in some ways and limited in others by the strange laws of the binary mindscape.</p>
<p>While the illusion of physical movement exists in the mindscape's reality, such things as speed and position have little bearing on a psychic duel. Combatants are limited to purely mental actions, speech, and the creation of <Link to="/rule/psychic_manifestations">psychic manifestations</Link>. With very few exceptions, spells and spell-like abilities can't be used (see <Link to="/rule/concluding_a_psychic_duel">Concluding a Psychic Duel</Link>).</p>
<p>When a character enters a binary mindscape, she uses the following statistics as they were prior to entering: her current hit points; ability scores; AC and touch AC; Reflex, Fortitude, and Will saving throws; highest melee attack bonus; and highest ranged attack bonus. These attack bonuses apply on melee and ranged offensive manifestations, respectively. Regeneration and fast healing are the only special abilities that apply in a psychic duel; uncanny dodge and damage reduction, for example, do not.</p>
<p>Bonuses and penalties granted by items, as well as spells and effects active before entering the mindscape, apply to these statistics, as such items and effects gain psychic equivalents when a creature enters a mindscape. However, while the mind is engaged in a psychic duel, only damaging and healing spells and effects cast on the body of a combatant have an effect on the battle.</p>
<p>Manifestations retain many of the manifestor's combat capabilities. The nature of the binary mindscape translates martial prowess into psychic parallels; after all, such prowess comes from training, muscle memory, and other subconscious components of the mind. This means that while martially inclined characters have fewer resources in a psychic duel, they can still make powerful attacks against their foes with great accuracy.</p>
<p>Conditions gained during a psychic duel rarely carry over into the real world, but damage is dealt to the physical body of the duelist, so it's possible for combatants to die. Similarly, unlike all other effects that occur in the real world after a psychic duel begins, damaging and healing a duelist's physical body carry over to the psychic duel.</p>
</>};
const _psychic_manifestations = {title: "Psychic Manifestations", parent_topics: ["gm_specific_campaigns","occult_rules","psychic_duels"], siblings: ["instigating_a_psychic_duel","running_psychic_duels","psychic_manifestations","concluding_a_psychic_duel"], subtopics: ["generating_manifestation_points","creating_psychic_manifestations","offensive_manifestation_full_round_action","defensive_manifestation_action_type_varies","thought_form_creature_1_round_action"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 201</Link></p>
<p>While engaged in a psychic duel, the combatants don't attack or cast spells normally. Instead, the combatants create psychic manifestations, abilities that can be used only within a binary mindscape; these represent changes to the mindscape's fabric (see <Link to="/rule/mindscapes">Mindscapes</Link>).</p>
</>};
const _generating_manifestation_points = {title: "Generating Manifestation Points", parent_topics: ["gm_specific_campaigns","occult_rules","psychic_duels","psychic_manifestations"], siblings: ["generating_manifestation_points","creating_psychic_manifestations","offensive_manifestation_full_round_action","defensive_manifestation_action_type_varies","thought_form_creature_1_round_action"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 201</Link></p>
<p>Psychic manifestations are fueled by psychic energy, represented by manifestation points (MP). Each combatant has a manifesting level equal either to its highest caster level or half its number of Hit Dice, whichever is higher. The maximum number of manifestation points a combatant can spend when creating a manifestation is equal either to the highest-level spell the combatant can cast or 1/4 its HD (minimum 1 and maximum 5), whichever is higher.</p>
<p>In order to create a psychic manifestation, a combatant must generate MP in any of four ways: from ability scores, from class features, by sacrificing spells, or by sacrificing spell-like abilities. She can use each of these methods only once per manifestation. For example, a character who is a gunslinger 1/wizard 8 could generate 1 MP from ability scores, 1 MP from grit, and 2 MP by sacrificing a 2nd-level spell, thus reaching her per-manifestation limit of 4 MP, but she couldn't do so by sacrificing four different 1st-level spells. If a combatant doesn't use all of the manifestation points it generates immediately, the extra points are lost.</p>
<p>Generating MP from ability scores doesn't deplete the ability score, but it has other consequences for a combatant once the duel is concluded (see below). All other sources of MP deplete the spent resources in the real world as well.</p>
<p><strong className="hl">Generating MP from Ability Scores:</strong> Every combatant begins a psychic duel with a pool of MP equal to the combatant's HD + the average of her Intelligence, Wisdom, and Charisma scores. As a free action, a combatant can draw from this pool to generate MP. A combatant who draws any number of points from this pool is fatigued upon leaving the binary mindscape. A combatant who draws half or more of these points is exhausted upon leaving the mindscape, and takes a -4 penalty to Intelligence, Wisdom, and Charisma for 24 hours thereafter. If a combatant expends the entire pool, she becomes unconscious after leaving the mindscape. The fatigued, exhausted, and unconscious conditions and the -4 penalty ignore all immunities and last for 24 hours; they can't be removed before that time except by a <Link to="/spell/wish">wish</Link> or a <Link to="/spell/miracle">miracle</Link>.</p>
<p><strong className="hl">Generating MP from Select Class Features:</strong> As a free action, a combatant with an arcane, grit, ki, panache, or phrenic pool (or any other similar class feature the GM chooses) can spend points from these pools to generate MP at a rate of 1 MP per point spent.</p>
<p><strong className="hl">Sacrificing Spells to Generate MP:</strong> As a free action, a combatant can sacrifice a single spell slot (if he's a spontaneous caster) or prepared spell (if he's a prepared caster) to generate a number of MP equal to the level of the spell slot or prepared spell sacrificed. Alchemists and investigators can sacrifice an extract slot as if it were a spell slot, but only if that extract slot is currently open and not already invested in a physical extract.</p>
<p><strong className="hl">Sacrificing Spell-Like Abilities to Generate MP:</strong> A combatant can sacrifice a use of a spell-like ability in a way similar to sacrificing spells to generate MP. However, each at-will spell-like ability can be sacrificed only once during a single psychic duel; it is not a source of infinite MP.</p>
</>};
const _creating_psychic_manifestations = {title: "Creating Psychic Manifestations", parent_topics: ["gm_specific_campaigns","occult_rules","psychic_duels","psychic_manifestations"], siblings: ["generating_manifestation_points","creating_psychic_manifestations","offensive_manifestation_full_round_action","defensive_manifestation_action_type_varies","thought_form_creature_1_round_action"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 202</Link></p>
<p>Psychic manifestations have three main types: offensive manifestations, defensive manifestations, and thought-form creatures. For the purpose of <Link to="/rule/concentration">concentration</Link> checks, creating a manifestation is considered casting a spell with a spell level equal to the number of MP spent to create the manifestation. The combatant creating the manifestation treats her manifesting level as her caster level for such checks.</p>
</>};
const _offensive_manifestation_full_round_action = {title: "Offensive Manifestation (Full-Round Action)", parent_topics: ["gm_specific_campaigns","occult_rules","psychic_duels","psychic_manifestations"], siblings: ["generating_manifestation_points","creating_psychic_manifestations","offensive_manifestation_full_round_action","defensive_manifestation_action_type_varies","thought_form_creature_1_round_action"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 202</Link></p>
<p>This type of manifestation is a direct attack on an opponent, a thought-form creature, or both. An offensive manifestation can attack a variety of defenses, depending on the number of MP spent and the desires of its creator. Creating an offensive manifestation requires three steps.</p>
<p><strong className="hl">Step 1-Create Sensory Effects:</strong> Combatants creating psychic manifestations are limited only by their imaginations as to the look, sound, feel, and smell of each manifestation; these sensory effects guide combatants in their later choices. For example, if a combatant envisions an offensive manifestation as a giant ball of lava he throws at his opponent, that might suggest that the attack should force a Reflex saving throw rather than targeting the opponent's AC. Regardless of the effect's form, damage dealt by a manifestation is always untyped damage, and can be mitigated only by defensive manifestations.</p>
<p><strong className="hl">Step 2-Determine Attack Type:</strong> By default, an offensive manifestation acts as either a melee or ranged attack (creator's choice) that resolves against a single target's AC. The creator can have the manifestation resolve against touch AC instead by increasing the cost by 2 MP.</p>
<p>Alternatively, the creator can instead force both his opponent and any thought-form creature it controls to attempt a saving throw to avoid the effect; this increases the cost by 1 MP. The DC is equal to 10 + the total number of MP spent + the Intelligence, Wisdom, or Charisma bonus of the creator (whichever is highest). The creator chooses which kind of saving throw - Fortitude, Reflex, or Will - the target must attempt. By default, a successful save negates the manifestation's damage, but the creator can increase the cost by an additional 1 MP to cause the manifestation to deal half damage on a successful save.</p>
<p>If an offensive manifestation's effects can be negated or reduced with a saving throw, the creator can increase the cost to have the manifestation apply a condition.</p>
<p><strong className="hl">Step 3-Determine Damage and Conditions:</strong> After determining the manifestation's attack type, the creator determines its number of damage dice. The creator must spend at least 1 MP on damage, which grants the manifestation 1 damage die, but she can spend more to increase the number of dice, as shown on the table below.</p>
<ScrollContainer id="rule-offensive_manifestation_full_round_action--table-0"><table>
<thead>
<tr>
<th>MP Spent on Damage</th>
<th>Number of Damage Dice</th>
</tr>
</thead>
<tbody><tr>
<td>1 MP</td>
<td>1 die</td>
</tr>
<tr>
<td>2 MP</td>
<td>4 dice</td>
</tr>
<tr>
<td>3 MP</td>
<td>6 dice</td>
</tr>
<tr>
<td>4 MP</td>
<td>8 dice</td>
</tr>
<tr>
<td>5 MP</td>
<td>10 dice</td>
</tr>
<tr>
<td>6 MP</td>
<td>12 dice</td>
</tr>
<tr>
<td>7 MP</td>
<td>14 dice</td>
</tr>
<tr>
<td>8 MP</td>
<td>16 dice</td>
</tr>
<tr>
<td>9 MP</td>
<td>1 die per creator's manifesting level (maximum 20 dice)</td>
</tr>
</tbody></table></ScrollContainer>
<p>The manifestation's damage die type depends on the source of the manifestation's MP. Psychic spells and spell-like abilities sacrificed grant d8s. Arcane spells and other spell-like abilities grant d6s. All other methods of generating MP (including mixed methods) grant d4s. If the manifestation's attack resolves against AC or touch AC, a natural 20 on the attack roll threatens a critical hit for double damage.</p>
<p>If the manifestation allows a saving throw, the creator can spend additional MP to add one condition from the list below (she must still spend at least 1 MP on damage). A successful saving throw always negates the condition. Conditions gained in a psychic duel end if the duel ends before the condition's normal duration expires. The conditions below otherwise follow the normal rules for those conditions, with the following exceptions and additions.</p>
<p><strong className="hl">Blinded (3 MP):</strong> Affected creatures are blinded for 1 round; they can't use offensive manifestations that require saves.</p>
<p><strong className="hl">Confused (3 MP):</strong> The affected creatures are confused for 1 round, breaking concentration automatically. If an affected creature is forced to attack the nearest creature, it attacks its opponent's thought-form creature if one exists, or the opponent if not. A confused combatant never attacks her own thought-form creature, or vice versa. This condition can be applied only to manifestations that require Will saves.</p>
<p><strong className="hl">Dazed (4 MP):</strong> The affected creatures are dazed for 1 round. A dazed combatant can continue to concentrate on thoughtform creatures and create defensive manifestations, but can't create thought-form creatures or offensive manifestations. This condition can be applied only to manifestations that require Will saves.</p>
<p><strong className="hl">Entangled (2 MP):</strong> The affected creatures are entangled until they take a full-round action to end this condition. This condition can be applied only to manifestations that require Reflex saves.</p>
<p><strong className="hl">Nauseated (4 MP):</strong> The affected creatures are nauseated for 1 round. A nauseated creature can create only defensive manifestations. This condition can be applied only to manifestations that require Fortitude saves.</p>
<p><strong className="hl">Shaken (1 MP):</strong> The affected creatures are shaken for 1d4 rounds. This condition can be applied only to manifestations that require Will saves.</p>
</>};
const _defensive_manifestation_action_type_varies = {title: "Defensive Manifestation (Action Type Varies)", parent_topics: ["gm_specific_campaigns","occult_rules","psychic_duels","psychic_manifestations"], siblings: ["generating_manifestation_points","creating_psychic_manifestations","offensive_manifestation_full_round_action","defensive_manifestation_action_type_varies","thought_form_creature_1_round_action"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 203</Link></p>
<p>Defensive manifestations protect a combatant from her opponent's manifestations. A combatant in a psychic duel can manifest the following defensive abilities.</p>
<p>Evasive Mind (1 or more MP; swift action): The combatant gains a +2 bonus on all saving throws and gains evasion for a number of rounds equal to the number of MP she spent to create this manifestation.</p>
<p>Hardened Mind (1 to 4 MP; swift action): For 1 round, the combatant's Armor Class increases by an amount equal to the number of MP she spent to create this manifestation, and her touch AC increases by half that (minimum +0).</p>
<p>Thought Barrier (1 or more MP; swift action): A thought barrier reduces the damage dealt to the combatant by offensive manifestations and thought-form creatures by 5 points. This manifestation lasts for a number of rounds equal to the number of MP the combatant spent to create it.</p>
<p>Disruptive Counter (variable MP; immediate action): When the combatant's opponent creates a manifestation, the combatant can spend a number of MP equal to that manifestation's cost + 2 to counter that manifestation. When she does, any currently active thought-form creatures or defensive manifestations she has are dismissed.</p>
<p>Nimble Mind (2 MP; immediate action): When the combatant is attacked with an offensive manifestation that targets her touch AC, this ability changes it to target her full AC.</p>
<p>Psychic Redirect (1 MP; immediate action): When the combatant would take damage while she has a thoughtform creature active, she can use this ability to apply the damage to her thought-form creature instead. If the attack targets both the combatant and the thought-form creature, the thought-form creature takes the damage for both itself and the combatant and suffers any condition conferred by the attack, but the combatant suffers no effects.</p>
</>};
const _thought_form_creature_1_round_action = {title: "Thought-Form Creature (1-Round Action)", parent_topics: ["gm_specific_campaigns","occult_rules","psychic_duels","psychic_manifestations"], siblings: ["generating_manifestation_points","creating_psychic_manifestations","offensive_manifestation_full_round_action","defensive_manifestation_action_type_varies","thought_form_creature_1_round_action"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 204</Link></p>
<p>A thought-form creature is a mentally constructed thrall that takes any form its creator desires. Creating a thought-form creature takes 1 full round (as if the creator were casting a spell with a 1-round casting time) and lasts as long as its creator concentrates on the creature's existence as a full-round action; a combatant can manifest only one thought-form creature at a time. A thought-form creature must make its attacks against another thought-form creature if one is manifested; if not, it can attack its creator's opponent. The creature makes its attacks when its creator uses a full-round action to concentrate on the thought-form creature. When a thought-form creature is reduced to 0 or fewer hit points, it disappears and its creator takes an amount of damage equal to the thought-form creature's psychic backlash (see Thought-Form Creature Statistics below). A thought-form creature can be dismissed as a free action.</p>
<p>A basic thought-form creature costs 1 MP to create, and has the following base statistics.</p>
<p><strong className="hl">Thought-Form Creature Statistics:</strong> AC creator's AC; touch AC creator's touch AC; hp 1/2 creator's current hit points; Attack Bonus creator's manifesting level + creator's Intelligence, Wisdom, or Charisma modifier (whichever is highest); Damage 1d6 + creator's Intelligence, Wisdom, or Charisma modifier (whichever is highest); Saves creator's save bonuses; Psychic Backlash 1d10 + the MP cost of the thought-form creature.</p>
<p><strong className="hl">Thought-Form Creature Augmentations:</strong> When creating a thought-form creature, the creator can apply any of the following augmentations, up to her maximum MP limit.</p>
<p><strong className="hl">Increase Attack Bonus:</strong> Increase the cost by up to 4 MP to increase the thought-form creature's attack bonus on all its attacks by the same amount.</p>
<p><strong className="hl">Extra Attacks:</strong> Increase the cost by 2 MP to grant the thought-form creature a second attack each round. Increasing the cost by an additional 2 MP grants it a third attack, but the creature makes the third attack at a -5 penalty.</p>
<p><strong className="hl">Increase Armor Class:</strong> Increase the cost by up to 4 MP to increase the thought-form creature's AC by the same amount and its touch AC by half that amount.</p>
<p><strong className="hl">Increase Saving Throws:</strong> Increase the cost by 2 or 4 MP to increase the bonus on all of the thought-form creature's saving throws by half that amount.</p>
<p><strong className="hl">Increase Hit Points:</strong> Increase the cost by up to 4 MP to increase the thought-form creature's hit points by 10 &times; that amount.</p>
<p><strong className="hl">Increase Damage:</strong> Increase the cost by 1 MP to increase the thought-form creature's damage die type for all its attacks to d8, or by 2 MP to increase the damage die type to d10. If the thought-form creature has only one attack, its damage bonus with that attack increases to 1-1/2 &times; the creator's Intelligence, Wisdom, or Charisma bonus (whichever is highest).</p>
<p><strong className="hl">Protective Ability:</strong> Increase the cost by 1 MP to grant the creator a +4 bonus to AC (both normal and touch), a +2 bonus on Reflex saving throws, and evasion for as long as this thought-form creature exists. Increasing the cost by an additional 2 MP also grants the creator immunity to attacks against AC or touch AC for as long as this thought-form creature exists.</p>
</>};
const _concluding_a_psychic_duel = {title: "Concluding a Psychic Duel", parent_topics: ["gm_specific_campaigns","occult_rules","psychic_duels"], siblings: ["instigating_a_psychic_duel","running_psychic_duels","psychic_manifestations","concluding_a_psychic_duel"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 204</Link></p>
<p>There are a number of ways a psychic duel can conclude and the combatants' minds can return to their bodies (aside from the end of the <Link to="/spell/instigate_psychic_duel">instigate psychic duel</Link> spell that started the combat). The duel ends immediately if one of the combatants reaches 0 or fewer hit points or both combatants agree to end the psychic duel. Each combatant can make this agreement as a free action that can be taken even when it isn't that combatant's turn. Rarely, a spell or ability can allow combatants to leave a psychic duel. For instance, unlike most spells, <Link to="/spell/mindscape_door">mindscape door</Link> can be cast while in a psychic duel, allowing the caster to leave the mindscape and end the duel. Lastly, a creature adjacent to the body of a combatant can attempt to shake that creature out of its torpor as a standard action. Doing so is a melee touch attack that deals no damage but allows the combatant to attempt a new saving throw against the effect that started the psychic duel. If the check is successful, the mind of the roused creature returns to its body and the duel ends. A creature in a psychic duel can attempt no more than one additional save per round in this way.</p>
</>};
const _possession = {title: "Possession: Overview", parent_topics: ["gm_specific_campaigns","occult_rules"], siblings: ["occult_skill_unlocks","auras","chakras","psychic_duels","possession","occult_rituals","esoteric_traditions","running_an_occult_game"], subtopics: ["what_is_possession","core_mechanic_and_clarification","rule_interactions","possession_misc"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 205</Link></p>
<p>Rather than introducing new rules, this section explains the nuances of possession magic, as used in the new <Link to="/spell/possession">possession</Link> spell, as well as monster abilities and other spells.</p>
</>};
const _what_is_possession = {title: "What is Possession?", parent_topics: ["gm_specific_campaigns","occult_rules","possession"], siblings: ["what_is_possession","core_mechanic_and_clarification","rule_interactions","possession_misc"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 205</Link></p>
<p>True possession is when a creature displaces or overrides the target's consciousness with its own, establishing direct control over the target's body. The Pathfinder RPG features several effects that are often conflated with possession. The section below describes several possession and possession-like effects and the differences between them.</p>
<p><strong className="hl">Domination:</strong> Dominate spells are often confused with possession, as they produce superficially similar outcomes. However, domination and possession are not the same. Domination is mind-control, enslaving the target's mind and forcing it to carry out the caster's will; thus, the caster doesn't directly control the target's body. The target's dominated mind merely carries out a mandate given by the caster with the means, knowledge, and experience it has available.</p>
<p><strong className="hl">Spell Possession:</strong> Prior to <em>Occult Adventures,</em> the primary source for possession mechanics in the Pathfinder RPG was the <Link to="/spell/magic_jar">magic jar</Link> spell. <em>Magic jar</em> allows the caster to detach her soul from her body and place it in the body of another creature, displacing the host's soul and leaving the caster's own body essentially "empty." Like <Link to="/spell/possession">possession</Link>, these effects belong to the necromancy school of magic, as befits magic that manipulates life force and souls. This is true possession, as the end result is control of the host's body rather than the mind. The <Link to="/spell/marionette_possession">marionette possession</Link> spell operates under an identical principle, but does not displace the host's soul because the target cedes control to the caster willingly.</p>
<p>These forms of possession carry great risk for the caster. The caster has no means of survival without a body to inhabit, so if her soul is ejected from the host's body while her own body is out of the spell's range, the caster dies instantly. The <em>possession</em> spell follows similar rules to <em>magic jar</em> and <em>marionette possession,</em> but with a few key differences. <em>Possession</em> does not displace the host soul when the possessor seizes control of a creature's body. Additionally, the caster does not perish instantly if her body is outside the spell's range when she is ejected; the range on the <em>possession</em> spell pertains only to the distance the caster can be from her intended target at the time of casting. Once ejected, the caster's soul snaps back to her body from any distance, so long as it remains on the same plane.</p>
<p><strong className="hl">Incorporeal Possession:</strong> <Link to="/template/ghost">Ghosts</Link>, <Link to="/monster/shadow_demon">shadow demons</Link>, and similar creatures do not possess physical bodies - they are simply disembodied souls. They use the rules below to govern the interaction between their mental characteristics and their hosts' physical forms. Such a creature merges with the host's body and is unharmed when ejected. Creatures that use <em>magic jar</em> can often use the new <em>possession</em> spell instead.</p>
</>};
const _core_mechanic_and_clarification = {title: "Core Mechanic and Clarification", parent_topics: ["gm_specific_campaigns","occult_rules","possession"], siblings: ["what_is_possession","core_mechanic_and_clarification","rule_interactions","possession_misc"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 205</Link></p>
<p>The <Link to="/spell/possession">possession</Link> spell contains the core mechanics for possession. The description of the <Link to="/spell/magic_jar">magic jar</Link> spell states the possessing creature can use her "mental abilities," and the <Link to="/spell/possession">possession</Link> spell works similarly. This term wasn't previously defined, and has been a source of confusion in many games. The term "mental abilities" as used here refers to the following.</p>
<ul>
<li>The possessor uses her skill ranks, along with any feats the possessor has for which she still qualifies in the host's body. The possessor doesn't gain any of the host's feats or skill ranks, but does apply bonuses and penalties associated with the host's body. For example, when attempting Fly checks, a character who possessed a bird would use her own ranks in the Fly skill, but the bird's Dexterity modifier and racial, size, and maneuverability bonuses.</li>
<li>The possessor can use spells and spell-like abilities. Appropriate spell components and foci are still required for spells that call for them. Some spell-like abilities are racial in nature, but the soul's essence temporarily instills the possessing creature's quintessential nature into the host's body. For instance, a <Link to="/monster/shadow_demon">shadow demon</Link> possessing a paladin can still use its racial spell-like abilities during that time.</li>
<li>The possessor can use nonmagical and magical class abilities such as domain, hex, rage, and school powers. Supernatural abilities (with the exception of class abilities) are not considered mental abilities, as they generally rely upon a creature's physical form. For example, a <Link to="/family/red_dragon">red dragon</Link> possessing a cleric of Iomedae could not use its breath weapon ability to breathe fire while inhabiting the cleric's form. The GM can choose to make a specific exception if she believes an ability is solely mental in nature.</li>
</ul>
</>};
const _rule_interactions = {title: "Rule Interactions", parent_topics: ["gm_specific_campaigns","occult_rules","possession"], siblings: ["what_is_possession","core_mechanic_and_clarification","rule_interactions","possession_misc"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 205</Link></p>
<p>Several different mechanics allow a creature to influence or control another creature, and sometimes it isn't clear how these competing effects should play out, whether it be possession versus compulsion or even possession versus possession. These systems interact in the following ways.</p>
<p>Possession versus Charm and Compulsion: Possession overrides charms and compulsions that are in control of another creature. Neither type of effect prevents the other from functioning, but possession bypasses the mind and takes direct physical control of the body - which may result in a possessor enslaving an intelligence that is essentially helpless already because of a compulsion. Compulsion and charm effects move with the mind or soul of the creature originally targeted. For example, if you cast <Link to="/spell/mind_swap">mind swap</Link> on a dominated creature, the domination effect remains active but transfers with the originally dominated mind to its new host body, and a dominated creature capable of possession could possess another creature while still remaining dominated.</p>
<p>If the host's mind or soul is not displaced from the body, a dominating creature can still telepathically interact with its now-possessed target, even though the target is helpless within its own hijacked body. The dominating creature can even command the target to explain what the host body is doing, if the host has access to its senses.</p>
<p>Conversely, a caster can target a possessing creature with a compulsion or charm effect. If the possessing creature is the only mind or soul in the host body, the compulsion or charm effect works on the possessing creature normally. If the possessing creature is later evicted from the body, the compulsion or charm effect remains active on the possessing creature when it returns to its original body. For instance, if a mesmerist is using <em>mind swap</em> on a bard, and a <Link to="/monster/succubus">succubus</Link> uses her <Link to="/spell/dominate_monster">dominate monster</Link> spell-like ability when she meets the possessed bard, the mesmerist must attempt a saving throw against the spell. If he fails, the mesmerist becomes dominated by the succubus, and when his possession ends and he returns to his body, he remains at the mercy of his new mistress.</p>
<p>When both the host creature and a possessing creature occupy a body at the same time, a charm or compulsion effect can target either one. However, the caster must be aware of the possessing creature's presence in the host body in order to target it. Otherwise, the effect targets the host by default, generally with limited effect.</p>
<p>Possession versus Divination Effects: Possession does nothing to obfuscate or block most divination spells. For example, if an evil mesmerist is possessing a paladin, <Link to="/spell/detect_evil">detect evil</Link> will sense the presence of an evil creature when the paladin's body enters the area of effect. The Hidden Presence feat can assist a possessing creature in foiling divinations. If a creature's body and soul are in two different locations, as in the case of a caster of <Link to="/spell/magic_jar">magic jar</Link>, divination spells that depend on location, such as <Link to="/spell/locate_creature">locate creature</Link> or <Link to="/spell/scrying">scrying</Link>, fail to produce results. The exception is <Link to="/spell/discern_location">discern location</Link>; this powerful spell provides both locations unless the body and soul are protected by <Link to="/spell/mind_blank">mind blank</Link> or a deity.</p>
<p>Possession versus Possession: If you attempt to possess a creature that is already possessed, the possessing creature must succeed at the <Link to="/spell/possession">possession</Link> spell's save or be ejected, allowing you to enter the host. If the possessing creature voluntarily fails its save, first that creature is automatically ejected and then the host attempts the Will save instead. A possession effect that doesn't allow a saving throw automatically causes the possessing creature to be ejected.</p>
</>};
const _possession_misc = {title: "Possession", parent_topics: ["gm_specific_campaigns","occult_rules","possession"], siblings: ["what_is_possession","core_mechanic_and_clarification","rule_interactions","possession_misc"], subtopics: ["possession_feats","possession_actions","exorcism"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_28_the_infernal_syndrome">Pathfinder #28: The Infernal Syndrome pg. 56</Link></p>
<p>Fiends prey upon the people of Golarion, slaughtering mortals, catching them in their nets of betrayal, and turning allies against one other. From the abyssal pit of the Worldwound to the diabolical nation of Cheliax, the encroachment of fiends upon mortal lands, minds, and livelihoods has reached staggering heights within the past age. While encounters with these manifestations of true evil typically come in the form of desperate battles, heretical summons, or plane-spanning manipulations, the denizens of the outer planes' most horrifying reaches know no end of corruption, possessing ways to twist the very truths of existence and physicality to defile the mortal realm. Fiends with the power to loose themselves from their forms to prey upon the minds and souls of the living practice a terrible blasphemy known as possession.</p>
<p>Fiendish possession allows horrors from realms beyond to encroach upon specific locations, objects, and creatures, tainting their victims with fundamental evil and reshaping natural life to their terrible whims. The motivation for such possessions differs among the fiendish races, though even upon shedding their forms, evil outsiders operate and seek to defile mortality just as bodied members of their kind. While a devil might utilize the powers of possession to corrupt and manipulate, daemons typically seek to sow death and destroy lives, with demons spreading dramatic terror and ruin. Yet while such fiends might be directly combated and slain in their bodily forms, possession grants such evils the shield of innocence and the mask of virtue as their corruption spreads not from a nightmarish abomination, but from a familiar face.</p>
<p>This article describes the methods and powers of possession in a variety of forms, as well as powers utilized by the living to combat such affronts. Possession is a supernatural ability.</p>
<p>While this article uses the word "fiend" extensively, it should be noted that fiends are not the only creatures that might attempt to forcibly manipulate mortals to their whims. Other extraplanar creatures - good or evil - various forms of undead, unknowable entities from the depths of space, and other even less fathomable beings all might seek to take control of frail mortal bodies or other base physical shells. As such, GMs might easily alter or add to these rules to use them for any manner of possession-like effect they require.</p>
</>};
const _possession_feats = {title: "Possession Feats", parent_topics: ["gm_specific_campaigns","occult_rules","possession","possession_misc"], siblings: ["possession_feats","possession_actions","exorcism"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_28_the_infernal_syndrome">Pathfinder #28: The Infernal Syndrome pg. 57</Link></p>
<p>Rare among common fiends, those capable of possession stand out in power above others of their kind. Mastering the ability to discorporate their forms and influence creatures and materials around them, such body thieves are masters of terror and manipulation. Typically only the most extraordinary and perverse fiends can make use of the powers of possession, learning such secrets from blasphemous masters or dark secrets of the multiverse. To represent this, fiends who increase in power beyond the common representatives of their kind gain access to the <Link to="/feat/possess_creature">Possess Creature</Link>, <Link to="/feat/possess_location">Possess Location</Link>, and <Link to="/feat/possess_object">Possess Object</Link> feats and the host of terrible abilities they might provide. Using these powers, even a relatively weak fiend can come to possess an area or object, while more powerful horrors might overwhelm a mortal body. Despite the similarity to mind-affecting effects, fiendish possession has more to do with the spiritual hijacking of a body or the physical corruption of objects, and thus, creatures immune to mind-affecting effects are not immune to possession (although several possession actions themselves are mind-affecting). Creatures where the body and spirit are indivisible, as is the case with most outsiders and incorporeal undead, are immune to possession effects.</p>
</>};
const _possession_actions = {title: "Possession Actions", parent_topics: ["gm_specific_campaigns","occult_rules","possession","possession_misc"], siblings: ["possession_feats","possession_actions","exorcism"], subtopics: ["bodily_possession","object_possession","possesed_locations"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_28_the_infernal_syndrome">Pathfinder #28: The Infernal Syndrome pg. 58</Link></p>
<p>A variety of actions are available to fiends who possess creatures, objects, or locations. GMs are encouraged to use these abilities as guidelines and create similar abilities for their own fiendish villains and extraplanar plots. Each possession action is presented in the following format.</p>
<p><strong className="hl">Name:</strong> The name of the action in question. The number in parentheses after the name lists the number of possession points ("PP") the action costs to perform.</p>
<p><strong className="hl">Expression:</strong> This indicates whether or not the action has a visible effect when it manifests (physical) or if it happens entirely within the host's head (spiritual). The listed DC indicates the Perception or Sense Motive check required by those nearby to notice the fact that the target is possessed. Note that a possessed creature does not automatically realize that it is possessed, but it gains a +10 bonus on all Perception or Sense Motive checks to notice that it is indeed possessed when the fiend uses a possession action</p>
<p><strong className="hl">Duration:</strong> This lists the duration of the effect once the fiend activates the possession action. Durations listed as directly tied to HD use the possessing fiend's HD to set the duration.</p>
<p><strong className="hl">Saving Throw:</strong> This indicates what sort of saving throw the possessed creature, location, object, or target of the action can make to negate or reduce the effects of the action. In all cases, the DC for this saving throw is DC 10 + the HD of the possessing fiend + the fiend's Cha modifier.</p>
</>};
const _bodily_possession = {title: "Bodily Possession", parent_topics: ["gm_specific_campaigns","occult_rules","possession","possession_misc","possession_actions"], siblings: ["bodily_possession","object_possession","possesed_locations"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_28_the_infernal_syndrome">Pathfinder #28: The Infernal Syndrome pg. 59</Link></p>
<p>A fiend possesses a creature's body not only to torture its victim, but to torment the possessed creature's loved ones. More often than not, a fiend aggressively inhabits a host, but sometimes a misguided mortal might call a fiend into his body in search of otherworldly power. This rarely works to the mortal's advantage, as bodily possession is essentially an abduction of one's self. Occasionally fiends might grant a taste of power in order to bribe the mortal into compliance with its own wishes and punish actions deviating from their desires, but few fiends possess victims for any other reason than absolute control.</p>
<h3 id="rule-bodily_possession-defile-body-3-pp">Defile Body (3 PP)</h3>
<p><strong>Expression</strong> physical (automatic)<br/><strong>Duration</strong> instantaneous<br/><strong>Saving Throw</strong> Fortitude partial</p>
<p>The possessing fiend, when displeased, can cause physical harm to the target. This damage manifests in a number of ways, from searing pain to limbs physically wrenched in agonizing ways. Each fiend delivers this damage in a different way, but the damage done always bypasses any damage reduction, resistance, or immunity to damage that the host might possess. If the host fails to resist this ability, it takes 1d6 points of damage for every 2 Hit Dice the fiend possesses. If it makes the Fotitude save, the painful spasms only sicken the host for 1 round.</p>
<h3 id="rule-bodily_possession-elusive-presence-3-or-1-pp">Elusive Presence (3 Or 1 PP)</h3>
<p><strong>Expression</strong> spiritual (Sense Motive DC 35)<br/><strong>Duration</strong> 1 hour or instantaneous<br/><strong>Saving Throw</strong> none</p>
<p>A fiend may use this action to hide itself from detect spells or to pass through a <Link to="/spell/magic_circle_against_evil">magic circle against evil</Link> or the effects of a <Link to="/spell/forbiddance">forbiddance</Link> spell. The fiend must make a Will save equal to 10 + the caster level of the spell + the caster's relevant ability modifier. If it succeeds, the spell only detects the host and in no way hinders or reveals the fiend. If the fiend fails, though, the spells treat the host as if it were the fiend, providing information or barring the host as such.</p>
<p>Alternatively, a fiend may spend an additional possession point as a swift action when activating any other possession action to make that action elusive. This supresses that possession action's expression, increasing the DC to notice the effect by +10.</p>
<h3 id="rule-bodily_possession-fiendish-manifestation-3-pp">Fiendish Manifestation (3 PP)</h3>
<p><strong>Expression</strong> physical (automatic)<br/><strong>Duration</strong> 1 minute/HD<br/><strong>Saving Throw</strong> Will negates</p>
<p>The possessing fiend causes its host to undergo a terrible change. Any creature subject to the alter appearance action must succeed on a Will save. If the host fails, the possessing fiend manifests a hint of its presence, perhaps in the form of glowing eyes, an inhuman growl, a ghastly stench, or spontaneous bleeding. This manifestation is obvious to anyone looking at the host. As long as the manifestation persists, the host creature suffers a -2 penalty on all Charisma-based checks.</p>
<h3 id="rule-bodily_possession-subversive-3-pp">Subversive (3 PP)</h3>
<p><strong>Expression</strong> spiritual (Sense Motive DC 45)<br/><strong>Duration</strong> 1 hour/HD or until completed<br/><strong>Saving Throw</strong> Will negates</p>
<p>Some possessing fiends wish to remain hidden, even from their victims. To do so, a fiend and its host make opposed Wisdom checks. If the host succeeds, it is aware that some force beyond itself is manipulating it. If the fiend succeeds, it may communicate a simple idea to its host via telepathy, as per the spell <Link to="/spell/suggestion">suggestion</Link>. Alternatively, it may prevent its host from acknowledging a possession action it uses in the next round, even if such has a blatant visual effect - the host simply has no memory of having done anything out of the ordinary. This ability automatically activates the elusive presence ability and cannot be made further elusive through the use of elusive presence. This ability is a mind-affecting effect.</p>
<h3 id="rule-bodily_possession-alter-mood-5-pp">Alter Mood (5 PP)</h3>
<p><strong>Expression</strong> spiritual (Sense Motive DC 25)<br/><strong>Duration</strong> 1 minute/HD<br/><strong>Saving Throw</strong> Will negates</p>
<p>The possessing fiend twists positive moods and feelings toward a foul temperament. A fiend using this action forces its host to make a Will save or experience despondent or depressive emotions. A host affected by this ability becomes sickened for the duration of the effect. This is a mind-affecting effect.</p>
<h3 id="rule-bodily_possession-fiendish-force-5-pp">Fiendish Force (5 PP)</h3>
<p><strong>Expression</strong> physical (automatic)<br/><strong>Duration</strong> 1 minute/HD<br/><strong>Saving Throw</strong> Will negates</p>
<p>The possessing fiend causes its host to rise into the air, manifesting a degree of its malign control over its victim's body. This effect is similar to the spell <Link to="/spell/levitate">levitate</Link>, which the fiend has complete control over and may end at will. The host may make a Will save to resist this effect.</p>
<h3 id="rule-bodily_possession-read-thoughts-5-pp">Read Thoughts (5 PP)</h3>
<p><strong>Expression</strong> spiritual (DC 25)<br/><strong>Duration</strong> concentration, up to 1 minute/HD<br/><strong>Saving Throw</strong> Will negates</p>
<p>The possessing fiend taps into the mind of the creature it possesses. Like the spell <Link to="/spell/detect_thoughts">detect thoughts</Link>, a fiend may peruse the surface thoughts of the host. Unlike the spell, a fiend automatically skips the first and second round results and immediately reads the target it possesses if the host fails a Will save.</p>
<h3 id="rule-bodily_possession-vile-gout-5-pp">Vile Gout (5 PP)</h3>
<p><strong>Expression</strong> physical (automatic)<br/><strong>Duration</strong> instantaneous<br/><strong>Saving Throw</strong> Will negates, Reflex half</p>
<p>The possessing fiend causes a blast of unnatural force to explode from its host's body. This takes the form of a 15-foot cone of acid, fire, cold, or sonic energy - typically mixed with bodily fluids or unnatural expulsions - that deals 1d6 points of damage for every 2 Hit Dice the fiend possesses. The host may make a Will save to negate this effect. Those within the area of the gout can make a Reflex save to take half damage.</p>
<h3 id="rule-bodily_possession-read-memories-7-pp">Read Memories (7 PP)</h3>
<p><strong>Expression</strong> spiritual<br/><strong>Duration</strong> instantaneous or 1 round/HD<br/><strong>Saving Throw</strong> Will negates</p>
<p>A possessing fiend can use this action to learn more about its host's past experiences. Fiends using this action essentially ask a question of a host's mind, forcing the host to make a Will save. If the fiend succeeds, it gains the answer to its question if the host possesses such information. Alternatively, a fiend might merely seek painful memories or vague details pertinent to an event, location, or individual. If the host fails its save, the painful memories stagger him for 1 round per HD of the possessing fiend.</p>
<h3 id="rule-bodily_possession-drain-host-7-pp">Drain Host (7 PP)</h3>
<p><strong>Expression</strong> physical (Perception DC 10)<br/><strong>Duration</strong> instantaneous<br/><strong>Saving Throw</strong> Fortitue negates</p>
<p>The possessing fiend decreases its host's ability scores. If the host fails to resist this ability, it takes 1d4 points of ability damage to an ability score chosen by the fiend. A fiend cannot reduce a single ability score below 1 by using this ability. Typically, a fiend uses this ability to punish unfavorable actions its host takes.</p>
<h3 id="rule-bodily_possession-empower-host-7-pp">Empower Host (7 PP)</h3>
<p><strong>Expression</strong> physical (Perception DC 20)<br/><strong>Duration</strong> 1 minute/HD<br/><strong>Saving Throw</strong> Will negates (harmless)</p>
<p>The possessing fiend enhances its host's prowess by granting a +2 profane bonus to one of its host's ability scores chosen by the fiend. A host can resist this benefit by making a Will save. A possessing fiend may grant this bonus multiple times to either the same or different abilities (additional profane bonuses to the same ability stack when granted by a possessing fiend). Typically, these bonuses also cause some subtle side effect, such as writhing veins rising from one's muscles or a subtly forked tongue. These expressions of fiendish influence have no additional effect and are only noticeable to those who closely examine the host.</p>
<h3 id="rule-bodily_possession-dominate-body-9-pp">Dominate Body (9 PP)</h3>
<p><strong>Expression</strong> spiritual (Sense Motive DC 15)<br/><strong>Duration</strong> 1 round/HD<br/><strong>Saving Throw</strong> Will negates</p>
<p>The possessing fiend takes control over its host's body and actions. If the host fails to resist this ability, the fiend can direct the creature to attack, cast spells, or otherwise perform any other action so desired. Every round, a dominated host may attempt an additional Will save to break the fiend's control. A fiend cannot dominate a creature more than 4 Hit Dice higher than itself. This is a mind-affecting effect.</p>
<h3 id="rule-bodily_possession-erase-memories-9-pp">Erase Memories (9 PP)</h3>
<p><strong>Expression</strong> spiritual (Sense Motive DC 35)<br/><strong>Duration</strong> instantaneous<br/><strong>Saving Throw</strong> Will negates</p>
<p>This powerful ability allows a possessing fiend to selectively alter a host's memories. When using this action, a fiend can manipulate the memories experienced by the host as per the spell <Link to="/spell/modify_memory">modify memory</Link>. The host may make a Will save to avoid this effect. This is a mind-affecting effect.</p>
<h3 id="rule-bodily_possession-make-pact-9-pp">Make Pact (9 PP)</h3>
<p><strong>Expression</strong> spiritual (Sense Motive DC 35)<br/><strong>Duration</strong> see below<br/><strong>Saving Throw</strong> none</p>
<p>A possessing fiend and its host constantly struggle for mastery of the body they both possess. Sometimes, though, these two opposing spirits reach an accord, coming to at least a temporary understanding and degree of shared control. In such cases, a fiend and its host may agree to a pact. Both parties must agree to the terms of a pact, usually taking the form of an arrangement where the host allows the fiend to perform some act without his resistance and the fiend allows the host freedom to undertake some act without its interference. This effect takes the form of two <Link to="/spell/geas_quest">geas/quest</Link> effects, both affecting the same body but under different terms - one stated by the host and one by the fiend. The host and fiend decide in advance in which order their goals will be pursued. As this arrangement must be voluntary, no save is required. This is not a spell effect and cannot be removed by spells that normally affect geas/quest; rather, the fiendish or mortal personality compels the body to a certain stated course. When both parties have completed their goals, the pact ends. Fiends typically attempt to mislead or confuse their host with the terms or weight of their side of a pact, but so long as the host agrees to a pact and the stated goals of the pact remain the same, the host cannot renege due to specifics. A pact does not necessarily represent cooperation between a fiend and its host, however, as some fiends use this action as a contract in order to ensure the host fulfills obligations.</p>
<h3 id="rule-bodily_possession-transfer-spell-like-ability-9-pp">Transfer Spell-Like Ability (9 PP)</h3>
<p><strong>Expression</strong> Physical (Perception DC 30)<br/><strong>Duration</strong> 1 minute/HD<br/><strong>Saving Throw</strong> Will negates (harmless)</p>
<p>The possessing fiend grants its host a taste of its unnatural powers. The fiend imbues its host with the ability to utilize one of its spell-like abilities (chosen by the fiend) for the ability's duration. Utilizing this spell-like ability is a standard action for the host, but is treated as being used by the fiend for the purposes of determining caster level and save DCs. A host might be able to utilize this ability multiple times, but cannot use it more times per day than the fiend itself could. Typically a fiend uses this action as a way to endear the host to its presence or as a way to show the greater power of its fiendish ways.</p>
</>};
const _object_possession = {title: "Object Possession", parent_topics: ["gm_specific_campaigns","occult_rules","possession","possession_misc","possession_actions"], siblings: ["bodily_possession","object_possession","possesed_locations"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_28_the_infernal_syndrome">Pathfinder #28: The Infernal Syndrome pg. 61</Link></p>
<p>A fiend possesses objects either as a way to control them or as a way to infiltrate a body in a clandestine manner. A fiend in possession of an object can perform the following possession actions. Unless otherwise specified, these actions take a full-round action. While possessing an object, a fiend retains its normal senses, and may sense in every direction around the object, but otherwise perceives its surroundings as normal. Often a possessed item exhibits unusual characteristics, such as an unnatural tarnish, an accumulation of greasy film on its surface, or an unnaturally temperature. Even when these effects are not present, a creature can detect something strange about the item by utilizing spells like <Link to="/spell/detect_evil">detect evil</Link>.</p>
<h3 id="rule-object_possession-seed-3-pp">Seed (3 PP)</h3>
<p><strong>Expression</strong> spiritual (Sense Motive DC 30)<br/><strong>Duration</strong> 1 hour<br/><strong>Saving Throw</strong> none</p>
<p>The fiend weakens the will of a creature in contact with the object it possesses. This action causes a creature holding the possessed object to gradually become more vulnerable to the possessing fiend's influence. Upon using this ability, a fiend subtly invades the mind of a creature touching the item it possesses. After 5 minutes, if the same creature has remained in contact with the possessed object, the target takes a -4 penalty on Will saves made to resist attempts by that fiend to possess its body. This effect lasts for 24 hours. The target does not receive a saving throw against this effect.</p>
<h3 id="rule-object_possession-read-user-5-pp">Read User (5 PP)</h3>
<p><strong>Expression</strong> spiritual (Sense Motive DC 15)<br/><strong>Duration</strong> concentration, up to 1 minute/HD<br/><strong>Saving Throw</strong> Will negates</p>
<p>The fiend taps into the mind of a creature in contact with the object it possesses. This action mimics the <Link to="/spell/detect_thoughts">detect thoughts</Link> spell, except that the possessing fiend immediately picks up on the surface thoughts of the creature touching the object. The target may attempt a Will save to block the fiend from its mind. This effect continues for as long as the target remains in contact with the possessed object.</p>
<h3 id="rule-object_possession-animation-minor-7-pp">Animation, Minor (7 PP)</h3>
<p><strong>Expression</strong> physical (automatic)<br/><strong>Duration</strong> 1 round/HD<br/><strong>Saving Throw</strong> none</p>
<p>A fiend possessing an object can cause that object to move at its command. This allows a fiend to cause any object of Large size or smaller to function as an animated object for a number of minutes equal to its Hit Dice. Alternatively, a fiend can merely cause the object to levitate, as per the spell, for the same amount of time.</p>
<h3 id="rule-object_possession-corrupt-user-7-pp">Corrupt User (7 PP)</h3>
<p><strong>Expression</strong> spiritual (Sense Motive DC 30)<br/><strong>Duration</strong> 1 hour/HD or until completed<br/><strong>Saving Throw</strong> Will negates</p>
<p>The fiend influences the actions of a creature in contact with the object it possesses, telepathically implanting a suggestion (as per the spell <Link to="/spell/suggestion">suggestion</Link>). While acting upon this suggestion, the target's alignment is detected as being the same as the fiend's. This does not change the way in which the target acts, merely how alignment-revealing magic perceives him. This is a mind-affecting effect.</p>
<h3 id="rule-object_possession-dispel-enhancement-7-pp">Dispel Enhancement (7 PP)</h3>
<p><strong>Expression</strong> physical<br/><strong>Duration</strong> 1 hour/HD<br/><strong>Saving Throw</strong> none</p>
<p>A fiend possessing a magic item can suppress the imbued magic of the object for a short period. To use this action, the fiend makes a special dispel check (1d20 + the fiend's HD, maximum +10) against the caster level of the magic item. If the fiend succeeds, all magical properties of the item are suppressed for a number of hours equal to the fiend's Hit Dice, or until the fiend chooses to end the effect.</p>
<h3 id="rule-object_possession-reinvigoration-7-pp">Reinvigoration (7 PP)</h3>
<p><strong>Expression</strong> physical (automatic)<br/><strong>Duration</strong> 1 hour/HD<br/><strong>Saving Throw</strong> none</p>
<p>A fiend possessing an object may transpose a portion of its being into a corpse within 10 feet per HD of the object's possessing fiend. This allows the fiend to raise skeletons and zombies as per the spell <Link to="/spell/animate_dead">animate dead</Link>. The possessing fiend's Hit Dice serve as the caster level for the purposes of this effect. This use of animate dead does not require a material component, but the undead created are not permanent, collapsing back to corpses as soon as the ability's duration expires.</p>
<h3 id="rule-object_possession-enhance-9-pp">Enhance (9 PP)</h3>
<p><strong>Expression</strong> physical (Perception DC 20)<br/><strong>Duration</strong> 1 day<br/><strong>Saving Throw</strong> none</p>
<p>A fiend possessing an object can imbue the item with its profane energies to mimic magical enchantment. When a fiend uses this action, it grants the possessed item magical properties equal to 1,000 gp per Hit Die the fiend possesses. This action is typically used on weapons and armor, though a fiend can duplicate other magic items if it possesses an appropriate item. The possessed item does not need to be of masterwork quality for the fiend to bestow these magical properties. For example, a 9-HD erinyes can imbue an item with up to 9,000 gp worth of magical properties. Thus the erinyes can make a normal longsword perform as if it were a +2 longsword or even a +1 <Link to="/magic-enh/vicious">vicious</Link> longsword. Likewise, the same erinyes could possess an amulet and cause it to act as an <Link to="/magic-wondrous/amulet_of_natural_armor_2">amulet of natural armor +2</Link>.</p>
<p>The fiend, and not the user of the object, is in control of the properties of the item, even if it has been forced into possessing the item via a spell like <Link to="/spell/planar_ally">planar ally</Link> or <Link to="/spell/planar_binding">planar binding</Link>. Each use of this ability lasts for 24 hours or until the fiend dismisses the effect. The fiend can remove these properties at will, and when the fiend leaves the item, the magical properties immediately vanish. A fiend cannot cause an item to take on properties other than those typical to its shape (one could not create a +1 vicious helmet, for example).</p>
<h3 id="rule-object_possession-animation-major-13-pp">Animation, Major (13 PP)</h3>
<p><strong>Expression</strong> physical (automatic)<br/><strong>Duration</strong> 1 round/HD<br/><strong>Saving Throw</strong> none</p>
<p>A fiend possessing an object can cause that object and those around it to move at its command. This effect is identical to the <Link to="/spell/animate_objects">animate objects</Link> spell, except that the object the fiend possesses must be included among the items to be animated. The possessing fiend's Hit Dice serve as the caster level for the purposes of this effect. In addition, all animated objects gain a fly speed equal to the fiend's highest movement speed with perfect maneuverability.</p>
</>};
const _possesed_locations = {title: "Possesed Locations", parent_topics: ["gm_specific_campaigns","occult_rules","possession","possession_misc","possession_actions"], siblings: ["bodily_possession","object_possession","possesed_locations"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_28_the_infernal_syndrome">Pathfinder #28: The Infernal Syndrome pg. 63</Link></p>
<p>A fiend can nestle itself within a location in order to taint the place with evil and potentially corrupt or assault a number of targets. Fiends possessing places generally choose locations already welcoming of evil, or mundane sites with little worry for matters otherworldly. A fiend possess a distinct, roughly spherical space based on its Hit Dice. This location might be as simple as a single room in a building, or an entire castle. An imp spy might possess the town's well, while a maralith might influence an entire demon-tainted grove. While in possession of a location, a fiend can perform a small number of actions, usually in the interest of finding a suitable creature for bodily possession. Some fiends possess their lairs as a way to maintain awareness throughout an area and more easily enslave interlopers and minions.</p>
<p>A fiend in possession of a location can perform the following possession actions. Unless otherwise specified, these actions take a full-round action. While possessing a location, a fiend sees everything within the area it possesses, using its own senses. It perceives areas outside of this space as if it were a viewer standing at any edge of its possessed area. Often a possessed area exhibits unusual characteristics, such as strange temperature shifts, eerie noises, or noxious scents. Even when these effects are not present, a creature can detect something strange about the location by utilizing spells like <Link to="/spell/detect_evil">detect evil</Link>.</p>
<h3 id="rule-possesed_locations-seed-area-5-pp">Seed Area (5 PP)</h3>
<p><strong>Expression</strong> spiritual (Sense Motive DC 30)<br/><strong>Duration</strong> 1 hour<br/><strong>Saving Throw</strong> none</p>
<p>A fiend possessing a location weakens the willpower of those within its area, allowing an easier path to bodily possession. Upon using this ability, a fiend subtly invades the mind of a creature within the location it inhabits. After 5 minutes, if the same creature has remained within the possessed area, the target takes a -2 penalty on Will saves made to resist attempts by that fiend to possess its body. This effect last for 24 hours. The target does not receive a saving throw against this effect.</p>
<h3 id="rule-possesed_locations-read-inhabitants-7-pp">Read Inhabitants (7 PP)</h3>
<p><strong>Expression</strong> spiritual (Sense Motive DC 15)<br/><strong>Duration</strong> concentration, up to 1 minute/HD<br/><strong>Saving Throw</strong> Will negates</p>
<p>A fiend can tap into the mind of creatures in the area it possesses. This action mimics the spell <Link to="/spell/detect_thoughts">detect thoughts</Link> with a caster level equal to the fiend's Hit Dice. The targets of this action can attempt Will saves throw to resist this effect.</p>
<h3 id="rule-possesed_locations-dominion-variable-pp">Dominion (Variable PP)</h3>
<p><strong>Expression</strong> physical (Perception DC 20)<br/><strong>Duration</strong> see below<br/><strong>Saving Throw</strong> see below</p>
<p>A fiend possessing a location can manipulate the area it controls to terrifying ends. At will, the fiend can make use of any of the following spell-like abilities to affect creatures within the area it possesses. It can "cast" these spell-like abilities from any physical point within the area of its possessed location.</p>
<p>0 (1 PP)-<Link to="/spell/dancing_lights">dancing lights</Link>, <Link to="/spell/ghost_sound">ghost sound</Link>, <Link to="/spell/open_close">open/close</Link>, <Link to="/spell/prestidigitation">prestidigitation</Link>, <Link to="/spell/whispering_wind">whispering wind</Link></p>
<p>1st (3 PP)-<Link to="/spell/animate_rope">animate rope</Link>, <Link to="/spell/grease">grease</Link>, <Link to="/spell/hold_portal">hold portal</Link>, <Link to="/spell/hypnotism">hypnotism</Link>, <Link to="/spell/obscuring_mist">obscuring mist</Link>, <Link to="/spell/sleep">sleep</Link>, <Link to="/spell/silent_image">silent image</Link>, <Link to="/spell/unseen_servant">unseen servant</Link></p>
<p>2nd (5 PP)-<Link to="/spell/command_undead">command undead</Link>, <Link to="/spell/darkness">darkness</Link>, <Link to="/spell/gust_of_wind">gust of wind</Link>, <Link to="/spell/magic_mouth">magic mouth</Link>, <Link to="/spell/make_whole">make whole</Link>, <Link to="/spell/misdirection">misdirection</Link>, <Link to="/spell/phantom_trap">phantom trap</Link>, <Link to="/spell/shatter">shatter</Link>, <Link to="/spell/sound_burst">sound burst</Link></p>
<p>3rd (7 PP)-<Link to="/spell/dispel_magic">dispel magic</Link>, <Link to="/spell/major_image">major image</Link>, <Link to="/spell/nondetection">nondetection</Link>, <Link to="/spell/suggestion">suggestion</Link></p>
<p>In every case, the caster level for these spell-like abilities equals the possessing fiend's Hit Dice and the cost in possession points equals 1 + the spell's level. None of these effects, regardless of its potential range or space, extends beyond the space of the fiend's possession.</p>
</>};
const _exorcism = {title: "Exorcism", parent_topics: ["gm_specific_campaigns","occult_rules","possession","possession_misc"], siblings: ["possession_feats","possession_actions","exorcism"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_28_the_infernal_syndrome">Pathfinder #28: The Infernal Syndrome pg. 61</Link></p>
<p>Combating possession ranks among the most unusual and dangerous acts heroes might ever have to perform.</p>
<p><strong className="hl">Detecting Possession:</strong> Spells like <Link to="/spell/detect_evil">detect evil</Link> reveal contradictory information when targeting the victim of fiendish influence, revealing multiple auras emanating from one being. Skilled exorcists might also detect a possession. Both Perception (for physical effects) and Sense Motive (for spiritual effects) might reveal a fiend as its possession actions influence an individual, though they do nothing to detect a dormant fiend.</p>
<p><strong className="hl">Ending Possession:</strong> The most direct way to expel a possessing fiend is via <Link to="/spell/banishment">banishment</Link>, <Link to="/spell/dismissal">dismissal</Link>, or <Link to="/spell/dispel_evil">dispel evil</Link> (or <Link to="/spell/dispel_law">dispel law</Link> or <Link to="/spell/dispel_chaos">dispel chaos</Link>, depending on the type of fiend). These spells drive the fiend from its host, but do not return the creature to its home plane, typically causing the monstrosity to manifest in its true form nearby. Many fiends, however, find this kind of exposure counterproductive to their ultimate goals and flee to seek another suitable host, while others might become enraged and attack the meddling exorcist.</p>
<p>A far riskier method of ending a possession involves an invitation by the exorcist to the possessing fiend to leave its current host to take up residence in the exorcist's body (or in the body of a nearby volunteer). An exorcist can force a possessing fiend to leave its current host and attempt the new possession by making a successful Intimidate check to demoralize the fiend. Typically, the exorcist taking such a bold risk hopes to make his own saving throw to resist the possession or protects himself with magic before making this risky attempt. If the fiend fails to possess the exorcist, it can immediately try to repossess its original host, who can attempt to resist this possession by making a Will save. If the fiend fails to return to its host, it manifests in its physical form in a space adjacent to the host, and is typically infuriated.</p>
</>};
const _occult_rituals = {title: "Occult Rituals", parent_topics: ["gm_specific_campaigns","occult_rules"], siblings: ["occult_skill_unlocks","auras","chakras","psychic_duels","possession","occult_rituals","esoteric_traditions","running_an_occult_game"], subtopics: ["casting_occult_rituals","discovering_occult_rituals","creating_occult_rituals"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 208</Link></p>
<p>It's a common belief that only those initiated in the rites and practices of arcane, divine, or psychic magic can cast spells, but this is not strictly true. Hidden within dusty libraries and amid the ramblings of lunatics lie the mysteries of another form of spellcasting - occult ritual magic. These spells are rare, coveted by both those eager to gain their power and those wishing to hide their existence. Most traditional spellcasters consider these rituals dangerous and uncontrollable, something to be avoided or used as a last resort. They fear the power these ceremonies grant to the uninitiated, as the rituals allow those with only a glimmering of understanding the ability to interact with the underlying fabric of magic.</p>
<p>While anyone can attempt to cast occult rituals, the process is fraught with peril. The strange and intricate incantations are often challenging to perform with precision, and failure can weaken the casters or even unleash horrors upon the world. Even when successfully performed, each occult ritual has a price - a backlash that affects at least the caster leading the ritual, and often those assisting in its performance.</p>
<p>Occult rituals, listed <Link to="/main/occult_rituals">here</Link>, are formatted in a similar manner as spells, but also feature a backlash and failure entry.</p>
</>};
const _casting_occult_rituals = {title: "Casting Occult Rituals", parent_topics: ["gm_specific_campaigns","occult_rules","occult_rituals"], siblings: ["casting_occult_rituals","discovering_occult_rituals","creating_occult_rituals"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 208</Link></p>
<p>Before performing an occult ritual, the primary caster must assemble and ready all the components needed as well as any secondary casters. Some occult rituals require the casting to occur at a specific time or place; attempting to cast such rituals at a different time or a substandard location is nearly impossible.</p>
<p>Casting an occult ritual requires at least 10 minutes per ritual level and sometimes as long as 1 hour per ritual level. One of the casters - either the primary caster or a secondary caster who the primary caster specifies - attempts one of the skill checks required by the ritual every 10 minutes of the casting, unless the ritual takes 1 hour per caster level, in which case the caster attempts the check every hour of the ritual. These checks cannot benefit from the aid another action, and the caster attempting the check can't take 10 or take 20, even if she has an ability that would normally allow her to do so when threatened or distracted. Furthermore, because of the specific procedures of ritual casting, mundane equipment that grants bonuses on skill checks can't usually increase the caster's bonus on the checks required by the ritual, unless the GM allows it. Bonuses on the skill checks required for the ritual that are granted by feats, spells (with enough duration to last throughout the casting), traits, and magic items usually apply, at the GM's discretion. The primary caster decides the order in which the various skill checks are attempted, but the GM rolls for the checks and tracks the progress of the ritual casting in secret. Once a ritual casting begins, it must be performed to its completion unless it's disrupted by outside influences or fails.</p>
<p>The primary caster leads a ritual's casting, often with the aid of a number of secondary casters. Secondary casters can be indispensable to the ritual's casting even when they're not taking an active role in ensuring its success. Unless stated otherwise in the ritual description, secondary casters must be within 100 feet and line of effect of the primary caster and each other during the entirety of a ritual's casting.</p>
<p>If a ritual allows the participation of secondary casters, in such cases, the ritual's Components line includes "SC" ("secondary casters") as an entry, immediately followed by a parenthetical that details any maximum or minimum number of secondary casters required to cast the ritual. If a ritual description has no secondary caster entry, that ritual does not permit the assistance of secondary casters. While secondary casters can help by attempting the skill checks the primary caster assigns them, their chief purpose is to aid in the ritual's casting. If a ritual's casting is aided by at least four secondary casters, all casters gain a +1 bonus on all skill checks attempted as part of casting the occult ritual. This bonus increases by 1 for every four secondary casters beyond four (up to a maximum bonus of +5 for 20 or more secondary casters).</p>
<p>To cast an occult ritual, the primary caster must learn the ritual's secrets (see <Link to="/rule/discovering_occult_rituals">Discovering Occult Rituals</Link>). Secondary casters can assist in the casting without fully understanding the intricacies of the ritual.</p>
<p>Since it is possible for those lacking the ability to cast arcane, divine, or psychic spells to cast rituals, variables that would normally rely on caster level (such as range and spell resistance) use the character level or total Hit Dice of the primary caster instead. This is the case even for a ritual caster who has the ability to cast spells. Characters with a caster level gain a +1 bonus on skill checks to cast a ritual, and this bonus increases by 1 for every 5 caster levels they possess (to a maximum of +5 at caster level 20th) as their understanding of the fundamentals of magic grows.</p>
<p>It's difficult to disrupt a ritual. Casting a ritual does not provoke attacks of opportunity, and the casters can pause the ritual to engage in combat or take other actions - though not without consequences. For each round an occult ritual is paused in this way, the DC of all the ritual's subsequent skill checks increases by 1. For practical purposes, a ritual is successfully disrupted when its casting is paused for more than 1 minute or any of the casters are incapacitated, killed, or moved more than 100 feet from (or out of line of effect of) all other casters.</p>
<p>If more than half the skill checks for an occult ritual are successful, the ritual succeeds, and the primary caster (and the secondary casters if specified) experiences the ritual's backlash before the ritual's effect occurs. The DC for a saving throw against a ritual's effects (if applicable) is equal to 10 + the ritual level + the primary caster's Intelligence, Wisdom, or Charisma bonus (whichever is highest).</p>
<p>If the casters fail half of the skill checks required for an occult ritual (rounded down), the ritual ends, the casters also experience the ritual's backlash, and the failure consequences occur. The consequences of failure are detailed in each ritual's description.</p>
<h3 id="rule-casting_occult_rituals-tapping-into-ley-lines">Tapping into Ley Lines</h3>
<p>A primary ritual caster with the ability to cast spells or use spell-like abilities can tap into a <Link to="/rule/ley_lines">ley line</Link> within 30 feet by performing a simple ritual that takes 1 hour per 2 caster levels of the ley line. At the end of the ritual, the primary caster must succeed at a Spellcraft check (DC = 15 + the ley line's caster level) to attune herself with the ley line. If she fails, she can try the attunement ritual anew. On a successful check, the primary caster and any secondary casters gain a +1 bonus on skill checks to cast an occult ritual using the ley line, provided they remain within 30 feet of the ley line. This bonus increases by 1 for every 5 caster levels of the ley line, to a maximum of +5.</p>
<p>This form of attunement can be broken in the standard ways described in <Link to="/rule/using_ley_lines">Using Ley Lines</Link>.</p>
</>};
const _discovering_occult_rituals = {title: "Discovering Occult Rituals", parent_topics: ["gm_specific_campaigns","occult_rules","occult_rituals"], siblings: ["casting_occult_rituals","discovering_occult_rituals","creating_occult_rituals"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 209</Link></p>
<p>The mysteries of occult rituals are jealously guarded secrets, often painstakingly obscured by a ritual's originators or those who stumbled upon the obscure formulae detailing it. The particulars of casting occult rituals are hidden within coded tomes, concealed in puzzles, or referenced only through allusions woven into esoteric tales. Recovering the casting method of an occult ritual can be an adventure within itself, something revealed by hallucinatory visions, coerced from an occult practitioner, or passed on by a true initiate hovering at death's door and wishing for his genius to live beyond his mortal existence.</p>
<p>If an occult ritual is taught or its secrets are explained directly, it takes at least 1 day per ritual level to learn the method of its casting. Learning a ritual from hidden clues or from scratch takes a week or a month per ritual level (GM's discretion). At the end of this period of study and contemplation, the person attempting to learn the ritual must succeed at an Intelligence check (DC = 15 + the ritual level if learning from clues or a coerced teacher, or DC = 10 + the ritual level if learning from an instructor eager to teach). Failing the check means the secrets of the ritual elude the learner's understanding, though she can start the process anew at the same rate of potential discovery.</p>
</>};
const _creating_occult_rituals = {title: "Creating Occult Rituals", parent_topics: ["gm_specific_campaigns","occult_rules","occult_rituals"], siblings: ["casting_occult_rituals","discovering_occult_rituals","creating_occult_rituals"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 214</Link></p>
<p>While the occult rituals in this section give you numerous options with which to dabble, eventually you may want to create your own rituals. Creating a new occult ritual has five main steps.</p>
<p><strong className="hl">Step 1-Concept:</strong> As when creating any rules component, you should begin by deciding what you want the ritual to do. Rituals are often an interesting way to introduce unusually powerful magical effects into your game in a limited or controlled way. They can also introduce these effects in a manner that is more specific than similar higher-level spell effects. The ritual's purpose should influence subsequent design decisions.</p>
<p><strong className="hl">Step 2-Determine School:</strong> Once you have the concept for the ritual, next determine which school best suits the ritual's effect, just as if it were any other type of spell. If you're unsure which school is most appropriate, compare the effects with existing spells. If a ritual could have one or more possible schools, determine which is the most relevant school and use that one.</p>
<p><strong className="hl">Step 3-Determine Ritual Level:</strong> This step involves setting the level of the occult ritual. Occult rituals are always equivalent to at least 4th-level spells. Often the best way to determine a ritual level is to compare it to other spells in the game, or to use the guidelines for <Link to="/rule/research_and_designing_spells">designing new spells</Link>. The ritual level determines how many total successes are required to cast the ritual, the DCs for the skill checks needed to complete the ritual, the save DC for the ritual's effect (if applicable), and indirectly determines the ritual's range and duration.</p>
<p>The number of skill checks the ritual requires is equal to the level of the ritual, and the base DC of the skill checks needed to complete a ritual is 28 + the ritual level. Any saving throw DCs of the ritual (including any DC to remove a temporary negative level gained by the backlash or by failing the ritual) are equal to 10 + the ritual level + the primary caster's Intelligence, Wisdom, or Charisma bonus (whichever is highest).</p>
<p>In general, the spell a ritual is based on will give guidelines on the range, targets, area, effect, duration, and any saving throw or spell resistance that applies. If you are unsure or are creating a new effect for your ritual, you can use the suggestions in the Ritual Benchmarks Based on School below.</p>
<p>While the ritual's school or the spell it's based on gives you a starting point for the ritual's details, you may want to deviate from those examples when determining the particulars. Doing so to a greater or lesser degree can and should affect the skill check DCs for casting a ritual, and can also affect the casting time of a ritual. Table 5-1: Modifying Occult Rituals gives some examples of how to modify DCs and casting times.</p>
<h3 id="rule-creating_occult_rituals-table-5-1-modifying-occult-rituals">Table 5-1: Modifying Occult Rituals</h3>
<ScrollContainer id="rule-creating_occult_rituals--table-0"><table>
<thead>
<tr>
<th>Casting Time</th>
<th>Check DC Modifier or Modification</th>
</tr>
</thead>
<tbody><tr>
<td>Casting time is restricted (such as "only during a full moon")</td>
<td>-4</td>
</tr>
<tr>
<td>Casting time is severely restricted (such as "only during a lunar eclipse")</td>
<td>-8</td>
</tr>
</tbody></table></ScrollContainer>
<h4 id="rule-creating_occult_rituals-modifying-by-focuscomponents">Modifying by Focus/Components</h4>
<ScrollContainer id="rule-creating_occult_rituals--table-1"><table>
<thead>
<tr>
<th>Focus and Material Components</th>
<th>Check DC Modifier or Modification</th>
</tr>
</thead>
<tbody><tr>
<td>Expensive material component (500 gp)</td>
<td>-1</td>
</tr>
<tr>
<td>Expensive material component (5,000 gp)</td>
<td>-2</td>
</tr>
<tr>
<td>Expensive material component (25,000 gp)</td>
<td>-4</td>
</tr>
<tr>
<td>Expensive focus (5,000 gp)</td>
<td>-1</td>
</tr>
<tr>
<td>Expensive focus (25,000 gp)</td>
<td>-2</td>
</tr>
</tbody></table></ScrollContainer>
<h4 id="rule-creating_occult_rituals-modifying-by-range">Modifying by Range</h4>
<ScrollContainer id="rule-creating_occult_rituals--table-2"><table>
<thead>
<tr>
<th>Range</th>
<th>Check DC Modifier or Modification</th>
</tr>
</thead>
<tbody><tr>
<td>Greater range than normal</td>
<td>+1 to +6</td>
</tr>
<tr>
<td>Shorter range than normal</td>
<td>-1 to -4</td>
</tr>
</tbody></table></ScrollContainer>
<h4 id="rule-creating_occult_rituals-modifying-by-area">Modifying by Area</h4>
<ScrollContainer id="rule-creating_occult_rituals--table-3"><table>
<thead>
<tr>
<th>Area</th>
<th>Check DC Modifier or Modification</th>
</tr>
</thead>
<tbody><tr>
<td>Larger area than normal</td>
<td>+1 to +6</td>
</tr>
<tr>
<td>Smaller area than normal</td>
<td>-1 to -4</td>
</tr>
</tbody></table></ScrollContainer>
<h4 id="rule-creating_occult_rituals-modifying-by-target">Modifying by Target</h4>
<ScrollContainer id="rule-creating_occult_rituals--table-4"><table>
<thead>
<tr>
<th>Target</th>
<th>Check DC Modifier or Modification</th>
</tr>
</thead>
<tbody><tr>
<td>Unwilling target must be helpless</td>
<td>-2</td>
</tr>
<tr>
<td>Limited targets (by HD, creature type, and so on)</td>
<td>-3</td>
</tr>
<tr>
<td>Single target to multiple targets</td>
<td>+4</td>
</tr>
</tbody></table></ScrollContainer>
<h4 id="rule-creating_occult_rituals-modifying-by-duration">Modifying by Duration</h4>
<ScrollContainer id="rule-creating_occult_rituals--table-5"><table>
<thead>
<tr>
<th>Duration</th>
<th>Check DC Modifier or Modification</th>
</tr>
</thead>
<tbody><tr>
<td>Greater duration than normal</td>
<td>+1 to +6</td>
</tr>
<tr>
<td>Shorter duration than normal</td>
<td>-1 to -4</td>
</tr>
<tr>
<td>One year or more</td>
<td>casting time in increments of 1 hour/level instead of 10 minutes/level</td>
</tr>
</tbody></table></ScrollContainer>
<h4 id="rule-creating_occult_rituals-modifying-by-backlash">Modifying by Backlash</h4>
<ScrollContainer id="rule-creating_occult_rituals--table-6"><table>
<thead>
<tr>
<th>Backlash</th>
<th>Check DC Modifier or Modification</th>
</tr>
</thead>
<tbody><tr>
<td>Per 2d6 points of damage</td>
<td>-1</td>
</tr>
<tr>
<td>Caster is exhausted</td>
<td>-2</td>
</tr>
<tr>
<td>Per temporary negative level caster gains</td>
<td>-2</td>
</tr>
<tr>
<td>Per permanent negative level caster gains</td>
<td>-4</td>
</tr>
<tr>
<td>Caster reduced to -1 hp</td>
<td>-3</td>
</tr>
<tr>
<td>Caster infected with disease</td>
<td>-4</td>
</tr>
<tr>
<td>Caster suffers curse effects</td>
<td>-4</td>
</tr>
<tr>
<td>Backlash affects secondary casters too</td>
<td>-1</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Step 4-Determine Ritual's Skills:</strong> This step involves determining the skills required to cast the ritual. The chosen skills should have a connection to the concept or the effect of the ritual. While a number of Knowledge skills are obvious choices (especially Knowledge [arcana] and Knowledge [religion]), more interesting rituals may feature other skills. Often these other skills allow secondary casters to play a more active role in the casting or make the ritual more interesting and challenging. In all cases, you should require checks from two or more skills.</p>
<p><strong className="hl">Step 5-Create Backlash and Failure Effects:</strong> The last step is to figure out the effects of the ritual's backlash and what happens to the casters if the ritual fails. Like modifying the base spell or deviating from the baselines of the ritual's school, the backlash and its severity can affect the DCs of the skill checks made to cast the ritual (see Table 5-1: Modifying Occult Rituals). Backlashes should be minor debilitations rather than severe punishments, and you need to decide whether they affect just the primary caster or all the casters.</p>
<p>Failure effects should be much more severe and should not invalidate or overlap with the effects of the backlash (since the backlash occurs whether or not the ritual succeeds). They should always represent the cost associated with the casting of uncontrolled magic, and they can be very debilitating to the casters, and could even harm those not associated with the ritual (especially for high-level rituals).</p>
<h3 id="rule-creating_occult_rituals-occult-ritual-benchmarks-by-school">Occult Ritual Benchmarks by School</h3>
<p>Each summary below specifies the range, target, duration, and other aspects of an occult ritual associated with a particular school.</p>
<p><strong className="hl">Abjuration:</strong> Range close; Target one or more creatures, no two of which can be more than 30 ft. apart; Duration minutes; Saving Throw Will negates; SR yes.</p>
<p><strong className="hl">Conjuration:</strong> Range close; Target one creature; Duration hours (instantaneous for teleportation subschool); Saving Throw Will negates (harmless); SR yes (harmless).</p>
<p><strong className="hl">Divination:</strong> Range long; Target personal; Duration minutes; Saving Throw none; SR no.</p>
<p><strong className="hl">Enchantment:</strong> Range close; Target one living creature; Duration minutes; Saving Throw Will negates; SR yes.</p>
<p><strong className="hl">Evocation:</strong> Range medium; Area 5-ft.-wide bolt or 20-ft.-radius burst; Duration instantaneous; Saving Throw Reflex half; SR yes.</p>
<p><strong className="hl">Illusion:</strong> Range touch; Target one living creature or 20 cu. ft. of matter; Duration minutes; Saving Throw Will disbelief; SR no.</p>
<p><strong className="hl">Necromancy:</strong> Range close; Target one or more creatures or corpses; Duration instantaneous; Saving Throw none; SR no.</p>
<p><strong className="hl">Transmutation:</strong> Range medium; Target one creature or 20 cu. ft. of matter; Duration rounds; Saving Throw Fortitude half (or harmless); SR yes.</p>
</>};
const _esoteric_traditions = {title: "Esoteric Traditions", parent_topics: ["gm_specific_campaigns","occult_rules"], siblings: ["occult_skill_unlocks","auras","chakras","psychic_duels","possession","occult_rituals","esoteric_traditions","running_an_occult_game"], subtopics: ["astrology","the_harrow","moritification","numerology","spiritualism"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 35</Link></p>
<p>Occult practices have always been popular on Golarion. For those without magical power themselves, they offer a glimpse into the world of the esoteric, and sometimes grant abilities that reveal the more mundane spellcasters of ordinary religions or arcane schools. For those already versed in the ways of magic, the occult presents a chance to uncover new ground and rise above one's peers. For some people, it's not even the forbidden information available in a secret society that's appealing, but rather the membership itself: a chance for an outsider to feel like a part of something larger, for a lower-caste person to rise above the station normally proscribed by society, or for a political schemer to gain both powerful connections and an advantage over those who would otherwise outrank her.</p>
<p>Secret societies and hidden cults pass down their carefully guarded practices to new members, and these esoteric traditions can form myriad combinations of unpredictable and potent effects. Whether divining by the movement of heavenly bodies, mutilating one's own body to draw power, or teasing out the hidden meanings behind numbers, those who understand these practices can access incredible (and often dangerous) power.</p>
<p>The following sections explore several of Golarion's esoteric traditions, featuring overviews, histories, beliefs and tenets, centers of practice, variations, new mechanics, and rules subsystems for each. It is recommended that Game Masters not introduce too many of these new rules into a single campaign, or otherwise make them so prevalent that they lose their mystery and occult nature. Rather, allow the PCs to seek out the secrets like those of astrology, numerology, and the harrow through adventure and research, or make mortification a key tenet of a powerful cult the heroes must defeat. Using these systems can help increase the impact of the stories with which they are interwoven, and exploring their secrets can provide great seeds for entire multi-level campaigns.</p>
</>};
const _astrology = {title: "Astrology", parent_topics: ["gm_specific_campaigns","occult_rules","esoteric_traditions"], siblings: ["astrology","the_harrow","moritification","numerology","spiritualism"], subtopics: ["the_cosmic_caravan","astrology_on_golarion","astrological_events"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 36</Link></p>
<p>The practice of astrology on Golarion hinges on the core belief that the movements of the cosmos directly affect the lives of Golarion's inhabitants. Though the movements of celestial bodies seem far removed from the quotidian lives of the average creature, and a causal relationship has never been proven, many of the most influential events in Golarion's history coincided with alignments and conjunctions of far-off forces.</p>
<p>Astrology provides a system by which one can extrapolate meaning from the patterns that govern the movement of celestial bodies through the study of constellations and drawing conclusions about terrestrial events based on those observations. This process requires both observation and subjective interpretation, making it simultaneously an art, a magical practice, and a science. The interpretive component sets it apart from constructive practices that produce replicable results, like alchemy, spellcraft, or engineering, leading many arcanists to find it disreputable. At the same time, however, funding for astrology is often more easy to come by among the wealthy and powerful than money for pure astronomy, and many savvy astronomers have found it prudent to train in both.</p>
<h3 id="rule-astrology-glossary-of-astrological-terms">Glossary of Astrological Terms</h3>
<p><strong className="hl">Apparent Retrograde:</strong> The apparent brief reversal of a celestial body's direction of motion as seen from Golarion.</p>
<p><strong className="hl">Appulse:</strong> A very close approach of two celestial bodies so that they are in conjunction but no eclipse or occultation occurs.</p>
<p><strong className="hl">Ascendant:</strong> A celestial body that appears to be ascending on the eastern horizon.</p>
<p><strong className="hl">Conjunction:</strong> Two or more celestial bodies aligned in a straight line with Golarion.</p>
<p><strong className="hl">[Planet] in [Constellation]:</strong> When a given planet appears to an observer on Golarion to be in a portion of the sky ruled by a given sign, that planet is said to be in the associated constellation.</p>
<p><strong className="hl">Sun Sign:</strong> This constellation in which the sun appeared at a given point in time. Since the sun is between this constellation and Golarion, its light obscures the constellation from view, preventing observers from seeing the dominant sign during the month during which it most strongly influences Golarion.</p>
</>};
const _the_cosmic_caravan = {title: "The Cosmic Caravan", parent_topics: ["gm_specific_campaigns","occult_rules","esoteric_traditions","astrology"], siblings: ["the_cosmic_caravan","astrology_on_golarion","astrological_events"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 36</Link></p>
<p>Astrology on Golarion has many traditions, but the most common around the Inner Sea is that of the Cosmic Caravan. This system partitions Golarion's night sky into 13 equal longitudinal sections, each containing a distinct constellation. While the movement of these constellations is consistent, year after year, astrologers find meaning in the positions of the planets of Golarion's system, its sun, and other celestial bodies like comets in relation to these 13 signs. Skilled astrologers are able both to foretell events and to determine the prevailing influences on an individual's personality based on the time and location of her birth and relationships between the myriad orbiting bodies in the heavens above.</p>
<p>Little is known about the origins of the Cosmic Caravan, though many scholars believe its study predates the Age of Enthronement. A common theory holds that it was originally an Azlanti methodology, and that both the Varisians who commonly practice it today and the Lirgeni who followed a similar system were working from the same ancient source material.</p>
<p>While beliefin the Cosmic Caravan is extremely popular, it's far from universal. The Dragon Empires zodiac, for instance, features 12 signs, and the sign which is important and influential in a given year, month, day, or even hour is determined not by the position of the stars, but by a complex cycle closely tied to the phases of the moon. Each sign in the Dragon Empires zodiac is drawn from ancient Tian legend, and the constellations are said to be guarded by the imperial dragons who give the Dragon Empires their name.</p>
<h3 id="rule-the_cosmic_caravan-using-the-cosmic-caravan">Using the Cosmic Caravan</h3>
<p>In Avistan and Garund, the Cosmic Caravan is the astrological tool of choice for most diviners. Though some cultures grant the Caravan religious connotations, it is an inherently secular system, available for use by characters of all cultures, alignments, and faiths. A list of the Caravan's signs <Link to="/main/traits_cosmic">can be found here</Link>, along with matching traits for characters born under that sign. Players who know their characters' birth dates could incorporate the appropriate traits. To randomly determine a birthdate, roll d% and use the table below.</p>
<ScrollContainer id="rule-the_cosmic_caravan--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Sign</th>
</tr>
</thead>
<tbody><tr>
<td>1-7</td>
<td className="ion-activatable"><Link to="/trait/the_thrush">The Thrush<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>8-14</td>
<td className="ion-activatable"><Link to="/trait/the_lantern_bearer">The Lantern Bearer<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>15-21</td>
<td className="ion-activatable"><Link to="/trait/the_newlyweds">The Newlyweds<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>22-28</td>
<td className="ion-activatable"><Link to="/trait/the_bridge">The Bridge<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>29-35</td>
<td className="ion-activatable"><Link to="/trait/the_daughter">The Daughter<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>36-42</td>
<td className="ion-activatable"><Link to="/trait/the_rider">The Rider<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>43-49</td>
<td className="ion-activatable"><Link to="/trait/the_patriarch">The Patriarch<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>50-56</td>
<td className="ion-activatable"><Link to="/trait/the_wagon">The Wagon<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>57-63</td>
<td className="ion-activatable"><Link to="/trait/the_pack">The Pack<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>64-70</td>
<td className="ion-activatable"><Link to="/trait/the_mother">The Mother<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>71-77</td>
<td className="ion-activatable"><Link to="/trait/the_star_gazer">The Star Gazer<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>78-84</td>
<td className="ion-activatable"><Link to="/trait/the_stranger">The Stranger<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>85-91</td>
<td className="ion-activatable"><Link to="/trait/the_follower">The Follower<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>92-100</td>
<td>Cusp <sup><InnerLink showBacklink="backlink-rule-the_cosmic_caravan-ref-C-1" id="rule-the_cosmic_caravan-ref-C-1" data-hash-target to="rule-the_cosmic_caravan-C">1</InnerLink></sup></td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-the_cosmic_caravan-label">Footnotes</h3>
<ol>
<li id="rule-the_cosmic_caravan-C">
<p>You were born right on the dividing line between two consecutive signs, providing you with a choice of which sign to adopt. Reroll d%; then choose between the resulting sign, or either of the signs adjacent to it. <InnerLink id="backlink-rule-the_cosmic_caravan-ref-C-1" data-hash-target to="rule-the_cosmic_caravan-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _astrology_on_golarion = {title: "Astrology on Golarion", parent_topics: ["gm_specific_campaigns","occult_rules","esoteric_traditions","astrology"], siblings: ["the_cosmic_caravan","astrology_on_golarion","astrological_events"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 38</Link></p>
<p>In some cultures, celestial divination is an esoteric discipline, while for others it's a major cultural institution. The following are several cultures that hold astrology as a foundational practice.</p>
<p><strong className="hl">Desnans:</strong> Having been credited with the creation of the heavens, and residing among the stars of the Material Plane, the goddess <Link to="/faith/desna">Desna</Link> is a fitting patron of astrologers. Her faithful are often conscious of their Caravan signs, and the few permanent temples to Desna often double as observatories. The Varisian people are notably committed to Desna, and they practice several types of divination, including astrology and harrow readings.</p>
<p><strong className="hl">Blink Dogs:</strong> Astrology is a cultural foundation of these good-natured magical beasts, and <Link to="/monster/blink_dog">blink dog</Link> packs often take celestial omens into account when making decisions. Each pack has a sage, who councils the alpha of the group on the meaning of such omens, and also preserves the astrological tradition of that race.</p>
<p><strong className="hl">Lunar Nagas:</strong> These creatures are masters of astrology, and their entire culture revolves around it. <Link to="/monster/lunar_naga">Lunar nagas</Link> have several zodiacs, which they use to create tome upon tome of celestial calculations. Though they do not commonly share their findings with humanoids, they are commonly regarded as some of the most skillful astrologers on Golarion.</p>
<p><strong className="hl">Osirion:</strong> Ancient Osirion's obsession with other worlds, particularly the planet Aucturn, led to a great deal of astrology following the reign of the Four Pharaohs. Rather than a single unified practice, this resulted in a renaissance of countless original and sometimes bizarre systems, almost all of which have since died out, but which continue to puzzle scholars.</p>
<p><strong className="hl">Qadira:</strong> The rulers of Qadira make extensive use of astrologers in their noble courts. That nation's ruler, Satrap Xerbystes II, currently employs several court astrologers to advise him on matters of state. Chief among these is the Keleshite diviner Greogorik Taraspi, who in addition to his advisory role is an astronomer of great renown, and has publicly admitted to having achieved contact and communication with races from other planets.</p>
<p><strong className="hl">Rahadoum:</strong> One might expect Rahadoum to sneer at all divination, seeing in astrology and astrologers a dangerous similarity to priests and religion, and in some cases this is true. Yet the ability to potentially divine the future using scientific practices - and without indenturing oneself to any divine being - has significant appeal, and Rahadoum houses a healthy astrological community.</p>
<p><strong className="hl">Saoc Brethren:</strong> The Saoc Brethren was a cadre of astrologers who ruled the fallen nation of Lirgen. Having mastered the art of celestial divination, the Brethren used prophecy extensively in making state decisions. However, their foresight proved imperfect, as they failed to predict the formation of the Eye of Abendego and its subsequent destruction of their homeland.</p>
</>};
const _astrological_events = {title: "Astrological Events", parent_topics: ["gm_specific_campaigns","occult_rules","esoteric_traditions","astrology"], siblings: ["the_cosmic_caravan","astrology_on_golarion","astrological_events"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 38</Link></p>
<p>For those able to divine the influence of celestial events, the terrestrial world is a constantly shifting field of energies that appear arbitrary to the uninitiated. Depending on the ever-changing positions of the heavens, certain actions become auspicious, while others become needlessly difficult.</p>
<p>The table below lists a series of astrological events that knowledgeable characters can exploit to alter the way in which they interact with the world. Characters can detect an astrological event by succeeding at a single Knowledge (arcana), Knowledge (nature), or Knowledge (planes) skill check made up to once per day, representing their consultation of star charts or observation of the night sky. The DCs for these checks vary from event to event as noted in the Astrological Events table. Using a star chart or astrological reference (treat as a masterwork tool that grants a bonus to one of the applicable Knowledge checks) grants a +2 bonus on this check. Celestial events that last longer than i day provide their benefits for the event's entire duration, and can be stacked atop additional effects if the character makes the requisite check the following day. If a character fails her skill check, she must wait 24 hours before reattempting the check to determine the next day's astrological events.</p>
<p>GMs can choose astrological events based on their thematic ties to events in their campaigns, or by making a d% roll. The following table provides some sample events; GMs are encouraged to invent their own based on the associations of the planets and the Cosmic Caravan.</p>
<h3 id="rule-astrological_events-astrological-events">Astrological Events</h3>
<ScrollContainer id="rule-astrological_events--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Event</th>
<th>Effect</th>
<th>Duration</th>
<th>Knowledge DC</th>
</tr>
</thead>
<tbody><tr>
<td>1-5</td>
<td>Akiton Ascendant</td>
<td>Spells you cast that deal damage and require an attack roll to hit deal 2 additional points of damage.</td>
<td>2 hours</td>
<td>14</td>
</tr>
<tr>
<td>6-10</td>
<td>Liavara Ascendant</td>
<td>You gain a + 2 bonus on caster level checks when casting mind-affecting spells.</td>
<td>2 hours</td>
<td>14</td>
</tr>
<tr>
<td>11-15</td>
<td>Castrovel Ascendant</td>
<td>You gain a + 2 bonus on caster level checks when casting mind-affecting spells.</td>
<td>2 hours</td>
<td>14</td>
</tr>
<tr>
<td>16-20</td>
<td>Aballon Ascendant</td>
<td>You gain a +2 bonus on initiative checks.</td>
<td>2 hours</td>
<td>14</td>
</tr>
<tr>
<td>21-25</td>
<td>Bretheda Ascendant</td>
<td>You cast <em>cure</em> spells at + 1 caster level but <em>cure</em> spells targeting you are cast at -1 caster level.</td>
<td>2 hours</td>
<td>14</td>
</tr>
<tr>
<td>26-30</td>
<td>Aucturn Ascendant</td>
<td>You cast illusion spells at +1 caster level, but illusions spells targeting you are also cast at +1 caster level.</td>
<td>2 hours</td>
<td>14</td>
</tr>
<tr>
<td>31-35</td>
<td>Verces Ascendant</td>
<td>You are subject to the effects of <Link to="/spell/nondetection">nondetection</Link> for this period.</td>
<td>2 hours</td>
<td>14</td>
</tr>
<tr>
<td>36-40</td>
<td>Apostae Ascendant</td>
<td>You gain a + 2 bonus on Stealth checks.</td>
<td>2 hours</td>
<td>14</td>
</tr>
<tr>
<td>41-45</td>
<td>Triaxus Ascendant</td>
<td>You gain a + 2 bonus on Survival checks.</td>
<td>2 hours</td>
<td>14</td>
</tr>
<tr>
<td>46-50</td>
<td>Eox Ascendant</td>
<td>You gain a + 2 bonus on the next Knowledge check you attempt.</td>
<td>2 hours</td>
<td>14</td>
</tr>
<tr>
<td>51-54</td>
<td>Triaxus in The Wagon</td>
<td>Your speed increases by 5 feet but you cannot move twice in a round or take a charge action.</td>
<td>24 hours</td>
<td>16</td>
</tr>
<tr>
<td>55-58</td>
<td>Verces in The Lantern Bearer</td>
<td>You cast spells with the shadow descriptor at +1 caster level, but you must succeed at a caster level check equal to 15 + the spell level in order to cast any spell with the light or darkness descriptors.</td>
<td>24 hours</td>
<td>16</td>
</tr>
<tr>
<td>59-62</td>
<td>Eox in The Follower</td>
<td>You cast spells with the death descriptor at + 1 caster level but take a -2 penalty on saving throws against death effects.</td>
<td>24 hours</td>
<td>16</td>
</tr>
<tr>
<td>63-66</td>
<td>Meteor Shower</td>
<td>You attempt concentration checks at a -2 penalty. The DC for enemies you threaten for the purpose of casting defensively increases by 2.</td>
<td>48 hours</td>
<td>16</td>
</tr>
<tr>
<td>67-70</td>
<td>Conjunction of Bretheda and Aucturn</td>
<td>You gain a +2 bonus on Heal checks but take a -2 penalty on Constitution checks to stabilize.</td>
<td>1 week</td>
<td>14</td>
</tr>
<tr>
<td>71-74</td>
<td>Conjunction of Liavara and Triaxus</td>
<td>You gain a +2 bonus on Perception checks but take a -2 penalty on Acrobatics checks.</td>
<td>1 week</td>
<td>14</td>
</tr>
<tr>
<td>75-78</td>
<td>Conjunction of Castrovel and Eox</td>
<td>You gain a +2 bonus on Survival checks but take a -2 penalty on Knowledge (nature) checks.</td>
<td>1 week</td>
<td>14</td>
</tr>
<tr>
<td>79-82</td>
<td>Appulse of Akiton and Apostae</td>
<td>You take a -2 penalty on Diplomacy checks but the DC of all Intimidate skill checks attempted against you increases by 2.</td>
<td>1 week</td>
<td>14</td>
</tr>
<tr>
<td>83-86</td>
<td>Appulse of Liavara and Bretheda</td>
<td>You gain a +2 bonus on Stealth checks but take a -2 penalty on Perception checks.</td>
<td>1 week</td>
<td>14</td>
</tr>
<tr>
<td>87-90</td>
<td>Appulse of Verces and Liavara</td>
<td>You gain a +2 bonus on Sense Motive checks but take a -2 penalty on Bluff checks.</td>
<td>1 week</td>
<td>14</td>
</tr>
<tr>
<td>91-93</td>
<td>Akiton in Apparent Retrograde</td>
<td>You gain a +1 bonus on attack rolls but take a -2 penalty to your AC.</td>
<td>48 hours</td>
<td>18</td>
</tr>
<tr>
<td>94-95</td>
<td>Aucturn in Apparent Retrograde</td>
<td>You take a -2 penalty on Wisdom checks and Wisdom-based skill checks but gain a +2 bonus on Will saving throws.</td>
<td>48 hours</td>
<td>18</td>
</tr>
<tr>
<td>96-97</td>
<td>Eox in Apparent Retrograde</td>
<td>You take a -1 penalty on attack rolls against undead targets but gain a +2 bonus to AC against attacks by undead.</td>
<td>48 hours</td>
<td>18</td>
</tr>
<tr>
<td>98-99</td>
<td>Comet Passes Near Golarion</td>
<td>The DC of all spells and spell-like abilities you cast increases by 1 but you take a -1 penalty on all saving throws.</td>
<td>24 hours</td>
<td>20</td>
</tr>
<tr>
<td>100</td>
<td>Entire Solar System in Alignment</td>
<td>You gain spell resistance equal to 10 + your ranks in the Knowledge skill used to identify and exploit this cosmic event. You cannot lower this spell resistance.</td>
<td>1 hour</td>
<td>20</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _the_harrow = {title: "The Harrow", parent_topics: ["gm_specific_campaigns","occult_rules","esoteric_traditions"], siblings: ["astrology","the_harrow","moritification","numerology","spiritualism"], subtopics: ["the_harrow_on_golarion","harrowing_plot_twists"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 40</Link></p>
<p>The modern <Link to="/eq-misc/harrow_deck">harrow deck</Link> is the culmination of millennia of storytelling, travel, arcane research, and shared tragedy. Though many wanderers and gamblers claim to read the cards, a rare minority of true harrowers can tap into the weave of destiny through the deck to channel and enhance their own magic.</p>
<p>At a mundane level, the harrow is used to play games, divine the future, and separate fools from their coin. Each card is a beautiful work of art, handcrafted and passed down through generations of mystics. To a trained harrower, each card is steeped in symbolism and meaning. In the distant past, every harrower crafted her own unique deck, but over time the standard deck of 54 cards evolved and is now accepted by all but the most exotic mystic or foolhardy dabbler.</p>
<p>The 54 cards of the harrow are divided into six suits and nine alignments, with each suit featuring a single card per alignment. The alignments hint at a card's meaning: positive or negative and past, present, or future. The suits - hammers, keys, shields, books, stars, and crowns - roughly correspond to the concepts central to a caravan's life: The suit of hammers concerns matters of warfare, hunting, and reputation. The suit of keys evokes both larceny and things closely guarded, like children or dreams. The suit of shields reflects home, community, health, and things kept at hand. Books encompass learning, history, and managing resources or wealth. The suit of stars concerns esoteric and intangible matters such as tradition, the gods, and folklore. Lastly, the suit of crowns delves into those things that rule every mortal: romance, family, and one's place in the world, along with mundane rulership.</p>
<p>A harrow reading is a somber affair. Because a harrowing is subjective and personal, most practitioners learn to read their subjects as much as the cards to inform their prophecy. The subject (or subjects) states a single question clearly, and the harrower withdraws the nine cards of the suit associated with that concern and shuffles them. Each participant draws one of these cards to learn his role in events to come (the "role card"). The entire harrow deck is then reshuffled. Nine cards are drawn and typically laid out in a three-by-three array. Cards in the left column represent the past, while cards in the right reveal the future. Each card's alignment interacts with its placement in the array, and its meaning might be more or less important, or even inverted, based on its position. Finally, any role cards that reappear in the array mean that the indicated participant has a vital role to play, and provides some clue to his purpose.</p>
</>};
const _the_harrow_on_golarion = {title: "The Harrow on Golarion", parent_topics: ["gm_specific_campaigns","occult_rules","esoteric_traditions","the_harrow"], siblings: ["the_harrow_on_golarion","harrowing_plot_twists"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 40</Link></p>
<p>The <Link to="/eq-misc/harrow_deck">harrow deck</Link> is most famously associated with the Varisian wandering clans of northwestern Avistan. The Azlanti colonists who founded Thassilon brought playing cards to the region, which their Varisian subjects altered by adorning them with iconography from their own folklore. In the Age of Legends, hundreds of unique cards existed, but with Earthfall, most of the Varisians' lore was lost. The Imlios family dedicated itself to gathering whatever hereditary knowledge they could, but over the centuries, the family dwindled to a single woman: Sonnorae. Sonnorae used Thassilonian magic and her family's harrow deck to create a pocket dimension forged from dreams, where her library of Varisian lore would be safe. Most Varisians now use Sonnorae's Deck of Harrowed Tales as the archetype for their own harrow decks, hoping to sympathetically tap into the <Link to="/rule/harrowed_realm">Harrowed Realm's</Link> power and vast store of knowledge.</p>
<p>Far to the south, wealthy traders brought the harrow to Absalom. Initially, the cards were little more than an amusement, but after the death of Aroden, many in Absalom began to take them seriously. Most notably, Arodenites lay out a circular array known as the All-Seeing Eye instead of the standard three-by-three grid, and assign the alignment of each card a numerical value to incorporate some elements of Osirian numerology.</p>
</>};
const _harrowing_plot_twists = {title: "Harrowing Plot Twists", parent_topics: ["gm_specific_campaigns","occult_rules","esoteric_traditions","the_harrow"], siblings: ["the_harrow_on_golarion","harrowing_plot_twists"], subtopics: ["hpt_swords","hpt_keys","hpt_shields","hpt_books","hpt_stars","hpt_crowns"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 40</Link></p>
<p>The harrow deck can be used as an alternative deck of <em>Pathfinder Cards: Plot Twist Cards.<sup><InnerLink showBacklink="backlink-rule-harrowing_plot_twists-ref-P-1" id="rule-harrowing_plot_twists-ref-P-1" data-hash-target to="rule-harrowing_plot_twists-P">1</InnerLink></sup></em> Plot Twist Cards provide minor story-altering effects that players can use to affect the plot of an adventure, as well as story seeds that the GM can integrate into the campaign to give the players an opportunity to use their cards' effects.</p>
<p>At the start of the campaign as well as every time she gains a level, a PC takes part in an individual in-character harrow reading and gains a harrow card to use as a Plot Twist Card. When a player character gains this card, he can select either his role card or the card whose array position corresponds to his alignment. A PC may have multiple Plot Twist Cards in hand at a time, to a maximum of his level. A Plot Twist Card can be played at any time, even on another character's turn, but a PC can only make use of one harrow card as a Plot Twist Card per round.</p>
<p>To make a reading stand out as truly prophetic, Game Masters might wish to build specific encounters or adventures based on the cards in the PCs' harrow readings, especially for cards that reflect a character's alignment or her respective role cards. Each harrow card has two characteristics listed. The "Plot Twist" entry indicates the mechanical effect of playing the harrow card as a Plot Twist card. The target referred to in this entry is chosen by the PC who is using the card. The "Seed" entry is a suggestion the GM can work into the campaign to give the player an opportunity to use the Plot Twist effect; incorporating the seed into the campaign in this manner allows the GM to foreshadow future events and create the illusion for the player that the harrow card is truly prophetic.</p>
<p>To randomly use this info without physical cards, roll a d6 to determine which suit the card is from, then roll a d10 to pick a specific card, rerolling a result of 10.</p>
<ScrollContainer id="rule-harrowing_plot_twists--table-0"><table>
<thead>
<tr>
<th>d6</th>
<th>Suit</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>Swords</td>
</tr>
<tr>
<td>2</td>
<td>Keys</td>
</tr>
<tr>
<td>3</td>
<td>Shields</td>
</tr>
<tr>
<td>4</td>
<td>Books</td>
</tr>
<tr>
<td>5</td>
<td>Stars</td>
</tr>
<tr>
<td>6</td>
<td>Crowns</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-harrowing_plot_twists-label">Footnotes</h3>
<ol>
<li id="rule-harrowing_plot_twists-P">
<p>A separate product produced by Paizo. <InnerLink id="backlink-rule-harrowing_plot_twists-ref-P-1" data-hash-target to="rule-harrowing_plot_twists-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _hpt_swords = {title: "Suit of Swords", parent_topics: ["gm_specific_campaigns","occult_rules","esoteric_traditions","the_harrow","harrowing_plot_twists"], siblings: ["hpt_swords","hpt_keys","hpt_shields","hpt_books","hpt_stars","hpt_crowns"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 41</Link></p>
<p>Cards in the suit of swords are tied to Strength.</p>
<p><strong className="hl">The Paladin (LG; 1 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Shift an NPC's attitude one step toward helpful.<br/><strong>Seed</strong> The local law enforcement challenges the PCs.</p>
</blockquote>
<p><strong className="hl">The Keep (NG; 2 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target converts all damage from one attack into nonlethal damage.<br/><strong>Seed</strong> The PCs must penetrate a secure location.</p>
</blockquote>
<p><strong className="hl">The Big Sky (CG; 3 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target gains a +10 bonus on its next Strength or Escape Artist check to free itself.<br/><strong>Seed</strong> Slaves fight for freedom.</p>
</blockquote>
<p><strong className="hl">The Forge (LN; 4 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target gains a +20 bonus on one Craft check.<br/><strong>Seed</strong> The PCs are challenged to a test of skills.</p>
</blockquote>
<p><strong className="hl">The Bear (N; 5 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target falls <Link to="/rule/prone">prone</Link>, or stands from prone as a free action that does not provoke attacks of opportunity.<br/><strong>Seed</strong> Tamed animals fight for a hidden master.</p>
</blockquote>
<p><strong className="hl">The Uprising (CN; 6 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target becomes confused (as the <Link to="/spell/confusion">confusion</Link> spell) for 3 rounds.<br/><strong>Seed</strong> An angry mob threatens the local leader.</p>
</blockquote>
<p><strong className="hl">The Fiend (LE; 7 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target takes a -20 penalty on its next attack or combat maneuver.<br/><strong>Seed</strong> Evil outsiders must feed on the PCs or those they've sworn to protect.</p>
</blockquote>
<p><strong className="hl">The Beating (NE; 8 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target immediately provokes attacks of opportunity from foes that threaten it.<br/><strong>Seed</strong> Hordes of walking dead rise by night.</p>
</blockquote>
<p><strong className="hl">The Cyclone (CE; 9 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> : Hurricane-force <Link to="/rule/winds">winds</Link> surround the target in a 5-foot radius for 3 rounds.<br/><strong>Seed</strong> Insane <Link to="/monster/air_elemental">air elementals</Link> are bent on destruction.</p>
</blockquote>
</>};
const _hpt_keys = {title: "Suit of Keys", parent_topics: ["gm_specific_campaigns","occult_rules","esoteric_traditions","the_harrow","harrowing_plot_twists"], siblings: ["hpt_swords","hpt_keys","hpt_shields","hpt_books","hpt_stars","hpt_crowns"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 41</Link></p>
<p>Cards in the suit of keys are tied to Dexterity.</p>
<p><strong className="hl">The Dance (LG; 1 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target gains the benefits of <Link to="/spell/freedom_of_movement">freedom of movement</Link> for 1 round.<br/><strong>Seed</strong> A challenge or guardian must be overcome through grace, not force.</p>
</blockquote>
<p><strong className="hl">The Cricket (NG; 2 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target's speed increases by 30 feet for 1 round<br/><strong>Seed</strong> A <Link to="/monster/grig">grig</Link> must dance, but cannot dance alone.</p>
</blockquote>
<p><strong className="hl">The Juggler (CG; 3 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target gains the <Link to="/feat/deflect_arrows">Deflect Arrows</Link> feat for the rest of the combat.<br/><strong>Seed</strong> Giants attempt to crush the PCs from afar.</p>
</blockquote>
<p><strong className="hl">The Locksmith (LN; 4 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target gains a +10 bonus on a single Disable Device check.<br/><strong>Seed</strong> Thieves come for the PCs' treasures in the night.</p>
</blockquote>
<p><strong className="hl">The Peacock (N; 5 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target is <Link to="/rule/paralyzed">paralyzed</Link> for 1 round.<br/><strong>Seed</strong> PCs must rescue a <Link to="/rule/petrified">petrified</Link> victim.</p>
</blockquote>
<p><strong className="hl">The Rabbit Prince (CN; 6 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target takes a -5 penalty to its AC, but gains a +5 bonus on melee attack rolls for the remainder of combat.<br/><strong>Seed</strong> A daring bravado challenges the PCs in an effort to build her reputation.</p>
</blockquote>
<p><strong className="hl">The Avalanche (LE; 7 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target enters a <Link to="/spell/rage">rage</Link>, as the spell, for 3 rounds.<br/><strong>Seed</strong> A <Link to="/rule/avalanches">rockslide</Link> threatens the PCs, a village, or an ally.</p>
</blockquote>
<p><strong className="hl">The Crows (NE; 8 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target gains <Link to="/ability/sneak_attack">sneak attack</Link> +3d6 for 1 round.<br/><strong>Seed</strong> Thieves plot to loot the PCs.</p>
</blockquote>
<p><strong className="hl">The Demon's Lantern (CE; 9 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target takes a -10 penalty on Survival and Perception checks to notice hazards for the next 24 hours.<br/><strong>Seed</strong> A false lure guides the PCs into danger.</p>
</blockquote>
</>};
const _hpt_shields = {title: "Suit of Shields", parent_topics: ["gm_specific_campaigns","occult_rules","esoteric_traditions","the_harrow","harrowing_plot_twists"], siblings: ["hpt_swords","hpt_keys","hpt_shields","hpt_books","hpt_stars","hpt_crowns"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 41</Link></p>
<p>Cards in the suit of shields are tied to Constitution.</p>
<p><strong className="hl">The Trumpet (LG; 1 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target is immune to fear effects for the remainder of the combat.<br/><strong>Seed</strong> <Link to="/family/archon">Archons</Link> demand the PCs answer for some crime, which they might or might not have committed.</p>
</blockquote>
<p><strong className="hl">The Survivor (NG; 2 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> <Link to="/misc/dying">Dying</Link> target is immediately healed up to 1 hit point.<br/><strong>Seed</strong> <Link to="/template/ghost">Ghosts</Link> seek aid, not revenge.</p>
</blockquote>
<p><strong className="hl">The Desert (CG; 3 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target gains a +10 bonus on Survival checks to endure hostile climates for 24 hours.<br/><strong>Seed</strong> A <Link to="/family/sphinx">sphinx</Link> offers a contest to test the PCs, but failure comes with a terrible price.</p>
</blockquote>
<p><strong className="hl">The Brass Dwarf (LN; 4 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target gains energy resistance 10 to one energy type until the end of combat.<br/><strong>Seed</strong> A small failure sets horrible consequences in motion.</p>
</blockquote>
<p><strong className="hl">The Teamster (N; 5 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target can immediately attempt a new saving throw against one effect currently affecting it, and gains a +5 bonus on this roll.<br/><strong>Seed</strong> A mastermind directs monstrous attacks.</p>
</blockquote>
<p><strong className="hl">The Mountain Man (CN; 6 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target gains a +4 bonus on Strength- and Constitution-based checks for 3 rounds.<br/><strong>Seed</strong> Marauding giants are even larger and more dangerous than they should be.</p>
</blockquote>
<p><strong className="hl">The Tangled Briar (LE; 7 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Plants <Link to="/spell/entangle">entangle</Link> (as the spell) the target for 1 minute.<br/><strong>Seed</strong> Strangling vines and plant creatures overrun a safe haven.</p>
</blockquote>
<p><strong className="hl">The Sickness (NE; 8 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target is immediately infected with a disease.<br/><strong>Seed</strong> Plague overwhelms the local populace.</p>
</blockquote>
<p><strong className="hl">The Waxworks (CE; 9 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target is <Link to="/misc/stunned">stunned</Link> for 1 round.<br/><strong>Seed</strong> An enemy isn't what they seem.</p>
</blockquote>
</>};
const _hpt_books = {title: "Suit of Books", parent_topics: ["gm_specific_campaigns","occult_rules","esoteric_traditions","the_harrow","harrowing_plot_twists"], siblings: ["hpt_swords","hpt_keys","hpt_shields","hpt_books","hpt_stars","hpt_crowns"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 42</Link></p>
<p>Cards in the suit of Books are tied to Intelligence.</p>
<p><strong className="hl">The Hidden Truth (LG; 1 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target gains benefits of <Link to="/spell/see_invisibility">see invisibility</Link> for 3 rounds<br/><strong>Seed</strong> A confounding sage will only answer in half-truths.</p>
</blockquote>
<p><strong className="hl">The Wanderer (NG; 2 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target can uncover an item worth up to 5OO gp among junk or refuse.<br/><strong>Seed</strong> A crucial character or treasure has left town for points unknown.</p>
</blockquote>
<p><strong className="hl">The Joke (CG; 3 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target is immune to fear and emotion effects that would impose a penalty for 3 rounds.<br/><strong>Seed</strong> An opponent is physically overwhelming but mentally fragile.</p>
</blockquote>
<p><strong className="hl">The Inquisitor (LN; 4 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> One of target's weapons gains the <Link to="/magic-enh/bane">bane</Link> property for the rest of the combat.<br/><strong>Seed</strong> Investigators begin tearing through the PCs' deceptions or illusions.</p>
</blockquote>
<p><strong className="hl">The Foreign Trader (N; 5 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target can immediately swap places with a willing adjacent creature or attempt a free <Link to="/rule/reposition">reposition</Link> combat maneuver with a +4 bonus and without provoking attacks of opportunity.<br/><strong>Seed</strong> A mysterious merchant has what the PCs need, but asks impossible prices.</p>
</blockquote>
<p><strong className="hl">The Vision (CN; 6 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target must select a new target for its action.<br/><strong>Seed</strong> A madman must make the PCs listen.</p>
</blockquote>
<p><strong className="hl">The Rakshasa (LE; 7 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target takes a -10 penalty on their next Sense Motive check.<br/><strong>Seed</strong> A shapeshifter is using the PCs to accomplish its goals.</p>
</blockquote>
<p><strong className="hl">The Idiot (NE; 8 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target takes a -6 penalty on Intelligence-based checks for 3 rounds.<br/><strong>Seed</strong> Small, simple-minded creatures are making big trouble.</p>
</blockquote>
<p><strong className="hl">The Snakebite (CE; 9 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target weapon is instantly coated with a dose of <Link to="/eq-poison/black_adder_venom">black adder venom</Link>.<br/><strong>Seed</strong> An assassin lashes out against the PCs' supporters.</p>
</blockquote>
</>};
const _hpt_stars = {title: "Suit of Stars", parent_topics: ["gm_specific_campaigns","occult_rules","esoteric_traditions","the_harrow","harrowing_plot_twists"], siblings: ["hpt_swords","hpt_keys","hpt_shields","hpt_books","hpt_stars","hpt_crowns"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 42</Link></p>
<p>Cards in the suit of stars are tied to Wisdom.</p>
<p><strong className="hl">The Winged Serpent (LG; 1 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target can immediately take an extra standard or move action.<br/><strong>Seed</strong> Good intentions block the PCs' progress.</p>
</blockquote>
<p><strong className="hl">The Midwife (NG; 2 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target gains a +10 bonus on one Heal or Knowledge skill check.<br/><strong>Seed</strong> A middling power seeks to bring something more powerful into the world.</p>
</blockquote>
<p><strong className="hl">The Publican (CG; 3 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target can transform one liquid into a <Link to="/spell/cure_serious_wounds">cure serious wounds</Link> potion.<br/><strong>Seed</strong> Insights come from a one-eyed stranger.</p>
</blockquote>
<p><strong className="hl">The Queen Mother (LN; 4 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> 1d3 <Link to="/monster/arbiter">arbiter</Link> inevitables appear and serve the target through one crisis.<br/><strong>Seed</strong> The PCs must work for the local nobility or be crushed.</p>
</blockquote>
<p><strong className="hl">The Owl (N; 5 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target can speak to and understand animals for 24 hours.<br/><strong>Seed</strong> An imbalance in nature threatens everyone nearby.</p>
</blockquote>
<p><strong className="hl">The Carnival (CN; 6 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target automatically fails its next saving throw against an illusion effect<br/><strong>Seed</strong> Chaos erupts around the PCs and bystanders alike, through no fault of their own</p>
</blockquote>
<p><strong className="hl">The Eclipse (LE; 7 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target's <Link to="/ability/channel_energy">channeled energy</Link>, <em>cure</em> spells, and <em>inflict</em> spells heal only half as many hit points, or deal half as much damage, for 24 hours<br/><strong>Seed</strong> : An unscheduled eclipse raises restless undead</p>
</blockquote>
<p><strong className="hl">The Mute Hag (NE; 8 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target cannot speak for 1 round<br/><strong>Seed</strong> A vile woman pries secrets from the PCs, or an old woman harbors a terrible secret</p>
</blockquote>
<p><strong className="hl">The Lost (CE; 9 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target gains <Link to="/umr/negative_energy_affinity">negative energy affinity</Link> for 1 minute<br/><strong>Seed</strong> A slain hero returns to undo his good deeds</p>
</blockquote>
</>};
const _hpt_crowns = {title: "Suit of Crowns", parent_topics: ["gm_specific_campaigns","occult_rules","esoteric_traditions","the_harrow","harrowing_plot_twists"], siblings: ["hpt_swords","hpt_keys","hpt_shields","hpt_books","hpt_stars","hpt_crowns"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 43</Link></p>
<p>Cards in the suit of crowns are tied to Charisma.</p>
<p><strong className="hl">The Empty Throne (LG; 1 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target can <Link to="/rule/aid_another">aid another</Link> on an ally's check, regardless of range, as an immediate action<br/><strong>Seed</strong> The heir is missing</p>
</blockquote>
<p><strong className="hl">The Theater (NG; 2 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target can use Bluff, Diplomacy, or Intimidate to affect one mindless construct or undead<br/><strong>Seed</strong> The puppets are not what they seem</p>
</blockquote>
<p><strong className="hl">The Unicorn (CG; 3 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target can voluntarily take any amount of damage to heal another creature the same amount<br/><strong>Seed</strong> A normally good creature is rampaging through the countryside</p>
</blockquote>
<p><strong className="hl">The Marriage (LN; 4 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target noncombatant becomes friendly, as the Diplomacy skill<br/><strong>Seed</strong> Unlikely allies work together to create something new</p>
</blockquote>
<p><strong className="hl">The Twin (N; 5 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Attacks against the target have a 50% miss chance for 1 round<br/><strong>Seed</strong> A mirror of opposition appears in the unlikeliest place</p>
</blockquote>
<p><strong className="hl">The Courtesan (CN; 6 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target gains the benefits of <Link to="/feat/improved_feint">Improved Feint</Link> for the remainder of the combat<br/><strong>Seed</strong> A social gathering turns deadly</p>
</blockquote>
<p><strong className="hl">The Tyrant (LE; 7 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target cannot attack for 1 round<br/><strong>Seed</strong> A deadly foe moves to seize power</p>
</blockquote>
<p><strong className="hl">The Betrayal (NE; 8 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target cannot heal damage for the rest of combat<br/><strong>Seed</strong> A friend or lover betrays the PCs</p>
</blockquote>
<p><strong className="hl">The Liar (CE; 9 on 1d10)</strong></p>
<blockquote>
<p><strong>Plot Twist</strong> Target cannot speak the truth for 5 rounds and has 50% spell failure chance when casting any spell with a verbal component<br/><strong>Seed</strong> A secret society twists the truth</p>
</blockquote>
</>};
const _moritification = {title: "Motification", parent_topics: ["gm_specific_campaigns","occult_rules","esoteric_traditions"], siblings: ["astrology","the_harrow","moritification","numerology","spiritualism"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 44</Link></p>
<p>Pain is a fact of life. It's unavoidable, inevitable, and unpleasant. However, for most creatures, pain is also an important warning system, helping creatures correctly judge their abilities and physical needs, as well as a necessary side effect of growth and evidence of progress. Though most view pain as an obstacle to overcome or avoid if possible, for those individuals who practice mortification, pain is a vehicle for self-perfection.</p>
<p>Mortification is an umbrella term for a number of practices that involve intentional self-harm, including blinding, deprivation trials, amputation, and a host of other practices. Mortification can be a vehicle for magical power, sexual pleasure, or simple aesthetics, depending on the practice. While most associate mortification rituals with evil cults, ascetic traditions involving practices like self-flagellation, fasting, and deprivation are not uncommon among zealous sects of nonevil faiths (including some mystery cults devoted to empyreal lords). To these believers, mortification is a demonstration of transcendence or dedication, or a means of purging the body of impurity. These faiths classify mortification as evil only when it is used to cause suffering or harm to an unwilling subject.</p>
<p>Members of many cults that revere deformity and monstrosity, such as those loyal to <Link to="/faith/lamashtu">Lamashtu</Link>, demonstrate their devotion by mutilating their bodies to resemble the forms of their divine patrons. Others - most notably the followers of <Link to="/faith/zon_kuthon">Zon-Kuthon</Link> - pursue pain for its own sake, engaging in contests of self-mutilation to display mastery over pain and settle status disputes within the group. Followers of <Link to="/faith/irori">Irori</Link>, <Link to="/faith/nethys">Nethys</Link>, and some empyreal lords instead pursue painful trials to prove their steadfastness, whether through fasting, sleep deprivation, or more intense practices like the mortification rituals of <Link to="/pclass/mystery_cultist">mystery cultists</Link>. Such trials are often intended to empty the body of all worldly influence so it can be filled with divine power.</p>
<p>There is also a category of ritual behavior that achieves gains not through self-harm, but by inflicting pain on others without their consent. Followers of Zon-Kuthon, who revel in both receiving and giving pain, practice torture rituals. Sacrifices of humanoids and other intelligent creatures are common among nihilistic cults, like those of <Link to="/faith/rovagug">Rovagug</Link>, who venerate destruction for its own sake. Several cults whose worship involves the eroticization of pain, such as those of the archdevil <Link to="/faith/belial">Belial</Link> and demon lords <Link to="/faith/nocticula">Nocticula</Link> and <Link to="/faith/socothbenoth">Socothbenoth</Link>, perform ritual sadism that involves inflicting pain or degradation on others for the purpose of achieving pleasure.</p>
<h3 id="rule-moritification-related-feats-and-classes">Related Feats and Classes</h3>
<ul>
<li>The <Link to="/feat/agonizing_obedience">Agonizing Obedience</Link> feat.</li>
<li>The <Link to="/pclass/pain_taster">Pain Taster</Link> prestige class.</li>
</ul>
<h3 id="rule-moritification-on-golarion">On Golarion</h3>
<p>Though not performed openly in most regions, mortification is nevertheless practiced by a variety of cultures and races across Golarion.</p>
<p><strong className="hl">Bekyar:</strong> Natives of the southeastern coast of Garund, the Bekyar are demon-worshipers who specialize in slave trading. Their extensive piercing and scarring adds to their ferocious reputations; they also brand their slaves, using different symbols to connote the value, origins, and skill sets of their humanoid merchandise.</p>
<p><strong className="hl">Drow:</strong> These twisted elves, who dwell in the Darklands layer of Sekamina, are masters of a cruel art called <Link to="/rule/fleshwarping">"fleshwarping."</Link> Fleshwarpers use living creatures as canvases to achieve a variety of effects. One common goal is to continuously erase the signs of aging, giving the subject the appearance of eternal youth. Other fleshwarpers specialize in mutilating captured enemies or outcasts, deforming them into monstrosities. The hybrid spider creatures known as <Link to="/monster/drider">driders</Link> are examples of such practices.</p>
<p><strong className="hl">Kuthites:</strong> These clandestine worshipers of Zon-Kuthon are definitely the most highly publicized practitioners of sadomasochism on Golarion. Zon-Kuthon's temples are often converted dungeons, and his services always include torture, whether that of a willing member or an unwilling victim. Kuthites are experts at extreme body modification, and are used to hiding such alteration from the public eye, often going so far as to wear the skins of their victims over their own gruesome wounds.</p>
<p><strong className="hl">Orcs:</strong> In ore culture, where strength is revered, battle scars are commonly displayed as signs of prowess. Ores use a variety of rudimentary tattooing techniques to accentuate combat wounds, as well as to demonstrate the completion of various rites of passage. Tattooing, scars, and piercing are common among both ore genders for aesthetic as well as hierarchical purposes.</p>
</>};
const _numerology = {title: "Numerology", parent_topics: ["gm_specific_campaigns","occult_rules","esoteric_traditions"], siblings: ["astrology","the_harrow","moritification","numerology","spiritualism"], subtopics: ["numerology_on_golarion","mathematical_spellcasting"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 48</Link></p>
<p>Whereas most of divinatory traditions - such as augury, extispicy, and astrology - rely on observation of the natural world, numerology manipulates of numbers, ratios, and equations. Through the use of mathematics, numerologists are able to both presage events and augment magical effects. Along with harrowing, numerology is one of only a few forms of divination that rely exclusively on abstract systems, making it more widely applicable than many other divinatory practices.</p>
<p>While numerology is not technically a magical practice, it is a natural pursuit for curious arcanists, as the two practices both rely on the user's knowledge of an esoteric "language" to reveal powerful relationships, use combinations of abstract symbols to focus the caster's abilities, and require extensive amounts of dedicated practice and concentration. However, numerology's focus on mathematics links it more closely to alchemy, architecture, and engineering, making it more accessible to craftspeople and scholars than the study of spellcasting, which is often exclusive to magical universities and religious organizations. There are two basic forms of numerology: arithmancy and sacred geometry.</p>
<p>Arithmancy assumes that each linguistic unit has inherent power - a view that arcane spellcasters have held for millennia - and ascribes numerical values to letters or words. For arithmancers, the unseen equations embedded within language evoke hidden meanings that other arcanists often miss. By essentially turning every word and sentence into a mathematical equation, practitioners can boil down names to single numbers that indicate the hidden natures of the spells, creatures, or locations named. Arithmancers often use this skill in a manner similar to astrologers' use of horoscopes, to determine someone's natural profession, her lucky numbers, or auspicious times of year. Arithmancy is most widely associated with the Tian and Draconic languages, though numerological studies of Common are popular in many magical academies.</p>
<p>Sacred geometry holds that some shapes are more auspicious than others, and ascribes cosmic meaning, hidden information, and inherent power to certain geometric shapes and ratios. Many of the shapes revered by sacred geometers are the result of observation of the natural world: hexagons grant abundance because of their inherent efficiency and use in honeycombs, spheres and arches are associated with strength because they can withstand more pressure than any other shape, and logarithmic spirals (such as those found in nautilus shells) are symbols of eternity because it maintains the same shape at every point. Sacred geometry is used extensively in architecture, construction, and spellcraft; sacred geometers seek out and manipulate potent shapes and ratios in order to design magically conductive temples, pinpoint locations of power, and augment spellcasting.</p>
</>};
const _numerology_on_golarion = {title: "Numerology on Golarion", parent_topics: ["gm_specific_campaigns","occult_rules","esoteric_traditions","numerology"], siblings: ["numerology_on_golarion","mathematical_spellcasting"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 48</Link></p>
<p>Unlike many occult practices, which are intrinsically linked to a specific culture, numerology is common in cultures around the world. Every civilization that uses some form of engineering or architecture practices a rudimentary form of numerology, but not all cultures invest an equal amount of study into the subject. The following are the three cultures that are most renowned for their numerological prowess.</p>
<p><strong className="hl">Cult of the Last Theorem:</strong> Located on the outskirts of the ruined city of Tumen, the Cult of the Last Theorem seeks the numerological mysteries of Ancient Osirion. The cultists believe that the Pharaoh of Numbers, one of the Four Pharaohs of Ascension, understood sacred geometrical secrets of unimaginable power. They believe that the numbers 56 and 11 hold deep spiritual significance, and are currently searching for an artifact called the Aqualinth beneath the ruins of Tumen.</p>
<p><strong className="hl">Dragons:</strong> While all dragons are commonly known to have genius-level intellects, bronze and green dragons are specifically gifted with numbers. Bronze dragons are renowned for their banking prowess, while the hoards of green dragons often contain tomes on the subjects of numerology and mathematics.</p>
<p><strong className="hl">Po Li:</strong> The former capital of the now-defunct empire of Lung Wa, Po Li is now one of 16 successor states. This Tian state is governed by the Oracular Council of Po Li, which uses all manner of divinations, including numerology, to make state decisions. The council's favored divinatory method is the <strong>Path of Numbers,</strong> a form of energy manipulation that relies on the translation of actions and natural phenomena into numbers. For more information on this method, see the next section.</p>
</>};
const _mathematical_spellcasting = {title: "Mathematical Spellcasting", parent_topics: ["gm_specific_campaigns","occult_rules","esoteric_traditions","numerology"], siblings: ["numerology_on_golarion","mathematical_spellcasting"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 48</Link></p>
<p>For many, mathematics and magic are worlds apart. For numerologists, however, the two go hand in hand. Mathematical spellcasters use their knowledge of engineering and spellcraft to calculate how certain spells and effects interact. <Link to="/feat/sacred_geometry">Sacred Geometry</Link> (and the related feat <Link to="/feat/calculating_mind">Calculating Mind</Link>) gives casters the ability to modify their spells with a variety of metamagic effects that would normally be beyond their capabilities. <Link to="/feat/arithmancy">Arithmancy</Link>, meanwhile, allows casters to translate the names of their spells into equations, enabling them to increase the spells' efficacy.</p>
<h3 id="rule-mathematical_spellcasting-the-path-of-numbers">The Path of Numbers</h3>
<p>Few nations are so committed to the practice of oracular divination as Po Li, in Tian Xia. Po Li is among the most powerful of the 16 successor states that arose after the fall of the Lung Wa Empire. The nation is governed by an oracular theocracy, and many of Po Li's administrative decisions are made with the aid of divinatory practices. The ruling Oracular Council is made up of numerous oracles, who are trained from childhood in the practice of divination.</p>
<p>The members of the Oracular Council are expert in several divinatory systems, including the Dragon Empires zodiac, augury, oneiromancy, and extispicy. The most famous of these systems, however, is the Path of Numbers. The Path of Numbers is a system of numerology that describes eight basic energies. Any of these types of energy can interact at any time, producing 64 possible combinations. The Oracular Council holds that those 64 combinations are sufficient to describe the basis of every interaction in the cosmos. No matter the plane, creature, or time in question, every event in the multiverse is based on one of those 64 templates. In short, the Path of Numbers is a periodic table of energetic elements.</p>
<p>The following spells utilize the Path of Numbers to create magical effects. The chart below lists the eight basic energies, along with effects employed by multiple spells.</p>
<ul>
<li><Link to="/spell/calculated_luck">Calculated Luck</Link></li>
<li><Link to="/spell/cleromancy">Cleromancy</Link></li>
<li><Link to="/spell/lucky_number">Lucky Number</Link></li>
<li><Link to="/spell/mathematical_curse">Mathematical Curse</Link></li>
<li><Link to="/spell/numerological_evocation">Numerological Evocation</Link></li>
<li><Link to="/spell/numerological_resistance">Numerological Resistance</Link></li>
</ul>
<h3 id="rule-mathematical_spellcasting-eight-basic-energies-table">Eight Basic Energies Table</h3>
<ScrollContainer id="rule-mathematical_spellcasting--table-0"><table>
<thead>
<tr>
<th>d8</th>
<th>Energy Type</th>
<th>Magic School</th>
<th>d20 Roll Type</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>Air</td>
<td>Enchantment</td>
<td>Will save</td>
</tr>
<tr>
<td>2</td>
<td>Electricity</td>
<td>Illusion</td>
<td>Reflex save</td>
</tr>
<tr>
<td>3</td>
<td>Fire</td>
<td>Necromancy</td>
<td>Attack roll</td>
</tr>
<tr>
<td>4</td>
<td>Sonic</td>
<td>Evocation</td>
<td>Initiative roll</td>
</tr>
<tr>
<td>5</td>
<td>Acid</td>
<td>Abjuration</td>
<td>Fortitude save</td>
</tr>
<tr>
<td>6</td>
<td>Water</td>
<td>Transmutation</td>
<td>Caster level check</td>
</tr>
<tr>
<td>7</td>
<td>Cold</td>
<td>Divination</td>
<td>Concentration check</td>
</tr>
<tr>
<td>8</td>
<td>Earth</td>
<td>Conjuration</td>
<td>Combat Maneuver Check</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _spiritualism = {title: "Spiritualism", parent_topics: ["gm_specific_campaigns","occult_rules","esoteric_traditions"], siblings: ["astrology","the_harrow","moritification","numerology","spiritualism"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 52</Link></p>
<p>Not all who seek to pierce the veil of death are foul necromancers. Instead, there are those who proceed with respect and caution. The practice of attempting to establish such benign communication is known as spiritualism.</p>
<p>Spiritualists rely on unquiet souls and minor haunts to establish communication with spirits, and those mortals who act as conduits between worlds are called mediums. Most keep a cautious distance from the higher orders of dangerous and unpredictable spectral undead such as <Link to="/template/ghost">ghosts</Link> and <Link to="/monster/wraith">wraiths</Link>. Instead, they seek out lower stations of localized spiritual entities, such as <Link to="/monster/poltergeist">poltergeists</Link> and <Link to="/rule/haunts">haunts</Link>, in order to act as liaisons for the unquiet spirits.</p>
<p>Most talented mediums are oracles, though some experts without magical ability specialize in seeking out and communicating with <Link to="/haunt/rapping_spirit">rapping spirits</Link> and <Link to="/haunt/demanding_dead">demanding dead</Link>. They find their talents well compensated by bereaved mourners seeking solace from a loved one's lingering spirit. These profitable practices also attract all manner of fakes, who resort to the cover of dark seances and deceptive ventriloquism to fool grieving families.</p>
<p>The process of spirit communication is a difficult affair, and only the most powerful mediums are capable of summoning the spirits of specific individuals directly to their location. Others must seek out haunts in the places where they reside in order to establish a direct rapport. Mediums often aid those troubled by the restless spirits of recently deceased, who - lacking the truly tragic circumstances necessary for them to manifest as ghosts, but still experiencing some unresolved conflict - linger in the mortal world as haunts. Once mediums have overcome the effects of such haunts, they can proceed with communication.</p>
<p>A wide variety of entities are capable of communication. Neutralized haunts (those reduced to 0 hp) of all types might revert to rapping spirits or demanding dead during their reset periods. Likewise, destroyed spectral dead such as ghosts and poltergeists can assume this same state during rejuvenating periods, and can attempt to convey their needs to the living. While still potentially malevolent, these entities can often communicate via simple codes (such as one rap for "yes" and two for "no") or by the medium calling out words, numbers, and letters for rapped selection by the spirits. Such messages can be formed at the rate of 1d10 words for each minute in which a character succeeds at a <Link to="/skill/linguistics">Linguistics</Link> check, with a DC equal to 15 + the original haunt's CR. Mediums channeling demanding dead, on the other hand, typically whisper messages, or write at the haunt's suggestion - both at the same rate when unaided by tools of their trade. In either case, spirits are often unreliable, always cryptic, and never able to convey knowledge beyond what they knew in life.</p>
<p>To facilitate communication, mediums use spells such as <Link to="/spell/calm_spirit">calm spirit</Link>, indulge in diplomacy, and create comforting environments such as dark seance cabinets. Some mediums carry flat, lettered boards known as "talking boards," cone-shaped spirit trumpets, or writing planchettes - small boards that can be written on with chalk or charcoal pencils. While these are mundane versions of magical <Link to="/magic-wondrous/trumpet_of_spirit_speaking">trumpets of spirit speaking</Link> and <Link to="/magic-wondrous/spirit_planchette">spirit planchettes</Link> with no inherent power of their own, in the hands of those with properly established rapports, these tools increase the efficiency of messages received to 3d6 words per minute of communication, and grant the user a +4 bonus on Linguistics checks to decipher the cryptic messages of haunts.</p>
<h3 id="rule-spiritualism-on-golarion">On Golarion</h3>
<p>Many cultures on Golarion engage in spiritualism, with varying degrees of reverence. Seances are popular parlor entertainment in the more cosmopolitan parts of Ustalav, particularly among adherents of the Esoteric Order of the Palatine Eye, where members are encouraged to meticulously record spirit communications in the event that seance sitters tap into some miraculous reservoir of hidden knowledge.</p>
<p>Ancestor worship is another form of spiritualism on Golarion, with some cultures communing with the lingering haunts of their forebears, who they believe persist on the mortal plane to protect their descendants. The Shoanti, for example, engaged in totemistic rituals meant to anchor these spiritual protections to them. Far to the east, Tians who prize family and genealogy practice a similar form of ancestor worship wherein descendants venerate departed souls and attune themselves to the quiet guidance of protective spirits while taking measures to guard themselves from the vengeance of wrathful entities.</p>
<p>The Mwangi Expanse holds all manner of mysteries, but few draw the awe and interest of outsiders so much as the mysteries of juju. This unique form of communication with the spirit realms (known to them as the hana juju) developed after centuries of supplication to spiritual entities called <Link to="/faith/wendo">wendo</Link>, who through generations of homage have been elevated beyond mere haunts to assume greater importance to the juju shamans. The wendo represent archetypal spirits of various aspects of Mwangi life, such as Adamde Baaka who embodies nature and the jungle, and Old Ba, who embodies folklore and ancient wisdom.</p>
</>};
const _running_an_occult_game = {title: "Running an Occult Game", parent_topics: ["gm_specific_campaigns","occult_rules"], siblings: ["occult_skill_unlocks","auras","chakras","psychic_duels","possession","occult_rituals","esoteric_traditions","running_an_occult_game"], subtopics: ["incorporating_the_occult","occult_elements","occult_themes","occult_adventure_seeds","occult_locations","esoteric_planes"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 218</Link></p>
<p>The word "occult" refers to that which is hidden or occluded, and it encompasses a wide range of strange disciplines known to only a few. Ancient though they may be, the mysteries of the occult remain obscure, protected by hermetic orders or locked within esoteric repositories of knowledge.</p>
<p>In an occult adventure, the characters uncover clues as they search for the meaning behind perplexing events and supernatural phenomena. The tone is usually ominous and laden with secrecy and veiled threats as the characters untangle each portentous thread of occult mystery. Ordinary folk seldom recognize the patterns beneath events; only the truly initiated, undaunted by the risks to mind, body, and soul, dare plumb the depths of the occult in order to protect their world from unseen dangers.</p>
</>};
const _incorporating_the_occult = {title: "Incorporating the Occult", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game"], siblings: ["incorporating_the_occult","occult_elements","occult_themes","occult_adventure_seeds","occult_locations","esoteric_planes"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 218</Link></p>
<p>Incorporating occult themes into games where magic is commonplace requires careful consideration. Think of the occult like layers of an onion. By peeling back these layers one at a time, PCs can be at first perplexed by, then increasingly familiar with, the strange rules that govern this parallel world. But once PCs become comfortable with one occult reality, they discover a new deeper, darker layer.</p>
<p>In occult adventures, each new piece of the puzzle opens up more questions than it answers, and the mysteries of the story and plot are carefully nested like so many matryoshka dolls. In such games, haunts do not hesitate to reveal the causes for their spiritual contamination, and ritually marked corpses are far more than atmospheric window dressing. The very locations adventurers investigate may themselves be intrinsically linked by mysterious ley lines to other locations with similarly disturbing histories.</p>
</>};
const _occult_elements = {title: "Occult Elements", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game"], siblings: ["incorporating_the_occult","occult_elements","occult_themes","occult_adventure_seeds","occult_locations","esoteric_planes"], subtopics: ["mysteries_within_mysteries","unseen_realms","the_power_and_price_of_knowledge","strange_rules_and_peculiar_patterns","fates_worse_than_death","esoteric_atmosphere"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 218</Link></p>
<p>As characters in an occult campaign start to discover the hidden strands that connect seemingly unrelated events, they begin to interact with the bizarre, esoteric trappings of occult stories, including the following elements.</p>
</>};
const _mysteries_within_mysteries = {title: "Mysteries within Mysteries", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_elements"], siblings: ["mysteries_within_mysteries","unseen_realms","the_power_and_price_of_knowledge","strange_rules_and_peculiar_patterns","fates_worse_than_death","esoteric_atmosphere"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 218</Link></p>
<p>Standard adventures present a problem, obstacles in the form of monsters and traps, and a resolution. By comparison, occult adventures are subtler. The key to the adventurers' success often lies in investigating the unknown and the inexplicable, or following a trail of clues to its source. Strange phenomena, bizarre murders, and eerie occurrences are regular hooks in occult adventures, and the characters must peel away layer after layer to find the truth. The <Link to="/rule/mysteries_and_investigations">Mysteries and Investigations</Link> section provides advice for structuring a mystery adventure; occult adventures use a similar structure, intermingled with the atmospheric clues and story trappings of the occult elements detailed in this section.</p>
<p>This is not to say that an occult adventure can't also include heroic battles, dungeon exploration, or swashbuckling. It's a good idea to vary the tone and pacing of the campaign from time to time, and sometimes seemingly ominous portents can turn out to be red herrings, which have their own value in occult adventures.</p>
<p>The occult elements in your story might also fade in and out of a campaign with an altogether different main theme, recurring every few adventures as side treks that at first have little to do with one another - or so it would seem. The further the PCs progress in the campaign story, the more clearly they begin to distinguish the patterns underlying all of their adventures. For example, the PCs might discover that all of the unearthed graves they encountered throughout several adventures were the resting places of an order of scribes who penned a tome foretelling the apocalypse. When it's time to reintroduce the occult storyline, the GM need only present a fresh clue that ties back to earlier adventures to draw the characters once again into the world of the occult.</p>
<p><strong className="hl">Piecemeal Mysteries:</strong> Mystery adventures can be tricky to write, as the GM cannot always foresee when clues are too obvious or too obscure, and either case may be frustrating for the players. Bringing the occult into the campaign one small piece at a time creates the illusion of unseen forces moving in secret, even if neither the GM nor the players know the nature of the mystery at the beginning of the campaign. As the campaign progresses and more pieces fall into place, the mystery reveals itself and takes a definite shape.</p>
<p><strong className="hl">Clues Only for the Initiated:</strong> Game Masters often try to conceal vital information in games to preserve mysteries for fateful, well-timed reveals. And all too often, canny PCs find a way to acquire the information early, disrupting the GM's carefully planned adventure and spoiling its momentum through overreliance on a few choice clues. While such reticence may sometimes be necessary to preserve intrigue and guide PCs, occult games dole out information more readily and more frequently, but in a slightly different manner. Because the most significant clues in an occult mystery may be hard to even recognize as clues, such methods can not only more easily screen the key bits of information that do propel the plot forward, but also create a more mysterious atmosphere.</p>
<p><strong className="hl">Red Herrings That Aren't:</strong> Red herrings should not always be dead ends. Instead, they may serve to set up further adventures for the PCs, leaving them with the uneasy sense that strange events driven by bizarre, eldritch motivations are hidden in the world all around them. For example, while the PCs are on the trail of a murderous demon cult, misinformation might lead them to a secret society involved in unusual initiation rites. While the lead may be a dead end in terms of their original investigation, perhaps the PCs discover the group's seemingly innocuous initiations actually involve dangerous necromancy.</p>
<p><strong className="hl">Building PC Involvement:</strong> Sometimes the best way to involve the PCs in a campaign is to ask them what they want. At the beginning of your occult campaign, ask each player to come up with a personal mystery for his or her character, such as having witnessed an unusual phenomenon or having experienced an inexplicable event as a teenager. A PC may have brief flashbacks to her childhood of visits by men in blood-red robes and disturbing animal masks, for example. The character's search to discover the meaning of this memory may lead her down dark paths, particularly when she spots a street preacher wearing the tattered remains of one of the robes in a nearby city, and discovers from him that as a child, the PC was a candidate for an apocalyptic cult. Other hooks might include the unknown fate of a friend or relative, or the significance of a city monument's unconventional design. It may center on a certain location, like a place seen in recurring dreams or the ghost-haunted gardens of some overgrown manor. It could have to do with a mysterious object, such as a locket that throbs painfully in the hands of a psychometrist or an ancient tome containing twisting, backwards writing in which a new word is scribbled each day.</p>
<p>Some hooks may play major roles in the campaign, while others turn out to be minor anecdotes. Regardless, an adventure hook based on a character's curiosity, need, or longing is an invaluable tool for building player investment in the story.</p>
</>};
const _unseen_realms = {title: "Unseen Realms", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_elements"], siblings: ["mysteries_within_mysteries","unseen_realms","the_power_and_price_of_knowledge","strange_rules_and_peculiar_patterns","fates_worse_than_death","esoteric_atmosphere"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 219</Link></p>
<p>When running an occult game, consider replacing some of the NPCs who broker information with spirits, daemons, otherworldly entities, and mortals who traffic in the occult, such as a medium who channels spirits from a ramshackle wooden hut at the edge of a misty bog. Occult adventures emphasize the search for obscure, hidden knowledge beyond the ken of mortal minds. Such information is the province of spirits and lost souls who wander those rarely trod paths.</p>
<p>Some buildings may have mysterious symbols hidden in their architecture, or were designed to attract or channel occult power. For instance, adventurers who disturb the cairn of a powerful sorcerer might soon discover that the occult nature of the structure itself kept his soul in check. And, of course, GMs should design interconnected webs of intrigue that subtly display these patterns, daring PCs to pull the loose threads of reality and unravel all that they know, exposing the terrible secrets that lie beneath.</p>
<p>In a campaign steeped in occult lore and practice, spirits and demons might be the major questgivers, regular allies, foils, or adversaries, and their machinations pull the PCs in multiple directions. They might all seem virtuous, or may all seem reprehensible, but they all want something, and they are willing to use the PCs as pawns to achieve it. An uncooperative angel may give the characters information only grudgingly, whereas a devil who wants something might be more forthcoming.</p>
</>};
const _the_power_and_price_of_knowledge = {title: "The Power and Price of Knowledge", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_elements"], siblings: ["mysteries_within_mysteries","unseen_realms","the_power_and_price_of_knowledge","strange_rules_and_peculiar_patterns","fates_worse_than_death","esoteric_atmosphere"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 219</Link></p>
<p>The quest for knowledge features prominently in occult adventures. Knowledge and power invariably come at a price, however, even if the cost isn't immediately evident. Calamity strikes when mortals rush blindly in, throwing open the doors to powers that they do not yet comprehend.</p>
<p>As the characters begin to perceive the occult world that surrounds them, consider the dreadful fates and terrible sacrifices that they might face as they immerse themselves ever deeper into the occult. The price of knowledge or power may seem cheap at first - the memory of a PC's first kiss or the smell of a spring rain - but in the end, these snippets of humanity are a terrible price to pay, and the characters' own desires or desperation may prove their undoing.</p>
<p>In the depths of the occult underworld, initiates barter for the true names of demon princes, exchange rare formulae for the creation of artificial life, and broker in corpses that conceal terrible secrets. Such mystical bargains are rarely fair trades of power, and hermetic orders and cults manipulate these exchanges to devalue the knowledge traded away and inflate the value of the knowledge earned.</p>
</>};
const _strange_rules_and_peculiar_patterns = {title: "Strange Rules and Peculiar Patterns", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_elements"], siblings: ["mysteries_within_mysteries","unseen_realms","the_power_and_price_of_knowledge","strange_rules_and_peculiar_patterns","fates_worse_than_death","esoteric_atmosphere"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 220</Link></p>
<p>The behavior of occult denizens often falls into unusual patterns. As discussed above, these patterns often manifest in architecture, but they also show up as odd coincidences that have significance for occult investigators, such as corpses discovered in symbolic patterns. Occult creatures themselves are beings of eccentric habits, and PCs may exploit their patterns of behavior to expose or confront them, perhaps discovering the celestial alignments that must happen in order for some diabolical plan to finally come to fruition.</p>
<p>Knowledge of these strange rules and peculiar patterns often holds the key to an antagonist's defeat. In a typical mystery adventure, the GM might keep secret the means of causing a monster's demise. But occult knowledge could give investigating player characters unusual opportunities to learn more about their foes. Perhaps divinations or phrenological readings reveal multiple weaknesses characters could exploit, though not all of them are real, and some may even empower the antagonist. Ultimately, the only way to find out may be to encounter the antagonist directly, but putting the acquired knowledge to the test may be a more dangerous affair than the PCs initially realized.</p>
</>};
const _fates_worse_than_death = {title: "Fates Worse Than Death", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_elements"], siblings: ["mysteries_within_mysteries","unseen_realms","the_power_and_price_of_knowledge","strange_rules_and_peculiar_patterns","fates_worse_than_death","esoteric_atmosphere"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 220</Link></p>
<p>When death is final and unknown, it is as mysterious to living beings as it is terrifying. Characters accustomed to communicating with spirits, however, know that death is not the end. In fact, characters skilled in the occult might willingly wander the Ethereal Plane to quest, converse, and mingle among the bodiless spirits that reside there. In these games, characters usually have a pretty good idea of what fate awaits them, and what the final reward - or punishment - will be for their actions in life.</p>
<p>In occult adventures where characters can leave their bodies, travel in dreams, and project their forms onto the Astral Plane, the death of the physical body could come to hold less significance. Therefore, present the characters with fates worse than death. This might amount to a torturous "living" death, such as the eternal enslavement and torture of the soul or a debilitating madness that gradually renders a psychic creature mindless and insane. Since death in fantasy roleplaying games is typically either the end of a character's story or a small inconvenience before resurrection, look for ways to offer an escape from death using occult characters' knowledge of the spirit world - but at significant cost to their bodies, minds, or souls.</p>
</>};
const _esoteric_atmosphere = {title: "Esoteric Atmosphere", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_elements"], siblings: ["mysteries_within_mysteries","unseen_realms","the_power_and_price_of_knowledge","strange_rules_and_peculiar_patterns","fates_worse_than_death","esoteric_atmosphere"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 220</Link></p>
<p>Setting the scene is important in occult adventures, which rely upon creating an eerie atmosphere of tension, dread, and wonder in the presence of the supernatural. GMs can use props and tools to create a physical atmosphere around their players that draws them in to the emotional realm of the adventure. A room illuminated by flickering candles suggests darkened seance chambers or occult rituals, and a prepared library of sounds and voices brings settings and characters to life. If the characters are occult initiates or psychics, or they consult a fortune-teller or a medium, consider using cards, crystals, talismans, talking boards, and other such items as props in those scenes (as described in the <Link to="/rule/handouts_and_props">Handouts and Props</Link> section). Challenge yourself to give the players goose bumps a few times over the course of your campaign.</p>
</>};
const _occult_themes = {title: "Occult Themes", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game"], siblings: ["incorporating_the_occult","occult_elements","occult_themes","occult_adventure_seeds","occult_locations","esoteric_planes"], subtopics: ["the_occult_underworld","spiritual_warfare","into_the_great_beyond","fear_and_reverence_of_the_unknown","ultimate_occult"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 220</Link></p>
<p>The following campaign themes combine the elements of occult adventures in different ways, and are meant to serve as packages to help GMs open the door of the occult in their campaign worlds.</p>
</>};
const _the_occult_underworld = {title: "The Occult Underworld", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_themes"], siblings: ["the_occult_underworld","spiritual_warfare","into_the_great_beyond","fear_and_reverence_of_the_unknown","ultimate_occult"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 220</Link></p>
<p>The Unseen Realms and Strange Rules and Peculiar Patterns elements introduce an occult underworld that operates beneath the veneer of everyday life. Members of the occult underworld masquerade as the ordinary folk who occupy every stratum of society. In adventures that use this theme, an air of paranoia and dread looms as the characters investigate dark mysteries. No one is safe. No one can be trusted.</p>
<p>Not every secret society holds a dark agenda, however, and indeed some secret orders exist to oppose the machinations of evil cults. In time, the characters in an occult adventure might join such an order, or the party itself may come to be recognized as its own faction amongst the occult underworld.</p>
<p>Moving the antagonists' goals forward creates tension and a sense of urgency, and helps to motivate the characters. Even if the characters manage to anticipate the villains' every move, you can heighten the feeling of dark agendas running beneath the surface of your campaign by creating a list of minor, unrelated victories for the secret factions the characters oppose. Perhaps while the characters are distracted stopping a cult from transforming the city gates into a portal to Hell, elsewhere a smaller branch of the cult summons a powerful devil as the first step in another part of the cult leader's overarching plan.</p>
<p>Another way to impress the theme of a ubiquitous occult underworld upon the characters is to hit them close to home. Choose an important NPC dear to one of the characters to be a member of a secret society or a cult that the characters oppose. Consider the scenes in which your NPC has appeared and create an ulterior motive for the character within those scenes that advances the agenda of the secret society or cult to which the NPC belongs. Handled well, this character's motivations will seem clear to the PCs in hindsight, as if you had planned the betrayal from the beginning.</p>
</>};
const _spiritual_warfare = {title: "Spiritual Warfare", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_themes"], siblings: ["the_occult_underworld","spiritual_warfare","into_the_great_beyond","fear_and_reverence_of_the_unknown","ultimate_occult"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 221</Link></p>
<p>Occult elements such as Mysteries within Mysteries, The Price and Power of Knowledge, and Fates Worse Than Death can combine to create a powerful overriding campaign theme highlighting the struggle for dominance between the worlds of the living and the dead. The veils between the worlds are worn thin. Haunts, ghosts, and lost souls are commonplace, though they are not the true antagonists; in such campaigns, the real villains are often powerful outsiders with legions of minions who specialize in the harvesting of souls for a profitable black market in the nether realms. Spirits who seek rest are a common occurrence, and PCs are tasked with discovering the means to help the dead move on one way or another, either through completing tasks a soul left incomplete in life, or by laying the spirit to rest permanently through force of might. Stakes are high in such games, and death is never the end.</p>
</>};
const _into_the_great_beyond = {title: "Into the Great Beyond", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_themes"], siblings: ["the_occult_underworld","spiritual_warfare","into_the_great_beyond","fear_and_reverence_of_the_unknown","ultimate_occult"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 221</Link></p>
<p>GMs who explore the Power and Price of Knowledge and Unseen Realms elements will eventually reveal the presence of parallel realities to this Material Plane. Rather than venturing outward to distant lands, your occult adventurers might turn their focus inward to the strange realms of thoughts, dreams, spirits, and the soul.</p>
<p>When planning adventures along this theme, think about ways the characters can probe the realities before their eyes on a deeper level. For instance, as they investigate mysteries, you may want to occasionally provide ways for them to explore the Transitive Planes, and even the Outer Planes, to discover clues.</p>
<p>A <Link to="/rule/mindscapes">mindscape</Link> is typically a surreal puzzle environment where the characters accomplish their tasks by navigating the mindscape and deceiving or satisfying the controlling mind, overcoming its defenses, unlocking its doors, and learning the secrets buried deep within.</p>
<p>GMs should be prepared to adjudicate scenes where the characters project themselves into non-physical realms. Adventures along this theme might find the characters entering the twisted mindscape of an insane or possessed victim, or they might enter the mindscape of an enemy to steal hidden knowledge or implant subconscious suggestions.</p>
</>};
const _fear_and_reverence_of_the_unknown = {title: "Fear and Reverence of the Unknown", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_themes"], siblings: ["the_occult_underworld","spiritual_warfare","into_the_great_beyond","fear_and_reverence_of_the_unknown","ultimate_occult"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 221</Link></p>
<p>The Mysteries within Mysteries and Unseen Realms elements emphasize the feeling of otherworldly awe that the occult inspires by showing how the everyday world reacts to eerie phenomena. In occult adventures, ordinary people tend to fear unknown circumstances over which they have little control. Rumor and superstition only exacerbate their distress, and a frightened populace can swiftly resort to extreme measures, including holy inquisitions and witch hunts, in order to regain some assurance of security, no matter how short-lived it be.</p>
<p>As a result of societal paranoia, the occult might be a forbidden art for the characters, and one that they must keep secret. Adventures might involve finding and communicating with other occult initiates by signals, tokens, or a specialized cant, while the adventurers bravely fight a shadow war on behalf of a world that shuns them.</p>
<p>As another take on this theme, the common crowd could develop a worshipful fascination toward people or entities skilled in the occult arts, consulting them for knowledge of the future or employing their psychic talents to quickly learn what ordinary folk cannot normally see or know. On the other hand, twisted individuals who wield occult power often attract lackeys and slaves willing to serve the dark arts, and the ranks of wicked cults teem with dangerous, unscrupulous predators enraptured by their charismatic cult leaders.</p>
</>};
const _ultimate_occult = {title: "Ultimate Occult", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_themes"], siblings: ["the_occult_underworld","spiritual_warfare","into_the_great_beyond","fear_and_reverence_of_the_unknown","ultimate_occult"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 222</Link></p>
<p>GMs who wish to fully immerse PCs in an exclusively occult campaign will likely incorporate most or all of the occult elements, and brew multiple, overlapping themes to propel their campaigns toward darker realms. Without changing any game mechanics, arcane and divine classes can share in a game in which the characters are exceptional beings who dare to use powers beyond mortal ken.</p>
<p>NPCs with supernatural powers should be rare, or should conceal themselves from the world at large. Large and powerful churches may exist, exerting significant economic and political power, but only a few individuals ever perform miracles, and even these persons of extraordinary faith may fall out of favor with church doctrine. Perhaps in such campaigns there are no true gods, or their status as divine entities cannot be proven. It may be that the so-called gods are actually various spirits and other inscrutable forces that occupy the space between dimensions. The Outer Planes and the gods who dwell there may be just a shared manifestation of the collective consciousness, which appears to exist only because people believe that it does.</p>
</>};
const _occult_adventure_seeds = {title: "Occult Adventure Seeds", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game"], siblings: ["incorporating_the_occult","occult_elements","occult_themes","occult_adventure_seeds","occult_locations","esoteric_planes"], subtopics: ["a_brace_of_imps","feast_of_souls","golems_revenge","lost_souls","the_menhir","mind_trap","the_order","portrait_of_evil"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 222</Link></p>
<p>The following adventure seeds play on the elements and themes integral to occult adventures.</p>
</>};
const _a_brace_of_imps = {title: "A Brace of Imps", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_adventure_seeds"], siblings: ["a_brace_of_imps","feast_of_souls","golems_revenge","lost_souls","the_menhir","mind_trap","the_order","portrait_of_evil"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 223</Link></p>
<p>Rumors of the corpses of strange creatures appearing for sale in the city are confirmed with the display of a brace of dead <Link to="/monster/imp">imps</Link> in a local market. Where are they from, and why are they here?</p>
<p><strong className="hl">Discovery:</strong> The characters overhear the rush of fear and excitement when the corpses of two imps appear for sale in a local bazaar. It is soon revealed that the source of the corpses is a local ragpicker with some knowledge of the occult, who discovered the imps discarded behind an old lodge building of a defunct fraternal society. Soon, another pair is discovered, and more pairs follow on its heels. What could be causing their appearance, and who is killing them two at a time?</p>
<p><strong className="hl">Adversary:</strong> The imps are actually the messengers of a powerful devil once in league with the defunct secret society. A sorcerer recently took up residence in the old lodge, and the imps began appearing with tempting offerings from their diabolical master. The sorcerer slew the daily emissaries and disposed of their bodies. Their master is angered by the spellcaster's violent response to his daily demands, and soon more powerful forces well out of the sorcerer's league may appear to exact revenge. Can the PCs come to the sorcerer's aid, or are they already too late?</p>
<p><strong className="hl">Further Adventures:</strong> The PCs may gain a new ally in the form of the sorcerer, or a powerful antagonist if she takes the devil's bargain. Does the ragpicker know more than he is willing to admit? What dark secrets does the lodge hold that the devil may seek for himself?</p>
</>};
const _feast_of_souls = {title: "Feast of Souls", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_adventure_seeds"], siblings: ["a_brace_of_imps","feast_of_souls","golems_revenge","lost_souls","the_menhir","mind_trap","the_order","portrait_of_evil"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 223</Link></p>
<p>With alarming frequency, the rising of the morning sun reveals multiple brutal murders from the night before, and the victims' souls, now separated from their mortal vessels, have failed to answer their bereaved relatives' calls during seances. Someone, or something, is harvesting the souls of the deceased before they can reach their ultimate reward.</p>
<p><strong className="hl">Discovery:</strong> The PCs encounter two competing seance circles that seek to uncover the murderer and the fate of the victims' souls. But both groups' ambitions are murky, and their combativeness threatens to rip the community apart. The PCs enter this chaotic scene as desperation sets in among the victims' families, who only want the comfort of knowing their relatives' souls have found final rest.</p>
<p><strong className="hl">Adversary:</strong> The seance circles began with good intentions, but one of them is unwittingly the pawn of a <Link to="/monster/night_hag">night hag</Link>, unknowingly concealing her dread ambitions. The night hag has extorted the local thieves' guild to gain its services by holding its leader hostage with her dream haunting ability. The guild is now murdering innocent victims so that she can bind their souls to her heartstone. She has also extorted a talented spiritualist in service to one seance circle to use his phantom in place of the rival circle's summoned spirits, sabotaging the group closest to discovering the terrible secret behind the murders by spreading disinformation and deceit. The PCs must reveal the truth behind these proceedings by exposing the fraudulent spiritualist or infiltrating the thieves' guild to discover the identity of the true mastermind behind the murders, before they can finally shatter the hag's heartstone and bring rest to the souls of the dead.</p>
<p><strong className="hl">Further Adventures:</strong> Destroying the hag's heartstone frees the bound souls within, but did the hag have a deeper, more insidious motivation than the mere collection of souls for profit in the evil planes? Perhaps she had captured the spirit of a powerful, corrupt entity that now threatens the city with darker strife after gaining its freedom. The PCs have brought peace to the community for a time, but at what price, and what deadly machinations await?</p>
</>};
const _golems_revenge = {title: "Golem's Revenge", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_adventure_seeds"], siblings: ["a_brace_of_imps","feast_of_souls","golems_revenge","lost_souls","the_menhir","mind_trap","the_order","portrait_of_evil"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 223</Link></p>
<p>Years ago, a vicious purge sought to wipe the poor and wretched from their homes in the city's slums, until a mysterious creature came to their salvation. Now, a generation later, the bodies of city authorities are left broken on the slum's streets for all to see.</p>
<p><strong className="hl">Discovery:</strong> The PCs are called on to investigate the murders and find the corpses brutally smashed and savagely disfigured in ways hardly possible for mortal man. Locals suspect a dimwitted strongman from a traveling freak show, but the true culprit is a deadly <Link to="/monster/clay_golem">clay golem</Link> once built for protection.</p>
<p><strong className="hl">Adversary:</strong> The secret society responsible for the original purge is planning another. They decided it would be truly poetic if the same protector that stopped the previous purge became the spark for the new one. Using the <Link to="/spell/awaken_construct">awaken construct</Link> spell, the son of the purge's original architect awakened the old protector, whose creator had since died of old age, and convinced it that he was its father. After sending it out to commit murders of authorities and build anger against the slums, the young aristocrat plans to betray the golem and come out of that betrayal as the hero who stopped the murders, as he leads a second retributive purge of the slums.</p>
<p><strong className="hl">Further Adventures:</strong> The PCs may defeat the golem, but unless they uncover the true plans of the secret society, they haven't thwarted the new purge. Will the PCs come to the rescue of those who cannot protect themselves? Convincing the golem of the truth might net the PCs a powerful ally, but if they destroyed it, they might need to find the old golem crafter's notes and try to teach themselves the occult rituals he used so they can fashion a new golem, if they are to have any hope of defeating the cult's foul undertaking.</p>
</>};
const _lost_souls = {title: "Lost Souls", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_adventure_seeds"], siblings: ["a_brace_of_imps","feast_of_souls","golems_revenge","lost_souls","the_menhir","mind_trap","the_order","portrait_of_evil"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 224</Link></p>
<p>When a wise and benevolent ruler mysteriously falls unconscious and begins to waste away, turmoil erupts throughout the land as various factions vie for power.</p>
<p><strong className="hl">Discovery:</strong> The ruler's regent, a skilled spiritualist, desperately seeks the PCs. The PCs must take a dangerous psychic journey to the Ethereal Plane, the Dimension of Dreams, or both, in order to find the monarch's errant mind or soul and bring it back before the body dies and the land is divided by strife. If the PCs perish while on this journey, their bodies suffer the same fate as the ruler.</p>
<p><strong className="hl">Adversary:</strong> The ruler has no desire to return to the sorrows of life on the Material Plane, and opposes the PCs at every turn. On the Ethereal Plane, the ruler's spirit makes a procession toward Heaven accompanied by the spirits of loyal knights. The procession visits the ethereal versions of three places significant to the ruler in life. If the characters travel to the Dimension of Dreams, these places are idealized memories rather than ethereal haunts. Regardless of the reality the PCs visit, the ruler resists them. The characters must learn the true reasons for the ruler's sorrow and convince the mind or soul to return to the body. Along the way, they may clash with the ruler's champions as they seek to accomplish their goals.</p>
<p><strong className="hl">Further Adventures:</strong> If the ruler's coma was result of the dark arts or an attempted assassination, the true culprits may lurk in ambush for the characters as they voyage through these strange realms. And as the characters explore, they find the processions of other rulers heading toward Heaven or Hell. Are these events all somehow connected?</p>
</>};
const _the_menhir = {title: "The Menhir", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_adventure_seeds"], siblings: ["a_brace_of_imps","feast_of_souls","golems_revenge","lost_souls","the_menhir","mind_trap","the_order","portrait_of_evil"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 224</Link></p>
<p>Every generation, the people of a village on a windswept moor venture out to a solitary menhir, where they join hands and say old words in a language that's been passed down from generation to generation. Farther from this place, in a hidden hillside glen, is a smaller circle of stones - one for every generation - with human bones buried below, the remains of offerings.</p>
<p><strong className="hl">Discovery:</strong> The PCs stop at the village during the course of their adventures. During their stay, the villagers welcome them and throw a feast, declaring one PC to be the "monarch" of the harvest and a villager the PC's symbolic "consort." During the night, the villagers make a clumsy attempt to abduct the honored PC and bring him to the menhir (if they fail to abduct the PC, they snatch a second villager instead). The villagers abandon their homes and gather around the menhir, chanting words in a forgotten language. The chosen monarchs are within the circle, seemingly unharmed. If the PCs don't interfere, the next day the king and queen are simply gone, and the villagers claim ignorance of their whereabouts and seem reluctant to investigate.</p>
<p><strong className="hl">Adversary:</strong> A psychic ghost or aberrant horror bound to the menhir manifests every generation to feed on the offerings provided by the villagers. When the being feeds, the menhir glows with a soft golden radiance, and the land for miles around becomes rich and fertile for a whole generation. If the PCs stake out the menhir during the night of the sacrifice, they have a chance to fight the creature, and if they rescue the sacrifices, the creature comes after them.</p>
<p><strong className="hl">Further Adventures:</strong> Creatures of psychic power are attracted to a ley line passing through the menhir. Following the ley line leads to other villages with their own menhirs; those that were denied their sacrifices are now surrounded by dry and desolate land where nothing lives. Ley lines lead from these menhirs as well, on and on throughout the world. Generation after generation, the beings bound to these menhirs feed and grow more powerful. How can the PCs release the common folk from these mysterious horrors?</p>
</>};
const _mind_trap = {title: "Mind Trap", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_adventure_seeds"], siblings: ["a_brace_of_imps","feast_of_souls","golems_revenge","lost_souls","the_menhir","mind_trap","the_order","portrait_of_evil"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 224</Link></p>
<p>The PCs find a remarkable amount of success during their exploits, but all is not as it seems.</p>
<p><strong className="hl">Discovery:</strong> After concluding a previous adventure, the PCs celebrate a job well done. During their revelry, they meet a woman who is excited for their success and invites them to her villa. She offers comfortable beds, fine foods and drinks, and the run of her abode. She tells them they are welcome to stay as long as they like, if they help her with a simple task.</p>
<p><strong className="hl">Adversary:</strong> The woman is actually the consciousness of an ancient being imprisoned within an immersive mindscape. It long ago stopped trying to escape its mental prison, and now all it wants is some companionship. The PCs were unknowingly drawn into the consciousness's mindscape at some point during their previous adventure, and are now trapped there with it. The consciousness creates whatever the characters desire, weaving a compelling tapestry of experience at first indistinguishable from the material world. Eventually, the characters figure out that wealth, fame, and fortune are falling into their laps just a little too easily and realize they must find a way out of the mindscape.</p>
<p><strong className="hl">Further Adventures:</strong> The PCs might decide to destroy the mindscape - perhaps by traveling to the Dimension of Dreams, and possibly even freeing the ancient consciousness in the process. Other trapped creatures might exist inside the mindscape, and freeing them might provide the characters with future contacts or adversaries.</p>
</>};
const _the_order = {title: "The Order", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_adventure_seeds"], siblings: ["a_brace_of_imps","feast_of_souls","golems_revenge","lost_souls","the_menhir","mind_trap","the_order","portrait_of_evil"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 225</Link></p>
<p>Following a series of disasters or a virulent plague, the desperate populace places its faith in a fanatical faction of an otherwise reputable church. With great resources now at their disposal, the zealots promise to undo the curse by appeasing the gods through punishment of evildoers and heretics.</p>
<p><strong className="hl">Discovery:</strong> "Witch hunters" begin an inquisition and arrest anyone who dabbles in magic or the supernatural, including clerics of other faiths. The PCs enter the scene when the witch hunters attempt to arrest them or their allies, or when family members and close associates are captured by the order.</p>
<p><strong className="hl">Adversary:</strong> Outwardly, the leader of the order, the Truthseeker, appears to be its most rational and penitent member. In truth, this person is a psychic tyrant who uses his abilities to read minds and expose enemies of the order. In short time, the splinter faction becomes a powerful cult as the Truthseeker trains the witch hunters to read minds and tell the future. The PCs might simply rescue their allies from the order, or they might expose the Truthseeker.</p>
<p><strong className="hl">Further Adventures:</strong> As the Truthseeker's cult gathers power, how does the original church respond? How many cities and towns has it infiltrated, and how readily does it swell its numbers? Did the cultists cause the tragic events that led to their rise to power? Even if the PCs stop the Truthseeker, is another cult member ready to take up the mantle?</p>
</>};
const _portrait_of_evil = {title: "Portrait of Evil", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_adventure_seeds"], siblings: ["a_brace_of_imps","feast_of_souls","golems_revenge","lost_souls","the_menhir","mind_trap","the_order","portrait_of_evil"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 225</Link></p>
<p>The PCs are tasked with looking into a series of disappearances in a major city. During their investigation, they accidentally come across evidence that implicates a local noble. While the evidence is conclusive in their eyes, it's inadmissible to the local courts, and they soon find themselves at odds with the accused. The PCs are unaware that their suspect is the owner of a <Link to="/magic-artifact/soul_portrait">soul portrait</Link>.</p>
<p><strong className="hl">Discovery:</strong> As the PCs delve into the background of the accused, they learn that despite her youthful appearance, she is well into her seventies. Further research reveals that a series of her acquaintances, competitors, and family members disappeared in the years following her thirtieth birthday. Detailed investigation discovers the accused's obsession with a portrait commissioned in her late twenties, a portrait that some visitors describe as a vision of a rare and radiant beauty, and others speak of only in haunted whispers.</p>
<p><strong className="hl">Adversary:</strong> The accused noble is defended by a legion of mercenaries who are too powerful for the PCs to assault directly. The soul portrait prevents divinations that would reveal her true nature, projecting the image of her innocent younger self. While the PCs are sure she is the cause of the disappearances and other crimes, the noble deflects any blame by means of her sizable wealth and perceived charitable nature. When the PCs truly become a threat to her, the noble attacks those closest to them using various forms of harassment and torture. The PCs have to contend with a foe empowered by the (mistaken) belief that she can suffer no consequences from her actions. Eventually, unless the PCs find a way to catch the accused in a situation where her portrait can't protect her, they are forced to take the law into their own hands.</p>
<p><strong className="hl">Further Adventures:</strong> When the accused is defeated, her image moves to the background of the soul portrait, and the PCs are left with the unsavory task of deciding what to do with the artifact. Less scrupulous PCs may decide to take it for themselves, commissioning an artist to add their likenesses to the canvas, having learned of the powers bequeathed by the portrait. PCs with stronger morals might seek to destroy the artifact, but will soon learn that only the owner of a soul portrait can destroy it- and at the high cost of another's life.</p>
</>};
const _occult_locations = {title: "Occult Locations", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game"], siblings: ["incorporating_the_occult","occult_elements","occult_themes","occult_adventure_seeds","occult_locations","esoteric_planes"], subtopics: ["loci_spirits","loci_spirit_rules","corrupting_a_loci_spirit","elements_of_a_loci_spirit","creating_a_loci_spirit","ley_lines","qualities_of_ley_lines","finding_ley_lines","using_ley_lines","mindscapes","binary_mindscapes","immersive_mindscapes","mindscape_traits"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 226</Link></p>
<p>When it comes to occult adventures, locations themselves can be living things, serving as active participants in paranormal stories.</p>
</>};
const _loci_spirits = {title: "Loci Spirits", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations"], siblings: ["loci_spirits","loci_spirit_rules","corrupting_a_loci_spirit","elements_of_a_loci_spirit","creating_a_loci_spirit","ley_lines","qualities_of_ley_lines","finding_ley_lines","using_ley_lines","mindscapes","binary_mindscapes","immersive_mindscapes","mindscape_traits"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 226</Link></p>
<p>Loci spirits form when excess psychic energy becomes saturated with powerful positive emotional resonances. Loci spirits typically arise in places with connections to previous miracles, benevolent guardian spirits, or good-aligned deities. Loci spirits infuse a specific area; their psychic energy heightens the positive emotions experienced there to create a feeling of peace and protection. A loci spirit also manifests a unique ceremonial power linked specifically to the emotional energy that birthed the spirit. Except in rare circumstances, a given area can house at most one loci spirit.</p>
</>};
const _loci_spirit_rules = {title: "Loci Spirit Rules", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations"], siblings: ["loci_spirits","loci_spirit_rules","corrupting_a_loci_spirit","elements_of_a_loci_spirit","creating_a_loci_spirit","ley_lines","qualities_of_ley_lines","finding_ley_lines","using_ley_lines","mindscapes","binary_mindscapes","immersive_mindscapes","mindscape_traits"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 226</Link></p>
<p>The emanating feelings of peace and protective warmth make a loci spirit obvious to those within its area. A loci spirit is always LG, NG, or CG in alignment and has the aura of a good outsider for the purposes of <Link to="/spell/detect_good">detect good</Link> and similar magic.</p>
<p>A loci spirit can infuse an area with a maximum radius of 5 feet &times; the spirit's CR, but the actual area is usually limited by the size and shape of the area tied to the spirit's origin.</p>
<p><strong className="hl">Permanent Effects:</strong> A loci spirit generates at least one of the three following permanent effects within the area it inhabits. A loci spirit may possess an additional ongoing permanent effect, and each effect beyond the first increases the loci spirit's CR by 1.</p>
<p><strong className="hl">Energized:</strong> The DC to resist positive channeled energy within the loci spirit's area gains a +4 sacred bonus, and the DC to resist negative energy is reduced by 4. Spell resistance does not apply to this effect.</p>
<p><strong className="hl">Protective:</strong> The loci spirit's area is warded by a <Link to="/spell/magic_circle_against_evil">magic circle against evil</Link> effect.</p>
<p><strong className="hl">Sacred:</strong> Every undead creature entering the area of a loci spirit takes a -1 penalty on attack rolls, damage rolls, and saving throws.</p>
<p>In addition to the permanent effect, each loci spirit has a ceremonial effect that another creature can activate by performing a specific ceremonial activity. Knowledge of the appropriate ceremony to activate a loci spirit's ceremonial effect is rare and can be a reward in its own right, but the GM can allow a creature to attempt a Knowledge (planes) or Knowledge (religion) check, as appropriate, with a DC equal to 20 + the loci spirit's CR to gain clues about or even fully determine the details of the ceremony.</p>
<p>The ceremony to manifest a loci spirit's ceremonial effect requires the celebrant to perform each of the requisite skill checks detailed in the loci spirit's stat block. When the celebrant successfully completes the ceremony, the loci spirit immediately manifests its effect.</p>
<p><strong className="hl">Manifestation Type:</strong> Each loci spirit's ceremonial effect has one of the following manifestation types.</p>
<p><strong className="hl">Singular:</strong> The effect targets or affects only the celebrant.</p>
<p><strong className="hl">Coterie:</strong> The effect targets all creatures in the loci spirit's area or is potentially useful to creatures other than the celebrant (for instance, creating something that anyone could use would be a coterie manifestation).</p>
<p><strong className="hl">Boon:</strong> The effect targets all creatures in the loci spirit's area with a boon allowing affected characters to use the effect within the next 24 hours as an immediate action. A creature can benefit from only one boon from a loci spirit at a time.</p>
<p>After a loci spirit manifests its ceremonial effect, or after a failed ceremony, the spirit can't manifest the effect again for another 24 hours.</p>
</>};
const _corrupting_a_loci_spirit = {title: "Corrupting a Loci Spirit", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations"], siblings: ["loci_spirits","loci_spirit_rules","corrupting_a_loci_spirit","elements_of_a_loci_spirit","creating_a_loci_spirit","ley_lines","qualities_of_ley_lines","finding_ley_lines","using_ley_lines","mindscapes","binary_mindscapes","immersive_mindscapes","mindscape_traits"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 227</Link></p>
<p>Loci spirits can't be damaged conventionally, but are susceptible to corruption if certain actions occur within their areas. Each loci spirit has a number of hit points equal to twice its CR, which it uses to resist corruption. Certain particularly vile acts reduce a loci spirit's hit points and bring it closer to corruption, while certain acts of good can restore hit points and protect the loci spirit from corruption.</p>
<p>If a loci spirit is reduced to 0 hit points, it becomes corrupted; thereafter, it acts as a <Link to="/rule/haunts">haunt</Link> of the same CR and loses any loci spirit permanent effects. Once a loci spirit has been corrupted, its effects instead manifest as mind-affecting fear effects. These new effects should have a similar power level to that of the ceremonial effect the loci spirit previously manifested. A corrupted loci spirit has the aura of an evil outsider for the purposes of <Link to="/spell/detect_evil">detect evil</Link> and similar effects. Unlike a haunt, a corrupted loci spirit can't take the tricked by <Link to="/spell/hide_from_undead">hide from undead</Link> weakness, but it can take most other haunt modifiers as long as its CR remains the same. The haunt has the same number of hit points as the loci spirit originally did; these are separate from its loci spirit hit points, which remain at 0 until the loci spirit is purified.</p>
<p>Corrupted loci spirits can be neutralized or destroyed in the same fashion as haunts. While a corrupted loci spirit is inactive because of being neutralized, characters can use effects that restore a loci spirit's hit points to attempt to purify it (see the table below). For the purpose of purification, increasing the loci spirit's hit points does not restore the haunt's hit points. If a character manages to restore the full hit points of the uncorrupted loci spirit, the character has purged the corruption entirely, and the loci spirit returns to its former benevolence. This could potentially occur over the course of multiple encounters with the corrupted spirit. Until then, the haunt continues to reset.</p>
<ScrollContainer id="rule-corrupting_a_loci_spirit--table-0"><table>
<thead>
<tr>
<th>Act</th>
<th>Effect</th>
</tr>
</thead>
<tbody><tr>
<td>Committing a violent act</td>
<td>Reduces hit points by 1</td>
</tr>
<tr>
<td>Committing murder</td>
<td>Reduces hit points by 1 for every 3 Hit Dice of the victim (minimum 1 hit point)</td>
</tr>
<tr>
<td>Casting <Link to="/spell/animate_dead">animate dead</Link></td>
<td>Reduces hit points by 1 per undead created</td>
</tr>
<tr>
<td>Casting <Link to="/spell/create_undead">create undead</Link> or <Link to="/spell/create_greater_undead">create greater undead</Link></td>
<td>Reduces hit points by 1 per level of spell cas</td>
</tr>
<tr>
<td>Summoning an evil outsider</td>
<td>Reduces hit points by 1 per evil outsider summoned</td>
</tr>
<tr>
<td>Calling an evil outsider</td>
<td>Reduces hit points by 1 per level of spell cast</td>
</tr>
<tr>
<td>Casting <Link to="/spell/desecrate">desecrate</Link></td>
<td>Reduces hit points by 2</td>
</tr>
<tr>
<td>Casting <Link to="/spell/unhallow">unhallow</Link></td>
<td>Reduces hit points by 4</td>
</tr>
<tr>
<td>Successfully performing the loci spirit's ceremony</td>
<td>Restores 2 hit points</td>
</tr>
<tr>
<td>Casting <Link to="/spell/consecrate">consecrate</Link></td>
<td>Restores 2 hit points (maximum once per day)</td>
</tr>
<tr>
<td>Casting <Link to="/spell/hallow">hallow</Link></td>
<td>Restores 4 hit points</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _elements_of_a_loci_spirit = {title: "Elements of a Loci Spirit", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations"], siblings: ["loci_spirits","loci_spirit_rules","corrupting_a_loci_spirit","elements_of_a_loci_spirit","creating_a_loci_spirit","ley_lines","qualities_of_ley_lines","finding_ley_lines","using_ley_lines","mindscapes","binary_mindscapes","immersive_mindscapes","mindscape_traits"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 227</Link></p>
<p>Loci spirits are presented in the following format.</p>
<p><strong className="hl">Loci Spirit Name:</strong> The loci spirit's name is followed by its CR.</p>
<p><strong className="hl">XP:</strong> This is the amount of XP to award the PCs for surviving the loci spirit's corrupted form, as determined by the spirit's CR. At the GM's discretion, characters who intentionally corrupt a loci spirit in pursuit of their goals may receive this amount of XP for doing so.</p>
<p><strong className="hl">Alignment, Permanent Effects, Manifestation Type, and Area:</strong> This line gives the loci spirit's alignment, its permanent effects and manifestation type, and the dimensions of the area it infuses (up to 5 feet per caster level).</p>
<p><strong className="hl">Caster Level:</strong> This is the loci spirit's effective caster level for the purposes of dispelling any ongoing effects with <Link to="/spell/dispel_magic">dispel magic</Link>, and for determining the results of spell effects it creates.</p>
<p><strong className="hl">hp:</strong> This lists the loci spirit's effective hit points for the purposes of resolving corruption. A loci spirit's number of hit points is equal to twice the spirit's CR.</p>
<p><strong className="hl">Weakness:</strong> Any weaknesses the loci spirit has, such as being susceptible to corruption or hard to heal, are listed here.</p>
<p><strong className="hl">Ceremony:</strong> These are the skill checks that must be performed in order for the loci spirit to manifest its ceremonial effect.</p>
<p><strong className="hl">Effect:</strong> This entry details the ceremonial effect of the loci spirit, and includes a description of how the loci spirit manifests.</p>
<p><strong className="hl">Corruption Effect:</strong> This entry gives a brief description of what the loci spirit's effects become if it is corrupted.</p>
</>};
const _creating_a_loci_spirit = {title: "Creating a Loci Spirit", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations"], siblings: ["loci_spirits","loci_spirit_rules","corrupting_a_loci_spirit","elements_of_a_loci_spirit","creating_a_loci_spirit","ley_lines","qualities_of_ley_lines","finding_ley_lines","using_ley_lines","mindscapes","binary_mindscapes","immersive_mindscapes","mindscape_traits"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 228</Link></p>
<p>To make your own loci spirit like the examples below, follow these steps.</p>
<p><strong className="hl">Step 1-Determine Base CR:</strong> A loci spirit's base CR is equal to 1 + the level of the spell it duplicates.</p>
<p><strong className="hl">Step 2-Determine Actual CR:</strong> Select the elements you want the loci spirit to have and add up the adjustments to its CR to arrive at the loci spirit's final CR (see Table 6-1: CR Modifiers for Loci Spirits).</p>
<p><strong className="hl">Step 3-Determine Caster Level:</strong> A loci spirit's caster level is equal to its CR.</p>
<p><strong className="hl">Step 4-Determine Hit Points:</strong> A loci spirit's hit points are equal to twice its CR.</p>
<p><strong className="hl">Step 5-Determine Ceremony DC:</strong> The ceremony check DC is equal to 20 + the loci spirit's CR.</p>
<p><strong className="hl">Step 6-Save DCs:</strong> If a loci spirit's ceremonial effect allows a saving throw to resist or negate the effect, the save DC is equal to 10 + the level of the spell + the ability modifier of the minimum ability score needed to cast that level of spell. Normally, the ceremonial effect is harmless and thus applies only if a creature voluntarily wishes to resist or negate the effect.</p>
<p><strong className="hl">Step 7-Determine Corruption Effect, Attack, and Save DCs:</strong> A corrupted loci spirit manifests a mind-affecting fear effect with the same spell level as its unique effect. A corrupted loci spirit's attack bonus (if needed) is usually equal to its CR.</p>
<h3 id="rule-creating_a_loci_spirit-table-6-1-cr-modifiers-for-loci-spirits">Table 6-1: CR Modifiers for Loci Spirits</h3>
<ScrollContainer id="rule-creating_a_loci_spirit--table-0"><table>
<thead>
<tr>
<th>Feature Type</th>
<th>CR Modifiers for Loci Spirits</th>
</tr>
</thead>
<tbody><tr>
<td>Ceremony requires more than 1 skill check</td>
<td>+1 for each additional skill check</td>
</tr>
<tr>
<td>Permanent effects</td>
<td>+1 for each additional permanent effect beyond the first</td>
</tr>
<tr>
<td>Singular</td>
<td>-1</td>
</tr>
<tr>
<td>Coterie</td>
<td>0</td>
</tr>
<tr>
<td>Boon</td>
<td>+1</td>
</tr>
<tr>
<td>Hard to heal</td>
<td>-1<sup><InnerLink showBacklink="backlink-rule-creating_a_loci_spirit-ref-1-1" id="rule-creating_a_loci_spirit-ref-1-1" data-hash-target to="rule-creating_a_loci_spirit-1">1</InnerLink></sup></td>
</tr>
<tr>
<td>Susceptible to</td>
<td>-1<sup><InnerLink showBacklink="backlink-rule-creating_a_loci_spirit-ref-2-1" id="rule-creating_a_loci_spirit-ref-2-1" data-hash-target to="rule-creating_a_loci_spirit-2">2</InnerLink></sup></td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-creating_a_loci_spirit-benevolent-priest-cr-5">Benevolent Priest CR 5</h3>
<p><strong>XP 1,600</strong> NG protective coterie loci spirit (10-ft.-by-10-ft. room) <strong>Caster Level</strong> 5th hp 10; <strong>Ceremony</strong> Knowledge (religion) DC 25, Survival DC 25 <strong>Effect</strong> When the celebrant performs the appropriate offering of twigs and berries, the loci spirit manifests as a ghostly, rotund man in clerical garb bearing trays of food, which he offers to the celebrant and its allies, as the <Link to="/spell/create_food_and_water">create food and water</Link> spell. <strong>Corruption Effect</strong> <em>Create food and water</em> becomes <Link to="/spell/contagion">contagion</Link> (DC 14).</p>
<h3 id="rule-creating_a_loci_spirit-ghostly-warriors-cr-5">Ghostly Warriors CR 5</h3>
<p><strong>XP 1,600</strong> LG sacred boon loci spirit (5-ft. radius centered on the shrine) <strong>Caster Level</strong> 5th hp 10; <strong>Ceremony</strong> Diplomacy DC 25, Perform (oratory) DC 25 <strong>Effect</strong> Invoking the ceremony with pomp and vigor rouses a cadre of ghostly figures in ancient armor that kneel before all creatures in the loci spirit's area of effect and present their weapons, granting a boon of <Link to="/spell/align_weapon">align weapon</Link> (each recipient's choice of lawful or good only). <strong>Corruption Effect</strong> <em>Align weapon</em> becomes <Link to="/spell/shatter">shatter</Link> (DC 13).</p>
<h3 id="rule-creating_a_loci_spirit-heros-call-cr-4">Hero's Call CR 4</h3>
<p><strong>XP 1,200</strong> CG energized singular loci spirit (15-ft. radius centered on the hero's statue) <strong>Caster Level</strong> 4th hp 8; <strong>Ceremony</strong> Knowledge (history) DC 24, Perform (oratory) DC 24 <strong>Effect</strong> The celebrant entreats the brave hero from the ancient past, recalling the hero's great deeds and requesting some of the hero's strength for the celebrant's own quest. If the ceremony is successful, the hero's statue seems to raise its sword in a salute, and the celebrant gains the benefit of a <Link to="/spell/heroism">heroism</Link> spell. <strong>Corruption Effect</strong> <em>Heroism</em> becomes <Link to="/spell/scare">scare</Link> (DC 13).</p>
<section data-footnotes>
<h3 id="rule-creating_a_loci_spirit-label">Footnotes</h3>
<ol>
<li id="rule-creating_a_loci_spirit-1">
<p>Loci spirits that are hard to heal gain only half the normal amount of hit points from effects that restore hit points. <InnerLink id="backlink-rule-creating_a_loci_spirit-ref-1-1" data-hash-target to="rule-creating_a_loci_spirit-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="rule-creating_a_loci_spirit-2">
<p>Loci spirits that are susceptible to corruption lose twice the amount of hit points from corrupting actions. <InnerLink id="backlink-rule-creating_a_loci_spirit-ref-2-1" data-hash-target to="rule-creating_a_loci_spirit-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _ley_lines = {title: "Ley Lines", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations"], siblings: ["loci_spirits","loci_spirit_rules","corrupting_a_loci_spirit","elements_of_a_loci_spirit","creating_a_loci_spirit","ley_lines","qualities_of_ley_lines","finding_ley_lines","using_ley_lines","mindscapes","binary_mindscapes","immersive_mindscapes","mindscape_traits"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 232</Link></p>
<p>Researchers into the occult theorize that all the worlds of the Material Plane and the planes beyond are alive. While the exact measure of life and consciousness the universe exhibits is debated, attempts to quantify this cosmic biology point toward the phenomenon of ley lines as proof. Ley lines are conduits of magical energy that traverse all known corners of creation, serving the same function as the veins and arteries of living creatures. These conduits, connecting geographical and cosmological features both great and small, grant knowledge and power to those who tap into them.</p>
</>};
const _qualities_of_ley_lines = {title: "Qualities of Ley Lines", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations"], siblings: ["loci_spirits","loci_spirit_rules","corrupting_a_loci_spirit","elements_of_a_loci_spirit","creating_a_loci_spirit","ley_lines","qualities_of_ley_lines","finding_ley_lines","using_ley_lines","mindscapes","binary_mindscapes","immersive_mindscapes","mindscape_traits"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 232</Link></p>
<p>A ley line carries raw magical energy along with psychic impressions and other ambient energy its absorbs from its surroundings. This causes ley lines to seed magical effects, subconscious thoughts, and other supernatural phenomena along their paths, and sometimes creates unusual supernatural effects.</p>
<p>Psychic impressions carried down ley lines can impact the cultural and psychological growth of peoples living along the path of a ley line. Such alignments can cause two civilizations separated by thousands of miles - or even separated by planar boundaries - to evolve along similar developmental paths. Towns built on opposite ends of a ley line may have identical (or sometimes mirrored) street plans and similar histories. Artists living near a ley line may unconsciously convey their ideas to other artists on other planes, creating instances of parallel design. When a ley line penetrates planes, it can carry influences from one plane into another, making ley lines partially responsible for the appearance of tieflings and aasimars in bloodlines that had no prior history of contact with outsiders. This effect is also responsible for some of the propagation of sorcerous power, psychic powers, and other unusual magical phenomena such as haunts and <Link to="/rule/loci_spirits">loci spirits</Link>.</p>
<p>Like the arteries of a circulatory system, ley lines come in many different sizes. The larger a ley line, the more capacity it has to carry magical energy. The size of a given ley line can change over time, however, and may vary at different points along its length. The size of a ley line generally impacts the strength and kinds of power that can be drawn from it by spellcasters. Ley lines have an effective caster level ranging from 1 to 20 that represents the overall strength of the ley line and determines the power of effects associated with it.</p>
</>};
const _finding_ley_lines = {title: "Finding Ley Lines", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations"], siblings: ["loci_spirits","loci_spirit_rules","corrupting_a_loci_spirit","elements_of_a_loci_spirit","creating_a_loci_spirit","ley_lines","qualities_of_ley_lines","finding_ley_lines","using_ley_lines","mindscapes","binary_mindscapes","immersive_mindscapes","mindscape_traits"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 232</Link></p>
<p>A ley line's natural state is as an imperceptible current of energy. Finding a ley line requires the use of a skill or spell that can detect the magical energy a ley line radiates. <Link to="/spell/detect_magic">Detect magic</Link> can locate the presence of an accessible portion of a ley line within its area of effect and uses the ley line's effective caster level to determine its aura's strength as if the ley line were a magic item. <Link to="/spell/true_seeing">True seeing</Link> reveals all accessible ley lines within its area of effect; they appear as ghostly bundles of tightly packed streams of energy. The color of a ley line is representative of its overall power level. Ley lines with a caster level of 1 are a dark violet color, while ley lines with a caster level of 20 are deep red. Ley lines with caster levels between 1 and 20 range across the color spectrum as appropriate (starting with violet and continuing to blue, green, yellow, orange, and finally red). Divination magic such as <Link to="/spell/contact_other_plane">contact other plane</Link>, <Link to="/spell/divination">divination</Link>, and <Link to="/spell/commune">commune</Link> can help narrow down the location of a ley line. Additionally, <Link to="/spell/legend_lore">legend lore</Link> can help reveal information about a known ley line. Occult skill unlocks such as <Link to="/skill/dowsing">dowsing</Link> can also help detect the presence of ley lines over long distances, which can be quite useful in locating an accessible portion of a ley line.</p>
<p>Because of ley lines' ability to pick up ambient energy, some local effects can cause portions of a ley line to become visible. For example, in areas of wild magic, an extant ley line may manifest as a shimmering river of rainbow-hued light constantly shifting through the color spectrum, while locations with a powerful presence of negative energy might cause a ley line to appear as a tendril of darkness that bleeds an ephemeral black smoke tinged with red light.</p>
<p>Ley lines do not generally move from location to location. While the exact paths they take may drift over the course of millennia or eons, these changes are largely unnoticed by all but the longest-lived races. As such, the discovery of a ley line can impact a region for millennia and draw attention from those seeking to exploit the ley line's power. Civilizations that discover ley lines sometimes mark the locations in which their power is most easily accessible by erecting monuments such as menhir circles or obelisks. These sites are typically used to perform rituals or other functions that tap into the latent power of a ley line to enhance spellcasting. A powerful wizard might build his tower atop a particularly strong ley line, a druidic sect might construct a menhir circle nearest to where a ley line touches the ground, or an ancient dragon might build its mountaintop lair as close to a ley line in the sky as possible. Accurate maps and charts depicting the paths and intersections of ley lines are reliable for centuries or more and can reveal nodes of power across worlds and planes.</p>
</>};
const _using_ley_lines = {title: "Using Ley Lines", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations"], siblings: ["loci_spirits","loci_spirit_rules","corrupting_a_loci_spirit","elements_of_a_loci_spirit","creating_a_loci_spirit","ley_lines","qualities_of_ley_lines","finding_ley_lines","using_ley_lines","mindscapes","binary_mindscapes","immersive_mindscapes","mindscape_traits"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 233</Link></p>
<p>While a ley line can range from hundreds to thousands of miles long or more, most portions of a ley line are only faintly visible to powerful magic, and their power is inaccessible. However, spellcasters can tap into rare sites where the power of ley lines is concentrated, or where ley lines cross, to increase their power. These sites can be of any size, ranging from a tiny cave under a great mountain to an entire mountain range.</p>
<p>Most of the effects generated by a ley line's accessible portions are passive and easy to miss. Planar energy, psychic impressions, and other collected powers bleed out into the land and influence the development of local life. A creature capable of casting spells or using spell-like abilities can attempt to tap into an accessible segment of a ley line within 100 feet. Doing so takes 1 hour per 2 caster levels of the ley line and requires a Spellcraft check with a DC equal to 20 + the ley line's caster level. Success indicates the creature is attuned to the ley line and gains a +1 bonus to its effective caster level for all spells and spell-like abilities. This bonus increases by 1 for every 5 caster levels of the ley line, to a maximum of +5. Depending on the nature of the ley line convergence, this bonus may apply only to certain spells and spell-like abilities. For instance, a ley line convergence atop a great volcano might apply its bonus only to spells and spell-like abilities with the fire descriptor. Hags or other creatures with the coven ability benefit from the bonus of ley line attunement so long as at least one member of the coven is attuned to the ley line and all coven members are within 10 feet of an attuned creature. Some ley lines also grant creatures attuned to them special abilities such as bonus spells, spell-like abilities, or other supernatural effects. Once a creature is attuned to a ley line, the bond is permanent unless dispelled. <Link to="/spell/dispel_magic">Dispel magic</Link> and similar effects can break a creature's attunement to a ley line; the caster attempting to break the attunement must succeed at a caster level check with a DC equal to 11 + the caster level of the ley line. When an attuned creature is more than 100 feet from the ley line, it gains no benefit from the attunement, but the benefits return when it is once again in proximity.</p>
<p>Ley lines can become damaged over the course of time, whether by extreme magical forces or other monumental events. Damage in this manner can cause a supernatural bruise that bleeds out into the location surrounding a ley line. Harming or destroying ley lines is difficult, given their monumental size and power. Even the weakest of ley lines are impervious to most physical and magical attacks, though great forces can exert influence over them. <Link to="/spell/mages_disjunction">Mage's disjunction</Link> can potentially destroy a ley line, though this task requires the caster to succeed at a caster level check with a DC equal to 20 + the ley line's caster level. Doing so immediately deals 2d6 points of damage per caster level of the ley line (no saving throw) to the caster. Additionally, all creatures attuned to the ley line and able to benefit from attunement take 1d6 points of nonlethal damage per caster level of the ley line when it is destroyed. There is a 1% chance per caster level of the ley line that its destruction creates a permanent <Link to="/spell/antimagic_field">antimagic field</Link> with a radius of 100 feet per caster level of the destroyed ley line. Furthermore, the caster of <em>mage's disjunction</em> who creates an <em>antimagic field</em> in this way must succeed at a DC 25 Will save or permanently lose all spellcasting abilities. These abilities cannot be recovered by mortal magic, not even via <Link to="/spell/miracle">miracle</Link> or <Link to="/spell/wish">wish</Link>.</p>
</>};
const _mindscapes = {title: "Mindscapes", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations"], siblings: ["loci_spirits","loci_spirit_rules","corrupting_a_loci_spirit","elements_of_a_loci_spirit","creating_a_loci_spirit","ley_lines","qualities_of_ley_lines","finding_ley_lines","using_ley_lines","mindscapes","binary_mindscapes","immersive_mindscapes","mindscape_traits"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 234</Link></p>
<p>Mindscapes are temporary constructs of the mind that come into being on the Astral Plane and fade away again, in much the same way a sleeping person's imagined landscape forms and dissolves while he is dreaming. The primary difference between a mindscape and a dream is one of intent; a creature often deliberately and precisely constructs a mindscape, while a dreamer typically does not. A mindscape can come into existence as a result of creatures engaging in a <Link to="/rule/psychic_duels">psychic duel</Link>, as well as through certain spells, magic items, rituals, and other occult phenomena. In theory, a mindscape can take on any form or appearance - and can possess any conceivable trait - in much the same way the various planes do. In practice, mindscapes often either appear mostly normal, or feature only one or two traits that stray from reality, and creatures' psychic avatars manifesting within the mindscape might not be able to tell they're no longer in the real world.</p>
<p>Two types of mindscape exist: binary mindscapes and immersive mindscapes. Binary mindscapes occur during psychic duels, when a creature with psychic powers draws another into a mental battle. Only two participants can occupy a binary mindscape. This cerebral combat arena does not totally engulf the participants' senses; a creature engaged in a psychic duel within a binary mindscape can still perceive the real world, but is largely consumed in her psychic battle. In this case, the mindscape is a powerful image in the mind's eye, perceived on an abstract level and capable of affecting the subject in the real world, detaching her from events in the real world but leaving her still capable of perceiving them.</p>
<p>Immersive mindscapes are far more tangible and realistic. In an immersive mindscape, a creature's every sense perceives its imaginary surroundings completely, in effect replacing the body's actual sensory perceptions.</p>
<p>While a creature's consciousness is within a mindscape, that creature's body in the real world can take no actions and loses its Dexterity bonus to AC, but it isn't considered helpless, as the unconscious parts of the creature's mind still provide resistance to the creature's destruction. While in an immersive mindscape, the mind gets no information about what the body sees, hears, smells, or touches. Thus, if the body takes damage from an attack in the real world, the mind remains unaware of it. A binary mindscape, however, allows a creature to monitor its own condition in the real world.</p>
<h3 id="rule-mindscapes-mental-masks">Mental Masks</h3>
<p>Creatures drawn into mindscapes don't have to appear as themselves, and can instead assume alternate forms called mental masks. They can do so only if they know they're in a mindscape or believe they're in a dream (the creator of a mindscape almost always does). A mental mask allows a creature to hide its true identity, masking its true features from its enemies. Non-psychic creatures can't assume a mental mask; they must appear in immersive mindscapes in their true forms.</p>
</>};
const _binary_mindscapes = {title: "Binary Mindscapes", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations"], siblings: ["loci_spirits","loci_spirit_rules","corrupting_a_loci_spirit","elements_of_a_loci_spirit","creating_a_loci_spirit","ley_lines","qualities_of_ley_lines","finding_ley_lines","using_ley_lines","mindscapes","binary_mindscapes","immersive_mindscapes","mindscape_traits"], subtopics: ["creation_and_control"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 235</Link></p>
<p>A binary mindscape is typically only a minimalist backdrop for a psychic battle - a ghostly image, like a stark memory, lacking detail and verisimilitude. It might manifest as a flat surface surrounded by fog or a featureless plain of grass on a cloudy day. Sometimes, a binary mindscape mimics a real-world locale the creator knows well, but even then, the details at the edges of vision are usually fuzzy and indistinct, and features that invoke lesser senses, such as smell and taste, are lacking. A binary mindscape has no effect on the psychic battle; it's merely a mental construct used to assist the participants in visualizing their actions.</p>
</>};
const _creation_and_control = {title: "Creation and Control", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations","binary_mindscapes"], siblings: ["creation_and_control"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 235</Link></p>
<p>As explained in the <Link to="/rule/psychic_duels">Psychic Duels</Link> section, a binary mindscape is created when two psychic creatures enter a mental confrontation. Only creatures able to cast the <Link to="/spell/instigate_psychic_duel">instigate psychic duel</Link> spell can begin a psychic duel. Once a connection is established, the binary mindscape is created. Once within the mindscape, a creature can expend psychic energy to create mental hazards called manifestations to damage the other combatant or to reshape the mental landscape. Because the mindscape becomes a shared mental space after its creation, neither participant in the battle truly controls it, and they both have an equal ability to alter the environment once their minds are connected.</p>
<p>A binary mindscape is overt, finite, and harmful (see <Link to="/rule/mindscape_traits">Mindscape Traits</Link>). Its other traits (such as gravity, time, and magic) are normal, with the exception of the special actions and limitations on spellcasting described in the Psychic Duels section.</p>
</>};
const _immersive_mindscapes = {title: "Immersive Mindscapes", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations"], siblings: ["loci_spirits","loci_spirit_rules","corrupting_a_loci_spirit","elements_of_a_loci_spirit","creating_a_loci_spirit","ley_lines","qualities_of_ley_lines","finding_ley_lines","using_ley_lines","mindscapes","binary_mindscapes","immersive_mindscapes","mindscape_traits"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 235</Link></p>
<p>An immersive mindscape is a less common, but far more powerful, variety of mindscape. When created, it seems every bit as palpable and vivid as the real world. A being within an immersive mindscape can see the land, feel the breeze, hear the falling rain, smell the sea, and even experience hunger and thirst. In some cases, creatures within an immersive mindscape don't even realize that's where they are. A target that's fooled into believing such a mindscape is real wastes away in the physical world while living a full life in the mindscape.</p>
<p>An immersive mindscape can be sculpted in much more detail than a binary mindscape, and its traits vary. The creator dictates the traits of an immersive mindscape, and visitors are subject to whatever strictures the host is able to place upon the mindscape. The construction of the mindscape might be carefully designed, or might be a more instinctive expression drawn from the creator's own desires or intentions (whether conscious or subconscious). Some spells allow the creator to use a target's memories or desires when creating the mindscape to better fool the target.</p>
</>};
const _mindscape_traits = {title: "Mindscape Traits", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations"], siblings: ["loci_spirits","loci_spirit_rules","corrupting_a_loci_spirit","elements_of_a_loci_spirit","creating_a_loci_spirit","ley_lines","qualities_of_ley_lines","finding_ley_lines","using_ley_lines","mindscapes","binary_mindscapes","immersive_mindscapes","mindscape_traits"], subtopics: ["transparency","shape_and_size_traits_oa","feedback_oa","gravity_traits_oa","time_traits_oa","alignment_traits_oa","magic_traits_oa"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 235</Link></p>
<p>Each mindscape has a set of specific traits that dictate its appearance and behavior, just as the planes do. These traits supersede the normal planar traits of the <Link to="/rule/astral_plane">Astral Plane</Link>. Often these traits mimic those of the Material Plane, for that is what the beings within a mindscape typically find most familiar and comfortable. A creature's mental avatar has the same physical characteristics in the mindscape that the creature does in real life (the same AC, hit points, ability scores, and so on). Weapons and armor, even magical ones, function inside the mindscape.</p>
<p>Every mindscape is considered <Link to="/rule/morphic_traits">sentient</Link>, but instead of changing according to its own will, it responds to the will of those inside it. Typically, the creature that created the mindscape controls its traits. Depending on her level of expertise, the creator can alter one or more of the traits of the mindscape to suit her purposes. The psychic duel rules and some spells allow other creatures to alter mindscapes, but usually only if they're aware they're within one.</p>
</>};
const _transparency = {title: "Transparency", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations","mindscape_traits"], siblings: ["transparency","shape_and_size_traits_oa","feedback_oa","gravity_traits_oa","time_traits_oa","alignment_traits_oa","magic_traits_oa"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 236</Link></p>
<p>A mindscape's creator typically knows when she is within her own mindscape, but other creatures might not, depending on the type of mindscape.</p>
<p><strong className="hl">Overt:</strong> Overt mindscapes are obvious to anyone drawn into them. This might be because the individual deliberately hosts and invites others, or because targets know they're being psychically attacked and caught in the mindscape, and therefore understand what has happened to them. When a creature knows it is in a mindscape, it can exit more easily (using the <Link to="/spell/mindscape_door">mindscape door</Link> spell), but this knowledge makes the immersive mindscape no less real to it. It can still be affected by the mindscape, and can still take damage or gain conditions from a harmful mindscape (see <Link to="/rule/feedback_oa">Feedback</Link> below). Binary mindscapes are always overt.</p>
<p><strong className="hl">Veiled:</strong> The veiled immersive mindscape is the most insidious type. Its triggering mechanisms are designed to fool the target, trapping the creature in such a fashion that it doesn't realize its reality is a product of its or another's mind. The creator's memories provide the basis for the mindscape, and any place or phenomenon she hasn't experienced might be hard to replicate convincingly using only her imagination.</p>
<p>Psychic mindscape traps and spells often include a seamless transition from the real world to the mindscape in order to maintain the veil. For example, a chest trapped with a veiled immersive mindscape might trigger a visual and tactile continuation of the current situation, making the thief believe she still kneels before the container in the chamber where she found it. If the effect is done well and is powerful enough, the thief might live out several hours, days, or weeks of her life trapped in her own mind, while her body remains slumped before the chest, slowly dying from lack of food and water.</p>
</>};
const _shape_and_size_traits_oa = {title: "Shape and Size Traits", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations","mindscape_traits"], siblings: ["transparency","shape_and_size_traits_oa","feedback_oa","gravity_traits_oa","time_traits_oa","alignment_traits_oa","magic_traits_oa"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 236</Link></p>
<p>When the mindscape is manifested, the creator decides on the shape and size of the mental locale. Each of the following categories is possible.</p>
<p><strong className="hl">Finite:</strong> A finite mindscape has clearly discernible boundaries and limits to its space. Either there is no way to move beyond those boundaries, or there is simply nothingness beyond them. A finite mindscape might be a cavity within an endless expanse of stone, or it could be the interior of a cottage with nothing beyond the doors and windows but blackness and oblivion. Binary mindscapes are always finite.</p>
<p><strong className="hl">Infinite:</strong> A mindscape of this shape and size stretches on forever, or at least those within it perceive it as such for all practical purposes. This might result in an endless void in three dimensions, perfectly flat ground that stretches as far as the eye can see, or an endless ocean. Individual objects within the mindscape might be defined by their limits, such as a building sitting in the middle of an endless plain, or a series of floating chunks of rock within the void.</p>
<p><strong className="hl">Self-Contained Shape:</strong> A mindscape exhibiting this physical trait might seem to go on forever, but its spatial relations actually fold back upon themselves, no matter which direction creatures within it travel. Such a mindscape might consist of an staircase that is somehow a loop, a winding tunnel that appears straight but starts and ends in the same place, or a tesseract where exiting on one side of the cube always returns the traveler to the opposite side. A self-contained medieval keep, for example, might allow travelers to exit the front gate only to find themselves reentering by the rear portal.</p>
</>};
const _feedback_oa = {title: "Feedback", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations","mindscape_traits"], siblings: ["transparency","shape_and_size_traits_oa","feedback_oa","gravity_traits_oa","time_traits_oa","alignment_traits_oa","magic_traits_oa"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 236</Link></p>
<p>Though they're mental constructs, mindscapes can sometimes cause physiological effects through mental feedback. A creator with exceptional psychic power might be able to create a mindscape that is harmless for her but harmful for all other inhabitants, but most mindscapes affect everyone in the same way.</p>
<p><strong className="hl">Harmful:</strong> Injuries and conditions inflicted upon individuals visiting a harmful mindscape are real. Any psychic attacks harm the body by convincing the brain that the damage is real. Binary mindscapes are always harmful.</p>
<p><strong className="hl">Harmless:</strong> Occupants of a harmless mindscape still feel the sensation of the environment or other creatures harming them, but injuries and conditions are not real: they cause no physical harm to the host's body. A creature that dies in a harmless mindscape wakes up none the worse for wear.</p>
</>};
const _gravity_traits_oa = {title: "Gravity Traits", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations","mindscape_traits"], siblings: ["transparency","shape_and_size_traits_oa","feedback_oa","gravity_traits_oa","time_traits_oa","alignment_traits_oa","magic_traits_oa"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 237</Link></p>
<p>The creator or controller of a mindscape determines whether gravity exists in that mindscape, and if it does, how strongly it exerts its pull.</p>
<p><strong className="hl">Normal Gravity:</strong> Gravity functions just as it does on the Material Plane.</p>
<p><strong className="hl">Light Gravity:</strong> Gravity's effect is reduced, and creatures can jump, fly, and lift heavy objects with less effort.</p>
<p><strong className="hl">Heavy Gravity:</strong> Gravity's effect is increased, and creatures find that jumping, flying, and lifting objects require more exertion.</p>
<p><strong className="hl">No Gravity:</strong> Gravity does not exist, and objects float in space wherever they are in relation to one another, unless they're set in motion by someone, in which case they travel in a straight line at a constant rate of speed until they collide with another object or a creature somehow changes their motion.</p>
<p><strong className="hl">Subjective Gravity:</strong> Gravity functions however each individual wishes it, relative to that individual. Thus, if one creature stands on the floor of a parlor, while another envisions the ceiling of that same room as being "down" and stands upon that surface, each would experience gravity differently and see the other as "overhead" and "upside down."</p>
</>};
const _time_traits_oa = {title: "Time Traits", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations","mindscape_traits"], siblings: ["transparency","shape_and_size_traits_oa","feedback_oa","gravity_traits_oa","time_traits_oa","alignment_traits_oa","magic_traits_oa"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 237</Link></p>
<p>Controlling time within a mindscape is difficult. In most cases, time flows at a one-for-one ratio with the passage of time in the real world. Only a powerful psychic individual can alter the flow of time in a mindscape.</p>
<p><strong className="hl">Normal Time:</strong> Time flows normally.</p>
<p><strong className="hl">Slow Time:</strong> In certain cases, the creator of a mindscape might wish to cause time to slow down, forcing those within the mindscape to spend more real-world time engaged in activities within the mindscape. When this happens, 1 round within the mindscape takes 2 or more real-world rounds to complete.</p>
<p><strong className="hl">Rapid Time:</strong> In other instances, a mindscape's creator might desire to cause time to move faster within the mindscape than in the real world. In this instance, 2 or more rounds of activity within the mindscape could be completed while only 1 round passes in the real world. A controller could thus spend a great deal of time contemplating a complex mental puzzle, then emerge from the mindscape to rejoin her allies having lost no true time at all.</p>
</>};
const _alignment_traits_oa = {title: "Alignment Traits", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations","mindscape_traits"], siblings: ["transparency","shape_and_size_traits_oa","feedback_oa","gravity_traits_oa","time_traits_oa","alignment_traits_oa","magic_traits_oa"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 237</Link></p>
<p>Some mindscapes exhibit a palpable resonance that reflects the creator's alignment. This might be intentional or unintentional. Most mindscapes aren't aligned.</p>
<p><strong className="hl">Mildly Aligned:</strong> A mildly aligned mindscape results in very subtle effects that might or might not be noticed by its inhabitants. In such cases, the evidence might manifest as an orderly garden for a lawful creature or a serene bit of countryside with ideal weather for a good-aligned being.</p>
<p><strong className="hl">Strongly Aligned:</strong> A mindscape influenced by a strong alignment almost always exhibits noticeable characteristics. The atmosphere alone might cause discomfort for or even damage beings of a diametrically opposed alignment. A creator who wishes to create a strongly aligned mindscape might find it difficult to keep victims from noticing these features. The creeping alignment influence can give a clue to those trapped within that all is not as it seems.</p>
</>};
const _magic_traits_oa = {title: "Magic Traits", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","occult_locations","mindscape_traits"], siblings: ["transparency","shape_and_size_traits_oa","feedback_oa","gravity_traits_oa","time_traits_oa","alignment_traits_oa","magic_traits_oa"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 237</Link></p>
<p>Magic - particularly psychic magic - behaves in odd ways within a mindscape. In addition to the options below, see the <Link to="/rule/psychic_duels">Psychic Duels</Link> section for further discussion on how magic works in binary mindscapes during psychic duels.</p>
<p><strong className="hl">Normal Magic:</strong> In an immersive mindscape where magic behaves normally, characters and creatures can use spells, spell-like abilities, and magic items as they normally would. Spells are consumed and charges or consumables are spent. Damage dealt by magic is real, and the real-world body suffers accordingly if the mindscape is harmful. However, any magic that requires physical manipulation (such as drinking a potion) might not behave in the expected manner (the character could "drink" the potion and discover that nothing happens). Some divination magic might provide strange or nonsensical information if it is providing details on what is going on in the real world while the caster's mind believes it is elsewhere. When a creature emerges from a mindscape, any magic it used while within has been consumed.</p>
<p><strong className="hl">Dead Magic:</strong> Magic might not work at all within a mindscape. The effort to summon and manipulate the energies required to set off the magic can be blocked, prevented from reaching through the psychic barrier of the creature or thing that created the mindscape. In such cases, the mindscape may or may not create false-positive results in an attempt to fool those trapped within (for example, making healing magic seem to work when it actually doesn't function). Whatever results occur within the mindscape, creatures emerge without having expended any magic. The sole exception is that psychic spells specifically designed to manipulate a mindscape work even in mindscapes with dead magic, and are expended normally.</p>
<p><strong className="hl">Altered Magic:</strong> Magic might behave very differently within a mindscape - use the rules for the <Link to="/rule/magic_traits">enhanced, impeded, limited, or wild planar magic traits</Link>.</p>
</>};
const _esoteric_planes = {title: "Esoteric Planes", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game"], siblings: ["incorporating_the_occult","occult_elements","occult_themes","occult_adventure_seeds","occult_locations","esoteric_planes"], subtopics: ["positive_energy_plane_oa","negative_energy_plane_oa","material_plane_oa","ethereal_plane_oa","dimension_of_dreams_oa","astral_plane_oa","akashic_record_oa","the_boneyard_oa","outer_sphere"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 238</Link></p>
<p>The planes of the Great Beyond encompass all of existence, from the simple and sublime wonders of the material world to the impossibilities of heavens, hells, and everything in between. Arcane tradition conceptualizes this multiverse of planes as a series of nesting spheres, with each layer and the spaces between representing different vistas of reality. At the center of it all, suspended within the silvery seas of the Astral Plane, lies the Inner Sphere of the Elemental and Material Planes. The Elemental Planes are the raw building blocks of the multiverse, while the planes aligned with positive and negative energy govern the forces of life and death, creation and destruction. The invisible mists and eddies of the Ethereal Plane connect and interpenetrate the worlds of the Inner Sphere, just as the Astral Plane connects these worlds in turn to the infinite realms of the Outer Sphere, the domains of gods and the final destination for the souls of the multiverse.</p>
<p>The esoteric tradition, sometimes referred to as the "ancient wisdom," acknowledges the many planes, demiplanes, and corners of the Inner and Outer Spheres, but tends to focus more on the Inner Sphere than the realms of the deities. Scholars of occultism believe that their investigations reveal a hidden truth behind the multiverse, and that mastering the implications of this secret can give an adept power over not just her mortal life, but also her life after death. She can then enter a cycle of reincarnation that allows, over successive cycles of existence and reflection, the complete mastery of body, mind, and soul, opening up new vistas of consciousness and immortality.</p>
<p>Consequently, the adept does not concern herself with the courts of petitioners enjoying their final reward or laboring eternally under fiendish masters, nor with the raw building blocks of the material world such as air, earth, fire, and water. Her final personal journey into a more evolved existence is loftier than the base elements, and more self-determined than the proscribed fate of the pious petitioner.</p>
<p>The orthodox view of the planes sees two opposing forces underlying existence in the multiverse: positive and negative energy. Each of these primal forces commands a vast plane of its own at the core of the Inner Sphere. The Positive Energy Plane is the source of life, and the Negative Energy Plane is the source of death; each exists as antithesis to the other. The great secret of occultism holds that rather than positive and negative energy being conflicting forces, they are in fact two halves of a single whole. Their polarity is not a sign of opposition, but rather two integral aspects of a single dualistic cycle. The positive aspect of this duality is the Cosmic Fire, the breath of life that grants vital force to living creatures. The Negative Energy Plane is the intake of that same breath, a return to dust, the recycling of component parts to pave the way for that which comes next.</p>
<p>Delving deeper into the ancient wisdom reveals even more enticing secrets regarding the nature of existence. Among the oldest creatures in the Great Beyond are the enigmatic outsiders known as aeons, who are said to be the caretakers of reality and the original architects and crafters of the multiverse itself. Befitting the esoteric view of the planes, these primordial beings always manifest a powerful dichotomy sustained in equilibrium: Birth and death. Fate and freedom. Creation and destruction.</p>
<p>The aeons believe they are bound in a supreme oneness with the multiverse known as the "monad," or the "condition of all," the transcendental undersoul of all living creatures. They equate this oneness with both the life-giving Cosmic Fire of the Positive Energy Plane and the destructive void of the Negative Energy Plane. Furthermore, they do not limit this cosmic oneness to themselves, but rather include all of the multiverse's creatures within their concept of the monad. A human and a <Link to="/monster/pleroma">pleroma aeon</Link> are both emanations of the cosmic flame - the aeon is simply much closer to the source and believes itself to be in communication with it, whereas the monadic soul of a human is esoterically distant from the Fire, being focused primarily on the mortal affairs of the base Material Plane.</p>
<p>Imagine a blazing sphere of brilliant energy blocked by a thick screen. This sphere represents the Cosmic Fire. Now imagine multitudes of tiny holes in the screen, each allowing some of the light to shine through. From the exoteric viewpoint of the uninitiated, each pinpoint of light appears distinct and unique. The esoteric perspective looks behind the screen and understands that all of the individual lights are but rays from a single source. A creature's soul is like one glimmering light in that screen's field of stars, and when mortal scholars speak of "a monad," they're usually referring to this individual-seeming expression of the universal undersoul, at once a unique entity and part of the common soul of the multiverse. The greater an adept understands her place in this scheme, the more power she holds over her eternal destiny.</p>
<p>The short summaries below offer an occult viewpoint on the realms generally referred to as the Esoteric Planes. Many prominent planes in the orthodox scheme, such as the Shadow Plane and Elemental Planes, do not feature prominently in the cosmology of the adept concerned with multiversal truths and the journey of the mortal soul. Occultism freely acknowledges the existence of these planes, but does not dwell on them, an approach likewise observed here. For more information on these planes, including their planar traits, see <Link to="/rule/planar">here</Link>.</p>
</>};
const _positive_energy_plane_oa = {title: "Positive Energy Plane", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","esoteric_planes"], siblings: ["positive_energy_plane_oa","negative_energy_plane_oa","material_plane_oa","ethereal_plane_oa","dimension_of_dreams_oa","astral_plane_oa","akashic_record_oa","the_boneyard_oa","outer_sphere"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 239</Link></p>
<p>The Positive Energy Plane is the source of all life, the Cosmic Fire at the heart of the multiverse that gives birth to mortal souls. The plane has no surface and exists as an emanation of life-giving energy radiating from an incandescent interior that resembles the molten heart of an active star. Ironically for a plane associated with life, the Positive Energy Plane can be extremely deadly to mortal visitors, as its ambient energies are so powerful that a mortal shell cannot absorb them without bursting. At certain vertices, the refraction of the Cosmic Fire's rays create islands of solidity where the plane's energies are not so extreme, and some manner of life as mortals understand it becomes possible. Here, upon vast shimmering fields, phoenix-feathered creatures known as the <Link to="/monster/jyoti">jyoti</Link> tend to orchards of glowing, anemone-like trees as tall as mountains, sprouting immature souls like glossy, liquid fruit. The xenophobic jyoti dwell in complex cities of crystal specially designed to reflect the weird luminescence of the Cosmic Fire. Jyoti seldom venture from these structures, focusing all of their energies on their sacred charge of tending and defending the nascent souls of the multiverse. At the center of each jyoti city is an imposing gate to a star in the cosmos of the Material Plane. New souls pass through these gates and ride waves of light to find incarnation in mortal vessels.</p>
<p>If the jyoti dedicate themselves to the protection of incubating immature souls, the other primary inhabitants of the Positive Energy Plane, the <Link to="/family/manasaputra">manasaputras</Link>, dedicate their existence to assisting the spiritual development of mortals. These "sons of mind" are the powerful psychic incarnations of mortals who have endured scores of mortal reincarnations, with each step becoming more attuned to the universal undersoul. The greatest and most powerful of the manasaputras - the glory-clad solar kumaras - dwell within the heart of the Cosmic Fire, and claim to be in communication with it. Lesser manasaputras like agnishvattas, barhisads, and manus spread through the Inner Sphere to initiate mortal adepts in the occult nature of the multiverse, so that they too might step once again into the light that birthed them.</p>
<p>For reasons unknown even to the eldest natives, divine beings cannot enter the Positive Energy Plane. Refugees from the vengeance of the gods or those hoping to hide important relics from certain divinities sometimes venture to the Positive Energy Plane to negotiate with the jyoti, who over the centuries have amassed an astounding trove of world-shattering artifacts, illegitimate half-mortal bastards, heretics, and other dangers.</p>
<blockquote>
<p><em>Also see: <Link to="/rule/positive_energy_plane">Positive Energy Plane (Planar Adventures)</Link></em></p>
</blockquote>
</>};
const _negative_energy_plane_oa = {title: "Negative Energy Plane", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","esoteric_planes"], siblings: ["positive_energy_plane_oa","negative_energy_plane_oa","material_plane_oa","ethereal_plane_oa","dimension_of_dreams_oa","astral_plane_oa","akashic_record_oa","the_boneyard_oa","outer_sphere"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 240</Link></p>
<p>The orthodox view of the Inner Sphere casts the Negative Energy Plane as the jealous rival of its positive-energy twin, an empty infinite void of entropic darkness antithetical to creation, fit only to consume and destroy. Negative energy is itself a dark opposite of life-giving positive energy, yet while it is most often a source or tool of destruction, it is also the animating force of the undead. The ancient wisdom of occultism seizes on this seemingly paradoxical association with creation and posits that entropy clears the slate for what's next as the multiverse inexorably marches along an unimaginably vast evolutionary cycle of its own. Perfection is not a fixed state. It is always growing and changing. To say that there is one "natural" state - for instance, utter oblivion - that constitutes perfection is as impossible as imposing a limit on the infinite. Occultists believe that this destruction allows for and drives change.</p>
<p>Nonetheless, negative energy sustains the undead, who throng to the sterile and desolate gulfs of nothingness that compose the overwhelming expanse of this dark and terrifying realm. The plane offers few solid surfaces, so the undead present here tend to be incorporeal and capable of taking flight on the soul-chilling currents that seem inexorably to guide visitors toward the absolute darkness at the plane's heart. This inner blackness connects via portals to the black holes scattered about the cosmos of the Material Plane. Records of astral voyages to the Material Plane side of these portals relate tales of the accretion disks of black holes swarming with incorporeal undead trapped within the event horizon.</p>
<p>Within the plane, where the concentration of negative energy reaches an absolute, it begins to manifest a crystalline material that grows into beautiful and deadly structures of absolute entropy. When these crystals form strange angles, the plane gives birth to a <Link to="/monster/sceaduinar">sceaduinar</Link>. These vile creatures hate life and unlife alike, and exist only to sow entropy and destruction. Somehow, their manifestation seems to drain a measure of the plane's entropic energies, ironically making the regions around these haunting snowflake structures the most stable and survivable regions in the otherwise hostile plane. While negative energy is less of a concern, the sceaduinar themselves represent a significant threat to visitors.</p>
<p>The ancient wisdom suggests that the <Link to="/monster/jyoti">jyoti</Link> hate the sceaduinar for their knowledge of the role destruction plays in the creation of souls, and the jyoti fear the exposure of that information. The Negative Energy Plane's most terrible and hateful residents, the undead abominations known as <Link to="/family/nightshade">nightshades</Link>, care little for this squabbling between the planes. Theirs is a quest to eradicate all life in the cosmos, to cloak the stars of the Material Plane in darkness, and to quench the Cosmic Fire, no matter the consequences.</p>
<blockquote>
<p><em>Also see: <Link to="/rule/negative_energy_plane">Negative Energy Plane (Planar Adventures)</Link></em></p>
</blockquote>
</>};
const _material_plane_oa = {title: "Material Plane", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","esoteric_planes"], siblings: ["positive_energy_plane_oa","negative_energy_plane_oa","material_plane_oa","ethereal_plane_oa","dimension_of_dreams_oa","astral_plane_oa","akashic_record_oa","the_boneyard_oa","outer_sphere"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 240</Link></p>
<p>The Material Plane is the realm of physical sensation and incarnate existence. Souls manifest here in the shell of a physical body, a union so complete that most living creatures do not spend much time contemplating the difference between the gross physical form and the higher monadic soul that guides its movements and destiny. The final destination of a soul is not yet determined during its mortal life, making the Material Plane a magnet for the attentions of gods and outsiders eager to rally mortals to their banners in the afterlife, either willingly or by force. A planar crossroads, the Material Plane is coexistent with the Ethereal and Shadow Planes and coterminous with all of the realms of the Inner Sphere.</p>
<p>Just as little-known forces bind a physical body to its astral and ethereal counterparts, the whole of the universe is bound together by a series of ley lines' spiritual conduits that interpenetrate the many planes of the multiverse. Ley lines are prevalent on the Material Plane, and wise adepts of the occult arts, canny students of the arcane, and even village witches learn to recognize and manipulate these forces to their own ends. Some believe that one of the most prominent of these ley lines is the so-called "River of Souls" that guides a monad's spiritual journey through mortal incarnation and the afterlife, but that is just one aspect of this multiversal arterial network.</p>
</>};
const _ethereal_plane_oa = {title: "Ethereal Plane", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","esoteric_planes"], siblings: ["positive_energy_plane_oa","negative_energy_plane_oa","material_plane_oa","ethereal_plane_oa","dimension_of_dreams_oa","astral_plane_oa","akashic_record_oa","the_boneyard_oa","outer_sphere"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 240</Link></p>
<p>The Ethereal Plane is the seat of emotional forces, the mist-shrouded home of haunts and horrors, and the ever-present doorway between the worlds of the Inner Sphere. The Ethereal Plane coexists with these planes, interpenetrating them and generally mimicking their contours and vistas, albeit with greatly reduced visibility thanks to drifting fog and the slow rise and fall of fading sheets of light like the somber interior of a thunderstorm. From within the Ethereal Plane, these neighboring worlds appear hazy and indistinct, as if viewed through frosted glass. Inhabitants of neighboring planes can't perceive the Ethereal Plane at all, though certain mortals blessed or cursed with psychic sensitivity sometimes catch glimpses of its vistas. Since the Ethereal Plane is generally invisible from the other planes of the Inner Sphere, creatures under the effects of spells like <Link to="/spell/ethereal_jaunt">ethereal jaunt</Link> and <Link to="/spell/etherealness">etherealness</Link> cannot be seen by creatures who are not themselves ethereal. Normally, creatures on the Ethereal Plane cannot attack creatures on the Material Plane, and vice versa.</p>
<p>Within the mists of the Ethereal Plane, warped, indistinct versions of locations overlap their Inner Sphere counterparts. This, coupled with the inherent weightlessness of creatures in the plane, makes it tempting to use the Ethereal Plane as a vantage to scout out unknown locales by passing through incorporeal walls and floating over traps with ease. The natural denizens of the plane make this a frightful prospect, however, and ensure that most forays into the Ethereal Plane are brief endeavors. Among the deadliest of local hazards are the blood-red <Link to="/monster/xill">xill</Link> - warlike, plane-shifting outsiders who incubate their eggs in living mortals. Worse still, hideous, cackling <Link to="/monster/night_hag">night hags</Link> use the Ethereal Plane as a byway to the Dimension of Dreams, where they slip into nightmares to abduct mortal souls.</p>
<p>The twisted remnants of mortal souls comprise the vast majority of the Ethereal Plane's inhabitants. Some souls, freed from their physical bodies by death, remain tethered to the Ethereal Plane by profound emotional distress and cannot proceed along multiversal currents to join the River of Souls flowing inexorably toward the Boneyard until they sever the powerful emotional ties that bind them. Indeed, the longer these souls remain stalled on their afterlife journey, the closer they slide toward the Negative Energy Plane, and the more of their memories and personalities become subsumed by raw emotional distress and psychic damage. These souls eventually manifest as incorporeal undead, frequently in the form of <Link to="/monster/wraith">wraiths</Link> and <Link to="/monster/spectre">spectres</Link>. <Link to="/class/spiritualist">Spiritualists</Link> call out to the spirits of the Ethereal Plane and open their physical minds as refuges for them to inhabit. With practice and the help of a trained spiritualist, a spirit can even take its own physical form on the neighboring planes by cloaking itself in a sheath of ectoplasm, the ghostly substance that acts as a veil between worlds. These spirit guides are known as <Link to="/sidekick/phantom">phantoms</Link>, and while they are loyal to the spiritualist to whom they are bound, the emotional connection to the Ethereal Plane remains strong, manifesting in jealousy and fiery outbursts from even the kindest of souls. The ectoplasmic nature of the Ethereal Plane is extraordinarily susceptible to the thoughts and emotions of the plane's inhabitants. The ethereal version of a physical location is informed not just by its actual dimensions and appearance, but also by the memories and impressions of the spirits that haunt it. For example, on the Ethereal Plane, an old mansion might look as it did in the era of its ghostly inhabitants. If those spirits find final rest, their memories cannot sustain the structure, and it falls into an ethereal ruin. Some incorporeal spirits become so entwined with the emotional nature of the plane that they can manifest these ectoplasmic vistas in an overlapping location on a neighboring plane, temporarily cloaking it in a disturbing reflection of some past incarnation.</p>
<p>In a similar way that locations in the outside world possess overlapping etheric reflections, mortal creatures also have ethereal doppelgangers in the form of etheric doubles that exactly overlie their physical forms. The etheric double is a vessel for the cosmic breath of life that gives a creature animate force, most commonly known as ki. This energy collects in seven blazing vortices of colorful energy known as chakras, which bind the etheric double and the physical body together and distribute vital life energy to both. This energy extends 2 to 3 feet beyond the outlines of the creature's physical form to create its aura, a nimbus of colorful occult energies that reveals much about a creature's disposition and emotional state.</p>
<p>A creature's etheric double, aura, and chakras are not visible except to those with the knowledge or magic to see them. From the Material Plane, this involves esoteric use of the <Link to="/skill/perception">Perception</Link> skill by a creature with the <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> feat or any of a number of spells. From within the Ethereal Plane, all it takes to observe the interplay of these forces is simple concentration: if you know what to look for, it becomes plainly visible. Interpreting this information, of course, is another matter. An etheric double is outlined in violet-gray or blue-gray luminescence. Unlike an astral body generated by <Link to="/spell/astral_projection">astral projection</Link> or a lucid body of the Dimension of Dreams, an etheric double is not normally capable of acting as a separate vehicle of consciousness.</p>
<p>Finally, the sweeping expanse of the Ethereal Plane is home to countless pocket realities known as demiplanes. Many of these unique realms are the private domains of powerful arcane spellcasters, the playgrounds of minor gods, the experiments of the inscrutable elohim, or the prisons of creatures that pose such danger to the cosmos that they must never be released.</p>
<blockquote>
<p><em>Also see: <Link to="/rule/ethereal_plane">Ethereal Plane (Planar Adventures)</Link></em></p>
</blockquote>
</>};
const _dimension_of_dreams_oa = {title: "Dimension of Dreams", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","esoteric_planes"], siblings: ["positive_energy_plane_oa","negative_energy_plane_oa","material_plane_oa","ethereal_plane_oa","dimension_of_dreams_oa","astral_plane_oa","akashic_record_oa","the_boneyard_oa","outer_sphere"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 241</Link></p>
<p>As a mortal sleeps, its monadic soul withdraws from the physical body to manifest in the Dimension of Dreams. This dream avatar is known as the lucid body, and can take a variety of forms based on the dreamer's subconsciousness. The minds of the countless dreamers of the Material Plane brush up against the Ethereal Plane, bubbling forth ephemeral demiplanes in which the dreamers' lucid bodies experience fantastic adventures inspired by their own unconscious minds. A dreamer can alter her surroundings, and one with the Lucid Dreamer feat gains a greater measure of control. Spells cast and items used in a dream are not depleted in the real world. Wounds and conditions don't have any effect on the creature's waking body and mind. Fantastic adventures don't yield real treasure or experience to the waking being, though knowledge gained in the Dimension of Dreams occasionally aids in solving real challenges faced in the waking world. Even the worst nightmares hold little true danger for the dreamer. Should the lucid body die, the dreamer simply awakens, perhaps a bit shaken but otherwise little worse for the experience. A creature with the <Link to="/feat/lucid_dreamer">Lucid Dreamer</Link> feat awakens from such an experience fatigued, as her mind is more invested in perceptions of the dreamscape.</p>
<p>Experience in a dreamscape is usually a private affair. Rare spells (such as <Link to="/spell/dream_council">dream council</Link>), magic items, and other abilities allow creatures to enter and share another creature's dream demiplane for a short amount of time. While these secondary dreamers can interact with the highly morphic qualities of the plane, with the primary dreamer, and with each other, the existence of the demiplane is still contingent on a single primary dreamer. When the primary dreamer awakens, the demiplane pops out of existence, causing any other dreamers to continue dreaming - shunted into a dreamscape of their own creation - or to wake up.</p>
<p>A lucid body is not the only way to enter a dream, however, and considerable danger faces the explorer who enters the Dimension of Dreams in his physical body. Regular methods of planar travel like <Link to="/spell/plane_shift">plane shift</Link> do not offer transit to the dream world - only specialized means such as the <Link to="/spell/dream_travel">dream travel</Link> spell do the trick. When a physical creature enters a dreamscape, he doesn't have to make the check to determine his initial state, but also can't attempt impossible feats (see below). Spells cast, magic items used, and other limited abilities expended are lost just as if the creature were adventuring on some other plane. Creatures in their material forms can use items generated within a dreamscape, but these items wink out of existence when the primary dreamer awakens, or when a creature in material form leaves the dreamscape. Wounds and experiences are real, and remain after the creature leaves the dreamscape. A creature in its physical form that dies within a dream demiplane actually dies. Material creatures still within a dreamscape when the primary dreamer awakens are pushed into an abutting dreamscape or regions of the Ethereal Plane that border the Dimension of Dreams.</p>
<p>Although each dreamer's slumbering soul conjures a personal demiplane dreamscape that manifests on the Ethereal Plane, all dreams collectively belong to the greater network of the Dimension of Dreams. When numerous dreamscapes cluster in the ethereal fog, transit between dreams is easier, and moods, emotions, and even creatures from one dream spill more easily into another. Where the individual dreamscapes brush up against the little-understood Dimension of Time, dreams often take on prophetic elements.</p>
<p>Figments from the dream world sometimes manage to escape the Dimension of Dreams, usually at the moment when a particularly imaginative sleeper awakens, and the reality of the dream is at its weakest as the demiplane fades away. These weird, shifting creatures stalk the Ethereal Plane as <Link to="/monster/animate_dream">animate dreams</Link>, feeding off the minds of mortals, searching for other dreams in which to take refuge and torment a new sleeper.</p>
<p>A class of vile so-called "nightmare creatures" infests the Dimension of Dreams, venturing from dreamscape to dreamscape hunting victims to torment and destroy. A hierarchy of horror known as the Nightmare Lords rules over lesser nightmare creatures in puppet courts staffed by the soul-shriveled husks of insane enslaved dreamers. Somehow, these creatures have even found a way to manifest on the Material Plane, not content to limit their terrors to the realm of sleep.</p>
<p><Link to="/monster/night_hag">Night hags</Link> are among the most harrowing threats of the Dimension of Dreams. They walk freely between dreams, searching for chaotic or evil dreamers, on whose backs they ride until morning. Creatures they encounter between dreams or dwelling within the dreamscapes of their prey are simply cut down, regardless of alignment. Night hags collect the souls of their slain enemies in gemstones they sell to clientele throughout the planes.</p>
<p>Although most dreamscapes are ephemeral, fading when the sleeper awakens, particularly potent dreamscapes, bolstered by recurrence or by the shared subconscious of numerous dreamers, sometimes last forever. Among the most formidable and permanent regions of the Dimension of Dreams is the bizarre realm of Leng, where near-human denizens sail ethereal seas in black-hulled ships packed with slaves bound for the dark markets of the multiverse.</p>
<p>The Dimension of Dreams has the following traits.</p>
<ul>
<li>Flowing Time: Both lucid bodies and creatures visiting the Dimension of Dream with their physical bodies are subject to the flowing time trait of a given dreamscape.</li>
<li>Highly Morphic: When a creature enters a dreamscape with a lucid body, it must make a Charisma check (DC 15) to prevent arriving in the Dimension of Dreams at a disadvantage, such as without important equipment or on the side of an arctic mountain during an avalanche. A successful save means the dreamer manifests in perfect health, with all of its regular equipment (spells and magic items used in a dream are not actually expended in the real world). Even in the worst of circumstances, however, the lucid body is capable of fantastic - even impossible - feats. As a standard action, a number of times during the dream equal to the creature's Charisma bonus (minimum 1) the dreamer can attempt one impossible action, such as casting a spell, gaining an effect of a spell as if it were cast, or conjuring a magic item. This requires a successful Charisma check (DC 10 + the level of the spell being cast or spell effect replicated or half of the caster level of the item conjured; nonmagical items are caster level 0). Other fantastic feats are also possible with GM approval and a Charisma check with a DC determined by the GM. If the check fails, the dreamer cannot perform the feat. Creatures that enter the dream with their physical bodies do not need to make the initial check and do not gain the ability to create items and spell effects or perform other fantastic feats, but must otherwise deal with the strange realities of the dreamscape.</li>
<li>Wild Magic: Both lucid bodies and creatures visiting the Dimension of Dream with their physical bodies are subject to the wild magic of dreamscapes.</li>
</ul>
<blockquote>
<p><em>Also see: <Link to="/rule/dimension_of_dreams">Dimension of Dreams (Planar Adventures)</Link></em></p>
</blockquote>
</>};
const _astral_plane_oa = {title: "Astral Plane", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","esoteric_planes"], siblings: ["positive_energy_plane_oa","negative_energy_plane_oa","material_plane_oa","ethereal_plane_oa","dimension_of_dreams_oa","astral_plane_oa","akashic_record_oa","the_boneyard_oa","outer_sphere"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 243</Link></p>
<p>The Astral Plane is the great silvery sky that connects all planes to one another, the realm of pure thought and expanded consciousness. Occasional islands of solid matter float in astral space, but most of the plane is an enormous, seemingly eternal void of silver radiance. As a gateway between the Inner and Outer Spheres, the Astral Plane teems with travelers, from entities venturing between planes to explorers searching for one of the numerous demiplanes secreted here or looking for the one of the countless marooned spirits that dwell within the expanse. Its nature as a crossroads makes the Astral Plane very dangerous. Although it's possible to visit the plane bodily via <Link to="/spell/plane_shift">plane shift</Link> or by using an item such as a <Link to="/magic-wondrous/robe_of_stars">robe of stars</Link>, most travelers prefer to play it safe by manifesting their souls in an astral body created by spells such as <Link to="/spell/astral_projection">astral projection</Link>.</p>
<p>A creature's astral body looks like a translucent version of its physical form, usually limned with a soft nimbus of blue or violet light. A slim tether of resilient incorporeal energy known as a silver cord connects a creature's astral body to its unconscious physical body. If the astral body dies, the silver cord retracts into the physical body, returning the soul to its familiar seat (albeit at the cost of two permanent negative levels due to the resultant trauma). A silver cord resists most attempts to damage it, but if it somehow manages to break, the creature immediately dies, and the astral form housing its soul is cast adrift on the astral currents, pulled inexorably toward the enormous spire of the Boneyard, which extends up into the Astral Plane from the surface of the Outer Sphere. As a realm of thought, the Astral Plane is home to entities that represent concepts, myths, and legends spawned from mortal thoughtforms. Mediums open their consciousness to these denizens of the Astral Plane, inviting them to reside in a physical form and spread their influence on the Material Plane.</p>
<p>Travel through the Astral Plane is a strange affair, as the plane's subjective directional gravity means that each traveler chooses the direction of gravity's pull. Creatures can move normally in any direction by imagining "down" near their feet and "falling" in that direction. In this way a creature "falls" 150 feet the first round and 300 feet on each successive round. Movement is straight-line only. A character can attempt a DC 16 Wisdom check to set a new direction of gravity or stop as a free action; this check can be attempted once per round. Any character who fails this Wisdom check on successive rounds receives a +6 bonus on subsequent checks until he succeeds. When moving in this manner, the traveler does not have the sensation of physical movement. Rather, the landscape of the Astral Plane (such as it is) seems to come toward, through, and past him. Scintillations of light are thrown off by the astral body as it moves along at great speed.</p>
<p>The untethered astral bodies of the dead flow toward the Boneyard along the River of Souls. During this process, the dross of mortality is shed, leaving behind only the soul's core self, its memories, and the refined character of its prior life. The gods of the Outer Sphere consider the River of Souls inviolate, often sending celestial and infernal outsiders to help steward wayward souls toward judgment and eventual delivery to their afterlife of reward or punishment. Soul-collecting or soul-devouring predators such as <Link to="/monster/night_hag">night hags</Link> and <Link to="/monster/astradaemon">astradaemons</Link> prey on the dead of the Astral Plane, usually limiting themselves to picking off isolated incorporeal undead but all too often raiding parties of disembodied souls as they make their way toward eternity. <Link to="/faith/pharasma">Pharasma</Link>, the goddess of the dead, hates this perversion of the natural order of the multiverse, and the entities known as <Link to="/family/psychopomp">psychopomps</Link> often act as guides to deliver souls safely to their final destinations.</p>
<p>Other inhabitants of the Astral Plane include enormous <Link to="/monster/astral_leviathan">astral leviathans</Link> that float through the silvery seas, sometimes with passengers or even semi-permanent settlements upon their backs; strange <Link to="/monster/caulborn">caulborn</Link> who harvest knowledge and psychic energy from astral travelers; formless <Link to="/family/manasaputra">manasaputras</Link> who seek to guide Material Plane adepts through telepathy; and the lean humanoid outsiders known as the <Link to="/monster/shulsaga">shulsaga</Link>, multiplanar hunters who ride magical disks and view intruders to their astral realm with xenophobic disdain.</p>
<blockquote>
<p><em>Also see: <Link to="/rule/astral_plane">Astral Plane (Planar Adventures)</Link></em></p>
</blockquote>
</>};
const _akashic_record_oa = {title: "Akashic Record", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","esoteric_planes"], siblings: ["positive_energy_plane_oa","negative_energy_plane_oa","material_plane_oa","ethereal_plane_oa","dimension_of_dreams_oa","astral_plane_oa","akashic_record_oa","the_boneyard_oa","outer_sphere"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 244</Link></p>
<p>Deep within the Astral Plane lies a demiplane called the Akashic Record that forms a critical part of the ancient wisdom at the heart of occult philosophy. The Akashic Record is a visual library of perfect psychic records of every moment in the history of the multiverse. Those who find their way here can observe scenes from any moment from the recent to distant past, going all the way back to the beginning of the multiverse. When a dead creature's untethered astral body sees its life flash before its eyes as it awaits judgment in the Boneyard, its consciousness ventures to the Akashic Record. When a psychometrist divines a touched object's past, he really gains impressions from scenes stored in the Akashic Record.</p>
<p>Unlike the history books of mundane existence, the Akashic Record is a perfect recording of events as they actually happened. Two creatures observing the same event in real time might come away with very different subjective understandings of what just occurred, but such confusion is impossible in the Akashic Record, which occultists speak of as the memory of nature. It is also known as the Book of the Lipika by the mysterious cloaked <Link to="/family/aeon">aeons</Link> who act as the Lords of Karma and who record every event in a mortal's life to measure its rightful place in the afterlife.</p>
<p>A visitor consulting the Akashic Record simply turns her attention to the moment she wishes to observe, and it appears before her, not as a two-dimensional image like an illustration on page, but rather all around her, as if she were actually present witnessing the desired moment in history. The actors before her are unconscious of her presence, as they are but reflections. The observer can't change or affect their actions in any way.</p>
<p>The observer can set the pace of events. He understands perfectly all communications within the record, even if he would not otherwise understand languages read or spoken, or the importance of cultural norms and signals otherwise foreign to him. If the event in question is from the observer's own life, he may choose to view it as an outsider, or may inhabit his form and live out the event again, re-experiencing the emotions associated with the event the first time around.</p>
<p>Traveling to the Akashic Record, which abuts the mysterious Dimension of Time, is incredibly difficult. Spells that allow for planar travel, such as <Link to="/spell/plane_shift">plane shift</Link>, cannot take a seeker to the Akashic Record. While occult lore suggests several methods to "enter" the Akashic Record and influence the visions seen there (for example, to rescue a character from some past scene and escape with her to the Astral Plane), those doing so risk becoming lost in the currents of the Dimension of Time, marooned in the real past of the observed event, very likely never to return. Such meddling with the affairs of time risks drawing the ire of the Lords of Karma, unleashing retributive time elementals or <Link to="/rule/inevitables">inevitables</Link>, or attracting the bloodthirsty otherworldly predators known as the <Link to="/monster/hound_of_tindalos">hounds of Tindalos</Link>.</p>
<p>The Akashic Record has the following traits.</p>
<ul>
<li>Flowing Time</li>
<li>Finite Shape</li>
<li>Static</li>
</ul>
<blockquote>
<p><em>Also see: <Link to="/rule/akashic_record">Akashic Record (Planar Adventures)</Link></em></p>
</blockquote>
</>};
const _the_boneyard_oa = {title: "The Boneyard", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","esoteric_planes"], siblings: ["positive_energy_plane_oa","negative_energy_plane_oa","material_plane_oa","ethereal_plane_oa","dimension_of_dreams_oa","astral_plane_oa","akashic_record_oa","the_boneyard_oa","outer_sphere"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 245</Link></p>
<p>A massive spire stretches deep into the sliver expanse of the Astral Plane from the surface of the Outer Sphere, beckoning unfettered monads on the River of Souls toward their final destinations in the afterlife. At the pinnacle of this spire is the Boneyard, a necropolis of graveyards, mausoleums, and solemn courts dedicated to <Link to="/faith/pharasma">Pharasma</Link>, goddess of death. This gloomy realm, also known as Purgatory, is home to countless souls awaiting final judgment. Clad in the sheaths of their astral forms, these somber sojourners bask in deep reverie, reliving scenes from their mortal lives during a solitary, inward journey of remembrance and catharsis.</p>
<p>This process, sometimes known as the "kama-loka," allows the soul to revisit key scenes from its mortal life and evaluate the lessons of its previous incarnation on the Material Plane. Only when it has worked through the psychological troubles of its past can it proceed further along the River of Souls. As a soul reflects upon and settles its past affairs, it lets go of its ties to these events and begins to forget them, cleansing its soul for the glorious (or terrible) transformations to come. This is why petitioners in the Outer Sphere seldom remember much of their mortal existence, and why most mortals cannot remember anything of their past incarnations on the Material Plane.</p>
<p>The ancient wisdom sometimes analogizes the soul's final moments as gazing into the Lake of Mortal Reflections, and seeing the whole of one's existence flash before one's eyes. The lessons of the <Link to="/family/manasaputra">manasaputras</Link> who guide the occult development of mortals suggest that the greatest esoteric fate is not to simply glance at the lake, but to step fully into its waters and allow them to subsume you. A soul immersed fully in the waters of the Lake of Mortal Reflections sheds the karma and experiences of its past life and, once again, the cleansed monadic soul descends into a new physical body in a cycle of reincarnation. With each subsequent reincarnation, the monad gains a greater appreciation for the experiences of a multitude of different incarnations, underlying the concept of the universal undersoul represented by the Cosmic Fire. With this understanding comes greater control over the soul's final incarnation as an outsider. According to esoteric lore, the most learned adepts are able to choose their own fates, becoming powerful outsiders, peerless mortal "ascended masters," or even living gods.</p>
<p>The majority of souls do not reincarnate. When they finish the kama-loka process, their astral forms stand ready for final judgment. For some souls, the kama-loka progresses rapidly, while for others it can take years, decades, or even longer. Within Pharasma's courts, the native <Link to="/family/psychopomp">psychopomps</Link> work in concert with ambassadors from the realms of the Outer Sphere to guide souls to the final resting place that best matches their religious beliefs and ethos. In the unlikely event of deathbed conversions, renouncements of faith, or disputed soul-binding pacts, advocates for the souls' potential fates argue with one another. The most significant disputes are seen to by Pharasma herself.</p>
<p>The Boneyard has the following traits.</p>
<ul>
<li>Timeless: Age, hunger, thirst, afflictions (such as diseases, curses, and poisons), and natural healing don't function in the Boneyard, though they resume functioning when the traveler leaves the Boneyard.</li>
<li>Divinely Morphic: Deities with domains in the Boneyard can alter the plane at will.</li>
<li>Strongly Neutral-Aligned</li>
<li>Enhanced Magic: Spells and spell-like abilities with the death descriptor, or from the <Link to="/domain/death">Death</Link> or <Link to="/domain/repose">Repose</Link> domains, are enhanced.</li>
</ul>
<blockquote>
<p><em>Also see: <Link to="/rule/the_boneyard_pa">The Boneyard</Link> (Planar Adventures)</em></p>
</blockquote>
</>};
const _outer_sphere = {title: "Outer Sphere", parent_topics: ["gm_specific_campaigns","occult_rules","running_an_occult_game","esoteric_planes"], siblings: ["positive_energy_plane_oa","negative_energy_plane_oa","material_plane_oa","ethereal_plane_oa","dimension_of_dreams_oa","astral_plane_oa","akashic_record_oa","the_boneyard_oa","outer_sphere"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 245</Link></p>
<p>The silver void of the Astral Plane extends from the edge of the Inner Sphere to the planes of the Outer Sphere, where souls sent from the Boneyard arrive at their final afterlife destinations in realms attuned to their beliefs and alignment. By the time they arrive here, those mortal souls who did not immediately incarnate as outsiders or direct servitors of their deities are known as petitioners. Having transcended mortal life, their past existence means less and less to them as time goes on. The few petitioners who even remember those they left behind cannot bring themselves to worry for them, focusing instead on the paradises or hellscapes immediately before them.</p>
<p>As time progresses, petitioners become more and more attuned to their chosen or assigned plane. Some manage to eventually ascend into the form of an outsider associated with their plane, but others simply end their journey of existence by merging completely with their plane in body and soul, vanishing from reality altogether and becoming quintessence - the very matter of the Outer Sphere itself.</p>
</>};
export default {occult_rules:_occult_rules,occult_skill_unlocks:_occult_skill_unlocks,auras:_auras,alignment_aura:_alignment_aura,emotion_aura:_emotion_aura,health_aura:_health_aura,magic_aura:_magic_aura,chakras:_chakras,activating_chakras:_activating_chakras,psychic_duels:_psychic_duels,instigating_a_psychic_duel:_instigating_a_psychic_duel,running_psychic_duels:_running_psychic_duels,psychic_manifestations:_psychic_manifestations,generating_manifestation_points:_generating_manifestation_points,creating_psychic_manifestations:_creating_psychic_manifestations,offensive_manifestation_full_round_action:_offensive_manifestation_full_round_action,defensive_manifestation_action_type_varies:_defensive_manifestation_action_type_varies,thought_form_creature_1_round_action:_thought_form_creature_1_round_action,concluding_a_psychic_duel:_concluding_a_psychic_duel,possession:_possession,what_is_possession:_what_is_possession,core_mechanic_and_clarification:_core_mechanic_and_clarification,rule_interactions:_rule_interactions,possession_misc:_possession_misc,possession_feats:_possession_feats,possession_actions:_possession_actions,bodily_possession:_bodily_possession,object_possession:_object_possession,possesed_locations:_possesed_locations,exorcism:_exorcism,occult_rituals:_occult_rituals,casting_occult_rituals:_casting_occult_rituals,discovering_occult_rituals:_discovering_occult_rituals,creating_occult_rituals:_creating_occult_rituals,esoteric_traditions:_esoteric_traditions,astrology:_astrology,the_cosmic_caravan:_the_cosmic_caravan,astrology_on_golarion:_astrology_on_golarion,astrological_events:_astrological_events,the_harrow:_the_harrow,the_harrow_on_golarion:_the_harrow_on_golarion,harrowing_plot_twists:_harrowing_plot_twists,hpt_swords:_hpt_swords,hpt_keys:_hpt_keys,hpt_shields:_hpt_shields,hpt_books:_hpt_books,hpt_stars:_hpt_stars,hpt_crowns:_hpt_crowns,moritification:_moritification,numerology:_numerology,numerology_on_golarion:_numerology_on_golarion,mathematical_spellcasting:_mathematical_spellcasting,spiritualism:_spiritualism,running_an_occult_game:_running_an_occult_game,incorporating_the_occult:_incorporating_the_occult,occult_elements:_occult_elements,mysteries_within_mysteries:_mysteries_within_mysteries,unseen_realms:_unseen_realms,the_power_and_price_of_knowledge:_the_power_and_price_of_knowledge,strange_rules_and_peculiar_patterns:_strange_rules_and_peculiar_patterns,fates_worse_than_death:_fates_worse_than_death,esoteric_atmosphere:_esoteric_atmosphere,occult_themes:_occult_themes,the_occult_underworld:_the_occult_underworld,spiritual_warfare:_spiritual_warfare,into_the_great_beyond:_into_the_great_beyond,fear_and_reverence_of_the_unknown:_fear_and_reverence_of_the_unknown,ultimate_occult:_ultimate_occult,occult_adventure_seeds:_occult_adventure_seeds,a_brace_of_imps:_a_brace_of_imps,feast_of_souls:_feast_of_souls,golems_revenge:_golems_revenge,lost_souls:_lost_souls,the_menhir:_the_menhir,mind_trap:_mind_trap,the_order:_the_order,portrait_of_evil:_portrait_of_evil,occult_locations:_occult_locations,loci_spirits:_loci_spirits,loci_spirit_rules:_loci_spirit_rules,corrupting_a_loci_spirit:_corrupting_a_loci_spirit,elements_of_a_loci_spirit:_elements_of_a_loci_spirit,creating_a_loci_spirit:_creating_a_loci_spirit,ley_lines:_ley_lines,qualities_of_ley_lines:_qualities_of_ley_lines,finding_ley_lines:_finding_ley_lines,using_ley_lines:_using_ley_lines,mindscapes:_mindscapes,binary_mindscapes:_binary_mindscapes,creation_and_control:_creation_and_control,immersive_mindscapes:_immersive_mindscapes,mindscape_traits:_mindscape_traits,transparency:_transparency,shape_and_size_traits_oa:_shape_and_size_traits_oa,feedback_oa:_feedback_oa,gravity_traits_oa:_gravity_traits_oa,time_traits_oa:_time_traits_oa,alignment_traits_oa:_alignment_traits_oa,magic_traits_oa:_magic_traits_oa,esoteric_planes:_esoteric_planes,positive_energy_plane_oa:_positive_energy_plane_oa,negative_energy_plane_oa:_negative_energy_plane_oa,material_plane_oa:_material_plane_oa,ethereal_plane_oa:_ethereal_plane_oa,dimension_of_dreams_oa:_dimension_of_dreams_oa,astral_plane_oa:_astral_plane_oa,akashic_record_oa:_akashic_record_oa,the_boneyard_oa:_the_boneyard_oa,outer_sphere:_outer_sphere}