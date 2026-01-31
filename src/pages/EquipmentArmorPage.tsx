import { useParams } from 'wouter';
import equipment from './subpages/__eq-armor';
import './Page.css';

type Params = { id?: string };

const EquipmentArmorPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = equipment[id] || equipment.not_found;

	return <Page />;
};

export default EquipmentArmorPage;
