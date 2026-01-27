import { useParams } from 'wouter';
import equipment from './subpages/__eq-poison';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentPoisonPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? equipment[id] || equipment.not_found : equipment.not_found;

	return <Page />;
};

export default EquipmentPoisonPage;
