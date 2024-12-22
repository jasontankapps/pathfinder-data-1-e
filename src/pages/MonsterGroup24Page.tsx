import monsters from './subpages/__monster24';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup24Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup24Page;
