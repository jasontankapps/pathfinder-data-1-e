import monsters from './subpages/_GEN_monster24';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup24Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup24Page;
