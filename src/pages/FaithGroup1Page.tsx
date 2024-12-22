import faiths from './subpages/__faith1';
import FaithGroupBasic from './FaithGroupBasic';

const FaithGroup1Page: React.FC<{id: string}> = ({id}) =>
	<FaithGroupBasic id={id} info={faiths} possiblyUnknown={true} />;

export default FaithGroup1Page;
