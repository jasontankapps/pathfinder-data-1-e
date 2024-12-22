import monsters from './subpages/__monster31';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup31Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup31Page;
