import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import emotionalfocus from './subpages/__emotionalfocus';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof emotionalfocus;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Phantom Emotional Focus", "ability/emotional_focus"];

const ArcanaPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>(id as keyof Data, emotionalfocus);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/emotionalfocus/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArcanaPage;
