import getItem from '../components/getItem';
import inquisitor from './subpages/__archetype-inquisitor';
import paladin from './subpages/__archetype-paladin';
import skald from './subpages/__archetype-skald';
import warpriest from './subpages/__archetype-warpriest';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested archetype.</p></>, title: "Unknown", sources: []},
	...inquisitor,
	...paladin,
	...skald,
	...warpriest
};

type Data = typeof archetypes;

interface ArchetypeProps {
	id: string,
	parent: string,
	title: string
};

const ArchetypeGroup3Page: React.FC<ArchetypeProps> = ({id, parent, title}) => {

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

export default ArchetypeGroup3Page;
