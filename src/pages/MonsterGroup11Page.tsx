import monsters from './subpages/__monster11';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup11Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup11Page;
