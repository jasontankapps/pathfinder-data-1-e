import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import curses from './subpages/_GEN_oraclecurse';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof curses;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Oracle Curses", "ability/oracle_curses"];

const CursePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id, curses);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/oraclecurse/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default CursePage;
