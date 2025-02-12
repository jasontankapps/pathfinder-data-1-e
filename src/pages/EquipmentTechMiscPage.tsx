import { useParams } from 'wouter';
import getItem from '../components/getItem';
import equipment from './subpages/__tech-misc';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentTechMiscPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/tech-misc/" + id}
		topLink={["Miscellaneous Tech", "main/tech_misc"]}
	>{jsx}</BasicPage>;
};

export default EquipmentTechMiscPage;
