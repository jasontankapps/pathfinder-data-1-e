import getItem from '../components/getItem';
import equipment_misc from './subpages/__eq-misc1';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [ ["Main", "main/main"], ["Equipment", "main/equipment"]];

type Data = typeof equipment_misc;

interface EquipProps {
	id: string,
};

const EquipmentMiscGroup1Page: React.FC<EquipProps> = ({id}) => {

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), equipment_misc);

	return <BasicPage
		pageId={"equip-misc--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		topLink={["Equipment", "main/equipment"]}
	>{jsx}</BasicPage>;
};

export default EquipmentMiscGroup1Page;
