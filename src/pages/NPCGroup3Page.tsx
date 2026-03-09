import npcs from './subpages/_GEN_npc3';
import NPCGroupBasic from './NPCGroupBasic';

const NPCGroup3Page: React.FC<{id: string}> = ({id}) => <NPCGroupBasic id={id} info={npcs} />;

export default NPCGroup3Page;
