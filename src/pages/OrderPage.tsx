import { useParams } from 'react-router';
import getItem from '../components/getItem';
import orders from '../json/class_ability_orders.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Classes", "classes"],
	["Cavalier", "class/cavalier"],
	["Samurai", "class/samurai"],
	["Orders", "ability/orders"]
];

type Data = typeof orders;

type Params = { id?: keyof Data };

const OrderPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, orders);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default OrderPage;
