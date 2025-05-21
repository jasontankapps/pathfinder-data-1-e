import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import magic from './subpages/__magic-ioun';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof magic;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Ioun Stone", "magic-wondrous/ioun_stone"];

const MagicPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>(id, magic);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/magic-ioun/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default MagicPage;
