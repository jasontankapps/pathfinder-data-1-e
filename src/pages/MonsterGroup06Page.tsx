import monsters from './subpages/_GEN_monster6';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup06Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup06Page;
