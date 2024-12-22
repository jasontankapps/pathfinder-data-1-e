import monsters from './subpages/__monster13';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup13Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup13Page;
