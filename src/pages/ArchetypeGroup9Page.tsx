import getItem from '../components/getItem';
import druid from './subpages/__arc-druid';
import medium from './subpages/__arc-medium';
import ninja from './subpages/__arc-ninja';
import wizard from './subpages/__arc-wizard';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested archetype.</p></>, title: "Unknown", sources: []},
	...druid,
	...medium,
	...ninja,
	...wizard
};

type Data = typeof archetypes;

const ArchetypeGroup9Page: React.FC<ArchetypeProps> = ({id, parent, classTitle}) => {

	const arches: Data = {...archetypes, not_found: {...archetypes.not_found}};
	arches.not_found.jsx = <><h2>Error</h2><p>Unable to find the requested {parent} archetype.</p></>;

	const pageId = `arc-${parent}--${id}`;

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id as keyof Data, arches);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[["Main", "main/main"], ["Classes", "main/classes"], [classTitle, "class/" + parent], ...subhierarchy]}
		sources={sources}
		pageId={pageId}
		topLink={[classTitle, "class/" + parent]}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup9Page;
