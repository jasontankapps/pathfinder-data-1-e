import monsters from './subpages/__monster22';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup22Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup22Page;
