import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import oaths from './subpages/__oath';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof oaths;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Paladin Oaths", "ability/oaths"];

const OathPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, oaths);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/oath/" + id}
		topLink={topLink}
	>{jsx}</BasicPage>;
};

export default OathPage;
