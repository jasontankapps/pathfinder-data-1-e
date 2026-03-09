import npcs from './subpages/_GEN_npc6';
import NPCGroupBasic from './NPCGroupBasic';

const NPCGroup6Page: React.FC<{id: string}> = ({id}) => <NPCGroupBasic id={id} info={npcs} />;

export default NPCGroup6Page;
