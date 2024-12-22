import monsters from './subpages/__monster15';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup15Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup15Page;
