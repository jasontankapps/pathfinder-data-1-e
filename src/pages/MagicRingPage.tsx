import { useParams } from 'wouter';
import getItem from '../components/getItem';
import magic from './subpages/__magic-ring';
import BasicPage from './BasicPage';
import { Hierarchy } from '../types';
import './Page.css';

type Data = typeof magic;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Magic Rings", "main/magic_rings"];

const MagicPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources } = getItem<Data>(id, magic);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/magic-ring/" + id}
		topLink={topLink}
	>{jsx}</BasicPage>;
};

export default MagicPage;
