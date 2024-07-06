import getItem from '../components/getItem';
import bard from '../json/archetypes_bard.json';
import summoner from '../json/archetypes_summoner.json';
import unchained_monk from '../json/archetypes_monk_UC.json';
import swashbuckler from '../json/archetypes_swashbuckler.json';
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
	...bard,
	...summoner,
	...unchained_monk,
	...swashbuckler
};

type Data = typeof archetypes;

const ArchetypeGroup2Page: React.FC<{id: string, parent: string, title: string}> = ({id, parent, title}) => {

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

export default ArchetypeGroup2Page;
