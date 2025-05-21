import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import inquisitions from './subpages/__inquisition';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof inquisitions;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Inquisitions", "ability/inquisitions"];

const InquisitionPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>(id, inquisitions);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/inquisition/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default InquisitionPage;
