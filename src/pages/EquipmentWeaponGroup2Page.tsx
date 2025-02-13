import { getGuaranteedItem } from '../components/getItem';
import equipment_weapons from './subpages/__eq-weapon2';
import { Hierarchy } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof equipment_weapons;

interface EquipProps {
	id: string,
};

const topLink: Hierarchy = ["Weapons", "main/equipment_weapons"];

const EquipmentWeaponGroup2Page: React.FC<EquipProps> = ({id}) => {

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), equipment_weapons);

	return <BasicPage
		hasJL={hasJL}
		pageId={"/eq-weapon/" + id}
		title={title}
		sources={sources}
		topLink={subhierarchy.length ? subhierarchy[0] : topLink}
	>{jsx}</BasicPage>;
};

export default EquipmentWeaponGroup2Page;
