import npcs from './subpages/__npc4';
import NPCGroupBasic from './NPCGroupBasic';

const NPCGroup4Page: React.FC<{id: string}> = ({id}) => <NPCGroupBasic id={id} info={npcs} />;

export default NPCGroup4Page;
