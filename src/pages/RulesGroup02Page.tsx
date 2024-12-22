import rules from './subpages/__rule2';
import RulesGroupPage from './RulesGroupBasic';

const RulesGroup2Page: React.FC<{id: string}> = ({id}) => <RulesGroupPage id={id} rules={rules} />;

export default RulesGroup2Page;
