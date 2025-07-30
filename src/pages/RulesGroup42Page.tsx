import rules from './subpages/__rule42';
import RulesGroupPage from './RulesGroupBasic';

const RulesGroup42Page: React.FC<{id: string}> = ({id}) => <RulesGroupPage id={id} rules={rules} />;

export default RulesGroup42Page;
