import getItem from '../components/getItem';
import cleric from './subpages/_GEN_arc-cleric';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested cleric archetype.</p></>, title: "Unknown"},
	...cleric // conflicts with wizard
};

type Data = typeof archetypes;

const ArchetypeGroup20Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const pageId = `/arc-cleric/${id}`;

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, archetypes);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={[classTitle, "class/cleric"]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup20Page;
