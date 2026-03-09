import monsters from './subpages/_GEN_monster21';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup21Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup21Page;
