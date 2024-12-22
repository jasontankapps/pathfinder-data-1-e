import monsters from './subpages/__monster37';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup37Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup37Page;
