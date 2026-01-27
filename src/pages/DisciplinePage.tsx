import { useParams } from 'wouter';
import disciplines from './subpages/__discipline';
import './Page.css';

type Data = typeof disciplines;

type Params = { id?: keyof Data };

const DiscliplinePage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? disciplines[id] || disciplines.not_found : disciplines.not_found;

	return <Page />;
};

export default DiscliplinePage;
