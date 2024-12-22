import monsters from './subpages/__monster36';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup36Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup36Page;
