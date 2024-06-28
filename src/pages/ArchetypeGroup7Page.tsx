import getItem from '../components/getItem';
import kineticist from '../json/archetypes_kineticist.json';
import rogue from '../json/archetypes_rogue.json';
import shaman from '../json/archetypes_shaman.json';
import sorcerer from '../json/archetypes_sorcerer.json';
import unchained_summoner from '../json/archetypes_summoner_UC.json';
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
	...kineticist,
	...rogue,
	...shaman,
	...sorcerer,
	...unchained_summoner
};

type Data = typeof archetypes;

const ArchetypeGroup7Page: React.FC<{id: string, parent: string, title: string}> = ({id, parent, title}) => {

	const { name: n, description, tables, sources } = getItem<Data>((id as keyof Data), archetypes);

	const markdown = description.map(line => line.replace(/%CLASS%/g, parent));

	return (
		<BasicPage
			title={n}
			displayItem={{markdown, tables}}
			hierarchy={[["Classes", "classes"], [title, "class/" + parent]]}
			sources={sources}
		/>
	);
};

export default ArchetypeGroup7Page;
