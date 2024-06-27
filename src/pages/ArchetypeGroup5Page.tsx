import { useParams } from 'react-router';
import getItem from '../components/getItem';
import psychic from '../json/archetypes_psychic.json';
import ranger from '../json/archetypes_ranger.json';
import shifter from '../json/archetypes_shifter.json';
import slayer from '../json/archetypes_slayer.json';
import spiritualist from '../json/archetypes_spiritualist.json';
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
	...psychic,
	...ranger,
	...shifter,
	...slayer,
	...spiritualist
};

const classes = {
	psychic: "Psychic",
	ranger: "Ranger",
	shifter: "Shifter",
	slayer: "Slayer",
	spiritualist: "Spiritualist"
};

type Data = typeof archetypes;

type Params = { id?: keyof Data, parent: "psychic" | "ranger" | "shifter" | "slayer" | "spiritualist" };

const ArchetypeGroup5Page: React.FC<{id: string}> = () => {

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

export default ArchetypeGroup5Page;
