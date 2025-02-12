import { Hierarchy } from '../types';
import { GroupProps, BasicGroupPage } from './BasicGroupPage';

const topLink: Hierarchy = ["Wondrous Items", "main/magic_wondrous"];

const MagicWondrousGroupBasic = (props: GroupProps) =>
	<BasicGroupPage {...props} prefix="magic-wondrous" topLink={topLink} />;

export default MagicWondrousGroupBasic;
