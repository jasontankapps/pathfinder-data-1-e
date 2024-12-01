import { getGuaranteedItem } from '../components/getItem';
import npcs from './subpages/__npc2';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Monsters", "main/monsters"], ["All NPCs", "main/npcs"]];

type Data = typeof npcs;

interface NPCProps {
	id: string,
};

const NPCGroup2Page: React.FC<NPCProps> = ({id}) => {

	const { title, jsx, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), npcs);

	return <BasicPage
		pageId={"npc--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		topLink={["All NPCs", "main/npcs"]}
	>{jsx}</BasicPage>;
};

export default NPCGroup2Page;
