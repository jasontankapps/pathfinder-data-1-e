import { useParams } from 'react-router';
import getItem from '../components/getItem';
import equipment from '../json/equipment_special_materials.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main"], ["Equipment", "equipment"], ["Special Materials", "equipment_materials"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentSpecMaterialPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, equipment);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default EquipmentSpecMaterialPage;
