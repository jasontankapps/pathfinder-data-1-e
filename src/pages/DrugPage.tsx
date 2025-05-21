import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import drugs from './subpages/__drug';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof drugs;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Drugs", "main/drugs"];

const DrugPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>(id, drugs);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/drug/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default DrugPage;
