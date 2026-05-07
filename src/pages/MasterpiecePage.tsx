import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import masterpieces from './subpages/_GEN_masterpiece';
import BasicPage from './BasicPage';
import './css/Page.css';

type Data = typeof masterpieces;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Bardic Masterpieces", "ability/bardic_masterpieces"];

const MasterpiecePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id, masterpieces);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/masterpiece/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default MasterpiecePage;
