import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
const _acadamae_neophyte = {title: "Acadamae Neophyte", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook</Link></p>
<Ability id="acadamae-neophyte" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="acadamae-neophyte">Acadamae Neophyte</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="acadamae-neophyte-flavor">You have shown a significant talent for the magical arts, gaining the attention of the famed Acadamae of Korvosa.</Pair>
<Pair single="benefit" id="acadamae-neophyte-benefit">Whenever you succeed at a <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> check to identify a creature and its special powers or vulnerabilities, you gain one additional piece of useful information (as if your skill check result had been 5 higher).</Pair>
</Ability>
</>};
const _aeromantic_affinity = {title: "Aeromantic Affinity", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 29</Link></p>
<Ability id="aeromantic-affinity" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="aeromantic-affinity">Aeromantic Affinity</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="aeromantic-affinity-flavor">One of your distant ancestors was either a powerful aeromancer or a creature of elemental air, granting you greater skill with air magic.</Pair>
<Pair single="benefit" id="aeromantic-affinity-benefit">You treat your caster level as 1 higher when casting spells with the air or electricity descriptor.</Pair>
</Ability>
</>};
const _air_touched = {title: "Air-Touched", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="air-touched" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="air-touched">Air-Touched</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="air-touched-flavor">You share an affinity with elemental air.</Pair>
<Pair single="benefit" id="air-touched-benefit">You gain DR 1/- against creatures and attacks with the air type.</Pair>
</Ability>
</>};
const _alchemical_adept = {title: "Alchemical Adept", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="alchemical-adept" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="alchemical-adept">Alchemical Adept</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="alchemical-adept-flavor">You are skilled in creating alchemical items.</Pair>
<Pair single="benefit" id="alchemical-adept-benefit">You gain a +2 trait bonus on all <Link to="/skill/craft">Craft</Link> (alchemy) checks made to craft alchemical items. Furthermore, when you fail a Craft (alchemy) check by 5 or more but don't roll a natural 1, you don't ruin any raw materials or have to pay that cost again.</Pair>
</Ability>
</>};
const _alchemical_intuition = {title: "Alchemical Intuition", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="alchemical-intuition" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="alchemical-intuition">Alchemical Intuition</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="alchemical-intuition-flavor">You are often struck with epiphanies about alchemical processes and substances.</Pair>
<Pair single="benefit" id="alchemical-intuition-benefit">Once per day as a <strong className="hl">free action</strong>, you may gain a trait bonus equal to your Charisma modifier (minimum 0) on a <Link to="/skill/craft">Craft</Link> (alchemy) check you make. You can apply this bonus after you roll the check, possibly turning a failure into a success.</Pair>
</Ability>
</>};
const _arcane_researcher = {title: "Arcane Researcher", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 29</Link></p>
<Ability id="arcane-researcher" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="arcane-researcher">Arcane Researcher</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="arcane-researcher-flavor">Your curiosity and ingenuity have driven you to experiment and push new boundaries, and you have a knack for tampering with magic.</Pair>
<Pair single="benefit" id="arcane-researcher-benefit">You gain a +4 trait bonus on <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> and <Link to="/skill/spellcraft">Spellcraft</Link> checks to research, modify, and create new spells.</Pair>
</Ability>
</>};
const _arcane_revitalization = {title: "Arcane Revitalization", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="arcane-revitalization" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="arcane-revitalization">Arcane Revitalization</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="arcane-revitalization-flavor">Your martial prowess can feed your arcane power.</Pair>
<Pair single="benefit" id="arcane-revitalization-benefit">Once per day, when you confirm a critical hit with a weapon attack, you regain 1 <em>arcane pool</em> point. You can't exceed your maximum number of <em>arcane pool</em> points.</Pair>
</Ability>
</>};
const _arcane_temper = {title: "Arcane Temper", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="arcane-temper" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="arcane-temper">Arcane Temper</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="arcane-temper-flavor">You have quick reactions and fierce concentration.</Pair>
<Pair single="benefit" id="arcane-temper-benefit">You gain a +1 trait bonus on concentration and initiative checks.</Pair>
</Ability>
</>};
const _ascendant_recollection = {title: "Ascendant Recollection", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="ascendant-recollection" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="ascendant-recollection">Ascendant Recollection</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="ascendant-recollection-flavor">Your first bloodline power is particularly strong.</Pair>
<Pair single="benefit" id="ascendant-recollection-benefit">Your sorcerer level is considered to be 1 level higher when determining the effects of your 1st-level bloodline power.</Pair>
</Ability>
</>};
const _balancers_banishing = {title: "Balancer's Banishing", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance</Link></p>
<Ability id="balancers-banishing" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="balancers-banishing">Balancer's Banishing</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="balancers-banishing-flavor">The interference of the Outer Planes in mortal affairs angers you to no end and invigorates the potency of your magic.</Pair>
<Pair single="benefit" id="balancers-banishing-benefit">As long as you remain neutral, whenever you cast a spell that would send an outsider with the chaotic, evil, good, or lawful subtype back to its home plane, the spell's saving throw DC increases by 1.</Pair>
</Ability>
</>};
const _beast_of_the_society = {title: "Beast of the Society", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link>, <Link to="/source/faction_guide">Faction Guide</Link></p>
<Ability id="beast-of-the-society" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="beast-of-the-society">Beast of the Society</Pair>
<Pair title="Type">Magic</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="beast-of-the-society-flavor">A druid at the Grand Lodge revealed to you secrets changing your form into that of an animal.</Pair>
<Pair single="benefit" id="beast-of-the-society-benefit">Whenever you use your <em>wild shape</em> class ability to turn yourself into a Small or Medium animal, the effect lasts for 2 hours per druid level instead of 1 hour per druid level.</Pair>
</Ability>
</>};
const _black_blood_heritage = {title: "Black Blood Heritage", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link></p>
<Ability id="black-blood-heritage" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="black-blood-heritage">Black Blood Heritage</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="black-blood-heritage-flavor">One of your ancestors came in contact with the mystical black blood, granting you an affinity for the substance.</Pair>
<Pair single="benefit" id="black-blood-heritage-benefit"><p>You are immune to the negative effects of <Link to="/magic-artifact/black_blood">black blood</Link>. Once per day as a <strong className="hl">swift action</strong>, you can channel the essence of <em>black blood,</em> increasing your effective caster level by 1 for any 1st- or 2nd-level necromancy spell you cast.</p>
<p>Your blood is pitch black as a result of this trait.</p>
</Pair>
</Ability>
</>};
const _bladed_magic = {title: "Bladed Magic", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="bladed-magic" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="bladed-magic">Bladed Magic</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="bladed-magic-flavor">You have an innate talent for using magical weaponry and those weapons capable of becoming magical.</Pair>
<Pair single="benefit" id="bladed-magic-benefit">You gain a +1 trait bonus on <Link to="/skill/craft">Craft</Link> checks made to craft magic or <Link to="/rule/masterwork_w">masterwork weapons</Link>. In addition, when you use your <em>arcane pool</em> class ability to grant a weapon an enhancement bonus, that bonus lasts for 2 minutes instead of 1.</Pair>
</Ability>
</>};
const _bountiful_herb_lore = {title: "Bountiful Herb-Lore", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2</Link></p>
<Ability id="bountiful-herb-lore" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="bountiful-herb-lore">Bountiful Herb-Lore</Pair>
<Pair title="Type">Magic</Pair>
<Pair title="Region" hl>Cassomir</Pair>
<Pair single="benefit" id="bountiful-herb-lore-benefit">Once per day after 10 minutes of foraging, you can sprinkle nutritious herbs into a magical consumable item (such as a potion of <Link to="/spell/cure_light_wounds">cure light wounds</Link>). If the item is consumed within 1 minute, it provides nourishment as if it were a normal meal to the creature that partakes of it.</Pair>
</Ability>
</>};
const _charlatan = {title: "Charlatan", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link></p>
<Ability id="charlatan" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="charlatan">Charlatan</Pair>
<Pair title="Type">Magic</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="charlatan-flavor">Your talent for illusion goes beyond a mere knack for figments and phantasms. You can actually channel spell energy into simple illusions that augment your attempts at deception.</Pair>
<Pair single="benefit" id="charlatan-benefit"><p>As a <strong className="hl">swift action</strong>, you may expend one prepared spell or spell slot to gain a bonus on the next Bluff check you make, provided the check takes place before the beginning of your next turn. The bonus on this check is equal to the level of the spell consumed.</p>
<p>You may use this ability 3 times per day. Only gnomes of nonlawful alignment may take this trait.</p>
</Pair>
</Ability>
</>};
const _child_of_the_moon = {title: "Child of the Moon", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon</Link></p>
<Ability id="child-of-the-moon" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="child-of-the-moon">Child of the Moon</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="child-of-the-moon-flavor">Your lunar gift becomes much more powerful when the moon is full.</Pair>
<Pair single="benefit" id="child-of-the-moon-benefit">Choose either <Link to="/skill/climb">Climb</Link>, <Link to="/skill/stealth">Stealth</Link>, or <Link to="/skill/swim">Swim</Link>. You gain a +1 trait bonus on checks made with the chosen skill. On dates during and after the first quarter of a lunar phase but before end of the last quarter (the half of the lunar cycle where the moon is fuller), this bonus increases to +2. During the full moon, this bonus increases to +4.</Pair>
</Ability>
</>};
const _classically_schooled = {title: "Classically Schooled", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="classically-schooled" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="classically-schooled">Classically Schooled</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="classically-schooled-flavor">Your apprenticeship or early education was particularly focused on the direct application of magic.</Pair>
<Pair single="benefit" id="classically-schooled-benefit">You gain a +1 trait bonus on <Link to="/skill/spellcraft">Spellcraft</Link> checks, and Spellcraft is always a class skill for you.</Pair>
</Ability>
</>};
const _coven_casting = {title: "Coven Casting", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven</Link></p>
<Ability id="coven-casting" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="coven-casting">Coven Casting</Pair>
<Pair title="Type">Magic</Pair>
<Pair title="Requirements" hl>Belong to a coven or magical cabal</Pair>
<Pair single="flavor" id="coven-casting-flavor">You have belonged to a coven or magical cabal and know how to coordinate your spellcasting with others.</Pair>
<Pair single="benefit" id="coven-casting-benefit">When within 30 feet of an allied spellcaster, you both gain a +2 trait bonus on <Link to="/rule/concentration">concentration</Link> checks.</Pair>
</Ability>
</>};
const _cross_disciplined = {title: "Cross-Disciplined", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="cross-disciplined" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="cross-disciplined">Cross-Disciplined</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="cross-disciplined-flavor">Your dabbling has granted you greater insight into the proper casting of certain spells.</Pair>
<Pair single="benefit" id="cross-disciplined-benefit">Once per day, you may cast a spell you have prepared that appears on both the magus and wizard spell lists as if your caster level were 1 level higher.</Pair>
</Ability>
</>};
const _cross_knowledge = {title: "Cross-Knowledge", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="cross-knowledge" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="cross-knowledge">Cross-Knowledge</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="cross-knowledge-benefit">Once per day, you may treat an extract you drink as if your caster level were 1 level higher as long as that extract appears on the wizard spell list and the alchemist list of formulae.</Pair>
</Ability>
</>};
const _dangerously_curious = {title: "Dangerously Curious", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="dangerously-curious" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="dangerously-curious">Dangerously Curious</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="dangerously-curious-flavor">You have always been intrigued by magic, possibly because you were the child of a magician or priest. You often snuck into your parent's laboratory or shrine to tinker with spell components and magic devices, and frequently caused quite a bit of damage and headaches for your parent as a result.</Pair>
<Pair single="benefit" id="dangerously-curious-benefit">You gain a +1 bonus on <Link to="/skill/use_magic_device">Use Magic Device</Link> checks, and Use Magic Device is always a class skill for you.</Pair>
</Ability>
</>};
const _deep_guardian = {title: "Deep Guardian", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/dwarves_of_golarion">Dwarves of Golarion</Link></p>
<Ability id="deep-guardian" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="deep-guardian">Deep Guardian</Pair>
<Pair title="Type">Magic</Pair>
<Pair title="Requirements" hl><Link to="/race/dwarf">Dwarf</Link></Pair>
<Pair single="flavor" id="deep-guardian-flavor">The subtle power of the deep places of the world flows within you, and grants you mastery of summoning beings of earth and stone.</Pair>
<Pair single="benefit" id="deep-guardian-benefit">Any creature you conjure with a summon spell that has the earth subtype or a burrow speed gains a +1 morale bonus on attack rolls and a +1 enhancement bonus to Armor Class for the duration of the spell that summoned it.</Pair>
</Ability>
</>};
const _demonblight_reistance = {title: "Demonblight Reistance", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes</Link></p>
<Ability id="demonblight-reistance" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="demonblight-reistance">Demonblight Reistance</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="demonblight-reistance-flavor">Your exposure to powerful energies instilled in you a supernatural resistance to diseases, particularly those of a demonic bent.</Pair>
<Pair single="benefit" id="demonblight-reistance-benefit">You gain a +3 trait bonus on saving throws against diseases you are exposed to while fighting one or more creatures of the <Link to="/subtype/demon">demon</Link> subtype, or while such a hostile creature is within 100 feet.</Pair>
</Ability>
</>};
const _desperate_focus = {title: "Desperate Focus", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link></p>
<Ability id="desperate-focus" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="desperate-focus">Desperate Focus</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="desperate-focus-flavor">You've often found yourself in situations where a lack of focus can lead to worse than a lost spell.</Pair>
<Pair single="benefit" id="desperate-focus-benefit">You gain a +2 trait bonus on <Link to="/rule/concentration">concentration</Link> checks.</Pair>
</Ability>
</>};
const _desperate_resolve = {title: "Desperate Resolve", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="desperate-resolve" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="desperate-resolve">Desperate Resolve</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="desperate-resolve-flavor">You are adept at casting spells even in the most precarious situations.</Pair>
<Pair single="benefit" id="desperate-resolve-benefit">You gain a +1 trait bonus on <Link to="/rule/concentration">concentration</Link> checks. This trait bonus increases to +4 when you are <Link to="/rule/grappled">grappled</Link>, pinned, in violent weather, or <Link to="/rule/entangled">entangled</Link>.</Pair>
</Ability>
</>};
const _desperate_speed = {title: "Desperate Speed", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="desperate-speed" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="desperate-speed">Desperate Speed</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="desperate-speed-flavor">Your eidolon excels at a movement type you do not possess.</Pair>
<Pair single="benefit" id="desperate-speed-benefit">Your eidolon receives a +5-foot enhancement bonus to one type of speed it has that you do not, such as a climb or swim speed. If your eidolon doesn't already possess such a mode of movement, you may apply this trait bonus later if it gains an evolution that grants it such a mode. Once this bonus is applied to a mode of movement, it can't be switched to another mode.</Pair>
</Ability>
</>};
const _diabolical_dabbler = {title: "Diabolical Dabbler", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link></p>
<Ability id="diabolical-dabbler" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="diabolical-dabbler">Diabolical Dabbler</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="diabolical-dabbler-benefit">Each <Link to="/template/fiendish">fiendish</Link> animal you conjure with any summon spell gains +1 hit point per hit die for the duration of the spell that summoned it.</Pair>
</Ability>
</>};
const _distance_aptitude = {title: "Distance Aptitude", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="distance-aptitude" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="distance-aptitude">Distance Aptitude</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="distance-aptitude-flavor">You were exposed to the magic of an <Link to="/magic-artifact/elf_gate">elf gate</Link>, portal, or some other form of distance-spanning magic when you were young. This contact with ancient world-spanning magic has granted you insight into means to extend the range of your own spells.</Pair>
<Pair single="benefit" id="distance-aptitude-benefit"><p>Treat your caster level as 1 higher for the purposes of determining the range of spells and spell-like abilities.</p>
<p><strong>Suggested Characters:</strong> Elves, Numerians, Sarkorians.</p>
</Pair>
</Ability>
</>};
const _domineering = {title: "Domineering", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="domineering" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="domineering">Domineering</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="domineering-flavor">When you were young, you attracted a group of devoted companions thanks to your impressive talent, and the experience inspired in you a powerful self-assurance and air of superiority. Your confidence is so strong that others feel naturally compelled to follow your commands.</Pair>
<Pair single="benefit" id="domineering-benefit"><p>Choose one 1st-level enchantment spell you are capable of casting. The DC of that spell increases by 1.</p>
<p><strong>Suggested Characters:</strong> Chelaxians, Irriseni, Mwangi.</p>
</Pair>
</Ability>
</>};
const _draconic_infusion = {title: "Draconic Infusion", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons</Link></p>
<Ability id="draconic-infusion" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="draconic-infusion">Draconic Infusion</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="draconic-infusion-flavor">You were exposed to an artifact or other powerful magic that infused you with the power of dragons.</Pair>
<Pair single="benefit" id="draconic-infusion-benefit">Choose the acid, cold, electricity, or fire spell descriptor when you take this trait. Once per day for every 2 caster levels you have (minimum once per day), when you cast a spell that has your chosen elemental descriptor, you can deal an additional 1d4 points of damage of that energy type to one target of that spell.</Pair>
</Ability>
</>};
const _earth_touched = {title: "Earth-Touched", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="earth-touched" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="earth-touched">Earth-Touched</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="earth-touched-flavor">You share an affinity with elemental earth.</Pair>
<Pair single="benefit" id="earth-touched-benefit">You gain DR 1/- against creatures and attacks with the earth type.</Pair>
</Ability>
</>};
const _eldritch_auditor = {title: "Eldritch Auditor", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/merchants_manifest">Merchant's Manifest</Link></p>
<Ability id="eldritch-auditor" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="eldritch-auditor">Eldritch Auditor</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="eldritch-auditor-flavor">You are a magically adept merchant who has learned tricks to protect your own goods, or you serve a city as an impartial auditor who guards against arcane trickery in the bazaars.</Pair>
<Pair single="benefit" id="eldritch-auditor-benefit">You gain a +2 trait bonus on <Link to="/skill/spellcraft">Spellcraft</Link> checks and Will saves to identify an item's true properties, such as against spells like <Link to="/spell/magic_aura">magic aura</Link>.</Pair>
</Ability>
</>};
const _eldritch_delver = {title: "Eldritch Delver", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="eldritch-delver" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="eldritch-delver">Eldritch Delver</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="eldritch-delver-flavor">You have an unquenchable thirst for knowledge about the world and desire to obtain it firsthand.</Pair>
<Pair single="benefit" id="eldritch-delver-benefit">You gain a +1 trait bonus on all <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> and <Link to="/skill/knowledge_history">Knowledge (history)</Link> checks, and you may treat your caster level as 1 level higher for all conjuration spells of the teleportation subschool.</Pair>
</Ability>
</>};
const _elemental_accident = {title: "Elemental Accident", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link></p>
<Ability id="elemental-accident" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="elemental-accident">Elemental Accident</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="elemental-accident-flavor">A traumatic experience in your childhood, such as surviving a violent earthquake, fleeing a shipwreck, escaping a devastating fire, or getting struck by lightning, caused you to develop a fear of the corresponding element. You can instinctively shield yourself against elemental dangers of that type.</Pair>
<Pair single="benefit" id="elemental-accident-benefit">Select acid, cold, electricity, or fire at character creation (once chosen, this damage type can't be changed). Once per day when you are subjected to an attack or effect that deals energy damage of that type, you can gain <Link to="/umr/resistance">resistance</Link> 10 against that damage type for 1 round as an <strong className="hl">immediate action</strong>. This resistance does not stack with any existing resistance you might have against that energy type.</Pair>
</Ability>
</>};
const _enduring_mutagen = {title: "Enduring Mutagen", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="enduring-mutagen" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="enduring-mutagen">Enduring Mutagen</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="enduring-mutagen-flavor">Because of special training, your unique body chemistry, or the uncovering of an alchemical secret, your mutagens last longer.</Pair>
<Pair single="benefit" id="enduring-mutagen-benefit">The bonuses and penalties granted by your mutagens last for 1 additional minute per alchemist level.</Pair>
</Ability>
</>};
const _fey_protection = {title: "Fey Protection", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="fey-protection" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="fey-protection">Fey Protection</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="fey-protection-flavor">Your birth brought an unexpected guest to your parents' home: a helpful fey who prophesied about your future and gave you a magical gift in exchange for your parents' hospitality, a cup of milk, and a drop of your blood.</Pair>
<Pair single="benefit" id="fey-protection-benefit"><p>You gain a +1 trait bonus to AC against attacks of opportunities made by fey and a +1 trait bonus on saving throws against the effects of fey creatures.</p>
<p><strong>Suggested Characters:</strong> Drumans, <Link to="/rule/eldest">Eldest</Link> worshipers, Ulfen.</p>
</Pair>
</Ability>
</>};
const _flame_touched = {title: "Flame-Touched", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="flame-touched" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="flame-touched">Flame-Touched</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="flame-touched-benefit">You share an affinity with elemental fire. You gain DR 1/- against creatures and attacks with the fire type.</Pair>
</Ability>
</>};
const _focused_burn = {title: "Focused Burn", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="focused-burn" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="focused-burn">Focused Burn</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="focused-burn-flavor">You know the secret of making punishing fire bombs.</Pair>
<Pair single="benefit" id="focused-burn-benefit">Any bombs you have that deal fire damage deal 1 additional point of fire damage on a direct hit per 2d6 of fire damage normally dealt (minimum 1 point). This additional damage does not apply to the bomb's splash damage.</Pair>
</Ability>
</>};
const _focused_mind = {title: "Focused Mind", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="focused-mind" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="focused-mind">Focused Mind</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="focused-mind-flavor">Your childhood was dominated either by lessons of some sort (whether musical, academic, or other) or by a horrible home life that encouraged your ability to block out distractions and focus on the immediate task at hand.</Pair>
<Pair single="benefit" id="focused-mind-benefit">You gain a +2 trait bonus on <Link to="/rule/concentration">concentration</Link> checks.</Pair>
</Ability>
</>};
const _fortunate = {title: "Fortunate", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="fortunate" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="fortunate">Fortunate</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="fortunate-flavor">You are blessed by fate.</Pair>
<Pair single="benefit" id="fortunate-benefit"><p>Once per day when you use a spell or magic item with a randomized effect (such as <Link to="/spell/confusion">confusion</Link>, <Link to="/spell/mirror_image">mirror image</Link>, <Link to="/spell/prismatic_spray">prismatic spray</Link>, or a <Link to="/magic-wondrous/bag_of_tricks_tan">bag of tricks</Link>), before you roll to determine the result, you may choose to roll twice and pick either result.</p>
<p><strong>Suggested Characters:</strong> Calistrians, harrow deck readers, Vudrani.</p>
</Pair>
</Ability>
</>};
const _gifted_adept = {title: "Gifted Adept", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="gifted-adept" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="gifted-adept">Gifted Adept</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="gifted-adept-flavor">Your interest in magic was inspired by witnessing a spell being cast in a particularly dramatic method, perhaps even one that affected you physically or spiritually. This early exposure to magic has made it easier for you to work similar magic on your own.</Pair>
<Pair single="benefit" id="gifted-adept-benefit">Pick one spell when you choose this trait - from this point on, whenever you cast that spell, its effects manifest at +1 caster level.</Pair>
</Ability>
</>};
const _greater_link = {title: "Greater Link", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="greater-link" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="greater-link">Greater Link</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="greater-link-flavor">The link between you and your eidolon is stronger than most.</Pair>
<Pair single="benefit" id="greater-link-benefit">Your eidolon's current and maximum hit point totals are not reduced by 50% until you are separated by 110 feet or more. Your eidolon's current and maximum hit point totals are not reduced by 75% until you are separated by 1,100 feet or more. All other aspects of your life link class feature are unaffected.</Pair>
</Ability>
</>};
const _greater_purpose = {title: "Greater Purpose", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="greater-purpose" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="greater-purpose">Greater Purpose</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="greater-purpose-flavor">You are convinced you're alive to achieve a great purpose.</Pair>
<Pair single="benefit" id="greater-purpose-benefit">You gain a +1 trait bonus on all saving throws to resist death effects and a +1 trait bonus on Constitution checks made to stabilize while <Link to="/misc/dying">dying</Link>.</Pair>
</Ability>
</>};
const _green_blooded = {title: "Green-Blooded", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild</Link></p>
<Ability id="green-blooded" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="green-blooded">Green-Blooded</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="green-blooded-flavor">You are touched by the supernatural essence of nature, marking you since birth as something other than purely mortal.</Pair>
<Pair single="benefit" id="green-blooded-benefit">Choose a single 0-level <Link to="/main/druid_spell">druid spell</Link>. You can cast this spell once per day as a spell-like ability with a caster level equal to your character level.</Pair>
</Ability>
</>};
const _guiding_spirit = {title: "Guiding Spirit", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/haunted_heroes_handbook">Haunted Heroes Handbook</Link></p>
<Ability id="guiding-spirit" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="guiding-spirit">Guiding Spirit</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="guiding-spirit-flavor">Few understand the medium's willingness to harbor powerful spirits, but even if you aren't one of these talented few, you've always identified with their abilities. you've always felt that you were not alone in this world and that a mysterious guiding spirit watches over you with singular focus. You may have briefly glimpsed this strange spirit - or maybe you simply feel its presence in times of need.</Pair>
<Pair single="benefit" id="guiding-spirit-benefit">Once per day as a <strong className="hl">swift action</strong>, you can look to your guiding spirit for advice. The next time you roll a d20 in that same round, roll twice and pick the better result. If one of these two rolls is a natural 20, you can use this ability again that same day.</Pair>
</Ability>
</>};
const _hedge_magician = {title: "Hedge Magician", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="hedge-magician" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="hedge-magician">Hedge Magician</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="hedge-magician-flavor">You apprenticed for a time to an artisan who often built magic items, and he taught you many handy shortcuts and cost-saving techniques.</Pair>
<Pair single="benefit" id="hedge-magician-benefit">Whenever you craft a magic item, you reduce the required gp cost to make the item by 5%.</Pair>
</Ability>
</>};
const _hex_proof = {title: "Hex-Proof", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/black_markets">Black Markets</Link></p>
<Ability id="hex-proof" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="hex-proof">Hex-Proof</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="hex-proof-benefit">You've dealt too often with <Link to="/rule/witchmarket">cruel fey magic</Link> and so gain a +2 bonus on Will saves against hexes and fey creatures' spells and spell-like abilities.</Pair>
</Ability>
</>};
const _horrifying_mind = {title: "Horrifying Mind", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption</Link></p>
<Ability id="horrifying-mind" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="horrifying-mind">Horrifying Mind</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="horrifying-mind-benefit">When a nonevil humanoid attempts to read your mind via a magical effect, the reader must attempt a Will save opposed by your Wisdom or Charisma check (your choice). If the reader fails this save, she is <Link to="/misc/shaken">shaken</Link> for 1 round. If she fails by 10 or more, she is instead frightened for 1 round, then shaken for 1 round.</Pair>
</Ability>
</>};
const _house_of_green_mothers_pupil = {title: "House of Green Mothers Pupil", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/distant_shores">Distant Shores</Link></p>
<Ability id="house-of-green-mothers-pupil" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="house-of-green-mothers-pupil">House of Green Mothers Pupil</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="house-of-green-mothers-pupil-flavor">You studied at Anuli's center for druidic magic long enough to begin bonding with a familiar.</Pair>
<Pair single="benefit" id="house-of-green-mothers-pupil-benefit">You gain a +1 trait bonus on <Link to="/skill/handle_animal">Handle Animal</Link> checks. You may substitute this trait for <Link to="/feat/iron_will">Iron Will</Link> as the prerequisite for the <Link to="/feat/familiar_bond">Familiar Bond</Link> feat.</Pair>
</Ability>
</>};
const _insistent_benefactor = {title: "Insistent Benefactor", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_society_primer">Pathfinder Society Primer</Link></p>
<Ability id="insistent-benefactor" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="insistent-benefactor">Insistent Benefactor</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="insistent-benefactor-flavor">Pathfinders of different backgrounds don't always realize what's best for them, and you have perfected the art of forcing your magical boons on your allies.</Pair>
<Pair single="benefit" id="insistent-benefactor-benefit">Whenever you cast a harmless spell, you gain a +2 trait bonus on caster level checks to overcome spell resistance, and the saving throw DC of the spell (if any) is increased by 2.</Pair>
</Ability>
</>};
const _internal_compass = {title: "Internal Compass", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook</Link></p>
<Ability id="internal-compass" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="internal-compass">Internal Compass</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="internal-compass-benefit">You maintain a sense of direction, even on planes where direction is relative. If you are on a plane that has no analogue to north, you automatically know the direction toward the plane's major dominating feature (for instance, Pharasma's Spire in the Boneyard, or the sun in Nirvana). If there is no such dominating feature, you instead know the direction of the closest feature significant to one of the plane's divinities or demigods.</Pair>
</Ability>
</>};
const _inured_to_death = {title: "Inured to Death", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="inured-to-death" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="inured-to-death">Inured to Death</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="inured-to-death-flavor">You have been around death or the undead all of your life; you have become accustomed to its shadowy presence, and are no longer overwhelmed by it.</Pair>
<Pair single="benefit" id="inured-to-death-benefit"><p>You gain a +2 trait bonus on saving throws against death effects.</p>
<p><strong>Suggested Characters:</strong> Gebbites, Urgathoans, Ustalavs.</p>
</Pair>
</Ability>
</>};
const _keen_appraiser = {title: "Keen Appraiser", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="keen-appraiser" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="keen-appraiser">Keen Appraiser</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="keen-appraiser-flavor">Your frequent handling of magic items, artifacts, and other enchanted goods has made you an expert at determining when something has magical properties.</Pair>
<Pair single="benefit" id="keen-appraiser-benefit"><p>You gain a +1 trait bonus on <Link to="/skill/appraise">Appraise</Link> checks. In addition, you need only exceed the DC of an Appraise check by 2 in order to determine whether the item in question has magic properties (although success still does not grant knowledge of the magic item's abilities).</p>
<p><strong>Suggested Characters:</strong> Drumans, dwarves, Torag worshipers.</p>
</Pair>
</Ability>
</>};
const _kin_bond = {title: "Kin Bond", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="kin-bond" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="kin-bond">Kin Bond</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="kin-bond-benefit">The bond between you and a close sibling is nearly mystical.``Choose a single sibling with whom to share this bond. Once per day when you fail a saving throw while your sibling is within 30 feet, you may reroll that saving throw using your sibling's saving throw modifier. If you and the sibling are twins or otherwise part of a multiple birth, you gain a +2 trait bonus on the rerolled saving throw. Your sibling must be willing to grant you the reroll. If you fail the saving throw, you and your sibling are <Link to="/misc/dazed">dazed</Link> for 1 round.</Pair>
</Ability>
</>};
const _knowledgeable_caster = {title: "Knowledgeable Caster", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="knowledgeable-caster" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="knowledgeable-caster">Knowledgeable Caster</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="knowledgeable-caster-benefit">Once per day when you cast a divination spell, you can cast that spell as if your caster level were 1 level higher in the appropriate class. You also gain a +1 trait bonus on any <code>Knowledge</code> checks associated with your sorcerer bloodline, if any.</Pair>
</Ability>
</>};
const _lamias_bane = {title: "Lamia's Bane", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes</Link></p>
<Ability id="lamias-bane" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="lamias-bane">Lamia's Bane</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="lamias-bane-benefit">You have been exposed to the magical energies of lamias in your past, or you have heard innumerable stories about your family's dealings with lamias, and you have built up a resistance to their charms.``You gain a +1 trait bonus on saving throws against enchantment effects and a +2 trait bonus on saving throws against the spells and spell-like abilities of <Link to="/monster/lamia">lamias</Link>.</Pair>
</Ability>
</>};
const _less_effort = {title: "Less Effort", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil</Link></p>
<Ability id="less-effort" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="less-effort">Less Effort</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="less-effort-benefit">Select one spell belonging to the abjuration or transmutation school on your spell list. When you cast that spell or it is cast on you, treat the caster level as 2 higher for the purpose of determining the duration.</Pair>
</Ability>
</>};
const _linked_surge = {title: "Linked Surge", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="linked-surge" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="linked-surge">Linked Surge</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="linked-surge-benefit">Once per day, you may make a Strength- or Constitution-based ability check or skill check using you eidolon's ability score in place of your own. Your eidolon must be summoned and with 30 feet for you to use this trait.</Pair>
</Ability>
</>};
const _low_blow = {title: "Low Blow", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil</Link></p>
<Ability id="low-blow" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="low-blow">Low Blow</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="low-blow-benefit">When targeting a good-aligned creature with a spell or spell-like ability with the pain descriptor or that imposes a morale penalty, increase its effective caster level by 1. If you are of an evil alignment, increase the save DC of the effect by 1 as well.</Pair>
</Ability>
</>};
const _lunar_birth = {title: "Lunar Birth", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_stars">People of the Stars</Link></p>
<Ability id="lunar-birth" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="lunar-birth">Lunar Birth</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="lunar-birth-benefit">Born during a lunar eclipse, you were forever marked by the moon's mysterious and ancient magic.``You gain a +1 trait bonus on saving throws against the spells and spell-like abilities cast by humans.</Pair>
</Ability>
</>};
const _magic_crafter = {title: "Magic Crafter", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="magic-crafter" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="magic-crafter">Magic Crafter</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="magic-crafter-benefit">Your early magical training involved study of the properties and creation of magic items. You gain a +1 trait bonus on Appraise checks and a +1 bonus on any Craft checks attempted while making magic items.</Pair>
</Ability>
</>};
const _magical_flair = {title: "Magical Flair", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="magical-flair" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="magical-flair">Magical Flair</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="magical-flair-benefit"><p>At a young age, you saw a witch burned by fearful peasants, druids falsely punished for demon worship, or another sort of spellcaster persecuted for merely practicing her dubious craft. Intent on not suffering the same fate, you approach spellcasting with a powerful desire to control how your magic is perceived by others. You can cause spells you cast to manifest with strange visual, auditory, or olfactory features that make them hard to identify. Choose a school of magic. The Spellcraft DC to identify spells you cast from that school of magic increases by 2. Onlookers who fail a Spellcraft check to identify your spell by 2 or less incorrectly identify the spell as another randomly selected spell of the same school and level.</p>
<p><strong>Suggested Characters:</strong> Gnomes, Razmir worshipers, witches.</p>
</Pair>
</Ability>
</>};
const _magical_knack = {title: "Magical Knack", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="magical-knack" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="magical-knack">Magical Knack</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="magical-knack-benefit">You were raised, either wholly or in part, by a magical creature, either after it found you abandoned in the woods or because your parents often left you in the care of a magical minion. This constant exposure to magic has made its mysteries easy for you to understand, even when you turn your mind to other devotions and tasks. Pick a class when you gain this trait - your caster level in that class gains a +2 trait bonus as long as this bonus doesn't raise your caster level above your current Hit Dice.</Pair>
</Ability>
</>};
const _magical_lineage = {title: "Magical Lineage", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="magical-lineage" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="magical-lineage">Magical Lineage</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="magical-lineage-benefit">One of your parents was a gifted spellcaster who not only used metamagic often, but also developed many magical items and perhaps even a new spell or two - and you have inherited a fragment of this greatness. Pick one spell when you choose this trait. When you apply metamagic feats to this spell that add at least 1 level to the spell, treat its actual level as 1 lower for determining the spell's final adjusted level.</Pair>
</Ability>
</>};
const _magical_talent = {title: "Magical Talent", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="magical-talent" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="magical-talent">Magical Talent</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="magical-talent-benefit">Either from inborn talent, the whimsy of the gods, or obsessive study of strange tomes, you have mastered the use of a cantrip. Choose a 0-level spell. You may cast that spell once per day as a spell-like ability. This spell-like ability is cast at your highest caster level gained; if you have no caster level, it functions at CL 1st. The spell-like ability's save DC is Charisma-based.</Pair>
</Ability>
</>};
const _malleable_magic = {title: "Malleable Magic", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="malleable-magic" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="malleable-magic">Malleable Magic</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="malleable-magic-benefit">Once per day as a swift action, you can lose a single 1st-, 2nd- or 3rd-level magus spell to regain 1 arcane pool point. You can't exceed the maximum number of arcane pool points in your arcane pool by using this trait.</Pair>
</Ability>
</>};
const _mathematical_prodigy = {title: "Mathematical Prodigy", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="mathematical-prodigy" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="mathematical-prodigy">Mathematical Prodigy</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="mathematical-prodigy-benefit">Mathematics has always come easily for you, and you have always been able to "see the math" in the physical and magical world. You gain a +1 bonus on Knowledge (arcana) and Knowledge (engineering) checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
</>};
const _mechanical_aptitude = {title: "Mechanical Aptitude", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 19</Link></p>
<Ability id="mechanical-aptitude" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="mechanical-aptitude">Mechanical Aptitude</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="mechanical-aptitude-benefit">You have learned much from tinkering with ancient technology from the Jistka Imperium. Choose one of the following skills: Disable Device, Knowledge (engineering), or Use Magic Device. Once per day, you can reroll a check with that skill before the outcome of the check is revealed. You must take the second result, even if it is worse.</Pair>
</Ability>
</>};
const _meticulous_concoction = {title: "Meticulous Concoction", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="meticulous-concoction" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="meticulous-concoction">Meticulous Concoction</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="meticulous-concoction-benefit">Your meticulous carefulness makes your bombs and extracts more potent. Once per day, you can either add a +2 trait bonus to the save DC for one bomb you throw or extend the duration of one extract you imbibe by 2 rounds. Extracts with an instantaneous duration are not affected by this trait.</Pair>
</Ability>
</>};
const _mutant_eye = {title: "Mutant Eye", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="mutant-eye" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="mutant-eye">Mutant Eye</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="mutant-eye-benefit"><p>One of your parents was exposed to uncontrolled magic or arcane pollution before you were born, causing you to develop a minor mutation that has marked you as different all your life. You have a third eye on your forehead. As long as it is uncovered and open, you can get a clearer sense of the emotions of those you see, granting you a +2 trait bonus on Sense Motive checks that increases to +4 on checks to notice whether a character is under a mind-affecting effect. However, the eye is unsettling, and you take a -1 penalty on Bluff and Diplomacy checks against humanoids who can see it.</p>
<p><strong>Suggested Characters:</strong> Lamashtans, Mana Wastes natives, Nexians.</p>
</Pair>
</Ability>
</>};
const _outcasts_intuition = {title: "Outcast's Intuition", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="outcasts-intuition" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="outcasts-intuition">Outcast's Intuition</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="outcasts-intuition-benefit">You are able to sense the motives of others and use that sense to bolster your magic against dispelling. You gain a +1 trait bonus on Sense Motive checks, and Sense Motive is always a class skill for you. In addition, your caster level is treated as 1 level higher for the purposes of any attempts to dispel your magic.</Pair>
</Ability>
</>};
const _outer_dragon_blood = {title: "Outer Dragon Blood", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_stars">People of the Stars</Link></p>
<Ability id="outer-dragon-blood" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="outer-dragon-blood">Outer Dragon Blood</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="outer-dragon-blood-flavor">The blood of outer dragons courses through your veins, and you've inherited a portion of their magic.</Pair>
<Pair single="benefit" id="outer-dragon-blood-benefit"><p>You gain Draconic as a bonus language. In addition, if you are a sorcerer with the <Link to="/sorcbloodline/draconic">draconic</Link> bloodline, you can select one of the <Link to="/family/outer_dragon">outer dragon</Link> types for your bloodline powers; this affects your resistances and the type of energy damage dealt by a number of your abilities.</p>
<ul>
<li><strong>Lunar:</strong> Cold energy, 60-foot line</li>
<li><strong>Solar:</strong> Fire energy, 60-foot line</li>
<li><strong>Time:</strong> Electricity energy, 30-foot cone</li>
<li><strong>Void:</strong> Cold energy, 30-foot cone</li>
<li><strong>Vortex:</strong> Fire energy, 30-foot cone</li>
</ul>
</Pair>
</Ability>
</>};
const _outsider_ties = {title: "Outsider Ties", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook</Link></p>
<Ability id="outsider-ties" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="outsider-ties">Outsider Ties</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="outsider-ties-benefit">An outsider visited you at a young age, and you have had a significant affinity with that type of outsider ever since. Choose a subtype of outsider, such as <Link to="/subtype/angel">angel</Link> or <Link to="/subtype/elemental">elemental</Link>. When you summon an outsider of that subtype via <Link to="/spell/summon_monster">summon monster</Link>, <Link to="/spell/planar_ally">planar ally</Link>, <Link to="/spell/planar_binding">planar binding</Link>, or similar spells and abilities, the summoned creature gains a number of temporary hit points equal to the level of spell used to summon it.</Pair>
</Ability>
</>};
const _overwhelming_beauty = {title: "Overwhelming Beauty", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/bastards_of_golarion">Bastards of Golarion</Link></p>
<Ability id="overwhelming-beauty" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="overwhelming-beauty">Overwhelming Beauty</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="overwhelming-beauty-benefit">Your wiles are particularly potent against people who share a race with you, as your beauty is often held up as a symbol of perfection. The DC of your mind-affecting effects increases by 1 against creatures that have at least one of the same subtypes as you.</Pair>
</Ability>
</>};
const _partial_protege = {title: "Partial Protege", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="partial-protege" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="partial-protege">Partial Protege</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="partial-protege-benefit">You are adept at disguising your true talents. You gain a +1 trait bonus on Bluff checks and on Use Magic Device checks made to emulate a class feature.</Pair>
</Ability>
</>};
const _pathfinders_focus = {title: "Pathfinder's Focus", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_society_primer">Pathfinder Society Primer</Link></p>
<Ability id="pathfinders-focus" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="pathfinders-focus">Pathfinder's Focus</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="pathfinders-focus-benefit">You can select a magnetic compass for your arcane bond class feature; this compass is nonmagical, but you can later spend 250 gp to upgrade it into a <Link to="/magic-wondrous/wayfinder">wayfinder</Link>. Choosing this trait allows you to upgrade this wayfinder to a variant or unique wayfinder per the normal rules for <Link to="/rule/adding_new_abilities">improving magic items</Link>. A bonded wayfinder must be held in your hand to grant the benefits of being a bonded object.</Pair>
</Ability>
</>};
const _perfectionists_brew = {title: "Perfectionist's Brew", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="perfectionists-brew" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="perfectionists-brew">Perfectionist's Brew</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="perfectionists-brew-benefit">You know that potion recipes should be followed with exact precision. You gain a +2 trait bonus on all Craft (alchemy) checks and on Spellcraft checks made to brew potions.</Pair>
</Ability>
</>};
const _planar_escapee = {title: "Planar Escapee", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link></p>
<Ability id="planar-escapee" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="planar-escapee">Planar Escapee</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="planar-escapee-benefit">You were a prisoner or slave in a city on the Elemental Planes, such as the cruel efreet's City of Brass on the Plane of Fire or the dwarven city of Urgashaz on the Plane of Earth. When you escaped that city, you had to use your captors' weapons and magic against them in addition to your sheer wits, and you learned how to find weaknesses in their natural resistances. At character creation, select acid, cold, electricity, or fire (once chosen, this selection can't be changed). Once per day as a swift action, you can choose a single creature that is within 30 feet of you and within your line of sight; treat that creature's resistance against your chosen energy as 5 lower than its normal energy resistance for 1 round. This ability has no effect if the creature has no resistance to the chosen energy or if the creature has immunity to the chosen energy.</Pair>
</Ability>
</>};
const _possessed = {title: "Possessed", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="possessed" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="possessed">Possessed</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="possessed-benefit">You were, or are, possessed in some way by another entity that grants you occasional access to its knowledge. Once per day, you can attempt a Knowledge check of your choice even if you are not trained in that skill and it is not usually possible to use that skill untrained. If you can normally use that skill untrained, you gain a +2 trait bonus on the check.</Pair>
</Ability>
</>};
const _pragmatic_activator = {title: "Pragmatic Activator", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="pragmatic-activator" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="pragmatic-activator">Pragmatic Activator</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="pragmatic-activator-benefit">While some figure out how to use magical devices with stubborn resolve, your approach is more pragmatic. You may use your Intelligence modifier when making Use Magic Device checks instead of your Charisma modifier.</Pair>
</Ability>
</>};
const _precise_treatment = {title: "Precise Treatment", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="precise-treatment" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="precise-treatment">Precise Treatment</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="precise-treatment-benefit">You treat others with a clear and calculating intellect. You gain a +1 trait bonus on all Heal checks, and you may use your Intelligence modifier when making Heal checks instead of your Wisdom modifier.</Pair>
</Ability>
</>};
const _radiant_healing = {title: "Radiant Healing", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link></p>
<Ability id="radiant-healing" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="radiant-healing">Radiant Healing</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="radiant-healing-benefit">You've learned how to infuse your healing magic with lingering traces of light. Whenever you cast a spell from the conjuration (healing) school that has a casting time of a standard action, you can extend its casting time to a full-round action to imbue the target with light, as per light, with a duration of 1 round per caster level.</Pair>
</Ability>
</>};
const _reluctant_apprentice = {title: "Reluctant Apprentice", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="reluctant-apprentice" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="reluctant-apprentice">Reluctant Apprentice</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="reluctant-apprentice-benefit">Your early training grants you knowledge of the arcane. You gain a +1 trait bonus on Knowledge (arcana) checks, and are considered trained in that skill even if you have no ranks in it.</Pair>
</Ability>
</>};
const _resilient_caster = {title: "Resilient Caster", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="resilient-caster" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="resilient-caster">Resilient Caster</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="resilient-caster-benefit">Your great force of will makes your magic harder to dispel. Your caster level is treated as 1 level higher whenever someone attempts to dispel one of your spells.</Pair>
</Ability>
</>};
const _rivethun_adherent = {title: "Rivethun Adherent", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/haunted_heroes_handbook">Haunted Heroes Handbook</Link></p>
<Ability id="rivethun-adherent" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="rivethun-adherent">Rivethun Adherent</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="rivethun-adherent-benefit"><Link to="/rule/rivethun">Rivethun</Link> is an ancient tradition of dwarven shamans who learned to listen to and affect the world around them by reflecting on the friction between body and spirit. As someone who feels a similar friction between your inner spirit and physical body, you have picked up some old rivethun meditation techniques, even if you aren't a dwarf. While you suffer a physical ailment, such as disease, poison, or ability damage to Strength, Dexterity, or Constitution (but not including hit point damage), you gain a +2 trait bonus on Will saving throws. While you suffer a mental ailment, including insanity, any charm or compulsion effect, or ability damage to Intelligence, Wisdom, or Charisma, you gain a +2 trait bonus on Fortitude saving throws.</Pair>
</Ability>
</>};
const _scholar_of_the_analects = {title: "Scholar of the Analects", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology</Link></p>
<Ability id="scholar-of-the-analects" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="scholar-of-the-analects">Scholar of the Analects</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="scholar-of-the-analects-benefit">You studied various Analects of Aroden from a young age and became skilled at using magic written by others. You can cast <Link to="/spell/read_magic">read magic</Link> as a spell-like ability three times per day, using your character level as your caster level.</Pair>
</Ability>
</>};
const _scorned_by_magic = {title: "Scorned by Magic", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns</Link></p>
<Ability id="scorned-by-magic" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="scorned-by-magic">Scorned by Magic</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="scorned-by-magic-benefit"><p>As a youth, you assisted a wise woman or witch doctor who removed magical maladies from the needy and was present for the breaking of many spells - or perhaps you passed through a dead magic zone. Whatever the cause, magic seems a little more reluctant to affect you than others. Reduce the caster level of spells and spell-like abilities cast upon you by 1 for the purpose of attempting dispel checks and overcoming your spell resistance (if any).</p>
<p><strong>Suggested Characters:</strong> Kellids, Mana Wastes natives, Shoanti.</p>
</Pair>
</Ability>
</>};
const _secret_scrolls = {title: "Secret Scrolls", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="secret-scrolls" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="secret-scrolls">Secret Scrolls</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="secret-scrolls-benefit">You were inducted into a secret magical tradition such as the Esoteric Order of the Palatine Eye. You can cast <Link to="/spell/read_magic">read magic</Link> once per day as a spell-like ability, and gain a +1 trait bonus on Use Magic Device checks to activate scrolls you cannot normally use.</Pair>
</Ability>
</>};
const _self_taught_scholar = {title: "Self-Taught Scholar", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="self-taught-scholar" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="self-taught-scholar">Self-Taught Scholar</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="self-taught-scholar-benefit">Being self-taught has made it necessary for you to scour all documentation you can get your hands on. You gain a +1 trait bonus on Linguistics checks to decipher unfamiliar languages, and Linguistics is always a class skill for you. In addition, you gain a +1 trait bonus on Spellcraft checks made to decipher the writing on a scroll.</Pair>
</Ability>
</>};
const _shrouded_casting = {title: "Shrouded Casting", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="shrouded-casting" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="shrouded-casting">Shrouded Casting</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="shrouded-casting-benefit">You have learned the secret to casting some spells without lesser material components. Choose one school of magic when you pick this trait. You can cast spells from that school as if you had the <Link to="/feat/eschew_materials">Eschew Materials</Link> feat.</Pair>
</Ability>
</>};
const _skeptic = {title: "Skeptic", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="skeptic" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="skeptic">Skeptic</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="skeptic-benefit">Growing up, you were always around magical effects to the extent that you realized much of it was mere smoke and mirrors. You gain a +2 trait bonus on all saving throws against illusions.</Pair>
</Ability>
</>};
const _spark_of_creation = {title: "Spark of Creation", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="spark-of-creation" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="spark-of-creation">Spark of Creation</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="spark-of-creation-benefit">You have always had a knack for making useful things, and your talent as an artisan was evident even at an early age. You gain a +1 trait bonus on Craft checks, and the cost of creating magic items is reduced by 5%.</Pair>
</Ability>
</>};
const _spiritual_attachment = {title: "Spiritual Attachment", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/haunted_heroes_handbook">Haunted Heroes Handbook</Link></p>
<Ability id="spiritual-attachment" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="spiritual-attachment">Spiritual Attachment</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="spiritual-attachment-benefit">The union between spirits and spiritualists is one of the strongest (and strangest) bonds shared between the mortal realm and the spirit world. Spiritualists can use the knowledge of their linked phantoms to better negotiate with other spirits. Whether you're a spiritualist or not, you've always had a similar knack when it comes to interactions with the spirit world. You gain a +4 trait bonus on checks to notice haunts, and when interacting with someone who is possessed by an incorporeal undead creature, you gain a +2 trait bonus on Bluff, Diplomacy, Intimidate, and Sense Motive checks against that target.</Pair>
</Ability>
</>};
const _stabbing_spells = {title: "Stabbing Spells", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology</Link></p>
<Ability id="stabbing-spells" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="stabbing-spells">Stabbing Spells</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="stabbing-spells-benefit">Aroden wrote much about ways to use weapons to enhance magic's effectiveness, and you have taken to heart the insights gleaned from his words. Whenever you strike a foe with a weapon, you gain a +2 trait bonus on caster level checks to overcome that foe's spell resistance until the end of your next turn.</Pair>
</Ability>
</>};
const _storm_touched = {title: "Storm-Touched", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="storm-touched" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="storm-touched">Storm-Touched</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="storm-touched-benefit">You share an affinity with elemental lightning. You gain DR 1/- against creatures and attacks with the electricity type.</Pair>
</Ability>
</>};
const _strength_foretold = {title: "Strength Foretold", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="strength-foretold" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="strength-foretold">Strength Foretold</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="strength-foretold-benefit">You can channel extra power into one of your bloodline spells. Once per day as a free action, you gain a +1 trait bonus to the DC of the saving throw of one of your bonus bloodline spells.</Pair>
</Ability>
</>};
const _sun_blessed = {title: "Sun-Blessed", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_stars">People of the Stars</Link></p>
<Ability id="sun-blessed" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="sun-blessed">Sun-Blessed</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="sun-blessed-benefit">Your birth came at a time when the sun was auspiciously aligned with your birth sign. As a result, you have a natural affinity for light and life. Whenever you're affected by a healing effect that would heal more hit points than your maximum hit point total, you gain the excess healing as temporary hit points. You can gain up to a number of temporary hit points per day equal to your character level in this way. These temporary hit points last for 1 minute.</Pair>
</Ability>
</>};
const _tenacious_shifting = {title: "Tenacious Shifting", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="tenacious-shifting" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="tenacious-shifting">Tenacious Shifting</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="tenacious-shifting-benefit">You've discovered the secret of stable transmutations. Any transmutation spell you cast upon yourself has its duration increased by 2 rounds. Transmutation spells with an instantaneous duration are not affected by this trait.</Pair>
</Ability>
</>};
const _theoretical_magician = {title: "Theoretical Magician", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link></p>
<Ability id="theoretical-magician" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="theoretical-magician">Theoretical Magician</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="theoretical-magician-benefit">You've studied more magic than what you can actually perform. You gain a +2 trait bonus on Spellcraft checks, or a +3 bonus if you aren't a spellcaster.</Pair>
</Ability>
</>};
const _transmuter_of_korada = {title: "Transmuter of Korada", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="transmuter-of-korada" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="transmuter-of-korada">Transmuter of Korada</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="transmuter-of-korada-benefit">You learned the secrets of transmutation from a follower of the empyreal lord Korada. Whenever you cast a spell from the transmutation school, its effects manifest at +1 caster level. Additionally, select one of the following transmutation spells: bear's endurance, bull's strength, cat's grace, eagle's splendor, fox's cunning, or owl's wisdom. Once per day when you cast that spell, its duration is doubled. A spell affected by this trait cannot be modified further by the <Link to="/feat/extend_spell">Extend Spell</Link> metamagic feat or similar abilities.</Pair>
</Ability>
</>};
const _twinned_presence = {title: "Twinned Presence", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="twinned-presence" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="twinned-presence">Twinned Presence</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="twinned-presence-benefit">Your eidolon - and your connection to it - makes others ill at ease. You gain a +1 trait bonus on Intimidate checks, and Intimidate is always a class skill for you. In addition, if your eidolon is summoned and within 30 feet, and its size exceeds your own, use its size modifier on any Intimidate checks you make.</Pair>
</Ability>
</>};
const _twisted_tattoo = {title: "Twisted Tattoo", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes</Link></p>
<Ability id="twisted-tattoo" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="twisted-tattoo">Twisted Tattoo</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="twisted-tattoo-benefit">Your exposure to eldritch phenomena has caused your skin to develop a strange pattern. Once per day as you cast a spell whose casting time is 1 round or less, you can roll 1d4-2 (no minimum) and add the result to that spell's effective caster level. In an area of <Link to="/rule/primal_magic">primal magic</Link>, the minimum result of this roll is 0, not -1.</Pair>
</Ability>
</>};
const _unscathed = {title: "Unscathed", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="unscathed" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="unscathed">Unscathed</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="unscathed-benefit">You are amazingly resistant to energy attacks because of either your upbringing or magical experimentation. Each type of energy resistance you have (if any) increases by 2 points.</Pair>
</Ability>
</>};
const _unseen_but_not_undone = {title: "Unseen but Not Undone", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="unseen-but-not-undone" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="unseen-but-not-undone">Unseen but Not Undone</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="unseen-but-not-undone-flavor">Without a single gesture, you can unleash a bloodline spell.</Pair>
<Pair single="benefit" id="unseen-but-not-undone-benefit">Once per day, you can cast a bloodline spell as if you had the <Link to="/feat/still_spell">Still Spell</Link> feat. Using this trait does not modify the spell's level.</Pair>
</Ability>
</>};
const _unstable_mutagen = {title: "Unstable Mutagen", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="unstable-mutagen" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="unstable-mutagen">Unstable Mutagen</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="unstable-mutagen-flavor">You discovered or were given a secret to make your mutagens more unstable - but also more potent.</Pair>
<Pair single="benefit" id="unstable-mutagen-benefit"><p>Once per day, you can create an <em>unstable mutagen.</em> It is like a normal mutagen in most ways, but also gains a single benefit or hindrance due to its instability. Roll 1d6 to determine the result of the instability.</p>
<ScrollContainer id="trait-unstable_mutagen--table-0"><table>
<thead>
<tr>
<th>1d6</th>
<th>Instability</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>The <em>unstable mutagen</em> lasts for 5 minutes per alchemist level.</td>
</tr>
<tr>
<td>2</td>
<td>The <em>unstable mutagen</em> lasts for 20 minutes per alchemist level.</td>
</tr>
<tr>
<td>3</td>
<td>The <em>unstable mutagen</em> does not grant a natural armor bonus.</td>
</tr>
<tr>
<td>4</td>
<td>The natural armor bonus granted by the mutagen increases by 2.</td>
</tr>
<tr>
<td>5</td>
<td>The penalty that the mutagen applies to the corresponding mental ability score increases by 2.</td>
</tr>
<tr>
<td>6</td>
<td>The <em>unstable mutagen</em> does not apply a penalty to the corresponding mental ability score.</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
</Ability>
</>};
const _volatile_conduit = {title: "Volatile Conduit", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="volatile-conduit" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="volatile-conduit">Volatile Conduit</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="volatile-conduit-benefit">You discovered a secret that enhances the energy of some spells. Once per day as a free action, when you cast a spell that deals acid, cold, electricity, or fire damage, you can enhance that spell with volatile energy. When you do, it deals 1d4 points of extra damage of the same energy type.</Pair>
</Ability>
</>};
const _water_touched = {title: "Water-Touched", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link></p>
<Ability id="water-touched" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="water-touched">Water-Touched</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="water-touched-benefit">You share an affinity with elemental water. You gain DR 1/- against creatures and attacks with the water type.</Pair>
</Ability>
</>};
const _winter_witchcraft_survivor = {title: "Winter Witchcraft Survivor", topLink: ["Magic Traits","main/traits_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="winter-witchcraft-survivor" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="winter-witchcraft-survivor">Winter Witchcraft Survivor</Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="winter-witchcraft-survivor-benefit">You narrowly escaped death when a Winter Witch punished you for supporting the Heralds. You gain cold resistance 5 against the first cold damage you take each day, and gain a +2 bonus on saving throws against the fear effects of creatures with the cold subtype.</Pair>
</Ability>
</>};
const _chance_savior = {title: "Chance Savior", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/carrion_crown_players_guide">Carrion Crown Player's Guide</Link></p>
<Ability id="chance-savior" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="chance-savior">Chance Savior</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Carrion Crown</Pair>
<Pair single="flavor" id="chance-savior-flavor">Fate smiled on you and Professor Lorrimor one day in the not so distant past. Through a matter of pure chance, you were in a position to save the late scholar's life and did so. His gratitude was effusive, and he promised that he would never forget you. You are unsure of the nature of the summons in his will, but believe he may have listed you as a possible heir in thanks for saving him from an untimely demise.</Pair>
<Pair single="benefit" id="chance-savior-benefit">Your ability to think quickly on your feet has stayed with you, and you quite often feel that you're in the right place at the right time. You gain a +2 trait bonus on Initiative checks.</Pair>
</Ability>
</>};
const _inspired_by_greatness = {title: "Inspired by Greatness", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/carrion_crown_players_guide">Carrion Crown Player's Guide</Link></p>
<Ability id="inspired-by-greatness" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="inspired-by-greatness">Inspired by Greatness</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Carrion Crown</Pair>
<Pair single="flavor" id="inspired-by-greatness-flavor">Whether you knew Professor Lorrimor well or only in passing, as a colleague or competitor, his career and lifetime of discovery inspired you to be better at what you do. As you honed your craft, you and the professor corresponded, and he was delighted to hear that he had directly or indirectly motivated you to strive for your full potential. Saddened by the news of his death, you feel that you should honor his memory by fulfilling his final wishes and attending his funeral, and by ever striving to attain greater heights and someday match the influence and impact of your idol.</Pair>
<Pair single="benefit" id="inspired-by-greatness-benefit">Choose one spell you can cast. From now on, you always cast this spell at +1 caster level.</Pair>
</Ability>
</>};
const _making_good_on_promises = {title: "Making Good on Promises", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/carrion_crown_players_guide">Carrion Crown Player's Guide</Link></p>
<Ability id="making-good-on-promises" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="making-good-on-promises">Making Good on Promises</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Carrion Crown</Pair>
<Pair single="flavor" id="making-good-on-promises-flavor">At some point in the past, Professor Lorrimor did you a favor under the condition that he would someday call on you to repay it. After he came to your aid, however, you never saw nor heard from him again, leaving you with a sense of unending anticipation that each day might be the day you were asked to return the favor. Yet that day never came, and your fears and anxiety about what the professor would call on you to do abated. Assuming the old man had either forgotten about you or died, you eventually assumed you'd never have to follow through on your end of the bargain. When you received word of the professor's death, and that he had named you specifically in his will, your dread of what he could possibly want from you has grown throughout your entire journey to Ravengro.</Pair>
<Pair single="benefit" id="making-good-on-promises-benefit">Years of living with the fear and uncertainty of the unclaimed debt to Professor Lorrimor have inured you to extreme anxiety. You gain a +2 trait bonus on saves against fear effects.</Pair>
</Ability>
</>};
const _on_the_payroll = {title: "On the Payroll", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/carrion_crown_players_guide">Carrion Crown Player's Guide</Link></p>
<Ability id="on-the-payroll" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="on-the-payroll">On the Payroll</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Carrion Crown</Pair>
<Pair single="flavor" id="on-the-payroll-flavor">Whether he needed a bodyguard in a rough neighborhood, a guide to an isolated archeological dig, or information on a specialized topic, Professor Lorrimor was never shy about hiring professionals to help him attain his goals. Over the course of his long career, thousands of people throughout the world served his needs and benefited from his generous wages (usually covered by his academic benefactor at the time). He had contacts in most areas of expertise in every corner of the known world, a knack for recognizing talent, and a desire to be surrounded by the best and brightest at all times. Whatever job the professor originally hired you for, your performance captured his attention, and he hired you many times throughout your career, sometimes even for jobs away from your home, always paying your expenses and compensating you well for your time. In your area of expertise, you are among the best.</Pair>
<Pair single="benefit" id="on-the-payroll-benefit">Your years of hard work have paid off, granting you an additional 150 gp in starting wealth.</Pair>
</Ability>
</>};
const _subject_of_study = {title: "Subject of Study", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/carrion_crown_players_guide">Carrion Crown Player's Guide</Link></p>
<Ability id="subject-of-study" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="subject-of-study">Subject of Study</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Carrion Crown</Pair>
<Pair single="flavor" id="subject-of-study-flavor">Professor Lorrimor approached you as part of his studies, as he had heard that you had survived a recent encounter with a strange monster or had another fateful encounter. Interested in the conditions of the runin and the means by which you avoided death or injury, he met with you and maintained frequent correspondence until several months ago. The scars of your experience and his continual reminders of the encounter prompted you to hone your skills lest you someday face the same type of creature again. The professor assisted you in this endeavor, providing you with insight into the anatomy and defenses of the creature that attacked you.</Pair>
<Pair single="benefit" id="subject-of-study-benefit">Years of study have improved your combat effectiveness against your chosen foe. Choose a non-humanoid creature type (and subtype if outsider). You gain a +1 bonus on damage rolls against creatures of this type. See the ranger <Link to="/ability/favored_enemy">favored enemy</Link> suggestions for a list of creature types most likely to appear in this campaign.</Pair>
</Ability>
</>};
const _teachers_pet = {title: "Teacher's Pet", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/carrion_crown_players_guide">Carrion Crown Player's Guide</Link></p>
<Ability id="teachers-pet" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="teachers-pet">Teacher's Pet</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Carrion Crown</Pair>
<Pair single="flavor" id="teachers-pet-flavor">Professor Lorrimor traveled the Inner Sea region lecturing and teaching at universities in locations as far-flung as Manaket and Magnimar, and as different in scope as the bardic colleges of Taldor and the battle colleges of the River Kingdoms. Speaking before standing-room-only lecture halls on topics as widely ranging as military strategy, planar anomalies, theology, and agriculture, Lorrimor's time was highly valued among those ambitious to benefit from his expertise. Despite this, he still managed to provide one-on-one assistance to the most promising of his acolytes. When he saw the potential for greatness in one of his charges, he took it upon himself to nurture their spark. You were such a student. Over the course of several months, you and the late professor spent hours debating the finer points of your topic of interest, and the intellectual doors he opened for you continue to flavor your outlook on the world.</Pair>
<Pair single="benefit" id="teachers-pet-benefit">You gain a +2 trait bonus to one Knowledge skill of your choosing and consider it a class skill.</Pair>
</Ability>
</>};
const _child_of_infamy = {title: "Child of Infamy", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/council_of_thieves_players_guide">Council of Thieves Player's Guide</Link></p>
<Ability id="child-of-infamy" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="child-of-infamy">Child of Infamy</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Council of Thieves</Pair>
<Pair single="flavor" id="child-of-infamy-flavor">Your family has long been in show business. Perhaps it was your parents, or an older sibling, or an uncle or aunt-whatever the case, one of your close relatives is, or was, a well-known and well-loved actor or actress. That this relation died in some compromising and embarrassing way has done little to alter your family's name and fame - if anything, the unfortunate death has increased it. When folk learn your last name, they are quick to assume you live a wild life like your ill-fated relative, and whether you bask in this notoriety or do your best to hide your heritage, the years of association with the acting scene have had their effect. You've certainly inherited your relative's talents, and are a larger-than-life figure, a melodramatic attention-hound, or a sly manipulator of emotions.</Pair>
<Pair single="benefit" id="child-of-infamy-benefit">You gain a +1 trait bonus on Perform (act) skill checks, and the skill is always considered a class skill for you. Furthermore, You've inherited some of your relative's funds, and begin play with a nest egg of 300 gp that you can spend however you wish.</Pair>
</Ability>
</>};
const _conspiracy_hunter = {title: "Conspiracy Hunter", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/council_of_thieves_players_guide">Council of Thieves Player's Guide</Link></p>
<Ability id="conspiracy-hunter" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="conspiracy-hunter">Conspiracy Hunter</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Council of Thieves</Pair>
<Pair single="flavor" id="conspiracy-hunter-flavor">You've long heard rumors of dark deeds afoot in Westcrown. Shipments of valuable cargo that go missing with nary a trace or question asked. People who disappear as though they never existed. Lords of business and nobles who speak in veiled references and accidental slips of masters even they must obey. What lords rule the Westcrown underworld? Do the tales of far-reaching criminal organizations hold a hint of truth? Could the fabled <Link to="/rule/council_of_thieves">Council of Thieves</Link>, said to have been purged from the city ages ago, have somehow survived or reformed? And what hold do they hold over the city today? You don't know, but you're determined to find out!</Pair>
<Pair single="benefit" id="conspiracy-hunter-benefit">Choose one of the following skills: Bluff, Diplomacy, Knowledge (local), Perception, Sense Motive, or Stealth. You gain a +1 trait bonus on this skill and it is always considered a class skill for you.</Pair>
</Ability>
</>};
const _diabolist_raised = {title: "Diabolist Raised", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/council_of_thieves_players_guide">Council of Thieves Player's Guide</Link></p>
<Ability id="diabolist-raised" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="diabolist-raised">Diabolist Raised</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Council of Thieves</Pair>
<Pair single="benefit" id="diabolist-raised-benefit">All your life you've lived within the grip of devil-possessed Cheliax. You care little for the religion of your country, but that is the way of life in the most magnificent empire in the world, and who are you to question the faith of the empire's rulers? Certainly not a fool like some of your more idealistic acquaintances, possessed of bizarre ideals about personal freedoms and egalitarian rulership-who can say whatever happened to them? You know of Hell and the rigidity of its grim rulers, you've seen devils and how they might be employed to the betterment of those with the might to control them, and you know of the dark faith of your country. You might not be a devil worshiper yourself, but there are realities to living in Cheliax, and it's always good to know what's really going on behind the scenes. Your knowledge of diabolism grants you a +1 bonus on Bluff, Diplomacy, Intimidate, and Sense Motive checks made against Westcrown's nobility, and a +1 bonus on all saving throws made against mind-affecting attacks from devils.</Pair>
</Ability>
</>};
const _infernal_bastard = {title: "Infernal Bastard", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/council_of_thieves_players_guide">Council of Thieves Player's Guide</Link></p>
<Ability id="infernal-bastard" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="infernal-bastard">Infernal Bastard</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Council of Thieves</Pair>
<Pair single="benefit" id="infernal-bastard-benefit">You are a tiefling. You might be an escaped slave, a hidden shame, or a homeless vagabond, but whatever your upbringing, life has been particularly hard on you. You have suffered greatly, nearly starving to death one winter, nearly being beaten to death by racist sailors one summer, and so on. Whether or not these experiences have made you a bitter and cynical scoundrel or a pious and hopeful optimist is up to you, but one thing is certain-you are something less than even your tiefling kin. Perhaps it is a result of your hard life, or perhaps it is due to some fault in your fiendish heritage, but you lack a tiefling's standard resistances to cold, electricity, and fire-instead, you merely have a +2 bonus on all saving throws made against these effects. Likewise, you do not have the ability to use <Link to="/spell/darkness">darkness</Link> as a spell-like ability once per day-instead, you may choose any one 0-level spell that you can instead use at will as a spell-like ability.</Pair>
</Ability>
</>};
const _shadow_child = {title: "Shadow Child", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/council_of_thieves_players_guide">Council of Thieves Player's Guide</Link></p>
<Ability id="shadow-child" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="shadow-child">Shadow Child</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Council of Thieves</Pair>
<Pair single="benefit" id="shadow-child-benefit">Westcrown has long suffered under a peculiar curse, a blight that rises every night, bringing with it fell beasts that hunt the shadows. No one can say from whence these night-horrors come - though some blame the mysterious wizards of Nidal, other claim that it's some curse laid by fallen Aroden, while still others suggest some shadowy mastermind manipulates an ebon brood from the depths of Westcrown's northern ruins. Whatever the case, the people of Westcrown have long feared the night, but not you. You're goal is to reclaim the darkness from the beasts that hide within. You've acclimated yourself to the dark, and thus act with greater precision in the shadow than most. When attacking targets in areas of dim light, you do not suffer the standard 20% miss chance on attack rolls for being in the poorly lit area.</Pair>
</Ability>
</>};
const _the_pathfinders_exile = {title: "The Pathfinder's Exile", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/council_of_thieves_players_guide">Council of Thieves Player's Guide</Link></p>
<Ability id="the-pathfinders-exile" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="the-pathfinders-exile">The Pathfinder's Exile</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Council of Thieves</Pair>
<Pair single="benefit" id="the-pathfinders-exile-benefit">Westcrown's dilapidated Pathfinder lodge of Delvehaven has long excited your imagination. Forcibly closed by the order of the city's diabolical rulers, the Pathfinders of Westcrown were exiled, forcing them to leave behind untold knowledge and the treasures of countless expeditions. Today, Delvehaven lies under the pale of fearful rumors and dark magic, and bureaucratic red tape has prevented trespass on the lodge's well-protected grounds. Having secretly and illegally contacted agents of the Pathfinders, you've expressed your interest in aiding their ventures in Cheliax-with a particular eye toward investigating Delvehaven, the source of your long-standing adventuresome interests. To your surprise, some days ago you received a message back from an unnamed Pathfinder operating underground in the country. Along with encouraging you to investigate the lodge and report your findings to the Grand Lodge in Absalom, he's sent along a battered and tarnished, yet still functional wayfinder. you've promised yourself to pay back your unknown contact the 500 gp cost of the item someday, but until then, it's yours to use. A wayfinder is a magical compass that grants you a +2 circumstance bonus on Survival checks to avoid becoming lost, and can be commanded to emit <Link to="/spell/light">light</Link> as the spell (CL 5th) as a standard action.</Pair>
</Ability>
</>};
const _westcrown_firebrand = {title: "Westcrown Firebrand", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/council_of_thieves_players_guide">Council of Thieves Player's Guide</Link></p>
<Ability id="westcrown-firebrand" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="westcrown-firebrand">Westcrown Firebrand</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Council of Thieves</Pair>
<Pair single="flavor" id="westcrown-firebrand-flavor">There's something very wrong with the world. Spouses were not meant to huddle at their windows hoping and fearing day after day that their loved ones returned from work safely. Parents were not meant to hush their children when questioned about what happened to their neighbors. Citizens were not meant to avert their eyes and hurry by as guardsmen beat old friends in the street. The people of Westcrown have suffered long enough! It's time for a change. But how? You've heard rumors of bands of free-thinking individuals meeting after the citywide curfew. Perhaps they might share your ideals? You are quick to react to opportunity, both physically and mentally, and know that it is with sudden and swift action that many conflicts are best resolved.</Pair>
<Pair single="benefit" id="westcrown-firebrand-benefit">You gain a +1 trait bonus on Initiative checks, and if you act in a surprise round, you gain a +1 trait bonus on all attack rolls.</Pair>
</Ability>
</>};
const _betrayed_cotct = {title: "Betrayed (CotCT)", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/curse_of_the_crimson_throne">Curse of the Crimson Throne</Link></p>
<Ability id="betrayed-cotct" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="betrayed-cotct">Betrayed (CotCT)</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Curse of the Crimson Throne</Pair>
<Pair single="flavor" id="betrayed-cotct-flavor">You were hardly a model citizen as a child or young adult. Your reasons for turning to a life of crime may be varied, but what matters is that you eventually fell in with a certain well-connected and notorious crime lord named Gaedren Lamm. His reputation as a snake and a treacherous scoundrel was known to you, but for reasons of your own, you chose not to turn him down when he offered you a chance to work for him. You may have assumed you were an exception, or that you'd be able to handle him, or perhaps even planned to betray him. As it worked out, though, Gaedren got the upper hand and took you down you first. You may have served time in jail, may have been beaten by his thugs and left for dead, or could simply have had your profits stolen out from under you. Whatever the cause, Gaedren wronged you, and you are eager for the chance to get revenge.</Pair>
<Pair single="benefit" id="betrayed-cotct-benefit"><p>Choose one of the following benefits.</p>
<ul>
<li><strong>Hungry for Revenge:</strong> You've never forgiven Gaedren for his betrayal, and have vowed to make him pay for what he did. Whether that's seeing him rot in jail or a shallow grave, you hope to taste vengeance someday. Whenever you deal damage with a melee weapon on a creature that is flat-footed, you gain a +1 trait bonus on the damage roll.</li>
<li><strong>Reformed Criminal:</strong> You've given up the life of crime, and managed to talk your way out of any repercussions such as jail time or fines. You've told yourself that you would rather leave your past behind, yet the concept of seeing Gaedren Lamm pay for his crimes still appeals to you. You gain a +1 trait bonus on Diplomacy checks, and Diplomacy is a class skill for you.</li>
</ul>
</Pair>
</Ability>
</>};
const _dockside_avenger = {title: "Dockside Avenger", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends</Link>, <Link to="/source/curse_of_the_crimson_throne_players_guide">Curse of the Crimson Throne Player's Guide</Link></p>
<Ability id="dockside-avenger" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="dockside-avenger">Dockside Avenger</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Curse of the Crimson Throne</Pair>
<Pair single="benefit" id="dockside-avenger-benefit">No crime is too despicable for Gaedren Lamm and his thugs - a gang of lowlife murderers, kidnappers, and drug dealers that operate in Korvosa's Midland district. You've lost someone to Lamm and now you're out for revenge. While Lamm remains alive and free, you are not slain until your hit point total reaches a negative number equal to your Constitution score + 3. Once Lamm is imprisoned or killed, you lose the former benefit but gain 3 permanent hit points.</Pair>
</Ability>
</>};
const _drug_addict = {title: "Drug Addict", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/curse_of_the_crimson_throne">Curse of the Crimson Throne</Link>, <Link to="/source/curse_of_the_crimson_throne_players_guide">Curse of the Crimson Throne Player's Guide</Link></p>
<Ability id="drug-addict" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="drug-addict">Drug Addict</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Curse of the Crimson Throne</Pair>
<Pair single="flavor" id="drug-addict-flavor">Someone you know has become addicted to shiver, a drug distilled from the venom of tropical arachnids known as dream spiders. The drug induces sleep filled with vivid dreams, during which the user's body shakes and shivers, giving the substance its street name. You've always thought of shiver as a problem of the lower class, but then someone you know overdosed on the stuff. You've done a bit of investigating and have learned that the villain who got your friend addicted in the first place was a crime lord named Gaedren Lamm. Unfortunately, the guards seem to be focused on the bigger dealers. They don't have time to devote many resources to what You've called "a bit player in a beggar's problem." It would seem that if Gaedren's operation is to be stopped, it falls to you.</Pair>
<Pair single="benefit" id="drug-addict-benefit"><p>Choose one of the following benefits.</p>
<ul>
<li><strong>Addicted Friend:</strong> The addict is a friend or lover who might or might not have survived the overdose. Your research into the drug scene and local politics has given you a respectable education in street knowledge. You gain a +1 trait bonus on Knowledge (local) checks, and Knowledge (local) is a class skill for you.</li>
<li><strong>Personal Addiction:</strong> You were the addict. You blame Gaedren for your brush with death and hate how his drugs are causing similar problems among other youths. Fortunately, your body recovers quickly from toxins, and you gain a +1 trait bonus on Fortitude saving throws.</li>
</ul>
</Pair>
</Ability>
</>};
const _framed = {title: "Framed", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/curse_of_the_crimson_throne">Curse of the Crimson Throne</Link>, <Link to="/source/curse_of_the_crimson_throne_players_guide">Curse of the Crimson Throne Player's Guide</Link></p>
<Ability id="framed" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="framed">Framed</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Curse of the Crimson Throne</Pair>
<Pair single="flavor" id="framed-flavor">Someone you know and love was accused of murder. A supposed eyewitness account from a local fisherman seemed to be enough to seal the case, but the accused had enough alibis that sentencing wasn't immediate. Someone confronted the fisherman and discovered he was intimidated into providing false witness and forced into planting the murder weapon by the actual murderer - a local crime lord named Gaedren Lamm, whose thugs killed the fisherman before he could recant his testimony. Although this removed the key witness and resulted in the accused being set free, the stigma was enough to badly damage the accused's reputation. If you can find Gaedren, you're sure you can find evidence that ties him to the murder and can clear the accused's name.</Pair>
<Pair single="benefit" id="framed-benefit"><p>Choose one of the following benefits.</p>
<ul>
<li><strong>Dropout:</strong> You were the one accused of the murder. Although you were eventually freed when a friend confronted the fisherman and got the truth, the damage had been done. You were forced to leave your school or church. As a result, you were forced to self-train and promised yourself you would become better at your chosen profession despite the spurning of your peers. You gain a +1 trait bonus on Spellcraft checks, and Spellcraft is a class skill for you.</li>
<li><strong>Family Honor:</strong> The person who was framed was a family member, perhaps a father or sister. You managed to trick the fisherman into revealing the truth with your skilled tongue. You gain a +1 trait bonus on Bluff checks, and Bluff is a class skill for you.</li>
</ul>
</Pair>
</Ability>
</>};
const _love_lost = {title: "Love Lost", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/curse_of_the_crimson_throne">Curse of the Crimson Throne</Link>, <Link to="/source/curse_of_the_crimson_throne_players_guide">Curse of the Crimson Throne Player's Guide</Link></p>
<Ability id="love-lost" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="love-lost">Love Lost</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Curse of the Crimson Throne</Pair>
<Pair single="flavor" id="love-lost-flavor">Someone you loved was knifed to death in a dark alley one night. You were called to the scene by the Korvosan Guard to identify the body, and as rough as that was for you, you also noticed a ring was missing from your loved one's finger. Whoever murdered your loved one stole that ring: you're convinced of it. You've done some investigation on your own and recently found the ring for sale at a local merchant's shop. To your great frustration, you can't yet afford the 500 gp to buy it back, but the merchant did tell you from whom he purchased the ring: a man named Gaedren Lamm. It seems likely this criminal killed your loved one, or at the very least, he knows who did. The only problem is finding him.</Pair>
<Pair single="benefit" id="love-lost-benefit"><p>Choose one of the following benefits.</p>
<ul>
<li><strong>All Alone:</strong> The murder victim was a lover. With your lover's death, a part of you died as well, leaving you haunted, grim, and prone to dark musings. You gain a +1 trait bonus on Intimidate checks, and Intimidate is a class skill for you.</li>
<li><strong>Orphaned:</strong> The murder victim was your only surviving parent. You had to work hard to make ends meet for yourself and any siblings, and often had to scavenge for food. You gain a +1 trait bonus on Survival checks, and Survival is a class skill for you.</li>
</ul>
</Pair>
</Ability>
</>};
const _missing_child = {title: "Missing Child", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/curse_of_the_crimson_throne">Curse of the Crimson Throne</Link>, <Link to="/source/curse_of_the_crimson_throne_players_guide">Curse of the Crimson Throne Player's Guide</Link></p>
<Ability id="missing-child" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="missing-child">Missing Child</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Curse of the Crimson Throne</Pair>
<Pair single="flavor" id="missing-child-flavor">You suspect that a child you know has been abducted by Gaedren Lamm. Whatever the relationship, you've heard rumors about "Lamm's Lambs," and of how the old man uses children as pickpockets and agents for his crimes. you've even heard rumors that the child you're looking for has been spotted in the marketplaces in the company of known cutpurses and pickpockets. Although the Korvosan Guard has been understanding of your plight, it has its hands full with "more important" matters these days, it seems, and has not yet been able to learn anything more about Gaedren. No one else is interested in bringing Gaedren down and rescuing his victims-that task falls to you. Yet where could the old scoundrel be hiding?</Pair>
<Pair single="benefit" id="missing-child-benefit"><p>Choose one of the following benefits.</p>
<ul>
<li><strong>Missing Sibling:</strong> The missing child is a brother or sister. Although everyone else has given up hope, you believe your sibling still lives. Your constant search for the missing sibling has developed into great skill at rumormongering and finding out information from others. You gain a +1 trait bonus on Sense Motive checks, and Sense Motive is a class skill for you.</li>
<li><strong>Missing Son or Daughter:</strong> The missing child is your own son or daughter, a niece or nephew, or a child you were charged with protecting. The child was abducted during a trip to the market or other daily event. Your stubbornness and long hours spent searching for rumors grant you a +1 trait bonus on Will saves.</li>
</ul>
</Pair>
</Ability>
</>};
const _unhappy_childhood = {title: "Unhappy Childhood", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/curse_of_the_crimson_throne">Curse of the Crimson Throne</Link>, <Link to="/source/curse_of_the_crimson_throne_players_guide">Curse of the Crimson Throne Player's Guide</Link></p>
<Ability id="unhappy-childhood" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="unhappy-childhood">Unhappy Childhood</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Curse of the Crimson Throne</Pair>
<Pair single="flavor" id="unhappy-childhood-flavor">You spent a period of time as one of Gaedren Lamm's enslaved orphans, doing all manner of dirty work for him. Maybe you were abducted from your parent's home or during a trip to the market. Perhaps the irresponsible matron who ruled your orphanage traded you to him in return for a desperately needed financial loan. Or perhaps you, like most of Gaedren's slaves, were merely a child of the street who succumbed to his promise of regular meals and a roof in return for what he said would be "a little light work." Whatever the case, you spent several years of your life as one of "Lamm's Lambs" before escaping. You've nursed a grudge against the old man ever since.</Pair>
<Pair single="benefit" id="unhappy-childhood-benefit"><p>Choose one of the following benefits.</p>
<ul>
<li><strong>Religious:</strong> Today, while on a job for Gaedren, you found a holy symbol of the god you worship, and intrigued by it, you snuck off to attend services. When Gaedren found out, he beat you to within an inch of your life and broke your holy symbol. Your faith let you block out the pain, and you escaped his control and took shelter in the church, where you spent the rest of your youth. You gain a +2 trait bonus on <Link to="/rule/concentration">concentration</Link> checks and Constitution checks to stabilize at negative hit points.</li>
<li><strong>Tortured:</strong> After you made one too many errors, Gaedren tortured you and left you for dead in a garbage heap. Your scars and memories have motivated you to hone your reaction speed and make you rather jumpy. You gain a +1 trait bonus on Reflex saves.</li>
</ul>
</Pair>
</Ability>
</>};
const _varisian_immunity = {title: "Varisian Immunity", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends</Link>, <Link to="/source/curse_of_the_crimson_throne_players_guide">Curse of the Crimson Throne Player's Guide</Link></p>
<Ability id="varisian-immunity" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="varisian-immunity">Varisian Immunity</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Curse of the Crimson Throne</Pair>
<Pair single="flavor" id="varisian-immunity-flavor">Your family is particularly hearty, and has even passed down tales of a Varisian ancestor who sought to cure (or, some loose-lipped relatives say, create) diseases.</Pair>
<Pair single="benefit" id="varisian-immunity-benefit">You gain a +1 trait bonus on saving throws made to resist diseases. Additionally, you are immune to the diseases Vorel's phage and blood veil. You do not need to be of the Varisian ethnicity to take this campaign trait, but if you're not, your background should explain how you have a Varisian ancestor.</Pair>
</Ability>
</>};
const _artifact_hunter_gs = {title: "Artifact Hunter (GS)", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/giantslayer_players_guide">Giantslayer Player's Guide</Link>, <Link to="/source/giant_hunters_handbook">Giant Hunter's Handbook</Link></p>
<Ability id="artifact-hunter-gs" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="artifact-hunter-gs">Artifact Hunter (GS)</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Giantslayer</Pair>
<Pair single="flavor" id="artifact-hunter-gs-flavor">You've always had an interest in magic, but you're fascinated with those legendary magic items known as artifacts. You've spent years researching these mythical relics and committed the stories and legends about them to memory, making you something of an expert on the subject.</Pair>
<Pair single="benefit" id="artifact-hunter-gs-benefit">You gain a +1 trait bonus on Spellcraft checks to identify the properties of magic items and a +1 trait bonus on Use Magic Device checks, and one of these skills (your choice) becomes a class skill for you. In addition, whenever you first encounter an artifact, there is a 50% chance (+1% per level) that you recognize the artifact and know its name, origin, and something of that artifact's powers, abilities, or dangers. Exactly how much knowledge you possess is left to the GM's discretion.</Pair>
</Ability>
</>};
const _dragonfoe = {title: "Dragonfoe", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/giantslayer_players_guide">Giantslayer Player's Guide</Link>, <Link to="/source/giant_hunters_handbook">Giant Hunter's Handbook</Link></p>
<Ability id="dragonfoe" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="dragonfoe">Dragonfoe</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Giantslayer</Pair>
<Pair single="flavor" id="dragonfoe-flavor">You've always hated dragons. Perhaps one of your ancestors was a well-known dragonslayer, or a rampaging dragon killed your family or friends. Maybe the stories you grew up hearing about knights rescuing captive princes and princesses from the clutches of evil dragons inspired you to slay dragons. Whatever the reason for your obsession, it has driven you to study how to fight dragons and defend yourself against their fearsome attacks.</Pair>
<Pair single="benefit" id="dragonfoe-benefit">You gain a +1 dodge bonus to AC against creatures with the dragon type and a +2 trait bonus on Reflex saves against breath weapon attacks.</Pair>
</Ability>
</>};
const _dwarf_trained = {title: "Dwarf-Trained", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/giantslayer_players_guide">Giantslayer Player's Guide</Link>, <Link to="/source/giant_hunters_handbook">Giant Hunter's Handbook</Link></p>
<Ability id="dwarf-trained" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="dwarf-trained">Dwarf-Trained</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Giantslayer</Pair>
<Pair single="flavor" id="dwarf-trained-flavor">Dwarves are well acquainted with the threats posed by giants and orcs, and they have spent centuries honing their techniques for fighting these foes. You have trained with the dwarves and have learned some of the tactics they use against their hated enemies.</Pair>
<Pair single="benefit" id="dwarf-trained-benefit">You gain a +2 dodge bonus to AC against creatures with the giant subtype (this does not stack with the bonus granted by the defensive training racial trait of dwarves and gnomes) and a +1 trait bonus on attack rolls against creatures with the orc subtype (this does not stack with the bonus granted by the dwarf hatred racial trait). Dwarves and gnomes can't choose this trait.</Pair>
</Ability>
</>};
const _giant_blooded = {title: "Giant-Blooded", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/giantslayer_players_guide">Giantslayer Player's Guide</Link>, <Link to="/source/giant_hunters_handbook">Giant Hunter's Handbook</Link></p>
<Ability id="giant-blooded" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="giant-blooded">Giant-Blooded</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Giantslayer</Pair>
<Pair single="benefit" id="giant-blooded-benefit">Your family has always been dogged by rumors that a bit of giant blood got into the family's veins at some point. Whether this was through alchemical or magical experimentation, or because your great-great-grandfather married a giant, it has made you big for your race, and may have given you other minor cosmetic features of giants, such as flaming red hair, a bluish tinge to your skin, or oversized hands. When you wield a weapon that is larger than your size, the penalty on attack rolls for using inappropriately sized weapons is reduced by half. In addition, you gain a +2 trait bonus to your CMD against awesome blow combat maneuvers. If you're a dwarf, your stability racial trait applies to awesome blow combat maneuvers as well.</Pair>
</Ability>
</>};
const _giantslayer_scion = {title: "Giantslayer Scion", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/giantslayer_players_guide">Giantslayer Player's Guide</Link>, <Link to="/source/giant_hunters_handbook">Giant Hunter's Handbook</Link></p>
<Ability id="giantslayer-scion" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="giantslayer-scion">Giantslayer Scion</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Giantslayer</Pair>
<Pair single="benefit" id="giantslayer-scion-benefit">You grew up listening to tales of a famed ancestor's mighty battles against giant foes. Just the mention of your ancestor's name is enough to strike fear into the heart of the most stalwart giant warrior, and you've resolved to follow in your forebear's footsteps. You take no penalty on Intimidate checks against creatures with the giant subtype that are larger than you, and you gain a +1 trait bonus to the DC of any fear-based effect you use against a creature with the giant subtype.</Pair>
</Ability>
</>};
const _orphaned_by_giants = {title: "Orphaned by Giants", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/giantslayer_players_guide">Giantslayer Player's Guide</Link>, <Link to="/source/giant_hunters_handbook">Giant Hunter's Handbook</Link></p>
<Ability id="orphaned-by-giants" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="orphaned-by-giants">Orphaned by Giants</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Giantslayer</Pair>
<Pair single="flavor" id="orphaned-by-giants-flavor">You grew up in a tranquil, happy home near the mountains, but that peace was shattered when giants came down from the mountains to raid your settlement. The giants killed your parents and left you a young orphan, and since that day, you've sworn to avenge the deaths of your kin.</Pair>
<Pair single="benefit" id="orphaned-by-giants-benefit">You gain a +1 trait bonus on attack rolls against creatures with the giant subtype, and a +2 trait bonus on rolls to confirm critical hits against creatures with the giant subtype.</Pair>
</Ability>
</>};
const _roll_with_it = {title: "Roll With It", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/giantslayer_players_guide">Giantslayer Player's Guide</Link>, <Link to="/source/giant_hunters_handbook">Giant Hunter's Handbook</Link></p>
<Ability id="roll-with-it" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="roll-with-it">Roll With It</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Giantslayer</Pair>
<Pair single="flavor" id="roll-with-it-flavor">You've trained with some of the best giantslayers out there, and have learned how to avoid the worst effects of a giant's powerful attacks.</Pair>
<Pair single="benefit" id="roll-with-it-benefit">You gain a +1 trait bonus on Reflex saves. In addition, once per day, when a creature with the giant subtype successfully confirms a critical hit against you with a weapon or a slam attack (not a spell or special ability), you can roll with the attack. You take normal damage from the blow, as if the critical had not been confirmed. You must be aware of the attack and able to react to it - if you are denied your Dexterity bonus to AC, you can't use this ability. If you are a dwarf or a gnome, you can use this ability twice per day.</Pair>
</Ability>
</>};
const _student_of_giantkind = {title: "Student of Giantkind", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/giantslayer_players_guide">Giantslayer Player's Guide</Link>, <Link to="/source/giant_hunters_handbook">Giant Hunter's Handbook</Link></p>
<Ability id="student-of-giantkind" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="student-of-giantkind">Student of Giantkind</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Giantslayer</Pair>
<Pair single="flavor" id="student-of-giantkind-flavor">You've always been fascinated by the giant races, and have devoted a considerable amount of time to studying their history and societies, gaining insight into the way they think and use their abilities.</Pair>
<Pair single="benefit" id="student-of-giantkind-benefit">You gain a +1 trait bonus on Diplomacy checks against creatures with the giant subtype and a +1 trait bonus on Knowledge (local) checks regarding creatures with the giant subtype, and one of these skills (your choice) becomes a class skill for you. In addition, you know the Giant language (this does not count toward your number of languages).</Pair>
</Ability>
</>};
const _trunau_native = {title: "Trunau Native", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/giantslayer_players_guide">Giantslayer Player's Guide</Link>, <Link to="/source/giant_hunters_handbook">Giant Hunter's Handbook</Link></p>
<Ability id="trunau-native" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="trunau-native">Trunau Native</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Giantslayer</Pair>
<Pair single="flavor" id="trunau-native-flavor">You were born and raised in the town of Trunau, one of the few human settlements in the orc-dominated Hold of Belkzen. Orc attacks are an ever-present threat, and like all Trunauans, you have made the Standing Vow: to hold Trunau against all attackers, orc or otherwise, to stand your ground, and to live free or die trying. Upon coming of age, you were given a hopeknife - a small, sheathed dagger, usually worn on a chain under your clothes - and taught how to use it to take your own life to avoid capture by orcs, or to grant the mercy of a quick death to the wounded. As a native, you have served in Trunau's militia, and fought alongside Patrol Captains Kurst and Rodrik Grath.</Pair>
<Pair single="benefit" id="trunau-native-benefit">You begin play with a hopeknife (a masterwork dagger), and your tenacity in the face of adversity grants you a +1 trait bonus on Will saves.</Pair>
</Ability>
</>};
const _vexing_defender = {title: "Vexing Defender", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/giantslayer_players_guide">Giantslayer Player's Guide</Link>, <Link to="/source/giant_hunters_handbook">Giant Hunter's Handbook</Link></p>
<Ability id="vexing-defender" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="vexing-defender">Vexing Defender</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Giantslayer</Pair>
<Pair single="flavor" id="vexing-defender-flavor">You're trained in fighting opponents that are larger than you, and you are skilled at keeping them on their toes, pestering them from all directions.</Pair>
<Pair single="benefit" id="vexing-defender-benefit">You gain a +1 trait bonus on Acrobatics checks, and Acrobatics becomes a class skill for you. In addition, you gain a +4 trait bonus on Acrobatics checks to move through an enemy's space without provoking an attack of opportunity, provided that enemy is larger than you.</Pair>
</Ability>
</>};
const _child_of_kintargo = {title: "Child of Kintargo", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_rebels_players_guide">Hell's Rebels Player's Guide</Link></p>
<Ability id="child-of-kintargo" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="child-of-kintargo">Child of Kintargo</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Rebels</Pair>
<Pair single="flavor" id="child-of-kintargo-flavor">You had the fortune (or perhaps the misfortune, depending on your viewpoint) to be born into one of Kintargo's noble families. Your experience growing up among the city's well-to-do has given you an upper hand when it comes to knowledge of high society, and you start the game with a modest inheritance. With the new situation in Kintargo brewing, there is much concern about an eventual restructuring of the city's nobility. Already, one noble estate has burned to the ground under what can best be described as suspicious circumstances, but whether the government or rebels were responsible depends on whom you ask. With this trait, the assumption is that you belong to a minor noble family (and can make up your family name). In this case, your family keeps a small manor in the Greens. If you want to be a member of one of Kintargo's major noble families, you must take the <Link to="/feat/noble_scion">Noble Scion</Link> feat at 1st level.</Pair>
<Pair single="benefit" id="child-of-kintargo-benefit">You gain a +1 trait bonus on Knowledge (nobility) checks, and Knowledge (nobility) is always a class skill for you. The Noble Scion feat does not have a Charisma prerequisite for you. In addition, you start play with a noble's outfit, a signet ring, and a single additional nonmagical item worth no more than 200 gp. If you take the Noble Scion feat, your last name is probably Aulamaxa, Aulorian, Delronge, Jarvis, Jhaltero, Sarini, Tanessen, or Vashnarstill; if you're not human, you were adopted into the family. If you don't take this feat, you can make up your last name.</Pair>
</Ability>
</>};
const _diva_in_training = {title: "Diva in Training", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_rebels_players_guide">Hell's Rebels Player's Guide</Link></p>
<Ability id="diva-in-training" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="diva-in-training">Diva in Training</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Rebels</Pair>
<Pair single="flavor" id="diva-in-training-flavor">The opera is perhaps the most important and prestigious form of entertainment offered in Kintargo, and the Kintargo Opera House is among the most famous of its kind. You're hardly a superstar among the performers who've graced the stage there, but you have performed several times before in small parts. Just recently, you got your big break-you'd won a role in the infamous opera Huntress of Heroes, and had been studying for the role furiously before the onset of martial law dashed your plans to the dirt. Now that the Kintargo Opera House has been claimed by Barzillai Thrune, all shows have been canceled and your chance at success seems to have been lost. Yet you can't lose hope. You still practice your skills, and some day, perhaps the Kintargo Opera House will open its doors again, at which point you intend to be center stage!</Pair>
<Pair single="benefit" id="diva-in-training-benefit">Choose one type of Perform skill. You gain a +1 trait bonus in that specific Perform skill, and all Perform skills are class skills for you. You also increase the save DCs of all language-dependent spells and effects you create by 1.</Pair>
</Ability>
</>};
const _ex_asmodean = {title: "Ex-Asmodean", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_rebels_players_guide">Hell's Rebels Player's Guide</Link></p>
<Ability id="ex-asmodean" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="ex-asmodean">Ex-Asmodean</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Rebels</Pair>
<Pair single="flavor" id="ex-asmodean-flavor">You, or perhaps your family, were once worshipers of Asmodeus, but something happened that made you lose your faith. Perhaps your family was asked to give up something dear as a sacrifice, such as the life of a newly born brother or sister. Maybe the church used your family as a scapegoat to cover up a crime someone higher in the church committed. Or perhaps you simply met someone who opened your eyes and showed you the truth-that Asmodeus does not care for his followers, and that the deity of your new religion does. In any event, you left the church, and as a result, your family was punished; they were either put in prison, exiled from Kintargo, or perhaps even executed. Ever since, you've vowed to some day get revenge against the church.</Pair>
<Pair single="benefit" id="ex-asmodean-benefit">Choose one: you gain a +1 trait bonus on attack rolls and weapon damage rolls or you gain a +1 trait bonus on the save DCs of your spells against agents of House Thrune and worshipers of Asmodeus, including most (but not all) devils.</Pair>
</Ability>
</>};
const _fed_up_citizen = {title: "Fed-Up Citizen", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_rebels_players_guide">Hell's Rebels Player's Guide</Link></p>
<Ability id="fed-up-citizen" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="fed-up-citizen">Fed-Up Citizen</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Rebels</Pair>
<Pair single="flavor" id="fed-up-citizen-flavor">Kintargo is a tough place to live if you count yourself as a law-abiding citizen. While you likely agree with most others of Kintargo that many of the laws put in place by House Thrune seem excessive, you always respected the law and honored it as best you could. You likely worship a deity such as <Link to="/faith/abadar">Abadar</Link> or <Link to="/faith/iomedae">Iomedae</Link> -a lawful neutral or perhaps lawful good power allowed to practice within Cheliax, but only under restrictions. Yet despite this, Thrune has always made Cheliax a safer place to live. But with recent events, enough is enough. As much as it pains you to admit, the law of the land is now manifestly and obviously not correct, and something must be done to oppose this misuse of power. If that means aligning yourself to a rebel faction such as the <Link to="/rule/silver_ravens">Silver Ravens</Link>, so be it.~~~Note that this trait works particularly well for paladins or other characters who wish to venerate lawful causes but still oppose the government. Your GM should be open to allowing lawful characters to perform actions out of character for someone of lawful alignment, provided the end goal is a new and better government for Kintargo, but with this feat, characters tied strongly to law (such as lawful clerics, monks, or paladins) can hide those ties in ways that help them perform as rebels without giving up their actual convictions.</Pair>
<Pair single="benefit" id="fed-up-citizen-benefit"><p>You're good at hiding your true colors and faith to avoid attracting the wrong kind of attention. You gain a +1 bonus on <Link to="/skill/disguise">Disguise</Link> checks, and Disguise is always a class skill for you.</p>
<p>In addition, when someone uses <Link to="/spell/detect_good">detect good</Link> or <Link to="/spell/detect_law">detect law</Link> on you, your effective Hit Dice are 4 lower than their actual total when someone discerns the strength of your <em>aura.</em> If you are a cleric, paladin, or similar divine spellcaster, you treat yourself as if you were a standard-aligned creature rather than a divine spellcaster for these purposes. This means that until you become 9th level, you won't radiate an <em>aura of good</em> or <em>law</em> at all when someone casts one of these detection spells.</p>
<p>Finally, your internal convictions that you're on the actual right of law help bolster your mindset, and you gain a +1 trait bonus on all saving throws against mind-affecting effects.</p>
</Pair>
</Ability>
</>};
const _gifted_satirist = {title: "Gifted Satirist", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_rebels_players_guide">Hell's Rebels Player's Guide</Link></p>
<Ability id="gifted-satirist" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="gifted-satirist">Gifted Satirist</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Rebels</Pair>
<Pair single="flavor" id="gifted-satirist-flavor">You grew up among Kintargo's performers and entertainers. Perhaps your parents or older siblings were singers at the Kintargo Opera House, or maybe you simply had to make ends meet as an orphan of the streets by busking. Whatever the case, you've long been exposed to the practice of cloaking scathing political commentaries in the form of harmless entertainment. Whether you conceal your satire in the form of novels, plays, screeds, or public letters, you've yet to make a name for yourself as a political presence in Kintargo - but in time, you hope to change that!</Pair>
<Pair single="benefit" id="gifted-satirist-benefit">You gain a +1 trait bonus on Linguistics checks, and Linguistics is always a class skill for you. In addition, your irreverent attitude grants you a +2 trait bonus on all saving throws against fear effects.</Pair>
</Ability>
</>};
const _historian_of_the_rebellion = {title: "Historian of the Rebellion", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_rebels_players_guide">Hell's Rebels Player's Guide</Link></p>
<Ability id="historian-of-the-rebellion" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="historian-of-the-rebellion">Historian of the Rebellion</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Rebels</Pair>
<Pair single="flavor" id="historian-of-the-rebellion-flavor">You've long been interested in the legacy of the <Link to="/rule/silver_ravens">Silver Ravens</Link> - a group of freedom fighters that rose to prominence in Kintargo during the Chelish Civil War. There's frustratingly little information today about the group, and you suspect that most of what was recorded about the Silver Ravens has long since been redacted or destroyed by government agents, but You've managed to pick up a tidbit here and there. Most of your knowledge isn't so much about the Silver Ravens specifically, but more about general histories of rebel groups and freedom fighters who have fought against oppressive governments throughout history, both in Cheliax and beyond.</Pair>
<Pair single="benefit" id="historian-of-the-rebellion-benefit">Your familiarity with rebel groups allows you to grant a +2 bonus on an Organization check of your choice once the party reestablishes the Silver Ravens during the first adventure. You can change which check you assign this bonus to once at the start of the rebellion's Upkeep phase. Your time preparing for joining the Silver Ravens has also honed your skill at remaining unseen. You gain a +1 trait bonus on Stealth checks, and Stealth is always a class skill for you.</Pair>
</Ability>
</>};
const _natural_born_leader_hr = {title: "Natural Born Leader (HR)", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_rebels_players_guide">Hell's Rebels Player's Guide</Link></p>
<Ability id="natural-born-leader-hr" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="natural-born-leader-hr">Natural Born Leader (HR)</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Rebels</Pair>
<Pair single="flavor" id="natural-born-leader-hr-flavor">Whenever you found yourself involved in a group effort in the past, be it working with siblings to handle a family emergency, conspiring with friends to orchestrate a prank, or throwing in with coworkers to take care of an unanticipated complication at work, you tended to end up in a position of leadership. It might be unclear to you why this is the case, or you might deliberately seek out such positions, knowing you can organize any group to be something greater than the sum of its parts, but your knack for managing groups has always pushed you to the front of any operation you've found yourself a part of.</Pair>
<Pair single="benefit" id="natural-born-leader-hr-benefit">You excel in the role of manager. You treat your Charisma score as if it were 14 (or 2 points higher than its actual score if your actual Charisma is already 14 or higher) for the purposes of determining how many teams you can manage in the rebellion, and for the purposes of determining the bonus you add to your managed teams' actions. In addition, you gain a +1 trait bonus to your Leadership score if you take the <Link to="/feat/leadership">Leadership</Link> feat.</Pair>
</Ability>
</>};
const _pattern_seeker = {title: "Pattern Seeker", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_rebels_players_guide">Hell's Rebels Player's Guide</Link></p>
<Ability id="pattern-seeker" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="pattern-seeker">Pattern Seeker</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Rebels</Pair>
<Pair single="flavor" id="pattern-seeker-flavor">There are patterns in the world, both natural and artificial, that if only one can interpret them correctly, great secrets could be divined. You have long been fascinated by the idea of these hidden patterns, perhaps because a sibling or parent went to the grave obsessed with seeking a pattern, or maybe because you feel that you've uncovered a previously unknown pattern. Kintargo has a particularly unique pattern of its own; the belfry atop the Temple of Asmodeus rings at what seem to be random intervals. None know who or what rings the bells, and no true pattern by which the so-called Devil's Bells has yet accurately predicted the tolling. Many have tried, and extensive but always incomplete documents exist that track the dates and times of recorded ringings back to the end of the Chelish Civil War, when the church of Asmodeus first claimed the abandoned temple of Aroden as their own. Maybe you will be the one to solve the pattern of the Devil's Bells?</Pair>
<Pair single="benefit" id="pattern-seeker-benefit">You gain a +1 trait bonus on all Perception checks, and Perception is always a class skill for you. In addition, you increase the save DC of any illusion (pattern) spell you cast by 1, and you gain a +1 trait bonus on all saving throws against illusion effects.</Pair>
</Ability>
</>};
const _star_struck = {title: "Star Struck", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_rebels_players_guide">Hell's Rebels Player's Guide</Link></p>
<Ability id="star-struck" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="star-struck">Star Struck</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Rebels</Pair>
<Pair single="flavor" id="star-struck-flavor">Growing up in Kintargo, it's hard not to become obsessed with one of the city's celebrities. There are so many to choose from, and they're all so glamorous, rich, and successful! Wouldn't it be amazing to, perhaps some day, meet one of them? Or even better, to be a Kintargan celebrity yourself? Your interest in one of Kintargo's celebrities could be completely benign, with the NPC acting as a muse, inspiration, or role model for you that you used to guide many life choices leading you to this day. Or perhaps your interest is more akin to an obsession, in which you hope to some day live a life like that you imagine your idol lives, or perhaps even to some day meet and become friends (or perhaps more than friends) with your idol. Keep in mind, though, that sometimes a celebrity's public persona and real personality are two very different things, and if some day you were to meet your idol, you might be surprised at the truth! That said, the fact that, by all accounts, your idol has been missing since House Thrune instituted martial law has you worried; you hope he or she is all right! The fact that all five of the local legends listed below have been rumored to have ties to the <Link to="/rule/silver_ravens">Silver Ravens</Link> further concerns you, considering how that group seems to have been particularly targeted by Barzillai Thrune's agents over the past week. The fate of all five of these Kintargan icons will be revealed at some point during the Hell's Rebels Adventure Path, but keep in mind that some of those fates might not be pleasant discoveries for you!</Pair>
<Pair single="benefit" id="star-struck-benefit"><p>You gain a +1 trait bonus on Knowledge (local) checks. Pick one of the following celebrities with which to be obsessed. Each celebrity is associated with a particular ability score. Once per day, you can draw on your inspiration from your icon when you are about to attempt a skill check modified by that ability score. When you do so, roll the check twice and take the better of the two results as your actual result.</p>
<ul>
<li><strong>Jackdaw (sex and race unknown; Intelligence):</strong> A notorious folk hero or heroine (no one seems to know if Jackdaw is a man or woman) who helped defend Kintargo during the Chelish Civil War, and whom many believe still lives on today in the city's shadows.</li>
<li><strong>Jilia Bainilus (female human; Wisdom):</strong> Kintargo's previous lord-mayor was well known for her cutting insights into the political world. Few have fought harder to maintain Kintargo's independence.</li>
<li><strong>Octavio Sabinus (male human; Strength):</strong> The Lictor of the <Link to="/rule/hellknights">Hellknight</Link> Order of the Torrent might seem an odd choice for admiration, but Octavio's physical stature certainly lent him all the support he needed to command a room.</li>
<li><strong>Shensen (female half-elf; Charisma):</strong> Shensen's performances as an outspoken force against the diabolism of House Thrune have won her nearly as many admirers as have her memorable performances on stage in the Kintargo Opera House.</li>
<li><strong>Strea Vestori (female tiefling; Dexterity):</strong> Strea is often regarded as the face of the slums known as the Devil's Nursery. As Kintargo's most outspoken and public tiefling citizen and leader of the Cloven Hoof Society, she has nearly as many admirers as she has political enemies in Cheliax.</li>
</ul>
</Pair>
</Ability>
</>};
const _urban_sleuth = {title: "Urban Sleuth", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_rebels_players_guide">Hell's Rebels Player's Guide</Link></p>
<Ability id="urban-sleuth" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="urban-sleuth">Urban Sleuth</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Rebels</Pair>
<Pair single="flavor" id="urban-sleuth-flavor">Much of Kintargo's history is lost or hidden. You know because you've made a point of seeking out those secrets. Local urban legends and bits of strange historical rumors have long fascinated you-who knows what amazing truths about Kintargo's past have been lost forever to the redactors of House Thrune? What caused Professor Mangvhune of the Alabaster Academy to become the city's most infamous serial killer? Who were the dragons Adrakash, Ithanothaur, and Rivozair, and what were their ties to Kintargo? Why do the Devil's Bells of the Temple of Asmodeus seem to ring at random times, and is there a pattern to the peals? Who were the <Link to="/rule/silver_ravens">Silver Ravens</Link> who defended Kintargo during the Chelish Civil War, and why did they vanish so soon after that war's resolution? So many mysteries, and who better than you to find the answers?</Pair>
<Pair single="benefit" id="urban-sleuth-benefit"><p>Pick one of the questions above as your focus. Answers to these questions can be discovered at different points during Hell's Rebels, but don't expect to learn these answers any time soon! More important, your choice of focus grants you a +1 trait bonus in a particular Knowledge skill check associated with that focus (pick one of the two options provided below for your question). That Knowledge skill is always a class skill for you. Once per day, when you attempt a Knowledge skill check in either of the types associated with your focus, you can roll twice and take the better result as your actual result.</p>
<ul>
<li><strong>Devil's Bells:</strong> Knowledge (arcana) or Knowledge (planes).</li>
<li><strong>Local Dragons:</strong> Knowledge (arcana) or Knowledge (history).</li>
<li><strong>Professor Mangvhune:</strong> Knowledge (local) or Knowledge (planes).</li>
<li><strong>Silver Ravens:</strong> Knowledge (local) or Knowledge (history).</li>
</ul>
</Pair>
</Ability>
</>};
const _amoral_mercenary = {title: "Amoral Mercenary", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_vengeance_players_guide">Hell's Vengeance Player's Guide</Link></p>
<Ability id="amoral-mercenary" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="amoral-mercenary">Amoral Mercenary</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Vengeance</Pair>
<Pair single="flavor" id="amoral-mercenary-flavor">You have always looked after yourself first, and done whatever you need to do to survive. You've killed before, and you'll kill again, but you don't lose sleep over it. If it's you or them, you invariably choose yourself. You follow no code, unless it's doing whatever brings you to the top. Of course, sometimes you have to work with others, and that's fine too, as long as the pay is right-whatever it takes to get the job done. With the current unrest in Cheliax, it's starting to look like a good deal to work with House Thrune. You know Thrune rewards those who serve it well, and there's no one else in Cheliax who can offer the power, prestige, and money that Thrune can.</Pair>
<Pair single="benefit" id="amoral-mercenary-benefit">You've got a keen eye for what makes a good arrangement and when to walk away from a bad deal. You gain a +1 trait bonus on Sense Motive checks, and Sense Motive is a class skill for you. In addition, as an immediate action once per day, you can shift your effective alignment so that you are considered neutral instead of evil for the purpose of good effects that target evil creatures (such as <Link to="/spell/holy_smite">holy smite</Link> or a <Link to="/class/paladin">paladin's</Link> smite evil ability). Your alignment does not actually change when you use this ability.</Pair>
</Ability>
</>};
const _apprentice_devilbinder = {title: "Apprentice Devilbinder", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_vengeance_players_guide">Hell's Vengeance Player's Guide</Link></p>
<Ability id="apprentice-devilbinder" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="apprentice-devilbinder">Apprentice Devilbinder</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Vengeance</Pair>
<Pair single="flavor" id="apprentice-devilbinder-flavor">It's no secret that conjuring and binding devils is a popular pursuit in Cheliax, and you have served as an apprentice to a diabolist since a young age. Eventually, however, you decided you wanted more for yourself than a life of study and service, and when you felt you had learned all that you were likely to from your master, you struck out on your own. You know you can achieve the loftiest heights of power with the support of Hell behind you, just as you are aware you can fall to the lowest depths if you're incautious and lose that support. You are determined to use your skills and abilities to bind Hell and its minions to your will, and to make a name for yourself as one of Cheliax's premier devilbinders.</Pair>
<Pair single="benefit" id="apprentice-devilbinder-benefit">When you cast a <Link to="/spell/summon_monster">summon monster</Link> spell to summon a devil or fiendish creature, the duration of that spell increases by 1 round. In addition, you gain a +1 trait bonus on opposed Charisma checks against devils conjured with <Link to="/spell/planar_binding">planar binding</Link> spells, and payments to devils you conjure with <Link to="/spell/planar_ally">planar ally</Link> spells are reduced by 10%.</Pair>
</Ability>
</>};
const _asmodean_acolyte = {title: "Asmodean Acolyte", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_vengeance_players_guide">Hell's Vengeance Player's Guide</Link></p>
<Ability id="asmodean-acolyte" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="asmodean-acolyte">Asmodean Acolyte</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Vengeance</Pair>
<Pair single="flavor" id="asmodean-acolyte-flavor">You grew up in the church of <Link to="/faith/asmodeus">Asmodeus</Link>, and have served as a faithful follower your entire life. You've studied the unholy texts, committed the rigid hierarchies of Hell to memory, and striven to eliminate emotion and mercy from your mind in emulation of the Prince of Darkness. You may have continued your career in the church, officially joining the priesthood and aspiring to advance to positions of higher authority and greater power, or you may have left the church, deciding the life of a priest was not for you. In either case, the education you received in the church has remained with you.</Pair>
<Pair single="benefit" id="asmodean-acolyte-benefit">You gain a +1 trait bonus on Diplomacy, Knowledge (planes), and Knowledge (religion) checks, and one of these skills (your choice) is a class skill for you. You also know the Infernal tongue (this does not count toward your number of languages).</Pair>
</Ability>
</>};
const _chelish_noble = {title: "Chelish Noble", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_vengeance_players_guide">Hell's Vengeance Player's Guide</Link></p>
<Ability id="chelish-noble" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="chelish-noble">Chelish Noble</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Vengeance</Pair>
<Pair single="flavor" id="chelish-noble-flavor">You had the fortune to be born into one of Cheliax's noble families, and even more importantly, your family is one of those loyal to House Thrune. Perhaps your family has been allied with Thrune since the Chelish Civil War, or maybe Thrune granted your family its title in exchange for its support during that conflict. In any case, your experience growing up among the nation's well-to-do has given you an upper hand when it comes to knowledge of high society, and you start the game with a modest inheritance. With the nascent uprising of the Glorious Reclamation in Cheliax, there is much concern among the aristocracy, and House Thrune needs the support of loyal nobles now more then ever.~~~This trait assumes you belong to a minor noble human family with a small manor or estate in some backwater of the empire. If you're not human, either you were adopted into a noble human family, or your family was recently granted a non-hereditary noble title.</Pair>
<Pair single="benefit" id="chelish-noble-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> checks, and Knowledge (nobility) is a class skill for you. In addition, you gain a +1 trait bonus on Charisma-based checks against other members of the Chelish aristocracy. The <Link to="/feat/noble_scion">Noble Scion</Link> feat does not have a Charisma prerequisite for you. Lastly, you start play with a noble's outfit, a signet ring, and a single additional nonmagical item worth no more than 200 gp.</Pair>
</Ability>
</>};
const _erratic_malefactor = {title: "Erratic Malefactor", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_vengeance_players_guide">Hell's Vengeance Player's Guide</Link></p>
<Ability id="erratic-malefactor" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="erratic-malefactor">Erratic Malefactor</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Vengeance</Pair>
<Pair single="flavor" id="erratic-malefactor-flavor">Some people follow codes and traditions; others look out for only themselves. You don't care-you do what you want, when you want, sometimes for a good reason, and sometimes for no reason at all. You revel in your status as an outlier, and take pride in the fact that you follow no one else's orders-at least most of the time. In a lawful land like Cheliax, one has to be more careful and at least pay lip service to the rules and restrictions of society. As a result, you try to manage the chaos that rages within your soul, but you're always on the lookout for the opportunity to truly unleash destruction. These days, there's plenty of work for someone who will do what needs to be done, no questions asked, and the rewards from House Thrune for those who work with it are a strong incentive as well. If working with others gives you the freedom to carry out some of your darkest instincts without fear of repercussion, then why not-at least for now. You can worry about the future when it comes.</Pair>
<Pair single="benefit" id="erratic-malefactor-benefit">Your unpredictability and volatile temperament gives you an advantage over your foes. You gain a +2 trait bonus on initiative checks. In addition, you are willing to work with others, and have learned to use your allies' strengths to reinforce your own skills and abilities. Once per day, as long as an ally is within 10 feet of you, you can reroll a single attack roll or skill check before success or failure is known. You must take the results of the second roll, even if it is worse.</Pair>
</Ability>
</>};
const _ex_iomedaean = {title: "Ex-Iomedaean", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_vengeance_players_guide">Hell's Vengeance Player's Guide</Link></p>
<Ability id="ex-iomedaean" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="ex-iomedaean">Ex-Iomedaean</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Vengeance</Pair>
<Pair single="flavor" id="ex-iomedaean-flavor">You, or perhaps your family, were once worshipers of <Link to="/faith/iomedae">Iomedae</Link>, but something happened that made you lose your faith. Perhaps your family was accused of being dishonorable or cowardly, or maybe one of your family members was the victim of church "justice." Or perhaps you simply met someone who opened your eyes and showed you the truth-that the Inheritor's so-called honor, valor, and justice are just tin plating on a strict dogma that seeks to control people by restricting their free will. In any event, you left the church, and as a result, your family was subjected to scorn and holier-than-thou disapproval. Ever since, you've vowed to some day get revenge against the church of Iomedae - and with the current situation brewing in Cheliax, you might finally have the opportunity.</Pair>
<Pair single="benefit" id="ex-iomedaean-benefit">Choose one: against followers of Iomedae, including many (but not all) archons and angels, you gain a +1 trait bonus on attack rolls and weapon damage rolls, or you gain a +1 trait bonus on the save DCs of your spells.</Pair>
</Ability>
</>};
const _good_slip = {title: "Good Slip", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_vengeance_players_guide">Hell's Vengeance Player's Guide</Link></p>
<Ability id="good-slip" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="good-slip">Good Slip</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Vengeance</Pair>
<Pair title="Requirements" hl><Link to="/race/halfling">Halfling</Link></Pair>
<Pair single="flavor" id="good-slip-flavor">Halflings are a common sight in Cheliax and make up the majority of that nation's slave population. Known derisively as "slips," halflings are almost universally treated with scorn and contempt, while paradoxically valued as the most precious slaves. You are a Chelish halfling, but unlike most of your race, you have embraced your role in Chelish society, and used it to your own advantage. People constantly overlook you or discount you as an inconsequential slip, but you know the truth-halflings are just as vital to the empire's health as its nobles, priests, and warriors. You may have been born a free halfling who has never known the chains of slavery, or a slave who was later freed after a period of loyal servitude. Or perhaps you are still a slave, happy (or at least content) in your enslavement, and hoping for some eventual recognition of your contribution, however small, to Cheliax's great and orderly society.</Pair>
<Pair single="benefit" id="good-slip-benefit">You are skilled at prevaricating and dissembling, both to deflect blame away from yourself and to mislead others as to your true abilities and role. You gain a +1 trait bonus on Bluff checks, and Bluff is a class skill for you. In addition, your tacit support of Cheliax's social structure, and the clear knowledge of your own place in society, strengthens your resolve. Once per day, when you are adjacent to a human ally of Chelish descent, you can reroll a Will saving throw before success or failure is known. You must take the results of the second roll, even if it is worse.</Pair>
</Ability>
</>};
const _hellknight_aspirant = {title: "Hellknight Aspirant", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_vengeance_players_guide">Hell's Vengeance Player's Guide</Link></p>
<Ability id="hellknight-aspirant" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="hellknight-aspirant">Hellknight Aspirant</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Vengeance</Pair>
<Pair single="flavor" id="hellknight-aspirant-flavor">You have always admired the authority, discipline, and righteousness of the ebon-armored <Link to="/rule/hellknights">Hellknights</Link>. Whether it's their unwavering self-control, uncompromising dedication to law and order, relentless pursuit of justice, or merciless administration of punishment, you have tried to model your own actions on the Hellknight philosophy called the Measure and the Chain. Your most fervent wish is to eventually join one of the Hellknight orders and take your place among the grim ranks dedicated to upholding and enforcing the laws of Hell and of Cheliax.</Pair>
<Pair single="benefit" id="hellknight-aspirant-benefit"><p>You gain a +1 trait bonus on Knowledge (planes) checks, and Knowledge (planes) is a class skill for you. In addition, choose one of the following Hellknight orders. You have trained yourself in the use of that order's favored weapon (if more than one weapon is listed, pick one), and gain a +1 trait bonus to your Combat Maneuver Defense whenever an opponent tries to sunder or disarm you of that weapon.</p>
<ul>
<li><strong>Order of the Chain:</strong> Flail.</li>
<li><strong>Order of the Gate:</strong> Dagger.</li>
<li><strong>Order of the Godclaw:</strong> Morningstar.</li>
<li><strong>Order of the Nail:</strong> Lance or halberd.</li>
<li><strong>Order of the Pike:</strong> Longspear.</li>
<li><strong>Order of the Pyre:</strong> Glaive.</li>
<li><strong>Order of the Rack:</strong> Longsword or whip.</li>
<li><strong>Order of the Scourge:</strong> Heavy mace or whip.</li>
</ul>
</Pair>
</Ability>
</>};
const _local_tough = {title: "Local Tough", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_vengeance_players_guide">Hell's Vengeance Player's Guide</Link></p>
<Ability id="local-tough" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="local-tough">Local Tough</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Vengeance</Pair>
<Pair single="flavor" id="local-tough-flavor">You were born and raised in the town of Longacre on the southwestern fringes of the Whisperwood, or at least have lived there long enough that you're considered a native. You've never been one for the quiet life, and have been considered a miscreant and reprobate since you were a child. As an adult, You've made something of a name for yourself as a thug, enforcer, and petty thief in town, hiring yourself out to anybody who needs muscle in exchange for a few coins. In the course of such employment, You've worked with another local troublemaker named Cimri Staelish and have become friends. Cimri has recently gotten involved with some shadowy, though powerful, characters, and as Hell's Vengeance begins, you and a group of other ne'er-do-wells have agreed to help Cimri burgle a tannery just outside town. With luck, this could be the start of bigger and better things than just working as hired muscle.</Pair>
<Pair single="benefit" id="local-tough-benefit">You gain a +1 trait bonus on Intimidate checks, and Intimidate is a class skill for you. In addition, you gain a +1 trait bonus on weapon damage rolls when you are flanking a foe with an ally.</Pair>
</Ability>
</>};
const _scion_of_the_nine_circles = {title: "Scion of the Nine Circles", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_vengeance_players_guide">Hell's Vengeance Player's Guide</Link></p>
<Ability id="scion-of-the-nine-circles" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="scion-of-the-nine-circles">Scion of the Nine Circles</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Vengeance</Pair>
<Pair single="flavor" id="scion-of-the-nine-circles-flavor">While the worship of <Link to="/faith/asmodeus">Asmodeus</Link> is widespread throughout Cheliax, you follow a different path: that of the philosophy of diabolism. Asmodeus and the other archdevils are worthy of respect and emulation, certainly, but rather than worship one Lord of Hell above all others, your faith is instead based on the veneration of the order and laws of Hell itself as a model for a perfect society. Free will must be suppressed to prevent rebellion, slavery is required to keep the unworthy in their place, and evil and cruelty are necessary for good and kindness to exist.</Pair>
<Pair single="benefit" id="scion-of-the-nine-circles-benefit">You gain a +1 trait bonus on Knowledge (planes) checks, and Knowledge (planes) is a class skill for you. You also know the Infernal tongue (this does not count toward your number of languages). In addition, your studies of Hell's underlying structure give strength to your determination. You gain a +2 trait bonus on Will saves against the mind-affecting effects of outsiders with the good subtype.</Pair>
</Ability>
</>};
const _thrune_informant = {title: "Thrune Informant", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/hells_vengeance_players_guide">Hell's Vengeance Player's Guide</Link></p>
<Ability id="thrune-informant" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="thrune-informant">Thrune Informant</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Vengeance</Pair>
<Pair single="flavor" id="thrune-informant-flavor">The Thrice-Damned House of Thrune rules Cheliax with autocratic power, and its representatives can be found throughout the empire, drawn from all walks of life. Most of these agents do not work directly as government employees, but they still serve House Thrune in whatever ways they can. You are a true patriot of Cheliax, and have long worked for House Thrune as a paid informant. You report what you see to the authorities, and occasionally carry out specific tasks suited to your skill set and abilities when asked. People like you help prevent potential traitors and other "undesirables" from undermining Thrune's authority and keep Chelish society running smoothly. You hope that with continued faithful service, you will eventually be rewarded with greater authority and autonomy as a sworn agent of House Thrune.</Pair>
<Pair single="benefit" id="thrune-informant-benefit">You gain a +1 trait bonus on Diplomacy checks to gather information, Disguise checks, and Knowledge (local) checks, and one of these skills (your choice) is a class skill for you.</Pair>
</Ability>
</>};
const _thrune_loyal_agent = {title: "Thrune Loyal Agent", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_104_wrath_of_thrune">Pathfinder #104: Wrath of Thrune</Link></p>
<Ability id="thrune-loyal-agent" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="thrune-loyal-agent">Thrune Loyal Agent</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Hell's Vengeance</Pair>
<Pair title="Requirements" hl>This is a special trait that can only be gained by progressing through the Hell's Vengeance Adventure Path. It is not available for normal character creation.</Pair>
<Pair single="flavor" id="thrune-loyal-agent-flavor">You have sworn your body to Queen Abrogail and House Thrune in a ritual ceremony, and are willing to lay down your life in service to Thrune. Once per week, when reduced to fewer than 0 hit points, you automatically gain fast healing 1 for 1 minute. Once this ability has been used, you instead gain a +4 trait bonus on Constitution checks to stabilize when reduced to negative hit points.</Pair>
<Pair single="benefit" id="thrune-loyal-agent-benefit">In addition, you receive an invisible <Link to="/spell/arcane_mark">arcane mark</Link> of the encircled cross emblem of Cheliax as a symbol of your loyalty. This mark does not fade and is visible only to other creatures with this trait, or creatures with the ability to perceive the invisible (via <Link to="/spell/see_invisibility">see invisibility</Link> or <Link to="/spell/true_seeing">true seeing</Link>, for example). You can make this mark visible to other creatures for 1 round as a swift action. If the mark is dispelled or removed (such as with <Link to="/spell/erase">erase</Link>), it can be replaced with another casting of <em>arcane mark,</em> which thereafter functions as detailed in this trait.</Pair>
</Ability>
</>};
const _against_the_technic_league = {title: "Against the Technic League", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/iron_gods_players_guide">Iron Gods Player's Guide</Link>, <Link to="/source/people_of_the_river">People of the River</Link></p>
<Ability id="against-the-technic-league" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="against-the-technic-league">Against the Technic League</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Iron Gods</Pair>
<Pair single="flavor" id="against-the-technic-league-flavor">Although the Black Sovereign rules Numeria in name, it's the spellcasters of the Technic League who hold the real power. While their influence is certainly strongest in the capital of Starfall, their touch can be felt even here in Torch - the League takes a significant cut of the town's income as tithes every month. For some reason, you have a grudge against the Technic League. Perhaps your parents lost their jobs as the result of an act they took that displeased the League-you might even suspect the League was responsible for their deaths. Alternatively, you could just rankle at the League's open acceptance of slavery, their reputation for sadism and cruelty, or their penchant for hoarding and controlling technological wonders. Talk to your GM to refine the reasons why you hate the Technic League, but you're convinced that they are somehow responsible for putting out the town's torch and that evidence of their tampering can be found in the caverns below - if you can find evidence of the Technic League working against Torch's better interests, that could well be a step toward the town's independence from the League.</Pair>
<Pair single="benefit" id="against-the-technic-league-benefit">Choose either weapons or spells. If you choose weapons, you gain a +2 trait bonus on all damage rolls made against targets you know are associated with the Technic League. If you choose spells, increase the save DC of your spells by 1 when you target such a foe.</Pair>
</Ability>
</>};
const _local_ties = {title: "Local Ties", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/iron_gods_players_guide">Iron Gods Player's Guide</Link>, <Link to="/source/people_of_the_river">People of the River</Link></p>
<Ability id="local-ties" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="local-ties">Local Ties</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Iron Gods</Pair>
<Pair single="flavor" id="local-ties-flavor">You have ties to a prominent local in the town of Torch - the missing wizard Khonnir Baine. If you're a wizard, alchemist, or other scholarly type, he may have been your tutor or teacher. If you're of a more martial bent, Khonnir could instead have been a friend or business associate of your mother, father, or patron. He may even have been your adoptive father, in which case you likely have a bond of friendship or rivalry with his adopted daughter Val (your GM has more information on her in this case if you wish to know more for your character's background). Your association with Khonnir has given you insight into how technology works.</Pair>
<Pair single="benefit" id="local-ties-benefit">Choose Disable Device or Knowledge (engineering). You gain a +1 trait bonus on checks with this skill, and it is a class skill for you. In addition, you are treated as if you possessed the <Link to="/feat/technologist">Technologist</Link> feat for the purposes of resolving checks associated with that skill. If you gain the Technologist feat, your trait bonus for the selected skill increases to +3.</Pair>
</Ability>
</>};
const _numerian_archaeologist = {title: "Numerian Archaeologist", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/iron_gods_players_guide">Iron Gods Player's Guide</Link>, <Link to="/source/people_of_the_river">People of the River</Link></p>
<Ability id="numerian-archaeologist" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="numerian-archaeologist">Numerian Archaeologist</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Iron Gods</Pair>
<Pair single="flavor" id="numerian-archaeologist-flavor">Numeria is a land ripe for archaeological exploration, since so many of the strange technological dungeons have been either avoided by the superstitious barbarian tribes or have been locked down by the Technic League, leaving many of them untouched and ripe for exploration. You've studied the strange language associated with these eerie technological ruins, and are eager to start exploring them-you suspect that Torch's namesake is in fact part of a larger buried ruin, and you hope to enter these ruins and learn their original purpose by exploring the caves below town.</Pair>
<Pair single="benefit" id="numerian-archaeologist-benefit">You gain Androffan as an additional language. In addition, you possess a knack for technological items; when you use a timeworn technological item, roll twice when determining any glitches the item might cause and choose which result to use as your actual result. Talk to your GM for more information about resolving glitches.</Pair>
</Ability>
</>};
const _robot_slayer = {title: "Robot Slayer", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/iron_gods_players_guide">Iron Gods Player's Guide</Link>, <Link to="/source/people_of_the_river">People of the River</Link></p>
<Ability id="robot-slayer" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="robot-slayer">Robot Slayer</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Iron Gods</Pair>
<Pair single="flavor" id="robot-slayer-flavor">The strange automatons that plague the wilds of Numeria are a blight upon the world, and the idea that there could be countless more of these creatures lying in wait in the unknown ruins scattered throughout the region chills your blood. Khonnir's recovery of a deactivated robot from the caves below Torch worries you-not only could that thing wake up and run amok in town, but there may well be more lurking below! You want to explore the caves under Torch to determine if there is indeed a lurking robot threat below town.</Pair>
<Pair single="benefit" id="robot-slayer-benefit">You gain a +1 trait bonus on attack rolls against robots and a +1 dodge bonus to AC against attacks made by robots.</Pair>
</Ability>
</>};
const _skymetal_smith = {title: "Skymetal Smith", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/iron_gods_players_guide">Iron Gods Player's Guide</Link>, <Link to="/source/people_of_the_river">People of the River</Link></p>
<Ability id="skymetal-smith" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="skymetal-smith">Skymetal Smith</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Iron Gods</Pair>
<Pair single="benefit" id="skymetal-smith-benefit">The fires atop Torch Hill have long been a boon to smiths and metalworkers, and your family is no exception. Whether you grew up in Torch or simply made several trips here with your parents to use the fire, this was to be your first time to use the torch for your own project. You managed to use the fires to craft a small weapon or piece of armor from <Link to="/eq-material/skymetal">skymetal</Link>, but not long thereafter the fires went out. The violet flames are as much a part of your upbringing as anything else, and their loss distresses you; you hope to find a way to rekindle the torch below the hill. You've long hoped to work with skymetal, and begin the game with a small metal bauble made of the skymetal of your choice-you made this item yourself. The item is nothing more than a valuable art object worth 100 gp. You can sell it to gain an additional 100 gp when creating your character, but if you keep it, your pride in its crafting grants you a +2 trait bonus on Will saving throws made against emotion and fear effects. You lose this bonus if you willingly sell or give up the item, but if it is destroyed or lost through no fault of your own, you retain a +1 trait bonus on such Will saves.</Pair>
</Ability>
</>};
const _stargazer_ig = {title: "Stargazer (IG)", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/iron_gods_players_guide">Iron Gods Player's Guide</Link>, <Link to="/source/people_of_the_river">People of the River</Link></p>
<Ability id="stargazer-ig" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="stargazer-ig">Stargazer (IG)</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Iron Gods</Pair>
<Pair single="flavor" id="stargazer-ig-flavor">They say the strange technological ruins scattered throughout Numeria came from the skies several thousand years ago. The concept of life on other planets far beyond Golarion has always fascinated you, and you've long hoped to learn more about what life on those other planets may have been like. you've heard stories about the strange alien creatures found in Numerian dungeons and hope to learn all you can about them-perhaps some of these aliens can be found in the caverns below Torch!</Pair>
<Pair single="benefit" id="stargazer-ig-benefit">You gain a +2 trait bonus on Knowledge checks to identify alien monsters' abilities and weaknesses. In addition, you gain a +1 trait bonus on Knowledge (geography) checks, and this skill is a class skill for you. You are treated as if you possessed the <Link to="/feat/technologist">Technologist</Link> feat for the purposes of resolving checks to identify an alien creature using a Knowledge skill and for all Knowledge (geography) checks. If you already possess the Technologist feat, then your trait bonus on Knowledge (geography) checks increases to +3.</Pair>
</Ability>
</>};
const _animal_whisperer = {title: "Animal Whisperer", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ironfang_invasion_players_guide">Ironfang Invasion Player's Guide</Link></p>
<Ability id="animal-whisperer" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="animal-whisperer">Animal Whisperer</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ironfang Invasion</Pair>
<Pair single="flavor" id="animal-whisperer-flavor">You've spent more of your life around animals than people, and find them easier to understand.</Pair>
<Pair single="benefit" id="animal-whisperer-benefit">You gain a +1 trait bonus on Handle Animal checks, and Handle Animal is always a class skill for you. Your trait bonus increases to +5 whenever you attempt to "push" a wild animal to perform a trick for you, so long as its attitude is indifferent or friendlier. You may target creatures of the animal type with charm or compulsion spells as if they were humanoids, but unless you have another ability to make yourself understood to animals, you must still succeed at a Handle Animal check to "push" your target in order to communicate specific requests.</Pair>
</Ability>
</>};
const _blight_burned = {title: "Blight-Burned", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ironfang_invasion_players_guide">Ironfang Invasion Player's Guide</Link></p>
<Ability id="blight-burned" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="blight-burned">Blight-Burned</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ironfang Invasion</Pair>
<Pair single="flavor" id="blight-burned-flavor">You were raised deep in the Fangwood Forest, but in your childhood the Darkblight overtook your community, and blighted fey attacked your friends and family. Even after escaping, you barely survived infection by the otherworldly fungal disease and still bear a terrible scar from your ordeal.</Pair>
<Pair single="benefit" id="blight-burned-benefit">You gain a +2 trait bonus on Fortitude saving throws against disease or poison (your choice), and your scar now throbs painfully in the presence of unnatural creatures, immediately alerting you to their presence. This sixth sense alerts you to the presence of aberrations, oozes, and all creatures with the <Link to="/template/blighted_fey">blighted fey</Link> and <Link to="/template/fungal_creature">fungal creature</Link> templates within 30 feet (though it doesn't indicate their exact location). You can always act during the surprise round against such creatures, and you aren't considered flat-footed against such creatures in the first round of combat.</Pair>
</Ability>
</>};
const _chernasardo_hopeful = {title: "Chernasardo Hopeful", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ironfang_invasion_players_guide">Ironfang Invasion Player's Guide</Link></p>
<Ability id="chernasardo-hopeful" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="chernasardo-hopeful">Chernasardo Hopeful</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ironfang Invasion</Pair>
<Pair single="benefit" id="chernasardo-hopeful-benefit">You've pledged your skills and your life to the Chernasardo rangers, studying to protect your homeland from foreign invaders. You currently remain a neophyte in this secretive guerrilla army. You have yet to be entrusted with many of their secrets, and spend a great deal of time training with the old ranger Aubrin in Phaendar to hone your skills of hunting and tracking. In forest or plains terrain, you may reduce a single target's effective level of concealment against you (from total concealment to concealment to not concealed) by studying your natural surroundings as a move action. This reduced concealment ends immediately once the target moves from its current location. At 10th level, you may study your terrain as a swift action instead.</Pair>
</Ability>
</>};
const _foxclaw_scout = {title: "Foxclaw Scout", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ironfang_invasion_players_guide">Ironfang Invasion Player's Guide</Link></p>
<Ability id="foxclaw-scout" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="foxclaw-scout">Foxclaw Scout</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ironfang Invasion</Pair>
<Pair single="flavor" id="foxclaw-scout-flavor">You are part of Nirmathas's informal network of hunters and scouts known as the Foxclaws, and study the secret vulnerabilities of those dangerous beasts that prey upon your fellow settlers.</Pair>
<Pair single="benefit" id="foxclaw-scout-benefit">You gain a +2 trait bonus to confirm critical hits against creatures of the animal, magical beast, and vermin types, and while wearing a trophy from an animal, magical beast, or vermin whose CR was higher than your current class level, you gain a +1 morale bonus on Will saves.</Pair>
</Ability>
</>};
const _frontier_healer = {title: "Frontier Healer", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ironfang_invasion_players_guide">Ironfang Invasion Player's Guide</Link></p>
<Ability id="frontier-healer" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="frontier-healer">Frontier Healer</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ironfang Invasion</Pair>
<Pair single="flavor" id="frontier-healer-flavor">You make your way in life by putting people back together after the rigors of the world take their toll-brewing herbal remedies, setting broken bones, and treating diseases.</Pair>
<Pair single="benefit" id="frontier-healer-benefit">You gain a +1 trait bonus on all Heal and Knowledge (nature) checks, and one of these skills is always a class skill for you. Any time you restore hit points using the Heal skill or a cure spell (but not with channeled energy, lay on hands, or a magic device such as a potion or wand), you restore 1 additional hit point, plus 1 for every 2 class levels you have beyond 1st.</Pair>
</Ability>
</>};
const _ironfang_survivor = {title: "Ironfang Survivor", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ironfang_invasion_players_guide">Ironfang Invasion Player's Guide</Link></p>
<Ability id="ironfang-survivor" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="ironfang-survivor">Ironfang Survivor</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ironfang Invasion</Pair>
<Pair single="flavor" id="ironfang-survivor-flavor">Whether you were serving in the military or simply beset by a surprise attack, you barely survived an encounter with the Ironfang Legion, one of Molthune's infamous monster regiments. Maybe you even survived the horrors of the Ramgate Massacre. You can't scrub the memories of their brutality from your waking or sleeping mind, and you keenly recall their distinctive fighting styles.</Pair>
<Pair single="benefit" id="ironfang-survivor-benefit">You gain a +2 dodge bonus to AC against goblinoids, and once per day when you attempt an Intimidate, Sense Motive, or Stealth check against a goblinoid, you can roll two dice and use the better result.</Pair>
</Ability>
</>};
const _kraggodan_castaway = {title: "Kraggodan Castaway", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ironfang_invasion_players_guide">Ironfang Invasion Player's Guide</Link></p>
<Ability id="kraggodan-castaway" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="kraggodan-castaway">Kraggodan Castaway</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ironfang Invasion</Pair>
<Pair title="Requirements" hl><Link to="/race/dwarf">Dwarf</Link></Pair>
<Pair single="benefit" id="kraggodan-castaway-benefit">You hail from the dwarven Sky Citadel of Kraggodan in southern Nirmathas and have spent the past several years among the surface people serving as a mercenary in the war, trading with Nirmathi towns, or simply seeing the surface world. Molthune's recent siege of Kraggodan has squelched any hopes you had of returning home, and now you struggle to find a home on the surface. Thanks to your travels, you gain one of the following as a bonus language: Common, Hallit, Varisian, or Undercommon. In addition, your homesickness means time spent underground revitalizes your spirits; whenever you are underground - either in natural caverns or an artificial complex - you automatically stabilize if brought below 0 hit points, and if reduced to 0 hit points (or you are stable and conscious when below 0 hit points) you do not take the usual 1 point of damage disabled characters take from performing a standard action. This revitalizing effect fades after 4 consecutive days spent underground, but returns after you spend more than a week above ground again.</Pair>
</Ability>
</>};
const _unbreakable_survivor = {title: "Unbreakable Survivor", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ironfang_invasion_players_guide">Ironfang Invasion Player's Guide</Link></p>
<Ability id="unbreakable-survivor" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="unbreakable-survivor">Unbreakable Survivor</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ironfang Invasion</Pair>
<Pair single="benefit" id="unbreakable-survivor-benefit">Over a decade ago, bandits took everything you valued in life and left you barely alive. You managed to rebuild your life in the years since, and your tenacity has made you a local legend. Once per day as a full round action, you may shrug off some of your injuries and immediately heal a number of hit points equal to your Constitution modifier + 1 per Hit Die. Your reputation for tenacity inspires your neighbors, and you gain a +1 trait bonus whenever you attempt to influence residents of Phaendar with Diplomacy or Intimidate checks. At 6th level, your reputation spreads further across the nation, and you may apply your trait bonus on Diplomacy and Intimidate checks to influence all humanoids in Nirmathas.</Pair>
</Ability>
</>};
const _world_weary = {title: "World-Weary", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ironfang_invasion_players_guide">Ironfang Invasion Player's Guide</Link></p>
<Ability id="world-weary" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="world-weary">World-Weary</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ironfang Invasion</Pair>
<Pair single="flavor" id="world-weary-flavor">You've seen the horrors of war, and had hoped you'd seen the end of it. You've retreated from the fighting - likely from the front line with Molthune, but maybe from the crusade of Lastwall or the political infighting of Ustalav - and now just want to protect and provide for those you care about.</Pair>
<Pair single="benefit" id="world-weary-benefit">You gain one of the following as a permanent class skill: Appraise, Heal, Knowledge (history), Sense Motive, or Survival. When you perform an aid another action to improve a creature's Armor Class, you increase its AC by +4 rather than +2.</Pair>
</Ability>
</>};
const _best_customer = {title: "Best Customer", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends</Link>, <Link to="/source/jade_regent_players_guide">Jade Regent Player's Guide</Link></p>
<Ability id="best-customer" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="best-customer">Best Customer</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Jade Regent</Pair>
<Pair single="flavor" id="best-customer-flavor">You've sat on your favorite barstool at the Rusty Dragon every night for as long as you can remember- and some nights you can't remember thanks to a few too many drinks. In your various hazes, You've gotten to know the tap house's proprietor, Ameiko, or one of her regulars, Sandru, quite well. Additionally, you're well acquainted with a variety of uses for strong drink. Any time you have an alcoholic beverage on hand, you can expend one use of it to grant you a +2 trait bonus on a Heal check. This bonus increases to +4 if you're treating your favorite drinking buddy (your NPC of choice).</Pair>
<Pair single="benefit" id="best-customer-benefit">- <strong>NPC Choices:</strong> Ameiko, Sandru.</Pair>
</Ability>
</>};
const _best_friend = {title: "Best Friend", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/jade_regent_players_guide">Jade Regent Player's Guide</Link></p>
<Ability id="best-friend" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="best-friend">Best Friend</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Jade Regent</Pair>
<Pair single="flavor" id="best-friend-flavor">You are best friends with one of the NPCs; you've grown up together, and while your friend has had a much more exciting life than you so far, you hope one day to follow in your friend's footsteps and see the world - or perhaps even become an adventurer yourself. you've picked up a lot from your friend, but particularly his or her skill in interacting with others. If Ameiko is your best friend, you gain a +2 trait bonus on Diplomacy checks. If Sandru is your best friend, you gain a +2 trait bonus on Bluff checks. Whichever skill you gain a trait bonus on, that skill is always considered a class skill for you. In addition, in situations where your best friend is in danger, you gain a +1 trait bonus on all attack rolls against foes that threaten your friend.</Pair>
<Pair single="benefit" id="best-friend-benefit">- <strong>NPC Choices:</strong> Ameiko, Sandru.</Pair>
</Ability>
</>};
const _caravan_guard = {title: "Caravan Guard", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/jade_regent_players_guide">Jade Regent Player's Guide</Link></p>
<Ability id="caravan-guard" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="caravan-guard">Caravan Guard</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Jade Regent</Pair>
<Pair single="flavor" id="caravan-guard-flavor">You recently hired on to Sandru's caravan to serve as a guard, but the job, while it paid well, gave you little chance to scratch the adventuring itch, since the caravan never really ventured into dangerous territory. You understand why Sandru avoided the more dangerous routes, of course, but that didn't help assuage your urge to seek adventure. You've just told Sandru that you're quitting the job in order to try your hand at adventuring; he seemed to understand, and even gave you some good tips on how best to survive potential challenges. You gain a +1 trait bonus on Survival checks, and Survival becomes a class skill for you.</Pair>
<Pair single="benefit" id="caravan-guard-benefit">- <strong>NPC Choices:</strong> Sandru.</Pair>
</Ability>
</>};
const _childhood_crush = {title: "Childhood Crush", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/jade_regent_players_guide">Jade Regent Player's Guide</Link></p>
<Ability id="childhood-crush" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="childhood-crush">Childhood Crush</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Jade Regent</Pair>
<Pair single="flavor" id="childhood-crush-flavor">You've never had the guts to act on it, but for as long as you can remember, You've had a crush on one of the NPCs. Someday, maybe you'll be able to earn the NPC's love, but for now, you're content to spend time in the NPC's proximity, or even to do things for the NPC that might earn you a word of thanks or a smile. Once per day, you may attempt to earn a kind word or a smile from the NPC whom you have a crush on by making a DC 15 Charisma check. If you're successful, the elation and joy at the attention gives you a +1 trait bonus on all saving throws for the remainder of the day. If you're ever lucky enough to win the NPC's love, this +1 trait bonus on saving throws applies at all times, as long as your relationship remains active. Note that gender isn't an issue in the case of these three NPCs. Unless your GM says otherwise, all three of these NPCs are considered to be bisexual as far as this trait's implications are concerned. Note that if you take this trait, you'll likely want to coordinate NPC choices with any other player who chooses this trait as well, since choosing the same NPC could cause unwanted party strife. Of course, if that's what you and the other player are looking for, go for it! In addition, you gain a +1 trait bonus on all attack rolls against foes that threaten your crush.</Pair>
<Pair single="benefit" id="childhood-crush-benefit">- <strong>NPC Choices:</strong> Ameiko, Sandru, Shalelu.</Pair>
</Ability>
</>};
const _foreign_tongued = {title: "Foreign-Tongued", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends</Link>, <Link to="/source/jade_regent_players_guide">Jade Regent Player's Guide</Link></p>
<Ability id="foreign-tongued" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="foreign-tongued">Foreign-Tongued</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Jade Regent</Pair>
<Pair single="flavor" id="foreign-tongued-flavor">Intrigued by the travels of one of your long-time acquaintances, you've convinced her to teach you one of the exotic <Link to="/misc/languages">languages</Link> she picked up in her journeys.</Pair>
<Pair single="benefit" id="foreign-tongued-benefit"><p>Choose one of the following characters. You may select one of that character's languages as a bonus language. Additionally, you gain a +2 trait bonus on Bluff checks made to pass secret messages to the chosen character (see the description of the <Link to="/skill/bluff">Bluff</Link> skill).</p>
<ul>
<li><strong>Ameiko:</strong> Tien, Varisian</li>
<li><strong>Koya or Sandru:</strong> Varisian</li>
<li><strong>Shalelu:</strong> Elven, Goblin</li>
</ul>
</Pair>
</Ability>
</>};
const _foster_child = {title: "Foster Child", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/jade_regent_players_guide">Jade Regent Player's Guide</Link></p>
<Ability id="foster-child" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="foster-child">Foster Child</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Jade Regent</Pair>
<Pair single="flavor" id="foster-child-flavor">Koya Mvashti might be old enough to be your grandmother, but to you, she's always been your mom. Ever since your parents passed away, Koya's been taking care of you as if she were your mother. You never really figured out why Koya took you into her care, but you do know she's done this before-most recently with Sandru Vhiski, whom you think of as your brother. Growing up, Koya made sure that you had the best education possible, particularly in one particular topic. Choose any Knowledge skill-you gain a +2 bonus on skill checks with that Knowledge skill, and it becomes a class skill for you. In addition, you gain a +1 trait bonus on all attack rolls against foes that threaten your adoptive mother.</Pair>
<Pair single="benefit" id="foster-child-benefit">- <strong>NPC Choices:</strong> Koya.</Pair>
</Ability>
</>};
const _friend_of_the_family = {title: "Friend of the Family", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/jade_regent_players_guide">Jade Regent Player's Guide</Link></p>
<Ability id="friend-of-the-family" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="friend-of-the-family">Friend of the Family</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Jade Regent</Pair>
<Pair single="flavor" id="friend-of-the-family-flavor">Your family has been close friends with the Mvashtis for as long as you've been alive. Old Niska Mvashti's recent death wasn't all that unexpected - she must have been over a hundred years old, as far as you know - but it was a sobering moment nonetheless. What no one else in your family knows, though, is that in the weeks before her death, Niska must have known that her days were numbered, because she called you to her house one day and made you make a promise: If her daughter Koya ever went on a long trip, you would go with her to ensure her safety. Although the chances of Koya going on a long trip seem remote (she must be at least 60 years old, after all), you've made a promise to Niska to accompany her daughter if such an event comes to pass. Ever since you made this promise, you've felt a strange sense of destiny looming in your future-you might even think that Niska is now watching over your shoulder, just as she asked you to watch over her daughter. As a result of this eerie sense of being watched over, you've been able to react to dangerous situations more quickly than ever. As long as Koya remains alive, you gain a +1 trait bonus on Perception checks, and Perception becomes a class skill for you. In addition, you gain a +1 trait bonus on all attack rolls against foes that threaten Koya.</Pair>
<Pair single="benefit" id="friend-of-the-family-benefit">- <strong>NPC Choices:</strong> Koya.</Pair>
</Ability>
</>};
const _hero_worship = {title: "Hero Worship", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/jade_regent_players_guide">Jade Regent Player's Guide</Link></p>
<Ability id="hero-worship" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="hero-worship">Hero Worship</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Jade Regent</Pair>
<Pair single="flavor" id="hero-worship-flavor">Everyone in town seems to admire Ameiko and Shalelu - they're heroes, after all, and played key roles in the recent troubles that plagued Sandpoint. You, though, take this admiration to a new level - you practically worship one of these two. This could be because you saw one of them perform a particularly impressive act of bravery at some point in the past, or maybe they just happened to give you the exact right words of encouragement or a kind gift at some point a few years ago when you were young and impressionable. In any case, they've done your best to emulate your hero's talents at spellcasting or combat. If your hero is Ameiko, you gain a +2 bonus on <Link to="/rule/concentration">concentration</Link> checks. If your hero is Shalelu, you gain a +1 bonus to your AC against attacks of opportunity. In addition, you gain a +1 trait bonus on all attack rolls against foes that threaten your hero.</Pair>
<Pair single="benefit" id="hero-worship-benefit">- <strong>NPC Choices:</strong> Ameiko, Shalelu.</Pair>
</Ability>
</>};
const _rescued = {title: "Rescued", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/jade_regent_players_guide">Jade Regent Player's Guide</Link></p>
<Ability id="rescued" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="rescued">Rescued</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Jade Regent</Pair>
<Pair single="flavor" id="rescued-flavor">At some point in the past, you had a terrifyingly close brush with death. Maybe a goblin nearly killed you during an attack on the town, or perhaps a building struck by a giant's boulder collapsed around you. Whatever the peril was, you would have certainly died if not for the swift actions of Koya or Shalelu, who intervened just in time to save your life. You've never forgotten this, and remain fiercely loyal to the NPC who saved you. Perhaps even more importantly, the method in which she saved you seems to have had an impact on your own skills. If Koya saved you, she did so by casting a healing spell on you just before you died, and as a result you gain a +2 trait bonus whenever you use <Link to="/main/cure_spells">cure spells</Link> to heal damage. If it was Shalelu who saved you, she did so by pulling you to safety while simultaneously defeating the peril that almost did you in, and as a result, you gain a +1 trait bonus on Acrobatics checks and Acrobatics is a class skill for you. In addition, you gain a +1 trait bonus on all attack rolls against foes that threaten your savior.</Pair>
<Pair single="benefit" id="rescued-benefit">- <strong>NPC Choices:</strong> Koya, Shalelu.</Pair>
</Ability>
</>};
const _student_survivalist = {title: "Student Survivalist", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/jade_regent_players_guide">Jade Regent Player's Guide</Link></p>
<Ability id="student-survivalist" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="student-survivalist">Student Survivalist</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Jade Regent</Pair>
<Pair single="flavor" id="student-survivalist-flavor">Although she is seen as something of a mystery to most of Sandpoint's citizens, Shalelu has never really seemed all that mysterious to you. Of course, that's probably because she helped raise you. You have never quite figured out why Shalelu decided to treat you as a younger sibling, but you certainly appreciated it- and you eagerly absorbed all of the survivalist tricks that she showed you over the years. As a result, you gain a +2 trait bonus on all Survival checks, and Survival is a class skill for you. In addition, you gain a +1 trait bonus on all attack rolls against foes that threaten your mentor.</Pair>
<Pair single="benefit" id="student-survivalist-benefit">- <strong>NPC Choices:</strong> Shalelu.</Pair>
</Ability>
</>};
const _younger_sibling = {title: "Younger Sibling", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/jade_regent_players_guide">Jade Regent Player's Guide</Link></p>
<Ability id="younger-sibling" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="younger-sibling">Younger Sibling</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Jade Regent</Pair>
<Pair single="flavor" id="younger-sibling-flavor">You've lived your whole life in the shadow of your older sibling, a person who seems to have the adventure-filled lifestyle You've always wanted for yourself. While your sibling always took care of you, he or she never supported your desire to become an adventurer - your sibling never explained why, only saying, "Adventuring can cause a lot of pain just as easily as it can bring success and riches." As a younger sibling to one of Sandpoint's more influential citizens, you share some of that NPC's innate talent and skill at adventuring.</Pair>
<Pair single="benefit" id="younger-sibling-benefit"><p>If you're Ameiko's younger sibling, your ferocious independence and self-confidence give you a +1 trait bonus on Will saving throws.</p>
<p>If you're Sandru's younger sibling, your hearty constitution gives you a +1 trait bonus on all Fortitude saving throws.</p>
<p>If you're Shalelu's younger sibling, your quick reflexes give you a +1 trait bonus on all Reflex saving throws.</p>
<p><strong>Note:</strong> Although you're a younger sibling of an established NPC, this doesn't necessarily lock you in to being the same race as that NPC - if you're a different race or ethnicity than the NPC you choose as your older sister or brother, you were adopted into the family by your parents. In addition, you gain a +1 trait bonus on all attack rolls against foes that threaten your older sibling.</p>
</Pair>
</Ability>
</>};
const _bastard_km = {title: "Bastard (KM)", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/kingmaker_players_guide">Kingmaker Player's Guide</Link></p>
<Ability id="bastard-km" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="bastard-km">Bastard (KM)</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Kingmaker</Pair>
<Pair title="Requirements" hl><Link to="/race/human">Human</Link></Pair>
<Pair single="benefit" id="bastard-km-benefit">One of your parents was a member of one of the great families of Brevoy, perhaps even of the line of Rogarvia itself. Yet you have no substantive proof of your nobility, and you've learned that claiming nobility without evidence makes you as good as a liar. While you might own a piece of jewelry, a scrap of once-rich fabric, or an aged confession of love, none of this directly supports your claim. Thus, you've lived your life in the shadow of nobility, knowing that you deserve the comforts and esteem of the elite, even though the contempt of fate brings you nothing but their scorn. Whether a recent attempt to prove your heritage has brought down the wrath of a noble family's henchmen or you merely seek to prove the worth of the blood in your veins, you've joined an expedition into the Stolen Lands, hoping to make a name all your own. You take a -1 penalty on all Charisma-based skill checks made when dealing with members of Brevic nobility but gain a +1 trait bonus on Will saves as a result of your stubbornness and individuality. (The penalty aspect of this trait is removed if you ever manage to establish yourself as a true noble.)</Pair>
</Ability>
</>};
const _brigand = {title: "Brigand", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/kingmaker_players_guide">Kingmaker Player's Guide</Link></p>
<Ability id="brigand" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="brigand">Brigand</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Kingmaker</Pair>
<Pair single="benefit" id="brigand-benefit">You hail from the River Kingdoms or the more lawless reaches of Brevoy. Life has been hard for you. Perhaps your parents and siblings were crooks and con artists, or maybe your rough, lonely life lead you to fall in with thieves and worse. You know how to ambush travelers, bully traders, avoid the law, and camp where no one might find you. Recently, you've run into some trouble, either with the law or with other bandits, and you're looking to get away to somewhere no one would ever think to look for you. An expedition into the rugged wilderness seems like a perfect way to lie low until the trouble blows over. You begin the campaign with an extra 100 gp in ill-gotten gains. You also gain a +1 trait bonus on Bluff, Diplomacy, Intimidate, and Sense Motive checks when dealing with brigands, thieves, bandits, and their ilk.</Pair>
</Ability>
</>};
const _issian = {title: "Issian", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/kingmaker_players_guide">Kingmaker Player's Guide</Link></p>
<Ability id="issian" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="issian">Issian</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Kingmaker</Pair>
<Pair single="benefit" id="issian-benefit">You were raised northern Brevoy, a land of misty shores and harsh hill lands, of snowy vistas and violet-hued mountains. You are descended from an able and intelligent people, and you have grand ambitions, a mind alert for opportunity, and the tenacity to fight for your goals no matter the challenge. You care for little more than achieving your aspirations and opportunities to win wealthy and grandeur, for which few costs prove too great. You see yourself as a citizen of Brevoy through and through. The call for champions willing to help take back your country's rightful holdings in the Stolen Lands has inflamed your dreams of profit and possibilities, so you have joined an expedition to quest south. Your agile mind grants you a +1 trait bonus on all Will saves made to resist mind-affecting effects.</Pair>
</Ability>
</>};
const _noble_born = {title: "Noble Born", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/kingmaker_players_guide">Kingmaker Player's Guide</Link></p>
<Ability id="noble-born" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="noble-born">Noble Born</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Kingmaker</Pair>
<Pair single="flavor" id="noble-born-flavor">You claim a tangential but legitimate connection to one of Brevoy's noble families. If you aren't human, you were likely adopted by one of Brevoy's nobles or were instead a favored servant or even a childhood friend of a noble scion. Whatever the cause, you've had a comfortable life, but one far from the dignity and decadence your distant cousins know. Although you are associated with an esteemed name, your immediate family is hardly well to do, and you've found your name to be more of a burden to you than a boon in many social situations. you've recently decided to test yourself, to see if you can face the world without the aegis of a name you have little real claim or care for. An expedition into the storied Stolen Lands seems like just the test to see if you really are worth the title "noble."</Pair>
<Pair single="benefit" id="noble-born-benefit"><p>Choose one of the following noble families and associated benefits.</p>
<ul>
<li><strong>Garess:</strong> Your family's long association with the dwarves of the Golushkin Mountains has left its mark. You ignore the movement penalty for the first 5 feet of rocky difficult terrain you move through per round. This applies only to terrain made difficult by rocks or ruins. In addition, you gain a +2 trait bonus on Appraise checks to assess the value of natural stones or metals. Your family motto is "Strong as the Mountains."</li>
<li><strong>Lebeda:</strong> Your family's history of trading along the shores of Lake Reykal pervades your blood. As a deft merchant of the region, you gain a bonus language: Dwarven, Elven, Hallit, Gnome, Giant, Halfling, Skald, or Sylvan. Your family motto is "Success through Grace."</li>
<li><strong>Lodovka:</strong> Your family has made a living off the coasts of the Lake of Mists and Veils since before Brevoy existed. You gain a +1 trait bonus on Swim checks, and Swim is always treated as a class skill for you. Your family motto is "The Waters, Our Fields."</li>
<li><strong>Medvyed:</strong> Your family has long a deep respect for the wilderness and is superstitious about the creatures that dwell therein. You gain a +2 trait bonus on all Diplomacy checks made to deal with fey creatures and a +1 trait bonus on Will saves made against their spells and supernatural abilities. Your family motto is "Endurance Overcomes All."</li>
<li><strong>Orlovsky:</strong> Your family has a reputation for avoiding conflicts. You gain a +1 trait bonus on your CMD. In addition, choose Acrobatics, Diplomacy, or Stealth-you gain a +1 trait bonus on this skill. Your family motto is "High Above."</li>
<li><strong>Surtova:</strong> Your family is well known for their political agility and scheming natures. You deal +2 damage when attacking a flat-footed opponent while wielding a light or one-handed weapon. Your family motto is "Ours is the Right."</li>
</ul>
</Pair>
</Ability>
</>};
const _pioneer = {title: "Pioneer", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/kingmaker_players_guide">Kingmaker Player's Guide</Link></p>
<Ability id="pioneer" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="pioneer">Pioneer</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Kingmaker</Pair>
<Pair single="flavor" id="pioneer-flavor">You have long lived along the southern border of Brevoy, in the shadow of wilderness known as the Stolen Lands. Life has been hard, but through hunting, trapping, trading, and coaxing crops from the freezing earth, you've learned how to survive on the rugged frontier. With the wilderness ever at your door, you've also learned much about its denizens and the wild creatures that lurk in that unwholesome land. Your family might even claim holdings in the Stolen Lands, with elders telling stories of being driven from or robbed of a lost ancestral homestead, fertile farmlands, bountiful orchards, or a hidden mining claim. Whether because of your personal expertise and familiarity with the borderlands or in order to reclaim your family's land, you've joined the expedition into the Stolen Lands.</Pair>
<Pair single="benefit" id="pioneer-benefit">You begin play with a horse. Also, choose one of the following skills: Climb, Handle Animal, Knowledge (nature), Perception, Ride, Survival, or Swim-you gain a +1 trait bonus on this skill.</Pair>
</Ability>
</>};
const _rostlander = {title: "Rostlander", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/kingmaker_players_guide">Kingmaker Player's Guide</Link></p>
<Ability id="rostlander" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="rostlander">Rostlander</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Kingmaker</Pair>
<Pair single="benefit" id="rostlander-benefit">You were raised in the south of Brevoy, a land of dense forests and rolling plains, of crystalline rivers and endless sapphire skies. You come from hearty stock and were raised with simple sensibilities of hard work winning well-deserved gains, the importance of charity and compassion, and the value of personal and familial honor. Yours is the country of the Aldori swordlords and the heroes who refused to bend before the armies of a violent conqueror. You care little for matters of politics and nobles or of deception and schemes. As you are thoroughly Brevic, the call for champions willing to expand your land's influence into the Stolen Lands has inflamed your sense of patriotism and honor, and so you have joined an expedition to quest southward. Your hardy nature grants you a +1 trait bonus on all Fortitude saves.</Pair>
</Ability>
</>};
const _sword_scion = {title: "Sword Scion", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/kingmaker_players_guide">Kingmaker Player's Guide</Link></p>
<Ability id="sword-scion" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="sword-scion">Sword Scion</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Kingmaker</Pair>
<Pair single="flavor" id="sword-scion-flavor">You have lived all your life in and around the city of Restov, growing up on tales of Baron Sirian Aldori and the exploits of your home city's heroic and legendary swordlords. Perhaps one of your family members was an Aldori swordlord, you have a contact among their members, or you have dreamed since childhood of joining. Regardless, you idolize the heroes, styles, and philosophies of the Aldori and have sought to mimic their vaunted art. Before you can petition to join their ranks, however, you feel that you must test your mettle. Joining an expedition into the Stolen Lands seems like a perfect way to improve your skills and begin a legend comparable to that of Baron Aldori.</Pair>
<Pair single="benefit" id="sword-scion-benefit">You begin play with a longsword or Aldori dueling sword and gain a +1 trait bonus on all attacks and combat maneuvers made with such weapons.</Pair>
</Ability>
</>};
const _earning_your_freedom = {title: "Earning your Freedom", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_fire_players_guide">Legacy of Fire Player's Guide</Link></p>
<Ability id="earning-your-freedom" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="earning-your-freedom">Earning your Freedom</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Legacy of Fire</Pair>
<Pair single="flavor" id="earning-your-freedom-flavor">You've been a slave your whole life, and have passed from master to master more times than you can count. Some of those masters were cruel, others kindly. In all cases, You've yearned to be free. When your most recent master fell on hard times, he sold many of his slaves to the city government, and as luck would have it, a recent opportunity to earn your freedom has manifested. The Pactmasters of Katapesh are looking to revitalize an old trade route to Osirion, and a band of mercenaries and guards is gathering to go out and supplement forces already in place near the ruined village of Kelmarane, now said to be infested by gnolls. You've secured a place among those mercenaries, under the watchful eye of Garavel. If you help in retaking Kelmarane, You've been promised your freedom. In any event, your life as a slave has toughened you and made you more resistant to hardship.</Pair>
<Pair single="benefit" id="earning-your-freedom-benefit">Choose one of the three categories of saving throw; you gain a +1 trait bonus on all saving throws of that type.</Pair>
</Ability>
</>};
const _finding_haleen = {title: "Finding Haleen", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_fire_players_guide">Legacy of Fire Player's Guide</Link></p>
<Ability id="finding-haleen" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="finding-haleen">Finding Haleen</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Legacy of Fire</Pair>
<Pair single="benefit" id="finding-haleen-benefit">You never knew your parents-perhaps they died when you were a child, or maybe you were taken from them and raised elsewhere as a slave. You owe your sanity and your life to a woman named Haleen. She could be your sister or merely a childhood companion, but whatever your relationship to her, she took care of you and protected you. She's always been a part of your life, and although her temper often kept her from making friends or keeping a job, she's always been kind to you. Haleen was instrumental in securing your freedom from slavery or making sure you got a good apprenticeship or job in society - but recently, she'd been growing strangely morose and depressed. You and Haleen normally kept no secrets, but whatever was bothering her wasn't something she shared with you. One night, she vanished, leaving you a brief note, begging you to forget her and to get on with your life, but something about the note bothered you-something in the way she phrased her words struck you as forced. You may be convinced she'd been kidnapped, forced to leave against her will, or even magically controlled, but you also suspect that she left you to protect you from something-that was ever her way. You're now convinced that it's time for you to step in and protect her, but you had no idea where she may have gone until recently. Several months have passed since she disappeared, and you've spent those months searching for clues to her location, and you've finally found a lead - a mysterious note, a strange dream, the result of a back-alley divination, or a report of a sighting of a woman matching Haleen's description has come to you, placing Haleen in the vicinity of an old ghost town named Kelmarane. What she's doing there and how she came to be there makes no sense to you yet, but the lead is the strongest one you've had. This and Garavel's advertisement for mercenaries to accompany him to the region is all the omen you need. You joined Garavel's group and eagerly await the day you'll be leaving for Kelmarane. Although Haleen chose to become a swashbuckling adventurer, she always encouraged you to seek your own path, and her support is the primary reason you chose the class you did at 1st level. This class is always a favored class to you, and your dedication to it is such that every time you take a level in the class, you gain +1 hit point and 1 additional skill point over and above what you would normally gain. If multiple PCs take this trait, they should be siblings who were both protected and raised by Haleen.</Pair>
</Ability>
</>};
const _gnoll_killer = {title: "Gnoll Killer", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_fire_players_guide">Legacy of Fire Player's Guide</Link></p>
<Ability id="gnoll-killer" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="gnoll-killer">Gnoll Killer</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Legacy of Fire</Pair>
<Pair single="flavor" id="gnoll-killer-flavor">You grew up in rural Katapesh, in a region where gnoll activity was a fact of life. You killed your first gnoll at a young age when a group of gnoll slavers attacked your village, home, or caravan, and your hatred of gnolls has only grown since then. Something in your past fueled your hatred of gnolls even further; perhaps your family was slaughtered by gnolls, or maybe you even served a few harrowing weeks as a prisoner of a gnoll tribe before a miraculous escape. When you heard that Garavel was looking for brave men and women to aid in retaking the village of Kelmarane from a tribe of gnolls in the service of the notorious Carrion King, you knew you had to be part of the group, and signed up immediately.</Pair>
<Pair single="benefit" id="gnoll-killer-benefit">You gain a +1 trait bonus on attack rolls and weapon damage rolls made against gnolls. If you are a barbarian and you're fighting gnolls, your rage lasts 1 round longer than normal. If you're a ranger and you select humanoid (gnoll) as a <Link to="/ability/favored_enemy">favored enemy</Link>, your trait bonus on attack rolls and weapon damage rolls against gnolls increases to +2. If you're a spellcaster, you gain a +1 trait bonus to spell save DCs for damaging spells against gnolls.</Pair>
</Ability>
</>};
const _missionary = {title: "Missionary", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_fire_players_guide">Legacy of Fire Player's Guide</Link></p>
<Ability id="missionary" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="missionary">Missionary</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Legacy of Fire</Pair>
<Pair single="flavor" id="missionary-flavor">You've spent much of the last several years serving your faith, and the conviction and dedication to your church has impressed many. Perhaps You've donated much of your personal wealth or time to serving the church, or you're the child of a powerful or well-loved member of the church, an orphan raised by the church, or a foundling with a strange birthmark that bears more than a passing resemblance to your faith's holy symbol. The faith has long supported you, and you are eager to repay the church in some way. In Katapesh, the establishment of a new village is always cause for interest to the nation's churches, as establishing new temples in villages is an excellent way to expand upon the church's resources and bring in more faithful. If the Pactmasters' plans to revitalize and rebuild Kelmarane are successful, the village will need a temple, and your faith is keenly interested in being represented there. This campaign trait is particularly suited to worshipers of Sarenrae, as Kelmarane was founded near an old monastery dedicated to the Dawnflower, and reconsecrating that monastery is of great interest to Sarenrae's church. Furthermore, a temple dedicated to her once stood in Kelmarane itself, but it has long since fallen into ruin; whispers among the religion tell that the church's old pastor may have fallen from grace and may even have been part of the cause of the hard times that befell the village. You've joined Garavel's band in hopes of helping to establish a new temple in the soon-to-be revitalized village. You've been selected for your dedication to the church and your strong social graces.</Pair>
<Pair single="benefit" id="missionary-benefit">Pick one of the following skills: Bluff, Diplomacy, Intimidate, Knowledge (religion), Perform (any), or Sense Motive. You gain a +1 trait bonus on checks using that skill, and it is always considered a class skill for you.</Pair>
</Ability>
</>};
const _reclaiming_your_roots = {title: "Reclaiming your Roots", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_fire_players_guide">Legacy of Fire Player's Guide</Link></p>
<Ability id="reclaiming-your-roots" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="reclaiming-your-roots">Reclaiming your Roots</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Legacy of Fire</Pair>
<Pair single="benefit" id="reclaiming-your-roots-benefit">Your interest in the village of Kelmarane is more personal than most of the others who are heading out to aid in the reclamation. You aren't seeking revenge against gnolls, glory, money, or anything else - to you, this is purely a matter of honor, as Kelmarane is where you were born. Your were forced to flee the village when you were only a few years old, and you didn't discoverer this until a few years ago-perhaps you found an old document that revealed the truth, or maybe you learned the news from a relative. Both of your parents are now dead, and from what you've been able to piece together, one of your parents actually died in the village when whatever happened there happened. Your surviving parent spirited you away to safety to grow up elsewhere, but never spoke of Kelmarane and always told you that your other parent died when you were a child in a horrific tragedy like a fire or a flood that swept away the body. Now that you've started to uncover the truth, you are convinced that your heritage remains hidden in Kelmarane. Whether you just wish to find out what really happened to your parent that died there or you want to rebuild the village in his or her honor is up to you - but Garavel's caravan to the village is just the opportunity you've been waiting for. When your other parent died recently, among his or her effects was a single item that once belonged to the parent who died at Kelmarane. This item is your most valued possession - a piece of jewelry worth 350 gp, any masterwork weapon or armor worth no more than 350 gp, or a wand containing any 1st-level spell (CL 1st) with only 20 charges remaining. If you ever lose this item, your resulting depression imposes a -1 penalty on Will saves for 1 year.</Pair>
</Ability>
</>};
const _seeking_adventure = {title: "Seeking Adventure", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_fire_players_guide">Legacy of Fire Player's Guide</Link></p>
<Ability id="seeking-adventure" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="seeking-adventure">Seeking Adventure</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Legacy of Fire</Pair>
<Pair single="benefit" id="seeking-adventure-benefit">The <Link to="/rule/pathfinder_society">Pathfinder Society</Link> has long intrigued you-tales of the exotic lands and strange discoveries made by Pathfinders have enchanted your dreams and fired your imagination since childhood. When Pathfinders came through your village or neighborhood, they immediately enthralled you with their stories and knowledge. Yet at the time, you were far too young to join them, and when they left for adventure you had to stay behind. Now that you are of age, you've traveled to Absalom to apply for membership. The application process went well, and you're now a full member. Your first assignment is to accompany Garavel's group to Kelmarane - the Pathfinder Society has heard rumors of several ancient structures in the area, including a ruined monastery once dedicated to Sarenrae, and would like to learn more about them. Even more pressing is the mystery of what brought about Kelmarane's ruin in the first place-reports of which are vague at best. If you can determine the cause of the village's abandonment so many years ago, you're sure the Society would be impressed. You begin the game with your own wayfinder, a loan from your venture-captain. you've promised to pay your venturecaptain 500 gp for the wayfinder some day, but for now it's yours to use. A wayfinder is a magical compass that grants you a +2 circumstance bonus on Survival checks to avoid becoming lost, and can be commanded to emit <Link to="/spell/light">light</Link> as the spell (CL 5th) as a standard action.</Pair>
</Ability>
</>};
const _blood_of_pharaohs = {title: "Blood of Pharaohs", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/mummys_mask_players_guide">Mummy's Mask Player's Guide</Link>, <Link to="/source/people_of_the_sands">People of the Sands</Link></p>
<Ability id="blood-of-pharaohs" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="blood-of-pharaohs">Blood of Pharaohs</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Mummy's Mask</Pair>
<Pair single="flavor" id="blood-of-pharaohs-flavor">Long ago, one of your ancestors ruled over the lands of Osirion. Although you are many generations removed and the line of descent is hard to prove, his or her blood still runs in your veins. Perhaps you may find some proof of your lineage in the tombs of Wati's necropolis.</Pair>
<Pair single="benefit" id="blood-of-pharaohs-benefit">You gain a +1 trait bonus on Will saves. You also gain a +1 trait bonus on Knowledge (nobility) checks and that skill is always a class skill for you. In addition, you may choose Ancient Osiriani as one of your bonus languages.</Pair>
</Ability>
</>};
const _devotee_of_the_old_gods = {title: "Devotee of the Old Gods", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/mummys_mask_players_guide">Mummy's Mask Player's Guide</Link>, <Link to="/source/people_of_the_sands">People of the Sands</Link></p>
<Ability id="devotee-of-the-old-gods" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="devotee-of-the-old-gods">Devotee of the Old Gods</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Mummy's Mask</Pair>
<Pair single="flavor" id="devotee-of-the-old-gods-flavor">Osirion has a history stretching back over 8,000 years, and the deities worshiped today in modern Osirion are not the same ones revered in Ancient Osirion's heyday-deities with names like Anubis, Osiris, Ra, and Set, among others. Your family never lost the faith of your ancestors, however, and your devotion to one of the deities of Ancient Osirion has helped keep the memory of Osirion's past alive - a past that still lingers on in the untouched necropolis of Wati.</Pair>
<Pair single="benefit" id="devotee-of-the-old-gods-benefit">You gain a +1 trait bonus on Knowledge (history) and Knowledge (religion) checks, and one of those skills is always a class skill for you. In addition, your faith in the old gods of Osirion grants you a +1 trait bonus on saving throws against divine magic. For more information on the deities of Ancient Osirion, see <em>Pathfinder Adventure Path #80: Empty Graves.</em></Pair>
</Ability>
</>};
const _foreign_opportunist = {title: "Foreign Opportunist", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/mummys_mask_players_guide">Mummy's Mask Player's Guide</Link>, <Link to="/source/people_of_the_sands">People of the Sands</Link></p>
<Ability id="foreign-opportunist" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="foreign-opportunist">Foreign Opportunist</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Mummy's Mask</Pair>
<Pair single="flavor" id="foreign-opportunist-flavor">You're not a native Osirian, but the opportunity to explore the tombs of Ancient Osirion - and "liberate" the treasures they hold - is too good to pass up. Whether or not you're interested in the history of this land, you're definitely interested in the wealth that's lain hidden in dusty crypts for millennia: such as the tombs in the newly opened necropolis of Wati.</Pair>
<Pair single="benefit" id="foreign-opportunist-benefit">You gain a +2 trait bonus on Appraise checks, and that skill is always a class skill for you. In addition, your contacts in the antiquities markets allow you to sell relics of Ancient Osirion for 60% of their listed price, rather than the normal 50% value. What is considered a relic of Ancient Osirion is left to the GM's discretion.</Pair>
</Ability>
</>};
const _inquisitive_archaeologist = {title: "Inquisitive Archaeologist", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/mummys_mask_players_guide">Mummy's Mask Player's Guide</Link>, <Link to="/source/people_of_the_sands">People of the Sands</Link></p>
<Ability id="inquisitive-archaeologist" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="inquisitive-archaeologist">Inquisitive Archaeologist</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Mummy's Mask</Pair>
<Pair single="flavor" id="inquisitive-archaeologist-flavor">You have studied the architectural styles of nations throughout the Inner Sea region, but none have fascinated you like the architecture of Ancient Osirion. Hearing that the famed necropolis of Wati has finally been opened for exploration, you've come to that city to get firsthand experience with the lost secrets of Ancient Osirion's master builders.</Pair>
<Pair single="benefit" id="inquisitive-archaeologist-benefit">You gain a +2 trait bonus on Knowledge (engineering) checks, and that skill is always a class skill for you. In addition, you gain a +2 trait bonus on Perception checks to find concealed or secret doors in structures built in the style of Ancient Osirion.</Pair>
</Ability>
</>};
const _mummy_cursed = {title: "Mummy-Cursed", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/mummys_mask_players_guide">Mummy's Mask Player's Guide</Link>, <Link to="/source/people_of_the_sands">People of the Sands</Link></p>
<Ability id="mummy-cursed" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="mummy-cursed">Mummy-Cursed</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Mummy's Mask</Pair>
<Pair single="flavor" id="mummy-cursed-flavor">One of your ancestors ran afoul of a mummy's curse while exploring an ancient tomb. This curse was passed down to later generations of your family, but over time, your line has become more resistant to curses. You've come to Wati to explore its untouched necropolis, and while you hope you won't have to face a real undead mummy, at least you have some defense if you do.</Pair>
<Pair single="benefit" id="mummy-cursed-benefit">You gain a +2 trait bonus on saving throws against curses and curse effects (including mummy rot and spells with the curse descriptor) and a +2 trait bonus on saving throws against a mummy's aura of despair.</Pair>
</Ability>
</>};
const _resurrected = {title: "Resurrected", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/mummys_mask_players_guide">Mummy's Mask Player's Guide</Link>, <Link to="/source/people_of_the_sands">People of the Sands</Link></p>
<Ability id="resurrected" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="resurrected">Resurrected</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Mummy's Mask</Pair>
<Pair single="flavor" id="resurrected-flavor">At some time in the recent past you died, but you were brought back to life - whether because of magic, a blessing of the gods, a destiny you have to fulfill, or perhaps it just wasn't your time to die yet. Whatever the nature of your resurrection, your experience gave you a fascination with death, and you hope to find some insight into the nature of mortality by exploring the tombs of Wati's famous necropolis.</Pair>
<Pair single="benefit" id="resurrected-benefit">You gain a +2 trait bonus on saving throws against death effects. In addition, you do not die until your hit points drop to a negative amount equal to or lower than your Constitution score + 4.</Pair>
</Ability>
</>};
const _sphinx_riddler = {title: "Sphinx Riddler", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/mummys_mask_players_guide">Mummy's Mask Player's Guide</Link>, <Link to="/source/people_of_the_sands">People of the Sands</Link></p>
<Ability id="sphinx-riddler" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="sphinx-riddler">Sphinx Riddler</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Mummy's Mask</Pair>
<Pair single="flavor" id="sphinx-riddler-flavor">You've always been fascinated with the ancient race of sphinxes, and are inspired by them to love puzzles and riddles and enjoy solving difficult dilemmas. Like so many others, You've come to Wati to explore its ancient necropolis, but You've also heard that sphinxes occasionally visit a sphinx-shaped ruin called Ubet's Folly in the city-perhaps you'll have the chance to meet and talk with a sphinx yourself!</Pair>
<Pair single="benefit" id="sphinx-riddler-benefit">You gain a +1 trait bonus on Bluff and Diplomacy checks against sphinxes, and a +1 trait bonus on any skill check to decipher a puzzle or riddle. In addition, you may choose Sphinx as one of your bonus languages.</Pair>
</Ability>
</>};
const _trap_finder = {title: "Trap Finder", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/mummys_mask_players_guide">Mummy's Mask Player's Guide</Link>, <Link to="/source/people_of_the_sands">People of the Sands</Link></p>
<Ability id="trap-finder" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="trap-finder">Trap Finder</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Mummy's Mask</Pair>
<Pair single="flavor" id="trap-finder-flavor">Forgotten dungeons and ancient tombs have always held an appeal for you, and you've never been able to resist the urge to delve into these lost sites in search of knowledge, treasure, or both. You may not have received any formal training in the roguish arts, but you've nonetheless become skilled at spotting and disabling hidden traps. The tombs of Wati's necropolis, just opened for exploration, seem like the perfect place to put your skills to the test.</Pair>
<Pair single="benefit" id="trap-finder-benefit">You gain a +1 trait bonus on Disable Device checks, and that skill is always a class skill for you. In addition, you can use Disable Device to disarm magic traps, like a rogue.</Pair>
</Ability>
</>};
const _undead_crusader = {title: "Undead Crusader", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/mummys_mask_players_guide">Mummy's Mask Player's Guide</Link>, <Link to="/source/people_of_the_sands">People of the Sands</Link></p>
<Ability id="undead-crusader" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="undead-crusader">Undead Crusader</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Mummy's Mask</Pair>
<Pair single="flavor" id="undead-crusader-flavor">You have dedicated your life to eradicating the scourge of the undead from Golarion. You have spent countless hours studying the different types of undead and have trained endlessly to learn the best ways to defeat them. If any undead creatures come out of the tombs of Wati's necropolis, you'll be ready for them!</Pair>
<Pair single="benefit" id="undead-crusader-benefit">You gain a +1 trait bonus on damage rolls against undead creatures. In addition, you gain a +1 trait bonus on Knowledge (religion) checks, and that skill is always a class skill for you.</Pair>
</Ability>
</>};
const _wati_native = {title: "Wati Native", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/mummys_mask_players_guide">Mummy's Mask Player's Guide</Link>, <Link to="/source/people_of_the_sands">People of the Sands</Link></p>
<Ability id="wati-native" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="wati-native">Wati Native</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Mummy's Mask</Pair>
<Pair single="flavor" id="wati-native-flavor">You were born and raised in the city of Wati, and you know its streets and secrets well. Although it's frowned upon by the city's authorities, you have sneaked into the necropolis on multiple occasions to wander its dusty, abandoned streets. Out of respect for the deceased, you've never actually entered one of the necropolis's silent tombs, but you have no fear of what might lie inside.</Pair>
<Pair single="benefit" id="wati-native-benefit">You gain a +2 trait bonus on saves against fear effects. In addition, your knowledge of the city grants you a +1 trait bonus on Knowledge (local) checks, and that skill is always a class skill for you.</Pair>
</Ability>
</>};
const _adaptive_magic = {title: "Adaptive Magic", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/reign_of_winter_players_guide">Reign of Winter Player's Guide</Link>, <Link to="/source/people_of_the_north">People of the North</Link></p>
<Ability id="adaptive-magic" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="adaptive-magic">Adaptive Magic</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Reign of Winter</Pair>
<Pair single="flavor" id="adaptive-magic-flavor">The wonders of magic have always fascinated you, and you find the urge to tinker and experiment with magic almost irresistible. You could be the child of an alchemist, wizard, or witch; a member of the <Link to="/rule/pathfinder_society">Pathfinder Society</Link>; or maybe someone with a touch of fey or dragon blood. You may not be trained in magic, and you've had your share of accidental mishaps, but you possess a natural knack for activating magic items. you've always been intrigued by the cold magic of the winter witches and ice mages of the North, and would love to get your hands on some of their magic items.</Pair>
<Pair single="benefit" id="adaptive-magic-benefit">You gain a +1 trait bonus on Knowledge (arcana) and Use Magic Device checks, and Use Magic Device is a class skill for you.</Pair>
</Ability>
</>};
const _blood_of_giants = {title: "Blood of Giants", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/reign_of_winter_players_guide">Reign of Winter Player's Guide</Link>, <Link to="/source/people_of_the_north">People of the North</Link></p>
<Ability id="blood-of-giants" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="blood-of-giants">Blood of Giants</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Reign of Winter</Pair>
<Pair single="flavor" id="blood-of-giants-flavor">You're a big person, and people have always said you've got some giant blood in you. Even as a child, you towered over your friends, and as you grew older, you grew even taller and stronger. Maybe your hair has a tint of blue as well, or your skin is as pale as snow. Perhaps someday you'll get the opportunity to travel to the North and meet some real giants, and see whether the rumors about you are true.</Pair>
<Pair single="benefit" id="blood-of-giants-benefit">You gain a +1 trait bonus on combat maneuver checks to sunder, and a +1 trait bonus to your CMD against bull rush and overrun combat maneuvers.</Pair>
</Ability>
</>};
const _failed_winter_witch_apprentice = {title: "Failed Winter Witch Apprentice", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/reign_of_winter_players_guide">Reign of Winter Player's Guide</Link>, <Link to="/source/people_of_the_north">People of the North</Link></p>
<Ability id="failed-winter-witch-apprentice" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="failed-winter-witch-apprentice">Failed Winter Witch Apprentice</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Reign of Winter</Pair>
<Pair single="flavor" id="failed-winter-witch-apprentice-flavor">As a child, you were apprenticed as a winter witch in the frozen land of Irrisen, but you did not complete your training. Perhaps you disagreed with the politics of Irrisen's White Witches, or you had an altercation with one of your teachers, or maybe you were just ill-suited to the practice of witchcraft. Whatever the reason, you left the ranks of the winter witches and left Irrisen. Whether or not you have continued your training on your own, you still retain some small knowledge of witchery and the magic of the icy north.</Pair>
<Pair single="benefit" id="failed-winter-witch-apprentice-benefit">You gain a +1 trait bonus on Knowledge (arcana) and Spellcraft checks to identify spells or magical effects with the cold descriptor, and one of these skills (your choice) is a class skill for you. In addition, you gain Hallit or Skald (this does not count toward your number of languages).</Pair>
</Ability>
</>};
const _northern_ancestry = {title: "Northern Ancestry", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/reign_of_winter_players_guide">Reign of Winter Player's Guide</Link>, <Link to="/source/people_of_the_north">People of the North</Link></p>
<Ability id="northern-ancestry" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="northern-ancestry">Northern Ancestry</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Reign of Winter</Pair>
<Pair single="flavor" id="northern-ancestry-flavor">One of your parents came from the North, and the tales of the frozen lands at the top of the world that you grew up listening to excited your imagination. Alternatively, maybe one of your ancestors passed on the blood of some frost-rimed creature. You feel most alive during the chill of winter, and as a child, you spent hours playing in the snow. You rarely feel the cold, and you've always had a restless longing to travel north.</Pair>
<Pair single="benefit" id="northern-ancestry-benefit">You gain a +1 trait bonus on Fortitude saves, as well as cold resistance 2; this resistance does not stack with cold resistance gained from any other source.</Pair>
</Ability>
</>};
const _restless_wayfarer = {title: "Restless Wayfarer", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/reign_of_winter_players_guide">Reign of Winter Player's Guide</Link>, <Link to="/source/people_of_the_north">People of the North</Link></p>
<Ability id="restless-wayfarer" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="restless-wayfarer">Restless Wayfarer</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Reign of Winter</Pair>
<Pair single="flavor" id="restless-wayfarer-flavor">You have long led a nomadic life-perhaps because your parents were travelers (whether roaming Varisian caravaneers or traveling merchants who traded far and wide), you belonged to a nomadic tribe, or you ran away from home to discover the world at a young age. Some call it wanderlust, but to you the thought of new places and experiences is truly what makes life worth living, and no region catches your imagination like the windswept wilderness of the North. You are used to getting along in unfamiliar lands and interacting with interesting new people.</Pair>
<Pair single="benefit" id="restless-wayfarer-benefit">You gain a +1 trait bonus on Knowledge (geography) and Knowledge (local) checks, and one of these skills (your choice) is a class skill for you. You can also speak one additional language (this does not count toward your number of languages).</Pair>
</Ability>
</>};
const _vigilante_witch_hunter = {title: "Vigilante Witch Hunter", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/reign_of_winter_players_guide">Reign of Winter Player's Guide</Link>, <Link to="/source/people_of_the_north">People of the North</Link></p>
<Ability id="vigilante-witch-hunter" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="vigilante-witch-hunter">Vigilante Witch Hunter</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Reign of Winter</Pair>
<Pair single="flavor" id="vigilante-witch-hunter-flavor">You don't trust witches. They deal with otherworldly beings, consort with beasts, and brew vile poisons in their cauldrons. As a child, perhaps you barely escaped some horrid fate at the hands of an evil witch, or maybe a loved one was stolen from you by a witch's charms. Perhaps you wanted to be a witch yourself, but the local witch refused to take you on as an apprentice. Whatever the reason, you now hate witches, and have dedicated your life to ferreting them out and exposing their wickedness for all to see. You know that the North is full of winter witches, and should you ever find yourself there, you'll relish bringing your justice to them as well.</Pair>
<Pair single="benefit" id="vigilante-witch-hunter-benefit">You gain a +1 trait bonus on Sense Motive checks, and Sense Motive is a class skill for you. In addition, you begin the campaign with 1d4 <Link to="/magic-wondrous/hex_nail">hex nails</Link>.</Pair>
</Ability>
</>};
const _warded_against_witchery = {title: "Warded against Witchery", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/reign_of_winter_players_guide">Reign of Winter Player's Guide</Link>, <Link to="/source/people_of_the_north">People of the North</Link></p>
<Ability id="warded-against-witchery" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="warded-against-witchery">Warded against Witchery</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Reign of Winter</Pair>
<Pair single="flavor" id="warded-against-witchery-flavor">Sometime in your youth, you encountered a location, object, or being steeped in the power of evil witchcraft. Whether you were the victim of this force, were a conduit for it, or merely witnessed its effects, the event changed your life. You have tried to put the strange incident behind you and forget it, but nebulous premonitions of danger and eerie feelings of deja vu have dogged your steps ever since. For some inexplicable reason, you feel drawn to the lands of the North, though you fear another encounter with the evil witchcraft that touched you once before. Whether through your purity, the blessing of goodly spirits, an innate determination, or an intuitive and inexplicable familiarity with the ways of black magic, you have acquired a resilience against the power of the dark arts.</Pair>
<Pair single="benefit" id="warded-against-witchery-benefit">You gain a +1 trait bonus on saving throws against the spells, spell-like abilities, and supernatural abilities of evil arcane spellcasters, and a +1 trait bonus on Spellcraft checks to identify spells cast by evil arcane spellcasters.</Pair>
</Ability>
</>};
const _accidental_clone = {title: "Accidental Clone", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/return_of_the_runelords_players_guide">Return of the Runelords Players Guide</Link></p>
<Ability id="accidental-clone" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="accidental-clone">Accidental Clone</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Return of the Runelords</Pair>
<Pair title="Requirements" hl><Link to="/race/human">Human</Link></Pair>
<Pair single="flavor" id="accidental-clone-flavor">Adventuring has been in your blood for as long as you can remember, and this urge to go out and explore the world left you recently in over your head when you (foolishly or bravely, depending on how you look at it) decided to explore an old Thassilonian ruin near your home town. The adventure ended in tragedy when you set off a devastating trap while investigating a statue of a beautiful woman - someone you believed to be one of the ancient runelords of Thassilon. The trap slaughtered your entire party - including you.~~~You woke from death some time later, your memories intact but your body transformed. No longer did you resemble your previous self - you instead looked like the woman depicted in the statue. Now, you've joined up with a new group of adventurers; despite your tragic first attempt at dungeon delving, your thirst for adventure has returned stronger than ever. You're sure that this time you'll be able to keep your fellow explorers alive, and the strange dreams you've been having ever since you came back to life in your new body - a body that your research has revealed was originally intended to be a clone of none other than Sorshen, the Runelord of Lust - have only further solidified in your mind the fact that you and your companions are destined for greatness.</Pair>
<Pair single="benefit" id="accidental-clone-benefit"><p>Your character must be human if you take this trait (though you may retain your previous gender identity). Your ethnicity is Azlanti, but you are not pure-blooded - you have the standard human ability score adjustments. Your resemblance to Sorshen may have unexpected side effects as the campaign progresses, for good or for ill. In any event, you gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> and <Link to="/skill/diplomacy">Diplomacy</Link> checks, and these skills are always class skills for you.</p>
<p>Once per adventure, you can retroactively apply a +20 trait bonus to a saving throw against a mind-affecting effect after you learn the outcome of the roll. A saving throw result of a natural 1 still automatically fails, but if the +20 bonus adjusts the save so that it is successful, you treat the failed saving throw as a successful one.</p>
<p>Unless the GM approves, only one PC in the group can have the Accidental Clone trait.</p>
</Pair>
</Ability>
</>};
const _audrahnis_ally = {title: "Audrahni's Ally", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/return_of_the_runelords_players_guide">Return of the Runelords Players Guide</Link></p>
<Ability id="audrahnis-ally" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="audrahnis-ally">Audrahni's Ally</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Return of the Runelords</Pair>
<Pair single="flavor" id="audrahnis-ally-flavor">While every PC should be at least passingly familiar with the elven gravedigger Audrahni, you are one of the few in town she counts as a true friend. Work with the GM to determine what sort of common ground you and Audrahni share. Perhaps you worship a deity whose teachings parallel her vocation (such as Ashava or Pharasma). Maybe you're a Forlorn elf and you sense a kindred spirit within her. With the GM's permission you may have known her in Magnimar before meeting her once again upon arriving in Roderic's Cove. Or perhaps you merely share a similar passion for arcana, dancing, history, magic, or religion. More details about Audrahni appear in the adventures, but she's a mysterious woman who's close lipped about her past - and so you'll need to work with your GM to have a stronger relationship at the campaign's outset.</Pair>
<Pair single="benefit" id="audrahnis-ally-benefit"><p>Audrahni trusts you, and she's shared one element of her past with you since befriending you. Choose one of the following questions. At the start of the campaign, the GM will give you a brief answer about Audrahni's past. Once you know the answer, you should fashion a parallel event in your own PC's history, creating a shared misery or memory with Audrahni. The fact that you've met someone else who had a similar event in their past has bolstered your own resolve, and has granted you a +1 trait bonus to the saving throw determined by the question you select.</p>
<ul>
<li>"What happened to your parents?": Grants a +1 trait bonus to Fortitude saving throws.</li>
<li>"Where did you grow up?": Grants a +1 trait bonus to Reflex saving throws.</li>
<li>"What historical figure inspired you the most?": Grants a +1 trait bonus to Will saving throws.</li>
</ul>
<p>Once per adventure as a <strong className="hl">standard action</strong>, you may concentrate on the bond you and Audrahni share. The strong emotions brought on by these memories bolster your desire to forge ahead and remain alive, granting you the effects of one of the following spells at a caster level equal to your character level: <Link to="/spell/calm_emotions">calm emotions</Link>, <Link to="/spell/cure_moderate_wounds">cure moderate wounds</Link>, or <Link to="/spell/lesser_restoration">lesser restoration</Link>.</p>
</Pair>
</Ability>
</>};
const _close_allies = {title: "Close Allies", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/return_of_the_runelords_players_guide">Return of the Runelords Players Guide</Link></p>
<Ability id="close-allies" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="close-allies">Close Allies</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Return of the Runelords</Pair>
<Pair single="flavor" id="close-allies-flavor">You and another PC are close allies - friends, lovers, siblings, or even twins. Work with the other player to build a shared history - both you and the other player must choose Close Allies as a campaign trait, and both must agree to the nature of the relationship between the two characters. (At the GM's option, more than two PCs can be linked by this trait.) You and your close ally have always supported each other. You might have the tendency to complete each other's sentences, dress similarly, share the same religion or faith, or have endured a dangerous event together in the past. If you and the other player agree (and have chosen either the siblings or twins option below), you might not even particularly like your close "ally," yet you still respect them and can utilize this trait's benefits all the same.~~~If your relationship with your close ally ends (as a result of death, a parting of ways, or other catastrophe), you immediately lose this campaign trait and replace it with <Link to="/trait/spirit_touched">Spirit Touched</Link> as a result of your emotional distress.~~~When you and the other PC agree to take this shared trait, you must also agree on the nature of your characters' bond by choosing one of the following: friends, lovers, siblings, or twins. If you choose twins, both PCs must be of the same race. If you choose siblings, one or both of you are adopted if you aren't of the same race.</Pair>
<Pair single="benefit" id="close-allies-benefit"><p>Whenever you are adjacent to your close ally, you gain a +1 trait bonus on all saving throws.</p>
<p>Once per adventure as an <strong className="hl">immediate action</strong>, you may grant your close ally a bonus equal to the result of 1d6 to a single d20 roll. You must have line of sight to your ally to use this ability. You may choose to grant this bonus after your ally has rolled, but must do so before the result of the roll is known.</p>
</Pair>
</Ability>
</>};
const _intrigued_by_thassilon = {title: "Intrigued by Thassilon", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/return_of_the_runelords_players_guide">Return of the Runelords Players Guide</Link></p>
<Ability id="intrigued-by-thassilon" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="intrigued-by-thassilon">Intrigued by Thassilon</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Return of the Runelords</Pair>
<Pair single="flavor" id="intrigued-by-thassilon-flavor">The rediscovery of Thassilon's legacy several years ago was an eye-opener for many, including you. After living so long in the shadow of these enormous ruins, you were intrigued to find out that they were much older than anyone could have guessed and that the runelords who built them may still exist. You've made a promise to yourself to uncover all that you can about Thassilon, its runelords, and the mysterious history of that ancient civilization.</Pair>
<Pair single="benefit" id="intrigued-by-thassilon-benefit"><p>You gain Thassilonian as a bonus language, and at 1st level and every 2 levels thereafter, you gain a bonus skill rank that can only be applied to <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link>, <Link to="/skill/linguistics">Linguistics</Link>, or <Link to="/skill/use_magic_device">Use Magic Device</Link>.</p>
<p>Once per adventure, you may either take 20 on a Use Magic Device check or activate a charged magic item without expending any charges.</p>
</Pair>
</Ability>
</>};
const _scion_of_legend = {title: "Scion of Legend", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/return_of_the_runelords_players_guide">Return of the Runelords Players Guide</Link></p>
<Ability id="scion-of-legend" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="scion-of-legend">Scion of Legend</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Return of the Runelords</Pair>
<Pair single="flavor" id="scion-of-legend-flavor">Your character has a personal link or association with one of Varisia's established heroes. This hero should be a PC you played in a previous campaign (and could be, but need not be, one of the Sihedron Heroes). Your character could be a younger sibling, younger cousin, or even an apprentice of the hero. If enough time has passed, you might be the hero's child, or your character could have reincarnated from the soul of a hero that died before your character was born.</Pair>
<Pair single="benefit" id="scion-of-legend-benefit"><p>Choose two skills for which your associated hero has skill ranks. You gain a +1 trait bonus on checks with both of those skills, and those two skills are class skills for you.</p>
<p>Once per adventure as a <strong className="hl">free action</strong>, you can call upon a previously forgotten bit of advice or lore imparted to you by the hero to gain an insight bonus equal to your class level (minimum +10) to a skill check. You may choose to apply this bonus after you roll the skill check, but must do so before the result of the roll is known.</p>
</Pair>
</Ability>
</>};
const _spirit_touched = {title: "Spirit Touched", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/return_of_the_runelords_players_guide">Return of the Runelords Players Guide</Link></p>
<Ability id="you-gain-a-2-trait-bonus-on-all-saving-throws-made-against-supernatural-attacks-spells-or-spell-like-abilities-from-undead-creaturesonce-per-adventure-you-may-automatically-succeed-at-a-constitution-check-to-stabilize-or-a-saving-throw-to-remove-a-negative-level" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="you-gain-a-2-trait-bonus-on-all-saving-throws-made-against-supernatural-attacks-spells-or-spell-like-abilities-from-undead-creaturesonce-per-adventure-you-may-automatically-succeed-at-a-constitution-check-to-stabilize-or-a-saving-throw-to-remove-a-negative-level">You gain a +2 trait bonus on all saving throws made against supernatural attacks, spells, or spell-like abilities from undead creatures.~~~Once per adventure, you may automatically succeed at a Constitution check to stabilize or a saving throw to remove a negative level.</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Return of the Runelords</Pair>
<Pair single="flavor" id="you-gain-a-2-trait-bonus-on-all-saving-throws-made-against-supernatural-attacks-spells-or-spell-like-abilities-from-undead-creaturesonce-per-adventure-you-may-automatically-succeed-at-a-constitution-check-to-stabilize-or-a-saving-throw-to-remove-a-negative-level-flavor">As a child, you were influenced by overwhelming emotional trauma associated with death or undeath, and that influence marked you for the rest of your life. You may have been possessed by a ghost, had strange dreams in a haunted house, or suffered from an affliction from an undead source. You might even have had a near-death experience, or actually died and been returned to life. Work with your GM to determine the details of how you became spirit touched; she may have suggestions for you to tie your experience more tightly into the themes of the Return of the Runelords Adventure Path.</Pair>
</Ability>
</>};
const _time_lost = {title: "Time Lost", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/return_of_the_runelords_players_guide">Return of the Runelords Players Guide</Link></p>
<Ability id="time-lost" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="time-lost">Time Lost</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Return of the Runelords</Pair>
<Pair single="flavor" id="time-lost-flavor">You've always felt separated from the era into which you were born. Perhaps you feel that you were born too late, and that you and your interests are better suited to a previous age. Maybe you have the conviction you were born too soon, and that your true destiny lies in some distant future. You might be suffering from missing time - whether a few hours, a few weeks, or even several months - for which you have no memories. You might instead receive brief visions of friends or enemies much older or younger than their actual age. You've long since grown used to this strange condition, but have not yet determined why you suffer from it. Your GM will be provided with additional information about this trait's strange nature in the third adventure of Return of the Runelords.</Pair>
<Pair single="benefit" id="time-lost-benefit">You have a knack for knowing when to act a few instants in advance and gain a +2 trait bonus on Initiative checks. Once per adventure as an immediate action, you may use your strange link to the flow of time to force the GM to reroll a single d20 roll. You must declare the use of this ability immediately after the GM rolls the d20, but you can choose to do so after learning the results of the roll.</Pair>
</Ability>
</>};
const _eager_performer = {title: "Eager Performer", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/rise_of_the_runelords_anniversary_edition_players_guide">Rise of the Runelords Anniversary Edition Player's Guide</Link></p>
<Ability id="eager-performer" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="eager-performer">Eager Performer</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Rise of the Runelords</Pair>
<Pair single="flavor" id="eager-performer-flavor">Hearing that Sandpoint had a theater rivaling those found in large cities like Magnimar and Korvosa, you decided to try your luck getting stage time there. After sending a letter to Cyrdak Drokkus requesting an audition and not hearing back, you've taken it upon yourself to travel to Sandpoint and meet him in person, trusting your force of will and charming influence will get you what you want.</Pair>
<Pair single="benefit" id="eager-performer-benefit">You gain a +1 trait bonus on checks for any one Perform skill. Additionally, choose any one spell of the enchantment school; its save DC increases by +1.</Pair>
</Ability>
</>};
const _family_ties_rotrl = {title: "Family Ties (RotRL)", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/rise_of_the_runelords_anniversary_edition_players_guide">Rise of the Runelords Anniversary Edition Player's Guide</Link></p>
<Ability id="family-ties-rotrl" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="family-ties-rotrl">Family Ties (RotRL)</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Rise of the Runelords</Pair>
<Pair single="flavor" id="family-ties-rotrl-flavor">While not ethnically a Varisian, you have been raised among Varisians and they consider you one of their own. Furthermore, you managed to get in good with a group of Sczarni and consider them your new family. After being run out of the last place your Sczarni family camped, you tracked down a friend of the family in Sandpoint - a ruthless thug named Jubrayl Vhiski at the Fatman's Feedbag. During your time with the Sczarni, you learned a few tricks of the trade.</Pair>
<Pair single="benefit" id="family-ties-rotrl-benefit">You gain a +1 trait bonus on Knowledge (local) checks and Knowledge (local) is always a class skill for you. In addition, you begin play able to speak and read Varisian.</Pair>
</Ability>
</>};
const _friends_and_enemies = {title: "Friends and Enemies", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/rise_of_the_runelords_anniversary_edition_players_guide">Rise of the Runelords Anniversary Edition Player's Guide</Link></p>
<Ability id="friends-and-enemies" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="friends-and-enemies">Friends and Enemies</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Rise of the Runelords</Pair>
<Pair single="benefit" id="friends-and-enemies-benefit">One of your family members, perhaps a parent, cousin, aunt, or uncle, helped Daviren Hosk put down a group of goblins near Sandpoint. Since then, your family member passed away, but not before telling you about that day and the offer Daviren made her should she ever be in need. Once you make it to Sandpoint and meet up with Daviren Hosk at the Goblin Squash Stables, he gives you one of his best steeds and all the necessary accoutrements as gratitude for your family member's help: a heavy combat trained horse, a military saddle, saddlebags, bit and bridle, a month's worth of feed, and lifetime stabling at the Goblin Squash Stables.</Pair>
</Ability>
</>};
const _giant_slayer = {title: "Giant Slayer", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/rise_of_the_runelords_anniversary_edition_players_guide">Rise of the Runelords Anniversary Edition Player's Guide</Link></p>
<Ability id="giant-slayer" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="giant-slayer">Giant Slayer</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Rise of the Runelords</Pair>
<Pair single="flavor" id="giant-slayer-flavor">Your family's village was plundered by giants in the wilds of Varisia, leaving nothing but a smoldering ruin. After the destruction of your village, your family trained for combat against giants to prevent such a tragedy from ever happening again. Since hearing of giants mobilizing throughout the countryside, you ventured to Sandpoint to help the town prepare for a possible incursion.</Pair>
<Pair single="benefit" id="giant-slayer-benefit">You gain a +1 trait bonus on Bluff, Perception, and Sense Motive checks and +1 trait bonus on attack rolls and damage rolls against creatures of the giant subtype.</Pair>
</Ability>
</>};
const _goblin_watcher = {title: "Goblin Watcher", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/rise_of_the_runelords_anniversary_edition_players_guide">Rise of the Runelords Anniversary Edition Player's Guide</Link></p>
<Ability id="goblin-watcher" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="goblin-watcher">Goblin Watcher</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Rise of the Runelords</Pair>
<Pair single="flavor" id="goblin-watcher-flavor">You grew up in Sandpoint staring off the cliff across the Varisian Gulf. Spending so much time there at Junker's Edge watching the goblins below as they scrounged through the discarded junk and seeing what they made out of the garbage, you developed an eye for spotting the most useful and valuable discarded items.</Pair>
<Pair single="benefit" id="goblin-watcher-benefit">You gain a +1 trait bonus on Perception and Appraise checks, and a +5 trait bonus on Appraise checks to determine the most valuable item visible in a treasure hoard.</Pair>
</Ability>
</>};
const _hagfish_hopeful = {title: "Hagfish Hopeful", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/rise_of_the_runelords_anniversary_edition_players_guide">Rise of the Runelords Anniversary Edition Player's Guide</Link></p>
<Ability id="hagfish-hopeful" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="hagfish-hopeful">Hagfish Hopeful</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Rise of the Runelords</Pair>
<Pair single="flavor" id="hagfish-hopeful-flavor">Ever since passing through Sandpoint when you were a child and hearing about the contest at the popular tavern known as the Hagfish, you wanted to take that coin purse as your own and carve your name on the ceiling beam above the bar. Training yourself to choke down indigestible food and drink water a pig would refuse, you've built up quite a strong resistance to all things putrid and gross.</Pair>
<Pair single="benefit" id="hagfish-hopeful-benefit">You gain a +2 trait bonus on Fortitude saves against disease and poison.</Pair>
</Ability>
</>};
const _merchant_family = {title: "Merchant Family", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/rise_of_the_runelords_anniversary_edition_players_guide">Rise of the Runelords Anniversary Edition Player's Guide</Link></p>
<Ability id="merchant-family" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="merchant-family">Merchant Family</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Rise of the Runelords</Pair>
<Pair single="benefit" id="merchant-family-benefit">You are related to one of the four noble families from Magnimar who founded the Mercantile League of Sandpoint. You either grew up in Magnimar as a cousin in the Valdemar or Deverin family or were born and raised in Sandpoint. Education in running a business and years of looking after the family enterprise have given you a knack for trade. You increase the gp limit of any settlement by 20% and can resell items at an additional 10% over the amount of gp you normally would get from selling off treasure.</Pair>
</Ability>
</>};
const _monster_hunter = {title: "Monster Hunter", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/rise_of_the_runelords_anniversary_edition_players_guide">Rise of the Runelords Anniversary Edition Player's Guide</Link></p>
<Ability id="monster-hunter" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="monster-hunter">Monster Hunter</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Rise of the Runelords</Pair>
<Pair single="benefit" id="monster-hunter-benefit">Perhaps you came to the Varisian Gulf in search of the Sandpoint Devil, or maybe you followed fisherman's tales of Old Murdermaw; regardless, you've ventured through Varisia to hunt down famous monsters. While they have all eluded you so far, you made it to Sandpoint to research and restock before heading back out into the wilderness. Because of your training, you gain a +1 trait bonus on attack rolls and weapon damage rolls against aberrations and magical beasts.</Pair>
</Ability>
</>};
const _sandpoint_faithful = {title: "Sandpoint Faithful", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends</Link>, <Link to="/source/rise_of_the_runelords_anniversary_edition_players_guide">Rise of the Runelords Anniversary Edition Player's Guide</Link></p>
<Ability id="sandpoint-faithful" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="sandpoint-faithful">Sandpoint Faithful</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Rise of the Runelords</Pair>
<Pair single="flavor" id="sandpoint-faithful-flavor">As a faithful adherent of Abadar, Desna, Erastil, Gozreh, Sarenrae, or Shelyn, you've come to the Swallowtail Festival to celebrate the consecration of Sandpoint Cathedral.</Pair>
<Pair single="benefit" id="sandpoint-faithful-benefit">You gain a silver holy symbol of your chosen deity, and so long as you worship that deity and openly wear his or her symbol, you regain +1 additional hit point every time you receive magical healing.</Pair>
</Ability>
</>};
const _scholar_of_the_ancients = {title: "Scholar of the Ancients", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/rise_of_the_runelords_anniversary_edition_players_guide">Rise of the Runelords Anniversary Edition Player's Guide</Link></p>
<Ability id="scholar-of-the-ancients" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="scholar-of-the-ancients">Scholar of the Ancients</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Rise of the Runelords</Pair>
<Pair single="flavor" id="scholar-of-the-ancients-flavor">Growing up with your nose in books, you've had a great interest in past cultures and ancient history. Furthermore, having grown up in Varisia, you know the monuments dotting the landscape belong to an ancient civilization known as Thassilon. From your life of study and dogged research, you've pieced together the language and partial history of this once-great empire.</Pair>
<Pair single="benefit" id="scholar-of-the-ancients-benefit">You gain a +1 trait bonus on Knowledge (arcana) and Knowledge (history) checks, and begin play able to speak and read Thassilonian.</Pair>
</Ability>
</>};
const _student_of_faith = {title: "Student of Faith", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/rise_of_the_runelords_anniversary_edition_players_guide">Rise of the Runelords Anniversary Edition Player's Guide</Link></p>
<Ability id="student-of-faith" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="student-of-faith">Student of Faith</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Rise of the Runelords</Pair>
<Pair single="benefit" id="student-of-faith-benefit">While you have personally dedicated your life to a single deity, you study all religions and mortal faiths. Upon hearing that the town of Sandpoint recently completed a cathedral dedicated to the six deities most popular in the area, you had to see the place for yourself, and have arrived in time for the consecration of this holy edifice. Because of your strong faith and broad range of study, you cast all <Link to="/main/cure_spells">cure spells</Link> at +1 caster level, and whenever you channel energy, you gain a +1 trait bonus to the save DC of your channeled energy.</Pair>
</Ability>
</>};
const _thrill_seeker_rotr = {title: "Thrill Seeker (RotR)", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends</Link>, <Link to="/source/rise_of_the_runelords_anniversary_edition_players_guide">Rise of the Runelords Anniversary Edition Player's Guide</Link></p>
<Ability id="thrill-seeker-rotr" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="thrill-seeker-rotr">Thrill Seeker (RotR)</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Rise of the Runelords</Pair>
<Pair single="benefit" id="thrill-seeker-rotr-benefit">You've grown up in or around Sandpoint and are the heir to your family's modest farm, shop, or fishing boat, but You've always dreamed of more. Searching for a taste of excitement, You've come into town to participate in this year's Swallowtail festival. The thrill of danger grants you an additional +5 feet of movement during the first round of any combat. Additionally, you begin play with three star candle fireworks.</Pair>
</Ability>
</>};
const _athletic = {title: "Athletic", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ruins_of_azlant_players_guide">Ruins of Azlant Player's Guide</Link></p>
<Ability id="athletic" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="athletic">Athletic</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ruins of Azlant</Pair>
<Pair single="flavor" id="athletic-flavor">You have always had a knack for physical activity. You either grew up in a rural area and had an active childhood where you were always climbing trees, swimming in lakes and rivers, and clambering up rocky hillsides, or you competed in and excelled at contests or sports while growing up in a larger settlement. Due to this background, little can slow you down or inhibit your movements. When the Bountiful Venture Company interviewed you, they noticed your stature and physicality, and they chose you for the colonial expedition knowing that a strong back is always helpful in a growing colony.</Pair>
<Pair single="benefit" id="athletic-benefit">You reduce your armor check penalty by a number equal to one-third your character level (minimum 1) for purposes of Acrobatics, Climb, and Swim checks, and you gain a +1 trait bonus to one of these three skills, chosen when you take this trait.</Pair>
</Ability>
</>};
const _azlanti_scholar_roapg = {title: "Azlanti Scholar (RoAPG)", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ruins_of_azlant_players_guide">Ruins of Azlant Player's Guide</Link></p>
<Ability id="azlanti-scholar-roapg" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="azlanti-scholar-roapg">Azlanti Scholar (RoAPG)</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ruins of Azlant</Pair>
<Pair single="flavor" id="azlanti-scholar-roapg-flavor">You are familiar with an aspect of Azlanti lore. Maybe you first became enamored with this ancient culture after stumbling across a copy of the first volume of the Pathfinder Chronicles or after learning about Azlant in a university or another type of formal education. Perhaps your parents or guardians were scholars and you've grown up hearing about and reading about the ancient Azlanti. For years you dreamed about visiting the continent's ruins and returning with a discovery that could propel your career. Due to this scholarly bent, the Bountiful Venture Company selected you to join the colony at Talmandor's Bounty.</Pair>
<Pair single="benefit" id="azlanti-scholar-roapg-benefit">You gain a +1 trait bonus on Knowledge (history), Knowledge (local), and Use Magic Device checks, and one of these skills is a class skill for you. In addition, you gain Azlanti as a bonus language.</Pair>
</Ability>
</>};
const _eagle_knight_recruit = {title: "Eagle Knight Recruit", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ruins_of_azlant_players_guide">Ruins of Azlant Player's Guide</Link></p>
<Ability id="eagle-knight-recruit" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="eagle-knight-recruit">Eagle Knight Recruit</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ruins of Azlant</Pair>
<Pair single="flavor" id="eagle-knight-recruit-flavor">Since Talmandor's Bounty is an Andoren colony and is unlikely to see the threat of slavery, the presence of the <Link to="/rule/eagle_knights">Eagle Knights</Link> isn't strongly needed, and the Bountiful Venture Company would prefer to not have that organization immediately associated with the colony (despite the colony's name having been derived from the Eagle Knights' patron, Talmandor). However, the need for safety can't be overlooked. You were a soldier in the Andoren army or you were a civilian who showed great promise in military matters. The Eagle Knights recruited you and offered unofficial Eagle Knight status if you managed to make it into the ranks of the colonists. There, you would see to the safety of the colony and send back reports with each supply ship regarding the general state of the colony and any threats you notice. The Bountiful Venture Company admired your military prowess and selected you for the second wave of colonists to arrive at Talmandor's Bounty.</Pair>
<Pair single="benefit" id="eagle-knight-recruit-benefit">You begin play with a breastplate, a longsword (or some other martial or simple weapon), and an additional 100 gp of gear. In addition, you gain a +1 trait bonus on saving throws against mind-affecting effects.</Pair>
</Ability>
</>};
const _employee = {title: "Employee", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ruins_of_azlant_players_guide">Ruins of Azlant Player's Guide</Link></p>
<Ability id="employee" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="employee">Employee</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ruins of Azlant</Pair>
<Pair single="flavor" id="employee-flavor">You have worked for the Bountiful Venture Company or you are the child of one of its current employees. This connection helped you get a leg up on the competition to get involved in the establishment of Talmandor's Bounty. The company didn't want nepotism to show through too strongly, so you weren't included in the first wave of colonists and instead have been selected to accompany the second wave of colonists to the island. You don't want people to know that you're part of the company, but your contacts in the Bountiful Venture Company didn't necessarily tell you that you needed to keep it a secret.</Pair>
<Pair single="benefit" id="employee-benefit">You begin play with an additional 150 gp of equipment and know (at least in some capacity) one of the other company employees: Lyra Heatherly, Perrell Beys, or Ramona Avandth. Due to your association with the Bountiful Venture Company, your words and ideas may carry additional weight with the other employees of the company. (Your GM can grant a +1 circumstance bonus on Diplomacy checks in regards to these people in certain situations.) In addition, you gain a +1 trait bonus on Bluff checks, and Bluff is always a class skill for you.</Pair>
</Ability>
</>};
const _expert_explorer = {title: "Expert Explorer", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ruins_of_azlant_players_guide">Ruins of Azlant Player's Guide</Link></p>
<Ability id="expert-explorer" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="expert-explorer">Expert Explorer</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ruins of Azlant</Pair>
<Pair single="flavor" id="expert-explorer-flavor">Adventurous scholars raised you, or perhaps you were born during an expedition and haven't known any other life. You get fidgety and impatient when you become too familiar with a certain place. You are used to having excitement and the quest for knowledge guides your path in life, and you picked up a number of skills along the way that relate to this lifestyle. During your interview with the Bountiful Venture Company, they were impressed with the diverse locations you've visited in your life and selected you because of your skills in maneuvering uncharted territory.</Pair>
<Pair single="benefit" id="expert-explorer-benefit">Choose one Knowledge skill when you gain this trait. You gain a +1 trait bonus to check with that Knowledge skill and Survival checks, and either that Knowledge skill or Survival is a class skill for you. In addition, you treat the machete as a simple weapon.</Pair>
</Ability>
</>};
const _following_in_the_footsteps = {title: "Following in the Footsteps", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ruins_of_azlant_players_guide">Ruins of Azlant Player's Guide</Link></p>
<Ability id="following-in-the-footsteps" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="following-in-the-footsteps">Following in the Footsteps</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ruins of Azlant</Pair>
<Pair single="flavor" id="following-in-the-footsteps-flavor">One of your dear friends or family members was part of the first wave of colonists to be selected by the Bountiful Venture Company to establish Talmandor's Bounty. You applied for the first wave as well, but weren't selected. Now that you've made your way into the second wave, you can't wait to be reunited with your family member. Your devotion to your family or friends is important to you, and it shows not only in how you feel about that friend or family member you are soon to reunite with, but also in how you treat other people with respect.</Pair>
<Pair single="benefit" id="following-in-the-footsteps-benefit">Whenever you use the aid another action to aid an adjacent ally, increase the bonus you grant your ally by 1. In addition, due to your positive and helpful nature, you gain a +1 trait bonus on Diplomacy checks.</Pair>
</Ability>
</>};
const _healthy = {title: "Healthy", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ruins_of_azlant_players_guide">Ruins of Azlant Player's Guide</Link></p>
<Ability id="healthy" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="healthy">Healthy</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ruins of Azlant</Pair>
<Pair single="flavor" id="healthy-flavor">You come from a long line of hale and long-lived people. Growing up, you rarely got sick and had enough energy to run all day if it suited you. You don't get as tired as other people and repeated physical activities don't seem to bother you much. You were selected as part of the expedition because the Bountiful Venture Company saw great importance and promise in your robust health.</Pair>
<Pair single="benefit" id="healthy-benefit">You gain a +1 trait bonus on Fortitude saves, Swim checks to prevent nonlethal damage from fatigue after swimming for more than an hour at a time, and Constitution checks to prevent fatigue. In addition, you can <Link to="/misc/hold_your_breath">hold your breath</Link> for a number of rounds equal to 3 times your Constitution score.</Pair>
</Ability>
</>};
const _pathfinder_recruit = {title: "Pathfinder Recruit", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ruins_of_azlant_players_guide">Ruins of Azlant Player's Guide</Link></p>
<Ability id="pathfinder-recruit" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="pathfinder-recruit">Pathfinder Recruit</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ruins of Azlant</Pair>
<Pair single="flavor" id="pathfinder-recruit-flavor">Explore, report, and cooperate. This is the credo you've lived by since you've joined the <Link to="/rule/pathfinder_society">Pathfinder Society</Link>, and after hearing about the expedition to found Talmandor's Bounty you applied, eager to see the remains of Azlant. However, you quickly learned that the Bountiful Venture Company wasn't interested in involving the Pathfinder Society in the formation of the colony. This struck you as strange, because who else has as keen an understanding of some of the elements of ancient Azlant as the Pathfinder Society? Regardless, you went through the application process, making sure to highlight all of your applicable skills and experience while keeping your involvement in the Society to yourself. You were elated to receive notice that you were selected for the second wave of colonists bound for the broken continent of Azlant.</Pair>
<Pair single="benefit" id="pathfinder-recruit-benefit">You begin play with a standard <Link to="/magic-wondrous/wayfinder">wayfinder</Link> and you gain a +1 trait bonus on initiative checks.</Pair>
</Ability>
</>};
const _resourceful = {title: "Resourceful", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ruins_of_azlant_players_guide">Ruins of Azlant Player's Guide</Link></p>
<Ability id="resourceful" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="resourceful">Resourceful</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ruins of Azlant</Pair>
<Pair single="flavor" id="resourceful-flavor">You've always had a knack for building and repairing things. As a kid, you always got into your parents' tools and tinkered with things around the house. As you got older, you started making things not only to entertain yourself but also to take in a little extra money. People have noticed your skill and have frequently come to you to make something for them or to repair a pesky device or item. Every time You've amazed them at how quickly you do your work and how few resources you squander in the process. Likewise, the Bountiful Venture Company noticed your skill at not only creating wonderful wares, but also how effortlessly and efficiently you work in your trade. You always seem to make do with less, often in unexpected ways.</Pair>
<Pair single="benefit" id="resourceful-benefit">Choose one Craft or Profession skill when you gain this trait. You gain a +1 trait bonus on checks with that skill. In addition, the time required for you to create a magic item is decreased. You require only 8 hours for every 1,500 gp in the item's base price (instead of the normal 8 hours per 1,000 gp). You can create potions and scrolls whose base price is 375 gp in just 2 hours; potions and scrolls with a base price more than 375 gp but less than 1,500 gp take 8 hours to create, just like any other magic item.</Pair>
</Ability>
</>};
const _seasoned_hunter = {title: "Seasoned Hunter", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ruins_of_azlant_players_guide">Ruins of Azlant Player's Guide</Link></p>
<Ability id="seasoned-hunter" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="seasoned-hunter">Seasoned Hunter</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ruins of Azlant</Pair>
<Pair single="flavor" id="seasoned-hunter-flavor">You grew up hunting every season, any season. Maybe you grew up in a rural area and hunted to put food on the table, or perhaps you come from a comfortable lifestyle where hunting for sport is an excellent excuse to camp in the wilderness and hone your skills. After sharing stories of your most exciting hunts and proving to them that you can hit a bull's eye at 100 feet, the Bountiful Venture Company selected you for the expedition assured that you can provide food and security to the young colony.</Pair>
<Pair single="benefit" id="seasoned-hunter-benefit">Pick one of the following creature types: aberration, animal, magical beast, or vermin. You gain a +1 trait bonus on attack rolls or damage rolls (choose one; once chosen it can't be changed) against creatures of that type.</Pair>
</Ability>
</>};
const _set_mind = {title: "Set Mind", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ruins_of_azlant_players_guide">Ruins of Azlant Player's Guide</Link></p>
<Ability id="set-mind" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="set-mind">Set Mind</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ruins of Azlant</Pair>
<Pair single="flavor" id="set-mind-flavor">Every time that you've said you'd do something, you've made sure to follow through. You can't remember a time when you weren't this way. People have a hard time making you change your mind once you've set yourself on a certain path. You might be exceptionally stubborn or you may just have a particular determination. Either way, you're going to keep doing what you set your mind to. The Bountiful Venture Company recognized this useful trait of yours and selected you for the second wave of colonists because of your great resolve and unswerving dedication to what you set your mind upon.</Pair>
<Pair single="benefit" id="set-mind-benefit">Once per day when you fail a saving throw against a charm or compulsion effect that would cause you to act differently than you normally would, you can immediately reroll that saving throw as a free action. You must take the second result, even if it's worse.</Pair>
</Ability>
</>};
const _skillful = {title: "Skillful", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/ruins_of_azlant_players_guide">Ruins of Azlant Player's Guide</Link></p>
<Ability id="skillful" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="skillful">Skillful</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Ruins of Azlant</Pair>
<Pair single="flavor" id="skillful-flavor">You've always been interested in a wide array of things, and growing up You've spent time honing some of these talents, which has helped you in life. Some have attributed your successes to luck, but others have recognized what you truly have: skill. This interest in and practice of a diverse array of skills and abilities has served you well in a number of different jobs, and following in your varied interests you learned of the expedition to the ruins of Azlant. After your application, the Bountiful Venture Company selected you for the expedition because your skillful approach to matters would be helpful for a growing colony.</Pair>
<Pair single="benefit" id="skillful-benefit">Once per day when you fail an Acrobatics, Climb, Spellcraft, Stealth, or Use Magic Device check, you can immediately reroll that check as a free action. You must take the second result, even if it's worse.</Pair>
</Ability>
</>};
const _daring_doomsayer = {title: "Daring Doomsayer", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="daring-doomsayer" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="daring-doomsayer">Daring Doomsayer</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Second Darkness</Pair>
<Pair single="benefit" id="daring-doomsayer-benefit">The end times are coming, and the shadow in the sky over Riddleport is just the first piece of proof. Convinced that the end of the world is nigh, you've decided to take part in the Golden Goblin's gambling tournament-after all, what do you have to lose? Whenever you roll a <strong>1</strong> on an attack roll, you gain a +1 trait bonus on your next attack roll so long as it is made within 1 minute. You also begin play with a placard bearing an apocalyptic slogan of your choice; this wooden sign can be used as a club.</Pair>
</Ability>
</>};
const _fixer_of_odds = {title: "Fixer of Odds", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="fixer-of-odds" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="fixer-of-odds">Fixer of Odds</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Second Darkness</Pair>
<Pair single="flavor" id="fixer-of-odds-flavor">You're going to win the Golden Goblin's upcoming "Cheat the Devil and Take His Gold" tournament one way or the other.</Pair>
<Pair single="benefit" id="fixer-of-odds-benefit">You gain a +1 trait bonus on Profession (gambling) checks, and creatures searching you for objects hidden on your body don't gain the usual +4 bonus on their Perception checks. Additionally, you begin play with a "fixed" six-sided die (it has two 6s and no 1) and a dagger.</Pair>
</Ability>
</>};
const _fools_for_friends = {title: "Fools for Friends", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="fools-for-friends" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="fools-for-friends">Fools for Friends</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Second Darkness</Pair>
<Pair single="benefit" id="fools-for-friends-benefit">You don't think of yourself as a gambler. In fact, you rather detest the whole thing. Unfortunately, one or more of your friends (pick one or more of the other players' characters) doesn't think so, and you've recently learned that friend - or friends - have decided to go to the Gold Goblin's "Cheat the Devil and Take his Gold" tournament. Which pretty much means you have to go as well, since if no one's there to watch out for them, they'll lose all their money and respect. Again. Sometimes it's hard being the responsible one. Your devotion to your friendships (even when said friends seem, at times, to be trying to test that devotion) is a point of pride to you. Whenever you take the <Link to="/rule/aid_another">Aid Another</Link> action to help an ally, or whenever an ally <Link to="/rule/aid_another_2">aids you</Link> in this manner, a successful check grants an additional +1 trait bonus to the check for which aid was being rendered. Additionally, as long as one of your friends is within 30 feet, you gain a +1 trait bonus on all saving throws against charm and compulsion effects.</Pair>
</Ability>
</>};
const _into_enemy_territory = {title: "Into Enemy Territory", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="into-enemy-territory" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="into-enemy-territory">Into Enemy Territory</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Second Darkness</Pair>
<Pair single="flavor" id="into-enemy-territory-flavor">The shadow in the sky is visible from all around Riddleport, not just in town. It's certainly come to the attention of several druids, rangers, and other rural folk who dwell in the nearby mountains, forests, and swamps-among them, yourself. You've consulted with several seers and Harrowers, and may even have performed some simple auguries yourself, and all the signs point the same way-something or someone in Riddleport is connected to the blot, and it means bad news for the region. You've avoided the sleazy, dirty town for most of your life, traveling there only when absolutely necessary, and although you don't relish the prospect of going there now, you see little other choice (especially if one of your superiors is ordering you to go investigate). Fortunately, an eccentric friend of yours (pick another PC) is in town, and You've heard this friend will be taking part in some gambling thing at a place called the Gold Goblin. Your friend's always had better luck interacting with the cityfolk, so You've decided to accompany your friend to this gambling tournament and plan on letting him find a safe place for you to stay while you're in town. Your long life of self-sustenance has toughened you and made you more resistant to hardship, in any event.</Pair>
<Pair single="benefit" id="into-enemy-territory-benefit">Pick one of the three categories of saving throw. You gain a +1 trait bonus on all saving throws of that type.</Pair>
</Ability>
</>};
const _looking_for_work = {title: "Looking for Work", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="looking-for-work" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="looking-for-work">Looking for Work</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Second Darkness</Pair>
<Pair single="flavor" id="looking-for-work-flavor">Although out of work, you aren't particularly keen on the prospect of gambling away your last remaining coins simply for a chance at riches. That said, if the Gold Goblin's fortunes reverse after this big gambling tournament, you're relatively certain its owner, Saul Vancaskerkin, will be needing to hire on some new staff members. You've secured payment for the tournament, and intend on attending mostly to check the place out, to decide if it's a place you'd want to work at (as a bouncer, bartender, croupier, server, entertainer, spotter, or cook), and hopefully get a chance to catch Saul's eye and make an impression. You've long worked at honing your skills, and are quite accomplished and certain that you have something to offer.</Pair>
<Pair single="benefit" id="looking-for-work-benefit">Pick one of the following skills: Bluff, Craft (any), Diplomacy, Intimidate, Perform (any), Profession (gambler), or Perception. You gain a +1 trait bonus in that skill, and that skill is always considered a class skill for you.</Pair>
</Ability>
</>};
const _optimistic_gambler = {title: "Optimistic Gambler", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="optimistic-gambler" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="optimistic-gambler">Optimistic Gambler</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Second Darkness</Pair>
<Pair single="benefit" id="optimistic-gambler-benefit">You've always seemed to have trouble keeping money. Worse, you always seem to have debts looming over your head. When you heard about the "Cheat the Devil and Take His Gold" gambling tournament, you felt in your gut that your luck was about to change. You've always been optimistic, in fact, and even though right now is one of those rare times where you don't owe anyone any money (you just paid off a recent loan from local moneylender Lymas Smeed), you know that'll change soon enough. Better to start amassing money now when you're at one of those rare windfall times! You've set aside a gold coin for the entrance fee, and look forward to making it big-you can feel it in your bones! This time's gonna be the big one! Your boundless optimism, even in the face of crushing situations, has always bolstered your spirit. Effects that grant you morale bonuses persist 1d4 rounds longer than they normally would as a result.</Pair>
</Ability>
</>};
const _portentous_perception = {title: "Portentous Perception", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends</Link>, <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="portentous-perception" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="portentous-perception">Portentous Perception</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Second Darkness</Pair>
<Pair single="benefit" id="portentous-perception-benefit">You've come (or been sent) to Riddleport to observe the strange Blot that has appeared in the city's sky. You've decided to put your keen senses to the test at the Golden Goblin's upcoming gambling competition while you're here. Your sharp eyesight makes it easier for you to notice things at a distance. For you, Perception checks only start increasing in difficulty at a range of 20 feet or farther, as opposed to the normal 10. This has no effect on checks made to perceive things within 10 feet.</Pair>
</Ability>
</>};
const _researching_the_blot = {title: "Researching the Blot", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="researching-the-blot" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="researching-the-blot">Researching the Blot</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Second Darkness</Pair>
<Pair single="benefit" id="researching-the-blot-benefit">You may or may not be seeking membership into Riddleport's most prestigious magical guild, the Order of Cyphers, but you certainly have heard their call for aid in determining the nature of the strange shadow in the sky above Riddleport. You arrived in town several days ago and had some issues with security and safety at several inns before you finally settled on the Gold Goblin; you've been staying there as a guest for several days now, and the owner, Saul Vancaskerkin, seems like a nice guy. He's even given you a pass to attend the gambling tournament he's about to throw-you're not sure how into gambling you'll be, but perhaps there'll be some visitors from out of town you can talk to about the strange shadow in the sky. At the very least, you're hoping someone at the tourney will be into magic-there's not really enough folk in this town who seem all that interested in magic, you've found. Your interest in magic dates back quite far, and as a result, you've developed a knack for identifying common magical items at a glance. You can use Spellcraft to identify magic items in the same way you can use Spellcraft to identify a potion. The DC to identify a magic item is equal to 20 + the item's caster level.</Pair>
</Ability>
</>};
const _scouting_for_fiends = {title: "Scouting for Fiends", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link></p>
<Ability id="scouting-for-fiends" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="scouting-for-fiends">Scouting for Fiends</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Second Darkness</Pair>
<Pair single="benefit" id="scouting-for-fiends-benefit">You belong to an organization (most likely a religion) that has definite views on the menace posed by the lower planes. The willfulness with which the city of Korvosa (they even allow a temple of Asmodeus to operate in broad daylight!) tolerates infernal influences is, to you and your organization, the greatest symbol of what's wrong with civilization today. And now, in Riddleport, there's news that a gambling tournament is using devils and Hell as an idle decoration. It's likely that this is just an example of poor taste, but there's a chance that something sinister may be lurking beneath the goings-on at the Gold Goblin. You have been contacted by your organization (or may have decided on your own) to travel to Riddleport (if you don't already live there) and attend this tournament under the guise of a patron. Keep an eye on things there, even after the tournament is over; if you can, get a job working for the owner. Demons and devils can be subtle, and it could take weeks or even months to find proof of their involvement. Your near-obsessive hatred of all things fiendish grants you a +1 trait bonus on all attack rolls made against foes you know to be evil outsiders.</Pair>
</Ability>
</>};
const _boarded_in_cheliax = {title: "Boarded in Cheliax", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/serpents_skull_players_guide">Serpent's Skull Player's Guide</Link></p>
<Ability id="boarded-in-cheliax" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="boarded-in-cheliax">Boarded in Cheliax</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Serpent's Skull</Pair>
<Pair single="benefit" id="boarded-in-cheliax-benefit">While you aren't necessarily a native of Cheliax, you boarded the Jenivere at one of that country's port cities. As the people of Cheliax generally know the Mwangi Expanse as a near legendary land home to strange beasts and exotic treasures, your views of the region have a distinctly romantic tinge, and the desire for fame, wealth, and adventure likely motivate your travels. You begin the campaign with a detailed map of the Mwangi Expanse (this grants +2 competence bonus on all Knowledge [geography] checks made regarding this region) and 200 gp worth of mundane equipment to aid your exploration of the jungle.</Pair>
</Ability>
</>};
const _boarded_in_mediogalti = {title: "Boarded in Mediogalti", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/serpents_skull_players_guide">Serpent's Skull Player's Guide</Link></p>
<Ability id="boarded-in-mediogalti" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="boarded-in-mediogalti">Boarded in Mediogalti</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Serpent's Skull</Pair>
<Pair single="benefit" id="boarded-in-mediogalti-benefit">Your travels have brought you to the Jenivere through the dangerous port of Ilizmagorti, home to both pirates and assassins. Perhaps you're fleeing a price on your head, perhaps you've jumped ship from another vessel, or perhaps you're merely looking for a new start in a land where the dangers make themselves more obvious. Your familiarity with subtle slayings and toxins grants you a +2 trait bonus on all saves against poison. In addition, you can pick one type of poison listed below to be immune to, having undergone a long and painful process of building up an immunity to its effects: blue whinnis, giant wasp poison, medium spider venom, small centipede poison, or spider vine poison (a poison derived from a toxic plant native to the Mwangi Expanse).</Pair>
</Ability>
</>};
const _boarded_in_mwangi_expanse = {title: "Boarded in Mwangi Expanse", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/serpents_skull_players_guide">Serpent's Skull Player's Guide</Link></p>
<Ability id="boarded-in-mwangi-expanse" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="boarded-in-mwangi-expanse">Boarded in Mwangi Expanse</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Serpent's Skull</Pair>
<Pair single="flavor" id="boarded-in-mwangi-expanse-flavor">You boarded the Jenivere in the Mwangi Expanse, where you've lived or recently traveled through. You harbor no illusions regarding the deadliness of the jungles, the creatures that inhabit it, or the peoples that make their home therein.</Pair>
<Pair single="benefit" id="boarded-in-mwangi-expanse-benefit">You gain Polyglot as a bonus language and receive a +1 trait bonus on all Knowledge (nature) checks regarding the jungle.</Pair>
</Ability>
</>};
const _boarded_in_varisia = {title: "Boarded in Varisia", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/serpents_skull_players_guide">Serpent's Skull Player's Guide</Link></p>
<Ability id="boarded-in-varisia" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="boarded-in-varisia">Boarded in Varisia</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Serpent's Skull</Pair>
<Pair single="flavor" id="boarded-in-varisia-flavor">Traveling from lands far to the north, you likely have little experience with the jungle, its denizens, or its strange forces. Just as the lands of Garund are wild and exotic to you, so are you to them. This unusualness manifests in one of two ways.</Pair>
<Pair single="benefit" id="boarded-in-varisia-benefit">Choose to gain either a +2 trait bonus on all Bluff checks made against inhabitants of the jungle, or treat your spells with the mind-affecting descriptor as being +1 caster level higher when cast against creatures and natives of the jungle.</Pair>
</Ability>
</>};
const _boarded_in_the_shackles = {title: "Boarded in the Shackles", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/serpents_skull_players_guide">Serpent's Skull Player's Guide</Link></p>
<Ability id="boarded-in-the-shackles" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="boarded-in-the-shackles">Boarded in the Shackles</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Serpent's Skull</Pair>
<Pair single="flavor" id="boarded-in-the-shackles-flavor">Your last home was in the Shackles, a dangerous land of pirates and treachery, but also of fantastic opportunity. A life of weal and woe on the sea and amid the pirate controlled lands has toughened you to a variety of hardships.</Pair>
<Pair single="benefit" id="boarded-in-the-shackles-benefit">Pick one of the three categories of saving throws-you gain a +1 trait bonus on all saving throws of that type.</Pair>
</Ability>
</>};
const _colonial = {title: "Colonial", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/serpents_skull_players_guide">Serpent's Skull Player's Guide</Link></p>
<Ability id="colonial" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="colonial">Colonial</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Serpent's Skull</Pair>
<Pair single="flavor" id="colonial-flavor">You come from a long line of Sargavan colonists, stretching back to Cheliax's original expansion into the land during the Everwar. While your people's control of Sargava wanes every day, and Eleder has functioned independently from Cheliax since House Thrune brought diabolism to the political forefront, you nevertheless maintain a hardy Chelish constitution and natural sense of survival. What took you away from home is up to you, but you return to the land of your birth on the Jenivere in the hope of putting Sargava back on the map. You gain a +1 trait bonus on Knowledge (local) checks relating to Sargavan settlements and politics and a +1 trait bonus on saving throws against disease.</Pair>
<Pair single="benefit" id="colonial-benefit">Characters with this trait are Sargavan natives and might be returning via any city, but especially from the Chelish ports of Kintargo, Pezzack, or Corentyn.</Pair>
</Ability>
</>};
const _get_the_cargo_through = {title: "Get the Cargo Through", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/serpents_skull_players_guide">Serpent's Skull Player's Guide</Link></p>
<Ability id="get-the-cargo-through" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="get-the-cargo-through">Get the Cargo Through</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Serpent's Skull</Pair>
<Pair single="flavor" id="get-the-cargo-through-flavor">Sea trade is never safe, even on the highly trafficked waters of the Inner Sea, but the way to Eleder is more perilous still. The ever-present hurricane known as the Eye of Abendego blows hundreds of ships each year off course, into jagged rocks, or directly to the sea floor. Pirates operating out of the Shackles Isles wait on the other side to take cargo from ships lucky enough to traverse or bypass the storm. Your job is to ensure a precious cargo aboard the Jenivere arrives safely in Eleder-what form this cargo takes and the nature of your relationship to it are up to you and your GM. Your character's history as a merchant or mercenary has earned her a respectable living, and you begin the campaign with an additional 300 gp in starting wealth.</Pair>
<Pair single="benefit" id="get-the-cargo-through-benefit">Characters with this trait likely boarded in Magnimar, Corentyn, Ilizmagorti, Port Peril, or Bloodcove.</Pair>
</Ability>
</>};
const _jenivere_crew = {title: "Jenivere Crew", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/serpents_skull_players_guide">Serpent's Skull Player's Guide</Link></p>
<Ability id="jenivere-crew" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="jenivere-crew">Jenivere Crew</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Serpent's Skull</Pair>
<Pair single="flavor" id="jenivere-crew-flavor">This trip to Eleder is just one of many in a long career as a sailor aboard the Jenivere and other cargo vessels. Whether you joined the crew with the hope of one day captaining your own ship, as the means of paying your way to a foreign port with sweat and blood, or as a slave or indentured servant, you now call the ship home. Pick one of the following skills: Acrobatics, Climb, Knowledge (nature), Knowledge (geography), Swim, or Survival. You gain a +1 trait bonus on that skill, and that skill is always treated as a class skill for you.</Pair>
<Pair single="benefit" id="jenivere-crew-benefit">Characters with this trait have likely been on the Jenivere since it departed Magnimar.</Pair>
</Ability>
</>};
const _mwangi_scholar = {title: "Mwangi Scholar", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/serpents_skull_players_guide">Serpent's Skull Player's Guide</Link></p>
<Ability id="mwangi-scholar" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="mwangi-scholar">Mwangi Scholar</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Serpent's Skull</Pair>
<Pair single="flavor" id="mwangi-scholar-flavor">The Mwangi Expanse is one of the richest regions in all of Golarion, and also one of the most mysterious. Despite its history of countless years and its fostering of nameless empires, very little is known of the Mwangi Expanse by outsiders or even natives of the primeval, jungle-covered land. You have long studied the region and its lore, and count yourself among a small handful of genuine experts throughout the Inner Sea. The Jenivere promises to take you to the very subject of your fascination, and you eagerly await firsthand investigation of the deep jungles and cyclopean ruins of Garund's interior. You gain Polyglot as a bonus language and receive a +1 trait bonus on all Knowledge (history) checks regarding the Mwangi Expanse.</Pair>
<Pair single="benefit" id="mwangi-scholar-benefit">Characters with this trait likely boarded the Jenivere in Ilizmagorti or one of the cities of the Shackles or the Mwangi Expanse.</Pair>
</Ability>
</>};
const _stowaway = {title: "Stowaway", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/serpents_skull_players_guide">Serpent's Skull Player's Guide</Link></p>
<Ability id="stowaway" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="stowaway">Stowaway</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Serpent's Skull</Pair>
<Pair single="flavor" id="stowaway-flavor">Not all passengers on seafaring vessels are legal or even known to the captain and crew, and the Jenivere is no exception. Whether too poor to book legal passage on the ship or fearing discovery by customs officials in your home port, you or an ally stowed away on the ship in secret. This may mean that the crew doesn't know you're on board, or perhaps they do now but didn't when the ship set sail. You gain a +1 trait bonus on Stealth checks and Survival checks to find food.</Pair>
<Pair single="benefit" id="stowaway-benefit">Characters with this trait might have boarded the Jenivere at any port, but especially in the cities of the Shackles.</Pair>
</Ability>
</>};
const _alabaster_outcast = {title: "Alabaster Outcast", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends</Link>, <Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link></p>
<Ability id="alabaster-outcast" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="alabaster-outcast">Alabaster Outcast</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Shattered Star</Pair>
<Pair single="benefit" id="alabaster-outcast-benefit">You are a member of one of Magnimar's wealthiest families - or rather, you used to be. A falling-out left you disowned and disinherited. Now you hope to get away from the city and find fortune enough to shame your former kinsfolk-goals which led you to the <Link to="/rule/pathfinder_society">Pathfinder Society</Link>. Despite your exile, your name still carries considerable weight in Magnimar, and you gain a +1 trait bonus on Diplomacy and Intimidate checks made within the city. Additionally, you start play with a noble's outfit, a signet ring, and a single additional nonmagical item worth no more than 200 gp. Your last name is probably Derexhi, Kaddren, Mindurian, Niroden, Scarnetti, Valdemar, Vanderale, or Versade (but may be another of your choosing).</Pair>
</Ability>
</>};
const _ex_sczarni = {title: "Ex-Sczarni", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends</Link>, <Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link></p>
<Ability id="ex-sczarni" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="ex-sczarni">Ex-Sczarni</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Shattered Star</Pair>
<Pair single="flavor" id="ex-sczarni-flavor">Though you were raised as a member of one of Magnimar's various Sczarni gangs, you never fit in with the rest of your settled, metropolitan brethren. The <Link to="/rule/pathfinder_society">Pathfinder Society</Link> in particular recognized your wanderlust and potential as an agent, and on more than one occasion you impressed or bamboozled their agents with your street smarts and finesse. Over the years, you fell out of favor with the Sczarni, and eventually left to pursue interests outside of simple banditry, though you still remember the lessons your criminal relations taught you.</Pair>
<Pair single="benefit" id="ex-sczarni-benefit">You gain a +2 trait bonus on Bluff checks to pass hidden messages. Also, anytime you deliver a coup de grace, you deal an additional 1d6 points of damage.</Pair>
</Ability>
</>};
const _exchange_agent = {title: "Exchange Agent", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends</Link>, <Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link></p>
<Ability id="exchange-agent" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="exchange-agent">Exchange Agent</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Shattered Star</Pair>
<Pair single="flavor" id="exchange-agent-flavor">Although you're a relative newcomer to Magnimar, you're not some naive stranger. You've been sent by the <Link to="/rule/pathfinder_society">Pathfinder Society</Link> lodge in your home country to learn more about Varisia by experiencing the frontier firsthand. After arriving, you reported to the Magnimar lodge and placed your expertise at the venture-captain's disposal.</Pair>
<Pair single="benefit" id="exchange-agent-benefit">To represent your experience in distant lands, choose a country other than Varisia as your homeland and gain one of the <Link to="/misc/languages">languages</Link> spoken in that country as a bonus language. Additionally, choose one of the following skills: Handle Animal, Knowledge (geography), Linguistics, or Survival. You gain a +1 trait bonus on checks made with this skill and it is always a class skill for you.</Pair>
</Ability>
</>};
const _monument_scholar = {title: "Monument Scholar", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends</Link>, <Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link></p>
<Ability id="monument-scholar" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="monument-scholar">Monument Scholar</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Shattered Star</Pair>
<Pair single="flavor" id="monument-scholar-flavor">As a child in Magnimar, the city's ancient monuments inspired you with wonder. Your fascination with these relics has only grown in the years since, encouraging you to join the ranks of the <Link to="/rule/pathfinder_society">Pathfinder Society</Link> so you can further quench your thirst for knowledge. Though you know little about the actual lore of the monuments, you've studied these colossal works extensively, developing an in-depth knowledge of some of the city's most famous landmarks.</Pair>
<Pair single="benefit" id="monument-scholar-benefit">You gain a +1 trait bonus on Knowledge (history) checks made in Varisia due to your familiarity with its historical remnants. This bonus increases to +2 if the check relates to the city of Magnimar. Additionally, you gain a +2 trait bonus on any skill check made to receive a boon from one of Magnimar's magically imbued monuments.</Pair>
</Ability>
</>};
const _nontraditional_native = {title: "Nontraditional Native", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends</Link>, <Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link></p>
<Ability id="nontraditional-native" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="nontraditional-native">Nontraditional Native</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Shattered Star</Pair>
<Pair single="flavor" id="nontraditional-native-flavor">You are a member of the Shoanti or Varisian ethnicity who left your people to learn more about the mysteries of your strange homeland. Your travels have recently brought you to the Pathfinder lodge in Magnimar. Although none of your family members are present, you carry them and your family traditions with you.</Pair>
<Pair single="benefit" id="nontraditional-native-benefit"><p>If you are a Varisian, you gain a +1 trait bonus on <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> checks made relating to Varisia and gain a +1 trait bonus on damage rolls made during the surprise round when you're wielding a <Link to="/eq-weapon/bladed_scarf">bladed scarf</Link> or <Link to="/eq-weapon/starknife">starknife</Link>.</p>
<p>If you are a Shoanti, you gain a +1 trait bonus on <Link to="/skill/survival">Survival</Link> checks made while in Varisia and gain a +1 trait bonus on rolls to confirm critical hits made using an <Link to="/eq-weapon/earth_breaker">earth breaker</Link> or a <Link to="/eq-armor/klar">klar</Link>.</p>
</Pair>
</Ability>
</>};
const _ruin_raider = {title: "Ruin Raider", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends</Link>, <Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link></p>
<Ability id="ruin-raider" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="ruin-raider">Ruin Raider</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Shattered Star</Pair>
<Pair single="flavor" id="ruin-raider-flavor">While the mercantile industries of Magnimar appeal to your keen eye for monetary gain, you know that the boldest route to true fortune lays in hunting down rare relics and selling them to the highest bidder. Becoming a Pathfinder seemed like an obvious decision, allowing you to travel throughout Varisia in your search for wealth, so you signed up right away. You brought with you a sharp eye and keen ability to distinguish fakes from the genuine article.</Pair>
<Pair single="benefit" id="ruin-raider-benefit">You gain a +1 trait bonus on Appraise checks. Additionally, you gain a +4 bonus on Perception checks made to distinguish statue-like creatures (like caryatid columns and gargoyles) from actual sculptures.</Pair>
</Ability>
</>};
const _serpent_runner = {title: "Serpent Runner", topLink: ["Campaign Traits","main/traits_campaign"], jsx: <><p><strong>Sources</strong> <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends</Link>, <Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link></p>
<Ability id="serpent-runner" extraClasses="trait" icon={["treasure-map"]}>
<Pair single id="serpent-runner">Serpent Runner</Pair>
<Pair title="Type">Campaign</Pair>
<Pair title="Camapign" hl>Shattered Star</Pair>
<Pair single="flavor" id="serpent-runner-flavor">You've participated in the mock gladiatorial battles and athletic feats at the Serpent's Run, Magnimar's grand hippodrome, but the safe nature of those games leaves you bored. Seeking greater thrills and tests of your abilities, You've pledged your arms and skill to the local Pathfinder lodge.</Pair>
<Pair single="benefit" id="serpent-runner-benefit"><p>Choose one of the following benefits to represent the techniques you learned from your time at the Serpent's Run:</p>
<ul>
<li>Choose a specific type of armor. When wearing armor of that type, you treat its armor check penalty as if it were -1 lower.</li>
<li>When fighting with two weapons, the penalty imposed on your primary weapon is reduced by 1.</li>
<li>You gain a +2 trait bonus on Intimidate checks to demoralize opponents.</li>
</ul>
</Pair>
</Ability>
</>};
export default {acadamae_neophyte:_acadamae_neophyte,aeromantic_affinity:_aeromantic_affinity,air_touched:_air_touched,alchemical_adept:_alchemical_adept,alchemical_intuition:_alchemical_intuition,arcane_researcher:_arcane_researcher,arcane_revitalization:_arcane_revitalization,arcane_temper:_arcane_temper,ascendant_recollection:_ascendant_recollection,balancers_banishing:_balancers_banishing,beast_of_the_society:_beast_of_the_society,black_blood_heritage:_black_blood_heritage,bladed_magic:_bladed_magic,bountiful_herb_lore:_bountiful_herb_lore,charlatan:_charlatan,child_of_the_moon:_child_of_the_moon,classically_schooled:_classically_schooled,coven_casting:_coven_casting,cross_disciplined:_cross_disciplined,cross_knowledge:_cross_knowledge,dangerously_curious:_dangerously_curious,deep_guardian:_deep_guardian,demonblight_reistance:_demonblight_reistance,desperate_focus:_desperate_focus,desperate_resolve:_desperate_resolve,desperate_speed:_desperate_speed,diabolical_dabbler:_diabolical_dabbler,distance_aptitude:_distance_aptitude,domineering:_domineering,draconic_infusion:_draconic_infusion,earth_touched:_earth_touched,eldritch_auditor:_eldritch_auditor,eldritch_delver:_eldritch_delver,elemental_accident:_elemental_accident,enduring_mutagen:_enduring_mutagen,fey_protection:_fey_protection,flame_touched:_flame_touched,focused_burn:_focused_burn,focused_mind:_focused_mind,fortunate:_fortunate,gifted_adept:_gifted_adept,greater_link:_greater_link,greater_purpose:_greater_purpose,green_blooded:_green_blooded,guiding_spirit:_guiding_spirit,hedge_magician:_hedge_magician,hex_proof:_hex_proof,horrifying_mind:_horrifying_mind,house_of_green_mothers_pupil:_house_of_green_mothers_pupil,insistent_benefactor:_insistent_benefactor,internal_compass:_internal_compass,inured_to_death:_inured_to_death,keen_appraiser:_keen_appraiser,kin_bond:_kin_bond,knowledgeable_caster:_knowledgeable_caster,lamias_bane:_lamias_bane,less_effort:_less_effort,linked_surge:_linked_surge,low_blow:_low_blow,lunar_birth:_lunar_birth,magic_crafter:_magic_crafter,magical_flair:_magical_flair,magical_knack:_magical_knack,magical_lineage:_magical_lineage,magical_talent:_magical_talent,malleable_magic:_malleable_magic,mathematical_prodigy:_mathematical_prodigy,mechanical_aptitude:_mechanical_aptitude,meticulous_concoction:_meticulous_concoction,mutant_eye:_mutant_eye,outcasts_intuition:_outcasts_intuition,outer_dragon_blood:_outer_dragon_blood,outsider_ties:_outsider_ties,overwhelming_beauty:_overwhelming_beauty,partial_protege:_partial_protege,pathfinders_focus:_pathfinders_focus,perfectionists_brew:_perfectionists_brew,planar_escapee:_planar_escapee,possessed:_possessed,pragmatic_activator:_pragmatic_activator,precise_treatment:_precise_treatment,radiant_healing:_radiant_healing,reluctant_apprentice:_reluctant_apprentice,resilient_caster:_resilient_caster,rivethun_adherent:_rivethun_adherent,scholar_of_the_analects:_scholar_of_the_analects,scorned_by_magic:_scorned_by_magic,secret_scrolls:_secret_scrolls,self_taught_scholar:_self_taught_scholar,shrouded_casting:_shrouded_casting,skeptic:_skeptic,spark_of_creation:_spark_of_creation,spiritual_attachment:_spiritual_attachment,stabbing_spells:_stabbing_spells,storm_touched:_storm_touched,strength_foretold:_strength_foretold,sun_blessed:_sun_blessed,tenacious_shifting:_tenacious_shifting,theoretical_magician:_theoretical_magician,transmuter_of_korada:_transmuter_of_korada,twinned_presence:_twinned_presence,twisted_tattoo:_twisted_tattoo,unscathed:_unscathed,unseen_but_not_undone:_unseen_but_not_undone,unstable_mutagen:_unstable_mutagen,volatile_conduit:_volatile_conduit,water_touched:_water_touched,winter_witchcraft_survivor:_winter_witchcraft_survivor,chance_savior:_chance_savior,inspired_by_greatness:_inspired_by_greatness,making_good_on_promises:_making_good_on_promises,on_the_payroll:_on_the_payroll,subject_of_study:_subject_of_study,teachers_pet:_teachers_pet,child_of_infamy:_child_of_infamy,conspiracy_hunter:_conspiracy_hunter,diabolist_raised:_diabolist_raised,infernal_bastard:_infernal_bastard,shadow_child:_shadow_child,the_pathfinders_exile:_the_pathfinders_exile,westcrown_firebrand:_westcrown_firebrand,betrayed_cotct:_betrayed_cotct,dockside_avenger:_dockside_avenger,drug_addict:_drug_addict,framed:_framed,love_lost:_love_lost,missing_child:_missing_child,unhappy_childhood:_unhappy_childhood,varisian_immunity:_varisian_immunity,artifact_hunter_gs:_artifact_hunter_gs,dragonfoe:_dragonfoe,dwarf_trained:_dwarf_trained,giant_blooded:_giant_blooded,giantslayer_scion:_giantslayer_scion,orphaned_by_giants:_orphaned_by_giants,roll_with_it:_roll_with_it,student_of_giantkind:_student_of_giantkind,trunau_native:_trunau_native,vexing_defender:_vexing_defender,child_of_kintargo:_child_of_kintargo,diva_in_training:_diva_in_training,ex_asmodean:_ex_asmodean,fed_up_citizen:_fed_up_citizen,gifted_satirist:_gifted_satirist,historian_of_the_rebellion:_historian_of_the_rebellion,natural_born_leader_hr:_natural_born_leader_hr,pattern_seeker:_pattern_seeker,star_struck:_star_struck,urban_sleuth:_urban_sleuth,amoral_mercenary:_amoral_mercenary,apprentice_devilbinder:_apprentice_devilbinder,asmodean_acolyte:_asmodean_acolyte,chelish_noble:_chelish_noble,erratic_malefactor:_erratic_malefactor,ex_iomedaean:_ex_iomedaean,good_slip:_good_slip,hellknight_aspirant:_hellknight_aspirant,local_tough:_local_tough,scion_of_the_nine_circles:_scion_of_the_nine_circles,thrune_informant:_thrune_informant,thrune_loyal_agent:_thrune_loyal_agent,against_the_technic_league:_against_the_technic_league,local_ties:_local_ties,numerian_archaeologist:_numerian_archaeologist,robot_slayer:_robot_slayer,skymetal_smith:_skymetal_smith,stargazer_ig:_stargazer_ig,animal_whisperer:_animal_whisperer,blight_burned:_blight_burned,chernasardo_hopeful:_chernasardo_hopeful,foxclaw_scout:_foxclaw_scout,frontier_healer:_frontier_healer,ironfang_survivor:_ironfang_survivor,kraggodan_castaway:_kraggodan_castaway,unbreakable_survivor:_unbreakable_survivor,world_weary:_world_weary,best_customer:_best_customer,best_friend:_best_friend,caravan_guard:_caravan_guard,childhood_crush:_childhood_crush,foreign_tongued:_foreign_tongued,foster_child:_foster_child,friend_of_the_family:_friend_of_the_family,hero_worship:_hero_worship,rescued:_rescued,student_survivalist:_student_survivalist,younger_sibling:_younger_sibling,bastard_km:_bastard_km,brigand:_brigand,issian:_issian,noble_born:_noble_born,pioneer:_pioneer,rostlander:_rostlander,sword_scion:_sword_scion,earning_your_freedom:_earning_your_freedom,finding_haleen:_finding_haleen,gnoll_killer:_gnoll_killer,missionary:_missionary,reclaiming_your_roots:_reclaiming_your_roots,seeking_adventure:_seeking_adventure,blood_of_pharaohs:_blood_of_pharaohs,devotee_of_the_old_gods:_devotee_of_the_old_gods,foreign_opportunist:_foreign_opportunist,inquisitive_archaeologist:_inquisitive_archaeologist,mummy_cursed:_mummy_cursed,resurrected:_resurrected,sphinx_riddler:_sphinx_riddler,trap_finder:_trap_finder,undead_crusader:_undead_crusader,wati_native:_wati_native,adaptive_magic:_adaptive_magic,blood_of_giants:_blood_of_giants,failed_winter_witch_apprentice:_failed_winter_witch_apprentice,northern_ancestry:_northern_ancestry,restless_wayfarer:_restless_wayfarer,vigilante_witch_hunter:_vigilante_witch_hunter,warded_against_witchery:_warded_against_witchery,accidental_clone:_accidental_clone,audrahnis_ally:_audrahnis_ally,close_allies:_close_allies,intrigued_by_thassilon:_intrigued_by_thassilon,scion_of_legend:_scion_of_legend,spirit_touched:_spirit_touched,time_lost:_time_lost,eager_performer:_eager_performer,family_ties_rotrl:_family_ties_rotrl,friends_and_enemies:_friends_and_enemies,giant_slayer:_giant_slayer,goblin_watcher:_goblin_watcher,hagfish_hopeful:_hagfish_hopeful,merchant_family:_merchant_family,monster_hunter:_monster_hunter,sandpoint_faithful:_sandpoint_faithful,scholar_of_the_ancients:_scholar_of_the_ancients,student_of_faith:_student_of_faith,thrill_seeker_rotr:_thrill_seeker_rotr,athletic:_athletic,azlanti_scholar_roapg:_azlanti_scholar_roapg,eagle_knight_recruit:_eagle_knight_recruit,employee:_employee,expert_explorer:_expert_explorer,following_in_the_footsteps:_following_in_the_footsteps,healthy:_healthy,pathfinder_recruit:_pathfinder_recruit,resourceful:_resourceful,seasoned_hunter:_seasoned_hunter,set_mind:_set_mind,skillful:_skillful,daring_doomsayer:_daring_doomsayer,fixer_of_odds:_fixer_of_odds,fools_for_friends:_fools_for_friends,into_enemy_territory:_into_enemy_territory,looking_for_work:_looking_for_work,optimistic_gambler:_optimistic_gambler,portentous_perception:_portentous_perception,researching_the_blot:_researching_the_blot,scouting_for_fiends:_scouting_for_fiends,boarded_in_cheliax:_boarded_in_cheliax,boarded_in_mediogalti:_boarded_in_mediogalti,boarded_in_mwangi_expanse:_boarded_in_mwangi_expanse,boarded_in_varisia:_boarded_in_varisia,boarded_in_the_shackles:_boarded_in_the_shackles,colonial:_colonial,get_the_cargo_through:_get_the_cargo_through,jenivere_crew:_jenivere_crew,mwangi_scholar:_mwangi_scholar,stowaway:_stowaway,alabaster_outcast:_alabaster_outcast,ex_sczarni:_ex_sczarni,exchange_agent:_exchange_agent,monument_scholar:_monument_scholar,nontraditional_native:_nontraditional_native,ruin_raider:_ruin_raider,serpent_runner:_serpent_runner}