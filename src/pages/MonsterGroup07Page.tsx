import monsters from './subpages/_GEN_monster7';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup07Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup07Page;
