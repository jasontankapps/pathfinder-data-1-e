import monsters from './subpages/__monster29';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup29Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup29Page;
