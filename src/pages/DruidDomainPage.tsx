import { useParams } from 'wouter';
import domains from './subpages/__druiddomain';
import './Page.css';

type Data = typeof domains;

type Params = { id?: keyof Data };

const DruidDomainPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? domains[id] || domains.not_found : domains.not_found;

	return <Page />;
};

export default DruidDomainPage;
