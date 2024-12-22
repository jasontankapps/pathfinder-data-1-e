import npcs from './subpages/__npc5';
import NPCGroupBasic from './NPCGroupBasic';

const NPCGroup5Page: React.FC<{id: string}> = ({id}) => <NPCGroupBasic id={id} info={npcs} />;

export default NPCGroup5Page;
