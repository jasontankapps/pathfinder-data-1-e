import npcs from './subpages/__npc1';
import NPCGroupBasic from './NPCGroupBasic';

const NPCGroup1Page: React.FC<{id: string}> = ({id}) =>
	<NPCGroupBasic id={id} info={npcs} possiblyUnknown={true} />;

export default NPCGroup1Page;
