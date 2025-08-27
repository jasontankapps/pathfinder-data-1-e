import { Hierarchy } from '../types';
import { GroupProps, BasicGroupPage } from './BasicGroupPage';

const topLink: Hierarchy = ["Monster Templates", "main/monster_templates"];

const MonsterTemplateGroupBasic = (props: GroupProps) =>
	<BasicGroupPage {...props} prefix="template" topLink={topLink} className="hasStatblock simple" />;

export default MonsterTemplateGroupBasic;
