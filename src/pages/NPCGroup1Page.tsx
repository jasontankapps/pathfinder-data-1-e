import getItem from '../components/getItem';
import npcs from './subpages/__npc1';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Monsters", "main/monsters"], ["All NPCs", "main/npcs"]];

type Data = typeof npcs;

interface NPCProps {
	id: string,
};

const NPCGroup1Page: React.FC<NPCProps> = ({id}) => {

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), npcs);

	return <BasicPage
		pageId={"npc--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		topLink={["All NPCs", "main/npcs"]}
	>{jsx}</BasicPage>;
};

export default NPCGroup1Page;
