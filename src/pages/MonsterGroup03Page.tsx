import monsters from './subpages/__monster3';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup03Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup03Page;
