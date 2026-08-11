import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _ancient_explorer = {title: "Ancient Explorer", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/skull_and_shackles_players_guide">Skull and Shackles Player's Guide</Link></p>
<Ability id="ancient-explorer" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="ancient-explorer">Ancient Explorer</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Skull and Shackles</Pair>
<Pair single="flavor" id="ancient-explorer-flavor">You are a student of the ancient history of Golarion, and you've come to the Shackles to explore the crumbling and vine-choked ruins of the cyclops empire of Ghol-Gan, which have lain abandoned among the isles of the Shackles for thousands of years.~~~You went to a tavern called the Formidably Maid in Port Peril last night to meet a contact who supposedly had an old map of lost cyclops ruins to sell, but the drink was stronger than you had expected and you passed out before making the deal.</Pair>
<Pair single="benefit" id="ancient-explorer-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_history">Knowledge (history)</Link> and <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks, and one of these skills is a class skill for you. In addition, you gain Cyclops or Polyglot as a bonus language.</Pair>
</Ability>
</>};
const _barroom_talespinner = {title: "Barroom Talespinner", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/skull_and_shackles_players_guide">Skull and Shackles Player's Guide</Link></p>
<Ability id="barroom-talespinner" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="barroom-talespinner">Barroom Talespinner</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Skull and Shackles</Pair>
<Pair single="flavor" id="barroom-talespinner-flavor">You grew up listening to tales of adventure and piracy on the high seas and the sea chanteys of old salts in dockside dives. You learned all about what it's like to be a pirate by talking with the sailors on shore leave, and learned how to tell a tale (or perform some other pirate entertainment) yourself.~~~You went to a tavern called the Formidably Maid in Port Peril to earn a few coins with your tales of the sea. The patrons seemed pleased with your performance and bought you a few drinks. You had just remembered a tale of an unfortunate sailor who found himself press-ganged on a pirate ship after his drink was drugged when suddenly everything went black.</Pair>
<Pair single="benefit" id="barroom-talespinner-benefit">You gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks and one category of <Link to="/skill/perform">Perform</Link> checks, and one of these skills is a class skill for you. In addition, once per week you can make a DC 15 <Link to="/skill/knowledge_local">Knowledge (local)</Link> or Intelligence check to see if you know a popular legendary pirate tale, the telling of which grants you a +1 trait bonus on checks made to influence NPCs on the Wormwood.</Pair>
</Ability>
</>};
const _besmaras_blessing = {title: "Besmara's Blessing", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/skull_and_shackles_players_guide">Skull and Shackles Player's Guide</Link></p>
<Ability id="besmaras-blessing" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="besmaras-blessing">Besmara's Blessing</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Skull and Shackles</Pair>
<Pair single="flavor" id="besmaras-blessing-flavor">You were born aboard a ship at sea or down by the docks in a port city on an auspicious day. Old salts and sea dogs nod knowingly and say that <Link to="/faith/besmara">Besmara</Link> the Pirate Queen, goddess of piracy, sea monsters, and strife, has marked you for a greater destiny. You don't know anything about that, but you've always felt more at home on the sea than on land, and your keen eyes can easily pick out a sail on the distant horizon.~~~You came to a tavern in Port Peril called the Formidably Maid in search of your fate. You're not sure how many drinks you had, but they quickly went to your head and you passed out on the table before you found your destiny - unless it lay in the bottom of a bottle. Then again, maybe you found your destiny after all...</Pair>
<Pair single="benefit" id="besmaras-blessing-benefit">You gain a +1 trait bonus on <Link to="/skill/perception">Perception</Link> and <Link to="/skill/profession">Profession</Link> (sailor) checks. In addition, once per week you can reroll a Profession (sailor) check and take the higher result (you must announce that you are using this ability before the results of the check are known).</Pair>
</Ability>
</>};
const _buccaneers_blood = {title: "Buccaneer's Blood", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/skull_and_shackles_players_guide">Skull and Shackles Player's Guide</Link></p>
<Ability id="buccaneers-blood" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="buccaneers-blood">Buccaneer's Blood</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Skull and Shackles</Pair>
<Pair single="flavor" id="buccaneers-blood-flavor">One of your ancestors was an infamous Free Captain of the Shackles, whose very name struck fear in the hearts of those who sailed the seas in search of an honest living. Piracy is in your blood, and you've always longed to follow in your forebear's footsteps and plunder the shipping lanes.~~~You went to a tavern called the Formidably Maid, a notorious pirate hangout in Port Peril, eager to start your career as a buccaneer. While you were there, however, a dashing and flirtatious corsair caught your eye, and after a whirlwind night of booze and romance, you found yourself beaten senseless and stuffed in a sack, carried off to who knows where.</Pair>
<Pair single="benefit" id="buccaneers-blood-benefit">You gain a +1 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> and <Link to="/skill/profession">Profession</Link> (sailor) checks. In addition, you gain a one-time +1 trait bonus to your <Link to="/rule/fame">Disrepute and Infamy</Link> scores.</Pair>
</Ability>
</>};
const _dockside_brawler = {title: "Dockside Brawler", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/skull_and_shackles_players_guide">Skull and Shackles Player's Guide</Link></p>
<Ability id="dockside-brawler" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="dockside-brawler">Dockside Brawler</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Skull and Shackles</Pair>
<Pair single="flavor" id="dockside-brawler-flavor">You grew up on the dangerous docks of one of the Shackles' numerous ports or anchorages, and quickly learned that fists often make a better point than fancy words, especially when used the right way. You've always preferred action to talk, anyway.~~~While drinking at a tavern called the Formidably Maid in Port Peril last night, you got into a brawl with some of the other patrons. You handled yourself well, but a group of rough-looking characters ganged up on you and overwhelmed you, knocking you unconscious.</Pair>
<Pair single="benefit" id="dockside-brawler-benefit">You gain a +1 trait bonus on damage rolls with <Link to="/eq-weapon/brass_knuckles">brass knuckles</Link> and <Link to="/misc/improvised_weapons">improvised weapons</Link>. Fortunately, you were able to conceal your brass knuckles when you were press-ganged, and you begin the campaign with them, regardless of your starting circumstances.</Pair>
</Ability>
</>};
const _eye_for_plunder = {title: "Eye for Plunder", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/skull_and_shackles_players_guide">Skull and Shackles Player's Guide</Link></p>
<Ability id="eye-for-plunder" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="eye-for-plunder">Eye for Plunder</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Skull and Shackles</Pair>
<Pair single="flavor" id="eye-for-plunder-flavor">You've always had a keen eye for the glitter of gold or silver, and You've robbed enough rich merchants and raided enough ships to have a feel for where the most valuable plunder is hidden.~~~You found yourself relatively well off when you got your share of your last voyage's plunder, and decided to spend a few of your hard-won coins at the Formidably Maid, a popular pirate tavern in Port Peril. Maybe the shine of your new wealth distracted you, however, because you never saw the miscreants who slipped something into your drink, knocking you out cold.</Pair>
<Pair single="benefit" id="eye-for-plunder-benefit">You gain a +1 trait bonus on <Link to="/skill/appraise">Appraise</Link> and <Link to="/skill/perception">Perception</Link> checks to find concealed or secret objects (including doors and traps). In addition, you begin the campaign with a selection mundane trade goods worth 50 gp that you were able to scrounge together during your first day on the Wormwood.</Pair>
</Ability>
</>};
const _ilizmagorti_native = {title: "Ilizmagorti Native", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/skull_and_shackles_players_guide">Skull and Shackles Player's Guide</Link></p>
<Ability id="ilizmagorti-native" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="ilizmagorti-native">Ilizmagorti Native</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Skull and Shackles</Pair>
<Pair single="flavor" id="ilizmagorti-native-flavor">You grew up in the city of Ilizmagorti on Mediogalti Island, a pirate port infamous for both the scoundrels who visit it and the feared Red Mantis assassins who run it. You've been around pirates all your life, but You've learned to be wary in your dealings with people, as there's no telling who might be a Red Mantis in disguise.~~~Looking to make your fortune, you hopped aboard a pirate ship in Ilizmagorti, and decided to celebrate your safe arrival in Port Peril with a few drinks at a tavern called the Formidably Maid. There were some suspicious-looking characters there, to be sure, and you decided to give them a wide berth, but as you left, feeling a bit woozy from drink, you were set upon by thugs in a dark alley and knocked unconscious.</Pair>
<Pair single="benefit" id="ilizmagorti-native-benefit">You gain a +1 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks, and Sense Motive is a class skill for you. In addition, your familiarity with the pirate's life allows you to make untrained <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks regarding pirates or the region of the Shackles.</Pair>
</Ability>
</>};
const _peg_leg = {title: "Peg Leg", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/skull_and_shackles_players_guide">Skull and Shackles Player's Guide</Link></p>
<Ability id="peg-leg" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="peg-leg">Peg Leg</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Skull and Shackles</Pair>
<Pair single="flavor" id="peg-leg-flavor">One of your legs was bitten off below the knee by a shark when you were just a child, and was replaced with a wooden peg leg. You've long since gotten used to your prosthesis, however, and take none of the normal penalties from having a peg leg. You've had to learn to deal with the pain of your injury as well.~~~Your balance always gets a bit shaky after a few drinks, and last night at the Formidably Maid - a tavern in Port Peril - was no exception. That must be why you fell to the floor as soon as you tried to stand up. What happened next is hazy, but you're pretty sure you were dragged out of the bar and onto a ship at the docks. At least they didn't throw you to the sharks...</Pair>
<Pair single="benefit" id="peg-leg-benefit">You gain a +1 trait bonus on Fortitude saves. Ever since your accident You've hated sharks, and you also gain a +1 trait bonus on damage rolls against sharks and other animals with the aquatic subtype.</Pair>
</Ability>
</>};
const _ships_surgeon = {title: "Ship's Surgeon", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/skull_and_shackles_players_guide">Skull and Shackles Player's Guide</Link></p>
<Ability id="ships-surgeon" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="ships-surgeon">Ship's Surgeon</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Skull and Shackles</Pair>
<Pair single="flavor" id="ships-surgeon-flavor">On a ship, a sailor often has to learn multiple skills, and this rule certainly applies to you. Your father was a woodworker, and you learned your first trade from him. But on your first voyage at sea you quickly found out that a carpenter is often a ship's doctor as well - after all, who knows more about sawing off limbs than someone who saws wood for a living? People are a lot bloodier than wood, that's for sure, but you haven't had many complaints - those sailors who have enjoyed your services are either happy to be alive or dead, and there's old salts who swear the peg legs you for made them are better than the real legs they used to have.~~~You were between ships in Port Peril, and after stopping for a drink at a tavern called the Formidably Maid, you happened upon a damsel in distress in the alleyway outside. Thinking you could help, you didn't notice the thugs hiding nearby, and they caught you unawares. You've been on enough ships to know a press gang by the blow of the sap on the back of your neck-you just hope whatever ship you end up on needs a surgeon.</Pair>
<Pair single="benefit" id="ships-surgeon-benefit">You gain a +1 trait bonus on <Link to="/skill/craft">Craft</Link> (carpentry) and <Link to="/skill/heal">Heal</Link> checks, and Heal is a class skill for you. Although the majority of your equipment was taken away when you were press-ganged, you managed to hang on to a fully stocked <Link to="/eq-misc/healers_kit">healer's kit</Link>, and you begin the campaign with it, regardless of your starting circumstances.</Pair>
</Ability>
</>};
const _touched_by_the_sea = {title: "Touched by the Sea", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/skull_and_shackles_players_guide">Skull and Shackles Player's Guide</Link></p>
<Ability id="touched-by-the-sea" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="touched-by-the-sea">Touched by the Sea</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Skull and Shackles</Pair>
<Pair single="flavor" id="touched-by-the-sea-flavor">You've always felt the call of the sea and your blood surges with the ebb and flow of the tides. Perhaps one of your parents was a sailor or pirate, or maybe one of your ancestors had a bit of aquatic elf or undine blood in them. Whatever the reason, you're as comfortable in the water as you are on land.~~~You came to Port Peril in search of your destiny, and after a few drinks at a tavern called the Formidably Maid, you went down to the docks to take in a view of the sea. The last thing you remember is a blow to the back of your head and the waves rushing up to meet you.</Pair>
<Pair single="benefit" id="touched-by-the-sea-benefit">You gain a +1 trait bonus on <Link to="/skill/swim">Swim</Link> checks and Swim is a class skill for you. In addition, penalties on attack rolls made underwater are lessened by 1.</Pair>
</Ability>
</>};
const _driven_by_guilt = {title: "Driven By Guilt", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/strange_aeons_players_guide">Strange Aeons Player's Guide</Link></p>
<Ability id="driven-by-guilt" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="driven-by-guilt">Driven By Guilt</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Strange Aeons</Pair>
<Pair single="flavor" id="driven-by-guilt-flavor">You awake after your ordeal with a lingering feeling that you have taken part in something outside the normal bounds of your morals. Whether you were corrupted at one point or compelled to perform some forgotten actions, this guilt drives you to fight against those forces in the world that prey upon the good. You see your present condition as a chance to redeem yourself and banish this unsettling emotion.</Pair>
<Pair single="benefit" id="driven-by-guilt-benefit">You gain a +1 trait bonus on saving throws against any spells or spell-like abilities cast by evil creatures. In addition, once per day as a <strong className="hl">swift action</strong>, you can add your Charisma bonus to your attack rolls and deal 1 additional point of damage for each class level you have against evil creatures for 1 round.</Pair>
</Ability>
</>};
const _enduring_stoicism = {title: "Enduring Stoicism", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/strange_aeons_players_guide">Strange Aeons Player's Guide</Link></p>
<Ability id="enduring-stoicism" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="enduring-stoicism">Enduring Stoicism</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Strange Aeons</Pair>
<Pair single="flavor" id="enduring-stoicism-flavor">Even though your pulse is pounding in your ears when you awake in the asylum, you feel strangely nonplussed. You can recognize that the situation you find yourself in is horrific, but you refuse to let that fear control you. It doesn't feel like it's worth worrying over too much. You know that when you face unspeakable forces, keeping your cool will keep you alive.</Pair>
<Pair single="benefit" id="enduring-stoicism-benefit">You gain a +2 trait bonus on all saving throws against spells or effects with the fear or emotion descriptors. In addition, you gain a +1 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks due to your intimidating presence, as people don't know what to expect from you.</Pair>
</Ability>
</>};
const _foe_of_the_strange = {title: "Foe of the Strange", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/strange_aeons_players_guide">Strange Aeons Player's Guide</Link></p>
<Ability id="foe-of-the-strange" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="foe-of-the-strange">Foe of the Strange</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Strange Aeons</Pair>
<Pair single="flavor" id="foe-of-the-strange-flavor">You awake feeling emboldened after a terrifying nightmare. Instead of being frightened by the bizarre creatures from your nightmares, these experiences have steeled you against these startling alien beings. You know that you fell victim to strange circumstances and loathsome forces, but you refuse to give in to a creeping sense of helplessness. Instead, you vow to fight back against whoever or whatever is responsible for your current situation. The creatures of your nightmares won't hold fear over your head. You'll take the fight to them.</Pair>
<Pair single="benefit" id="foe-of-the-strange-benefit">You gain a +1 trait bonus on saving throws against extraordinary, spell-like, and supernatural abilities of aberrations (for example, a <Link to="/monster/gibbering_mouther">gibbering mouther's gibbering</Link> or an <Link to="/monster/intellect_devourer">intellect devourer's confusion</Link>). In addition, whenever you're <Link to="/misc/confused">confused</Link> and roll to determine behavior in a given round, subtract 10 from the result.</Pair>
</Ability>
</>};
const _formerly_mind_swapped = {title: "Formerly Mind-Swapped", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/strange_aeons_players_guide">Strange Aeons Player's Guide</Link></p>
<Ability id="formerly-mind-swapped" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="formerly-mind-swapped">Formerly Mind-Swapped</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Strange Aeons</Pair>
<Pair single="flavor" id="formerly-mind-swapped-flavor">You awake with a strange sensation beyond the frightening experience of extensive memory loss. Full recollections of the experience - like so many others - have been wiped from your mind, but at some point in your past your mind was swapped with that of a yithian, an alien being from beyond time and space. You don't remember details of your experiences wandering the yithians' peculiar city in a foreign body - and even worry whether this might be some strange hallucination - but every so often, a flash of insight strikes you as a result of this experience. You know that you can rely on these alien flashbacks during your investigation into your current situation, as it gives you greater perspective into an otherwise confusing world.</Pair>
<Pair single="benefit" id="formerly-mind-swapped-benefit">Once per day, you can reroll one <Link to="/skill/knowledge">Knowledge</Link> check that you have just failed. In addition, you can attempt untrained Knowledge checks with DCs up to 20 instead of 10.</Pair>
</Ability>
</>};
const _methodical_mind = {title: "Methodical Mind", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/strange_aeons_players_guide">Strange Aeons Player's Guide</Link></p>
<Ability id="methodical-mind" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="methodical-mind">Methodical Mind</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Strange Aeons</Pair>
<Pair single="flavor" id="methodical-mind-flavor">When you awake with nothing but hazy memories, you begin carefully cataloging your thoughts to determine the reasons for your condition and where you might be. This comforts you, and you know deep down that you have always relied on your ordered mind and pragmatic approach to face challenges. You use this focus and sensibility to your advantage as you investigate your current dire situation.</Pair>
<Pair single="benefit" id="methodical-mind-benefit">Choose three <Link to="/skill/knowledge">Knowledge</Link> skills. You gain a +1 trait bonus on Knowledge checks of these kinds and on <Link to="/rule/concentration">concentration</Link> checks. In addition, choose one Knowledge skill. When <Link to="/rule/research">researching</Link>, you are considered to have <Link to="/feat/skill_focus">Skill Focus</Link> for that Knowledge skill when determining what die you roll to reduce a library's knowledge points (kp).</Pair>
</Ability>
</>};
const _pugnacious = {title: "Pugnacious", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/strange_aeons_players_guide">Strange Aeons Player's Guide</Link></p>
<Ability id="pugnacious" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="pugnacious">Pugnacious</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Strange Aeons</Pair>
<Pair single="flavor" id="pugnacious-flavor">You awake in the asylum with sore muscles and bloody knuckles, as if you were recently in a fight. You even have a vague feeling that you won. You can't explain it, but you know that you've always been easy to set off, and your first instinct when pressed into a corner is to lash out. Stuck in the asylum sets you on edge, and you not only want to figure out what happened to you, you want to free yourself and find whoever did this to you - and make them pay.</Pair>
<Pair single="benefit" id="pugnacious-benefit">You gain a +1 trait bonus on attack rolls when threatened by two or more enemies. In addition, once per day you can gain one of the following effects as an <strong className="hl">immediate action</strong>: You can increase the <Link to="/misc/reach">reach</Link> of your melee attacks by 5 feet for 1 round, or you can treat your weapon as <Link to="/misc/one_size_category_larger">one size category larger</Link> than it actually is for purposes of determining damage for 1 round.</Pair>
</Ability>
</>};
const _ritualistic = {title: "Ritualistic", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/strange_aeons_players_guide">Strange Aeons Player's Guide</Link></p>
<Ability id="ritualistic" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="ritualistic">Ritualistic</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Strange Aeons</Pair>
<Pair single="flavor" id="ritualistic-flavor">You awake with a sense of purpose and a tingle of magical power. Though it's unsettling that you can't recall your past, you have a hunch that if you and your companions do everything just right - follow the correct steps and order - the answers will reveal themselves and you will be free of your condition. You get the feeling that you've always fallen back on careful planning and time-tested evidence in the past, but a nagging sensation also tells you that you used these skills in less-than-kind ways all too recently.</Pair>
<Pair single="benefit" id="ritualistic-benefit">Choose one 0-level spell. You can cast this spell once per day as a spell-like ability with a caster level equal to your character level. The spell-like ability's save DC is Charisma-based. In addition, you gain a +2 trait bonus on all skill checks when performing <Link to="/rule/occult_rituals">occult rituals</Link>.</Pair>
</Ability>
</>};
const _sensitive_mind = {title: "Sensitive Mind", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/strange_aeons_players_guide">Strange Aeons Player's Guide</Link></p>
<Ability id="sensitive-mind" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="sensitive-mind">Sensitive Mind</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Strange Aeons</Pair>
<Pair single="flavor" id="sensitive-mind-flavor">You awake in the asylum horribly aware of dangers lurking nearby. While your memories are hazy and indistinct, everything around you looks vibrant and clear. You have an inkling that you have always been perceptive and can tell a lot about a person even in a quick meeting. This sensitivity can overwhelm you at times, especially in your current situation.</Pair>
<Pair single="benefit" id="sensitive-mind-benefit">You gain a +1 trait bonus on <Link to="/skill/appraise">Appraise</Link>, <Link to="/skill/perception">Perception</Link>, and <Link to="/skill/sense_motive">Sense Motive</Link> checks, and one of these (your choice) is a class skill for you. In addition, once per week you can use the <Link to="/skill/psychometry">psychometry</Link> occult skill unlock even if you are not capable of casting psychic spells or have the <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> feat.</Pair>
</Ability>
</>};
const _true_devotion = {title: "True Devotion", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/strange_aeons_players_guide">Strange Aeons Player's Guide</Link></p>
<Ability id="true-devotion" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="true-devotion">True Devotion</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Strange Aeons</Pair>
<Pair single="flavor" id="true-devotion-flavor">You wake from your recent ordeal with a sense of shame, as if you had sinned deeply against your morals and beliefs. However, you feel a bit of relief as well, as if your god had granted you a second chance. You not only have a drive to figure out what happened to you, but an urge to fight back against the unspeakable forces of evil. If, during the course of your investigation, you discover that you took part in unsavory activities that would normally be opposed to your faith or alignment, this event no longer has any impact with your standing in the eyes of your god due to your renewed righteous convictions.</Pair>
<Pair single="benefit" id="true-devotion-benefit">Once per day when casting a divine spell, you can attempt to cast the spell without losing the spell from its spell slot or using one of your allotted spells per day. There is a 20% chance that this attempt is successful. In addition, select one domain or inquisition you have. You can use the first granted power of that domain or inquisition one additional time per day. You must have a good alignment and be class capable of casting divine spells in order to select this trait.</Pair>
</Ability>
</>};
const _twitchy = {title: "Twitchy", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/strange_aeons_players_guide">Strange Aeons Player's Guide</Link></p>
<Ability id="twitchy" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="twitchy">Twitchy</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Strange Aeons</Pair>
<Pair single="flavor" id="twitchy-flavor">Your first thought upon awaking in the asylum isn't confusion over why you can't remember anything clearly - it's a sudden urge to find safety. You feel like everything around you, aside from your companions, might threaten you and you're always ready to react. You have a hard time staying still, and you're constantly surveying your surroundings. Maybe you are paranoid, or maybe it's just an overactive imagination, but whatever it is, you know that keeping these feelings honed will help you stay alive.</Pair>
<Pair single="benefit" id="twitchy-benefit">You gain a +2 trait bonus on initiative checks and a +1 trait bonus on Reflex saves.</Pair>
</Ability>
</>};
const _the_artisan = {title: "The Artisan", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/tyrants_grasp_players_guide">Tyrant's Grasp Player's Guide</Link></p>
<Ability id="the-artisan" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="the-artisan">The Artisan</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Tyrant's Grasp</Pair>
<Pair single="flavor" id="the-artisan-flavor">Precision is important in getting exactly what you want, and you give careful consideration in building everything from homes and vases to roads and empires. Your own attention to detail has proven vital in rebuilding Roslar's Coffer from the orc occupation a decade ago, whether you are an accountant, architect, engineer, or herbalist.</Pair>
<Pair single="benefit" id="the-artisan-benefit"><p>Your attention to detail provides you a +1 trait bonus on <Link to="/skill/appraise">Appraise</Link> and <Link to="/skill/heal">Heal</Link> checks, and one of these skills becomes a class skill for you.</p>
<p>Once per day, you can spend a full round casting a spell you can cast that has a normal casting time of 1 standard action to increase your effective caster level for that spell by 1. This ability has no affect on spells with a casting time other than 1 standard action.</p>
</Pair>
</Ability>
</>};
const _the_lawbringer = {title: "The Lawbringer", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/tyrants_grasp_players_guide">Tyrant's Grasp Player's Guide</Link></p>
<Ability id="the-lawbringer" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="the-lawbringer">The Lawbringer</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Tyrant's Grasp</Pair>
<Pair single="flavor" id="the-lawbringer-flavor">The frontier is a land of risk and disorder, and while people are welcome to brave those elements themselves, they all too often bring pain down upon folk who never wanted such a risk. You might serve on the town guard or as part of a detachment of soldiers supported by Vigil, or you could be simply a concerned farmer who endures when others cannot, but your purpose is to stand as a bulwark against the cruel whims of fate for anyone who needs it.</Pair>
<Pair single="benefit" id="the-lawbringer-benefit"><p>You gain a +2 trait bonus on saving throws against fear effects. If you have the <em>aura of courage</em> class feature, the bonus provided by your aura increases by 1.</p>
<p>Your courage is inspiring; the first time each day you are knocked unconscious or killed, all allies within 30 feet of you immediately gain a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to your level plus your Charisma modifier, as they rally to your defense. These temporary hit points last for 1 minute.</p>
</Pair>
</Ability>
</>};
const _the_optimist = {title: "The Optimist", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/tyrants_grasp_players_guide">Tyrant's Grasp Player's Guide</Link></p>
<Ability id="the-optimist" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="the-optimist">The Optimist</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Tyrant's Grasp</Pair>
<Pair single="flavor" id="the-optimist-flavor">People don't need to take your word that things are getting better; they only need to look around and see the proof before their eyes. The town's recovery from the orc occupation more than a decade ago is all but complete, and the monster in the Sarenite temple outside of town has finally been bested. Your irrepressible sense of optimism seems to fly in the face of the hard life that most residents of Roslar's Coffer face, but you're convinced that your positive attitude lifts up your community.</Pair>
<Pair single="benefit" id="the-optimist-benefit">You gain a +1 trait bonus on saving throws against mind-affecting effects. Further, your optimism can be infectious. As a <strong className="hl">swift action</strong> a number of times per day equal to your Charisma modifier (minimum 1), you can grant this bonus to an ally within 10 feet. This bonus lasts for 1 minute.</Pair>
</Ability>
</>};
const _the_outsider = {title: "The Outsider", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/tyrants_grasp_players_guide">Tyrant's Grasp Player's Guide</Link></p>
<Ability id="the-outsider" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="the-outsider">The Outsider</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Tyrant's Grasp</Pair>
<Pair single="flavor" id="the-outsider-flavor">You don't have a place, but the frontier seems comfortable enough for now. Maybe you're too informal for city life, too selfish for Lastwall's general culture of camaraderie, or too scarred by things you've seen to entirely trust another person.</Pair>
<Pair single="benefit" id="the-outsider-benefit"><p>You are accustomed to moving without drawing much attention to yourself, gaining a +1 trait bonus on <Link to="/skill/stealth">Stealth</Link> and <Link to="/skill/survival">Survival</Link> checks, and one of these skills is always a class skill for you.</p>
<p>Accustomed to working alone, you gain only half the benefit (+1) from <Link to="/rule/aid_another">aid another</Link> actions, but you're accustomed to doing the job right the first time and so increase the bonus you provide by 1 when aiding another character.</p>
</Pair>
</Ability>
</>};
const _the_pessimist = {title: "The Pessimist", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/tyrants_grasp_players_guide">Tyrant's Grasp Player's Guide</Link></p>
<Ability id="the-pessimist" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="the-pessimist">The Pessimist</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Tyrant's Grasp</Pair>
<Pair single="flavor" id="the-pessimist-flavor">You expect the worst and have rarely been disappointed. Your dour outlook may hail from the original destruction of Roslar's Coffer at the hands of the Twisted Nail tribe, the exile of the faithful from the nearby Sarenite temple, or some more personal misfortune, but it has set you apart among the largely forward-thinking population of Lastwall.</Pair>
<Pair single="benefit" id="the-pessimist-benefit"><p>Your faith that the worst possible outcome will occur grants you a +1 trait bonus on Will saving throws.</p>
<p>Your frustrating pessimism can spur friends to succeed just to spite you; once per day as a <strong className="hl">free action</strong>, you can force an ally within 30 feet to reroll a saving throw she just failed, using the better of the two results.</p>
</Pair>
</Ability>
</>};
const _the_reclaimer = {title: "The Reclaimer", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/tyrants_grasp_players_guide">Tyrant's Grasp Player's Guide</Link></p>
<Ability id="the-reclaimer" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="the-reclaimer">The Reclaimer</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Tyrant's Grasp</Pair>
<Pair single="flavor" id="the-reclaimer-flavor">You lost something precious in the destruction of Roslar's Coffer 12 years ago - a home, a legacy, perhaps even family - but returned because a soul shouldn't run from pain, but heal from it. Rebuilding your life and preventing that same hurt from dragging down others drives you to serve and protect, perhaps as a politician, charity worker, healer, or soldier, but that same loss fills you with an uncharitable anger that is often difficult to reconcile.</Pair>
<Pair single="benefit" id="the-reclaimer-benefit">Your wary eyes grant you a +1 trait bonus on <Link to="/skill/perception">Perception</Link> checks. You gain a +1 trait bonus on attack and damage rolls against any opponent that dealt hit point damage to one of your allies in the previous round.</Pair>
</Ability>
</>};
const _the_snoop = {title: "The Snoop", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/tyrants_grasp_players_guide">Tyrant's Grasp Player's Guide</Link></p>
<Ability id="the-snoop" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="the-snoop">The Snoop</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Tyrant's Grasp</Pair>
<Pair single="flavor" id="the-snoop-flavor">You know a little bit about most everything and everyone in Roslar's Coffer. It may be your profession, as you could be an archivist, crier, or librarian - or you simply make a hobby of gossip. Either way, you have a gift for recall and reading others.</Pair>
<Pair single="benefit" id="the-snoop-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_history">Knowledge (history)</Link> and <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks, and these both become class skills for you. Once each day you can reroll a single <Link to="/skill/bluff">Bluff</Link> or <Link to="/skill/sense_motive">Sense Motive</Link> check against a creature you have known for at least 24 hours, using the better result.</Pair>
</Ability>
</>};
const _the_word = {title: "The Word", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/tyrants_grasp_players_guide">Tyrant's Grasp Player's Guide</Link></p>
<Ability id="the-word" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="the-word">The Word</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Tyrant's Grasp</Pair>
<Pair single="flavor" id="the-word-flavor">In a nation overcrowded with faith, you often worry that your message is drowned out, but nonetheless important. The souls in Roslar's Coffer needed comfort and charity once upon a time, but have bounced back so fully - in part thanks to your hard work - that you worry you've made yourself unnecessary.</Pair>
<Pair single="benefit" id="the-word-benefit">You are accustomed to long hours, granting you a +1 trait bonus on Fortitude saving throws. Your faith is invigorating, and once per day you can <Link to="/ability/lay_on_hands">lay on hands</Link> as a paladin of half your character level (minimum 1). If you gain the <em>lay on hands</em> ability from a class, you instead gain one additional use of <em>lay on hands</em> each day.</Pair>
</Ability>
</>};
const _athletic_champion = {title: "Athletic Champion", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/war_for_the_crown_players_guide">War for the Crown Player's Guide</Link></p>
<Ability id="athletic-champion" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="athletic-champion">Athletic Champion</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>War for the Crown</Pair>
<Pair single="flavor" id="athletic-champion-flavor">Your physique and skill brought you into the public eye, and a winning smile helps you stay there. Taldor honors its extraordinary athletes, celebrating them as cultural heroes. Whether you were a gladiator, a runner, a wrestler, or any other competitor, your most recent victory caused someone important to sit up and take notice. You may never have a political career in front of you, but for now your name is helping to bring a little extra money in, and maybe that's good enough.</Pair>
<Pair single="benefit" id="athletic-champion-benefit">Select two of the following skills: <Link to="/skill/climb">Climb</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/perception">Perception</Link>, and <Link to="/skill/swim">Swim</Link>. You gain a +1 trait bonus on checks with those skills, and they are always class skills for you. In addition, you are accustomed to maneuvering through crowds; you gain a +2 trait bonus on checks to navigate through a crowd or resist being moved against your will, including spells and <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/drag">drag</Link>, and <Link to="/rule/reposition">reposition</Link> combat maneuvers.</Pair>
</Ability>
</>};
const _child_of_oppara = {title: "Child of Oppara", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/war_for_the_crown_players_guide">War for the Crown Player's Guide</Link></p>
<Ability id="child-of-oppara" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="child-of-oppara">Child of Oppara</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>War for the Crown</Pair>
<Pair single="flavor" id="child-of-oppara-flavor">You belong to a noble family that matters in Taldor, though as the story begins you may or may not be on good terms with your relatives. Your upbringing among the city's well-to-do gives you an upper hand when it comes to knowledge of high society, and you start the game with a modest inheritance. With Princess Eutropia's efforts to provide for Taldor's common citizens and overturn years of tradition, new lines are being quietly drawn in the sand, and you have found yourself embroiled in these intrigues whether you intended to be or not.~~~With this trait, the assumption is that you belong to a minor noble family (and can make up your family name). In this case, your family keeps a small manor in Aroden's View or Senate's Hill. If you want to be a member of one of Oppara's major noble families, you must take the <Link to="/feat/noble_scion">Noble Scion</Link> feat at 1st level.</Pair>
<Pair single="benefit" id="child-of-oppara-benefit">You gain a +1 trait bonus on <Link to="/skill/appraise">Appraise</Link> and <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> checks, and one of these skills is always a class skill for you. The Noble Scion feat does not have a Charisma prerequisite for you. In addition, you start play with a <Link to="/eq-misc/nobles_outfit">noble's outfit</Link>, a <Link to="/eq-misc/signet_ring">signet ring</Link>, and a single additional nonmagical item worth no more than 200 gp.</Pair>
</Ability>
</>};
const _disgraced_noble = {title: "Disgraced Noble", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/war_for_the_crown_players_guide">War for the Crown Player's Guide</Link></p>
<Ability id="disgraced-noble" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="disgraced-noble">Disgraced Noble</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>War for the Crown</Pair>
<Pair single="flavor" id="disgraced-noble-flavor">Your noble family used to matter, until your father took a stand against Maxillar Pythareus, the commander of Taldor's military. True or not, the accusations Pythareus leveled against your family in return destroyed your reputation and isolated you from the society you grew up in. Now the only thing that matters to you is clawing your way back up the social ladder, either for your own quality of life or to clear your family's name.</Pair>
<Pair single="benefit" id="disgraced-noble-benefit"><p>You've had to practice deception as you began working your way back into Taldan social circles; you gain a +2 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks to conceal your identity and a +2 bonus on <Link to="/skill/linguistics">Linguistics</Link> checks to spot or produce forgeries, and one of these skills is always a class skill for you.</p>
<p>Once each day, you can choose a single humanoid you believe to have been involved in the conspiracy to destroy your family; you gain a +1 morale bonus on attack and damage rolls against that NPC for a number of rounds equal to your character level. At 10th level, this bonus increases to +2.</p>
</Pair>
</Ability>
</>};
const _rising_star = {title: "Rising Star", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/war_for_the_crown_players_guide">War for the Crown Player's Guide</Link></p>
<Ability id="rising-star" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="rising-star">Rising Star</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>War for the Crown</Pair>
<Pair single="flavor" id="rising-star-flavor">All too often, great minds must suffer for their art, but you're one of the lucky ones. Your skills attracted the attention of a noble patron who pays for your food, housing, and tools. As your patron introduces you to other cultural elites, you're slowly learning to navigate the treacherous waters of high society, but you still remember the lean times when each meal was a hard-won treasure.</Pair>
<Pair single="benefit" id="rising-star-benefit"><p>You gain a +1 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> and <Link to="/skill/survival">Survival</Link> checks, as well as checks using a single <Link to="/skill/craft">Craft</Link> or <Link to="/skill/perform">Perform</Link> skill of your choice; one of these skills is always a class skill for you.</p>
<p>Once each day, you can invoke your patron's reputation or name one of your own prominent works to gain a +2 circumstance bonus on a single <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, or <Link to="/skill/intimidate">Intimidate</Link> check.</p>
<p>You begin the game with a <Link to="/eq-misc/masterwork_musical_instrument">masterwork musical instrument</Link> or <Link to="/eq-misc/masterwork_tool">tool</Link> appropriate to the Craft or Perform skill you selected, a gift from your patron.</p>
</Pair>
</Ability>
</>};
const _senatorial_hopeful = {title: "Senatorial Hopeful", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/war_for_the_crown_players_guide">War for the Crown Player's Guide</Link></p>
<Ability id="senatorial-hopeful" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="senatorial-hopeful">Senatorial Hopeful</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>War for the Crown</Pair>
<Pair single="flavor" id="senatorial-hopeful-flavor">While you belong to a noble family, hailing from the outlying prefectures means you lack the pull and wealth needed to rub shoulders with the stars of Oppara's social scene. Your life has been quiet, isolated from the thrum of fashion and pop culture, but you see this as a source of insight and aim to help people by someday joining the senate. It'll be a long journey, but you've already begun learning which hands to shake and how to listen carefully when others tell you what they want.</Pair>
<Pair single="benefit" id="senatorial-hopeful-benefit"><p>You gain a +1 bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks, and both of these skills are always class skills for you.</p>
<p>Once each week you can call on family connections to obtain a single piece of equipment or consumable magic item (such as a potion or scroll) worth up to your character level &times; 25 gp. Delivery of the goods you request takes 1d4 days.</p>
<p>At 10th level, the potential value of a magical item increases to your character level &times; 50 gp, and your requests can also include spellcasting services and wands.</p>
</Pair>
</Ability>
</>};
const _taldan_patriot = {title: "Taldan Patriot", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/war_for_the_crown_players_guide">War for the Crown Player's Guide</Link></p>
<Ability id="taldan-patriot" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="taldan-patriot">Taldan Patriot</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>War for the Crown</Pair>
<Pair single="flavor" id="taldan-patriot-flavor">You love your country, its history, and its people... even though they may not love you back. Whether you're a bureaucrat, a minor noble, or a soldier, you want your community to be the best it can be and you channel that love into a position in service to the people of Taldor.</Pair>
<Pair single="benefit" id="taldan-patriot-benefit">You gain a +1 bonus on all <Link to="/skill/sense_motive">Sense Motive</Link> and <Link to="/skill/knowledge_history">Knowledge (history)</Link> checks, and these skills are always class skills for you. In addition, once per day you can recall a specific fact about a Taldan noble's personality - quirks such as a hobby or pet peeve - including information you would normally learn as a <Link to="/rule/discovery_check">discovery check</Link> in social combat.</Pair>
</Ability>
</>};
const _young_reformer = {title: "Young Reformer", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/war_for_the_crown_players_guide">War for the Crown Player's Guide</Link></p>
<Ability id="young-reformer" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="young-reformer">Young Reformer</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>War for the Crown</Pair>
<Pair single="flavor" id="young-reformer-flavor">Perhaps you were born at the bottom of Taldan society and you're tired of seeing your friends and family toil endlessly with no hope of a better life, or maybe your privileged outlook was shattered by empathy or tragedy. Either way, you know the system is broken, and you've dedicated your life to fixing it. But tradition rules Taldor as much as any Grand Prince, and change requires more influence than you have... so far. You've got a few friends and allies, and plenty of determination, but while you work toward the power you need to change the nation, you'll have to resort to more discrete ways of righting wrongs and curbing the abuses of the upper class.</Pair>
<Pair single="benefit" id="young-reformer-benefit"><p>You gain a +1 trait bonus on <Link to="/skill/disable_device">Disable Device</Link> and <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks, and one of these skills is always a class skill for you.</p>
<p>Once per day, you can call upon your coconspirators to have "made arrangements" on your behalf, allowing you to attempt a Knowledge (local) check in place of a single <Link to="/skill/bluff">Bluff</Link>, Disable Device, <Link to="/skill/intimidate">Intimidate</Link>, or <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> check. The DC of this Knowledge (local) check is equal to the DC of the skill check it replaces.</p>
<p>Whatever arrangements you make - for doors left unlocked, guards strong-armed out of your way, stolen keys left for you to find - must be reasonable to have anticipated and achieved beforehand; you could arrange to have a noble convinced you're a very important diplomat traveling in disguise, for example, but if a fight breaks out you could not rely on your network of contacts to feint for you in combat.</p>
<p>You don't have to use this ability in advance; you can announce its use as you encounter a challenge, implying you foresaw this challenge and made arrangements prior to your arrival.</p>
</Pair>
</Ability>
</>};
const _chance_encounter = {title: "Chance Encounter", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/wrath_of_the_righteous_players_guide">Wrath of the Righteous Player's Guide</Link>, <Link to="/source/demon_hunters_handbook">Demon Hunter's Handbook</Link></p>
<Ability id="chance-encounter" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="chance-encounter">Chance Encounter</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Wrath of the Righteous</Pair>
<Pair single="flavor" id="chance-encounter-flavor">You always tended to get in over your head as a child, but your biggest youthful misadventure was the time you "accidentally" found yourself behind enemy lines in the Worldwound. You probably never would have made it back home to Kenabres if not for the help of a mysterious woman who helped you trick your way through a group of cultists. The woman never told you her name, but you remember her beauty and a deep sense of sadness she seemed to carry with her. Her skill with the bow was impressive as well, but the thing you remember most about her was the symbol of <Link to="/faith/desna">Desna</Link> she wore - she often held onto it without seeming to realize it, as if the connection to the goddess was something she clung to in a sense of need, as someone might clutch at a rope while dangling over a vast pit. She left your side a few moments before you were picked up by a patrol of crusaders, who finished the job of escorting you back to safety, and you've never seen her again. Ever since, you've just been lucky when it comes to trickery.</Pair>
<Pair single="benefit" id="chance-encounter-benefit"><p>Once per day, if you fail an Acrobatics, Bluff, Disguise, Sleight of Hand, or Stealth check, you may immediately reroll that check as a <strong className="hl">free action</strong>. You must take the second result, even if it is worse.</p>
<p><strong>Associated Mythic Path:</strong> Trickster.</p>
<p><strong>Multiple Characters:</strong> You and other characters were all saved by the same mysterious woman in your childhood. This could have been the same event, or she could have saved you on separate occasions - the discovery that someone else was saved by the mysterious stranger has resulted in a long friendship (or perhaps friendly rivalry) with the others she rescued.</p>
</Pair>
</Ability>
</>};
const _child_of_the_crusades_wotr = {title: "Child of the Crusades (WotR)", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/wrath_of_the_righteous_players_guide">Wrath of the Righteous Player's Guide</Link>, <Link to="/source/demon_hunters_handbook">Demon Hunter's Handbook</Link></p>
<Ability id="child-of-the-crusades-wotr" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="child-of-the-crusades-wotr">Child of the Crusades (WotR)</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Wrath of the Righteous</Pair>
<Pair single="flavor" id="child-of-the-crusades-wotr-flavor">Your parents were members of the crusade, as were their parents before them. (If you are an elf, gnome, or other long-lived race, these could be brothers or cousins instead, since it's possible that the Worldwound simply didn't exist at a time before you were born.) The righteousness of the crusades sometimes feels as if it runs in your very blood, and it bolsters you against demonic influence. Your parents may be alive still, or they may have perished on a mission-that choice is up to you. You grew up knowing them, though, and their zeal and devotion to the crusade is the primary reason you feel the same way. They've told you of other family members who have also been involved in the crusade, and it's not uncommon for you to meet a distant cousin or long-lost aunt, uncle, or other family member while traveling among the border towns of Mendev. This strong family tie bolsters your mind and sense of belonging to the crusade.</Pair>
<Pair single="benefit" id="child-of-the-crusades-wotr-benefit"><p>Once per day when you fail a saving throw against an effect created by a <Link to="/family/demon">demon</Link> that would possess or incapacitate you mentally, you may immediately reroll that saving throw as a <strong className="hl">free action</strong>. You must take the second result, even if it is worse.</p>
<p><strong>Associated Mythic Path:</strong> Marshal.</p>
<p><strong>Multiple Characters:</strong> If other characters take this trait, you should all be related-you can be siblings, cousins, or even more distant relations, but you should all be aware of this shared lineage.</p>
</Pair>
</Ability>
</>};
const _exposed_to_awfulness = {title: "Exposed to Awfulness", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/wrath_of_the_righteous_players_guide">Wrath of the Righteous Player's Guide</Link>, <Link to="/source/demon_hunters_handbook">Demon Hunter's Handbook</Link></p>
<Ability id="exposed-to-awfulness" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="exposed-to-awfulness">Exposed to Awfulness</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Wrath of the Righteous</Pair>
<Pair single="flavor" id="exposed-to-awfulness-flavor">When you were a child, you were nearly slain by a demon that managed to make its way through the wardstones into the lands beyond. The demon was slain before it could kill you, but you lingered at death's door in a coma for weeks before waking. Ever since then, you've been unusually hale and hearty, as if your body had endured its brush with awfulness by becoming supernaturally fit. But still, the scars (whether physical or purely mental) of your brush with death remain, and nightmares of what could have happened often plague your sleep. Something, be it your own personal force of will, some strange "infection" from the assault, or perhaps a combination of both, has made you stronger than before. You're not sure what to make of the theories that you survived this exposure to awfulness because you yourself have some trace of demonic heritage that helped give you the advantage you needed to survive; but whatever it was, you're glad for it! Your strange resistance to demonic attacks persists to this day.</Pair>
<Pair single="benefit" id="exposed-to-awfulness-benefit"><p>Once per day when you fail a saving throw against an effect created by a <Link to="/family/demon">demon</Link> that would kill or physically incapacitate you, you can immediately reroll that saving throw as a <strong className="hl">free action</strong>. You must take the second result, even if it is worse.</p>
<p><strong>Associated Mythic Path:</strong> Guardian.</p>
<p><strong>Multiple Characters:</strong> You and any others with this trait are related, if only distantly. You could be siblings or cousins - a condition that perhaps lends some credence to the theory that all of you share more than just a common bloodline.</p>
</Pair>
</Ability>
</>};
const _riftwarden_orphan = {title: "Riftwarden Orphan", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/wrath_of_the_righteous_players_guide">Wrath of the Righteous Player's Guide</Link>, <Link to="/source/demon_hunters_handbook">Demon Hunter's Handbook</Link></p>
<Ability id="riftwarden-orphan" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="riftwarden-orphan">Riftwarden Orphan</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Wrath of the Righteous</Pair>
<Pair single="flavor" id="riftwarden-orphan-flavor">You bear a strange birthmark on your body-something you've learned is the Sign of the Seeker's Spiral, a rune associated with the secret society known as the Riftwardens. You have researched this rune, and have learned that the mark sometimes appears on the children of Riftwardens who have been exposed to particularly strange planar energies. Unfortunately, you never knew your parents, for you were raised by a foster family in Kenabres. Your foster family has confirmed that both of your parents were Riftwardens, and has further confirmed that your parents went missing on a secret mission into the Worldwound less than a month after you were born. You're not sure what happened to them, but you're certain they're dead - and your gut tells you that the one who murdered them yet lives! In any event, you've long felt magic in your blood, and casting spells comes easily to you.</Pair>
<Pair single="benefit" id="riftwarden-orphan-benefit"><p>You gain a +2 trait bonus on all <Link to="/rule/concentration">concentration</Link> checks.</p>
<p><strong>Associated Mythic Path:</strong> Archmage.</p>
<p><strong>Multiple Characters:</strong> You should be siblings with any other character that takes this trait, so that you share the same missing parents. Your parents could even be foster parents.</p>
</Pair>
</Ability>
</>};
const _stolen_fury = {title: "Stolen Fury", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/wrath_of_the_righteous_players_guide">Wrath of the Righteous Player's Guide</Link>, <Link to="/source/demon_hunters_handbook">Demon Hunter's Handbook</Link></p>
<Ability id="stolen-fury" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="stolen-fury">Stolen Fury</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Wrath of the Righteous</Pair>
<Pair single="flavor" id="stolen-fury-flavor">You were forced to take part in a demonic ritual as a youth after having been captured by cultists. Whatever the ritual's purpose may have been, it didn't work out the way your captors envisioned; rather than corrupting your soul, you absorbed the ritual's energy and made it your own before you escaped to safety. Ever since, you've been haunted by strange nightmares about the ritual, and have long felt that the energies it bathed you in have changed you. Recently, those energies have changed: it's as if you've finally managed to come to terms with your past and have turned the ritual's after-effects to your advantage, following the old adage of what doesn't kill you makes you stronger. you've been unable to learn more about the ritual or what it was for, but the question lingers in the back of your head to this day. This nagging has instilled in you a fury against demonkind. Today, when you face demons in combat, those energies bolster your fury.</Pair>
<Pair single="benefit" id="stolen-fury-benefit"><p>You gain a +2 trait bonus on all combat maneuver checks against <Link to="/family/demon">demons</Link>.</p>
<p><strong>Associated Mythic Path:</strong> Champion.</p>
<p><strong>Multiple Characters:</strong> You and any other PC who takes this trait were all part of the same ritual, and it was only by working together that you managed to escape-further, the support of your fellow ritual survivors has played a key role in your coming to terms with it, and you retain a close bond of friendship (or perhaps a friendly rivalry) to this day.</p>
</Pair>
</Ability>
</>};
const _touched_by_divinity = {title: "Touched by Divinity", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/wrath_of_the_righteous_players_guide">Wrath of the Righteous Player's Guide</Link>, <Link to="/source/demon_hunters_handbook">Demon Hunter's Handbook</Link></p>
<Ability id="touched-by-divinity" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="touched-by-divinity">Touched by Divinity</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Wrath of the Righteous</Pair>
<Pair single="flavor" id="touched-by-divinity-flavor">As long as you can remember, you've had an unexplainable interest in one deity in particular. One of your parents may have been a priest of this deity, or you may have been an orphan raised by the church, but these alone cannot explain your deep connection to the faith. you've always felt calm and at ease in places holy to the deity, and often have dreams about the god or goddess visiting you - most often in the form of a sacred animal or creature. Your faith is strong, even if you don't happen to be a divine spellcaster - if you are a divine spellcaster, you should be a worshiper of this deity.</Pair>
<Pair single="benefit" id="touched-by-divinity-benefit"><p>You begin play with a <Link to="/eq-misc/silver_holy_symbol">silver holy symbol</Link> of your chosen deity for free. In addition, choose one domain associated with your chosen deity. You gain the use of that domain's 1st-level domain spell as a spell-like ability usable once per day (CL equals your character level).</p>
<p><strong>Associated Mythic Path:</strong> Hierophant.</p>
<p><strong>Multiple Characters:</strong> If other characters choose this trait, you should all work together to decide what deity you're associated with - it should be the same deity shared by all of you. You might even share the same dreams.</p>
</Pair>
</Ability>
</>};
const _black_sheep = {title: "Black Sheep", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="black-sheep" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="black-sheep">Black Sheep</Pair>
<Pair title="Type">Campaign</Pair>
<Pair single="flavor" id="black-sheep-flavor">You were born and raised in town. You know many of the region's secrets and the locals already know who you are. You aren't quite hated in town, but folk seem to think you're a troublemaker and a bastard and not to be trusted. The town's tougher folk respect you, but the law-abiding citizens don't.</Pair>
<Pair single="benefit" id="black-sheep-benefit"><p>You gain a +1 trait bonus on <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks, and Knowledge (local) is a class skill for you. In addition, you can choose any one notorious citizen from below as an ally; depending on the person you pick, you'll get different benefits.</p>
<ul>
<li><strong>Apothecary:</strong> Everyone suspects the sweaty, shifty-eyed apothecary sells poisons from his cluttered, acrid smelling wreck of a shop. You're one of the few in town who know this for a fact. You start the game with 400 gp worth of poison, and the apothecary will continue to sell you poison as long as you don't spread the word.</li>
<li><strong>Bitter Nobleman:</strong> A local unscrupulous family was hit hard recently, revealing criminal ties that damaged its reputation as well. One noble is eager to rebuild his presence in town, and you're one of the ones he's selected as an agent. Choose one of the following skills: <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>, or <Link to="/skill/stealth">Stealth</Link>. Your work for the family gives you a +1 trait bonus on that skill, and it is always a class skill for you.</li>
</ul>
</Pair>
</Ability>
</>};
const _favored_son_or_daughter = {title: "Favored Son or Daughter", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="favored-son-or-daughter" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="favored-son-or-daughter">Favored Son or Daughter</Pair>
<Pair title="Type">Campaign</Pair>
<Pair single="flavor" id="favored-son-or-daughter-flavor">You were born and raised in the town of Sandpoint or its surrounding farms. You know many of the region's secrets, and the locals already know who you are. You are well liked in town, and you'll have lots of friends in the region, but the town's tougher side sees you as a snitch or a pansy.</Pair>
<Pair single="benefit" id="favored-son-or-daughter-benefit"><p>You gain a +1 trait bonus on <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks, and Knowledge (local) is always a class skill for you. In addition, you can choose any one law-abiding citizen of Sandpoint from below as an ally; depending on the person you pick, you'll get different benefits.</p>
<ul>
<li><strong>Tavern Owner:</strong> One of the town's most influential and beloved nobles. Her inn/tavern is the most popular in town, and as one of her friends, you're guaranteed a place to eat and sleep for free. She's got lots of great contacts with merchants as well, and she'll sell any of your loot for you - as a result, you gain an additional 10% over the amount of gp you normally would get from selling off treasure.</li>
<li><strong>Sherrif:</strong> The no nonsense arm of the law, is like the uncle you never had. The benefits of being close friends with the town sheriff are extensive, and you can call in favors from him once per game session. A favor can either get you out of a legal jam, hook you up with a town guard for help, or give you a one-time +10 bonus on a <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, or <Link to="/skill/intimidate">Intimidate</Link> check made against any local person.</li>
</ul>
</Pair>
</Ability>
</>};
const _outlander = {title: "Outlander", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="outlander" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="outlander">Outlander</Pair>
<Pair title="Type">Campaign</Pair>
<Pair single="flavor" id="outlander-flavor">You are not from town; you've recently come from somewhere else and are hoping to make your fortune here.</Pair>
<Pair single="benefit" id="outlander-benefit"><p>Pick one of the following reasons to be a newcomer to the area.</p>
<ul>
<li><strong>Lore Seeker:</strong> The secrets of an ancient fallen civilization intrigue you, particularly the magical traditions of its highly mystical culture. You've studied magic intensely, and hope to increase that knowledge by adding ancient lore. You've come to the region to pursue that study, and chose the town as your base because it was out of the way of bigger cities-meaning less competition to study the ancient monuments in the region, you hope! You gain a +1 trait bonus on <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> checks, and Knowledge (arcana) is a class skill for you. If you cast arcane spells, pick three spells on your spell list. You are particularly adept at casting these spells, so they function at +1 caster level when you cast them, and their save DCs (if any) gain a +1 bonus.</li>
<li><strong>Exile:</strong> For whatever reason, you were forced to flee your homeland. Chance or fate has brought you to town, and it's here that your money ran out, leaving you stranded in this small town. You are also being pursued by enemies from your homeland, and that has made you paranoid and quick to react to danger. You gain a +2 trait bonus on Initiative checks.</li>
<li><strong>Missionary:</strong> You have come to town to see about expanding the presence of your chosen faith after receiving visions that told you your faith is needed in the region-what that need is, though, you're not quite sure. You gain a +1 trait bonus on <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks, and Knowledge (religion) is a class skill for you. If you cast divine spells, pick three spells on your spell list. You are particularly adept at casting these spells, so they function at +1 caster level when you cast them, and their save DCs (if any) gain a +1 bonus.</li>
</ul>
</Pair>
</Ability>
</>};
const _augmented_disguise = {title: "Augmented Disguise", topLink: ["Equipment Traits","main/traits_equipment"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory</Link></p>
<div style={{clear:"both"}}></div><Ability id="augmented-disguise" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="augmented-disguise">Augmented Disguise</Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="flavor" id="augmented-disguise-flavor">You are especially good at disguising yourself when you have props available.</Pair>
<Pair single="benefit" id="augmented-disguise-benefit">You gain a +2 trait bonus on <Link to="/skill/disguise">Disguise</Link> checks when wearing a wig, false beard, or similar large prop, or if you are wearing a special costume or eye-catching bauble that reinforces your disguise.</Pair>
</Ability>
</>};
const _dealmaker = {title: "Dealmaker", topLink: ["Equipment Traits","main/traits_equipment"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory</Link></p>
<Ability id="dealmaker" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="dealmaker">Dealmaker</Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="flavor" id="dealmaker-flavor">You have the air of a person with money, allowing you to buy and sell valuables that otherwise are too rich for the local community.</Pair>
<Pair single="benefit" id="dealmaker-benefit"><p>Once per week, when looking for an item with a price greater than <Link to="/rule/purchasing_magic_items">the local community's base value</Link>, make a DC 10 Diplomacy check; add 10 to the DC for each community size category between the current community and the community size with a base value sufficient for that item. Success means (with GM approval) you're able to sell or purchase that item as if the local community were of sufficient size. Each additional attempt (successful or otherwise) in that community increases the DC by an additional +10.</p>
<p><strong>Example:</strong> If you're trying to find a +1 <Link to="/magic-wondrous/cloak_of_resistance">cloak of resistance</Link> (1,000 gp), you'd normally need to be in a small town (base value 1,000 gp) or larger to be able to find that item with little trouble. If you're currently in a hamlet, that's two community sizes away from a small town, so the Diplomacy DC is 30. If you went to a village and asked there, the DC would only be 20 because it's only one community size away from a small town.</p>
</Pair>
</Ability>
</>};
const _extremely_fashionable = {title: "Extremely Fashionable", topLink: ["Equipment Traits","main/traits_equipment"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory</Link></p>
<Ability id="extremely-fashionable" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="extremely-fashionable">Extremely Fashionable</Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="flavor" id="extremely-fashionable-flavor">You really know how to make a good impression when you're dressed well.</Pair>
<Pair single="benefit" id="extremely-fashionable-benefit">Whenever you are wearing clothing and/or jewelry worth at least 150 gp (and not otherwise covered in gore, sewage, or other things that mar your overall look), you gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, and <Link to="/skill/intimidate">Intimidate</Link> checks. One of these skills (your choice) is a class skill for you.</Pair>
</Ability>
</>};
const _heirloom_weapon = {title: "Heirloom Weapon", topLink: ["Equipment Traits","main/traits_equipment"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory</Link></p>
<Ability id="heirloom-weapon" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="heirloom-weapon">Heirloom Weapon</Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="benefit" id="heirloom-weapon-benefit">You carry a non-masterwork simple or martial weapon that has been passed down from generation to generation in your family (pay the standard gp cost for the weapon). When you select this trait, choose one of the following benefits: proficiency with that specific weapon, a +1 trait bonus on attacks of opportunity with that specific weapon, or a +2 trait bonus on one kind of combat maneuver when using that specific weapon.</Pair>
</Ability>
</>};
const _improvisational_equipment = {title: "Improvisational Equipment", topLink: ["Equipment Traits","main/traits_equipment"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory</Link></p>
<Ability id="improvisational-equipment" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="improvisational-equipment">Improvisational Equipment</Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="flavor" id="improvisational-equipment-flavor">You have an uncanny knack for turning equipment to new and unexpected uses.</Pair>
<Pair single="benefit" id="improvisational-equipment-benefit">When using an item for anything other than its intended purpose - such as using a crowbar as a grappling hook or an old shirt to bandage a deadly wound - reduce the improvisation penalty by 2. This does not apply to improvised weapon penalties. Your GM may rule that some things are just not suitable for use in certain ways; for example, gluing a dead orc's face to your own face won't help you disguise yourself as an orc.</Pair>
</Ability>
</>};
const _iron_liver = {title: "Iron Liver", topLink: ["Equipment Traits","main/traits_equipment"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory</Link></p>
<Ability id="iron-liver" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="iron-liver">Iron Liver</Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="flavor" id="iron-liver-flavor">Due to a lucky constitution or frequent exposure, your body is resistant to poison, including alcohol and drugs.</Pair>
<Pair single="benefit" id="iron-liver-benefit">You gain a +2 trait bonus on Fortitude saves against poison and drugs, and a +4 trait bonus on Fortitude saves to avoid the effects of alcohol.</Pair>
</Ability>
</>};
const _power_of_suggestion = {title: "Power of Suggestion", topLink: ["Equipment Traits","main/traits_equipment"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory</Link></p>
<Ability id="power-of-suggestion" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="power-of-suggestion">Power of Suggestion</Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="flavor" id="power-of-suggestion-flavor">People trust your words over their own eyes.</Pair>
<Pair single="benefit" id="power-of-suggestion-benefit">You may make a <Link to="/skill/bluff">Bluff</Link> check to make observers believe that an object in your possession is actually a different object entirely. The DC for the check is 20 for items of a similar size, shape, and color (such as a glaive and a quarterstaff). Items of a different shape, size, or color raise the DC by 5 for each dissimilar aspect, or more if the dissimilarity is extreme. This deception lasts 1 minute; if the item is still in view, the observers may recognize their error unless you make another bluff check.</Pair>
</Ability>
</>};
const _prehensile_whip = {title: "Prehensile Whip", topLink: ["Equipment Traits","main/traits_equipment"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory</Link></p>
<Ability id="prehensile-whip" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="prehensile-whip">Prehensile Whip</Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="benefit" id="prehensile-whip-benefit">In your hand a whip has a life of its own, wrapping around pillars and beams with ease. You can use a <Link to="/eq-weapon/whip">whip</Link> as if it were a rope with a <Link to="/eq-weapon/grappling_hook">grappling hook</Link> at the end. Attaching your whip is a <strong className="hl">standard action</strong>, but detaching it is a <strong className="hl">full-round action</strong>.</Pair>
</Ability>
</>};
const _quick_learner = {title: "Quick Learner", topLink: ["Equipment Traits","main/traits_equipment"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory</Link></p>
<Ability id="quick-learner" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="quick-learner">Quick Learner</Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="flavor" id="quick-learner-flavor">You're skilled at learning the feel of a particular weapon after a few swings in combat.</Pair>
<Pair single="benefit" id="quick-learner-benefit">After your first attack with a weapon in which you are not proficient, the non-proficiency penalty decreases by 2 (to a -2 penalty). This effect lasts only while you have the weapon in hand; you must "relearn" the weapon each time you pick it up.</Pair>
</Ability>
</>};
const _rough_and_ready = {title: "Rough and Ready", topLink: ["Equipment Traits","main/traits_equipment"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory</Link></p>
<Ability id="rough-and-ready" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="rough-and-ready">Rough and Ready</Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="flavor" id="rough-and-ready-flavor">Your intense familiarity with the tools of your trade allows you to use them in combat as if they were actual weapons and makes them more effective for that purpose than they would normally be.</Pair>
<Pair single="benefit" id="rough-and-ready-benefit">When you use a tool of your trade (requiring at least 1 rank in the appropriate Craft or Profession skill) as a weapon, you do not take the <Link to="/misc/improvised_weapon">improvised weapon</Link> penalty and instead receive a +1 trait bonus on your attack. This trait is commonly used with shovels, picks, blacksmith hammers, and other sturdy tools - lutes and brooms make terribly fragile weapons.</Pair>
</Ability>
</>};
const _stage_magic = {title: "Stage Magic", topLink: ["Equipment Traits","main/traits_equipment"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory</Link></p>
<Ability id="stage-magic" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="stage-magic">Stage Magic</Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="flavor" id="stage-magic-flavor">You have put in many hours practicing with flashy alchemical items that enhance your Perform skill.</Pair>
<Pair single="benefit" id="stage-magic-benefit"><p>When you use an attention-getting alchemical item such as a flask of <Link to="/eq-weapon/alchemists_fire">alchemist's fire</Link>, <Link to="/eq-misc/smokestick">smokestick</Link>, <Link to="/eq-weapon/thunderstone">thunderstone</Link>, or another appropriate alchemical item (GM's discretion) as part of a performance, you gain a +2 trait bonus on your <Link to="/skill/perform">Perform</Link> check for the duration of that performance.</p>
<p>The item is expended without its normal effects and only serves to make your performance more impressive; for example, you could pretend to ignite yourself with alchemist's fire as part of a Perform (comedy) check or make a dramatic appearance with a smokestick as part of a Perform (act) check, but you would not actually take fire damage or gain <Link to="/rule/concealment">concealment</Link> from smoke.</p>
</Pair>
</Ability>
</>};
const _stealthy_escape = {title: "Stealthy Escape", topLink: ["Equipment Traits","main/traits_equipment"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory</Link></p>
<Ability id="stealthy-escape" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="stealthy-escape">Stealthy Escape</Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="flavor" id="stealthy-escape-flavor">You are adept at escaping from confinement in an unobtrusive manner.</Pair>
<Pair single="benefit" id="stealthy-escape-benefit">When trying to escape manacles, rope, or other similar restraints (but not grapples or similar attacks), you may make a <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> check instead of your <Link to="/skill/escape_artist">Escape Artist</Link> modifier. If you free yourself, you gain a +2 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks to pretend that you are still bound.</Pair>
</Ability>
</>};
const _thrown_together_fashion = {title: "Thrown-Together Fashion", topLink: ["Equipment Traits","main/traits_equipment"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory</Link></p>
<Ability id="thrown-together-fashion" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="thrown-together-fashion">Thrown-Together Fashion</Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="flavor" id="thrown-together-fashion-flavor">You can modify old clothing to make it effective in new circumstances.</Pair>
<Pair single="benefit" id="thrown-together-fashion-benefit">With a basic sewing kit or <Link to="/eq-misc/disguise_kit">disguise kit</Link>, you can make a <Link to="/skill/disguise">Disguise</Link> check to change one outfit into another outfit. The DC of this check is equal to 10 + the gp difference between costs of the outfits, as found in the <Link to="/main/equipment_misc">outfits' entries</Link>. The alteration takes 10 minutes per 1-gp difference in the cost of the outfits.</Pair>
</Ability>
</>};
const _well_provisioned_adventurer = {hasJL:true,title: "Well-Provisioned Adventurer", topLink: ["Equipment Traits","main/traits_equipment"], jsx: <><div className="jumpList" id="trait-well_provisioned_adventurer-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="trait-well_provisioned_adventurer-arcane-adept-package">Arcane Adept Package</InnerLink></li><li><InnerLink toTop to="trait-well_provisioned_adventurer-blessed-warden-package">Blessed Warden Package</InnerLink></li><li><InnerLink toTop to="trait-well_provisioned_adventurer-corporeal-warrior-package">Corporeal Warrior Package</InnerLink></li><li><InnerLink toTop to="trait-well_provisioned_adventurer-daring-bravo-package">Daring Bravo Package</InnerLink></li><li><InnerLink toTop to="trait-well_provisioned_adventurer-holy-warrior-package">Holy Warrior Package</InnerLink></li><li><InnerLink toTop to="trait-well_provisioned_adventurer-lore-seeker-package">Lore Seeker Package</InnerLink></li><li><InnerLink toTop to="trait-well_provisioned_adventurer-mystic-guide-package">Mystic Guide Package</InnerLink></li><li><InnerLink toTop to="trait-well_provisioned_adventurer-planar-traveler-package">Planar Traveler Package</InnerLink></li><li><InnerLink toTop to="trait-well_provisioned_adventurer-questing-knight-package">Questing Knight Package</InnerLink></li><li><InnerLink toTop to="trait-well_provisioned_adventurer-shadowy-stalker-package">Shadowy Stalker Package</InnerLink></li><li><InnerLink toTop to="trait-well_provisioned_adventurer-wilderness-wanderer-package">Wilderness Wanderer Package</InnerLink></li></ul></div><p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook</Link>, <Link to="/source/adventurers_armory_2">Adventurer's Armory 2</Link></p>
<div style={{clear:"both"}}></div><Ability id="well-provisioned-adventurer" extraClasses="trait hasSubs" icon={["battle-gear"]}>
<Pair single id="well-provisioned-adventurer">Well-Provisioned Adventurer</Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="flavor" id="well-provisioned-adventurer-flavor">You always knew that one day you would leave your humble beginnings behind and become an adventurer, so you scrimped and saved, buying the necessary equipment one piece at a time until you had everything you needed. Select one of the equipment packages below.</Pair>
<Pair single="benefit" id="well-provisioned-adventurer-benefit">If you select this trait during character creation, you do not receive any starting gold.</Pair>
</Ability>
<Ability id="arcane-adept-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="arcane-adept-package">Arcane Adept Package</Pair>
<Pair single="flavor" id="arcane-adept-package-flavor">The arcane adept has collected useful magical gear to ensure her success on her adventures, and she prides herself on having just the right tool for the job. This equipment package is appropriate for an arcanist, sorcerer, witch, or wizard. Some bards and summoners might also find it attractive. This equipment package can also work for a magus if the 1st-level scrolls and wand are replaced with a <Link to="/rule/masterwork_w">masterwork</Link> melee weapon.</Pair>
<Pair title="Weapons"><Link to="/eq-weapon/light_crossbow">Light crossbow</Link> with 10 bolts, <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>.</Pair>
<Pair title="Combat Gear"><Link to="/eq-weapon/acid">Acid</Link> (2), scrolls of <Link to="/spell/comprehend_languages">comprehend languages</Link> (2), scroll of <Link to="/spell/detect_secret_doors">detect secret doors</Link>, scroll of <Link to="/spell/glitterdust">glitterdust</Link>, scrolls of <Link to="/spell/identify">identify</Link> (2), scroll of <Link to="/spell/mount">mount</Link>, scroll of <Link to="/spell/rope_trick">rope trick</Link>, <Link to="/eq-weapon/thunderstone">thunderstone</Link>, wand of <Link to="/spell/mage_armor">mage armor</Link> (16 charges).</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/backpack">Backpack</Link>, <Link to="/eq-misc/bedroll">bedroll</Link>, <Link to="/eq-misc/belt_pouch">belt pouch</Link>, <Link to="/eq-misc/candle">candles</Link> (5), <Link to="/eq-misc/chalk">chalk</Link> (5 pieces), <Link to="/eq-misc/flint_and_steel">flint and steel</Link>, <Link to="/eq-misc/ink">ink</Link>, <Link to="/eq-misc/inkpen">inkpen</Link>, <Link to="/magic-wondrous/ioun_torch">ioun torch</Link>, <Link to="/eq-misc/journal">journal</Link>, <Link to="/eq-misc/magnifying_glass">magnifying glass</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/scroll_box">scroll box</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/eq-misc/spell_component_pouch">spell component pouch</Link>, <Link to="/eq-misc/trail_rations">trail rations</Link> (5 days), <Link to="/eq-misc/waterskin">waterskin</Link>, 3 gp.</Pair>
<Pair title="Total Weight">45 lbs. (28-3/4 lbs. for a Small character).</Pair>
</Ability>
<Ability id="blessed-warden-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="blessed-warden-package">Blessed Warden Package</Pair>
<Pair single="flavor" id="blessed-warden-package-flavor">A blessed warden is prepared to protect herself against the horrors of evil-aligned planes. This equipment package is suitable for clerics, druids, inquisitors, oracles, and paladins. The specific gear is appropriate for those visiting the chaotic evil Abyss but can be adjusted to suit other evil-aligned planes, such as swapping the scrolls of protection from chaos for scrolls of <Link to="/spell/protection_from_law">protection from law</Link> for a package designed for travel to Hell.</Pair>
<Pair title="Armor"><Link to="/rule/masterwork_a">Masterwork</Link> <Link to="/eq-armor/chain_shirt">chain shirt</Link>.</Pair>
<Pair title="Weapons"><Link to="/eq-material/cold_iron">Cold iron</Link> <Link to="/eq-weapon/shortspear">shortspear</Link>, <Link to="/eq-weapon/light_crossbow">light crossbow</Link> with 20 crossbow bolts.</Pair>
<Pair title="Combat Gear"><Link to="/eq-weapon/holy_water">Holy water</Link> (3), scrolls of <Link to="/spell/cure_light_wounds">cure light wounds</Link> (2), scrolls of <Link to="/spell/protection_from_chaos">protection from chaos</Link> (2), scrolls of <Link to="/spell/protection_from_evil">protection from evil</Link> (2), scroll of <Link to="/spell/remove_curse">remove curse</Link>.</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/backpack">Backpack</Link>, <Link to="/eq-misc/bedroll">bedroll</Link>, <Link to="/eq-misc/candle">candles</Link> (5), <Link to="/eq-misc/chalk">chalk</Link> (5 pieces), <Link to="/eq-misc/crowbar">crowbar</Link>, <Link to="/magic-wondrous/ioun_torch">ioun torch</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/shovel">shovel</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/eq-misc/spell_component_pouch">spell component pouch</Link>, <Link to="/eq-misc/trail_rations">trail rations</Link> (5 days), <Link to="/eq-misc/waterskin">waterskin</Link>, <Link to="/eq-misc/wooden_holy_symbol">wooden holy symbol</Link>, 13 gp.</Pair>
<Pair title="Total Weight">74 lbs. (44-1/2 lbs. for a Small character).</Pair>
</Ability>
<Ability id="corporeal-warrior-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="corporeal-warrior-package">Corporeal Warrior Package</Pair>
<Pair single="flavor" id="corporeal-warrior-package-flavor">Normal equipment is ill suited to fighting intangible foes, and a warrior bound for the Ethereal Plane must be prepared for incorporeal threats lurking in the ever-present mists. This equipment package is suitable for fighters and paladins. If the PC can cast spells, add a <Link to="/eq-misc/spell_component_pouch">spell component pouch</Link>.</Pair>
<Pair title="Armor">Masterwork <Link to="/eq-armor/breastplate">breastplate</Link>.</Pair>
<Pair title="Weapons"><Link to="/eq-weapon/heavy_crossbow">Heavy crossbow</Link> with 10 bolts, heavy mace, masterwork <Link to="/eq-weapon/longsword">longsword</Link>.</Pair>
<Pair title="Combat Gear"><Link to="/eq-weapon/alchemists_fire">Alchemist's fire</Link>, potion of <Link to="/spell/mage_armor">mage armor</Link>, potion of <Link to="/spell/shield">shield</Link>, oil of <Link to="/spell/magic_weapon">magic weapon</Link>.</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/backpack">Backpack</Link>, <Link to="/eq-misc/bedroll">bedroll</Link>, <Link to="/eq-misc/candle">candles</Link> (5), <Link to="/eq-misc/chalk">chalk</Link> (5 pieces), <Link to="/eq-misc/crowbar">crowbar</Link>, <Link to="/magic-wondrous/ioun_torch">ioun torch</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/shovel">shovel</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/eq-misc/trail_rations">trail rations</Link> (5 days), <Link to="/eq-misc/waterskin">waterskin</Link>, 10 gp.</Pair>
<Pair title="Total Weight">87 lbs. (48-1/2 lbs. for a Small character).</Pair>
</Ability>
<Ability id="daring-bravo-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="daring-bravo-package">Daring Bravo Package</Pair>
<Pair single="flavor" id="daring-bravo-package-flavor">The daring bravo is equally adept in social situations and combat, with the right equipment to move fluidly from one to the other. Such adventurers are known as much for their flair and panache as their martial prowess, and the daring bravo's equipment is often ornately ornamented or personalized. This equipment package is good for a bard, fighter, rogue, swashbuckler, or vigilante. Certain cavaliers, investigators, skalds, or even paladins may also find it appealing. If the PC can cast spells, add a <Link to="/eq-misc/spell_component_pouch">spell component pouch</Link>.</Pair>
<Pair title="Armor">Masterwork <Link to="/eq-armor/chain_shirt">chain shirt</Link>.</Pair>
<Pair title="Weapons"><Link to="/eq-weapon/light_crossbow">Light crossbow</Link> with 10 bolts, masterwork <Link to="/eq-weapon/rapier">rapier</Link>, <Link to="/eq-weapon/sap">sap</Link>, <Link to="/eq-material/alchemical_silver">alchemical silver</Link> <Link to="/eq-weapon/dagger">dagger</Link>.</Pair>
<Pair title="Combat Gear"><Link to="/eq-weapon/acid">Acid</Link> (2), <Link to="/eq-misc/alchemists_kindness">alchemist's kindness</Link>, potions of <Link to="/spell/cure_light_wounds">cure light wounds</Link> (2), <Link to="/eq-misc/sunrod">sunrods</Link> (3).</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/backpack">Backpack</Link>, <Link to="/eq-misc/bedroll">bedroll</Link>, <Link to="/eq-misc/belt_pouch">belt pouch</Link>, <Link to="/eq-misc/wine_fine_bottle">bottle of fine wine</Link>, <Link to="/eq-misc/chalk">chalk</Link> (5 pieces), <Link to="/eq-misc/courtiers_outfit">courtier's outfit with 50 gp in jewelry</Link>, <Link to="/eq-misc/flask">flask</Link>, <Link to="/eq-misc/flint_and_steel">flint and steel</Link>, <Link to="/eq-misc/grooming_kit">grooming kit</Link>, <Link to="/eq-misc/masterwork_musical_instrument">masterwork musical instrument</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/mirror">mirror</Link>, <Link to="/eq-misc/perfume">perfume or cologne</Link>, <Link to="/eq-misc/sack">sack</Link>, <Link to="/eq-misc/signet_ring">signet ring</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/eq-misc/trail_rations">trail rations</Link> (5 days), <Link to="/eq-misc/waterskin">waterskin</Link>, <Link to="/eq-misc/whetstone">whetstone</Link>, 5 gp.</Pair>
<Pair title="Total Weight">76-1/2 lbs. (40-1/2 lbs. for a Small character).</Pair>
</Ability>
<Ability id="holy-warrior-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="holy-warrior-package">Holy Warrior Package</Pair>
<Pair single="flavor" id="holy-warrior-package-flavor">The holy warrior is prepared to use her might and zeal to take the fight to the enemy, but she understands the importance of having the right equipment to overcome the resistances of her monstrous foes. This equipment package is well-suited to a cleric, inquisitor, paladin, warpriest, or even a fighter with a religious background. It's especially suited to characters who focus on supporting their party members and making them more effective in a fight. Even more than with other equipment packages, the GM should consider substituting the masterwork longsword in this package with a masterwork melee weapon appropriate to the PC's faith. If the PC can cast spells, add a <Link to="/eq-misc/spell_component_pouch">spell component pouch</Link>.</Pair>
<Pair title="Armor"><Link to="/eq-armor/heavy_steel_shield">Heavy steel shield</Link>, masterwork <Link to="/eq-armor/breastplate">breastplate</Link>.</Pair>
<Pair title="Weapons"><Link to="/eq-material/cold_iron">Cold iron</Link> <Link to="/eq-weapon/morningstar">morningstar</Link>, <Link to="/eq-weapon/heavy_crossbow">heavy crossbow</Link> with 10 bolts, masterwork <Link to="/eq-weapon/longsword">longsword</Link>.</Pair>
<Pair title="Combat Gear"><Link to="/eq-weapon/alchemists_fire">Alchemist's fire</Link> (3), <Link to="/eq-weapon/holy_water">holy water</Link> (4), oil of <Link to="/spell/bless_weapon">bless weapon</Link>, potions of <Link to="/spell/cure_light_wounds">cure light wounds</Link> (2), potion of <Link to="/spell/protection_from_evil">protection from evil</Link>, <Link to="/eq-misc/sunrod">sunrods</Link> (3).</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/backpack">Backpack</Link>, <Link to="/eq-misc/bedroll">bedroll</Link>, <Link to="/eq-misc/belt_pouch">belt pouch</Link>, <Link to="/eq-misc/candle">candles</Link> (5), <Link to="/eq-misc/chalk">chalk</Link> (5 pieces), <Link to="/eq-misc/crowbar">crowbar</Link>, <Link to="/eq-misc/flint_and_steel">flint and steel</Link>, <Link to="/eq-misc/holy_symbol">holy symbol (silver)</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/sack">sack</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/eq-misc/trail_rations">trail rations</Link> (5 days), <Link to="/eq-misc/waterskin">waterskin</Link>, 7 gp.</Pair>
<Pair title="Total Weight">102 lbs. (57-1/4 lbs. for a Small character).</Pair>
</Ability>
<Ability id="lore-seeker-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="lore-seeker-package">Lore Seeker Package</Pair>
<Pair single="flavor" id="lore-seeker-package-flavor">The lore seeker has the equipment necessary to delve into ancient ruins searching for lost knowledge. As this equipment package contains little by way of armor or weapons, it is most appropriate for alchemists, bards, monks, sorcerers, and wizards. If the PC can cast spells, add a <Link to="/eq-misc/spell_component_pouch">spell component pouch</Link> and a <Link to="/eq-misc/holy_symbol">holy symbol</Link> (if required).</Pair>
<Pair title="Weapons"><Link to="/eq-weapon/light_crossbow">Light crossbow</Link> with 10 bolts, <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>, <Link to="/eq-material/alchemical_silver">silver</Link> <Link to="/eq-weapon/dagger">dagger</Link>.</Pair>
<Pair title="Combat Gear">Alchemist's fire (3), <Link to="/eq-misc/antitoxin">antitoxin</Link>, oil of <Link to="/spell/erase">erase</Link>, <em>potions of cure light wounds</em> (2), <em>potion of protection from evil,</em> <Link to="/eq-weapon/tanglefoot_bag">tanglefoot bag</Link>, <Link to="/eq-weapon/thunderstone">thunderstone</Link>.</Pair>
<Pair title="Other Gear">Backpack, bedroll, belt pouch, candles (5), chalk (5 pieces), <Link to="/eq-misc/compass">compass</Link>, crowbar, <Link to="/eq-misc/everburning_torch">everburning torch</Link>, flint and steel, <Link to="/eq-weapon/grappling_hook">grappling hook</Link>, <Link to="/eq-misc/ink">ink</Link>, <Link to="/eq-misc/inkpen">inkpens</Link> (2), <Link to="/eq-misc/journal">journals</Link> (2), <Link to="/eq-misc/magnifying_glass">magnifying glass</Link>, <Link to="/eq-misc/mapmakers_kit">mapmaker's kit</Link>, mess kit, sack, <Link to="/eq-misc/signal_whistle">signal whistle</Link>, silk rope (50 ft.), trail rations (5 days), <Link to="/magic-wondrous/travelers_any_tool">traveler's any-tool</Link>, waterskin, 8 gp.</Pair>
<Pair title="Total Weight">44 lbs. (27-3/4 lbs. for a Small character).</Pair>
</Ability>
<Ability id="mystic-guide-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="mystic-guide-package">Mystic Guide Package</Pair>
<Pair single="flavor" id="mystic-guide-package-flavor">This equipment package is designed to provide the most aid to divine casters, such as clerics, druids, oracles, and inquisitors, who prefer to help their companions from behind the front lines of a fight.</Pair>
<Pair title="Armor"><Link to="/eq-armor/leather">Leather armor</Link>, <Link to="/eq-armor/light_wooden_shield">light wooden shield</Link>.</Pair>
<Pair title="Weapons"><Link to="/eq-weapon/shortspear">Shortspear</Link>, <Link to="/eq-weapon/sling">sling</Link> with 10 <Link to="/eq-weapon/sling_bullets">bullets</Link>.</Pair>
<Pair title="Combat Gear"><Link to="/eq-misc/antitoxin">Antitoxin</Link>, bead of blessing (as a <Link to="/magic-wondrous/lesser_strand_of_prayer_beads">lesser strand of prayer beads</Link> without the bead of healing), <Link to="/eq-weapon/holy_water">holy water</Link> (2), scrolls of <Link to="/spell/cure_light_wounds">cure light wounds</Link> (2), scroll of <Link to="/spell/endure_elements">endure elements</Link>.</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/backpack">Backpack</Link>, <Link to="/eq-misc/bedroll">bedroll</Link>, <Link to="/eq-misc/belt_pouch">belt pouch</Link>, <Link to="/eq-misc/candle">candles</Link> (5), <Link to="/eq-misc/chalk">chalk</Link> (5 pieces), <Link to="/eq-misc/flint_and_steel">flint and steel</Link>, <Link to="/eq-misc/healers_kit">healer's kit</Link>, <Link to="/eq-misc/holy_symbol">holy symbol (silver)</Link>, <Link to="/magic-wondrous/ioun_torch">ioun torch</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/mirror">mirror</Link>, <Link to="/eq-misc/sack">sack</Link>, <Link to="/eq-misc/shovel">shovel</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/eq-misc/smelling_salts">smelling salts</Link>, <Link to="/eq-misc/soap">soap</Link>, <Link to="/eq-misc/spell_component_pouch">spell component pouch</Link>, <Link to="/eq-misc/trail_rations">trail rations</Link> (5 days), <Link to="/eq-misc/waterskin">waterskin</Link>, 4 sp.</Pair>
<Pair title="Total Weight">67 lbs. (39-1/4 lbs. for a Small character).</Pair>
</Ability>
<Ability id="planar-traveler-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="planar-traveler-package">Planar Traveler Package</Pair>
<Pair single="flavor" id="planar-traveler-package-flavor">This package equipment prepares planar travelers for the challenges of a variety of planar destinations. This package works particularly well for lightly armored combatants, such as bards and rogues. If the PC purchasing it can cast spells, add a <Link to="/eq-misc/spell_component_pouch">spell component pouch</Link> as well.</Pair>
<Pair title="Armor">Masterwork <Link to="/eq-armor/studded_leather">studded leather</Link>, <Link to="/eq-armor/light_wooden_shield">light wooden shield</Link>.</Pair>
<Pair title="Weapons"><Link to="/eq-weapon/composite_longbow">Composite longbow</Link> with 20 <Link to="/eq-weapon/arrow">arrows</Link>, masterwork <Link to="/eq-weapon/morningstar">morningstar</Link>.</Pair>
<Pair title="Combat Gear"><Link to="/eq-weapon/alchemists_fire">Alchemist's fire</Link> (3), potion of <Link to="/spell/air_bubble">air bubble</Link>, potions of <Link to="/spell/cure_light_wounds">cure light wounds</Link> (2), potions of <Link to="/spell/endure_elements">endure elements</Link> (2).</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/backpack">Backpack</Link>, <Link to="/eq-misc/bedroll">bedroll</Link>, <Link to="/eq-misc/candle">candles</Link> (5), <Link to="/eq-misc/chalk">chalk</Link> (5 pieces), <Link to="/eq-misc/crowbar">crowbar</Link>, <Link to="/magic-wondrous/ioun_torch">ioun torch</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/shovel">shovel</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/eq-misc/trail_rations">trail rations</Link> (5 days), <Link to="/eq-misc/waterskin">waterskin</Link>, 11 gp.</Pair>
<Pair title="Total Weight">75 lbs. (42-1/2 lbs. for a Small character).</Pair>
</Ability>
<Ability id="questing-knight-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="questing-knight-package">Questing Knight Package</Pair>
<Pair single="flavor" id="questing-knight-package-flavor">If not descended from nobility, the questing knight certainly looks like he fits the part. This equipment package is useful for cavaliers, fighters, and paladins. If the PC can cast spells, add a <Link to="/eq-misc/spell_component_pouch">spell component pouch</Link> and a <Link to="/eq-misc/holy_symbol">holy symbol</Link> (if required). If the PC gains a mount from a class feature, remove the horse from the list below and replace the lance with a masterwork lance.</Pair>
<Pair title="Armor"><Link to="/eq-armor/half_plate">Half-plate</Link>, <Link to="/eq-armor/heavy_wooden_shield">heavy wooden shield</Link>.</Pair>
<Pair title="Weapons"><Link to="/eq-weapon/javelin">Javelins</Link> (4), <Link to="/eq-weapon/lance">lance</Link>, <Link to="/eq-weapon/longsword">longsword</Link>.</Pair>
<Pair title="Combat Gear"><Link to="/eq-misc/sunrod">Sunrods</Link> (2).</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/backpack">Backpack</Link>, <Link to="/eq-misc/banner">banner</Link>, <Link to="/eq-misc/bedroll">bedroll</Link>, <Link to="/eq-misc/belt_pouch">belt pouch</Link>, <Link to="/eq-misc/flask">flask</Link>, <Link to="/eq-misc/flint_and_steel">flint and steel</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/pole">pole</Link> (10 ft.), <Link to="/eq-misc/sack">sack</Link>, <Link to="/eq-misc/shovel">shovel</Link>, <Link to="/eq-misc/signet_ring">signet ring</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/eq-misc/trail_rations">trail rations</Link> (5 days), <Link to="/eq-misc/waterskin">waterskin</Link>, <Link to="/eq-misc/whetstone">whetstone</Link>, 8 gp.</Pair>
<Pair title="Mount"><Link to="/eq-misc/heavy_horse_combat_trained">Heavy horse (combat trained)</Link> with <Link to="/eq-misc/bit_and_bridle">bit and bridle</Link>, <Link to="/eq-misc/military_saddle">military saddle</Link>, and <Link to="/eq-misc/saddlebags">saddlebags</Link>.</Pair>
<Pair title="Total Weight:">127-1/2 lbs. (73-3/4 lbs. for a Small character).</Pair>
</Ability>
<Ability id="shadowy-stalker-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="shadowy-stalker-package">Shadowy Stalker Package</Pair>
<Pair single="flavor" id="shadowy-stalker-package-flavor">Skulking through a city or a dungeon, the shadowy stalker is equipped to strike quickly and fade away. This equipment package is appropriate for stealthy characters such as rangers, rogues, and slayers, and for some bards and investigators. If the PC can cast spells, add a <Link to="/eq-misc/spell_component_pouch">spell component pouch</Link>.</Pair>
<Pair title="Armor">Masterwork <Link to="/eq-armor/leather">leather armor</Link>.</Pair>
<Pair title="Weapons"><Link to="/eq-weapon/dagger">Daggers</Link> (3), masterwork <Link to="/eq-weapon/sickle">sickle</Link>, <Link to="/eq-weapon/sap">sap</Link>.</Pair>
<Pair title="Combat Gear"><Link to="/eq-weapon/alchemists_fire">Alchemist's fire</Link> (3), smokesticks (2), <Link to="/eq-misc/sunrod">sunrods</Link> (2).</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/bedroll">Bedroll</Link>, <Link to="/eq-misc/belt_pouch">belt pouch</Link>, <Link to="/eq-misc/caltrops">caltrops</Link>, <Link to="/eq-misc/candle">candles</Link> (5), <Link to="/eq-misc/chalk">chalk</Link> (5 pieces), <Link to="/eq-misc/disguise_kit">disguise kit</Link>, <Link to="/eq-misc/flint_and_steel">flint and steel</Link>, <Link to="/eq-misc/glass_cutter">glass cutter</Link>, masterwork <Link to="/eq-misc/backpack">backpack</Link>, masterwork <Link to="/eq-misc/thieves_tools">thieves' tools</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/sack">sack</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/magic-wondrous/sleeves_of_many_garments">sleeves of many garments</Link>, <Link to="/eq-misc/trail_rations">trail rations</Link> (5 days), <Link to="/eq-misc/waterskin">waterskin</Link>, 1 gp.</Pair>
<Pair title="Total Weight">63 lbs. (33-1/4 lbs. for a Small character).</Pair>
</Ability>
<Ability id="wilderness-wanderer-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="wilderness-wanderer-package">Wilderness Wanderer Package</Pair>
<Pair single="flavor" id="wilderness-wanderer-package-flavor">This equipment package is appropriate for any lightly-armored combatant in the wild, such as a barbarian, hunter, or ranger. If the PC can cast spells, add a <Link to="/eq-misc/spell_component_pouch">spell component pouch</Link> and <Link to="/eq-misc/holly_and_mistletoe">holly and mistletoe</Link>. The GM might consider altering which weapon is masterwork, based on the PC's specialization. For example, an archery-focused ranger might prefer a masterwork composite longbow over a masterwork greataxe.</Pair>
<Pair title="Armor"><Link to="/eq-armor/light_wooden_quickdraw_shield">Light wooden quickdraw shield</Link>, masterwork <Link to="/eq-armor/studded_leather">studded leather armor</Link>.</Pair>
<Pair title="Weapons"><Link to="/eq-material/cold_iron">Cold iron</Link> <Link to="/eq-weapon/heavy_flail">flail</Link>, <Link to="/eq-weapon/composite_longbow">composite longbow</Link> with 20 <Link to="/eq-weapon/arrow">arrows</Link>, masterwork <Link to="/eq-weapon/greataxe">greataxe</Link>, <Link to="/eq-weapon/short_sword">short sword</Link>.</Pair>
<Pair title="Combat Gear"><Link to="/eq-weapon/alchemists_fire">Alchemist's fire</Link> (2), <Link to="/eq-misc/antitoxin">antitoxin</Link>, potion of <Link to="/spell/keen_senses">keen senses</Link>, <Link to="/eq-misc/sunrod">sunrods</Link> (3).</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/backpack">Backpack</Link>, <Link to="/eq-misc/bedroll">bedroll</Link>, <Link to="/eq-misc/belt_pouch">belt pouch</Link>, <Link to="/eq-misc/chalk">chalk</Link> (5 pieces), <Link to="/eq-misc/climbers_kit">climber's kit</Link>, <Link to="/eq-misc/cold_weather_outfit">cold-weather outfit</Link>, <Link to="/eq-misc/fishhook">fishhook</Link>, <Link to="/eq-misc/flint_and_steel">flint and steel</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/pole">pole</Link> (10 ft.), <Link to="/eq-misc/shovel">shovel</Link>, <Link to="/eq-misc/signal_whistle">signal whistle</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/eq-misc/trail_rations">trail rations</Link> (5 days), <Link to="/eq-misc/waterskin">waterskin</Link>, 2 sp.</Pair>
<Pair title="Total Weight">108-1/2 lbs. (63-1/4 lbs. for a Small character).</Pair>
</Ability>
</>};
const _betrayal_of_trust = {title: "Betrayal of Trust", topLink: ["Family Traits","main/traits_family"], jsx: <><p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions</Link></p>
<Ability id="betrayal-of-trust" extraClasses="trait" icon={["relationship-bounds"]}>
<Pair single id="betrayal-of-trust">Betrayal of Trust</Pair>
<Pair title="Type">Family</Pair>
<Pair single="flavor" id="betrayal-of-trust-flavor">If you have the trait <Link to="/trait/tight_bonds">Tight Bonds</Link>, you swap it for this trait at the moment you decide to betray the relationship. (You need not wait until you have actually committed an act of betrayal.)</Pair>
<Pair single="benefit" id="betrayal-of-trust-benefit">You gain a +2 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks, increasing to +4 on checks specifically made to conceal or deny your infidelity.</Pair>
<Pair title="Special">It is possible to regain the Tight Bonds trait, for either the same or a different relationship, but it requires substantial in-character work. The GM decides when this trait reverts back to the original one.</Pair>
</Ability>
</>};
const _blood_resonance = {title: "Blood Resonance", topLink: ["Family Traits","main/traits_family"], jsx: <><p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions</Link></p>
<Ability id="blood-resonance" extraClasses="trait" icon={["relationship-bounds"]}>
<Pair single id="blood-resonance">Blood Resonance</Pair>
<Pair title="Type">Family</Pair>
<Pair single="benefit" id="blood-resonance-benefit">Select one racial, inherited template (such as <Link to="/template/half_dragon">half-dragon</Link>), or bloodline ability you can currently use at least three times each day. Once per day when you are within 60 feet of another character with this family trait who shares the race, template, or bloodline, you can use the selected ability without it counting against your normal daily limit.</Pair>
</Ability>
</>};
const _family_resemblance = {title: "Family Resemblance", topLink: ["Family Traits","main/traits_family"], jsx: <><p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions</Link></p>
<Ability id="family-resemblance" extraClasses="trait" icon={["relationship-bounds"]}>
<Pair single id="family-resemblance">Family Resemblance</Pair>
<Pair title="Type">Family</Pair>
<Pair single="flavor" id="family-resemblance-flavor">You have some of the common, recognizable features of your family.</Pair>
<Pair single="benefit" id="family-resemblance-benefit">You gain a +4 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks made to improve the attitude of a creature that has a friendly or helpful attitude toward another member of your family, and a +2 bonus on <Link to="/skill/disguise">Disguise</Link> checks to look like a specific member of your family. You also take a -2 penalty on Disguise checks to look like anyone who is not a member of your family.</Pair>
</Ability>
</>};
const _family_trade = {title: "Family Trade", topLink: ["Family Traits","main/traits_family"], jsx: <><p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions</Link></p>
<Ability id="family-trade" extraClasses="trait" icon={["relationship-bounds"]}>
<Pair single id="family-trade">Family Trade</Pair>
<Pair title="Type">Family</Pair>
<Pair single="benefit" id="family-trade-benefit">Choose one skill. All family members with this trait must choose the same skill and it is always a class skill for you. When you are within 60 feet of a family member with this trait, you gain a +2 trait bonus on checks with this skill.</Pair>
</Ability>
</>};
const _honor_bound = {title: "Honor-Bound", topLink: ["Family Traits","main/traits_family"], jsx: <><p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions</Link></p>
<Ability id="honor-bound" extraClasses="trait" icon={["relationship-bounds"]}>
<Pair single id="honor-bound">Honor-Bound</Pair>
<Pair title="Type">Family</Pair>
<Pair single="flavor" id="honor-bound-flavor">The family's honor is tied to a shared goal binding you all together.</Pair>
<Pair single="benefit" id="honor-bound-benefit">With the aid of the GM, choose a task that your family is bound to accomplish. Once per day, when you are within 60 feet of another character with this trait, you can gain a +1 trait bonus on a single saving throw or skill check when progress toward the goal is directly at stake (at the GM's discretion).</Pair>
</Ability>
</>};
const _rivalry = {title: "Rivalry", topLink: ["Family Traits","main/traits_family"], jsx: <><p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions</Link></p>
<Ability id="rivalry" extraClasses="trait" icon={["relationship-bounds"]}>
<Pair single id="rivalry">Rivalry</Pair>
<Pair title="Type">Family</Pair>
<Pair single="benefit" id="rivalry-benefit">If you see a family member with this trait within 60 feet of you fail a combat maneuver check or a skill check, you gain a +1 trait bonus on checks to perform the same combat maneuver or use the same skill for 1 round.</Pair>
</Ability>
</>};
const _tight_bonds = {title: "Tight Bonds", topLink: ["Family Traits","main/traits_family"], jsx: <><p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions</Link></p>
<Ability id="tight-bonds" extraClasses="trait" icon={["relationship-bounds"]}>
<Pair single id="tight-bonds">Tight Bonds</Pair>
<Pair title="Type">Family</Pair>
<Pair single="flavor" id="tight-bonds-flavor">Whether siblings, spouses, or dedicated members of the same clan, characters who take this trait are an inseparable pair committed to each other.</Pair>
<Pair single="benefit" id="tight-bonds-benefit">Your partner or partners must also have this trait. You gain a +1 trait bonus on Will saves against charm and compulsion effects if a partner is within 60 feet, increasing to +3 against a command to compromise your relationship or harm a partner.</Pair>
</Ability>
</>};
const _black_as_night = {title: "Black as Night", topLink: ["Mount Traits","main/traits_mount"], jsx: <><p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link></p>
<Ability id="black-as-night" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="black-as-night">Black as Night</Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a fell pony as a mount</Pair>
<Pair single="benefit" id="black-as-night-benefit">While astride a fell <Link to="/eq-misc/pony">pony</Link>, you gain a +1 trait bonus on attack rolls against enemies you are flanking.</Pair>
</Ability>
</>};
const _blessed_mutt = {title: "Blessed Mutt", topLink: ["Mount Traits","main/traits_mount"], jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link></p>
<Ability id="blessed-mutt" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="blessed-mutt">Blessed Mutt</Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a <Link to="/eq-misc/riding_dog">riding dog</Link> as a mount</Pair>
<Pair single="benefit" id="blessed-mutt-benefit">Lucky hounds gain a +1 luck bonus on saves against spells or effects with the evil descriptor or which originate from evil outsiders or undead.</Pair>
</Ability>
</>};
const _burst_of_speed = {title: "Burst of Speed", topLink: ["Mount Traits","main/traits_mount"], jsx: <><p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link></p>
<Ability id="burst-of-speed" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="burst-of-speed">Burst of Speed</Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a Dort charger as a mount</Pair>
<Pair single="benefit" id="burst-of-speed-benefit">Three times per day, while riding a <Link to="/eq-misc/horse">Dort charger</Link> and making a charge attack, you can increase your mount's speed by 15 feet as a free action.</Pair>
</Ability>
</>};
const _clamber = {title: "Clamber", topLink: ["Mount Traits","main/traits_mount"], jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link></p>
<Ability id="clamber" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="clamber">Clamber</Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a <Link to="/monster/ram">ram</Link> as a mount</Pair>
<Pair single="benefit" id="clamber-benefit">Mindspin mountain <Link to="/eq-misc/goat">goats</Link> gain a +2 trait bonus on <Link to="/skill/climb">Climb</Link> checks, and Climb is a class skill for them.</Pair>
</Ability>
</>};
const _clever_mount = {title: "Clever Mount", topLink: ["Mount Traits","main/traits_mount"], jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link></p>
<Ability id="clever-mount" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="clever-mount">Clever Mount</Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a mount</Pair>
<Pair single="benefit" id="clever-mount-benefit">This mount can learn four tricks per point of Intelligence, instead of the typical three. Commanding the mount with the Handle an Animal use of the <Link to="/skill/handle_animal">Handle Animal</Link> skill requires a successful DC 15 skill check instead of the usual DC 10, however, as it is willful and easily bored.</Pair>
</Ability>
</>};
const _cunning_breed = {title: "Cunning Breed", topLink: ["Mount Traits","main/traits_mount"], jsx: <><p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link></p>
<Ability id="cunning-breed" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="cunning-breed">Cunning Breed</Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a Taldor jennet as a mount</Pair>
<Pair single="benefit" id="cunning-breed-benefit">A <Link to="/eq-misc/horse">Taldor jennet</Link> can learn a total of eight tricks when trained using the <Link to="/skill/handle_animal">Handle Animal</Link> skill (as opposed to the standard six for having an Intelligence score of 2).</Pair>
</Ability>
</>};
const _fleet_of_foot = {title: "Fleet of Foot", topLink: ["Mount Traits","main/traits_mount"], jsx: <><p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link></p>
<Ability id="fleet-of-foot" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="fleet-of-foot">Fleet of Foot</Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a chiardmar as a mount</Pair>
<Pair single="benefit" id="fleet-of-foot-benefit">While riding a <Link to="/eq-misc/horse">chiardmar</Link>, you treat your mount's base speed as +10 feet faster for the purpose of using the <Link to="/rule/run">run</Link> or <Link to="/rule/withdraw">withdraw</Link> actions.</Pair>
</Ability>
</>};
const _nauseating_spit = {title: "Nauseating Spit", topLink: ["Mount Traits","main/traits_mount"], jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link></p>
<Ability id="nauseating-spit" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="nauseating-spit">Nauseating Spit</Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a <Link to="/eq-misc/camel">camel</Link> as a mount</Pair>
<Pair single="benefit" id="nauseating-spit-benefit">Once per hour, a Keleshite trade camel can regurgitate the contents of its stomach, spitting the foul material at a single target within 10 feet as a ranged touch attack. The target must succeed at a Fortitude save (DC = 10 + half the camel's Hit Dice + the camel's Constitution modifier) or be <Link to="/misc/nauseated">nauseated</Link> for 1 round.</Pair>
</Ability>
</>};
const _relentless_fortitude = {title: "Relentless Fortitude", topLink: ["Mount Traits","main/traits_mount"], jsx: <><p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link></p>
<Ability id="relentless-fortitude" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="relentless-fortitude">Relentless Fortitude</Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a Qadiran dromedary as a mount</Pair>
<Pair single="benefit" id="relentless-fortitude-benefit"><Link to="/eq-misc/camel">Qadiran dromedaries</Link> heal nonlethal damage at a rate of 2 hit points per hour per Hit Die. This trait does not stack with other effects that increase a creature's rate of healing nonlethal damage.</Pair>
</Ability>
</>};
const _running_pig = {title: "Running Pig", topLink: ["Mount Traits","main/traits_mount"], jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link></p>
<Ability id="running-pig" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="running-pig">Running Pig</Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a <Link to="/monster/boar">boar</Link> as a mount</Pair>
<Pair single="benefit" id="running-pig-benefit">Warthogs are quicker than they look, with a base speed of 45 feet instead of the boar's 40 feet.</Pair>
</Ability>
</>};
const _stalwart_elk = {title: "Stalwart Elk", topLink: ["Mount Traits","main/traits_mount"], jsx: <><p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link></p>
<Ability id="stalwart-elk" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="stalwart-elk">Stalwart Elk</Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a Chernasardo riding elk as a mount</Pair>
<Pair single="benefit" id="stalwart-elk-benefit">While riding a Chernasardo riding <Link to="/monster/elk">elk</Link>, you gain a +4 trait bonus on <Link to="/skill/handle_animal">Handle Animal</Link>, <Link to="/skill/ride">Ride</Link>, and <Link to="/ability/wild_empathy">wild empathy</Link> checks to resist another creature's unnatural aura.</Pair>
</Ability>
</>};
const _water_trained = {title: "Water-Trained", topLink: ["Mount Traits","main/traits_mount"], jsx: <><p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link></p>
<Ability id="water-trained" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="water-trained">Water-Trained</Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a Lastwall jasper as a mount</Pair>
<Pair single="benefit" id="water-trained-benefit"><Link to="/eq-misc/horse">Lastwall jaspers</Link> gain a +2 trait bonus on <Link to="/skill/swim">Swim</Link> checks, and Swim is a class skill for them.</Pair>
</Ability>
</>};
const _weather_beaten = {title: "Weather-Beaten", topLink: ["Mount Traits","main/traits_mount"], jsx: <><p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link></p>
<Ability id="weather-beaten" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="weather-beaten">Weather-Beaten</Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have an Erutaki husky as a mount</Pair>
<Pair single="benefit" id="weather-beaten-benefit"><Link to="/eq-misc/riding_dog">Erutaki huskies</Link> gain a +4 trait bonus on Fortitude saves to avoid nonlethal damage from cold environments, and only take a -2 penalty on <Link to="/skill/perception">Perception</Link> checks made in inclement weather such as rain or snow (instead of the usual -4 penalty).</Pair>
</Ability>
</>};
const _a_shining_beacon = {title: "A Shining Beacon", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="a-shining-beacon" extraClasses="trait" icon={["prayer"]}>
<Pair single id="a-shining-beacon">A Shining Beacon</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/iomedae">Iomedae</Link></Pair>
<Pair single="flavor" id="a-shining-beacon-flavor">You carry a burning hatred in your heart for all things demonic, and have studied their weaknesses carefully.</Pair>
<Pair single="benefit" id="a-shining-beacon-benefit">You deal an amount of additional damage equal to your weapon's critical hit modifier when you score a successful critical hit with a weapon against a <Link to="/family/demon">demon</Link>. This damage is added only after the damage is totaled, and is not multiplied by the critical hit multiplier.</Pair>
</Ability>
</>};
const _accident_resistant = {title: "Accident Resistant", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="accident-resistant" extraClasses="trait" icon={["prayer"]}>
<Pair single id="accident-resistant">Accident Resistant</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/zyphus">Zyphus</Link></Pair>
<Pair single="flavor" id="accident-resistant-flavor">Your understanding of pointless and unexpected death grants you a special awareness.</Pair>
<Pair single="benefit" id="accident-resistant-benefit">You gain a +2 trait bonus on Reflex saves when denied your Dexterity bonus or during a surprise round.</Pair>
</Ability>
</>};
const _adherent_of_ancient_osirion = {title: "Adherent of Ancient Osirion", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast</Link></p>
<Ability id="adherent-of-ancient-osirion" extraClasses="trait" icon={["prayer"]}>
<Pair single id="adherent-of-ancient-osirion">Adherent of Ancient Osirion</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/bastet">Bastet</Link></Pair>
<Pair title="Region" hl>Osirion</Pair>
<Pair title="Requirements" hl><Link to="/race/catfolk">Catfolk</Link></Pair>
<Pair single="flavor" id="adherent-of-ancient-osirion-flavor">Although Bastet has been all but forgotten by the native Osirians, you either sojourned with or were raised in a cult dedicated to the cat-headed goddess of Ancient Osirion.</Pair>
<Pair single="benefit" id="adherent-of-ancient-osirion-benefit">You treat the <Link to="/eq-weapon/tekko_kagi">tekko-kagi</Link> as a martial weapon instead of an exotic weapon. You also treat the tekko-kagi as if it were a set of <Link to="/eq-weapon/claw_blades">claw blades</Link> when determining how it interacts with other effects.</Pair>
</Ability>
</>};
const _adventurous_imbiber = {title: "Adventurous Imbiber", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="adventurous-imbiber" extraClasses="trait" icon={["prayer"]}>
<Pair single id="adventurous-imbiber">Adventurous Imbiber</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/cayden_cailean">Cayden Cailean</Link></Pair>
<Pair single="flavor" id="adventurous-imbiber-flavor">You've never been afraid of good, strong drink, and that has prepared you for the perils of more dangerous substances.</Pair>
<Pair single="benefit" id="adventurous-imbiber-benefit">You gain a +1 trait bonus on saving throws against poison.</Pair>
</Ability>
</>};
const _affinity_for_the_elements = {title: "Affinity for the Elements", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="affinity-for-the-elements" extraClasses="trait" icon={["prayer"]}>
<Pair single id="affinity-for-the-elements">Affinity for the Elements</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Elemental Lords</Pair>
<Pair single="benefit" id="affinity-for-the-elements-benefit">Add 1 to the DC of saving throws made to resist the effects of spells cast by you that have either the air, earth, fire, or water descriptor, depending on which elemental lord you worship. You must choose a single elemental lord when you take this trait; once chosen, it cannot be changed.</Pair>
</Ability>
</>};
const _agent_of_chance = {title: "Agent of Chance", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="agent-of-chance" extraClasses="trait" icon={["prayer"]}>
<Pair single id="agent-of-chance">Agent of Chance</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/nivi_rhombodazzle">Nivi Rhombodazzle</Link></Pair>
<Pair single="flavor" id="agent-of-chance-flavor">You can change the fortunes of others, typically for the better.</Pair>
<Pair single="benefit" id="agent-of-chance-benefit">Once per day, you can allow an adjacent ally to reroll a skill check as an <strong className="hl">immediate action</strong> before the result is revealed. The ally must take the second roll, even if it is worse.</Pair>
</Ability>
</>};
const _alluring = {title: "Alluring", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/dwarves_of_golarion">Dwarves of Golarion</Link></p>
<Ability id="alluring" extraClasses="trait" icon={["prayer"]}>
<Pair single id="alluring">Alluring</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/bolka">Bolka</Link></Pair>
<Pair single="flavor" id="alluring-flavor">You have the art of turning a passing glance into love.</Pair>
<Pair single="benefit" id="alluring-benefit">You receive a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks with those who find you attractive. You can use <Link to="/spell/daze">daze</Link> once per day as a spell-like ability, with a caster level equal to your character level.</Pair>
</Ability>
</>};
const _always_threatening = {title: "Always Threatening", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="always-threatening" extraClasses="trait" icon={["prayer"]}>
<Pair single id="always-threatening">Always Threatening</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/thamir_gixx">Thamir Gixx</Link></Pair>
<Pair single="flavor" id="always-threatening-flavor">You are fast on the draw.</Pair>
<Pair single="benefit" id="always-threatening-benefit">As a <strong className="hl">move action</strong>, you can draw a light, concealed weapon for which you have <Link to="/feat/weapon_focus">Weapon Focus</Link>. If you have the <Link to="/feat/quick_draw">Quick Draw</Link> feat, drawing this weapon is a <strong className="hl">free action</strong>.</Pair>
</Ability>
</>};
const _ambassador = {title: "Ambassador", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/taldor_echoes_of_glory">Taldor, Echoes of Glory</Link></p>
<Ability id="ambassador" extraClasses="trait" icon={["prayer"]}>
<Pair single id="ambassador">Ambassador</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/sarenrae">Sarenrae</Link></Pair>
<Pair single="flavor" id="ambassador-flavor">Your natural abilities at mediation and compromise manifested at a young age. For as long as you can remember, you were always more able to solve disputes and carefully settle violent disagreements than others.</Pair>
<Pair single="benefit" id="ambassador-benefit">You gain a +2 trait bonus to <Link to="/skill/diplomacy">Diplomacy</Link> checks.</Pair>
</Ability>
</>};
const _ancestors_blade = {title: "Ancestor's Blade", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="ancestors-blade" extraClasses="trait" icon={["prayer"]}>
<Pair single id="ancestors-blade">Ancestor's Blade</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/shizuru">Shizuru</Link></Pair>
<Pair single="flavor" id="ancestors-blade-flavor">You were trained by your family with a weapon passed down from a venerable ancestor.</Pair>
<Pair single="benefit" id="ancestors-blade-benefit">You begin play with an heirloom <Link to="/rule/masterwork_w">masterwork weapon</Link> worth up to 400 gp. You gain a +1 trait bonus on attack rolls with weapons of this type (not just your initial heirloom weapon) when you <em>smite evil.</em></Pair>
</Ability>
</>};
const _andolettas_consolation = {title: "Andoletta's Consolation", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="andolettas-consolation" extraClasses="trait" icon={["prayer"]}>
<Pair single id="andolettas-consolation">Andoletta's Consolation</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/andoletta">Andoletta</Link></Pair>
<Pair single="flavor" id="andolettas-consolation-flavor">You had a close encounter with a servant or worshiper of Andoletta who provided you with a memorable, if unconventional, consolation after a loss.</Pair>
<Pair single="benefit" id="andolettas-consolation-benefit">You gain a +2 trait bonus on saving throws against emotion and fear effects. If you are immune to fear, you instead gain a +4 trait bonus on saves against emotion effects.</Pair>
</Ability>
</>};
const _angradds_flame = {title: "Angradd's Flame", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes</Link></p>
<Ability id="angradds-flame" extraClasses="trait" icon={["prayer"]}>
<Pair single id="angradds-flame">Angradd's Flame</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/angradd">Angradd</Link></Pair>
<Pair single="flavor" id="angradds-flame-flavor">Your faith in the Forge-Fire fans the passionate flames of war in your heart.</Pair>
<Pair single="benefit" id="angradds-flame-benefit">Whenever you confirm a critical hit, you deal 1 additional point of damage to your target. This damage is considered <Link to="/misc/precision_damage">precision damage</Link>.</Pair>
</Ability>
</>};
const _angradds_valor = {title: "Angradd's Valor", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="angradds-valor" extraClasses="trait" icon={["prayer"]}>
<Pair single id="angradds-valor">Angradd's Valor</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/angradd">Angradd</Link></Pair>
<Pair single="flavor" id="angradds-valor-flavor">You hope to earn a place at Angradd's side after death and are inspired to charge with all your might into any righteous battle.</Pair>
<Pair single="benefit" id="angradds-valor-benefit">You gain a +1 trait bonus on all melee attack rolls when you charge.</Pair>
</Ability>
</>};
const _arcane_depth = {title: "Arcane Depth", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="arcane-depth" extraClasses="trait" icon={["prayer"]}>
<Pair single id="arcane-depth">Arcane Depth</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/nethys">Nethys</Link></Pair>
<Pair single="flavor" id="arcane-depth-flavor">You have studied the great masters of spellcraft, and your knowledge is exceptional.</Pair>
<Pair single="benefit" id="arcane-depth-benefit">You gain a bonus of either +1 on <Link to="/skill/spellcraft">Spellcraft</Link> checks or +2 on <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> checks. You must choose which bonus you receive when you take the trait; once chosen, it cannot be changed.</Pair>
</Ability>
</>};
const _avowed_inspiration = {title: "Avowed Inspiration", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="avowed-inspiration" extraClasses="trait" icon={["prayer"]}>
<Pair single id="avowed-inspiration">Avowed Inspiration</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/ragathiel">Ragathiel</Link></Pair>
<Pair single="flavor" id="avowed-inspiration-flavor">In emulation of the empyreal lord's intensely channeled rage, you are an inspiration on the battlefield.</Pair>
<Pair single="benefit" id="avowed-inspiration-benefit">Once per day, when you attack a foe who injured you during the same combat, you can inspire allies who can see you as a <strong className="hl">move action</strong>. Each other ally within 30 feet who can see you gains a +2 morale bonus on her next attack roll.</Pair>
</Ability>
</>};
const _backstabber = {title: "Backstabber", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/halflings_of_golarion">Halflings of Golarion</Link></p>
<Ability id="backstabber" extraClasses="trait" icon={["prayer"]}>
<Pair single id="backstabber">Backstabber</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/thamir_gixx">Thamir Gixx</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/halfling">Halfling</Link></Pair>
<Pair single="flavor" id="backstabber-flavor">Pledging your faith to <Link to="/faith/norgorber">Norgorber's</Link> lethal shadow gives you the skill to make a brutal attack against an opponent who cannot fully fend you off.</Pair>
<Pair single="benefit" id="backstabber-benefit">When you hit a foe you are <Link to="/rule/flanking">flanking</Link>, you deal an additional 1 point of damage (this damage is added to your base damage, and is multiplied on a critical hit). This additional damage is a trait bonus.</Pair>
</Ability>
</>};
const _battlefield_caster = {title: "Battlefield Caster", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/dwarves_of_golarion">Dwarves of Golarion</Link></p>
<Ability id="battlefield-caster" extraClasses="trait" icon={["prayer"]}>
<Pair single id="battlefield-caster">Battlefield Caster</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/angradd">Angradd</Link>, <Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/torag">Torag</Link>, or <Link to="/faith/trudd">Trudd</Link></Pair>
<Pair single="flavor" id="battlefield-caster-flavor">Your faith protects you even as you unleash spells in the thick of battle.</Pair>
<Pair single="benefit" id="battlefield-caster-benefit">You receive a +1 trait bonus on <Link to="/rule/concentration">concentration</Link> checks to cast defensively and a +1 trait bonus to AC against attacks provoked by or readied against spellcasting.</Pair>
</Ability>
</>};
const _battlefield_surgeon = {title: "Battlefield Surgeon", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="battlefield-surgeon" extraClasses="trait" icon={["prayer"]}>
<Pair single id="battlefield-surgeon">Battlefield Surgeon</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/zon_kuthon">Zon-Kuthon</Link></Pair>
<Pair single="flavor" id="battlefield-surgeon-flavor">You're skilled at both dealing and repairing wounds.</Pair>
<Pair single="benefit" id="battlefield-surgeon-benefit"><Link to="/skill/heal">Heal</Link> is a class skill for you, and you can use the <em>treat deadly wounds</em> aspect of Heal 1 additional time per creature per day.</Pair>
</Ability>
</>};
const _besmaras_name = {title: "Besmara's Name", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="besmaras-name" extraClasses="trait" icon={["prayer"]}>
<Pair single id="besmaras-name">Besmara's Name</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/besmara">Besmara</Link></Pair>
<Pair single="flavor" id="besmaras-name-flavor">Besmara sometimes answers your call.</Pair>
<Pair single="benefit" id="besmaras-name-benefit">Once per day when casting a divine spell, you can speak or whisper her name in place of using a divine focus.</Pair>
</Ability>
</>};
const _besmaras_strength = {title: "Besmara's Strength", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes</Link></p>
<Ability id="besmaras-strength" extraClasses="trait" icon={["prayer"]}>
<Pair single id="besmaras-strength">Besmara's Strength</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/besmara">Besmara</Link></Pair>
<Pair single="flavor" id="besmaras-strength-flavor">The Pirate Queen sometimes answers your calls when you tread dangerous waters.</Pair>
<Pair single="benefit" id="besmaras-strength-benefit">Once per day when attempting a <Link to="/skill/swim">Swim</Link> check, you can treat the water as if it were one category calmer (as if stormy water were rough water or rough water were calm water).</Pair>
</Ability>
</>};
const _bestial_wrath = {title: "Bestial Wrath", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="bestial-wrath" extraClasses="trait" icon={["prayer"]}>
<Pair single id="bestial-wrath">Bestial Wrath</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/rovagug">Rovagug</Link></Pair>
<Pair single="flavor" id="bestial-wrath-flavor">When you strike hard, you strike deep.</Pair>
<Pair single="benefit" id="bestial-wrath-benefit">You gain a +2 trait bonus on critical confirmation rolls.</Pair>
</Ability>
</>};
const _blade_of_mercy = {title: "Blade of Mercy", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_fire_players_guide">Legacy of Fire Player's Guide</Link></p>
<Ability id="blade-of-mercy" extraClasses="trait" icon={["prayer"]}>
<Pair single id="blade-of-mercy">Blade of Mercy</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/sarenrae">Sarenrae</Link></Pair>
<Pair single="flavor" id="blade-of-mercy-flavor">You know that within the heart of even the most hateful and cruel living creature exists a sliver of shame and hope for redemption. You have trained long on martial techniques to use bladed weapons not to kill, but to subdue.</Pair>
<Pair single="benefit" id="blade-of-mercy-benefit">When striking to inflict nonlethal damage with any slashing weapon, you do not take the normal -4 penalty on your attack roll, and gain a +1 trait bonus to any nonlethal damage you inflict with a slashing weapon.</Pair>
</Ability>
</>};
const _blessed_orphan = {title: "Blessed Orphan", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="blessed-orphan" extraClasses="trait" icon={["prayer"]}>
<Pair single id="blessed-orphan">Blessed Orphan</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/folgrit">Folgrit</Link></Pair>
<Pair single="flavor" id="blessed-orphan-flavor">As an orphan, you have always looked to Folgrit for protection.</Pair>
<Pair single="benefit" id="blessed-orphan-benefit">Once per day, you gain a +1 trait bonus on any saving throw. You must use this ability after the roll is made but before the result is revealed.</Pair>
</Ability>
</>};
const _blessing_of_the_feast = {title: "Blessing of the Feast", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/orcs_of_golarion">Orcs of Golarion</Link></p>
<Ability id="blessing-of-the-feast" extraClasses="trait" icon={["prayer"]}>
<Pair single id="blessing-of-the-feast">Blessing of the Feast</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/zura">Zura</Link></Pair>
<Pair single="flavor" id="blessing-of-the-feast-flavor">You come from a cannibal tribe, and find strength in the flesh of your foes.</Pair>
<Pair single="benefit" id="blessing-of-the-feast-benefit">Whenever you eat the flesh or drink the blood of another orc - a <strong className="hl">full-round action</strong> that provokes attacks of opportunity - you gain the favor of Zura and receive a +1 natural armor bonus for 1 minute/level. You can only receive this benefit once per day.</Pair>
</Ability>
</>};
const _blind_zeal = {title: "Blind Zeal", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="blind-zeal" extraClasses="trait" icon={["prayer"]}>
<Pair single id="blind-zeal">Blind Zeal</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/vildeis">Vildeis</Link></Pair>
<Pair single="flavor" id="blind-zeal-flavor">You are blind but trained by followers of Vildeis to sense your surroundings by sound and touch. You need not attempt a skill check to move at full speed.</Pair>
<Pair single="benefit" id="blind-zeal-benefit">You take a -4 penalty from <Link to="/misc/blindness">blindness</Link> on only <Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/ride">Ride</Link>, <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>, and <Link to="/skill/stealth">Stealth</Link> checks. You gain <Link to="/feat/blind_fight">Blind-Fight</Link> as a bonus feat. You lose the benefits of this trait whenever you can see, but regain them if you once again become blind.</Pair>
</Ability>
</>};
const _bloody_vengeance = {title: "Bloody Vengeance", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook</Link></p>
<Ability id="bloody-vengeance" extraClasses="trait" icon={["prayer"]}>
<Pair single id="bloody-vengeance">Bloody Vengeance</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/vildeis">Vildeis</Link></Pair>
<Pair single="flavor" id="bloody-vengeance-flavor">You were slain by evil forces as a child, but a follower of Vildeis restored you to life. Now you live on in service to the Cardinal Martyr, battling the forces of evil so no other child will know the icy grip of death.</Pair>
<Pair single="benefit" id="bloody-vengeance-benefit">You gain a +2 trait bonus on attack rolls to confirm critical hits against any creature that has at least a faint evil aura (see <Link to="/spell/detect_evil">detect evil</Link>).</Pair>
</Ability>
</>};
const _brighs_insight = {title: "Brigh's Insight", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes</Link></p>
<Ability id="brighs-insight" extraClasses="trait" icon={["prayer"]}>
<Pair single id="brighs-insight">Brigh's Insight</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/brigh">Brigh</Link></Pair>
<Pair single="flavor" id="brighs-insight-flavor">You hear Brigh's whisper in the workings of technology, granting you better understanding of and insight into constructs.</Pair>
<Pair single="benefit" id="brighs-insight-benefit">You gain a +2 trait bonus on caster level checks to overcome the spell resistance of constructs.</Pair>
</Ability>
</>};
const _broken_mind = {title: "Broken Mind", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="broken-mind" extraClasses="trait" icon={["prayer"]}>
<Pair single id="broken-mind">Broken Mind</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/groetus">Groetus</Link></Pair>
<Pair single="benefit" id="broken-mind-benefit">You're used to living with your own madness, and gain a +2 trait bonus on saving throws against madness and confusion effects.</Pair>
</Ability>
</>};
const _calistrian_courtesan = {title: "Calistrian Courtesan", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/elves_of_golarion">Elves of Golarion</Link></p>
<Ability id="calistrian-courtesan" extraClasses="trait" icon={["prayer"]}>
<Pair single id="calistrian-courtesan">Calistrian Courtesan</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/calistria">Calistria</Link></Pair>
<Pair single="flavor" id="calistrian-courtesan-flavor">You worked in one of Calistria's temples as a sacred courtesan, and you know how to flatter, please, and (most of all) listen.</Pair>
<Pair single="benefit" id="calistrian-courtesan-benefit">You gain a +1 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks and <Link to="/skill/diplomacy">Diplomacy</Link> checks to gather information, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
</>};
const _call_for_help = {title: "Call for Help", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/halflings_of_golarion">Halflings of Golarion</Link></p>
<Ability id="call-for-help" extraClasses="trait" icon={["prayer"]}>
<Pair single id="call-for-help">Call for Help</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/chaldira_zuzaristan">Chaldira Zuzaristan</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/halfling">Halfling</Link></Pair>
<Pair single="flavor" id="call-for-help-flavor">Offering your devotion to and modeling your life on <Link to="/faith/desna">Desna's</Link> impetuous companion means you frequently find yourself in a jam but also ensures that you can always rely upon your friends to bail you out.</Pair>
<Pair single="benefit" id="call-for-help-benefit">When you take the <Link to="/misc/total_defense">total defense</Link> action, allies gain a +1 trait bonus on rolls made against a creature threatening you.</Pair>
</Ability>
</>};
const _centered = {title: "Centered", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="centered" extraClasses="trait" icon={["prayer"]}>
<Pair single id="centered">Centered</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/irori">Irori</Link></Pair>
<Pair single="flavor" id="centered-flavor">Having anchored yourself in your faith and your knowledge of yourself, you've made it difficult for others to dominate you.</Pair>
<Pair single="benefit" id="centered-benefit">You gain a +1 trait bonus on saving throws against charm and compulsion effects, and the DC of any attempts to use the <Link to="/skill/intimidate">Intimidate</Link> skill on you increases by 1.</Pair>
</Ability>
</>};
const _chaldiras_luck = {title: "Chaldira's Luck", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="chaldiras-luck" extraClasses="trait" icon={["prayer"]}>
<Pair single id="chaldiras-luck">Chaldira's Luck</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/chaldira">Chaldira</Link></Pair>
<Pair single="flavor" id="chaldiras-luck-flavor">You found yourself in deep trouble in your youth but stumbled upon an unlikely way out after praying to Chaldira Zuzaristan for luck.</Pair>
<Pair single="benefit" id="chaldiras-luck-benefit">Once per day, you can roll twice and take the better result on a skill check.</Pair>
</Ability>
</>};
const _cheat_death = {title: "Cheat Death", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/pirates_of_the_inner_sea">Pirates of the Inner Sea</Link></p>
<Ability id="cheat-death" extraClasses="trait" icon={["prayer"]}>
<Pair single id="cheat-death">Cheat Death</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/besmara">Besmara</Link></Pair>
<Pair single="flavor" id="cheat-death-flavor">Even Besmara's most faithful worshipers usually call upon her only in times of greatest need. Sometimes Besmara intervenes on behalf of her faithful; other times, she turns her face away as they sink beneath the waves.</Pair>
<Pair single="benefit" id="cheat-death-benefit">Once per day, when you would be reduced to 0 or fewer hit points as a result of a failed ability check, skill check, or saving throw on your part, you may invoke this ability in order to reroll the failed check. You must take the result of the second roll, even if it is worse than the original.</Pair>
</Ability>
</>};
const _child_of_nature = {title: "Child of Nature", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link>, <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="child-of-nature" extraClasses="trait" icon={["prayer"]}>
<Pair single id="child-of-nature">Child of Nature</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/gozreh">Gozreh</Link></Pair>
<Pair single="flavor" id="child-of-nature-flavor">The wild places are your home, and provide everything you need to be happy.</Pair>
<Pair single="benefit" id="child-of-nature-benefit">You gain a +2 trait bonus on <Link to="/skill/survival">Survival</Link> checks, and Survival is a class skill for you.</Pair>
</Ability>
</>};
const _cleansing_light = {title: "Cleansing Light", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="cleansing-light" extraClasses="trait" icon={["prayer"]}>
<Pair single id="cleansing-light">Cleansing Light</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/sarenrae">Sarenrae</Link></Pair>
<Pair single="flavor" id="cleansing-light-flavor">Your faith is pure and strong, and your positive energy purges undead.</Pair>
<Pair single="benefit" id="cleansing-light-benefit">When dealing damage to undead with your <Link to="/ability/channel_energy">channel energy</Link> ability, you can reroll any damage die roll that results in a natural 1.</Pair>
</Ability>
</>};
const _cleansing_the_twisted = {title: "Cleansing the Twisted", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_fire_players_guide">Legacy of Fire Player's Guide</Link></p>
<Ability id="cleansing-the-twisted" extraClasses="trait" icon={["prayer"]}>
<Pair single id="cleansing-the-twisted">Cleansing the Twisted</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/sarenrae">Sarenrae</Link></Pair>
<Pair single="flavor" id="cleansing-the-twisted-flavor">You have studied well the many religious texts that chronicle Sarenrae's neverending struggle against <Link to="/faith/rovagug">Rovagug</Link> and his monstrous offspring. Your fighting style works particularly well when you utilize slashing weapons against aberrations.</Pair>
<Pair single="benefit" id="cleansing-the-twisted-benefit">You gain a +1 trait bonus to slashing weapon damage against all aberrations.</Pair>
</Ability>
</>};
const _clockwork_surgeon = {title: "Clockwork Surgeon", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 13</Link></p>
<Ability id="clockwork-surgeon" extraClasses="trait" icon={["prayer"]}>
<Pair single id="clockwork-surgeon">Clockwork Surgeon</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/aesocar">Aesocar</Link></Pair>
<Pair single="flavor" id="clockwork-surgeon-flavor">Thanks to your medical innovations, you can perform especially comprehensive or speedy surgeries.</Pair>
<Pair single="benefit" id="clockwork-surgeon-benefit"><p>You begin play with a special <Link to="/eq-misc/healers_kit">healer's kit</Link> at no cost and can fully restock your kit by expending materials worth 10 gp and spending 8 hours assembling medical devices.</p>
<p>When using this healer's kit to treat deadly wounds, you can either halve the time required to perform the action or add your Intelligence modifier to the number of hit points healed.</p>
</Pair>
</Ability>
</>};
const _contract_master = {title: "Contract Master", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="contract-master" extraClasses="trait" icon={["prayer"]}>
<Pair single id="contract-master">Contract Master</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/asmodeus">Asmodeus</Link></Pair>
<Pair single="flavor" id="contract-master-flavor">Your facility with contracts makes you good at understanding dense text and obfuscating your intent.</Pair>
<Pair single="benefit" id="contract-master-benefit">You gain a +1 trait bonus on <Link to="/skill/linguistics">Linguistics</Link> checks, and Linguistics is a class skill for you.</Pair>
</Ability>
</>};
const _corpse_cannibal = {title: "Corpse Cannibal", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="corpse-cannibal" extraClasses="trait" icon={["prayer"]}>
<Pair single id="corpse-cannibal">Corpse Cannibal</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/urgathoa">Urgathoa</Link></Pair>
<Pair single="flavor" id="corpse-cannibal-flavor">Your faith encourages you to indulge a variety of perverse hungers, leading you to shrug at even some of the darkest taboos.</Pair>
<Pair single="benefit" id="corpse-cannibal-benefit">You gain a +2 trait bonus on Fortitude saves against diseases and can gain sustenance from rotting flesh with no negative side effects.</Pair>
</Ability>
</>};
const _corpse_hunter = {title: "Corpse Hunter", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="corpse-hunter" extraClasses="trait" icon={["prayer"]}>
<Pair single id="corpse-hunter">Corpse Hunter</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/pharasma">Pharasma</Link></Pair>
<Pair single="benefit" id="corpse-hunter-benefit">You have dedicated yourself to the destruction of undead, and gain a +1 trait bonus on attacks made against undead.</Pair>
</Ability>
</>};
const _covenant_of_abaddon = {title: "Covenant of Abaddon", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="covenant-of-abaddon" extraClasses="trait" icon={["prayer"]}>
<Pair single id="covenant-of-abaddon">Covenant of Abaddon</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Horsemen</Pair>
<Pair single="benefit" id="covenant-of-abaddon-benefit">Because your soul is pledged to one of the Horsemen, you gain a +2 trait bonus on Fortitude saving throws against level-draining effects.</Pair>
</Ability>
</>};
const _dawn_renewal = {title: "Dawn Renewal", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/halflings_of_golarion">Halflings of Golarion</Link></p>
<Ability id="dawn-renewal" extraClasses="trait" icon={["prayer"]}>
<Pair single id="dawn-renewal">Dawn Renewal</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/sarenrae">Sarenrae</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/halfling">Halfling</Link></Pair>
<Pair single="flavor" id="dawn-renewal-flavor">Your morning prayers often send a welcome spark of divine vitality into your most recent patients.</Pair>
<Pair single="benefit" id="dawn-renewal-benefit">When you use the <Link to="/skill/heal">Heal</Link> skill to provide long-term care, your patients heal an extra 2 hit points at sunrise.</Pair>
</Ability>
</>};
const _deadeye_bowman = {title: "Deadeye Bowman", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="deadeye-bowman" extraClasses="trait" icon={["prayer"]}>
<Pair single id="deadeye-bowman">Deadeye Bowman</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/erastil">Erastil</Link></Pair>
<Pair single="benefit" id="deadeye-bowman-benefit">When you are using a longbow, if only a single creature is providing soft cover to your target, your target does not receive the +4 bonus to AC.</Pair>
</Ability>
</>};
const _deathspeaker = {title: "Deathspeaker", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="deathspeaker" extraClasses="trait" icon={["prayer"]}>
<Pair single id="deathspeaker">Deathspeaker</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/urgathoa">Urgathoa</Link></Pair>
<Pair single="benefit" id="deathspeaker-benefit">Your experience with undead creatures gives you a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks when dealing with undead, as well as a +2 trait bonus on Charisma checks to influence undead (such as with the <Link to="/spell/command_undead">command undead</Link> spell).</Pair>
</Ability>
</>};
const _deck_fighter = {title: "Deck Fighter", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="deck-fighter" extraClasses="trait" icon={["prayer"]}>
<Pair single id="deck-fighter">Deck Fighter</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/besmara">Besmara</Link></Pair>
<Pair single="benefit" id="deck-fighter-benefit">Your long experience in compensating for the pitch and yaw of ocean-going ships grants you a +1 trait bonus on attacks of opportunity when fighting aboard a ship.</Pair>
</Ability>
</>};
const _deep_wounding = {title: "Deep Wounding", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="deep-wounding" extraClasses="trait" icon={["prayer"]}>
<Pair single id="deep-wounding">Deep Wounding</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/achaekek">Achaekek</Link></Pair>
<Pair single="flavor" id="deep-wounding-flavor">You have learned the bloody secret of striking true and deep.</Pair>
<Pair single="benefit" id="deep-wounding-benefit">When you deal <Link to="/rule/bleed">bleed</Link> damage with a melee weapon, a successful DC 20 <Link to="/skill/heal">Heal</Link> check is required to stop the bleed damage. Magical healing stops the damage as normal.</Pair>
</Ability>
</>};
const _defensive_strategist = {title: "Defensive Strategist", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="defensive-strategist" extraClasses="trait" icon={["prayer"]}>
<Pair single id="defensive-strategist">Defensive Strategist</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/torag">Torag</Link></Pair>
<Pair single="flavor" id="defensive-strategist-flavor">Your study of dwarven history has trained you in defensive strategy.</Pair>
<Pair single="benefit" id="defensive-strategist-benefit">You aren't <Link to="/rule/flat_footed">flat-footed</Link> during a surprise round that you don't get to act in or before you get to act at the start of a battle.</Pair>
</Ability>
</>};
const _deformed = {title: "Deformed", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="deformed" extraClasses="trait" icon={["prayer"]}>
<Pair single id="deformed">Deformed</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/lamashtu">Lamashtu</Link></Pair>
<Pair single="benefit" id="deformed-benefit">Your monstrous deformities grant you a +1 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks, and Intimidate is a class skill for you.</Pair>
</Ability>
</>};
const _demon_hunter = {title: "Demon Hunter", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link>, <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="demon-hunter" extraClasses="trait" icon={["prayer"]}>
<Pair single id="demon-hunter">Demon Hunter</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/asmodeus">Asmodeus</Link></Pair>
<Pair single="flavor" id="demon-hunter-flavor">Raised in the church (whether or not you are currently a follower), you've focused your indoctrinated fervor primarily on the elimination of demons.</Pair>
<Pair single="benefit" id="demon-hunter-benefit">You gain a +3 trait bonus on <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> checks about <Link to="/family/demon">demons</Link> and a +2 trait bonus on Will saves against mind-affecting spells and effects from demons.</Pair>
</Ability>
</>};
const _demonic_persuasion = {title: "Demonic Persuasion", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="demonic-persuasion" extraClasses="trait" icon={["prayer"]}>
<Pair single id="demonic-persuasion">Demonic Persuasion</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Demon Lords</Pair>
<Pair single="flavor" id="demonic-persuasion-flavor">Your lord's favor aids you in your interactions with demonic creatures.</Pair>
<Pair single="benefit" id="demonic-persuasion-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks when dealing with creatures of the <Link to="/subtype/demon">demon</Link> subtype.</Pair>
</Ability>
</>};
const _demoralizing_presence = {title: "Demoralizing Presence", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="demoralizing-presence" extraClasses="trait" icon={["prayer"]}>
<Pair single id="demoralizing-presence">Demoralizing Presence</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/zon_kuthon">Zon-Kuthon</Link></Pair>
<Pair single="flavor" id="demoralizing-presence-flavor">Your very existence is unsettling to your foes.</Pair>
<Pair single="benefit" id="demoralizing-presence-benefit">You gain a +2 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks made to demoralize opponents.</Pair>
</Ability>
</>};
const _denial_of_fate = {title: "Denial of Fate", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="denial-of-fate" extraClasses="trait" icon={["prayer"]}>
<Pair single id="denial-of-fate">Denial of Fate</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/urgathoa">Urgathoa</Link></Pair>
<Pair single="flavor" id="denial-of-fate-flavor">The Pallid Princess has blessed you with the ability to avoid the final fate.</Pair>
<Pair single="benefit" id="denial-of-fate-benefit">Once per day while you are below 0 hit points, at the start of your turn you can choose to stabilize without needing to succeed at a Constitution check.</Pair>
</Ability>
</>};
const _destructive_blows = {title: "Destructive Blows", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="destructive-blows" extraClasses="trait" icon={["prayer"]}>
<Pair single id="destructive-blows">Destructive Blows</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/rovagug">Rovagug</Link></Pair>
<Pair single="flavor" id="destructive-blows-flavor">Your faith strengthens your powers of destruction.</Pair>
<Pair single="benefit" id="destructive-blows-benefit">You gain a +2 trait bonus on Strength checks to break objects, as well as on combat maneuver checks to <Link to="/rule/sunder">sunder</Link>.</Pair>
</Ability>
</>};
const _devotee_of_a_dead_god = {title: "Devotee of a Dead God", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/taldor_echoes_of_glory">Taldor, Echoes of Glory</Link></p>
<Ability id="devotee-of-a-dead-god" extraClasses="trait" icon={["prayer"]}>
<Pair single id="devotee-of-a-dead-god">Devotee of a Dead God</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/aroden">Aroden</Link></Pair>
<Pair single="flavor" id="devotee-of-a-dead-god-flavor">You simply cannot and will not accept that Aroden is dead. Your faith in his teachings and religion are stronger than ever.</Pair>
<Pair single="benefit" id="devotee-of-a-dead-god-benefit">You gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks and <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks. One of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
</>};
const _diseased_heart = {title: "Diseased Heart", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="diseased-heart" extraClasses="trait" icon={["prayer"]}>
<Pair single id="diseased-heart">Diseased Heart</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/ghlaunder">Ghlaunder</Link></Pair>
<Pair single="flavor" id="diseased-heart-flavor">Your work with infections has infused your spirit with disease.</Pair>
<Pair single="benefit" id="diseased-heart-benefit">Any creature that performs a <Link to="/umr/blood_drain">blood drain</Link> or <Link to="/umr/swallow_whole">swallow whole</Link> attack on you must succeed at a Fortitude saving throw (DC = 10 + your character level + your Constitution modifier) or become infected with <Link to="/disease/filth_fever">filth fever</Link>. This is a poison effect.</Pair>
</Ability>
</>};
const _divine_warrior = {title: "Divine Warrior", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/taldor_echoes_of_glory">Taldor, Echoes of Glory</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="divine-warrior" extraClasses="trait" icon={["prayer"]}>
<Pair single id="divine-warrior">Divine Warrior</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/iomedae">Iomedae</Link></Pair>
<Pair single="flavor" id="divine-warrior-flavor">From an early age, you were trained by a militaristic order of clerics. You are devoted to the teachings of Iomedae and to spreading those teachings by force.</Pair>
<Pair single="benefit" id="divine-warrior-benefit">Whenever you cast a divine spell that affects any melee weapons, choose one of those weapons; it gains a +1 trait bonus on damage rolls for the duration of the spell.</Pair>
</Ability>
</>};
const _dragon_tracker = {title: "Dragon Tracker", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="dragon-tracker" extraClasses="trait" icon={["prayer"]}>
<Pair single id="dragon-tracker">Dragon Tracker</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/dahak">Dahak</Link></Pair>
<Pair single="flavor" id="dragon-tracker-flavor">You have been taught to identify the subtle and not-so-subtle signs of a dragon's passage.</Pair>
<Pair single="benefit" id="dragon-tracker-benefit">You gain a +2 trait bonus on <Link to="/skill/survival">Survival</Link> checks to track dragons, and you can track a dragon with Survival untrained if the check's DC is 15 or lower.</Pair>
</Ability>
</>};
const _dragonslayer = {title: "Dragonslayer", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="dragonslayer" extraClasses="trait" icon={["prayer"]}>
<Pair single id="dragonslayer">Dragonslayer</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/dahak">Dahak</Link></Pair>
<Pair single="flavor" id="dragonslayer-flavor">You're greatly skilled in hunting and slaying those who resemble your lord's favored prey.</Pair>
<Pair single="benefit" id="dragonslayer-benefit">You gain a +1 trait bonus on attack rolls against creatures of the dragon type.</Pair>
</Ability>
</>};
const _ear_for_music = {title: "Ear for Music", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="ear-for-music" extraClasses="trait" icon={["prayer"]}>
<Pair single id="ear-for-music">Ear for Music</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/shelyn">Shelyn</Link></Pair>
<Pair single="flavor" id="ear-for-music-flavor">You spent countless hours of your youth in one of Shelyn's temples, listening to wonderful musicians and singers.</Pair>
<Pair single="benefit" id="ear-for-music-benefit">You gain a +1 trait bonus on one category of <Link to="/skill/perform">Perform</Link> checks and a +2 trait bonus on <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks that deal with the local art or music scene.</Pair>
</Ability>
</>};
const _elemental_resilience = {title: "Elemental Resilience", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="elemental-resilience" extraClasses="trait" icon={["prayer"]}>
<Pair single id="elemental-resilience">Elemental Resilience</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Elemental Lords</Pair>
<Pair single="benefit" id="elemental-resilience-benefit">Choose one of the following energy types: acid, cold, electricity, or fire. You gain a +1 trait bonus on saving throws against spells with that descriptor. Once the energy type is chosen, it cannot be changed.</Pair>
</Ability>
</>};
const _elven_polytheist = {title: "Elven Polytheist", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/faiths_of_purity">Faiths of Purity</Link>, <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="elven-polytheist" extraClasses="trait" icon={["prayer"]}>
<Pair single id="elven-polytheist">Elven Polytheist</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Elven Deities</Pair>
<Pair single="benefit" id="elven-polytheist-benefit">Your knowledge of the elven gods has given you a broad perspective, thus granting you a +1 trait bonus on all <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> skill checks, and Knowledge (religion) is always a class skill for you.</Pair>
</Ability>
<aside><p>This trait was published as "Elven Pantheist" in <em>Faiths and Purity</em>.</p>
</aside></>};
const _empty_heart_full_heart = {title: "Empty Heart, Full Heart", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="empty-heart-full-heart" extraClasses="trait" icon={["prayer"]}>
<Pair single id="empty-heart-full-heart">Empty Heart, Full Heart</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/naderi">Naderi</Link></Pair>
<Pair single="benefit" id="empty-heart-full-heart-benefit">Because of the aching strength of your forbidden love, you gain a +1 trait bonus on saving throws against charm effects, and targets of your charm spells take a -1 penalty on their saving throws.</Pair>
</Ability>
</>};
const _empyreal_focus = {title: "Empyreal Focus", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="empyreal-focus" extraClasses="trait" icon={["prayer"]}>
<Pair single id="empyreal-focus">Empyreal Focus</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Empyreal Lords</Pair>
<Pair single="flavor" id="empyreal-focus-flavor">The empyreal lord you worship rewards your devotion by granting you an occasional boon.</Pair>
<Pair single="benefit" id="empyreal-focus-benefit">Once per day, before you attempt a skill check, you can use this boon to gain a +2 trait bonus on that skill check.</Pair>
</Ability>
</>};
const _enchanting_conniver = {title: "Enchanting Conniver", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="enchanting-conniver" extraClasses="trait" icon={["prayer"]}>
<Pair single id="enchanting-conniver">Enchanting Conniver</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/calistria">Calistria</Link></Pair>
<Pair single="benefit" id="enchanting-conniver-benefit">You gain a +2 trait bonus on <Link to="/skill/bluff">Bluff</Link> and <Link to="/skill/diplomacy">Diplomacy</Link> checks against creatures affected by one of your charm or compulsion effects.</Pair>
</Ability>
</>};
const _enemy_of_delusion = {title: "Enemy of Delusion", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="enemy-of-delusion" extraClasses="trait" icon={["prayer"]}>
<Pair single id="enemy-of-delusion">Enemy of Delusion</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/andoletta">Andoletta</Link></Pair>
<Pair single="flavor" id="enemy-of-delusion-flavor">You were once faced with a grave injustice committed by an ignorant or delusional person, and righteous indignation moved you to correct the mistaken party.</Pair>
<Pair single="benefit" id="enemy-of-delusion-benefit">Once per day, when you confirm a critical hit against, successfully use a <em>smite</em> attack on, or use <Link to="/ability/lay_on_hands">lay on hands</Link> on a creature that is affected by a charm or compulsion effect, you can invoke Andoletta to open the target's eyes. If the effect originally allowed a saving throw to resist it, the target can attempt a new saving throw against the charm or compulsion; if she's successful, the effect ends immediately.</Pair>
</Ability>
</>};
const _envoy_of_healing = {title: "Envoy of Healing", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook</Link></p>
<Ability id="envoy-of-healing" extraClasses="trait" icon={["prayer"]}>
<Pair single id="envoy-of-healing">Envoy of Healing</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/sarenrae">Sarenrae</Link></Pair>
<Pair single="flavor" id="envoy-of-healing-flavor">You strive to spread the Dawnflower's message of kindness and compassion throughout the land, no matter how dangerous the road may be.</Pair>
<Pair single="benefit" id="envoy-of-healing-benefit">Whenever you use <Link to="/ability/channel_energy">channel energy</Link>, <em>fervor,</em> or <Link to="/ability/lay_on_hands">lay on hands</Link> to heal a living creature, you can reroll any healing die roll that results in a natural 1 (you must use the new result).</Pair>
</Ability>
</>};
const _erastils_speaker = {title: "Erastil's Speaker", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="erastils-speaker" extraClasses="trait" icon={["prayer"]}>
<Pair single id="erastils-speaker">Erastil's Speaker</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/erastil">Erastil</Link></Pair>
<Pair single="flavor" id="erastils-speaker-flavor">You understand the importance of keeping the peace in your community, and you have learned how to speak to the faithful in ways that they understand.</Pair>
<Pair single="benefit" id="erastils-speaker-benefit">You gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks, and Diplomacy is a class skill for you.</Pair>
</Ability>
</>};
const _eternal_understanding = {title: "Eternal Understanding", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="eternal-understanding" extraClasses="trait" icon={["prayer"]}>
<Pair single id="eternal-understanding">Eternal Understanding</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/irori">Irori</Link></Pair>
<Pair single="flavor" id="eternal-understanding-flavor">Though you haven't been traditionally educated, you're blessed with potent observation and discernment.</Pair>
<Pair single="benefit" id="eternal-understanding-benefit">You can attempt <Link to="/skill/knowledge">Knowledge</Link> checks with a DC of 15 or lower untrained.</Pair>
</Ability>
</>};
const _expert_boarder = {title: "Expert Boarder", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/pirates_of_the_inner_sea">Pirates of the Inner Sea</Link></p>
<Ability id="expert-boarder" extraClasses="trait" icon={["prayer"]}>
<Pair single id="expert-boarder">Expert Boarder</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/besmara">Besmara</Link></Pair>
<Pair single="flavor" id="expert-boarder-flavor">Besmara rewards those who board other vessels and take what they want.</Pair>
<Pair single="benefit" id="expert-boarder-benefit">While fighting on the deck of a ship, you gain a +1 bonus on all attacks made with one-handed weapons.</Pair>
</Ability>
</>};
const _extended_toil = {title: "Extended Toil", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="extended-toil" extraClasses="trait" icon={["prayer"]}>
<Pair single id="extended-toil">Extended Toil</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/droskar">Droskar</Link></Pair>
<Pair single="flavor" id="extended-toil-flavor">Your faith teaches you to push magical servants to the limit.</Pair>
<Pair single="benefit" id="extended-toil-benefit">When you cast a spell that creates a loyal servant to fulfill a specific or mindless task (such as <Link to="/spell/unseen_servant">unseen servant</Link>, <Link to="/spell/mount">mount</Link>, or <Link to="/spell/spiritual_weapon">spiritual weapon</Link>, but not <Link to="/spell/summon_monster">summon monster</Link> spells), you may choose to increase its duration by 50%. This does not stack with the <Link to="/feat/extend_spell">Extend Spell</Link> feat. The effect weakens the spell, however; dispel checks against spells you cast in this manner gain a +4 bonus.</Pair>
</Ability>
</>};
const _eye_for_quality = {title: "Eye for Quality", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="eye-for-quality" extraClasses="trait" icon={["prayer"]}>
<Pair single id="eye-for-quality">Eye for Quality</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/abadar">Abadar</Link></Pair>
<Pair single="flavor" id="eye-for-quality-flavor">Your deity has granted you an uncanny ability to find the true worth of items.</Pair>
<Pair single="benefit" id="eye-for-quality-benefit">You gain a +1 trait bonus on <Link to="/skill/appraise">Appraise</Link> checks, you don't suffer the effects of failing such checks by 5 or more, and Appraise is a class skill for you.</Pair>
</Ability>
</>};
const _eye_of_arqueros = {title: "Eye of Arqueros", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="eye-of-arqueros" extraClasses="trait" icon={["prayer"]}>
<Pair single id="eye-of-arqueros">Eye of Arqueros</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/arqueros">Arqueros</Link></Pair>
<Pair single="flavor" id="eye-of-arqueros-flavor">You once fell asleep during a task that required your attention. A vision of Arqueros awakened you just in time to avoid failing at your task.</Pair>
<Pair single="benefit" id="eye-of-arqueros-benefit">You gain a +3 trait bonus on <Link to="/skill/perception">Perception</Link> checks attempted while you are alone on guard duty.</Pair>
</Ability>
</>};
const _eye_of_the_father = {title: "Eye of the Father", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="eye-of-the-father" extraClasses="trait" icon={["prayer"]}>
<Pair single id="eye-of-the-father">Eye of the Father</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/torag">Torag</Link></Pair>
<Pair single="flavor" id="eye-of-the-father-flavor">You have an innate sense of what is right and wrong in the works you craft, based on your years studying with the church elders at their forges.</Pair>
<Pair single="benefit" id="eye-of-the-father-benefit">Choose one <Link to="/skill/craft">Craft</Link> skill; you gain a +1 trait bonus on Craft checks of the selected type.</Pair>
</Ability>
</>};
const _eyes_and_ears_of_the_city = {title: "Eyes and Ears of the City", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/legacy_of_fire_players_guide">Legacy of Fire Player's Guide</Link></p>
<Ability id="eyes-and-ears-of-the-city" extraClasses="trait" icon={["prayer"]}>
<Pair single id="eyes-and-ears-of-the-city">Eyes and Ears of the City</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/abadar">Abadar</Link></Pair>
<Pair single="flavor" id="eyes-and-ears-of-the-city-flavor">Your religious training involved serving in the city watch of a large city, the primary duty of which was standing sentinel on a city wall.</Pair>
<Pair single="benefit" id="eyes-and-ears-of-the-city-benefit">You gain a +1 trait bonus on <Link to="/skill/perception">Perception</Link> checks, and Perception is always a class skill for you.</Pair>
</Ability>
</>};
const _eyes_of_the_wild = {title: "Eyes of the Wild", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="eyes-of-the-wild" extraClasses="trait" icon={["prayer"]}>
<Pair single id="eyes-of-the-wild">Eyes of the Wild</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/green_faith">Green Faith</Link></Pair>
<Pair single="flavor" id="eyes-of-the-wild-flavor">Having spent much time immersed in the wilderness, you're now attuned to its ways.</Pair>
<Pair single="benefit" id="eyes-of-the-wild-benefit">You gain a +2 trait bonus on <Link to="/skill/perception">Perception</Link> checks in natural settings.</Pair>
</Ability>
</>};
const _faithful_arodenite = {title: "Faithful Arodenite", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/sargava_the_lost_colony">Sargava, the Lost Colony</Link></p>
<Ability id="faithful-arodenite" extraClasses="trait" icon={["prayer"]}>
<Pair single id="faithful-arodenite">Faithful Arodenite</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/aroden">Aroden</Link></Pair>
<Pair single="flavor" id="faithful-arodenite-flavor">You worship a dead god, and are skilled at making that sound reasonable.</Pair>
<Pair single="benefit" id="faithful-arodenite-benefit">You gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks; this bonus increases to +3 if you are dealing with a follower of Aroden or <Link to="/faith/iomedae">Iomedae</Link>.</Pair>
</Ability>
</>};
const _faithful_artist = {title: "Faithful Artist", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="faithful-artist" extraClasses="trait" icon={["prayer"]}>
<Pair single id="faithful-artist">Faithful Artist</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/desna">Desna</Link></Pair>
<Pair single="flavor" id="faithful-artist-flavor">With Desna's blessing, you have pursued an artistic path.</Pair>
<Pair single="benefit" id="faithful-artist-benefit">Choose one <Link to="/skill/perform">Perform</Link> skill; you gain a +1 trait bonus on Perform checks of the selected type, and Perform is a class skill for you.</Pair>
</Ability>
</>};
const _fatal_trapper = {title: "Fatal Trapper", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="fatal-trapper" extraClasses="trait" icon={["prayer"]}>
<Pair single id="fatal-trapper">Fatal Trapper</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/zyphus">Zyphus</Link></Pair>
<Pair single="flavor" id="fatal-trapper-flavor">Your patron grants you expertise at creating or disabling traps.</Pair>
<Pair single="benefit" id="fatal-trapper-benefit">You gain a +1 trait bonus on <Link to="/skill/craft">Craft</Link> (traps) checks, as well as a +1 trait bonus on <Link to="/skill/disable_device">Disable Device</Link> checks to disable traps.</Pair>
</Ability>
</>};
const _favored_prey = {title: "Favored Prey", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="favored-prey" extraClasses="trait" icon={["prayer"]}>
<Pair single id="favored-prey">Favored Prey</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/ketephys">Ketephys</Link></Pair>
<Pair single="flavor" id="favored-prey-flavor">Those you track feel the sting of your arrows.</Pair>
<Pair single="benefit" id="favored-prey-benefit">You gain a +1 trait bonus on damage rolls when making bow attacks against a creature whose tracks you have successfully followed in the last hour.</Pair>
</Ability>
</>};
const _fiendish_confidence = {title: "Fiendish Confidence", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="fiendish-confidence" extraClasses="trait" icon={["prayer"]}>
<Pair single id="fiendish-confidence">Fiendish Confidence</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/asmodeus">Asmodeus</Link></Pair>
<Pair single="flavor" id="fiendish-confidence-flavor">You expect to be obeyed, and are rarely proven wrong.</Pair>
<Pair single="benefit" id="fiendish-confidence-benefit">You gain a +1 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks, and Intimidate is a class skill for you.</Pair>
</Ability>
</>};
const _flame_of_the_dawnflower = {title: "Flame of the Dawnflower", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/qadira_gateway_to_the_east">Qadira, Gateway to the East</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="flame-of-the-dawnflower" extraClasses="trait" icon={["prayer"]}>
<Pair single id="flame-of-the-dawnflower">Flame of the Dawnflower</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/sarenrae">Sarenrae</Link></Pair>
<Pair single="flavor" id="flame-of-the-dawnflower-flavor">You have been raised to view yourself as a blade in Sarenrae's service, or you have taken on that duty for yourself.</Pair>
<Pair single="benefit" id="flame-of-the-dawnflower-benefit">Whenever you score a critical hit with a <Link to="/eq-weapon/scimitar">scimitar</Link>, you deal 2 additional points of fire damage to your target.</Pair>
</Ability>
</>};
const _flames_of_hell = {title: "Flames of Hell", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="flames-of-hell" extraClasses="trait" icon={["prayer"]}>
<Pair single id="flames-of-hell">Flames of Hell</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Archdevils</Pair>
<Pair single="flavor" id="flames-of-hell-flavor">Your bond with the archdevil you worship strengthens your ability to channel powers of the divine.</Pair>
<Pair single="benefit" id="flames-of-hell-benefit">Add 1 to the DC of saving throws made to resist the effects of your <Link to="/ability/channel_energy">channel energy</Link> ability.</Pair>
</Ability>
</>};
const _flounderer = {title: "Flounderer", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/goblins_of_golarion">Goblins of Golarion</Link></p>
<Ability id="flounderer" extraClasses="trait" icon={["prayer"]}>
<Pair single id="flounderer">Flounderer</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/zogmugot">Zogmugot</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/goblin">Goblin</Link></Pair>
<Pair single="flavor" id="flounderer-flavor">You are adept at swimming and holding your breath.</Pair>
<Pair single="benefit" id="flounderer-benefit">You gain a +1 trait bonus on <Link to="/skill/swim">Swim</Link> checks, and can <Link to="/misc/hold_your_breath">hold your breath</Link> for a number of rounds equal to three times your Constitution score before you risk drowning.</Pair>
</Ability>
</>};
const _folgrits_bounty = {title: "Folgrit's Bounty", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="folgrits-bounty" extraClasses="trait" icon={["prayer"]}>
<Pair single id="folgrits-bounty">Folgrit's Bounty</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/folgrit">Folgrit</Link></Pair>
<Pair single="flavor" id="folgrits-bounty-flavor">You were taught to tend the sacred hearth-fire and cook nourishing meals as a child.</Pair>
<Pair single="benefit" id="folgrits-bounty-benefit">You gain a +1 trait bonus on <Link to="/skill/profession">Profession</Link> (cook) checks and can prepare a nourishing meal of up to eight portions with 1 hour of effort at a cost of 20 gp. Anyone who eats a portion within 1 day (which takes 10 minutes) gains a +1 morale bonus that can be applied to any one skill check or attack roll in the next 8 hours. The bonus must be applied before the roll is made and cannot be renewed by another meal for 1 day.</Pair>
</Ability>
</>};
const _folgrits_mercy = {title: "Folgrit's Mercy", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="folgrits-mercy" extraClasses="trait" icon={["prayer"]}>
<Pair single id="folgrits-mercy">Folgrit's Mercy</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/folgrit">Folgrit</Link></Pair>
<Pair single="flavor" id="folgrits-mercy-flavor">You were called upon to defend your home or family at a vulnerable time and led with a clarity of mind you did not know you had.</Pair>
<Pair single="benefit" id="folgrits-mercy-benefit">Once per day when you use <Link to="/ability/lay_on_hands">lay on hands</Link>, you also cure the target of 1d4 points of Intelligence, Wisdom, or Charisma damage. You choose which ability score gains the healing effect.</Pair>
</Ability>
</>};
const _follower_of_the_stars = {title: "Follower of the Stars", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link></p>
<Ability id="follower-of-the-stars" extraClasses="trait" icon={["prayer"]}>
<Pair single id="follower-of-the-stars">Follower of the Stars</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/desna">Desna</Link></Pair>
<Pair single="benefit" id="follower-of-the-stars-benefit">You gain a +4 trait bonus when using <Link to="/skill/survival">Survival</Link> to navigate under clear skies.</Pair>
</Ability>
</>};
const _fortified_drinker = {title: "Fortified Drinker", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="fortified-drinker" extraClasses="trait" icon={["prayer"]}>
<Pair single id="fortified-drinker">Fortified Drinker</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/cayden_cailean">Cayden Cailean</Link></Pair>
<Pair single="flavor" id="fortified-drinker-flavor">Cayden Cailean's holy brews invigorate your mind, making you less susceptible to mental attacks.</Pair>
<Pair single="benefit" id="fortified-drinker-benefit">Whenever you imbibe any alcoholic beverage, you gain a +2 trait bonus on saves against mind-affecting effects for 1 hour.</Pair>
</Ability>
</>};
const _frightening_speed = {title: "Frightening Speed", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="frightening-speed" extraClasses="trait" icon={["prayer"]}>
<Pair single id="frightening-speed">Frightening Speed</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/achaekek">Achaekek</Link></Pair>
<Pair single="flavor" id="frightening-speed-flavor">Your careful study of Achaekek's kills has unlocked a divine speed in you.</Pair>
<Pair single="benefit" id="frightening-speed-benefit">Once per day during a combat encounter, you can move an additional 5 feet as a part of a move action without penalty.</Pair>
</Ability>
</>};
const _fruits_of_your_labor = {title: "Fruits of Your Labor", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 13</Link></p>
<Ability id="fruits-of-your-labor" extraClasses="trait" icon={["prayer"]}>
<Pair single id="fruits-of-your-labor">Fruits of Your Labor</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/jaidi">Jaidi</Link></Pair>
<Pair single="flavor" id="fruits-of-your-labor-flavor">You take pride in providing for your community.</Pair>
<Pair single="benefit" id="fruits-of-your-labor-benefit"><p>Once per day you can serve a meal comprising food you have produced, purchased, or foraged to yourself and up to six other creatures. Serving and consuming this meal takes 10 minutes, during which the other participants can also partake in light activity such as conversation, reading, and keeping watch.</p>
<p>Each creature regains 1d3 hit points at the end of the meal, and gains a +1 trait bonus on its next d20 roll using the <Link to="/rule/aid_another">aid another</Link> action to assist other creatures who consumed the meal. The +1 trait bonus lasts 24 hours, and a creature can gain that bonus on its next d20 roll to assist other creatures from this trait only once per day.</p>
</Pair>
</Ability>
</>};
const _furious_vengeance = {title: "Furious Vengeance", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="furious-vengeance" extraClasses="trait" icon={["prayer"]}>
<Pair single id="furious-vengeance">Furious Vengeance</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/dranngvit">Dranngvit</Link></Pair>
<Pair single="flavor" id="furious-vengeance-flavor">Once wronged, your vengeance can be swift and brutal.</Pair>
<Pair single="benefit" id="furious-vengeance-benefit">Once per day as an <strong className="hl">immediate action</strong>, you gain a +1 trait bonus on a single attack roll. In addition, if the target has damaged you within the last round, you deal 1 additional point of damage on a successful hit. You must choose to use this ability before making the attack roll.</Pair>
</Ability>
</>};
const _fury = {title: "Fury", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/orcs_of_golarion">Orcs of Golarion</Link></p>
<Ability id="fury" extraClasses="trait" icon={["prayer"]}>
<Pair single id="fury">Fury</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/rovagug">Rovagug</Link></Pair>
<Pair single="flavor" id="fury-flavor">The flood of battle and destruction stirs deep within you.</Pair>
<Pair single="benefit" id="fury-benefit">When wielding a <Link to="/eq-weapon/greataxe">greataxe</Link>, you receive a +2 trait bonus on attack rolls to confirm critical hits.</Pair>
</Ability>
</>};
const _gemstone_collector = {title: "Gemstone Collector", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="gemstone-collector" extraClasses="trait" icon={["prayer"]}>
<Pair single id="gemstone-collector">Gemstone Collector</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/yuelral">Yuelral</Link></Pair>
<Pair single="benefit" id="gemstone-collector-benefit">You have long found focus and inspiration in the natural beauty of rare gemstones. As long as you carry bejeweled objects worth a total combined value of 200 gp &times; your character level, you gain a +1 trait bonus on all Will saving throws and a +2 trait bonus on a single Charisma-based skill check of your choice.</Pair>
</Ability>
</>};
const _gifted_medium = {title: "Gifted Medium", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="gifted-medium" extraClasses="trait" icon={["prayer"]}>
<Pair single id="gifted-medium">Gifted Medium</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/magrim">Magrim</Link></Pair>
<Pair single="benefit" id="gifted-medium-benefit">Your understanding of Magrim's teachings makes you a perfect conduit for mystical forces. You gain a +1 trait bonus on your caster level when using divinations to reach out to other entities, such as <Link to="/spell/commune">commune</Link> or speak with dead.</Pair>
</Ability>
</>};
const _good_dreams = {title: "Good Dreams", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/halflings_of_golarion">Halflings of Golarion</Link></p>
<Ability id="good-dreams" extraClasses="trait" icon={["prayer"]}>
<Pair single id="good-dreams">Good Dreams</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/desna">Desna</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/halfling">Halfling</Link></Pair>
<Pair single="benefit" id="good-dreams-benefit">Your dreams often give you a hint of possible dangers you might face during your day - such as a fall, a blast of fire, or a poisonous snake - and this hint sometimes makes all the difference. Each time you sleep, the GM tells you of a dangerous dream you had. Once per day, if you have to make a saving throw against a threat related or similar to that dream, you can roll twice and take the more favorable result. If you do not encounter circumstances similar to the threat or situation you dreamed, this trait has no effect that day. If you have the Halfling Jinx alternate racial trait, you cannot select this trait, and vice versa.</Pair>
</Ability>
</>};
const _good_natured = {title: "Good-Natured", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="good-natured" extraClasses="trait" icon={["prayer"]}>
<Pair single id="good-natured">Good-Natured</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/cayden_cailean">Cayden Cailean</Link></Pair>
<Pair single="benefit" id="good-natured-benefit">You have an unusually sunny spirit, and it takes something truly intimidating to dampen your mood. You gain a +2 trait bonus on saving throws against fear effects.</Pair>
</Ability>
</>};
const _gozrehs_sight = {title: "Gozreh's Sight", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes</Link></p>
<Ability id="gozrehs-sight" extraClasses="trait" icon={["prayer"]}>
<Pair single id="gozrehs-sight">Gozreh's Sight</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/gozreh">Gozreh</Link></Pair>
<Pair single="benefit" id="gozrehs-sight-benefit">Your faith in the Wind and the Waves helps you navigate through all manner of mist or haze. You can see normally up to 5 feet away in areas of nonmagical fog, mist, rain, or similar conditions (such as the spray of a waterfall). Your sight is still obscured beyond 5 feet as normal in these conditions.</Pair>
</Ability>
</>};
const _guardian_smite = {title: "Guardian Smite", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="guardian-smite" extraClasses="trait" icon={["prayer"]}>
<Pair single id="guardian-smite">Guardian Smite</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/trudd">Trudd</Link></Pair>
<Pair single="benefit" id="guardian-smite-benefit">Paladins of Trudd taught you to be a blessed, living barrier against enemies who threaten those you hold dear. Once per day, when you strike a foe with smite evil, you can halve the total damage dealt to the foe to reduce that foe's speed to 5 feet for 1 round.</Pair>
</Ability>
</>};
const _guardian_of_the_forge = {title: "Guardian of the Forge", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/dwarves_of_golarion">Dwarves of Golarion</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="guardian-of-the-forge" extraClasses="trait" icon={["prayer"]}>
<Pair single id="guardian-of-the-forge">Guardian of the Forge</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/torag">Torag</Link></Pair>
<Pair single="benefit" id="guardian-of-the-forge-benefit">Torag's sacred duties are to protect the faithful, take lessons from the great craftsmen and strategists of the past, and prepare against dark times. You receive a +1 trait bonus on Knowledge (engineering) and Knowledge (history) checks. One of these skills (your choice) is a class skill for you.</Pair>
</Ability>
</>};
const _hatred_of_the_gods = {title: "Hatred of the Gods", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="hatred-of-the-gods" extraClasses="trait" icon={["prayer"]}>
<Pair single id="hatred-of-the-gods">Hatred of the Gods</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/rovagug">Rovagug</Link></Pair>
<Pair single="benefit" id="hatred-of-the-gods-benefit">Your god's own hatred of other deities is reflected in your ability to withstand the attacks of their followers. You gain a +1 trait bonus on saving throws made against divine spells.</Pair>
</Ability>
</>};
const _holy_schemer = {title: "Holy Schemer", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="holy-schemer" extraClasses="trait" icon={["prayer"]}>
<Pair single id="holy-schemer">Holy Schemer</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/calistria">Calistria</Link></Pair>
<Pair single="benefit" id="holy-schemer-benefit">You are well versed in the arts of misdirection, plotting, and intrigue, and you know how to recognize these tactics when they're used against you. You receive a +1 trait bonus on Sense Motive checks, and Sense Motive is a class skill for you.</Pair>
</Ability>
</>};
const _honey_tongued = {title: "Honey-Tongued", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="honey-tongued" extraClasses="trait" icon={["prayer"]}>
<Pair single id="honey-tongued">Honey-Tongued</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/abadar">Abadar</Link></Pair>
<Pair single="benefit" id="honey-tongued-benefit">Your deep understanding of human nature and social philosophy grants you a +1 trait bonus on Diplomacy or Bluff checks when dealing with agents of the law, such as judges, guards, and paladins.</Pair>
</Ability>
</>};
const _honeyed_words = {title: "Honeyed Words", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/dwarves_of_golarion">Dwarves of Golarion</Link></p>
<Ability id="honeyed-words" extraClasses="trait" icon={["prayer"]}>
<Pair single id="honeyed-words">Honeyed Words</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/grundinnar">Grundinnar</Link></Pair>
<Pair single="benefit" id="honeyed-words-benefit">Your tact soothes bristling tempers and cools heated blood. You receive a +1 trait bonus on Diplomacy checks. In addition, you receive a +1 trait bonus to the DC of any charm or compulsion that does not provide ongoing control and results in peaceful acts, such as calm emotions, sleep, or a suggestion to lay down arms.</Pair>
</Ability>
</>};
const _illuminator = {title: "Illuminator", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="illuminator" extraClasses="trait" icon={["prayer"]}>
<Pair single id="illuminator">Illuminator</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/sarenrae">Sarenrae</Link></Pair>
<Pair single="benefit" id="illuminator-benefit">When you are filled with the light of Sarenrae, your speech takes on a fiery eloquence. You gain a +2 trait bonus on Diplomacy checks, and Diplomacy is a class skill for you.</Pair>
</Ability>
</>};
const _inheritors_immunity = {title: "Inheritor's Immunity", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes</Link></p>
<Ability id="inheritors-immunity" extraClasses="trait" icon={["prayer"]}>
<Pair single id="inheritors-immunity">Inheritor's Immunity</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/iomedae">Iomedae</Link></Pair>
<Pair single="benefit" id="inheritors-immunity-benefit">Iomedae's valor fills you with divine energy, allowing you to stave off even the worst plague. Once per day, you can reroll a saving throw against a disease or poison. You must take the second result, even if it is worse.</Pair>
</Ability>
</>};
const _inner_beauty = {title: "Inner Beauty", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="inner-beauty" extraClasses="trait" icon={["prayer"]}>
<Pair single id="inner-beauty">Inner Beauty</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/shelyn">Shelyn</Link></Pair>
<Pair single="benefit" id="inner-beauty-benefit">Once per day when you manifest your faith in your goddess, you gain a +4 trait bonus on a single Bluff, Craft, Diplomacy, or Perform skill check. You must choose to use this trait immediately after rolling the skill check but before the result is revealed by the GM.</Pair>
</Ability>
</>};
const _inoculated = {title: "Inoculated", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="inoculated" extraClasses="trait" icon={["prayer"]}>
<Pair single id="inoculated">Inoculated</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/urgathoa">Urgathoa</Link></Pair>
<Pair single="benefit" id="inoculated-benefit">Your regular exposure to plagues grants you a +2 trait bonus on saving throws against disease effects.</Pair>
</Ability>
</>};
const _inspiring_leader = {title: "Inspiring Leader", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="inspiring-leader" extraClasses="trait" icon={["prayer"]}>
<Pair single id="inspiring-leader">Inspiring Leader</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/apsu">Apsu</Link></Pair>
<Pair single="benefit" id="inspiring-leader-benefit">Imitating the leadership of your deity, you spur others on to great deeds. When you cast a spell that grants allies a morale bonus, you cast that spell at +1 caster level.</Pair>
</Ability>
</>};
const _intense_artist = {title: "Intense Artist", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="intense-artist" extraClasses="trait" icon={["prayer"]}>
<Pair single id="intense-artist">Intense Artist</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/shelyn">Shelyn</Link></Pair>
<Pair single="benefit" id="intense-artist-benefit">Your devotion to Shelyn has caused you to delve more deeply into your art. Choose two Perform skills; you gain a +1 trait bonus on Perform checks of the selected types, and Perform is a class skill for you.</Pair>
</Ability>
</>};
const _iron_grip = {title: "Iron Grip", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="iron-grip" extraClasses="trait" icon={["prayer"]}>
<Pair single id="iron-grip">Iron Grip</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/gorum">Gorum</Link></Pair>
<Pair single="benefit" id="iron-grip-benefit">You and your weapon are practically one. You receive a +2 trait bonus to your CMD against disarm attempts.</Pair>
</Ability>
</>};
const _know_the_land = {title: "Know the Land", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="know-the-land" extraClasses="trait" icon={["prayer"]}>
<Pair single id="know-the-land">Know the Land</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/green_faith">Green Faith</Link></Pair>
<Pair single="benefit" id="know-the-land-benefit">Your familiarity with the plants and animals of a variety of environments gives you a +1 trait bonus on Knowledge (nature) and Survival checks, and one of these skills is a class skill for you.</Pair>
</Ability>
</>};
const _kuthite_caster = {title: "Kuthite Caster", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="kuthite-caster" extraClasses="trait" icon={["prayer"]}>
<Pair single id="kuthite-caster">Kuthite Caster</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/zon_kuthon">Zon-Kuthon</Link></Pair>
<Pair single="benefit" id="kuthite-caster-benefit">You gain a +4 trait bonus on <Link to="/rule/concentration">concentration</Link> checks when casting spells with the darkness, pain, or shadow descriptor.</Pair>
</Ability>
</>};
const _lessons_of_chaldira = {title: "Lessons of Chaldira", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="lessons-of-chaldira" extraClasses="trait" icon={["prayer"]}>
<Pair single id="lessons-of-chaldira">Lessons of Chaldira</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/chaldira_zuzaristan">Chaldira Zuzaristan</Link></Pair>
<Pair single="benefit" id="lessons-of-chaldira-benefit">Your studies of Chaldira Zuzaristan's exploits have given you a knack for avoiding trouble. Once per day before the result of a saving throw is known, you can reroll that saving throw. You must take the second result even if it is worse.</Pair>
</Ability>
</>};
const _liars_tongue = {title: "Liar's Tongue", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="liars-tongue" extraClasses="trait" icon={["prayer"]}>
<Pair single id="liars-tongue">Liar's Tongue</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/asmodeus">Asmodeus</Link></Pair>
<Pair single="benefit" id="liars-tongue-benefit">Thanks to your friendly mien and sly tongue, your lies are often believed. You gain a +1 trait bonus on Bluff checks, and Bluff is a class skill for you.</Pair>
</Ability>
</>};
const _light_sleeper = {title: "Light Sleeper", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="light-sleeper" extraClasses="trait" icon={["prayer"]}>
<Pair single id="light-sleeper">Light Sleeper</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/hanspur">Hanspur</Link></Pair>
<Pair single="benefit" id="light-sleeper-benefit">Because of a blessing from your god, or worries inspired by the way he died as a mortal, you are a light sleeper. Your modifier to Perception DCs when sleeping is +5 instead of +10.</Pair>
</Ability>
</>};
const _light_bringer = {title: "Light-Bringer", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="light-bringer" extraClasses="trait" icon={["prayer"]}>
<Pair single id="light-bringer">Light-Bringer</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/sarenrae">Sarenrae</Link></Pair>
<Pair single="benefit" id="light-bringer-benefit">You were born with a blessing of the Dawnflower. Once per day, you can use <Link to="/spell/light">light</Link> as a spell-like ability. Your caster level is equal to your character level.</Pair>
</Ability>
</>};
const _living_bulwark = {title: "Living Bulwark", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="living-bulwark" extraClasses="trait" icon={["prayer"]}>
<Pair single id="living-bulwark">Living Bulwark</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/arqueros">Arqueros</Link></Pair>
<Pair single="benefit" id="living-bulwark-benefit">The Golden Bulwark inspires you to give your all for those you protect. Once per day, when an adjacent ally is targeted by an attack but before the attack roll is attempted, you can interpose yourself as an immediate action. You become the target of the attack instead.</Pair>
</Ability>
</>};
const _loreseeker = {title: "Loreseeker", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="loreseeker" extraClasses="trait" icon={["prayer"]}>
<Pair single id="loreseeker">Loreseeker</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/lissala">Lissala</Link></Pair>
<Pair single="benefit" id="loreseeker-benefit">You gain a +2 trait bonus on Spellcraft checks made to identify magical items.</Pair>
</Ability>
</>};
const _lover_of_the_law = {title: "Lover of the Law", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="lover-of-the-law" extraClasses="trait" icon={["prayer"]}>
<Pair single id="lover-of-the-law">Lover of the Law</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/abadar">Abadar</Link></Pair>
<Pair single="benefit" id="lover-of-the-law-benefit">You have a strong belief in the righteousness of law and justice. You receive a +1 trait bonus on saving throws against charm and compulsion effects, and may attempt a new saving throw with an additional +1 bonus (for a total of +2) if you are directed to break the law.</Pair>
</Ability>
</>};
const _loyal_bond = {title: "Loyal Bond", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="loyal-bond" extraClasses="trait" icon={["prayer"]}>
<Pair single id="loyal-bond">Loyal Bond</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/grundinnar">Grundinnar</Link></Pair>
<Pair single="benefit" id="loyal-bond-benefit">You are at your best when you serve others. When you cast spells that offer protection to an ally at your expense (such as <Link to="/spell/shield_other">shield other</Link>) or spells whose duration is divided when shared among many (such as water breathing or any of the communal spells), you do so at +1 caster level.</Pair>
</Ability>
</>};
const _magic_is_life = {title: "Magic Is Life", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/legacy_of_fire_players_guide">Legacy of Fire Player's Guide</Link></p>
<Ability id="magic-is-life" extraClasses="trait" icon={["prayer"]}>
<Pair single id="magic-is-life">Magic Is Life</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/nethys">Nethys</Link></Pair>
<Pair single="benefit" id="magic-is-life-benefit">Your faith in magic allows you to reflexively use the energy of any spell effect currently on you to save you from death. As long as you are under the effects of a spell, you gain a +2 trait bonus on saving throws against death effects. If you are reduced to negative hit points while you are under the effects of any spell, you automatically confirm stabilization checks to stop bleeding.</Pair>
</Ability>
</>};
const _magics_might = {title: "Magic's Might", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="magics-might" extraClasses="trait" icon={["prayer"]}>
<Pair single id="magics-might">Magic's Might</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/yuelral">Yuelral</Link></Pair>
<Pair single="benefit" id="magics-might-benefit">Your natural affinity for magic allows you to affect even those who resist it. You gain a +1 trait bonus on caster level checks to overcome spell resistance.</Pair>
</Ability>
</>};
const _mighty_protector = {title: "Mighty Protector", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="mighty-protector" extraClasses="trait" icon={["prayer"]}>
<Pair single id="mighty-protector">Mighty Protector</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/trudd">Trudd</Link></Pair>
<Pair single="benefit" id="mighty-protector-benefit">When you were too young to fight, you witnessed a great tragedy befall an innocent and you swore to Trudd you'd become strong enough to prevent something like that from happening again. Once per day when you hit a foe with a melee attack, you can attempt an aid another action as a free action to increase an adjacent ally's AC against that foe. If you succeed, you grant the ally a +4 bonus to AC instead of a +2 bonus for that round.</Pair>
</Ability>
</>};
const _mischievous_smile = {title: "Mischievous Smile", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="mischievous-smile" extraClasses="trait" icon={["prayer"]}>
<Pair single id="mischievous-smile">Mischievous Smile</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/chaldira">Chaldira</Link></Pair>
<Pair single="benefit" id="mischievous-smile-benefit">You consider mischief a sacred rite in humbling enemies. You do not provoke attacks of opportunity when performing a dirty trick combat maneuver while your smite evil bonus applies to combat maneuver checks. If you already do not provoke such attacks of opportunity (such as by having <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link>), you instead gain a +2 trait bonus on dirty trick combat maneuver checks against creatures that are the targets of your smite.</Pair>
</Ability>
</>};
const _mothers_rage = {title: "Mother's Rage", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/orcs_of_golarion">Orcs of Golarion</Link></p>
<Ability id="mothers-rage" extraClasses="trait" icon={["prayer"]}>
<Pair single id="mothers-rage">Mother's Rage</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/lamashtu">Lamashtu</Link></Pair>
<Pair single="benefit" id="mothers-rage-benefit">The blood of the beast runs thick in your veins, and your appearance is bestial. You receive a +1 trait bonus on Survival checks, and you treat your caster level as +1 higher when summoning creatures.</Pair>
</Ability>
</>};
const _mothers_teeth = {title: "Mother's Teeth", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/goblins_of_golarion">Goblins of Golarion</Link></p>
<Ability id="mothers-teeth" extraClasses="trait" icon={["prayer"]}>
<Pair single id="mothers-teeth">Mother's Teeth</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/lamashtu">Lamashtu</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/goblin">Goblin</Link></Pair>
<Pair single="benefit" id="mothers-teeth-benefit">Your teeth are more jagged and pointed than normal. You can make a bite attack for 1d2 points of damage as a secondary attack.</Pair>
</Ability>
</>};
const _natural_magic = {title: "Natural Magic", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="natural-magic" extraClasses="trait" icon={["prayer"]}>
<Pair single id="natural-magic">Natural Magic</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/yuelral">Yuelral</Link></Pair>
<Pair single="benefit" id="natural-magic-benefit">Yuelral's teachings revealed to you that all magic can ultimately be traced back to nature. Choose two 0-level druid spells. You treat each spell as being on your class spell list and as a spell known for all spellcasting classes you have.</Pair>
</Ability>
</>};
const _natural_philosopher = {title: "Natural Philosopher", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="natural-philosopher" extraClasses="trait" icon={["prayer"]}>
<Pair single id="natural-philosopher">Natural Philosopher</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/gozreh">Gozreh</Link></Pair>
<Pair single="benefit" id="natural-philosopher-benefit">You study the outdoors, and leave books for dusty libraries. You can attempt Knowledge (geography) and Knowledge (nature) checks as if you were trained.</Pair>
</Ability>
</>};
const _nimble_fingers_keen_mind = {title: "Nimble Fingers, Keen Mind", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="nimble-fingers-keen-mind" extraClasses="trait" icon={["prayer"]}>
<Pair single id="nimble-fingers-keen-mind">Nimble Fingers, Keen Mind</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/brigh">Brigh</Link></Pair>
<Pair single="benefit" id="nimble-fingers-keen-mind-benefit">Your study of clockwork mechanisms and other mechanical wonders grants you a +1 trait bonus on Disable Device checks, and Disable Device is a class skill for you.</Pair>
</Ability>
</>};
const _oathkeepers_vow = {title: "Oathkeeper's Vow", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="oathkeepers-vow" extraClasses="trait" icon={["prayer"]}>
<Pair single id="oathkeepers-vow">Oathkeeper's Vow</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/kols">Kols</Link></Pair>
<Pair single="benefit" id="oathkeepers-vow-benefit">The clergy of Kols trained you to make unbreakable vows. You add the following spells to the paladin spell list at the indicated levels: <Link to="/spell/command">command</Link> (1st), <Link to="/spell/forbid_action">forbid action</Link> (1st), <Link to="/spell/suggestion">suggestion</Link> (to fulfill a prior promise only; 2nd), <Link to="/spell/lesser_geas">lesser geas</Link> (3rd), <Link to="/spell/geas_quest">geas/quest</Link> (4th).</Pair>
</Ability>
</>};
const _opener_of_doors = {title: "Opener of Doors", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="opener-of-doors" extraClasses="trait" icon={["prayer"]}>
<Pair single id="opener-of-doors">Opener of Doors</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/alseta">Alseta</Link></Pair>
<Pair single="benefit" id="opener-of-doors-benefit">Because of your devotion to Alseta, you are blessed with the ability to find hidden portals. You gain a +2 trait bonus on Perception checks to find secret doors.</Pair>
</Ability>
</>};
const _opportune_slayer = {title: "Opportune Slayer", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="opportune-slayer" extraClasses="trait" icon={["prayer"]}>
<Pair single id="opportune-slayer">Opportune Slayer</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/lamashtu">Lamashtu</Link></Pair>
<Pair single="benefit" id="opportune-slayer-benefit">Those who open themselves to your attacks feel your wrath. You gain a +2 trait bonus on damage rolls against those you hit with attacks of opportunity.</Pair>
</Ability>
</>};
const _opportunistic = {title: "Opportunistic", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="opportunistic" extraClasses="trait" icon={["prayer"]}>
<Pair single id="opportunistic">Opportunistic</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/calistria">Calistria</Link></Pair>
<Pair single="benefit" id="opportunistic-benefit">You have learned to recognize openings that your foes leave, and you know how to take advantage of them. You gain a +1 trait bonus on attacks of opportunity when using a dagger, sword, or whip.</Pair>
</Ability>
</>};
const _pain_is_pleasure = {title: "Pain Is Pleasure", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="pain-is-pleasure" extraClasses="trait" icon={["prayer"]}>
<Pair single id="pain-is-pleasure">Pain Is Pleasure</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/zon_kuthon">Zon-Kuthon</Link></Pair>
<Pair single="benefit" id="pain-is-pleasure-benefit">You have discovered a hint of the dark truths that lay hidden within blood and flesh. You gain a +1 trait bonus on Fortitude and Will saves whenever you have fewer than half your maximum number of hit points.</Pair>
</Ability>
</>};
const _patient_optimist = {title: "Patient Optimist", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link></p>
<Ability id="patient-optimist" extraClasses="trait" icon={["prayer"]}>
<Pair single id="patient-optimist">Patient Optimist</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/erastil">Erastil</Link></Pair>
<Pair single="benefit" id="patient-optimist-benefit">You know that all things pass in time, and are used to having to repeat arguments multiple times to convince stubborn believers. You gain a +2 trait bonus on Diplomacy checks to influence hostile or unfriendly creatures, and if you fail at such an attempt, you may retry it once.</Pair>
</Ability>
</>};
const _planar_wayfarer = {title: "Planar Wayfarer", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 13</Link></p>
<Ability id="planar-wayfarer" extraClasses="trait" icon={["prayer"]}>
<Pair single id="planar-wayfarer">Planar Wayfarer</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/onos">Onos</Link></Pair>
<Pair single="benefit" id="planar-wayfarer-benefit">The countless natural hazards of the planes cannot deter you from witnessing their grandeur. Once per day you can meditate on the nature of the planes for 1 hour to gain energy resistance 2 against acid, cold, electricity, fire, or sonic damage. This resistance lasts 24 hours or until you perform this meditation again and choose a new resistance.</Pair>
</Ability>
</>};
const _poisonous_slayer = {title: "Poisonous Slayer", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="poisonous-slayer" extraClasses="trait" icon={["prayer"]}>
<Pair single id="poisonous-slayer">Poisonous Slayer</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/norgorber">Norgorber</Link></Pair>
<Pair single="benefit" id="poisonous-slayer-benefit">You know the secret of plunging a poisoned weapon in just the right spot. You gain a +1 trait bonus on attack rolls when you are wielding a weapon treated with poison.</Pair>
</Ability>
</>};
const _potent_concoctions = {title: "Potent Concoctions", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="potent-concoctions" extraClasses="trait" icon={["prayer"]}>
<Pair single id="potent-concoctions">Potent Concoctions</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/ghlaunder">Ghlaunder</Link></Pair>
<Pair single="benefit" id="potent-concoctions-benefit">You have dedicated your life to honoring famine and disease. Choose any two <Link to="/main/equipment_poisons">poisons</Link>; when you attempt to inflict either of these poisons on an enemy, the DC to resist it increases by 1.</Pair>
</Ability>
</>};
const _practiced_deception = {title: "Practiced Deception", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="practiced-deception" extraClasses="trait" icon={["prayer"]}>
<Pair single id="practiced-deception">Practiced Deception</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/norgorber">Norgorber</Link></Pair>
<Pair single="benefit" id="practiced-deception-benefit">You gain a +1 trait bonus on Disguise checks, and you can apply and remove a disguise in half the normal time.</Pair>
</Ability>
</>};
const _pristine_reputation = {title: "Pristine Reputation", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="pristine-reputation" extraClasses="trait" icon={["prayer"]}>
<Pair single id="pristine-reputation">Pristine Reputation</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/shizuru">Shizuru</Link></Pair>
<Pair single="benefit" id="pristine-reputation-benefit">You come from an especially esteemed family, religious order, school, or other group that worships Shizuru, and draw upon that tradition to maintain your identity. The first time each day that you fail a saving throw against a charm or compulsion effect, you can reroll that saving throw. If you do so, you gain a +2 trait bonus on this roll and use this result as the actual result for that saving throw.</Pair>
</Ability>
</>};
const _propitiation = {title: "Propitiation", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="propitiation" extraClasses="trait" icon={["prayer"]}>
<Pair single id="propitiation">Propitiation</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Dwarven Deities</Pair>
<Pair single="benefit" id="propitiation-benefit">Your knowledge of the dwarven pantheon tells you precisely which gods have jurisdiction over which aspects of your life, and you can call upon the appropriate deity for help even if that deity is not your patron. At the start of each day, pick one of the following skills: Appraise, Bluff, Craft (pick one craft skill), Diplomacy, Intimidate, or Knowledge (local). You gain a +2 trait bonus on that skill until the start of the next day.</Pair>
</Ability>
</>};
const _protective_faith = {title: "Protective Faith", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="protective-faith" extraClasses="trait" icon={["prayer"]}>
<Pair single id="protective-faith">Protective Faith</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/torag">Torag</Link></Pair>
<Pair single="benefit" id="protective-faith-benefit">Your faith in the Father of Creation strengthens your ability to shield others. When you use the aid another action to grant your ally a bonus to AC, you grant a +3 bonus to AC instead of the normal +2.</Pair>
</Ability>
</>};
const _provider = {title: "Provider", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/halflings_of_golarion">Halflings of Golarion</Link></p>
<Ability id="provider" extraClasses="trait" icon={["prayer"]}>
<Pair single id="provider">Provider</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/erastil">Erastil</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/halfling">Halfling</Link></Pair>
<Pair single="benefit" id="provider-benefit">Few things exalt your faith more than feeding the hungry with your own honest sweat. You gain a +1 trait bonus on any d20 roll to acquire food or water for others. Though this bonus most often applies to Survival checks, it could also apply to attacking monsters that are safe and nutritious to eat (mainly animals and plants). However, Erastil takes a dim view of waste and of those who scorn his favor, and if you abuse this gift (for example, by using the bonus to defeat a bear, then only eating one bite of it), he punishes you with a -2 penalty on attacks, checks, and saves for 24 hours.</Pair>
</Ability>
</>};
const _purity_of_faith = {title: "Purity of Faith", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="purity-of-faith" extraClasses="trait" icon={["prayer"]}>
<Pair single id="purity-of-faith">Purity of Faith</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/iomedae">Iomedae</Link></Pair>
<Pair single="benefit" id="purity-of-faith-benefit">Your soul is free from impurity, and you are deeply committed to fulfilling your duties to the church. You gain a +1 trait bonus on Will saving throws and a +1 trait bonus on saving throws against spells and effects originating from an outsider with the evil subtype.</Pair>
</Ability>
</>};
const _reckless_luck = {title: "Reckless Luck", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="reckless-luck" extraClasses="trait" icon={["prayer"]}>
<Pair single id="reckless-luck">Reckless Luck</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/chaldira_zuzaristan">Chaldira Zuzaristan</Link></Pair>
<Pair single="benefit" id="reckless-luck-benefit">Like your deity, you charge in when others fall back. When you make a charge attack in the surprise round or first round of combat, you gain a +2 trait bonus to your AC for 1 round.</Pair>
</Ability>
</>};
const _redeemed_by_ragathiel = {title: "Redeemed by Ragathiel", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="redeemed-by-ragathiel" extraClasses="trait" icon={["prayer"]}>
<Pair single id="redeemed-by-ragathiel">Redeemed by Ragathiel</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/ragathiel">Ragathiel</Link></Pair>
<Pair single="benefit" id="redeemed-by-ragathiel-benefit">You were born into a family, nation, or other group that tried to impress evil ideals upon you, but you were inspired by Ragathiel to live a moral life despite their influence. You gain a +2 trait bonus on Sense Motive checks to see through an evil creature's Bluff attempts.</Pair>
</Ability>
</>};
const _regal_presence = {title: "Regal Presence", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="regal-presence" extraClasses="trait" icon={["prayer"]}>
<Pair single id="regal-presence">Regal Presence</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/iomedae">Iomedae</Link></Pair>
<Pair single="benefit" id="regal-presence-benefit">You've always had a presence that people respect. You gain a +1 trait bonus on Diplomacy checks, and Diplomacy is a class skill for you.</Pair>
</Ability>
</>};
const _rejected_emperor = {title: "Rejected Emperor", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 23</Link></p>
<Ability id="rejected-emperor" extraClasses="trait" icon={["prayer"]}>
<Pair single id="rejected-emperor">Rejected Emperor</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>The Eternal Emperor</Pair>
<Pair single="benefit" id="rejected-emperor-benefit">When you were young, your parents presented you to the oracles of Po Li, claiming a divine sign showed you were the reincarnation of Lung Wa's Eternal Emperor. The oracles did not support the claim, but you are not untouched by celestial influence. You may use Knowledge (nobility) or Knowledge (religion) in place of Knowledge (planes) to identify outsiders, and nonevil outsiders you encounter begin with an attitude that is one step better than normal.</Pair>
</Ability>
</>};
const _relentless_duty = {title: "Relentless Duty", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="relentless-duty" extraClasses="trait" icon={["prayer"]}>
<Pair single id="relentless-duty">Relentless Duty</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/kols">Kols</Link></Pair>
<Pair single="benefit" id="relentless-duty-benefit">You were raised with the mantra that fulfilling your duty must always come first. Now living up to a promise comes as easily as breathing. Once per day, you can take 10 on a skill check attempted as part of fulfilling a prior promise even if you are distracted or in combat.</Pair>
</Ability>
</>};
const _resigned = {title: "Resigned", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/dwarves_of_golarion">Dwarves of Golarion</Link></p>
<Ability id="resigned" extraClasses="trait" icon={["prayer"]}>
<Pair single id="resigned">Resigned</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/droskar">Droskar</Link></Pair>
<Pair single="benefit" id="resigned-benefit">Existence is little more than unending toil. By laboring unto exhaustion, greatness can be achieved. You receive a +1 trait bonus when retrying a previously failed skill check or ability check, as well as when taking 20 on skill checks and ability checks.</Pair>
</Ability>
</>};
const _resilient_martyr = {title: "Resilient Martyr", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="resilient-martyr" extraClasses="trait" icon={["prayer"]}>
<Pair single id="resilient-martyr">Resilient Martyr</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/vildeis">Vildeis</Link></Pair>
<Pair single="benefit" id="resilient-martyr-benefit">You interposed yourself between an innocent and a dangerous evil monster or force, lost a great deal of blood as a result, and barely survived. Now, your blood seems to replenish with blessed speed, a sure sign of Vildeis's favor. You <Link to="/rule/recover_hit_points">recover twice as many hit points</Link> and points of ability damage as normal when you rest, or three times as many when you take total bed rest.</Pair>
</Ability>
</>};
const _restless_hunger = {title: "Restless Hunger", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/goblins_of_golarion">Goblins of Golarion</Link></p>
<Ability id="restless-hunger" extraClasses="trait" icon={["prayer"]}>
<Pair single id="restless-hunger">Restless Hunger</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/venkelvore">Venkelvore</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/goblin">Goblin</Link></Pair>
<Pair single="benefit" id="restless-hunger-benefit">If you have a piece of food (or something a goblin might consider food), you can quickly eat it as part of a charge attack once per day. Doing so increases your speed by 10 feet for 1 round.</Pair>
</Ability>
</>};
const _river_freedom = {title: "River Freedom", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="river-freedom" extraClasses="trait" icon={["prayer"]}>
<Pair single id="river-freedom">River Freedom</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/hanspur">Hanspur</Link></Pair>
<Pair single="benefit" id="river-freedom-benefit">The freedom of water inspires you. While touching flowing water, you gain a +2 trait bonus on saving throws against effects that would hamper your movement.</Pair>
</Ability>
</>};
const _rousing_courage = {title: "Rousing Courage", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<Ability id="rousing-courage" extraClasses="trait" icon={["prayer"]}>
<Pair single id="rousing-courage">Rousing Courage</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/angradd">Angradd</Link></Pair>
<Pair single="benefit" id="rousing-courage-benefit">A dwarven warrior's simple act of courage in Angradd's name inspired you during one of your first battles. Now, you strive to be equally inspiring to others. Once per day, when you generate an effect that grants a morale bonus, increase that bonus by 1 for all creatures affected.</Pair>
</Ability>
</>};
const _sacred_avenger = {title: "Sacred Avenger", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/elves_of_golarion">Elves of Golarion</Link></p>
<Ability id="sacred-avenger" extraClasses="trait" icon={["prayer"]}>
<Pair single id="sacred-avenger">Sacred Avenger</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/calistria">Calistria</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/elf">Elf</Link></Pair>
<Pair single="benefit" id="sacred-avenger-benefit">You have a special connection between you and Calistria that enhances your ability to achieve vengeance. When a creature damages you with a weapon, on your next turn you gain a +1 trait bonus on weapon damage against that creature. If this creature is your <em>ilduliel</em> (a personal, mutual nemesis), this bonus increases to +2.</Pair>
</Ability>
</>};
const _sacred_orienteer = {title: "Sacred Orienteer", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 13</Link></p>
<Ability id="sacred-orienteer" extraClasses="trait" icon={["prayer"]}>
<Pair single id="sacred-orienteer">Sacred Orienteer</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/elion">Elion</Link></Pair>
<Pair single="benefit" id="sacred-orienteer-benefit">You have traveled far with only your compass and faith as your guides. You begin play with a compass, and any compass or wayfinder in your possession also functions as a holy symbol of Elion. Either Knowledge (geography) or Survival becomes a class skill for you. Once per day you can consult your compass or wayfinder as a full-round action to gain a +2 trait bonus on one Knowledge (geography) or Survival check.</Pair>
</Ability>
</>};
const _sacred_smasher = {title: "Sacred Smasher", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/orcs_of_golarion">Orcs of Golarion</Link></p>
<Ability id="sacred-smasher" extraClasses="trait" icon={["prayer"]}>
<Pair single id="sacred-smasher">Sacred Smasher</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/rovagug">Rovagug</Link></Pair>
<Pair single="benefit" id="sacred-smasher-benefit">Your love of carnage extends even to the defenseless, inanimate objects around you. Whenever you make an attempt to break an object, you receive a +2 trait bonus on your Strength check.</Pair>
</Ability>
</>};
const _scaly_ally = {title: "Scaly Ally", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="scaly-ally" extraClasses="trait" icon={["prayer"]}>
<Pair single id="scaly-ally">Scaly Ally</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/apsu">Apsu</Link></Pair>
<Pair single="benefit" id="scaly-ally-benefit">Because of your devotion to Apsu, you gain a +2 trait bonus on Diplomacy checks involving reptiles or those of draconic blood, whether they are good-aligned or not.</Pair>
</Ability>
</>};
const _scarred_by_war = {title: "Scarred by War", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook</Link></p>
<Ability id="scarred-by-war" extraClasses="trait" icon={["prayer"]}>
<Pair single id="scarred-by-war">Scarred by War</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/dalenydra">Dalenydra</Link></Pair>
<Pair single="benefit" id="scarred-by-war-benefit">You have experienced firsthand the horrors of war, which have left you physically or mentally scarred. Now you have committed yourself to the teachings of the Blessed Attendant, seeking to heal those wounded in combat and to prevent battles from occurring whenever you can. You gain a +1 trait bonus on Diplomacy checks outside of combat. In addition, when you heal creatures other than yourself using class abilities, feats, spells, and spell completion or spell trigger magic items, you restore 1 additional hit point.</Pair>
</Ability>
</>};
const _searing_beacon = {title: "Searing Beacon", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link></p>
<Ability id="searing-beacon" extraClasses="trait" icon={["prayer"]}>
<Pair single id="searing-beacon">Searing Beacon</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/iomedae">Iomedae</Link></Pair>
<Pair title="Requirements" hl>Knight of Ozem</Pair>
<Pair single="benefit" id="searing-beacon-benefit">You deal additional precision damage equal to your Wisdom modifier when you score a critical hit with a melee weapon against an undead opponent.</Pair>
</Ability>
</>};
const _secret_knowledge = {title: "Secret Knowledge", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="secret-knowledge" extraClasses="trait" icon={["prayer"]}>
<Pair single id="secret-knowledge">Secret Knowledge</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/norgorber">Norgorber</Link></Pair>
<Pair single="benefit" id="secret-knowledge-benefit">At any point after taking this trait, you may choose one Knowledge skill. You gain a permanent +2 trait bonus on checks with that skill, and it is a class skill for you. Once this skill is chosen, it cannot be changed.</Pair>
</Ability>
</>};
const _seer_of_reality = {title: "Seer of Reality", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="seer-of-reality" extraClasses="trait" icon={["prayer"]}>
<Pair single id="seer-of-reality">Seer of Reality</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/irori">Irori</Link></Pair>
<Pair single="benefit" id="seer-of-reality-benefit">You have a deep understanding of the world around you, and thus you are more perceptive about what belongs and what does not. You gain a +2 trait bonus on saving throws against illusion magic.</Pair>
</Ability>
</>};
const _self_sacrifice = {title: "Self-Sacrifice", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/halflings_of_golarion">Halflings of Golarion</Link></p>
<Ability id="self-sacrifice" extraClasses="trait" icon={["prayer"]}>
<Pair single id="self-sacrifice">Self-Sacrifice</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/shelyn">Shelyn</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/halfling">Halfling</Link></Pair>
<Pair single="benefit" id="self-sacrifice-benefit">You honor your goddess through your willingness to take risks for those you care about. As a move action, you can use your own body to grant soft cover to an adjacent ally regardless of the difference in your respective sizes.</Pair>
</Ability>
</>};
const _sense_of_order = {title: "Sense of Order", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/halflings_of_golarion">Halflings of Golarion</Link></p>
<Ability id="sense-of-order" extraClasses="trait" icon={["prayer"]}>
<Pair single id="sense-of-order">Sense of Order</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/abadar">Abadar</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/halfling">Halfling</Link></Pair>
<Pair single="benefit" id="sense-of-order-benefit">Your ability to notice even the slightest change, and the discomfort it causes, made service to Abadar a logical choice. You gain a +3 trait bonus on any Perception check made to identify any changes to a location that have occurred since you last visited it.</Pair>
</Ability>
</>};
const _sensing_imperfection = {title: "Sensing Imperfection", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/halflings_of_golarion">Halflings of Golarion</Link></p>
<Ability id="sensing-imperfection" extraClasses="trait" icon={["prayer"]}>
<Pair single id="sensing-imperfection">Sensing Imperfection</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/irori">Irori</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/halfling">Halfling</Link></Pair>
<Pair single="benefit" id="sensing-imperfection-benefit">Your belief in Irori has honed your ability to recognize when someone lies or dissembles. Sense Motive is a class skill for you, and you gain a +1 trait bonus on Sense Motive checks.</Pair>
</Ability>
</>};
const _serpentine_squeeze = {title: "Serpentine Squeeze", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="serpentine-squeeze" extraClasses="trait" icon={["prayer"]}>
<Pair single id="serpentine-squeeze">Serpentine Squeeze</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/ydersius">Ydersius</Link></Pair>
<Pair single="benefit" id="serpentine-squeeze-benefit">You gain a +1 trait bonus on combat maneuver checks to grapple a foe, as well as a +1 trait bonus to your CMD whenever an opponent tries to grapple you.</Pair>
</Ability>
</>};
const _shadow_whispers = {title: "Shadow Whispers", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="shadow-whispers" extraClasses="trait" icon={["prayer"]}>
<Pair single id="shadow-whispers">Shadow Whispers</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/norgorber">Norgorber</Link></Pair>
<Pair single="benefit" id="shadow-whispers-benefit">You have a penchant for just knowing others' secrets. You gain a +1 trait bonus on Knowledge (local) checks and a +2 trait bonus on Intimidate checks made to demoralize opponents.</Pair>
</Ability>
</>};
const _shaper_of_reality = {title: "Shaper of Reality", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="shaper-of-reality" extraClasses="trait" icon={["prayer"]}>
<Pair single id="shaper-of-reality">Shaper of Reality</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/rule/eldest">Eldest</Link></Pair>
<Pair single="benefit" id="shaper-of-reality-benefit">You can mimic the Eldest's ability to reshape the world. Once per day, you can cast either a conjuration spell or a transmutation spell at +1 caster level.</Pair>
</Ability>
</>};
const _shared_ancestors = {title: "Shared Ancestors", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 13</Link></p>
<Ability id="shared-ancestors" extraClasses="trait" icon={["prayer"]}>
<Pair single id="shared-ancestors">Shared Ancestors</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/myr">Myr</Link></Pair>
<Pair single="benefit" id="shared-ancestors-benefit">Through your detailed study of your own lineage, you can better understand and honor even your most distant relatives. You gain a +1 trait bonus on Diplomacy, Knowledge (history), Knowledge (local), Knowledge (nobility), and Sense Motive checks associated with any creature who shares your type and at least one of your subtypes. One of these skills becomes a class skill.</Pair>
</Ability>
</>};
const _shield_trained = {title: "Shield-Trained", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="shield-trained" extraClasses="trait" icon={["prayer"]}>
<Pair single id="shield-trained">Shield-Trained</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/gorum">Gorum</Link></Pair>
<Pair single="benefit" id="shield-trained-benefit">You were trained to use shields as weapons. Heavy and light shields are considered simple weapons rather than martial weapons for you. Heavy shields are considered light weapons for you.</Pair>
</Ability>
</>};
const _sovyrian_pantheist = {title: "Sovyrian Pantheist", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/elves_of_golarion">Elves of Golarion</Link></p>
<Ability id="sovyrian-pantheist" extraClasses="trait" icon={["prayer"]}>
<Pair single id="sovyrian-pantheist">Sovyrian Pantheist</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Elven Deities</Pair>
<Pair title="Requirements" hl><Link to="/race/elf">Elf</Link></Pair>
<Pair single="benefit" id="sovyrian-pantheist-benefit">Strongly influenced by the elves' mysterious other realm, you embrace obscure elven deities that have little influence on Golarion. You gain a +1 trait bonus on Knowledge (history) checks to recognize or evaluate art, Knowledge (architecture and engineering) checks, Survival checks to hunt game, Constitution checks to run, and Spellcraft checks involving crystals or gems.</Pair>
</Ability>
</>};
const _spirit_guide = {title: "Spirit Guide", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="spirit-guide" extraClasses="trait" icon={["prayer"]}>
<Pair single id="spirit-guide">Spirit Guide</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/pharasma">Pharasma</Link></Pair>
<Pair single="benefit" id="spirit-guide-benefit">As someone who has performed or observed funeral rites for a wide variety of people, you have a basic understanding of many different religions. You gain a +2 trait bonus on Knowledge (religion) checks, and Knowledge (religion) is a class skill for you.</Pair>
</Ability>
</>};
const _spirit_talker = {title: "Spirit Talker", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/sargava_the_lost_colony">Sargava, the Lost Colony</Link></p>
<Ability id="spirit-talker" extraClasses="trait" icon={["prayer"]}>
<Pair single id="spirit-talker">Spirit Talker</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Mwangi shamanistic faith</Pair>
<Pair single="benefit" id="spirit-talker-benefit">You are a devotee of the shamanistic practices of the Mwangi, having little use for the deities of the colonials. You gain a +1 racial bonus on Will saves against divine spells and spell-like effects employed against you by clerics or paladins of Aroden, Abadar, Iomedae, Gozreh, and Shelyn - but you suffer a -1 penalty on Will saves against divine spells cast by devotees of Mwangi faiths.</Pair>
</Ability>
</>};
const _split_second_defense = {title: "Split-Second Defense", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="split-second-defense" extraClasses="trait" icon={["prayer"]}>
<Pair single id="split-second-defense">Split-Second Defense</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/milani">Milani</Link></Pair>
<Pair single="benefit" id="split-second-defense-benefit">When you are the target of an attack by an opponent that is flanking you, as an immediate action once per day you can foil that opponent's attack. For that attack, the opponent does not gain any of the bonuses or effects that are associated with flanking.</Pair>
</Ability>
</>};
const _stabilizing_touch = {title: "Stabilizing Touch", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="stabilizing-touch" extraClasses="trait" icon={["prayer"]}>
<Pair single id="stabilizing-touch">Stabilizing Touch</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/pharasma">Pharasma</Link></Pair>
<Pair single="benefit" id="stabilizing-touch-benefit">You were born with the ability to stop the passage to death's door. Once per day, you can use <Link to="/spell/stabilize">stabilize</Link> as a spell-like ability, but with a range of touch.</Pair>
</Ability>
</>};
const _starchild = {title: "Starchild", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/elves_of_golarion">Elves of Golarion</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="starchild" extraClasses="trait" icon={["prayer"]}>
<Pair single id="starchild">Starchild</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/desna">Desna</Link></Pair>
<Pair single="benefit" id="starchild-benefit">Desna sensed your love of travel and promised you would always be able to find your way home. You can automatically determine where true north is. You gain a +4 trait bonus on Survival checks to avoid becoming lost.</Pair>
</Ability>
</>};
const _starlit_hexer = {title: "Starlit Hexer", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_stars">People of the Stars</Link></p>
<Ability id="starlit-hexer" extraClasses="trait" icon={["prayer"]}>
<Pair single id="starlit-hexer">Starlit Hexer</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Outer Gods</Pair>
<Pair single="benefit" id="starlit-hexer-benefit">Your spellcasting powers are infused with the powers of the occult Outer Gods. Whenever you cast a spell or spell-like ability with the curse descriptor, increase the DC of the spell's saving throw by 1. If you cast such a spell or spell-like ability at night, as long as the sky is clear and the stars are visible, treat your caster level as 1 higher when determining the spell's duration.</Pair>
</Ability>
</>};
const _steady_strength = {title: "Steady Strength", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="steady-strength" extraClasses="trait" icon={["prayer"]}>
<Pair single id="steady-strength">Steady Strength</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/trudd">Trudd</Link></Pair>
<Pair single="benefit" id="steady-strength-benefit">Your strength training conditioned you to wearing heavy armor. When you wear medium or heavy armor, your armor check penalty on Strength-based skills is reduced by 2.</Pair>
</Ability>
</>};
const _stoic_optimism = {title: "Stoic Optimism", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="stoic-optimism" extraClasses="trait" icon={["prayer"]}>
<Pair single id="stoic-optimism">Stoic Optimism</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/desna">Desna</Link></Pair>
<Pair single="benefit" id="stoic-optimism-benefit">You realize that accepting the pain in life accentuates its joys by contrast, and so your hope sustains you where others despair. You receive a +2 trait bonus on saving throws against fear effects.</Pair>
</Ability>
</>};
const _strength_of_the_barghest = {title: "Strength of the Barghest", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/goblins_of_golarion">Goblins of Golarion</Link></p>
<Ability id="strength-of-the-barghest" extraClasses="trait" icon={["prayer"]}>
<Pair single id="strength-of-the-barghest">Strength of the Barghest</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/hadregash">Hadregash</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/goblin">Goblin</Link></Pair>
<Pair single="benefit" id="strength-of-the-barghest-benefit">The blood of the barghests is strong in you. Once per day as a free action, you can gain a +2 trait bonus on any Strength check or Strength-based skill check.</Pair>
</Ability>
</>};
const _strength_of_the_sun = {title: "Strength of the Sun", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_fire_players_guide">Legacy of Fire Player's Guide</Link></p>
<Ability id="strength-of-the-sun" extraClasses="trait" icon={["prayer"]}>
<Pair single id="strength-of-the-sun">Strength of the Sun</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/sarenrae">Sarenrae</Link></Pair>
<Pair single="benefit" id="strength-of-the-sun-benefit">You take solace in the purifying light of the sun. During the day, you gain a +1 trait bonus on all Charisma-based checks.</Pair>
</Ability>
</>};
const _strengths_fanfare = {title: "Strength's Fanfare", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="strengths-fanfare" extraClasses="trait" icon={["prayer"]}>
<Pair single id="strengths-fanfare">Strength's Fanfare</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/kurgess">Kurgess</Link></Pair>
<Pair single="benefit" id="strengths-fanfare-benefit">Songs of your glory and prowess bolster your strength. When you are the subject of any sonic effect that grants a morale bonus on attack or damage rolls, you also gain a +1 trait bonus on Strength-based skill checks; on combat maneuver checks to bull rush, grapple, and reposition; and to your CMD against those combat maneuvers.</Pair>
</Ability>
</>};
const _strict_judgment = {title: "Strict Judgment", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="strict-judgment" extraClasses="trait" icon={["prayer"]}>
<Pair single id="strict-judgment">Strict Judgment</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/kols">Kols</Link></Pair>
<Pair single="benefit" id="strict-judgment-benefit">Your respect for the letter of the law bleeds into your spellcasting. Any spells you cast that prescribe certain behaviors with a consequence for breaking these directives (such as mark of justice or geas) have their save DC increased by 1.</Pair>
</Ability>
</>};
const _strip_the_veils = {title: "Strip the Veils", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="strip-the-veils" extraClasses="trait" icon={["prayer"]}>
<Pair single id="strip-the-veils">Strip the Veils</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/sivanah">Sivanah</Link></Pair>
<Pair single="benefit" id="strip-the-veils-benefit">You are unusually perceptive when dealing with others. You gain a +1 trait bonus on Sense Motive checks, and Sense Motive is a class skill for you.</Pair>
</Ability>
</>};
const _strong_heart = {title: "Strong Heart", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="strong-heart" extraClasses="trait" icon={["prayer"]}>
<Pair single id="strong-heart">Strong Heart</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/gorum">Gorum</Link></Pair>
<Pair single="benefit" id="strong-heart-benefit">You can stand firm against even the most terrifying foes. You gain a +1 trait bonus on saves against fear effects, and the DC of Intimidate checks against you increases by 2.</Pair>
</Ability>
</>};
const _strong_swimmer = {title: "Strong Swimmer", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="strong-swimmer" extraClasses="trait" icon={["prayer"]}>
<Pair single id="strong-swimmer">Strong Swimmer</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/gozreh">Gozreh</Link></Pair>
<Pair single="benefit" id="strong-swimmer-benefit">Your faith in Gozreh's grace gives you the confidence to swim without fear. You gain a +2 trait bonus on Swim checks, and can <Link to="/misc/hold_your_breath">hold your breath</Link> for an extra 2 rounds when underwater.</Pair>
</Ability>
</>};
const _strong_willed = {title: "Strong-Willed", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/faiths_of_purity">Faiths of Purity</Link>, <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="strong-willed" extraClasses="trait" icon={["prayer"]}>
<Pair single id="strong-willed">Strong-Willed</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/cayden_cailean">Cayden Cailean</Link></Pair>
<Pair single="benefit" id="strong-willed-benefit">Your fervent desire to choose your own path gives you strong willpower. You receive a +2 trait bonus on saving throws against charm and compulsion effects.</Pair>
</Ability>
</>};
const _structural_knowledge = {title: "Structural Knowledge", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="structural-knowledge" extraClasses="trait" icon={["prayer"]}>
<Pair single id="structural-knowledge">Structural Knowledge</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/findeladlara">Findeladlara</Link></Pair>
<Pair single="benefit" id="structural-knowledge-benefit">You are blessed with an insight into architecture and artifice. You gain a +1 trait bonus on Knowledge (engineering) checks, and Knowledge (engineering) is a class skill for you.</Pair>
</Ability>
</>};
const _talented_organizer = {title: "Talented Organizer", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="talented-organizer" extraClasses="trait" icon={["prayer"]}>
<Pair single id="talented-organizer">Talented Organizer</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/milani">Milani</Link></Pair>
<Pair single="benefit" id="talented-organizer-benefit">You are both skilled and knowledgeable when at putting together strong resistance organizations, thanks to your keen sense of how to motivate people. You gain a +1 trait bonus on Sense Motive skill checks, and Sense Motive is a class skill for you.</Pair>
</Ability>
</>};
const _the_city_protects = {title: "The City Protects", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_fire_players_guide">Legacy of Fire Player's Guide</Link></p>
<Ability id="the-city-protects" extraClasses="trait" icon={["prayer"]}>
<Pair single id="the-city-protects">The City Protects</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/abadar">Abadar</Link></Pair>
<Pair single="benefit" id="the-city-protects-benefit">You feel safe and secure in urban environments, even in cities whose laws you find unjust - it is the physical fact of the city that you take solace in. In any settlement, you gain a +2 trait bonus against fear effects. If you fail a save against a fear effect, you may make a new save each round you remain in the city to overcome the fear effect as long as the fear effect persists. If you are a paladin, this ability to make additional saves to overcome fear extends to all allies within your aura of courage.</Pair>
</Ability>
</>};
const _the_flexing_arm = {title: "The Flexing Arm", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="the-flexing-arm" extraClasses="trait" icon={["prayer"]}>
<Pair single id="the-flexing-arm">The Flexing Arm</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/kurgess">Kurgess</Link></Pair>
<Pair single="benefit" id="the-flexing-arm-benefit">You are practiced at using physical might to escape your bonds. You can use Strength instead of Dexterity as your base ability for Escape Artist skill checks to free yourself from bondage. Additionally, you gain a +1 trait bonus on such Escape Artist checks.</Pair>
</Ability>
</>};
const _thirst_for_knowledge = {title: "Thirst for Knowledge", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="thirst-for-knowledge" extraClasses="trait" icon={["prayer"]}>
<Pair single id="thirst-for-knowledge">Thirst for Knowledge</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/nethys">Nethys</Link></Pair>
<Pair single="benefit" id="thirst-for-knowledge-benefit">You have a need to bring old knowledge into the light, no matter what language it's written in. You gain a +1 trait bonus on Linguistics checks, and Linguistics is a class skill for you.</Pair>
</Ability>
</>};
const _thrill_seeker_isg = {title: "Thrill-Seeker (ISG)", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="thrill-seeker-isg" extraClasses="trait" icon={["prayer"]}>
<Pair single id="thrill-seeker-isg">Thrill-Seeker (ISG)</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/desna">Desna</Link></Pair>
<Pair single="benefit" id="thrill-seeker-isg-benefit">Desna has blessed you not just with a love of taking chances, but also the fortune to come out of such risky situations unscathed. Once per day, when you attempt an Acrobatics check, you can roll twice and take the better result. You must choose to use this ability before making the check.</Pair>
</Ability>
</>};
const _toilcrafter = {title: "Toilcrafter", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/dwarves_of_golarion">Dwarves of Golarion</Link></p>
<Ability id="toilcrafter" extraClasses="trait" icon={["prayer"]}>
<Pair single id="toilcrafter">Toilcrafter</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/droskar">Droskar</Link></Pair>
<Pair single="benefit" id="toilcrafter-benefit">You can craft passable if inferior magical weapons, armors, and shields through diligence and toil. Choose one Craft or Profession skill in which you have at least 1 rank. Ranks in your chosen skill count as your caster level for the purpose of qualifying for the <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link> feat. You may craft +1 armor, weapons, or shields (with no special qualities), substituting your rank in the chosen skill for your caster level. You must use the chosen skill for the check to create the item. Crafting in this fashion takes twice as long as normal. These items cannot be upgraded with new abilities.</Pair>
</Ability>
</>};
const _twisted_transformations = {title: "Twisted Transformations", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_stars">People of the Stars</Link></p>
<Ability id="twisted-transformations" extraClasses="trait" icon={["prayer"]}>
<Pair single id="twisted-transformations">Twisted Transformations</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Great Old Ones</Pair>
<Pair single="benefit" id="twisted-transformations-benefit">Whenever you are affected by a transmutation spell of the polymorph subschool, your new form is always in some way horrific, grotesque, or otherwise marked by the corruption of the Great Old Ones. While polymorphed, you gain a +2 trait bonus on Intimidate checks and increase the DC of spells you cast with the fear descriptor by 1. However, you also take a -2 penalty on Diplomacy checks while polymorphed.</Pair>
</Ability>
</>};
const _undead_slayer_pharasma = {title: "Undead Slayer (Pharasma)", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="undead-slayer-pharasma" extraClasses="trait" icon={["prayer"]}>
<Pair single id="undead-slayer-pharasma">Undead Slayer (Pharasma)</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/pharasma">Pharasma</Link></Pair>
<Pair single="benefit" id="undead-slayer-pharasma-benefit">Instructed at a young age in the tenets of the faith of Pharasma, you view the undead as abominations that must be destroyed so their souls can journey beyond to be judged. You gain a +1 trait bonus on weapon damage rolls against undead.</Pair>
</Ability>
</>};
const _under_siege = {title: "Under Siege", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/taldor_echoes_of_glory">Taldor, Echoes of Glory</Link></p>
<Ability id="under-siege" extraClasses="trait" icon={["prayer"]}>
<Pair single id="under-siege">Under Siege</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/sarenrae">Sarenrae</Link></Pair>
<Pair single="benefit" id="under-siege-benefit">In order to maintain your devotion to Sarenrae in Taldor and stay alive, you and your fellow worshipers developed a complex system of hand signs and facial gestures to identify yourselves as faithful in the Cult of the Dawnflower. You gain a +1 trait bonus on Bluff and Sense Motive checks. One of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
</>};
const _underlying_principles = {title: "Underlying Principles", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_balance">Faiths of Balance</Link></p>
<Ability id="underlying-principles" extraClasses="trait" icon={["prayer"]}>
<Pair single id="underlying-principles">Underlying Principles</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/nethys">Nethys</Link></Pair>
<Pair single="benefit" id="underlying-principles-benefit">You've spent a large amount of time around magical items, and understand the similarities between many of them. You gain a +1 trait bonus on Use Magic Device checks, and Use Magic Device is a class skill for you.</Pair>
</Ability>
</>};
const _unhinged_mentality = {title: "Unhinged Mentality", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="unhinged-mentality" extraClasses="trait" icon={["prayer"]}>
<Pair single id="unhinged-mentality">Unhinged Mentality</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/lamashtu">Lamashtu</Link></Pair>
<Pair single="benefit" id="unhinged-mentality-benefit">Your goddess-granted madness gives you a +2 trait bonus on saving throws against confusion, insanity, and fear effects.</Pair>
</Ability>
</>};
const _unspeakable_bond = {title: "Unspeakable Bond", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="unspeakable-bond" extraClasses="trait" icon={["prayer"]}>
<Pair single id="unspeakable-bond">Unspeakable Bond</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Great Old Ones or Outer Gods</Pair>
<Pair single="benefit" id="unspeakable-bond-benefit">You are an ally of the unclean creatures of the world, and gain a +2 trait bonus on Diplomacy checks when dealing with creatures of the aberration type.</Pair>
</Ability>
</>};
const _unswaying_love = {title: "Unswaying Love", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="unswaying-love" extraClasses="trait" icon={["prayer"]}>
<Pair single id="unswaying-love">Unswaying Love</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/shelyn">Shelyn</Link></Pair>
<Pair single="benefit" id="unswaying-love-benefit">Your resolute devotion to the unadulterated purity of your goddess protects you from those who would manipulate you. You gain a +2 trait bonus on saving throws against charm or compulsion effects.</Pair>
</Ability>
</>};
const _veils_upon_veils = {title: "Veils upon Veils", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="veils-upon-veils" extraClasses="trait" icon={["prayer"]}>
<Pair single id="veils-upon-veils">Veils upon Veils</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/sivanah">Sivanah</Link></Pair>
<Pair single="benefit" id="veils-upon-veils-benefit">You have learned a holy secret that makes your illusions more powerful. Once per day when casting an illusion spell, you can do so at +1 caster level.</Pair>
</Ability>
</>};
const _venom_drenched = {title: "Venom-Drenched", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/halflings_of_golarion">Halflings of Golarion</Link></p>
<Ability id="venom-drenched" extraClasses="trait" icon={["prayer"]}>
<Pair single id="venom-drenched">Venom-Drenched</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/norgorber">Norgorber</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/halfling">Halfling</Link></Pair>
<Pair single="benefit" id="venom-drenched-benefit">You have nothing to fear from one sort of poison. In fact, you can actually drink the toxic brew in order to make your blood dangerous. You are immune to one specific nonmagical poison. If you ingest a dose of that poison (even if it is a contact, inhaled, or injury poison), it remains in your system for 24 hours; any creature that bites you during that time is subject to the poison's effects.</Pair>
</Ability>
</>};
const _veteran_of_battle = {title: "Veteran of Battle", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="veteran-of-battle" extraClasses="trait" icon={["prayer"]}>
<Pair single id="veteran-of-battle">Veteran of Battle</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/gorum">Gorum</Link></Pair>
<Pair single="benefit" id="veteran-of-battle-benefit">You have fought in several battles, and each time felt the presence of Gorum guiding your sword-arm, making you ready to act at a moment's notice. You gain a +1 trait bonus on initiative checks, and if you are able to act during a surprise round, you may draw a weapon (but not a potion or magic item) as a free action during that round.</Pair>
</Ability>
</>};
const _vindictive_strike = {title: "Vindictive Strike", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/faiths_of_corruption">Faiths of Corruption</Link></p>
<Ability id="vindictive-strike" extraClasses="trait" icon={["prayer"]}>
<Pair single id="vindictive-strike">Vindictive Strike</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/gyronna">Gyronna</Link></Pair>
<Pair single="benefit" id="vindictive-strike-benefit">Once per day during a combat encounter, you can choose to gain a +1 trait bonus on a single attack roll against the creature that last hit you.</Pair>
</Ability>
</>};
const _voice_of_monsters = {title: "Voice of Monsters", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="voice-of-monsters" extraClasses="trait" icon={["prayer"]}>
<Pair single id="voice-of-monsters">Voice of Monsters</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/lamashtu">Lamashtu</Link></Pair>
<Pair single="benefit" id="voice-of-monsters-benefit">Your faith leads you to see the power and wonder in even the most horrible abominations. Once per day, you can cast speak with animals. When you cast this spell, it can affect animals (as normal) as well as aberrations and magical beasts with an Intelligence of 2 or lower.</Pair>
</Ability>
</>};
const _wasp_whisperer = {title: "Wasp Whisperer", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/elves_of_golarion">Elves of Golarion</Link></p>
<Ability id="wasp-whisperer" extraClasses="trait" icon={["prayer"]}>
<Pair single id="wasp-whisperer">Wasp Whisperer</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/calistria">Calistria</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/elf">Elf</Link></Pair>
<Pair single="benefit" id="wasp-whisperer-benefit">Your association with Calistria's church has toughened your flesh against venom and blessed you with the ability to influence wasps and similar insectile vermin. You gain a +1 trait bonus on Fortitude saving throws against poison. You may make Diplomacy checks (or <Link to="/ability/wild_empathy">wild empathy</Link> checks if you are a druid or ranger) to improve a Hostile or Unfriendly insectile vermin's attitude toward Indifferent.</Pair>
</Ability>
</>};
const _wedded_bliss = {title: "Wedded Bliss", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="wedded-bliss" extraClasses="trait" icon={["prayer"]}>
<Pair single id="wedded-bliss">Wedded Bliss</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/bolka">Bolka</Link></Pair>
<Pair single="benefit" id="wedded-bliss-benefit">Your commitment to your own marriage or your burning desire to be wed grants you a +2 trait bonus on saving throws against charm and compulsion effects.</Pair>
</Ability>
</>};
const _well_prepared = {title: "Well-Prepared", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="well-prepared" extraClasses="trait" icon={["prayer"]}>
<Pair single id="well-prepared">Well-Prepared</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/angradd">Angradd</Link></Pair>
<Pair single="benefit" id="well-prepared-benefit">Angradd teaches that a good offense can be the best defense. You gain a +1 trait bonus on attack rolls made as part of a readied action, and a +1 trait bonus on caster level checks when casting a spell as a readied action.</Pair>
</Ability>
</>};
const _wisdom_in_the_flesh = {title: "Wisdom in the Flesh", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/legacy_of_fire_players_guide">Legacy of Fire Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="wisdom-in-the-flesh" extraClasses="trait" icon={["prayer"]}>
<Pair single id="wisdom-in-the-flesh">Wisdom in the Flesh</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/irori">Irori</Link></Pair>
<Pair single="benefit" id="wisdom-in-the-flesh-benefit">Your hours of meditation on inner perfection and the nature of strength and speed allow you to focus your thoughts to achieve things your body might not normally be able to do on its own. Select any Strength-, Constitution-, or Dexterity-based skill. You may make checks with that skill using your Wisdom modifier instead of the skill's normal ability score. That skill is always a class skill for you.</Pair>
</Ability>
</>};
const _wise_teacher = {title: "Wise Teacher", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link>, <Link to="/source/faiths_of_purity">Faiths of Purity</Link></p>
<Ability id="wise-teacher" extraClasses="trait" icon={["prayer"]}>
<Pair single id="wise-teacher">Wise Teacher</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/erastil">Erastil</Link></Pair>
<Pair single="benefit" id="wise-teacher-benefit">You are skilled in passing along knowledge of rural matters. If you have 4 or more ranks in Knowledge (Nature) or Survival, when you aid another with these skills, you grant a +4 bonus on the check you are aiding instead of the normal +2.</Pair>
</Ability>
</>};
const _wolf_cub = {title: "Wolf Cub", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/goblins_of_golarion">Goblins of Golarion</Link></p>
<Ability id="wolf-cub" extraClasses="trait" icon={["prayer"]}>
<Pair single id="wolf-cub">Wolf Cub</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/zarongel">Zarongel</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/goblin">Goblin</Link></Pair>
<Pair single="benefit" id="wolf-cub-benefit">Your body has clumps of ugly fur, a sure sign of wolf blood! You win! Once per day as a standard action, you can take a deep breath through your nose to gain the scent ability for 1 minute.</Pair>
</Ability>
</>};
const _worthless_pawn = {title: "Worthless Pawn", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="worthless-pawn" extraClasses="trait" icon={["prayer"]}>
<Pair single id="worthless-pawn">Worthless Pawn</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Great Old Ones</Pair>
<Pair single="benefit" id="worthless-pawn-benefit">Your existence is so meaningless to your chosen patron that it cares nothing for how you wield its power. You may prepare and cast spells whose alignment is in opposition to your patron's, but doing so causes you to take 1 point of Wisdom damage per spell level when the spell is cast. This does not permit you to use <Link to="/misc/spell_trigger">spell trigger</Link> or <Link to="/misc/spell_completion">spell completion</Link> items of opposing alignments.</Pair>
</Ability>
</>};
const _wrecking_wrath = {title: "Wrecking Wrath", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="wrecking-wrath" extraClasses="trait" icon={["prayer"]}>
<Pair single id="wrecking-wrath">Wrecking Wrath</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/rovagug">Rovagug</Link></Pair>
<Pair single="benefit" id="wrecking-wrath-benefit">Your ferocity is devastating, sometimes even to your own weapons. Once per day, after successful hitting a foe with a melee weapon, you can add your Strength modifier to the damage roll a second time (your Strength Modifier is not doubled if you are using a two-handed weapon). Doing so has a 25% chance of giving your weapon the broken condition.</Pair>
</Ability>
</>};
const _wronged = {title: "Wronged", topLink: ["Religion Traits","main/traits_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods</Link></p>
<Ability id="wronged" extraClasses="trait" icon={["prayer"]}>
<Pair single id="wronged">Wronged</Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/gyronna">Gyronna</Link></Pair>
<Pair single="benefit" id="wronged-benefit">Somewhere in your past, you were taken advantage of because of your gender. You gain a +2 trait bonus on Sense Motive checks against male creatures of your race, and the DC for men to intimidate you increases by 2.</Pair>
</Ability>
</>};
const _anxious = {title: "Anxious", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="anxious" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="anxious">Anxious</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="anxious-benefit">After suffering terribly for not being tightlipped enough as a child, such as when you accidentally exposed your family to enemy inquisitors, you developed a habit of being overly cautious with your words. You take a -2 penalty on Diplomacy checks and must speak slowly due to the concentration required. Unless stated otherwise, you are assumed to not be speaking at a volume above a whisper.</Pair>
</Ability>
</>};
const _arcane_malignancies = {title: "Arcane Malignancies", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven</Link></p>
<Ability id="arcane-malignancies" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="arcane-malignancies">Arcane Malignancies</Pair>
<Pair title="Type">Drawback</Pair>
<Pair title="Requirements" hl><Link to="/race/changeling">Changeling</Link></Pair>
<Pair single="flavor" id="arcane-malignancies-flavor">As changelings sense the awakening of the eerie powers they inherited from their hag progenitors, they are often mortified to discover terrifying and debilitating alterations to their physique. While the call seizes the changelings' minds around the time their bodies begin maturing, the arcane malignancies that mar their features and extremities have nothing to do with puberty.~~~~~~Not every changeling develops a malignancy, and when a changeling does develop a malignancy, it is often unrelated to whatever traits her hag mother has. These transformations are more akin to a magical allergy, manifesting in response to the well of arcane energy bubbling away in the changeling's core.</Pair>
<Pair single="benefit" id="arcane-malignancies-benefit"><p>A changeling character can take an arcane malignancy as a drawback in order to select an additional trait at character creation. Randomly determine the arcane malignancy by rolling a d% and consulting the table below.</p>
<ScrollContainer id="trait-arcane_malignancies--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Arcane Malignancy</th>
</tr>
</thead>
<tbody><tr>
<td>01-02</td>
<td>The smallest three toes on each of your feet have fused together. You take a -2 penalty on Acrobatics, Climb, and Perform (dance) checks.</td>
</tr>
<tr>
<td>03-04</td>
<td>Your incisors grow so long and sharp that you have difficulty eating. Eating takes twice as long. Consuming a potion or other magical foodstuff requires a full-round action.</td>
</tr>
<tr>
<td>05-07</td>
<td>You have an extra digit on each hand, which hampers your fine motor skills. You take a -2 penalty on Craft, Disable Device, and Sleight of Hand checks.</td>
</tr>
<tr>
<td>08-10</td>
<td>Your limbs and torso are covered with piscine scales that you must constantly moisten. If more than 1 day passes without you applying at least a gallon of water to them, you take 1d3 points of damage each hour until you do so.</td>
</tr>
<tr>
<td>11-13</td>
<td>Your skin bears a sizable scarlet mark that flushes and lightens with your moods. You take a -2 penalty on Bluff and Disguise checks.</td>
</tr>
<tr>
<td>14-16</td>
<td>One of your eyes has grown enlarged and developed a pale, milky film. Daylight seems uncomfortably bright to you. You take a -2 penalty on saving throws against light-based spells and effects, and you are automatically dazzled for 1d6 rounds when exposed to bright light or sunlight.</td>
</tr>
<tr>
<td>17-19</td>
<td>The soles of your feet are flat, and you tire quickly. You can hustle for only a half hour before becoming fatigued, and every 4 hours spent traveling by foot in a day deals 1 point of Constitution damage.</td>
</tr>
<tr>
<td>20-22</td>
<td>Your already pallid complexion grows unusually sensitive to the rays of the sun. Exposure to direct sunlight for more than 1 hour at a time makes you sickened for 24 hours.</td>
</tr>
<tr>
<td>23-25</td>
<td>The tip of your tongue is forked and stiff. You have difficulty making yourself understood. You take a -2 penalty on Bluff, Diplomacy, and Disguise checks to fool or persuade others.</td>
</tr>
<tr>
<td>26-28</td>
<td>The painful and stiff swelling of your joints puts you at a disadvantage in combat. You take a -2 penalty on combat maneuver checks and Escape Artist checks to free yourself when grappled or pinned.</td>
</tr>
<tr>
<td>29-31</td>
<td>Your ears have stretched to an abnormal size, making you overly sensitive to loud noises. Whenever you are dealt sonic damage, you take 1 additional point of damage, and you are deafened for 1 minute whenever you take damage from any sonic effect.</td>
</tr>
<tr>
<td>32-33</td>
<td>The pupils of your eyes resemble a cat's, and beasts cannot abide your presence. You take a -2 penalty on Handle Animal and Ride checks.</td>
</tr>
<tr>
<td>34-35</td>
<td>You grow velvety-soft fur along your back, arms, and legs that chafes and catches under clothing and armor, increasing the armor check penalty of any armor by 1 and applying a -1 armor check penalty to ordinary clothing. Clothing and armor can be specially fitted for you, eliminating the increased penalty but increasing their price by 50 gp.</td>
</tr>
<tr>
<td>36-37</td>
<td>You grow an extra row of sharp, crooked teeth. The uneven set of your jaws gives you constant headaches. You take a -2 penalty on <Link to="/rule/concentration">concentration</Link> checks and saving throws against pain effects.</td>
</tr>
<tr>
<td>38-40</td>
<td>It is nearly impossible to find armor that fits your concave chest and unusually narrow, sloping shoulders. The armor check penalty of any armor you wear increases by 1, and you take a -1 penalty to AC when wearing medium or heavy armor.</td>
</tr>
<tr>
<td>41-42</td>
<td>Your throat balloons out like a frog's, and your voice comes out as an odd croak. You take a -2 penalty on Diplomacy checks and on Perform (act, oratory, and sing) checks.</td>
</tr>
<tr>
<td>43-45</td>
<td>An oozing sore has developed on your face that refuses to heal and makes you more susceptible to illness. You take a -2 penalty on saving throws against disease.</td>
</tr>
<tr>
<td>46-48</td>
<td>Your flesh grows bark, and your major joints have become gnarled and knotted like tree limbs, causing you to move slowly and stiffly. You take a -2 penalty on Reflex saves.</td>
</tr>
<tr>
<td>49-51</td>
<td>Your thin, almost translucent skin is delicate and tears easily. You take 1 point of bleed damage from slashing attacks that deal at least 1 point of damage to you.</td>
</tr>
<tr>
<td>52-54</td>
<td>A massive patch of multicolored warts covers much of your face. People cannot help but stare, and they always remember you once they've seen you. You take a -4 penalty on Disguise checks.</td>
</tr>
<tr>
<td>55-57</td>
<td>Your unruly hair grows with alarming speed. If you do not spend 1 hour trimming and grooming your hair every 48 hours, it snarls in nearby foliage whenever you are outdoors, imposing a -2 penalty to your Armor Class and on attack rolls and Stealth checks.</td>
</tr>
<tr>
<td>58-60</td>
<td>Your limbs are thin and frail. You take a -2 penalty to CMD against disarm, grapple, and trip attempts.</td>
</tr>
<tr>
<td>61-63</td>
<td>Your bones shatter as easily as glass. You take 2 additional points of damage each time you are hit by an attack made with a bludgeoning weapon.</td>
</tr>
<tr>
<td>64-65</td>
<td>One arm is turning to stone, though you retain limited mobility. You take a -4 penalty on all skill checks requiring the use of two hands and on attack rolls when wielding a two-handed weapon or fighting with two weapons.</td>
</tr>
<tr>
<td>66-67</td>
<td>You develop an allergy to one spell per spell level from the witch spell list (determined by your GM). Casting or being the target of a spell you're allergic to causes you to break out in a painful rash. This rash deals 1d4 points of damage per spell level, and imposes a penalty on your Charisma equal to the level of the spell. The rash fades after a number of hours equal to the level of the spell.</td>
</tr>
<tr>
<td>68-69</td>
<td>The joints in your unnaturally long thumbs have fused, and you often fumble objects. When you retrieve a stored item, you have a 10% chance of dropping it.</td>
</tr>
<tr>
<td>70-72</td>
<td>Your knees bend backward like a bird's, which makes many athletic movements difficult to master. You take a -2 penalty on Climb and Swim checks, and your running speed is only three times your regular walking speed.</td>
</tr>
<tr>
<td>73-75</td>
<td>A tenacious patch of fungus has sprouted on your back, weakening your system against toxins. You take a -2 penalty on saves against poison effects.</td>
</tr>
<tr>
<td>76-77</td>
<td>Your misaligned eyes affect your ability to judge distances. You take a -2 penalty on ranged attack and damage rolls.</td>
</tr>
<tr>
<td>78-80</td>
<td>When you get flustered, heat builds up in your face until it glows with inner fire. You take a -4 penalty on Diplomacy and Perform checks when in the presence of 5 or more creatures.</td>
</tr>
<tr>
<td>81-83</td>
<td>Your ears curl up like dried leaves, and you experience difficulty picking up sounds. You take a -2 penalty on hearing-based Perception checks.</td>
</tr>
<tr>
<td>84-86</td>
<td>Your curving, claw-like fingernails grow so long so quickly that they impede you in dangerous situations. You take a -2 penalty on Escape Artist and Sleight of Hand checks.</td>
</tr>
<tr>
<td>87-89</td>
<td>One of your legs measures noticeably longer than the other, and you lose your balance easily. You take a -2 penalty to CMD against bull rush and trip attempts.</td>
</tr>
<tr>
<td>90-92</td>
<td>Your eyes have swollen to mere slits. You take a -2 penalty on sight-based Perception checks.</td>
</tr>
<tr>
<td>93-96</td>
<td>You develop a shaggy pelt about your neck and shoulders that makes you overheat quickly. You take a -4 penalty on checks and saves to resist environmental heat effects.</td>
</tr>
<tr>
<td>97-98</td>
<td>You grow a tail that you can't easily conceal and that thrashes violently at inconvenient moments. You take a -2 penalty on Disguise and Stealth checks.</td>
</tr>
<tr>
<td>99-100</td>
<td>You grow vestigial gills. While they grant you no ability to breathe in water, they make it harder for you to catch your breath. When you are fatigued, it takes 12 hours of complete rest to recover. When you are exhausted, it takes 2 hours of complete rest to become fatigued.</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
</Ability>
</>};
const _attached = {title: "Attached", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="attached" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="attached">Attached</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="flavor" id="attached-flavor">You have a strong emotional attachment to a person or object that you're terrified of losing.</Pair>
<Pair single="benefit" id="attached-benefit">The GM chooses the object of your attachment. Whenever the object of your attachment is either threatened, in danger, or in someone else's possession, you take a -1 penalty on Will saves and a -2 penalty on saves against fear effects. If the person or object to which you're attached is ever lost, killed, or destroyed, exchange this drawback for the Doubt drawback.</Pair>
</Ability>
</>};
const _avarice = {title: "Avarice", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="avarice" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="avarice">Avarice</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="avarice-benefit">Deep, compulsive greed gnaws at you. Whenever monetary treasure is divided, you must end up with a greater share of that treasure than your companions or you're wracked with feelings of jealousy and ill will. When treasure is divided, if you do not end up with at least 10% more treasure than any other individual companion does, you have a hard time being helpful to your allies. You become irritable, and can't take the aid another action for the next week.</Pair>
</Ability>
</>};
const _betrayed_drawback = {title: "Betrayed (Drawback)", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="betrayed-drawback" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="betrayed-drawback">Betrayed (Drawback)</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="betrayed-drawback-benefit">You were reported to a dangerous authority such as the Gray Gardeners of Galt, the high inquisitors of Cheliax, or the Council of Mwanyisa of Mzali, and narrowly escaped death. You second-guess your instincts constantly, leaving you never sure whether or not to trust someone and endangered if you encounter that group's agents again. You can roll twice and take the lower result on Sense Motive checks to get hunches. You cannot reroll this result, even if you have another ability that would normally allow you to do so.</Pair>
</Ability>
</>};
const _bitter = {title: "Bitter", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="bitter" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="bitter">Bitter</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="bitter-benefit">You have been hurt repeatedly by those you trusted, and it has become difficult for you to accept help. When you receive healing from an ally's class feature, spell, or spell-like ability, reduce the amount of that healing by 1 hit point.</Pair>
</Ability>
</>};
const _burned = {title: "Burned", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="burned" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="burned">Burned</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="burned-benefit">You were badly burned once by volcanic ash, torch-wielding mobs, or some fiery accident, and the scars pain you terribly you whenever you are too near to fire. You take a -1 penalty on saving throws against fire effects. In addition, whenever you are adjacent to open flames or are on fire, you take a -1 penalty on all attack rolls, saving throws, and skill checks until you spend an entire round away from fire. These penalties are not cumulative. (An instantaneous fire effect adjacent to you or affecting you causes this penalty to apply until 1 round after it is gone.)</Pair>
</Ability>
</>};
const _condescending = {title: "Condescending", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="condescending" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="condescending">Condescending</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="condescending-benefit">Raised with the assurance that only those like you are truly worthy of respect, you have an offputting way of demonstrating that you look down on those not of your race and ethnicity or nationality. You take a -5 penalty on Diplomacy and Intimidate checks to improve other creatures' attitudes toward you.</Pair>
</Ability>
</>};
const _cowardly = {title: "Cowardly", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="cowardly" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="cowardly">Cowardly</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="cowardly-benefit">You might face dangerous situations with bravado, but you are constantly afraid. Your base speed when frightened and fleeing increases by 5 feet, and the penalties you take from having the cowering, frightened, panicked, or shaken conditions increase by 1. If you would normally be immune to fear, you do not take these penalties but instead lose your immunity to fear (regardless of its source).</Pair>
</Ability>
</>};
const _cruelty = {title: "Cruelty", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="cruelty" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="cruelty">Cruelty</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="cruelty-benefit">You were rewarded as a child for flaunting your victory over others as completely as possible, and you discovered you enjoyed the feeling of rubbing your foes' faces in the dirt. Whenever you are engaged in combat and there are dying or helpless foes within 30 feet, you take a -2 penalty on attack rolls against foes who are neither dying nor helpless.</Pair>
</Ability>
</>};
const _dependent = {title: "Dependent", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="dependent" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="dependent">Dependent</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="dependent-benefit">You are dependent upon the acceptance of others. Whenever you fail a Diplomacy check, you become shaken for 1 hour.</Pair>
</Ability>
</>};
const _doubt = {title: "Doubt", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="doubt" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="doubt">Doubt</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="doubt-benefit">You lack confidence in your abilities or confidence in the universe at large. Whenever you fail a skill or ability check, you take a -4 penalty on that type of skill or ability check for the next hour.</Pair>
</Ability>
</>};
const _empty_mask = {title: "Empty Mask", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="empty-mask" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="empty-mask">Empty Mask</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="empty-mask-benefit">You have spent so long hiding your true identity to escape political enemies that you have lost much of your sense of self. You take a -1 penalty on Will saving throws against compulsions. This penalty increases to -2 against foes who know your true identity.</Pair>
</Ability>
</>};
const _entomophobe = {title: "Entomophobe", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="entomophobe" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="entomophobe">Entomophobe</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="entomophobe-benefit">A harrowing experience with insects when you were young instilled in you a deep-seated fear of vermin of all description, especially when they swarm together. You take a -2 penalty on attacks against vermin, and you take a -2 penalty on saving throws against the nauseated condition of a swarm's distraction ability.</Pair>
</Ability>
</>};
const _envy = {title: "Envy", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="envy" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="envy">Envy</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="envy-benefit">You grew up in or near an opulent, decadent culture that valued nothing more than showing up the material wealth or accomplishments of others, causing the seed of envy to be planted in your heart. For each day you spend without stealing at least 10 gp worth of valuables or other wealth, attempt a DC 20 Will save. If you fail, you take a cumulative -1 penalty on Will and Reflex saving throws and <Link to="/rule/concentration">concentration</Link> checks (up to a -5 penalty). If you succeed, the penalty is reset to 0.</Pair>
</Ability>
</>};
const _family_ties_drawback = {title: "Family Ties (Drawback)", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="family-ties-drawback" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="family-ties-drawback">Family Ties (Drawback)</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="family-ties-drawback-benefit">Your family is extremely important to you, and you feel disheartened when you can't do what they ask. When a family member makes a request of you, you must fulfill that request or take a -2 penalty on all Wisdom- and Charisma-based ability checks and skill checks until you either do what was requested or succeed at a DC 20 Will saving throw, which you can attempt once per day at the start of each day. You can't take this drawback if you have no family. If you ever lose your family or lose contact with your family, exchange this drawback for the Doubt drawback.</Pair>
</Ability>
</>};
const _fey_taken = {title: "Fey-Taken", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="fey-taken" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="fey-taken">Fey-Taken</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="fey-taken-benefit">As a child, you were whisked away to the First World by mischievous fey for a time. When you returned, you were ever after considered odd and distant. You long to return there, and find the mortal world dull and at times revolting, so you do not eat as you should and do not question strange visions. You take a -2 penalty on saving throws against disease, illusions, and poison of all kinds, as well as against the spells, spell-like abilities, and supernatural abilities of fey.</Pair>
</Ability>
</>};
const _forgetful = {title: "Forgetful", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="forgetful" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="forgetful">Forgetful</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="forgetful-benefit">You are easily distracted and prone to forgetting important things. Whenever you leave a location you have been at for longer than 1 hour, you must attempt a DC 10 Wisdom check. If you fail, you leave behind one random mundane item (a purse of money counts as an item).</Pair>
</Ability>
</>};
const _foul_brand = {title: "Foul Brand", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption</Link></p>
<Ability id="foul-brand" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="foul-brand">Foul Brand</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="foul-brand-benefit">You have the symbol of an evil deity burned into your flesh. If the symbol is on your hand, you take a -1 penalty on Disable Device, Disguise, and Sleight of Hand checks. If the symbol is on your face, you take a -2 penalty on Bluff, Diplomacy, and Disguise checks. This does not count as a holy symbol for the purposes of a divine focus for spellcasting.</Pair>
</Ability>
</>};
const _guilty_fraud = {title: "Guilty Fraud", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="guilty-fraud" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="guilty-fraud">Guilty Fraud</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="guilty-fraud-benefit">You received something through trickery that you did not deserve, and your guilt for the misdeed distracts you from dangers around you. You take a -4 penalty on Bluff checks against creatures with an attitude toward you of indifferent or better.</Pair>
</Ability>
</>};
const _haunted = {title: "Haunted", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="haunted" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="haunted">Haunted</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="haunted-benefit">Something from your past - or a dark secret you presently hold - makes it difficult for you to ever be at peace, and your chronic worry that you might fall to evil influence has become a self-fulfilling prophecy. You take a -2 penalty on saves against spells with the evil descriptor.</Pair>
</Ability>
</>};
const _haunting_regret = {title: "Haunting Regret", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="haunting-regret" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="haunting-regret">Haunting Regret</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="haunting-regret-benefit">When you were young, a relative with whom you had frequently quarreled passed away where his or her soul could not rest. Now, the unquiet spirit appears around you at inconvenient times, distracting you with regret for being unable to help. You take a -2 penalty on saving throws against the distraction ability of swarms and mind-affecting effects and on <Link to="/rule/concentration">concentration</Link> checks.</Pair>
</Ability>
</>};
const _headstrong = {title: "Headstrong", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="headstrong" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="headstrong">Headstrong</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="headstrong-benefit">You feel compelled to correct every action and argument that contradicts your worldview. Whenever you witness an action or hear an argument that contradicts your alignment, you must attempt to stop or correct that action or argument. If you either don't try to stop it or fail in your attempt to stop it (as adjudicated by the GM), you are shaken for 1 hour.</Pair>
</Ability>
</>};
const _hedonistic = {title: "Hedonistic", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="hedonistic" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="hedonistic">Hedonistic</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="hedonistic-benefit">You are a creature of pleasure and comfort. Whenever you spend a day without gaining reward or treasure (at least 10 or more gold pieces) or spending an hour on entertainment or pleasure, attempt a DC 20 Fortitude save at the end of that day. If you fail, you begin the next day fatigued. This fatigue lasts 4 hours, or until you receive a reward or sufficient entertainment or pleasure.</Pair>
</Ability>
</>};
const _helpless = {title: "Helpless", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="helpless" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="helpless">Helpless</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="helpless-benefit">You once stood helpless as great harm befell a loved one, and that paralysis sometimes returns when an ally is in a dire position. The first time per combat encounter that an ally within 30 feet falls unconscious or dies as the result of an attack, you are dazed until the end of your next turn.</Pair>
</Ability>
</>};
const _impatient = {title: "Impatient", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="impatient" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="impatient">Impatient</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="impatient-benefit">You love leaping into battle at the earliest opportunity, and it frustrates you to wait for others to act. You can't delay or ready actions, and if you are the last of your allies to act in a round of combat, you take a -1 penalty on ability checks, attack rolls, saving throws, and skill checks.</Pair>
</Ability>
</>};
const _infamous = {title: "Infamous", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="infamous" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="infamous">Infamous</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="infamous-benefit">You were publicly linked, truthfully or not, to a crime of significant infamy. You draw attention wherever you go and risk imprisonment or worse in the jurisdiction where the crime was committed. You and your apparent allies take a -4 penalty on Diplomacy checks to interact with law-abiding citizens (except enemies of the authority that accused you).</Pair>
</Ability>
</>};
const _information_overload = {title: "Information Overload", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="information-overload" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="information-overload">Information Overload</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="information-overload-benefit">You have had access to thousands of spy reports, many of which turned out to be based on faulty deductions or even intentionally false stories spread by opposed spy groups. At this point, you have been exposed to false knowledge as much as accurate information, and you can't always remember which is which. You take a -2 penalty on all Knowledge checks, and if you fail a Knowledge check by 5 or more, you can recall information that is diametrically opposed to the truth.</Pair>
</Ability>
</>};
const _insatiable = {title: "Insatiable", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="insatiable" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="insatiable">Insatiable</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="insatiable-benefit">You have become so accustomed to binging on the finer things in life that you find going without such excess particularly strenuous. Goods and services cost you 10% more (and can't be paid for by allies), and you need twice as much food and liquid as normal for the purposes of preventing starvation and thirst.</Pair>
</Ability>
</>};
const _lonely = {title: "Lonely", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="lonely" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="lonely">Lonely</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="lonely-benefit">You are far too easily convinced of the friendly intentions of others. You take a -2 penalty on Sense Motive checks and on Perception checks to see through disguises, and on saving throws against charm spells and spell-like abilities.</Pair>
</Ability>
</>};
const _loner = {title: "Loner", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="loner" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="loner">Loner</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="loner-benefit">Raised by pirates, bandits, or other troublemakers unwilling to stick out their necks for you, you are accustomed to operating on your own. The presence of allies can easily become a distraction to you, and you do your best to keep them out of your space. You take a -1 penalty to AC and on attack rolls while adjacent to allies or when taking the aid another action.</Pair>
</Ability>
</>};
const _lovesick = {title: "Lovesick", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="lovesick" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="lovesick">Lovesick</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="lovesick-benefit">Your love for another occupies your every thought, and you become despondent when you are away from that person. The person is chosen by your GM (with consideration to your roll on the Romantic Relationships table if you used the background generator). At the start of each day, if you are away from this person you take a -2 penalty on initiative checks and Perception checks. If you ever lose or fall out of love with this person, exchange this drawback for the Doubt drawback.</Pair>
</Ability>
</>};
const _magical_klutz = {title: "Magical Klutz", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="magical-klutz" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="magical-klutz">Magical Klutz</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="magical-klutz-benefit">You were born in a place with a plethora of strangely interacting magic, such as Geb, the Mana Wastes, or Nex, and magic is dangerously eager to surge into action around you. You roll twice and take the lower result on Use Magic Device checks to activate items blindly and on Reflex saving throws against effects produced by magic items.</Pair>
</Ability>
</>};
const _mark_of_slavery = {title: "Mark of Slavery", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="mark-of-slavery" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="mark-of-slavery">Mark of Slavery</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="mark-of-slavery-benefit">You were enslaved for part or all of your youth, and marked as such with a brand or tattoo that still reminds you of how you were punished whenever you failed to do what you should. Whenever you fail a skill check, you take a -2 penalty on any skill check or attack roll you attempt before the end of your next turn unless it is a part of retrying the failed skill check.</Pair>
</Ability>
</>};
const _meticulous = {title: "Meticulous", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="meticulous" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="meticulous">Meticulous</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="meticulous-benefit">You plan and prepare everything in detail, and aren't good at improvising when things don't go as planned. You take a -2 penalty on skill checks for skills with which you're untrained.</Pair>
</Ability>
</>};
const _misbegotten = {title: "Misbegotten", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="misbegotten" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="misbegotten">Misbegotten</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="misbegotten-benefit">Whether due to the influence of malign magic, disease, or the scorn of the gods, you were born with a troublesome deformity that interferes with your movement. You take a -2 penalty on all Dexterity-based skill checks.</Pair>
</Ability>
</>};
const _naive = {title: "Naive", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="naive" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="naive">Naive</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="naive-benefit">Your perception that everyone is innately good does not bode well in the heat of battle, when less scrupulous foes might take advantage of your misguided optimism. You take a -2 penalty to AC against attacks with improvised weapons and a -2 penalty to CMD against dirty trick combat maneuvers.</Pair>
</Ability>
</>};
const _nervous = {title: "Nervous", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="nervous" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="nervous">Nervous</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="nervous-benefit">Living under constant threat of death or worse from your oppressive government, your nerves have frayed terribly. Whenever you take 10 on an ability check or skill check that imparts any penalty for failure (aside from wasted time), you treat your check as if you had rolled an 8 instead of a 10, even if you are able to take your time.</Pair>
</Ability>
</>};
const _oblivious = {title: "Oblivious", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="oblivious" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="oblivious">Oblivious</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="oblivious-benefit">Whether because you are an avid daydreamer or you are accustomed to everything being handed to you and spelled out for your benefit, you pay little attention to your surroundings and other people. You take a -2 penalty on Sense Motive and sight-based Perception checks.</Pair>
</Ability>
</>};
const _occult_bargain = {title: "Occult Bargain", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="occult-bargain" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="occult-bargain">Occult Bargain</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="occult-bargain-benefit">You draw magical power from a source, such as a mysterious eidolon, shame-filled phantom, or First World patron, who insists that its identity remains secret. You take a -1 penalty on <Link to="/rule/concentration">concentration</Link> checks, and you must invoke the entity's name by word or text each day or be unable to regain spell slots that day. You must be able to cast 0-level and 1st-level spells as a class feature to select this drawback.</Pair>
</Ability>
</>};
const _oppressive_expectations = {title: "Oppressive Expectations", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="oppressive-expectations" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="oppressive-expectations">Oppressive Expectations</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="oppressive-expectations-benefit">You were raised with the belief that your family was special, and that those of your status always succeed at whatever they do. Due to your concern about upholding the family name and your memories of the consequences for disappointing them (such as violence or unsettling disapproval), you are easily frustrated. When you fail at a skill check, you take a -2 penalty on checks with that skill until you succeed or until you fail at a different skill check, whichever comes first.</Pair>
</Ability>
</>};
const _overprotective = {title: "Overprotective", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="overprotective" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="overprotective">Overprotective</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="overprotective-benefit">In your youth, you saw a younger friend or loved one suffer a grievous injury or die, and you blamed yourself for not having been there to help, even if there was nothing you could have done. If one of your allies should fall unconscious from hit point damage, you take a -2 penalty on attack rolls and skill checks as long as you are farther than 10 feet away from your fallen ally.</Pair>
</Ability>
</>};
const _paranoid = {title: "Paranoid", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="paranoid" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="paranoid">Paranoid</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="paranoid-benefit">You believe that someone or something is always out to get you, so you have a hard time truly trusting anyone. Anyone who attempts an aid another action of any type to assist you must succeed at a DC 15 check instead of the normal DC 10 check.</Pair>
</Ability>
</>};
const _power_hungry = {title: "Power-Hungry", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="power-hungry" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="power-hungry">Power-Hungry</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="power-hungry-benefit">You're addicted to power. You take a -2 penalty on Will saving throws against charm and compulsion effects if the creature creating the effect promises wealth or power.</Pair>
</Ability>
</>};
const _pride = {title: "Pride", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="pride" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="pride">Pride</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="pride-benefit">You can't abide challenges to your dignity, authority, or honor. When someone threatens, accuses, or challenges you, you take a -2 penalty on Diplomacy checks and Sense Motive checks involving that creature until the creature apologizes to you.</Pair>
</Ability>
</>};
const _provincial = {title: "Provincial", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="provincial" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="provincial">Provincial</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="provincial-benefit">You have only one way of looking at things: the right way. You take a -2 penalty on Diplomacy checks and Sense Motive checks made against all creatures whose religion or alignment differs from your own.</Pair>
</Ability>
</>};
const _righteous_indignation = {title: "Righteous Indignation", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="righteous-indignation" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="righteous-indignation">Righteous Indignation</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="righteous-indignation-benefit">You have difficulty controlling your temper after living in inhuman conditions in Cheliax, Geb, Irrisen, Katapesh, or Qadira. Whenever a foe provokes an attack of opportunity from you, you must take it unless you succeed at a Will save against a DC equal to 10 + your level. You take a -1 penalty on Will saving throws against spells with the emotion descriptor that do not also have the fear descriptor.</Pair>
</Ability>
</>};
const _scarred = {title: "Scarred", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="scarred" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="scarred">Scarred</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="scarred-benefit">An injury left you horribly, visibly scarred, making it more difficult for you to hide your true face, and also making most people distrustful of you merely due to your appearance. You take a -5 penalty on Disguise checks and a -2 penalty on Bluff checks.</Pair>
</Ability>
</>};
const _secret_shame = {title: "Secret Shame", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="secret-shame" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="secret-shame">Secret Shame</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="secret-shame-benefit">You have a terrible fear of the public at large, a group, or an important person (such as your order of knights, your liege lord, your family, or your lover) learning a shameful truth about you. You take a -1 penalty on saving throws against fear effects, and the DC of any Intimidate check to demoralize you is reduced by 1. If you would normally be immune to fear, you do not take these penalties, but instead lose your immunity to fear (regardless of its source).</Pair>
</Ability>
</>};
const _self_doubting = {title: "Self-Doubting", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="self-doubting" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="self-doubting">Self-Doubting</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="self-doubting-benefit">Your ever-present fear of failure causes a downward spiral. The first time each day that you fail a Will saving throw or skill check, you take a -2 penalty on the next Will saving throw or skill check of that kind.</Pair>
</Ability>
</>};
const _sentimental = {title: "Sentimental", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="sentimental" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="sentimental">Sentimental</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="sentimental-benefit">You are sentimental, and your thoughts often stray to the past at inappropriate times. You take a -2 penalty on Perception checks to avoid being surprised and on Reflex saving throws to avoid traps or hazards.</Pair>
</Ability>
</>};
const _shadow_scarred = {title: "Shadow-Scarred", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="shadow-scarred" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="shadow-scarred">Shadow-Scarred</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="shadow-scarred-benefit">You were touched by terrible horrors that live in the darkness just outside the human sphere, such as shadow-beasts or aberrations linked to the Dark Tapestry, and feel your life-force ebb away ever so slightly whenever you return to the shadows. Whenever you are in an area of dim light or darkness, you take a -1 penalty on saving throws.</Pair>
</Ability>
</>};
const _sheltered = {title: "Sheltered", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="sheltered" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="sheltered">Sheltered</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="sheltered-benefit">Brought up in courtly environments and knowing little of violence, you have trouble getting accustomed to it. Whenever you have less than half your maximum hit points, you are shaken.</Pair>
</Ability>
</>};
const _sleepy = {title: "Sleepy", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="sleepy" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="sleepy">Sleepy</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="sleepy-benefit">You must sleep or rest for at least 12 hours each night to get the benefits of a full night's rest. You take a -2 penalty on saving throws against sleep effects.</Pair>
</Ability>
</>};
const _spooked = {title: "Spooked", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="spooked" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="spooked">Spooked</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="spooked-benefit">You had a traumatic experience with a spirit at a young age that colors your reactions to such creatures even to this day. Whenever you perceive a fey, outsider, or undead from within 60 feet, you become shaken for 1d4 rounds unless you succeed at a Will save with a DC equal to 15 + the creature's Charisma modifier. Immunity to fear effects does not allow you to forgo this saving throw; even if you are immune to fear, you must roll the Will saving throw for this drawback when applicable, albeit with a +4 bonus.</Pair>
</Ability>
</>};
const _stigmatized = {title: "Stigmatized", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="stigmatized" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="stigmatized">Stigmatized</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="stigmatized-benefit">You were kept at the periphery of society for a long period of time, so that even when you are among strangers in a new place, you feel the weight of your missing socialization. You take a -3 penalty on Diplomacy checks to gather information or improve a creature's attitude.</Pair>
</Ability>
</>};
const _superstitious_drawback = {title: "Superstitious (Drawback)", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="superstitious-drawback" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="superstitious-drawback">Superstitious (Drawback)</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="superstitious-drawback-benefit">Raised around those who regarded most magic as innately dangerous, no matter the source, you cannot bring yourself to submit to magic willingly even for your own good. Whenever you are affected with a harmless spell, there is a 50% chance that you must roll a saving throw to prevent that effect, even if it would benefit you. This does not apply to harmless spells cast by you upon yourself.</Pair>
</Ability>
</>};
const _tainted_spirit = {title: "Tainted Spirit", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="tainted-spirit" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="tainted-spirit">Tainted Spirit</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="tainted-spirit-benefit">When you were a child, a parent or other person with authority over you made a minor pact with a fiend on your behalf, stealing some of your vitality in exchange for a minor boon. At the end of any combat, you must attempt a Fortitude saving throw. The DC is 10 + the number of rounds you acted in combat. If you fail this save, you become fatigued for 10 minutes per round you acted during that encounter.</Pair>
</Ability>
</>};
const _too_many_secrets = {title: "Too Many Secrets", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="too-many-secrets" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="too-many-secrets">Too Many Secrets</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="too-many-secrets-benefit">You've told too many lies, and made up too many cover stories, and now even you can't keep it all straight. The lies have become reality to you, which makes it difficult to think of a new convincing lie. You hesitate at crucial moments when trying to fool those around you, and likely shouldn't be in the field at all anymore. You take a -2 penalty on Bluff checks and saving throws against illusions.</Pair>
</Ability>
</>};
const _umbral_unmasking = {title: "Umbral Unmasking", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption</Link></p>
<Ability id="umbral-unmasking" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="umbral-unmasking">Umbral Unmasking</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="umbral-unmasking-benefit">You cast no shadow whatsoever, or the shadow you do have is monstrous. Under normal lighted conditions, this is not hard to observe - but uncommon to notice. Creatures that succeed at a DC 15 Wisdom check notice it plainly (an additional Perception check may be required based on environmental conditions). This telltale sign of wickedness cannot be concealed by <Link to="/spell/misdirection">misdirection</Link>, <Link to="/spell/nondetection">nondetection</Link>, or illusions, except those that also affect shadows (such as <Link to="/spell/invisibility">invisibility</Link>).</Pair>
</Ability>
</>};
const _unlearned = {title: "Unlearned", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="unlearned" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="unlearned">Unlearned</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="unlearned-benefit">You have always had difficulty learning and retaining information, and know very little about the world beyond the obvious and what pertains to your profession. Choose one Knowledge skill. You cannot attempt untrained Knowledge checks with any other Knowledge skills, even if the check's DC is 10 or lower. If you have access to a library that covers a specific Knowledge skill, you may attempt an untrained Knowledge check with a -2 penalty.</Pair>
</Ability>
</>};
const _vain = {title: "Vain", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="vain" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="vain">Vain</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="vain-benefit">You are sensitive about the way others perceive you. Whenever you fail an opposed Charisma-based check, you take a -2 penalty on all Charisma-based checks for the next 24 hours.</Pair>
</Ability>
</>};
const _vainglory = {title: "Vainglory", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="vainglory" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="vainglory">Vainglory</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="vainglory-benefit">You compulsively seek recognition for your deeds, making it hard to act with subtlety. You take a -1 penalty on Bluff, Disguise, and Stealth checks, and the save DC of any illusion you create is 1 lower than normal.</Pair>
</Ability>
</>};
const _warded_against_nature = {title: "Warded Against Nature", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption</Link></p>
<Ability id="warded-against-nature" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="warded-against-nature">Warded Against Nature</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="warded-against-nature-benefit">Animals do not willingly approach within 30 feet of you, unless you or the animal's master succeeds at a DC 20 Handle Animal, Ride, or <Link to="/ability/wild_empathy">wild empathy</Link> check. Animal companions, familiars, and mounts granted by your class abilities are immune to this effect.</Pair>
</Ability>
</>};
const _xenophobic = {title: "Xenophobic", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="xenophobic" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="xenophobic">Xenophobic</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="xenophobic-benefit">You have a hard time understanding and trusting those with unfamiliar ways and appearances. You take a -2 penalty on Diplomacy and Sense Motive checks made against creatures of a different race or from a different culture.</Pair>
</Ability>
</>};
const _zealous_drawback = {title: "Zealous (Drawback)", topLink: ["Drawback Traits","main/traits_drawback"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="zealous-drawback" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="zealous-drawback">Zealous (Drawback)</Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="zealous-drawback-benefit">You are fanatical in your beliefs, ruled by emotion over reason. When you attack a creature that you know worships a different religion than you do, you take a -5 penalty on the attack roll and a +2 trait bonus on the damage roll with your first attack.</Pair>
</Ability>
</>};
const _the_thrush = {title: "The Thrush", topLink: ["Cosmic Traits","main/traits_cosmic"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 37</Link></p>
<Ability id="the-thrush" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="the-thrush">The Thrush</Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 18 Kuthona and 20 Abadius</Pair>
<Pair single="benefit" id="the-thrush-benefit">Like the curious songbirds that welcome weary travelers, your voice rings with sweet clarity. You gain a +1 bonus on Perform (sing) checks, and Perform (sing) becomes a class skill for you.</Pair>
</Ability>
</>};
const _the_lantern_bearer = {title: "The Lantern Bearer", topLink: ["Cosmic Traits","main/traits_cosmic"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 37</Link></p>
<Ability id="the-lantern-bearer" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="the-lantern-bearer">The Lantern Bearer</Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 21 Abadius and 16 Calistril</Pair>
<Pair single="benefit" id="the-lantern-bearer-benefit">You are bathed in the light of the Lantern Bearer, who guides the Caravan through the darkest nights. You can cast <Link to="/spell/light">light</Link> three times per day as a spell-like ability, treating your character level as your caster level.</Pair>
</Ability>
</>};
const _the_newlyweds = {title: "The Newlyweds", topLink: ["Cosmic Traits","main/traits_cosmic"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 37</Link></p>
<Ability id="the-newlyweds" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="the-newlyweds">The Newlyweds</Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 17 Calistril and 11 Pharast</Pair>
<Pair single="benefit" id="the-newlyweds-benefit">Your sign is of two lovers, intertwined as one. You gain a +2 bonus on Diplomacy checks to influence those who might be romantically attracted to you, and Diplomacy becomes a class skill for you.</Pair>
</Ability>
</>};
const _the_bridge = {title: "The Bridge", topLink: ["Cosmic Traits","main/traits_cosmic"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 37</Link></p>
<Ability id="the-bridge" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="the-bridge">The Bridge</Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 12 Pharast and 18 Gozran</Pair>
<Pair single="benefit" id="the-bridge-benefit">The Bridge spans the rushing waters that separate the darkness of winter from the warmth of spring. You gain a +1 trait bonus on saving throws against spells and effects with the cold or darkness descriptors.</Pair>
</Ability>
</>};
const _the_daughter = {title: "The Daughter", topLink: ["Cosmic Traits","main/traits_cosmic"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 37</Link></p>
<Ability id="the-daughter" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="the-daughter">The Daughter</Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 19 Gozran and 13 Desnus</Pair>
<Pair single="benefit" id="the-daughter-benefit">You are filled with the light-hearted joy of the Daughter, who dances her way into springtime. Every creature within 10 feet of you adds +2 moral bonuses to the DCs of checks to demoralize them.</Pair>
</Ability>
</>};
const _the_rider = {title: "The Rider", topLink: ["Cosmic Traits","main/traits_cosmic"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 37</Link></p>
<Ability id="the-rider" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="the-rider">The Rider</Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 14 Desnus and 20 Sarenith</Pair>
<Pair single="benefit" id="the-rider-benefit">You are born under the auspice of the mounted caravan guard, whose very presence deters danger. Once per day, when you succeed at a Ride check, you can attempt an immediate Intimidate check against the nearest foe. If you fail this check, the DC of your next Intimidate check against that opponent does not increase (as it normally would).</Pair>
</Ability>
</>};
const _the_patriarch = {title: "The Patriarch", topLink: ["Cosmic Traits","main/traits_cosmic"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 37</Link></p>
<Ability id="the-patriarch" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="the-patriarch">The Patriarch</Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 21 Sarenith and 20 Erastus</Pair>
<Pair single="benefit" id="the-patriarch-benefit">Like the father of the Cosmic Caravan, you have an innate sense of direction. Three times per day, you can use <Link to="/spell/know_direction">know direction</Link> as a spell-like ability, treating your character level as your caster level.</Pair>
</Ability>
</>};
const _the_wagon = {title: "The Wagon", topLink: ["Cosmic Traits","main/traits_cosmic"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 37</Link></p>
<Ability id="the-wagon" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="the-wagon">The Wagon</Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 21 Erastus and 10 Arodus</Pair>
<Pair single="benefit" id="the-wagon-benefit">Like the vehicle that conveys travelers across the heavens, you are blessed with extraordinary movement capabilities. Once per day as a swift action, you can increase you move speed by 10 feet for 1 round.</Pair>
</Ability>
</>};
const _the_pack = {title: "The Pack", topLink: ["Cosmic Traits","main/traits_cosmic"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 37</Link></p>
<Ability id="the-pack" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="the-pack">The Pack</Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 11 Arodus and 16 Rova</Pair>
<Pair single="benefit" id="the-pack-benefit">You are blessed by the beasts that trail the caravan, which represent protection in numbers. You gain a +2 trait bonus on Handle Animal checks to teach animals tricks, and Handle Animal becomes a class skill for you.</Pair>
</Ability>
</>};
const _the_mother = {title: "The Mother", topLink: ["Cosmic Traits","main/traits_cosmic"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 37</Link></p>
<Ability id="the-mother" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="the-mother">The Mother</Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 17 Rova and 30 Lamashan</Pair>
<Pair single="benefit" id="the-mother-benefit">Granting warmth and comfort against the forbidding cold of the wilderness, the Mother is the heart of the Caravan. Allies within 10 feet of you gain a +1 morale bonus on saving throws to resist fear effects. This trait functions only while you are conscious.</Pair>
</Ability>
</>};
const _the_star_gazer = {title: "The Star Gazer", topLink: ["Cosmic Traits","main/traits_cosmic"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 37</Link></p>
<Ability id="the-star-gazer" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="the-star-gazer">The Star Gazer</Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 31 Lamashan and 20 Neth</Pair>
<Pair single="benefit" id="the-star-gazer-benefit">With his head in the clouds, the Stargazer sees far-off events, but misses the pitfalls directly before him. When rolling initiative as part of a surprise round, you take a -2 penalty on initiative checks, but you gain a +2 luck bonus to AC during all surprise rounds.</Pair>
</Ability>
</>};
const _the_stranger = {title: "The Stranger", topLink: ["Cosmic Traits","main/traits_cosmic"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 37</Link></p>
<Ability id="the-stranger" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="the-stranger">The Stranger</Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 21 Neth and 29 Neth</Pair>
<Pair single="benefit" id="the-stranger-benefit">Like the lone traveler that walks alongside the caravan for but a brief while, you have a way with strangers. You gain a +1 trait bonus on Diplomacy and Knowledge (local) checks to gather information. Additionally, either Diplomacy or Knowledge (local) becomes a class skill for you.</Pair>
</Ability>
</>};
const _the_follower = {title: "The Follower", topLink: ["Cosmic Traits","main/traits_cosmic"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 37</Link></p>
<Ability id="the-follower" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="the-follower">The Follower</Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 30 Neth and 17 Kuthona</Pair>
<Pair single="benefit" id="the-follower-benefit">You are born under the sign of the dark figure that trails the Caravan - the specter of death itself. You receive a +2 bonus on saving throws against death effects. All allies within 10 feet of you take a -1 penalty on saving throws against death effects.</Pair>
</Ability>
</>};
export default {ancient_explorer:_ancient_explorer,barroom_talespinner:_barroom_talespinner,besmaras_blessing:_besmaras_blessing,buccaneers_blood:_buccaneers_blood,dockside_brawler:_dockside_brawler,eye_for_plunder:_eye_for_plunder,ilizmagorti_native:_ilizmagorti_native,peg_leg:_peg_leg,ships_surgeon:_ships_surgeon,touched_by_the_sea:_touched_by_the_sea,driven_by_guilt:_driven_by_guilt,enduring_stoicism:_enduring_stoicism,foe_of_the_strange:_foe_of_the_strange,formerly_mind_swapped:_formerly_mind_swapped,methodical_mind:_methodical_mind,pugnacious:_pugnacious,ritualistic:_ritualistic,sensitive_mind:_sensitive_mind,true_devotion:_true_devotion,twitchy:_twitchy,the_artisan:_the_artisan,the_lawbringer:_the_lawbringer,the_optimist:_the_optimist,the_outsider:_the_outsider,the_pessimist:_the_pessimist,the_reclaimer:_the_reclaimer,the_snoop:_the_snoop,the_word:_the_word,athletic_champion:_athletic_champion,child_of_oppara:_child_of_oppara,disgraced_noble:_disgraced_noble,rising_star:_rising_star,senatorial_hopeful:_senatorial_hopeful,taldan_patriot:_taldan_patriot,young_reformer:_young_reformer,chance_encounter:_chance_encounter,child_of_the_crusades_wotr:_child_of_the_crusades_wotr,exposed_to_awfulness:_exposed_to_awfulness,riftwarden_orphan:_riftwarden_orphan,stolen_fury:_stolen_fury,touched_by_divinity:_touched_by_divinity,black_sheep:_black_sheep,favored_son_or_daughter:_favored_son_or_daughter,outlander:_outlander,augmented_disguise:_augmented_disguise,dealmaker:_dealmaker,extremely_fashionable:_extremely_fashionable,heirloom_weapon:_heirloom_weapon,improvisational_equipment:_improvisational_equipment,iron_liver:_iron_liver,power_of_suggestion:_power_of_suggestion,prehensile_whip:_prehensile_whip,quick_learner:_quick_learner,rough_and_ready:_rough_and_ready,stage_magic:_stage_magic,stealthy_escape:_stealthy_escape,thrown_together_fashion:_thrown_together_fashion,well_provisioned_adventurer:_well_provisioned_adventurer,betrayal_of_trust:_betrayal_of_trust,blood_resonance:_blood_resonance,family_resemblance:_family_resemblance,family_trade:_family_trade,honor_bound:_honor_bound,rivalry:_rivalry,tight_bonds:_tight_bonds,black_as_night:_black_as_night,blessed_mutt:_blessed_mutt,burst_of_speed:_burst_of_speed,clamber:_clamber,clever_mount:_clever_mount,cunning_breed:_cunning_breed,fleet_of_foot:_fleet_of_foot,nauseating_spit:_nauseating_spit,relentless_fortitude:_relentless_fortitude,running_pig:_running_pig,stalwart_elk:_stalwart_elk,water_trained:_water_trained,weather_beaten:_weather_beaten,a_shining_beacon:_a_shining_beacon,accident_resistant:_accident_resistant,adherent_of_ancient_osirion:_adherent_of_ancient_osirion,adventurous_imbiber:_adventurous_imbiber,affinity_for_the_elements:_affinity_for_the_elements,agent_of_chance:_agent_of_chance,alluring:_alluring,always_threatening:_always_threatening,ambassador:_ambassador,ancestors_blade:_ancestors_blade,andolettas_consolation:_andolettas_consolation,angradds_flame:_angradds_flame,angradds_valor:_angradds_valor,arcane_depth:_arcane_depth,avowed_inspiration:_avowed_inspiration,backstabber:_backstabber,battlefield_caster:_battlefield_caster,battlefield_surgeon:_battlefield_surgeon,besmaras_name:_besmaras_name,besmaras_strength:_besmaras_strength,bestial_wrath:_bestial_wrath,blade_of_mercy:_blade_of_mercy,blessed_orphan:_blessed_orphan,blessing_of_the_feast:_blessing_of_the_feast,blind_zeal:_blind_zeal,bloody_vengeance:_bloody_vengeance,brighs_insight:_brighs_insight,broken_mind:_broken_mind,calistrian_courtesan:_calistrian_courtesan,call_for_help:_call_for_help,centered:_centered,chaldiras_luck:_chaldiras_luck,cheat_death:_cheat_death,child_of_nature:_child_of_nature,cleansing_light:_cleansing_light,cleansing_the_twisted:_cleansing_the_twisted,clockwork_surgeon:_clockwork_surgeon,contract_master:_contract_master,corpse_cannibal:_corpse_cannibal,corpse_hunter:_corpse_hunter,covenant_of_abaddon:_covenant_of_abaddon,dawn_renewal:_dawn_renewal,deadeye_bowman:_deadeye_bowman,deathspeaker:_deathspeaker,deck_fighter:_deck_fighter,deep_wounding:_deep_wounding,defensive_strategist:_defensive_strategist,deformed:_deformed,demon_hunter:_demon_hunter,demonic_persuasion:_demonic_persuasion,demoralizing_presence:_demoralizing_presence,denial_of_fate:_denial_of_fate,destructive_blows:_destructive_blows,devotee_of_a_dead_god:_devotee_of_a_dead_god,diseased_heart:_diseased_heart,divine_warrior:_divine_warrior,dragon_tracker:_dragon_tracker,dragonslayer:_dragonslayer,ear_for_music:_ear_for_music,elemental_resilience:_elemental_resilience,elven_polytheist:_elven_polytheist,empty_heart_full_heart:_empty_heart_full_heart,empyreal_focus:_empyreal_focus,enchanting_conniver:_enchanting_conniver,enemy_of_delusion:_enemy_of_delusion,envoy_of_healing:_envoy_of_healing,erastils_speaker:_erastils_speaker,eternal_understanding:_eternal_understanding,expert_boarder:_expert_boarder,extended_toil:_extended_toil,eye_for_quality:_eye_for_quality,eye_of_arqueros:_eye_of_arqueros,eye_of_the_father:_eye_of_the_father,eyes_and_ears_of_the_city:_eyes_and_ears_of_the_city,eyes_of_the_wild:_eyes_of_the_wild,faithful_arodenite:_faithful_arodenite,faithful_artist:_faithful_artist,fatal_trapper:_fatal_trapper,favored_prey:_favored_prey,fiendish_confidence:_fiendish_confidence,flame_of_the_dawnflower:_flame_of_the_dawnflower,flames_of_hell:_flames_of_hell,flounderer:_flounderer,folgrits_bounty:_folgrits_bounty,folgrits_mercy:_folgrits_mercy,follower_of_the_stars:_follower_of_the_stars,fortified_drinker:_fortified_drinker,frightening_speed:_frightening_speed,fruits_of_your_labor:_fruits_of_your_labor,furious_vengeance:_furious_vengeance,fury:_fury,gemstone_collector:_gemstone_collector,gifted_medium:_gifted_medium,good_dreams:_good_dreams,good_natured:_good_natured,gozrehs_sight:_gozrehs_sight,guardian_smite:_guardian_smite,guardian_of_the_forge:_guardian_of_the_forge,hatred_of_the_gods:_hatred_of_the_gods,holy_schemer:_holy_schemer,honey_tongued:_honey_tongued,honeyed_words:_honeyed_words,illuminator:_illuminator,inheritors_immunity:_inheritors_immunity,inner_beauty:_inner_beauty,inoculated:_inoculated,inspiring_leader:_inspiring_leader,intense_artist:_intense_artist,iron_grip:_iron_grip,know_the_land:_know_the_land,kuthite_caster:_kuthite_caster,lessons_of_chaldira:_lessons_of_chaldira,liars_tongue:_liars_tongue,light_sleeper:_light_sleeper,light_bringer:_light_bringer,living_bulwark:_living_bulwark,loreseeker:_loreseeker,lover_of_the_law:_lover_of_the_law,loyal_bond:_loyal_bond,magic_is_life:_magic_is_life,magics_might:_magics_might,mighty_protector:_mighty_protector,mischievous_smile:_mischievous_smile,mothers_rage:_mothers_rage,mothers_teeth:_mothers_teeth,natural_magic:_natural_magic,natural_philosopher:_natural_philosopher,nimble_fingers_keen_mind:_nimble_fingers_keen_mind,oathkeepers_vow:_oathkeepers_vow,opener_of_doors:_opener_of_doors,opportune_slayer:_opportune_slayer,opportunistic:_opportunistic,pain_is_pleasure:_pain_is_pleasure,patient_optimist:_patient_optimist,planar_wayfarer:_planar_wayfarer,poisonous_slayer:_poisonous_slayer,potent_concoctions:_potent_concoctions,practiced_deception:_practiced_deception,pristine_reputation:_pristine_reputation,propitiation:_propitiation,protective_faith:_protective_faith,provider:_provider,purity_of_faith:_purity_of_faith,reckless_luck:_reckless_luck,redeemed_by_ragathiel:_redeemed_by_ragathiel,regal_presence:_regal_presence,rejected_emperor:_rejected_emperor,relentless_duty:_relentless_duty,resigned:_resigned,resilient_martyr:_resilient_martyr,restless_hunger:_restless_hunger,river_freedom:_river_freedom,rousing_courage:_rousing_courage,sacred_avenger:_sacred_avenger,sacred_orienteer:_sacred_orienteer,sacred_smasher:_sacred_smasher,scaly_ally:_scaly_ally,scarred_by_war:_scarred_by_war,searing_beacon:_searing_beacon,secret_knowledge:_secret_knowledge,seer_of_reality:_seer_of_reality,self_sacrifice:_self_sacrifice,sense_of_order:_sense_of_order,sensing_imperfection:_sensing_imperfection,serpentine_squeeze:_serpentine_squeeze,shadow_whispers:_shadow_whispers,shaper_of_reality:_shaper_of_reality,shared_ancestors:_shared_ancestors,shield_trained:_shield_trained,sovyrian_pantheist:_sovyrian_pantheist,spirit_guide:_spirit_guide,spirit_talker:_spirit_talker,split_second_defense:_split_second_defense,stabilizing_touch:_stabilizing_touch,starchild:_starchild,starlit_hexer:_starlit_hexer,steady_strength:_steady_strength,stoic_optimism:_stoic_optimism,strength_of_the_barghest:_strength_of_the_barghest,strength_of_the_sun:_strength_of_the_sun,strengths_fanfare:_strengths_fanfare,strict_judgment:_strict_judgment,strip_the_veils:_strip_the_veils,strong_heart:_strong_heart,strong_swimmer:_strong_swimmer,strong_willed:_strong_willed,structural_knowledge:_structural_knowledge,talented_organizer:_talented_organizer,the_city_protects:_the_city_protects,the_flexing_arm:_the_flexing_arm,thirst_for_knowledge:_thirst_for_knowledge,thrill_seeker_isg:_thrill_seeker_isg,toilcrafter:_toilcrafter,twisted_transformations:_twisted_transformations,undead_slayer_pharasma:_undead_slayer_pharasma,under_siege:_under_siege,underlying_principles:_underlying_principles,unhinged_mentality:_unhinged_mentality,unspeakable_bond:_unspeakable_bond,unswaying_love:_unswaying_love,veils_upon_veils:_veils_upon_veils,venom_drenched:_venom_drenched,veteran_of_battle:_veteran_of_battle,vindictive_strike:_vindictive_strike,voice_of_monsters:_voice_of_monsters,wasp_whisperer:_wasp_whisperer,wedded_bliss:_wedded_bliss,well_prepared:_well_prepared,wisdom_in_the_flesh:_wisdom_in_the_flesh,wise_teacher:_wise_teacher,wolf_cub:_wolf_cub,worthless_pawn:_worthless_pawn,wrecking_wrath:_wrecking_wrath,wronged:_wronged,anxious:_anxious,arcane_malignancies:_arcane_malignancies,attached:_attached,avarice:_avarice,betrayed_drawback:_betrayed_drawback,bitter:_bitter,burned:_burned,condescending:_condescending,cowardly:_cowardly,cruelty:_cruelty,dependent:_dependent,doubt:_doubt,empty_mask:_empty_mask,entomophobe:_entomophobe,envy:_envy,family_ties_drawback:_family_ties_drawback,fey_taken:_fey_taken,forgetful:_forgetful,foul_brand:_foul_brand,guilty_fraud:_guilty_fraud,haunted:_haunted,haunting_regret:_haunting_regret,headstrong:_headstrong,hedonistic:_hedonistic,helpless:_helpless,impatient:_impatient,infamous:_infamous,information_overload:_information_overload,insatiable:_insatiable,lonely:_lonely,loner:_loner,lovesick:_lovesick,magical_klutz:_magical_klutz,mark_of_slavery:_mark_of_slavery,meticulous:_meticulous,misbegotten:_misbegotten,naive:_naive,nervous:_nervous,oblivious:_oblivious,occult_bargain:_occult_bargain,oppressive_expectations:_oppressive_expectations,overprotective:_overprotective,paranoid:_paranoid,power_hungry:_power_hungry,pride:_pride,provincial:_provincial,righteous_indignation:_righteous_indignation,scarred:_scarred,secret_shame:_secret_shame,self_doubting:_self_doubting,sentimental:_sentimental,shadow_scarred:_shadow_scarred,sheltered:_sheltered,sleepy:_sleepy,spooked:_spooked,stigmatized:_stigmatized,superstitious_drawback:_superstitious_drawback,tainted_spirit:_tainted_spirit,too_many_secrets:_too_many_secrets,umbral_unmasking:_umbral_unmasking,unlearned:_unlearned,vain:_vain,vainglory:_vainglory,warded_against_nature:_warded_against_nature,xenophobic:_xenophobic,zealous_drawback:_zealous_drawback,the_thrush:_the_thrush,the_lantern_bearer:_the_lantern_bearer,the_newlyweds:_the_newlyweds,the_bridge:_the_bridge,the_daughter:_the_daughter,the_rider:_the_rider,the_patriarch:_the_patriarch,the_wagon:_the_wagon,the_pack:_the_pack,the_mother:_the_mother,the_star_gazer:_the_star_gazer,the_stranger:_the_stranger,the_follower:_the_follower}