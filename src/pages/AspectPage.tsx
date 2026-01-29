import { useParams } from 'wouter';
import aspects from './subpages/__aspect';
import './Page.css';

type Data = typeof aspects;

type Params = { id?: keyof Data };

const AspectPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = aspects[id] || aspects.not_found;

	return <Page />;
};

export default AspectPage;
