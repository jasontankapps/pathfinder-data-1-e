import monsters from './subpages/_GEN_monster12';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup12Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup12Page;
