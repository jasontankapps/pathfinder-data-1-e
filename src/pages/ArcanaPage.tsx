import { useParams } from 'wouter';
import arcana from './subpages/__arcana';
import './Page.css';

type Params = { id?: string };

const ArcanaPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = arcana[id] || arcana.not_found;

	return <Page />;
};

export default ArcanaPage;
