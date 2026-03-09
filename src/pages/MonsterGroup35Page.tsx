import monsters from './subpages/_GEN_monster35';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup35Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup35Page;
