import monsters from './subpages/__monster32';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup32Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup32Page;
