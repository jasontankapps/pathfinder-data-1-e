import { useParams } from 'wouter';
import getItem from '../components/getItem';
import magic from './subpages/_GEN_magic-rod';
import BasicPage from './BasicPage';
import { Hierarchy } from '../types';
import './css/Page.css';

const topLink: Hierarchy = ["Magic Rods", "main/magic_rods"];

type Data = typeof magic;

type Params = { id?: keyof Data };

const MagicPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id, magic);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/magic-rod/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default MagicPage;
