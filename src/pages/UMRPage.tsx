import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import umr from './subpages/__umr';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof umr;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Universal Monster Rules", "main/umr"];

const UMRPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>(id, umr);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/umr/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default UMRPage;
