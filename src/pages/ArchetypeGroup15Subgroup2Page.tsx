import getItem from '../components/getItem';
import bard from './subpages/_GEN_arc-bard2';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested bard archetype.</p></>, title: "Unknown"},
	...bard // conflicts with companion, familiar, gunslinger, rogue
};

type Data = typeof archetypes;

const ArchetypeGroup15Subgroup2Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const pageId = `/arc-bard/${id}`;

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, archetypes);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={[classTitle, "class/bard"]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup15Subgroup2Page;
