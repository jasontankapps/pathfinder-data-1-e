import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import emotionalfocus from './subpages/_GEN_emotionalfocus';
import BasicPage from './BasicPage';
import './css/Page.css';

type Data = typeof emotionalfocus;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Phantom Emotional Focus", "ability/emotional_focus"];

const ArcanaPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, emotionalfocus);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/emotionalfocus/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArcanaPage;
