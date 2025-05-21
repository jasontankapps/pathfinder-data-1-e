import getItem from '../components/getItem';
import cavalier from './subpages/__arc-cavalier';
import slayer from './subpages/__arc-slayer';
import kineticist from './subpages/__arc-kineticist';
import antipaladin from './subpages/__arc-antipaladin';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested archetype.</p></>, title: "Unknown", sources: []},
	...cavalier, // conflicts with companion, familiar, swashbuckler
	...slayer, // conflicts with rogue
	...kineticist,
	...antipaladin
};

type Data = typeof archetypes;

const ArchetypeGroup11Page: React.FC<ArchetypeProps> = ({id, parent, classTitle}) => {

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

export default ArchetypeGroup11Page;
