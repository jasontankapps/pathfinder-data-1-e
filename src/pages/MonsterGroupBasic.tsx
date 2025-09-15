import { GroupProps, BasicGroupPage } from './BasicGroupPage';
import { Hierarchy } from '../types';

const maybeTopLink: Hierarchy = ["Reading a Stat Block", "rule/stat_block"];

const MonsterGroupBasic = (props: GroupProps) =>
	<BasicGroupPage maybeTopLink={maybeTopLink} {...props} prefix="monster" className="hasStatblock simple" />;

export default MonsterGroupBasic;
