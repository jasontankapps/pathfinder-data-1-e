import { useParams } from 'react-router';
import getItem from '../components/getItem';
import equipment from './subpages/__eq-armor';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Armor", "main/equipment_armor"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentArmorPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, equipment);

	return <BasicPage
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"eq-armor--" + id}
		topLink={["Armor", "main/equipment_armor"]}
	>{jsx}</BasicPage>;
};

export default EquipmentArmorPage;
