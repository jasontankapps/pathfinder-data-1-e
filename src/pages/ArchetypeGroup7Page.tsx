import { useParams } from 'react-router';
import getItem from '../components/getItem';
import cavalier from '../json/archetypes_cavalier.json';
import fighter from '../json/archetypes_fighter.json';
import investigator from '../json/archetypes_investigator.json';
import kineticist from '../json/archetypes_kineticist.json';
import rogue from '../json/archetypes_rogue.json';
import shaman from '../json/archetypes_shaman.json';
import sorcerer from '../json/archetypes_sorcerer.json';
import unchained_summoner from '../json/archetypes_summoner_UC.json';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"unknown": {
		"name": "Unknown",
		"sources": [],
		"description": [
			"## Error",
			"",
			"Unable to find the requested %CLASS% archetype."
		]
	},
	...kineticist,
	...rogue,
	...shaman,
	...sorcerer,
	...unchained_summoner
};

const classes = {
	rogue: "Rogue",
	kineticist: "Kineticist",
	shaman: "Shaman",
	sorcerer: "Sorcerer",
	unchained_summoner: "Unchained Summoner"
};

type Data = typeof archetypes;

type Params = { id?: keyof Data, parent: "rogue" | "kineticist" | "shaman" | "sorcerer" | "unchained_summoner" };

const ArchetypeGroup7Page: React.FC<{id: string}> = () => {

	const { id, parent } = useParams<Params>();

	const { name: title, description, tables, sources } = getItem<Data>(id, archetypes);

	const markdown = description.map(line => line.replace(/%CLASS%/g, classes[parent].toLowerCase()));

	return (
		<BasicPage
			title={title}
			displayItem={{markdown, tables}}
			hierarchy={[["Classes", "classes"], [classes[parent], "class/" + parent]]}
			sources={sources}
		/>
	);
};

export default ArchetypeGroup7Page;
