import { useParams } from 'react-router';
import getItem from '../components/getItem';
import curses from './subpages/__oraclecurse';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Oracle", "class/oracle"],
	["Oracle Curses", "ability/oracle_curses"]
];

type Data = typeof curses;

type Params = { id?: keyof Data };

const CursePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, curses);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"oraclecurse--" + id}
		topLink={["Oracle Curses", "ability/oracle_curses"]}
	>{jsx}</BasicPage>;
};

export default CursePage;
