import monsters from './subpages/__monster27';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup27Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup27Page;
