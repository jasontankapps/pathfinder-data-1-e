import monsters from './subpages/__monster5';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup05Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup05Page;
