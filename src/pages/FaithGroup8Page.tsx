import faiths from './subpages/_GEN_faith8';
import FaithGroupBasic from './FaithGroupBasic';

const FaithGroup8Page: React.FC<{id: string}> = ({id}) => <FaithGroupBasic id={id} info={faiths} />;

export default FaithGroup8Page;
