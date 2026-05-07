import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import mysteries from './subpages/_GEN_mystery';
import BasicPage from './BasicPage';
import './css/Page.css';

type Data = typeof mysteries;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Oracle Mysteries", "ability/mysteries"];

const MysteryPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id, mysteries);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/mystery/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default MysteryPage;
