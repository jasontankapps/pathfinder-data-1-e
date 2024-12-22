import monsters from './subpages/__monster45';
import MonsterUniqueGroupBasic from './MonsterGroupBasic';

const MonsterUniqueGroup03Page: React.FC<{id: string}> = ({id}) => <MonsterUniqueGroupBasic id={id} info={monsters} />;

export default MonsterUniqueGroup03Page;
