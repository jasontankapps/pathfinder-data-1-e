import monsters from './subpages/_GEN_monster41';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup41Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup41Page;
