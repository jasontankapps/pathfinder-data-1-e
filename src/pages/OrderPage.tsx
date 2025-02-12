import { useParams } from 'wouter';
import getItem from '../components/getItem';
import orders from './subpages/__order';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof orders;

type Params = { id?: keyof Data };

const OrderPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, orders);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/order/" + id}
		topLink={["Cavalier/Samurai Orders", "ability/orders"]}
	>{jsx}</BasicPage>;
};

export default OrderPage;
