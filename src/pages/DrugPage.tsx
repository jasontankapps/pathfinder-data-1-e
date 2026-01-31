import { useParams } from 'wouter';
import drugs from './subpages/__drug';
import './Page.css';

type Params = { id?: string };

const DrugPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = drugs[id] || drugs.not_found;

	return <Page />;
};

export default DrugPage;
