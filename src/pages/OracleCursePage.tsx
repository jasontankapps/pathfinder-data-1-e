import { useParams } from 'wouter';
import getItem from '../components/getItem';
import curses from './subpages/__oraclecurse';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof curses;

type Params = { id?: keyof Data };

const CursePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, curses);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/oraclecurse/" + id}
		topLink={["Oracle Curses", "ability/oracle_curses"]}
	>{jsx}</BasicPage>;
};

export default CursePage;
