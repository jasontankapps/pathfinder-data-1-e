import { useParams } from 'wouter';
import getItem from '../components/getItem';
import equipment from './subpages/__eq-poison';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentPoisonPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/eq-poison/" + id}
		topLink={["Poisons", "main/equipment_poisons"]}
	>{jsx}</BasicPage>;
};

export default EquipmentPoisonPage;
