import { useParams } from 'wouter';
import occult_implements from './subpages/__implement';
import './Page.css';

type Data = typeof occult_implements;

type Params = { id?: keyof Data };

const ImplementPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? occult_implements[id] || occult_implements.not_found : occult_implements.not_found;

	return <Page />;
};

export default ImplementPage;
