import npcs from './subpages/_GEN_npc2';
import NPCGroupBasic from './NPCGroupBasic';

const NPCGroup2Page: React.FC<{id: string}> = ({id}) => <NPCGroupBasic id={id} info={npcs} />;

export default NPCGroup2Page;
