import getItem from '../components/getItem';
import brawler from '../json/archetypes_brawler.json';
import barbarian from '../json/archetypes_barbarian.json';
import familiar from '../json/archetypes_FAMILIAR.json';
import mesmerist from '../json/archetypes_mesmerist.json';
import vigilante from '../json/archetypes_vigilante.json';
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
	...brawler,
	...barbarian,
	...familiar,
	...mesmerist,
	...vigilante
};

type Data = typeof archetypes;

const ArchetypeGroup8Page: React.FC<{id: string, parent: string, title: string}> = ({id, parent, title}) => {

	const { name: n, description, tables, sources } = getItem<Data>((id as keyof Data), archetypes);

	const markdown = description.map(line => line.replace(/%CLASS%/g, parent));

	return (
		<BasicPage
			title={n}
			markdown={markdown}
			tables={tables}
			hierarchy={[["Main", "main/main"], ["Classes", "main/classes"], [title, "class/" + parent]]}
			sources={sources}
		/>
	);
};

export default ArchetypeGroup8Page;
