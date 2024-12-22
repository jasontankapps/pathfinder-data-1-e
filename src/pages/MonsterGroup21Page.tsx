import monsters from './subpages/__monster21';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup21Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup21Page;
