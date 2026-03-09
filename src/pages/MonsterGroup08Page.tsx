import monsters from './subpages/_GEN_monster8';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup08Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup08Page;
