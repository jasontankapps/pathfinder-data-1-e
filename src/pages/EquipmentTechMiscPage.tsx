import { useParams } from 'wouter';
import getItem from '../components/getItem';
import equipment from './subpages/__tech-misc';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Miscellaneous Tech", "main/tech_misc"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentTechMiscPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"/tech-misc/" + id}
		topLink={["Miscellaneous Tech", "main/tech_misc"]}
	>{jsx}</BasicPage>;
};

export default EquipmentTechMiscPage;
