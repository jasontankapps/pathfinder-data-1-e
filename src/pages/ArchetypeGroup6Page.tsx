import { useParams } from 'react-router';
import getItem from '../components/getItem';
import alchemist from '../json/archetypes_alchemist.json';
import antipaladin from '../json/archetypes_antipaladin.json';
import arcanist from '../json/archetypes_arcanist.json';
import witch from '../json/archetypes_witch.json';
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
	...alchemist,
	...antipaladin,
	...arcanist,
	...witch
};

const classes = {
	alchemist: "Alchemist",
	antipaladin: "Antipaladin",
	arcanist: "Arcanist",
	witch: "Witch"
};

type Data = typeof archetypes;

type Params = { id?: keyof Data, parent: "alchemist" | "antipaladin" | "arcanist" | "witch" };

const ArchetypeGroup6Page: React.FC<{id: string}> = () => {

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

export default ArchetypeGroup6Page;
