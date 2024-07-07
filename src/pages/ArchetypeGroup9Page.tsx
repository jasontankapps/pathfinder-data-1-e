import getItem from '../components/getItem';
import druid from '../json/archetypes_druid.json';
import medium from '../json/archetypes_medium.json';
import ninja from '../json/archetypes_ninja.json';
import wizard from '../json/archetypes_wizard.json';
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
	...druid,
	...medium,
	...ninja,
	...wizard
};

type Data = typeof archetypes;

const ArchetypeGroup9Page: React.FC<{id: string, parent: string, title: string}> = ({id, parent, title}) => {

	const { name: n, description, tables, sources } = getItem<Data>((id as keyof Data), archetypes);

	const markdown = description.map(line => line.replace(/%CLASS%/g, parent));

	return (
		<BasicPage
			title={n}
			displayItem={{markdown, tables}}
			hierarchy={[["Main", "main/main"], ["Classes", "main/classes"], [title, "class/" + parent]]}
			sources={sources}
		/>
	);
};

export default ArchetypeGroup9Page;
