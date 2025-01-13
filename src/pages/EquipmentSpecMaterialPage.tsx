import { useParams } from 'wouter';
import getItem from '../components/getItem';
import equipment from './subpages/__eq-material';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Special Materials", "main/equipment_materials"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentSpecMaterialPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"eq-specialmaterials--" + id}
		topLink={["Special Materials", "main/equipment_materials"]}
	>{jsx}</BasicPage>;
};

export default EquipmentSpecMaterialPage;
