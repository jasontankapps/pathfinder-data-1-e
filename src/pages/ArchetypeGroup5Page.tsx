import getItem from '../components/getItem';
import companion from './subpages/__arc-companion';
import ranger from './subpages/__arc-ranger';
import bloodrager from './subpages/__arc-bloodrager';
import { Hierarchy } from '../types';
import { ArchetypeProps } from './ArchetypePage';
import BasicPage from './BasicPage';
import './Page.css';

const archetypes = {
	"not_found": { jsx: <><h2>Error</h2><p>Unable to find the requested archetype.</p></>, title: "Unknown", sources: []},
	...companion, // conflicts with cavalier, bard
	...ranger, // conflicts with fighter, familiar, inquisitor, investigator
	...bloodrager // conflicts with shifter, wizard
};

type Data = typeof archetypes;

const companionTopLink: Hierarchy = [ "Animal Companion", "sidekick/animal_companion" ];

const ArchetypeGroup5Page: React.FC<ArchetypeProps> = ({id, parent, classTitle}) => {

	const arches: Data = {...archetypes, not_found: {...archetypes.not_found}};
	arches.not_found.jsx = <><h2>Error</h2><p>Unable to find the requested {parent} archetype.</p></>;

	const pageId = `/arc-${parent}/${id}`;

	const { hasJL, title, jsx, sources } = getItem<Data>(id as keyof Data, arches);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={pageId}
		topLink={parent === "companion" ? companionTopLink : [classTitle, "class/" + parent]}
	>{jsx}</BasicPage>;
};

export default ArchetypeGroup5Page;
