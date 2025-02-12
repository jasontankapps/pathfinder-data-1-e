import { useParams } from 'wouter';
import getItem from '../components/getItem';
import equipment from './subpages/__eq-armor';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentArmorPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/eq-armor/" + id}
		topLink={["Armor", "main/equipment_armor"]}
	>{jsx}</BasicPage>;
};

export default EquipmentArmorPage;
