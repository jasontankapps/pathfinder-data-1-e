import getItem from '../components/getItem';
import brawler from './subpages/__arc-brawler';
import barbarian from './subpages/__arc-barbarian';
import familiar from './subpages/__arc-familiar';
import mesmerist from './subpages/__arc-mesmerist';
import wizard from './subpages/__arc-wizard';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested archetype.</p></>, title: "Unknown", sources: []},
	...brawler,
	...barbarian, // conflicts with vigilante
	...familiar, // conflicts with cavalier, bard, inquisitor, investigator, ranger
	...mesmerist,
	...wizard // conflicts with cleric, bloodrager
};

type Data = typeof archetypes;

const ArchetypeGroup8Page: React.FC<ArchetypeProps> = ({id, parent, classTitle}) => {

	const arches: Data = {...archetypes, not_found: {...archetypes.not_found}};
	arches.not_found.jsx = <><h2>Error</h2><p>Unable to find the requested {parent} archetype.</p></>;

	const pageId = `/arc-${parent}/${id}`;

	const { hasJL, title, jsx, sources } = getItem<Data>(id as keyof Data, arches);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={pageId}
		topLink={parent === "familiar" ? [ classTitle, "sidekick/familiar" ] : [classTitle, "class/" + parent]}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup8Page;
