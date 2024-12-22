import monsters from './subpages/__monster20';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup20Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup20Page;
