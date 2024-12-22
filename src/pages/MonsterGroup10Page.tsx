import monsters from './subpages/__monster10';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup10Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup10Page;
