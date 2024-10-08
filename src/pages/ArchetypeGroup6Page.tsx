import getItem from '../components/getItem';
import alchemist from '../json/archetypes_alchemist.json';
import antipaladin from '../json/archetypes_antipaladin.json';
import arcanist from '../json/archetypes_arcanist.json';
import witch from '../json/archetypes_witch.json';
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
	...alchemist,
	...antipaladin,
	...arcanist,
	...witch
};

type Data = typeof archetypes;

interface ArchetypeProps {
	id: string,
	parent: string,
	title: string
};

const ArchetypeGroup6Page: React.FC<ArchetypeProps> = ({id, parent, title}) => {

	const { name: n, description, tables, sources } = getItem<Data>((id as keyof Data), archetypes);

	const markdown = description.map(line => line.replace(/%CLASS%/g, parent));

	const pageId = `archetype-${parent}--${id}`;

	return <BasicPage
		title={n}
		markdown={markdown}
		tables={tables}
		hierarchy={[["Main", "main/main"], ["Classes", "main/classes"], [title, "class/" + parent]]}
		sources={sources}
		pageId={pageId}
	/>;
};

export default ArchetypeGroup6Page;
