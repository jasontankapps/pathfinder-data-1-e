import { useParams } from 'wouter';
import getItem from '../components/getItem';
import equipment from './subpages/__tech-weapon';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentTechWeaponPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/tech-weapon/" + id}
		topLink={["Tech Weapons", "main/tech_weapons"]}
	>{jsx}</BasicPage>;
};

export default EquipmentTechWeaponPage;
