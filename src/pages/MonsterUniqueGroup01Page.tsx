import monsters from './subpages/__monster43';
import MonsterUniqueGroupBasic from './MonsterGroupBasic';

const MonsterUniqueGroup01Page: React.FC<{id: string}> = ({id}) => <MonsterUniqueGroupBasic id={id} info={monsters} />;

export default MonsterUniqueGroup01Page;
