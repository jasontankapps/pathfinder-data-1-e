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

interface ArchetypeProps {
	id: string,
	parent: string,
	title: string
};

const ArchetypeGroup9Page: React.FC<ArchetypeProps> = ({id, parent, title}) => {

	const { name: n, description, tables, sources } = getItem<Data>((id as keyof Data), archetypes);

	const markdown = description.map(line => line.replace(/%CLASS%/g, parent));

	const pageId = `archetype-${parent}/${id}`;

	return <BasicPage
		title={n}
		markdown={markdown}
		tables={tables}
		hierarchy={[["Main", "main/main"], ["Classes", "main/classes"], [title, "class/" + parent]]}
		sources={sources}
		pageId={pageId}
	/>;
};

export default ArchetypeGroup9Page;
