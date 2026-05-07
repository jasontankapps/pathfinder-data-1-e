import { getGuaranteedItem } from '../components/getItem';
import equipment_weapons from './subpages/_GEN_eq-weapon2';
import { Hierarchy } from '../types';
import BasicPage from './BasicPage';
import './css/Page.css';

type Data = typeof equipment_weapons;

interface EquipProps {
	id: string,
};

const tL: Hierarchy = ["Weapons", "main/equipment_weapons"];

const EquipmentWeaponGroup2Page: React.FC<EquipProps> = ({id}) => {

	const { hasJL, title, jsx, topLink, notBookmarkable } = getGuaranteedItem<Data>((id as keyof Data), equipment_weapons);

	return <BasicPage
		hasJL={hasJL}
		pageId={"/eq-weapon/" + id}
		title={title}
		topLink={topLink || tL}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default EquipmentWeaponGroup2Page;
