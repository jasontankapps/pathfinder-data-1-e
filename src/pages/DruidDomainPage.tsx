import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import domains from './subpages/__druiddomain';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof domains;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Druid Domains", "ability/druid_domains"];

const DruidDomainPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>(id, domains);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/druiddomain/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default DruidDomainPage;
