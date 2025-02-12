import { Hierarchy } from '../types';
import { GroupProps, BasicGroupPage } from './BasicGroupPage';

const maybe: Hierarchy = ["Traits", "main/traits"];

const TraitGroupBasic = (props: GroupProps) =>
	<BasicGroupPage {...props} maybeTopLink={maybe} prefix="trait" />;

export default TraitGroupBasic;
