import getItem from '../components/getItem';
import druid from './subpages/_GEN_arc-druid2';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './css/Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested druid archetype.</p></>, title: "Unknown"},
	...druid
};

type Data = typeof archetypes;

const ArchetypeGroup18Subgroup1Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const pageId = `/arc-druid/${id}`;

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, archetypes);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={[classTitle, "class/druid"]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup18Subgroup1Page;
