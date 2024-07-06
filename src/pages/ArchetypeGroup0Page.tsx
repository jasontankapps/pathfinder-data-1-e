import getItem from '../components/getItem';
import cavalier from '../json/archetypes_cavalier.json';
import fighter from '../json/archetypes_fighter.json';
import investigator from '../json/archetypes_investigator.json';
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
	...cavalier,
	...fighter,
	...investigator
};

type Data = typeof archetypes;

const ArchetypeGroup0Page: React.FC<{id: string, parent: string, title: string}> = ({id, parent, title}) => {

	const { name: n, description, tables, sources } = getItem<Data>((id as keyof Data), archetypes);

	const markdown = description.map(line => line.replace(/%CLASS%/g, parent));

	return (
		<BasicPage
			title={n}
			displayItem={{markdown, tables}}
			hierarchy={[["Main", "main"], ["Classes", "classes"], [title, "class/" + parent]]}
			sources={sources}
		/>
	);
};

export default ArchetypeGroup0Page;
