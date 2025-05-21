import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import constructmods from './subpages/__constructmod';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof constructmods;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Construct Modifications", "rule/construct_modifications"];

const ConstructModPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>(id as keyof Data, constructmods);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/constructmod/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ConstructModPage;
