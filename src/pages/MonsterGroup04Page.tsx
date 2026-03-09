import monsters from './subpages/_GEN_monster4';
import MainGroupBasic from './MonsterGroupBasic';

const MonsterGroup04Page: React.FC<{id: string}> = ({id}) => <MainGroupBasic id={id} info={monsters} />;

export default MonsterGroup04Page;
