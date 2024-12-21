import { getGuaranteedItem } from '../components/getItem';
import equipment_misc from './subpages/__eq-misc4';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [ ["Main", "main/main"], ["Equipment", "main/equipment"]];

type Data = typeof equipment_misc;

interface EquipProps {
	id: string,
};

const EquipmentMiscGroup4Page: React.FC<EquipProps> = ({id}) => {

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), equipment_misc);

	return <BasicPage
		hasJL={hasJL}
		pageId={"equip-misc--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		topLink={["Equipment", "main/equipment"]}
	>{jsx}</BasicPage>;
};

export default EquipmentMiscGroup4Page;
