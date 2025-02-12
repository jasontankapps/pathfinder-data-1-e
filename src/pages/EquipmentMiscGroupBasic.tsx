import { Hierarchy } from '../types';
import { GroupProps, BasicGroupPage } from './BasicGroupPage';

const topLink: Hierarchy = ["Equipment", "main/equipment"];

const EquipmentMiscGroupBasic = (props: GroupProps) =>
	<BasicGroupPage {...props} prefix="eq-misc" topLink={topLink} />;

export default EquipmentMiscGroupBasic;
