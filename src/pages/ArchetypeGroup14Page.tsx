import getItem from '../components/getItem';
import vigilante from './subpages/__arc-vigilante';
import familiar from './subpages/__arc-familiar';
import wizard from './subpages/__arc-wizard';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested archetype.</p></>, title: "Unknown", sources: []},
	...vigilante, // conflicts with barbarian
	...familiar, // conflicts with cavalier, bard, inquisitor, investigator, ranger
	...wizard // conflicts with cleric, bloodrager
};

type Data = typeof archetypes;

const ArchetypeGroup14Page: React.FC<ArchetypeProps> = ({id, parent, classTitle}) => {

	const arches: Data = {...archetypes, not_found: {...archetypes.not_found}};
	arches.not_found.jsx = <><h2>Error</h2><p>Unable to find the requested {parent} archetype.</p></>;

	const pageId = `/arc-${parent}/${id}`;

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>(id as keyof Data, arches);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={pageId}
		topLink={parent === "familiar" ? [ classTitle, "sidekick/familiar" ] : [classTitle, "class/" + parent]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup14Page;
