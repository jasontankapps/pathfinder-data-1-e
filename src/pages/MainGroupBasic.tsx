import { HierarchyArray } from '../types';
import { GroupProps, BasicGroupPage } from './BasicGroupPage';

const hierarchy: HierarchyArray = [];

const MainGroupBasic = (props: GroupProps) =>
	<BasicGroupPage {...props} hierarchy={hierarchy} prefix="main" className="main" />;

export default MainGroupBasic;
