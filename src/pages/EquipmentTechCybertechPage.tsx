import { useParams } from 'react-router';
import getItem from '../components/getItem';
import equipment from './subpages/__tech-cybertech';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Cybertech", "main/tech_cybertech"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentTechCybertechPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, equipment);

	return <BasicPage
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"tech-cybertech--" + id}
		topLink={["Cybertech", "main/tech_cybertech"]}
	>{jsx}</BasicPage>;
};

export default EquipmentTechCybertechPage;
