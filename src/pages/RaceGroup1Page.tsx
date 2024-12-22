import races from './subpages/__race1';
import RaceGroupBasic from './RaceGroupBasic';

const RaceGroup1Page: React.FC<{id: string}> = ({id}) =>
	<RaceGroupBasic id={id} info={races} possiblyUnknown={true} />;

export default RaceGroup1Page;
