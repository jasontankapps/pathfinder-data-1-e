import races from './subpages/__race2';
import RaceGroupBasic from './RaceGroupBasic';

const RaceGroup2Page: React.FC<{id: string}> = ({id}) =>
	<RaceGroupBasic id={id} info={races} />;

export default RaceGroup2Page;
