import { useParams } from 'react-router';
import getItem from '../components/getItem';
import equipment from './subpages/__tech-artifact';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Tech Artifacts", "main/tech_artifacts"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentTechArtifactPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"tech-artifact--" + id}
		topLink={["Tech Artifacts", "main/tech_artifacts"]}
	>{jsx}</BasicPage>;
};

export default EquipmentTechArtifactPage;
