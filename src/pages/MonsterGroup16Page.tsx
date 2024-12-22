import monsters from './subpages/__monster16';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup16Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup16Page;
