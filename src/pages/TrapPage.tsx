import { useParams } from 'wouter';
import getItem from '../components/getItem';
import traps from './subpages/__trap';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof traps;

type Params = { id?: keyof Data };

const trapLink: [string, string] = ["Sample Traps", "rule/sample_traps"];

const TrapPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, traps);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/trap/" + id}
		topLink={trapLink}
	>{jsx}</BasicPage>;
};

export default TrapPage;
