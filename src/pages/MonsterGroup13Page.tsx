import monsters from './subpages/_GEN_monster13';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup13Page: React.FC<{id: string}> = ({id}) => <MonsterGroupBasic id={id} info={monsters} />;

export default MonsterGroup13Page;
