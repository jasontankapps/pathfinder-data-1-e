import { useParams } from 'wouter';
import getItem from '../components/getItem';
import traps from './subpages/_GEN_trap';
import BasicPage from './BasicPage';
import './css/Page.css';

type Data = typeof traps;

type Params = { id?: keyof Data };

const trapLink: [string, string] = ["Sample Traps", "rule/sample_traps"];

const TrapPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id, traps);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/trap/" + id}
		topLink={trapLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default TrapPage;
