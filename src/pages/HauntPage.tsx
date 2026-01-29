import { useParams } from 'wouter';
import haunts from './subpages/__haunt';
import './Page.css';

type Data = typeof haunts;

type Params = { id?: keyof Data };

const HauntPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = haunts[id] || haunts.not_found;

	return <Page />;
};

export default HauntPage;
