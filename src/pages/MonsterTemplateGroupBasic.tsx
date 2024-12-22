import { HierarchyArray } from '../types';
import { GroupProps, BasicGroupPage } from './BasicGroupPage';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Monsters and NPCs", "main/monsters"],
	["Monster Templates", "main/monster_templates"]
];
const topLink = hierarchy[2];

const MonsterTemplateGroupBasic = (props: GroupProps) =>
	<BasicGroupPage {...props} hierarchy={hierarchy} prefix="template" topLink={topLink} />;

export default MonsterTemplateGroupBasic;
