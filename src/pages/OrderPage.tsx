import { useParams } from 'wouter';
import orders from './subpages/__order';
import './Page.css';

type Params = { id?: string };

const OrderPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = orders[id] || orders.not_found;

	return <Page />;
};

export default OrderPage;
