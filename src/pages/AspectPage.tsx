import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import aspects from './subpages/__aspect';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof aspects;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Shifter Aspects", "ability/aspects"];

const AspectPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id as keyof Data, aspects);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/aspect/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default AspectPage;
