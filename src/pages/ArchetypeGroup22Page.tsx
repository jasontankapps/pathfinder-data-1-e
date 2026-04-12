import getItem from '../components/getItem';
import inquisitor from './subpages/_GEN_arc-inquisitor';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested inquisitor archetype.</p></>, title: "Unknown"},
	...inquisitor // conflicts with familiar, investigator, ranger
};

type Data = typeof archetypes;

const ArchetypeGroup22Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const pageId = `/arc-inquisitor/${id}`;

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, archetypes);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={[classTitle, "class/inquisitor"]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup22Page;
