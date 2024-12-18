import getItem from '../components/getItem';
import inquisitor from './subpages/__arc-inquisitor';
import paladin from './subpages/__arc-paladin';
import skald from './subpages/__arc-skald';
import warpriest from './subpages/__arc-warpriest';
import { ArchetypeProps } from './ArchetypePage';
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

const ArchetypeGroup3Page: React.FC<ArchetypeProps> = ({id, parent, classTitle}) => {

	const arches: Data = {...archetypes, not_found: {...archetypes.not_found}};
	arches.not_found.jsx = <><h2>Error</h2><p>Unable to find the requested {parent} archetype.</p></>;

	const pageId = `arc-${parent}--${id}`;

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id as keyof Data, arches);

	return <BasicPage
		title={title}
		hierarchy={[["Main", "main/main"], ["Classes", "main/classes"], [classTitle, "class/" + parent], ...subhierarchy]}
		sources={sources}
		pageId={pageId}
		topLink={[classTitle, "class/" + parent]}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup3Page;
