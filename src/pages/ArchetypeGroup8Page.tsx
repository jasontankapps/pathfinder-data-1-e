import { useParams } from 'react-router';
import getItem from '../components/getItem';
import brawler from '../json/archetypes_brawler.json';
import barbarian from '../json/archetypes_barbarian.json';
import familiar from '../json/archetypes_FAMILIAR.json';
import mesmerist from '../json/archetypes_mesmerist.json';
import vigilante from '../json/archetypes_vigilante.json';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": {
		"name": "Unknown",
		"sources": [],
		"description": [
			"## Error",
			"",
			"Unable to find the requested %CLASS% archetype."
		]
	},
	...brawler,
	...barbarian,
	...familiar,
	...mesmerist,
	...vigilante
};

const classes = {
	brawler: "Brawler",
	barbarian: "Barbarian",
	familiar: "Familiar",
	mesmerist: "Mesmerist",
	vigilante: "Vigilante"
};

type Data = typeof archetypes;

type Params = { id?: keyof Data, parent: "brawler" | "barbarian" | "familiar" | "mesmerist" | "vigilante" };

const ArchetypeGroup8Page: React.FC<{id: string}> = () => {

	const { id, parent } = useParams<Params>();

	const { name: title, description, tables, sources } = getItem<Data>(id, archetypes);

	const markdown = description.map(line => line.replace(/%CLASS%/g, parent));

	return (
		<BasicPage
			title={title}
			displayItem={{markdown, tables}}
			hierarchy={[["Classes", "classes"], [classes[parent], "class/" + parent]]}
			sources={sources}
		/>
	);
};

export default ArchetypeGroup8Page;
