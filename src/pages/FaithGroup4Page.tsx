import faiths from './subpages/_GEN_faith4';
import FaithGroupBasic from './FaithGroupBasic';

const FaithGroup4Page: React.FC<{id: string}> = ({id}) => <FaithGroupBasic id={id} info={faiths} />;

export default FaithGroup4Page;
