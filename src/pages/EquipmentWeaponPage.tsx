import { useParams } from 'react-router';
import getItem from '../components/getItem';
import equipment from '../json/equipment_weapons.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Weapons", "main/equipment_weapons"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentWeaponPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, equipment);

	return <BasicPage
		title={title}
		markdown={markdown}
		tables={tables}
		hierarchy={hierarchy}
		sources={sources}
		pageId={"equipment-weapon--" + id}
	/>;
};

export default EquipmentWeaponPage;
