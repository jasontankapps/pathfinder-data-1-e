import getItem from '../components/getItem';
import equipment_misc from '../json/equipment_misc.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [ ["Main", "main"], ["Equipment", "equipment"], ["Misc", "equipment_misc"]];

type Data = typeof equipment_misc;

const EquipmentMiscGroup1Page: React.FC<{id: string}> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), equipment_misc);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy: [...hierarchy, ...subhierarchy], sources}} />;
};

export default EquipmentMiscGroup1Page;
