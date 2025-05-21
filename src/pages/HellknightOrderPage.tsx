import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import orders from './subpages/__hkorder';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof orders;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Hellknight Orders", "ability/hellknight_orders"];

const HellknightOrderPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>(id, orders);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/hkorder/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default HellknightOrderPage;
