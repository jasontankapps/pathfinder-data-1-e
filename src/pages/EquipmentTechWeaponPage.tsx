import { useParams } from 'wouter';
import getItem from '../components/getItem';
import equipment from './subpages/__tech-weapon';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Tech Weapons", "main/tech_weapons"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentTechWeaponPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"/tech-weapon/" + id}
		topLink={["Tech Weapons", "main/tech_weapons"]}
	>{jsx}</BasicPage>;
};

export default EquipmentTechWeaponPage;
