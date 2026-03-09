import monsters from './subpages/_GEN_monster40';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup40Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup40Page;
