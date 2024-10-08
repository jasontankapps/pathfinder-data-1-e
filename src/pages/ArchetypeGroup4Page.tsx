import getItem from '../components/getItem';
import cleric from '../json/archetypes_cleric.json';
import companion from '../json/archetypes_COMPANION.json';
import magus from '../json/archetypes_magus.json';
import occultist from '../json/archetypes_occultist.json';
import oracle from '../json/archetypes_oracle.json';
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
	...cleric,
	...companion,
	...magus,
	...occultist,
	...oracle
};

type Data = typeof archetypes;

interface ArchetypeProps {
	id: string,
	parent: string,
	title: string
};

const ArchetypeGroup4Page: React.FC<ArchetypeProps> = ({id, parent, title}) => {

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

export default ArchetypeGroup4Page;
