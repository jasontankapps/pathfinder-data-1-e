import getItem from '../components/getItem';
import npcs from '../json/npcs.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Monsters", "main/monsters"], ["All NPCs", "main/npcs"]];

type Data = typeof npcs;

interface NPCProps {
	id: string,
};

const NPCGroup1Page: React.FC<NPCProps> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), npcs);

	return <BasicPage pageId={"npc--" + id} title={title} markdown={markdown} tables={tables} hierarchy={[...hierarchy, ...subhierarchy]} sources={sources} />;
};

export default NPCGroup1Page;
