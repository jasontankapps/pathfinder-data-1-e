import monsters from './subpages/_GEN_monster10';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup10Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup10Page;
