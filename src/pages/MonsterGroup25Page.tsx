import monsters from './subpages/_GEN_monster25';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup25Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup25Page;
