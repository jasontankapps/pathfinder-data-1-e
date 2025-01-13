import { useParams } from 'wouter';
import getItem from '../components/getItem';
import equipment from './subpages/__eq-poison';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Poisons", "main/equipment_poisons"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentPoisonPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"eq-poison--" + id}
		topLink={["Poisons", "main/equipment_poisons"]}
	>{jsx}</BasicPage>;
};

export default EquipmentPoisonPage;
