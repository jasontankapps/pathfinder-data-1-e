import getItem from '../components/getItem';
import ranger from './subpages/_GEN_arc-ranger';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './css/Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested ranger archetype.</p></>, title: "Unknown"},
	...ranger, // conflicts with fighter, familiar, inquisitor, investigator
};

type Data = typeof archetypes;

const ArchetypeGroup24Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const pageId = `/arc-ranger/${id}`;

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, archetypes);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={[classTitle, "class/ranger"]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup24Page;
