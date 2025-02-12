import { useParams } from 'wouter';
import getItem from '../components/getItem';
import equipment from './subpages/__eq-weaponenh';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentWeaponEnhancementsPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/eq-weaponenh/" + id}
		topLink={["Weapon Enhancements", "main/equipment_weaponenhancements"]}
	>{jsx}</BasicPage>;
};

export default EquipmentWeaponEnhancementsPage;
