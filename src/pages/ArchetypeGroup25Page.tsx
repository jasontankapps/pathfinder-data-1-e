import getItem from '../components/getItem';
import spiritualist from './subpages/_GEN_arc-spiritualist';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested spiritualist archetype.</p></>, title: "Unknown"},
	...spiritualist // conflicts with summoner
};

type Data = typeof archetypes;

const ArchetypeGroup12Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const pageId = `/arc-spiritualist/${id}`;

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, archetypes);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={[classTitle, "class/spiritualist"]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup12Page;
