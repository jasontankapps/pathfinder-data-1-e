import { useParams } from 'wouter';
import getItem from '../components/getItem';
import defs from './subpages/__spelldef';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Spells", "main/spells"],
	["Spell Definitions", "main/spell_definitions"]
];

type Data = typeof defs;

type Params = { id?: keyof Data };

const SpellDefPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, defs);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"/spelldef/" + id}
		topLink={["Spell Definitions", "main/spell_definitions"]}
	>{jsx}</BasicPage>;
};

export default SpellDefPage;
