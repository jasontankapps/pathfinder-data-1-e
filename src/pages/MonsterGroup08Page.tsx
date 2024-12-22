import monsters from './subpages/__monster8';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup08Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup08Page;
