import npcs from './subpages/__npc7';
import NPCGroupBasic from './NPCGroupBasic';

const NPCGroup6Page: React.FC<{id: string}> = ({id}) => <NPCGroupBasic id={id} info={npcs} />;

export default NPCGroup6Page;
