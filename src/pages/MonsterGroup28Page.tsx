import monsters from './subpages/_GEN_monster28';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup28Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup28Page;
