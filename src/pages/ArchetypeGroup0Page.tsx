import { useParams } from 'react-router';
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

const classes = {
	cavalier: "Cavalier",
	fighter: "Fighter",
	investigator: "Investigator"
};

type Data = typeof archetypes;

type Params = { id?: keyof Data, parent: "cavalier" | "fighter" | "investigator" };

const ArchetypeGroup1Page: React.FC<{id: string}> = () => {

	const { id, parent } = useParams<Params>();

	const { name: title, description, tables, sources } = getItem<Data>(id, archetypes);

	const markdown = description.map(line => line.replace(/%CLASS%/g, parent));

	return (
		<BasicPage
			title={title}
			displayItem={{markdown, tables}}
			hierarchy={[["Classes", "classes"], [classes[parent], "class/" + parent]]}
			sources={sources}
		/>
	);
};

export default ArchetypeGroup1Page;
