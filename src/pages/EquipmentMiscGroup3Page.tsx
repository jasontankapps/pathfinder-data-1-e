import { getGuaranteedItem } from '../components/getItem';
import equipment_misc from '../json/equipment_misc3.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [ ["Main", "main/main"], ["Equipment", "main/equipment"], ["Misc", "main/equipment_misc"]];

type Data = typeof equipment_misc;

interface EquipProps {
	id: string,
};

const EquipmentMiscGroup3Page: React.FC<EquipProps> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), equipment_misc);

	return <BasicPage pageId={"equip-misc/" + id} title={title} markdown={markdown} tables={tables} hierarchy={[...hierarchy, ...subhierarchy]} sources={sources} />;
};

export default EquipmentMiscGroup3Page;
