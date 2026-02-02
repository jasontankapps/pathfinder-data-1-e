import { useParams } from 'wouter';
import Order, { test } from './subpages/__order';
import './Page.css';

type Params = { id?: string };

const OrderPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Order id={test(id) ? id : "not_found"} />;
};

export default OrderPage;
