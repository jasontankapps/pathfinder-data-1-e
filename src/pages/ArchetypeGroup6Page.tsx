import getItem from '../components/getItem';
import alchemist from './subpages/__archetype-alchemist';
import antipaladin from './subpages/__archetype-antipaladin';
import arcanist from './subpages/__archetype-arcanist';
import witch from './subpages/__archetype-witch';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested archetype.</p></>, title: "Unknown", sources: []},
	...alchemist,
	...antipaladin,
	...arcanist,
	...witch
};

type Data = typeof archetypes;

interface ArchetypeProps {
	id: string,
	parent: string,
	title: string
};

const ArchetypeGroup6Page: React.FC<ArchetypeProps> = ({id, parent, title}) => {

	const arches: Data = {...archetypes, not_found: {...archetypes.not_found}};
	arches.not_found.jsx = <><h2>Error</h2><p>Unable to find the requested {parent} archetype.</p></>;

	const pageId = `archetype-${parent}--${id}`;

	const { title: n, jsx, sources, subhierarchy = [] } = getItem<Data>(id as keyof Data, arches);

	return <BasicPage
		title={n}
		hierarchy={[["Main", "main/main"], ["Classes", "main/classes"], [title, "class/" + parent], ...subhierarchy]}
		sources={sources}
		pageId={pageId}
		topLink={[title, "class/" + parent]}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup6Page;
