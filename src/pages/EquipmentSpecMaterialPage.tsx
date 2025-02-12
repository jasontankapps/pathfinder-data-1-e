import { useParams } from 'wouter';
import getItem from '../components/getItem';
import equipment from './subpages/__eq-material';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentSpecMaterialPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/eq-material/" + id}
		topLink={["Special Materials", "main/equipment_materials"]}
	>{jsx}</BasicPage>;
};

export default EquipmentSpecMaterialPage;
