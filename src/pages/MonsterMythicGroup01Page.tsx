import monsters from './subpages/__monster47';
import MonsterMythicGroupBasic from './MonsterGroupBasic';

const MonsterMythicGroup01Page: React.FC<{id: string}> = ({id}) => <MonsterMythicGroupBasic id={id} info={monsters} />;

export default MonsterMythicGroup01Page;
