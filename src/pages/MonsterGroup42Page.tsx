import monsters from './subpages/_GEN_monster42';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup42Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup42Page;
