import getItem from '../components/getItem';
import brawler from './subpages/__archetype-brawler';
import barbarian from './subpages/__archetype-barbarian';
import familiar from './subpages/__archetype-familiar';
import mesmerist from './subpages/__archetype-mesmerist';
import vigilante from './subpages/__archetype-vigilante';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested archetype.</p></>, title: "Unknown", sources: []},
	...brawler,
	...barbarian,
	...familiar,
	...mesmerist,
	...vigilante
};

type Data = typeof archetypes;

const ArchetypeGroup8Page: React.FC<ArchetypeProps> = ({id, parent, classTitle}) => {

	const arches: Data = {...archetypes, not_found: {...archetypes.not_found}};
	arches.not_found.jsx = <><h2>Error</h2><p>Unable to find the requested {parent} archetype.</p></>;

	const pageId = `archetype-${parent}--${id}`;

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id as keyof Data, arches);

	return <BasicPage
		title={title}
		hierarchy={[["Main", "main/main"], ["Classes", "main/classes"], [classTitle, "class/" + parent], ...subhierarchy]}
		sources={sources}
		pageId={pageId}
		topLink={[classTitle, "class/" + parent]}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup8Page;
