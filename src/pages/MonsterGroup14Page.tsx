import monsters from './subpages/_GEN_monster14';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup14Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup14Page;
