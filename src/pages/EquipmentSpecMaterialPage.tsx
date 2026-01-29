import { useParams } from 'wouter';
import equipment from './subpages/__eq-material';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentSpecMaterialPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = equipment[id] || equipment.not_found;

	return <Page />;
};

export default EquipmentSpecMaterialPage;
