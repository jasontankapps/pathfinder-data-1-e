import { HierarchyArray } from '../types';
import { GroupProps, BasicGroupPage } from './BasicGroupPage';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Magic Items", "main/magic"], ["Wondrous Items", "main/magic_wondrous"]];
const topLink = hierarchy[2];

const MagicWondrousGroupBasic = (props: GroupProps) =>
	<BasicGroupPage {...props} hierarchy={hierarchy} prefix="magic-wondrous" topLink={topLink} />;

export default MagicWondrousGroupBasic;
