import { useParams } from 'react-router';
import getItem from '../components/getItem';
import bloodrager from '../json/archetypes_bloodrager.json';
import gunslinger from '../json/archetypes_gunslinger.json';
import hunter from '../json/archetypes_hunter.json';
import monk from '../json/archetypes_monk.json';
import samurai from '../json/archetypes_samurai.json';
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
	...bloodrager,
	...gunslinger,
	...hunter,
	...monk,
	...samurai
};

const classes = {
	bloodrager: "Bloodrager",
	gunslinger: "Gunslinger",
	hunter: "Hunter",
	monk: "Monk",
	samurai: "Samurai"
};

type Data = typeof archetypes;

type Params = { id?: keyof Data, parent: "bloodrager" | "gunslinger" | "hunter" | "monk" | "samurai" };

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
