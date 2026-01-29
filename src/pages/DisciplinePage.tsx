import { useParams } from 'wouter';
import disciplines from './subpages/__discipline';
import './Page.css';

type Data = typeof disciplines;

type Params = { id?: keyof Data };

const DiscliplinePage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = disciplines[id] || disciplines.not_found;

	return <Page />;
};

export default DiscliplinePage;
