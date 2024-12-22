import monsters from './subpages/__monster4';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup04Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup04Page;
