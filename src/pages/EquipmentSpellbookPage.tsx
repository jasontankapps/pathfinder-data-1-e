import { useParams } from 'react-router';
import getItem from '../components/getItem';
import equipment from './subpages/__equipment-spellbook';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Spellbooks", "main/equipment_spellbook"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentSpellbookPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, equipment);

	return <BasicPage
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"equipment-spellbook--" + id}
		topLink={["Spellbooks", "main/equipment_spellbook"]}
	>{jsx}</BasicPage>;
};

export default EquipmentSpellbookPage;
