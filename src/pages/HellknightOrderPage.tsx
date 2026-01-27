import { useParams } from 'wouter';
import orders from './subpages/__hkorder';
import './Page.css';

type Data = typeof orders;

type Params = { id?: keyof Data };

const HellknightOrderPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? orders[id] || orders.not_found : orders.not_found;

	return <Page />;
};

export default HellknightOrderPage;
