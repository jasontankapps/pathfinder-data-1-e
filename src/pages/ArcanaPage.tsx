import { useParams } from 'wouter';
import arcana from './subpages/__arcana';
import './Page.css';

type Data = typeof arcana;

type Params = { id?: keyof Data };

const ArcanaPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = arcana[id] || arcana.not_found;

	return <Page />;
};

export default ArcanaPage;
