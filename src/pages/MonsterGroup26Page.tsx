import monsters from './subpages/__monster26';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup26Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup26Page;
