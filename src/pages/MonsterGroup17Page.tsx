import monsters from './subpages/__monster17';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup17Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup17Page;
