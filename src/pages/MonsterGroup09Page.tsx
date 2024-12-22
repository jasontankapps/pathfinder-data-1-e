import monsters from './subpages/__monster9';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup09Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup09Page;
