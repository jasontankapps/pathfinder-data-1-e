import getItem from '../components/getItem';
import alchemist from './subpages/_GEN_arc-alchemist1';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested alchemist archetype.</p></>, title: "Unknown"},
	...alchemist
};

type Data = typeof archetypes;

const ArchetypeGroup16Subgroup1Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const pageId = `/arc-alchemist/${id}`;

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, archetypes);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={[classTitle, "class/alchemist"]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup16Subgroup1Page;
