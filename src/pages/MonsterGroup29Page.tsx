import monsters from './subpages/_GEN_monster29';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup29Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup29Page;
