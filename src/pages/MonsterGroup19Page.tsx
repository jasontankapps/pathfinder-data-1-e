import monsters from './subpages/_GEN_monster19';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup19Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup19Page;
