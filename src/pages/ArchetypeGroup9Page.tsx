import getItem from '../components/getItem';
import medium from './subpages/_GEN_arc-medium';
import ninja from './subpages/_GEN_arc-ninja';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './css/Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested archetype.</p></>, title: "Unknown"},
	...medium,
	...ninja
};

type Data = typeof archetypes;

const ArchetypeGroup9Page: React.FC<ArchetypeProps> = ({id, parent, classTitle}) => {

	const arches: Data = {...archetypes, not_found: {...archetypes.not_found}};
	arches.not_found.jsx = <><h2>Error</h2><p>Unable to find the requested {parent} archetype.</p></>;

	const pageId = `/arc-${parent}/${id}`;

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, arches);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={[classTitle, "class/" + parent]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup9Page;
