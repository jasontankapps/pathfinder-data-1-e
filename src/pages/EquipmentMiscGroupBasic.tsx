import { HierarchyArray } from '../types';
import { GroupProps, BasicGroupPage } from './BasicGroupPage';

const hierarchy: HierarchyArray = [ ["Main", "main/main"], ["Equipment", "main/equipment"] ];
const topLink = hierarchy[1];

const EquipmentMiscGroupBasic = (props: GroupProps) =>
	<BasicGroupPage {...props} hierarchy={hierarchy} prefix="eq-misc" topLink={topLink} />;

export default EquipmentMiscGroupBasic;
