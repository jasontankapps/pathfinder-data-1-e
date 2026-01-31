import { useParams } from 'wouter';
import equipment from './subpages/__tech-armor';
import './Page.css';

type Params = { id?: string };

const EquipmentTechArmorPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = equipment[id] || equipment.not_found;

	return <Page />;
};

export default EquipmentTechArmorPage;
