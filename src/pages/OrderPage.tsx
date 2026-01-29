import { useParams } from 'wouter';
import orders from './subpages/__order';
import './Page.css';

type Data = typeof orders;

type Params = { id?: keyof Data };

const OrderPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = orders[id] || orders.not_found;

	return <Page />;
};

export default OrderPage;
