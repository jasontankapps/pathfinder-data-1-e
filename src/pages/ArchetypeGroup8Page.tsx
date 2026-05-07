import getItem from '../components/getItem';
import brawler from './subpages/_GEN_arc-brawler';
import mesmerist from './subpages/_GEN_arc-mesmerist';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './css/Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested archetype.</p></>, title: "Unknown"},
	...brawler,
	...mesmerist
};

type Data = typeof archetypes;

const ArchetypeGroup8Page: React.FC<ArchetypeProps> = ({id, parent, classTitle}) => {

	const arches: Data = {...archetypes, not_found: {...archetypes.not_found}};
	arches.not_found.jsx = <><h2>Error</h2><p>Unable to find the requested {parent} archetype.</p></>;

	const pageId = `/arc-${parent}/${id}`;

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, arches);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={parent === "familiar" ? [ classTitle, "sidekick/familiar" ] : [classTitle, "class/" + parent]}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup8Page;
