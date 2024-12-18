import getItem from '../components/getItem';
import kineticist from './subpages/__arc-kineticist';
import rogue from './subpages/__arc-rogue';
import shaman from './subpages/__arc-shaman';
import sorcerer from './subpages/__arc-sorcerer';
import unchained_summoner from './subpages/__arc-unchained_summoner';
import { ArchetypeProps } from './ArchetypePage';
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

const ArchetypeGroup7Page: React.FC<ArchetypeProps> = ({id, parent, classTitle}) => {

	const arches: Data = {...archetypes, not_found: {...archetypes.not_found}};
	arches.not_found.jsx = <><h2>Error</h2><p>Unable to find the requested {parent} archetype.</p></>;

	const pageId = `arc-${parent}--${id}`;

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id as keyof Data, arches);

	return <BasicPage
		title={title}
		hierarchy={[["Main", "main/main"], ["Classes", "main/classes"], [classTitle, "class/" + parent], ...subhierarchy]}
		sources={sources}
		pageId={pageId}
		topLink={[classTitle, "class/" + parent]}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup7Page;
