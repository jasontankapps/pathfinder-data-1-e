import { useParams } from 'wouter';
import inquisitions from './subpages/__inquisition';
import './Page.css';

type Data = typeof inquisitions;

type Params = { id?: keyof Data };

const InquisitionPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = inquisitions[id] || inquisitions.not_found;

	return <Page />;
};

export default InquisitionPage;
