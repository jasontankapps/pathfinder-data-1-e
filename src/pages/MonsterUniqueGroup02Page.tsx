import monsters from './subpages/__monster44';
import MonsterUniqueGroupBasic from './MonsterGroupBasic';

const MonsterUniqueGroup02Page: React.FC<{id: string}> = ({id}) => <MonsterUniqueGroupBasic id={id} info={monsters} />;

export default MonsterUniqueGroup02Page;
