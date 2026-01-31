import { useParams } from 'wouter';
import inquisitions from './subpages/__inquisition';
import './Page.css';

type Params = { id?: string };

const InquisitionPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = inquisitions[id] || inquisitions.not_found;

	return <Page />;
};

export default InquisitionPage;
