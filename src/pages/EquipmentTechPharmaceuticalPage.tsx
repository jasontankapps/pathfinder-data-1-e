import { useParams } from 'react-router';
import getItem from '../components/getItem';
import equipment from './subpages/__tech-pharmaceutical';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Tech Pharmaceuticals", "main/tech_pharmaceuticals"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentTechPharmaceuticalsPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"tech-pharma--" + id}
		topLink={["Tech Pharmaceuticals", "main/tech_pharmaceuticals"]}
	>{jsx}</BasicPage>;
};

export default EquipmentTechPharmaceuticalsPage;
