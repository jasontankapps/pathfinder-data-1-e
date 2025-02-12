import { useParams } from 'wouter';
import getItem from '../components/getItem';
import equipment from './subpages/__eq-reagent';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentAlchemicalReagentPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/eq-reagent/" + id}
		topLink={["Alchemical Reagents", "main/equipment_reagents"]}
	>{jsx}</BasicPage>;
};

export default EquipmentAlchemicalReagentPage;
