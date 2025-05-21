import { useParams } from 'wouter';
import getItem from '../components/getItem';
import magic from './subpages/__magic-rod';
import BasicPage from './BasicPage';
import { Hierarchy } from '../types';
import './Page.css';

const topLink: Hierarchy = ["Magic Rods", "main/magic_rods"];

type Data = typeof magic;

type Params = { id?: keyof Data };

const MagicPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>(id, magic);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/magic-rod/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default MagicPage;
