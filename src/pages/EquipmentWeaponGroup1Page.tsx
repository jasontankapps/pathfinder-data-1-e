import getItem from '../components/getItem';
import equipment_weapons from './subpages/__eq-weapon1';
import BasicPage from './BasicPage';
import './Page.css';

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
		sources={sources}
		topLink={subhierarchy.length ? subhierarchy[0] : undefined}
	>{jsx}</BasicPage>;
};

export default EquipmentWeaponGroup1Page;
