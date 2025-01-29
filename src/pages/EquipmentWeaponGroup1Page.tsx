import getItem from '../components/getItem';
import equipment_weapons from './subpages/__eq-weapon1';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [ ["Main", "main/main"], ["Equipment", "main/equipment"] ];

type Data = typeof equipment_weapons;

interface EquipProps {
	id: string,
};

const EquipmentWeaponGroup1Page: React.FC<EquipProps> = ({id}) => {

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), equipment_weapons);

	return <BasicPage
		hasJL={hasJL}
		pageId={"/eq-weapon/" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		topLink={subhierarchy.length ? subhierarchy[0] : hierarchy[1]}
	>{jsx}</BasicPage>;
};

export default EquipmentWeaponGroup1Page;
