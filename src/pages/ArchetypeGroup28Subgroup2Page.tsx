import getItem from '../components/getItem';
import monk from './subpages/_GEN_arc-monk2';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './css/Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested monk archetype.</p></>, title: "Unknown"},
	...monk
};

type Data = typeof archetypes;

const ArchetypeGroup28Subgroup1Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const pageId = `/arc-monk/${id}`;

	// Monk archetypes may be Unchained Monk archetypes...
	const {
		hasJL, title, jsx, notBookmarkable, topLink = [classTitle, "class/monk"]
	} = getItem<Data>(id as keyof Data, archetypes);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup28Subgroup1Page;
