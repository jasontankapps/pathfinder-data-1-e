import getItem from '../components/getItem';
import fighter from './subpages/_GEN_arc-fighter2';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested fighter archetype.</p></>, title: "Unknown"},
	...fighter // conflicts with ranger, skald
};

type Data = typeof archetypes;

const ArchetypeGroup19Subgroup1Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const pageId = `/arc-fighter/${id}`;

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, archetypes);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={[classTitle, "class/fighter"]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup19Subgroup1Page;
