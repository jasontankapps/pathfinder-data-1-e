import rules from './subpages/__rule10';
import RulesGroupPage from './RulesGroupBasic';

const RulesGroup10Page: React.FC<{id: string}> = ({id}) => <RulesGroupPage id={id} rules={rules} />;

export default RulesGroup10Page;
