import monsters from './subpages/_GEN_monster47';
import MonsterMythicGroupBasic from './MonsterGroupBasic';

const MonsterMythicGroup01Page: React.FC<{id: string}> = ({id}) => <MonsterMythicGroupBasic id={id} info={monsters} />;

export default MonsterMythicGroup01Page;
