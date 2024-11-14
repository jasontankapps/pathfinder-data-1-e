import fs from 'fs';

const read = (file) => fs.readFileSync(file, 'utf8');

const GET = (file, joiner = " ") => JSON.parse(read("./src/json/" + file).replace(/\r/g, "").replace(/ *\n */g, joiner));
const searchgroups = [
	"class", // 1
	"archetype", // 2
	"feat", // 3
	"trait", // 4
	"magic", // 5
	"equip", // 6
	"tech", // 7
	"spell", // 8
	"race", // 9
	"faith", // 10
	"monster", // 11
	"rule", // 12
];
const searchindex = [
	"Classes and Class Abilities", // 1
	"Class Archetypes", // 2
	"Feats", // 3
	"Traits", // 4
	"Magic Items", // 5
	"Equipment", // 6
	"Technology", // 7
	"Spells", // 8
	"Races", // 9
	"Deities/Faiths", // 10
	"Monsters", // 11
	"Rules" // 12
];
//
//
// ************** WARNING!!!
//
// The below will need to be updated if any base JSON files are renamed/created/deleted.
//
//
const basic_data_groups = {
	"skills.json": {
		searchgroup: 12, // rule
		link: "skill",
		num: 0,
		type: "Skill"
	},
	"rules.json": {
		searchgroup: 12, // rule
		link: "rule",
		num: 1,
		type: "Rules",
		properties: [ "name" ]
	},
	"rules2.json": {
		searchgroup: 12, // rule
		link: "rule",
		num: 2,
		type: "Rules",
		properties: [ "name" ]
	},
	"rules3.json": {
		searchgroup: 12, // rule
		link: "rule",
		num: 3,
		type: "Rules",
		properties: [ "name" ]
	},
	"rules4.json": {
		searchgroup: 12, // rule
		link: "rule",
		num: 4,
		type: "Rules",
		properties: [ "name" ]
	},
	"rules5.json": {
		searchgroup: 12, // rule
		link: "rule",
		num: 5,
		type: "Rules",
		properties: [ "name" ]
	},
	"rules6.json": {
		searchgroup: 12, // rule
		link: "rule",
		num: 6,
		type: "Rules",
		properties: [ "name" ]
	},
	"rules7.json": {
		searchgroup: 12, // rule
		link: "rule",
		num: 7,
		type: "Rules",
		properties: [ "name" ]
	},
	"rules8.json": {
		searchgroup: 12, // rule
		link: "rule",
		num: 8,
		type: "Rules",
		properties: [ "name" ]
	},
	"rules9.json": {
		searchgroup: 12, // rule
		link: "rule",
		num: 9,
		type: "Rules",
		properties: [ "name" ]
	},
	"rules10.json": {
		searchgroup: 12, // rule
		link: "rule",
		num: 10,
		type: "Rules",
		properties: [ "name" ]
	},
	"rules11.json": {
		searchgroup: 12, // rule
		link: "rule",
		num: 11,
		type: "Rules",
		properties: [ "name" ]
	},
	"rules12.json": {
		searchgroup: 12, // rule
		link: "rule",
		num: 12,
		type: "Rules",
		properties: [ "name" ]
	},
	"rules13.json": {
		searchgroup: 12, // rule
		link: "rule",
		num: 13,
		type: "Rules",
		properties: [ "name" ]
	},
	"rules14.json": {
		searchgroup: 12, // rule
		link: "rule",
		num: 14,
		type: "Rules",
		properties: [ "name" ]
	},
	"rules15.json": {
		searchgroup: 12, // rule
		link: "rule",
		num: 15,
		type: "Rules",
		properties: [ "name" ]
	},
	"rules16.json": {
		searchgroup: 12, // rule
		link: "rule",
		num: 16,
		type: "Rules",
		properties: [ "name" ]
	},
	"rules17.json": {
		searchgroup: 12, // rule
		link: "rule",
		num: 17,
		type: "Rules",
		properties: [ "name" ]
	},
	"rules18.json": {
		searchgroup: 12, // rule
		link: "rule",
		num: 18,
		type: "Rules",
		properties: [ "name" ]
	},
	"umr.json": {
		searchgroup: 12, // rule
		link: "umr",
		num: 0,
		type: "Universal Monster Rule"
	},
	"corruptions.json": {
		searchgroup: 12, // rule
		link: "corruption",
		num: 0,
		type: "Corruption"
	},
	"curses.json": {
		searchgroup: 12, // rule
		link: "curse",
		num: 0,
		type: "Curse"
	},
	"diseases.json": {
		searchgroup: 12, // rule
		link: "disease",
		num: 0,
		type: "Disease"
	},
	"drugs.json": {
		searchgroup: 12, // rule
		link: "drug",
		num: 0,
		type: "Drug"
	},
	"haunts.json": {
		searchgroup: 12, // rule
		link: "haunt",
		num: 0,
		type: "Haunt"
	},
	"infestations.json": {
		searchgroup: 12, // rule
		link: "infestation",
		num: 0,
		type: "Infestation"
	},
	"madness.json": {
		searchgroup: 12, // rule
		link: "madness",
		num: 0,
		type: "Madness"
	},
	"traps.json": {
		searchgroup: 12, // rule
		link: "trap",
		num: 0,
		type: "Trap"
	},
	"races.json": {
		searchgroup: 9, // race
		link: "race",
		num: 1,
		type: "Race"
	},
	"races2.json": {
		searchgroup: 9, // race
		link: "race",
		num: 2,
		type: "Race"
	},
	"classes.json": {
		searchgroup: 1, // classes
		link: "class",
		num: 1,
		type: "Class"
	},
	"classes2.json": {
		searchgroup: 1, // classes
		link: "class",
		num: 2,
		type: "Class"
	},
	"classes3.json": {
		searchgroup: 1, // classes
		link: "class",
		num: 3,
		type: "Class"
	},
	"classes4.json": {
		searchgroup: 1, // classes
		link: "class",
		num: 4,
		type: "Class"
	},
	"class_abilities.json": {
		searchgroup: 1, // classes
		link: "ability",
		num: 1,
		type: "Class Ability"
	},
	"class_abilities2.json": {
		searchgroup: 1, // classes
		link: "ability",
		num: 2,
		type: "Class Ability"
	},
	"class_abilities3.json": {
		searchgroup: 1, // classes
		link: "ability",
		num: 3,
		type: "Class Ability"
	},
	"class_ability_arcane_schools.json": {
		searchgroup: 1, // classes
		link: "arcaneschool",
		num: 0,
		type: "Arcane School"
	},
	"class_ability_aspects.json": {
		searchgroup: 1, // classes
		link: "aspect",
		num: 0,
		type: "Shifter Aspect"
	},
	"class_ability_bardic_masterpieces.json": {
		searchgroup: 1, // classes
		link: "bardicmasterpiece",
		num: 0,
		type: "Bardic Masterpiece"
	},
	"class_ability_blessings.json": {
		searchgroup: 1, // classes
		link: "blessing",
		num: 0,
		type: "Warpriest Blessing"
	},
	"class_ability_bloodrager_bloodlines.json": {
		searchgroup: 1, // classes
		link: "bloodragerbloodline",
		num: 0,
		type: "Bloodrager Bloodline"
	},
	"class_ability_curses.json": {
		searchgroup: 1, // classes
		link: "oraclecurse",
		num: 0,
		type: "Oracle Curse"
	},
	"class_ability_disciplines.json": {
		searchgroup: 1, // classes
		link: "discipline",
		num: 0,
		type: "Psychic Discipline"
	},
	"class_ability_domains.json": {
		searchgroup: 1, // classes
		link: "domain",
		num: 0,
		type: "Cleric Domain"
	},
	"class_ability_druid_companions.json": {
		searchgroup: 1, // classes
		link: "druidcompanion",
		num: 0,
		type: "Animal Companion"
	},
	"class_ability_druid_domains.json": {
		searchgroup: 1, // classes
		link: "druiddomain",
		num: 0,
		type: "Druid Domain"
	},
	"class_ability_emotional_focus.json": {
		searchgroup: 1, // classes
		link: "emotionalfocus",
		num: 0,
		type: "Phantom Emotional Focus"
	},
	"class_ability_exploits.json": {
		searchgroup: 1, // classes
		link: "exploit",
		num: 0,
		type: "Arcanist Exploit"
	},
	"class_ability_greater_exploits.json": {
		searchgroup: 1, // classes
		link: "greaterexploit",
		num: 0,
		type: "Greater Arcanist Exploit"
	},
	"class_ability_hellknight_orders.json": {
		searchgroup: 1, // classes
		link: "hellknightorder",
		num: 0,
		type: "Hellknight Order"
	},
	"class_ability_implements.json": {
		searchgroup: 1, // classes
		link: "implement",
		num: 0,
		type: "Occultist Implement"
	},
	"class_ability_inquisitions.json": {
		searchgroup: 1, // classes
		link: "inquisition",
		num: 0,
		type: "Inquisition"
	},
	"class_ability_kinetic_talents.json": {
		searchgroup: 1, // classes
		link: "kinetic",
		num: 0,
		type: "Kinetic Talent"
	},
	"class_ability_legendary_spirits.json": {
		searchgroup: 1, // classes
		link: "legendaryspirit",
		num: 0,
		type: "Legendary Medium Spirit"
	},
	"class_ability_magus_arcana.json": {
		searchgroup: 1, // classes
		link: "magusarcana",
		num: 0,
		type: "Magus Arcana"
	},
	"class_ability_mysteries.json": {
		searchgroup: 1, // classes
		link: "mystery",
		num: 0,
		type: "Oracle Mystery"
	},
	"class_ability_oaths.json": {
		searchgroup: 1, // classes
		link: "oath",
		num: 0,
		type: "Monk Oath"
	},
	"class_ability_orders.json": {
		searchgroup: 1, // classes
		link: "order",
		num: 0,
		type: "Cavalier/Samurai Order"
	},
	"class_ability_outsider_spirits.json": {
		searchgroup: 2, // archetype
		link: "outsiderspirit",
		num: 0,
		type: "Medium Outsider Spirit"
	},
	"class_ability_rage_powers.json": {
		searchgroup: 1, // classes
		link: "ragepower",
		num: 0,
		type: "Barbarian Rage Power"
	},
	"class_ability_shaman_spirits.json": {
		searchgroup: 1, // classes
		link: "shamanspirit",
		num: 0,
		type: "Shaman Spirit"
	},
	"class_ability_sorcerer_bloodlines.json": {
		searchgroup: 1, // classes
		link: "sorcererbloodline",
		num: 0,
		type: "Sorcerer Bloodline"
	},
	"class_ability_spirits.json": {
		searchgroup: 1, // classes
		link: "spirit",
		num: 0,
		type: "Medium Spirit"
	},
	"class_ability_stance_rage_powers.json": {
		searchgroup: 1, // classes
		link: "stanceragepower",
		num: 0,
		type: "Barbarian Stance Rage Power"
	},
	"sidekicks.json": {
		searchgroup: 1, // classes
		link: "sidekick",
		num: 0,
		type: "Companion"
	},
	"prestige_classes.json": {
		searchgroup: 1, // classes
		link: "prestigeclass",
		num: 1,
		type: "Prestige Class"
	},
	"prestige_classes2.json": {
		searchgroup: 1, // classes
		link: "prestigeclass",
		num: 2,
		type: "Prestige Class"
	},
	"prestige_classes3.json": {
		searchgroup: 1, // classes
		link: "prestigeclass",
		num: 3,
		type: "Prestige Class"
	},
	"archetypes_alchemist.json": {
		searchgroup: 2, // archetype
		link: "archetype-alchemist",
		num: 0,
		type: "Alchemist Archetype"
	},
	"archetypes_antipaladin.json": {
		searchgroup: 2, // archetype
		link: "archetype-antipaladin",
		num: 0,
		type: "Antipaladin Archetype"
	},
	"archetypes_arcanist.json": {
		searchgroup: 2, // archetype
		link: "archetype-arcanist",
		num: 0,
		type: "Arcanist Archetype"
	},
	"archetypes_barbarian.json": {
		searchgroup: 2, // archetype
		link: "archetype-barbarian",
		num: 0,
		type: "Barbarian Archetype"
	},
	"archetypes_bard.json": {
		searchgroup: 2, // archetype
		link: "archetype-bard",
		num: 0,
		type: "Bard Archetype"
	},
	"archetypes_bloodrager.json": {
		searchgroup: 2, // archetype
		link: "archetype-bloodrager",
		num: 0,
		type: "Bloodrager Archetype"
	},
	"archetypes_brawler.json": {
		searchgroup: 2, // archetype
		link: "archetype-brawler",
		num: 0,
		type: "Brawler Archetype"
	},
	"archetypes_cavalier.json": {
		searchgroup: 2, // archetype
		link: "archetype-cavalier",
		num: 0,
		type: "Cavalier Archetype"
	},
	"archetypes_cleric.json": {
		searchgroup: 2, // archetype
		link: "archetype-cleric",
		num: 0,
		type: "Cleric Archetype"
	},
	"archetypes_COMPANION.json": {
		searchgroup: 2, // archetype
		link: "archetype-companion",
		num: 0,
		type: "Companion Archetype"
	},
	"archetypes_druid.json": {
		searchgroup: 2, // archetype
		link: "archetype-druid",
		num: 0,
		type: "Druid Archetype"
	},
	"archetypes_FAMILIAR.json": {
		searchgroup: 2, // archetype
		link: "archetype-familiar",
		num: 0,
		type: "Familiar Archetype"
	},
	"archetypes_fighter.json": {
		searchgroup: 2, // archetype
		link: "archetype-fighter",
		num: 0,
		type: "Fighter Archetype"
	},
	"archetypes_gunslinger.json": {
		searchgroup: 2, // archetype
		link: "archetype-gunslinger",
		num: 0,
		type: "Gunslinger Archetype"
	},
	"archetypes_hunter.json": {
		searchgroup: 2, // archetype
		link: "archetype-hunter",
		num: 0,
		type: "Hunter Archetype"
	},
	"archetypes_inquisitor.json": {
		searchgroup: 2, // archetype
		link: "archetype-inquisitor",
		num: 0,
		type: "Inquisitor Archetype"
	},
	"archetypes_investigator.json": {
		searchgroup: 2, // archetype
		link: "archetype-investigator",
		num: 0,
		type: "Investigator Archetype"
	},
	"archetypes_kineticist.json": {
		searchgroup: 2, // archetype
		link: "archetype-kineticist",
		num: 0,
		type: "Kineticist Archetype"
	},
	"archetypes_magus.json": {
		searchgroup: 2, // archetype
		link: "archetype-magus",
		num: 0,
		type: "Magus Archetype"
	},
	"archetypes_medium.json": {
		searchgroup: 2, // archetype
		link: "archetype-medium",
		num: 0,
		type: "Medium Archetype"
	},
	"archetypes_mesmerist.json": {
		searchgroup: 2, // archetype
		link: "archetype-mesmerist",
		num: 0,
		type: "Mesmerist Archetype"
	},
	"archetypes_monk.json": {
		searchgroup: 2, // archetype
		link: "archetype-monk",
		num: 0,
		type: "Monk Archetype"
	},
	"archetypes_monk_UC.json": {
		searchgroup: 2, // archetype
		link: "archetype-unchained_monk",
		num: 0,
		type: "Unchained Monk Archetype"
	},
	"archetypes_ninja.json": {
		searchgroup: 2, // archetype
		link: "archetype-ninja",
		num: 0,
		type: "Ninja Archetype"
	},
	"archetypes_occultist.json": {
		searchgroup: 2, // archetype
		link: "archetype-occultist",
		num: 0,
		type: "Occultist Archetype"
	},
	"archetypes_oracle.json": {
		searchgroup: 2, // archetype
		link: "archetype-oracle",
		num: 0,
		type: "Oracle Archetype"
	},
	"archetypes_paladin.json": {
		searchgroup: 2, // archetype
		link: "archetype-paladin",
		num: 0,
		type: "Paladin Archetype"
	},
	"archetypes_psychic.json": {
		searchgroup: 2, // archetype
		link: "archetype-psychic",
		num: 0,
		type: "Psychic Archetype"
	},
	"archetypes_ranger.json": {
		searchgroup: 2, // archetype
		link: "archetype-ranger",
		num: 0,
		type: "Ranger Archetype"
	},
	"archetypes_rogue.json": {
		searchgroup: 2, // archetype
		link: "archetype-rogue",
		num: 0,
		type: "Rogue Archetype"
	},
	"archetypes_samurai.json": {
		searchgroup: 2, // archetype
		link: "archetype-samurai",
		num: 0,
		type: "Samurai Archetype"
	},
	"archetypes_shaman.json": {
		searchgroup: 2, // archetype
		link: "archetype-shaman",
		num: 0,
		type: "Shaman Archetype"
	},
	"archetypes_shifter.json": {
		searchgroup: 2, // archetype
		link: "archetype-shifter",
		num: 0,
		type: "Shifter Archetype"
	},
	"archetypes_skald.json": {
		searchgroup: 2, // archetype
		link: "archetype-skald",
		num: 0,
		type: "Skald Archetype"
	},
	"archetypes_slayer.json": {
		searchgroup: 2, // archetype
		link: "archetype-slayer",
		num: 0,
		type: "Slayer Archetype"
	},
	"archetypes_sorcerer.json": {
		searchgroup: 2, // archetype
		link: "archetype-sorcerer",
		num: 0,
		type: "Sorcerer Archetype"
	},
	"archetypes_spiritualist.json": {
		searchgroup: 2, // archetype
		link: "archetype-spiritualist",
		num: 0,
		type: "Spiritualist Archetype"
	},
	"archetypes_summoner.json": {
		searchgroup: 2, // archetype
		link: "archetype-summoner",
		num: 0,
		type: "Summoner Archetype"
	},
	"archetypes_summoner_UC.json": {
		searchgroup: 2, // archetype
		link: "archetype-unchained_summoner",
		num: 0,
		type: "Unchained Summoner Archetype"
	},
	"archetypes_swashbuckler.json": {
		searchgroup: 2, // archetype
		link: "archetype-swashbuckler",
		num: 0,
		type: "Swashbuckler Archetype"
	},
	"archetypes_vigilante.json": {
		searchgroup: 2, // archetype
		link: "archetype-vigilante",
		num: 0,
		type: "Vigilante Archetype"
	},
	"archetypes_warpriest.json": {
		searchgroup: 2, // archetype
		link: "archetype-warpriest",
		num: 0,
		type: "Warpriest Archetype"
	},
	"archetypes_witch.json": {
		searchgroup: 2, // archetype
		link: "archetype-witch",
		num: 0,
		type: "Witch Archetype"
	},
	"archetypes_wizard.json": {
		searchgroup: 2, // archetype
		link: "archetype-wizard",
		num: 0,
		type: "Wizard Archetype"
	},
	"equipment_alchemical_reagents.json": {
		searchgroup: 6, // equip
		link: "equipment-reagent",
		num: 0,
		type: "Alchemical Reagent"
	},
	"equipment_armor.json": {
		searchgroup: 6, // equip
		link: "equipment-armor",
		num: 0,
		type: "Armor"
	},
	"equipment_armor_enhancements.json": {
		searchgroup: 6, // equip
		link: "equipment-armorenhancement",
		num: 0,
		type: "Armor Enhancement"
	},
	"equipment_misc.json": {
		searchgroup: 6, // equip
		link: "equipment-misc",
		num: 1,
		type: "Equipment"
	},
	"equipment_misc2.json": {
		searchgroup: 6, // equip
		link: "equipment-misc",
		num: 2,
		type: "Equipment"
	},
	"equipment_misc3.json": {
		searchgroup: 6, // equip
		link: "equipment-misc",
		num: 3,
		type: "Equipment"
	},
	"equipment_poisons.json": {
		searchgroup: 6, // equip
		link: "equipment-poison",
		num: 0,
		type: "Poison"
	},
	"equipment_siege_engines.json": {
		searchgroup: 6, // equip
		link: "equipment-siegeengine",
		num: 0,
		type: "Siege Engine"
	},
	"equipment_special_materials.json": {
		searchgroup: 6, // equip
		link: "equipment-material",
		num: 0,
		type: "Special Material"
	},
	"equipment_spellbooks.json": {
		searchgroup: 6, // equip
		link: "equipment-spellbook",
		num: 0,
		type: "Spellbook"
	},
	"equipment_tech_armor.json": {
		searchgroup: 7, // tech
		link: "tech-armor",
		num: 0,
		type: "Tech Armor"
	},
	"equipment_tech_artifacts.json": {
		searchgroup: 7, // tech
		link: "tech-artifact",
		num: 0,
		type: "Tech Artifact"
	},
	"equipment_tech_cybertech.json": {
		searchgroup: 7, // tech
		link: "tech-cybertech",
		num: 0,
		type: "Tech Cybertech"
	},
	"equipment_tech_misc.json": {
		searchgroup: 7, // tech
		link: "tech-misc",
		num: 0,
		type: "Misc. Tech"
	},
	"equipment_tech_pharmaceuticals.json": {
		searchgroup: 7, // tech
		link: "tech-pharmaceutical",
		num: 0,
		type: "Tech Pharmaceutical"
	},
	"equipment_tech_weapons.json": {
		searchgroup: 7, // tech
		link: "tech-weapon",
		num: 0,
		type: "Tech Weapon"
	},
	"equipment_weapons.json": {
		searchgroup: 6, // equip
		link: "equipment-weapon",
		num: 0,
		type: "Weapon"
	},
	"equipment_weapon_enhancements.json": {
		searchgroup: 6, // equip
		link: "equipment-weaponenhancement",
		num: 0,
		type: "Weapon Enhancement"
	},
	"traits.json": {
		searchgroup: 4, // trait
		link: "trait",
		num: 1,
		type: "Trait"
	},
	"traits2.json": {
		searchgroup: 4, // trait
		link: "trait",
		num: 2,
		type: "Trait"
	},
	"traits3.json": {
		searchgroup: 4, // trait
		link: "trait",
		num: 3,
		type: "Trait"
	},
	"faiths.json": {
		searchgroup: 10, // faith
		link: "faith",
		num: 1,
		type: "Deity/Faith"
	},
	"faiths2.json": {
		searchgroup: 10, // faith
		link: "faith",
		num: 2,
		type: "Deity/Faith"
	},
	"faiths3.json": {
		searchgroup: 10, // faith
		link: "faith",
		num: 3,
		type: "Deity/Faith"
	},
	"feats.json": {
		searchgroup: 3, // feat
		link: "feat",
		num: 1,
		type: "Feat"
	},
	"feats2.json": {
		searchgroup: 3, // feat
		link: "feat",
		num: 2,
		type: "Feat"
	},
	"feats3.json": {
		searchgroup: 3, // feat
		link: "feat",
		num: 3,
		type: "Feat"
	},
	"feats4.json": {
		searchgroup: 3, // feat
		link: "feat",
		num: 4,
		type: "Feat"
	},
	"feats5.json": {
		searchgroup: 3, // feat
		link: "feat",
		num: 5,
		type: "Feat"
	},
	"feats6.json": {
		searchgroup: 3, // feat
		link: "feat",
		num: 6,
		type: "Feat"
	},
	"feats7.json": {
		searchgroup: 3, // feat
		link: "feat",
		num: 7,
		type: "Feat"
	},
	"feats8.json": {
		searchgroup: 3, // feat
		link: "feat",
		num: 8,
		type: "Feat"
	},
	"magic_altar.json": {
		searchgroup: 5, // magic
		link: "magic-altar",
		num: 0,
		type: "Magic Altar"
	},
	"magic_armor.json": {
		searchgroup: 5, // magic
		link: "magic-armor",
		num: 0,
		type: "Magic Armor"
	},
	"magic_artifact.json": {
		searchgroup: 5, // magic
		link: "magic-artifact",
		num: 1,
		type: "Artifact"
	},
	"magic_artifact2.json": {
		searchgroup: 5, // magic
		link: "magic-artifact",
		num: 2,
		type: "Artifact"
	},
	"magic_demonic_implants.json": {
		searchgroup: 5, // magic
		link: "magic-implant",
		num: 0,
		type: "Demoic Implant"
	},
	"magic_devil_talismans.json": {
		searchgroup: 5, // magic
		link: "magic-talisman",
		num: 0,
		type: "Devil Talisman"
	},
	"magic_elemental_augmentations.json": {
		searchgroup: 5, // magic
		link: "magic-augmentation",
		num: 0,
		type: "Elemental Augmentation"
	},
	"magic_enhancements.json": {
		searchgroup: 5, // magic
		link: "magic-enhancement",
		num: 0,
		type: "Armor/Weapon Enchantment"
	},
	"magic_favor.json": {
		searchgroup: 5, // magic
		link: "magic-favor",
		num: 0,
		type: "Court Favor"
	},
	"magic_fleshcrafting.json": {
		searchgroup: 5, // magic
		link: "magic-fleshcrafting",
		num: 0,
		type: "Fleshcrafting"
	},
	"magic_fungal_grafts.json": {
		searchgroup: 5, // magic
		link: "magic-graft",
		num: 0,
		type: "Fungal Graft"
	},
	"magic_infused_poisons.json": {
		searchgroup: 5, // magic
		link: "magic-oison",
		num: 0,
		type: "Infused Poison"
	},
	"magic_ioun_stones.json": {
		searchgroup: 5, // magic
		link: "magic-ioun",
		num: 0,
		type: "Ioun Stone"
	},
	"magic_juju_fetishes.json": {
		searchgroup: 5, // magic
		link: "magic-fetish",
		num: 0,
		type: "Juju Fetish"
	},
	"magic_necrografts.json": {
		searchgroup: 5, // magic
		link: "magic-necrograft",
		num: 0,
		type: "Necrograft"
	},
	"magic_necrotoxins.json": {
		searchgroup: 5, // magic
		link: "magic-necrotoxin",
		num: 0,
		type: "Necrotoxin"
	},
	"magic_plant.json": {
		searchgroup: 5, // magic
		link: "magic-plant",
		num: 0,
		type: "Magical Plant"
	},
	"magic_relics.json": {
		searchgroup: 5, // magic
		link: "magic-relic",
		num: 0,
		type: "Relic"
	},
	"magic_ring.json": {
		searchgroup: 5, // magic
		link: "magic-ring",
		num: 0,
		type: "Magic Ring"
	},
	"magic_rod.json": {
		searchgroup: 5, // magic
		link: "magic-rod",
		num: 0,
		type: "Magic Rod"
	},
	"magic_set.json": {
		searchgroup: 5, // magic
		link: "magic-set",
		num: 0,
		type: "Magic Set"
	},
	"magic_shadow_piercings.json": {
		searchgroup: 5, // magic
		link: "magic-piercing",
		num: 0,
		type: "Shadow Piercing"
	},
	"magic_staff.json": {
		searchgroup: 5, // magic
		link: "magic-staff",
		num: 0,
		type: "Magic Staff"
	},
	"magic_tattoo.json": {
		searchgroup: 5, // magic
		link: "magic-tattoo",
		num: 0,
		type: "Magic Tattoo"
	},
	"magic_throne.json": {
		searchgroup: 5, // magic
		link: "magic-throne",
		num: 0,
		type: "Magic Throne"
	},
	"magic_weapon.json": {
		searchgroup: 5, // magic
		link: "magic-weapon",
		num: 1,
		type: "Magic Weapon"
	},
	"magic_weapon2.json": {
		searchgroup: 5, // magic
		link: "magic-weapon",
		num: 2,
		type: "Magic Weapon"
	},
	"magic_wondrous.json": {
		searchgroup: 5, // magic
		link: "magic-wondrous",
		num: 1,
		type: "Wondrous Item"
	},
	"magic_wondrous2.json": {
		searchgroup: 5, // magic
		link: "magic-wondrous",
		num: 2,
		type: "Wondrous Item"
	},
	"magic_wondrous3.json": {
		searchgroup: 5, // magic
		link: "magic-wondrous",
		num: 3,
		type: "Wondrous Item"
	},
	"magic_wondrous4.json": {
		searchgroup: 5, // magic
		link: "magic-wondrous",
		num: 4,
		type: "Wondrous Item"
	},
	"magic_wondrous5.json": {
		searchgroup: 5, // magic
		link: "magic-wondrous",
		num: 5,
		type: "Wondrous Item"
	},
	"magic_wondrous6.json": {
		searchgroup: 5, // magic
		link: "magic-wondrous",
		num: 6,
		type: "Wondrous Item"
	},
	"magic_wondrous7.json": {
		searchgroup: 5, // magic
		link: "magic-wondrous",
		num: 7,
		type: "Wondrous Item"
	},
	"main.json": {
		link: "main",
		num: 1,
		type: "General Info"
	},
	"main02.json": {
		link: "main",
		num: 2,
		type: "General Info"
	},
	"main03.json": {
		link: "main",
		num: 3,
		type: "General Info"
	},
	"main04.json": {
		link: "main",
		num: 4,
		type: "General Info"
	},
	"main05.json": {
		link: "main",
		num: 5,
		type: "General Info"
	},
	"main06.json": {
		link: "main",
		num: 6,
		type: "General Info"
	},
	"main07.json": {
		link: "main",
		num: 7,
		type: "General Info"
	},
	"main08.json": {
		link: "main",
		num: 8,
		type: "General Info"
	},
	"main09.json": {
		link: "main",
		num: 9,
		type: "General Info"
	},
	"main10.json": {
		link: "main",
		num: 10,
		type: "General Info"
	},
	"main11.json": {
		link: "main",
		num: 11,
		type: "General Info"
	},
	"main12.json": {
		link: "main",
		num: 12,
		type: "General Info"
	},
	"main13.json": {
		link: "main",
		num: 13,
		type: "General Info"
	},
	"main14.json": {
		link: "main",
		num: 14,
		type: "General Info"
	},
	"main15.json": {
		link: "main",
		num: 15,
		type: "General Info"
	},
	"main16.json": {
		link: "main",
		num: 16,
		type: "General Info"
	},
	"main17.json": {
		link: "main",
		num: 17,
		type: "General Info"
	},
	"main18.json": {
		link: "main",
		num: 18,
		type: "General Info"
	},
	"main19.json": {
		link: "main",
		num: 19,
		type: "General Info"
	},
	"main20.json": {
		link: "main",
		num: 20,
		type: "General Info"
	},
	"main21.json": {
		link: "main",
		num: 21,
		type: "General Info"
	},
	"monsters_unique.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 1,
		type: "Unique Monster"
	},
	"monsters_unique2.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 2,
		type: "Unique Monster"
	},
	"monsters_unique3.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 3,
		type: "Unique Monster"
	},
	"mythic_monsters.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 4,
		type: "Mythic Monster"
	},
	"monsters01.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 5,
		type: "Monster"
	},
	"monsters02.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 6,
		type: "Monster"
	},
	"monsters03.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 7,
		type: "Monster"
	},
	"monsters04.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 8,
		type: "Monster"
	},
	"monsters05.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 9,
		type: "Monster"
	},
	"monsters06.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 10,
		type: "Monster"
	},
	"monsters07.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 11,
		type: "Monster"
	},
	"monsters08.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 12,
		type: "Monster"
	},
	"monsters09.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 13,
		type: "Monster"
	},
	"monsters10.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 14,
		type: "Monster"
	},
	"monsters11.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 15,
		type: "Monster"
	},
	"monsters12.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 16,
		type: "Monster"
	},
	"monsters13.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 17,
		type: "Monster"
	},
	"monsters14.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 18,
		type: "Monster"
	},
	"monsters15.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 19,
		type: "Monster"
	},
	"monsters16.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 20,
		type: "Monster"
	},
	"monsters17.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 21,
		type: "Monster"
	},
	"monsters18.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 22,
		type: "Monster"
	},
	"monsters19.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 23,
		type: "Monster"
	},
	"monsters20.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 24,
		type: "Monster"
	},
	"monsters21.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 25,
		type: "Monster"
	},
	"monsters22.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 26,
		type: "Monster"
	},
	"monsters23.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 27,
		type: "Monster"
	},
	"monsters24.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 28,
		type: "Monster"
	},
	"monsters25.json": {
		searchgroup: 11, // monster
		link: "monster",
		num: 29,
		type: "Monster"
	},
	"monster_subtypes.json": {
		searchgroup: 11, // monster
		link: "subtype",
		num: 0,
		type: "Creature Subtype"
	},
	"monsters_families.json": {
		searchgroup: 11, // monster
		link: "family",
		num: 0,
		type: "Monster Family"
	},
	"monsters_templates.json": {
		searchgroup: 11, // monster
		link: "template",
		num: 1,
		type: "Creature Template"
	},
	"monsters_templates2.json": {
		searchgroup: 11, // monster
		link: "template",
		num: 2,
		type: "Creature Template"
	},
	"monster_types.json": {
		searchgroup: 11, // monster
		link: "type",
		num: 0,
		type: "Creature Type"
	},
	"npcs.json": {
		searchgroup: 11, // monster
		link: "npc",
		num: 1,
		type: "NPC"
	},
	"npcs2.json": {
		searchgroup: 11, // monster
		link: "npc",
		num: 2,
		type: "NPC"
	},
	"npcs3.json": {
		searchgroup: 11, // monster
		link: "npc",
		num: 3,
		type: "NPC"
	},
	"npcs4.json": {
		searchgroup: 11, // monster
		link: "npc",
		num: 4,
		type: "NPC"
	},
	"npc_classes.json": {
		searchgroup: 1, // classes
		link: "npcclass",
		num: 0,
		type: "NPC Class"
	},
	"sources.json": {
		link: "source",
		num: 0,
		type: "Source"
	},
	"spells.json": {
		searchgroup: 8, // spell
		link: "spell",
		num: 1,
		type: "Spell"
	},
	"spells2.json": {
		searchgroup: 8, // spell
		link: "spell",
		num: 2,
		type: "Spell"
	},
	"spells3.json": {
		searchgroup: 8, // spell
		link: "spell",
		num: 3,
		type: "Spell"
	},
	"spells4.json": {
		searchgroup: 8, // spell
		link: "spell",
		num: 4,
		type: "Spell"
	},
	"spells5.json": {
		searchgroup: 8, // spell
		link: "spell",
		num: 5,
		type: "Spell"
	},
	"spells6.json": {
		searchgroup: 8, // spell
		link: "spell",
		num: 6,
		type: "Spell"
	},
	"spells7.json": {
		searchgroup: 8, // spell
		link: "spell",
		num: 7,
		type: "Spell"
	},
	"spells8.json": {
		searchgroup: 8, // spell
		link: "spell",
		num: 8,
		type: "Spell"
	},
	"spells9.json": {
		searchgroup: 8, // spell
		link: "spell",
		num: 9,
		type: "Spell"
	},
	"spells10.json": {
		searchgroup: 8, // spell
		link: "spell",
		num: 10,
		type: "Spell"
	},
	"spells11.json": {
		searchgroup: 8, // spell
		link: "spell",
		num: 11,
		type: "Spell"
	},
	"occult_rituals.json": {
		searchgroup: 8, // spell
		link: "spell",
		num: 12,
		type: "Occult Ritual"
	},
	"spell_definitions.json": {
		searchgroup: 8, // spell
		link: "spelldef",
		num: 0,
		type: "Spell Definition"
	},
	"construct_mods.json": {
		searchgroup: 5, // magic
		link: "constructmod",
		num: 0,
		type: "Construct Modification"
	}
};

const grouping_data = {};

// Gather 'Type' info
const checkForType = {};
const types = [];
// Gather link prefix info
const checkForPrefix = {};
const prefixes = [];
// The bare index of names/titles
const fuseIndex = [];
// The corresponding index of links
const linkIndex = [];
// The raw info to be used by SearchPage
const dataIndex = [];

Object.entries(basic_data_groups).forEach(([file, groupobject]) => {
	const data = GET(file);
	const {link, num, type, searchgroup: sg, properties = []} = groupobject;
	if(!checkForType[type]) {
		checkForType[type] = types.length;
		types.push(type);
	}
	if(!checkForPrefix[link]) {
		checkForPrefix[link] = prefixes.length;
		prefixes.push(link);
	}
	if(num && !grouping_data[link]) {
		grouping_data[link] = {};
	}
	const has_properties = properties.length > 0;
	Object.entries(data).forEach(([prop, value]) => {
		const { name: n, title, copyof, subtitle, tags, searchgroup: sg2 } = value;
		if(copyof && !data[copyof]) {
			console.log(`${file}.${prop}.copyof = [${copyof}], not found in same file`);
			return;
		}
		if(prop === "not_found") {
			// Skip, no need to put this in group data or search index
			return;
		} else if (num && grouping_data[link][prop]) {
			console.log(`Duplicate [${prop}] in ${link} <${file}>`);
		}
		if (num) {
			// This is a part of a multi-file group.
			if(has_properties) {
				const base = { page: num };
				properties.forEach(prop => (base[prop] = value[prop]));
				grouping_data[link][prop] = base;
			} else {
				grouping_data[link][prop] = num;
			}
		}
		const named = n || title;
		if(copyof && !named) {
			// This is a plain copy, no name change or anything.
			// No need to put this in the searchable index.
			return;
		}
		// Save for search index, used directly by Fuse.js
		const indexable = { name: named || "BLANK" };
		subtitle && (indexable.subtitle = subtitle);
		tags && (indexable.tags = tags);
		fuseIndex.push(indexable);
		linkIndex.push(`${link}/${prop}`);
		// Save for extra data to be used by the search page
		const searchgroup = sg || (sg2 && (searchgroups.indexOf(sg2) + 1));
		dataIndex.push({
			t: checkForType[type],
			p: checkForPrefix[link],
			l: copyof || prop,
			s: searchgroup
		});
	});
});

Object.entries(grouping_data).forEach(([prop, value]) => {
	fs.writeFileSync(`./src/json/_data_${prop}.json`, JSON.stringify(value));
	console.log(`Saved _data_${prop}.json`);
});

fs.writeFileSync('./src/json/_data__fuse-translated_data.json', JSON.stringify({
	data: dataIndex,
	types,
	prefixes,
	searchindex
}));
console.log("Saved _data__fuse-translated-data.json");

fs.writeFileSync('./src/json/_data__fuse-index.json', JSON.stringify(fuseIndex));
console.log("Saved _data__fuse-index.json");
fs.writeFileSync('./src/json/_data__linked-index.json', JSON.stringify(linkIndex));
console.log("Saved _data__linked-index.json");
