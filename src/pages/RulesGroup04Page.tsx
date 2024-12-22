import rules from './subpages/__rule4';
import RulesGroupPage from './RulesGroupBasic';

const RulesGroup4Page: React.FC<{id: string}> = ({id}) => <RulesGroupPage id={id} rules={rules} />;

export default RulesGroup4Page;
