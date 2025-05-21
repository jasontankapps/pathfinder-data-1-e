import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import blessings from './subpages/__blessing';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof blessings;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Warpriest Blessings", "ability/blessings"];

const BlessingPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>(id as keyof Data, blessings);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/blessing/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default BlessingPage;
