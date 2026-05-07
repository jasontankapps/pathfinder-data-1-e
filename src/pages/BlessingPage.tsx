import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import blessings from './subpages/_GEN_blessing';
import BasicPage from './BasicPage';
import './css/Page.css';

type Data = typeof blessings;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Warpriest Blessings", "ability/blessings"];

const BlessingPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, blessings);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/blessing/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default BlessingPage;
