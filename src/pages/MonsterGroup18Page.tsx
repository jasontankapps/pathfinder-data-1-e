import monsters from './subpages/__monster18';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup18Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup18Page;
