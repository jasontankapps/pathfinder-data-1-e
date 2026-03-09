import faiths from './subpages/_GEN_faith1';
import FaithGroupBasic from './FaithGroupBasic';

const FaithGroup1Page: React.FC<{id: string}> = ({id}) =>
	<FaithGroupBasic id={id} info={faiths} possiblyUnknown={true} />;

export default FaithGroup1Page;
