import getItem from '../components/getItem';
import gunslinger from './subpages/__arc-gunslinger';
import hunter from './subpages/__arc-hunter';
import shaman from './subpages/__arc-shaman';
import shifter from './subpages/__arc-shifter';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested archetype.</p></>, title: "Unknown", sources: []},
	...gunslinger, // conflicts with bard
	...hunter, // conflicts with paladin, rogue
	...shaman,
	...shifter // conflicts with bloodrager
};

type Data = typeof archetypes;

const ArchetypeGroup13Page: React.FC<ArchetypeProps> = ({id, parent, classTitle}) => {

	const arches: Data = {...archetypes, not_found: {...archetypes.not_found}};
	arches.not_found.jsx = <><h2>Error</h2><p>Unable to find the requested {parent} archetype.</p></>;

	const pageId = `/arc-${parent}/${id}`;

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>(id as keyof Data, arches);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={pageId}
		topLink={[classTitle, "class/" + parent]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup13Page;
