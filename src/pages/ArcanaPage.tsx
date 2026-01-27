import { useParams } from 'wouter';
import arcana from './subpages/__arcana';
import './Page.css';

type Data = typeof arcana;

type Params = { id?: keyof Data };

const ArcanaPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? arcana[id] || arcana.not_found : arcana.not_found;

	return <Page />;
};

export default ArcanaPage;
