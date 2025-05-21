import { useParams } from 'wouter';
import getItem from '../components/getItem';
import misc from './subpages/__misc';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof misc;

type Params = { id?: keyof Data };

const MiscPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, topLink, notBookmarkable } = getItem<Data>(id, misc);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/misc/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default MiscPage;
