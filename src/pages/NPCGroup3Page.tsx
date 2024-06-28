import { getGuaranteedItem } from '../components/getItem';
import npcs from '../json/npcs3.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main"], ["Monsters", "monsters"], ["All NPCs", "npcs"]];

type Data = typeof npcs;

const NPCGroup3Page: React.FC<{id: string}> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), npcs);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy: [...hierarchy, ...subhierarchy], sources}} />;
};

export default NPCGroup3Page;
