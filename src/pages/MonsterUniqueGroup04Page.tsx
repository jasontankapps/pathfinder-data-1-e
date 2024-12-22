import monsters from './subpages/__monster46';
import MonsterUniqueGroupBasic from './MonsterGroupBasic';

const MonsterUniqueGroup04Page: React.FC<{id: string}> = ({id}) => <MonsterUniqueGroupBasic id={id} info={monsters} />;

export default MonsterUniqueGroup04Page;
