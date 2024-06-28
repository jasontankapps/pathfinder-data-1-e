import { getGuaranteedItem } from '../components/getItem';
import monsters from '../json/monsters20.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main"], ["Monsters", "monsters"]];

type Data = typeof monsters;

const MonsterGroup24Page: React.FC<{id: string}> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), monsters);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy: [...hierarchy, ...subhierarchy], sources}} />;
};

export default MonsterGroup24Page;
