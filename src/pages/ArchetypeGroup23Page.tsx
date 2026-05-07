import getItem from '../components/getItem';
import gunslinger from './subpages/_GEN_arc-gunslinger';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './css/Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested gunslinger archetype.</p></>, title: "Unknown"},
	...gunslinger // conflicts with bard
};

type Data = typeof archetypes;

const ArchetypeGroup23Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const pageId = `/arc-gunslinger/${id}`;

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, archetypes);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={[classTitle, "class/gunslinger"]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup23Page;
