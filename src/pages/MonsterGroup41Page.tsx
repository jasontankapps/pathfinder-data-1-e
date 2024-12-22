import monsters from './subpages/__monster41';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup41Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup41Page;
