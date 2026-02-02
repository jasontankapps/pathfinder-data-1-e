import { useParams } from 'wouter';
import DruidDomain, { test } from './subpages/__druiddomain';
import './Page.css';

type Params = { id?: string };

const DruidDomainPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <DruidDomain id={test(id) ? id : "not_found"} />;
};

export default DruidDomainPage;
