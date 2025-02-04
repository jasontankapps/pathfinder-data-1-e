import { useParams } from 'wouter';
import getItem from '../components/getItem';
import equipment from './subpages/__eq-spellbook';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Spellbooks", "main/equipment_spellbook"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentSpellbookPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"/eq-spellbook/" + id}
		topLink={["Spellbooks", "main/equipment_spellbook"]}
	>{jsx}</BasicPage>;
};

export default EquipmentSpellbookPage;
