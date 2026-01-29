import { useParams } from 'wouter';
import equipment from './subpages/__eq-reagent';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentAlchemicalReagentPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = equipment[id] || equipment.not_found;

	return <Page />;
};

export default EquipmentAlchemicalReagentPage;
