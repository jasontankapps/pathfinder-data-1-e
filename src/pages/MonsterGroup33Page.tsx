import monsters from './subpages/__monster33';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup33Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup33Page;
