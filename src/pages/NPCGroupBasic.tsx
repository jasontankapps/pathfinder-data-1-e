import { Hierarchy } from '../types';
import { GroupProps, BasicGroupPage } from './BasicGroupPage';

const topLink: Hierarchy = ["All NPCs", "main/npcs"];

const NPCGroupBasic = (props: GroupProps) =>
	<BasicGroupPage {...props} topLink={topLink} prefix="npc" className="hasStatblock simple" />;

export default NPCGroupBasic;
