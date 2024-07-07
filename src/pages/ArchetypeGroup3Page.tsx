import getItem from '../components/getItem';
import inquisitor from '../json/archetypes_inquisitor.json';
import paladin from '../json/archetypes_paladin.json';
import skald from '../json/archetypes_skald.json';
import warpriest from '../json/archetypes_warpriest.json';
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
	...inquisitor,
	...paladin,
	...skald,
	...warpriest
};

type Data = typeof archetypes;

const ArchetypeGroup3Page: React.FC<{id: string, parent: string, title: string}> = ({id, parent, title}) => {

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

export default ArchetypeGroup3Page;
