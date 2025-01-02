import { HierarchyArray } from '../types';
import { GroupProps, BasicGroupPage } from './BasicGroupPage';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Monsters", "main/monsters"]];

const MonsterGroupBasic = (props: GroupProps) =>
	<BasicGroupPage {...props} hierarchy={hierarchy} prefix="monster" className="hasStatblock simple" />;

export default MonsterGroupBasic;
