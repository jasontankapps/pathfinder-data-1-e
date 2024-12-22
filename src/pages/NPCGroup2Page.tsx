import npcs from './subpages/__npc2';
import NPCGroupBasic from './NPCGroupBasic';

const NPCGroup2Page: React.FC<{id: string}> = ({id}) => <NPCGroupBasic id={id} info={npcs} />;

export default NPCGroup2Page;
