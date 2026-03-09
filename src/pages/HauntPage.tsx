import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import haunts from './subpages/_GEN_haunt';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof haunts;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Haunts", "main/haunts"];

const HauntPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, notBookmarkable, } = getItem<Data>(id, haunts);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/haunt/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
		className="simple hasStatblock"
	>{jsx}</BasicPage>;
};

export default HauntPage;
