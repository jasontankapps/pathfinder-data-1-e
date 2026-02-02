import { useParams } from 'wouter';
import Order, { test } from './subpages/__hkorder';
import './Page.css';

type Params = { id?: string };

const HellknightOrderPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Order id={test(id) ? id : "not_found"} />;
};

export default HellknightOrderPage;
