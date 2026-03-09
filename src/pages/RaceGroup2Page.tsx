import races from './subpages/_GEN_race2';
import RaceGroupBasic from './RaceGroupBasic';

const RaceGroup2Page: React.FC<{id: string}> = ({id}) =>
	<RaceGroupBasic id={id} info={races} />;

export default RaceGroup2Page;
