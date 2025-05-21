import getItem from '../components/getItem';
import equipment_weapons from './subpages/__eq-weapon1';
import { Hierarchy } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof equipment_weapons;

interface EquipProps {
	id: string,
};

const tL: Hierarchy = ["Weapons", "main/equipment_weapons"];

const EquipmentWeaponGroup1Page: React.FC<EquipProps> = ({id}) => {

	const { hasJL, title, jsx, sources, topLink, notBookmarkable } = getItem<Data>((id as keyof Data), equipment_weapons);

	return <BasicPage
		hasJL={hasJL}
		pageId={"/eq-weapon/" + id}
		title={title}
		sources={sources}
		topLink={topLink || tL}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default EquipmentWeaponGroup1Page;
