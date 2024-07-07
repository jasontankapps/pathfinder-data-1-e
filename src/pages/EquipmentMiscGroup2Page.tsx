import { getGuaranteedItem } from '../components/getItem';
import equipment_misc from '../json/equipment_misc2.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [ ["Main", "main/main"], ["Equipment", "main/equipment"], ["Misc", "main/equipment_misc"]];

type Data = typeof equipment_misc;

const EquipmentMiscGroup2Page: React.FC<{id: string}> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), equipment_misc);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy: [...hierarchy, ...subhierarchy], sources}} />;
};

export default EquipmentMiscGroup2Page;
