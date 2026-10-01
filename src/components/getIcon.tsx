export type IconType = "melee" | "touch" | "magic"| "zap"| "line"| "cone"| "ranged"| "def"| "learn"| "aura"| "power"| "boost"| "aid"| "protect"| "lower"| "roll"| "down"| "skill"| "info"| "warning"| "Combat"| "Faith"| "Social"| "Magic"| "Campaign"| "Equipment"| "Family"| "Mount"| "Regional"| "Religion"| "Drawback"| "Cosmic" | "Race" | "confirmed";
export type IconNames = "mailed-fist" | "magic-palm" | "magic-swirl" | "smoking-finger" | "barbed-arrow" | "tornado-discs" | "bowman" | "armor-upgrade" | "spell-book" | "aura" | "stairs-goal" | "upgrade" | "remedy" | "shield-reflect" | "armor-downgrade" | "rolling-dices" | "broken-shield" | "skills" | "info" | "hazard-sign" | "crossed-sabres" | "bolt-eye" | "village" | "magic-swirl" | "treasure-map" | "battle-gear" | "relationship-bounds" | "cavalry" | "planet-conquest" | "prayer" | "broken-shield" | "night-sky" | "person" | "confirmed";

export type Icon = IconType | IconNames;

const getIcon = (i: Icon) => {
	switch(i) {
		// First section handles icon types being turned into icon names
		case "melee": { // melee attack, combat maneuver
			return "mailed-fist";
		}
		case "touch": { // touch attack
			return "magic-palm";
		}
		case "magic": { // cast a spell
			return "magic-swirl";
		}
		case "zap": { // ranged touch attack
			return "smoking-finger";
		}
		case "line": { // line attack
			return "barbed-arrow";
		}
		case "cone": { // cone-shaped attack
			return "tornado-discs";
		}
		case "ranged": { // ranged physical attack
			return "bowman";
		}
		case "def": { // defensive ability
			return "armor-upgrade";
		}
		case "learn": { // gain a spell
			return "spell-book";
		}
		case "aura": { // aura
			return "aura";
		}
		case "power": { // gain a new ability or companion
			return "stairs-goal";
		}
		case "boost": { // boost your own abilities, or an ally's
			return "upgrade";
		}
		case "aid": { // aid another
			return "remedy";
		}
		case "protect": { // protect another
			return "shield-reflect";
		}
		case "lower": { // lower another's defenses
			return "armor-downgrade";
		}
		case "roll": { // change to how you roll dice
			return "rolling-dices";
		}
		case "Drawback":
		case "down": { // a strict downgrade of your own abilities
			return "broken-shield";
		}
		case "skill": { // modifying class skills
			return "skills";
		}
		case "info": { // just a simple note
			return "info";
		}
		case "warning": { // a warning, usually something that shuts off an ability
			return "hazard-sign";
		}
		case "Combat": {
			return "crossed-sabres";
		}
		case "Faith": {
			return "bolt-eye";
		}
		case "Social": {
			return "village";
		}
		case "Magic": {
			return "magic-swirl";
		}
		case "Campaign": {
			return "treasure-map";
		}
		case "Equipment": {
			return "battle-gear";
		}
		case "Family": {
			return "relationship-bounds";
		}
		case "Mount": {
			return "cavalry";
		}
		case "Regional": {
			return "planet-conquest";
		}
		case "Religion": {
			return "prayer";
		}
		case "Cosmic": {
			return "night-sky";
		}
		case "Race": {
			return "person";
		}

		// Second group converts icon names into descriptive icon types
		case "mailed-fist": {
			return "melee ability";
		}
		case "magic-palm": {
			return "touch ability";
		}
		case "magic-swirl": {
			return "magic ability or trait";
		}
		case "smoking-finger": {
			return "ranged touch ability";
		}
		case "barbed-arrow": {
			return "line effect";
		}
		case "tornado-discs": {
			return "cone effect";
		}
		case "bowman": {
			return "ranged ability";
		}
		case "armor-upgrade": {
			return "defensive ability";
		}
		case "spell-book": {
			return "learn a spell";
		}
		case "stairs-goal": {
			return "gain a power";
		}
		case "upgrade": {
			return "upgrade an ability";
		}
		case "remedy": {
			return "render aid";
		}
		case "shield-reflect": {
			return "protect another";
		}
		case "armor-downgrade": {
			return "degrade opponent";
		}
		case "rolling-dices": {
			return "roll dice";
		}
		case "broken-shield": {
			return "drawback or drawback trait";
		}
		case "skills": {
			return "gain skills";
		}
		case "hazard-sign": {
			return "a warning";
		}
		case "crossed-sabres": {
			return "Combat trait";
		}
		case "bolt-eye": {
			return "Faith trait";
		}
		case "village": {
			return "Social trait";
		}
		case "treasure-map": {
			return "Campaign trait";
		}
		case "battle-gear": {
			return "Equipment trait";
		}
		case "relationship-bounds": {
			return "Family trait";
		}
		case "cavalry": {
			return "Mount trait";
		}
		case "planet-conquest": {
			return "Regional trait";
		}
		case "prayer": {
			return "Religion trait";
		}
		case "night-sky": {
			return "Cosmic trait";
		}
		case "person": {
			return "Race trait";
		}
	}
	console.log(i);
	return "confirmed";
};

export default getIcon;



