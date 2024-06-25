import { useParams } from 'react-router';
import getItem from '../components/getItem';
import bard from '../json/archetypes_bard.json';
import summoner from '../json/archetypes_summoner.json';
import unchained_monk from '../json/archetypes_monk_UC.json';
import swashbuckler from '../json/archetypes_swashbuckler.json';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"unknown": {
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


const classes = {
	bard: "Bard",
	summoner: "Summoner",
	unchained_monk: "Unchained Monk",
	swashbuckler: "Swashbuckler"
};

type Data = typeof archetypes;

type Params = { id?: keyof Data, parent: "bard" | "summoner" | "unchained_monk" | "swashbuckler" };

const ArchetypeGroup2Page: React.FC<{id: string}> = () => {

	const { id, parent } = useParams<Params>();

	const { name: title, description, tables, sources } = getItem<Data>(id, archetypes);

	const markdown = description.map(line => line.replace(/%CLASS%/g, classes[parent].toLowerCase()));

	return (
		<BasicPage
			title={title}
			displayItem={{markdown, tables}}
			hierarchy={[["Classes", "classes"], [classes[parent], "class/" + parent]]}
			sources={sources}
		/>
	);
};

export default ArchetypeGroup2Page;
