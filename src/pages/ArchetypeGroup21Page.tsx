import getItem from '../components/getItem';
import cavalier from './subpages/_GEN_arc-cavalier';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './css/Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested cavalier archetype.</p></>, title: "Unknown"},
	...cavalier // conflicts with companion, familiar, swashbuckler
};

type Data = typeof archetypes;

const ArchetypeGroup21Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const pageId = `/arc-cavalier/${id}`;

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, archetypes);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={[classTitle, "class/cavalier"]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup21Page;
