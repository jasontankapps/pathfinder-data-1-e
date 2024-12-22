import monsters from './subpages/__monster35';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup35Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup35Page;
