import { useParams } from 'wouter';
import orders from './subpages/__hkorder';
import './Page.css';

type Params = { id?: string };

const HellknightOrderPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = orders[id] || orders.not_found;

	return <Page />;
};

export default HellknightOrderPage;
