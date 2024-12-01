import { useParams } from 'react-router';
import getItem from '../components/getItem';
import equipment from './subpages/__equipment-weapon';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Weapons", "main/equipment_weapons"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentWeaponPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, equipment);

	return <BasicPage
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"equipment-weapon--" + id}
		topLink={["Weapons", "main/equipment_weapons"]}
	>{jsx}</BasicPage>;
};

export default EquipmentWeaponPage;
