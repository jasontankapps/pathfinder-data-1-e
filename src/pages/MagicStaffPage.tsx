import { useParams } from 'wouter';
import getItem from '../components/getItem';
import magic from './subpages/_GEN_magic-staff';
import BasicPage from './BasicPage';
import { Hierarchy } from '../types';
import './css/Page.css';

const topLink: Hierarchy = ["Magic Staves", "main/magic_staves"];

type Data = typeof magic;

type Params = { id?: keyof Data };

const MagicPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id, magic);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/magic-staff/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default MagicPage;
