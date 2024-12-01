import { useParams } from 'react-router';
import getItem from '../components/getItem';
import equipment from './subpages/__equipment-material';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Special Materials", "main/equipment_materials"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentSpecMaterialPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, equipment);

	return <BasicPage
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"equipment-specialmaterials--" + id}
		topLink={["Special Materials", "main/equipment_materials"]}
	>{jsx}</BasicPage>;
};

export default EquipmentSpecMaterialPage;
