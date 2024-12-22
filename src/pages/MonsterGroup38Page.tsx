import monsters from './subpages/__monster38';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup38Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup38Page;
