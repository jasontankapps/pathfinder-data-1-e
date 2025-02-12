import { useParams } from 'wouter';
import getItem from '../components/getItem';
import magic from './subpages/__magic-ioun';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof magic;

type Params = { id?: keyof Data };

const MagicPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, magic);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/magic-ioun/" + id}
		topLink={["Ioun Stone", "magic-wondrous/ioun_stone"]}
	>{jsx}</BasicPage>;
};

export default MagicPage;
