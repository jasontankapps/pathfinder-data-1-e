import monsters from './subpages/_GEN_monster1';
import MonsterGroupBasic from './MonsterGroupBasic';

const MonsterGroup01Page: React.FC<{id: string}> = ({id}) =>
	<MonsterGroupBasic id={id} info={monsters} possiblyUnknown={true} />;

export default MonsterGroup01Page;
