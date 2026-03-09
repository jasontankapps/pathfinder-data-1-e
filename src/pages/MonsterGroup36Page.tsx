import monsters from './subpages/_GEN_monster36';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup36Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup36Page;
