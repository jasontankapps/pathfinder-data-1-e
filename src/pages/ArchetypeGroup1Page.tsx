import getItem from '../components/getItem';
import bloodrager from '../json/archetypes_bloodrager.json';
import gunslinger from '../json/archetypes_gunslinger.json';
import hunter from '../json/archetypes_hunter.json';
import monk from '../json/archetypes_monk.json';
import samurai from '../json/archetypes_samurai.json';
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
	...bloodrager,
	...gunslinger,
	...hunter,
	...monk,
	...samurai
};

type Data = typeof archetypes;

interface ArchetypeProps {
	id: string,
	parent: string,
	title: string
};

const ArchetypeGroup1Page: React.FC<ArchetypeProps> = ({id, parent, title}) => {

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

export default ArchetypeGroup1Page;
