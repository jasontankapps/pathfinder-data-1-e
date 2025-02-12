import { useParams } from 'wouter';
import getItem from '../components/getItem';
import equipment from './subpages/__tech-pharmaceutical';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentTechPharmaceuticalsPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/tech-pharmaceutical/" + id}
		topLink={["Tech Pharmaceuticals", "main/tech_pharmaceuticals"]}
	>{jsx}</BasicPage>;
};

export default EquipmentTechPharmaceuticalsPage;
