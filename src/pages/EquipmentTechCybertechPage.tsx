import { useParams } from 'react-router';
import getItem from '../components/getItem';
import equipment from '../json/equipment_tech_cybertech.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main"], ["Equipment", "equipment"], ["Cybertech", "equipment_tech_cybertech"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentTechCybertechPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, equipment);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default EquipmentTechCybertechPage;
