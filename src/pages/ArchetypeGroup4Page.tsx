import { useParams } from 'react-router';
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

const classes = {
	cleric: "Cleric",
	companion: "Animal Companion",
	magus: "Magus",
	occultist: "Occultist",
	oracle: "Oracle"
};

type Data = typeof archetypes;

type Params = { id?: keyof Data, parent: "cleric" | "companion" | "magus" | "occultist" | "oracle" };

const ArchetypeGroup4Page: React.FC<{id: string}> = () => {

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

export default ArchetypeGroup4Page;
