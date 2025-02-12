import { Hierarchy } from '../types';
import { GroupProps, BasicGroupPage } from './BasicGroupPage';

const topLink: Hierarchy = ["Faiths/Deities", "main/faiths"];

const FaithGroupBasic = (props: GroupProps) =>
	<BasicGroupPage {...props} prefix="faith" topLink={topLink} />;

export default FaithGroupBasic;
