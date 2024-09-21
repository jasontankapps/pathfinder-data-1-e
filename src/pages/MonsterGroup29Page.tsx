import { getGuaranteedItem } from '../components/getItem';
import monsters from '../json/monsters25.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Monsters", "main/monsters"]];

type Data = typeof monsters;

interface MonsterProps {
	id: string,
};

const MonsterGroup29Page: React.FC<MonsterProps> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), monsters);

	return <BasicPage pageId={"monster/" + id} title={title} markdown={markdown} tables={tables} hierarchy={[...hierarchy, ...subhierarchy]} sources={sources} />;
};

export default MonsterGroup29Page;
