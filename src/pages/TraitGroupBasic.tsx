import { Hierarchy, HierarchyArray } from '../types';
import { GroupProps, BasicGroupPage } from './BasicGroupPage';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Traits", "main/traits"]];
const maybe: Hierarchy = ["Traits", "main/traits"];

const TraitGroupBasic = (props: GroupProps) =>
	<BasicGroupPage {...props} hierarchy={hierarchy} maybeTopLink={maybe} prefix="trait" />;

export default TraitGroupBasic;
