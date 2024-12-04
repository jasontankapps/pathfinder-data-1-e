import { getGuaranteedItem } from '../components/getItem';
import equipment_weapons from './subpages/__equipment-weapon2';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [ ["Main", "main/main"], ["Equipment", "main/equipment"], ["Weapons", "main/equipment_weapons"]];

type Data = typeof equipment_weapons;

interface EquipProps {
	id: string,
};

const EquipmentWeaponGroup2Page: React.FC<EquipProps> = ({id}) => {

	const { title, jsx, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), equipment_weapons);

	return <BasicPage
		pageId={"equip-weapon--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		topLink={["Weapons", "main/equipment_weapons"]}
	>{jsx}</BasicPage>;
};

export default EquipmentWeaponGroup2Page;
