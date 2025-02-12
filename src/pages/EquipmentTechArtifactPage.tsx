import { useParams } from 'wouter';
import getItem from '../components/getItem';
import equipment from './subpages/__tech-artifact';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentTechArtifactPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/tech-artifact/" + id}
		topLink={["Tech Artifacts", "main/tech_artifacts"]}
	>{jsx}</BasicPage>;
};

export default EquipmentTechArtifactPage;
