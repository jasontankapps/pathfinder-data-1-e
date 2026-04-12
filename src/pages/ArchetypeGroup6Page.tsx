import getItem from '../components/getItem';
import witch from './subpages/_GEN_arc-witch';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested witch archetype.</p></>, title: "Unknown"},
	...witch
};

type Data = typeof archetypes;

const ArchetypeGroup6Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const pageId = `/arc-witch/${id}`;

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, archetypes);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={[classTitle, "class/witch"]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup6Page;
