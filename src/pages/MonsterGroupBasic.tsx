import { GroupProps, BasicGroupPage } from './BasicGroupPage';

const MonsterGroupBasic = (props: GroupProps) =>
	<BasicGroupPage {...props} prefix="monster" className="hasStatblock simple" />;

export default MonsterGroupBasic;
