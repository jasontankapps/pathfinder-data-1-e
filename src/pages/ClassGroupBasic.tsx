import { HierarchyArray } from '../types';
import { GroupProps, BasicGroupPage } from './BasicGroupPage';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Classes", "main/classes"]];

const ClassGroup8Page = (props: GroupProps) =>
	<BasicGroupPage {...props} hierarchy={hierarchy} prefix="class" />;

export default ClassGroup8Page;
