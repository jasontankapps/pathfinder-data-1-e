import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _optional_subsystems = {title: "Optional Subsystems", subtopics: ["affiliations","bargaining","contacts","downtime","factions","hero_points","honor","influence","investment","primal_magic","provision_points","relationships","reputation_and_fame","research","spell_alterations","stamina_and_combat_tricks","the_hunger"], jsx: <><p>These topics cover optional systems that add to the game.</p>
</>};
const _affiliations = {title: "Affiliations", parent_topics: ["optional_subsystems"], siblings: ["affiliations","bargaining","contacts","downtime","factions","hero_points","honor","influence","investment","primal_magic","provision_points","relationships","reputation_and_fame","research","spell_alterations","stamina_and_combat_tricks","the_hunger"], subtopics: ["aff_deserts","aff_swordmasters","aff_profiteers","aff_antislavery","aff_thieves","aff_i_tradition","aff_vangard","aff_scarred_ladies","aff_lawknights","aff_monasteries","aff_lights","aff_i_school","aff_beast_riders","aff_scholars","aff_assassins","aff_animists","aff_rebels","aff_storms"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 5</Link></p>
<p>Affiliation with a group means that a character has proven to be an ally with the group's interests at heart and is trusted to be a caretaker for that group's secrets.</p>
<p><strong className="hl">Affiliation Slots:</strong> Each PC has a number of affiliation slots equal to the character's Charisma modifier + 1 (minimum 1 slot). Each time a PC takes the <Link to="/feat/additional_affiliations">Additional Affiliations</Link> feat, his total number of affiliation slots increases by 2. Finally, a GM can award bonus affiliation slots as rewards for gameplay, but typically these slots must be spent on specific groups. (For example, after the PCs successfully undertake a dangerous mission for the <Link to="/rule/silver_ravens">Silver Ravens</Link>, the GM may reward the group with a bonus affiliation with the Silver Ravens.)</p>
<p><strong className="hl">Starting Affiliation:</strong> A player can choose her PC's first affiliation when she creates the character, so long as she justifies her choice via the character's background. For example, perhaps a PC's parents belong to the <Link to="/rule/pathfinder_society">Pathfinder Society</Link>, and her parents' reputation in that organization could vouch for her own affiliation. A PC born into an <Link to="/rule/al_zabriti">Al-Zabriti</Link> tribe may retain her birthright and history by belonging to these horse-riding folk despite having since traveled far from Qadira. Or maybe a PC was rescued from slavery at a young age by members of the <Link to="/rule/bellflower_network">Bellflower Network</Link>, and has modeled his life upon heroes from that group. This starting affiliation must be approved by the GM, who may say that certain affiliations are off-limits or some organizations must be contacted in-play before joining.</p>
<p><strong className="hl">Subsequent Affiliations:</strong> Once play begins, a PC must seek out and contact agents of an organization before attempting to join or gain affiliation with it. Upon making contact, she must convince that agent that she would make a good addition to the organization. Players should speak with their GM out of the game when they make the decision to pursue affiliation with a group, since the GM has final say as to which groups (and thus which options) are available. An affiliation should never be something players just decide they have on their own - it should be the result of gameplay and interaction with NPCs associated with the organization. Additional information on how to earn affiliation is presented in each group's section, along with a short example encounter GMs can use as inspiration for setting up the attempt to affiliate with the group.</p>
<h3 id="rule-affiliations-affiliations-for-adventuring-parties">Affiliations for Adventuring Parties</h3>
<p>At the GM's discretion, an entire adventuring party can have a group affiliation. In such a case, the assumption is that the campaign the GM has chosen to run involves the whole party being agents of a specific group. Once the GM assigns a group affiliation, all members of the party are treated as if they were affiliated with that group. This affiliation does not take up any individual PC's affiliation slots.</p>
<p>Alternatively, a party can use rules for membership in groups, such as those presented in <Link to="/rule/factions">factions</Link>, or joining a group could be a significant part of a published campaign. In such a case, a character automatically gains affiliation with a group once he successfully joins the group in question.</p>
<h3 id="rule-affiliations-afiliations-for-npcs">Afiliations for NPCs</h3>
<p>An NPC should typically have only one affiliation (if any), and the GM gets to decide what that affiliation is. Yet there is no maximum number of affiliations for NPCs - an NPC can have as many as are needed for the GM to tell the story she wishes to tell. It's generally unnecessary to list in an NPC's statistics what affiliations he has, since that should be clear from the NPC's background.</p>
<h3 id="rule-affiliations-rivals">Rivals</h3>
<p>Note that certain groups have rivals listed in their group stat blocks, representing long-standing conflicts with other groups. The <Link to="/rule/aspis_consortium">Aspis Consortium</Link> and the Pathfinder Society are perennial enemies, and the <Link to="/rule/hellknights">Hellknights</Link> and the Bellflower Network have long been at odds. There's no reason that characters of rival affiliations can't exist in the same adventuring party (although such a group will likely be more prone to party strife than others), but a single character cannot normally have an affiliation with two rival groups.</p>
<h3 id="rule-affiliations-abandoning-affiliations">Abandoning Affiliations</h3>
<p>A character can abandon an affiliation at any time, but she cannot replace the abandoned affiliation with a new affiliation until she has gained at least 1 character level (unless the GM decrees otherwise). Once a character has abandoned her affiliation with a group, only exceptional circumstances can allow her to regain her affiliation with that group. Abandoning an affiliation may have in-game repercussions, as members of the group may not take kindly to learning that a character has deserted them.</p>
<p>When a character abandons an affiliation, she cannot gain new options from that group until her affiliation with the group is restored. However, she does not lose access to options she already has, and can still gain access to affiliation options via alternative means. If a character has a prestige class or archetype associated with a group, she can continue to gain levels in that class or archetype, regardless of her current affiliation status with that group.</p>
<p>As an alternative way to gain more affiliation slots rather than abandoning one, a character could take the <Link to="/feat/additional_affiliations">Additional Affiliations</Link> feat to expand her set of affiliations without having to sacrifice existing affiliations. And of course, if a character's Charisma score (and thus her Charisma modifier) permanently increases, she can gain access to new affiliation slots as a result.</p>
<h3 id="rule-affiliations-important-notes">Important Notes</h3>
<p><strong className="hl">1:</strong> The affiliations listed here were printed in <Link to="/source/adventurers_guide">Adventurer's Guide</Link> and have been converted into generic entities, removing proper names and Pathfinder-specific lore that likely isn't considered Open Game Content.</p>
<p><strong className="hl">2:</strong> There was also a separate publication with rules for <Link to="/rule/factions">Factions</Link> that can be used with/instead of these rules.</p>
</>};
const _aff_deserts = {title: "Deep-Desert Traditionalists", parent_topics: ["optional_subsystems","affiliations"], siblings: ["aff_deserts","aff_swordmasters","aff_profiteers","aff_antislavery","aff_thieves","aff_i_tradition","aff_vangard","aff_scarred_ladies","aff_lawknights","aff_monasteries","aff_lights","aff_i_school","aff_beast_riders","aff_scholars","aff_assassins","aff_animists","aff_rebels","aff_storms"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 8</Link><br/><strong className="hl">Pathfinder Name:</strong> Al-Zabriti<br/><strong className="hl">Scope:</strong> national<br/><strong className="hl">Alignment:</strong> NG<br/><strong className="hl">Values:</strong> ecological integrity (both protection of existing desert and prevention of desertification), hospitality to travelers, isolationism, resistance to assimilation, <Link to="/faith/sarenrae">Sarenite faith</Link>, secrecy, tradition<br/><strong className="hl">Goals:</strong> breed superior horses, eliminate evil outsiders, preserve traditional lifestyle, prevent corruption of the Sarenite faith, protect business interests, shore up border with hostile neighboring nation<br/><strong className="hl">Allies:</strong> genies, mainline Sarenite church, various empyreal lords<br/><strong className="hl">Enemies:</strong> cultists of <Link to="/faith/rovagug">Rovagug</Link>, demons, devils, divs, horse thieves, qlippoth, raiders, neighboring nation<br/><strong className="hl">Rivals:</strong> none</p>
<h3 id="rule-aff_deserts-associated-concepts">Associated Concepts</h3>
<p><strong className="hl">Prestige Classes:</strong> <Link to="/pclass/asavir">Asavir</Link></p>
<p><strong className="hl">Archetypes:</strong> <Link to="/arc-cavalier/qadiran_horselord">Qadiran Horselord</Link> (Cavalier), <Link to="/arc-druid/sunrider">Sunrider</Link> (Druid)</p>
<p><strong className="hl">Equipment:</strong> This gear is generally readily available to all buyers in the nation, or in cosmopolitan cities throughout the region: <Link to="/eq-misc/caparison">caparison</Link>, <Link to="/eq-misc/mithral_horseshoes">mithral horseshoes</Link>, <Link to="/eq-misc/sunblock_kohl">sunblock kohl</Link>, <Link to="/eq-misc/black_cumin">various spices</Link></p>
<p><strong className="hl">Feats:</strong> <Link to="/feat/armored_rider">Armored Rider</Link>, <Link to="/feat/horse_whisperer">Horse Whisperer</Link>, <Link to="/feat/improved_horse_whisperer">Improved Horse Whisperer</Link>, <Link to="/feat/improved_mounted_archery">Improved Mounted Archery</Link>, <Link to="/feat/mounted_blade">Mounted Blade</Link>, <Link to="/feat/mounted_onslaught">Mounted Onslaught</Link>, <Link to="/feat/purifying_channel">Purifying Channel</Link></p>
<p><strong className="hl">Animal Companion Feats:</strong> <Link to="/feat/al_zabriti_trained_horse">Al-Zabriti-Trained Horse</Link>, <Link to="/feat/forceful_charge">Forceful Charge</Link>, <Link to="/feat/improved_forceful_charge">Improved Forceful Charge</Link></p>
<p><strong className="hl">Magic Items:</strong> The tribes of the desert create and use the following items, though they rarely share them with outsiders; they can sometimes be found in black markets in the nation, though purchasing them there might earn the enmity of the desert tribespeople: <Link to="/magic-wondrous/caparison_of_resistance">Caparison of Resistance</Link>, <Link to="/magic-wondrous/cloak_of_heavenly_fire">Cloak of Heavenly Fire</Link></p>
<p><strong className="hl">Spells:</strong> The following spells are closely guarded by the tribespeople: <Link to="/spell/blade_of_light">Blade of Light</Link>, <Link to="/spell/burning_sands">Burning Sands</Link>, <Link to="/spell/cleansing_fire">Cleansing Fire</Link>, <Link to="/spell/suns_disdain">Sun's Disdain</Link>, <Link to="/spell/mass_suns_disdain">Mass Sun's Disdain</Link>, <Link to="/spell/sunstalker">Sunstalker</Link></p>
</>};
const _aff_swordmasters = {title: "Swordmasters", parent_topics: ["optional_subsystems","affiliations"], siblings: ["aff_deserts","aff_swordmasters","aff_profiteers","aff_antislavery","aff_thieves","aff_i_tradition","aff_vangard","aff_scarred_ladies","aff_lawknights","aff_monasteries","aff_lights","aff_i_school","aff_beast_riders","aff_scholars","aff_assassins","aff_animists","aff_rebels","aff_storms"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 18</Link><br/><strong className="hl">Pathfinder Name:</strong> Aldori Swordlords<br/><strong className="hl">Scope:</strong> national<br/><strong className="hl">Alignment:</strong> N<br/><strong className="hl">Values:</strong> constant honing of martial skills, defense of swordmaster traditions, duels and honorable combat, preservation of swordmaster traditions and secrets<br/><strong className="hl">Goals:</strong> establish the swordmaster dueling style as supreme among all forms of swordplay, maintain independence from national rule, protect and defend the interests of their local area and the surrounding holdings<br/><strong className="hl">Allies:</strong> surrounding country, neighboring nations<br/><strong className="hl">Enemies:</strong> bandits and brigands, nationalists, those who would spread the secrets of the swordmasters indiscriminately and without care to the traditions of the technique<br/><strong className="hl">Rivals:</strong> none</p>
<h3 id="rule-aff_swordmasters-associated-concepts">Associated Concepts</h3>
<p><strong className="hl">Prestige Classes:</strong> <Link to="/pclass/aldori_swordlord">Aldori Swordlord</Link></p>
<p><strong className="hl">Archetypes:</strong> <Link to="/arc-fighter/aldori_defender">Aldori Defender</Link> (Fighter), <Link to="/arc-swashbuckler/rostland_bravo">Rostland Bravo</Link> (Swashbuckler)</p>
<p><strong className="hl">Equipment:</strong> <Link to="/eq-weapon/aldori_dueling_sword">Aldori Dueling Sword</Link></p>
<p><strong className="hl">Feats:</strong> <Link to="/feat/aldori_artistry">Aldori Artistry</Link>, <Link to="/feat/aldori_dueling_disciple">Aldori Dueling Disciple</Link>, <Link to="/feat/aldori_dueling_mastery">Aldori Dueling Mastery</Link>, <Link to="/feat/aldori_style">Aldori Style</Link>, <Link to="/feat/aldori_style_aegis">Aldori Style Aegis</Link>, <Link to="/feat/aldori_style_conquest">Aldori Style Conquest</Link>, <Link to="/feat/duelist_of_the_roaring_falls">Duelist of the Roaring Falls</Link>, <Link to="/feat/duelist_of_the_shrouded_lake">Duelist of the Shrouded Lake</Link>, <Link to="/feat/falling_water_gambit">Falling Water Gambit</Link>, <Link to="/feat/garens_discipline">Garen's Discipline</Link>, <Link to="/feat/redistributed_might">Redistributed Might</Link>, <Link to="/feat/serrens_masterstroke">Serren's Masterstroke</Link></p>
<p><strong className="hl">Magic Items:</strong> <Link to="/magic-weapon/rostland_edge">rostland edge</Link>, <Link to="/magic-wondrous/swordlords_cloak">swordlord's cloak</Link></p>
<p><strong className="hl">Spells:</strong> By combining martial talents and arcane understanding, enthusiasts of the swordmaster style have designed a small number of potent spells: <Link to="/spell/aldori_alacrity">Aldori Alacrity</Link>, <Link to="/spell/contest_of_skill">Contest of Skill</Link>, <Link to="/spell/deivons_parry">Deivon's Parry</Link>, <Link to="/spell/tactical_adaptation">Tactical Adaptation</Link>, <Link to="/spell/tieldlaras_feint">Tieldlara's Feint</Link></p>
</>};
const _aff_profiteers = {title: "Crimson Syndicate", parent_topics: ["optional_subsystems","affiliations"], siblings: ["aff_deserts","aff_swordmasters","aff_profiteers","aff_antislavery","aff_thieves","aff_i_tradition","aff_vangard","aff_scarred_ladies","aff_lawknights","aff_monasteries","aff_lights","aff_i_school","aff_beast_riders","aff_scholars","aff_assassins","aff_animists","aff_rebels","aff_storms"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 28</Link><br/><strong className="hl">Pathfinder Name:</strong> Aspis Consortium<br/><strong className="hl">Scope:</strong> global<br/><strong className="hl">Alignment:</strong> NE<br/><strong className="hl">Values:</strong> development of new revenue streams, elimination of competition, indirect political power, monopolies, profit<br/><strong className="hl">Goals:</strong> finance new ventures by securing exotic goods for customers, providing consultation services, and taking control of rare and profitable resources; maximize earnings; secure capital<br/><strong className="hl">Allies:</strong> aspiring tyrants; <Link to="/pclass/golden_legionnaire">Golden League</Link>; numerous municipal, national, and organizational authorities throughout the region and beyond; sundry jungle tribes<br/><strong className="hl">Enemies:</strong> competing mercantile interests, <Link to="/rule/vangard_of_liberty">Vangard of Liberty</Link>, Pirate Council, <Link to="/rule/the_ancient_school">The Ancient School</Link>, <Link to="/rule/exploration_association">Exploration Association</Link><br/><strong className="hl">Rivals:</strong> Exploration Association<br/><strong>Also See:</strong> <Link to="/rule/f_profiteers">Crimson Syndicate (faction)</Link></p>
<h3 id="rule-aff_profiteers-associated-concepts">Associated Concepts</h3>
<p><strong className="hl">Prestige Classes:</strong> <Link to="/pclass/aspis_agent">Aspis Agent</Link></p>
<p><strong className="hl">Archetypes:</strong> <Link to="/arc-occultist/curator">Curator</Link> (Occultist), <Link to="/arc-bard/ringleader_ag">Ringleader</Link> (Bard)</p>
<p><strong className="hl">Class Options:</strong> <Link to="/order/order_of_the_asp">Order of the Asp</Link> (Cavalier Order), <Link to="/arcaneschool/illusion">Deception School</Link> (Focused Arcane School)</p>
<p><strong className="hl">Feats:</strong> Syndicate agents and affiliates have access to the following feats: <Link to="/feat/aspis_partner">Aspis Partner</Link>, <Link to="/feat/sinister_reputation">Sinister Reputation</Link>, <Link to="/feat/tag_team_interrogation">Tag-Team Interrogation</Link></p>
<p><strong className="hl">Magic Items:</strong> <Link to="/magic-wondrous/aspis_badge_of_last_resort">Aspis Badge of Last Resort</Link>, <Link to="/magic-wondrous/dust_of_hex_hiding">Dust of Hex Hiding</Link>, <Link to="/magic-wondrous/ioun_spite_bracers">Ioun Spite Bracers</Link>, <Link to="/magic-ring/ironbound_ring_master">Ironbound Ring</Link></p>
<p><strong className="hl">Spells:</strong> <Link to="/spell/deceptive_redundancy">Deceptive Redundancy</Link>, <Link to="/spell/haunting_reminder">Haunting Reminder</Link>, <Link to="/spell/obscured_script">Obscured Script</Link>, <Link to="/spell/sympathetic_aura">Sympathetic Aura</Link></p>
</>};
const _aff_antislavery = {title: "Breakers of Chains", parent_topics: ["optional_subsystems","affiliations"], siblings: ["aff_deserts","aff_swordmasters","aff_profiteers","aff_antislavery","aff_thieves","aff_i_tradition","aff_vangard","aff_scarred_ladies","aff_lawknights","aff_monasteries","aff_lights","aff_i_school","aff_beast_riders","aff_scholars","aff_assassins","aff_animists","aff_rebels","aff_storms"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 38</Link><br/><strong className="hl">Pathfinder Name:</strong> Bellflower Network<br/><strong className="hl">Scope:</strong> regional<br/><strong className="hl">Alignment:</strong> CG<br/><strong className="hl">Values:</strong> abolition of slavery, equality between the races, freedom to pursue lives of comfort, reintegration of escaped slaves into a safe and welcoming society<br/><strong className="hl">Goals:</strong> abolish slavery, disband organized slavery rings, emancipate slaves (particularly halfling slaves) from servitude, establish networks of underground routes to help slaves escape, remove slavers from positions of power<br/><strong className="hl">Allies:</strong> <Link to="/faith/cayden_cailean">Caydenites</Link>, <Link to="/rule/vangard_of_liberty">Vangard of Liberty</Link>, <Link to="/rule/dwarven_animists">Dwarven Animists</Link>, <Link to="/rule/the_rebellion">The Rebellion</Link>, those who oppose slavery<br/><strong className="hl">Enemies:</strong> <Link to="/faith/asmodeus">Asmodeans</Link>, <Link to="/rule/steel_knights">Steel Knights</Link> (most orders), slavers<br/><strong className="hl">Rivals:</strong> Steel Knights (most orders)<br/><strong>Also See:</strong> <Link to="/rule/f_antislavery">Breakers of Chains (faction)</Link></p>
<h3 id="rule-aff_antislavery-associated-concepts">Associated Concepts</h3>
<p><strong className="hl">Prestige Classes:</strong> <Link to="/pclass/bellflower_tiller">Bellflower Tiller</Link></p>
<p><strong className="hl">Archetypes:</strong> <Link to="/arc-vigilante/bellflower_harvester">Bellflower Harvester</Link> (Vigilante), <Link to="/arc-rogue/bellflower_irrigator">Bellflower Irrigator</Link> (Rogue)</p>
<p><strong className="hl">Equipment:</strong> <Link to="/eq-misc/applecheek">applecheek</Link>, <Link to="/eq-misc/boniface_paint">boniface paint</Link>, <Link to="/eq-misc/cooking_powder">cooking powder</Link>, <Link to="/eq-misc/sparkle_smoke">sparkle smoke</Link>, <Link to="/eq-misc/tillers_gum">tiller's gum</Link></p>
<p><strong className="hl">Magic Items:</strong> <Link to="/magic-wondrous/liberators_key">Liberator's Key</Link>, <Link to="/magic-wondrous/subtle_slippers">Subtle Slippers</Link>, <Link to="/magic-wondrous/tillers_pendant">Tiller's Pendant</Link>, <Link to="/magic-wondrous/whispering_shell">Whispering Shell</Link></p>
</>};
const _aff_thieves = {title: "Thieves' Guild", parent_topics: ["optional_subsystems","affiliations"], siblings: ["aff_deserts","aff_swordmasters","aff_profiteers","aff_antislavery","aff_thieves","aff_i_tradition","aff_vangard","aff_scarred_ladies","aff_lawknights","aff_monasteries","aff_lights","aff_i_school","aff_beast_riders","aff_scholars","aff_assassins","aff_animists","aff_rebels","aff_storms"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 46</Link><br/><strong className="hl">Pathfinder Name:</strong> Council of Thieves<br/><strong className="hl">Scope:</strong> national<br/><strong className="hl">Alignment:</strong> CN<br/><strong className="hl">Values:</strong> absorb or eliminate rival gangs, commit crime with class, kill only when necessary<br/><strong className="hl">Goals:</strong> control government officials, dominate criminal activity across the nation and beyond, make money, research and understand their own occulted history<br/><strong className="hl">Allies:</strong> noble families, <Link to="/rule/vangard_of_liberty">Vangard of Liberty</Link> (<Link to="/pclass/twilight_talon">Twilight Talons</Link>), insurgents and rebels, <Link to="/rule/the_rebellion">The Rebellion</Link><br/><strong className="hl">Enemies:</strong> <Link to="/faith/abadar">Abadarans</Link>, city guards, <Link to="/rule/steel_knights">Steel Knights</Link> (Orders of the Pyre, Rack, and Scourge), merchants, <Link to="/faith/norgorber">Norgorberites</Link><br/><strong className="hl">Rivals:</strong> Steel Knights (particularly the Orders of the Pyre, Rack, and Scourge)</p>
<h3 id="rule-aff_thieves-associated-concepts">Associated Concepts</h3>
<p><strong className="hl">Prestige Classes:</strong> <Link to="/pclass/westcrown_devil">Westcrown Devil</Link></p>
<p><strong className="hl">Archetypes:</strong> <Link to="/arc-bard/brazen_deceiver">Brazen Deceiver</Link> (Bard), <Link to="/arc-swashbuckler/dashing_thief">Dashing Thief</Link> (Swashbuckler)</p>
<p><strong className="hl">Class Options:</strong> <Link to="/spirit/twice_damned_prince">The Twice-Damned Prince</Link> (Legendary Medium spirit); these <Link to="/ability/rogue_talents">rogue talents</Link> are designed specifically for rogues working for the council, either as full members or merely as affiliates: <Link to="/talent/aspexias_mysticism">Aspexia's Mysticism</Link>, <Link to="/talent/careful_stab">Careful Stab</Link>, <Link to="/talent/hairpin_trick">Hairpin Trick</Link>, <Link to="/talent/knockout_queen">Knockout Queen</Link>, <Link to="/talent/silencing_strike">Silencing Strike</Link>, <Link to="/talent/founders_blessing">Founders' Blessing</Link>, <Link to="/talent/shrinewalk">Shrinewalk</Link></p>
</>};
const _aff_i_tradition = {title: "Inheritors of the Ancients", parent_topics: ["optional_subsystems","affiliations"], siblings: ["aff_deserts","aff_swordmasters","aff_profiteers","aff_antislavery","aff_thieves","aff_i_tradition","aff_vangard","aff_scarred_ladies","aff_lawknights","aff_monasteries","aff_lights","aff_i_school","aff_beast_riders","aff_scholars","aff_assassins","aff_animists","aff_rebels","aff_storms"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 54</Link><br/><strong className="hl">Pathfinder Name:</strong> Cyphermages<br/><strong className="hl">Scope:</strong> national<br/><strong className="hl">Alignment:</strong> N<br/><strong className="hl">Values:</strong> ancient magical artifacts and items, information about an ancient magical empire, protection of the nation from threats rising from the empire's legacy, pursuit of knowledge<br/><strong className="hl">Goals:</strong> decipher and catalog ancient empire lore, master the mysteries of the ancient ruins, prepare the nation to defend itself against further dangers by understanding long-lost magic and developing protective measures against these ancient threats<br/><strong className="hl">Allies:</strong> followers of the empyreal lord <Link to="/faith/soralyon">Soralyon</Link>, <Link to="/faith/nethys">Nethysians</Link>, <Link to="/rule/exploration_association">Exploration Association</Link><br/><strong className="hl">Enemies:</strong> crime lords and syndicates, disciples of the old emperors, thieves and other agents trafficking black-market ancient-empire artifacts<br/><strong className="hl">Rivals:</strong> none</p>
<h3 id="rule-aff_i_tradition-associated-concepts">Associated Concepts</h3>
<p><strong className="hl">Prestige Classes:</strong> <Link to="/pclass/cyphermage">Cyphermage</Link></p>
<p><strong className="hl">Archetypes:</strong> <Link to="/arc-wizard/runesage">Runesage</Link> (Wizard), <Link to="/arc-magus/sigilus">Sigilus</Link> (Magus), <Link to="/arc-wizard/thassilonian_specialist">Thassilonian Specialists</Link> (Wizard)</p>
<p><strong className="hl">Feats:</strong> The following feats are used by many of those who ally with or join the Inheritors, but they are no longer considered secret and are available to anyone to select, regardless of affiliation; those who seek to join or become affiliated with the organization are well advised to select one or both of the following feats themselves in their lore: <Link to="/feat/cypher_magic">Cypher Magic</Link>, <Link to="/feat/cypher_script">Cypher Script</Link></p>
<p><strong className="hl">Spells:</strong> Some of the spells they've researched and invented on their own, such as <Link to="/spell/codespeak">codespeak</Link>, have gone on to become widespread in their use, but others, such as those detailed below, remain controlled by the Inheritors and are generally only available to their members and affiliates: <Link to="/spell/absorb_rune_i">Absorb Rune I-III</Link>, <Link to="/spell/hidden_knowledge">Hidden Knowledge</Link>, <Link to="/spell/rune_trace">Rune Trace</Link>, <Link to="/spell/rune_of_rule">Rune of Rule</Link>, <Link to="/spell/slave_to_sin">Slave to Sin</Link></p>
</>};
const _aff_vangard = {title: "Vangard of Liberty", parent_topics: ["optional_subsystems","affiliations"], siblings: ["aff_deserts","aff_swordmasters","aff_profiteers","aff_antislavery","aff_thieves","aff_i_tradition","aff_vangard","aff_scarred_ladies","aff_lawknights","aff_monasteries","aff_lights","aff_i_school","aff_beast_riders","aff_scholars","aff_assassins","aff_animists","aff_rebels","aff_storms"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 64</Link><br/><strong className="hl">Pathfinder Name:</strong> Eagle Knights<br/><strong className="hl">Scope:</strong> regional<br/><strong className="hl">Alignment:</strong> NG<br/><strong className="hl">Values:</strong> community, equality for all, freedom, justice, personal responsibility<br/><strong className="hl">Goals:</strong> abolish slavery in all its forms, lead the people of the region into a new era of common rule and individual liberty, maintain vigilance against all threats to the nation's freedom via any means that don't threaten the core values of the Vangard<br/><strong className="hl">Allies:</strong> <Link to="/rule/breakers_of_chains">Breakers of Chains</Link>, <Link to="/rule/thieves_guild">Thieves' Guild</Link>, <Link to="/faith/erastil">Erastilians</Link>, <Link to="/faith/iomedae">Iomedaeans</Link>, <Link to="/rule/dwarven_animists">Dwarven Animists</Link>, <Link to="/faith/shelyn">Shelynites</Link>, <Link to="/rule/the_rebellion">The Rebellion</Link>, various empyreal lord cults<br/><strong className="hl">Enemies:</strong> <Link to="/faith/asmodeus">Asmodeans</Link>, <Link to="/rule/crimson_syndicate">Crimson Syndicate</Link>, enemies of the nation, <Link to="/faith/norgorber">Norgorberites</Link>, <Link to="/rule/cult_of_the_assassin">Cult of the Assassin</Link>, slavers<br/><strong className="hl">Rivals:</strong> none<br/><strong>Also See:</strong> <Link to="/rule/f_vangard">Vangard of Liberty (faction)</Link></p>
<h3 id="rule-aff_vangard-associated-concepts">Associated Concepts</h3>
<p><strong className="hl">Prestige Classes:</strong> <Link to="/pclass/golden_legionnaire">Golden Legionnaire</Link>, <Link to="/pclass/gray_corsair">Gray Corsair</Link>, <Link to="/pclass/steel_falcon">Steel Falcon</Link>, <Link to="/pclass/twilight_talon">Twilight Talon</Link></p>
<p><strong className="hl">Archetypes:</strong> <Link to="/arc-paladin/scion_of_talmandor">Scion of Talmandor</Link> (Paladin), <Link to="/arc-rogue/toxic_talon">Toxic Talon</Link> (Rogue)</p>
<p><strong className="hl">Feats:</strong> most of the feats listed here require affiliation with one of the specific factions within the Vangard: <Link to="/feat/eagles_resolve">Eagle's Resolve</Link>, <Link to="/feat/expert_boarder">Expert Boarder</Link>, <Link to="/feat/falcons_cry">Falcon's Cry</Link>, <Link to="/feat/legionnaires_inspiration">Legionnaire's Inspiration</Link>, <Link to="/feat/twilight_tattoo">Twilight Tattoo</Link></p>
<p><strong className="hl">Magic Items:</strong> <Link to="/magic-armor/eagle_knight_dress_uniform">Eagle Knight Dress Uniform</Link>, <Link to="/magic-wondrous/golden_eagle_epaulets">Golden Eagle Epaulets</Link>, <Link to="/magic-weapon/talonstrike_sword">Talonstrike Sword</Link></p>
<p><strong className="hl">Spells:</strong> <Link to="/spell/detect_charm">Detect Charm</Link>, <Link to="/spell/summon_flight_of_eagles">Summon Flight of Eagles</Link>, <Link to="/spell/suppress_charms_and_compulsions">Suppress Charms and Compulsions</Link></p>
</>};
const _aff_scarred_ladies = {title: "The Scarred Ladies", parent_topics: ["optional_subsystems","affiliations"], siblings: ["aff_deserts","aff_swordmasters","aff_profiteers","aff_antislavery","aff_thieves","aff_i_tradition","aff_vangard","aff_scarred_ladies","aff_lawknights","aff_monasteries","aff_lights","aff_i_school","aff_beast_riders","aff_scholars","aff_assassins","aff_animists","aff_rebels","aff_storms"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 78</Link><br/><strong className="hl">Pathfinder Name:</strong> Gray Maidens (Erinyes Company and Scarlet Rose)<br/><strong className="hl">Subgroups:</strong> The Sisterhood and The Rebloomers<br/><strong className="hl">Scope:</strong> regional<br/><strong className="hl">Alignment:</strong> LE (Sisterhood) or NG (Rebloomers)<br/><strong className="hl">Values:</strong> preservation of a dead evil queen's ideals, service to her new nation (Sisterhood); the aid, rehabilitation, and protection of each other and allies (Rebloomers)<br/><strong className="hl">Goals:</strong> expand their own power, reclaim rule of old nation (Sisterhood); oppose tyranny, recover from the queen's evil (Rebloomers)<br/><strong className="hl">Allies:</strong> nobles in their new nation, followers of the Queens of the Night <Link to="/main/faiths_pantheons">pantheon</Link> (Sisterhood); <Link to="/faith/shelyn">Shelynites</Link>, <Link to="/rule/the_rebellion">The Rebellion</Link> (Rebloomers)<br/><strong className="hl">Enemies:</strong> rival Scarred Ladies, The Rebellion (Sisterhood); rival Scarred Ladies (Rebloomers)<br/><strong className="hl">Rivals:</strong> rival Scarred Ladies factions</p>
<h3 id="rule-aff_scarred_ladies-associated-concepts">Associated Concepts</h3>
<p><strong className="hl">Prestige Classes:</strong> <Link to="/pclass/sanguine_angel">Sanguine Angel</Link> (Sisterhood)</p>
<p><strong className="hl">Archetypes:</strong> <Link to="/arc-vigilante/masked_maiden">Masked Maiden</Link> (Vigilante), <Link to="/arc-cavalier/sister_in_arms">Sister-in-Arms</Link> (Cavalier)</p>
<p><strong className="hl">Equipment:</strong> <Link to="/eq-armor/gray_maiden_plate">Gray Maiden plate</Link>, <Link to="/eq-misc/scarsalve">scarsalve</Link></p>
<p><strong className="hl">Feats:</strong> <Link to="/feat/agile_maiden">Agile Maiden</Link>, <Link to="/feat/fanged_crown_massacre">Fanged Crown Massacre</Link>, <Link to="/feat/gray_maiden_initiate">Gray Maiden Initiate</Link>, <Link to="/feat/scarlet_rose_devotion">Scarlet Rose Devotion</Link>, <Link to="/feat/sisterhood_dedication">Sisterhood Dedication</Link>, <Link to="/feat/sisterhood_style">Sisterhood Style</Link>, <Link to="/feat/unbreakable">Unbreakable</Link></p>
<p><strong className="hl">Magic Items:</strong> <Link to="/magic-wondrous/banner_of_the_scarlet_rose">Banner of the Scarlet Rose</Link>, <Link to="/magic-wondrous/erinyes_company_cloak">Erinyes Company Cloak</Link>, <Link to="/magic-wondrous/helm_of_the_fanged_crown">Helm of the Fanged Crown</Link>, <Link to="/magic-armor/maidens_aegis">Maiden's Aegis</Link>, <Link to="/magic-wondrous/maidens_helm">Maiden's Helm</Link>, <Link to="/magic-armor/maidens_panoply">Maiden's Panoply</Link>, <Link to="/magic-wondrous/maidens_promise">Maiden's Promise</Link>, <Link to="/magic-weapon/rose_knights_blade">Rose Knight's Blade</Link></p>
</>};
const _aff_lawknights = {title: "Steel Knights", parent_topics: ["optional_subsystems","affiliations"], siblings: ["aff_deserts","aff_swordmasters","aff_profiteers","aff_antislavery","aff_thieves","aff_i_tradition","aff_vangard","aff_scarred_ladies","aff_lawknights","aff_monasteries","aff_lights","aff_i_school","aff_beast_riders","aff_scholars","aff_assassins","aff_animists","aff_rebels","aff_storms"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 88</Link><br/><strong className="hl">Pathfinder Name:</strong> Hellknights<br/><strong className="hl">Scope:</strong> regional<br/><strong className="hl">Alignment:</strong> varies by order<br/><strong className="hl">Values:</strong> enforcement of Steel Knights law; order-specific values (varies)<br/><strong className="hl">Goals:</strong> crush chaos and lawlessness, spread their ideals<br/><strong className="hl">Allies:</strong> <Link to="/faith/abadar">Abadarans</Link>; <Link to="/faith/asmodeus">Asmodeans</Link>; followers of other lawful faiths; lawful governments<br/><strong className="hl">Enemies:</strong> lawbreakers and rebels; varies by order<br/><strong className="hl">Rivals:</strong> varies by order<br/><strong>Also See:</strong> <Link to="/rule/f_lawknights">Steel Knights (faction)</Link></p>
<h3 id="rule-aff_lawknights-associated-concepts">Associated Concepts</h3>
<p><strong className="hl">Prestige Classes:</strong> <Link to="/pclass/hellknight">Hellknight</Link>, <Link to="/pclass/hellknight_signifer">Hellknight Signifer</Link></p>
<p><strong className="hl">Archetypes:</strong> <Link to="/arc-fighter/armiger">Armiger</Link> (Fighter), <Link to="/arc-unchained_summoner/devil_binder">Devil Binder</Link> (Unchained Summoner)</p>
<p><strong className="hl">Equipment:</strong> This equipment might be found in the possession of any Steel Knight, though some individual pieces might be used more by some orders than others: <Link to="/eq-misc/branding_iron">branding iron</Link> <Link to="/eq-armor/hellknight_barding">Hellknight barding</Link>, <Link to="/eq-armor/hellknight_half_plate">Hellknight half-plate</Link>, <Link to="/eq-armor/hellknight_leather">Hellknight leather</Link>, <Link to="/eq-armor/hellknight_plate">Hellknight plate</Link>, <Link to="/eq-misc/signifer_mask">Signifer mask</Link></p>
<p><strong className="hl">Magic Items:</strong> Steel Knights have crafted a wide range of magical items, many being baroque versions of well-known items; special and custom items are among the most valued possessions of Steel Knights and their orders: <Link to="/magic-armor/gelugon_plate">Gelugon Plate</Link>, <Link to="/magic-weapon/signifers_fist">Signifer's Fist</Link></p>
<p><strong className="hl">Spells:</strong> Many of these spells are innovations of the <Link to="/hkorder/order_of_the_gate">Order of the Gate's</Link> signifers, originating in the notes of the order's magic-users: <Link to="/spell/brand_of_conformity">Brand of Conformity</Link>, <Link to="/spell/brand_of_hobbling">Brand of Hobbling</Link>, <Link to="/spell/brand_of_tracking">Brand of Tracking</Link>, <Link to="/spell/dirge_of_the_victorious_knights">Dirge of the Victorious Knights</Link>, <Link to="/spell/infernal_challenger">Infernal Challenger</Link>, <Link to="/spell/shackle">Shackle</Link></p>
</>};
const _aff_monasteries = {title: "Elemental Monasteries", parent_topics: ["optional_subsystems","affiliations"], siblings: ["aff_deserts","aff_swordmasters","aff_profiteers","aff_antislavery","aff_thieves","aff_i_tradition","aff_vangard","aff_scarred_ladies","aff_lawknights","aff_monasteries","aff_lights","aff_i_school","aff_beast_riders","aff_scholars","aff_assassins","aff_animists","aff_rebels","aff_storms"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 100</Link><br/><strong className="hl">Pathfinder Name:</strong> Houses of Perfection<br/><strong className="hl">Scope:</strong> national<br/><strong className="hl">Alignment:</strong> LN<br/><strong className="hl">Values:</strong> the elements as expressions of nature's perfect forms, improvement through competition, pursuit of perfection (even if one does not reach it)<br/><strong className="hl">Goals:</strong> defend the nation, develop new methods of purifying and enhancing mind and body alike through study of the four elements, overcome the weaknesses of mind and flesh, train the region's finest martial artists<br/><strong className="hl">Allies:</strong> followers of numerous other national gods; genies; <Link to="/faith/irori">Irorans</Link>; <Link to="/faith/nethys">Nethysians</Link>; seekers of enlightenment and the perfection of the body and mind<br/><strong className="hl">Enemies:</strong> wizards of a neighboring magocracy, asuras, rakshasas<br/><strong className="hl">Rivals:</strong> none</p>
<h3 id="rule-aff_monasteries-associated-concepts">Associated Concepts</h3>
<p><strong className="hl">Prestige Classes:</strong> <Link to="/pclass/student_of_perfection">Student of Perfection</Link></p>
<p><strong className="hl">Archetypes:</strong> <Link to="/arc-monk/brazen_disciple">Brazen Disciple</Link> (Monk), <Link to="/arc-brawler/winding_path_renegade">Winding Path Renegade</Link> (Brawler)</p>
<p><strong className="hl">Feats:</strong> <Link to="/feat/perfect_style">Perfect Style</Link>, <Link to="/feat/unblinking_flame_feint">Unblinking Flame Feint</Link>, <Link to="/feat/unblinking_flame_fist">Unblinking Flame Fist</Link>, <Link to="/feat/unfolding_wind_rush">Unfolding Wind Rush</Link>, <Link to="/feat/unfolding_wind_strike">Unfolding Wind Strike</Link>, <Link to="/feat/untwisting_iron_skin">Untwisting Iron Skin</Link>, <Link to="/feat/untwisting_iron_strength">Untwisting Iron Strength</Link></p>
<p><strong className="hl">Magic Items:</strong> <Link to="/magic-wondrous/dhoti_of_style_mastery">Dhoti of Style Mastery</Link>, <Link to="/magic-wondrous/efreeti_horns">Efreeti Horns</Link>, <Link to="/magic-wondrous/gloves_of_unfolding_wind">Gloves of Unfolding Wind</Link>, <Link to="/magic-weapon/monastic_warden">Monastic Warden</Link>, <Link to="/magic-wondrous/mountainshapers_girdle">Mountainshaper's Girdle</Link>, <Link to="/magic-wondrous/traveling_masters_turban">Traveling Master's Turban</Link></p>
</>};
const _aff_lights = {title: "Lights in the Dark", parent_topics: ["optional_subsystems","affiliations"], siblings: ["aff_deserts","aff_swordmasters","aff_profiteers","aff_antislavery","aff_thieves","aff_i_tradition","aff_vangard","aff_scarred_ladies","aff_lawknights","aff_monasteries","aff_lights","aff_i_school","aff_beast_riders","aff_scholars","aff_assassins","aff_animists","aff_rebels","aff_storms"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 108</Link><br/><strong className="hl">Pathfinder Name:</strong> Lantern Bearers<br/><strong className="hl">Scope:</strong> regional<br/><strong className="hl">Alignment:</strong> NG<br/><strong className="hl">Values:</strong> nurture beauty and those who seek redemption, oppose conspiracies and reveal destructive secrets, remain pure-hearted, reveal and fight corruption<br/><strong className="hl">Goals:</strong> push back the darkness (be it literal or metaphorical) and light the way for allies, redeem corrupted elves (and in particular, provide drow who seek redemption a safe venue to escape their society), thwart drow and demon plots<br/><strong className="hl">Allies:</strong> followers of <Link to="/main/faiths_pantheons">elven deities and neutral good empyreal lords</Link>, local people and government, <Link to="/faith/sarenrae">Sarenites</Link>, <Link to="/faith/shelyn">Shelynites</Link><br/><strong className="hl">Enemies:</strong> cults of demon lords and <Link to="/faith/rovagug">Rovagug</Link>, demons, drow, <Link to="/faith/lamashtu">Lamashtans</Link><br/><strong className="hl">Rivals:</strong> none</p>
<h3 id="rule-aff_lights-associated-concepts">Associated Concepts</h3>
<p><strong className="hl">Prestige Classes:</strong> <Link to="/pclass/lantern_bearer">Lantern Bearer</Link></p>
<p><strong className="hl">Archetypes:</strong> <Link to="/arc-cleric/blossoming_light">Blossoming Light</Link> (Cleric), <Link to="/arc-ranger/lantern_lighter">Lantern Lighter</Link> (Ranger)</p>
<p><strong className="hl">Equipment:</strong> Agents of the Lights prefer to arm themselves with the finest elven gear available, including items rarely seen outside of elven lands, such as those listed here: <Link to="/eq-weapon/elven_leafblade">elven leafblade</Link>, <Link to="/eq-weapon/elven_thornblade">elven thornblade</Link>, <Link to="/eq-misc/lantern_honey">lantern honey</Link></p>
<p><strong className="hl">Magic Items:</strong> <Link to="/magic-weapon/banshees_howl">Banshee's Howl</Link>, <Link to="/magic-armor/elven_vengeance">Elven Vengeance</Link>, <Link to="/magic-wondrous/lantern_of_hidden_light">Lantern of Hidden Light</Link>, <Link to="/magic-ring/ring_of_retreat">Ring of Retreat</Link></p>
<p><strong className="hl">Spells:</strong> These spells were developed by the Lights to aid in the exploration of the Darklands, to deal with the drow love of poison, and to help fight against choices that could result in corruption of the soul: <Link to="/spell/brightest_light">Brightest Light</Link>, <Link to="/spell/detoxify">Detoxify</Link>, <Link to="/spell/preserve_grace">Preserve Grace</Link></p>
</>};
const _aff_i_school = {title: "The Ancient School", parent_topics: ["optional_subsystems","affiliations"], siblings: ["aff_deserts","aff_swordmasters","aff_profiteers","aff_antislavery","aff_thieves","aff_i_tradition","aff_vangard","aff_scarred_ladies","aff_lawknights","aff_monasteries","aff_lights","aff_i_school","aff_beast_riders","aff_scholars","aff_assassins","aff_animists","aff_rebels","aff_storms"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 116</Link><br/><strong className="hl">Pathfinder Name:</strong> Magaambya<br/><strong className="hl">Scope:</strong> regional<br/><strong className="hl">Alignment:</strong> NG<br/><strong className="hl">Values:</strong> civility over barbarism, history as a guide for the future, knowledge over ignorance<br/><strong className="hl">Goals:</strong> acquire, protect, and disseminate knowledge (especially concerning arcane magic, history, and the natural world); foster peace between peoples in the region and beyond; oppose evil as it gains power in the region; recover and restore ancient magical relics<br/><strong className="hl">Allies:</strong> <Link to="/faith/gozreh">Gozrens</Link>, <Link to="/faith/nethys">Nethysians</Link>, <Link to="/rule/exploration_association">Exploration Association</Link>, <Link to="/faith/pharasma">Pharasmins</Link>, <Link to="/rule/storm_seekers">Storm Seekers</Link><br/><strong className="hl">Enemies:</strong> <Link to="/rule/crimson_syndicate">Crimson Syndicate</Link>, cults of demon lords and <Link to="/faith/rovagug">Rovagug</Link>, nearby evil nations<br/><strong className="hl">Rivals:</strong> none</p>
<h3 id="rule-aff_i_school-associated-concepts">Associated Concepts</h3>
<p><strong className="hl">Prestige Classes:</strong> <Link to="/pclass/magaambyan_arcanist">Magaambyan Arcanist</Link></p>
<p><strong className="hl">Archetypes:</strong> <Link to="/arc-bloodrager/enlightened_bloodrager">Enlightened Bloodrager</Link> (Bloodrager), <Link to="/arc-druid/halcyon_druid">Halcyon Druid</Link> (Druid), <Link to="/arc-arcanist/magaambyan_initiate">Magaambyan Initiate</Link> (Arcanist), <Link to="/arc-magus/magic_warrior">Magic Warrior</Link> (Magus)</p>
<p><strong className="hl">Feats:</strong> <Link to="/feat/extra_spontaneous_spell_mastery">Extra Spontaneous Spell Mastery</Link>, <Link to="/feat/mask_focus">Mask Focus</Link>, <Link to="/feat/masked_by_fear">Masked By Fear</Link>, <Link to="/feat/masked_intent">Masked Intent</Link>, <Link to="/feat/nameless_one">Nameless One</Link>, <Link to="/feat/ritual_mask">Ritual Mask</Link>, <Link to="/feat/scholar">Scholar</Link></p>
<p><strong className="hl">Spells:</strong> Spellcasters of the Ancient School consider the following creations to be treasures of arcane knowledge: <Link to="/spell/mask_from_divination">Mask From Divination</Link>, <Link to="/spell/planar_inquiry">Planar Inquiry</Link></p>
</>};
const _aff_beast_riders = {title: "Beast-Riding Barbarian Tribes", parent_topics: ["optional_subsystems","affiliations"], siblings: ["aff_deserts","aff_swordmasters","aff_profiteers","aff_antislavery","aff_thieves","aff_i_tradition","aff_vangard","aff_scarred_ladies","aff_lawknights","aff_monasteries","aff_lights","aff_i_school","aff_beast_riders","aff_scholars","aff_assassins","aff_animists","aff_rebels","aff_storms"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 126</Link><br/><strong className="hl">Pathfinder Name:</strong> Mammoth Lords<br/><strong className="hl">Scope:</strong> regional<br/><strong className="hl">Alignment:</strong> N<br/><strong className="hl">Values:</strong> family; tribal pride, tradition, and unity; worship of ancestors and natural spirits<br/><strong className="hl">Goals:</strong> develop, grow, and protect individual tribes and followings; preserve tribal traditions and culture in the face of the constant encroachment of modern civilization<br/><strong className="hl">Allies:</strong> enthralled giants, megafauna, primeval spirits, tribes and followings native to their lands<br/><strong className="hl">Enemies:</strong> aggressive colonists, orcs, demons, giants, overcivilized foreigners who scoff at them for being primitive or behind the times<br/><strong className="hl">Rivals:</strong> none</p>
<h3 id="rule-aff_beast_riders-associated-concepts">Associated Concepts</h3>
<p><strong className="hl">Prestige Classes:</strong> <Link to="/pclass/mammoth_rider">Mammoth Rider</Link></p>
<p><strong className="hl">Archetypes:</strong> <Link to="/arc-barbarian/giant_stalker">Giant Stalker</Link> (Barbarian), <Link to="/arc-hunter/totem_bonded">Totem-Bonded</Link> (Hunter)</p>
<p><strong className="hl">Class Options:</strong> <Link to="/shamanspirit/mammoth">Mammoth spirit</Link> (Shaman spirit type)</p>
<p><strong className="hl">Feats:</strong> <Link to="/feat/cold_celerity">Cold Celerity</Link>, <Link to="/feat/rugged_northerner">Rugged Northerner</Link>, <Link to="/feat/tribal_hunter">Tribal Hunter</Link>, <Link to="/feat/tribal_scars">Tribal Scars</Link></p>
<p><strong className="hl">Magic Items:</strong> <Link to="/magic-wondrous/greathelm_of_the_mammoth_lord">Greathelm of the Mammoth Lord</Link>, <Link to="/magic-armor/mammoth_hide">Mammoth Hide</Link>, <Link to="/magic-weapon/mammoth_lance">Mammoth Lance</Link>, <Link to="/magic-wondrous/zoic_fetish">Zoic Fetish</Link></p>
<p><strong className="hl">Spells:</strong> <Link to="/spell/frost_mammoth">Frost Mammoth</Link>, <Link to="/spell/invoke_primal_power">Invoke Primal Power</Link></p>
</>};
const _aff_scholars = {title: "Exploration Association", parent_topics: ["optional_subsystems","affiliations"], siblings: ["aff_deserts","aff_swordmasters","aff_profiteers","aff_antislavery","aff_thieves","aff_i_tradition","aff_vangard","aff_scarred_ladies","aff_lawknights","aff_monasteries","aff_lights","aff_i_school","aff_beast_riders","aff_scholars","aff_assassins","aff_animists","aff_rebels","aff_storms"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 136</Link><br/><strong className="hl">Pathfinder Name:</strong> Pathfinder Society<br/><strong className="hl">Scope:</strong> global<br/><strong className="hl">Alignment:</strong> N<br/><strong className="hl">Values:</strong> camaraderie, cooperation, proper documentation of important findings, self-promotion though publication, world travel<br/><strong className="hl">Goals:</strong> understand the world's past and present wonders by exploring important sites, recovering relics, chronicling what's found, and publishing findings<br/><strong className="hl">Allies:</strong> few steadfast allies; countless minor alliances maintained by a region's venture-captains and agents; <Link to="/rule/inheritors_of_the_ancients">Inheritors of the Ancients</Link>; <Link to="/rule/the_ancient_school">The Ancient School</Link><br/><strong className="hl">Enemies:</strong> <Link to="/rule/crimson_syndicate">Crimson Syndicate</Link>, <Link to="/rule/cult_of_the_assassin">Cult of the Assassin</Link><br/><strong className="hl">Rivals:</strong> Crimson Syndicate</p>
<h3 id="rule-aff_scholars-associated-concepts">Associated Concepts</h3>
<p><strong className="hl">Prestige Classes:</strong> <Link to="/pclass/pathfinder_delver">Pathfinder Delver</Link>, <Link to="/pclass/pathfinder_savant">Pathfinder Savant</Link>, <Link to="/pclass/student_of_war">Student of War</Link></p>
<p><strong className="hl">Archetypes:</strong> <Link to="/arc-fighter/lore_warden">Lore Warden</Link> (Fighter), <Link to="/arc-shaman/name_keeper">Name-Keeper</Link> (Shaman)</p>
<p><strong className="hl">Class Options:</strong> <Link to="/ability/investigator_talents">Investigator talents</Link>: <em>Chronicler's Insight</em> and <em>Didactic Strike</em></p>
<p><strong className="hl">Equipment:</strong> <Link to="/eq-misc/nostalgia_oil">nostalgia oil</Link>, <Link to="/eq-misc/pathfinder_chronicle">Pathfinder Chronicle</Link></p>
<p><strong className="hl">Magic Items:</strong> <Link to="/magic-wondrous/bands_of_unbreakable_camaraderie">Bands of Unbreakable Camaraderie</Link>, <Link to="/magic-wondrous/first_aid_gloves">First Aid Gloves</Link>, <Link to="/magic-wondrous/wayfinder">Wayfinder</Link>, <Link to="/magic-wondrous/ebon_wayfinder">Ebon Wayfinder</Link>, <Link to="/magic-wondrous/shining_wayfinder">Shining Wayfinder</Link>, <Link to="/magic-wondrous/vanishing_wayfinder">Vanishing Wayfinder</Link>, <Link to="/magic-wondrous/wayfinder_of_hidden_strength">Wayfinder of Hidden Strength</Link></p>
</>};
const _aff_assassins = {title: "Cult of the Assassin", parent_topics: ["optional_subsystems","affiliations"], siblings: ["aff_deserts","aff_swordmasters","aff_profiteers","aff_antislavery","aff_thieves","aff_i_tradition","aff_vangard","aff_scarred_ladies","aff_lawknights","aff_monasteries","aff_lights","aff_i_school","aff_beast_riders","aff_scholars","aff_assassins","aff_animists","aff_rebels","aff_storms"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 150</Link><br/><strong className="hl">Pathfinder Name:</strong> Red Mantis<br/><strong className="hl">Scope:</strong> global<br/><strong className="hl">Alignment:</strong> LE<br/><strong className="hl">Values:</strong> deadly efficiency, discretion, loyalty, professionalism, purity of focus, respect for the rule of rightful monarchies<br/><strong className="hl">Goals:</strong> act as professional assassins - and only assassins - for any client willing to pay the price of a contract, honor the mantis god <Link to="/faith/achaekek">Achaekek</Link> through the sacred rite of assassination, never fail to fulfill an assassination contract<br/><strong className="hl">Allies:</strong> <Link to="/faith/asmodeus">Asmodeans</Link>, <Link to="/faith/besmara">Besmarans</Link>, <Link to="/faith/calistria">Calistrians</Link>, <Link to="/pclass/gray_gardener">Gray Gardeners</Link>, <Link to="/faith/nethys">Nethysians</Link>, pirates, rightful monarchs<br/><strong className="hl">Enemies:</strong> <Link to="/faith/cayden_cailean">Caydenites</Link>, <Link to="/faith/desna">Desnans</Link>, <Link to="/rule/vangard_of_liberty">Vangard of Liberty</Link>, <Link to="/faith/iomedae">Iomedaeans</Link>, most <Link to="/rule/steel_knights">Steel Knight</Link> orders, <Link to="/faith/norgorber">Norgorberites</Link>, <Link to="/rule/exploration_association">Exploration Association</Link>, <Link to="/faith/sarenrae">Sarenites</Link>, <Link to="/faith/shelyn">Shelynites</Link><br/><strong className="hl">Rivals:</strong> none</p>
<h3 id="rule-aff_assassins-associated-concepts">Associated Concepts</h3>
<p><strong className="hl">Prestige Classes:</strong> <Link to="/pclass/death_slayer">Death Slayer</Link>, <Link to="/pclass/red_mantis_assassin">Red Mantis Assassin</Link></p>
<p><strong className="hl">Archetypes:</strong> <Link to="/arc-alchemist/crimson_chymist">Crimson Chymist</Link> (Alchemist), <Link to="/arc-warpriest/mantis_zealot">Mantis Zealot</Link> (Warpriest)</p>
<p><strong className="hl">Equipment:</strong> <Link to="/eq-poison/breath_of_the_mantis_god">breath of the mantis god</Link>, <Link to="/eq-weapon/sawtooth_sabre">sawtooth sabre</Link></p>
<p><strong className="hl">Magic Items:</strong> <Link to="/magic-weapon/crimson_bluff">Crimson Bluff</Link>, <Link to="/magic-wondrous/eye_of_the_mantis">Eye of the Mantis</Link>, <Link to="/magic-artifact/mantis_blade">Mantis Blade</Link> (artifact), <Link to="/magic-wondrous/mantis_embrace">Mantis Embrace</Link>, <Link to="/magic-wondrous/mask_of_the_mantis">Mask of the Mantis</Link>, <Link to="/magic-armor/red_stalker_armor">Red Stalker Armor</Link></p>
<p><strong className="hl">Spells:</strong> Over the centuries, the assassins have developed numerous magical means to facilitate their death-dealing worship of Achaekek: <Link to="/spell/bone_flense">Bone Flense</Link>, <Link to="/spell/crimson_breath">Crimson Breath</Link>, <Link to="/spell/mark_of_blood">Mark of Blood</Link>, <Link to="/spell/mirror_mantis">Mirror Mantis</Link>, <Link to="/spell/sarzari_shadow_memory">Sarzari Shadow Memory</Link>, <Link to="/spell/sawtooth_terrain">Sawtooth Terrain</Link></p>
</>};
const _aff_animists = {title: "Dwarven Animists", parent_topics: ["optional_subsystems","affiliations"], siblings: ["aff_deserts","aff_swordmasters","aff_profiteers","aff_antislavery","aff_thieves","aff_i_tradition","aff_vangard","aff_scarred_ladies","aff_lawknights","aff_monasteries","aff_lights","aff_i_school","aff_beast_riders","aff_scholars","aff_assassins","aff_animists","aff_rebels","aff_storms"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 162</Link><br/><strong className="hl">Pathfinder Name:</strong> Rivethun<br/><strong className="hl">Scope:</strong> regional<br/><strong className="hl">Alignment:</strong> LN<br/><strong className="hl">Values:</strong> acceptance of others for who they are, open negotiation founded on mutual respect, personal introspection and growth, preservation of lore<br/><strong className="hl">Goals:</strong> explore spiritual lore; foster balance between mortal needs and spiritual concerns; supply resources, information, and encouragement for personal growth<br/><strong className="hl">Allies:</strong> <Link to="/rule/breakers_of_chains">Breakers of Chains</Link>, deities of the <Link to="/main/faiths_pantheons">dwarven pantheon</Link>, <Link to="/faith/desna">Desnans</Link>, <Link to="/rule/vangard_of_liberty">Vangard of Liberty</Link>, followers of <Link to="/faith/arshea">Arshea</Link> and other empyreal lords, <Link to="/rule/steel_knights">Steel Knights</Link> (Order of the Torrent only), <Link to="/faith/irori">Irorans</Link><br/><strong className="hl">Enemies:</strong> duergar<br/><strong className="hl">Rivals:</strong> none</p>
<h3 id="rule-aff_animists-associated-concepts">Associated Concepts</h3>
<p><strong className="hl">Prestige Classes:</strong> <Link to="/pclass/rivethun_emissary">Rivethun Emissary</Link></p>
<p><strong className="hl">Archetypes:</strong> <Link to="/arc-barbarian/geminate_invoker">Geminate Invoker</Link> (Barbarian), <Link to="/arc-spiritualist/involutionist">Involutionist</Link> (Spiritualist)</p>
<p><strong className="hl">Class Options:</strong> Psychic discipline: <Link to="/discipline/rivethun">Rivethun</Link></p>
<p><strong className="hl">Equipment:</strong> <Link to="/eq-misc/anderos_salve_and_mulibrous_tincture">Anderos salve and mulibrous tincture</Link>, <Link to="/eq-misc/phantom_ash">phantom ash</Link></p>
<p><strong className="hl">Feats:</strong> <Link to="/feat/spirit_beacon">Spirit Beacon</Link>, <Link to="/feat/spirit_rebuke">Spirit Rebuke</Link>, <Link to="/feat/spirit_sight">Spirit Sight</Link></p>
</>};
const _aff_rebels = {title: "The Rebellion", parent_topics: ["optional_subsystems","affiliations"], siblings: ["aff_deserts","aff_swordmasters","aff_profiteers","aff_antislavery","aff_thieves","aff_i_tradition","aff_vangard","aff_scarred_ladies","aff_lawknights","aff_monasteries","aff_lights","aff_i_school","aff_beast_riders","aff_scholars","aff_assassins","aff_animists","aff_rebels","aff_storms"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 170</Link><br/><strong className="hl">Pathfinder Name:</strong> Silver Ravens<br/><strong className="hl">Scope:</strong> regional<br/><strong className="hl">Alignment:</strong> CG<br/><strong className="hl">Values:</strong> artistic integrity and creativity, equality between the races, free trade, freedom of religion and speech, small government<br/><strong className="hl">Goals:</strong> defend the region from colonial oppression, support regions oppressed by despotism and tyranny by providing them with aid and training<br/><strong className="hl">Allies:</strong> <Link to="/rule/breakers_of_chains">Breakers of Chains</Link>, <Link to="/faith/cayden_cailean">Caydenites</Link>, <Link to="/rule/thieves_guild">Thieves' Guild</Link>, <Link to="/rule/vangard_of_liberty">Vangard of Liberty</Link>, <Link to="/rule/scarred_ladies">Scarred Ladies (Rebloomers)</Link>, <Link to="/faith/sarenrae">Sarenites</Link>, <Link to="/faith/shelyn">Shelynites</Link><br/><strong className="hl">Enemies:</strong> <Link to="/faith/asmodeus">Asmodeans</Link>, followers of archdevils, <Link to="/rule/scarred_ladies">Scarred Ladies (Sisterhood)</Link>, <Link to="/rule/steel_knights">Steel Knights</Link> (primarily the Order of the Rack), <Link to="/faith/norgorber">Norgorberites</Link>, slavers<br/><strong className="hl">Rivals:</strong> none</p>
<h3 id="rule-aff_rebels-associated-concepts">Associated Concepts</h3>
<p><strong className="hl">Prestige Classes:</strong> <Link to="/pclass/argent_dramaturge">Argent Dramaturge</Link></p>
<p><strong className="hl">Archetypes:</strong> <Link to="/arc-bard/argent_voice">Argent Voice</Link> (Bard), <Link to="/arc-ranger/raven_master">Raven Master</Link></p>
<p><strong className="hl">Feats:</strong> <Link to="/feat/devil_sense">Devil Sense</Link>, <Link to="/feat/diva_advance">Diva Advance</Link>, <Link to="/feat/diva_strike">Diva Strike</Link>, <Link to="/feat/diva_style">Diva Style</Link></p>
<p><strong className="hl">Magic Items:</strong> In addition to the classic <Link to="/magic-wondrous/figurine_of_wondrous_power_silver_raven">silver raven figurine of wondrous power</Link>, members of The Rebellion are known to utilize the following specialized items: <Link to="/magic-weapon/devil_catcher">Devil Catcher</Link>, <Link to="/magic-wondrous/discretion_charm">Discretion Charm</Link>, <Link to="/magic-wondrous/sterling_salt">Sterling Salt</Link></p>
<p><strong className="hl">Spells:</strong> <Link to="/spell/instant_portrait">Instant Portrait</Link>, <Link to="/spell/wall_of_silver">Wall of Silver</Link></p>
</>};
const _aff_storms = {title: "Storm Seekers", parent_topics: ["optional_subsystems","affiliations"], siblings: ["aff_deserts","aff_swordmasters","aff_profiteers","aff_antislavery","aff_thieves","aff_i_tradition","aff_vangard","aff_scarred_ladies","aff_lawknights","aff_monasteries","aff_lights","aff_i_school","aff_beast_riders","aff_scholars","aff_assassins","aff_animists","aff_rebels","aff_storms"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 178</Link><br/><strong className="hl">Pathfinder Name:</strong> Storm Kindlers<br/><strong className="hl">Scope:</strong> regional<br/><strong className="hl">Alignment:</strong> CN<br/><strong className="hl">Values:</strong> enlightenment, fearlessness, freedom, unity of consciousness, worship of <Link to="/faith/gozreh">Gozreh</Link><br/><strong className="hl">Goals:</strong> merge with the consciousness of the god Gozreh, recover and reclaim lost lore from previous generations of Storm Seekers<br/><strong className="hl">Allies:</strong> druids of the <Link to="/faith/green_faith">Green Faith</Link>, <Link to="/faith/gozreh">Gozrens</Link>, hermits, madmen, <Link to="/rule/the_ancient_school">The Ancient School</Link>, vagabonds, wanderers<br/><strong className="hl">Enemies:</strong> heretics of Gozreh, humanoid tribes (boggards, lizardfolk), pirates, scavengers/looters<br/><strong className="hl">Rivals:</strong> none</p>
<h3 id="rule-aff_storms-associated-concepts">Associated Concepts</h3>
<p><strong className="hl">Prestige Classes:</strong> <Link to="/pclass/storm_kindler">Storm Kindler</Link></p>
<p><strong className="hl">Archetypes:</strong> <Link to="/arc-medium/storm_dreamer">Storm Dreamer</Link> (Medium), <Link to="/arc-druid/tempest_druid">Tempest Druid</Link> (Druid)</p>
<p><strong className="hl">Feats:</strong> <Link to="/feat/storm_lashed">Storm-Lashed</Link></p>
<p><strong className="hl">Magic Items:</strong> Many of the magic items valued by the Seekers were first created by their predecessors; explorers of the region can sometimes find these items in creatures' lairs or ancient ruins, but the Seekers take offense when those who aren't at least affiliated with them claim such items as their own: <Link to="/magic-wondrous/amulet_of_the_storm">Amulet of the Storm</Link>, <Link to="/magic-wondrous/goz_mask">Goz Mask</Link>, <Link to="/magic-wondrous/jar_of_lightning">Jar of Lightning</Link>, <Link to="/magic-artifact/storm_kindlers_rod">Storm Kindler's Rod</Link> (minor artifact)</p>
<p><strong className="hl">Spells:</strong> <Link to="/spell/storm_sight">Storm Sight</Link></p>
</>};
const _bargaining = {title: "Bargaining", parent_topics: ["optional_subsystems"], siblings: ["affiliations","bargaining","contacts","downtime","factions","hero_points","honor","influence","investment","primal_magic","provision_points","relationships","reputation_and_fame","research","spell_alterations","stamina_and_combat_tricks","the_hunger"], subtopics: ["bargaining_rules","other_elements_of_bargaining"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 138</Link></p>
<p>An item is worth only what someone will pay for it. To an art collector, a canvas covered in daubs of random paint may be a masterpiece; a priestess might believe a weathered jawbone is a holy relic of a saint. The rules presented here offer you a way of playing through the process of selling off goods brought up from a crypt, liberated from a baron's bedchamber, or plundered from a dragon's vault. They also enable players to establish contacts with local fences, launderers, antiquarians, and obsessive collectors.</p>
<h3 id="rule-bargaining-valuation">Valuation</h3>
<p>The Appraise skill allows a character to accurately value an object. However, the fine arts of the jeweler, antiquarian, and bibliophile are complex. Valuable paintings may be concealed by grime, and books of incredible rarity may be bound in tattered leather covers. Because failure means an inaccurate estimate, the GM should attempt this skill check in secret.</p>
</>};
const _bargaining_rules = {title: "Bargaining Rules", parent_topics: ["optional_subsystems","bargaining"], siblings: ["bargaining_rules","other_elements_of_bargaining"], subtopics: ["steps_of_bargaining","examples_of_bargaining"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 138</Link></p>
<p><Link to="/rule/wealth_and_money">In general, a character can sell an item for half its listed price</Link>. This keeps players from getting bogged down in bargaining with NPCs over 10 gp on a 10,000 gp item, and maintains game balance by not allowing players to use bargaining to exceed the <Link to="/rule/placing_treasure">Wealth by Level</Link> guidelines by buying low and selling high. The "sell for half" rule allows a fair price for standard items in normal circumstances.</p>
<p>For rare or unique items, or in certain cases, the GM might allow or encourage bargaining. Keep in mind that bargaining usually involves one PC talking with an NPC while the other players wait, and watching someone else bargain is rarely interesting. Bargaining should be infrequent, and should happen only when it's important to the story.</p>
<p>By using the rules for bargaining, you give up some control over your PC's decisions and accept the risk of the deal falling through to gain the chance of getting a better price.</p>
</>};
const _steps_of_bargaining = {title: "The 5 Steps of Bargaining", parent_topics: ["optional_subsystems","bargaining","bargaining_rules"], siblings: ["steps_of_bargaining","examples_of_bargaining"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 138</Link></p>
<h3 id="rule-steps_of_bargaining-step-1-seller-sets-the-asking-price">Step 1: Seller Sets the Asking Price</h3>
<p>The seller suggests a price to the buyer. If the <strong>Asking Price</strong> is more than 150% of the item's actual value, the buyer simply refuses to bargain. The lowest amount the seller will accept is 75% of this Asking Price.</p>
<h3 id="rule-steps_of_bargaining-step-2-evaluate-item">Step 2: Evaluate Item</h3>
<p>The buyer chooses to attempt either an <Link to="/skill/appraise">Appraise</Link> check to estimate the item's value or a <Link to="/skill/sense_motive">Sense Motive</Link> check opposed by the seller's <Link to="/skill/bluff">Bluff</Link> check (with failure meaning the buyer believes the seller is being fair). If the seller's price is the same as the buyer's estimation of the item's value, no Sense Motive check is needed and the buyer believes the seller.</p>
<p>A group of items can be sold as a unit. If the buyer is dealing with a mix of items she can appraise and others she can only guess about, she uses either Appraise or Sense Motive, depending on which she has more skill ranks in.</p>
<p>The GM can allow a PC to substitute an appropriate Knowledge skill for Appraise or Sense Motive, such as <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> for selling a rare book about magic. He may also assign modifiers to skill checks to reflect expertise or ignorance about a specific type of item, good roleplaying, or insulting behavior toward an NPC buyer or seller.</p>
<h3 id="rule-steps_of_bargaining-step-3-determine-undercut">Step 3: Determine Undercut</h3>
<p>The <strong>Undercut Percentage</strong> is a portion of the item's price or value used to determine the buyer's Initial and Final Offers.</p>
<p>To determine the <em>Undercut Percentage,</em> have the buyer attempt a Bluff check opposed by the seller's Sense Motive check. The <em>Undercut Percentage</em> is 2%, plus 1% for every point by which the Bluff check exceeds the Sense Motive check (minimum 0%).</p>
<h3 id="rule-steps_of_bargaining-step-4-set-offers">Step 4: Set Offers</h3>
<p>The <strong>Initial Offer</strong> is the buyer's first counteroffer to the seller's <em>Asking Price.</em></p>
<p>The <strong>Final Offer</strong> is the largest amount the buyer is willing to pay. Though the seller and buyer negotiate back and forth, the buyer won't exceed this offer. For example, if the seller's <em>Asking Price</em> is 1,000 gp, the buyer's <em>Initial Offer</em> may be 800 gp and the <em>Final Offer</em> 900 gp. These offers are determined by how much the buyer thinks the item is worth compared to the seller's <em>Asking Price.</em></p>
<blockquote>
<p><strong>Fair (Appraise or Sense Motive):</strong> If the seller's <em>Asking Price</em> is less than or equal to the amount that the buyer thinks the item is worth, subtract the <em>Undercut Percentage</em> from the seller's price to get the <em>Final Offer,</em> and subtract 2 &times; the <em>Undercut Percentage</em> to get the <em>Initial Offer.</em></p>
</blockquote>
<blockquote>
<p><strong>Unfair (Appraise):</strong> If the result of the buyer's Appraise check leads her to believe the item is worth less than the seller's <em>Asking Price,</em> subtract the <em>Undercut Percentage</em> from the buyer's estimate of the item's value to get the <em>Final Offer,</em> and subtract 2 &times; the <em>Undercut Percentage</em> to get the <em>Initial Offer.</em></p>
</blockquote>
<blockquote>
<p><strong>Unfair (Sense Motive):</strong> If the result of the buyer's Appraise check leads her to believe the seller's <em>Asking Price</em> is too high, subtract 2 &times; the <em>Undercut Percentage</em> from the seller's <em>Asking Price</em> to get the <em>Final Offer,</em> and subtract 4 &times; the <em>Undercut Percentage</em> to get the <em>Initial Offer.</em></p>
</blockquote>
<h3 id="rule-steps_of_bargaining-step-5-bargain">Step 5: Bargain</h3>
<p>The buyer begins bargaining by countering the seller's price with her <em>Initial Offer.</em> This step repeats until the buyer and seller agree on a price or one side ends negotiations.</p>
<blockquote>
<p><strong>Counteroffer Is Less Than Final Offer:</strong> If the seller counters with a price that is less than the buyer's <em>Final Offer,</em> have the seller attempt a <Link to="/skill/diplomacy">Diplomacy</Link> check (DC 15 + the buyer's Charisma modifier). Success means the buyer accepts the seller's counteroffer and buys the item. Failure means the buyer holds at her <em>Initial Offer.</em> The seller can try again, but the Diplomacy check DC increases by 5 unless the seller lowers his price.</p>
<p><strong>Counteroffer Equals Final Offer:</strong> If the seller counters with a price that is the same as the buyer's <em>Final Offer,</em> have the seller attempt a Diplomacy check (20 + the buyer's Charisma modifier). Success means the buyer accepts the seller's counteroffer and buys the item. Failure means the buyer counteroffers at a price between the <em>Initial Offer</em> and the <em>Final Offer.</em> The seller can try again, but the Diplomacy DC increases by 5 unless the seller lowers his price.</p>
<p><strong>Counteroffer Exceeds Final Offer:</strong> If the seller counters with a price higher than the buyer's <em>Final Offer,</em> have the seller attempt a Diplomacy check (25 + the buyer's Charisma modifier). Success means the buyer counteroffers at a price between the <em>Initial Offer</em> and the <em>Final Offer.</em> Failure means the buyer holds at her <em>Initial Offer.</em> Failure by 5 or more means the buyer is insulted and lowers her offer or refuses to deal with the seller. The seller can try again, but the Diplomacy DC increases by 5 unless the seller lowers his price.</p>
</blockquote>
</>};
const _examples_of_bargaining = {title: "Examples of Bargaining", parent_topics: ["optional_subsystems","bargaining","bargaining_rules"], siblings: ["steps_of_bargaining","examples_of_bargaining"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 139</Link></p>
<p>Orshok has a jeweled idol worth 1,800 gp he mistakenly appraised at 2,000 gp. He tries to sell it to an art collector at an <em>Asking Price</em> of 2,200 gp, knowing the collector will counter with a lower price. The collector succeeds at her Appraise check and realizes the idol's actual value. The collector attempts a Bluff check against Orshok's Sense Motive check and succeeds by 1, so her <em>Undercut Percentage</em> is 3% (base 2% plus 1% for exceeding the check by 1). Because the collector thinks the idol is worth less than Orshok's price, her <em>Initial Offer</em> is 6% less than her estimate of the value (1,692 gp) and her <em>Final Offer</em> is 3% less than her estimate (1,746 gp). When she makes her <em>Initial Offer,</em> Orshok counters with a price of 2,000 gp. This is higher than the collector's <em>Final Offer,</em> so Orshok attempts a Diplomacy check whose DC equals 25 + the buyer's Charisma modifier to keep the buyer's interest. He succeeds at the check, so the buyer counteroffers 1,740 gp (between her <em>Initial</em> and <em>Final Offers</em>). Orshok doesn't think the collector will go much higher, and decides to find another buyer.</p>
<p>Later, Orshok tries to sell the idol to a spice merchant who finds it interesting but knows nothing about art. Orshok again starts with a price of 2,200 gp. The merchant's Sense Motive check beats Orshok's Bluff check, so she realizes he isn't offering a fair price. The merchant attempts a Bluff check opposed by Orshok's Sense Motive check and succeeds by 4, which makes her <em>Undercut Percentage</em> 6% (base 2% plus 4% for exceeding the check by 4). The merchant's <em>Initial Offer</em> is 12% less than Orshok's price (1,936 gp), and her <em>Final Offer</em> is 6% less than Orshok's price (2,068 gp). Orshok counters with a price of 2,000 gp. This is less than the merchant's <em>Final Offer,</em> so Orshok attempts a Diplomacy check (DC 15 + the buyer's Charisma modifier). He succeeds, so the merchant accepts Orshok's counteroffer and buys the item for 2,000 gp.</p>
</>};
const _other_elements_of_bargaining = {title: "Other Elements of Bargaining", parent_topics: ["optional_subsystems","bargaining"], siblings: ["bargaining_rules","other_elements_of_bargaining"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 139</Link></p>
<h3 id="rule-other_elements_of_bargaining-using-magic-to-bargain">Using Magic to Bargain</h3>
<p>An unscrupulous character may use magic to charm or dupe buyers into accepting inflated prices. Something as simple as <Link to="/spell/charm_person">charm person</Link> can alter the Diplomacy and Sense Motive DCs by 5 in the spellcaster's favor for an entire negotiation, and a specific <Link to="/spell/suggestion">suggestion</Link> can alter the result on a single roll by 10 in the caster's favor. If the buyer later realizes that magic influenced the negotiation, she may refuse to deal with the spellcaster and attempt to get her money back, or at least report the spellcaster to the local authorities.</p>
<h3 id="rule-other_elements_of_bargaining-collector-npcs">Collector NPCs</h3>
<p>The GM can define a few NPCs as collectors, traders, or antiquarians interested in unusual items PCs collect after their adventures. If the PCs establish an amiable relationship with these collectors over time, the GM can reduce the base Undercut Percentage to 1% or even 0%, especially if the PCs' offerings cater to the NPCs' interests. Likewise, PCs may develop bad blood with one or more buyers; such buyers' Undercut Percentage may rise to 5% or higher, or the buyers may refuse to bargain with the PCs at all.</p>
<h3 id="rule-other_elements_of_bargaining-collector-npcs-1">Collector NPCs</h3>
<p>When PCs attempt to sell multiples of a durable good, the GM may lower the offered prices by 10% or more to reflect market saturation in that location. For example, a border town patrolled by guards with crossbows can always use more +1 bolts, but has limited use for a wagonload of masterwork spiked chains, so the <em>Initial</em> and <em>Final Offers</em> for the spiked chains would be 10% lower.</p>
<h3 id="rule-other_elements_of_bargaining-trade-goods">Trade Goods</h3>
<p><Link to="/rule/wealth_and_money">Trade goods</Link> are exempt from bargaining, even in extraordinary circumstances.</p>
</>};
const _contacts = {title: "Contacts", parent_topics: ["optional_subsystems"], siblings: ["affiliations","bargaining","contacts","downtime","factions","hero_points","honor","influence","investment","primal_magic","provision_points","relationships","reputation_and_fame","research","spell_alterations","stamina_and_combat_tricks","the_hunger"], subtopics: ["trust","risk","negotiation_checks","gaining_cultivating_and_losing_contacts","types_of_contacts","contingency_services"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 148</Link></p>
<p>A contact is a unique NPC with useful skills or powerful connections. You can call upon contacts for aid to accomplish specialized tasks without getting directly involved. A low-level contact can dig up a local rumor, tell you where to find a good meal, or impart basic knowledge. However, as you earn more of a contact's trust, he might perform greater tasks with greater personal risk, such as helping you track down an adversary, bailing you out of jail, or loaning you a magic item.</p>
<p>There are many types of contacts - a contact might be a childhood friend, a former adversary with whom you share a mutual respect, a war buddy, a former colleague, or a friend of the family. They aren't limited to a specific social class or profession. A contact with few connections is capable of providing only minimal aid to you, but others might have more significant resources. A contact's ability to aid you might even shift over the course of your adventuring career. Changes to a contact's profession, rising or falling social status, and other personal events can alter his ability to provide aid.</p>
<p>Sometimes a contact needs compensation for his trouble, or at least reimbursement for costs incurred while working on your behalf. Criminal contacts in particular almost always charge for their services or demand favors in return. A contact from a temple or guild might expect you to give a donation to the temple or pay guild fees. Other times, costs arise out of necessity. A contact who needs anonymity to accomplish a task might require additional funds for bribes or to purchase covert access to a secret location. Likewise, you shouldn't expect a spellcaster contact to pay for the expensive material components when casting a spell on your behalf.</p>
<p>Two factors influence the effectiveness of a contact: the amount of trust you share with the contact and the amount of risk involved with what you ask of the contact. A contact who doesn't fully trust you won't risk his neck to help you, though he might still perform some basic risk-free tasks to see if you warrant additional trust.</p>
</>};
const _trust = {title: "Trust", parent_topics: ["optional_subsystems","contacts"], siblings: ["trust","risk","negotiation_checks","gaining_cultivating_and_losing_contacts","types_of_contacts","contingency_services"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 148</Link></p>
<p>In order for you to secure a reliable contact, you must establish and maintain the contact's trust. A new contact won't typically reveal the full extent of his abilities or covert affiliations. For example, your childhood friend might have close ties with a political organization, thieves' guild, or street gang, but may keep this information secret to protect himself and you. At some point, the friend reveals this connection and becomes a contact for you. As the contact's trust increases, he becomes more willing to perform or secure various services for you, provided those services remain within his means.</p>
<p><strong>Trust</strong> is measured on a scale of 1 to 5, with 1 being the least amount of trust and 5 representing the highest. You build trust through successful interactions between you and your contact. As these interactions accrue, the level of Trust increases (see <Link to="/rule/gaining_cultivating_and_losing_contacts">Gaining, Cultivating, and Losing Contacts</Link>). A contact can have different Trust scores for different PCs in the same adventuring party; a city guard could have a high Trust score for a paladin PC he's known for a while and a low Trust score for a wizard PC who is new to town. For some contacts, the Trust score declines if they haven't heard from you in a while, but rebuilding Trust to its earlier level is faster than starting from scratch.</p>
<p>The different trust levels are as follows.</p>
<p><strong className="hl">1. Wary:</strong> A wary contact has no more trust in you than in any stranger. Though he's willing to divulge minimal information, he'd just as readily sell your information to your enemies or turn on you in order to protect himself or his reputation. A wary contact performs only basic tasks that assume little to no personal risk.</p>
<p><strong className="hl">2. Skeptical:</strong> A skeptical contact has established some small amount of trust with you. Despite earlier positive interactions, the contact remains fairly cautious. He can be called upon to perform tasks of minimal risk, but refuses any task that might jeopardize his safety, public image, or finances. If questioned about you, the skeptical contact attempts to remain neutral when describing his relationship and won't immediately turn on you.</p>
<p><strong className="hl">3. Reliable:</strong> A reliable contact still doesn't fully trust you, but is willing to make a greater effort to help. He might perform tasks that place him at slightly greater risk, such as hiding a fugitive on his property or loaning small sums of money or nonmagical items. A reliable contact is not willing to assume greater risk solely out of trust in you, and tries to protect his own reputation as a reliable contact.</p>
<p><strong className="hl">4. Trustworthy:</strong> A trustworthy contact holds you in high regard. When you ask for assistance, he sincerely desires to aid you. He puts in extra time and effort to assure success, but still avoids undertaking tasks that would place him or his loved ones in significant danger. He will not lightly accept a task that would destroy his career, reputation, or finances.</p>
<p><strong className="hl">5. Confidant:</strong> At this level, the contact trusts you with his life. He attempts to help you even if it stretches his personal means or involves great personal risk. A confidant never turns against you unless he's shown absolute proof that you betrayed him.</p>
</>};
const _risk = {title: "Risk", parent_topics: ["optional_subsystems","contacts"], siblings: ["trust","risk","negotiation_checks","gaining_cultivating_and_losing_contacts","types_of_contacts","contingency_services"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 148</Link></p>
<p><strong>Risk</strong> represents the potential danger of various tasks. Like a Trust score, Risk is measured on a scale of 1 to 5, with 1 representing little or no risk and 5 representing serious danger. Each level of risk includes the typical drawback or punishment the contact suffers if he critically fails at a risky task (see <Link to="/rule/negotiation_checks">Negotiation Checks</Link>).</p>
<p>The different risk examples are as follows. The GM should use these examples as guidelines to determine how risky a task is.</p>
<p><strong className="hl">1. None:</strong> No-risk tasks include carrying a message to one of your allies in a neighboring town, directing you to a reputable merchant, getting your equipment repaired, providing you with minor rumors, or getting a sage to show you a history book or map. These tasks might be inconvenient, but the contact doesn't risk any sort of penalty for performing them.</p>
<p><em>Critical Failure:</em> No consequences worth considering.</p>
<p><strong className="hl">2. Minor:</strong> Minor-risk tasks include deliberately leaving a door to a private area unlocked, acquiring a semi-legal item for you, or finding a place for you to lie low. Negative consequences can include paying a small fine, provoking the ire of the local authorities, suffering a small financial loss, or enduring social embarrassment.</p>
<p><em>Critical Failure:</em> Fine or imprisonment with bail. You must spend 1/3 the value of the contact's gear (see <Link to="/rule/step_6_gear">Table 14-9: NPC Gear</Link>) to rectify this situation; otherwise, you lose the contact, and all current and future contacts have their Trust scores lowered by 1 with you.</p>
<p><strong className="hl">3. Moderate:</strong> Moderately risky tasks include lying to authorities on your behalf, making forgeries, helping you evade authorities (such as by providing horses or casting a <Link to="/spell/teleport">teleport</Link> spell), or loaning you money or equipment (worth up to 1/3 your estimated gear value according to <Link to="/rule/placing_treasure">Table 12-4: Character Wealth By Level</Link>). If the contact is caught while involved with this task, he may have to pay a fine, face short-term imprisonment, or suffer a moderate financial or social loss.</p>
<p><em>Critical Failure:</em> Fine or imprisonment with bail. You must spend 1/2 the value of the contact's gear (see <Link to="/rule/step_6_gear">Table 14-9: NPC Gear</Link>) to rectify this situation; otherwise, you lose the contact, all current and future contacts have their Trust scores lowered by 2 with you, and the DC of any of your future attempts to raise the Trust scores of contacts increases by 5.</p>
<p><strong className="hl">4. Considerable:</strong> Considerably risky tasks are explicitly illegal (such as burglary or robbery) or are morally questionable even if legal (such as fraud conducted by taking advantage of obscure loopholes in the law). If the contact is caught performing such a task, he may be imprisoned, have his property seized, or lose personal rights (such as a formal title or high-status employment). He may be punished by flogging, torture, or enslavement.</p>
<p><em>Critical Failure:</em> The contact is imprisoned without bail or his social status is reduced to that of a peasant. You must restore the contact's status, possibly by legally freeing him and vindicating him, or by rescuing him and helping him establish a new life elsewhere. Failure to do so means you lose the contact, all current contacts have their Trust scores lowered by 3 with you, and the DCs of any of your future attempts to raise the Trust scores of contacts increase by 5.</p>
<p><strong className="hl">5. Great:</strong> An act of great risk describes any task for which the failure results in death, exile, or life imprisonment, such as murder, grievous assault, or treason.</p>
<p><em>Critical Failure:</em> Within 1 week's time of the contact being caught, you must get the contact's sentence negated, overturned, or revoked, or otherwise save him from his fate. Failure to do so means all current contacts have their Trust scores lowered by 4 with you, and the DCs of any of your future attempts to raise the Trust scores of contacts increase by 5. Extraordinary measures, such as raising the contact from the dead, allow you to retain the contact (though his status and usefulness may be questionable if his reputation was also destroyed). Unless it is known that you used these extraordinary measures, the Trust penalty for other contacts remains.</p>
</>};
const _negotiation_checks = {title: "Negotiation Checks", parent_topics: ["optional_subsystems","contacts"], siblings: ["trust","risk","negotiation_checks","gaining_cultivating_and_losing_contacts","types_of_contacts","contingency_services"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 150</Link></p>
<p>To use a contact, you must first determine the contact's willingness to help you. Compare the task's Risk score to the contact's Trust score.</p>
<p>If the task's Risk score is higher than the contact's Trust score, the contact simply refuses to attempt the task. You can try to entice the contact by offering him compensation for his efforts such as gold, gems, a magic item, or a debt of service. As a general rule, you may temporarily increase the contact's Trust score by 1 point by offering an enticement worth half the value of the contact's gear (see <Link to="/rule/step_6_gear">Table 14-9: NPC Gear</Link>). You can't offer more value to increase his Trust score more than 1 point at a time.</p>
<p>If the Trust score is equal to or higher than the Risk score, you must attempt to negotiate by making an opposed Diplomacy check against the contact to determine whether he'll perform the task. The contact adds the task's Risk score to his Diplomacy check. If your check succeeds, the contact is willing and able to attempt to help you (though he may have a price for his services). Failure doesn't necessarily mean the contact doesn't want to help; the contact might be unavailable or unable to help at that time.</p>
<p>Once a contact agrees to help, the GM must determine the extent of his success. The GM attempts a skill check on behalf of the contact using the contact's most appropriate skill for the task (or an ability check if no skill is appropriate). The DC for this check is determined using the following formula:</p>
<blockquote>
<p>DC = 10 + the CR of the task + the task's Risk score + any other GM modifiers</p>
</blockquote>
<p>"Any other GM modifiers" includes any modifiers the GM feels are appropriate for the situation, such as a high level of scrutiny at a noble's party or a temporary shortage of certain black-market goods.</p>
<p>Failing this check by 5 or more results in a critical failure (see the <Link to="/rule/risk">Risk</Link> section for consequences of critical failures on tasks).</p>
<p>Most tasks require 1 day of work, with the check to determine the contact's success or failure attempted at the end of the time period. When appropriate, the contact may decrease the DC of a task by increasing the time spent completing it, representing the time spent planning and preparing, gathering resources, and waiting for the right moment to attempt the task. Subtract 1 from the DC for each day spent beyond the first, to a maximum of 4 extra days.</p>
<p>The GM might decide that a particular task is longer term and requires at least 1 week to perform (such as pulling off a large heist or protecting someone for several days). When appropriate, the contact may decrease the DC of a long-term task by proportionately increasing the amount of time spent. Subtract 1 from the DC for each additional week spent, to a maximum of 4 extra weeks. Tasks requiring more than this amount of time should be broken into smaller tasks and handled on a daily or weekly basis.</p>
<p>If the task becomes riskier while the contact is still working on completing it, you and the contact make another opposed Diplomacy check at the new Risk score (even if you aren't present to speak to the contact). This represents the contact weighing his trust in you and the risk of the task. If you succeed at this second check, the contact proceeds with the task. If you fail, the contact abandons the task.</p>
<p>Each time a contact fails at or abandons a task, he adds a cumulative +1 bonus on all subsequent Diplomacy checks made to negotiate tasks with you because of frustration, fear of being associated with you, or various other reasons. You can try to convince the contact to try again, but the contact usually must wait 1d4 days before another attempt, and trying that same task over again gives the contact a +4 bonus on his opposed Diplomacy check to negotiate.</p>
</>};
const _gaining_cultivating_and_losing_contacts = {title: "Gaining, Cultivating, and Losing Contacts", parent_topics: ["optional_subsystems","contacts"], siblings: ["trust","risk","negotiation_checks","gaining_cultivating_and_losing_contacts","types_of_contacts","contingency_services"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 151</Link></p>
<p>The GM may allow you to begin the campaign with one contact (typically with a Trust score of 2 or 3), but otherwise you gain contacts through roleplaying over the course of an entire campaign. To gain a new contact, you must first establish the NPC's trust through repeated positive interactions or a single profound one.</p>
<p>Positive interactions include things such as regular patronage of the NPC's business, providing the NPC with some form of additional compensation for his efforts, performing a deed on his behalf, or using your personal influence to help the contact gain a position of greater power or prestige. Profound interactions include saving the life of the NPC or someone the NPC loves, protecting his reputation against ruinous slander, or preventing loss of his property or finances. Once you accrue at least five positive interactions or one profound interaction with an NPC, you can treat him as a contact. This means you can ask him to help you, and you can attempt to improve his Trust score with you.</p>
<p>A relationship with a contact develops as you spend time with him. Each time you have a positive or profound interaction with the contact (but no more than once at each of your character levels), attempt a Diplomacy check to improve the contact's Trust score by 1. If the interaction is profound rather than merely positive, you gain a +5 bonus on this Diplomacy check. The DC of the check depends on the contact's Trust score with you.</p>
<ScrollContainer id="rule-gaining_cultivating_and_losing_contacts--table-0"><table>
<thead>
<tr>
<th>NPC Trust (Score)</th>
<th>Diplomacy DC*</th>
</tr>
</thead>
<tbody><tr>
<td>Wary (1)</td>
<td>20</td>
</tr>
<tr>
<td>Skeptical (2)</td>
<td>15</td>
</tr>
<tr>
<td>Reliable (3)</td>
<td>10</td>
</tr>
<tr>
<td>Trustworthy (4)</td>
<td>15</td>
</tr>
<tr>
<td>Confidant (5)</td>
<td>20</td>
</tr>
</tbody></table></ScrollContainer>
<p>* If the contact has a bonus on Diplomacy checks made to negotiate with you from failing or abandoning a task, add that bonus to this DC.</p>
<p>At the GM's discretion, if you're away from the contact for a month or longer, that contact's Trust score with you might decrease as he forgets about you. If this happens, attempt a Diplomacy check against the above DC. Success means the contact's Trust level remains the same, and failure means it decreases by 1 (minimum 1). At the GM's discretion, some contacts with special relationships to you, such as childhood friends or old mentors, might not lose Trust in this manner, or you could have to make these checks only once per year instead of once per month.</p>
<p>Ending a relationship with a contact can be easy or difficult, depending on who the contact is and what kind of relationship he has with you. How you end a relationship with a contact can impact the Trust scores of your other contacts. In some cases, avoiding a contact for long enough (so his Trust score drops to 1) is enough to end the relationship with no hard feelings. It is up to the GM to determine what you must do to lose a contact in a way that does not affect the Trust score for your other contacts, but the GM should err on the side of leniency - if you made the effort to gain many contacts, you shouldn't be punished with reduced Trust scores for all contacts just because you stop interacting with some of them.</p>
</>};
const _types_of_contacts = {title: "Types of Contacts", parent_topics: ["optional_subsystems","contacts"], siblings: ["trust","risk","negotiation_checks","gaining_cultivating_and_losing_contacts","types_of_contacts","contingency_services"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 151</Link></p>
<p>Contacts are as diverse and complicated as society itself. Simple contacts only provide you with basic information, such as which roads have fewer bandits or which wells have the cleanest water. Contacts with greater experience, power, and influence are capable of providing more advanced aid. A politician's scribe might leak information or alter an important document, and a high-ranking church official might lend you a sacred relic. Because of this diversity, associating with certain types of contacts creates greater risk for you than associating with others. A conversation with a local miller or lumberjack attracts far less attention than a conversation with the sister of a powerful guildmaster or multiple visits to the grand vizier's chambers. Likewise, asking a notorious assassin to see whether an ailing wizard friend is recovering may be construed as a threat, asking a crazed wizard contact for local rumors is more likely to reflect poorly on you than asking a popular bard, and keeping company with criminals, outcasts, or other shady characters might implicate some amount of guilt by association in the eyes of local authorities.</p>
<p>Some of the following example contacts have a minimum Risk (MR) listed after them. When making the negotiation check, use the Risk score of the task or the contact's MR, whichever is higher. For example, asking a contact to acquire a black-market item is normally a minor task (Risk score 2), but asking an assassin contact (MR 3) to acquire the same item makes the task moderately risky (Risk score 3), simply because the assassin's nature and reputation make even common tasks more chancy.</p>
<p>The DC of the skill check to complete the task uses the task's Risk, not the MR of the contact. For example, just because a master assassin is an inherently risky contact doesn't mean it's automatically harder for her to find a black-market item for you.</p>
<p>A particular contact may have a higher minimum Risk than what is listed; these are just typical examples within a general category.</p>
<blockquote>
<p><strong className="hl">Academic:</strong> An academic can provide knowledge within her areas of expertise. She typically has access to various libraries or other centers of knowledge. An academic researches a subject by drawing on public records and texts and then attempts to answer questions by making appropriate Knowledge checks.</p>
<p><strong className="hl">Artisan:</strong> A PC can count on an artisan to get an honest appraisal of an item, find goods for fair prices, locate or create a hard-to-find mundane item, find hearty livestock, or repair a broken item.</p>
<p><strong className="hl">Assassin (MR 3):</strong> An assassin will sicken, poison, or even kill someone at your behest. Most assassins charge a fee based on the nature of the target, though there are religious assassins who perform these services for religious leaders at no cost. In most lands, the penalty for hiring an assassin is the same as the penalty for committing a murder.</p>
<p><strong className="hl">Crime Boss (MR 3):</strong> This contact is the leader of some type of criminal syndicate, such as a thieves' guild, crime family, or necromantic cult. A successful crime boss usually has great wealth and knowledge of the region his organization works within. A crime boss rarely fails to complete a task given his resources, but usually demands some sort of payment for this service: typically requiring you to perform an illegal act that benefits the contact or his criminal organization.</p>
<p><strong className="hl">Fence (MR 2):</strong> A fence specializes in buying and selling hard-to-find items, magical trinkets, and stolen or illegal black-market goods (such as drugs, poisons, and other types of contraband). Though fences often keep a low profile, many folks find their services useful enough that incidental contact with a local fence won't totally besmirch one's character.</p>
<p><strong className="hl">Gossip:</strong> This contact could be a bartender, tavern owner, servant, prostitute, or stable hand who regularly encounters all sorts of individuals. Gregarious and chatty, the gossip leaks you information about various patrons or stories. Unlike a rumormonger, a gossip doesn't actively seek to distribute information for money, and his knowledge is based on what he hears directly from others. Though a gossip provides useful information, rarely is it anything unusual or covert. Things a gossip might know include the type of person a certain noble fancies, the day of the week merchant ships usually sail into port, or reports of a wild beast savaging the surrounding lands.</p>
<p><strong className="hl">Heretic (MR 2):</strong> A heretic might be the laughingstock of a temple or a dangerous cultist. The heretic could know which clergy members are the most corrupt, and might have access to dark secrets, hidden caches of money or magic, evidence of lies and conspiracies, or forbidden texts.</p>
<p><strong className="hl">Lunatic (MR 2):</strong> This contact might be a wandering doomsayer, a reclusive hermit, or an insane criminal locked into a dingy cell and desperate for human company. Lunatics often know dark and forgotten secrets, can recount seemingly insignificant events that are full of clues, or recall seeing things most would rather forget. Though a lunatic might adore you and make sincere efforts to aid you, madness taints her judgment and interpretation of both the facts and reality. Sometimes her ramblings can be helpful, though other times they can be useless or even detrimental.</p>
<p><strong className="hl">Manipulator (MR 2):</strong> A manipulator usually runs a clandestine network of agents who whisper in the ears of powerful merchants, nobles, priests, and politicians to effect change on the behalf of the manipulator's clients. Depending on his personal motives, the nature of his network, and whether your plans affect his other clients, his services could be very expensive.</p>
<p><strong className="hl">Merchant:</strong> A merchant owns or operates some sort of shop. As a contact, the merchant might impart tidbits of information about other customers and minimal town gossip. She might also give you a discount on goods or services, or extend you a line of credit.</p>
<p><strong className="hl">Observer:</strong> This category includes vagrants, beggars, street-cart vendors, fortune-tellers, drunks, and others who spend their time wandering the city streets or country roads. So commonplace is the observer within his surroundings that most people ignore him as they pass by. The observer bears witness to all that goes on around him. He can tell you the time a specific event occurred and who was around when it happened. He knows the patterns of the city guard and which gates they watch most closely, and can keep a watch out for individuals who are hiding within a crowd or who are abroad at odd hours.</p>
<p><strong className="hl">Outsider (MR 2):</strong> The outsider's roots lie beyond the immediate community, and as a result she suffers the distrust and prejudices of locals. She might be a foreigner, a member of a primitive tribe, or an indigenous person in a land conquered by imperialists. The outsider provides information about the outside world, especially the lands of her birth and places she's traveled. She knows sources for exotic weapons and other imports, such as spices and wines. Alternatively, the outsider might know and be able to teach you rare fighting techniques, secret formulas, or the esoteric spells of her people.</p>
<p><strong className="hl">Pariah (MR 2):</strong> A pariah suffers the disdain of a certain group such as a city council, local religious leaders and their congregation, or even an entire community. Though not openly persecuted or hunted, the pariah has few rights and no privileges. What pariahs can offer varies from one to another. Use another contact type for the basis of that aid, but use the pariah's minimum Risk.</p>
<p><strong className="hl">Petty Criminal (MR 2):</strong> A petty criminal dabbles in minor non-violent crimes, such as burglary, smuggling, and money laundering. He might also know about covert passages through a city and which officials accept bribes. He could be willing to introduce you to a professional criminal or crime boss.</p>
<p><strong className="hl">Politician (MR 2):</strong> This person holds an influential position within the community's current political structure. She might be a royal advisor, a tribal council member, or the scion of another politician. The contact maintains direct access to the ears and concerns of those with political power and can attempt to influence their decisions. This type of contact is highly sought after, so her actions are closely watched to prevent outsiders (like you) from bribing or otherwise manipulating her. Though she has great potential to initiate social and political changes, she remains under close scrutiny at all times. A politician who has fallen out of favor could become a gossip, outsider, manipulator, or even a pariah or traitor.</p>
<p><strong className="hl">Professional Criminal (MR 3):</strong> This contact belongs to a known criminal organization, thieves' guild, or street gang. Unlike a petty criminal, he might resort to more violent crimes such as arson, kidnapping, assault, and extortion. A professional criminal might know or work for a crime boss.</p>
<p><strong className="hl">Rumormonger:</strong> A rumormonger keeps her ear to the ground for tidbits about the social and political goings-on as well as word of interesting current events or discoveries. She makes a living buying and selling semi-sensitive and personal information, and might also provide little-known details about current events. A rumormonger usually provides more usefulness and amusement to her community than threat, and is careful enough to keep secrets that might get her killed. She occasionally repeats information that's more dangerous than she realizes, however, putting herself or others in jeopardy.</p>
<p><strong className="hl">Saboteur (MR 3):</strong> A saboteur is an expert at destroying objects and property, whether through arson, scuttling ships, weakening bridges, or setting deadly traps. A career saboteur typically works for a thieves' guild or a resistance movement against local authorities.</p>
<p><strong className="hl">Snitch (MR 2):</strong> Unlike a rumormonger, a professional snitch deals only in information that he knows to be true. He relies upon an extensive range of sources and checks the accuracy of their reports. A snitch also earns many enemies; thus he makes every effort to keep a low profile. He can be hard to contact, and his services are generally costly. He can produce personal information about nobles, clergy members, politicians, criminals, and other important people.</p>
<p><strong className="hl">Thug (MR 2):</strong> A thug uses force or threats of violence to influence others. She may be an enforcer who collects on debts for his employers or a vigilante who treats villains to her own sense of justice. Often the only difference between a thug and a city guard is that the thug performs his jobs outside of the constraints of the law. A thug isn't necessarily villainous, but others might consider her actions criminal. In addition to performing unsavory tasks, a thug can tell you details about her employer or those she torments.</p>
<p><strong className="hl">Traitor (MR 3):</strong> A traitor has been accused or convicted of turning against the government and actively aiding its enemies. This contact isn't necessarily evil; he just actively rejects the ideology or actions of the current rulers - a paladin who rejects the edicts of an unscrupulous monarch and a witch who hexes nobles are both traitors according to their local leaders. A traitor is often knowledgeable about the government and could have even once been a politician in good standing.</p>
<p><strong className="hl">Watch Guard:</strong> This contact provides information about local criminals and suspects, as well as reasonable insight into the workings of the city guard and current political goings-on and trends. She can keep an eye on things, provide an escort, allow you to speak with a prisoner, or arrange a meeting with a superior officer.</p>
</blockquote>
</>};
const _contingency_services = {title: "Contingency Services", parent_topics: ["optional_subsystems","contacts"], siblings: ["trust","risk","negotiation_checks","gaining_cultivating_and_losing_contacts","types_of_contacts","contingency_services"], jsx: <><p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions pg. 28</Link></p>
<p>Contingency services are similar to contacts, but represent paying hirelings in advance for future services that begin after a specified signal or time limit. Unlike contacts, most contingency services are arranged as a single transaction, buying one service performed in case of a specific event. The first step to arranging for such services is finding appropriate hirelings to pay for the job. With a successful DC 15 Diplomacy check, a character locates 1st-level commoners, experts, or warriors in a small town or larger settlement. At the GM's discretion, you can recruit higher-level hirelings by increasing the DC by 5 per level above 1st. Enlisting hirelings with PC classes or rare skills increases the DC by 5. The highest-level hireling you can find in a settlement is at most twice the level of spellcasting available in that settlement. The modifiers for settlement size also apply on Diplomacy checks to hire contingency services (Pathfinder RPG GameMastery Guide 205). A successful check locates 1d6 skeptical or 2d6 wary hirelings. Exceeding the DC by 5 allows you to add 1d6 hirelings or increase the Trust of your hirelings by 1.</p>
<p>Characters with <Link to="/feat/leadership">Leadership</Link> can use followers to perform contingency services. Though followers wish to help their leader, they can still decide a specific task is too dangerous or questionable for them, and refuse to undertake it. Followers have a base Trust of 4 and charge one-tenth the normal wages.</p>
<p><strong className="hl">Negotiation:</strong> When hiring contingency services, you need to outline what you want your hirelings to do, and under what circumstances you want them to do it. Examples include watching over an ally (or animal companion or mount) or business and defending it if attacked, attempting to recover your body from a dungeon and have you raised from the dead if you don't return to town in 2 weeks, paying your fines to get you out of jail if you send word you've been arrested, or sending reinforcements to a specified location if contacted by carrier pigeon.</p>
<p>Negotiation checks work as for contacts, though the Risk of contingency services comes from the danger involved in performing the task (should it prove necessary), even if the task is perfectly legal and moral. While you can arrange for illegal contingency services (such as paying an assassin to murder anyone who kills you), the risk of the task is more important than the legality. If Risk exceeds a hireling's Trust, a hireling will not automatically refuse the job, but this adds 5 to the result of her opposed Diplomacy check per category of difference. Tasks generally have a Risk of 1, adjusted as follows.</p>
<div className="lastColumnStart">
<ScrollContainer id="rule-contingency_services--table-0"><table>
<thead>
<tr>
<th>Danger Modifier</th>
<th>Condition</th>
</tr>
</thead>
<tbody><tr>
<td>+1</td>
<td>Challenging wilderness terrain (coastalwaters, hills, plains, forests)</td>
</tr>
<tr>
<td>+1</td>
<td>Hostile nonsentient inhabitants (CR equal to or less than hireling's level)</td>
</tr>
<tr>
<td>+1</td>
<td>Unfriendly sentient inhabitants (CR exceeding hireling's level)</td>
</tr>
<tr>
<td>+2</td>
<td>Harsh climate/terrain (arctic, cavern, deep water, desert, mountain, swamp)</td>
</tr>
<tr>
<td>+2</td>
<td>Hostile sentient inhabitants (CR exceeding hireling's level)</td>
</tr>
</tbody></table></ScrollContainer>
</div>
<p><strong className="hl">Cost:</strong> You must pay hirelings up front for all the work you expect them to do. Hireling wages are based on the most dangerous work they perform each day - if you arrange for a group of mercenaries to watch over your horses and defend the horses if attacked, you must pay them both for the amount of time you wish them to watch over the stable, and for engaging in a fight. Securing service requires at least one week's wages paid in advance, though you can put more into this retainer fund. Once service begins, hirelings deduct their wages from the fund automatically.</p>
<ScrollContainer id="rule-contingency_services--table-1"><table>
<thead>
<tr>
<th>Risk Level</th>
<th>Category</th>
<th>Base Cost per Hireling<sup><InnerLink showBacklink="backlink-rule-contingency_services-ref-B-1" id="rule-contingency_services-ref-B-1" data-hash-target to="rule-contingency_services-B">1</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>Harmless</td>
<td>3 sp/day</td>
</tr>
<tr>
<td>2</td>
<td>Questionable</td>
<td>6 sp/day</td>
</tr>
<tr>
<td>3</td>
<td>Hazardous</td>
<td>1 gp/day</td>
</tr>
<tr>
<td>4</td>
<td>Deadly</td>
<td>3 gp/day</td>
</tr>
<tr>
<td>5</td>
<td>Suicidal</td>
<td>3 pp/day</td>
</tr>
</tbody></table></ScrollContainer>
<p>When funds run out, hirelings may remain on duty. Attempt a new negotiation check (even if you are not physically present) each day or your hirelings abandon their task. Hirelings who remain expect double pay for unpaid days worked. Failure to pay immediately reduces the hirelings' Trust to 1.</p>
<div className="lastColumnStart">
<ScrollContainer id="rule-contingency_services--table-2"><table>
<thead>
<tr>
<th>Trust Modifier</th>
<th>Condition</th>
</tr>
</thead>
<tbody><tr>
<td>+1</td>
<td>Retainer exceeds one month's wages</td>
</tr>
<tr>
<td>-1</td>
<td>You are absent over a month</td>
</tr>
<tr>
<td>-1</td>
<td>Retainer runs out of money</td>
</tr>
</tbody></table></ScrollContainer>
</div>
<p><strong className="hl">Emergency Funds:</strong> You may entrust emergency funds to your hirelings for spellcasting, bribes, etc. If their Trust is below 4, make an opposed Diplomacy check each month with a -5 penalty per Trust level below 3. Failure results in embezzlement squandering 1d10&times;10% of your emergency funds.</p>
<p><strong className="hl">Success:</strong> Determining if hirelings can successfully carry out the contingency service you pay them for is handled with a skill or ability check, as it is with contacts (for more information see Negotiation Checks on page 151 of Ultimate Campaign). A failed check can be retried 1d6 hours later, with a -1 penalty per failed check that day. Failure by 5 or more typically results in a failure so severe the hirelings give up or are incapable of trying again. The GM is the ultimate arbiter of what skill checks are appropriate, with a few examples given below as guidance.</p>
<div className="lastColumnStart firstColumnStart">
<ScrollContainer id="rule-contingency_services--table-3"><table>
<thead>
<tr>
<th>Relevant Check</th>
<th>Task</th>
</tr>
</thead>
<tbody><tr>
<td>Bluff, Diplomacy, or Intimidate</td>
<td>Negotiate ransom for hostages or corpses</td>
</tr>
<tr>
<td>Disable Device or Strength check</td>
<td>Break into locked building</td>
</tr>
<tr>
<td>Perception</td>
<td>Guard against ambush or theft</td>
</tr>
<tr>
<td>Disguise or Stealth</td>
<td>Sneak into or out of enemy camp or lair</td>
</tr>
<tr>
<td>Survival</td>
<td>Find creature or body in wilderness, move safely through wilderness</td>
</tr>
<tr>
<td>Strength check (+BAB)</td>
<td>Fight past enemy guards to reach PCs</td>
</tr>
</tbody></table></ScrollContainer>
</div>
<section data-footnotes>
<h3 id="rule-contingency_services-label">Footnotes</h3>
<ol>
<li id="rule-contingency_services-B">
<p>Multiply cost by the level of each hireling squared. <InnerLink id="backlink-rule-contingency_services-ref-B-1" data-hash-target to="rule-contingency_services-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _factions = {title: "Factions", parent_topics: ["optional_subsystems"], siblings: ["affiliations","bargaining","contacts","downtime","factions","hero_points","honor","influence","investment","primal_magic","provision_points","relationships","reputation_and_fame","research","spell_alterations","stamina_and_combat_tricks","the_hunger"], subtopics: ["faction_basics","faction_prestige","faction_list","faction_costs"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 2</Link></p>
<p>Prepare for your PCs to step into a larger world. In the classic roleplaying tradition, the PCs are independent heroes, and though they may undertake missions for powerful patrons, their association is usually temporary, with no long-term benefits. This book is about something different.</p>
<p>The concept of factions is familiar from books and movies: mysterious organizations with hidden agendas, some secretive and others very public with their activities. Their members are contacts, associates, and informants for the heroes of the story, able to provide information, resources, or even backup or rescue in a pinch. The heroes might meet them by chance, seek them out for help, or be sought by them as their own reputations increase.</p>
<p>This book, though, is not simply a guidebook about factions, as most of these groups are already detailed in other books. Instead, it's a guide to how you and your players can create characters that are integrated with those groups and with the campaign you want to run. Each group entry talks about the mission and outlook of the group, why PCs might want to be a part of it, and what the advantages are (both social and mechanical) of membership in a group.</p>
<p>The Faction Guide is part of a style of play that presumes characters are actively plugged in to the power brokers and organizations of the world. Moreover, their connections with these organizations are rich and deep, affording characters both benefits of membership as well as the opportunity to advance. A party of adventurers may include members of several different factions, all of them working toward a common overall goal but each individual member having received special instructions from his faction regarding information or actions of particular importance to him and his faction.</p>
<p>Working factions into your home campaign requires some extra effort on your (the GM's) part, either tailoring published adventures or adding details to adventures of your own design to incorporate the idea of characters as members of secret (or not-so-secret) societies, fellowships, and orders with goals and visions beyond the next payday. You may have some decisions to make concerning which factions you want to use; you want players to find factions that interest and excite them, but some factions may not fit for the campaign because of alignment, location, mission, or focus. The reward for this extra effort is a richer campaign, one where PCs really feel themselves a part of a living, breathing campaign world.</p>
<h3 id="rule-factions-important-note">Important Note</h3>
<p>There was also a separate publication with rules for <Link to="/rule/affiliations">Affiliations</Link> that can be used with/instead of these rules.</p>
</>};
const _faction_basics = {title: "Faction Basics", parent_topics: ["optional_subsystems","factions"], siblings: ["faction_basics","faction_prestige","faction_list","faction_costs"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 3</Link></p>
<p>PCs improve their standing within their faction by succeeding in missions relating to or coming from a faction. In a given adventure, or even in between adventures, you should think about the factions the characters in the party have chosen to represent. Their factions might ask them to assassinate a crime lord, protect an innocent merchant caught in a crossfire, save a kidnapped child, hand off an important letter, foil an assassination, recover a specific stolen relic, or locate a letter of marque. Whatever the mission, a positive outcome earns the character a <strong>Prestige Award (PA).</strong></p>
<p>As a character's prestige increases, her faction rewards her excellent service with ever-increasing boons. In this section, you'll find an expanded system of rules that describes the kinds of rewards and privileges a character can access as her <strong>Total Prestige Award (TPA)</strong> increases and how she can use her Prestige Award for a variety of benefits that reflect her faction's willingness to assist her in times of need.</p>
<h3 id="rule-faction_basics-faction-secrecy">Faction Secrecy</h3>
<p>Governments and religious, political, mercantile, or cultural organizations may vary a great deal when it comes to dealing with factions and their activities. Some factions are blatantly public in their actions and their efforts to recruit others to their cause. Others are subtler in their plots and operate in the shadows; even where their presence is known, local leaders often turn a blind eye to their existence and activities as long as they don't make trouble. The more secretive factions often look down on those who act openly, but every faction must weigh the value of a public presence and reputation versus the ability to operate without interference. Factions have alliances and rivalries to be sure, but they usually avoid open conflict with their rivals in the interest of keeping the favor of local governments that allow them to operate freely in their territory.</p>
<h3 id="rule-faction_basics-choosing-a-faction">Choosing a Faction</h3>
<p>Every faction has a unique history, culture, style, and specialty. Each has its own modus operandi in the ongoing struggle for power and influence on Golarion, and each offers its members different boons. Choosing a faction can be as important as choosing a character class or race: it defines a character in the campaign and ties him to his faction's destiny. Before you allow your players to choose their factions, peruse each faction carefully and see which ones fit well with the theme of your campaign. If you don't wish to allow evil characters, for instance, you might think twice about allowing characters to become part of evil-aligned factions, and if your campaign is set in a forested alpine wilderness, it might be reasonable to disallow factions from a desert land as they have little interest or influence there. It's not about restricting your players; it's about creating a rational and logical campaign setting where options fit together and where players won't be frustrated by making a choice that won't have much to do with the campaign. That said, if a player has a great character concept that he's excited about for a faction that you don't think would work, give the player a chance to pitch the idea. Explain the reasons why his faction choice might be hard to play in the campaign, but if he really wants to try it, let him give it a go.</p>
<p>Bear in mind that a PC need not be from a particular country to become a member of a faction, even if that faction itself is closely associated with that country. Likewise, characters of any class can join a faction. PCs are not necessarily bound to work with a single faction. Although it is simplest to stay with one faction for a character's career, there is no reason a PC can't gain prestige within more than one group (though trying to work with two rival groups is unlikely to turn out well). Lastly, characters should not be required to join a faction. Those uninterested in the idea can ignore it, but those who find it appealing have an additional option for customizing their characters and how they fit into the world.</p>
</>};
const _faction_prestige = {title: "Faction Prestige Awards", parent_topics: ["optional_subsystems","factions"], siblings: ["faction_basics","faction_prestige","faction_list","faction_costs"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 3</Link></p>
<p>A character's <strong className="hl">Prestige Award (PA)</strong> is an abstract way to track his growing renown and reputation within a faction.</p>
<h3 id="rule-faction_prestige-total-and-current-prestige-award">Total and Current Prestige Award</h3>
<p>Just as a character has a maximum hit point value when fully healed and a current hit point value when injured, that character has a <strong className="hl">Total Prestige Award (TPA)</strong> and a <strong className="hl">Current Prestige Award (CPA).</strong> TPA represents the character's overall reputation within a faction. CPA represents how much influence the character currently has within that faction in terms of favors owed to him and his ability to influence others and make use of the faction's resources.</p>
<p>Characters may spend CPA to acquire goods or services (see Spending Prestige Award), which means that a character's CPA is usually less than his TPA, just as an adventuring character's current hit points are usually less than his total hit points. CPA can never be higher than TPA.</p>
<h3 id="rule-faction_prestige-earning-prestige">Earning Prestige</h3>
<p>Characters earn prestige for performing missions for a faction or otherwise advancing the faction's goals. For example, a character allied with the Eagle Knights gains prestige with that faction for breaking up a slaving ring, while a Razmiri cultist gains prestige for converting unbelievers to the faith and sending tithes back to Razmiran. At your discretion, a character may earn prestige for an adventure even if it's not part of an "official" mission for a faction; a 7th-level paladin who's freed many slaves probably has earned prestige with the Eagle Knights even if she's never taken orders from a member of that faction.</p>
<p>When a character's Prestige Award increases, her TPA and CPA increase by the same value. For example, Jothalia has 5 TPA and 2 CPA with the Eagle Knight faction; if she completes a mission for them and her PA increases by 2, she now has 7 TPA and 4 CPA.</p>
<p>Not every adventure or encounter needs to relate to a faction mission, nor does every faction have an interest in every possible adventure, but as a general rule you should strive to provide equal opportunity for PCs of all factions to earn prestige. If you cannot find a place within a given adventure for the interests of a particular PC's faction, make a point of integrating opportunities later on for that PC to achieve some faction goals.</p>
<p>The ability to earn prestige should be routine, but it need not be automatic. If a PC fails at her appointed tasks or passes up opportunities to further her factions' goals, she does not earn prestige simply because her player showed up to play. By choosing to play using a faction, a player is agreeing to "play along" with faction goals in order to obtain faction rewards. If the PC does not fulfill her obligations as a member of the faction, she should not expect to rise in the faction's esteem.</p>
<p>The rate at which characters' prestige increases varies depending on the whether you use Fast, Medium, or Slow <Link to="/rule/character_advancement">advancement</Link>, but on average, characters should be able to increase their PA by 3 to 5 points per experience level, whether acquired by completing several small missions or tasks or one more difficult or significant task. Over the course of a long campaign like a Pathfinder Adventure Path, characters might expect to increase their PA by 40 or more points, especially if the campaign is tightly linked to the factions players choose.</p>
<p>If you want to expand how you use prestige in a game, you could also use the characters' PA to replace or supplement standard treasure awards. In a campaign where looting the dead or robbing tombs is frowned upon, you could use PA to help fill the gap in character resources that would normally be satisfied by pillage and plunder.</p>
<h3 id="rule-faction_prestige-losing-prestige">Losing Prestige</h3>
<p>Prestige should be seen as an enticement rather than an instrument to punish PCs, but a character can lose prestige for betraying faction secrets to outsiders, causing the death of a faction member, stealing from or lying to their faction brethren, befriending or allying with members of opposed factions, and so on. A typical penalty would be the loss of 1-3 CPA. In extreme situations, however, a character might incur such a negative reputation within his faction that his CPA and TPA decrease by 5 or even 10 points for a major transgression, possibly resulting in loss of rank and privileges within the faction. This does not force characters to forfeit boons already acquired, but it may prevent them from obtaining any new boons or benefits for which they no longer qualify at their lowered TPA, and they must work to get back in the good graces of their peers.</p>
<h3 id="rule-faction_prestige-benefits-of-prestige">Benefits of Prestige</h3>
<p>A character's Total Prestige Award represents her trustworthiness and status within their faction. The simplest representation of this prestige is that for every 10 points of her Total Prestige Award, she gains a +1 bonus on Diplomacy checks with members of that faction. In addition, she may learn certain feats or spells or be able to purchase unique magical items or other goods that are restricted to those whose TPA reaches a certain benchmark. Her faction contacts can allow her to buy or sell goods whose value exceeds the normal gp limit of the local area or that might be of questionable legality. Finally, depending on the organization, a character's TPA might afford her certain titles and incidental privileges.</p>
<h3 id="rule-faction_prestige-dealing-with-allied-factions">Dealing with Allied Factions</h3>
<p>Many factions have close associations and alliances with other groups, and earning prestige in her faction can allow a character to enjoy some of the benefits of membership and prestige within allied factions as well. Each faction entry describes whether that faction is allied with any others. When dealing with members of an allied faction, a character may treat her TPA as if it were half its actual amount, including the related bonus on Diplomacy checks with, and buying and selling goods through, the allied faction; she can also spend CPA to obtain boons from an allied faction, though the costs are increased by 1.</p>
<h3 id="rule-faction_prestige-dealing-with-opposed-factions">Dealing with Opposed Factions</h3>
<p>Just as factions have allies, so too do they have enemies. The very same prestige that can make a PC famous within her faction and among allies can make her infamous in the eyes of opposing factions, and avoiding attracting unwanted attention from her faction's enemies or those friendly to them is one reason that some characters keep their faction allegiances secret. If a character's faction allegiance is known, the initial attitude of an NPC of the opposing faction is treated as one step worse than normal (for example, Indifferent becomes Unfriendly, Unfriendly becomes Hostile), and for every 10 points of the character's TPA, she takes a -1 penalty on Diplomacy checks to influence that NPC. If the NPC's faction opposes more than one of the PC's factions, only the faction with which the PC has the highest TPA counts.</p>
<h3 id="rule-faction_prestige-spending-prestige">Spending Prestige</h3>
<p>A character's CPA total reflects the goodwill, political capital, and personal favors she has built up through service to the organization. While a character's TPA can provide certain titles and privileges, most tangible benefits of faction membership are acquired when a character spends his CPA on temporary boons, favors, aid, spellcasting, or other service. Regardless of whatever honorific titles a character has earned through his Total Prestige Award, the cost for obtaining boons remains the same.</p>
<p>Once a character's CPA is spent, it is spent permanently; it is not recovered automatically like lost hit points or ability score damage. The character can, of course, earn more PA, which adds to both her TPA and her CPA, but spent points are gone.</p>
<p>Characters may not spend CPA during combat, and for the sake of simplicity you may limit characters to spending CPA once per gaming session (this keeps players from saving up their PA in large amounts and spending it all at once, making an adventure too easy). It is possible for a player to spend his character's PA even if the PC is dead; in essence, this represents the PC having made prior arrangements with his faction to perform certain actions on his behalf, such as recovering his dead body and returning it to a specific location or having it raised.</p>
<p>You can add to the services presented in this book or create your own factions. The monetary equivalent of 1 point of PA is approximately 375 gp, though characters should normally only be able to spend PA on services, not physical goods.</p>
<p>PCs may not pool their earned prestige to obtain items or services, or for any other purpose, even if they are members of the same faction. As a general rule, PA is designed to be spent by characters on themselves; PA costs increase by 1 when the benefit is to other characters instead of to the member of the faction. However, PCs in a home game are ultimately free to spend their PA as they see fit.</p>
<p>A character's ability to spend PA is dependent on his being in contact with other members of his faction, and unless noted otherwise, most factions tend to have agents, contacts, or headquarters in settlements that are at least the size of a large city. To reflect the difficulty of contacting a faction agent in a smaller settlement, PA costs increase by 5 in communities smaller than 5,000 people. This change, of course, can vary by organization; for the Green Faith, for example, the opposite is true - PA costs increase by 5 in communities larger than 5,000</p>
</>};
const _faction_list = {title: "Faction List", parent_topics: ["optional_subsystems","factions"], siblings: ["faction_basics","faction_prestige","faction_list","faction_costs"], subtopics: ["f_profiteers","f_antislavery","f_merceneries","f_vangard","f_lawknights","f_bards","f_clans","f_legion","f_old_cults","f_profits","f_second_life","f_imperial","f_gravepath"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 5</Link></p>
<p>Following a brief overview of the faction, each entry explains the goals and the general alignment of the group; PCs who are part of the faction need not match this alignment precisely, but it serves as a guide to the faction's general attitudes and values. To help guide players, for each faction there is a list of character classes that are best and least suited to membership and advancement. These are by no means hard rules; if an assassin wants to join a group of holy crusaders, it can be done, but she is going to have a harder time achieving the faction's goals than a paladin would. Each faction provides a description of special resources available within the faction - not only material goods and services, but also unique feats, spells, equipment, and magical items only available to faction members, as well as titles, honors, privileges, and opportunities that can be accessed by gaining prestige in the faction.</p>
<p><strong className="hl">Note:</strong> The factions presented below are referenced in other Open Game Content, and have been converted into generic entities, removing proper names and Pathfinder-specific lore that likely isn't considered Open Game Content.</p>
</>};
const _f_profiteers = {title: "Crimson Syndicate", parent_topics: ["optional_subsystems","factions","faction_list"], siblings: ["f_profiteers","f_antislavery","f_merceneries","f_vangard","f_lawknights","f_bards","f_clans","f_legion","f_old_cults","f_profits","f_second_life","f_imperial","f_gravepath"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 8</Link><br/><strong className="hl">Pathfinder Name:</strong> Aspis Consortium<br/><strong className="hl">Goal:</strong> Achieve vast wealth, relying on the supreme power of human greed to further even darker aims<br/><strong className="hl">Alignment:</strong> NE<br/><strong className="hl">Good Class Choices:</strong> Fighter, Rogue, Sorcerer, Wizard<br/><strong className="hl">Challenging Class Choices:</strong> Cleric (of a good deity), Druid, Paladin<br/><strong>Also See:</strong> <Link to="/rule/crimson_syndicate">Crimson Syndicate (affiliation)</Link></p>
<h3 id="rule-f_profiteers-joining">Joining</h3>
<p>The Syndicate has many hirelings, but becoming an actual employee or member of the organization requires dedication and talent; a common laborer gains none of the benefits of this faction other than the daily silver of his wage. Unusual folk (such as adventurers) can join after proving themselves in specialized missions.</p>
<h3 id="rule-f_profiteers-gaining-prestige">Gaining Prestige</h3>
<p>Achieving goals that lead to profit, access to resources, or the elimination of competitors is the key to gaining status in the Syndicate.</p>
<h3 id="rule-f_profiteers-resources">Resources</h3>
<p>The Crimson Syndicate has money, and given that its members are spread across much of the region, it can count on ready assistance from either formal members or locally hired muscle, even in remote regions. It has access to raw and manufactured goods from distant places as well, often for much cheaper costs and in more abundant supply than the market typically supports. As agents tap into markets in corners of the globe barely known to most nations and only tentatively explored by other groups, they often have exclusive access to resources found there.</p>
<p><strong className="hl">1 CPA:</strong> Arrange overland or ocean-going transport from one location to another.</p>
<p><strong className="hl">10 TPA:</strong> Acquire the Bronze rank and a bronze badge.</p>
<p><strong className="hl">10 TPA, 1 CPA:</strong> Intercept a caravan (or other mundane, ground-based transportation) or cargo ship at a specific location, seizing the goods and hiding them nearby. Add 1 CPA to the cost to spare the lives of the victims. If multiple agents are interested in the same shipment, whoever spends the most CPA ends up in control of it.</p>
<p><strong className="hl">10 TPA, 3 CPA:</strong> Teleport three people to a notable city (+1 CPA per additional person). Arranging this may take 1-2 days, as the NPC caster may not be immediately available. Increase the cost by 3 CPA for same-day teleportation.</p>
<p><strong className="hl">10 TPA, 3 CPA:</strong> Hire a specialist (any NPC whose level is equal to half of the PC's) for 1 week. Most agents use these specialists as bodyguards, as team leaders on typical missions, or to intimidate people who do not respond to simple threats made by thugs. In many cases, these specialists end up as cohorts or long-term employees of the hiring agent.</p>
<p><strong className="hl">10 TPA, 3+ CPA:</strong> Arrange the disassembly and safe transportation of a magic item to a Syndicate-controlled location. Powerful items may cost more CPA to disassemble. Attempts to rebuild the item are not always successful (see <Link to="/feat/disassemble_magic_item">Disassemble Magic Item</Link> feat), so this process is normally used only for contraband items that must be smuggled to another location.</p>
<p><strong className="hl">4 CPA:</strong> Arrange overland or river passage deep into unexplored territory, including obtaining a map (of varying quality) of the local terrain, appropriate survival gear for that area, and 4 weeks' worth of water and rations.</p>
<p><strong className="hl">10 TPA, 10 CPA:</strong> Hire a master specialist (any NPC whose level is equal to the PC's) for 1 week. Many agents use these master specialists as bodyguards, team leaders on very dangerous missions, assassins targeting particularly troublesome officials, and so on.</p>
<p><strong className="hl">15 TPA, 5 CPA:</strong> Arrange a local market problem, such as a food shortage or the market being flooded with a particular commodity, affecting a settlement no larger than a large town. Increase the cost by +5 CPA to affect a larger settlement.</p>
<p><strong className="hl">20 TPA, 20 CPA:</strong> Acquire the Silver rank and a silver badge. The character selects one location (typically a settlement at least the size of a small city) as his base of operations and gains a +2 bonus on Appraise, Bluff, Diplomacy, Intimidate, Knowledge (local), and Knowledge (nobility) checks regarding that location and its trade interactions (this bonus can stack with the +4 bonus on one check <Link to="/rule/faction_costs">listed here</Link>). The character now reports to a Gold agent (who may be in the city or in another location). He can give orders to any lower-ranked agent in his base of operations, even those reporting to other Silvers (though abusing this ability can lower his TPA if it interferes too much with the Syndicate's plans there). He may live a wealthy or extravagant life at <Link to="/rule/cost_of_living">half the normal cost</Link>. The character may also <Link to="/rule/faction_costs">hire bodyguards</Link> at half the normal gp or CPA cost. Each time the character purchases this benefit, he gains another location as a base of operations and gains these benefits there.</p>
<p><strong className="hl">30 CPA:</strong> Gain one dose of <Link to="/magic-artifact/sun_orchid_elixir">sun orchid elixir</Link>, most likely stolen.</p>
<p><strong className="hl">50 TPA, 50 CPA:</strong> Acquire the Gold rank and a gold badge. The character selects one large location (such as a country) or up to four smaller locations (as described in the Silver rank entry) as his area of control. He gains a +4 bonus on Appraise, Bluff, Diplomacy, Intimidate, Knowledge (local), and Knowledge (nobility) checks regarding that area and its trade interactions; this bonus stacks with his Silver agent bonus on these skills (if any) for a location and can stack with the +4 bonus on one check <Link to="/rule/faction_costs">listed here</Link>). Alternatively, if the agent is already a Silver agent and has four or more bases of operations, he can spend 10 CPA points to upgrade his rank to Gold rather than purchasing that rank all at once.</p>
</>};
const _f_antislavery = {title: "Breakers of Chains", parent_topics: ["optional_subsystems","factions","faction_list"], siblings: ["f_profiteers","f_antislavery","f_merceneries","f_vangard","f_lawknights","f_bards","f_clans","f_legion","f_old_cults","f_profits","f_second_life","f_imperial","f_gravepath"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 10</Link><br/><strong className="hl">Pathfinder Name:</strong> Bellflower Network<br/><strong className="hl">Goal:</strong> Free halfling slaves<br/><strong className="hl">Alignment:</strong> CG<br/><strong className="hl">Good Class Choices:</strong> Bard, Cleric, Paladin, Ranger, Rogue<br/><strong className="hl">Challenging Class Choices:</strong> Barbarian, Fighter<br/><strong>Also See:</strong> <Link to="/rule/breakers_of_chains">Breakers of Chains (affiliation)</Link></p>
<h3 id="rule-f_antislavery-joining">Joining</h3>
<p>The Breakers welcome nonevil, trustworthy folk, particularly those skilled at stealth and wilderness survival. In most cases, a member of the group seeks out a PC rather than the other way around, usually once the PC establishes he's against slavery and a friend to halflings.</p>
<h3 id="rule-f_antislavery-gaining-prestige">Gaining Prestige</h3>
<p>In addition to performing tasks for the group, a person directly responsible for delivering a halfling from slavery earns 1 PA for every 10 halflings so freed. This means that if a faction mission involves freeing halfling slaves, a PC earns PA for completing the mission and PA for freeing the slaves.</p>
<h3 id="rule-f_antislavery-resources">Resources</h3>
<p>Freeing slaves and slowly moving them across the countryside by night requires a lot of resources. For members with sufficient prestige, the Breakers of Chains has certain goods and services available. These items or services are nearly always based out of a waypoint or hidden along a row.</p>
<p><strong className="hl">1 TPA:</strong> Find a hidden location along a known row marked by a Breaker that contains enough trail rations and water for up to 10 people for a week. Finding this cache requires a DC 10 Survival check.</p>
<p><strong className="hl">1 TPA:</strong> Purchase simple weapons, light armor, and shields at the normal price from most waypoints (the network routinely supplies waypoints with these items so that freed slaves can defend themselves as they travel).</p>
<p><strong className="hl">5 TPA:</strong> Purchase mundane items, such as rope, pitons, tents, blankets, clothes, and so on, at half price from most waypoints.</p>
<p><strong className="hl">5 TPA:</strong> Purchase certain travel-related magic items from a waypoint from the following list at a 10% discount: cloak of elvenkind (6 CPA), dust of disappearance (9 CPA), dust of tracelessness (1 CPA), elixir of hiding (1 CPA), hat of disguise (5 CPA), robe of blending (21 CPA), vest of escape (13 CPA).</p>
<p><strong className="hl">10 TPA:</strong> Rest at any readily identifiable waypoint without being turned away (though there are exceptions, such as if a group of pursuers follows right on the character's heels). At such a location, Breakers are fed, clothed, and provided with basic medical attention (as if attended by a person whose Heal bonus is +10).</p>
<p><strong className="hl">20 TPA:</strong> Purchase or upgrade magical armor or shields with abilities from the following list at a 10% discount: arrow catching, arrow deflection, darkwood buckler, darkwood shield, glamered, mithral shirt, shadow (all), slick (all).</p>
<p><strong className="hl">20 TPA:</strong> Purchase or upgrade magical weapons with abilities from the following list: defending, merciful, returning, throwing, sleep arrow, sword of subtlety.</p>
</>};
const _f_merceneries = {title: "Friendly Merceneries", parent_topics: ["optional_subsystems","factions","faction_list"], siblings: ["f_profiteers","f_antislavery","f_merceneries","f_vangard","f_lawknights","f_bards","f_clans","f_legion","f_old_cults","f_profits","f_second_life","f_imperial","f_gravepath"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 12</Link><br/><strong className="hl">Pathfinder Name:</strong> Bloodstone Swords<br/><strong className="hl">Goal:</strong> make a living as merceneries, but preferring to do so without harming common folk<br/><strong className="hl">Alignment:</strong> N<br/><strong className="hl">Good Class Choices:</strong> Fighter, Ranger, Rogue<br/><strong className="hl">Challenging Class Choices:</strong> Paladin</p>
<h3 id="rule-f_merceneries-joining">Joining</h3>
<p>Officially, they accept anyone who agrees to abide by the chain of command of the mercenary company; unofficially, the leader is free to reject anyone he wants, and he makes a point to not allow anyone who seems disreputable or has a history of banditry. Most members get a tattoo or brand of the company's symbol to show their allegiance.</p>
<h3 id="rule-f_merceneries-gaining-prestige">Gaining Prestige</h3>
<p>They look favorably on individuals who keep their word, make an effort to not endanger the common folk, and do their jobs with a minimum of fuss. Those who provide tactical knowledge to the company or tools or services that augment the group itself can gain prestige with the mercenary company.</p>
<h3 id="rule-f_merceneries-resources">Resources</h3>
<p>The signature resource of the group is armed might. They number around 200 individuals, though at any time 50 to 100 are away on missions. The group has small offices across the region, though on short notice these offices normally have access to at most a dozen Swords.</p>
<p>The merceneries are experts in mixing fighter, ranger, and rogue fighting styles, and can train members in these techniques (see below). This training requires 1 week per technique learned, and a character can train in multiple techniques.</p>
<p><strong className="hl">1 TPA:</strong> Gain a tattoo or brand of the merceneries' symbol, usually on the forearm, signifying allegiance to the group. Anyone kicked out of the group is forbidden to display the mark and usually has it magically erased or covered with a different image.</p>
<p><strong className="hl">5 TPA, 1 CPA:</strong> Hire a squad of 10 1st-level warriors for a routine mission such as guarding a caravan or escorting a person from one city to another. The leader considers these missions low-risk training operations for the newest and youngest recruits, and dragging these merceneries into deadly conflicts is a sure way to lose prestige with the company; most characters using this resource do so just for a show of force, though the warriors do fight if combat occurs.</p>
<p><strong className="hl">5 TPA, 1 CPA:</strong> Acquire combat trained mounts for a week (as per the <Link to="/rule/faction_costs">Weekly Service</Link>).</p>
<p><strong className="hl">5 TPA:</strong> Consult with a local officer, gaining a +2 bonus on a Knowledge (history), Knowledge (local), Knowledge (nobility), or Knowledge (religion) check made regarding that region. The character must wait 24 hours for the officer to report back with the desired information.</p>
<p><strong className="hl">10 TPA:</strong> Gain a +1 bonus on Diplomacy checks made to influence common folk and near cities where the merceneries operate. At 20 TPA, this bonus increases to +2, and at 30 TPA, it increases to +3.</p>
<p><strong className="hl">10 TPA, 3 CPA:</strong> Hire a specialist (any NPC fighter, ranger, or rogue whose level is equal to half of the PC's) for 1 week.</p>
<p><strong className="hl">10 TPA, 5+ CPA:</strong> Gain a contact in a particular city where the merceneries operate. The character can consult with this contact for local gossip, news, and advice; this action grants the character a +2 bonus on Diplomacy checks to gather information and on Knowledge (history), Knowledge (local), Knowledge (nobility), and Knowledge (religion checks made within that city regarding the contact's city, but the character must wait 24 hours for the contact to provide the desired information. For an additional 10 CPA, the bonus from the contact increases to +4. A character may have contacts in multiple cities, but multiple contacts in the same city provide no extra benefit. If the contact dies, the character can spend CPA to find a replacement contact.</p>
<p><strong className="hl">20 TPA:</strong> Purchase or upgrade weapons from the following list at a 10% discount: bane (goblinoid, human, orc), flaming, frost, seeking, shock, throwing.</p>
<p><strong className="hl">20 TPA:</strong> Purchase or upgrade magical armor or shields from the following list at a 10% discount: arrow catching, arrow deflection, bashing, blinding, energy resistance (cold, fire), shadow (all).</p>
<p><strong className="hl">20 TPA:</strong> Purchase magic items from the following list at a 10% discount: efficient quiver, gloves of arrow snaring, handy haversack, periapt of wound closure, restorative ointment, stone of alarm.</p>
<p><strong className="hl">20 CPA:</strong> Undergo fighter combat training. This training allows a fighter with an available combat feat slot to select one of the following abilities or feats as a combat feat: Acrobatic Steps, Bloodstone Manhunter, Endurance, Fast Crawl, Nimble Moves, Run.</p>
<p><strong className="hl">20 CPA:</strong> Undergo ranger combat training. This training allows a ranger with an available combat style feat slot to select one of the following abilities or feats as a combat style feat: Bloodstone Manhunter, Catch Off-Guard, Diehard, Fast Crawl, Stand Still, Step Up.</p>
<p><strong className="hl">20 CPA:</strong> Undergo rogue combat training. This training allows a rogue with an available rogue talent slot to select one of the following abilities or feats as a rogue talent: Bloodstone Manhunter, combat trick, Fast Crawl, finesse rogue, Medium Armor Proficiency, weapon training. A rogue can select the combat trick, finesse rogue, or weapon training talent even if he has already selected one of those talents.</p>
<p><strong className="hl">30 TPA, 2 CPA:</strong> Gain the rank "lieutenant" and a loyal team of 1 sergeant (5th-level fighter, ranger, or rogue) and 5-8 corporals (3rd-level fighters, rangers, or rogues) as followers. These troops won't necessarily die on the character's behalf.</p>
</>};
const _f_vangard = {title: "Vangard of Liberty", parent_topics: ["optional_subsystems","factions","faction_list"], siblings: ["f_profiteers","f_antislavery","f_merceneries","f_vangard","f_lawknights","f_bards","f_clans","f_legion","f_old_cults","f_profits","f_second_life","f_imperial","f_gravepath"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 16</Link><br/><strong className="hl">Pathfinder Name:</strong> Eagle Knights<br/><strong className="hl">Goal:</strong> Liberty, equality, unity, an end to piracy and slavery<br/><strong className="hl">Alignment:</strong> NG<br/><strong className="hl">Good Class Choices:</strong> Bard, Fighter, Paladin, Ranger<br/><strong className="hl">Challenging Class Choices:</strong> Barbarian, Druid<br/><strong>Also See:</strong> <Link to="/rule/vangard_of_liberty">Vangard of Liberty (affiliation)</Link></p>
<h3 id="rule-f_vangard-joining">Joining</h3>
<p>Given their activities guarding the land, their pursuit of slavers outside of their homeland, and the secret operations of the <Link to="/pclass/twilight_talon">Twilight Talons</Link>, the Vangard is open to any who support the ideals of their organization - including trustworthy folk willing to be secret agents in evil lands.</p>
<h3 id="rule-f_vangard-gaining-prestige">Gaining Prestige</h3>
<p>The exact nature of suitable missions for each of the three branches of the organization varies according to the branch's goals. Members of the <Link to="/pclass/golden_legionnaire">Golden Legion</Link> gain prestige for thwarting military actions against the homeland. Members of the <Link to="/pclass/steel_falcon">Steel Falcons</Link> gain prestige for freeing slaves, sinking slaving ships, and convincing foreign officials to reject slavery. The Twilight Talons gain prestige for eliminating key figures in the slave trade, uncovering information critical to the safety of the homeland, and sabotaging the efforts of enemy forces.</p>
<h3 id="rule-f_vangard-resources">Resources</h3>
<p>The Vangard's strength is not only their considerable military, but also in their rhetoric. Common folk favor them wherever they roam, but they are not universally welcomed or well established. PA costs increase by 5 in evil lands and other places far from their home. Some of these resources are military ranks within the organization, which also allow the members to purchase certain magic items at a discount; the listed CPA cost for these rewards only applies to acquiring the rank (in other words, the character doesn't have to spend CPA every time he wants to purchase the item associated with that rank).</p>
<p><strong className="hl">5 TPA, variable CPA:</strong> Purchase a magical service from the following list: detect charm (1 CPA), forbiddance (4 CPA per 60-foot cube), freedom (9 CPA), heroes' feast (4 CPA), phantom steed (1 CPA), refuge (10 CPA), suppress charms and compulsions (1 CPA), wind walk (4 CPA).</p>
<p><strong className="hl">5 TPA, 1 CPA:</strong> Call upon faction members to assist in searching a person, structure, or location, granting a +10 bonus on checks to detect hidden items, disguises, forgeries, traps, secret doors, or compartments. This is normally only usable in a civilized area (not a dungeon) and lasts for up to 1 day.</p>
<p><strong className="hl">5 TPA, 1 CPA:</strong> Gain the rank of lance corporal and Diplomacy as a class skill. A character of this rank may purchase feather tokens from the faction at a 10% discount.</p>
<p><strong className="hl">5 TPA, 5 CPA:</strong> Gain diplomatic privilege, which gives the character a +2 circumstance bonus on Bluff, Diplomacy, Intimidate, Knowledge (local), Knowledge (nobility), Perform (oratory), and Sense Motive checks with citizens of one country. This bonus increases to +4 on checks made to avoid legal trouble.</p>
<p><strong className="hl">10 TPA, 2 CPA:</strong> Gain the temporary service of a celestial giant eagle as if using <Link to="/spell/lesser_planar_ally">lesser planar ally</Link>. The member of the faction must negotiate and pay for the eagle's service, though he can spend his CPA to have the Vangard pay the price for the service. If the faction member is a poor negotiator, he can spend 1 CPA to hire a charismatic advocate to argue on his behalf.</p>
<p><strong className="hl">10 TPA, 3 CPA, Lance Corporal:</strong> Gain the rank of captain and Perform (oratory) as a class skill. Captains may purchase golden eagle epaulets at a 10% discount.</p>
<p><strong className="hl">20 TPA, 5 CPA, Captain:</strong> Gain the rank of major, Knowledge (history) and Knowledge (nobility) as class skills, and a loyal team of 4-6 lance corporals (2nd-level fighters). Majors may purchase serpentine owl or serpentine eagle <Link to="/magic-wondrous/figurines_of_wondrous_power">figurines of wondrous power</Link> at a 10% discount.</p>
<p><strong className="hl">10 TPA, 15 CPA:</strong> Become invested as a knight of the homeland. The character may devise a coat of arms and use the honorific Sir if male or Dame or Milady if female. The character may append "knight" to her rank in the organization (for example, knight captain or knight major) and can invest others as knights (though abusing this right can lead to decreased TPA). He gains a +2 bonus on Diplomacy and Knowledge (nobility) checks within Andoran and a pair of golden eagle epaulets.</p>
<p><strong className="hl">20 TPA:</strong> Purchase or upgrade magical armor from the following list at a 10% discount: arrow catching, energy resistance (any), glamered, shadow.</p>
<p><strong className="hl">20 TPA:</strong> Purchase or upgrade magical weapons from the following list at a 10% discount: defending, holy, keen, mighty cleaving, shock.</p>
<p><strong className="hl">20 TPA:</strong> Purchase magic items from the following list at a 10% discount: boots of speed, bracelet of friends, chime of opening, eyes of the eagle, goggles of night, hat of disguise, ring of friend shield, ring of swimming.</p>
<p><strong className="hl">20 TPA, 3 CPA:</strong> Gain the temporary service of an avoral as if using <Link to="/spell/planar_ally">planar ally</Link>. The member of the faction must negotiate and pay for the avoral's service, though he can spend CPA to have the Vangard pay the price for the service. If the faction member is a poor negotiator, he can pay 1 CPA to hire a charismatic advocate argue on his behalf.</p>
<p><strong className="hl">30 TPA, 10 CPA, Major:</strong> Gain the rank of commander, Knowledge (geography) as a class skill, and a loyal team of 1 captain (5th-level fighter) and 5-8 lance corporals (3rd-level fighters); one of the lance corporals may instead be a 3rd-level cleric, sorcerer, or wizard. Commanders may purchase a talon sword at a 10% discount. If the commander is assigned to fortification (such as a castle, fort, or other Vangard outpost), he also gains 10-20 guardsmen (1st-level fighters) and a support staff (5-10 noncombatant 1st-level commoners and experts) to handle the needs of his subordinates. If assigned to a military ship, he instead gains 10-20 marines (1st-level fighters) and a support staff for the ship. Most commanders lead brigades of ground troops or captain military ships; characters who do not want these specific duties are treated as inactive, unassigned officers in the military.</p>
</>};
const _f_lawknights = {title: "Steel Knights", parent_topics: ["optional_subsystems","factions","faction_list"], siblings: ["f_profiteers","f_antislavery","f_merceneries","f_vangard","f_lawknights","f_bards","f_clans","f_legion","f_old_cults","f_profits","f_second_life","f_imperial","f_gravepath"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 20</Link><br/><strong className="hl">Pathfinder Name:</strong> Hellknights<br/><strong className="hl">Goal:</strong> Enforce the law<br/><strong className="hl">Alignment:</strong> LN<br/><strong className="hl">Good Class Choices:</strong> Cleric, Fighter, Paladin<br/><strong className="hl">Challenging Class Choices:</strong> Barbarian, Bard, Rogue<br/><strong>Also See:</strong> <Link to="/rule/steel_knights">Steel Knights (affiliation)</Link></p>
<h3 id="rule-f_lawknights-joining">Joining</h3>
<p>The Steel Knights only allow those who can prove their absolute devotion to law to join. Dilettantes, rule-benders, and the free-spirited have no place in the organization.</p>
<h3 id="rule-f_lawknights-gaining-prestige">Gaining Prestige</h3>
<p>Devoted as they are to law, the main way one achieves status with the Knights is by following lawful orders from superior members and eliminating chaos whenever possible.</p>
<h3 id="rule-f_lawknights-resources">Resources</h3>
<p>A character progressing through the ranks of the Knights must do so in order and pay the CPA cost for each rank achieved before promotion to the next rank; for example, he cannot become a maralictor without first being a knight or signifer. Some of the organization's ranks use different names depending on whether or not the character is a spellcaster; these ranks are otherwise identical.</p>
<p>Unlike other military orders presented in this book, the Knights take their rank very seriously, and a PC cannot simply disregard commands from higher-ranking Knights just because she is an adventurer - such disregard for law goes against the faction's ideals and results in a decrease in the PC's TPA and perhaps even other punishments, including death for egregious offenses. Furthermore, high-ranking Steel Knights tend to take leadership positions in cities or citadels rather than roaming the land looking for lawbreakers to smite; unless the GM plans a location-based campaign where a Knight PC can actively direct her troops, PC Knights who want to remain free to roam and deal with chaos as they see fit should stick to the lower ranks of the organization (maralictor, signifer, knight, and armiger).</p>
<p><strong className="hl">5 TPA, 1 CPA:</strong> Gain the rank "Armiger."</p>
<p><strong className="hl">5 TPA, 2 CPA, Armiger:</strong> Perform a series of challenges against conjured devils intended to toughen the character's will against the horrors of Hell. In total, these challenges give the armiger a +2 bonus on saving throws against fear effects.</p>
<p><strong className="hl">10 TPA, 1 CPA, Signifer:</strong> Transcribe a common spell (one listed in the Pathfinder RPG Core Rulebook, or any spell the GM feels is common) into a wizard's spellbook or alchemist's formula book. This benefit does not require a Spellcraft check or any additional transcribing costs.</p>
<p><strong className="hl">10 TPA, 1 CPA, Knight:</strong> Imprison up to four people in a Steel Knight citadel for up to 1 month (longer durations, require spending more PA or charges of a specific crime which the order can prosecute). The CPA cost may be higher for dangerous prisoners (such as rival adventurers).</p>
<p><strong className="hl">10 TPA, 1 CPA, Knight:</strong> Obtain legal assistance from the order, freeing the knight from prison or punishment with no consequences (usually by intimidation, finding a technicality in the law, or claiming superior jurisdiction over the accused). Each time the character draws upon this resource, the CPA cost doubles.</p>
<p><strong className="hl">10 TPA, 3 CPA, Knight:</strong> Requisition the assistance of a specialist (any NPC with a class level equal to half the knight's level) for 1 week.</p>
<p><strong className="hl">10 TPA, Knight:</strong> Purchase a set of fitted armor appropriate to the character's chosen order of knights at a 10% discount. Characters with the <Link to="/pclass/hellknight">Hellknight</Link> prestige class gain additional bonuses while wearing their fitted armor.</p>
<p><strong className="hl">10 TPA, 9 CPA, Knight:</strong> Hire a master specialist (any NPC with a class level equal to the PC's level) for 1 week.</p>
<p><strong className="hl">20 TPA, 1 CPA, Armiger:</strong> Gain the rank "knight" or (if a spellcaster) "signifer." The character must first slay a devil with a number of Hit Dice equal to or greater than her own; this victory must be witnessed by a Steel Knight.</p>
<p><strong className="hl">20 TPA, 3 CPA, Knight:</strong> Gain the temporary service of a lawful evil or lawful neutral outsider of up to 12 HD as if using <Link to="/spell/planar_binding">planar binding</Link>. The Steel Knight must negotiate and pay for the outsider's service, though she can spend points from her CPA to have her order pay the price for the service. If the Knight is a poor negotiator, she can pay 1 CPA to hire a charismatic advocate to argue on her behalf.</p>
<p><strong className="hl">20 TPA, Knight:</strong> Purchase or upgrade weapons from the following list at a 10% discount: axiomatic, bane, flaming, flaming burst, unholy.</p>
<p><strong className="hl">20 TPA, Knight:</strong> Purchase or upgrade magical armor or shields from the following list at a 10% discount: energy resistance (acid, fire, or cold), fortification (all), spell resistance.</p>
<p><strong className="hl">25 TPA, 1 CPA, Knight:</strong> Gain the rank "maralictor" and a loyal team of 4-6 armigers (2nd-level fighters).</p>
<p><strong className="hl">30 TPA, 1 CPA, Maralictor:</strong> Gain the rank "paralictor" and a loyal team of 1 maralictor (5th-level fighter) and 5-8 knights (3rd-level fighters); one of the knights may instead be a signifer (3rd-level cleric, sorcerer, or wizard). If the paralictor is assigned to a citadel, she also gains 10-20 armigers (2nd-level fighters) and a support staff (5-10 noncombatant 1st-level commoners and experts) to handle the needs of her subordinates.</p>
<p><strong className="hl">35 TPA, 1 CPA, Paralictor:</strong> Gain the rank "master of blades" or (if the character is a spellcaster) "paravicar" and a loyal team of 3 paralictors (including their subordinates). If the character is assigned to a citadel, her paralictors gain armigers and support staff.</p>
<p><strong className="hl">45 TPA, 1 CPA, Master of Blades:</strong> Gain the rank "lictor" or (if the character is a spellcaster) "vicarius," plus a master of blades (or paravicar) and his subordinates, plus 2 additional paralictors and their subordinates. Lictors always have a base of operations which houses their subordinates and support staff.</p>
</>};
const _f_bards = {title: "Bardic College", parent_topics: ["optional_subsystems","factions","faction_list"], siblings: ["f_profiteers","f_antislavery","f_merceneries","f_vangard","f_lawknights","f_bards","f_clans","f_legion","f_old_cults","f_profits","f_second_life","f_imperial","f_gravepath"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 22</Link><br/><strong className="hl">Pathfinder Name:</strong> Kitharodian Academy<br/><strong className="hl">Goal:</strong> Education and recruitment for a secret core of spies<br/><strong className="hl">Alignment:</strong> LN<br/><strong className="hl">Good Class Choices:</strong> Bard, Rogue, Wizard<br/><strong className="hl">Challenging Class Choices:</strong> Barbarian, Fighter, Ranger</p>
<h3 id="rule-f_bards-joining">Joining</h3>
<p>The school has long had an open policy for enrollment, accepting anyone who auditions and proves even a rudimentary understanding of music, theater, or the comedic arts.</p>
<h3 id="rule-f_bards-gaining-prestige">Gaining Prestige</h3>
<p>Exceptional performances in acting, disguise, music, stealth, and spy-related activities earn the favor of the school's administrators. For example, sneaking into a faculty office, disguising oneself as a professor, and teaching a class without anyone noticing the ruse would be a notable achievement, as would a similar "performance" in the course of an adventure (if witnessed by or reported to a teacher) or an awe-inspiring rendition of a speech or song in public. Students and graduates may also earn prestige by sending talented potential students to the school for training.</p>
<h3 id="rule-f_bards-resources">Resources</h3>
<p>Many of the college's resources require spending time at the school. Some require a specific character class (this is listed after the TPA and CPA costs). All of these resources cost an additional 5 PA if purchased outside of the nation the college is located in.</p>
<p><strong className="hl">1 TPA, 1 CPA, bard:</strong> Gain a permanent +1 bonus on all bardic knowledge checks. This benefit requires completing a month-long class at the college. The character can only gain this benefit once.</p>
<p><strong className="hl">5 TPA, 3 CPA, arcane spellcaster:</strong> Gain one additional 0-level spell known (if a bard or sorcerer), 0-level spell prepared (if a wizard), or daily use of a minor magic or major magic talent (if a rogue). This requires bard, rogue, sorcerer, or wizard spellcasting ability and the completion of a month-long class at the college. The character can only gain this benefit once.</p>
<p><strong className="hl">5 TPA, 5 CPA, bard:</strong> Gain 1 additional round of bardic performance per day. This requires completion of a month-long class at the college. The character can only gain this benefit once.</p>
<p><strong className="hl">10 TPA, 10 CPA, bard:</strong> Specialize in one type of performance. A bard can only specialize in one type at a time and must spend 10 CPA to change specializations (losing the previous specialization's benefits). Specializing requires 1 week of study and represents an ongoing interest in that type of performance.</p>
<blockquote>
<p><em>Acting:</em> Increase the bard's inspire courage bonus against charm and fear effects by +1 when using Perform (act). The bard gains a +1 bonus when using Perform (act) with his versatile performance ability.</p>
<p><em>Comedy:</em> Gain a +1 bonus on Perform (comedy) checks made as part of the bard's countersong ability. The bard gains a +1 bonus when using Perform (comedy) with his versatile performance ability.</p>
<p><em>Dance:</em> Gain a +1 bonus on Perform (dance) checks made as part of the bard's distract ability. The bard gains a +1 bonus when using Perform (dance) with his versatile performance ability.</p>
<p><em>Musical Instrument:</em> Choose a type of instrument listed in the Perform skill; increase the bard's inspire competence bonus by +1 when playing that instrument. The bard gains a +1 bonus when using that instrument with his versatile performance ability.</p>
<p><em>Oratory:</em> Affect one additional creature when using Perform (oratory) as part of the bard's fascinate ability. The bard gains a +1 bonus when using Perform (oratory) with his versatile performance ability.</p>
<p><em>Singing:</em> Like specializing in a musical instrument, except the inspire competence and versatile performance bonuses apply when the bard uses Perform (sing).</p>
</blockquote>
<p><strong className="hl">20 TPA, 10 CPA, bard:</strong> Learn the <em>dirge of misfortune</em> bardic performance ability. A bard can learn this for 10 CPA in place of the standard <em>dirge of doom</em> 8th-level ability, or for 35 TPA if he wants to learn it in addition to the <em>dirge of doom.</em> Learning the <em>dirge of misfortune</em> requires 1 week of study at the college.</p>
<blockquote>
<p><em>Dirge of Misfortune (Su):</em> A bard of 8th level or higher can use his performance to break the concentration of his enemies, causing them to fail at ordinarily achievable tasks. Once per round as an immediate action, as long as the bard continues performing, he can force an opponent to reroll any d20 roll just made. The opponent must use the result of the reroll, which has a -2 penalty. To be affected, the opponent must be within 30 feet and able to see and hear the bard's performance. Dirge of misfortune is a mind-affecting ability that relies on audible and visual components.</p>
</blockquote>
</>};
const _f_clans = {title: "Clans of the Perfect Army", parent_topics: ["optional_subsystems","factions","faction_list"], siblings: ["f_profiteers","f_antislavery","f_merceneries","f_vangard","f_lawknights","f_bards","f_clans","f_legion","f_old_cults","f_profits","f_second_life","f_imperial","f_gravepath"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 24</Link><br/><strong className="hl">Pathfinder Name:</strong> Kusari-Gama<br/><strong className="hl">Goal:</strong> Martial arts mastery, in preparation for a prophesized war of immense scale<br/><strong className="hl">Alignment:</strong> LN<br/><strong className="hl">Good Class Choices:</strong> Cleric, Fighter, Monk<br/><strong className="hl">Challenging Class Choices:</strong> Barbarian, Bard, Druid, Paladin, Rogue, Sorcerer, Wizard</p>
<h3 id="rule-f_clans-joining">Joining</h3>
<p>The order only accepts those willing to set aside - at least temporarily - their weapons and spells to learn the perfect art of unarmed combat. Only characters with natural attacks or the Improved Unarmed Strike feat are allowed to train with the Clans.</p>
<h3 id="rule-f_clans-gaining-prestige">Gaining Prestige</h3>
<p>A character who remains true to the goals of the faction gains 1 PA every time he gains a monk level. He also gains 1 PA every time he chooses the Extra Ki feat or learns a feat that enhances his unarmed strikes, such as Deflect Arrows, Improved Grapple, Scorpion Style, or Weapon Focus (unarmed strike).</p>
<h3 id="rule-f_clans-resources">Resources</h3>
<p>While the training regiments of the Clans of the Perfect Army are demanding, membership in a secret cross-continental society of martial artists has its benefits. Rewards that require study must take place at a Clan stronghold; multi-week periods of study can take place in 1-week increments rather than all at once.</p>
<p><strong className="hl">5 TPA, 1 CPA:</strong> Gain the honorific "-san" as a suffix to the character's name. Among the Clans, the honorific signifies respect for a fellow warrior. The starting attitude for any member toward him is at worst unfriendly.</p>
<p><strong className="hl">5 TPA, 2 CPA:</strong> Learn the Glaring Basilisk stance, which grants a +1 bonus on Fortitude and Reflex saves. Learning this stance requires 1 week of study.</p>
<p><strong className="hl">10 TPA, 3 CPA, san-honorific:</strong> Gain the service of a junior monk (whose class level is equal to half the PC's level) for 1 week. This monk is an assistant and student for the character and will fight to defend him, but the monk is not willing to fight to the death. If the character spends at least 1 hour per day training this student (combat while adventuring does not count as training) and the student survives the week, the next time the character visits a Clans of the Perfect Army stronghold he regains 1 CPA for this service (this benefit does not affect his TPA).</p>
<p><strong className="hl">10 TPA, 3 CPA:</strong> Learn the Creative Claw stance, which grants a +1 bonus to CMB. Learning this stance requires 2 weeks of study.</p>
<p><strong className="hl">10 TPA, 3 CPA:</strong> Learn the Dance of the Fox. When using the withdraw action, the character treats his second square as not being threatened by opponents he can see (in addition to the square the character starts in). Learning this stance requires 3 weeks of study.</p>
<p><strong className="hl">10 TPA, 3 CPA:</strong> Learn the Poison Toad stance, which grants a +1 bonus to CMD. Learning this stance requires 2 weeks of study.</p>
<p><strong className="hl">10 TPA, 5 CPA:</strong> Learn the Hands Like Clouds stance, which grants a +1 dodge bonus to AC. Learning this stance requires 2 weeks of study.</p>
<p><strong className="hl">10 TPA, 10 CPA:</strong> Add Exotic Weapon Proficiency to the character's list of monk bonus feats.</p>
<p><strong className="hl">15 TPA, 1 CPA:</strong> Learn the Perching Raptor stance, which grants a +2 bonus on initiative checks (this stance is only effective if the character is using it before combat starts). Learning this stance requires 1 week of study.</p>
<p><strong className="hl">15 TPA, 5 CPA:</strong> Learn the Wing of the Crane stance, which adds +4 damage on the character's next single attack. Learning this stance requires 3 weeks of study.</p>
<p><strong className="hl">20 TPA, 1 CPA, abundant step ability:</strong> Gain the ability to use abundant step to travel to a specific Clan stronghold by spending 6 ki points. The monk designates the target location by meditating at that location for 1 hour. He can have only one designated target stronghold at a time. Members of the faction call this ability "the infinite step."</p>
<p><strong className="hl">20 TPA, 2 CPA:</strong> Gain the honorific "sensei" before the character's name. The honorific denotes authority and is reserved for those with an accomplished level of mastery. A Clan sensei gains a +2 bonus on Bluff, Diplomacy, and Intimidate checks made to influence monks and those who respect the wisdom and skill of their order.</p>
<p><strong className="hl">20 TPA, 5 CPA:</strong> Enhance the character's wholeness of body ability; the character can spend 3 ki points to heal himself a number of hit points equal to 2 times his monk level.</p>
<p><strong className="hl">25 TPA, 1 CPA:</strong> Become eligible to select the Ki Diversity feat as a regular feat or monk bonus feat (this benefit requires an available feat slot).</p>
<p><strong className="hl">30 TPA:</strong> Purchase a <Link to="/magic-wondrous/ki_crystal">ki crystal</Link> at a 10% discount.</p>
<p><strong className="hl">30 TPA, 3 CPA, Sensei:</strong> Gain the honorific "master" before the character's name. The honorific is a significant expression of respect and enlightenment. A Clan master gains an additional +2 bonus on Bluff, Diplomacy, and Intimidate checks made to influence monks and those who respect the wisdom and skill of their order (this bonus stacks with the sensei bonus) and a +2 bonus on one Knowledge skill of his choice.</p>
<p><strong className="hl">40 TPA, 5 CPA, Master:</strong> Learn how to craft <Link to="/magic-wondrous/ki_crystal">ki crystals</Link>.</p>
</>};
const _f_legion = {title: "The Lost Legion", parent_topics: ["optional_subsystems","factions","faction_list"], siblings: ["f_profiteers","f_antislavery","f_merceneries","f_vangard","f_lawknights","f_bards","f_clans","f_legion","f_old_cults","f_profits","f_second_life","f_imperial","f_gravepath"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 32</Link><br/><strong className="hl">Pathfinder Name:</strong> Ninth Battalion<br/><strong className="hl">Goal:</strong> Defend dwarvenkind against the fate their own clan suffered<br/><strong className="hl">Alignment:</strong> LG<br/><strong className="hl">Good Class Choices:</strong> Bard, Cavalier, Cleric, Fighter, Paladin, Ranger, Rogue<br/><strong className="hl">Challenging Class Choices:</strong> Barbarian, Sorcerer</p>
<h3 id="rule-f_legion-joining">Joining</h3>
<p>The Lost Legion allows any dwarf to join as long as he doesn't disrupt the chain of command or the faction's activities. Therefore, there are a few evil members, loners, and criminals in the group, although they are tolerated only so long as they don't cause too much trouble. Non-dwarves may become allies of the Legion but cannot rise above 10 TPA with the faction.</p>
<h3 id="rule-f_legion-gaining-prestige">Gaining Prestige</h3>
<p>Most characters gain prestige by defending dwarven strongholds, clearing monsters from abandoned dwarven settlements so they can be resettled, slaying infamous dwarf-killers, and salvaging protective dwarven artifacts.</p>
<h3 id="rule-f_legion-resources">Resources</h3>
<p>The military life of the Lost Legion provides several benefits of which its members may take advantage.</p>
<p><strong className="hl">5 CPA:</strong> Learn the battle song of charging. When a bard sings this, he and his allies gain a +5 bonus to speed. This bonus increases to +10 at bard level 11.</p>
<p><strong className="hl">7 CPA:</strong> Learn the battle song of steadfastness. When a bard sings this, he and his allies gain a +1 dodge bonus to AC as long as the bard maintains the performance. This bonus increases to +2 at bard level 5, +3 at level 11, and +4 at level 17.</p>
<p><strong className="hl">7 CPA:</strong> Learn the battle song of sharpness. When a bard sings this, he and his allies increase the critical threat range of their melee weapons by 1 (from 20 to 19-20, from 19-20 to 18-20, and so on). At bard level 11, the critical threat range increases by 2. This effect does not stack other effects that increase a weapon's critical threat range.</p>
<p><strong className="hl">9 CPA:</strong> Learn the battle song of invigoration. When a bard sings this, he and his allies gain 1 temporary hit point per level of the bard. These temporary hit points vanish when the bard stops singing.</p>
<p><strong className="hl">12 CPA:</strong> Learn the battle song of hope. When a bard sings this, he and his allies gain the benefit of the Diehard feat, but only if they are conscious when the bard begins singing (in other words, the song has no effect on unconscious allies).</p>
<p><strong className="hl">5 TPA, 1 CPA:</strong> Gain a +5 bonus on any dwarf-appropriate Profession or Craft check representing a week of work. This requires daily access to a Legion stronghold for an hour each day for the week the check occurs.</p>
<p><strong className="hl">10 TPA:</strong> Purchase or upgrade weapons at a Battalion stronghold from the following list at a 10% discount: defending, dwarven thrower, goblinoid-bane, flaming, mighty cleaving, orc-bane, returning, throwing, thundering.</p>
<p><strong className="hl">10 TPA, 3 CPA:</strong> Gain the service of a junior member of the faction (a dwarven cleric, fighter, or paladin with a class level equal to half the PC's level) for 1 week.</p>
<p><strong className="hl">15 TPA:</strong> Purchase dwarf-forged adamantine and mithral items from the faction at a 10% discount. This only applies to the metal cost of the item, not the cost of any magical properties.</p>
<p><strong className="hl">15 TPA, 13 CPA:</strong> Undergo a day-long ritual that permanently grants the character fire resistance 5 as an extraordinary ability.</p>
<p><strong className="hl">15 TPA, 10 CPA:</strong> Undergo a day-long ritual that increases a dwarf character's darkvision range from 60 to 70 feet.</p>
<p><strong className="hl">15 TPA, 10 CPA:</strong> Undergo a day-long ritual that increases a dwarf character's hatred bonus against orcs and goblinoids from +1 to +2.</p>
<p><strong className="hl">20 TPA, 15 CPA:</strong> Undergo a day-long ritual that increases a dwarf character's hardy bonus against poison, spells, and spell-like abilities from +2 to +3.</p>
<p><strong className="hl">25 TPA, 1 CPA:</strong> Become eligible to select the <Link to="/feat/let_them_come">Let Them Come</Link> feat (this benefit requires the character to have an available feat slot).</p>
<p><strong className="hl">20 TPA:</strong> Purchase or upgrade magical armor or shields from a Legion stronghold from the following list at a 10% discount: adamantine breastplate, dwarven plate, energy resistance (acid, fire, or cold), fortification (all), mithral full plate of speed, mithral shirt.</p>
<p><strong className="hl">25 TPA, 1 CPA:</strong> Gain the rank "captain" and a loyal team of 4-6 2nd-level dwarf fighters. These fighters are willing to accompany the character on any faction-related mission, defending him and even fighting to the death if necessary.</p>
<p><strong className="hl">30 TPA, 1 CPA, war captain:</strong> Gain the rank "commander" and a loyal team of 1 captain (5th-level dwarven fighter, cleric, or paladin) and 5-8 3rd-level dwarven fighters. These troops are willing to accompany the character on any faction-related mission, defending him and even fighting to the death if necessary. These followers are not replaced if slain. A character can only purchase this benefit once.</p>
<h4 id="rule-f_legion-dwarven-battle-songs">Dwarven Battle Songs</h4>
<p>Passed down through the generations and preserved by Legion bards, these heroic songs are forms of bardic performance. Battle songs always have an audible component, never a visual component (though many performers include visual components with their singing, they are not the key to the magic). A bard of any level can learn these songs from the faction.</p>
<p>Any dwarf who can carry a tune can use one to bolster himself in combat. Anyone with at least 1 rank in Perform (sing) may begin singing a battle song as a standard action and maintain it each round as a free action; he gains the minimum benefit described for the song, which does not advance with the singer's level. The singing is otherwise like bardic performance by a novice bard (requiring a standard action to start a new performance, ending if the singer is unconscious, and so on). A non-bard in range of a bard singing the same battle song only gains the benefit of the highest bonus from that song (typically the bard's). For example, a non-bard singing the song of steadfastness gains a +1 dodge bonus to AC (no matter what his level is), but if in range of a bard whose version of the song grants a +2 dodge bonus, he only gets the bard's +2 (not his own +1 and the bard's +2). Of course, a bard who has used all his bardic performance rounds for the day can sing for his own benefit as long as he has at least 1 rank in Perform (sing).</p>
</>};
const _f_old_cults = {title: "Old Cults", parent_topics: ["optional_subsystems","factions","faction_list"], siblings: ["f_profiteers","f_antislavery","f_merceneries","f_vangard","f_lawknights","f_bards","f_clans","f_legion","f_old_cults","f_profits","f_second_life","f_imperial","f_gravepath"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 34</Link><br/><strong className="hl">Pathfinder Name:</strong> Old Cults<br/><strong className="hl">Goal:</strong> Prepare the world for the coming of the Great Old Ones, and hasten their arrival<br/><strong className="hl">Alignment:</strong> CE<br/><strong className="hl">Good Class Choices:</strong> Bard, Cleric, Sorcerer, Wizard<br/><strong className="hl">Challenging Class Choices:</strong> Druid, Monk, Paladin</p>
<h3 id="rule-f_old_cults-joining">Joining</h3>
<p>As a secret society that worships things from beyond the stars that would snuff all life in the world as casually as a man crushes an ant, the Old Cults are very careful with their recruiting lest their activities draw the attention of the law or good religions. Most recruitment occurs within families, though several decadent circles of nobles are known to dabble in the rituals of the Great Old Ones. Scholars of magic who ask about forbidden works may attract the attention of the cultists and precipitate a meeting.</p>
<h3 id="rule-f_old_cults-gaining-prestige">Gaining Prestige</h3>
<p>Anything that advances the mysterious causes of the Great Old Ones earns prestige with the Old Cults. Different cells have different agendas. Some want slaves, sacrifices, or new people to brainwash into the cult's teachings. Others want mortal women for unearthly horrors to breed with. Still others try to find lost fragments of magical writings pertaining to the Elder Gods.</p>
<h3 id="rule-f_old_cults-resources">Resources</h3>
<p>Despite their diversity, each Old Cult possesses similar resources. Though geographical barriers have kept many of these cults isolated for centuries, cultists readily acknowledge those who share their beliefs and remain devoted to like causes. Faction members gain access to ancient knowledge, lore, and artifacts associated with the Great Old Ones, as well as materials and information crucial to ushering in their awakening.</p>
<p><strong className="hl">5 TPA, 2 CPA:</strong> Learn Aklo, a strange language commonly used by creatures associated with the cults and related to the alien tongues of creatures beyond the stars. This benefit does not require the character to spend any skill ranks on the Linguistics skill.</p>
<p><strong className="hl">10 TPA, 1 CPA:</strong> Borrow a rare spellbook or other magical document for the purposes of learning or researching one spell. This benefit does not require a Spellcraft check or any additional transcribing costs. Typical spells owned by the Old Cults involve conjuring or banishing strange creatures (<Link to="/spell/banishment">banishment</Link>, <Link to="/spell/gate">gate</Link>, <Link to="/spell/planar_ally">planar ally</Link>, <Link to="/spell/planar_binding">planar binding</Link>, <Link to="/spell/summon_monster">summon monster</Link>), physical and mental projection (<Link to="/spell/astral_projection">astral projection</Link>, <Link to="/spell/dream">dream</Link>, <Link to="/spell/ethereal_jaunt">ethereal jaunt</Link>, <Link to="/spell/etherealness">etherealness</Link>, <Link to="/spell/magic_jar">magic jar</Link>, <Link to="/spell/nightmare">nightmare</Link>), and revealing the unseen (<Link to="/spell/commune">commune</Link>, <Link to="/spell/confusion">confusion</Link>, <Link to="/spell/contact_other_plane">contact other plane</Link>, <Link to="/spell/insanity">insanity</Link>, <Link to="/spell/invisibility_purge">invisibility purge</Link>, nightmare, <Link to="/spell/see_invisibility">see invisibility</Link>, <Link to="/spell/true_seeing">true seeing</Link>). Some of these writings contain versions of the spells that are 1-3 levels lower than the normal version of the spell (such as a level 3 version of contact other plane) or arcane versions of divine spells (or vice versa). Such versions are damaging to the mind, however, inflicting permanent Wisdom drain upon the reader, though some believe this is a small price to pay for the knowledge.</p>
<p><strong className="hl">10 CPA:</strong> Change a sorcerer's bloodline to <Link to="/sorcbloodline/aberrant">aberrant</Link> or <Link to="/sorcbloodline/destined">destined</Link>. This change requires an 8-hour ritual.</p>
<p><strong className="hl">15 TPA, 1 CPA:</strong> Experience a prophetic dream. The cult arranges a mental link with an ancient, alien force, which implants the character's mind with insane dreams that unlock a vision. The vision is entirely symbolic, but its purpose becomes clear at the moment the character most needs it. The character may add a +10 insight bonus to any single d20 roll; the character must use this ability before he knows whether the roll is a success or failure. Using this ability expends the power of the vision and inflicts 1 point of Wisdom drain. A character can only retain the power of one such vision at a time.</p>
<p><strong className="hl">20 TPA, 1 CPA:</strong> Arrange a conjuring of a creature associated with the Old Cults as if using <em>planar binding.</em> However, in most cases these rituals are flawed and the creature arrives unbound and ambivalent to the desires of its mortal conjurer; unless controlled with additional magic, the creature acts upon its own whims and desires - typically feeding upon or breeding with the first available target, often times the conjurer unless a suitable sacrifice is offered. In many cases, the called creature may linger in the area for years or even centuries and becomes the stuff of local legend. Other conjured creatures are more tractable and are willing to bargain for their services.</p>
<p><strong className="hl">20 TPA, 8 CPA:</strong> Open a portal. At the character's request, this portal may act as a <Link to="/spell/teleportation_circle">teleportation circle</Link> that sends him to an isolated, near-mythical, or lost magical location in the world (or even another planet), or as a <em>gate</em> to a nightmarish, otherworldly realm. The cultists' control over such things depends on stellar conjunctions and the accuracy of their source spells; safety or even a return trip are never guaranteed.</p>
</>};
const _f_profits = {title: "The Profits", parent_topics: ["optional_subsystems","factions","faction_list"], siblings: ["f_profiteers","f_antislavery","f_merceneries","f_vangard","f_lawknights","f_bards","f_clans","f_legion","f_old_cults","f_profits","f_second_life","f_imperial","f_gravepath"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 38</Link><br/><strong className="hl">Pathfinder Name:</strong> Prophets of Kalistrade<br/><strong className="hl">Goal:</strong> Gain personal wealth through any means, fulfilling the old prophecies<br/><strong className="hl">Alignment:</strong> LN<br/><strong className="hl">Good Class Choices:</strong> Bard, Rogue, Wizard<br/><strong className="hl">Challenging Class Choices:</strong> Barbarian, Druid, Paladin, Ranger</p>
<h3 id="rule-f_profits-joining">Joining</h3>
<p>The Profits accept anyone willing to adhere to the strictures described in their book of prophecy. This means a person of any race, nationality, gender, or social heritage may join the faction.</p>
<h3 id="rule-f_profits-gaining-prestige">Gaining Prestige</h3>
<p>Achieving goals that lead to wealth, especially demonstrable wealth, earns the respect of the Profits.</p>
<h3 id="rule-f_profits-resources">Resources</h3>
<p>The Profits prefer indentured, debt-bound servants rather than slaves or hirelings. A faction member becomes an indentured servant by borrowing money from a Profit and then working in some domestic capacity until the debt is paid, thus becoming living collateral for a long-term loan. These indentured servants typically use the borrowed money to fund an investment, which makes them more loyal and predictable to their employers. A typical indentured servant's service lasts for 1 year, though some stay on longer with a Profit in exchange for another, more substantial loan. Indentured servants do not normally enter dungeons or other dangerous areas, though they can be paid to do so (doubling the servant's CPA cost); even under these conditions, however, they are noncombatants and flee if threatened.</p>
<p><strong className="hl">5 TPA, 1 CPA:</strong> Acquire an indentured servant to work as a valet (LN <Link to="/npcclass/expert">expert</Link> of half the character's level). A valet caters to the character's whims and learns to anticipate the character's needs. A valet understands the rules and requirements of following the book of prophecy, handles mundane tasks, keeps several sets of clean gloves and garments on hand for the character, tastes the character's food, ensures that the character maintains appropriate dietary restrictions, and performs other duties as the character dictates.</p>
<p><strong className="hl">5 TPA, 1 CPA:</strong> Acquire an indentured servant to work as a cook (LN expert of half the character's level). A cook is authorized to purchase, prepare, and cook food according to the character's needs; most can also hunt or forage for food in a plains or forest environment should the need arise.</p>
<p><strong className="hl">10 TPA, variable CPA:</strong> Purchase a magical service from the following list: greater scrying (3 CPA), overland flight (1 CPA), scrying (1 CPA), teleport (9 CPA). These costs supersede the <Link to="/rule/faction_costs">normal faction spellcasting costs</Link>.</p>
<p><strong className="hl">10 TPA:</strong> Purchase a masterwork item as if the masterwork cost were half normal (for example, the 300 gp masterwork cost of a weapon is reduced to 150 gp). The character only gets this benefit when purchasing items from a follower of the book of prophecy.</p>
<p><strong className="hl">10 TPA, 1+ CPA:</strong> Acquire a litter and four strong servants (LN commoner 1) to bear the character in the litter. The litter-bearers are willing to work in civilized areas or on roads, but not on rough terrain. Spending an additional 1 CPA means the litter-bearers are 1st-level monks, rather than commoners, and fight to defend the character, even to the death. Spending an additional 2 CPA upgrades the litter to an enclosed palanquin, increases the number of bearers to six, and adds another servant to carry the character's banner and proclaim her arrival at appropriate junctures. The typical term of service for a litter-bearer is 2 years.</p>
<p><strong className="hl">10 TPA, 1 CPA:</strong> Acquire an indentured servant to work as a majordomo (LN <Link to="/npcclass/expert">expert</Link> of half the character's level). The majordomo oversees all of the character's indentured servants, bodyguards, hirelings, and henchmen.</p>
<p><strong className="hl">10 TPA, 2 CPA:</strong> Gain assistance on a failed Diplomacy check to negotiate an agreement. The character may reroll the check 1d4 days later with a +5 bonus. If the second check is successful, the agreement is completed successfully. Using this resource contractually binds the character to give 10% of the proceeds of the deal to the secondary negotiator.</p>
<p><strong className="hl">10 TPA, 3 CPA:</strong> Treat a failed skill check as if the character had rolled a 20. This benefit can only be used on a check the character can take 10 on.</p>
<p><strong className="hl">10 TPA, 4 CPA:</strong> Acquire a loyal bodyguard (a warrior of half the faction member's level) for 1 week. Unlike a standard bodyguard, this black-clad bodyguard is ruthless, amoral, unshakeably loyal to the character, obeys orders without question, and defends the character to the death.</p>
<p><strong className="hl">15 TPA, 1 CPA:</strong> Sell an item for 100% of its full value rather than 50%. The character must spend (in gp) 25% of the value of the item for this benefit.</p>
<p><strong className="hl">50+ CPA:</strong> Obtain a small estate where the character can display her wealth and maintain her standing in society. The estate covers 2 acres and includes an attractive mansion, pleasant furnishings, and a small staff of 1st-level commoners to tend the building and grounds. As a Profit landowner, the character has access to all public buildings (though non-Profit companions must wait on the street). She is treated as living a <Link to="/rule/cost_of_living">wealthy lifestyle</Link>, except that her CPA investment in this reward covers the gp/month cost (no additional payment is needed). She can purchase additional estates or combine them into a single, larger estate for 10 CPA per additional acre. A character who has spent 100 CPA or more on this resource is treated as living an extravagant lifestyle (but still no gp/month payment is needed).</p>
</>};
const _f_second_life = {title: "The Second Life", parent_topics: ["optional_subsystems","factions","faction_list"], siblings: ["f_profiteers","f_antislavery","f_merceneries","f_vangard","f_lawknights","f_bards","f_clans","f_legion","f_old_cults","f_profits","f_second_life","f_imperial","f_gravepath"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 44</Link><br/><strong className="hl">Pathfinder Name:</strong> Risen Guard<br/><strong className="hl">Goal:</strong> Serve the Monarchy<br/><strong className="hl">Alignment:</strong> LN<br/><strong className="hl">Good Class Choices:</strong> Fighter, Monk, Rogue<br/><strong className="hl">Challenging Class Choices:</strong> Barbarian, Cleric, Druid</p>
<h3 id="rule-f_second_life-joining">Joining</h3>
<p>Actually becoming a member of the Second Life requires the extraordinarily unusual circumstance of being raised from the dead at the order of the monarch; a slain person known to be loyal to the crown may be raised to serve him at some point. Valorous royal guards have been known to leave instructions in their wills that should they be slain, they would willingly come back to life to defend the monarch.</p>
<h3 id="rule-f_second_life-gaining-prestige">Gaining Prestige</h3>
<p>Actions that benefit the monarch or thwart attempts to harm him are the best way to attract the attention of the Second Life. Dying while defending the monarch always earns the character 1 PA. To a lesser extent, actions that aid the nation also earn the Second Life's respect.</p>
<h3 id="rule-f_second_life-resources">Resources</h3>
<p>Members of the Second Life must forsake all prior ties, allegiances, and obligations; allies of the group are not required to do so.</p>
<p><strong className="hl">1 TPA, Second Life:</strong> Gain free and unfettered access to any royal library (large town or larger). This gives the character a +5 on Knowledge checks if he spends an hour researching in the library. He can use this resource to make Knowledge checks untrained with the +5 bonus but must spend 1 day researching. This bonus does not stack with the +4 bonus on one check listed <Link to="/rule/faction_costs">here</Link>.</p>
<p><strong className="hl">10 TPA, 1 CPA:</strong> Gain a new appearance and identity when brought back from the dead by the royal morticians. Undergoing this ritual is not required, but it does help distance a new Second Lifer from his past life. It also means the guard is freed of all past debts, obligations, and penalties from his former life. If the guard chooses to abandon his name along with the rest of his identity, he may select the <Link to="/feat/nameless_servitor">Nameless Servitor</Link> feat.</p>
<p><strong className="hl">1 TPA, 16 CPA:</strong> Be raised from the dead by <Link to="/spell/raise_dead">raise dead</Link>. Because of the unique role this ritual has with the Second Life, a slain guard can benefit from this reward even if he doesn't have the CPA or gp to pay for it, in effect going into debt and repaying the cost once he is alive again (an exception to the rule that the Second Life are freed from the debts of their past lives). Until this debt is paid, all earned PA and wealth (other than a meager amount for food and clothing) goes to pay it. Likewise, any PA gained does not affect the character's TPA until the debt is paid. If the character is not actually a Second Lifer when he chooses to use this resource, he becomes one and is thereafter part of the organization - there is no "opting out" of being a Second Lifer, perhaps other than dying and arranging to have some agency other than the crown raise the character.</p>
<p><strong className="hl">10 TPA, 1 CPA:</strong> Barter with an elemental based on the nation's ancient pacts with various elemental clans. This benefit allows the character to make a Bluff, Diplomacy, or Intimidate check against an elemental with an +8 bonus. Even a hostile or controlled elemental may agree to not attack for up to 1 minute if the character making the request is persuasive enough. This bonus does not stack with the +4 bonus on one check listed <Link to="/rule/faction_costs">here</Link>.</p>
<p><strong className="hl">10 TPA, Second Life:</strong> Gain the first organizational rank and a +2 bonus on Intimidate checks against anyone subject to the crown.</p>
<p><strong className="hl">10 TPA, 0+ CPA, 1st rank:</strong> Imprison any ordinary person for up to 24 hours. The character can have the person detained for an additional day by spending 1 CPA or presenting evidence of a specific crime committed by that person. Keeping dangerous or influential prisoners (such as rival adventurers) imprisoned may require spending additional CPA.</p>
<p><strong className="hl">10 TPA, 3 CPA, Second Life:</strong> Requisition the assistance of a specialist (any NPC member of the organization with a class level equal to half the character's level) for 1 week.</p>
<p><strong className="hl">20 TPA, Second Life:</strong> Gain the the second organizational rank and a +2 bonus on Intimidate checks against any person under the crown (this bonus stacks with the bonus from the 1st rank).</p>
<p><strong className="hl">20 TPA, 0+ CPA, 2nd rank:</strong> Confiscate any weapon or potentially dangerous item for 24 hours while in the nation (spending 1 CPA extends this time limit by 24 hours). The item is stored under the watchful eyes of the Second Life for the duration.</p>
<p><strong className="hl">20 TPA, 3 CPA:</strong> Gain the temporary service of an elemental outsider of up to 12 HD as if using <Link to="/spell/planar_binding">planar binding</Link>. The character must negotiate and pay for the elemental's service, though he can spend CPA to have the Second Life pay the price for the service. If the character is a poor negotiator, he can pay 1 CPA to hire a charismatic advocate to argue on his behalf.</p>
<p><strong className="hl">30 TPA, Second Life:</strong> Gain the third and final rank in the organization and a +2 bonus on Intimidate checks against any person under the crown (this bonus stacks with the bonus from all lesser ranks).</p>
<p><strong className="hl">30 TPA, 0+ CPA, 3rd rank:</strong> Imprison any ordinary person for up to 1 week, or an unusual person (such as an adventurer or diplomat, with the exception of the royal family) for up to 24 hours (as per the 1st-rank ability), or confiscate any property (worth up to 10,000 gp) for up to 24 hours (spending 1 CPA extends this time limit by 24 hours).</p>
</>};
const _f_imperial = {title: "Imperial Guard", parent_topics: ["optional_subsystems","factions","faction_list"], siblings: ["f_profiteers","f_antislavery","f_merceneries","f_vangard","f_lawknights","f_bards","f_clans","f_legion","f_old_cults","f_profits","f_second_life","f_imperial","f_gravepath"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 48</Link><br/><strong className="hl">Pathfinder Name:</strong> Ulfen Guard<br/><strong className="hl">Goal:</strong> Protect the Emperor, whoever that may be<br/><strong className="hl">Alignment:</strong> N<br/><strong className="hl">Good Class Choices:</strong> Alchemist, Bard, Sorcerer, Wizard<br/><strong className="hl">Challenging Class Choices:</strong> Barbarian, Fighter, Rogue</p>
<h3 id="rule-f_imperial-joining">Joining</h3>
<p>Only human men and women who have at least half their lineage from a nearby barbaric land (blooded) are allowed to join the Imperial Guard. All others who gain prestige with the faction (non-blooded) are at best "of-the-blood", a status worthy of respect but not full brotherhood with the group.</p>
<h3 id="rule-f_imperial-gaining-prestige">Gaining Prestige</h3>
<p>The Guards respect strength, skill in battle, and acts that protect the life of the Emperor.</p>
<h3 id="rule-f_imperial-resources">Resources</h3>
<p>The primary benefits of allying with the Imperial Guard are peaceful access to the Emperor, combat training with elite warriors, and proximity to the treasures of the two lands.</p>
<p><strong className="hl">10 TPA, 1 CPA:</strong> Arrange a minor, public, courteous, second-hand interaction with the Emperor, such as carrying his cloak, presenting a ceremonial document, or standing closest to him in a public theater. While the Imperial Guard is outside of politics, members understand the value of appearances, and they aren't afraid to profit from their connections or use them to aid an ally. This act makes other nobles and royals favorably disposed toward the character, granting her a +4 bonus on Bluff, Diplomacy, Intimidate, and Knowledge (nobility) checks regarding them. The bonus decreases by 1 each time it is used; after the fourth check (or when 24 hours have passed), the bonus reaches +0 and gives no further benefit.</p>
<p><strong className="hl">15 TPA, 1 CPA:</strong> Gain the assistance of an off-duty member of the Imperial Guard (an NPC barbarian, fighter, ranger, or rogue with a class level equal to half the character's level) for 1 day.</p>
<p><strong className="hl">20 TPA, blooded:</strong> Become a blood brother or sister to one of the Imperial Guard and gain the title "Blood-bound" The Guard only offers this status to those who members believe are strong and honorable. This gives the character access to the headquarters and the common areas of the Imperial Palace (but not permission to bring others along with her), a +2 bonus on Diplomacy checks to gather information in the capital, Knowledge (local) checks regarding the empire, Knowledge (nobility) checks regarding local nobles, and Intimidate checks to influence people from the empire. The character may eat and sleep for free at the headquarters, and she can demand free transport for herself on any ship sailing from the capital to the barbarian lands. The blood oath is an honor not to be accepted lightly. To the barbarians, it is as close as the bond of family. A blood-bound is expected to show bravery, fight with honor, and respect her duty. Betraying the Imperial Guard marks a blood-bound for death, not just among the Imperial Guard, but among all barbarian people.</p>
<p><strong className="hl">20 TPA, 1 CPA, blood-bound or of-the-blood:</strong> Gain access to the Emperor for a quick exchange of words. The Guard doesn't have the authority to put official meetings on the Emperor's schedule, but it can arrange to let a specific person interact with him in a public place for a short time, typically no more than 5 minutes. The Guard only allows people whom members trust to get this close to the Emperor, and if such a person harms him, not only is that person's life forfeit, but the leader of the Guard will take the heads of all the guards responsible for letting that "trusted" person get so close to the Emperor. The character's TPA and CPA with the Imperial Guard decrease by 5 or more if she insults or annoys the Emperor, and plummet to 0 should she harm him.</p>
<p><strong className="hl">20 TPA, 2 CPA, blood-bound or of-the-blood:</strong> Gain the assistance of an off-duty captain of the Imperial Guard (an NPC barbarian, fighter, ranger, or rogue with a class level equal to the PC's level) for 1 day.</p>
<p><strong className="hl">20 TPA, blood-bound or of-the-blood:</strong> Purchase or upgrade magical weapons from the following list at a 10% discount: cold iron, dragon bane, frost, frost brand, giant bane, icy burst, mighty cleaving, returning, throwing, thundering.</p>
<p><strong className="hl">20 TPA, blood-bound or of-the-blood:</strong> Purchase or upgrade magical armor from the following list at a 10% discount: arrow catching, arrow deflection, bashing, dragonhide plate, energy resistance (cold), fortification (all), invulnerability. This resource is only available for light and medium armor (both normal and masterwork quality).</p>
<p><strong className="hl">20 TPA, blood-bound or of-the-blood:</strong> Purchase magic items from the following list at a 10% discount: belt of giant strength, boots of the winterlands, feather token (anchor), figurine of wondrous power (ivory goats), folding boat, horn of blasting, horn of Valenhall (horn of Valhalla).</p>
<p><strong className="hl">30 TPA, non-blooded:</strong> Become a blood brother to one of the Imperial Guard and gain the title "of-the-blood." The Guard only offers this status to those who members believe are strong and honorable, for those of-the-blood must be a respectable and trustworthy person despite her non-blooded heritage. This gives the character the same benefits and responsibilities as a blood-bound (see above).</p>
<p><strong className="hl">35 TPA, 10 CPA, blood-bound or of-the-blood:</strong> Obtain a baculum ring from the Imperial Guard. As part of their arrangement with the Emperor, the barbarian kings annually present the imperial seat with a ring carved from the baculum of a linnorm, and the Emperor normally awards it to an exceptional member of the Guard. Over the centuries, nearly a hundred of these have been awarded and have since been passed down through family lines. A few dozen more belong to the Imperial Guard itself and are awarded at the discretion of the leader. Those lucky enough to own one consider it a high honor, and all who recognize the ring greatly respect the wearer. The rightful wearer of a baculum ring gains a +1 morale bonus on attack rolls and saves against fear effects; this is a nonmagical effect. The wearer gains a +2 bonus on Diplomacy and Intimidate checks to influence someone who recognizes the nature of the ring. The ring is of masterwork quality and is suitable for use as a sorcerer or wizard's arcane bond.</p>
</>};
const _f_gravepath = {title: "The Gravepath", parent_topics: ["optional_subsystems","factions","faction_list"], siblings: ["f_profiteers","f_antislavery","f_merceneries","f_vangard","f_lawknights","f_bards","f_clans","f_legion","f_old_cults","f_profits","f_second_life","f_imperial","f_gravepath"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 52</Link><br/><strong className="hl">Pathfinder Name:</strong> Whispering Way<br/><strong className="hl">Goal:</strong> Kill all life, let the undead rule the world<br/><strong className="hl">Alignment:</strong> NE<br/><strong className="hl">Good Class Choices:</strong> Cleric, Fighter, Wizard (necromancer)<br/><strong className="hl">Challenging Class Choices:</strong> Bard, Druid</p>
<h3 id="rule-f_gravepath-resources">Resources</h3>
<p>The Gravepath provides resources focused on the damnable path of transforming the living into undead. Over the centuries, the faction has amassed thousands of horrifying and aberrant secrets. Since much of its philosophy derides the written word, disciples rely on their fellow faction members to pass along their grim philosophies. The source of their knowledge lies in the warped minds of powerful undead lords known as lore keepers who each dedicate themselves to memorizing and mastering a single aspect of the philosophy and its practices. Lore keepers are the primary individuals sought by faction members requiring aid.</p>
<p><strong className="hl">5 TPA, variable CPA:</strong> Purchase a magical service from the following list: animate dead (4 CPA, up to 10 HD of uncontrolled skeletons or zombies), clone (24 CPA), desecrate (1 CPA), false life (1 CPA), inflict critical wounds (2 CPA), inflict serious wounds (1 CPA).</p>
<p><strong className="hl">5 TPA, 1 CPA:</strong> Consult a necromancer or lore keeper and gain a +10 bonus on one Knowledge (arcana) check relating to necromancy magic or Knowledge (religion) check relating to undead. The character can make this check untrained (as if using a library). This benefit does not stack with the +4 bonus on one check listed <Link to="/rule/faction_costs">here</Link>.</p>
<p><strong className="hl">5 TPA, 5 CPA:</strong> Gain a permanent +2 bonus on Knowledge (arcana) relating to necromancy magic or Knowledge (religion) check relating to undead. This benefit requires 1 week of study with a lore keeper. It does not stack with the +4 bonus on one check listed <Link to="/rule/faction_costs">here</Link>.</p>
<p><strong className="hl">10 CPA:</strong> Change a sorcerer's bloodline to undead or a wizard's arcane school to necromancy. This change requires an 8-hour ritual and inflicts 5 negative levels on the character (these levels may be healed or recovered normally or with magic).</p>
<p><strong className="hl">15 TPA:</strong> Purchase or upgrade weapons from the following list at a 10% discount: frost, ghost touch, icy burst, life drinker, nine lives stealer, silver weapons, sword of life stealing, unholy.</p>
<p><strong className="hl">15 TPA:</strong> Purchase or upgrade magical armor or shields from the following list at a 10% discount: absorbing shield, caster's shield, energy resistance (cold), ghost touch, undead controlling.</p>
<p><strong className="hl">15 TPA:</strong> Purchase magic items from the following list at a 10% discount: darkskull, hand of glory, hand of the mage, phylactery of negative channeling, robe of bones, staff of necromancy.</p>
<p><strong className="hl">15 TPA, 1 CPA:</strong> Gain access to a spellbook, other magical document, or a lore keeper for the purposes of learning or researching one necromancy spell. This benefit does not require a Spellcraft check or any additional transcription costs. Some of these writings contain versions of the spells that are 1-2 levels lower than the normal version of the spell (such as a level 3 version of enervation), arcane versions of divine spells (or vice versa), or even necromantic versions of spells that normally belong in another school (such as a necromancy-school wall of ice spell). These versions require the caster to be undead; otherwise they inflict negative levels on the caster when cast.</p>
<p><strong className="hl">15 TPA, 1 CPA:</strong> Transform the character's <Link to="/ability/familiar">familiar</Link> into an undead version of its living self. This change requires an 8-hour ritual. The familiar's type changes to undead but it retains all of its other familiar abilities. This does not work on familiars of the construct or outsider type (such as imps and quasits from the <Link to="/feat/improved_familiar">Improved Familiar</Link> feat).</p>
<p><strong className="hl">15 TPA, 2+ CPA:</strong> Perform independent spell research to create a new necromancy spell. This research takes 1 week, and the cost is 2 CPA per spell level of the new spell. This cost replaces the normal <Link to="/rule/creating_a_spell">1,000 gp per week per spell level cost</Link>.</p>
<p><strong className="hl">10 TPA, 3 CPA:</strong> Gain the assistance of a specialist (any NPC member of the organization with HD equal to half the character's level) for 1 week.</p>
<p><strong className="hl">20 TPA, 2 CPA:</strong> Gain the service of an undead homunculus. This creature has all the abilities of a standard (construct) homunculus except its type is undead. The character must pay for all the normal costs associated with creating a homunculus.</p>
<p><strong className="hl">20 TPA, 3 CPA:</strong> Arrange a conjuring of an extraplanar undead (such as a <Link to="/monster/devourer">devourer</Link>) or an incorporeal undead in a ritual similar to <Link to="/spell/planar_ally">planar ally</Link> or <Link to="/spell/planar_binding">planar binding</Link>. The character must negotiate and pay for the undead's service, though he can spend CPA to have disciples of the Path pay the price for the service. If the character is a poor negotiator, he can pay 1 CPA to hire a charismatic advocate to bargain on his behalf. If the creature has the ability to create spawn, the spawn are not under the control of the character.</p>
<p><strong className="hl">20 TPA, 3 CPA:</strong> Create an undead creature as if using create undead. The character must provide the material components for the ritual.</p>
<p><strong className="hl">30 TPA, 5+ CPA:</strong> Undergo a ritual that transforms the character into a specific type of corporeal intelligent undead, such as a ghoul, mummy, skeletal champion, or zombie lord. The CPA cost is equal to 5 times the total of the Hit Dice of the desired undead form plus the character's Hit Dice. This transformation requires an 8-hour ritual and the character must provide material components as if creating an undead of the desired type using the create undead spell.</p>
<p><strong className="hl">30 TPA, 5 CPA:</strong> Learn how to create a lich's phylactery with the Craft Wondrous Item feat.</p>
</>};
const _faction_costs = {title: "Standard Faction Costs", parent_topics: ["optional_subsystems","factions"], siblings: ["faction_basics","faction_prestige","faction_list","faction_costs"], jsx: <><p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 54</Link></p>
<h3 id="rule-faction_costs-total-prestige-award-and-item-purchases">Total Prestige Award and Item Purchases</h3>
<p>Under normal circumstances, PCs should always be able to purchase certain items from their faction, even if the cost exceeds the value on this table. These items are the following: equipment from the Pathfinder RPG Core Rulebook (including equipment made from special materials, such as mithral); +1 weapons, armor, and shields; and 0- or 1st-level oils, potions, and scrolls at caster level 1.</p>
<ScrollContainer id="rule-faction_costs--table-0"><table>
<thead>
<tr>
<th>TPA</th>
<th>Maximum Item Cost</th>
</tr>
</thead>
<tbody><tr>
<td>4</td>
<td>500 gp</td>
</tr>
<tr>
<td>9</td>
<td>1,500 gp</td>
</tr>
<tr>
<td>13</td>
<td>3,000 gp</td>
</tr>
<tr>
<td>18</td>
<td>5,250 gp</td>
</tr>
<tr>
<td>22</td>
<td>8,000 gp</td>
</tr>
<tr>
<td>27</td>
<td>11,750 gp</td>
</tr>
<tr>
<td>31</td>
<td>16,500 gp</td>
</tr>
<tr>
<td>36</td>
<td>23,000 gp</td>
</tr>
<tr>
<td>40</td>
<td>31,000 gp</td>
</tr>
<tr>
<td>45</td>
<td>41,000 gp</td>
</tr>
<tr>
<td>49</td>
<td>54,000 gp</td>
</tr>
<tr>
<td>54</td>
<td>70,000 gp</td>
</tr>
<tr>
<td>58</td>
<td>92,500 gp</td>
</tr>
<tr>
<td>63</td>
<td>120,000 gp</td>
</tr>
<tr>
<td>67</td>
<td>157,500 gp</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-faction_costs-weekly-services">Weekly Services</h3>
<p>Services requiring NPCs or animals include appropriate gear for their class and level and all living expenses for them. For double CPA cost, these NPCs serve for up to 1 month. The character is expected to return any NPCs or mounts and their gear to the faction when finished with them. If the PC returns less than 50% of the mounts, gear, or NPCs acquired, she loses 1 TPA (and 3 TPA if none are returned).</p>
<ScrollContainer id="rule-faction_costs--table-1"><table>
<thead>
<tr>
<th>CPA Cost</th>
<th>Benefit</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>Mounts (light riding horse, camel, mule, or pony) for the PC and up to one companion per level</td>
</tr>
<tr>
<td>1</td>
<td>Boat travel (freshwater or coastal transport for the PC and up to 10 others; includes a crew of four 1st-level experts)</td>
</tr>
<tr>
<td>1</td>
<td>Work detail of 50 1st-level commoners</td>
</tr>
<tr>
<td>1</td>
<td>Skilled craftsman (expert of 1/2 the faction member's level)</td>
</tr>
<tr>
<td>2</td>
<td>Bodyguard (warrior of 1/2 the faction member's level)</td>
</tr>
<tr>
<td>2</td>
<td>Ship travel (deep water transport for the PC and up to 20 others; includes a crew of 10 1st-level experts)</td>
</tr>
<tr>
<td>2</td>
<td>Squad of 10 1st-level warriors</td>
</tr>
<tr>
<td>2</td>
<td>Combat trained mounts (light or heavy warhorses or riding dogs) for the PC and up to one companion per level</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-faction_costs-spellcasting">Spellcasting</h3>
<p>Spellcasting is at minimum caster level.</p>
<ScrollContainer id="rule-faction_costs--table-2"><table>
<thead>
<tr>
<th>CPA Cost</th>
<th>Benefit</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td><Link to="/spell/dispel_magic">Dispel magic</Link></td>
</tr>
<tr>
<td>1</td>
<td><Link to="/spell/gentle_repose">Gentle repose</Link></td>
</tr>
<tr>
<td>1</td>
<td><Link to="/spell/lesser_restoration">Lesser restoration</Link></td>
</tr>
<tr>
<td>1</td>
<td><Link to="/spell/make_whole">Make whole</Link></td>
</tr>
<tr>
<td>1</td>
<td><Link to="/spell/remove_blindness_deafness">Remove blindness/deafness</Link></td>
</tr>
<tr>
<td>1</td>
<td><Link to="/spell/remove_curse">Remove curse</Link></td>
</tr>
<tr>
<td>1</td>
<td><Link to="/spell/remove_disease">Remove disease</Link></td>
</tr>
<tr>
<td>1</td>
<td><Link to="/spell/remove_paralysis">Remove paralysis</Link></td>
</tr>
<tr>
<td>1</td>
<td><Link to="/spell/sending">Sending</Link></td>
</tr>
<tr>
<td>2</td>
<td><Link to="/spell/atonement">Atonement</Link> (8 CPA to restore cleric/druid powers)</td>
</tr>
<tr>
<td>2</td>
<td><Link to="/spell/break_enchantment">Break enchantment</Link></td>
</tr>
<tr>
<td>2</td>
<td><Link to="/spell/cure_critical_wounds">Cure critical wounds</Link></td>
</tr>
<tr>
<td>2</td>
<td><Link to="/spell/divination">Divination</Link></td>
</tr>
<tr>
<td>2</td>
<td><Link to="/spell/greater_dispel_magic">Greater dispel magic</Link></td>
</tr>
<tr>
<td>2</td>
<td><Link to="/spell/neutralize_poison">Neutralize poison</Link></td>
</tr>
<tr>
<td>2</td>
<td><Link to="/spell/overland_flight">Overland flight</Link></td>
</tr>
<tr>
<td>2</td>
<td><Link to="/spell/restoration">Restoration</Link> (4 CPA to dispel a permanent negative level)</td>
</tr>
<tr>
<td>2</td>
<td><Link to="/spell/scrying">Scrying</Link></td>
</tr>
<tr>
<td>4</td>
<td><Link to="/spell/regenerate">Regenerate</Link></td>
</tr>
<tr>
<td>4</td>
<td><Link to="/spell/analyze_dweomer">Analyze dweomer</Link></td>
</tr>
<tr>
<td>4</td>
<td><Link to="/spell/greater_scrying">Greater scrying</Link></td>
</tr>
<tr>
<td>5</td>
<td><Link to="/spell/commune">Commune</Link></td>
</tr>
<tr>
<td>5</td>
<td><Link to="/spell/contact_other_plane">Contact other plane</Link></td>
</tr>
<tr>
<td>5</td>
<td><Link to="/spell/legend_lore">Legend lore</Link></td>
</tr>
<tr>
<td>7</td>
<td><Link to="/spell/teleport_object">Teleport object</Link></td>
</tr>
<tr>
<td>7</td>
<td><Link to="/spell/vision">Vision</Link></td>
</tr>
<tr>
<td>10</td>
<td><Link to="/spell/teleport">Teleport</Link></td>
</tr>
<tr>
<td>15</td>
<td><Link to="/spell/plane_shift">Plane shift</Link></td>
</tr>
<tr>
<td>16</td>
<td><Link to="/spell/greater_restoration">Greater restoration</Link></td>
</tr>
<tr>
<td>16</td>
<td><Link to="/spell/raise_dead">Raise dead</Link></td>
</tr>
<tr>
<td>18</td>
<td><Link to="/spell/discern_location">Discern location</Link></td>
</tr>
<tr>
<td>20</td>
<td><Link to="/spell/greater_teleport">Greater teleport</Link></td>
</tr>
<tr>
<td>32</td>
<td><Link to="/spell/resurrection">Resurrection</Link></td>
</tr>
<tr>
<td>75</td>
<td><Link to="/spell/soul_bind">Soul bind</Link></td>
</tr>
<tr>
<td>77</td>
<td><Link to="/spell/true_resurrection">True Resurrection</Link></td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-faction_costs-miscellaneous-expenses">Miscellaneous Expenses</h3>
<ScrollContainer id="rule-faction_costs--table-3"><table>
<thead>
<tr>
<th>CPA Cost</th>
<th>Benefit</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>+4 to one skill check</td>
</tr>
<tr>
<td>1</td>
<td>Purchase a single item worth 375 gp<sup><InnerLink showBacklink="backlink-rule-faction_costs-ref-2-1" id="rule-faction_costs-ref-2-1" data-hash-target to="rule-faction_costs-2">1</InnerLink></sup></td>
</tr>
<tr>
<td>1<sup><InnerLink showBacklink="backlink-rule-faction_costs-ref-1-1" id="rule-faction_costs-ref-1-1" data-hash-target to="rule-faction_costs-1">2</InnerLink></sup></td>
<td>Wealthy cost of living for 1 month</td>
</tr>
<tr>
<td>2</td>
<td>Purchase a single item worth 750 gp<sup><InnerLink showBacklink="backlink-rule-faction_costs-ref-2-2" id="rule-faction_costs-ref-2-2" data-hash-target to="rule-faction_costs-2">1</InnerLink></sup></td>
</tr>
<tr>
<td>2<sup><InnerLink showBacklink="backlink-rule-faction_costs-ref-1-2" id="rule-faction_costs-ref-1-2" data-hash-target to="rule-faction_costs-1">2</InnerLink></sup></td>
<td>Extravagant cost of living for 1 month</td>
</tr>
<tr>
<td>5</td>
<td>Retrieval of a dead body to a faction-controlled location</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-faction_costs-label">Footnotes</h3>
<ol>
<li id="rule-faction_costs-2">
<p>Characters can't spend multiple PA for more items costing more than 750 gp. <InnerLink id="backlink-rule-faction_costs-ref-2-1" data-hash-target to="rule-faction_costs-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink> <InnerLink id="backlink-rule-faction_costs-ref-2-2" data-hash-target to="rule-faction_costs-ref-2-2" aria-label="Back to reference 2-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="rule-faction_costs-1">
<p>Cost of living covers 1 month and is detailed <Link to="/rule/cost_of_living">here</Link>. <InnerLink id="backlink-rule-faction_costs-ref-1-1" data-hash-target to="rule-faction_costs-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-rule-faction_costs-ref-1-2" data-hash-target to="rule-faction_costs-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _hero_points = {title: "Hero Points", parent_topics: ["optional_subsystems"], siblings: ["affiliations","bargaining","contacts","downtime","factions","hero_points","honor","influence","investment","primal_magic","provision_points","relationships","reputation_and_fame","research","spell_alterations","stamina_and_combat_tricks","the_hunger"], subtopics: ["awarding_hero_points","using_hero_points","hero_points_for_gms","antiheroes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 322</Link></p>
<p>There are moments in any struggle that influence the outcome. Does the brave warrior lay low the villain before he can finish casting a devastating spell? Does the sly rogue avoid detection as she sneaks into the giant chieftain's lair? Does the pious cleric finish casting her healing spell before the rain of arrows ends the life of her companions? Just a few die rolls decide each of these critical moments, and while failure is always a possibility, true heroes find a way to succeed, despite the odds. Hero points represent this potential for greatness. They give heroes the chance to succeed even when the dice turn against them.</p>
<p>Hero points are only awarded to player characters. NPCs, animal companions, familiars, cohorts, and mounts do not receive hero points. Unlike other points in the game, hero points do not renew over time or with rest. Once spent, they are gone forever. Hero points are awarded as a character gains levels or whenever a character accomplishes a truly heroic feat. The GM is the final arbiter on the award and use of hero points.</p>
</>};
const _awarding_hero_points = {title: "Awarding Hero Points", parent_topics: ["optional_subsystems","hero_points"], siblings: ["awarding_hero_points","using_hero_points","hero_points_for_gms","antiheroes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 322</Link></p>
<p>Each character begins play with 1 hero point, regardless of her level. In addition, whenever a character gains a level, she earns an additional hero point. Aside from these basic rules, awarding additional hero points is up to the GM. The following options are just some of the ways that a GM might award additional hero points.</p>
<p><strong className="hl">Character Story:</strong> GMs can award a hero point for the completion of a written character backstory. This reward encourages players to take an active role in the history of the game. In addition, the GM can use this backstory to generate a pivotal moment for your character concerning his past. When this key event is resolved, the GM can reward another hero point. Alternatively, the GM might award a hero point for painting a miniature or drawing a character portrait in the likeness of your character, helping the rest of the group visualize your hero.</p>
<p><strong className="hl">Completing Plot Arcs:</strong> The GM might award a hero point to each of the PCs who were involved in completing a major chapter or arc in the campaign story. These hero points are awarded at the conclusion of the arc if the PCs were successful or advanced the story in a meaningful way.</p>
<p><strong className="hl">Faith:</strong> In a campaign where the gods play an important role in every character's life, hero points might represent their favor. In such a setting, the GM can award hero points to characters whenever they uphold the tenets of their faith in a grand way, or whenever they take on one of the faith's major enemies. Such hero points might be temporary, and if not spent on the task at hand, they fade away.</p>
<p><strong className="hl">Group Service:</strong> The GM can award hero points for acts outside the game as well. Buying pizza for the group, helping to clean up afterwards, or even hosting the game for a night might be worth a hero point. This sort of hero point should be given out of generosity, not as a payment.</p>
<p><strong className="hl">Heroic Acts:</strong> Whenever a character performs an exceptionally heroic act, she can be awarded a hero point. This might include anything from slaying an evil dragon when the rest of the group has fled to rescuing townsfolk from a burning building despite being terribly wounded. It does not have to be related to combat. Convincing the reticent king to send troops to help with a bandit problem or successfully jumping a wide chasm might earn a character a hero point, depending on the circumstances. Note that a hero point should only be awarded if the PC involved did not spend a hero point to accomplish the task.</p>
<p><strong className="hl">Return from the Dead:</strong> When a character dies, she does not lose any hero points she has accumulated. If she died with no hero points remaining, she gains 1 hero point when she is brought back from the dead through powerful magic, such as <Link to="/spell/raise_dead">raise dead</Link> or <Link to="/spell/resurrection">resurrection</Link>.</p>
<p><strong className="hl">Maximum Hero Points:</strong> Characters can have no more than 3 hero points at any one time. Excess hero points are lost.</p>
</>};
const _using_hero_points = {title: "Using Hero Points", parent_topics: ["optional_subsystems","hero_points"], siblings: ["awarding_hero_points","using_hero_points","hero_points_for_gms","antiheroes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 323</Link></p>
<p>Hero points can be spent at any time and do not require an action to use (although the actions they modify consume part of your character's turn as normal). You cannot spend more than 1 hero point during a single round of combat. Whenever a hero point is spent, it can have any one of the following effects.</p>
<p><strong className="hl">Act Out of Turn:</strong> You can spend a hero point to take your turn immediately. Treat this as a readied action, moving your initiative to just before the currently acting creature. You may only take a move or a standard action on this turn.</p>
<p><strong className="hl">Bonus:</strong> If used before a roll is made, a hero point grants you a +8 luck bonus to any one d20 roll. If used after a roll is made, this bonus is reduced to +4. You can use a hero point to grant this bonus to another character, as long as you are in the same location and your character can reasonably affect the outcome of the roll (such as distracting a monster, shouting words of encouragement, or otherwise aiding another with the check). Hero points spent to aid another character grant only half the listed bonus (+4 before the roll, +2 after the roll).</p>
<p><strong className="hl">Extra Action:</strong> You can spend a hero point on your turn to gain an additional standard or move action this turn.</p>
<p><strong className="hl">Inspiration:</strong> If you feel stuck at one point in the adventure, you can spend a hero point and petition the GM for a hint about what to do next. If the GM feels that there is no information to be gained, the hero point is not spent.</p>
<p><strong className="hl">Recall:</strong> You can spend a hero point to recall a spell you have already cast or to gain another use of a special ability that is otherwise limited. This should only be used on spells and abilities possessed by your character that recharge on a daily basis.</p>
<p><strong className="hl">Reroll:</strong> You may spend a hero point to reroll any one d20 roll you just made. You must take the results of the second roll, even if it is worse.</p>
<p><strong className="hl">Special:</strong> You can petition the GM to allow a hero point to be used to attempt nearly anything that would normally be almost impossible. Such uses are not guaranteed and should be considered carefully by the GM. Possibilities include casting a single spell that is one level higher than you could normally cast (or a 1st-level spell if you are not a spellcaster), making an attack that blinds a foe or bypasses its damage reduction entirely, or attempting to use Diplomacy to convince a raging dragon to give up its attack. Regardless of the desired action, the attempt should be accompanied by a difficult check or penalty on the attack roll. No additional hero points may be spent on such an attempt, either by the character or her allies.</p>
<p><strong className="hl">Cheat Death:</strong> A character can spend 2 hero points to cheat death. How this plays out is up to the GM, but generally the character is left alive, with negative hit points but stable. For example, a character is about to be slain by a critical hit from an arrow. If the character spends 2 hero points, the GM decides that the arrow pierced the character's holy symbol, reducing the damage enough to prevent him from being killed, and that he made his stabilization roll at the end of his turn. Cheating death is the only way for a character to spend more than 1 hero point in a turn. The character can spend hero points in this way to prevent the death of a familiar, animal companion, eidolon, or special mount, but not another character or NPC.</p>
</>};
const _hero_points_for_gms = {title: "Hero Points for GMs", parent_topics: ["optional_subsystems","hero_points"], siblings: ["awarding_hero_points","using_hero_points","hero_points_for_gms","antiheroes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 324</Link></p>
<p>Although all of the options presented here should be carefully considered before they are added to your game, hero points deserve closer inspection. Although hero points do not drastically increase the power of the PCs, they do grant the PCs the ability to greatly increase their chances of success during critical moments. While the game itself is set up to give the player characters an edge, hero points take that a bit further, possibly more so than you might be comfortable with.</p>
<p>The value to hero points is that they add dramatic tension to the climax of your game. Most uses of hero points do not guarantee success, making the moment they are used even more important to the players. Hero points are a very limited resource and their use should be described with additional detail and dramatic style. Used in this way, they can help create very memorable sessions for both you and your players.</p>
<p>Although NPCs do not generally receive hero points, there are ways that they can use these mechanics. A number of spells and magic items, as well as the Hero's Fortune feat, grant hero points to a character. Such hero points should be used sparingly, and should be reserved for major villains or truly important characters. If you use them too much, the players will begin to resent the system, making it more of a problem than an opportunity to enhance the game.</p>
</>};
const _antiheroes = {title: "Antiheroes", parent_topics: ["optional_subsystems","hero_points"], siblings: ["awarding_hero_points","using_hero_points","hero_points_for_gms","antiheroes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 324</Link></p>
<p>A PC can elect not to use the hero point system, instead relying more on his skills and abilities. Such characters do not receive hero points, regardless of the source, and can never benefit from their use. In exchange, such characters receive a bonus feat at 1st level. The option to allow such antiheroes in the game is subject to GM discretion.</p>
</>};
const _honor = {title: "Honor", parent_topics: ["optional_subsystems"], siblings: ["affiliations","bargaining","contacts","downtime","factions","hero_points","honor","influence","investment","primal_magic","provision_points","relationships","reputation_and_fame","research","spell_alterations","stamina_and_combat_tricks","the_hunger"], subtopics: ["honor_points","gaining_and_losing_honor","spending_honor","consequences_of_losing_honor"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 160</Link></p>
<p>Beyond life and death, beyond good and evil, there is honor. It is the abode of the eternal, which none can take but which can be destroyed through a single rash act. It is a measure of one's place within a society, a status known to all and sought by many. Whether in a samurai culture, the frozen viking wastes of the northlands, or the dizzying court intrigues of a byzantine kingdom, honor provides an anchor and stable foundations for your life's work. If you lack honor, others view you as faithless, untrustworthy, disloyal, and unfair. Honor influences reputation, status, and legend, but transcends them all.</p>
<p>Who has honor varies from culture to culture. In some, anyone from the lowliest peasant to the emperor can pursue honor, and a life lived in accordance with honor is the highest achievement. In another land, honor is a game only for nobility, a scoring method in their battles over status. Honor may be purely a warrior's code or a more primitive, largely unspoken understanding between combatants.</p>
<p>In some lands, the use of poison is an instant blight on one's honor. In others, its subtle and effective use might be a mark of the truly civilized person who wants to avert war and avoid innocent bloodshed. The general who fights until his last soldier falls is counted as honorable in some realms; in others, it is the general who surrenders, recognizing that sacrificing her soldiers' lives would be a waste. A criminal's code of honor is different from a priest's, and a school of wizards may have different rules for honor than a cabal of sorcerers.</p>
<p>No matter what form it takes, honor is recognition of a code larger than the individual, a willingness to subsume one's desires in the service of that code. Honor requires self-sacrifice. It is often neither the most reasonable course of action nor the most practical. It comes with a cost, but is its own reward. Your honor must be protected and upheld at all times; allowing another to besmirch it is almost as great an affront as you performing a dishonorable act. A dishonorable person may try to use your honorable code against you, but honor does not equate to stupidity.</p>
<p>This section presents a system for representing honor, as well as examples of various honor codes, including the chivalric code, the criminal code, and the samurai code.</p>
</>};
const _honor_points = {title: "Honor Points", parent_topics: ["optional_subsystems","honor"], siblings: ["honor_points","gaining_and_losing_honor","spending_honor","consequences_of_losing_honor"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 160</Link></p>
<p>Honor is represented by points on a scale from 0 to 100. A score of 0 represents a person who is seen as completely untrustworthy, willing to sacrifice anything and anyone for even a momentary gain. A score of 100 represents a person of legendary stature whose reputation is without blemish. Honor is not a measurement of alignment, fame, or goodwill so much as a gauge of loyalty, trustworthiness, and fairness; one could be a kindhearted-but-flighty shogun with 0 honor points, or a cruel-but-stalwart monk with 100 honor points.</p>
<p><strong className="hl">NPC Base Honor Points:</strong> An NPC's base number of honor points is equal to its CR &times; 5. The GM modifies this value according to the Gaining and Losing Honor section. An NPC who deviates from the strictures of his society may have an honor score very different from this base value. Most NPCs' honor scores rarely change, though the GM might choose to bestow fortune or disgrace on a particular NPC as a story or adventure hook for the PCs.</p>
<p><strong className="hl">PC Base Honor Points:</strong> You start with a number of honor points equal to your Charisma score plus your character level. For example, a 1st-level PC with a Charisma score of 13 starts with an honor score of 14. Whenever your experience level or Charisma permanently changes, adjust your honor score accordingly. You can also gain or lose honor points during play.</p>
</>};
const _gaining_and_losing_honor = {title: "Gaining and Losing Honor", parent_topics: ["optional_subsystems","honor"], siblings: ["honor_points","gaining_and_losing_honor","spending_honor","consequences_of_losing_honor"], subtopics: ["chivalric_code","criminal_code","political_code","samurai_code","tribal_code"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 161</Link></p>
<p>You gain and lose honor points through events. Some events affect all PCs in the party (such as destroying a demon that's attacking a village), and others only affect you (such as losing a duel against a less honorable rival). Most of these events require witnesses who spread the word of what happened; if nobody outside sees the event, and nobody in the party speaks of it, it has no effect on your honor. The GM may decide that a delay of 1d6 days or more is appropriate for a change in honor, reflecting the time needed for news to travel.</p>
<p>A single event can earn you honor points for multiple reasons. For example, if you're a paladin using the chivalric code and your party's APL is 8, defeating a CR 11 hezrou demon earns everyone in the party 1 honor point for the "party overcomes a challenging encounter" general event and you earn 2 honor points for the "defeat a challenging monster of the opposite alignment" chivalric event. The tables of honor point adjustments for the various types of codes provide examples of events that would cause you to gain or lose honor points. The honor point values are guidelines; the GM should adjust them as appropriate to the situation and campaign.</p>
<h3 id="rule-gaining_and_losing_honor-general-honor-events">General Honor Events</h3>
<p>These events are appropriate for most honor codes, including the individual codes that follow.</p>
<ScrollContainer id="rule-gaining_and_losing_honor--table-0"><table>
<thead>
<tr>
<th>Event</th>
<th>Honor Points</th>
</tr>
</thead>
<tbody><tr>
<td>Complete a CR-appropriate Adventure Path</td>
<td>+10</td>
</tr>
<tr>
<td>Complete a noble task for an honorable NPC (50+ honor points) and tell no one</td>
<td>+2</td>
</tr>
<tr>
<td>Roll 30 or higher on a Craft check to create a work of art or masterwork item<sup><InnerLink showBacklink="backlink-rule-gaining_and_losing_honor-ref-1-1" id="rule-gaining_and_losing_honor-ref-1-1" data-hash-target to="rule-gaining_and_losing_honor-1">1</InnerLink></sup></td>
<td>+2</td>
</tr>
<tr>
<td>Roll 30 or higher on a Diplomacy or Intimidate check<sup><InnerLink showBacklink="backlink-rule-gaining_and_losing_honor-ref-1-2" id="rule-gaining_and_losing_honor-ref-1-2" data-hash-target to="rule-gaining_and_losing_honor-1">1</InnerLink></sup></td>
<td>+2</td>
</tr>
<tr>
<td>Roll 30 or higher on a Perform check<sup><InnerLink showBacklink="backlink-rule-gaining_and_losing_honor-ref-1-3" id="rule-gaining_and_losing_honor-ref-1-3" data-hash-target to="rule-gaining_and_losing_honor-1">1</InnerLink></sup></td>
<td>+2</td>
</tr>
<tr>
<td>Complete a CR-appropriate adventure<sup><InnerLink showBacklink="backlink-rule-gaining_and_losing_honor-ref-2-1" id="rule-gaining_and_losing_honor-ref-2-1" data-hash-target to="rule-gaining_and_losing_honor-2">2</InnerLink></sup></td>
<td>+1</td>
</tr>
<tr>
<td>Craft a powerful magic item</td>
<td>+1<sup><InnerLink showBacklink="backlink-rule-gaining_and_losing_honor-ref-3-1" id="rule-gaining_and_losing_honor-ref-3-1" data-hash-target to="rule-gaining_and_losing_honor-3">3</InnerLink></sup></td>
</tr>
<tr>
<td>Destroy an evil or dangerous magic item</td>
<td>+1<sup><InnerLink showBacklink="backlink-rule-gaining_and_losing_honor-ref-4-1" id="rule-gaining_and_losing_honor-ref-4-1" data-hash-target to="rule-gaining_and_losing_honor-4">4</InnerLink></sup></td>
</tr>
<tr>
<td>Party overcomes a challenging encounter (CR 3 or more higher than APL)</td>
<td>+1</td>
</tr>
<tr>
<td>Willingly break one of the tenets of your code of honor</td>
<td>-2</td>
</tr>
<tr>
<td>Party flees an easy combat challenge (CR lower than APL)</td>
<td>-3</td>
</tr>
<tr>
<td>Slander a person with a higher honor score</td>
<td>-4</td>
</tr>
<tr>
<td>Party loses an easy combat challenge (CR lower than APL)</td>
<td>-5</td>
</tr>
<tr>
<td>Commit an act of treason or betray an honorable lord</td>
<td>-10</td>
</tr>
<tr>
<td>Be directly responsible for the death of an honorable ally or loved one under your protection</td>
<td>-20</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-gaining_and_losing_honor-label">Footnotes</h3>
<ol>
<li id="rule-gaining_and_losing_honor-1">
<p>You can gain honor points this way once per month. <InnerLink id="backlink-rule-gaining_and_losing_honor-ref-1-1" data-hash-target to="rule-gaining_and_losing_honor-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-rule-gaining_and_losing_honor-ref-1-2" data-hash-target to="rule-gaining_and_losing_honor-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-gaining_and_losing_honor-ref-1-3" data-hash-target to="rule-gaining_and_losing_honor-ref-1-3" aria-label="Back to reference 1-3">↩<sup>3</sup></InnerLink></p>
</li>
<li id="rule-gaining_and_losing_honor-2">
<p>About the length of a 32- or 48-page published adventure. <InnerLink id="backlink-rule-gaining_and_losing_honor-ref-2-1" data-hash-target to="rule-gaining_and_losing_honor-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="rule-gaining_and_losing_honor-3">
<p>Per 40,000 gp of the item's price. <InnerLink id="backlink-rule-gaining_and_losing_honor-ref-3-1" data-hash-target to="rule-gaining_and_losing_honor-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
<li id="rule-gaining_and_losing_honor-4">
<p>Per 40,000 gp of the item's price. Artifacts with no price grant 5 honor points for this purpose <InnerLink id="backlink-rule-gaining_and_losing_honor-ref-4-1" data-hash-target to="rule-gaining_and_losing_honor-ref-4-1" aria-label="Back to reference 4-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _chivalric_code = {title: "Chivalric Code", parent_topics: ["optional_subsystems","honor","gaining_and_losing_honor"], siblings: ["chivalric_code","criminal_code","political_code","samurai_code","tribal_code"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 162</Link></p>
<p>These events apply to a chivalric or Arthurian knight's code.</p>
<ScrollContainer id="rule-chivalric_code--table-0"><table>
<thead>
<tr>
<th>Event</th>
<th>Honor Points</th>
</tr>
</thead>
<tbody><tr>
<td>Become a lord or similar rank</td>
<td>+50</td>
</tr>
<tr>
<td>Defeat a noble lord in combat</td>
<td>+20</td>
</tr>
<tr>
<td>Agree to protect and be responsible for the protection of an honorable ally</td>
<td>+10</td>
</tr>
<tr>
<td>Redeem a dishonorable foe</td>
<td>+6</td>
</tr>
<tr>
<td>Acquire vassals</td>
<td>+4</td>
</tr>
<tr>
<td>Offer sanctuary and defend that offer</td>
<td>+3</td>
</tr>
<tr>
<td>Swear fealty to a lord</td>
<td>+3</td>
</tr>
<tr>
<td>Defeat a challenging monster of the opposite alignment (CR 2 or more higher than APL)</td>
<td>+2</td>
</tr>
<tr>
<td>Protect a site holy to your religion against attackers</td>
<td>+2</td>
</tr>
<tr>
<td>Protect an innocent against significant odds (CR 2 or more higher than APL)</td>
<td>+2</td>
</tr>
<tr>
<td>Swear a major oath and uphold it</td>
<td>+2</td>
</tr>
<tr>
<td>Win a tournament</td>
<td>+2</td>
</tr>
<tr>
<td>Accept an enemy's parole</td>
<td>+1</td>
</tr>
<tr>
<td>Participate in a tournament</td>
<td>+1</td>
</tr>
<tr>
<td>Accept an enemy's parole and refuse to honor the ransom</td>
<td>-2</td>
</tr>
<tr>
<td>Be betrayed by a "redeemed" foe</td>
<td>-2</td>
</tr>
<tr>
<td>Be convicted of a petty crime</td>
<td>-2</td>
</tr>
<tr>
<td>Offer sanctuary and betray it</td>
<td>-4</td>
</tr>
<tr>
<td>Swear a major oath and break it</td>
<td>-4</td>
</tr>
<tr>
<td>Win a tournament by cheating</td>
<td>-5</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _criminal_code = {title: "Criminal Code", parent_topics: ["optional_subsystems","honor","gaining_and_losing_honor"], siblings: ["chivalric_code","criminal_code","political_code","samurai_code","tribal_code"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 162</Link></p>
<p>These events apply to a criminal code such as that used by a thieves' guild or ninja clan.</p>
<ScrollContainer id="rule-criminal_code--table-0"><table>
<thead>
<tr>
<th>Event</th>
<th>Honor Points</th>
</tr>
</thead>
<tbody><tr>
<td>Become a guildmaster (city population 25,000+)<sup><InnerLink showBacklink="backlink-rule-criminal_code-ref-1-1" id="rule-criminal_code-ref-1-1" data-hash-target to="rule-criminal_code-1">1</InnerLink></sup></td>
<td>+50</td>
</tr>
<tr>
<td>Become a guildmaster (city population 10,000+)<sup><InnerLink showBacklink="backlink-rule-criminal_code-ref-1-2" id="rule-criminal_code-ref-1-2" data-hash-target to="rule-criminal_code-1">1</InnerLink></sup></td>
<td>+25</td>
</tr>
<tr>
<td>Adopt a specific criminal code<sup><InnerLink showBacklink="backlink-rule-criminal_code-ref-2-1" id="rule-criminal_code-ref-2-1" data-hash-target to="rule-criminal_code-2">2</InnerLink></sup></td>
<td>+4</td>
</tr>
<tr>
<td>End a long-running feud (1+ years) with a criminal more honorable than you<sup><InnerLink showBacklink="backlink-rule-criminal_code-ref-3-1" id="rule-criminal_code-ref-3-1" data-hash-target to="rule-criminal_code-3">3</InnerLink></sup></td>
<td>+3</td>
</tr>
<tr>
<td>Party humiliates an honorable noble<sup><InnerLink showBacklink="backlink-rule-criminal_code-ref-4-1" id="rule-criminal_code-ref-4-1" data-hash-target to="rule-criminal_code-4">4</InnerLink></sup></td>
<td>+3</td>
</tr>
<tr>
<td>Corrupt a high-ranking public official<sup><InnerLink showBacklink="backlink-rule-criminal_code-ref-5-1" id="rule-criminal_code-ref-5-1" data-hash-target to="rule-criminal_code-5">5</InnerLink></sup></td>
<td>+2</td>
</tr>
<tr>
<td>Willingly take the fall for a higher-ranking criminal</td>
<td>+2</td>
</tr>
<tr>
<td>Minstrels willingly sing about your exploits<sup><InnerLink showBacklink="backlink-rule-criminal_code-ref-5-2" id="rule-criminal_code-ref-5-2" data-hash-target to="rule-criminal_code-5">5</InnerLink></sup></td>
<td>+1</td>
</tr>
<tr>
<td>Defeat a legal challenge, be acquitted, or avoid sentencing</td>
<td>+1</td>
</tr>
<tr>
<td>Party agrees to and then commits a significant crime</td>
<td>+1</td>
</tr>
<tr>
<td>Steal a powerful magic item or valuable treasure</td>
<td>+1<sup><InnerLink showBacklink="backlink-rule-criminal_code-ref-6-1" id="rule-criminal_code-ref-6-1" data-hash-target to="rule-criminal_code-6">6</InnerLink></sup></td>
</tr>
<tr>
<td>Be convicted of a significant crime</td>
<td>+1</td>
</tr>
<tr>
<td>Pay minstrels to sing about your exploits</td>
<td>-2</td>
</tr>
<tr>
<td>Willingly work with the authorities to prevent or solve a crime</td>
<td>-2</td>
</tr>
<tr>
<td>Party agrees to commit a crime and then reneges</td>
<td>-3</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-criminal_code-label">Footnotes</h3>
<ol>
<li id="rule-criminal_code-1">
<p>These events don't stack for the same city. If the city's population increases after you become guildmaster, you gain the difference in honor points between the two events. <InnerLink id="backlink-rule-criminal_code-ref-1-1" data-hash-target to="rule-criminal_code-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-rule-criminal_code-ref-1-2" data-hash-target to="rule-criminal_code-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="rule-criminal_code-2">
<p>Such as "I commit only property crimes" or "I never steal, I only commit murder" <InnerLink id="backlink-rule-criminal_code-ref-2-1" data-hash-target to="rule-criminal_code-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="rule-criminal_code-3">
<p>Your honor score and the other criminal's must differ by at least 20 points. <InnerLink id="backlink-rule-criminal_code-ref-3-1" data-hash-target to="rule-criminal_code-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
<li id="rule-criminal_code-4">
<p>Non-criminal honor point score of 50 or more. <InnerLink id="backlink-rule-criminal_code-ref-4-1" data-hash-target to="rule-criminal_code-ref-4-1" aria-label="Back to reference 4-1">↩</InnerLink></p>
</li>
<li id="rule-criminal_code-5">
<p>You can gain honor points this way once per month. <InnerLink id="backlink-rule-criminal_code-ref-5-1" data-hash-target to="rule-criminal_code-ref-5-1" aria-label="Back to reference 5-1">↩</InnerLink> <InnerLink id="backlink-rule-criminal_code-ref-5-2" data-hash-target to="rule-criminal_code-ref-5-2" aria-label="Back to reference 5-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="rule-criminal_code-6">
<p>Per 40,000 gp of the item's price. <InnerLink id="backlink-rule-criminal_code-ref-6-1" data-hash-target to="rule-criminal_code-ref-6-1" aria-label="Back to reference 6-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _political_code = {title: "Political Code", parent_topics: ["optional_subsystems","honor","gaining_and_losing_honor"], siblings: ["chivalric_code","criminal_code","political_code","samurai_code","tribal_code"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 162</Link></p>
<p>These events apply to cultures favoring political intrigue, espionage, and diplomacy.</p>
<ScrollContainer id="rule-political_code--table-0"><table>
<thead>
<tr>
<th>Event</th>
<th>Honor Points</th>
</tr>
</thead>
<tbody><tr>
<td>Become leader of a country</td>
<td>+50</td>
</tr>
<tr>
<td>Become a duke (or equivalent rank)</td>
<td>+20</td>
</tr>
<tr>
<td>Ascend the ranks of nobility</td>
<td>+15</td>
</tr>
<tr>
<td>Receive an important appointment</td>
<td>+10</td>
</tr>
<tr>
<td>Successfully negotiate a peace for a national dispute</td>
<td>+5</td>
</tr>
<tr>
<td>Prevent a war</td>
<td>+5</td>
</tr>
<tr>
<td>Successfully negotiate a peace for a familial dispute</td>
<td>+3</td>
</tr>
<tr>
<td>Act as an ambassador</td>
<td>+2</td>
</tr>
<tr>
<td>Gain the favor of an honorable NPC<sup><InnerLink showBacklink="backlink-rule-political_code-ref-1-1" id="rule-political_code-ref-1-1" data-hash-target to="rule-political_code-1">1</InnerLink></sup></td>
<td>+2</td>
</tr>
<tr>
<td>Remove an enemy without bloodshed or death</td>
<td>+2</td>
</tr>
<tr>
<td>Start a popular war</td>
<td>+2</td>
</tr>
<tr>
<td>Write and deliver a treaty</td>
<td>+2</td>
</tr>
<tr>
<td>Aid a political ally of lower status<sup><InnerLink showBacklink="backlink-rule-political_code-ref-2-1" id="rule-political_code-ref-2-1" data-hash-target to="rule-political_code-2">2</InnerLink></sup></td>
<td>+1</td>
</tr>
<tr>
<td>Embarrass a rival</td>
<td>+1</td>
</tr>
<tr>
<td>Make allies in the bureaucracy</td>
<td>+1</td>
</tr>
<tr>
<td>Successfully negotiate a peace for a personal dispute</td>
<td>+1</td>
</tr>
<tr>
<td>Make well-placed enemies in the bureaucracy</td>
<td>-1</td>
</tr>
<tr>
<td>Refuse to use violence when negotiation fails</td>
<td>-2</td>
</tr>
<tr>
<td>Fail as an ambassador to a neutral country</td>
<td>-3</td>
</tr>
<tr>
<td>Refuse to aid someone who did you a favor</td>
<td>-3</td>
</tr>
<tr>
<td>Receive an embarrassing appointment</td>
<td>-4</td>
</tr>
<tr>
<td>Use violence to solve a problem when negotiation was an option</td>
<td>-5</td>
</tr>
<tr>
<td>Start an unpopular war</td>
<td>-8</td>
</tr>
<tr>
<td>Fail to keep a popular war popular</td>
<td>-10</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-political_code-label">Footnotes</h3>
<ol>
<li id="rule-political_code-1">
<p>You can gain this reward once per NPC. The NPC must have at least 10 more honor points than you. <InnerLink id="backlink-rule-political_code-ref-1-1" data-hash-target to="rule-political_code-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="rule-political_code-2">
<p>You can gain this reward once per month. The NPC must have at least 10 fewer honor points than you. <InnerLink id="backlink-rule-political_code-ref-2-1" data-hash-target to="rule-political_code-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _samurai_code = {title: "Samurai Code", parent_topics: ["optional_subsystems","honor","gaining_and_losing_honor"], siblings: ["chivalric_code","criminal_code","political_code","samurai_code","tribal_code"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 163</Link></p>
<p>These events apply to a samurai code.</p>
<ScrollContainer id="rule-samurai_code--table-0"><table>
<thead>
<tr>
<th>Event</th>
<th>Honor Points</th>
</tr>
</thead>
<tbody><tr>
<td>Become a daimyo or temple master</td>
<td>+80</td>
</tr>
<tr>
<td>Defeat an honorable daimyo or temple master in combat</td>
<td>+20</td>
</tr>
<tr>
<td>Commit seppuku</td>
<td>+10</td>
</tr>
<tr>
<td>Adopt a strict code of honor</td>
<td>+8</td>
</tr>
<tr>
<td>Help a disgraced ally perform seppuku</td>
<td>+4</td>
</tr>
<tr>
<td>Challenge and defeat in single combat someone who has publicly dishonored you</td>
<td>+3</td>
</tr>
<tr>
<td>Party defeats a challenging oni (CR higher than APL)</td>
<td>+3</td>
</tr>
<tr>
<td>Destroy a shrine that's dedicated to an opposing power</td>
<td>+2</td>
</tr>
<tr>
<td>Protect a shrine from marauders</td>
<td>+2</td>
</tr>
<tr>
<td>Roll 30 or higher on a Craft check to create a work of art or masterwork item<sup><InnerLink showBacklink="backlink-rule-samurai_code-ref-1-1" id="rule-samurai_code-ref-1-1" data-hash-target to="rule-samurai_code-1">1</InnerLink></sup></td>
<td>+2</td>
</tr>
<tr>
<td>Roll 30 or higher on a Perform check<sup><InnerLink showBacklink="backlink-rule-samurai_code-ref-1-2" id="rule-samurai_code-ref-1-2" data-hash-target to="rule-samurai_code-1">1</InnerLink></sup></td>
<td>+2</td>
</tr>
<tr>
<td>Perform an action against your alignment because of a sworn oath<sup><InnerLink showBacklink="backlink-rule-samurai_code-ref-2-1" id="rule-samurai_code-ref-2-1" data-hash-target to="rule-samurai_code-2">2</InnerLink></sup></td>
<td>+1</td>
</tr>
<tr>
<td>Trick a <Link to="/family/kami">kami</Link> in a battle of wits</td>
<td>+1</td>
</tr>
<tr>
<td>Excessively brag of your accomplishments<sup><InnerLink showBacklink="backlink-rule-samurai_code-ref-3-1" id="rule-samurai_code-ref-3-1" data-hash-target to="rule-samurai_code-3">3</InnerLink></sup></td>
<td>-1</td>
</tr>
<tr>
<td>Be convicted of a petty crime</td>
<td>-2</td>
</tr>
<tr>
<td>Be drunk in public</td>
<td>-2</td>
</tr>
<tr>
<td>Slay an honorable opponent who has surrendered</td>
<td>-5</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-samurai_code-label">Footnotes</h3>
<ol>
<li id="rule-samurai_code-1">
<p>You can gain honor points this way once per month. If this event recounts accomplishments of another PC or NPC, you and the subject gain 2 honor points each. If the event mocks the subject and the subject has fewer honor points than you, you gain 2 honor points and the subject loses 2. If the event mocks a target with more honor points than you, you risk the -4 slander penalty if the event can be associated with you. Each additional subject the event would praise or mock gives the skill check a -5 penalty. <InnerLink id="backlink-rule-samurai_code-ref-1-1" data-hash-target to="rule-samurai_code-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-rule-samurai_code-ref-1-2" data-hash-target to="rule-samurai_code-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="rule-samurai_code-2">
<p>The oath must be to someone with more honor points than you. <InnerLink id="backlink-rule-samurai_code-ref-2-1" data-hash-target to="rule-samurai_code-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="rule-samurai_code-3">
<p>Unless this is part of a class ability that requires you to brag about your accomplishments. <InnerLink id="backlink-rule-samurai_code-ref-3-1" data-hash-target to="rule-samurai_code-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _tribal_code = {title: "Tribal Code", parent_topics: ["optional_subsystems","honor","gaining_and_losing_honor"], siblings: ["chivalric_code","criminal_code","political_code","samurai_code","tribal_code"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 163</Link></p>
<p>These events apply to nomadic or tribal societies.</p>
<ScrollContainer id="rule-tribal_code--table-0"><table>
<thead>
<tr>
<th>Event</th>
<th>Honor Points</th>
</tr>
</thead>
<tbody><tr>
<td>Become the leader of the clan</td>
<td>+50</td>
</tr>
<tr>
<td>Defeat the leader of your tribe in single combat and become leader</td>
<td>+20</td>
</tr>
<tr>
<td>Gain justice for a large slight to your family, tribe, or clan</td>
<td>+3</td>
</tr>
<tr>
<td>Defend your village or camp from a raid</td>
<td>+2</td>
</tr>
<tr>
<td>Develop a recognizable and feared persona</td>
<td>+2</td>
</tr>
<tr>
<td>Go far beyond the basics of hospitality</td>
<td>+2</td>
</tr>
<tr>
<td>Represent your tribe at a clan gathering</td>
<td>+2</td>
</tr>
<tr>
<td>Stand against 10 opponents (whether the conflict is physical, social, or artistic)</td>
<td>+2</td>
</tr>
<tr>
<td>Challenge the leader of your tribe to single combat for leadership</td>
<td>+1</td>
</tr>
<tr>
<td>Develop a new tribal tradition</td>
<td>+1</td>
</tr>
<tr>
<td>Enact tribal justice for a serious transgression</td>
<td>+1</td>
</tr>
<tr>
<td>Gain justice for a small insult to your family, tribe, or clan</td>
<td>+1</td>
</tr>
<tr>
<td>Party enforces the code of hospitality</td>
<td>+1</td>
</tr>
<tr>
<td>Break tribal behavioral code</td>
<td>-1</td>
</tr>
<tr>
<td>Speak ill of your clan outside your clan</td>
<td>-1</td>
</tr>
<tr>
<td>Speak ill of your tribe outside your tribe</td>
<td>-2</td>
</tr>
<tr>
<td>Back down from a one-on-one fight</td>
<td>-3</td>
</tr>
<tr>
<td>Ignore tribal command structure</td>
<td>-3</td>
</tr>
<tr>
<td>Party refuses hospitality to other travelers</td>
<td>-3</td>
</tr>
<tr>
<td>Speak out against a member of your family</td>
<td>-3</td>
</tr>
<tr>
<td>Party takes advantage of hospitality, then betrays the hosts</td>
<td>-5</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _spending_honor = {title: "Spending Honor", parent_topics: ["optional_subsystems","honor"], siblings: ["honor_points","gaining_and_losing_honor","spending_honor","consequences_of_losing_honor"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 161</Link></p>
<p>You can spend honor points once per game session to gain a temporary advantage for yourself, such as a gift, loan, or introduction to an important person. Each expenditure reduces your honor score by an amount determined by the GM. If you try to spend honor points for an advantage that costs more points than you currently have, your honor score is reduced to 0 and you don't gain the advantage - by reaching too high, you lose honor and gain nothing. Examples of honor point expenditures include the following.</p>
<h3 id="rule-spending_honor-favor">Favor</h3>
<p>You call upon an allied NPC for a favor. Examples include access to private resources (such as a wizard's library), unhindered passage through enemy territory (such as getting an official to write you a letter of passage), or an audience with an important person (such as a high priest or city governor).<br/><strong>Cost:</strong> 1d6 to 5d6 honor points, depending on the difficulty of the favor and the NPC's attitude toward you. If the GM is using the <Link to="/rule/contacts">Contacts</Link> rules, the typical cost is 1d6 honor points per risk level of the task.</p>
<h3 id="rule-spending_honor-gift-or-loan">Gift or Loan</h3>
<p>You ask an NPC ally to give or loan you something of value. The gift or loan must be in the form of wealth or a single item. The GM may rule that an NPC refuses to give away a particularly rare or expensive item. The item must be something the NPC can actually grant; you can't ask a peasant for a suit of armor or a ronin for the emperor's personal sword. A gift is permanent, but a loan lasts only for the game session in which it is granted.<br/><strong>Cost:</strong> 1d6 honor points per 2,000 gp value of the gift. If the request is a loan instead of a gift, the honor point cost is halved, but if you do not return the item at the end of the session, you must pay this honor point cost at the start of each session until the item is returned. This counts as your one opportunity to spend honor points that session; you can't spend honor on anything else until you return the item.</p>
<h3 id="rule-spending_honor-skill-bonus">Skill Bonus</h3>
<p>Choose Bluff, Diplomacy, or Intimidate. You gain a +5 circumstance bonus on checks for that skill for the rest of the game session.<br/><strong>Cost:</strong> 1d6 honor points.</p>
</>};
const _consequences_of_losing_honor = {title: "Consequences of Losing Honor", parent_topics: ["optional_subsystems","honor"], siblings: ["honor_points","gaining_and_losing_honor","spending_honor","consequences_of_losing_honor"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 161</Link></p>
<p>If your honor score reaches 0, you take a -2 penalty on Will saving throws and Charisma-based checks, representing your sense of shame. If you are part of an honor-bound institution, your lack of honor may bring shame upon the institution, and cause its leaders to punish you.</p>
<p>You may renounce your code of honor at any time. You lose all honor points and benefits from honor, but do not take the penalty for having 0 honor points (not having a code is not the same as flaunting your code). Any characters who believe in that code refuse to speak or deal with you any more than they must. Your NPC allies avoid you. Your honorable institution declares you an enemy. Even those who have no association with your former code may steer clear of you, fearing retribution from your honorable institution.</p>
</>};
export default {optional_subsystems:_optional_subsystems,affiliations:_affiliations,aff_deserts:_aff_deserts,aff_swordmasters:_aff_swordmasters,aff_profiteers:_aff_profiteers,aff_antislavery:_aff_antislavery,aff_thieves:_aff_thieves,aff_i_tradition:_aff_i_tradition,aff_vangard:_aff_vangard,aff_scarred_ladies:_aff_scarred_ladies,aff_lawknights:_aff_lawknights,aff_monasteries:_aff_monasteries,aff_lights:_aff_lights,aff_i_school:_aff_i_school,aff_beast_riders:_aff_beast_riders,aff_scholars:_aff_scholars,aff_assassins:_aff_assassins,aff_animists:_aff_animists,aff_rebels:_aff_rebels,aff_storms:_aff_storms,bargaining:_bargaining,bargaining_rules:_bargaining_rules,steps_of_bargaining:_steps_of_bargaining,examples_of_bargaining:_examples_of_bargaining,other_elements_of_bargaining:_other_elements_of_bargaining,contacts:_contacts,trust:_trust,risk:_risk,negotiation_checks:_negotiation_checks,gaining_cultivating_and_losing_contacts:_gaining_cultivating_and_losing_contacts,types_of_contacts:_types_of_contacts,contingency_services:_contingency_services,factions:_factions,faction_basics:_faction_basics,faction_prestige:_faction_prestige,faction_list:_faction_list,f_profiteers:_f_profiteers,f_antislavery:_f_antislavery,f_merceneries:_f_merceneries,f_vangard:_f_vangard,f_lawknights:_f_lawknights,f_bards:_f_bards,f_clans:_f_clans,f_legion:_f_legion,f_old_cults:_f_old_cults,f_profits:_f_profits,f_second_life:_f_second_life,f_imperial:_f_imperial,f_gravepath:_f_gravepath,faction_costs:_faction_costs,hero_points:_hero_points,awarding_hero_points:_awarding_hero_points,using_hero_points:_using_hero_points,hero_points_for_gms:_hero_points_for_gms,antiheroes:_antiheroes,honor:_honor,honor_points:_honor_points,gaining_and_losing_honor:_gaining_and_losing_honor,chivalric_code:_chivalric_code,criminal_code:_criminal_code,political_code:_political_code,samurai_code:_samurai_code,tribal_code:_tribal_code,spending_honor:_spending_honor,consequences_of_losing_honor:_consequences_of_losing_honor}