import { useParams } from 'react-router';
import getItem from '../components/getItem';
import equipment from './subpages/__eq-weaponenh';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Weapon Enhancements", "main/equipment_weaponenhancements"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentWeaponEnhancementsPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, equipment);

	return <BasicPage
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"eq-weaponenhance--" + id}
		topLink={["Weapon Enhancements", "main/equipment_weaponenhancements"]}
	>{jsx}</BasicPage>;
};

export default EquipmentWeaponEnhancementsPage;
