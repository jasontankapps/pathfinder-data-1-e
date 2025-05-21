import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import masterpieces from './subpages/__masterpiece';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof masterpieces;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Bardic Masterpieces", "ability/bardic_masterpieces"];

const MasterpiecePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>(id, masterpieces);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/masterpiece/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default MasterpiecePage;
