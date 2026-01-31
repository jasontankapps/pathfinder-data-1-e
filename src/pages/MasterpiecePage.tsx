import { useParams } from 'wouter';
import masterpieces from './subpages/__masterpiece';
import './Page.css';

type Params = { id?: string };

const MasterpiecePage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = masterpieces[id] || masterpieces.not_found;

	return <Page />;
};

export default MasterpiecePage;
