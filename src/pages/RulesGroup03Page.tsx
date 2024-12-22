import rules from './subpages/__rule3';
import RulesGroupPage from './RulesGroupBasic';

const RulesGroup3Page: React.FC<{id: string}> = ({id}) => <RulesGroupPage id={id} rules={rules} />;

export default RulesGroup3Page;
