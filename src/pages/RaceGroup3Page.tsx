import races from './subpages/__race3';
import RaceGroupBasic from './RaceGroupBasic';

const RaceGroup3Page: React.FC<{id: string}> = ({id}) =>
	<RaceGroupBasic id={id} info={races} />;

export default RaceGroup3Page;
