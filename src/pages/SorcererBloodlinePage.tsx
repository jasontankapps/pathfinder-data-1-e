import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import bloodlines from './subpages/__sorcbloodline';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof bloodlines;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Sorcerer Bloodlines", "ability/sorcerer_bloodlines"];

const SorcererBloodlinePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>(id, bloodlines);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/sorcbloodline/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default SorcererBloodlinePage;
