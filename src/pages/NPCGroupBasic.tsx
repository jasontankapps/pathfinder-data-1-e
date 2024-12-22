import { Hierarchy, HierarchyArray } from '../types';
import { GroupProps, BasicGroupPage } from './BasicGroupPage';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Monsters", "main/monsters"], ["All NPCs", "main/npcs"]];
const topLink: Hierarchy = ["All NPCs", "main/npcs"];

const NPCGroupBasic = (props: GroupProps) =>
	<BasicGroupPage {...props} hierarchy={hierarchy} topLink={topLink} prefix="npc" />;

export default NPCGroupBasic;
