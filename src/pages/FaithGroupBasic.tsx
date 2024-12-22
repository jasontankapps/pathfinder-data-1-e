import { Hierarchy, HierarchyArray } from '../types';
import { GroupProps, BasicGroupPage } from './BasicGroupPage';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Faiths", "main/faiths"]];
const topLink: Hierarchy = ["Faiths/Deities", "main/faiths"];

const FaithGroupBasic = (props: GroupProps) =>
	<BasicGroupPage {...props} hierarchy={hierarchy} prefix="faith" topLink={topLink} />;

export default FaithGroupBasic;
