import monsters from './subpages/_GEN_monster2';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup02Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup02Page;
