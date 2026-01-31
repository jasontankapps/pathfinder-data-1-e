import { useParams } from 'wouter';
import haunts from './subpages/__haunt';
import './Page.css';

type Params = { id?: string };

const HauntPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = haunts[id] || haunts.not_found;

	return <Page />;
};

export default HauntPage;
