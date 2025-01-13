import { useParams } from 'wouter';
import getItem from '../components/getItem';
import equipment from './subpages/__eq-armorenh';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Equipment", "main/equipment"],
	["Armor Enhancements", "main/equipment_armorenhancements"]
];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentArmorEnhancementsPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"eq-armorenh--" + id}
		topLink={["Armor Enhancements", "main/equipment_armorenhancements"]}
	>{jsx}</BasicPage>;
};

export default EquipmentArmorEnhancementsPage;
