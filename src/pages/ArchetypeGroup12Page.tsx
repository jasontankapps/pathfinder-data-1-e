import getItem from '../components/getItem';
import investigator from './subpages/_GEN_arc-investigator';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested investigator archetype.</p></>, title: "Unknown"},
	...investigator, // conflicts with familiar, inquisitor, ranger
};

type Data = typeof archetypes;

const ArchetypeGroup12Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const pageId = `/arc-investigator/${id}`;

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, archetypes);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={[classTitle, "class/investigator"]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup12Page;
