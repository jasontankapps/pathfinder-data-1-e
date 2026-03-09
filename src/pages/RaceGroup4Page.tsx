import races from './subpages/_GEN_race4';
import RaceGroupBasic from './RaceGroupBasic';

const RaceGroup4Page: React.FC<{id: string}> = ({id}) =>
	<RaceGroupBasic id={id} info={races} />;

export default RaceGroup4Page;
