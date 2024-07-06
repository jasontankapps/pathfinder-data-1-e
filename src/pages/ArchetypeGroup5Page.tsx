import getItem from '../components/getItem';
import psychic from '../json/archetypes_psychic.json';
import ranger from '../json/archetypes_ranger.json';
import shifter from '../json/archetypes_shifter.json';
import slayer from '../json/archetypes_slayer.json';
import spiritualist from '../json/archetypes_spiritualist.json';
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
	...psychic,
	...ranger,
	...shifter,
	...slayer,
	...spiritualist
};

type Data = typeof archetypes;

const ArchetypeGroup5Page: React.FC<{id: string, parent: string, title: string}> = ({id, parent, title}) => {

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

export default ArchetypeGroup5Page;
