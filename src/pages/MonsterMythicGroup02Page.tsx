import monsters from './subpages/_GEN_monster48';
import MonsterMythicGroupBasic from './MonsterGroupBasic';

const MonsterMythicGroup02Page: React.FC<{id: string}> = ({id}) => <MonsterMythicGroupBasic id={id} info={monsters} />;

export default MonsterMythicGroup02Page;
