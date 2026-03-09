import npcs from './subpages/_GEN_npc4';
import NPCGroupBasic from './NPCGroupBasic';

const NPCGroup4Page: React.FC<{id: string}> = ({id}) => <NPCGroupBasic id={id} info={npcs} />;

export default NPCGroup4Page;
