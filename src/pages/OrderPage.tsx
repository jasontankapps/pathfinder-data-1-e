import { useParams } from 'wouter';
import getItem from '../components/getItem';
import orders from './subpages/__order';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Cavalier", "class/cavalier"],
	["Samurai", "class/samurai"],
	["Orders", "ability/orders"]
];

type Data = typeof orders;

type Params = { id?: keyof Data };

const OrderPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, orders);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"order--" + id}
		topLink={["Cavalier/Samurai Orders", "ability/orders"]}
	>{jsx}</BasicPage>;
};

export default OrderPage;
