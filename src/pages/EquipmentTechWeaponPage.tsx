import { useParams } from 'wouter';
import equipment from './subpages/__tech-weapon';
import './Page.css';

type Params = { id?: string };

const EquipmentTechWeaponPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = equipment[id] || equipment.not_found;

	return <Page />;
};

export default EquipmentTechWeaponPage;
