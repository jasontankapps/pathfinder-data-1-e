import { useParams } from 'wouter';
import occult_implements from './subpages/__implement';
import './Page.css';

type Params = { id?: string };

const ImplementPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = occult_implements[id] || occult_implements.not_found;

	return <Page />;
};

export default ImplementPage;
