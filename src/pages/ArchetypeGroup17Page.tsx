import getItem from '../components/getItem';
import barbarian from './subpages/_GEN_arc-barbarian';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested barbarian archetype.</p></>, title: "Unknown"},
	...barbarian // conflicts with vigilante
};

type Data = typeof archetypes;

const ArchetypeGroup17Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const pageId = `/arc-barbarian/${id}`;

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, archetypes);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={[classTitle, "class/barbarian"]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup17Page;
