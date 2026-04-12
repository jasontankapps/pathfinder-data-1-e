import getItem from '../components/getItem';
import samurai from './subpages/_GEN_arc-samurai';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested samurai archetype.</p></>, title: "Unknown"},
	...samurai
};

type Data = typeof archetypes;

const ArchetypeGroup1Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const pageId = `/arc-samurai/${id}`;

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, archetypes);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={[classTitle, "class/samurai"]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup1Page;
