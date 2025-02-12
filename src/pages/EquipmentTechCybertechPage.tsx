import { useParams } from 'wouter';
import getItem from '../components/getItem';
import equipment from './subpages/__tech-cybertech';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentTechCybertechPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/tech-cybertech/" + id}
		topLink={["Cybertech", "main/tech_cybertech"]}
	>{jsx}</BasicPage>;
};

export default EquipmentTechCybertechPage;
