import { useParams } from 'wouter';
import haunts from './subpages/__haunt';
import './Page.css';

type Data = typeof haunts;

type Params = { id?: keyof Data };

const HauntPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? haunts[id] || haunts.not_found : haunts.not_found;

	return <Page />;
};

export default HauntPage;
