import { useParams } from 'react-router';
import getItem from '../components/getItem';
import equipment from './subpages/__equipment-armorenhancement';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Armor Enhancements", "main/equipment_armorenhancements"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentArmorEnhancementsPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, equipment);

	return <BasicPage
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"equipment-armorenhancement--" + id}
		topLink={["Armor Enhancements", "main/equipment_armorenhancements"]}
	>{jsx}</BasicPage>;
};

export default EquipmentArmorEnhancementsPage;
