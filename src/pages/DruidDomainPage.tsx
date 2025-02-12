import { useParams } from 'wouter';
import getItem from '../components/getItem';
import domains from './subpages/__druiddomain';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof domains;

type Params = { id?: keyof Data };

const DruidDomainPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, domains);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/druiddomain/" + id}
		topLink={["Druid Domains", "ability/druid_domains"]}
	>{jsx}</BasicPage>;
};

export default DruidDomainPage;
