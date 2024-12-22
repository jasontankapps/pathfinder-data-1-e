import monsters from './subpages/__monster30';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup30Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup30Page;
