import { useParams } from 'wouter';
import getItem from '../components/getItem';
import oaths from './subpages/__oath';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof oaths;

type Params = { id?: keyof Data };

const OathPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, oaths);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/oath/" + id}
		topLink={["Paladin Oaths", "ability/oaths"]}
	>{jsx}</BasicPage>;
};

export default OathPage;
