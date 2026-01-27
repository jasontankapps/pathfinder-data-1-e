import { useParams } from 'wouter';
import drugs from './subpages/__drug';
import './Page.css';

type Data = typeof drugs;

type Params = { id?: keyof Data };

const DrugPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? drugs[id] || drugs.not_found : drugs.not_found;

	return <Page />;
};

export default DrugPage;
