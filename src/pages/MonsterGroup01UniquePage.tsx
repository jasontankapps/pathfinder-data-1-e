import getItem from '../components/getItem';
import monsters from '../json/monsters_unique.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main"], ["Monsters", "monsters"]];

type Data = typeof monsters;

const MonsterGroup01Page: React.FC<{id: string}> = ({id}) => {

	const { name: title, description: markdown, tables, sources } = getItem<Data>((id as keyof Data), monsters);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default MonsterGroup01Page;
