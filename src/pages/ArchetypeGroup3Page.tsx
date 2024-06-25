import { useParams } from 'react-router';
import getItem from '../components/getItem';
import inquisitor from '../json/archetypes_inquisitor.json';
import paladin from '../json/archetypes_paladin.json';
import skald from '../json/archetypes_skald.json';
import warpriest from '../json/archetypes_warpriest.json';
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
	...inquisitor,
	...paladin,
	...skald,
	...warpriest
};

const classes = {
	inquisitor: "Inquisitor",
	paladin: "Paladin",
	skald: "Skald",
	warpriest: "Warpriest"
};

type Data = typeof archetypes;

type Params = { id?: keyof Data, parent: "inquisitor" | "paladin" | "skald" | "warpriest" };

const ArchetypeGroup3Page: React.FC<{id: string}> = () => {

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

export default ArchetypeGroup3Page;
