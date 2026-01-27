import { useParams } from 'wouter';
import masterpieces from './subpages/__masterpiece';
import './Page.css';

type Data = typeof masterpieces;

type Params = { id?: keyof Data };

const MasterpiecePage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? masterpieces[id] || masterpieces.not_found : masterpieces.not_found;

	return <Page />;
};

export default MasterpiecePage;
