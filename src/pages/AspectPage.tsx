import { useParams } from 'wouter';
import aspects from './subpages/__aspect';
import './Page.css';

type Data = typeof aspects;

type Params = { id?: keyof Data };

const AspectPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? aspects[id] || aspects.not_found : aspects.not_found;

	return <Page />;
};

export default AspectPage;
