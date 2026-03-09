import getItem from '../components/getItem';
import monk from './subpages/_GEN_arc-monk';
import samurai from './subpages/_GEN_arc-samurai';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested archetype.</p></>, title: "Unknown"},
	...monk,
	...samurai
};

type Data = typeof archetypes;

const ArchetypeGroup1Page: React.FC<ArchetypeProps> = ({id, parent, classTitle}) => {

	const arches: Data = {...archetypes, not_found: {...archetypes.not_found}};
	arches.not_found.jsx = <><h2>Error</h2><p>Unable to find the requested {parent} archetype.</p></>;

	const pageId = `/arc-${parent}/${id}`;

	// Monk archetypes may be Unchained Monk archetypes...
	const {
		hasJL,
		title,
		jsx,
		topLink = [classTitle, "class/" + parent],
		notBookmarkable
	} = getItem<Data>(id as keyof Data, arches);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup1Page;
