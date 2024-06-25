import { useParams } from 'react-router';
import getItem from '../components/getItem';
import druid from '../json/archetypes_druid.json';
import medium from '../json/archetypes_medium.json';
import ninja from '../json/archetypes_ninja.json';
import wizard from '../json/archetypes_wizard.json';
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
	...druid,
	...medium,
	...ninja,
	...wizard
};

const classes = {
	druid: "Druid",
	medium: "Medium",
	ninja: "Ninja",
	wizard: "Wizard"
};

type Data = typeof archetypes;

type Params = { id?: keyof Data, parent: "druid" | "medium" | "ninja" | "wizard" };

const ArchetypeGroup9Page: React.FC<{id: string}> = () => {

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

export default ArchetypeGroup9Page;
