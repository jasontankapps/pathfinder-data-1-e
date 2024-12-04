import getItem from '../components/getItem';
import druid from './subpages/__archetype-druid';
import medium from './subpages/__archetype-medium';
import ninja from './subpages/__archetype-ninja';
import wizard from './subpages/__archetype-wizard';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested archetype.</p></>, title: "Unknown", sources: []},
	...druid,
	...medium,
	...ninja,
	...wizard
};

type Data = typeof archetypes;

interface ArchetypeProps {
	id: string,
	parent: string,
	title: string
};

const ArchetypeGroup9Page: React.FC<ArchetypeProps> = ({id, parent, title}) => {

	const arches: Data = {...archetypes, not_found: {...archetypes.not_found}};
	arches.not_found.jsx = <><h2>Error</h2><p>Unable to find the requested {parent} archetype.</p></>;

	const pageId = `archetype-${parent}--${id}`;

	const { title: n, jsx, sources, subhierarchy = [] } = getItem<Data>(id as keyof Data, arches);

	return <BasicPage
		title={n}
		hierarchy={[["Main", "main/main"], ["Classes", "main/classes"], [title, "class/" + parent], ...subhierarchy]}
		sources={sources}
		pageId={pageId}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup9Page;
