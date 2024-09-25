import arch1 from '../src/json/archetypes_COMPANION.json' assert {type: 'json'};
import arch2 from '../src/json/archetypes_FAMILIAR.json' assert {type: 'json'};
import arch3 from '../src/json/archetypes_alchemist.json' assert {type: 'json'};
import arch4 from '../src/json/archetypes_antipaladin.json' assert {type: 'json'};
import arch5 from '../src/json/archetypes_arcanist.json' assert {type: 'json'};
import arch6 from '../src/json/archetypes_barbarian.json' assert {type: 'json'};
import arch7 from '../src/json/archetypes_bard.json' assert {type: 'json'};
import arch8 from '../src/json/archetypes_bloodrager.json' assert {type: 'json'};
import arch9 from '../src/json/archetypes_brawler.json' assert {type: 'json'};
import arch10 from '../src/json/archetypes_cavalier.json' assert {type: 'json'};
import arch11 from '../src/json/archetypes_cleric.json' assert {type: 'json'};
import arch12 from '../src/json/archetypes_druid.json' assert {type: 'json'};
import arch13 from '../src/json/archetypes_fighter.json' assert {type: 'json'};
import arch14 from '../src/json/archetypes_gunslinger.json' assert {type: 'json'};
import arch15 from '../src/json/archetypes_hunter.json' assert {type: 'json'};
import arch16 from '../src/json/archetypes_inquisitor.json' assert {type: 'json'};
import arch17 from '../src/json/archetypes_investigator.json' assert {type: 'json'};
import arch18 from '../src/json/archetypes_kineticist.json' assert {type: 'json'};
import arch19 from '../src/json/archetypes_magus.json' assert {type: 'json'};
import arch20 from '../src/json/archetypes_medium.json' assert {type: 'json'};
import arch21 from '../src/json/archetypes_mesmerist.json' assert {type: 'json'};
import arch22 from '../src/json/archetypes_monk.json' assert {type: 'json'};
import arch23 from '../src/json/archetypes_monk_UC.json' assert {type: 'json'};
import arch24 from '../src/json/archetypes_ninja.json' assert {type: 'json'};
import arch25 from '../src/json/archetypes_occultist.json' assert {type: 'json'};
import arch26 from '../src/json/archetypes_oracle.json' assert {type: 'json'};
import arch27 from '../src/json/archetypes_paladin.json' assert {type: 'json'};
import arch28 from '../src/json/archetypes_psychic.json' assert {type: 'json'};
import arch29 from '../src/json/archetypes_ranger.json' assert {type: 'json'};
import arch30 from '../src/json/archetypes_rogue.json' assert {type: 'json'};
import arch31 from '../src/json/archetypes_samurai.json' assert {type: 'json'};
import arch32 from '../src/json/archetypes_shaman.json' assert {type: 'json'};
import arch33 from '../src/json/archetypes_shifter.json' assert {type: 'json'};
import arch34 from '../src/json/archetypes_skald.json' assert {type: 'json'};
import arch35 from '../src/json/archetypes_slayer.json' assert {type: 'json'};
import arch36 from '../src/json/archetypes_sorcerer.json' assert {type: 'json'};
import arch37 from '../src/json/archetypes_spiritualist.json' assert {type: 'json'};
import arch38 from '../src/json/archetypes_summoner.json' assert {type: 'json'};
import arch39 from '../src/json/archetypes_summoner_UC.json' assert {type: 'json'};
import arch40 from '../src/json/archetypes_swashbuckler.json' assert {type: 'json'};
import arch41 from '../src/json/archetypes_vigilante.json' assert {type: 'json'};
import arch42 from '../src/json/archetypes_warpriest.json' assert {type: 'json'};
import arch43 from '../src/json/archetypes_witch.json' assert {type: 'json'};
import arch44 from '../src/json/archetypes_wizard.json' assert {type: 'json'};

const arch = [
	arch1, arch2, arch3, arch4, arch5,
	arch6, arch7, arch8, arch9, arch10,
	arch11, arch12, arch13, arch14, arch15,
	arch16, arch17, arch18, arch19, arch20,
	arch21, arch22, arch23, arch24, arch25,
	arch26, arch27, arch28, arch29, arch30,
	arch31, arch32, arch33, arch34, arch35,
	arch36, arch37, arch38, arch39, arch40,
	arch41, arch42, arch43, arch44
];

const whats = [
	"animal companion archetypes",
	"familiar archetypes",
	"alchemist archetypes",
	"antipaladin archetypes",
	"arcanist archetypes",
	"barbarian archetypes",
	"bard archetypes",
	"bloodrager archetypes",
	"brawler archetypes",
	"cavalier archetypes",
	"cleric archetypes",
	"druid archetypes",
	"fighter archetypes",
	"gunslinger archetypes",
	"hunter archetypes",
	"inquisitor archetypes",
	"investigator archetypes",
	"kineticist archetypes",
	"magus archetypes",
	"medium archetypes",
	"mesmerist archetypes",
	"monk archetypes",
	"unchained monk archetypes",
	"ninja archetypes",
	"occultist archetypes",
	"oracle archetypes",
	"paladin archetypes",
	"psychic archetypes",
	"ranger archetypes",
	"rogue archetypes",
	"samurai archetypes",
	"shaman archetypes",
	"shifter archetypes",
	"skald archetypes",
	"slayer archetypes",
	"sorcerer archetypes",
	"spiritualist archetypes",
	"summoner archetypes",
	"unchained summoner archetypes",
	"swashbuckler archetypes",
	"vigilante archetypes",
	"warpriest archetypes",
	"witch archetypes",
	"wizard archetypes"
];

function isGood(value, what) {
	const msg = [ "\n...beginning test: [" + what + "]\n" ];
	let found = false;
	if(!Object.entries(value).some(([prop, value]) => {
		const test = value;
		if(
			!test
			|| typeof test !== "object"
			|| typeof test.name !== "string"
			|| !Array.isArray(test.description)
			|| test.description.some(line => {
				if(!line || typeof line === "string") {
					return false;
				} else if (!Array.isArray(line)) {
					found = "Non-array, non-string in description";
					return true;
				}
				return line.some(inner => typeof inner !== "string");
			})
			|| (
				(Object.keys(test).sort().join(" ") !== "description name sources")
				? (found = "extra property on object " + prop) : false
			)
		) {
			msg.push(found || `Basic problem with ${prop}`);
			found = true;
			return true;
		}
		return false;
	})) {
		msg.push("Test passed.");
	} else { found = true; }
	return [found, what, msg];
}

// isGood(arch);
const archTest = () => arch.map((a, i) => isGood(a, whats[i]));

export default archTest;
