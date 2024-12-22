import rules from './subpages/__rule1';
import RulesGroupPage from './RulesGroupBasic';

const RulesGroup1Page: React.FC<{id: string}> = ({id}) => <RulesGroupPage id={id} rules={rules} />;

export default RulesGroup1Page;
