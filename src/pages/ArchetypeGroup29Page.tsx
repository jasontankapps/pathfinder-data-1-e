import getItem from '../components/getItem';
import paladin from './subpages/_GEN_arc-paladin';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested paladin archetype.</p></>, title: "Unknown"},
	...paladin, // conflicts with hunter
};

type Data = typeof archetypes;

const ArchetypeGroup29Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const pageId = `/arc-paladin/${id}`;

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, archetypes);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={[classTitle, "class/paladin"]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup29Page;
