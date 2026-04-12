import getItem from '../components/getItem';
import magus from './subpages/_GEN_arc-magus';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested magus archetype.</p></>, title: "Unknown"},
	...magus // conflicts with paladin, rogue
};

type Data = typeof archetypes;

const ArchetypeGroup27Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const pageId = `/arc-magus/${id}`;

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, archetypes);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={[classTitle, "class/magus"]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup27Page;
