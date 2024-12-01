import { useParams } from 'react-router';
import getItem from '../components/getItem';
import equipment from './subpages/__tech-armor';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Tech Armor", "main/tech_armor"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentTechArmorPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, equipment);

	return <BasicPage
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"tech-armor--" + id}
		topLink={["Tech Armor", "main/tech_armor"]}
	>{jsx}</BasicPage>;
};

export default EquipmentTechArmorPage;
