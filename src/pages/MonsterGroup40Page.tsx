import monsters from './subpages/__monster40';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup40Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup40Page;
