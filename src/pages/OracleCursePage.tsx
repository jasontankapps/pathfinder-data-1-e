import { useParams } from 'react-router';
import getItem from '../components/getItem';
import curses from '../json/class_ability_curses.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Classes", "classes"],
	["Oracle", "class/oracle"],
	["Oracle Curses", "ability/oracle_curses"]
];

type Data = typeof curses;

type Params = { id?: keyof Data };

const CursePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, curses);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default CursePage;
