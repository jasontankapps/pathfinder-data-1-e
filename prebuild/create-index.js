import fs from 'fs';
import Fuse from 'fuse.js';
import removeMd from 'remove-markdown';

const read = (file) => fs.readFileSync(file, 'utf8');

const GET = (file, joiner = " ") => JSON.parse(read("../src/json/" + file).replace(/\r/g, "").replace(/ *\n */g, joiner));

// The below will need to be updated if any files are modified/created/deleted.
const basic_data_groups = {
	// filename: [property_prefix, link/prefix, group# (or zero if none), human-readable description]
	"archetypes_alchemist.json": ["archetype_alchemist", "archetype/alchemist", 0, "Alchemist Archetype"],
	"archetypes_antipaladin.json": ["archetype_antipaladin", "archetype/antipaladin", 0, "Antipaladin Archetype"],
	"archetypes_arcanist.json": ["archetype_arcanist", "archetype/arcanist", 0, "Arcanist Archetype"],
	"archetypes_barbarian.json": ["archetype_barbarian", "archetype/barbarian", 0, "Barbarian Archetype"],
	"archetypes_bard.json": ["archetype_bard", "archetype/bard", 0, "Bard Archetype"],
	"archetypes_bloodrager.json": ["archetype_bloodrager", "archetype/bloodrager", 0, "Bloodrager Archetype"],
	"archetypes_brawler.json": ["archetype_brawler", "archetype/brawler", 0, "Brawler Archetype"],
	"archetypes_cavalier.json": ["archetype_cavalier", "archetype/cavalier", 0, "Cavalier Archetype"],
	"archetypes_cleric.json": ["archetype_cleric", "archetype/cleric", 0, "Cleric Archetype"],
	"archetypes_COMPANION.json": ["archetype_companion", "archetype/companion", 0, "Companion Archetype"],
	"archetypes_druid.json": ["archetype_druid", "archetype/druid", 0, "Druid Archetype"],
	"archetypes_FAMILIAR.json": ["archetype_familiar", "archetype/familiar", 0, "Familiar Archetype"],
	"archetypes_fighter.json": ["archetype_fighter", "archetype/fighter", 0, "Fighter Archetype"],
	"archetypes_gunslinger.json": ["archetype_gunslinger", "archetype/gunslinger", 0, "Gunslinger Archetype"],
	"archetypes_hunter.json": ["archetype_hunter", "archetype/hunter", 0, "Hunter Archetype"],
	"archetypes_inquisitor.json": ["archetype_inquisitor", "archetype/inquisitor", 0, "Inquisitor Archetype"],
	"archetypes_investigator.json": ["archetype_investigator", "archetype/investigator", 0, "Investigator Archetype"],
	"archetypes_kineticist.json": ["archetype_kineticist", "archetype/kineticist", 0, "Kineticist Archetype"],
	"archetypes_magus.json": ["archetype_magus", "archetype/magus", 0, "Magus Archetype"],
	"archetypes_medium.json": ["archetype_medium", "archetype/medium", 0, "Medium Archetype"],
	"archetypes_mesmerist.json": ["archetype_mesmerist", "archetype/mesmerist", 0, "Mesmerist Archetype"],
	"archetypes_monk.json": ["archetype_monk", "archetype/monk", 0, "Monk Archetype"],
	"archetypes_monk_UC.json": ["archetype_unchained_monk", "archetype/unchained_monk", 0, "Unchained Monk Archetype"],
	"archetypes_ninja.json": ["archetype_ninja", "archetype/ninja", 0, "Ninja Archetype"],
	"archetypes_occultist.json": ["archetype_occultist", "archetype/occultist", 0, "Occultist Archetype"],
	"archetypes_oracle.json": ["archetype_oracle", "archetype/oracle", 0, "Oracle Archetype"],
	"archetypes_paladin.json": ["archetype_paladin", "archetype/paladin", 0, "Paladin Archetype"],
	"archetypes_psychic.json": ["archetype_psychic", "archetype/psychic", 0, "Psychic Archetype"],
	"archetypes_ranger.json": ["archetype_ranger", "archetype/ranger", 0, "Ranger Archetype"],
	"archetypes_rogue.json": ["archetype_rogue", "archetype/rogue", 0, "Rogue Archetype"],
	"archetypes_samurai.json": ["archetype_samurai", "archetype/samurai", 0, "Samurai Archetype"],
	"archetypes_shaman.json": ["archetype_shaman", "archetype/shaman", 0, "Shaman Archetype"],
	"archetypes_shifter.json": ["archetype_shifter", "archetype/shifter", 0, "Shifter Archetype"],
	"archetypes_skald.json": ["archetype_skald", "archetype/skald", 0, "Skald Archetype"],
	"archetypes_slayer.json": ["archetype_slayer", "archetype/slayer", 0, "Slayer Archetype"],
	"archetypes_sorcerer.json": ["archetype_sorcerer", "archetype/sorcerer", 0, "Sorcerer Archetype"],
	"archetypes_spiritualist.json": ["archetype_spiritualist", "archetype/spiritualist", 0, "Spiritualist Archetype"],
	"archetypes_summoner.json": ["archetype_summoner", "archetype/summoner", 0, "Summoner Archetype"],
	"archetypes_summoner_UC.json": ["archetype_unchained_summoner", "archetype/unchained_summoner", 0, "Unchained Summoner Archetype"],
	"archetypes_swashbuckler.json": ["archetype_swashbuckler", "archetype/swashbuckler", 0, "Swashbuckler Archetype"],
	"archetypes_vigilante.json": ["archetype_vigilante", "archetype/vigilante", 0, "Vigilante Archetype"],
	"archetypes_warpriest.json": ["archetype_warpriest", "archetype/warpriest", 0, "Warpriest Archetype"],
	"archetypes_witch.json": ["archetype_witch", "archetype/witch", 0, "Witch Archetype"],
	"archetypes_wizard.json": ["archetype_wizard", "archetype/wizard", 0, "Wizard Archetype"],
	"classes.json": ["class", "class", 1, "Class"],
	"classes2.json": ["class", "class", 2, "Class"],
	"classes3.json": ["class", "class", 3, "Class"],
	"classes4.json": ["class", "class", 4, "Class"],
	"class_abilities.json": ["ability", "ability", 1, "Class Ability"],
	"class_abilities2.json": ["ability", "ability", 2, "Class Ability"],
	"class_abilities3.json": ["ability", "ability", 3, "Class Ability"],
	"class_ability_arcane_schools.json": ["arcaneschool", "arcaneschool", 0, "Arcane School"],
	"class_ability_aspects.json": ["aspect", "aspect", 0, "Shifter Aspect"],
	"class_ability_bardic_masterpieces.json": ["bardicmasterpiece", "bardicmasterpiece", 0, "Bardic Masterpiece"],
	"class_ability_blessings.json": ["blessing", "blessing", 0, "Warpriest Blessing"],
	"class_ability_bloodrager_bloodlines.json": ["bloodragerbloodline", "bloodragerbloodline", 0, "Bloodrager Bloodline"],
	"class_ability_curses.json": ["oraclecurse", "oraclecurse", 0, "Oracle Curse"],
	"class_ability_disciplines.json": ["discipline", "discipline", 0, "Psychic Discipline"],
	"class_ability_domains.json": ["domain", "domain", 0, "Cleric Domain"],
	"class_ability_druid_companions.json": ["druidcompanion", "druidcompanion", 0, "Animal Companion"],
	"class_ability_druid_domains.json": ["druiddomain", "druiddomain", 0, "Druid Domain"],
	"class_ability_emotional_focus.json": ["emotionalfocus", "emotionalfocus", 0, "Phantom Emotional Focus"],
	"class_ability_exploits.json": ["exploit", "exploit", 0, "Arcanist Exploit"],
	"class_ability_greater_exploits.json": ["greaterexploit", "greaterexploit", 0, "Greater Arcanist Exploit"],
	"class_ability_hellknight_orders.json": ["hellknightorder", "hellknightorder", 0, "Hellknight Order"],
	"class_ability_implements.json": ["implement", "implement", 0, "Occultist Implement"],
	"class_ability_inquisitions.json": ["inquisition", "inquisition", 0, "Inquisition"],
	"class_ability_kinetic_talents.json": ["kinetictalent", "kinetictalent", 0, "Kinetic Talent"],
	"class_ability_legendary_spirits.json": ["legendaryspirit", "legendaryspirit", 0, "Legendary Medium Spirit"],
	"class_ability_magus_arcana.json": ["magusarcana", "magusarcana", 0, "Magus Arcana"],
	"class_ability_mysteries.json": ["mystery", "mystery", 0, "Oracle Mystery"],
	"class_ability_oaths.json": ["oath", "oath", 0, "Monk Oath"],
	"class_ability_orders.json": ["order", "order", 0, "Cavalier/Samurai Order"],
	"class_ability_outsider_spirits.json": ["outsiderspirit", "outsiderspirit", 0, "Medium Outsider Spirit"],
	"class_ability_rage_powers.json": ["ragepower", "ragepower", 0, "Barbarian Rage Power"],
	"class_ability_shaman_spirits.json": ["shamanspirit", "shamanspirit", 0, "Shaman Spirit"],
	"class_ability_sorcerer_bloodlines.json": ["sorcererbloodline", "sorcererbloodline", 0, "Sorcerer Bloodline"],
	"class_ability_spirits.json": ["spirit", "spirit", 0, "Medium Spirit"],
	"class_ability_stance_rage_powers.json": ["stanceragepower", "stanceragepower", 0, "Barbarian Stance Rage Power"],
	"construct_mods.json": ["constructmod", "constructmod", 0, "Construct Modification"],
	"corruptions.json": ["corruption", "corruption", 0, "Corruption"],
	"curses.json": ["curse", "curse", 0, "Curse"],
	"diseases.json": ["disease", "disease", 0, "Disease"],
	"drugs.json": ["drug", "drug", 0, "Drug"],
	"equipment_alchemical_reagents.json": ["equipment_reagent", "equipment/reagent", 0, "Alchemical Reagent"],
	"equipment_armor.json": ["equipment_armor", "equipment/armor", 0, "Armor"],
	"equipment_armor_enhancements.json": ["equipment_armorenhancement", "equipment/armorenhancement", 0, "Armor Enhancement"],
	"equipment_misc.json": ["equipment_misc", "equipment/misc", 1, "Equipment"],
	"equipment_misc2.json": ["equipment_misc", "equipment/misc", 2, "Equipment"],
	"equipment_misc3.json": ["equipment_misc", "equipment/misc", 3, "Equipment"],
	"equipment_poisons.json": ["equipment_poison", "equipment/poison", 0, "Poison"],
	"equipment_siege_engines.json": ["equipment_siegeengine", "equipment/siegeengine", 0, "Siege Engine"],
	"equipment_special_materials.json": ["equipment_material", "equipment/material", 0, "Special Material"],
	"equipment_spellbooks.json": ["equipment_spellbook", "equipment/spellbook", 0, "Spellbook"],
	"equipment_tech_armor.json": ["tech_armor", "tech/armor", 0, "Tech Armor"],
	"equipment_tech_artifacts.json": ["tech_artifact", "tech/artifact", 0, "Tech Artifact"],
	"equipment_tech_cybertech.json": ["tech_cybertech", "tech/cybertech", 0, "Tech Cybertech"],
	"equipment_tech_misc.json": ["tech_misc", "tech/misc", 0, "Misc. Tech"],
	"equipment_tech_pharmaceuticals.json": ["tech_pharmaceutical", "tech/pharmaceutical", 0, "Tech Pharmaceutical"],
	"equipment_tech_weapons.json": ["tech_weapon", "tech/weapon", 0, "Tech Weapon"],
	"equipment_weapons.json": ["equipment_weapon", "equipment/weapon", 0, "Weapon"],
	"equipment_weapon_enhancements.json": ["equipment_weaponenhancement", "equipment/weaponenhancement", 0, "Weapon Enhancement"],
	"faiths.json": ["faith", "faith", 1, "Deity/Faith"],
	"faiths2.json": ["faith", "faith", 2, "Deity/Faith"],
	"faiths3.json": ["faith", "faith", 3, "Deity/Faith"],
	"feats.json": ["feat", "feat", 1, "Feat"],
	"feats2.json": ["feat", "feat", 2, "Feat"],
	"feats3.json": ["feat", "feat", 3, "Feat"],
	"feats4.json": ["feat", "feat", 4, "Feat"],
	"feats5.json": ["feat", "feat", 5, "Feat"],
	"feats6.json": ["feat", "feat", 6, "Feat"],
	"feats7.json": ["feat", "feat", 7, "Feat"],
	"feats8.json": ["feat", "feat", 8, "Feat"],
	"haunts.json": ["haunt", "haunt", 0, "Haunt"],
	"infestations.json": ["infestation", "infestation", 0, "Infestation"],
	"madness.json": ["madness", "madness", 0, "Madness"],
	"magic_altar.json": ["magic_altar", "magic/altar", 0, "Magic Altar"],
	"magic_armor.json": ["magic_armor", "magic/armor", 0, "Magic Armor"],
	"magic_artifact.json": ["magic_artifact", "magic/artifact", 1, "Artifact"],
	"magic_artifact2.json": ["magic_artifact", "magic/artifact", 2, "Artifact"],
	"magic_demonic_implants.json": ["magic_implant", "magic/implant", 0, "Demoic Implant"],
	"magic_devil_talismans.json": ["magic_talisman", "magic/talisman", 0, "Devil Talisman"],
	"magic_elemental_augmentations.json": ["magic_augmentation", "magic/augmentation", 0, "Elemental Augmentation"],
	"magic_enhancements.json": ["magic_enhancement", "magic/enhancement", 0, "Armor/Weapon Enchantment"],
	"magic_favor.json": ["magic_favor", "magic/favor", 0, "Court Favor"],
	"magic_fleshcrafting.json": ["magic_fleshcrafting", "magic/fleshcrafting", 0, "Fleshcrafting"],
	"magic_fungal_grafts.json": ["magic_graft", "magic/graft", 0, "Fungal Graft"],
	"magic_infused_poisons.json": ["magic_oison", "magic/oison", 0, "Infused Poison"],
	"magic_ioun_stones.json": ["magic_ioun", "magic/ioun", 0, "Ioun Stone"],
	"magic_juju_fetishes.json": ["magic_fetish", "magic/fetish", 0, "Juju Fetish"],
	"magic_necrografts.json": ["magic_necrograft", "magic/necrograft", 0, "Necrograft"],
	"magic_necrotoxins.json": ["magic_necrotoxin", "magic/necrotoxin", 0, "Necrotoxin"],
	"magic_plant.json": ["magic_plant", "magic/plant", 0, "Magical Plant"],
	"magic_relics.json": ["magic_relic", "magic/relic", 0, "Relic"],
	"magic_ring.json": ["magic_ring", "magic/ring", 0, "Magic Ring"],
	"magic_rod.json": ["magic_rod", "magic/rod", 0, "Magic Rod"],
	"magic_set.json": ["magic_set", "magic/set", 0, "Magic Set"],
	"magic_shadow_piercings.json": ["magic_piercing", "magic/piercing", 0, "Shadow Piercing"],
	"magic_staff.json": ["magic_staff", "magic/staff", 0, "Magic Staff"],
	"magic_tattoo.json": ["magic_tattoo", "magic/tattoo", 0, "Magic Tattoo"],
	"magic_throne.json": ["magic_throne", "magic/throne", 0, "Magic Throne"],
	"magic_weapon.json": ["magic_weapon", "magic/weapon", 1, "Magic Weapon"],
	"magic_weapon2.json": ["magic_weapon", "magic/weapon", 2, "Magic Weapon"],
	"magic_wondrous.json": ["magic_wondrous", "magic/wondrous", 1, "Wondrous Item"],
	"magic_wondrous2.json": ["magic_wondrous", "magic/wondrous", 2, "Wondrous Item"],
	"magic_wondrous3.json": ["magic_wondrous", "magic/wondrous", 3, "Wondrous Item"],
	"magic_wondrous4.json": ["magic_wondrous", "magic/wondrous", 4, "Wondrous Item"],
	"magic_wondrous5.json": ["magic_wondrous", "magic/wondrous", 5, "Wondrous Item"],
	"magic_wondrous6.json": ["magic_wondrous", "magic/wondrous", 6, "Wondrous Item"],
	"magic_wondrous7.json": ["magic_wondrous", "magic/wondrous", 7, "Wondrous Item"],
	"main.json": ["main", "main", 1, "General Info"],
	"main02.json": ["main", "main", 2, "General Info"],
	"main03.json": ["main", "main", 3, "General Info"],
	"main04.json": ["main", "main", 4, "General Info"],
	"main05.json": ["main", "main", 5, "General Info"],
	"main06.json": ["main", "main", 6, "General Info"],
	"main07.json": ["main", "main", 7, "General Info"],
	"main08.json": ["main", "main", 8, "General Info"],
	"main09.json": ["main", "main", 9, "General Info"],
	"main10.json": ["main", "main", 10, "General Info"],
	"main11.json": ["main", "main", 11, "General Info"],
	"main12.json": ["main", "main", 12, "General Info"],
	"main13.json": ["main", "main", 13, "General Info"],
	"main14.json": ["main", "main", 14, "General Info"],
	"main15.json": ["main", "main", 15, "General Info"],
	"main16.json": ["main", "main", 16, "General Info"],
	"main17.json": ["main", "main", 17, "General Info"],
	"main18.json": ["main", "main", 18, "General Info"],
	"main19.json": ["main", "main", 19, "General Info"],
	"main20.json": ["main", "main", 20, "General Info"],
	"monsters_unique.json": ["monster", "monster", 1, "Unique Monster"],
	"monsters_unique2.json": ["monster", "monster", 2, "Unique Monster"],
	"monsters_unique3.json": ["monster", "monster", 3, "Unique Monster"],
	"mythic_monsters.json": ["monster", "monster", 4, "Mythic Monster"],
	"monsters01.json": ["monster", "monster", 5, "Monster"],
	"monsters02.json": ["monster", "monster", 6, "Monster"],
	"monsters03.json": ["monster", "monster", 7, "Monster"],
	"monsters04.json": ["monster", "monster", 8, "Monster"],
	"monsters05.json": ["monster", "monster", 9, "Monster"],
	"monsters06.json": ["monster", "monster", 10, "Monster"],
	"monsters07.json": ["monster", "monster", 11, "Monster"],
	"monsters08.json": ["monster", "monster", 12, "Monster"],
	"monsters09.json": ["monster", "monster", 13, "Monster"],
	"monsters10.json": ["monster", "monster", 14, "Monster"],
	"monsters11.json": ["monster", "monster", 15, "Monster"],
	"monsters12.json": ["monster", "monster", 16, "Monster"],
	"monsters13.json": ["monster", "monster", 17, "Monster"],
	"monsters14.json": ["monster", "monster", 18, "Monster"],
	"monsters15.json": ["monster", "monster", 19, "Monster"],
	"monsters16.json": ["monster", "monster", 20, "Monster"],
	"monsters17.json": ["monster", "monster", 21, "Monster"],
	"monsters18.json": ["monster", "monster", 22, "Monster"],
	"monsters19.json": ["monster", "monster", 23, "Monster"],
	"monsters20.json": ["monster", "monster", 24, "Monster"],
	"monsters21.json": ["monster", "monster", 25, "Monster"],
	"monsters22.json": ["monster", "monster", 26, "Monster"],
	"monsters23.json": ["monster", "monster", 27, "Monster"],
	"monsters24.json": ["monster", "monster", 28, "Monster"],
	"monsters25.json": ["monster", "monster", 29, "Monster"],
	"monster_subtypes.json": ["subtype", "subtype", 0, "Creature Subtype"],
	"monsters_families.json": ["family", "family", 0, "Monster Family"],
	"monsters_templates.json": ["template", "template", 1, "Creature Template"],
	"monsters_templates2.json": ["template", "template", 2, "Creature Template"],
	"monster_types.json": ["type", "type", 0, "Creature Type"],
	"npcs.json": ["npc", "npc", 1, "NPC"],
	"npcs2.json": ["npc", "npc", 2, "NPC"],
	"npcs3.json": ["npc", "npc", 3, "NPC"],
	"npcs4.json": ["npc", "npc", 4, "NPC"],
	"npc_classes.json": ["npcclass", "npcclass", 0, "NPC Class"],
	"prestige_classes.json": ["prestigeclass", "prestigeclass", 1, "Prestige Class"],
	"prestige_classes2.json": ["prestigeclass", "prestigeclass", 2, "Prestige Class"],
	"prestige_classes3.json": ["prestigeclass", "prestigeclass", 3, "Prestige Class"],
	"races.json": ["race", "race", 1, "Race"],
	"races2.json": ["race", "race", 2, "Race"],
	"rules.json": ["rule", "rule", 1, "Rule", "name"],
	"rules2.json": ["rule", "rule", 2, "Rule", "name"],
	"rules3.json": ["rule", "rule", 3, "Rule", "name"],
	"rules4.json": ["rule", "rule", 4, "Rule", "name"],
	"rules5.json": ["rule", "rule", 5, "Rule", "name"],
	"rules6.json": ["rule", "rule", 6, "Rule", "name"],
	"rules7.json": ["rule", "rule", 7, "Rule", "name"],
	"rules8.json": ["rule", "rule", 8, "Rule", "name"],
	"rules9.json": ["rule", "rule", 9, "Rule", "name"],
	"rules10.json": ["rule", "rule", 10, "Rule", "name"],
	"rules11.json": ["rule", "rule", 11, "Rule", "name"],
	"rules12.json": ["rule", "rule", 12, "Rule", "name"],
	"rules13.json": ["rule", "rule", 13, "Rule", "name"],
	"rules14.json": ["rule", "rule", 14, "Rule", "name"],
	"rules15.json": ["rule", "rule", 15, "Rule", "name"],
	"rules16.json": ["rule", "rule", 16, "Rule", "name"],
	"sidekicks.json": ["class", "class", 0, "Companion"],
	"skills.json": ["skill", "skill", 0, "Skill"],
	"sources.json": ["source", "source", 0, "Source"],
	"spells.json": ["spell", "spell", 1, "Spell"],
	"spells2.json": ["spell", "spell", 2, "Spell"],
	"spells3.json": ["spell", "spell", 3, "Spell"],
	"spells4.json": ["spell", "spell", 4, "Spell"],
	"spells5.json": ["spell", "spell", 5, "Spell"],
	"spells6.json": ["spell", "spell", 6, "Spell"],
	"spells7.json": ["spell", "spell", 7, "Spell"],
	"spells8.json": ["spell", "spell", 8, "Spell"],
	"spells9.json": ["spell", "spell", 9, "Spell"],
	"spells10.json": ["spell", "spell", 10, "Spell"],
	"spells11.json": ["spell", "spell", 11, "Spell"],
	"occult_rituals.json": ["spell", "spell", 12, "Occult Ritual"],
	"spell_definitions.json": ["spelldef", "spelldef", 0, "Spell Definition"],
	"traits.json": ["trait", "trait", 1, "Trait"],
	"traits2.json": ["trait", "trait", 2, "Trait"],
	"traits3.json": ["trait", "trait", 3, "Trait"],
	"traps.json": ["trap", "trap", 0, "Trap"],
	"umr.json": ["umr", "umr", 0, "Universal Monster Rule"]
};

const grouping_data = {};

const index = {
	data: []
};

const output = [];

/*

Need to set up info for fuse.js

Should include TITLE, DESCRIPTION, a LINK prop that will resolve to the correct entry, an English-readable TYPE

*/

Object.entries(basic_data_groups).forEach(([file, pair]) => {
	const data = GET(file);
	const [proplink, link, num, type, ...properties] = pair;
	if(num && !grouping_data[proplink]) {
		grouping_data[proplink] = {};
	}
	const has_properties = properties.length > 0;
	Object.entries(data).forEach(([prop, value]) => {
		const { name: n, title, description, copyof } = value;
		if(copyof && !data[copyof]) {
			console.log(`${file}.${prop}.copyof = [${copyof}], not found in same file`);
			return;
		}
		if(prop === "not_found") {
			return;
		} else if (num && grouping_data[proplink][prop]) {
			console.log(`Duplicate [${prop}] in ${proplink} <${file}>`);
		}
		if (num) {
			if(has_properties) {
				const base = { page: num };
				properties.forEach(prop => (base[prop] = value[prop]));
				grouping_data[proplink][prop] = base;
			} else {
				grouping_data[proplink][prop] = num;
			}
		}
		const base = proplink + "__" + prop;
		if(index[base]) {
			console.log(`Duplicate [${base}] parsing ${file}`);
			return;
		} else if (!n && !title && !description) {
			// Nothing to record.
			return;
		}
		index[base] = true;
		let named = n || title;
		if(!named && copyof) {
			if(data[copyof]) {
				named = data[copyof].name || data[copyof].title;
			}
		}
		named = named || "BLANK";
		index.data.push(copyof ? {
			name: named,
			id: base,
			type,
			link: link + "/" + copyof
		} : {
			name: named,
			// description needs to be stripped of Markdown
			description: description && removeMd(description.join("\n")),
			id: base,
			type,
			link: link + "/" + prop
		});
		output.push(JSON.stringify({
			name: named,
			description: "",
			id: base,
			type,
			link: link + "/" + (copyof || prop)
		}));
	});
});

Object.entries(grouping_data).forEach(([prop, value]) => {
	fs.writeFileSync(`../src/json/_data_${prop}.json`, JSON.stringify(value));
	console.log(`Saved _data_${prop}.json`);
});

fs.writeFileSync('../src/json/_data__fuse-data.json', `[\n\t${output.join(`,\n\t`)}\n]`);

console.log("Saved _data__fuse-data.json");

const keys = [
	{
		name: 'name',
		getFn: (item) => item.name,
		weight: 1
	},
	{
		name: 'description',
		getFn: (item) => item.description,
		weight: 0.7
	},
	{
		name: 'id',
		getFn: (item) => item.id,
		weight: 0.000000001
	},
	{
		name: 'link',
		getFn: (item) => item.link,
		weight: 0.000000001
	},
	{
		name: 'type',
		getFn: (item) => item.type,
		weight: 0.2
	}
];
const myIndex = Fuse.createIndex(keys, index.data);
fs.writeFileSync('../src/json/_data__fuse-index.json', JSON.stringify(myIndex.toJSON()));

console.log("Saved _data__fuse-index.json");
