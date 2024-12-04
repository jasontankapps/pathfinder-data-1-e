import getItem from '../components/getItem';
import kineticist from './subpages/__archetype-kineticist';
import rogue from './subpages/__archetype-rogue';
import shaman from './subpages/__archetype-shaman';
import sorcerer from './subpages/__archetype-sorcerer';
import unchained_summoner from './subpages/__archetype-unchained_summoner';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested archetype.</p></>, title: "Unknown", sources: []},
	...kineticist,
	...rogue,
	...shaman,
	...sorcerer,
	...unchained_summoner
};

type Data = typeof archetypes;

interface ArchetypeProps {
	id: string,
	parent: string,
	title: string
};

const ArchetypeGroup7Page: React.FC<ArchetypeProps> = ({id, parent, title}) => {

	const arches: Data = {...archetypes, not_found: {...archetypes.not_found}};
	arches.not_found.jsx = <><h2>Error</h2><p>Unable to find the requested {parent} archetype.</p></>;

	const pageId = `archetype-${parent}--${id}`;

	const { title: n, jsx, sources, subhierarchy = [] } = getItem<Data>(id as keyof Data, arches);

	return <BasicPage
		title={n}
		hierarchy={[["Main", "main/main"], ["Classes", "main/classes"], [title, "class/" + parent], ...subhierarchy]}
		sources={sources}
		pageId={pageId}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup7Page;
