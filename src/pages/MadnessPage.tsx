import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import madnesses from './subpages/_GEN_madness';
import BasicPage from './BasicPage';
import './css/Page.css';

type Data = typeof madnesses;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Madness", "rule/madness"];

const MadnessPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id, madnesses);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/madness/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default MadnessPage;
