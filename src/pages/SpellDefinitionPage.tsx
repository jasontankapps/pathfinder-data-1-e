import { useParams } from 'react-router';
import getItem from '../components/getItem';
import defs from './subpages/__spelldef';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [ ["Main", "main/main"], ["Spells", "main/spells"], ["Spell Definitions", "main/spell_definitions"] ];

type Data = typeof defs;

type Params = { id?: keyof Data };

const SpellDefPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, defs);

	return <BasicPage
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"spell-def--" + id}
		topLink={["Spell Definitions", "main/spell_definitions"]}
	>{jsx}</BasicPage>;
};

export default SpellDefPage;
