import getItem from '../components/getItem';
import monk from './subpages/__arc-monk';
import samurai from './subpages/__arc-samurai';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested archetype.</p></>, title: "Unknown", sources: []},
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
		sources,
		topLink = [classTitle, "class/" + parent],
		notBookmarkable
	} = getItem<Data>(id as keyof Data, arches);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={pageId}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup1Page;
