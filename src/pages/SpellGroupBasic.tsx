import { HierarchyArray } from '../types';
import { GroupProps, BasicGroupPage } from './BasicGroupPage';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Spells", "main/spells"]];

const SpellGroupBasic = (props: GroupProps) =>
	<BasicGroupPage {...props} hierarchy={hierarchy} prefix="spell" />;

export default SpellGroupBasic;
