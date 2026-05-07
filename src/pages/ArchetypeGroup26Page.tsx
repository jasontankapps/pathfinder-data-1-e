import getItem from '../components/getItem';
import hunter from './subpages/_GEN_arc-hunter';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './css/Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested hunter archetype.</p></>, title: "Unknown"},
	...hunter // conflicts with paladin, rogue
};

type Data = typeof archetypes;

const ArchetypeGroup26Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const pageId = `/arc-hunter/${id}`;

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, archetypes);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={[classTitle, "class/hunter"]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup26Page;
