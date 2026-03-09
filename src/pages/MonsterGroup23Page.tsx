import monsters from './subpages/_GEN_monster23';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup23Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup23Page;
