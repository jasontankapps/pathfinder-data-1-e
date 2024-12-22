import monsters from './subpages/__monster2';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup02Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup02Page;
