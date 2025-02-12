import { useParams } from 'wouter';
import getItem from '../components/getItem';
import equipment from './subpages/__eq-armorenh';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentArmorEnhancementsPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/eq-armorenh/" + id}
		topLink={["Armor Enhancements", "main/equipment_armorenhancements"]}
	>{jsx}</BasicPage>;
};

export default EquipmentArmorEnhancementsPage;
